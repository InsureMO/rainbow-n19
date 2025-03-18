import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.util.function.Predicate', [
	[/* class description */
		[/* text */ 't', `Represents a predicate (boolean-valued function) of one argument.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `This is a `],
			[/* text */ 't', `functional interface`],
			[/* text */ 't', `
 whose functional method is `],
			[/* reference */ 'r', `#test(T)`, `test(Object)`],
			[/* text */ 't', `.`]
		]]
	],
	/* fields */,
	/* constructors */,
	[/* methods */
		[/* method */ 'test(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Evaluates this predicate on the given argument.`]
			],
			[/* parameters */
				[/* parameter */ 't', [/* parameter description */
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
		[/* method */ 'and(java.util.function.Predicate)', [
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
		[/* method */ 'or(java.util.function.Predicate)', [
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
		]],
		[/* method */ 'isEqual(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Returns a predicate that tests if two arguments are equal according
 to `],
				[/* reference */ 'r', `java.util.Objects#equals(java.lang.Object,java.lang.Object)`, `Objects.equals(Object, Object)`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'targetRef', [/* parameter description */
					[/* text */ 't', `the object reference with which to compare for equality,
               which may be `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `a predicate that tests if two arguments are equal according
 to `],
				[/* reference */ 'r', `java.util.Objects#equals(java.lang.Object,java.lang.Object)`, `Objects.equals(Object, Object)`]
			]
		]],
		[/* method */ 'not(java.util.function.Predicate)', [
			[/* method description */
				[/* text */ 't', `Returns a predicate that is the negation of the supplied predicate.
 This is accomplished by returning result of the calling
 `],
				[/* inline code block */ 'i', `target.negate()`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'target', [/* parameter description */
					[/* text */ 't', `predicate to negate`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if target is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a predicate that negates the results of the supplied
         predicate`]
			]
		]]
	],
	/* enum values */ UDF
]);
