import {ClassHelper, ClassNode, GenericsType} from '../OrgCodehausGroovyAst';
import {Optional} from '../TsAddon';
import {GeneralUtils} from './GeneralUtils';
import {GenericsUtils} from './GenericsUtils';
import {LowestUpperBoundClassNode} from './LowestUpperBoundClassNode';

export class WideningCategories {
	private static readonly NUMBER_TYPES_PRECEDENCE: Map<string, number> = (() => {
		const map = new Map<string, number>();
		map.set(ClassHelper.double_TYPE.name, 0);
		map.set(ClassHelper.float_TYPE.name, 1);
		map.set(ClassHelper.long_TYPE.name, 2);
		map.set(ClassHelper.int_TYPE.name, 3);
		map.set(ClassHelper.short_TYPE.name, 4);
		map.set(ClassHelper.byte_TYPE.name, 5);
		return map;
	})();

	/**
	 * Used to check if a type is an int or Integer.
	 * @param type the type to check
	 */
	static isInt(type: ClassNode): boolean {
		return ClassHelper.isPrimitiveInt(type);
	}

	/**
	 * Used to check if a type is a double or Double.
	 * @param type the type to check
	 */
	static isDouble(type: ClassNode): boolean {
		return ClassHelper.isPrimitiveDouble(type);
	}

	/**
	 * Used to check if a type is a float or Float.
	 * @param type the type to check
	 */
	static isFloat(type: ClassNode): boolean {
		return ClassHelper.isPrimitiveFloat(type);
	}

	/**
	 * It is of an int category, if the provided type is a
	 * byte, char, short, int.
	 */
	static isIntCategory(type: ClassNode): boolean {
		return ClassHelper.isPrimitiveByte(type) || ClassHelper.isPrimitiveChar(type) || ClassHelper.isPrimitiveInt(type) || ClassHelper.isPrimitiveShort(type);
	}

	/**
	 * It is of a long category, if the provided type is a
	 * long, its wrapper or if it is a long category.
	 */
	static isLongCategory(type: ClassNode): boolean {
		return ClassHelper.isPrimitiveLong(type) || WideningCategories.isIntCategory(type);
	}

	/**
	 * It is of a BigInteger category, if the provided type is a
	 * long category or a BigInteger.
	 */
	static isBigIntCategory(type: ClassNode): boolean {
		return ClassHelper.isBigIntegerType(type) || WideningCategories.isLongCategory(type);
	}

	/**
	 * It is of a BigDecimal category, if the provided type is a
	 * BigInteger category or a BigDecimal.
	 */
	static isBigDecCategory(type: ClassNode): boolean {
		return ClassHelper.isBigDecimalType(type) || WideningCategories.isBigIntCategory(type);
	}

	/**
	 * It is of a double category, if the provided type is a
	 * BigDecimal, a float, double. C(type)=double
	 */
	static isDoubleCategory(type: ClassNode): boolean {
		return ClassHelper.isPrimitiveFloat(type) || ClassHelper.isPrimitiveDouble(type) || WideningCategories.isBigDecCategory(type);
	}

	/**
	 * It is of a floating category, if the provided type is
	 * a float, double. C(type)=float
	 */
	static isFloatingCategory(type: ClassNode): boolean {
		return ClassHelper.isPrimitiveFloat(type) || ClassHelper.isPrimitiveDouble(type);
	}

	static isNumberCategory(type: ClassNode): boolean {
		return WideningCategories.isBigDecCategory(type) || type.isDerivedFrom(ClassHelper.Number_TYPE);
	}

