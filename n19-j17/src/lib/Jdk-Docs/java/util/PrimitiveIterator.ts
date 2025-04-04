import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.util.PrimitiveIterator', [
	[/* class description */
		[/* text */ 't', `A base type for primitive specializations of `],
		[/* inline code block */ 'i', `Iterator`],
		[/* text */ 't', `.  Specialized
 subtypes are provided for `],
		[/* reference */ 'r', `java.util.PrimitiveIterator.OfInt`, `int`],
		[/* text */ 't', `, `],
		[/* reference */ 'r', `java.util.PrimitiveIterator.OfLong`, `long`],
		[/* text */ 't', `, and
 `],
		[/* reference */ 'r', `java.util.PrimitiveIterator.OfDouble`, `double`],
		[/* text */ 't', ` values.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `The specialized subtype default implementations of `],
			[/* reference */ 'r', `java.util.Iterator#next()`, `Iterator.next()`],
			[/* text */ 't', `
 and `],
			[/* reference */ 'r', `java.util.Iterator#forEachRemaining(java.util.function.Consumer)`, `Iterator.forEachRemaining(java.util.function.Consumer)`],
			[/* text */ 't', ` box
 primitive values to instances of their corresponding wrapper class.  Such
 boxing may offset any advantages gained when using the primitive
 specializations.  To avoid boxing, the corresponding primitive-based methods
 should be used.  For example, `],
			[/* reference */ 'r', `java.util.PrimitiveIterator.OfInt#nextInt()`, `PrimitiveIterator.OfInt.nextInt()`],
			[/* text */ 't', ` and
 `],
			[/* reference */ 'r', `java.util.PrimitiveIterator.OfInt#forEachRemaining(java.util.function.IntConsumer)`, `PrimitiveIterator.OfInt.forEachRemaining(java.util.function.IntConsumer)`],
			[/* text */ 't', `
 should be used in preference to `],
			[/* reference */ 'r', `java.util.PrimitiveIterator.OfInt#next()`, `PrimitiveIterator.OfInt.next()`],
			[/* text */ 't', ` and
 `],
			[/* reference */ 'r', `java.util.PrimitiveIterator.OfInt#forEachRemaining(java.util.function.Consumer)`, `PrimitiveIterator.OfInt.forEachRemaining(java.util.function.Consumer)`],
			[/* text */ 't', `.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Iteration of primitive values using boxing-based methods
 `],
			[/* reference */ 'r', `java.util.Iterator#next()`, `next()`],
			[/* text */ 't', ` and
 `],
			[/* reference */ 'r', `java.util.Iterator#forEachRemaining(java.util.function.Consumer)`, `forEachRemaining()`],
			[/* text */ 't', `,
 does not affect the order in which the values, transformed to boxed values,
 are encountered.`]
		]]
	],
	/* fields */,
	/* constructors */,
	[/* methods */
		[/* method */ 'forEachRemaining(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Performs the given action for each remaining element until all elements
 have been processed or the action throws an exception.  Actions are
 performed in the order of iteration, if that order is specified.
 Exceptions thrown by the action are relayed to the caller.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The behavior of an iterator is unspecified if the action modifies the
 source of elements in any way (even by calling the `],
					[/* reference */ 'r', `java.util.Iterator#remove()`, `remove`],
					[/* text */ 't', `
 method or other mutator methods of `],
					[/* inline code block */ 'i', `Iterator`],
					[/* text */ 't', ` subtypes),
 unless an overriding class has specified a concurrent modification policy.
 `]
				]],
				[/* block */ 'b', `
 Subsequent behavior of an iterator is unspecified if the action throws an
 exception.`]
			],
			[/* parameters */
				[/* parameter */ 'action', [/* parameter description */
					[/* text */ 't', `The action to be performed for each element`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified action is null`]
				]]
			],
			/* return */ UDF
		]]
	],
	/* enum values */ UDF
]);
