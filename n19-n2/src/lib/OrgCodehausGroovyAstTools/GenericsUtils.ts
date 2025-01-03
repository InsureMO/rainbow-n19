import {IClass} from '../Java';
import {GroovyBugError} from '../OrgCodehausGroovy';
import {
	ASTNode,
	ClassHelper,
	ClassNode,
	GenericsType,
	MethodNode,
	ModuleNode,
	Parameter
} from '../OrgCodehausGroovyAst';
import {DeclarationExpression} from '../OrgCodehausGroovyAstExpr';
import {EmptyStatement, ExpressionStatement} from '../OrgCodehausGroovyAstStmt';
import {SourceUnit} from '../OrgCodehausGroovyControl';
import {IncorrectTypeHintException, StaticTypeCheckingSupport} from '../OrgCodehausGroovyTransform';
import {Optional} from '../TsAddon';

export class GenericsUtils {
	static readonly EMPTY_GENERICS_ARRAY: Array<GenericsType> = GenericsType.EMPTY_ARRAY;
	static readonly JAVA_LANG_OBJECT: string = ClassHelper.OBJECT;

	/**
	 * Given a parameterized type and a generic type information, aligns actual type parameters. For example, if a
	 * class uses generic type <pre>&lt;T,U,V&gt;</pre> (redirectGenericTypes), is used with actual type parameters
	 * <pre>&lt;java.lang.String, U,V&gt;</pre>, then a class or interface using generic types <pre>&lt;T,V&gt;</pre>
	 * will be aligned to <pre>&lt;java.lang.String,V&gt;</pre>
	 *
	 * @param redirectGenericTypes the type arguments or the redirect class node
	 * @param parameterizedTypes   the actual type arguments used on this class node
	 * @param alignmentTarget      the generic type arguments to which we want to align to
	 * @return aligned type arguments
	 * @deprecated You shouldn't call this method because it is inherently unreliable
	 */
	static alignGenericTypes(redirectGenericTypes: Array<GenericsType>, parameterizedTypes: Array<GenericsType>, alignmentTarget: Array<GenericsType>): Array<GenericsType> {
		if (alignmentTarget == null) {
			return GenericsUtils.EMPTY_GENERICS_ARRAY;
		}
		if (parameterizedTypes == null || parameterizedTypes.length == 0) {
			return alignmentTarget;
		}
		const generics: Array<GenericsType> = [];
		for (let i = 0, scgtLength = alignmentTarget.length; i < scgtLength; i++) {
			const currentTarget = alignmentTarget[i];
			let match: GenericsType = null;
			if (redirectGenericTypes != null && redirectGenericTypes.length !== 0) {
				for (let j = 0; j < redirectGenericTypes.length && match == null; j++) {
					const redirectGenericType = redirectGenericTypes[j];
					if (redirectGenericType.isCompatibleWith(currentTarget.type)) {
						if (currentTarget.isPlaceholder && redirectGenericType.isPlaceholder && currentTarget.name !== redirectGenericType.name) {
							// check if there's a potential better match
							let skip = false;
							for (let k = j + 1; k < redirectGenericTypes.length && !skip; k++) {
								const ogt = redirectGenericTypes[k];
								if (ogt.isPlaceholder && ogt.isCompatibleWith(currentTarget.type) && ogt.name === currentTarget.name) {
									skip = true;
								}
							}
							if (skip) {
								continue;
							}
						}
						match = parameterizedTypes[j];
						if (currentTarget.isWildcard) {
							// if alignment target is a wildcard type
							// then we must make best effort to return a parameterized
							// wildcard
							const lower = currentTarget.lowerBound != null ? match.type : null;
							const currentUpper = currentTarget.upperBounds;
							const upper = currentUpper != null ? [] : null;
							if (upper != null) {
								for (let k = 0; k < upper.length; k++) {
									upper.push(currentUpper[k].isGenericsPlaceHolder ? match.type : currentUpper[k]);
								}
							}
							match = new GenericsType(ClassHelper.makeWithoutCaching('?'), upper, lower);
							match.setWildcard(true);
						}
					}
				}
			}
			if (match == null) {
				match = currentTarget;
			}
			generics[i] = match;
		}
		return generics;
	}

	/**
	 * Generates a wildcard generic type in order to be used for checks against
	 * class nodes. See {@link GenericsType#isCompatibleWith(ClassNode)}.
	 */
	static buildWildcardType(...upperBounds: Array<ClassNode>): GenericsType {
		const gt = new GenericsType(ClassHelper.makeWithoutCaching('?'), upperBounds, null);
		gt.setWildcard(true);
		return gt;
	}