	private static doLowestUpperBound(a: ClassNode,
	                                  b: ClassNode,
	                                  interfacesImplementedByA: Optional<Array<ClassNode>>,
	                                  interfacesImplementedByB: Optional<Array<ClassNode>>): Optional<ClassNode> {
		// first test special cases
		if (a == null || b == null) {
			// this is a corner case, you should not
			// compare two class nodes if one of them is null
			return null;
		}
		if (a.isArray && b.isArray) {
			return WideningCategories.doLowestUpperBound(a.componentType, b.componentType, interfacesImplementedByA, interfacesImplementedByB).makeArray();
		}
		if (ClassHelper.isObjectType(a) || ClassHelper.isObjectType(b)) {
			// one of the objects is at the top of the hierarchy
			const gta = a.genericsTypes;
			const gtb = b.genericsTypes;
			if (gta != null && gtb != null && gta.length == 1 && gtb.length == 1) {
				if (gta[0].name === gtb[0].name) {
					return a;
				}
			}
			return ClassHelper.OBJECT_TYPE;
		}
		if (ClassHelper.isPrimitiveVoid(a) || ClassHelper.isPrimitiveVoid(b)) {
			if (!b.equals(a)) {
				// one class is void, the other is not
				return ClassHelper.OBJECT_TYPE;
			}
			return ClassHelper.VOID_TYPE;
		}

		// now handle primitive types
		const isPrimitiveA = ClassHelper.isPrimitiveType(a);
		const isPrimitiveB = ClassHelper.isPrimitiveType(b);
		if (isPrimitiveA && !isPrimitiveB) {
			return WideningCategories.doLowestUpperBound(ClassHelper.getWrapper(a), b, null, null);
		}
		if (isPrimitiveB && !isPrimitiveA) {
			return WideningCategories.doLowestUpperBound(a, ClassHelper.getWrapper(b), null, null);
		}
		if (isPrimitiveA && isPrimitiveB) {
			const pa = WideningCategories.NUMBER_TYPES_PRECEDENCE.get(a.name);
			const pb = WideningCategories.NUMBER_TYPES_PRECEDENCE.get(b.name);
			if (pa != null && pb != null) {
				return (pa <= pb ? a : b);
			}
			return a.equals(b) ? a : WideningCategories.doLowestUpperBound(ClassHelper.getWrapper(a), ClassHelper.getWrapper(b), null, null);
		}

		// handle interfaces
		const isInterfaceA = a.isInterface;
		const isInterfaceB = b.isInterface;
		if (isInterfaceA && isInterfaceB) {
			if (a.equals(b)) return a;
			if (b.implementsInterface(a)) {
				return a;
			}
			if (a.implementsInterface(b)) {
				return b;
			}
			// each interface may have one or more "extends", so we must find those
			// which are common
			const interfacesFromA = a.interfaces;
			const interfacesFromB = b.interfaces;
			// only element in interfacesFromA and interfacesFromB retained
			const common = [...interfacesFromA].filter(aNode => {
				return interfacesFromB.some(bNode => aNode.equals(bNode));
			});

			if (common.length === 1) {
				return common[0];
			} else if (common.length > 1) {
				return WideningCategories.buildTypeWithInterfaces(a, b, common);
			}

			// we have two interfaces, but none inherits from the other
			// so the only possible return type is Object
			return ClassHelper.OBJECT_TYPE;
		} else if (isInterfaceB) {
			return WideningCategories.doLowestUpperBound(b, a, null, null);
		} else if (isInterfaceA) {
			// a is an interface, b is not

			// a ClassNode superclass for an interface is not
			// another interface but always Object. This implies that
			// "extends" for an interface is understood as "implements"
			// for a ClassNode. Therefore, even if b doesn't implement
			// interface a, a could "implement" other interfaces that b
			// implements too, so we must create a list of matching interfaces
			const matchingInterfaces: Array<ClassNode> = [];
			WideningCategories.extractMostSpecificImplementedInterfaces(b, a, matchingInterfaces);
			if (matchingInterfaces.length === 0) {
				// no interface in common
				return ClassHelper.OBJECT_TYPE;
			}
			if (matchingInterfaces.length === 1) {
				// a single match, which should be returned
				return matchingInterfaces[0];
			}
			return WideningCategories.buildTypeWithInterfaces(a, b, matchingInterfaces);
		}
		// both classes do not represent interfaces
		if (a.equals(b)) {
			return WideningCategories.buildTypeWithInterfaces(a, b, WideningCategories.keepLowestCommonInterfaces(interfacesImplementedByA, interfacesImplementedByB));
		}
		// test if one class inherits from the other
		if (a.isDerivedFrom(b) || b.isDerivedFrom(a)) {
			return WideningCategories.buildTypeWithInterfaces(a, b, WideningCategories.keepLowestCommonInterfaces(interfacesImplementedByA, interfacesImplementedByB));
		}

		const sa = a.getUnresolvedSuperclass();
		const sb = b.getUnresolvedSuperclass();

		if (interfacesImplementedByA == null) {
			interfacesImplementedByA = GeneralUtils.getInterfacesAndSuperInterfaces(a);
		}
		if (interfacesImplementedByB == null)
			interfacesImplementedByB = GeneralUtils.getInterfacesAndSuperInterfaces(b);

		// check if no superclass is defined, meaning that we reached the top of the object hierarchy
		if (sa == null || sb == null) {
			return WideningCategories.buildTypeWithInterfaces(ClassHelper.OBJECT_TYPE, ClassHelper.OBJECT_TYPE, WideningCategories.keepLowestCommonInterfaces(interfacesImplementedByA, interfacesImplementedByB));
		}
		// if one superclass is derived (or equals) another then it is the common super type
		if (sa.isDerivedFrom(sb) || sb.isDerivedFrom(sa)) {
			return WideningCategories.buildTypeWithInterfaces(sa, sb, WideningCategories.keepLowestCommonInterfaces(interfacesImplementedByA, interfacesImplementedByB));
		}
		// superclasses are on distinct hierarchy branches, so we recurse on them
		return WideningCategories.doLowestUpperBound(sa, sb, interfacesImplementedByA, interfacesImplementedByB);
	}

