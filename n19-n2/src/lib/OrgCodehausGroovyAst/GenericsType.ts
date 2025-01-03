import {Modifier} from '../Java';
import {GenericsUtils, LowestUpperBoundClassNode} from '../OrgCodehausGroovyAstTools';
import {StaticTypeCheckingSupport} from '../OrgCodehausGroovyTransform';
import {Optional} from '../TsAddon';
import {ASTNode} from './ASTNode';
import {ClassHelper} from './ClassHelper';
import {ClassNode} from './ClassNode';

export class GenericsType extends ASTNode {
	static readonly EMPTY_ARRAY: Array<GenericsType> = [];

	private _name: string;
	private _type: ClassNode;
	private readonly _lowerBound: Optional<ClassNode>;
	private readonly _upperBounds: Optional<Array<ClassNode>>;
	private _placeholder: boolean = false;
	private _resolved: boolean = false;
	private _wildcard: boolean = false;

	constructor(type: ClassNode, upperBounds?: Array<ClassNode>, lowerBound?: ClassNode) {
		super();
		this.setType(type);
		this._lowerBound = lowerBound;
		this._upperBounds = upperBounds;
		this._placeholder = type.isGenericsPlaceHolder;
		this.setName(this._placeholder ? type.unresolvedName : type.name);
	}

	get type(): ClassNode {
		return this._type;
	}

	setType(type: ClassNode): void {
		this._type = type; // TODO COPY FROM GROOVY: ensure type is not primitive
	}

	toString(): string {
		return GenericsType.toString(this, new Set<string>());
	}

	private static toString(gt: GenericsType, visited: Set<string>): string {
		const name = gt.name;
		const type = gt.type;
		const wildcard = gt.isWildcard;
		const placeholder = gt.isPlaceholder;
		const lowerBound = gt.lowerBound;
		const upperBounds = gt.upperBounds;

		if (placeholder) {
			visited.add(name);
		}

		let ret = wildcard || placeholder ? name : GenericsType.genericsBounds(type, visited);
		if (lowerBound != null) {
			ret = ret + ' super ' + GenericsType.genericsBounds(lowerBound, visited);
		} else if (upperBounds != null && upperBounds.length !== 0
			// T extends Object should just be printed as T
			&& !(placeholder && upperBounds.length == 1 && !upperBounds[0].isGenericsPlaceHolder && upperBounds[0].name === ClassHelper.OBJECT)) {
			ret = ret + ' extends ';
			for (let i = 0, n = upperBounds.length; i < n; i += 1) {
				if (i != 0) {
					ret = ret + ' & ';
				}
				ret = ret + GenericsType.genericsBounds(upperBounds[i], visited);
			}
		}
		return ret.toString();
	}

	private static genericsBounds(theType: ClassNode, visited: Set<string>): string {
		let ret = GenericsType.appendName(theType, '');
		const genericsTypes = theType.genericsTypes;
		if (genericsTypes != null && genericsTypes.length !== 0 && !theType.isGenericsPlaceHolder) { // GROOVY-10583
			ret = ret + '<';
			for (let i = 0, n = genericsTypes.length; i < n; i += 1) {
				if (i != 0) {
					ret = ret + ', ';
				}
				const type = genericsTypes[i];
				if (type.isPlaceholder && visited.has(type.name)) {
					ret = ret + type.name;
				} else {
					ret = ret + GenericsType.toString(type, visited);
				}
			}
			ret = ret + '>';
		}
		return ret;
	}

	private static appendName(theType: ClassNode, sb: string): string {
		if (theType.isArray) {
			sb = sb + GenericsType.appendName(theType.componentType, sb) + '[]';
		} else if (theType.isGenericsPlaceHolder) {
			sb = sb + theType.unresolvedName;
		} else if (theType.outerClass != null) {
			let parentClassNodeName = theType.outerClass.name;
			if (Modifier.isStatic(theType.modifiers) || theType.isInterface) {
				sb = sb + parentClassNodeName;
			} else {
				let outerClass: ClassNode = theType.getNodeMetaData('outer.class');
				if (outerClass == null) {
					outerClass = theType.outerClass;
				}
				sb = sb + GenericsType.genericsBounds(outerClass, new Set<string>());
			}
			sb = sb + '.';
			sb = sb + theType.name.substring(parentClassNodeName.length + 1);
		} else {
			sb = sb + theType.name;
		}
		return sb;
	}

