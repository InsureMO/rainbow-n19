import {ClassHelper, ClassNode, GenericsType} from '../OrgCodehausGroovyAst';
import {GenericsUtils, LowestUpperBoundClassNode} from '../OrgCodehausGroovyAstTools';
import {Opcodes} from '../OrgObjectwebAsm';
import {UnionTypeClassNode} from './UnionTypeClassNode';

// org.codehaus.groovy.transform.stc.StaticTypeCheckingSupport
export class StaticTypeCheckingSupport {
	protected static readonly UNKNOWN_PARAMETER_TYPE: ClassNode = ClassHelper.make('<unknown parameter type>');
	protected static readonly NUMBER_TYPES: Map<string, number> = (() => {
		const map = new Map<string, number>();
		map.set(ClassHelper.byte_TYPE.name, 0);
		map.set(ClassHelper.Byte_TYPE.name, 0);
		map.set(ClassHelper.short_TYPE.name, 1);
		map.set(ClassHelper.Short_TYPE.name, 1);
		map.set(ClassHelper.int_TYPE.name, 2);
		map.set(ClassHelper.Integer_TYPE.name, 2);
		map.set(ClassHelper.Long_TYPE.name, 3);
		map.set(ClassHelper.long_TYPE.name, 3);
		map.set(ClassHelper.float_TYPE.name, 4);
		map.set(ClassHelper.Float_TYPE.name, 4);
		map.set(ClassHelper.double_TYPE.name, 5);
		map.set(ClassHelper.Double_TYPE.name, 5);
		return map;
	})();

	private constructor() {
		// avoid extend
	}

	static isUnboundedWildcard(gt: GenericsType): boolean {
		if (gt.isWildcard && gt.lowerBound == null) {
			const upperBounds = gt.upperBounds;
			return upperBounds == null || upperBounds.length == 0
				|| (upperBounds.length == 1 && ClassHelper.isObjectType(upperBounds[0]) && !upperBounds[0].isGenericsPlaceHolder);
		}
		return false;
	}

	static implementsInterfaceOrIsSubclassOf(type: ClassNode, superOrInterface: ClassNode): boolean {
		if (type.isArray && superOrInterface.isArray) {
			return StaticTypeCheckingSupport.implementsInterfaceOrIsSubclassOf(type.componentType, superOrInterface.componentType);
		}
		if (type == StaticTypeCheckingSupport.UNKNOWN_PARAMETER_TYPE // aka null
			|| type.isDerivedFrom(superOrInterface)
			|| type.implementsInterface(superOrInterface)) {
			return true;
		}
		if (superOrInterface instanceof LowestUpperBoundClassNode) {
			if (StaticTypeCheckingSupport.implementsInterfaceOrIsSubclassOf(type, superOrInterface.superclass)
				&& superOrInterface.interfaces.every(interfaceClass => type.implementsInterface(interfaceClass))) {
				return true;
			}
		} else if (superOrInterface instanceof UnionTypeClassNode) {
			for (const delegate of superOrInterface.delegates) {
				if (StaticTypeCheckingSupport.implementsInterfaceOrIsSubclassOf(type, delegate)) {
					return true;
				}
			}
		}
		// noinspection RedundantIfStatementJS
		if (ClassHelper.isGroovyObjectType(superOrInterface) && StaticTypeCheckingSupport.isBeingCompiled(type) && !type.isInterface) {
			// TODO COPY FROM GROOVY: !POJO !Trait
			return true;
		}
		return false;
	}

	static isBeingCompiled(node: ClassNode): boolean {
		return node.compileUnit != null;
	}