	/**
	 * Returns the type parameter/argument relationships of the specified type.
	 *
	 * @param type the class node to check
	 * @param placeholders
	 */
	static extractPlaceholders(type: ClassNode, placeholders?: Map<string, GenericsType>): Map<string, GenericsType> {
		if (placeholders == null) {
			placeholders = new Map<string, GenericsType>();
			GenericsUtils.extractPlaceholders(type, placeholders);
			return placeholders;
		} else {
			if (type == null) {
				return placeholders;
			}

			if (type.isArray) {
				return GenericsUtils.extractPlaceholders(type.componentType, placeholders);
			}

			if (!type.isUsingGenerics || !type.isRedirectNode) {
				return placeholders;
			}
			const genericsTypes = type.genericsTypes;
			if (genericsTypes == null || genericsTypes.length === 0) {
				return placeholders;
			}

			// GROOVY-8609, GROOVY-10067, etc.
			if (type.isGenericsPlaceHolder) {
				const gt = genericsTypes[0];
				if (!placeholders.has(gt.name)) {
					placeholders.set(gt.name, gt);
				}
				return placeholders;
			}

			let redirectGenericsTypes = type.redirect().genericsTypes;
			if (redirectGenericsTypes == null || redirectGenericsTypes.length === 0) {
				redirectGenericsTypes = genericsTypes;
			} else if (redirectGenericsTypes.length != genericsTypes.length) {
				throw new GroovyBugError('Expected earlier checking to detect generics parameter arity mismatch' +
					'\nExpected: ' + type.name + GenericsUtils.toGenericTypesString(redirectGenericsTypes) +
					'\nSupplied: ' + type.name + GenericsUtils.toGenericTypesString(genericsTypes));
			}

			const typeArguments: Array<GenericsType> = [];
			for (let i = 0, count = redirectGenericsTypes.length; i < count; i += 1) {
				const rgt = redirectGenericsTypes[i];
				if (rgt.isPlaceholder) { // type parameter
					const typeArgument = genericsTypes[i];
					if (!placeholders.has(rgt.name)) {
						typeArguments.push(typeArgument);
						placeholders.set(rgt.name, typeArgument);
					}
				}
			}

			// examine non-placeholder type args
			for (const gt of typeArguments) {
				if (gt.isWildcard) {
					const lowerBound = gt.lowerBound;
					if (lowerBound != null) {
						GenericsUtils.extractPlaceholders(lowerBound, placeholders);
					} else {
						const upperBounds = gt.upperBounds;
						if (upperBounds != null && upperBounds.length !== 0) {
							for (const upperBound of upperBounds) {
								GenericsUtils.extractPlaceholders(upperBound, placeholders);
							}
						}
					}
				} else if (!gt.isPlaceholder) {
					GenericsUtils.extractPlaceholders(gt.type, placeholders);
				}
			}
			return placeholders;
		}
	}

	static toGenericTypesString(genericsTypes: Array<GenericsType>): string {
		if (genericsTypes == null || genericsTypes.length === 0) {
			return '';
		}
		return '<' + genericsTypes.map(type => type.toString()).join(',') + '> ';
	}

	/**
	 * Interface class nodes retrieved from {@link ClassNode#interfaces}
	 * or {@link ClassNode#allInterfaces} are returned with generic type
	 * arguments. This method allows returning a parameterized interface given the parameterized class
	 * node which implements this interface.
	 *
	 * @param hint the class node where generics types are parameterized
	 * @param target the interface we want to parameterize generics types
	 * @return a parameterized interface class node
	 * @deprecated Use #parameterizeType instead
	 */
	static parameterizeInterfaceGenerics(hint: ClassNode, target: ClassNode): ClassNode {
		return GenericsUtils.parameterizeType(hint, target);
	}

	/**
	 * Interface class nodes retrieved from {@link ClassNode#interfaces}
	 * or {@link ClassNode#allInterfaces} are returned with generic type
	 * arguments. This method allows returning a parameterized interface given the parameterized class
	 * node which implements this interface.
	 *
	 * @param hint   the ClassNode where generics types are parameterized
	 * @param target the interface we want to parameterize generics types
	 * @return a parameterized interface ClassNode
	 */
	static parameterizeType(hint: ClassNode, target: ClassNode): ClassNode {
		if (hint.isArray) {
			if (target.isArray) {
				return GenericsUtils.parameterizeType(hint.componentType, target.componentType).makeArray();
			}
			return target;
		}
		if (hint.isGenericsPlaceHolder) {
			const bound = hint.redirect();
			return GenericsUtils.parameterizeType(bound, target);
		}
		const genericsTypes = target.redirect().genericsTypes;
		if (genericsTypes == null || genericsTypes.length === 0) {
			return target;
		}

		let cn = target;
		let gt: Map<string, ClassNode>;

		// relationship may be reversed for cases like "Iterable<String> x = []"
		if (!cn.equals(hint) && StaticTypeCheckingSupport.implementsInterfaceOrIsSubclassOf(target, hint)) {
			do { // walk target type hierarchy towards hint
				cn = ClassHelper.getNextSuperClass(cn, hint);
				if (GenericsUtils.hasUnresolvedGenerics(cn)) {
					gt = GenericsUtils.createGenericsSpec(hint);
					GenericsUtils.extractSuperclassGenerics(hint, cn, gt);
					cn = GenericsUtils.correctToGenericsSpecRecurse(gt, cn);
				}
			} while (!cn.equals(hint));

			hint = cn;
		}

		cn = target.redirect();
		gt = GenericsUtils.createGenericsSpec(hint);
		gt = GenericsUtils.createGenericsSpec(cn, gt);
		GenericsUtils.extractSuperclassGenerics(hint, cn, gt);
		return GenericsUtils.correctToGenericsSpecRecurse(gt, cn);
	}