	get name(): string {
		return this.isWildcard ? '?' : this._name;
	}

	setName(name: string): void {
		this._name = name;
	}

	get isResolved(): boolean {
		return this._resolved;
	}

	setResolved(resolved: boolean): void {
		this._resolved = resolved;
	}

	get isPlaceholder(): boolean {
		return this._placeholder;
	}

	setPlaceholder(placeholder: boolean): void {
		this._placeholder = placeholder;
		this._resolved = this._resolved || placeholder;
		this._wildcard = this._wildcard && !placeholder;
		this.type.setGenericsPlaceHolder(placeholder);
	}

	get isWildcard(): boolean {
		return this._wildcard;
	}

	setWildcard(wildcard: boolean): void {
		this._wildcard = wildcard;
		this._placeholder = this._placeholder && !wildcard;
	}

	get lowerBound(): Optional<ClassNode> {
		return this._lowerBound;
	}

	get upperBounds(): Optional<Array<ClassNode>> {
		return this._upperBounds;
	}

	//--------------------------------------------------------------------------

	/**
	 * Determines if the provided type is compatible with this specification.
	 * The check is complete, meaning that nested generics are also checked.
	 */
	isCompatibleWith(classNode: ClassNode): boolean {
		const genericsTypes = classNode.genericsTypes;
		if (genericsTypes != null && genericsTypes.length == 0) {
			return true; // diamond always matches
		}
		if (classNode.isGenericsPlaceHolder) {
			if (genericsTypes == null || genericsTypes.length === 0) {
				return true;
			}
			const name = genericsTypes[0].name;
			if (!this.isWildcard) {
				return name === this.name;
			}
			if (this.lowerBound != null) {
				// check for "? super T" vs "T"
				const lowerBound = this.lowerBound;
				if (name === lowerBound.unresolvedName) {
					return true;
				}
			} else if (this.upperBounds != null && this.upperBounds.length !== 0) {
				// check for "? extends T & I" vs "T" or "I"
				for (const upperBound of this.upperBounds) {
					if (name === upperBound.unresolvedName) {
						return true;
					}
				}
			}
			// check for "? extends/super X" vs "T extends/super X"
			return this.checkGenerics(classNode);
		}
		if (this.isWildcard || this.isPlaceholder) {
			const lowerBound = this.lowerBound;
			if (lowerBound != null) {
				// test bound and type in reverse for lower bound vs upper bound
				if (!StaticTypeCheckingSupport.implementsInterfaceOrIsSubclassOf(lowerBound, classNode)) {
					return false;
				}
				return this.checkGenerics(classNode);
			}
			const upperBounds = this.upperBounds;
			if (upperBounds != null && upperBounds.length !== 0) {
				// check that provided type extends or implements all upper bounds
				for (const upperBound of upperBounds) {
					if (!StaticTypeCheckingSupport.implementsInterfaceOrIsSubclassOf(classNode, upperBound)) {
						return false;
					}
				}
				// if the provided type is a subclass of the upper bound(s) then
				// check that the generic types supplied are compatible with this
				// for example, this spec could be "Type<X>" but type is "Type<Y>"
				return this.checkGenerics(classNode);
			}
			// if there are no bounds, the generic type is basically Object and everything is compatible
			return true;
		}
		// not placeholder or wildcard; no covariance allowed for type or bound(s)
		return classNode.equals(this.type) && GenericsType.compareGenericsWithBound(classNode, this.type);
	}

	/**
	 * Compares the bounds of this generics specification against the given type
	 * for compatibility.  Ex: String would satisfy &lt;? extends CharSequence>.
	 */
	private checkGenerics(classNode: ClassNode): boolean {
		const lowerBound = this.lowerBound;
		if (lowerBound != null) {
			return GenericsType.compareGenericsWithBound(classNode, lowerBound);
		}
		const upperBounds = this.upperBounds;
		if (upperBounds != null && upperBounds.length !== 0) {
			for (const upperBound of upperBounds) {
				if (!GenericsType.compareGenericsWithBound(classNode, upperBound)) {
					return false;
				}
			}
		}
		return true;
	}

