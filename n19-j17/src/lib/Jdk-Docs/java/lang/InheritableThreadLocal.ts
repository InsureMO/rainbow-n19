import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.lang.InheritableThreadLocal', [
	[/* class description */
		[/* text */ 't', `This class extends `],
		[/* inline code block */ 'i', `ThreadLocal`],
		[/* text */ 't', ` to provide inheritance of values
 from parent thread to child thread: when a child thread is created, the
 child receives initial values for all inheritable thread-local variables
 for which the parent has values.  Normally the child's values will be
 identical to the parent's; however, the child's value can be made an
 arbitrary function of the parent's by overriding the `],
		[/* inline code block */ 'i', `childValue`],
		[/* text */ 't', `
 method in this class.

 `],
		[/* block */ 'b', `Inheritable thread-local variables are used in preference to
 ordinary thread-local variables when the per-thread-attribute being
 maintained in the variable (e.g., User ID, Transaction ID) must be
 automatically transmitted to any child threads that are created.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `Note: During the creation of a new `],
			[/* reference */ 'r', `.Thread#<init>(java.lang.ThreadGroup,java.lang.Runnable,java.lang.String,long,boolean)`],
			[/* text */ 't', `, it is
 possible to `],
			[/* text */ 't', `opt out`],
			[/* text */ 't', ` of receiving initial values for inheritable
 thread-local variables.`]
		]]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Creates an inheritable thread local variable.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'childValue(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Computes the child's initial value for this inheritable thread-local
 variable as a function of the parent's value at the time the child
 thread is created.  This method is called from within the parent
 thread before the child is started.
 `],
				[/* block */ 'b', `
 This method merely returns its input argument, and should be overridden
 if a different behavior is desired.`]
			],
			[/* parameters */
				[/* parameter */ 'parentValue', [/* parameter description */
					[/* text */ 't', `the parent thread's value`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the child thread's initial value`]
			]
		]]
	],
]);
