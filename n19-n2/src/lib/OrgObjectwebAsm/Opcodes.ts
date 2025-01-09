
export class Opcodes {
	static readonly ACC_PUBLIC: number = 0x0001; // class, field, method
	static readonly ACC_PRIVATE: number = 0x0002; // class, field, method
	static readonly ACC_PROTECTED: number = 0x0004; // class, field, method
	static readonly ACC_STATIC: number = 0x0008; // field, method
	static readonly ACC_FINAL: number = 0x0010; // class, field, method, parameter
	// static readonly ACC_SUPER: number = 0x0020; // class
	static readonly ACC_SYNCHRONIZED: number = 0x0020; // method
	// static readonly ACC_OPEN: number = 0x0020; // module
	// static readonly ACC_TRANSITIVE: number = 0x0020; // module requires
	static readonly ACC_VOLATILE: number = 0x0040; // field
	// static readonly ACC_BRIDGE: number = 0x0040; // method
	// static readonly ACC_STATIC_PHASE: number = 0x0040; // module requires
	// static readonly ACC_VARARGS: number = 0x0080; // method
	static readonly ACC_TRANSIENT: number = 0x0080; // field
	static readonly ACC_NATIVE: number = 0x0100; // method
	// static readonly ACC_INTERFACE: number = 0x0200; // class
	static readonly ACC_ABSTRACT: number = 0x0400; // class, method
	static readonly ACC_STRICT: number = 0x0800; // method
	// static readonly ACC_SYNTHETIC: number = 0x1000; // class, field, method, parameter, module *
	// static readonly ACC_ANNOTATION: number = 0x2000; // class
	// static readonly ACC_ENUM: number = 0x4000; // class(?) field inner
	// static readonly ACC_MANDATED: number = 0x8000; // field, method, parameter, module, module *
	// static readonly ACC_MODULE: number = 0x8000; // class

	// static readonly ACC_RECORD: number = 0x10000; // class
	// static readonly ACC_DEPRECATED: number = 0x20000; // class, field, method
}