	static nonGeneric(type: ClassNode): ClassNode {
		let dims: number = 0;
		let temp = type;
		while (temp.isArray) {
			dims += 1;
			temp = temp.componentType;
		}
		// GROOVY-10461: check without resolving supers
		if (temp instanceof DecompiledClassNode ? temp.isParameterized : temp.isUsingGenerics) {
			let result = ClassHelper.makeWithoutCaching(temp.name);
			result.setRedirect(temp);
			result.setGenericsTypes(null);
			result.setUsingGenerics(false);
			while (dims > 0) {
				dims -= 1;
				result = result.makeArray();
			}
			return result;
		}
		return type;
	}

	static newClass(type: ClassNode): ClassNode {
		return type.getPlainNodeReference();
	}

	static makeClassSafe(klass: IClass): ClassNode {
		return GenericsUtils.makeClassSafeWithGenericsByClassNode(ClassHelper.make(klass));
	}

	static makeClassSafeWithGenericsByClass(klass: IClass, genericsType: ClassNode): ClassNode {
		const genericsTypes: Array<GenericsType> = [];
		genericsTypes.push(new GenericsType(genericsType));
		return GenericsUtils.makeClassSafeWithGenericsByClassNode(ClassHelper.make(klass), ...genericsTypes);
	}

	static makeClassSafe0(type: ClassNode, ...genericTypes: Array<GenericsType>): ClassNode {
		const plainNodeReference = GenericsUtils.newClass(type);
		if (genericTypes != null && genericTypes.length > 0) {
			plainNodeReference.setGenericsTypes(genericTypes);
			if (type.isGenericsPlaceHolder) {
				plainNodeReference.setGenericsPlaceHolder(true);
			}
		}
		return plainNodeReference;
	}

	static makeClassSafeWithGenericsByClassNode(type: ClassNode, ...genericTypes: Array<GenericsType>): ClassNode {
		if (type.isArray) {
			return GenericsUtils.makeClassSafeWithGenericsByClassNode(type.componentType, ...genericTypes).makeArray();
		}
		const nTypes = (genericTypes == null || genericTypes.length === 0) ? 0 : genericTypes.length;
		let gTypes: Array<GenericsType>;
		if (nTypes == 0) {
			gTypes = GenericsUtils.EMPTY_GENERICS_ARRAY;
		} else {
			gTypes = [...genericTypes];
		}
		return GenericsUtils.makeClassSafe0(type, ...gTypes);
	}

	static correctToGenericsSpecForMethod(genericsSpec: Map<string, ClassNode>, mn: MethodNode): MethodNode {
		if (genericsSpec == null) {
			return mn;
		}
		if (mn.genericsTypes != null && mn.genericsTypes.length !== 0) {
			genericsSpec = GenericsUtils.addMethodGenerics(mn, genericsSpec);
		}
		const returnType = GenericsUtils.correctToGenericsSpecRecurse(genericsSpec, mn.returnType);
		const oldParameters = mn.parameters;
		const nParameters = oldParameters.length;
		const newParameters = oldParameters.map(parameter => {
			return new Parameter(GenericsUtils.correctToGenericsSpecRecurse(genericsSpec, parameter.type), parameter.name, parameter.initialExpression);
		});
		const newMethod = new MethodNode(mn.name, mn.modifiers, returnType, newParameters, mn.exceptions, mn.code);
		newMethod.setGenericsTypes(mn.genericsTypes);
		return newMethod;
	}

	static correctToGenericsSpecRecurse(genericsSpec: Map<string, ClassNode>, type: ClassNode): ClassNode {
		return GenericsUtils.correctToGenericsSpecRecurseWithExclusions(genericsSpec, type, []);
	}

	/**
	 * @since 2.4.1
	 */
	static correctToGenericsSpecRecurseInBulk(genericsSpec: Map<string, ClassNode>, types: Array<ClassNode>): Array<ClassNode> {
		if (types == null || types.length == 1) {
			return types;
		}
		let modified = false;
		const newTypes = [];
		for (let i = 0; i < types.length; i++) {
			newTypes.push(GenericsUtils.correctToGenericsSpecRecurseWithExclusions(genericsSpec, types[i], []));
			modified = modified || (types[i] != newTypes[i]);
		}
		if (!modified) {
			return types;
		}
		return newTypes;
	}

