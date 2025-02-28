import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.security.Guard', [
	[/* class description */
		[/* block */ 'b', ` This interface represents a guard, which is an object that is used
 to protect access to another object.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `This interface contains a single method, `],
			[/* inline code block */ 'i', `checkGuard`],
			[/* text */ 't', `,
 with a single `],
			[/* inline code block */ 'i', `object`],
			[/* text */ 't', ` argument. `],
			[/* inline code block */ 'i', `checkGuard`],
			[/* text */ 't', ` is
 invoked (by the GuardedObject `],
			[/* inline code block */ 'i', `getObject`],
			[/* text */ 't', ` method)
 to determine whether or not to allow access to the object.`]
		]]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'checkGuard(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Determines whether or not to allow access to the guarded object
 `],
				[/* inline code block */ 'i', `object`],
				[/* text */ 't', `. Returns silently if access is allowed.
 Otherwise, throws a SecurityException.`]
			],
			[/* parameters */
				[/* parameter */ 'object', [/* parameter description */
					[/* text */ 't', `the object being protected by the guard.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if access is denied.`]
				]]
			],
			/* return */ UDF
		]]
	],
]);
