import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.security.PrivilegedAction', [
	[/* class description */
		[/* text */ 't', `A computation to be performed with privileges enabled.  The computation is
 performed by invoking `],
		[/* inline code block */ 'i', `AccessController.doPrivileged`],
		[/* text */ 't', ` on the
 `],
		[/* inline code block */ 'i', `PrivilegedAction`],
		[/* text */ 't', ` object.  This interface is used only for
 computations that do not throw checked exceptions; computations that
 throw checked exceptions must use `],
		[/* inline code block */ 'i', `PrivilegedExceptionAction`],
		[/* text */ 't', `
 instead.`]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'run()', [
			[/* method description */
				[/* text */ 't', `Performs the computation.  This method will be called by
 `],
				[/* inline code block */ 'i', `AccessController.doPrivileged`],
				[/* text */ 't', ` after enabling privileges.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a class-dependent value that may represent the results of the
         computation. Each class that implements
         `],
				[/* inline code block */ 'i', `PrivilegedAction`],
				[/* text */ 't', `
         should document what (if anything) this value represents.`]
			]
		]]
	],
]);
