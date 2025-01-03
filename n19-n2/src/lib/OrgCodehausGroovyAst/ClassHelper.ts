import {BuiltInConstants, IClass} from '../Java';
import {LowestUpperBoundClassNode} from '../OrgCodehausGroovyAstTools';
import {StaticTypeCheckingSupport, Traits} from '../OrgCodehausGroovyTransform';
import {Opcodes} from '../OrgObjectwebAsm';
import {Optional} from '../TsAddon';
import {ClassNode} from './ClassNode';
import { MethodNode } from './MethodNode';

class ClassHelperCache {
	private constructor() {
		// avoid extend
	}

	static readonly classCache: Map<string, ClassNode> = new Map();
}

export class ClassHelper {
	private static readonly classes: Array<IClass> = [
		Object.class, Boolean.TYPE, Character.TYPE, Byte.TYPE, Short.TYPE,
		Integer.TYPE, Long.TYPE, Double.TYPE, Float.TYPE, Void.TYPE,
		Closure.class, GString.class, List.class, Map.class, Range.class,
		Pattern.class, Script.class, String.class, Boolean.class,
		Character.class, Byte.class, Short.class, Integer.class, Long.class,
		Double.class, Float.class, BigDecimal.class, BigInteger.class,
		Number.class, Void.class, Reference.class, Class.class, MetaClass.class,
		Iterator.class, GeneratedClosure.class, GeneratedLambda.class, GroovyObjectSupport.class
	];
	static readonly TUPLE_CLASSES: Array<IClass> = [
		Tuple0.class, Tuple1.class, Tuple2.class, Tuple3.class, Tuple4.class, Tuple5.class, Tuple6.class,
		Tuple7.class, Tuple8.class, Tuple9.class, Tuple10.class, Tuple11.class, Tuple12.class, Tuple13.class,
		Tuple14.class, Tuple15.class, Tuple16.class
	];
	private static readonly primitiveClassNames: Array<string> = [
		'', 'boolean', 'char', 'byte', 'short', 'int', 'long', 'double', 'float', 'void'
	];
	static readonly OBJECT_TYPE: ClassNode = ClassHelper.makeCached(Object.class);
	static readonly CLOSURE_TYPE: ClassNode = ClassHelper.makeCached(Closure.class);
	static readonly GSTRING_TYPE: ClassNode = ClassHelper.makeCached(GString.class);
	static readonly RANGE_TYPE: ClassNode = ClassHelper.makeCached(Range.class);
	static readonly PATTERN_TYPE: ClassNode = ClassHelper.makeCached(Pattern.class);
	static readonly STRING_TYPE: ClassNode = ClassHelper.makeCached(String.class);
	static readonly SCRIPT_TYPE: ClassNode = ClassHelper.makeCached(Script.class);
	static readonly BINDING_TYPE: ClassNode = ClassHelper.makeCached(Binding.class);
	static readonly THROWABLE_TYPE: ClassNode = ClassHelper.makeCached(Throwable.class);
	static readonly boolean_TYPE: ClassNode = ClassHelper.makeCached(boolean.class);
	static readonly char_TYPE: ClassNode = ClassHelper.makeCached(char.class);
	static readonly byte_TYPE: ClassNode = ClassHelper.makeCached(byte.class);
	static readonly int_TYPE: ClassNode = ClassHelper.makeCached(int.class);
	static readonly long_TYPE: ClassNode = ClassHelper.makeCached(long.class);
	static readonly short_TYPE: ClassNode = ClassHelper.makeCached(short.class);
	static readonly double_TYPE: ClassNode = ClassHelper.makeCached(double.class);
	static readonly float_TYPE: ClassNode = ClassHelper.makeCached(float.class);
	static readonly Byte_TYPE: ClassNode = ClassHelper.makeCached(Byte.class);
	static readonly Short_TYPE: ClassNode = ClassHelper.makeCached(Short.class);
	static readonly Integer_TYPE: ClassNode = ClassHelper.makeCached(Integer.class);
	static readonly Long_TYPE: ClassNode = ClassHelper.makeCached(Long.class);
	static readonly Character_TYPE: ClassNode = ClassHelper.makeCached(Character.class);
	static readonly Float_TYPE: ClassNode = ClassHelper.makeCached(Float.class);
	static readonly Double_TYPE: ClassNode = ClassHelper.makeCached(Double.class);
	static readonly Boolean_TYPE: ClassNode = ClassHelper.makeCached(Boolean.class);
	static readonly BigInteger_TYPE: ClassNode = ClassHelper.makeCached(java.math.BigInteger.class);
	static readonly BigDecimal_TYPE: ClassNode = ClassHelper.makeCached(java.math.BigDecimal.class);
	static readonly Number_TYPE: ClassNode = ClassHelper.makeCached(Number.class);
	static readonly VOID_TYPE: ClassNode = ClassHelper.makeCached(Void.TYPE);
	static readonly void_WRAPPER_TYPE: ClassNode = ClassHelper.makeCached(Void.class);
	static readonly METACLASS_TYPE: ClassNode = ClassHelper.makeCached(MetaClass.class);
	static readonly Iterator_TYPE: ClassNode = ClassHelper.makeCached(Iterator.class);
	static readonly Annotation_TYPE: ClassNode = ClassHelper.makeCached(Annotation.class);
	static readonly ELEMENT_TYPE_TYPE: ClassNode = ClassHelper.makeCached(ElementType.class);
	static readonly AUTOCLOSEABLE_TYPE: ClassNode = ClassHelper.makeCached(AutoCloseable.class);
	static readonly SERIALIZABLE_TYPE: ClassNode = ClassHelper.makeCached(Serializable.class);
	static readonly SERIALIZEDLAMBDA_TYPE: ClassNode = ClassHelper.makeCached(SerializedLambda.class);
	static readonly SEALED_TYPE: ClassNode = ClassHelper.makeCached(Sealed.class);
	static readonly OVERRIDE_TYPE: ClassNode = ClassHelper.makeCached(Override.class);
	static readonly DEPRECATED_TYPE: ClassNode = ClassHelper.makeCached(Deprecated.class);
	// uncached constants
	static readonly MAP_TYPE: ClassNode = ClassHelper.makeWithoutCaching(Map.class);
	static readonly SET_TYPE: ClassNode = ClassHelper.makeWithoutCaching(Set.class);
	static readonly LIST_TYPE: ClassNode = ClassHelper.makeWithoutCaching(List.class);
	static readonly Enum_Type: ClassNode = ClassHelper.makeWithoutCaching(Enum.class);
	static readonly CLASS_Type: ClassNode = ClassHelper.makeWithoutCaching(Class.class);
	static readonly TUPLE_TYPE: ClassNode = ClassHelper.makeWithoutCaching(Tuple.class);
	static readonly STREAM_TYPE: ClassNode = ClassHelper.makeWithoutCaching(Stream.class);
	static readonly ITERABLE_TYPE: ClassNode = ClassHelper.makeWithoutCaching(Iterable.class);
	static readonly REFERENCE_TYPE: ClassNode = ClassHelper.makeWithoutCaching(Reference.class);
	static readonly COLLECTION_TYPE: ClassNode = ClassHelper.makeWithoutCaching(Collection.class);
	static readonly COMPARABLE_TYPE: ClassNode = ClassHelper.makeWithoutCaching(Comparable.class);
	static readonly GROOVY_OBJECT_TYPE: ClassNode = ClassHelper.makeWithoutCaching(GroovyObject.class);
	static readonly GENERATED_LAMBDA_TYPE: ClassNode = ClassHelper.makeWithoutCaching(GeneratedLambda.class);
	static readonly GENERATED_CLOSURE_Type: ClassNode = ClassHelper.makeWithoutCaching(GeneratedClosure.class);
	static readonly GROOVY_INTERCEPTABLE_TYPE: ClassNode = ClassHelper.makeWithoutCaching(GroovyInterceptable.class);
	static readonly GROOVY_OBJECT_SUPPORT_TYPE: ClassNode = ClassHelper.makeWithoutCaching(GroovyObjectSupport.class);
	private static readonly types: Array<ClassNode> = [
		ClassHelper.OBJECT_TYPE,
		ClassHelper.boolean_TYPE, ClassHelper.char_TYPE, ClassHelper.byte_TYPE, ClassHelper.short_TYPE,
		ClassHelper.int_TYPE, ClassHelper.long_TYPE, ClassHelper.double_TYPE, ClassHelper.float_TYPE,
		ClassHelper.VOID_TYPE, ClassHelper.CLOSURE_TYPE, ClassHelper.GSTRING_TYPE,
		ClassHelper.LIST_TYPE, ClassHelper.MAP_TYPE, ClassHelper.RANGE_TYPE, ClassHelper.PATTERN_TYPE,
		ClassHelper.SCRIPT_TYPE, ClassHelper.STRING_TYPE, ClassHelper.Boolean_TYPE, ClassHelper.Character_TYPE,
		ClassHelper.Byte_TYPE, ClassHelper.Short_TYPE, ClassHelper.Integer_TYPE, ClassHelper.Long_TYPE,
		ClassHelper.Double_TYPE, ClassHelper.Float_TYPE, ClassHelper.BigDecimal_TYPE, ClassHelper.BigInteger_TYPE,
		ClassHelper.Number_TYPE,
		ClassHelper.void_WRAPPER_TYPE, ClassHelper.REFERENCE_TYPE, ClassHelper.CLASS_Type, ClassHelper.METACLASS_TYPE,
		ClassHelper.Iterator_TYPE, ClassHelper.GENERATED_CLOSURE_Type, ClassHelper.GENERATED_LAMBDA_TYPE, ClassHelper.GROOVY_OBJECT_SUPPORT_TYPE,
		ClassHelper.GROOVY_OBJECT_TYPE, ClassHelper.GROOVY_INTERCEPTABLE_TYPE, ClassHelper.Enum_Type, ClassHelper.Annotation_TYPE
	];
	private static readonly DYNAMIC_TYPE_METADATA: string = '_DYNAMIC_TYPE_METADATA_';
	static readonly EMPTY_TYPE_ARRAY: Array<ClassNode> = [];
	static readonly OBJECT: string = 'java.lang.Object';
	private static readonly PRIMITIVE_TYPE_TO_WRAPPER_TYPE_MAP: Map<ClassNode, ClassNode> = (() => {
		const map = new Map<ClassNode, ClassNode>();
		map.set(ClassHelper.boolean_TYPE, ClassHelper.Boolean_TYPE);
		map.set(ClassHelper.byte_TYPE, ClassHelper.Byte_TYPE);
		map.set(ClassHelper.char_TYPE, ClassHelper.Character_TYPE);
		map.set(ClassHelper.short_TYPE, ClassHelper.Short_TYPE);
		map.set(ClassHelper.int_TYPE, ClassHelper.Integer_TYPE);
		map.set(ClassHelper.long_TYPE, ClassHelper.Long_TYPE);
		map.set(ClassHelper.float_TYPE, ClassHelper.Float_TYPE);
		map.set(ClassHelper.double_TYPE, ClassHelper.Double_TYPE);
		map.set(ClassHelper.VOID_TYPE, ClassHelper.void_WRAPPER_TYPE);
		return map;
	})();
	private static readonly WRAPPER_TYPE_TO_PRIMITIVE_TYPE_MAP: Map<ClassNode, ClassNode> = (() => {
		const map = new Map<ClassNode, ClassNode>();
		for (const [key, value] of ClassHelper.PRIMITIVE_TYPE_TO_WRAPPER_TYPE_MAP.entries()) {
			map.set(value, key);
		}
		return map;
	})();
	// TODO Collections.unmodifiableSet(Arrays.stream(Object.class.methods).map(m -> m.name).collect(Collectors.toSet()));
	private static readonly OBJECT_METHOD_NAME_SET: Array<string> = [];
	private static readonly REF_DESCRIPTION: string = BuiltInConstants.ARR_CLASS_HEAD.substring(1);
	private static readonly PRIMITIVE_TYPE_TO_DESCRIPTION_MAP: Map<ClassNode, string> = (() => {
		const map = new Map<ClassNode, string>();
		map.set(ClassHelper.int_TYPE, BuiltInConstants.ARR_INT.substring(1));
		map.set(ClassHelper.VOID_TYPE, 'V');
		map.set(ClassHelper.boolean_TYPE, BuiltInConstants.ARR_BOOLEAN.substring(1));
		map.set(ClassHelper.byte_TYPE, BuiltInConstants.ARR_BYTE.substring(1));
		map.set(ClassHelper.char_TYPE, BuiltInConstants.ARR_CHAR.substring(1));
		map.set(ClassHelper.short_TYPE, BuiltInConstants.ARR_SHORT.substring(1));
		map.set(ClassHelper.double_TYPE, BuiltInConstants.ARR_DOUBLE.substring(1));
		map.set(ClassHelper.float_TYPE, BuiltInConstants.ARR_FLOAT.substring(1));
		map.set(ClassHelper.long_TYPE, BuiltInConstants.ARR_LONG.substring(1));
		return map;
	})();
	private static readonly NAME_TO_PRIMITIVE_TYPE_MAP: Map<string, ClassNode> = (() => {
		const map = new Map<string, ClassNode>();
		map.set(BuiltInConstants.P_INT, ClassHelper.int_TYPE);
		map.set(BuiltInConstants.P_VOID, ClassHelper.VOID_TYPE);
		map.set(BuiltInConstants.P_BOOLEAN, ClassHelper.boolean_TYPE);
		map.set(BuiltInConstants.P_BYTE, ClassHelper.byte_TYPE);
		map.set(BuiltInConstants.P_CHAR, ClassHelper.char_TYPE);
		map.set(BuiltInConstants.P_SHORT, ClassHelper.short_TYPE);
		map.set(BuiltInConstants.P_DOUBLE, ClassHelper.double_TYPE);
		map.set(BuiltInConstants.P_FLOAT, ClassHelper.float_TYPE);
		map.set(BuiltInConstants.P_LONG, ClassHelper.long_TYPE);
		return map;
	})();

