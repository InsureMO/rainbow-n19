import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.util.function.IntPredicate', [
	[/* class description */
		[/* text */ 't', `Represents a predicate (boolean-valued function) of one `],
		[/* inline code block */ 'i', `int`],
		[/* text */ 't', `-valued
 argument. This is the `],
		[/* inline code block */ 'i', `int`],
		[/* text */ 't', `-consuming primitive type specialization of
 `],
		[/* reference */ 'r', `java.util.function.Predicate`, `Predicate`],
		[/* text */ 't', `.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `This is a `],
			[/* text */ 't', `functional interface`],
			[/* text */ 't', `
 whose functional method is `],
			[/* reference */ 'r', `#test(int)`, `test(int)`],
			[/* text */ 't', `.`]
		]]
	],
	/* fields */,
	/* constructors */,
	[/* methods */
		[/* method */ 'test(int)', [
			[/* method description */
				[/* text */ 't', `Evaluates this predicate on the given argument.`]
			],
			[/* parameters */
				[/* parameter */ 'value', [/* parameter description */
					[/* text */ 't', `the input argument`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the input argument matches the predicate,
 otherwise `],
				[/* inline code block */ 'i', `false`]
			]
		]],
		[/* method */ 'and(java.util.function.IntPredicate)', [
			[/* method description */
				[/* text */ 't', `Returns a composed predicate that represents a short-circuiting logical
 AND of this predicate and another.  When evaluating the composed
 predicate, if this predicate is `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', `, then the `],
				[/* inline code block */ 'i', `other`],
				[/* text */ 't', `
 predicate is not evaluated.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Any exceptions thrown during evaluation of either predicate are relayed
 to the caller; if evaluation of this predicate throws an exception, the
 `],
					[/* inline code block */ 'i', `other`],
					[/* text */ 't', ` predicate will not be evaluated.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'other', [/* parameter description */
					[/* text */ 't', `a predicate that will be logically-ANDed with this
              predicate`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if other is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a composed predicate that represents the short-circuiting logical
 AND of this predicate and the `],
				[/* inline code block */ 'i', `other`],
				[/* text */ 't', ` predicate`]
			]
		]],
		[/* method */ 'negate()', [
			[/* method description */
				[/* text */ 't', `Returns a predicate that represents the logical negation of this
 predicate.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `a predicate that represents the logical negation of this
 predicate`]
			]
		]],
		[/* method */ 'or(java.util.function.IntPredicate)', [
			[/* method description */
				[/* text */ 't', `Returns a composed predicate that represents a short-circuiting logical
 OR of this predicate and another.  When evaluating the composed
 predicate, if this predicate is `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', `, then the `],
				[/* inline code block */ 'i', `other`],
				[/* text */ 't', `
 predicate is not evaluated.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Any exceptions thrown during evaluation of either predicate are relayed
 to the caller; if evaluation of this predicate throws an exception, the
 `],
					[/* inline code block */ 'i', `other`],
					[/* text */ 't', ` predicate will not be evaluated.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'other', [/* parameter description */
					[/* text */ 't', `a predicate that will be logically-ORed with this
              predicate`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if other is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a composed predicate that represents the short-circuiting logical
 OR of this predicate and the `],
				[/* inline code block */ 'i', `other`],
				[/* text */ 't', ` predicate`]
			]
		]]
	],
	/* enum values */ UDF
]);
