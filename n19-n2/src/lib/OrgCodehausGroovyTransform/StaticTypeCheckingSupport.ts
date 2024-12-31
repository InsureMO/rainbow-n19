import {ClassHelper, ClassNode} from '../OrgCodehausGroovyAst';
import {LowestUpperBoundClassNode} from '../OrgCodehausGroovyAstTools';

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
			//TODO COPY FROM GROOVY: !POJO !Trait
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
			if (toBeAssignedTo.genericsTypes != null) { // perform additional check on generics
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
}