	static correctToGenericsSpecRecurseWithExclusions(genericsSpec: Map<string, ClassNode>, type: ClassNode, exclusions: Array<string>): ClassNode {
		if (type.isArray) {
			return GenericsUtils.correctToGenericsSpecRecurseWithExclusions(genericsSpec, type.componentType, exclusions).makeArray();
		}
		const name = type.unresolvedName;
		if (type.isGenericsPlaceHolder && !exclusions.includes(name)) {
			exclusions = [...exclusions, name]; // GROOVY-7722
			type = genericsSpec.get(name);
			if (type != null && type.isGenericsPlaceHolder) {
				if (type.genericsTypes == null || type.genericsTypes.length === 0) {
					const placeholder = ClassHelper.makeWithoutCaching(type.unresolvedName);
					placeholder.setGenericsPlaceHolder(true);
					return GenericsUtils.makeClassSafeWithGenericsByClassNode(type, new GenericsType(placeholder));
				} else if (name !== type.unresolvedName) {
					return GenericsUtils.correctToGenericsSpecRecurseWithExclusions(genericsSpec, type, exclusions);
				}
			}
		}
		if (type == null) {
			type = ClassHelper.OBJECT_TYPE.getPlainNodeReference();
		}
		const oldGenericsTypes = type.genericsTypes;
		let newGenericsTypes = GenericsUtils.EMPTY_GENERICS_ARRAY;
		if (oldGenericsTypes != null && oldGenericsTypes.length !== 0) {
			newGenericsTypes = new GenericsType[oldGenericsTypes.length];
			for (let i = 0; i < newGenericsTypes.length; i++) {
				const oldGenericsType = oldGenericsTypes[i];
				if (oldGenericsType.isWildcard) {
					const oldUpper = oldGenericsType.upperBounds;
					let upper = null;
					if (oldUpper != null && oldUpper.length !== 0) {
						// correct "? extends T" or "? extends T & I"
						upper = oldUpper.map(upper => {
							return GenericsUtils.correctToGenericsSpecRecurseWithExclusions(genericsSpec, upper, exclusions);
						});
					}
					const oldLower = oldGenericsType.lowerBound;
					let lower = null;
					if (oldLower != null) {
						// correct "? super T"
						lower = GenericsUtils.correctToGenericsSpecRecurseWithExclusions(genericsSpec, oldLower, exclusions);
					}
					const fixed = new GenericsType(oldGenericsType.type, upper, lower);
					fixed.setWildcard(true);
					newGenericsTypes[i] = fixed;
				} else if (oldGenericsType.isPlaceholder) {
					// correct "T"
					newGenericsTypes[i] = new GenericsType(genericsSpec.get(oldGenericsType.name) ?? ClassHelper.OBJECT_TYPE);
				} else {
					// correct "List<T>", etc.
					newGenericsTypes[i] = new GenericsType(GenericsUtils.correctToGenericsSpecRecurseWithExclusions(genericsSpec, GenericsUtils.correctToGenericsSpecForGenericsType(genericsSpec, oldGenericsType), exclusions));
				}
			}
		}
		return GenericsUtils.makeClassSafeWithGenericsByClassNode(type, ...newGenericsTypes);
	}

	static correctToGenericsSpecForClass(genericsSpec: Map<string, ClassNode>, type: ClassNode): ClassNode {
		if (type.isArray) {
			return GenericsUtils.correctToGenericsSpecForClass(genericsSpec, type.componentType).makeArray();
		}
		if (type.isGenericsPlaceHolder && type.genericsTypes != null && type.genericsTypes.length !== 0) {
			const name = type.genericsTypes[0].name;
			type = genericsSpec.get(name);
			if (type != null && type.isGenericsPlaceHolder && name !== type.unresolvedName) {
				return GenericsUtils.correctToGenericsSpecForClass(genericsSpec, type);
			}
		}
		return type != null ? type : ClassHelper.OBJECT_TYPE.getPlainNodeReference();
	}

	static correctToGenericsSpecForGenericsType(genericsSpec: Map<string, ClassNode>, type: GenericsType): ClassNode {
		let cn: ClassNode = null;
		if (type.isPlaceholder) {
			const name = type.name;
			if (name.charAt(0) != '#') {//
				cn = genericsSpec.get(name);
			}
		} else if (type.isWildcard) {
			if (type.upperBounds != null && type.upperBounds.length !== 0) {
				cn = type.upperBounds[0]; // GROOVY-9891
			}
		}
		if (cn == null) {
			cn = type.type;
		}
		return cn;
	}

	static createGenericsSpec(type: ClassNode, oldSpec?: Map<string, ClassNode>): Map<string, ClassNode> {
		if (oldSpec == null) {
			return GenericsUtils.createGenericsSpec(type, new Map<string, ClassNode>());
		} else {
			// Example:
			// abstract class A<X,Y,Z> { ... }
			// class C<T extends Number> extends A<T,Object,String> { }
			// the type "A<T,Object,String> -> A<X,Y,Z>" will produce [X:Number,Y:Object,Z:String]

			const oc: ClassNode = type.getNodeMetaData('outer.class'); // GROOVY-10646: outer class type parameters
			const newSpec: Map<string, ClassNode> = oc != null ? GenericsUtils.createGenericsSpec(oc, oldSpec) : new Map();
			const gt = type.genericsTypes;
			const rgt = type.redirect().genericsTypes;
			if (gt != null && gt.length !== 0 && rgt != null && rgt.length !== 0) {
				for (let i = 0, n = gt.length; i < n; i += 1) {
					newSpec.set(rgt[i].name, GenericsUtils.correctToGenericsSpecForGenericsType(oldSpec, gt[i]));
				}
			}
			return newSpec;
		}
	}

	static addMethodGenerics(current: MethodNode, oldSpec: Map<string, ClassNode>): Map<string, ClassNode> {
		const newSpec: Map<string, ClassNode> = new Map(oldSpec);
		const gts = current.genericsTypes;
		if (gts != null && gts.length !== 0) {
			for (const gt of gts) {
				const name = gt.name;
				let type = gt.type;
				if (gt.isPlaceholder) {
					let redirect: ClassNode;
					if (gt.upperBounds != null && gt.upperBounds.length !== 0) {
						redirect = gt.upperBounds[0];
					} else if (gt.lowerBound != null) {
						redirect = gt.lowerBound;
					} else {
						redirect = ClassHelper.OBJECT_TYPE;
					}
					if (redirect.isGenericsPlaceHolder) {
						// "T extends U" or "T super U"
						type = redirect;
					} else {
						// "T" or "T extends Thing" or "T super Thing"
						type = ClassHelper.makeWithoutCaching(name);
						type.setGenericsPlaceHolder(true);
						type.setRedirect(redirect);
					}
				}
				newSpec.set(name, type);
			}
		}
		return newSpec;
	}