	/**
	 * Given a list of class nodes, returns the first common supertype.
	 * For example, Double and Float would return Number, while
	 * Set and String would return Object.
	 * @param oneOrMoreNodes the list of nodes for which to find the first common super type.
	 * @param another
	 * @return first common supertype
	 */
	static lowestUpperBound(oneOrMoreNodes: ClassNode | Array<ClassNode>,
	                        another?: ClassNode): ClassNode {
		if (Array.isArray(oneOrMoreNodes)) {
			const n = oneOrMoreNodes.length;
			if (n == 1) {
				return oneOrMoreNodes[0];
			}
			if (n == 2) {
				return WideningCategories.lowestUpperBound(oneOrMoreNodes[0], oneOrMoreNodes[1]);
			} else {
				const [first, ...rest] = oneOrMoreNodes;
				return WideningCategories.lowestUpperBound(first, WideningCategories.lowestUpperBound(rest));
			}
		} else {
			const lub = WideningCategories.doLowestUpperBound(oneOrMoreNodes, another, null, null);
			if (lub == null || !lub.isUsingGenerics || lub.isGenericsPlaceHolder) { // GROOVY-10330
				return lub;
			}
			// types may be parameterized; if so, ensure that generic type arguments
			// are made compatible
			if (lub instanceof LowestUpperBoundClassNode) {
				// no parent super class representing both types could be found
				// or both class nodes implement common interfaces which may have
				// been parameterized differently.
				// We must create a classnode for which the "superclass" is potentially parameterized
				// plus the interfaces
				let superclass = lub.superclass;
				if (superclass.redirect().genericsTypes.length !== 0) {
					superclass = WideningCategories.parameterizeLowestUpperBound(superclass, oneOrMoreNodes, another, lub);
				}

				const interfaces = [...lub.interfaces];
				for (let i = 0, n = interfaces.length; i < n; i += 1) {
					const icn = interfaces[i];
					if (icn.redirect().genericsTypes.length !== 0) {
						interfaces[i] = WideningCategories.parameterizeLowestUpperBound(icn, oneOrMoreNodes, another, lub);
					}
				}

				return new LowestUpperBoundClassNode(lub.name, superclass, ...interfaces);
			} else {
				return WideningCategories.parameterizeLowestUpperBound(lub, oneOrMoreNodes, another, lub);
			}
		}
	}

