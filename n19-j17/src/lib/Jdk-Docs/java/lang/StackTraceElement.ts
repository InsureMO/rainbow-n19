import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.lang.StackTraceElement', [
	[/* class description */
		[/* text */ 't', `An element in a stack trace, as returned by `],
		[/* reference */ 'r', `.Throwable#getStackTrace()`],
		[/* text */ 't', `.  Each element represents a single stack frame.
 All stack frames except for the one at the top of the stack represent
 a method invocation.  The frame at the top of the stack represents the
 execution point at which the stack trace was generated.  Typically,
 this is the point at which the throwable corresponding to the stack trace
 was created.`]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>(java.lang.String,java.lang.String,java.lang.String,int)', [
			[/* constructor description */
				[/* text */ 't', `Creates a stack trace element representing the specified execution
 point. The `],
				[/* reference */ 'r', `#getModuleName()`, `module name`],
				[/* text */ 't', ` and `],
				[/* reference */ 'r', `#getModuleVersion()`, `module version`],
				[/* text */ 't', ` of the stack trace element will
 be `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'declaringClass', [/* parameter description */
					[/* text */ 't', `the fully qualified name of the class containing
        the execution point represented by the stack trace element`]
				]],
				[/* parameter */ 'methodName', [/* parameter description */
					[/* text */ 't', `the name of the method containing the execution point
        represented by the stack trace element`]
				]],
				[/* parameter */ 'fileName', [/* parameter description */
					[/* text */ 't', `the name of the file containing the execution point
         represented by the stack trace element, or `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` if
         this information is unavailable`]
				]],
				[/* parameter */ 'lineNumber', [/* parameter description */
					[/* text */ 't', `the line number of the source line containing the
         execution point represented by this stack trace element, or
         a negative number if this information is unavailable. A value
         of -2 indicates that the method containing the execution point
         is a native method`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `declaringClass`],
					[/* text */ 't', ` or
         `],
					[/* inline code block */ 'i', `methodName`],
					[/* text */ 't', ` is null`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,int)', [
			[/* constructor description */
				[/* text */ 't', `Creates a stack trace element representing the specified execution
 point.`]
			],
			[/* parameters */
				[/* parameter */ 'classLoaderName', [/* parameter description */
					[/* text */ 't', `the class loader name if the class loader of
        the class containing the execution point represented by
        the stack trace is named; otherwise `],
					[/* inline code block */ 'i', `null`]
				]],
				[/* parameter */ 'moduleName', [/* parameter description */
					[/* text */ 't', `the module name if the class containing the
        execution point represented by the stack trace is in a named
        module; otherwise `],
					[/* inline code block */ 'i', `null`]
				]],
				[/* parameter */ 'moduleVersion', [/* parameter description */
					[/* text */ 't', `the module version if the class containing the
        execution point represented by the stack trace is in a named
        module that has a version; otherwise `],
					[/* inline code block */ 'i', `null`]
				]],
				[/* parameter */ 'declaringClass', [/* parameter description */
					[/* text */ 't', `the fully qualified name of the class containing
        the execution point represented by the stack trace element`]
				]],
				[/* parameter */ 'methodName', [/* parameter description */
					[/* text */ 't', `the name of the method containing the execution point
        represented by the stack trace element`]
				]],
				[/* parameter */ 'fileName', [/* parameter description */
					[/* text */ 't', `the name of the file containing the execution point
        represented by the stack trace element, or `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` if
        this information is unavailable`]
				]],
				[/* parameter */ 'lineNumber', [/* parameter description */
					[/* text */ 't', `the line number of the source line containing the
        execution point represented by this stack trace element, or
        a negative number if this information is unavailable. A value
        of -2 indicates that the method containing the execution point
        is a native method`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `declaringClass`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `
         or `],
					[/* inline code block */ 'i', `methodName`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`]
				]]
			]
		]]
	],
	[/* methods */
		[/* method */ 'equals(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Returns true if the specified object is another
 `],
				[/* inline code block */ 'i', `StackTraceElement`],
				[/* text */ 't', ` instance representing the same execution
 point as this instance.  Two stack trace elements `],
				[/* inline code block */ 'i', `a`],
				[/* text */ 't', ` and
 `],
				[/* inline code block */ 'i', `b`],
				[/* text */ 't', ` are equal if and only if:
 `],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `equals(a.getClassLoaderName(), b.getClassLoaderName()) &&
     equals(a.getModuleName(), b.getModuleName()) &&
     equals(a.getModuleVersion(), b.getModuleVersion()) &&
     equals(a.getClassName(), b.getClassName()) &&
     equals(a.getMethodName(), b.getMethodName())
     equals(a.getFileName(), b.getFileName()) &&
     a.getLineNumber() == b.getLineNumber()`]
				]],
				[/* text */ 't', `
 where `],
				[/* inline code block */ 'i', `equals`],
				[/* text */ 't', ` has the semantics of `],
				[/* reference */ 'r', `java.Objects#equals(java.lang.Object,java.lang.Object)`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `the object to be compared with this stack trace element.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if the specified object is another
         `],
				[/* inline code block */ 'i', `StackTraceElement`],
				[/* text */ 't', ` instance representing the same
         execution point as this instance.`]
			]
		]],
		[/* method */ 'isNativeMethod()', [
			[/* method description */
				[/* text */ 't', `Returns true if the method containing the execution point
 represented by this stack trace element is a native method.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the method containing the execution point
         represented by this stack trace element is a native method.`]
			]
		]],
		[/* method */ 'getLineNumber()', [
			[/* method description */
				[/* text */ 't', `Returns the line number of the source line containing the execution
 point represented by this stack trace element.  Generally, this is
 derived from the `],
				[/* inline code block */ 'i', `LineNumberTable`],
				[/* text */ 't', ` attribute of the relevant
 `],
				[/* inline code block */ 'i', `class`],
				[/* text */ 't', ` file (as per `],
				[/* text */ 't', `The Java Virtual Machine
 Specification`],
				[/* text */ 't', `, Section `],
				[/* external link */ 'a', `https://docs.oracle.com/javase/specs/jvms/se17/html/jvms-4.html#jvms-4.7.8`, `4.7.8`],
				[/* text */ 't', `).`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the line number of the source line containing the execution
         point represented by this stack trace element, or a negative
         number if this information is unavailable.`]
			]
		]],
		[/* method */ 'hashCode()', [
			[/* method description */
				[/* text */ 't', `Returns a hash code value for this stack trace element.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a hash code value for this object.`]
			]
		]],
		[/* method */ 'getClassLoaderName()', [
			[/* method description */
				[/* text */ 't', `Returns the name of the class loader of the class containing the
 execution point represented by this stack trace element.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the name of the class loader of the class containing the execution
         point represented by this stack trace element; `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `
         if the class loader is not named.`]
			]
		]],
		[/* method */ 'getClassName()', [
			[/* method description */
				[/* text */ 't', `Returns the fully qualified name of the class containing the
 execution point represented by this stack trace element.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the fully qualified name of the `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` containing
         the execution point represented by this stack trace element.`]
			]
		]],
		[/* method */ 'getFileName()', [
			[/* method description */
				[/* text */ 't', `Returns the name of the source file containing the execution point
 represented by this stack trace element.  Generally, this corresponds
 to the `],
				[/* inline code block */ 'i', `SourceFile`],
				[/* text */ 't', ` attribute of the relevant `],
				[/* inline code block */ 'i', `class`],
				[/* text */ 't', `
 file (as per `],
				[/* text */ 't', `The Java Virtual Machine Specification`],
				[/* text */ 't', `, Section
 `],
				[/* external link */ 'a', `https://docs.oracle.com/javase/specs/jvms/se17/html/jvms-4.html#jvms-4.7.7`, `4.7.7`],
				[/* text */ 't', `).  In some systems, the name may refer to some source code unit
 other than a file, such as an entry in source repository.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the name of the file containing the execution point
         represented by this stack trace element, or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if
         this information is unavailable.`]
			]
		]],
		[/* method */ 'getMethodName()', [
			[/* method description */
				[/* text */ 't', `Returns the name of the method containing the execution point
 represented by this stack trace element.  If the execution point is
 contained in an instance or class initializer, this method will return
 the appropriate `],
				[/* text */ 't', `special method name`],
				[/* text */ 't', `, `],
				[/* inline code block */ 'i', `<init>`],
				[/* text */ 't', ` or
 `],
				[/* inline code block */ 'i', `<clinit>`],
				[/* text */ 't', `, as per Section `],
				[/* external link */ 'a', `https://docs.oracle.com/javase/specs/jvms/se17/html/jvms-3.html#jvms-3.9`, `3.9`],
				[/* text */ 't', ` of `],
				[/* text */ 't', `The Java Virtual
 Machine Specification`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the name of the method containing the execution point
         represented by this stack trace element.`]
			]
		]],
		[/* method */ 'getModuleName()', [
			[/* method description */
				[/* text */ 't', `Returns the module name of the module containing the execution point
 represented by this stack trace element.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the module name of the `],
				[/* inline code block */ 'i', `Module`],
				[/* text */ 't', ` containing the execution
         point represented by this stack trace element; `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `
         if the module name is not available.`]
			]
		]],
		[/* method */ 'getModuleVersion()', [
			[/* method description */
				[/* text */ 't', `Returns the module version of the module containing the execution point
 represented by this stack trace element.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the module version of the `],
				[/* inline code block */ 'i', `Module`],
				[/* text */ 't', ` containing the execution
         point represented by this stack trace element; `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `
         if the module version is not available.`]
			]
		]],
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Returns a string representation of this stack trace element.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a string representation of the object.`]
			]
		]]
	],
]);
