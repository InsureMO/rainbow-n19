import {Modifier, ModifiersValue} from '../Java';
import {IllegalArgumentException} from '../JavaExceptions';
import {
	ClassHelper,
	ClassNode,
	ConstructorNode,
	FieldNode,
	MethodNode,
	Parameter,
	PropertyNode
} from '../OrgCodehausGroovyAst';
import {Expression, MapExpression, SpreadExpression, TupleExpression} from '../OrgCodehausGroovyAstExpr';
import {Statement} from '../OrgCodehausGroovyAstStmt';
import {BeanUtils, GeneralUtils} from '../OrgCodehausGroovyAstTools';
import {Opcodes} from '../OrgObjectwebAsm';
import {Optional} from '../TsAddon';
import {AnnotatedNodeUtils} from './AnnotatedNodeUtils';

export class ClassNodeUtils {
	private constructor() {
		// avoid extend
	}

	/**
	 * Formats a type name into a human-readable version. For arrays, appends "[]" to the formatted
	 * type name of the component. For unit class nodes, uses the class node name.
	 *
	 * @param cNode the type to format
	 * @return a human-readable version of the type name (java.lang.String[] for example)
	 */
	static formatTypeName(cNode: ClassNode): string {
		if (cNode.isArray) {
			let it = cNode;
			let dim = 0;
			while (it.isArray) {
				dim++;
				it = it.componentType;
			}
			let sb = it.name;
			for (let i = 0; i < dim; i++) {
				sb = sb + '[]';
			}
			return sb;
		}
		return cNode.name;
	}

	/**
	 * Return an existing method if one exists or else create a new method and mark it as {@code @Generated}.
	 *
	 * @see ClassNode#addMethod(String, int, ClassNode, Parameter[], ClassNode[], Statement)
	 */
	static addGeneratedMethod(cNode: ClassNode, nameOrMethod: string | MethodNode,
	                          modifiersOrSkipChecks?: ModifiersValue | boolean,
	                          returnType?: ClassNode,
	                          parameters?: Array<Parameter>,
	                          exceptions?: Array<ClassNode>,
	                          code?: Statement): MethodNode {
		if (nameOrMethod instanceof MethodNode) {
			cNode.addMethod(nameOrMethod);
			AnnotatedNodeUtils.markAsGenerated(cNode, nameOrMethod, modifiersOrSkipChecks as boolean);
		} else {
			const existing = cNode.getDeclaredMethod(nameOrMethod, parameters);
			if (existing != null) {
				return existing;
			}
			const result = new MethodNode(nameOrMethod, modifiersOrSkipChecks as ModifiersValue, returnType, parameters, exceptions, code);
			ClassNodeUtils.addGeneratedMethod(cNode, result);
			return result;
		}
	}

	/**
	 * Add an inner class that is marked as {@code @Generated}.
	 *
	 * @see org.codehaus.groovy.ast.ModuleNode#addClass(ClassNode)
	 */
	static addGeneratedInnerClass(cNode: ClassNode, inner: ClassNode): void {
		cNode.module.addClass(inner);
		AnnotatedNodeUtils.markAsGenerated(cNode, inner);
	}

	/**
	 * Add a method that is marked as {@code @Generated}.
	 *
	 * @see ClassNode#addConstructor(int, Parameter[], ClassNode[], Statement)
	 */
	static addGeneratedConstructor(classNode: ClassNode, modifiersOrConstructorNode: ModifiersValue | ConstructorNode,
	                               parameters?: Array<Parameter>, exceptions?: Array<ClassNode>, code?: Statement): ConstructorNode {
		if (modifiersOrConstructorNode instanceof ConstructorNode) {
			classNode.addConstructor(modifiersOrConstructorNode);
			AnnotatedNodeUtils.markAsGenerated(classNode, modifiersOrConstructorNode);
			return modifiersOrConstructorNode;
		} else {
			const consNode = classNode.addConstructor(modifiersOrConstructorNode, parameters, exceptions, code);
			AnnotatedNodeUtils.markAsGenerated(classNode, consNode);
			return consNode;
		}
	}

