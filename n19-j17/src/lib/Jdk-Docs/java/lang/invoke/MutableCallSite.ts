import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.lang.invoke.MutableCallSite', [
	[/* class description */
		[/* text */ 't', `A `],
		[/* inline code block */ 'i', `MutableCallSite`],
		[/* text */ 't', ` is a `],
		[/* reference */ 'r', `java.lang.invoke.CallSite`],
		[/* text */ 't', ` whose target variable
 behaves like an ordinary field.
 An `],
		[/* inline code block */ 'i', `invokedynamic`],
		[/* text */ 't', ` instruction linked to a `],
		[/* inline code block */ 'i', `MutableCallSite`],
		[/* text */ 't', ` delegates
 all calls to the site's current target.
 The `],
		[/* reference */ 'r', `.CallSite#dynamicInvoker()`],
		[/* text */ 't', ` of a mutable call site
 also delegates each call to the site's current target.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 Here is an example of a mutable call site which introduces a
 state variable into a method handle chain.
 `],
			[/* block */ 'b', ``]
		]],
		[/* block */ 'b', [
			[/* code block */ 'c', [
				[/* inline code block */ 'i', `MutableCallSite name = new MutableCallSite(MethodType.methodType(String.class));
MethodHandle MH_name = name.dynamicInvoker();
MethodType MT_str1 = MethodType.methodType(String.class);
MethodHandle MH_upcase = MethodHandles.lookup()
    .findVirtual(String.class, "toUpperCase", MT_str1);
MethodHandle worker1 = MethodHandles.filterReturnValue(MH_name, MH_upcase);
name.setTarget(MethodHandles.constant(String.class, "Rocky"));
assertEquals("ROCKY", (String) worker1.invokeExact());
name.setTarget(MethodHandles.constant(String.class, "Fred"));
assertEquals("FRED", (String) worker1.invokeExact());
// (mutation can be continued indefinitely)`]
			]]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', `
 The same call site may be used in several places at once.
 `],
		[/* block */ 'b', [
			[/* code block */ 'c', [
				[/* inline code block */ 'i', `MethodType MT_str2 = MethodType.methodType(String.class, String.class);
MethodHandle MH_cat = lookup().findVirtual(String.class,
  "concat", methodType(String.class, String.class));
MethodHandle MH_dear = MethodHandles.insertArguments(MH_cat, 1, ", dear?");
MethodHandle worker2 = MethodHandles.filterReturnValue(MH_name, MH_dear);
assertEquals("Fred, dear?", (String) worker2.invokeExact());
name.setTarget(MethodHandles.constant(String.class, "Wilma"));
assertEquals("WILMA", (String) worker1.invokeExact());
assertEquals("Wilma, dear?", (String) worker2.invokeExact());`]
			]]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', `Non-synchronization of target values:`],
		[/* block */ 'b', [
			[/* text */ 't', `
 The `],
			[/* reference */ 'r', `#syncAll(java.lang.invoke.MutableCallSite%5B%5D)`, `syncAll`],
			[/* text */ 't', ` operation provides a way to force threads
 to accept a new target value, even if there is no other synchronization.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 For target values which will be frequently updated, consider using
 a `],
			[/* reference */ 'r', `java.lang.invoke.VolatileCallSite`],
			[/* text */ 't', ` instead.`]
		]]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>(java.lang.invoke.MethodType)', [
			[/* constructor description */
				[/* text */ 't', `Creates a blank call site object with the given method type.
 The initial target is set to a method handle of the given type
 which will throw an `],
				[/* reference */ 'r', `java.lang.IllegalStateException`],
				[/* text */ 't', ` if called.
 `],
				[/* block */ 'b', `
 The type of the call site is permanently set to the given type.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 Before this `],
					[/* inline code block */ 'i', `CallSite`],
					[/* text */ 't', ` object is returned from a bootstrap method,
 or invoked in some other manner,
 it is usually provided with a more useful target method,
 via a call to `],
					[/* reference */ 'r', `.CallSite#setTarget(java.lang.invoke.MethodHandle)`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'type', [/* parameter description */
					[/* text */ 't', `the method type that this call site will have`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the proposed type is null`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.lang.invoke.MethodHandle)', [
			[/* constructor description */
				[/* text */ 't', `Creates a call site object with an initial target method handle.
 The type of the call site is permanently set to the initial target's type.`]
			],
			[/* parameters */
				[/* parameter */ 'target', [/* parameter description */
					[/* text */ 't', `the method handle that will be the initial target of the call site`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the proposed target is null`]
				]]
			]
		]]
	],
	[/* methods */
		[/* method */ 'dynamicInvoker()', [
			[/* method description */
				[/* text */ 't', `Produces a method handle equivalent to an invokedynamic instruction
 which has been linked to this call site.
 `],
				[/* block */ 'b', `
 This method is equivalent to the following code:
 `],
				[/* block */ 'b', [
					[/* code block */ 'c', [
						[/* inline code block */ 'i', `MethodHandle getTarget, invoker, result;
 getTarget = MethodHandles.publicLookup().bind(this, "getTarget", MethodType.methodType(MethodHandle.class));
 invoker = MethodHandles.exactInvoker(this.type());
 result = MethodHandles.foldArguments(invoker, getTarget)`]
					]]
				]],
				[/* block */ 'b', '']
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a method handle which always invokes this call site's current target`]
			]
		]],
		[/* method */ 'getTarget()', [
			[/* method description */
				[/* text */ 't', `Returns the target method of the call site, which behaves
 like a normal field of the `],
				[/* inline code block */ 'i', `MutableCallSite`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The interactions of `],
					[/* inline code block */ 'i', `getTarget`],
					[/* text */ 't', ` with memory are the same
 as of a read from an ordinary variable, such as an array element or a
 non-volatile, non-final field.
 `]
				]],
				[/* block */ 'b', `
 In particular, the current thread may choose to reuse the result
 of a previous read of the target from memory, and may fail to see
 a recent update to the target by another thread.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the linkage state of this call site, a method handle which can change over time`]
			]
		]],
		[/* method */ 'setTarget(java.lang.invoke.MethodHandle)', [
			[/* method description */
				[/* text */ 't', `Updates the target method of this call site, as a normal variable.
 The type of the new target must agree with the type of the old target.
 `],
				[/* block */ 'b', `
 The interactions with memory are the same
 as of a write to an ordinary variable, such as an array element or a
 non-volatile, non-final field.
 `],
				[/* block */ 'b', `
 In particular, unrelated threads may fail to see the updated target
 until they perform a read from memory.
 Stronger guarantees can be created by putting appropriate operations
 into the bootstrap method and/or the target methods used
 at any given call site.`]
			],
			[/* parameters */
				[/* parameter */ 'newTarget', [/* parameter description */
					[/* text */ 't', `the new target`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the proposed new target is null`]
				]],
				[/* throw */ 'java.lang.invoke.WrongMethodTypeException', [/* throw description */
					[/* text */ 't', `if the proposed new target
         has a method type that differs from the previous target`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'syncAll(java.lang.invoke.MutableCallSite[])', [
			[/* method description */
				[/* text */ 't', `Performs a synchronization operation on each call site in the given array,
 forcing all other threads to throw away any cached values previously
 loaded from the target of any of the call sites.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This operation does not reverse any calls that have already started
 on an old target value.
 (Java supports `],
					[/* reference */ 'r', `java.Object#wait()`],
					[/* text */ 't', ` only.)
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The overall effect is to force all future readers of each call site's target
 to accept the most recently stored value.
 ("Most recently" is reckoned relative to the `],
					[/* inline code block */ 'i', `syncAll`],
					[/* text */ 't', ` itself.)
 Conversely, the `],
					[/* inline code block */ 'i', `syncAll`],
					[/* text */ 't', ` call may block until all readers have
 (somehow) decached all previous versions of each call site's target.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 To avoid race conditions, calls to `],
					[/* inline code block */ 'i', `setTarget`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `syncAll`],
					[/* text */ 't', `
 should generally be performed under some sort of mutual exclusion.
 Note that reader threads may observe an updated target as early
 as the `],
					[/* inline code block */ 'i', `setTarget`],
					[/* text */ 't', ` call that install the value
 (and before the `],
					[/* inline code block */ 'i', `syncAll`],
					[/* text */ 't', ` that confirms the value).
 On the other hand, reader threads may observe previous versions of
 the target until the `],
					[/* inline code block */ 'i', `syncAll`],
					[/* text */ 't', ` call returns
 (and after the `],
					[/* inline code block */ 'i', `setTarget`],
					[/* text */ 't', ` that attempts to convey the updated version).
 `]
				]],
				[/* block */ 'b', `
 This operation is likely to be expensive and should be used sparingly.
 If possible, it should be buffered for batch processing on sets of call sites.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 If `],
					[/* inline code block */ 'i', `sites`],
					[/* text */ 't', ` contains a null element,
 a `],
					[/* inline code block */ 'i', `NullPointerException`],
					[/* text */ 't', ` will be raised.
 In this case, some non-null elements in the array may be
 processed before the method returns abnormally.
 Which elements these are (if any) is implementation-dependent.

 `]
				]],
				[/* block */ 'b', `Java Memory Model details`],
				[/* text */ 't', `
 In terms of the Java Memory Model, this operation performs a synchronization
 action which is comparable in effect to the writing of a volatile variable
 by the current thread, and an eventual volatile read by every other thread
 that may access one of the affected call sites.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The following effects are apparent, for each individual call site `],
					[/* inline code block */ 'i', `S`],
					[/* text */ 't', `:
 `]
				]],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `A new volatile variable `],
						[/* inline code block */ 'i', `V`],
						[/* text */ 't', ` is created, and written by the current thread.
     As defined by the JMM, this write is a global synchronization event.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `As is normal with thread-local ordering of write events,
     every action already performed by the current thread is
     taken to happen before the volatile write to `],
						[/* inline code block */ 'i', `V`],
						[/* text */ 't', `.
     (In some implementations, this means that the current thread
     performs a global release operation.)
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `Specifically, the write to the current target of `],
						[/* inline code block */ 'i', `S`],
						[/* text */ 't', ` is
     taken to happen before the volatile write to `],
						[/* inline code block */ 'i', `V`],
						[/* text */ 't', `.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `The volatile write to `],
						[/* inline code block */ 'i', `V`],
						[/* text */ 't', ` is placed
     (in an implementation specific manner)
     in the global synchronization order.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `Consider an arbitrary thread `],
						[/* inline code block */ 'i', `T`],
						[/* text */ 't', ` (other than the current thread).
     If `],
						[/* inline code block */ 'i', `T`],
						[/* text */ 't', ` executes a synchronization action `],
						[/* inline code block */ 'i', `A`],
						[/* text */ 't', `
     after the volatile write to `],
						[/* inline code block */ 'i', `V`],
						[/* text */ 't', ` (in the global synchronization order),
     it is therefore required to see either the current target
     of `],
						[/* inline code block */ 'i', `S`],
						[/* text */ 't', `, or a later write to that target,
     if it executes a read on the target of `],
						[/* inline code block */ 'i', `S`],
						[/* text */ 't', `.
     (This constraint is called "synchronization-order consistency".)
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `The JMM specifically allows optimizing compilers to elide
     reads or writes of variables that are known to be useless.
     Such elided reads and writes have no effect on the happens-before
     relation.  Regardless of this fact, the volatile `],
						[/* inline code block */ 'i', `V`],
						[/* text */ 't', `
     will not be elided, even though its written value is
     indeterminate and its read value is not used.
 `]
					]]
				]],
				[/* text */ 't', `
 Because of the last point, the implementation behaves as if a
 volatile read of `],
				[/* inline code block */ 'i', `V`],
				[/* text */ 't', ` were performed by `],
				[/* inline code block */ 'i', `T`],
				[/* text */ 't', `
 immediately after its action `],
				[/* inline code block */ 'i', `A`],
				[/* text */ 't', `.  In the local ordering
 of actions in `],
				[/* inline code block */ 'i', `T`],
				[/* text */ 't', `, this read happens before any future
 read of the target of `],
				[/* inline code block */ 'i', `S`],
				[/* text */ 't', `.  It is as if the
 implementation arbitrarily picked a read of `],
				[/* inline code block */ 'i', `S`],
				[/* text */ 't', `'s target
 by `],
				[/* inline code block */ 'i', `T`],
				[/* text */ 't', `, and forced a read of `],
				[/* inline code block */ 'i', `V`],
				[/* text */ 't', ` to precede it,
 thereby ensuring communication of the new target value.
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `
 As long as the constraints of the Java Memory Model are obeyed,
 implementations may delay the completion of a `],
					[/* inline code block */ 'i', `syncAll`],
					[/* text */ 't', `
 operation while other threads (`],
					[/* inline code block */ 'i', `T`],
					[/* text */ 't', ` above) continue to
 use previous values of `],
					[/* inline code block */ 'i', `S`],
					[/* text */ 't', `'s target.
 However, implementations are (as always) encouraged to avoid
 livelock, and to eventually require all threads to take account
 of the updated target.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `Discussion:`],
					[/* text */ 't', `
 For performance reasons, `],
					[/* inline code block */ 'i', `syncAll`],
					[/* text */ 't', ` is not a virtual method
 on a single call site, but rather applies to a set of call sites.
 Some implementations may incur a large fixed overhead cost
 for processing one or more synchronization operations,
 but a small incremental cost for each additional call site.
 In any case, this operation is likely to be costly, since
 other threads may have to be somehow interrupted
 in order to make them notice the updated target value.
 However, it may be observed that a single call to synchronize
 several sites has the same formal effect as many calls,
 each on just one of the sites.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `Implementation Note:`],
					[/* text */ 't', `
 Simple implementations of `],
					[/* inline code block */ 'i', `MutableCallSite`],
					[/* text */ 't', ` may use
 a volatile variable for the target of a mutable call site.
 In such an implementation, the `],
					[/* inline code block */ 'i', `syncAll`],
					[/* text */ 't', ` method can be a no-op,
 and yet it will conform to the JMM behavior documented above.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'sites', [/* parameter description */
					[/* text */ 't', `an array of call sites to be synchronized`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `sites`],
					[/* text */ 't', ` array reference is null
                              or the array contains a null`]
				]]
			],
			/* return */ UDF
		]]
	],
]);