	/**
	 * Given the lowest upper bound computed without generic type information but which requires to be parameterized
	 * and the two implementing classnodes which are parameterized with potentially two different types, returns
	 * the parameterized lowest upper bound.
	 *
	 * For example, if LUB is Set&lt;T&gt; and a is Set&lt;String&gt; and b is Set&lt;StringBuffer&gt;, this
	 * will return a LUB which parameterized type matches Set&lt;? extends CharSequence&gt;
	 * @param lub the type to be parameterized
	 * @param a parameterized type a
	 * @param b parameterized type b
	 * @param fallback if we detect a recursive call, use this LUB as the parameterized type instead of computing a value
	 * @return the class node representing the parameterized lowest upper bound
	 */
	private static parameterizeLowestUpperBound(lub: ClassNode, a: ClassNode, b: ClassNode, fallback: ClassNode): ClassNode {
		if (a.toString(false) === b.toString(false)) {
			return lub;
		}
		// a common super type exists, all we have to do is to parameterize
		// it according to the types provided by the two class nodes
		const holderForA = WideningCategories.findGenericsTypeHolderForClass(a, lub);
		const holderForB = WideningCategories.findGenericsTypeHolderForClass(b, lub);
		// let's compare their generics type
		const agt: Optional<Array<GenericsType>> = holderForA == null ? null : holderForA.genericsTypes;
		const bgt: Optional<Array<GenericsType>> = holderForB == null ? null : holderForB.genericsTypes;
		if (agt == null || bgt == null || agt.length != bgt.length) {
			return lub;
		}
		const n = agt.length;
		const lubGTs: Array<GenericsType> = [];
		for (let i = 0; i < n; i += 1) {
			const t1 = WideningCategories.upperBound(agt[i]);
			const t2 = WideningCategories.upperBound(bgt[i]);
			let basicType: ClassNode;
			if (WideningCategories.areEqualWithGenerics(t1, ClassHelper.isPrimitiveType(a) ? ClassHelper.getWrapper(a) : a)
				&& WideningCategories.areEqualWithGenerics(t2, ClassHelper.isPrimitiveType(b) ? ClassHelper.getWrapper(b) : b)) {
				// "String implements Comparable<String>" and "StringBuffer implements Comparable<StringBuffer>"
				basicType = fallback; // do not loop
			} else {
				basicType = WideningCategories.lowestUpperBound(t1, t2);
			}
			if (agt[i].isWildcard || bgt[i].isWildcard || !t1.equals(t2)) {
				lubGTs[i] = GenericsUtils.buildWildcardType(basicType);
			} else {
				lubGTs[i] = basicType.asGenericsType();
			}
		}
		return GenericsUtils.makeClassSafe0(lub, ...lubGTs);
	}

	private static findGenericsTypeHolderForClass(source: ClassNode, target: ClassNode): ClassNode {
		if (ClassHelper.isPrimitiveType(source)) {
			source = ClassHelper.getWrapper(source);
		}
		if (source.equals(target)) {
			return source;
		}
		if (target.isInterface ? source.implementsInterface(target) : source.isDerivedFrom(target)) {
			let sc: ClassNode;
			do {
				sc = ClassHelper.getNextSuperClass(source, target);
				if (GenericsUtils.hasUnresolvedGenerics(sc)) {
					sc = GenericsUtils.correctToGenericsSpecRecurse(GenericsUtils.createGenericsSpec(source), sc);
				}
			} while (!(source = sc).equals(target));

			return sc;
		}
		return null;
	}

	private static upperBound(gt: GenericsType): ClassNode {
		if (gt.isPlaceholder || gt.isWildcard) {
			const ub = gt.upperBounds;
			if (ub != null) {
				return ub[0];
			}
		}
		return gt.type;
	}

	/**
	 * Given the interfaces implemented by two types, returns a list of the most
	 * specific common implemented interfaces.
	 */
	private static keepLowestCommonInterfaces(fromA: Array<ClassNode>, fromB: Array<ClassNode>): Array<ClassNode> {
		if (fromA == null || fromB == null) {
			return [];
		}

		// only element in fromA and fromB retained
		const common = [...fromA].filter(aNode => {
			return fromB.some(bNode => aNode.equals(bNode));
		});

		const result: Array<ClassNode> = [];
		for (const classNode of common) {
			WideningCategories.addMostSpecificInterface(classNode, result);
		}
		return result;
	}

	private static addMostSpecificInterface(interfaceNode: ClassNode, nodes: Array<ClassNode>): void {
		if (nodes.length === 0) {
			nodes.push(interfaceNode);
		}
		for (let i = 0, n = nodes.length; i < n; i += 1) {
			const node = nodes[i];
			if (node.equals(interfaceNode) || node.implementsInterface(interfaceNode)) {
				// a more specific interface exists in the list, keep it
				return;
			}
			if (interfaceNode.implementsInterface(node)) {
				// the interface being added is more specific than the one in the list, replace it
				nodes[i] = interfaceNode;
				return;
			}
		}
		// if we reach this point, this means the interface is new
		nodes.push(interfaceNode);
	}

	private static extractMostSpecificImplementedInterfaces(type: ClassNode, inode: ClassNode, result: Array<ClassNode>): void {
		if (type.implementsInterface(inode)) {
			result.push(inode);
		} else {
			const interfaces = inode.interfaces;
			for (const interfaceNode of interfaces) {
				if (type.implementsInterface(interfaceNode)) {
					result.push(interfaceNode);
				}
			}
			if (result.length === 0 && interfaces.length > 0) {
				// none if the direct interfaces match, but we must check "upper" in the hierarchy
				for (const interfaceNode of interfaces) {
					WideningCategories.extractMostSpecificImplementedInterfaces(type, interfaceNode, result);
				}
			}
		}
	}

