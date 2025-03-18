import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.lang.invoke.StringConcatException', [
	[/* class description */
		[/* text */ 't', `StringConcatException is thrown by `],
		[/* reference */ 'r', `java.lang.invoke.StringConcatFactory`, `StringConcatFactory`],
		[/* text */ 't', ` when linkage
 invariants are violated.`]
	],
	/* fields */,
	[/* constructors */
		[/* constructor */ '<init>(java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Constructs an exception with a message`]
			],
			[/* parameters */
				[/* parameter */ 'msg', [/* parameter description */
					[/* text */ 't', `exception message`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.String,java.lang.Throwable)', [
			[/* constructor description */
				[/* text */ 't', `Constructs an exception with a message and a linked throwable`]
			],
			[/* parameters */
				[/* parameter */ 'msg', [/* parameter description */
					[/* text */ 't', `exception message`]
				]],
				[/* parameter */ 'cause', [/* parameter description */
					[/* text */ 't', `throwable cause`]
				]]
			],
			/* throws */ UDF
		]]
	],
	/* methods */,
	/* enum values */ UDF
]);
