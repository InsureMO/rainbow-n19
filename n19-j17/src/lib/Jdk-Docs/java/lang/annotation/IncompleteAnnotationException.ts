import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.lang.annotation.IncompleteAnnotationException', [
	[/* class description */
		[/* text */ 't', `Thrown to indicate that a program has attempted to access an element of
 an annotation interface that was added to the annotation interface definition
 after the annotation was compiled (or serialized). This exception will not be
 thrown if the new element has a default value.
 This exception can be thrown by the `],
		[/* reference */ 'r', `java.lang.reflect.AnnotatedElement`, `API used to read annotations reflectively`],
		[/* text */ 't', `.`]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>(java.lang.Class,java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Constructs an IncompleteAnnotationException to indicate that
 the named element was missing from the specified annotation interface.`]
			],
			[/* parameters */
				[/* parameter */ 'annotationType', [/* parameter description */
					[/* text */ 't', `the Class object for the annotation interface`]
				]],
				[/* parameter */ 'elementName', [/* parameter description */
					[/* text */ 't', `the name of the missing element`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if either parameter is `],
					[/* inline code block */ 'i', `null`]
				]]
			]
		]]
	],
	[/* methods */
		[/* method */ 'annotationType()', [
			[/* method description */
				[/* text */ 't', `Returns the Class object for the annotation interface with the
 missing element.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the Class object for the annotation interface with the
     missing element`]
			]
		]],
		[/* method */ 'elementName()', [
			[/* method description */
				[/* text */ 't', `Returns the name of the missing element.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the name of the missing element`]
			]
		]]
	],
]);
