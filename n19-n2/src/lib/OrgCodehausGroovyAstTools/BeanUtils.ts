import {ClassHelper, ClassNode, MethodNode, PropertyNode} from '../OrgCodehausGroovyAst';
import {Statement} from '../OrgCodehausGroovyAstStmt';

export class BeanUtils {
	static readonly GET_PREFIX: string = 'get';
	static readonly SET_PREFIX: string = 'set';
	static readonly IS_PREFIX: string = 'is';
	private static readonly INTERNAL_TYPE: ClassNode = ClassHelper.make(Internal.class);

	private constructor() {
		// avoid extend
	}

	/**
	 * Get all properties including JavaBean pseudo properties matching getter conventions.
	 *
	 * @param type the ClassNode
	 * @param includeSuperProperties whether to include super properties
	 * @param includeStatic whether to include static properties
	 * @param includePseudoGetters whether to include JavaBean pseudo (getXXX/isYYY) properties with no corresponding field
	 * @param includePseudoSetters
	 * @param superFirst
	 * @return the list of found property nodes
	 */
	static getAllProperties(type: ClassNode, includeSuperProperties: boolean, includeStatic: boolean,
	                        includePseudoGetters: boolean, includePseudoSetters: boolean = false,
	                        superFirst: boolean = false): Array<PropertyNode> {
		return BeanUtils.doGetAllProperties(type, type, [], includeSuperProperties, includeStatic, includePseudoGetters, includePseudoSetters, superFirst);
	}

	private static doGetAllProperties(origType: ClassNode, type: ClassNode, names: Array<string>,
	                                  includeSuperProperties: boolean, includeStatic: boolean,
	                                  includePseudoGetters: boolean, includePseudoSetters: boolean, superFirst: boolean) {
		// TODO COPY FROM GROOVY: add generics support so this can be used for @EAHC
		if (type == null) {
			return [];
		}
		const result: Array<PropertyNode> = [];
		if (superFirst && includeSuperProperties) {
			result.push(...BeanUtils.doGetAllProperties(origType, type.superclass, names, includeSuperProperties, includeStatic, includePseudoGetters, includePseudoSetters, superFirst));
		}
		BeanUtils.addExplicitProperties(type, result, names, includeStatic);
		BeanUtils.addPseudoProperties(origType, type, result, names, includeStatic, includePseudoGetters, includePseudoSetters, includeSuperProperties);
		if (!superFirst && includeSuperProperties) {
			result.push(...BeanUtils.doGetAllProperties(origType, type.superclass, names, includeSuperProperties, includeStatic, includePseudoGetters, includePseudoSetters, superFirst));
		}
		return result;
	}

	private static addExplicitProperties(cNode: ClassNode, result: Array<PropertyNode>, names: Array<string>, includeStatic: boolean): void {
		for (const pNode of cNode.properties) {
			if (includeStatic || !pNode.isStatic) {
				if (!names.includes(pNode.name)) {
					result.push(pNode);
					names.push(pNode.name);
				}
			}
		}
	}

	private static decapitalize(property: string): string {
		if (property == null || property.length === 0) {
			return property;
		}
		if (property.length >= 2 && property.charAt(1) === property.charAt(1).toUpperCase() && property.charAt(0) === property.charAt(0).toUpperCase()) {
			return property;
		}
		return property.charAt(0).toLowerCase() + property.slice(1);
	}

	static addPseudoProperties(origType: ClassNode, cNode: ClassNode, result: Array<PropertyNode>, names: Array<string>,
	                           includeStatic: boolean, includePseudoGetters: boolean, includePseudoSetters: boolean,
	                           traverseSuperClasses: boolean = true) {
		if (!includePseudoGetters && !includePseudoSetters) {
			return;
		}
		const methods = traverseSuperClasses ? cNode.allDeclaredMethods : cNode.methods;
		for (const mNode of methods) {
			if (!includeStatic && mNode.isStatic) {
				continue;
			}
			if (AnnotatedNodeUtils.hasAnnotation(mNode, BeanUtils.INTERNAL_TYPE)) {
				continue;
			}
			const name = mNode.name;
			if ((name.length <= 3 && !name.startsWith(BeanUtils.IS_PREFIX)) || name === 'getClass' || name === 'getMetaClass' || name === 'getDeclaringClass') {
				// Optimization: skip invalid propertyNames
				continue;
			}
			if (mNode.declaringClass != origType && mNode.isPrivate) {
				// skip private super methods
				continue;
			}
			const paramCount = mNode.parameters.length;
			let paramType = mNode.returnType;
			let propName: string = null;
			let getter: Statement = null;
			let setter: Statement = null;
			if (paramCount == 0) {
				if (includePseudoGetters && name.startsWith(BeanUtils.GET_PREFIX)) {
					// Simple getter
					propName = BeanUtils.decapitalize(name.substring(3));
					getter = mNode.code;
				} else if (includePseudoGetters && name.startsWith(BeanUtils.IS_PREFIX) && ClassHelper.isPrimitiveBoolean(paramType)) {
					// boolean getter
					propName = BeanUtils.decapitalize(name.substring(2));
					getter = mNode.code;
				}
			} else if (paramCount == 1) {
				if (includePseudoSetters && name.startsWith(BeanUtils.SET_PREFIX)) {
					// Simple setter
					propName = BeanUtils.decapitalize(name.substring(3));
					setter = mNode.code;
					paramType = mNode.parameters[0].type;
				}
			}
			if (propName != null) {
				BeanUtils.addIfMissing(cNode, result, names, mNode, paramType, propName, getter, setter);
			}
		}
	}

	private static addIfMissing(cNode: ClassNode, result: Array<PropertyNode>, names: Array<string>,
	                            mNode: MethodNode, returnType: ClassNode, propName: string, getter: Statement, setter: Statement) {
		if (cNode.getProperty(propName) != null) {
			return;
		}
		if (names.includes(propName)) {
			for (const pn of result) {
				if (pn.name === propName && getter != null && pn.getterBlock == null) {
					pn.setGetterBlock(getter);
				}
				if (pn.name === propName && setter != null && pn.setterBlock == null) {
					pn.setSetterBlock(setter);
				}
			}
		} else {
			result.push(new PropertyNode(propName, mNode.modifiers, getter, setter, returnType, cNode, null));
			names.push(propName);
		}
	}

}
