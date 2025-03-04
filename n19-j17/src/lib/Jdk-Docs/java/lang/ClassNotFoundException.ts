import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.lang.ClassNotFoundException', [
	[/* class description */
		[/* text */ 't', `Thrown when an application tries to load in a class through its
 string name using:
 `],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* text */ 't', `The `],
				[/* inline code block */ 'i', `forName`],
				[/* text */ 't', ` method in class `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', `.
 `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `The `],
				[/* inline code block */ 'i', `findSystemClass`],
				[/* text */ 't', ` method in class
     `],
				[/* inline code block */ 'i', `ClassLoader`],
				[/* text */ 't', ` .
 `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `The `],
				[/* inline code block */ 'i', `loadClass`],
				[/* text */ 't', ` method in class `],
				[/* inline code block */ 'i', `ClassLoader`],
				[/* text */ 't', `.
 `]
			]]
		]],
		[/* block */ 'b', `
 but no definition for the class with the specified name could be found.`]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Constructs a `],
				[/* inline code block */ 'i', `ClassNotFoundException`],
				[/* text */ 't', ` with no detail message.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a `],
				[/* inline code block */ 'i', `ClassNotFoundException`],
				[/* text */ 't', ` with the
 specified detail message.`]
			],
			[/* parameters */
				[/* parameter */ 's', [/* parameter description */
					[/* text */ 't', `the detail message.`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.String,java.lang.Throwable)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a `],
				[/* inline code block */ 'i', `ClassNotFoundException`],
				[/* text */ 't', ` with the
 specified detail message and optional exception that was
 raised while loading the class.`]
			],
			[/* parameters */
				[/* parameter */ 's', [/* parameter description */
					[/* text */ 't', `the detail message`]
				]],
				[/* parameter */ 'ex', [/* parameter description */
					[/* text */ 't', `the exception that was raised while loading the class`]
				]]
			],
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'getException()', [
			[/* method description */
				[/* text */ 't', `Returns the exception that was raised if an error occurred while
 attempting to load the class. Otherwise, returns `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the `],
				[/* inline code block */ 'i', `Exception`],
				[/* text */ 't', ` that was raised while loading a class`]
			]
		]]
	],
]);
