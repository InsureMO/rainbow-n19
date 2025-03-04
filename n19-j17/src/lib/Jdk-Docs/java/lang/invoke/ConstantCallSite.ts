import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.lang.invoke.ConstantCallSite', [
	[/* class description */
		[/* text */ 't', `A `],
		[/* inline code block */ 'i', `ConstantCallSite`],
		[/* text */ 't', ` is a `],
		[/* reference */ 'r', `java.lang.invoke.CallSite`],
		[/* text */ 't', ` whose target is permanent, and can never be changed.
 An `],
		[/* inline code block */ 'i', `invokedynamic`],
		[/* text */ 't', ` instruction linked to a `],
		[/* inline code block */ 'i', `ConstantCallSite`],
		[/* text */ 't', ` is permanently
 bound to the call site's target.`]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>(java.lang.invoke.MethodType,java.lang.invoke.MethodHandle)', [
			[/* constructor description */
				[/* text */ 't', `Creates a call site with a permanent target, possibly bound to the call site itself.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 During construction of the call site, the `],
					[/* inline code block */ 'i', `createTargetHook`],
					[/* text */ 't', ` is invoked to
 produce the actual target, as if by a call of the form
 `],
					[/* inline code block */ 'i', `(MethodHandle) createTargetHook.invoke(this)`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 Note that user code cannot perform such an action directly in a subclass constructor,
 since the target must be fixed before the `],
					[/* inline code block */ 'i', `ConstantCallSite`],
					[/* text */ 't', ` constructor returns.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The hook is said to bind the call site to a target method handle,
 and a typical action would be `],
					[/* inline code block */ 'i', `someTarget.bindTo(this)`],
					[/* text */ 't', `.
 However, the hook is free to take any action whatever,
 including ignoring the call site and returning a constant target.
 `]
				]],
				[/* block */ 'b', `
 The result returned by the hook must be a method handle of exactly
 the same type as the call site.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 While the hook is being called, the new `],
					[/* inline code block */ 'i', `ConstantCallSite`],
					[/* text */ 't', `
 object is in a partially constructed state.
 In this state,
 a call to `],
					[/* inline code block */ 'i', `getTarget`],
					[/* text */ 't', `, or any other attempt to use the target,
 will result in an `],
					[/* inline code block */ 'i', `IllegalStateException`],
					[/* text */ 't', `.
 It is legal at all times to obtain the call site's type using the `],
					[/* inline code block */ 'i', `type`],
					[/* text */ 't', ` method.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'targetType', [/* parameter description */
					[/* text */ 't', `the type of the method handle to be permanently associated with this call site`]
				]],
				[/* parameter */ 'createTargetHook', [/* parameter description */
					[/* text */ 't', `a method handle to invoke (on the call site) to produce the call site's target`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.invoke.WrongMethodTypeException', [/* throw description */
					[/* text */ 't', `if the hook cannot be invoked on the required arguments,
         or if the target returned by the hook is not of the given `],
					[/* inline code block */ 'i', `targetType`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the hook returns a null value`]
				]],
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the hook returns something other than a `],
					[/* inline code block */ 'i', `MethodHandle`]
				]],
				[/* throw */ 'java.lang.Throwable', [/* throw description */
					[/* text */ 't', `anything else thrown by the hook function`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.lang.invoke.MethodHandle)', [
			[/* constructor description */
				[/* text */ 't', `Creates a call site with a permanent target.`]
			],
			[/* parameters */
				[/* parameter */ 'target', [/* parameter description */
					[/* text */ 't', `the target to be permanently associated with this call site`]
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
				[/* text */ 't', `Returns this call site's permanent target.
 Since that target will never change, this is a correct implementation
 of `],
				[/* reference */ 'r', `.CallSite#dynamicInvoker()`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `ConstantCallSite`],
					[/* text */ 't', ` constructor has not completed`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the immutable linkage state of this call site, a constant method handle`]
			]
		]],
		[/* method */ 'getTarget()', [
			[/* method description */
				[/* text */ 't', `Returns the target method of the call site, which behaves
 like a `],
				[/* inline code block */ 'i', `final`],
				[/* text */ 't', ` field of the `],
				[/* inline code block */ 'i', `ConstantCallSite`],
				[/* text */ 't', `.
 That is, the target is always the original value passed
 to the constructor call which created this instance.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `ConstantCallSite`],
					[/* text */ 't', ` constructor has not completed`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the immutable linkage state of this call site, a constant method handle`]
			]
		]],
		[/* method */ 'setTarget(java.lang.invoke.MethodHandle)', [
			[/* method description */
				[/* text */ 't', `Always throws an `],
				[/* reference */ 'r', `java.lang.UnsupportedOperationException`],
				[/* text */ 't', `.
 This kind of call site cannot change its target.`]
			],
			[/* parameters */
				[/* parameter */ 'ignore', [/* parameter description */
					[/* text */ 't', `a new target proposed for the call site, which is ignored`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `because this kind of call site cannot change its target`]
				]]
			],
			/* return */ UDF
		]]
	],
]);