	/**
	 * Given two class nodes supposedly at the upper common level, returns a class node which is able to represent
	 * their lowest upper bound.
	 * @param baseType1
	 * @param baseType2
	 * @param interfaces interfaces both class nodes share, which their lowest common super class do not implement.
	 * @return the class node representing the lowest upper bound
	 */
	private static buildTypeWithInterfaces(baseType1: ClassNode, baseType2: ClassNode, interfaces: Array<ClassNode>): ClassNode {
		if (interfaces.length === 0) {
			if (baseType2.isDerivedFrom(baseType1)) {
				return baseType1;
			}
			if (baseType1.isDerivedFrom(baseType2)) {
				return baseType2;
			}
		}

		let name: string;
		let superclass: ClassNode;
		if (baseType1.equals(baseType2)) {
			name = 'Virtual$' + baseType1.name;
			superclass = baseType1;
		} else {
			name = 'CommonAssignOf$' + baseType1.name + '$' + baseType2.name;
			if (baseType1.isDerivedFrom(baseType2)) {
				superclass = baseType2;
			} else if (baseType2.isDerivedFrom(baseType1)) {
				superclass = baseType1;
			} else {
				superclass = ClassHelper.OBJECT_TYPE;
			}
		}

		const afterRemoving = interfaces.filter(interfaceClass => {
			return !(superclass.equals(interfaceClass) || superclass.implementsInterface(interfaceClass));
		});
		interfaces.length = 0;
		interfaces.push(...afterRemoving);

		const nInterfaces = interfaces.length;
		if (nInterfaces == 0) {
			return superclass;
		}
		if (nInterfaces == 1 && ClassHelper.isObjectType(superclass)) {
			return interfaces[0];
		}
		return new LowestUpperBoundClassNode(name, superclass, ...interfaces);
	}

	/**
	 * Compares two class nodes, but including their generics types.
	 * @param a
	 * @param b
	 * @return true if the class nodes are equal, false otherwise
	 */
	private static areEqualWithGenerics(a: ClassNode, b: ClassNode): boolean {
		if (a == null) {
			return b == null;
		}
		if (!a.equals(b)) {
			return false;
		}
		if (a.isUsingGenerics && !b.isUsingGenerics) {
			return false;
		}
		const gta = a.genericsTypes;
		const gtb = b.genericsTypes;
		if (gta == null && gtb != null) {
			return false;
		}
		if (gtb == null && gta != null) {
			return false;
		}
		if (gta != null && gtb != null) {
			if (gta.length != gtb.length) {
				return false;
			}
			for (let i = 0, n = gta.length; i < n; i += 1) {
				const gta_i = gta[i];
				const gtb_i = gtb[i];
				const upperA = gta_i.upperBounds;
				const upperB = gtb_i.upperBounds;
				if (gta_i.isPlaceholder !== gtb_i.isPlaceholder
					|| gta_i.isWildcard !== gtb_i.isWildcard
					|| gta_i.name !== gtb_i.name
					|| !WideningCategories.areEqualWithGenerics(gta_i.type, gtb_i.type)
					|| !WideningCategories.areEqualWithGenerics(gta_i.lowerBound, gtb_i.lowerBound)
					|| (upperA == null
						? upperB != null
						: upperB.length !== upperA.length || new Array(upperA.length).fill(1).some((_, j) => !WideningCategories.areEqualWithGenerics(upperA[j], upperB[j])))) {
					return false;
				}
			}
		}
		return true;
	}

	/**
	 * Determines if the source class implements an interface or subclasses the target type.
	 * This method takes the {@link org.codehaus.groovy.ast.tools.WideningCategories.LowestUpperBoundClassNode lowest
	 * upper bound class node} type into account, allowing to remove unnecessary casts.
	 * @param source the type of interest
	 * @param targetType the target type of interest
	 */
	static implementsInterfaceOrSubclassOf(source: ClassNode, targetType: ClassNode): boolean {
		if (source.isDerivedFrom(targetType) || source.implementsInterface(targetType)) {
			return true;
		}
		if (targetType instanceof LowestUpperBoundClassNode) {
			const lub = targetType;
			if (WideningCategories.implementsInterfaceOrSubclassOf(source, lub.superclass)) {
				return true;
			}
			for (const classNode of lub.interfaces) {
				if (source.implementsInterface(classNode)) {
					return true;
				}
			}
		}
		return false;
	}
}