	static dynamicType(): ClassNode {
		const node = ClassHelper.OBJECT_TYPE.getPlainNodeReference();
		node.putNodeMetaData(ClassHelper.DYNAMIC_TYPE_METADATA, true);
		return node;
	}

	static makeCached(c: IClass): ClassNode {
		let classNode: ClassNode = ClassHelperCache.classCache.get(c.name);
		if (classNode == null) {
			classNode = new ClassNode(c);
			ClassHelperCache.classCache.set(c.name, classNode);
			VMPluginFactory.getPlugin().setAdditionalClassInformation(classNode);
		}
		return classNode;
	}

	/**
	 * Creates an array of ClassNodes using an array of classes.
	 * For each of the given classes a new ClassNode will be
	 * created
	 *
	 * @param classes an array of classes used to create the ClassNodes
	 * @return an array of ClassNodes
	 * @see #make(Class)
	 */
	static bulkMake(classes: Array<IClass>): Array<ClassNode> {
		return classes.map(clazz => ClassHelper.make(clazz));
	}

	/**
	 * Creates a ClassNode using a given class.
	 * A new ClassNode object is only created if the class
	 * is not one of the predefined ones
	 *
	 * @param nameOrClass class used to create the ClassNode
	 * @param includeGenerics
	 * @return ClassNode instance created from the given class
	 */
	static make(nameOrClass: string | IClass, includeGenerics: boolean = true): ClassNode {
		if (typeof nameOrClass === 'string') {
			if (nameOrClass.length == 0) {
				return ClassHelper.dynamicType();
			}

			for (let i = 0; i < ClassHelper.primitiveClassNames.length; i++) {
				if (ClassHelper.primitiveClassNames[i] === nameOrClass) {
					return ClassHelper.types[i];
				}
			}

			for (let i = 0; i < ClassHelper.classes.length; i++) {
				const cname = ClassHelper.classes[i].name;
				if (nameOrClass === cname) {
					return ClassHelper.types[i];
				}
			}
			return ClassHelper.makeWithoutCaching(nameOrClass);

		}
		for (let i = 0; i < ClassHelper.classes.length; i++) {
			if (nameOrClass == ClassHelper.classes[i]) {
				return ClassHelper.types[i];
			}
		}
		if (nameOrClass.isArray) {
			const cn = ClassHelper.make(nameOrClass.componentType, includeGenerics);
			return cn.makeArray();
		}
		return ClassHelper.makeWithoutCaching(nameOrClass, includeGenerics);
	}

