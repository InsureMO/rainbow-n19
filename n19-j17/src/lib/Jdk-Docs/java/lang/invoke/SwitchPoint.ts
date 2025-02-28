import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.lang.invoke.SwitchPoint', [
	[/* class description */
		[/* block */ 'b', [
			[/* text */ 't', `
 A `],
			[/* inline code block */ 'i', `SwitchPoint`],
			[/* text */ 't', ` is an object which can publish state transitions to other threads.
 A switch point is initially in the `],
			[/* text */ 't', `valid`],
			[/* text */ 't', ` state, but may at any time be
 changed to the `],
			[/* text */ 't', `invalid`],
			[/* text */ 't', ` state.  Invalidation cannot be reversed.
 A switch point can combine a `],
			[/* text */ 't', `guarded pair`],
			[/* text */ 't', ` of method handles into a
 `],
			[/* text */ 't', `guarded delegator`],
			[/* text */ 't', `.
 The guarded delegator is a method handle which delegates to one of the old method handles.
 The state of the switch point determines which of the two gets the delegation.
 `]
		]],
		[/* block */ 'b', `
 A single switch point may be used to control any number of method handles.
 (Indirectly, therefore, it can control any number of call sites.)
 This is done by using the single switch point as a factory for combining
 any number of guarded method handle pairs into guarded delegators.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 When a guarded delegator is created from a guarded pair, the pair
 is wrapped in a new method handle `],
			[/* inline code block */ 'i', `M`],
			[/* text */ 't', `,
 which is permanently associated with the switch point that created it.
 Each pair consists of a target `],
			[/* inline code block */ 'i', `T`],
			[/* text */ 't', ` and a fallback `],
			[/* inline code block */ 'i', `F`],
			[/* text */ 't', `.
 While the switch point is valid, invocations to `],
			[/* inline code block */ 'i', `M`],
			[/* text */ 't', ` are delegated to `],
			[/* inline code block */ 'i', `T`],
			[/* text */ 't', `.
 After it is invalidated, invocations are delegated to `],
			[/* inline code block */ 'i', `F`],
			[/* text */ 't', `.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 Invalidation is global and immediate, as if the switch point contained a
 volatile boolean variable consulted on every call to `],
			[/* inline code block */ 'i', `M`],
			[/* text */ 't', `.
 The invalidation is also permanent, which means the switch point
 can change state only once.
 The switch point will always delegate to `],
			[/* inline code block */ 'i', `F`],
			[/* text */ 't', ` after being invalidated.
 At that point `],
			[/* inline code block */ 'i', `guardWithTest`],
			[/* text */ 't', ` may ignore `],
			[/* inline code block */ 'i', `T`],
			[/* text */ 't', ` and return `],
			[/* inline code block */ 'i', `F`],
			[/* text */ 't', `.
 `]
		]],
		[/* block */ 'b', `
 Here is an example of a switch point in action:
 `],
		[/* code block */ 'c', [
			[/* inline code block */ 'i', `MethodHandle MH_strcat = MethodHandles.lookup()
     .findVirtual(String.class, "concat", MethodType.methodType(String.class, String.class));
 SwitchPoint spt = new SwitchPoint();
 assert(!spt.hasBeenInvalidated());
 // the following steps may be repeated to re-use the same switch point:
 MethodHandle worker1 = MH_strcat;
 MethodHandle worker2 = MethodHandles.permuteArguments(MH_strcat, MH_strcat.type(), 1, 0);
 MethodHandle worker = spt.guardWithTest(worker1, worker2);
 assertEquals("method", (String) worker.invokeExact("met", "hod"));
 SwitchPoint.invalidateAll(new SwitchPoint[]{ spt });
 assert(spt.hasBeenInvalidated());
 assertEquals("hodmet", (String) worker.invokeExact("met", "hod"));`]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `Discussion:`],
			[/* text */ 't', `
 Switch points are useful without subclassing.  They may also be subclassed.
 This may be useful in order to associate application-specific invalidation logic
 with the switch point.
 Notice that there is no permanent association between a switch point and
 the method handles it produces and consumes.
 The garbage collector may collect method handles produced or consumed
 by a switch point independently of the lifetime of the switch point itself.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Implementation Note:`],
			[/* text */ 't', `
 A switch point behaves as if implemented on top of `],
			[/* reference */ 'r', `java.lang.invoke.MutableCallSite`],
			[/* text */ 't', `,
 approximately as follows:
 `]
		]],
		[/* code block */ 'c', [
			[/* inline code block */ 'i', `public class SwitchPoint {
     private static final MethodHandle
         K_true  = MethodHandles.constant(boolean.class, true),
         K_false = MethodHandles.constant(boolean.class, false);
     private final MutableCallSite mcs;
     private final MethodHandle mcsInvoker;
     public SwitchPoint() {
         this.mcs = new MutableCallSite(K_true);
         this.mcsInvoker = mcs.dynamicInvoker();
     }
     public MethodHandle guardWithTest(
             MethodHandle target, MethodHandle fallback) {
         // Note:  mcsInvoker is of type ()boolean.
         // Target and fallback may take any arguments, but must have the same type.
         return MethodHandles.guardWithTest(this.mcsInvoker, target, fallback);
     }
     public static void invalidateAll(SwitchPoint[] spts) {
         List<MutableCallSite> mcss = new ArrayList<>();
         for (SwitchPoint spt : spts)  mcss.add(spt.mcs);
         for (MutableCallSite mcs : mcss)  mcs.setTarget(K_false);
         MutableCallSite.syncAll(mcss.toArray(new MutableCallSite[0]));
     }
 }`]
		]],
		[/* block */ 'b', '']
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Creates a new switch point.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'guardWithTest(java.lang.invoke.MethodHandle,java.lang.invoke.MethodHandle)', [
			[/* method description */
				[/* text */ 't', `Returns a method handle which always delegates either to the target or the fallback.
 The method handle will delegate to the target exactly as long as the switch point is valid.
 After that, it will permanently delegate to the fallback.
 `],
				[/* block */ 'b', `
 The target and fallback must be of exactly the same method type,
 and the resulting combined method handle will also be of this type.`]
			],
			[/* parameters */
				[/* parameter */ 'target', [/* parameter description */
					[/* text */ 't', `the method handle selected by the switch point as long as it is valid`]
				]],
				[/* parameter */ 'fallback', [/* parameter description */
					[/* text */ 't', `the method handle selected by the switch point after it is invalidated`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if either argument is null`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the two method types do not match`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a combined method handle which always calls either the target or fallback`]
			]
		]],
		[/* method */ 'hasBeenInvalidated()', [
			[/* method description */
				[/* text */ 't', `Determines if this switch point has been invalidated yet.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Discussion:`],
					[/* text */ 't', `
 Because of the one-way nature of invalidation, once a switch point begins
 to return true for `],
					[/* inline code block */ 'i', `hasBeenInvalidated`],
					[/* text */ 't', `,
 it will always do so in the future.
 On the other hand, a valid switch point visible to other threads may
 be invalidated at any moment, due to a request by another thread.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 Since invalidation is a global and immediate operation,
 the execution of this query, on a valid switchpoint,
 must be internally sequenced with any
 other threads that could cause invalidation.
 This query may therefore be expensive.
 The recommended way to build a boolean-valued method handle
 which queries the invalidation state of a switch point `],
					[/* inline code block */ 'i', `s`],
					[/* text */ 't', ` is
 to call `],
					[/* inline code block */ 'i', `s.guardWithTest`],
					[/* text */ 't', ` on
 `],
					[/* external link */ 'a', `MethodHandles.html#constant(java.lang.Class,java.lang.Object)`, `constant`],
					[/* text */ 't', ` true and false method handles.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if this switch point has been invalidated`]
			]
		]],
		[/* method */ 'invalidateAll(java.lang.invoke.SwitchPoint[])', [
			[/* method description */
				[/* text */ 't', `Sets all of the given switch points into the invalid state.
 After this call executes, no thread will observe any of the
 switch points to be in a valid state.
 `],
				[/* block */ 'b', `
 This operation is likely to be expensive and should be used sparingly.
 If possible, it should be buffered for batch processing on sets of switch points.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 If `],
					[/* inline code block */ 'i', `switchPoints`],
					[/* text */ 't', ` contains a null element,
 a `],
					[/* inline code block */ 'i', `NullPointerException`],
					[/* text */ 't', ` will be raised.
 In this case, some non-null elements in the array may be
 processed before the method returns abnormally.
 Which elements these are (if any) is implementation-dependent.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `Discussion:`],
					[/* text */ 't', `
 For performance reasons, `],
					[/* inline code block */ 'i', `invalidateAll`],
					[/* text */ 't', ` is not a virtual method
 on a single switch point, but rather applies to a set of switch points.
 Some implementations may incur a large fixed overhead cost
 for processing one or more invalidation operations,
 but a small incremental cost for each additional invalidation.
 In any case, this operation is likely to be costly, since
 other threads may have to be somehow interrupted
 in order to make them notice the updated switch point state.
 However, it may be observed that a single call to invalidate
 several switch points has the same formal effect as many calls,
 each on just one of the switch points.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `Implementation Note:`],
					[/* text */ 't', `
 Simple implementations of `],
					[/* inline code block */ 'i', `SwitchPoint`],
					[/* text */ 't', ` may use
 a private `],
					[/* reference */ 'r', `java.lang.invoke.MutableCallSite`],
					[/* text */ 't', ` to publish the state of a switch point.
 In such an implementation, the `],
					[/* inline code block */ 'i', `invalidateAll`],
					[/* text */ 't', ` method can
 simply change the call site's target, and issue one call to
 `],
					[/* external link */ 'a', `MutableCallSite.html#syncAll(java.lang.invoke.MutableCallSite%5B%5D)`, `synchronize`],
					[/* text */ 't', ` all the
 private call sites.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'switchPoints', [/* parameter description */
					[/* text */ 't', `an array of call sites to be synchronized`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `switchPoints`],
					[/* text */ 't', ` array reference is null
                              or the array contains a null`]
				]]
			],
			/* return */ UDF
		]]
	],
]);
