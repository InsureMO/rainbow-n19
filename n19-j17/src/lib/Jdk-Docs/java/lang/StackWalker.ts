import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.lang.StackWalker', [
	[/* class description */
		[/* text */ 't', `A stack walker.

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` The `],
			[/* reference */ 'r', `walk`],
			[/* text */ 't', ` method opens a sequential stream
 of `],
			[/* reference */ 'r', `java.lang.StackWalker.StackFrame`],
			[/* text */ 't', `s for the current thread and then applies
 the given function to walk the `],
			[/* inline code block */ 'i', `StackFrame`],
			[/* text */ 't', ` stream.
 The stream reports stack frame elements in order, from the top most frame
 that represents the execution point at which the stack was generated to
 the bottom most frame.
 The `],
			[/* inline code block */ 'i', `StackFrame`],
			[/* text */ 't', ` stream is closed when the `],
			[/* inline code block */ 'i', `walk`],
			[/* text */ 't', ` method returns.
 If an attempt is made to reuse the closed stream,
 `],
			[/* inline code block */ 'i', `IllegalStateException`],
			[/* text */ 't', ` will be thrown.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` The `],
			[/* reference */ 'r', `enum class in java.lang.StackWalker.Option`],
			[/* text */ 't', ` of a
 `],
			[/* inline code block */ 'i', `StackWalker`],
			[/* text */ 't', ` determines the information of
 `],
			[/* reference */ 'r', `java.lang.StackWalker.StackFrame`],
			[/* text */ 't', ` objects to be returned.
 By default, stack frames of the reflection API and implementation
 classes are `],
			[/* external link */ 'a', `StackWalker.Option.html#SHOW_HIDDEN_FRAMES`, `hidden`],
			[/* text */ 't', `
 and `],
			[/* inline code block */ 'i', `StackFrame`],
			[/* text */ 't', `s have the class name and method name
 available but not the `],
			[/* external link */ 'a', `StackWalker.StackFrame.html#getDeclaringClass()`, `Class reference`],
			[/* text */ 't', `.

 `]
		]],
		[/* block */ 'b', [
			[/* inline code block */ 'i', `StackWalker`],
			[/* text */ 't', ` is thread-safe. Multiple threads can share
 a single `],
			[/* inline code block */ 'i', `StackWalker`],
			[/* text */ 't', ` object to traverse its own stack.
 A permission check is performed when a `],
			[/* inline code block */ 'i', `StackWalker`],
			[/* text */ 't', ` is created,
 according to the options it requests.
 No further permission check is done at stack walking time.`]
		]]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'getCallerClass()', [
			[/* method description */
				[/* text */ 't', `Gets the `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` object of the caller who invoked the method
 that invoked `],
				[/* inline code block */ 'i', `getCallerClass`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method filters `],
					[/* external link */ 'a', `StackWalker.Option.html#SHOW_REFLECT_FRAMES`, `reflection frames`],
					[/* text */ 't', `, `],
					[/* reference */ 'r', `java.lang.invoke.MethodHandle`],
					[/* text */ 't', `, and
 `],
					[/* external link */ 'a', `StackWalker.Option.html#SHOW_HIDDEN_FRAMES`, `hidden frames`],
					[/* text */ 't', ` regardless of the
 `],
					[/* external link */ 'a', `StackWalker.Option.html#SHOW_REFLECT_FRAMES`, `SHOW_REFLECT_FRAMES`],
					[/* text */ 't', `
 and `],
					[/* external link */ 'a', `StackWalker.Option.html#SHOW_HIDDEN_FRAMES`, `SHOW_HIDDEN_FRAMES`],
					[/* text */ 't', ` options
 this `],
					[/* inline code block */ 'i', `StackWalker`],
					[/* text */ 't', ` has been configured with.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` This method should be called when a caller frame is present.  If
 it is called from the bottom most frame on the stack,
 `],
					[/* inline code block */ 'i', `IllegalCallerException`],
					[/* text */ 't', ` will be thrown.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` This method throws `],
					[/* inline code block */ 'i', `UnsupportedOperationException`],
					[/* text */ 't', `
 if this `],
					[/* inline code block */ 'i', `StackWalker`],
					[/* text */ 't', ` is not configured with the
 `],
					[/* external link */ 'a', `StackWalker.Option.html#RETAIN_CLASS_REFERENCE`, `RETAIN_CLASS_REFERENCE`],
					[/* text */ 't', ` option.`]
				]]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if this `],
					[/* inline code block */ 'i', `StackWalker`],
					[/* text */ 't', `
         is not configured with `],
					[/* external link */ 'a', `StackWalker.Option.html#RETAIN_CLASS_REFERENCE`, `Option.RETAIN_CLASS_REFERENCE`],
					[/* text */ 't', `.`]
				]],
				[/* throw */ 'java.lang.IllegalCallerException', [/* throw description */
					[/* text */ 't', `if there is no caller frame, i.e.
         when this `],
					[/* inline code block */ 'i', `getCallerClass`],
					[/* text */ 't', ` method is called from a method
         which is the last frame on the stack.`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` object of the caller's caller invoking this method.`]
			]
		]],
		[/* method */ 'getInstance()', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `StackWalker`],
				[/* text */ 't', ` instance.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This `],
					[/* inline code block */ 'i', `StackWalker`],
					[/* text */ 't', ` is configured to skip all
 `],
					[/* external link */ 'a', `StackWalker.Option.html#SHOW_HIDDEN_FRAMES`, `hidden frames`],
					[/* text */ 't', ` and
 no `],
					[/* external link */ 'a', `StackWalker.Option.html#RETAIN_CLASS_REFERENCE`, `class reference`],
					[/* text */ 't', ` is retained.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `StackWalker`],
				[/* text */ 't', ` configured to skip all
 `],
				[/* external link */ 'a', `StackWalker.Option.html#SHOW_HIDDEN_FRAMES`, `hidden frames`],
				[/* text */ 't', ` and
 no `],
				[/* external link */ 'a', `StackWalker.Option.html#RETAIN_CLASS_REFERENCE`, `class reference`],
				[/* text */ 't', ` is retained.`]
			]
		]],
		[/* method */ 'getInstance(java.lang.StackWalker.Option)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `StackWalker`],
				[/* text */ 't', ` instance with the given option specifying
 the stack frame information it can access.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 If a security manager is present and the given `],
					[/* inline code block */ 'i', `option`],
					[/* text */ 't', ` is
 `],
					[/* external link */ 'a', `StackWalker.Option.html#RETAIN_CLASS_REFERENCE`, `Option.RETAIN_CLASS_REFERENCE`],
					[/* text */ 't', `,
 it calls its `],
					[/* external link */ 'a', `SecurityManager.html#checkPermission(java.security.Permission)`, `checkPermission`],
					[/* text */ 't', `
 method for `],
					[/* inline code block */ 'i', `RuntimePermission("getStackWalkerWithClassReference")`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'option', [/* parameter description */
					[/* text */ 't', ``],
					[/* reference */ 'r', `enum class in java.lang.StackWalker.Option`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if a security manager exists and its
         `],
					[/* inline code block */ 'i', `checkPermission`],
					[/* text */ 't', ` method denies access.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `StackWalker`],
				[/* text */ 't', ` configured with the given option`]
			]
		]],
		[/* method */ 'getInstance(java.util.Set,int)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `StackWalker`],
				[/* text */ 't', ` instance with the given `],
				[/* inline code block */ 'i', `options`],
				[/* text */ 't', ` specifying
 the stack frame information it can access. If the given `],
				[/* inline code block */ 'i', `options`],
				[/* text */ 't', `
 is empty, this `],
				[/* inline code block */ 'i', `StackWalker`],
				[/* text */ 't', ` is configured to skip all
 `],
				[/* external link */ 'a', `StackWalker.Option.html#SHOW_HIDDEN_FRAMES`, `hidden frames`],
				[/* text */ 't', ` and no
 `],
				[/* external link */ 'a', `StackWalker.Option.html#RETAIN_CLASS_REFERENCE`, `class reference`],
				[/* text */ 't', ` is retained.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 If a security manager is present and the given `],
					[/* inline code block */ 'i', `options`],
					[/* text */ 't', ` contains
 `],
					[/* external link */ 'a', `StackWalker.Option.html#RETAIN_CLASS_REFERENCE`, `Option.RETAIN_CLASS_REFERENCE`],
					[/* text */ 't', `,
 it calls its `],
					[/* external link */ 'a', `SecurityManager.html#checkPermission(java.security.Permission)`, `checkPermission`],
					[/* text */ 't', `
 method for `],
					[/* inline code block */ 'i', `RuntimePermission("getStackWalkerWithClassReference")`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The `],
					[/* inline code block */ 'i', `estimateDepth`],
					[/* text */ 't', ` specifies the estimate number of stack frames
 this `],
					[/* inline code block */ 'i', `StackWalker`],
					[/* text */ 't', ` will traverse that the `],
					[/* inline code block */ 'i', `StackWalker`],
					[/* text */ 't', ` could
 use as a hint for the buffer size.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'options', [/* parameter description */
					[/* text */ 't', ``],
					[/* reference */ 'r', `enum class in java.lang.StackWalker.Option`]
				]],
				[/* parameter */ 'estimateDepth', [/* parameter description */
					[/* text */ 't', `Estimate number of stack frames to be traversed.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `estimateDepth <= 0`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if a security manager exists and its
         `],
					[/* inline code block */ 'i', `checkPermission`],
					[/* text */ 't', ` method denies access.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `StackWalker`],
				[/* text */ 't', ` configured with the given options`]
			]
		]],
		[/* method */ 'getInstance(java.util.Set)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `StackWalker`],
				[/* text */ 't', ` instance with the given `],
				[/* inline code block */ 'i', `options`],
				[/* text */ 't', ` specifying
 the stack frame information it can access.  If the given `],
				[/* inline code block */ 'i', `options`],
				[/* text */ 't', `
 is empty, this `],
				[/* inline code block */ 'i', `StackWalker`],
				[/* text */ 't', ` is configured to skip all
 `],
				[/* external link */ 'a', `StackWalker.Option.html#SHOW_HIDDEN_FRAMES`, `hidden frames`],
				[/* text */ 't', ` and no
 `],
				[/* external link */ 'a', `StackWalker.Option.html#RETAIN_CLASS_REFERENCE`, `class reference`],
				[/* text */ 't', ` is retained.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 If a security manager is present and the given `],
					[/* inline code block */ 'i', `options`],
					[/* text */ 't', ` contains
 `],
					[/* external link */ 'a', `StackWalker.Option.html#RETAIN_CLASS_REFERENCE`, `Option.RETAIN_CLASS_REFERENCE`],
					[/* text */ 't', `,
 it calls its `],
					[/* external link */ 'a', `SecurityManager.html#checkPermission(java.security.Permission)`, `checkPermission`],
					[/* text */ 't', `
 method for `],
					[/* inline code block */ 'i', `RuntimePermission("getStackWalkerWithClassReference")`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'options', [/* parameter description */
					[/* text */ 't', ``],
					[/* reference */ 'r', `enum class in java.lang.StackWalker.Option`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if a security manager exists and its
         `],
					[/* inline code block */ 'i', `checkPermission`],
					[/* text */ 't', ` method denies access.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `StackWalker`],
				[/* text */ 't', ` configured with the given options`]
			]
		]],
		[/* method */ 'forEach(java.util.function.Consumer)', [
			[/* method description */
				[/* text */ 't', `Performs the given action on each element of `],
				[/* inline code block */ 'i', `StackFrame`],
				[/* text */ 't', ` stream
 of the current thread, traversing from the top frame of the stack,
 which is the method calling this `],
				[/* inline code block */ 'i', `forEach`],
				[/* text */ 't', ` method.

 `],
				[/* block */ 'b', ` This method is equivalent to calling
 `],
				[/* block */ 'b', [
					[/* inline code block */ 'i', `walk(s -> { s.forEach(action); return null; });`]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'action', [/* parameter description */
					[/* text */ 't', `an action to be performed on each `],
					[/* inline code block */ 'i', `StackFrame`],
					[/* text */ 't', `
               of the stack of the current thread`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'walk(java.util.function.Function)', [
			[/* method description */
				[/* text */ 't', `Applies the given function to the stream of `],
				[/* inline code block */ 'i', `StackFrame`],
				[/* text */ 't', `s
 for the current thread, traversing from the top frame of the stack,
 which is the method calling this `],
				[/* inline code block */ 'i', `walk`],
				[/* text */ 't', ` method.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The `],
					[/* inline code block */ 'i', `StackFrame`],
					[/* text */ 't', ` stream will be closed when
 this method returns.  When a closed `],
					[/* inline code block */ 'i', `Stream<StackFrame>`],
					[/* text */ 't', ` object
 is reused, `],
					[/* inline code block */ 'i', `IllegalStateException`],
					[/* text */ 't', ` will be thrown.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'function', [/* parameter description */
					[/* text */ 't', `a function that takes a stream of
                 `],
					[/* reference */ 'r', `java.lang.StackWalker.StackFrame`],
					[/* text */ 't', ` and returns a result.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the result of applying the function to the stream of
         `],
				[/* reference */ 'r', `java.lang.StackWalker.StackFrame`],
				[/* text */ 't', `.`]
			]
		]]
	],
]);