	static isAssignableTo(type: ClassNode, toBeAssignedTo: ClassNode): boolean {
		if (type == toBeAssignedTo || type == StaticTypeCheckingSupport.UNKNOWN_PARAMETER_TYPE) {
			return true;
		}
		if (ClassHelper.isPrimitiveType(type)) {
			type = ClassHelper.getWrapper(type);
		}
		if (ClassHelper.isPrimitiveType(toBeAssignedTo)) {
			toBeAssignedTo = ClassHelper.getWrapper(toBeAssignedTo);
		}
		if (StaticTypeCheckingSupport.NUMBER_TYPES.has(type.redirect().name) && StaticTypeCheckingSupport.NUMBER_TYPES.has(toBeAssignedTo.redirect().name)) {
			return StaticTypeCheckingSupport.NUMBER_TYPES.get(type.redirect().name) <= StaticTypeCheckingSupport.NUMBER_TYPES.get(toBeAssignedTo.redirect().name);
		}
		if (type.isArray && toBeAssignedTo.isArray) {
			const sourceComponent = type.componentType;
			const targetComponent = toBeAssignedTo.componentType;
			return ClassHelper.isPrimitiveType(targetComponent) ? sourceComponent.equals(targetComponent) // GROOVY-11053: strict
				: !ClassHelper.isPrimitiveType(sourceComponent) && StaticTypeCheckingSupport.isAssignableTo(sourceComponent, targetComponent); // GROOVY-10720
		}
		if (type.isDerivedFrom(ClassHelper.GSTRING_TYPE) && ClassHelper.isStringType(toBeAssignedTo)) {
			return true;
		}
		if (ClassHelper.isStringType(type) && toBeAssignedTo.isDerivedFrom(ClassHelper.GSTRING_TYPE)) {
			return true;
		}
		if (StaticTypeCheckingSupport.implementsInterfaceOrIsSubclassOf(type, toBeAssignedTo)) {
			if (toBeAssignedTo.genericsTypes != null && toBeAssignedTo.genericsTypes.length !== 0) { // perform additional check on generics
				const gt = toBeAssignedTo.isGenericsPlaceHolder ? toBeAssignedTo.genericsTypes[0] : GenericsUtils.buildWildcardType(toBeAssignedTo);
				return gt.isCompatibleWith(type);
			}
			return true;
		}
		// GROOVY-10067: unresolved argument like "N extends Number" for parameter like "Integer"
		if (type.isGenericsPlaceHolder && type.unresolvedName.charAt(0) == '#') {
			return type.asGenericsType().isCompatibleWith(toBeAssignedTo);
		}
		return (type.isDerivedFrom(ClassHelper.CLOSURE_TYPE) && ClassHelper.isSAMType(toBeAssignedTo));
	}

	static isUsingGenericsOrIsArrayUsingGenerics(cn: ClassNode): boolean {
		if (cn.isArray) {
			return StaticTypeCheckingSupport.isUsingGenericsOrIsArrayUsingGenerics(cn.componentType);
		}
		if (cn.isUsingGenerics) {
			if (cn.genericsTypes != null && cn.genericsTypes.length !== 0) {
				return true;
			}
			const oc = cn.outerClass;
			if (oc != null && oc.genericsTypes != null && oc.genericsTypes.length !== 0 && (cn.modifiers & Opcodes.ACC_STATIC) == 0) {
				return true;
			}
		}
		return false;
	}

	private static hasNonTrivialBounds(gt: GenericsType): boolean {
		if (gt.isWildcard) {
			return true;
		}
		if (gt.lowerBound != null) {
			return true;
		}
		const upperBounds = gt.upperBounds;
		if (upperBounds != null && upperBounds.length !== 0) {
			return (upperBounds.length != 1 || upperBounds[0].isGenericsPlaceHolder || !ClassHelper.isObjectType(upperBounds[0]));
		}
		return false;
	}

	static getCombinedBoundType(genericsType: GenericsType): ClassNode {
		// TODO COPY FROM GROOVY: This method should really return some kind of meta ClassNode
		// representing the combination of all bounds. The code here just picks
		// something out to be able to proceed and is not actually correct.
		if (StaticTypeCheckingSupport.hasNonTrivialBounds(genericsType)) {
			if (genericsType.lowerBound != null) {
				return ClassHelper.OBJECT_TYPE;
			} // GROOVY-10328
			if (genericsType.upperBounds != null && genericsType.upperBounds.length !== 0) {
				return genericsType.upperBounds[0];
			}
		}
		return genericsType.type;
	}

