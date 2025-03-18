import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.lang.invoke.CallSite', [
	[/* class description */
		[/* text */ 't', `A `],
		[/* inline code block */ 'i', `CallSite`],
		[/* text */ 't', ` is a holder for a variable `],
		[/* reference */ 'r', `java.lang.invoke.MethodHandle`, `MethodHandle`],
		[/* text */ 't', `,
 which is called its `],
		[/* inline code block */ 'i', `target`],
		[/* text */ 't', `.
 An `],
		[/* inline code block */ 'i', `invokedynamic`],
		[/* text */ 't', ` instruction linked to a `],
		[/* inline code block */ 'i', `CallSite`],
		[/* text */ 't', ` delegates
 all calls to the site's current target.
 A `],
		[/* inline code block */ 'i', `CallSite`],
		[/* text */ 't', ` may be associated with several `],
		[/* inline code block */ 'i', `invokedynamic`],
		[/* text */ 't', `
 instructions, or it may be "free floating", associated with none.
 In any case, it may be invoked through an associated method handle
 called its `],
		[/* reference */ 'r', `#dynamicInvoker()`, `dynamic invoker`],
		[/* text */ 't', `.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 `],
			[/* inline code block */ 'i', `CallSite`],
			[/* text */ 't', ` is an abstract class which does not allow
 direct subclassing by users.  It has three immediate,
 concrete subclasses that may be either instantiated or subclassed.
 `]
		]],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* text */ 't', `If a mutable target is not required, an `],
				[/* inline code block */ 'i', `invokedynamic`],
				[/* text */ 't', ` instruction
 may be permanently bound by means of a `],
				[/* reference */ 'r', `java.lang.invoke.ConstantCallSite`, `constant call site`],
				[/* text */ 't', `.
 `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `If a mutable target is required which has volatile variable semantics,
 because updates to the target must be immediately and reliably witnessed by other threads,
 a `],
				[/* reference */ 'r', `java.lang.invoke.VolatileCallSite`, `volatile call site`],
				[/* text */ 't', ` may be used.
 `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `Otherwise, if a mutable target is required,
 a `],
				[/* reference */ 'r', `java.lang.invoke.MutableCallSite`, `mutable call site`],
				[/* text */ 't', ` may be used.
 `]
			]]
		]],
		[/* text */ 't', `
 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `
 A non-constant call site may be `],
			[/* text */ 't', `relinked`],
			[/* text */ 't', ` by changing its target.
 The new target must have the same `],
			[/* reference */ 'r', `java.lang.invoke.MethodHandle#type()`, `type`],
			[/* text */ 't', `
 as the previous target.
 Thus, though a call site can be relinked to a series of
 successive targets, it cannot change its type.
 `]
		]],
		[/* block */ 'b', `
 Here is a sample use of call sites and bootstrap methods which links every
 dynamic call site to print its arguments:
`],
		[/* blockquote */ 'q', [
			[/* code block */ 'c', [
				[/* inline code block */ 'i', `static void test() throws Throwable {
    // THE FOLLOWING LINE IS PSEUDOCODE FOR A JVM INSTRUCTION
    InvokeDynamic[#bootstrapDynamic].baz("baz arg", 2, 3.14);
}
private static void printArgs(Object... args) {
  System.out.println(java.util.Arrays.deepToString(args));
}
private static final MethodHandle printArgs;
static {
  MethodHandles.Lookup lookup = MethodHandles.lookup();
  Class thisClass = lookup.lookupClass();  // (who am I?)
  printArgs = lookup.findStatic(thisClass,
      "printArgs", MethodType.methodType(void.class, Object[].class));
}
private static CallSite bootstrapDynamic(MethodHandles.Lookup caller, String name, MethodType type) {
  // ignore caller and name, but match the type:
  return new ConstantCallSite(printArgs.asType(type));
}`]
			]]
		]],
		[/* block */ 'b', '']
	],
	/* fields */,
	/* constructors */,
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
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `a method handle which always invokes this call site's current target`]
			]
		]],
		[/* method */ 'getTarget()', [
			[/* method description */
				[/* text */ 't', `Returns the target method of the call site, according to the
 behavior defined by this call site's specific class.
 The immediate subclasses of `],
				[/* inline code block */ 'i', `CallSite`],
				[/* text */ 't', ` document the
 class-specific behaviors of this method.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the current linkage state of the call site, its target method handle`]
			]
		]],
		[/* method */ 'setTarget(java.lang.invoke.MethodHandle)', [
			[/* method description */
				[/* text */ 't', `Updates the target method of this call site, according to the
 behavior defined by this call site's specific class.
 The immediate subclasses of `],
				[/* inline code block */ 'i', `CallSite`],
				[/* text */ 't', ` document the
 class-specific behaviors of this method.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The type of the new target must be `],
					[/* reference */ 'r', `java.lang.invoke.MethodType#equals(java.lang.Object)`, `equal to`],
					[/* text */ 't', `
 the type of the old target.`]
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
		]],
		[/* method */ 'type()', [
			[/* method description */
				[/* text */ 't', `Returns the type of this call site's target.
 Although targets may change, any call site's type is permanent, and can never change to an unequal type.
 The `],
				[/* inline code block */ 'i', `setTarget`],
				[/* text */ 't', ` method enforces this invariant by refusing any new target that does
 not have the previous target's type.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the type of the current target, which is also the type of any future target`]
			]
		]]
	],
	/* enum values */ UDF
]);