	/**
	 * Add methods from the super class.
	 *
	 * @param cNode The ClassNode
	 * @return A map of methods
	 */
	static getDeclaredMethodsFromSuper(cNode: ClassNode): Map<string, MethodNode> {
		const parent = cNode.superclass;
		if (parent == null) {
			return new Map();
		}
		return parent.declaredMethodsMap;
	}

	/**
	 * Adds methods from all interfaces. Existing entries in the methods map
	 * take precedence. Methods from interfaces visited early take precedence
	 * over later ones.
	 *
	 * @param cNode The ClassNode
	 * @param methodsMap A map of existing methods to alter
	 */
	static addDeclaredMethodsFromInterfaces(cNode: ClassNode, methodsMap: Map<string, MethodNode>): void {
		for (const interfaceClass of cNode.interfaces) {
			const declaredMethods = interfaceClass.declaredMethodsMap;
			for (const [key, value] of declaredMethods.entries()) {
				if (value.declaringClass.isInterface && (value.modifiers & Opcodes.ACC_SYNTHETIC) == 0) {
					if (!methodsMap.has(key)) {
						methodsMap.set(key, value);
					}
				}
			}
		}
	}

	/**
	 * Gets methods from all interfaces. Methods from interfaces visited early
	 * take precedence over later ones.
	 *
	 * @param cNode The ClassNode
	 * @return A map of methods
	 */
	static getDeclaredMethodsFromInterfaces(cNode: ClassNode): Map<string, MethodNode> {
		const methodsMap: Map<string, MethodNode> = new Map();
		ClassNodeUtils.addDeclaredMethodsFromInterfaces(cNode, methodsMap);
		return methodsMap;
	}

	/**
	 * Adds methods from interfaces and parent interfaces. Existing entries in the methods map take precedence.
	 * Methods from interfaces visited early take precedence over later ones.
	 *
	 * @param cNode The ClassNode
	 * @param methodsMap A map of existing methods to alter
	 */
	static addDeclaredMethodsFromAllInterfaces(cNode: ClassNode, methodsMap: Map<string, MethodNode>): void {
		const cnInterfaces = cNode.interfaces;
		let parent = cNode.superclass;
		while (parent != null && !ClassHelper.isObjectType(parent)) {
			const interfaces = parent.interfaces;
			for (const interfaceClass of interfaces) {
				if (!cnInterfaces.some(cnInterface => cnInterface.equals(interfaceClass))) {
					for (const [key, value] of interfaceClass.declaredMethodsMap) {
						methodsMap.set(key, value);
					}
				}
			}
			parent = parent.superclass;
		}
	}

	/**
	 * Returns true if the given method has a possibly matching static method with the given name and arguments.
	 * Handles default arguments and optionally spread expressions.
	 *
	 * @param cNode     the ClassNode of interest
	 * @param name      the name of the method of interest
	 * @param args the arguments to match against
	 * @param trySpread whether to try to account for SpreadExpressions within the arguments
	 * @return {@code true} if a matching method was found.
	 */
	static hasPossibleStaticMethod(cNode: ClassNode, name: string, args: Expression, trySpread: boolean): boolean {
		let count = 0;
		let foundSpread = false;
		if (args instanceof TupleExpression) {
			for (const arg of args.expressions) {
				if (arg instanceof SpreadExpression) {
					foundSpread = true;
				} else {
					count += 1;
				}
			}
		} else if (args instanceof MapExpression) {
			count = 1;
		}

		for (const method of cNode.getMethods(name)) {
			if (method.isStatic) {
				const parameters = method.parameters;
				// do fuzzy match for spread case: count will be number of non-spread args
				if (trySpread && foundSpread && parameters.length >= count) {
					return true;
				}

				if (parameters.length == count) {
					return true;
				}

				// handle varargs case
				if (parameters.length > 0 && parameters[parameters.length - 1].type.isArray) {
					if (count >= parameters.length - 1) {
						return true;
					}
					// fuzzy match any spread to a varargs
					if (trySpread && foundSpread) {
						return true;
					}
				}

				// handle parameters with default values
				let nonDefaultParameters = 0;
				for (const parameter of parameters) {
					if (!parameter.hasInitialExpression()) {
						nonDefaultParameters += 1;
					}
				}

				if (count < parameters.length && nonDefaultParameters <= count) {
					return true;
				}
				// TODO COPY FROM GROOVY: Handle spread with nonDefaultParams?
			}
		}

		// GROOVY-11104: generated method
		if (cNode.isPrimaryClassNode) {
			for (const pNode of cNode.properties) {
				if (pNode.getterNameOrDefault === name) {
					return pNode.isStatic;
				}
				if (pNode.setterNameOrDefault === name) {
					return pNode.isStatic && !Modifier.isFinal(pNode.modifiers);
				}
			}
		}

		return false;
	}