	private static applyGenericsContextForGenericsType(spec: Map<string, GenericsType>, gt: GenericsType): GenericsType {
		const type = gt.type;

		if (gt.isPlaceholder) {
			const name = gt.name;
			const specType = spec.get(name);
			if (specType != null) {
				return specType;
			}
			if (StaticTypeCheckingSupport.hasNonTrivialBounds(gt)) {
				const newGT = new GenericsType(type, StaticTypeCheckingSupport.applyGenericsContextForClasses(spec, gt.upperBounds), StaticTypeCheckingSupport.applyGenericsContextForClass(spec, gt.lowerBound));
				newGT.setPlaceholder(true);
				return newGT;
			}
			return gt;
		}

		if (gt.isWildcard) {
			const upperBounds = StaticTypeCheckingSupport.applyGenericsContextForClasses(spec, gt.upperBounds);
			const lowerBound = StaticTypeCheckingSupport.applyGenericsContextForClass(spec, gt.lowerBound);
			const newGT = new GenericsType(type, upperBounds, lowerBound);
			newGT.setWildcard(true);
			return newGT;
		}

		let newType;
		if (type.isArray) {
			newType = StaticTypeCheckingSupport.applyGenericsContextForClass(spec, type.componentType).makeArray();
		} else if ((type.genericsTypes == null || type.genericsTypes.length === 0) && type.outerClass == null) {
			return gt;
		} else {
			newType = type.getPlainNodeReference();
			newType.setGenericsPlaceHolder(type.isGenericsPlaceHolder);
			newType.setGenericsTypes(StaticTypeCheckingSupport.applyGenericsContextForGenericsTypes(spec, type.genericsTypes));

			// GROOVY-10646: non-static inner class + outer class type parameter
			if ((type.modifiers & Opcodes.ACC_STATIC) == 0) {
				const genericsTypes = type.outerClass?.genericsTypes;
				if (genericsTypes != null && genericsTypes.length !== 0) {
					const newGenericsTypes = StaticTypeCheckingSupport.applyGenericsContextForGenericsTypes(spec, genericsTypes);
					newType.putNodeMetaData('outer.class', newGenericsTypes);
				}
			}
		}
		return new GenericsType(newType);
	}

	static applyGenericsContextForGenericsTypes(spec: Map<string, GenericsType>, gts: Array<GenericsType>): Array<GenericsType> {
		if (gts == null || gts.length === 0 || spec == null || spec.size === 0) {
			return gts;
		}

		return gts.map(type => StaticTypeCheckingSupport.applyGenericsContextForGenericsType(spec, type));
	}

	static applyGenericsContextForClasses(spec: Map<string, GenericsType>, types: Array<ClassNode>): Array<ClassNode> {
		if (types == null) {
			return null;
		}
		return types.map(type => StaticTypeCheckingSupport.applyGenericsContextForClass(spec, type));
	}

	static applyGenericsContextForClass(spec: Map<string, GenericsType>, type: ClassNode): ClassNode {
		if (type == null) {
			return type;
		}
		if (!StaticTypeCheckingSupport.isUsingGenericsOrIsArrayUsingGenerics(type)) {
			return type;
		}
		if (type.isArray) {
			return StaticTypeCheckingSupport.applyGenericsContextForClass(spec, type.componentType).makeArray();
		}

		let gt = type.genericsTypes;
		if (spec != null && spec.size !== 0) {
			gt = StaticTypeCheckingSupport.applyGenericsContextForGenericsTypes(spec, gt);
		}
		if (!type.isGenericsPlaceHolder) { // convert Type<T> to Type<...>
			const cn = type.getPlainNodeReference();
			cn.setGenericsTypes(gt);
			return cn;
		}

		if (!gt[0].isPlaceholder) { // convert T to Type or Type<...>
			return StaticTypeCheckingSupport.getCombinedBoundType(gt[0]);
		}

		if (type.genericsTypes[0] != gt[0]) { // convert T to X
			const cn = ClassHelper.make(gt[0].name),
				erasure = StaticTypeCheckingSupport.getCombinedBoundType(gt[0]).redirect();
			cn.setGenericsPlaceHolder(true);
			cn.setGenericsTypes(gt);
			cn.setRedirect(erasure);
			return cn;
		}

		return type; // nothing to do
	}

	static resolveClassNodeGenerics(resolvedPlaceholders: Map<string, GenericsType>, placeholdersFromContext: Map<string, GenericsType>, currentType: ClassNode): ClassNode {
		let type = currentType; // GROOVY-10280, et al.
		type = StaticTypeCheckingSupport.applyGenericsContextForClass(resolvedPlaceholders, type);
		type = StaticTypeCheckingSupport.applyGenericsContextForClass(placeholdersFromContext, type);
		return type;
	}
}