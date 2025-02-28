import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.lang.Compiler', [
	/* class description */ UDF,
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'command(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Examines the argument type and its fields and perform some documented
 operation.  No specific operations are required.`]
			],
			[/* parameters */
				[/* parameter */ 'any', [/* parameter description */
					[/* text */ 't', `An argument`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `any`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `A compiler-specific value, or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if no compiler is
          available`]
			]
		]],
		[/* method */ 'enable()', [
			[/* method description */
				[/* text */ 't', `Cause the Compiler to resume operation.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'disable()', [
			[/* method description */
				[/* text */ 't', `Cause the Compiler to cease operation.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'compileClass(java.lang.Class)', [
			[/* method description */
				[/* text */ 't', `Compiles the specified class.`]
			],
			[/* parameters */
				[/* parameter */ 'clazz', [/* parameter description */
					[/* text */ 't', `A class`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `clazz`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the compilation succeeded; `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` if the
          compilation failed or no compiler is available`]
			]
		]],
		[/* method */ 'compileClasses(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Compiles all classes whose name matches the specified string.`]
			],
			[/* parameters */
				[/* parameter */ 'string', [/* parameter description */
					[/* text */ 't', `The name of the classes to compile`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `string`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the compilation succeeded; `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` if the
          compilation failed or no compiler is available`]
			]
		]]
	],
]);
