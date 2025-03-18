import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.lang.StackWalker$Option', [
	[/* class description */
		[/* text */ 't', `Stack walker option to configure the `],
		[/* reference */ 'r', `java.lang.StackWalker.StackFrame`, `stack frame`],
		[/* text */ 't', `
 information obtained by a `],
		[/* inline code block */ 'i', `StackWalker`],
		[/* text */ 't', `.`]
	],
	/* fields */,
	/* constructors */,
	[/* methods */
		[/* method */ 'valueOf(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Returns the enum constant of this class with the specified name.
The string must match `],
				[/* text */ 't', `exactly`],
				[/* text */ 't', ` an identifier used to declare an
enum constant in this class.  (Extraneous whitespace characters are 
not permitted.)`]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `the name of the enum constant to be returned.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if this enum class has no constant with the specified name`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the argument is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the enum constant with the specified name`]
			]
		]],
		[/* method */ 'values()', [
			[/* method description */
				[/* text */ 't', `Returns an array containing the constants of this enum class, in
the order they are declared.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `an array containing the constants of this enum class, in the order they are declared`]
			]
		]]
	],
	[/* enum values */
		[/* enum value */ 'RETAIN_CLASS_REFERENCE', [
			[/* enum value description */
				[/* text */ 't', `Retains `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` object in `],
				[/* inline code block */ 'i', `StackFrame`],
				[/* text */ 't', `s
 walked by this `],
				[/* inline code block */ 'i', `StackWalker`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` A `],
					[/* inline code block */ 'i', `StackWalker`],
					[/* text */ 't', ` configured with this option will support
 `],
					[/* reference */ 'r', `java.lang.StackWalker#getCallerClass()`, `StackWalker.getCallerClass()`],
					[/* text */ 't', ` and
 `],
					[/* reference */ 'r', `java.lang.StackWalker.StackFrame#getDeclaringClass()`, `StackFrame.getDeclaringClass()`],
					[/* text */ 't', `.`]
				]]
			],
		]],
		[/* enum value */ 'SHOW_REFLECT_FRAMES', [
			[/* enum value description */
				[/* text */ 't', `Shows all reflection frames.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `By default, reflection frames are hidden.  A `],
					[/* inline code block */ 'i', `StackWalker`],
					[/* text */ 't', `
 configured with this `],
					[/* inline code block */ 'i', `SHOW_REFLECT_FRAMES`],
					[/* text */ 't', ` option
 will show all reflection frames that
 include `],
					[/* reference */ 'r', `java.lang.reflect.Method#invoke(java.lang.Object,java.lang.Object...)`, `Method.invoke(java.lang.Object, java.lang.Object...)`],
					[/* text */ 't', ` and
 `],
					[/* reference */ 'r', `java.lang.reflect.Constructor#newInstance(java.lang.Object...)`, `Constructor.newInstance(Object...)`],
					[/* text */ 't', `
 and their reflection implementation classes.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The `],
					[/* text */ 't', `SHOW_HIDDEN_FRAMES`],
					[/* text */ 't', ` option can also be used to show all
 reflection frames and it will also show other hidden frames that
 are implementation-specific.`]
				]]
			],
		]],
		[/* enum value */ 'SHOW_HIDDEN_FRAMES', [
			[/* enum value description */
				[/* text */ 't', `Shows all hidden frames.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `A Java Virtual Machine implementation may hide implementation
 specific frames in addition to `],
					[/* text */ 't', `reflection frames`],
					[/* text */ 't', `. A `],
					[/* inline code block */ 'i', `StackWalker`],
					[/* text */ 't', ` with this `],
					[/* inline code block */ 'i', `SHOW_HIDDEN_FRAMES`],
					[/* text */ 't', `
 option will show all hidden frames (including reflection frames).`]
				]]
			],
		]]
	],
]);