	// TODO COPY FROM GROOVY: this is very similar to StaticTypesCheckingSupport#extractGenericsConnections, using ClassNode instead of GenericsType
	static extractSuperclassGenerics(type: ClassNode, target: ClassNode, spec: Map<string, ClassNode>): void {
		if (target == null || target === type) {
			return;
		}
		if (target.isGenericsPlaceHolder) {
			spec.set(target.unresolvedName, type);
		} else if (type.isArray && target.isArray) {
			GenericsUtils.extractSuperclassGenerics(type.componentType, target.componentType, spec);
		} else if (type.isArray && target.name === GenericsUtils.JAVA_LANG_OBJECT) {
			// Object is the superclass of an array, but no generics are involved
		} else if (type.equals(target) || !StaticTypeCheckingSupport.implementsInterfaceOrIsSubclassOf(type, target)) {
			GenericsUtils.doExtractSuperclassGenerics(type.genericsTypes, target.genericsTypes, spec);
		} else {
			let superclass = GenericsUtils.getSuperclass(type, target);
			if (superclass != null) {
				if (GenericsUtils.hasUnresolvedGenerics(superclass)) {
					const tp = type.redirect().genericsTypes;
					if (tp != null && tp.length !== 0) {
						const ta = type.genericsTypes;
						const noTypeArguments = ta == null || ta.length == 0 || !type.isRedirectNode;
						const genericsSpec: Map<string, ClassNode> = new Map();
						for (let i = 0, n = tp.length; i < n; i += 1) {
							let cn: ClassNode;
							if (noTypeArguments || StaticTypeCheckingSupport.isUnboundedWildcard(ta[i])) { // GROOVY-10651
								const gt = tp[i];
								cn = (gt.upperBounds != null && gt.upperBounds.length !== 0) ? gt.upperBounds[0] : gt.type.redirect();
							} else {
								const gt = ta[i];
								cn = (gt.isWildcard && gt.upperBounds != null && gt.upperBounds.length !== 0) ? gt.upperBounds[0] : gt.type;
							}
							genericsSpec.set(tp[i].name, cn);
						}
						superclass = GenericsUtils.correctToGenericsSpecRecurse(genericsSpec, superclass);
					}
				}
				GenericsUtils.extractSuperclassGenerics(superclass, target, spec);
			} else {
				// if we reach here, we have an unhandled case
				throw new GroovyBugError('The type ' + type + ' seems not to normally extend ' + target + '. Sorry, I cannot handle this.');
			}
		}
	}

	static getSuperclass(type: ClassNode, target: ClassNode): ClassNode {
		return ClassHelper.getNextSuperClass(ClassHelper.isPrimitiveType(type) ? ClassHelper.getWrapper(type) : type, target);
	}

	private static doExtractSuperclassGenerics(usage: Array<GenericsType>, declaration: Array<GenericsType>, spec: Map<string, ClassNode>): void {
		// if declaration does not provide generics, there is no connection to make
		if (declaration == null || declaration.length == 0) {
			return;
		}

		// if usage is a raw type, remove type parameters from spec
		if (usage == null) {
			for (const dt of declaration) {
				const name = dt.name;
				let type = spec.get(name);
				if (type != null && type.isGenericsPlaceHolder && type.unresolvedName === name) {
					type = type.asGenericsType().upperBounds[0];
					spec.set(name, type);
				}
			}
			return;
		}

		if (usage.length != declaration.length) {
			return;
		}

		for (let i = 0, n = usage.length; i < n; i += 1) {
			const ui = usage[i];
			const di = declaration[i];
			if (di.isPlaceholder) {
				spec.set(di.name, ui.type);
			} else if (di.isWildcard) {
				if (ui.isWildcard) {
					GenericsUtils.extractSuperclassGenerics(ui.lowerBound, di.lowerBound, spec);
					GenericsUtils.doExtractSuperclassGenericsOfClassNodes(ui.upperBounds, di.upperBounds, spec);
				} else {
					const cu = ui.type;
					GenericsUtils.extractSuperclassGenerics(cu, di.lowerBound, spec);
					const upperBounds = di.upperBounds;
					if (upperBounds != null && upperBounds.length !== 0) {
						for (const cn of upperBounds) {
							GenericsUtils.extractSuperclassGenerics(cu, cn, spec);
						}
					}
				}
			} else {
				GenericsUtils.extractSuperclassGenerics(ui.type, di.type, spec);
			}
		}
	}