	static makeWithoutCaching(nameOrClass: string | IClass, includeGenerics: boolean = true): ClassNode {
		if (typeof nameOrClass === 'string') {
			const cn = new ClassNode(nameOrClass, Opcodes.ACC_PUBLIC, ClassHelper.OBJECT_TYPE);
			cn.setPrimaryNode(false);
			return cn;
		}

		if (nameOrClass.isArray) {
			const cn = ClassHelper.makeWithoutCaching(nameOrClass.componentType, includeGenerics);
			return cn.makeArray();
		}

		const cached = ClassHelper.makeCached(nameOrClass);
		if (includeGenerics) {
			return cached;
		} else {
			const t = ClassHelper.makeWithoutCaching(nameOrClass.name);
			t.setRedirect(cached);
			return t;
		}
	}

	/**
	 * Creates a ClassNode containing the wrapper of a ClassNode
	 * of primitive type. Any ClassNode representing a primitive
	 * type should be created using the predefined types used in
	 * class. The method will check the parameter for known
	 * references of ClassNode representing a primitive type. If
	 * Reference is found, then a ClassNode will be contained that
	 * represents the wrapper class. For example for boolean, the
	 * wrapper class is java.lang.Boolean.
	 * <p>
	 * If the parameter is no primitive type, the redirected
	 * ClassNode will be returned
	 *
	 * @param cn the ClassNode containing a possible primitive type
	 * @see #make(Class)
	 * @see #make(String)
	 */
	static getWrapper(cn: ClassNode): ClassNode {
		cn = cn.redirect();
		if (!ClassHelper.isPrimitiveType(cn)) {
			return cn;
		}

		let result = ClassHelper.PRIMITIVE_TYPE_TO_WRAPPER_TYPE_MAP.get(cn);
		if (result == null) {
			result = ClassHelper.PRIMITIVE_TYPE_TO_WRAPPER_TYPE_MAP.get(cn.redirect());
		}

		if (null != result) {
			return result;
		}

		return cn;
	}

