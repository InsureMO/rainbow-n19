import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.lang.StackWalker$StackFrame', [
	[/* class description */
		[/* text */ 't', `A `],
		[/* inline code block */ 'i', `StackFrame`],
		[/* text */ 't', ` object represents a method invocation returned by
 `],
		[/* reference */ 'r', `java.lang.StackWalker`],
		[/* text */ 't', `.

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` The `],
			[/* reference */ 'r', `#getDeclaringClass()`, `getDeclaringClass()`],
			[/* text */ 't', ` method may be unsupported as determined
 by the `],
			[/* reference */ 'r', `enum class in java.lang.StackWalker.Option`],
			[/* text */ 't', ` of a `],
			[/* reference */ 'r', `java.lang.StackWalker`],
			[/* text */ 't', `.`]
		]]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'getDescriptor()', [
			[/* method description */
				[/* text */ 't', `Returns the `],
				[/* text */ 't', `descriptor`],
				[/* text */ 't', ` of the method represented by
 this stack frame as defined by
 `],
				[/* text */ 't', `The Java Virtual Machine Specification`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the descriptor of the method represented by
         this stack frame`]
			]
		]],
		[/* method */ 'getDeclaringClass()', [
			[/* method description */
				[/* text */ 't', `Gets the declaring `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` for the method represented by
 this stack frame.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if this `],
					[/* inline code block */ 'i', `StackWalker`],
					[/* text */ 't', `
         is not configured with `],
					[/* reference */ 'r', `.StackWalker.Option#RETAIN_CLASS_REFERENCE`],
					[/* text */ 't', `.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the declaring `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` of the method represented by
 this stack frame`]
			]
		]],
		[/* method */ 'getMethodType()', [
			[/* method description */
				[/* text */ 't', `Returns the `],
				[/* reference */ 'r', `java.lang.invoke.MethodType`],
				[/* text */ 't', ` representing the parameter types and
 the return type for the method represented by this stack frame.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if this `],
					[/* inline code block */ 'i', `StackWalker`],
					[/* text */ 't', `
         is not configured with `],
					[/* reference */ 'r', `.StackWalker.Option#RETAIN_CLASS_REFERENCE`],
					[/* text */ 't', `.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the `],
				[/* inline code block */ 'i', `MethodType`],
				[/* text */ 't', ` for this stack frame`]
			]
		]],
		[/* method */ 'isNativeMethod()', [
			[/* method description */
				[/* text */ 't', `Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the method containing the execution point
 represented by this stack frame is a native method.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the method containing the execution point
         represented by this stack frame is a native method.`]
			]
		]],
		[/* method */ 'getFileName()', [
			[/* method description */
				[/* text */ 't', `Returns the name of the source file containing the execution point
 represented by this stack frame.  Generally, this corresponds
 to the `],
				[/* inline code block */ 'i', `SourceFile`],
				[/* text */ 't', ` attribute of the relevant `],
				[/* inline code block */ 'i', `class`],
				[/* text */ 't', `
 file as defined by `],
				[/* text */ 't', `The Java Virtual Machine Specification`],
				[/* text */ 't', `.
 In some systems, the name may refer to some source code unit
 other than a file, such as an entry in a source repository.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the name of the file containing the execution point
         represented by this stack frame, or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if
         this information is unavailable.`]
			]
		]],
		[/* method */ 'getLineNumber()', [
			[/* method description */
				[/* text */ 't', `Returns the line number of the source line containing the execution
 point represented by this stack frame.  Generally, this is
 derived from the `],
				[/* inline code block */ 'i', `LineNumberTable`],
				[/* text */ 't', ` attribute of the relevant
 `],
				[/* inline code block */ 'i', `class`],
				[/* text */ 't', ` file as defined by `],
				[/* text */ 't', `The Java Virtual Machine
 Specification`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the line number of the source line containing the execution
         point represented by this stack frame, or a negative number if
         this information is unavailable.`]
			]
		]],
		[/* method */ 'getClassName()', [
			[/* method description */
				[/* text */ 't', `Gets the `],
				[/* reference */ 'r', `.ClassLoader#binary-name`],
				[/* text */ 't', `
 of the declaring class of the method represented by this stack frame.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the binary name of the declaring class of the method
         represented by this stack frame`]
			]
		]],
		[/* method */ 'getMethodName()', [
			[/* method description */
				[/* text */ 't', `Gets the name of the method represented by this stack frame.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the name of the method represented by this stack frame`]
			]
		]],
		[/* method */ 'toStackTraceElement()', [
			[/* method description */
				[/* text */ 't', `Gets a `],
				[/* inline code block */ 'i', `StackTraceElement`],
				[/* text */ 't', ` for this stack frame.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `StackTraceElement`],
				[/* text */ 't', ` for this stack frame.`]
			]
		]],
		[/* method */ 'getByteCodeIndex()', [
			[/* method description */
				[/* text */ 't', `Returns the index to the code array of the `],
				[/* inline code block */ 'i', `Code`],
				[/* text */ 't', ` attribute
 containing the execution point represented by this stack frame.
 The code array gives the actual bytes of Java Virtual Machine code
 that implement the method.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the index to the code array of the `],
				[/* inline code block */ 'i', `Code`],
				[/* text */ 't', ` attribute
         containing the execution point represented by this stack frame,
         or a negative number if the method is native.`]
			]
		]]
	],
]);