	/**
	 * Return true if we have a static accessor
	 */
	static hasPossibleStaticProperty(cNode: ClassNode, methodName: string): boolean {
		// assume explicit static method call checked first so we can assume a simple check here
		if (!methodName.startsWith('get') && !methodName.startsWith('is')) {
			return false;
		}
		const propName = ClassNodeUtils.getPropNameForAccessor(methodName);
		const pNode = ClassNodeUtils.getStaticProperty(cNode, propName);
		return pNode != null && (methodName.startsWith('get') || ClassHelper.isPrimitiveBoolean(pNode.type));
	}

	/**
	 * Returns the property name, e.g. age, given an accessor name, e.g. getAge.
	 * Returns the original if a valid prefix cannot be removed.
	 *
	 * @param accessorName the accessor name of interest, e.g. getAge
	 * @return the property name, e.g. age, or original if not a valid property accessor name
	 */
	static getPropNameForAccessor(accessorName: string): string {
		if (!ClassNodeUtils.isValidAccessorName(accessorName)) {
			return accessorName;
		}
		const prefixLength = accessorName.startsWith('is') ? 2 : 3;
		return accessorName.charAt(prefixLength).toLowerCase() + accessorName.substring(prefixLength + 1);
	}

	/**
	 * Detect whether the given accessor name starts with "get", "set" or "is" followed by at least one character.
	 *
	 * @param accessorName the accessor name of interest, e.g. getAge
	 * @return true if a valid prefix is found
	 */
	static isValidAccessorName(accessorName: string): boolean {
		if (accessorName.startsWith('get') || accessorName.startsWith('is') || accessorName.startsWith('set')) {
			const prefixLength = accessorName.startsWith('is') ? 2 : 3;
			return accessorName.length > prefixLength;
		}
		return false;
	}

	static hasStaticProperty(cNode: ClassNode, propName: string): boolean {
		let found = ClassNodeUtils.getStaticProperty(cNode, propName);
		if (found == null) {
			found = ClassNodeUtils.getStaticProperty(cNode, BeanUtils.decapitalize(propName));
		}
		return found != null;
	}

	/**
	 * Detect whether a static property with the given name is within the class
	 * or a super class.
	 *
	 * @param cNode the ClassNode of interest
	 * @param propName the property name
	 * @return the static property if found or else null
	 */
	static getStaticProperty(cNode: ClassNode, propName: string): Optional<PropertyNode> {
		let classNode = cNode;
		while (classNode != null) {
			for (const pn of classNode.properties) {
				if (pn.name === propName && pn.isStatic) {
					return pn;
				}
			}
			classNode = classNode.superclass;
		}
		return null;
	}

	/**
	 * Detect whether a given ClassNode is an inner class (non-static).
	 *
	 * @param cNode the ClassNode of interest
	 * @return true if the given node is a (non-static) inner class, else false
	 */
	static isInnerClass(cNode: ClassNode): boolean {
		return cNode.outerClass != null && !Modifier.isStatic(cNode.modifiers);
	}