	static getUnwrapper(cn: ClassNode): ClassNode {
		cn = cn.redirect();
		if (ClassHelper.isPrimitiveType(cn)) {
			return cn;
		}

		const result = ClassHelper.WRAPPER_TYPE_TO_PRIMITIVE_TYPE_MAP.get(cn);

		if (null != result) {
			return result;
		}

		return cn;
	}

	/**
	 * Test to determine if a ClassNode is a primitive type.
	 * Note: this only works for ClassNodes created using a
	 * predefined ClassNode
	 *
	 * @param nameOrClass the ClassNode containing a possible primitive type
	 * @return true if the ClassNode is a primitive type
	 * @see #make(Class)
	 * @see #make(String)
	 */
	static isPrimitiveType(nameOrClass: string | ClassNode): boolean {
		if (typeof nameOrClass === 'string') {
			return ClassHelper.NAME_TO_PRIMITIVE_TYPE_MAP.has(nameOrClass);
		} else {
			return nameOrClass != null && ClassHelper.PRIMITIVE_TYPE_TO_DESCRIPTION_MAP.has(nameOrClass.redirect());
		}
	}

	/**
	 * Test to determine if a ClassNode is a type belongs to the list of types which
	 * are allowed to initialize constants directly in bytecode instead of using &lt;cinit&gt;
	 * <p>
	 * Note: this only works for ClassNodes created using a
	 * predefined ClassNode
	 *
	 * @param cn the ClassNode to be tested
	 * @return true if the ClassNode is of int, float, long, double or String type
	 * @see #make(Class)
	 * @see #make(String)
	 */
	static isStaticConstantInitializerType(cn: ClassNode): boolean {
		return ClassHelper.isPrimitiveInt(cn) ||
			ClassHelper.isPrimitiveFloat(cn) ||
			ClassHelper.isPrimitiveLong(cn) ||
			ClassHelper.isPrimitiveDouble(cn) ||
			ClassHelper.isStringType(cn) ||
			// the next items require conversion to int when initializing
			ClassHelper.isPrimitiveByte(cn) ||
			ClassHelper.isPrimitiveChar(cn) ||
			ClassHelper.isPrimitiveShort(cn);
	}

