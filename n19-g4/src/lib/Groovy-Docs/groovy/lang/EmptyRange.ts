import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('groovy.lang.EmptyRange', [
	[/* class description */
		[/* text */ 't', `Constructing Ranges like 0..&lt;0`]
	],
	[/* fields */
		[/* field */ 'at', [
			[/* field description */
				[/* text */ 't', `The value at which the range originates (may be `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `).`]
			],
		]]
	],
	[/* constructors */
		[/* constructor */ '<init>(java.lang.Comparable)', [
			[/* constructor description */
				[/* text */ 't', `Creates a new `],
				[/* reference */ 'r', `groovy.lang.EmptyRange`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'at', [/* parameter description */
					[/* text */ 't', `the value at which the range starts (may be `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `).`]
				]]
			],
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'add(java.lang.Comparable)', [
			[/* method description */
				[/* text */ 't', `Always throws `],
				[/* inline code block */ 'i', `UnsupportedOperationException`],
				[/* text */ 't', ` for an empty range.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `always`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'remove(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Always throws `],
				[/* inline code block */ 'i', `UnsupportedOperationException`],
				[/* text */ 't', ` for an empty range.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', UDF]
			],
			/* return */ UDF
		]],
		[/* method */ 'remove(int)', [
			[/* method description */
				[/* text */ 't', `Always throws `],
				[/* inline code block */ 'i', `UnsupportedOperationException`],
				[/* text */ 't', ` for an empty range.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', UDF]
			],
			/* return */ UDF
		]],
		[/* method */ 'get(int)', [
			[/* method description */
				[/* text */ 't', `Always throws `],
				[/* inline code block */ 'i', `IndexOutOfBoundsException`],
				[/* text */ 't', ` for an empty range.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `always`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'toString()', [
			/* method description */ UDF,
			/* parameters */ UDF,
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'size()', [
			[/* method description */
				[/* text */ 't', `Always 0 for an empty range.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `0`]
			]
		]],
		[/* method */ 'addAll(java.util.Collection)', [
			[/* method description */
				[/* text */ 't', `Always throws `],
				[/* inline code block */ 'i', `UnsupportedOperationException`],
				[/* text */ 't', ` for an empty range.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', UDF]
			],
			/* return */ UDF
		]],
		[/* method */ 'addAll(int,java.util.Collection)', [
			[/* method description */
				[/* text */ 't', `Always throws `],
				[/* inline code block */ 'i', `UnsupportedOperationException`],
				[/* text */ 't', ` for an empty range.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', UDF]
			],
			/* return */ UDF
		]],
		[/* method */ 'set(int,java.lang.Comparable)', [
			[/* method description */
				[/* text */ 't', `Always throws `],
				[/* inline code block */ 'i', `UnsupportedOperationException`],
				[/* text */ 't', ` for an empty range.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', UDF]
			],
			/* return */ UDF
		]],
		[/* method */ 'removeAll(java.util.Collection)', [
			[/* method description */
				[/* text */ 't', `Always throws `],
				[/* inline code block */ 'i', `UnsupportedOperationException`],
				[/* text */ 't', ` for an empty range.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', UDF]
			],
			/* return */ UDF
		]],
		[/* method */ 'retainAll(java.util.Collection)', [
			[/* method description */
				[/* text */ 't', `Always throws `],
				[/* inline code block */ 'i', `UnsupportedOperationException`],
				[/* text */ 't', ` for an empty range.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', UDF]
			],
			/* return */ UDF
		]],
		[/* method */ 'step(int)', [
			[/* method description */
				[/* text */ 't', `Always returns an empty list for an empty range.`]
			],
			[/* parameters */
				[/* parameter */ 'step', [/* parameter description */
					[/* text */ 't', `the amount by which to step. If negative, steps through the range backwards.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the list formed by stepping through the range by the indicated interval.`]
			]
		]],
		[/* method */ 'step(int,groovy.lang.Closure)', [
			[/* method description */
				[/* text */ 't', `Always does nothing for an empty range.`]
			],
			[/* parameters */
				[/* parameter */ 'step', [/* parameter description */
					[/* text */ 't', `the amount by which to step. If negative, steps through the range backwards.`]
				]],
				[/* parameter */ 'closure', [/* parameter description */
					[/* text */ 't', `the `],
					[/* reference */ 'r', `groovy.lang.Closure`],
					[/* text */ 't', ` to call`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'getFrom()', [
			[/* method description */
				[/* text */ 't', `The lower value in the range.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the lower value in the range.`]
			]
		]],
		[/* method */ 'getTo()', [
			[/* method description */
				[/* text */ 't', `The upper value in the range.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the upper value in the range`]
			]
		]],
		[/* method */ 'isReverse()', [
			[/* method description */
				[/* text */ 't', `Never true for an empty range.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `false`]
			]
		]],
		[/* method */ 'inspect()', [
			/* method description */ UDF,
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the verbose `],
				[/* reference */ 'r', `java.lang.String`],
				[/* text */ 't', ` representation of this `],
				[/* reference */ 'r', `groovy.lang.Range`],
				[/* text */ 't', ` as would be typed into a console to create the `],
				[/* reference */ 'r', `groovy.lang.Range`],
				[/* text */ 't', ` instance`]
			]
		]],
		[/* method */ 'containsWithinBounds(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Never true for an empty range.`]
			],
			[/* parameters */
				[/* parameter */ 'o', [/* parameter description */
					[/* text */ 't', `the object to check against the boundaries of the range`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `false`]
			]
		]]
	],
]);
