import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.lang.ref.Reference', [
	[/* class description */
		[/* text */ 't', `Abstract base class for reference objects.  This class defines the
 operations common to all reference objects.  Because reference objects are
 implemented in close cooperation with the garbage collector, this class may
 not be subclassed directly.`]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'get()', [
			[/* method description */
				[/* text */ 't', `Returns this reference object's referent.  If this reference object has
 been cleared, either by the program or by the garbage collector, then
 this method returns `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The object to which this reference refers, or
           `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if this reference object has been cleared`]
			]
		]],
		[/* method */ 'clone()', [
			[/* method description */
				[/* text */ 't', `Throws `],
				[/* reference */ 'r', `java.lang.CloneNotSupportedException`],
				[/* text */ 't', `. A `],
				[/* inline code block */ 'i', `Reference`],
				[/* text */ 't', ` cannot be
 meaningfully cloned. Construct a new `],
				[/* inline code block */ 'i', `Reference`],
				[/* text */ 't', ` instead.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.CloneNotSupportedException', [/* throw description */
					[/* text */ 't', `always`]
				]]
			],
			[/* return description */
				[/* text */ 't', `never returns normally`]
			]
		]],
		[/* method */ 'clear()', [
			[/* method description */
				[/* text */ 't', `Clears this reference object.  Invoking this method will not cause this
 object to be enqueued.

 `],
				[/* block */ 'b', ` This method is invoked only by Java code; when the garbage collector
 clears references it does so directly, without invoking this method.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'reachabilityFence(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Ensures that the object referenced by the given reference remains
 `],
				[/* external link */ 'a', `package-summary.html#reachability`, `strongly reachable`],
				[/* text */ 't', `,
 regardless of any prior actions of the program that might otherwise cause
 the object to become unreachable; thus, the referenced object is not
 reclaimable by garbage collection at least until after the invocation of
 this method.  Invocation of this method does not itself initiate garbage
 collection or finalization.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method establishes an ordering for
 `],
					[/* external link */ 'a', `package-summary.html#reachability`, `strong reachability`],
					[/* text */ 't', `
 with respect to garbage collection.  It controls relations that are
 otherwise only implicit in a program -- the reachability conditions
 triggering garbage collection.  This method is designed for use in
 uncommon situations of premature finalization where using
 `],
					[/* inline code block */ 'i', `synchronized`],
					[/* text */ 't', ` blocks or methods, or using other synchronization
 facilities are not possible or do not provide the desired control.  This
 method is applicable only when reclamation may have visible effects,
 which is possible for objects with finalizers (See Section `],
					[/* external link */ 'a', `https://docs.oracle.com/javase/specs/jls/se17/html/jls-12.html#jls-12.6`, `12.6`],
					[/* text */ 't', `
 of `],
					[/* text */ 't', `The Java Language Specification`],
					[/* text */ 't', `) that
 are implemented in ways that rely on ordering control for
 correctness.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'ref', [/* parameter description */
					[/* text */ 't', `the reference. If `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `, this method has no effect.`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'enqueue()', [
			[/* method description */
				[/* text */ 't', `Clears this reference object and adds it to the queue with which
 it is registered, if any.

 `],
				[/* block */ 'b', ` This method is invoked only by Java code; when the garbage collector
 enqueues references it does so directly, without invoking this method.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this reference object was successfully
           enqueued; `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` if it was already enqueued or if
           it was not registered with a queue when it was created`]
			]
		]],
		[/* method */ 'refersTo(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Tests if the referent of this reference object is `],
				[/* inline code block */ 'i', `obj`],
				[/* text */ 't', `.
 Using a `],
				[/* inline code block */ 'i', `null`],
				[/* inline code block */ 'i', `obj`],
				[/* text */ 't', ` returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the
 reference object has been cleared.`]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `the object to compare with this reference object's referent`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if `],
				[/* inline code block */ 'i', `obj`],
				[/* text */ 't', ` is the referent of this reference object`]
			]
		]],
		[/* method */ 'isEnqueued()', [
			[/* method description */
				[/* text */ 't', `Tests if this reference object is in its associated queue, if any.
 This method returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` only if all of the following conditions
 are met:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', `this reference object was registered with a queue when it was created; and
 `],
					[/* block */ 'b', [
						[/* text */ 't', `the garbage collector has added this reference object to the queue
     or `],
						[/* reference */ 'r', `enqueue()`],
						[/* text */ 't', ` is called; and
 `]
					]],
					[/* block */ 'b', `this reference object is not yet removed from the queue.
 `]
				]],
				[/* text */ 't', `
 Otherwise, this method returns `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', `.
 This method may return `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` if this reference object has been cleared
 but not enqueued due to the race condition.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if and only if this reference object is
           in its associated queue (if any).`]
			]
		]]
	],
]);
