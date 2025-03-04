import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.lang.NullPointerException', [
	[/* class description */
		[/* text */ 't', `Thrown when an application attempts to use `],
		[/* inline code block */ 'i', `null`],
		[/* text */ 't', ` in a
 case where an object is required. These include:
 `],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* text */ 't', `Calling the instance method of a `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` object.
 `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `Accessing or modifying the field of a `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` object.
 `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `Taking the length of `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` as if it were an array.
 `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `Accessing or modifying the slots of `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` as if it
     were an array.
 `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `Throwing `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` as if it were a `],
				[/* inline code block */ 'i', `Throwable`],
				[/* text */ 't', `
     value.
 `]
			]]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 Applications should throw instances of this class to indicate
 other illegal uses of the `],
			[/* inline code block */ 'i', `null`],
			[/* text */ 't', ` object.

 `],
			[/* inline code block */ 'i', `NullPointerException`],
			[/* text */ 't', ` objects may be constructed by the
 virtual machine as if `],
			[/* reference */ 'r', `.Throwable#<init>(java.lang.String,java.lang.Throwable,boolean,boolean)`],
			[/* text */ 't', `.`]
		]]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Constructs a `],
				[/* inline code block */ 'i', `NullPointerException`],
				[/* text */ 't', ` with no detail message.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a `],
				[/* inline code block */ 'i', `NullPointerException`],
				[/* text */ 't', ` with the specified
 detail message.`]
			],
			[/* parameters */
				[/* parameter */ 's', [/* parameter description */
					[/* text */ 't', `the detail message.`]
				]]
			],
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'getMessage()', [
			[/* method description */
				[/* text */ 't', `Returns the detail message string of this throwable.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` If a non-null message was supplied in a constructor it is
 returned. Otherwise, an implementation specific message or
 `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` is returned.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the detail message string, which may be `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'fillInStackTrace()', UDF]
	],
]);