	private static doExtractSuperclassGenericsOfClassNodes(usage: Array<ClassNode>, declaration: Array<ClassNode>, spec: Map<string, ClassNode>): void {
		if (usage == null || declaration == null || declaration.length == 0) {
			return;
		}
		// both have generics
		for (let i = 0; i < usage.length; i++) {
			const ui = usage[i];
			const di = declaration[i];
			if (di.isGenericsPlaceHolder) {
				spec.set(di.genericsTypes[0].name, di);
			} else if (di.isUsingGenerics) {
				GenericsUtils.doExtractSuperclassGenerics(ui.genericsTypes, di.genericsTypes, spec);
			}
		}
	}

	static parseClassNodesFromString(option: string,
	                                 sourceUnit: SourceUnit, compilationUnit: CompilationUnit, mn: MethodNode, usage: ASTNode): Array<ClassNode> {
		try {
			const moduleNode = ParserPlugin.buildAST('Dummy<' + option + '> dummy;', compilationUnit.configuration, compilationUnit.classLoader, null);
			const dummyDeclaration = (moduleNode.statementBlock.statements[0] as ExpressionStatement).expression as DeclarationExpression;

			// the returned node is DummyNode<Param1, Param2, Param3, ...)
			const dummyNode = dummyDeclaration.leftExpression.type;
			const dummyNodeGenericsTypes = dummyNode.genericsTypes;
			if (dummyNodeGenericsTypes != null && dummyNodeGenericsTypes.length !== 0) {
				const n = dummyNodeGenericsTypes.length;
				const signature: Array<ClassNode> = [];
				for (let i = 0; i < n; i += 1) {
					const genericsType = dummyNodeGenericsTypes[i];
					signature.push(genericsType.isWildcard
						? ClassHelper.dynamicType()
						: GenericsUtils.resolveClassNode(sourceUnit, compilationUnit, mn, usage, genericsType.type));
				}
				return signature;
			}
		} catch (e /* Exception | LinkageError */) {
			sourceUnit.addError(new IncorrectTypeHintException(mn, e, usage.lineNumber, usage.columnNumber));
		}
		return null;
	}

	private static resolveClassNode(sourceUnit: SourceUnit, compilationUnit: CompilationUnit, mn: MethodNode, usage: ASTNode, parsedNode: ClassNode): ClassNode {
		const dummyClass = new ClassNode('dummy', 0, ClassHelper.OBJECT_TYPE);
		dummyClass.setModule(new ModuleNode(sourceUnit));
		dummyClass.setGenericsTypes(mn.declaringClass.genericsTypes);
		const dummyMN = new MethodNode(
			'dummy',
			0,
			parsedNode,
			Parameter.EMPTY_ARRAY,
			ClassNode.EMPTY_ARRAY,
			EmptyStatement.INSTANCE
		);
		dummyMN.setGenericsTypes(mn.genericsTypes);
		dummyClass.addMethod(dummyMN);
		const visitor = new class extends ResolveVisitor {
			addError(msg: string, expr: ASTNode): void {
				sourceUnit.addError(new IncorrectTypeHintException(mn, msg, usage.lineNumber, usage.columnNumber));
			}
		}(compilationUnit);
		visitor.startResolving(dummyClass, sourceUnit);
		return dummyMN.returnType;
	}

	/**
	 * Transforms generics types from an old context to a new context using the
	 * given spec. This method assumes all generics types will be placeholders.
	 * WARNING: The resulting generics types may or may not be placeholders
	 * after the transformation.
	 *
	 * @param genericsSpec    the generics context information spec
	 * @param oldPlaceHolders the old placeholders
	 * @return the new generics types
	 */
	static applyGenericsContextToPlaceHolders(genericsSpec: Map<string, ClassNode>, oldPlaceHolders: Array<GenericsType>): Array<GenericsType> {
		if (oldPlaceHolders == null || oldPlaceHolders.length == 0) {
			return oldPlaceHolders;
		}
		if (genericsSpec.size === 0) {
			return oldPlaceHolders;
		}
		const newTypes: Array<GenericsType> = [];
		for (let i = 0; i < oldPlaceHolders.length; i++) {
			const old = oldPlaceHolders[i];
			if (!old.isPlaceholder)
				throw new GroovyBugError('Given generics type ' + old + ' must be a placeholder!');
			const fromSpec = genericsSpec.get(old.name);
			if (fromSpec != null) {
				newTypes.push(fromSpec.asGenericsType());
			} else {
				let upper = old.upperBounds;
				const newUpper = upper;
				if (upper != null && upper.length > 0) {
					upper = upper.map(upper => GenericsUtils.correctToGenericsSpecRecurse(genericsSpec, upper));
				}
				const lower = old.lowerBound;
				const newLower = GenericsUtils.correctToGenericsSpecRecurse(genericsSpec, lower);
				if (lower === newLower && upper === newUpper) {
					newTypes.push(oldPlaceHolders[i]);
				} else {
					const newPlaceHolder = ClassHelper.make(old.name);
					const gt = new GenericsType(newPlaceHolder, newUpper, newLower);
					gt.setPlaceholder(true);
					newTypes.push(gt);
				}
			}
		}
		return newTypes;
	}

	/**
	 * Convenience method for {@link #findParameterizedTypeFromCache(ClassNode, ClassNode, boolean)}
	 * when the {@code tryToFindExactType} boolean is {@code false}.
	 */
	static findParameterizedTypeFromCache(genericsClass: ClassNode, actualType: ClassNode, tryToFindExactType: boolean = false): Optional<ClassNode> {
		return GenericsUtils.findParameterizedType(genericsClass, actualType, tryToFindExactType);
	}

