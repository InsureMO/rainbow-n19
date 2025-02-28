import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.lang.ClassValue', [
	[/* class description */
		[/* text */ 't', `Lazily associate a computed value with (potentially) every type.
 For example, if a dynamic language needs to construct a message dispatch
 table for each class encountered at a message send call site,
 it can use a `],
		[/* inline code block */ 'i', `ClassValue`],
		[/* text */ 't', ` to cache information needed to
 perform the message send quickly, for each class encountered.`]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Sole constructor.  (For invocation by subclass constructors, typically
 implicit.)`]
			],
			/* parameters */ UDF,
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'remove(java.lang.Class)', [
			[/* method description */
				[/* text */ 't', `Removes the associated value for the given class.
 If this value is subsequently `],
				[/* reference */ 'r', `read`],
				[/* text */ 't', ` for the same class,
 its value will be reinitialized by invoking its `],
				[/* reference */ 'r', `computeValue`],
				[/* text */ 't', ` method.
 This may result in an additional invocation of the
 `],
				[/* inline code block */ 'i', `computeValue`],
				[/* text */ 't', ` method for the given class.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 In order to explain the interaction between `],
					[/* inline code block */ 'i', `get`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `remove`],
					[/* text */ 't', ` calls,
 we must model the state transitions of a class value to take into account
 the alternation between uninitialized and initialized states.
 To do this, number these states sequentially from zero, and note that
 uninitialized (or removed) states are numbered with even numbers,
 while initialized (or re-initialized) states have odd numbers.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 When a thread `],
					[/* inline code block */ 'i', `T`],
					[/* text */ 't', ` removes a class value in state `],
					[/* inline code block */ 'i', `2N`],
					[/* text */ 't', `,
 nothing happens, since the class value is already uninitialized.
 Otherwise, the state is advanced atomically to `],
					[/* inline code block */ 'i', `2N+1`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 When a thread `],
					[/* inline code block */ 'i', `T`],
					[/* text */ 't', ` queries a class value in state `],
					[/* inline code block */ 'i', `2N`],
					[/* text */ 't', `,
 the thread first attempts to initialize the class value to state `],
					[/* inline code block */ 'i', `2N+1`],
					[/* text */ 't', `
 by invoking `],
					[/* inline code block */ 'i', `computeValue`],
					[/* text */ 't', ` and installing the resulting value.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 When `],
					[/* inline code block */ 'i', `T`],
					[/* text */ 't', ` attempts to install the newly computed value,
 if the state is still at `],
					[/* inline code block */ 'i', `2N`],
					[/* text */ 't', `, the class value will be initialized
 with the computed value, advancing it to state `],
					[/* inline code block */ 'i', `2N+1`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 Otherwise, whether the new state is even or odd,
 `],
					[/* inline code block */ 'i', `T`],
					[/* text */ 't', ` will discard the newly computed value
 and retry the `],
					[/* inline code block */ 'i', `get`],
					[/* text */ 't', ` operation.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 Discarding and retrying is an important proviso,
 since otherwise `],
					[/* inline code block */ 'i', `T`],
					[/* text */ 't', ` could potentially install
 a disastrously stale value.  For example:
 `]
				]],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* inline code block */ 'i', `T`],
						[/* text */ 't', ` calls `],
						[/* inline code block */ 'i', `CV.get(C)`],
						[/* text */ 't', ` and sees state `],
						[/* inline code block */ 'i', `2N`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `T`],
						[/* text */ 't', ` quickly computes a time-dependent value `],
						[/* inline code block */ 'i', `V0`],
						[/* text */ 't', ` and gets ready to install it
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `T`],
						[/* text */ 't', ` is hit by an unlucky paging or scheduling event, and goes to sleep for a long time
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `...meanwhile, `],
						[/* inline code block */ 'i', `T2`],
						[/* text */ 't', ` also calls `],
						[/* inline code block */ 'i', `CV.get(C)`],
						[/* text */ 't', ` and sees state `],
						[/* inline code block */ 'i', `2N`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `T2`],
						[/* text */ 't', ` quickly computes a similar time-dependent value `],
						[/* inline code block */ 'i', `V1`],
						[/* text */ 't', ` and installs it on `],
						[/* inline code block */ 'i', `CV.get(C)`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `T2`],
						[/* text */ 't', ` (or a third thread) then calls `],
						[/* inline code block */ 'i', `CV.remove(C)`],
						[/* text */ 't', `, undoing `],
						[/* inline code block */ 'i', `T2`],
						[/* text */ 't', `'s work
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', ` the previous actions of `],
						[/* inline code block */ 'i', `T2`],
						[/* text */ 't', ` are repeated several times
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', ` also, the relevant computed values change over time: `],
						[/* inline code block */ 'i', `V1`],
						[/* text */ 't', `, `],
						[/* inline code block */ 'i', `V2`],
						[/* text */ 't', `, ...
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `...meanwhile, `],
						[/* inline code block */ 'i', `T`],
						[/* text */ 't', ` wakes up and attempts to install `],
						[/* inline code block */ 'i', `V0`],
						[/* text */ 't', `; `],
						[/* text */ 't', `this must fail`]
					]]
				]],
				[/* text */ 't', `
 We can assume in the above scenario that `],
				[/* inline code block */ 'i', `CV.computeValue`],
				[/* text */ 't', ` uses locks to properly
 observe the time-dependent states as it computes `],
				[/* inline code block */ 'i', `V1`],
				[/* text */ 't', `, etc.
 This does not remove the threat of a stale value, since there is a window of time
 between the return of `],
				[/* inline code block */ 'i', `computeValue`],
				[/* text */ 't', ` in `],
				[/* inline code block */ 'i', `T`],
				[/* text */ 't', ` and the installation
 of the new value.  No user synchronization is possible during this time.`],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'type', [/* parameter description */
					[/* text */ 't', `the type whose class value must be removed`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the argument is null`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'get(java.lang.Class)', [
			[/* method description */
				[/* text */ 't', `Returns the value for the given class.
 If no value has yet been computed, it is obtained by
 an invocation of the `],
				[/* reference */ 'r', `computeValue`],
				[/* text */ 't', ` method.
 `],
				[/* block */ 'b', `
 The actual installation of the value on the class
 is performed atomically.
 At that point, if several racing threads have
 computed values, one is chosen, and returned to
 all the racing threads.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The `],
					[/* inline code block */ 'i', `type`],
					[/* text */ 't', ` parameter is typically a class, but it may be any type,
 such as an interface, a primitive type (like `],
					[/* inline code block */ 'i', `int.class`],
					[/* text */ 't', `), or `],
					[/* inline code block */ 'i', `void.class`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 In the absence of `],
					[/* inline code block */ 'i', `remove`],
					[/* text */ 't', ` calls, a class value has a simple
 state diagram:  uninitialized and initialized.
 When `],
					[/* inline code block */ 'i', `remove`],
					[/* text */ 't', ` calls are made,
 the rules for value observation are more complex.
 See the documentation for `],
					[/* reference */ 'r', `remove`],
					[/* text */ 't', ` for more information.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'type', [/* parameter description */
					[/* text */ 't', `the type whose class value must be computed or retrieved`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the argument is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the current value associated with this `],
				[/* inline code block */ 'i', `ClassValue`],
				[/* text */ 't', `, for the given class or interface`]
			]
		]],
		[/* method */ 'computeValue(java.lang.Class)', [
			[/* method description */
				[/* text */ 't', `Computes the given class's derived value for this `],
				[/* inline code block */ 'i', `ClassValue`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method will be invoked within the first thread that accesses
 the value with the `],
					[/* reference */ 'r', `get`],
					[/* text */ 't', ` method.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 Normally, this method is invoked at most once per class,
 but it may be invoked again if there has been a call to
 `],
					[/* reference */ 'r', `remove`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 If this method throws an exception, the corresponding call to `],
					[/* inline code block */ 'i', `get`],
					[/* text */ 't', `
 will terminate abnormally with that exception, and no class value will be recorded.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'type', [/* parameter description */
					[/* text */ 't', `the type whose class value must be computed`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the newly computed value associated with this `],
				[/* inline code block */ 'i', `ClassValue`],
				[/* text */ 't', `, for the given class or interface`]
			]
		]]
	],
]);
