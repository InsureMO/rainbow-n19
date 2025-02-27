import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('groovy.lang.EmptyRange', [
	[/* class description */
		[/* text */ 't', `Constructing Ranges like 0..&lt;0`]
	],
	/* class sees */ UDF,
	[/* fields */
		[/* field */ 'at', [
			[/* field description */
				[/* text */ 't', `The value at which the range originates (may be `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `).`]
			],
		/* field sees */ UDF
		]]
	],
	[/* constructors */
		[/* constructor */ '<init>(java.lang.Comparable)', [
			[/* constructor description */
				[/* text */ 't', `Creates a new `],
				[/* reference */ 'r', `groovy.lang.EmptyRange`],
				[/* text */ 't', `.`]
			],
			/* constructor sees */ UDF,
			/* constructor parameters */ UDF,
			/* constructor throwns */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'add(java.lang.Comparable)', [
			[/* method description */
				[/* text */ 't', `Always throws `],
				[/* inline code block */ 'i', `UnsupportedOperationException`],
				[/* text */ 't', ` for an empty range.`]
			],
			/* method sees */ UDF,
			/* method parameters */ UDF,
			/* method throwns */ UDF,
			/* method return */ UDF
		]],
		[/* method */ 'remove(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Always throws `],
				[/* inline code block */ 'i', `UnsupportedOperationException`],
				[/* text */ 't', ` for an empty range.`]
			],
			/* method sees */ UDF,
			/* method parameters */ UDF,
			/* method throwns */ UDF,
			/* method return */ UDF
		]],
		[/* method */ 'remove(int)', [
			[/* method description */
				[/* text */ 't', `Always throws `],
				[/* inline code block */ 'i', `UnsupportedOperationException`],
				[/* text */ 't', ` for an empty range.`]
			],
			/* method sees */ UDF,
			/* method parameters */ UDF,
			/* method throwns */ UDF,
			/* method return */ UDF
		]],
		[/* method */ 'get(int)', [
			[/* method description */
				[/* text */ 't', `Always throws `],
				[/* inline code block */ 'i', `IndexOutOfBoundsException`],
				[/* text */ 't', ` for an empty range.`]
			],
			/* method sees */ UDF,
			/* method parameters */ UDF,
			/* method throwns */ UDF,
			/* method return */ UDF
		]],
		[/* method */ 'toString()', [
			/* method description */ UDF,
			/* method sees */ UDF,
			/* method parameters */ UDF,
			/* method throwns */ UDF,
			/* method return */ UDF
		]],
		[/* method */ 'size()', [
			[/* method description */
				[/* text */ 't', `Always 0 for an empty range.`]
			],
			/* method sees */ UDF,
			/* method parameters */ UDF,
			/* method throwns */ UDF,
			/* method return */ UDF
		]],
		[/* method */ 'addAll(java.util.Collection)', [
			[/* method description */
				[/* text */ 't', `Always throws `],
				[/* inline code block */ 'i', `UnsupportedOperationException`],
				[/* text */ 't', ` for an empty range.`]
			],
			/* method sees */ UDF,
			/* method parameters */ UDF,
			/* method throwns */ UDF,
			/* method return */ UDF
		]],
		[/* method */ 'addAll(int,java.util.Collection)', [
			[/* method description */
				[/* text */ 't', `Always throws `],
				[/* inline code block */ 'i', `UnsupportedOperationException`],
				[/* text */ 't', ` for an empty range.`]
			],
			/* method sees */ UDF,
			/* method parameters */ UDF,
			/* method throwns */ UDF,
			/* method return */ UDF
		]],
		[/* method */ 'set(int,java.lang.Comparable)', [
			[/* method description */
				[/* text */ 't', `Always throws `],
				[/* inline code block */ 'i', `UnsupportedOperationException`],
				[/* text */ 't', ` for an empty range.`]
			],
			/* method sees */ UDF,
			/* method parameters */ UDF,
			/* method throwns */ UDF,
			/* method return */ UDF
		]],
		[/* method */ 'removeAll(java.util.Collection)', [
			[/* method description */
				[/* text */ 't', `Always throws `],
				[/* inline code block */ 'i', `UnsupportedOperationException`],
				[/* text */ 't', ` for an empty range.`]
			],
			/* method sees */ UDF,
			/* method parameters */ UDF,
			/* method throwns */ UDF,
			/* method return */ UDF
		]],
		[/* method */ 'retainAll(java.util.Collection)', [
			[/* method description */
				[/* text */ 't', `Always throws `],
				[/* inline code block */ 'i', `UnsupportedOperationException`],
				[/* text */ 't', ` for an empty range.`]
			],
			/* method sees */ UDF,
			/* method parameters */ UDF,
			/* method throwns */ UDF,
			/* method return */ UDF
		]],
		[/* method */ 'step(int)', [
			[/* method description */
				[/* text */ 't', `Always returns an empty list for an empty range.`]
			],
			/* method sees */ UDF,
			/* method parameters */ UDF,
			/* method throwns */ UDF,
			/* method return */ UDF
		]],
		[/* method */ 'step(int,groovy.lang.Closure)', [
			[/* method description */
				[/* text */ 't', `Always does nothing for an empty range.`]
			],
			/* method sees */ UDF,
			/* method parameters */ UDF,
			/* method throwns */ UDF,
			/* method return */ UDF
		]],
		[/* method */ 'getFrom()', [
			[/* method description */
				[/* text */ 't', `The lower value in the range.`]
			],
			/* method sees */ UDF,
			/* method parameters */ UDF,
			/* method throwns */ UDF,
			/* method return */ UDF
		]],
		[/* method */ 'containsWithinBounds(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Never true for an empty range.`]
			],
			/* method sees */ UDF,
			/* method parameters */ UDF,
			/* method throwns */ UDF,
			/* method return */ UDF
		]],
		[/* method */ 'getTo()', [
			[/* method description */
				[/* text */ 't', `The upper value in the range.`]
			],
			/* method sees */ UDF,
			/* method parameters */ UDF,
			/* method throwns */ UDF,
			/* method return */ UDF
		]],
		[/* method */ 'isReverse()', [
			[/* method description */
				[/* text */ 't', `Never true for an empty range.`]
			],
			/* method sees */ UDF,
			/* method parameters */ UDF,
			/* method throwns */ UDF,
			/* method return */ UDF
		]],
		[/* method */ 'inspect()', [
			/* method description */ UDF,
			/* method sees */ UDF,
			/* method parameters */ UDF,
			/* method throwns */ UDF,
			/* method return */ UDF
		]]
	],
]);