	/**
	 * Gets the parameterized type by searching the whole class hierarchy according to generics class and actual receiver.
	 * <p>
	 * {@link #findParameterizedTypeFromCache(ClassNode,ClassNode,boolean)} is strongly recommended for better performance.
	 */
	static findParameterizedType(genericsClass: ClassNode, actualType: ClassNode, _tryToFindExactType: boolean = false): Optional<ClassNode> {
		const genericsTypes = genericsClass.genericsTypes;
		if (genericsTypes == null || genericsTypes.length === 0 || genericsClass.isGenericsPlaceHolder) {
			return null;
		}

		if (actualType.equals(genericsClass)) {
			return actualType;
		}

		const todo: Array<ClassNode> = [];
		const done: Array<ClassNode> = [];
		todo.push(actualType);
		let type: ClassNode;

		while ((type = todo.shift()) != null) {
			if (done.push(type)) {
				if (!type.isInterface) {
					let cn = type.getUnresolvedSuperclass();
					if (cn != null && cn.redirect() != ClassHelper.OBJECT_TYPE) {
						if (GenericsUtils.hasUnresolvedGenerics(cn)) {
							cn = GenericsUtils.parameterizeType(type, cn);
						}
						if (cn.equals(genericsClass)) {
							return cn;
						}
						todo.push(cn);
					}
				}
				for (let cn of type.interfaces) {
					if (GenericsUtils.hasUnresolvedGenerics(cn)) {
						cn = GenericsUtils.parameterizeType(type, cn);
					}
					if (cn.equals(genericsClass)) {
						return cn;
					}
					todo.push(cn);
				}
			}
		}

		return null;
	}

	/**
	 * map declaring generics type to actual generics type, e.g. GROOVY-7204:
	 * declaring generics types:      T,      S extends Serializable
	 * actual generics types   : String,      Long
	 *
	 * the result map is [
	 *  T: String,
	 *  S: Long
	 * ]
	 *
	 * The resolved types can not help us to choose methods correctly if the argument is a string:  T: Object, S: Serializable
	 * so we need actual types:  T: String, S: Long
	 */
	static makeDeclaringAndActualGenericsTypeMap(declaringClass: ClassNode, actualReceiver: ClassNode): Map<GenericsType, GenericsType> {
		return GenericsUtils.correlateTypeParametersAndTypeArguments(declaringClass, actualReceiver, false);
	}

	/**
	 * The method is similar with {@link GenericsUtils#makeDeclaringAndActualGenericsTypeMap(ClassNode, ClassNode)},
	 * The main difference is that the method will try to map all placeholders found to the relevant exact types,
	 * but the other will not try even if the parameterized type has placeholders
	 *
	 * @param declaringClass the generics class node declaring the generics types
	 * @param actualReceiver the subclass class node
	 * @return the placeholder-to-actualtype mapping
	 *
	 * @since 3.0.0
	 */
	static makeDeclaringAndActualGenericsTypeMapOfExactType(declaringClass: ClassNode, actualReceiver: ClassNode): Map<GenericsType, GenericsType> {
		return GenericsUtils.correlateTypeParametersAndTypeArguments(declaringClass, actualReceiver, true);
	}

	private static correlateTypeParametersAndTypeArguments(declaringClass: ClassNode, actualReceiver: ClassNode, tryToFindExactType: boolean): Map<GenericsType, GenericsType> {
		const parameterizedType = GenericsUtils.findParameterizedTypeFromCache(declaringClass, actualReceiver, tryToFindExactType);
		if (parameterizedType != null && parameterizedType.isRedirectNode && !parameterizedType.isGenericsPlaceHolder) { // GROOVY-10166
			// declaringClass may be "List<T> -> List<E>" and parameterizedType may be "List<String> -> List<E>" or "List<> -> List<E>"
			const typeParameters = parameterizedType.redirect().genericsTypes;
			if (typeParameters != null && typeParameters.length !== 0) {
				const typeArguments = parameterizedType.genericsTypes;
				const m = (typeArguments == null || typeArguments.length === 0) ? 0 : typeArguments.length;
				const n = typeParameters.length;

				const map: Map<GenericsType, GenericsType> = new Map();
				for (let i = 0; i < n; i += 1) {
					map.set(typeParameters[i], i < m ? typeArguments[i] : GenericsUtils.erasure(typeParameters[i]));
				}
				return map;
			}
		}
		return new Map<GenericsType, GenericsType>();
	}

	/**
	 * @see org.codehaus.groovy.transform.stc.StaticTypeCheckingSupport#extractType(GenericsType)
	 */
	private static erasure(gt: GenericsType): GenericsType {
		let cn = gt.type.redirect(); // discard the placeholder

		if (gt.type.genericsTypes != null && gt.type.genericsTypes.length !== 0) {
		}
		gt = gt.type.genericsTypes[0];

		if (gt.upperBounds != null && gt.upperBounds.length !== 0) {
		}
		cn = gt.upperBounds[0]; // TODO COPY FROM GROOVY: if length > 1 then union type?

		return cn.asGenericsType();
	}