	/**
	 * Given a parameterized type (List&lt;String&gt; for example), checks that its
	 * generic types are compatible with those from a bound.
	 * @param classNode the classnode from which we will compare generics types
	 * @param bound the bound to which the types will be compared
	 * @return true if generics are compatible
	 */
	private static compareGenericsWithBound(classNode: ClassNode, bound: ClassNode): boolean {
		if (classNode == null) {
			return false;
		}
		if (bound.genericsTypes == null || bound.genericsTypes.length === 0
			|| classNode.isGenericsPlaceHolder // GROOVY-10556: "T" vs "C<T extends C<?>>" bound
			|| ((classNode.genericsTypes == null || classNode.genericsTypes.length === 0)
				&& classNode.redirect().genericsTypes != null && classNode.redirect().genericsTypes.length !== 0))
			// if the bound is not using generics or the class node is a raw type, there's nothing to compare
			return true;

		if (!classNode.equals(bound)) {
			// the class nodes are on different types
			// in this situation, we must choose the correct execution path : either the bound
			// is an interface and we must find the implementing interface from the classnode
			// to compare their parameterized generics, or the bound is a regular class and we
			// must compare the bound with a superclass
			if (bound.isInterface) {
				// iterate over all interfaces to check if any corresponds to the bound we are
				// comparing to
				for (let interfaceClass of classNode.allInterfaces) {
					if (interfaceClass.equals(bound)) {
						// when we obtain an interface, the types represented by the interface
						// class node are not parameterized. This means that we must create a
						// new class node with the parameterized types that the current class node
						// has defined.
						if (interfaceClass.genericsTypes != null && interfaceClass.genericsTypes.length !== 0) {
							interfaceClass = GenericsUtils.parameterizeType(classNode, interfaceClass);
						}
						return GenericsType.compareGenericsWithBound(interfaceClass, bound);
					}
				}
			}
			if (bound instanceof LowestUpperBoundClassNode) {
				// another special case here, where the bound is a "virtual" type
				// we must then check the superclass and the interfaces
				if (GenericsType.compareGenericsWithBound(classNode, bound.superclass)
					&& bound.interfaces.every(interfaceClass => GenericsType.compareGenericsWithBound(classNode, interfaceClass))) {
					return true;
				}
			}
			if (ClassHelper.isObjectType(classNode)) {
				return false;
			}
			let superclass = classNode.getUnresolvedSuperclass();
			if (superclass == null) {
				superclass = ClassHelper.OBJECT_TYPE;
			} else if (superclass.genericsTypes != null && superclass.genericsTypes.length !== 0) {
				superclass = GenericsUtils.parameterizeType(classNode, superclass);
			}
			return GenericsType.compareGenericsWithBound(superclass, bound);
		}

		let genericsTypes = classNode.genericsTypes;
		if (genericsTypes == null || genericsTypes.length === 0) {
			genericsTypes = classNode.redirect().genericsTypes;
		}
		if (genericsTypes == null || genericsTypes.length === 0) {
			// may happen if generic type is Foo<T extends Foo> and ClassNode is Foo -> Foo
			return true;
		}

		const redirectBoundGenericTypes = bound.redirect().genericsTypes;
		const boundPlaceHolders: Map<string, GenericsType> = GenericsUtils.extractPlaceholders(bound);
		const classNodePlaceholders: Map<string, GenericsType> = GenericsUtils.extractPlaceholders(classNode);
		let match = true;
		for (let i = 0; redirectBoundGenericTypes != null && redirectBoundGenericTypes.length !== 0 && i < redirectBoundGenericTypes.length && match; i += 1) {
			let redirectBoundType = redirectBoundGenericTypes[i];
			const classNodeType = genericsTypes[i];
			if (classNodeType.isPlaceholder) {
				const name = classNodeType.name;
				if (redirectBoundType.isPlaceholder) {
					const genericsTypeNodeName = redirectBoundType.name;
					match = name === genericsTypeNodeName || name === ('#' + redirectBoundType.name);
					if (!match) {
						const boundGenericsType = boundPlaceHolders.get(genericsTypeNodeName);
						if (boundGenericsType != null) {
							if (boundGenericsType.isPlaceholder) {
								match = true;
							} else if (boundGenericsType.isWildcard) {
								if (boundGenericsType.upperBounds != null && boundGenericsType.upperBounds.length !== 0) { // ? supports single bound only
									match = classNodeType.isCompatibleWith(boundGenericsType.upperBounds[0]);
								} else if (boundGenericsType.lowerBound != null) {
									match = classNodeType.isCompatibleWith(boundGenericsType.lowerBound);
								} else {
									match = true;
								}
							}
						}
					}
				} else {
					match = (classNodePlaceholders.get(name) ?? classNodeType).isCompatibleWith(redirectBoundType.type);
				}
			} else {
				if (redirectBoundType.isPlaceholder) {
					if (classNodeType.isPlaceholder) {
						match = classNodeType.name === redirectBoundType.name;
					} else {
						const name = redirectBoundType.name;
						if (boundPlaceHolders.has(name)) {
							redirectBoundType = boundPlaceHolders.get(name);
							if (redirectBoundType.isPlaceholder) {
								redirectBoundType = classNodePlaceholders.get(name) ?? redirectBoundType;

							} else if (redirectBoundType.isWildcard) {
								if (redirectBoundType.lowerBound != null) {
									// ex: class Comparable<Integer> <=> bound Comparable<? super T>
									let genericsType = new GenericsType(redirectBoundType.lowerBound);
									if (genericsType.isPlaceholder) {
										// check for recursive generic typedef, like in <T extends Comparable<? super T>>
										genericsType = classNodePlaceholders.get(genericsType.name) ?? genericsType;
									}
									// GROOVY-6095, GROOVY-9338
									if (classNodeType.isWildcard) {
										if (classNodeType.lowerBound != null || (classNodeType.upperBounds != null && classNodeType.upperBounds.length !== 0)) {
											match = classNodeType.checkGenerics(genericsType.type);
										} else {
											match = false; // "?" (from Comparable<?>) does not satisfy anything
										}
									} else {
										match = StaticTypeCheckingSupport.implementsInterfaceOrIsSubclassOf(genericsType.type, classNodeType.type);
									}
								} else if (redirectBoundType.upperBounds != null && redirectBoundType.upperBounds.length !== 0) {
									// ex: class Comparable<Integer> <=> bound Comparable<? extends T & I>
									for (const upperBound of redirectBoundType.upperBounds) {
										let genericsType = new GenericsType(upperBound);
										if (genericsType.isPlaceholder) {
											// check for recursive generic typedef, like in <T extends Comparable<? super T>>
											genericsType = classNodePlaceholders.get(genericsType.name) ?? genericsType;
										}
										// GROOVY-6095, GROOVY-9338
										if (classNodeType.isWildcard) {
											if (classNodeType.lowerBound != null) {
												match = genericsType.checkGenerics(classNodeType.lowerBound);
											} else if (classNodeType.upperBounds != null && classNodeType.upperBounds.length !== 0) {
												match = genericsType.checkGenerics(classNodeType.upperBounds[0]);
											} else { // GROOVY-10576: "?" vs "? extends Object" (citation required) or no match
												match = (!genericsType.isPlaceholder && !genericsType.isWildcard && ClassHelper.isObjectType(genericsType.type));
											}
										} else {
											match = StaticTypeCheckingSupport.implementsInterfaceOrIsSubclassOf(classNodeType.type, genericsType.type);
										}
										if (!match) {
											break;
										}
									}
								}
								continue; // GROOVY-10010
							}
						}
						match = redirectBoundType.isCompatibleWith(classNodeType.type);
					}
				} else {
					// TODO COPY FROM GROOVY: the check for isWildcard should be replaced with a more complete check
					match = redirectBoundType.isWildcard || classNodeType.isCompatibleWith(redirectBoundType.type);
				}
			}
		}
		return match;
	}
}
