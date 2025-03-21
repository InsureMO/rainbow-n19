import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.lang.EnumConstantNotPresentException', [
	[/* class description */
		[/* text */ 't', `Thrown when an application tries to access an enum constant by name
 and the enum type contains no constant with the specified name.
 This exception can be thrown by the `],
		[/* reference */ 'r', `java.lang.reflect.AnnotatedElement`, `API used to read annotations reflectively`],
		[/* text */ 't', `.`]
	],
	/* fields */,
	[/* constructors */
		[/* constructor */ '<init>(java.lang.Class,java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Constructs an `],
				[/* inline code block */ 'i', `EnumConstantNotPresentException`],
				[/* text */ 't', ` for the
 specified constant.`]
			],
			[/* parameters */
				[/* parameter */ 'enumType', [/* parameter description */
					[/* text */ 't', `the type of the missing enum constant`]
				]],
				[/* parameter */ 'constantName', [/* parameter description */
					[/* text */ 't', `the name of the missing enum constant`]
				]]
			],
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'enumType()', [
			[/* method description */
				[/* text */ 't', `Returns the type of the missing enum constant.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the type of the missing enum constant`]
			]
		]],
		[/* method */ 'constantName()', [
			[/* method description */
				[/* text */ 't', `Returns the name of the missing enum constant.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the name of the missing enum constant`]
			]
		]]
	],
	/* enum values */ UDF
]);