	static isNumberType(cn: ClassNode): boolean {
		return ClassHelper.isWrapperByte(cn) ||
			ClassHelper.isWrapperShort(cn) ||
			ClassHelper.isWrapperInteger(cn) ||
			ClassHelper.isWrapperLong(cn) ||
			ClassHelper.isWrapperFloat(cn) ||
			ClassHelper.isWrapperDouble(cn) ||
			ClassHelper.isPrimitiveByte(cn) ||
			ClassHelper.isPrimitiveShort(cn) ||
			ClassHelper.isPrimitiveInt(cn) ||
			ClassHelper.isPrimitiveLong(cn) ||
			ClassHelper.isPrimitiveFloat(cn) ||
			ClassHelper.isPrimitiveDouble(cn);
	}

	static makeReference(): ClassNode {
		return ClassHelper.REFERENCE_TYPE.getPlainNodeReference();
	}

	static isCachedType(type: ClassNode): boolean {
		for (const cachedType of ClassHelper.types) {
			if (cachedType === type) {
				return true;
			}
		}
		return false;
	}

	static isDynamicTyped(type: ClassNode): boolean {
		return type != null && type.getNodeMetaData(ClassHelper.DYNAMIC_TYPE_METADATA) === true;
	}

	static isPrimitiveBoolean(type: ClassNode): boolean {
		return type.redirect() === ClassHelper.boolean_TYPE;
	}