	/**
	 * Checks if the type has any non-placeholder (aka resolved) generics.
	 *
	 * @since 3.0.0
	 */
	static hasNonPlaceHolders(type: ClassNode): boolean {
		return GenericsUtils.checkPlaceHolders(type, gt => !gt.isPlaceholder);
	}

	/**
	 * Checks if the type has any placeholder (aka unresolved) generics.
	 *
	 * @since 3.0.0
	 */
	static hasPlaceHolders(type: ClassNode): boolean {
		return GenericsUtils.checkPlaceHolders(type, gt => gt.isPlaceholder);
	}

	private static checkPlaceHolders(type: ClassNode, test: (type: GenericsType) => boolean): boolean {
		if (type != null) {
			const genericsTypes = type.genericsTypes;
			if (genericsTypes != null && genericsTypes.length !== 0) {
				for (const genericsType of genericsTypes) {
					if (test(genericsType)) {
						return true;
					}
				}
			}
		}
		return false;
	}

	/**
	 * Checks for any placeholder (aka unresolved) generics.
	 */
	static hasUnresolvedGenerics(type: ClassNode): boolean {
		if (type.isGenericsPlaceHolder) return true;
		if (type.isArray) {
			return GenericsUtils.hasUnresolvedGenerics(type.componentType);
		}
		const genericsTypes = type.genericsTypes;
		if (genericsTypes != null && genericsTypes.length !== 0) {
			for (const genericsType of genericsTypes) {
				if (genericsType.isPlaceholder) {
					return true;
				}
				const lowerBound = genericsType.lowerBound;
				const upperBounds = genericsType.upperBounds;
				if (lowerBound != null) {
					if (GenericsUtils.hasUnresolvedGenerics(lowerBound)) {
						return true;
					}
				} else if (upperBounds != null && upperBounds.length !== 0) {
					for (const upperBound of upperBounds) {
						if (GenericsUtils.hasUnresolvedGenerics(upperBound)) {
							return true;
						}
					}
				} else {
					if (GenericsUtils.hasUnresolvedGenerics(genericsType.type)) {
						return true;
					}
				}
			}
		}
		return false;
	}

	/**
	 * Gets the parameter and return types of the abstract method of SAM.
	 *
	 * If the abstract method is not parameterized, we will get generics placeholders, e.g. T, U
	 * For example, the abstract method of {@link JavaFunction} is
	 * <pre>
	 *      R apply(T t);
	 * </pre>
	 *
	 * We parameterize the above interface as {@code Function<String, Integer>}, then the abstract method will be
	 * <pre>
	 *      Integer apply(String t);
	 * </pre>
	 *
	 * When we call {@code parameterizeSAM} on the ClassNode {@code Function<String, Integer>},
	 * we can get parameter types and return type of the above abstract method,
	 * i.e. ClassNode {@code ClassHelper.STRING_TYPE} and {@code ClassHelper.Integer_TYPE}
	 *
	 * @param samType the class node which contains only one abstract method
	 *
	 * @since 3.0.0
	 */
	static parameterizeSAM(samType: ClassNode): [Array<ClassNode>, ClassNode] {
		const abstractMethod = ClassHelper.findSAM(samType);
		const declaringClass = abstractMethod.declaringClass;
		let spec = GenericsUtils.extractPlaceholders(samType.equals(declaringClass) ? samType : GenericsUtils.parameterizeType(samType, declaringClass));

		if (spec.size === 0 && declaringClass.genericsTypes != null && declaringClass.genericsTypes.length !== 0) {
			for (const tp of declaringClass.genericsTypes) { // apply erasure
				spec.set(tp.name, GenericsUtils.erasure(tp));
			}
		} else {
			// resolveClassNodeGenerics converts "T=? super Type" to Object, so convert "T=? super Type" to "T=Type"
			const transformed: Map<string, GenericsType> = new Map();
			spec.forEach((type, key) => {
				transformed.set(key, type.isWildcard && type.lowerBound != null ? type.lowerBound.asGenericsType() : type);
			});
		}

		const parameterTypes = abstractMethod.parameters.map(p => StaticTypeCheckingSupport.resolveClassNodeGenerics(spec, null, p.type));
		const returnType = StaticTypeCheckingSupport.resolveClassNodeGenerics(spec, null, abstractMethod.returnType);
		return [parameterTypes, returnType];
	}

	/**
	 * Gets the actual type according to the placeholder name.
	 *
	 * @param placeholderName the placeholder name (i.e. "T", "E", etc.)
	 * @param genericsPlaceholderAndTypeMap the result of {@link #makeDeclaringAndActualGenericsTypeMap(ClassNode, ClassNode)}
	 */
	static findActualTypeByGenericsPlaceholderName(placeholderName: string, genericsPlaceholderAndTypeMap: Map<GenericsType, GenericsType>): Optional<ClassNode> {
		return Array.from(genericsPlaceholderAndTypeMap.entries())
			.filter(([key]) => {
				return key.name === placeholderName;
			})
			.map(([, gt]) => {
				if (gt.isWildcard) {
					if (gt.lowerBound != null) {
						return gt.lowerBound;
					}
					if (gt.upperBounds != null && gt.upperBounds.length !== 0) {
						return gt.upperBounds[0];
					}
				}
				return gt.type;
			})
			.find((_, index) => index === 0);
	}
}
