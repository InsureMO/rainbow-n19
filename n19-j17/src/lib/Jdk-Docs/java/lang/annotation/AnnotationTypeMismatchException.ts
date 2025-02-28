import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.lang.annotation.AnnotationTypeMismatchException', [
	[/* class description */
		[/* text */ 't', `Thrown to indicate that a program has attempted to access an element of
 an annotation whose type has changed after the annotation was compiled
 (or serialized).
 This exception can be thrown by the `],
		[/* reference */ 'r', `java.lang.reflect.AnnotatedElement`],
		[/* text */ 't', `.`]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>(java.lang.reflect.Method,java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Constructs an AnnotationTypeMismatchException for the specified
 annotation type element and found data type.`]
			],
			[/* parameters */
				[/* parameter */ 'element', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `Method`],
					[/* text */ 't', ` object for the annotation
 element, may be `],
					[/* inline code block */ 'i', `null`]
				]],
				[/* parameter */ 'foundType', [/* parameter description */
					[/* text */ 't', `the (erroneous) type of data found in the annotation.
        This string may, but is not required to, contain the value
        as well.  The exact format of the string is unspecified,
        may be `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]]
			],
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'element()', [
			[/* method description */
				[/* text */ 't', `Returns the `],
				[/* inline code block */ 'i', `Method`],
				[/* text */ 't', ` object for the incorrectly typed element.
 The value may be unavailable if this exception has been
 serialized and then read back in.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the `],
				[/* inline code block */ 'i', `Method`],
				[/* text */ 't', ` object for the incorrectly typed
 element, or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if unavailable`]
			]
		]],
		[/* method */ 'foundType()', [
			[/* method description */
				[/* text */ 't', `Returns the type of data found in the incorrectly typed element.
 The returned string may, but is not required to, contain the value
 as well.  The exact format of the string is unspecified and the string
 may be `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the type of data found in the incorrectly typed element`]
			]
		]]
	],
]);