	static isPrimitiveChar(type: ClassNode): boolean {
		return type.redirect() === ClassHelper.char_TYPE;
	}

	static isPrimitiveByte(type: ClassNode): boolean {
		return type.redirect() === ClassHelper.byte_TYPE;
	}

	static isPrimitiveInt(type: ClassNode): boolean {
		return type.redirect() === ClassHelper.int_TYPE;
	}

	static isPrimitiveLong(type: ClassNode): boolean {
		return type.redirect() === ClassHelper.long_TYPE;
	}

	static isPrimitiveShort(type: ClassNode): boolean {
		return type.redirect() === ClassHelper.short_TYPE;
	}

	static isPrimitiveDouble(type: ClassNode): boolean {
		return type.redirect() === ClassHelper.double_TYPE;
	}

	static isPrimitiveFloat(type: ClassNode): boolean {
		return type.redirect() === ClassHelper.float_TYPE;
	}

	static isPrimitiveVoid(type: ClassNode): boolean {
		return type.redirect() === ClassHelper.VOID_TYPE;
	}

	static isWrapperBoolean(type: ClassNode): boolean {
		return type != null && type.redirect() === ClassHelper.Boolean_TYPE;
	}

	static isWrapperCharacter(type: ClassNode): boolean {
		return type != null && type.redirect() === ClassHelper.Character_TYPE;
	}

	static isWrapperByte(type: ClassNode): boolean {
		return type != null && type.redirect() === ClassHelper.Byte_TYPE;
	}

	static isWrapperInteger(type: ClassNode): boolean {
		return type != null && type.redirect() === ClassHelper.Integer_TYPE;
	}

	static isWrapperLong(type: ClassNode): boolean {
		return type != null && type.redirect() === ClassHelper.Long_TYPE;
	}

	static isWrapperShort(type: ClassNode): boolean {
		return type != null && type.redirect() === ClassHelper.Short_TYPE;
	}

	static isWrapperDouble(type: ClassNode): boolean {
		return type != null && type.redirect() === ClassHelper.Double_TYPE;
	}

	static isWrapperFloat(type: ClassNode): boolean {
		return type != null && type.redirect() === ClassHelper.Float_TYPE;
	}

	static isWrapperVoid(type: ClassNode): boolean {
		return type != null && type.redirect() === ClassHelper.void_WRAPPER_TYPE;
	}

	static isBigIntegerType(type: ClassNode): boolean {
		return ClassHelper.BigInteger_TYPE.equals(type);
	}

	static isBigDecimalType(type: ClassNode): boolean {
		return ClassHelper.BigDecimal_TYPE.equals(type);
	}

	static isStringType(type: ClassNode): boolean {
		return ClassHelper.STRING_TYPE.equals(type);
	}

	static isGStringType(type: ClassNode): boolean {
		return ClassHelper.GSTRING_TYPE.equals(type);
	}

	static isObjectType(type: ClassNode): boolean {
		return ClassHelper.OBJECT_TYPE.equals(type);
	}

	static isGroovyObjectType(type: ClassNode): boolean {
		return ClassHelper.GROOVY_OBJECT_TYPE.equals(type);
	}

