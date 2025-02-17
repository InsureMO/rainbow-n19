export class BuiltInConstants {
	// primitive types
	static readonly P_BOOLEAN = 'boolean';
	static readonly P_BYTE = 'byte';
	static readonly P_CHAR = 'char';
	static readonly P_DOUBLE = 'double';
	static readonly P_FLOAT = 'float';
	static readonly P_INT = 'int';
	static readonly P_SHORT = 'short';
	static readonly P_LONG = 'long';
	static readonly P_VOID = 'void';
	static readonly PRIMITIVE_TYPES = [
		BuiltInConstants.P_BOOLEAN,
		BuiltInConstants.P_BYTE,
		BuiltInConstants.P_CHAR,
		BuiltInConstants.P_DOUBLE,
		BuiltInConstants.P_FLOAT,
		BuiltInConstants.P_INT,
		BuiltInConstants.P_SHORT,
		BuiltInConstants.P_LONG,
		BuiltInConstants.P_VOID
	];
	// array class name
	static readonly ARR_HEAD = '[';
	static readonly ARR_BOOLEAN = '[Z';
	static readonly ARR_BYTE = '[B';
	static readonly ARR_DOUBLE = '[D';
	static readonly ARR_CHAR = '[C';
	static readonly ARR_FLOAT = '[F';
	static readonly ARR_INT = '[I';
	static readonly ARR_SHORT = '[S';
	static readonly ARR_LONG = '[J';
	static readonly CHAR_OF_PRIMITIVE_TYPES = 'ZBDCFISJ';
	/** map of primitive types to its one-dimension array */
	static readonly ARR_OF_PRIMITIVE_TYPES = {
		[BuiltInConstants.P_BOOLEAN]: BuiltInConstants.ARR_BOOLEAN,
		[BuiltInConstants.P_BYTE]: BuiltInConstants.ARR_BYTE,
		[BuiltInConstants.P_CHAR]: BuiltInConstants.ARR_CHAR,
		[BuiltInConstants.P_DOUBLE]: BuiltInConstants.ARR_DOUBLE,
		[BuiltInConstants.P_FLOAT]: BuiltInConstants.ARR_FLOAT,
		[BuiltInConstants.P_INT]: BuiltInConstants.ARR_INT,
		[BuiltInConstants.P_SHORT]: BuiltInConstants.ARR_SHORT,
		[BuiltInConstants.P_LONG]: BuiltInConstants.ARR_LONG
	};
	static readonly ARR_CLASS_HEAD = '[L';
	static readonly ARR_CLASS_TAIL = ';';
	// package
	static readonly LANG_PACKAGE = 'java.lang';
	// class
	static readonly LANG_OBJECT = 'java.lang.Object';
	static readonly ARR_OBJECT = BuiltInConstants.ARR_CLASS_HEAD + BuiltInConstants.LANG_OBJECT + BuiltInConstants.ARR_CLASS_TAIL;
	static readonly LANG_CLONEABLE = 'java.lang.Cloneable';
	static readonly LANG_SERIALIZABLE = 'java.io.Serializable';
	static readonly LANG_ENUM = 'java.lang.Enum';
	static readonly LANG_ANNOTATION_ANNOTATION = 'java.lang.annotation.Annotation';
	static readonly LANG_ANNOTATION_INHERITED = 'java.lang.annotation.Inherited';
	static readonly LANG_ANNOTATION_REPEATABLE = 'java.lang.annotation.Repeatable';
	// class conjunction
	static readonly SUB_CLASS_$ = '$';
	static readonly EMPTY_PACKAGE_NAME = '';
	static readonly EMPTY_CLASS_SIMPLE_NAME = '';

	private constructor() {
		// avoid extend
	}
}
