import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.lang.invoke.VolatileCallSite', [
	[/* class description */
		[/* text */ 't', `A `],
		[/* inline code block */ 'i', `VolatileCallSite`],
		[/* text */ 't', ` is a `],
		[/* reference */ 'r', `java.lang.invoke.CallSite`, `CallSite`],
		[/* text */ 't', ` whose target acts like a volatile variable.
 An `],
		[/* inline code block */ 'i', `invokedynamic`],
		[/* text */ 't', ` instruction linked to a `],
		[/* inline code block */ 'i', `VolatileCallSite`],
		[/* text */ 't', ` sees updates
 to its call site target immediately, even if the update occurs in another thread.
 There may be a performance penalty for such tight coupling between threads.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 Unlike `],
			[/* inline code block */ 'i', `MutableCallSite`],
			[/* text */ 't', `, there is no
 `],
			[/* reference */ 'r', `java.lang.invoke.MutableCallSite#syncAll(java.lang.invoke.MutableCallSite[])`, `syncAll operation`],
			[/* text */ 't', ` on volatile
 call sites, since every write to a volatile variable is implicitly
 synchronized with reader threads.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 In other respects, a `],
			[/* inline code block */ 'i', `VolatileCallSite`],
			[/* text */ 't', ` is interchangeable
 with `],
			[/* inline code block */ 'i', `MutableCallSite`],
			[/* text */ 't', `.`]
		]]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>(java.lang.invoke.MethodHandle)', [
			[/* constructor description */
				[/* text */ 't', `Creates a call site with a volatile binding to its target.
 The target is set to the given value.`]
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
		]],
		[/* constructor */ '<init>(java.lang.invoke.MethodType)', [
			[/* constructor description */
				[/* text */ 't', `Creates a call site with a volatile binding to its target.
 The initial target is set to a method handle
 of the given type which will throw an `],
				[/* inline code block */ 'i', `IllegalStateException`],
				[/* text */ 't', ` if called.`]
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
				[/* blockquote */ 'q', [
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
 like a `],
				[/* inline code block */ 'i', `volatile`],
				[/* text */ 't', ` field of the `],
				[/* inline code block */ 'i', `VolatileCallSite`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The interactions of `],
					[/* inline code block */ 'i', `getTarget`],
					[/* text */ 't', ` with memory are the same
 as of a read from a `],
					[/* inline code block */ 'i', `volatile`],
					[/* text */ 't', ` field.
 `]
				]],
				[/* block */ 'b', `
 In particular, the current thread is required to issue a fresh
 read of the target from memory, and must not fail to see
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
				[/* text */ 't', `Updates the target method of this call site, as a volatile variable.
 The type of the new target must agree with the type of the old target.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The interactions with memory are the same as of a write to a volatile field.
 In particular, any threads is guaranteed to see the updated target
 the next time it calls `],
					[/* inline code block */ 'i', `getTarget`],
					[/* text */ 't', `.`]
				]]
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
		]]
	],
]);