	static isClassType(type: ClassNode): boolean {
		return ClassHelper.CLASS_Type.equals(type);
	}

	static isSAMType(type: ClassNode): boolean {
		return ClassHelper.findSAM(type) != null;
	}

	static isFunctionalInterface(type: ClassNode): boolean {
		// Functional interface must be an interface at first, or the following exception will occur:
		// java.lang.invoke.LambdaConversionException: Functional interface SamCallable is not an interface
		return type != null && type.isInterface && ClassHelper.isSAMType(type);
	}

	/**
	 * Checks if the type is a generated function, i.e. closure or lambda.
	 *
	 * @since 3.0.0
	 */
	static isGeneratedFunction(type: ClassNode): boolean {
		return type.implementsAnyInterfaces(ClassHelper.GENERATED_CLOSURE_Type, ClassHelper.GENERATED_LAMBDA_TYPE);
	}

	/**
	 * Returns the single abstract method of a class node, if it is a SAM type, or null otherwise.
	 *
	 * @param type a type for which to search for a single abstract method
	 * @return the method node if type is a SAM type, null otherwise
	 */
	static findSAM(type: ClassNode): MethodNode {
		if (type == null) {
			return null;
		}
		if (type.isInterface) {
			let sam: MethodNode = null;
			for (const mn of type.abstractMethods) {
				// ignore methods that will have an implementation
				if (Traits.hasDefaultImplementation(mn)) {
					continue;
				}

				const name: string = mn.name;
				if (ClassHelper.OBJECT_METHOD_NAME_SET.includes(name)) {
					// Avoid unnecessary checking for `Object` methods as possible as we could
					if (ClassHelper.OBJECT_TYPE.getDeclaredMethod(name, mn.parameters) != null) {
						continue;
					}
				}

				// we have two methods, so no SAM
				if (sam != null) {
					return null;
				}
				sam = mn;
			}
			return sam;
		} else if (type.isAbstract) {
			let sam: MethodNode = null;
			for (const mn of type.abstractMethods) {
				if (!ClassHelper.hasUsableImplementation(type, mn)) {
					if (sam != null) {
						return null;
					}
					sam = mn;
				}
			}
			return sam;
		}
		return null;
	}

	private static hasUsableImplementation(c: ClassNode, m: MethodNode): boolean {
		const declaringClass = m.declaringClass;
		if (c.equals(declaringClass)) {
			return false;
		}
		// GROOVY-10540: GroovyObject declared and Verifier not run yet
		if (ClassHelper.isGroovyObjectType(declaringClass) && c.compileUnit != null) {
			return true;
		}

		const found = c.getDeclaredMethod(m.name, m.parameters);
		if (found == null) {
			return false;
		}

		const modifiers = (found.modifiers & 0x40F);//ACC_ABSTRACT|ACC_STATIC|ACC_PROTECTED|ACC_PRIVATE|ACC_PUBLIC
		if (modifiers == Opcodes.ACC_PUBLIC || modifiers == Opcodes.ACC_PROTECTED) {
			return true;
		}

		return !ClassHelper.isObjectType(c) && ClassHelper.hasUsableImplementation(c.superclass, m);
	}

	/**
	 * Returns a super class or interface for a given class depending on supplied
	 * target. If the target is not a super class or interface, then null will be
	 * returned. For a non-primitive array type -- if the target is also an array
	 * -- returns an array of the component type's super class or interface.
	 */
	static getNextSuperClass(source: ClassNode, target: ClassNode): Optional<ClassNode> {
		if (source.isArray) {
			if (!target.isArray) {
				return (void 0);
			}

			let cn = ClassHelper.getNextSuperClass(source.componentType, target.componentType);
			if (cn != null) {
				cn = cn.makeArray();
			}
			return cn;
		} else if (target.isInterface) {
			for (const interfaceClass of source.getUnresolvedInterfaces()) {
				if (StaticTypeCheckingSupport.implementsInterfaceOrIsSubclassOf(interfaceClass, target)) {
					return interfaceClass;
				}
			}
		} else if (source.isInterface) {
			return ClassHelper.OBJECT_TYPE;
		}

		return source.getUnresolvedSuperclass();
	}
}