	private static checkArrayType(clazz: ClassNode): void {
		if (null == clazz) {
			throw new IllegalArgumentException('clazz can not be null');
		}

		if (!clazz.isArray) {
			throw new IllegalArgumentException(clazz.name + ' is not array type');
		}
	}

	static dimension(clazz: ClassNode): number {
		ClassNodeUtils.checkArrayType(clazz);

		let result = 0;
		while (clazz.isArray) {
			result++;
			clazz = clazz.componentType;
		}
		return result;
	}

	static elementType(clazz: ClassNode): ClassNode {
		ClassNodeUtils.checkArrayType(clazz);

		while (clazz.isArray) {
			clazz = clazz.componentType;
		}

		return clazz;
	}

	/**
	 * Check if the source ClassNode is compatible with the target ClassNode
	 */
	static isCompatibleWith(source: ClassNode, target: ClassNode): boolean {
		if (source.equals(target)) return true;

		if (source.isArray && target.isArray && ClassNodeUtils.dimension(source) == ClassNodeUtils.dimension(target)) {
			source = ClassNodeUtils.elementType(source);
			target = ClassNodeUtils.elementType(target);
		}

		return !ClassHelper.isPrimitiveType(source) && !ClassHelper.isPrimitiveType(target)
			&& (source.isDerivedFrom(target) || source.implementsInterface(target));
	}

	static hasNoArgConstructor(cNode: ClassNode): boolean {
		const constructors = cNode.declaredConstructors;
		for (const next of constructors) {
			if (next.parameters.length == 0) {
				return true;
			}
		}
		return false;
	}

	/**
	 * Determine if an explicit (non-generated) constructor is in the class.
	 *
	 * @param xform if non-null, add an error if an explicit constructor is found
	 * @param cNode the type of the containing class
	 * @return true if an explicit (non-generated) constructor was found
	 */
	static hasExplicitConstructor(xform: AbstractASTTransformation, cNode: ClassNode): boolean {
		const declaredConstructors = cNode.declaredConstructors;
		for (const constructorNode of declaredConstructors) {
			// allow constructors added by other transforms if flagged as Generated
			if (AnnotatedNodeUtils.isGenerated(constructorNode)) {
				continue;
			}
			if (xform != null) {
				xform.addError('Error during ' + xform.annotationName +
					' processing. Explicit constructors not allowed for class: ' +
					cNode.nameWithoutPackage, constructorNode);
			}
			return true;
		}
		return false;
	}

	/**
	 * Determine if the given ClassNode values have the same package name.
	 *
	 * @param first a ClassNode
	 * @param second a ClassNode
	 * @return true if both given nodes have the same package name
	 * @throws NullPointerException if either of the given nodes are null
	 */
	static samePackageName(first: ClassNode, second: ClassNode): boolean {
		return `${first.packageName ?? ''}` === `${second.packageName ?? ''}`;
	}

	/**
	 * Searches the class for a field that matches specified name.
	 */
	static getField(classNode: ClassNode, fieldName: string, test?: (node: FieldNode) => boolean): Optional<FieldNode> {
		if (test == null) {
			return ClassNodeUtils.getField(classNode, fieldName, _node => true);
		} else {
			const todo = [classNode];
			const done: Array<ClassNode> = [];
			let next: ClassNode;

			while ((next = todo.shift()) != null) {
				if (done.includes(next)) {
					done.push(next);
					const fieldNode = next.getDeclaredField(fieldName);
					if (fieldNode != null && test(fieldNode))
						return fieldNode;

					todo.push(...next.interfaces);
					const superType = next.superclass;
					if (superType != null) {
						todo.push(superType);
					}
				}
			}

			return null;
		}
	}

	static isSubtype(maybeSuperclassOrInterface: ClassNode, candidateChild: ClassNode): boolean {
		return maybeSuperclassOrInterface.isInterface || candidateChild.isInterface
			? GeneralUtils.isOrImplements(candidateChild, maybeSuperclassOrInterface)
			: candidateChild.isDerivedFrom(maybeSuperclassOrInterface);
	}
}
