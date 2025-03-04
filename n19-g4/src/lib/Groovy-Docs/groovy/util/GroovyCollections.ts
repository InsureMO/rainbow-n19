import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('groovy.util.GroovyCollections', [
	[/* class description */
		[/* text */ 't', `A Collections utility class`]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>()', [
			/* constructor description */ UDF,
			/* parameters */ UDF,
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'inits(java.lang.Iterable)', [
			/* method description */ UDF,
			/* parameters */ UDF,
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'tails(java.lang.Iterable)', [
			/* method description */ UDF,
			/* parameters */ UDF,
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'union(groovy.lang.Closure,java.lang.Iterable...)', [
			[/* method description */
				[/* text */ 't', `Returns an ordered set of all the unique items found in the provided argument iterables
 using the provided closure to compare items.
 `],
				[/* code block */ 'c', ` def abs = { n -> n.abs() }
 assert GroovyCollections.union(abs, [1, 2, 5], [-3, -4, -5], [4, 6]) == [1, 2, 5, -3, -4, 6]
 `]
			],
			[/* parameters */
				[/* parameter */ 'condition', [/* parameter description */
					[/* text */ 't', `a Closure used to determine unique items`]
				]],
				[/* parameter */ 'iterables', [/* parameter description */
					[/* text */ 't', `the sources of items`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the ordered list of unique values found`]
			]
		]],
		[/* method */ 'union(java.lang.Iterable...)', [
			[/* method description */
				[/* text */ 't', `Returns an ordered set of all the unique items found in the provided argument iterables.
 `],
				[/* code block */ 'c', ` assert GroovyCollections.union([1, 2], [2, 3], [1, 4]) == [1, 2, 3, 4]
 `]
			],
			[/* parameters */
				[/* parameter */ 'iterables', [/* parameter description */
					[/* text */ 't', `the sources of items`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the ordered list of unique values found`]
			]
		]],
		[/* method */ 'union(java.util.Comparator,java.lang.Iterable...)', [
			[/* method description */
				[/* text */ 't', `Returns an ordered set of all the unique items found in the provided argument iterables
 using the provided comparator to compare items.
 `],
				[/* code block */ 'c', ` assert GroovyCollections.union(n -> n.abs(), [1, 2, 5], [-3, -4, -5], [4, 6]) == [1, 2, 5, -3, -4, 6]
 assert GroovyCollections.union(n -> n.trunc(), [1.1, 2.2], [2.5, 3.3], [3.9, 4.1]) == [1.1, 2.2, 3.3, 4.1]
 assert GroovyCollections.union(w -> w.toUpperCase(), ['a', 'A'], ['B', 'a', 'c', 'b']) == ['a', 'B', 'c']
 `]
			],
			[/* parameters */
				[/* parameter */ 'comparator', [/* parameter description */
					[/* text */ 't', `a Comparator`]
				]],
				[/* parameter */ 'iterables', [/* parameter description */
					[/* text */ 't', `the sources of items`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the ordered list of unique values found`]
			]
		]],
		[/* method */ 'union(java.util.List)', [
			[/* method description */
				[/* text */ 't', `Returns an ordered set of all the unique items found in the provided argument iterables.
 `],
				[/* code block */ 'c', ` assert GroovyCollections.union([[1, 2], [2, 3], [1, 4]]) == [1, 2, 3, 4]
 `]
			],
			[/* parameters */
				[/* parameter */ 'iterables', [/* parameter description */
					[/* text */ 't', `the list of source items`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the ordered list of unique values found`]
			]
		]],
		[/* method */ 'union(java.util.List,groovy.lang.Closure)', [
			[/* method description */
				[/* text */ 't', `Returns an ordered set of all the unique items found in the provided argument iterables
 using the provided closure to compare items.
 `],
				[/* code block */ 'c', ` assert GroovyCollections.union([[1, 2, 5], [-3, -4, -5], [4, 6]]){ n -> n.abs() } == [1, 2, 5, -3, -4, 6]
 `]
			],
			[/* parameters */
				[/* parameter */ 'iterables', [/* parameter description */
					[/* text */ 't', `the list of source items`]
				]],
				[/* parameter */ 'condition', [/* parameter description */
					[/* text */ 't', `a Closure used to determine unique items`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the ordered list of unique values found`]
			]
		]],
		[/* method */ 'union(java.util.List,java.util.Comparator)', [
			[/* method description */
				[/* text */ 't', `Returns an ordered set of all the unique items found in the provided argument iterables
 using the provided comparator to compare items.
 `],
				[/* code block */ 'c', ` assert GroovyCollections.union([[1, 2, 5], [-3, -4, -5], [4, 6]], n -> n.abs()) == [1, 2, 5, -3, -4, 6]
 assert GroovyCollections.union([[1.1, 2.2], [2.5, 3.3], [3.9, 4.1]], n -> n.trunc()) == [1.1, 2.2, 3.3, 4.1]
 assert GroovyCollections.union([['a', 'A'], ['B', 'a', 'c', 'b']], w -> w.toUpperCase()) == ['a', 'B', 'c']
 `]
			],
			[/* parameters */
				[/* parameter */ 'iterables', [/* parameter description */
					[/* text */ 't', `the list of source items`]
				]],
				[/* parameter */ 'comparator', [/* parameter description */
					[/* text */ 't', `a Comparator`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the ordered list of unique values found`]
			]
		]],
		[/* method */ 'subsequences(java.util.List)', [
			[/* method description */
				[/* text */ 't', `Finds all non-null subsequences of a list.
 E.g. `],
				[/* inline code block */ 'i', `subsequences([1, 2, 3])`],
				[/* text */ 't', ` would be:
 [[1, 2, 3], [1, 3], [2, 3], [1, 2], [1], [2], [3]]`]
			],
			[/* parameters */
				[/* parameter */ 'items', [/* parameter description */
					[/* text */ 't', `the List of items`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the subsequences from items`]
			]
		]],
		[/* method */ 'max(java.lang.Iterable)', [
			[/* method description */
				[/* text */ 't', `Selects the maximum value found in an Iterable.`]
			],
			[/* parameters */
				[/* parameter */ 'items', [/* parameter description */
					[/* text */ 't', `a Collection`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the maximum value`]
			]
		]],
		[/* method */ 'max(java.lang.Object[])', [
			[/* method description */
				[/* text */ 't', `Selects the maximum value found in an array of items, so
 max([2, 4, 6] as Object[]) == 6.`]
			],
			[/* parameters */
				[/* parameter */ 'items', [/* parameter description */
					[/* text */ 't', `an array of items`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the maximum value`]
			]
		]],
		[/* method */ 'min(java.lang.Iterable)', [
			[/* method description */
				[/* text */ 't', `Selects the minimum value found in an Iterable of items.`]
			],
			[/* parameters */
				[/* parameter */ 'items', [/* parameter description */
					[/* text */ 't', `an Iterable`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the minimum value`]
			]
		]],
		[/* method */ 'min(java.lang.Object[])', [
			[/* method description */
				[/* text */ 't', `Selects the minimum value found in an array of items, so
 min([2, 4, 6] as Object[]) == 2.`]
			],
			[/* parameters */
				[/* parameter */ 'items', [/* parameter description */
					[/* text */ 't', `an array of items`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the minimum value`]
			]
		]],
		[/* method */ 'sum(java.lang.Iterable)', [
			[/* method description */
				[/* text */ 't', `Sums all the given items.`]
			],
			[/* parameters */
				[/* parameter */ 'items', [/* parameter description */
					[/* text */ 't', `an Iterable of items`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the sum of the item`]
			]
		]],
		[/* method */ 'sum(java.lang.Object[])', [
			[/* method description */
				[/* text */ 't', `Sums all the items from an array of items.`]
			],
			[/* parameters */
				[/* parameter */ 'items', [/* parameter description */
					[/* text */ 't', `an array of items`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the sum of the items`]
			]
		]],
		[/* method */ 'combinations(java.lang.Iterable)', [
			[/* method description */
				[/* text */ 't', `Finds all combinations of items from the given Iterable aggregate of collections.
 So, `],
				[/* inline code block */ 'i', `combinations([[true, false], [true, false]])`],
				[/* text */ 't', `
 is `],
				[/* inline code block */ 'i', `[[true, true], [false, true], [true, false], [false, false]]`],
				[/* text */ 't', `
 and `],
				[/* inline code block */ 'i', `combinations([['a', 'b'],[1, 2, 3]])`],
				[/* text */ 't', `
 is `],
				[/* inline code block */ 'i', `[['a', 1], ['b', 1], ['a', 2], ['b', 2], ['a', 3], ['b', 3]]`],
				[/* text */ 't', `.
 If a non-collection item is given, it is treated as a singleton collection,
 i.e. `],
				[/* inline code block */ 'i', `combinations([[1, 2], 'x'])`],
				[/* text */ 't', ` is `],
				[/* inline code block */ 'i', `[[1, 'x'], [2, 'x']]`],
				[/* text */ 't', `.
 If an empty collection is found within the given collections, the result will be an empty list.`]
			],
			[/* parameters */
				[/* parameter */ 'collections', [/* parameter description */
					[/* text */ 't', `the Iterable of given collections`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a List of the combinations found`]
			]
		]],
		[/* method */ 'combinations(java.lang.Object[])', [
			[/* method description */
				[/* text */ 't', `Finds all combinations of items from the given collections.`]
			],
			[/* parameters */
				[/* parameter */ 'collections', [/* parameter description */
					[/* text */ 't', `the given collections`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a List of the combinations found`]
			]
		]],
		[/* method */ 'transpose(java.lang.Object[])', [
			[/* method description */
				[/* text */ 't', `Transposes an array of lists.`]
			],
			[/* parameters */
				[/* parameter */ 'lists', [/* parameter description */
					[/* text */ 't', `the given lists`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a List of the transposed lists`]
			]
		]],
		[/* method */ 'transpose(java.util.List)', [
			[/* method description */
				[/* text */ 't', `Transposes the given lists.
 So, `],
				[/* inline code block */ 'i', `transpose([['a', 'b'], [1, 2]])`],
				[/* text */ 't', `
 is `],
				[/* inline code block */ 'i', `[['a', 1], ['b', 2]]`],
				[/* text */ 't', ` and
 `],
				[/* inline code block */ 'i', `transpose([['a', 'b', 'c']])`],
				[/* text */ 't', `
 is `],
				[/* inline code block */ 'i', `[['a'], ['b'], ['c']]`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'lists', [/* parameter description */
					[/* text */ 't', `the given lists`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a List of the transposed lists`]
			]
		]]
	],
]);
