import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.security.AccessControlException', [
	/* class description */ UDF,
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>(java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Constructs an `],
				[/* inline code block */ 'i', `AccessControlException`],
				[/* text */ 't', ` with the
 specified, detailed message.`]
			],
			[/* parameters */
				[/* parameter */ 's', [/* parameter description */
					[/* text */ 't', `the detail message.`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.String,java.security.Permission)', [
			[/* constructor description */
				[/* text */ 't', `Constructs an `],
				[/* inline code block */ 'i', `AccessControlException`],
				[/* text */ 't', ` with the
 specified, detailed message, and the requested permission that caused
 the exception.`]
			],
			[/* parameters */
				[/* parameter */ 's', [/* parameter description */
					[/* text */ 't', `the detail message.`]
				]],
				[/* parameter */ 'p', [/* parameter description */
					[/* text */ 't', `the permission that caused the exception.`]
				]]
			],
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'getPermission()', [
			[/* method description */
				[/* text */ 't', `Gets the Permission object associated with this exception, or
 null if there was no corresponding Permission object.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the Permission object.`]
			]
		]]
	],
]);
