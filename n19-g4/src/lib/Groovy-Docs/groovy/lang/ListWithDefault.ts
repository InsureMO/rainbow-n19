import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('groovy.lang.ListWithDefault', [
	[/* class description */
		[/* text */ 't', `A wrapper for `],
		[/* reference */ 'r', `java.util.List`],
		[/* text */ 't', ` which automatically grows the list when either `],
		[/* reference */ 'r', `get(int)`],
		[/* text */ 't', ` or
 `],
		[/* reference */ 'r', `getAt(int)`],
		[/* text */ 't', ` is called with an index greater than or equal to `],
		[/* inline code block */ 'i', `size()`],
		[/* text */ 't', `.`]
	],
	/* class sees */ UDF,
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'add(int,java.lang.Object)', [
			/* method description */ UDF,
			/* method sees */ UDF,
			/* method parameters */ UDF,
			/* method throwns */ UDF,
			/* method return */ UDF
		]],
		[/* method */ 'add(java.lang.Object)', [
			/* method description */ UDF,
			/* method sees */ UDF,
			/* method parameters */ UDF,
			/* method throwns */ UDF,
			/* method return */ UDF
		]],
		[/* method */ 'remove(int)', [
			/* method description */ UDF,
			/* method sees */ UDF,
			/* method parameters */ UDF,
			/* method throwns */ UDF,
			/* method return */ UDF
		]],
		[/* method */ 'remove(java.lang.Object)', [
			/* method description */ UDF,
			/* method sees */ UDF,
			/* method parameters */ UDF,
			/* method throwns */ UDF,
			/* method return */ UDF
		]],
		[/* method */ 'get(int)', [
			[/* method description */
				[/* text */ 't', `Returns the element at the given index but grows the list if needed. If the requested `],
				[/* inline code block */ 'i', `index`],
				[/* text */ 't', ` is
 greater than or equal to `],
				[/* inline code block */ 'i', `size()`],
				[/* text */ 't', `, the list will grow to the new size and a default value calculated
 using the `],
				[/* inline code block */ 'i', `initClosure`],
				[/* text */ 't', ` will be used to populate the missing value and returned.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 If `],
					[/* inline code block */ 'i', `lazyDefaultValues`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` any gaps when growing the list are filled
 with nulls. Subsequent attempts to retrieve items from the list from those gap index values
 will, upon finding null, call the `],
					[/* inline code block */ 'i', `initClosure`],
					[/* text */ 't', ` to populate the list for the
 given list value. Hence, when in this mode, nulls cannot be stored in this list.
 If `],
					[/* inline code block */ 'i', `lazyDefaultValues`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `false`],
					[/* text */ 't', ` any gaps when growing the list are filled
 eagerly by calling the `],
					[/* inline code block */ 'i', `initClosure`],
					[/* text */ 't', ` for all gap indexes during list growth.
 No calls to `],
					[/* inline code block */ 'i', `initClosure`],
					[/* text */ 't', ` are made except during list growth and it is ok to
 store null values in the list when in this mode.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 This implementation breaks
 the contract of `],
					[/* reference */ 'r', `java.util.List.get(int)`],
					[/* text */ 't', ` as it a) possibly modifies the underlying list and b) does
 NOT throw an `],
					[/* reference */ 'r', `java.lang.IndexOutOfBoundsException`],
					[/* text */ 't', ` when `],
					[/* inline code block */ 'i', `index < 0 || index >= size()`],
					[/* text */ 't', `.`]
				]]
			],
			/* method sees */ UDF,
			/* method parameters */ UDF,
			/* method throwns */ UDF,
			/* method return */ UDF
		]],
		[/* method */ 'equals(java.lang.Object)', [
			/* method description */ UDF,
			/* method sees */ UDF,
			/* method parameters */ UDF,
			/* method throwns */ UDF,
			/* method return */ UDF
		]],
		[/* method */ 'hashCode()', [
			/* method description */ UDF,
			/* method sees */ UDF,
			/* method parameters */ UDF,
			/* method throwns */ UDF,
			/* method return */ UDF
		]],
		[/* method */ 'indexOf(java.lang.Object)', [
			/* method description */ UDF,
			/* method sees */ UDF,
			/* method parameters */ UDF,
			/* method throwns */ UDF,
			/* method return */ UDF
		]],
		[/* method */ 'clear()', [
			/* method description */ UDF,
			/* method sees */ UDF,
			/* method parameters */ UDF,
			/* method throwns */ UDF,
			/* method return */ UDF
		]],
		[/* method */ 'lastIndexOf(java.lang.Object)', [
			/* method description */ UDF,
			/* method sees */ UDF,
			/* method parameters */ UDF,
			/* method throwns */ UDF,
			/* method return */ UDF
		]],
		[/* method */ 'isEmpty()', [
			/* method description */ UDF,
			/* method sees */ UDF,
			/* method parameters */ UDF,
			/* method throwns */ UDF,
			/* method return */ UDF
		]],
		[/* method */ 'size()', [
			/* method description */ UDF,
			/* method sees */ UDF,
			/* method parameters */ UDF,
			/* method throwns */ UDF,
			/* method return */ UDF
		]],
		[/* method */ 'subList(int,int)', [
			[/* method description */
				[/* text */ 't', `Returns a view of a portion of this list. This method returns a list with the same
 lazy list settings as the original list.`]
			],
			/* method sees */ UDF,
			/* method parameters */ UDF,
			/* method throwns */ UDF,
			/* method return */ UDF
		]],
		[/* method */ 'toArray(java.lang.Object[])', [
			/* method description */ UDF,
			/* method sees */ UDF,
			/* method parameters */ UDF,
			/* method throwns */ UDF,
			/* method return */ UDF
		]],
		[/* method */ 'toArray()', [
			/* method description */ UDF,
			/* method sees */ UDF,
			/* method parameters */ UDF,
			/* method throwns */ UDF,
			/* method return */ UDF
		]],
		[/* method */ 'iterator()', [
			/* method description */ UDF,
			/* method sees */ UDF,
			/* method parameters */ UDF,
			/* method throwns */ UDF,
			/* method return */ UDF
		]],
		[/* method */ 'contains(java.lang.Object)', [
			/* method description */ UDF,
			/* method sees */ UDF,
			/* method parameters */ UDF,
			/* method throwns */ UDF,
			/* method return */ UDF
		]],
		[/* method */ 'newInstance(java.util.List,boolean,groovy.lang.Closure)', [
			/* method description */ UDF,
			/* method sees */ UDF,
			/* method parameters */ UDF,
			/* method throwns */ UDF,
			/* method return */ UDF
		]],
		[/* method */ 'addAll(int,java.util.Collection)', [
			/* method description */ UDF,
			/* method sees */ UDF,
			/* method parameters */ UDF,
			/* method throwns */ UDF,
			/* method return */ UDF
		]],
		[/* method */ 'addAll(java.util.Collection)', [
			/* method description */ UDF,
			/* method sees */ UDF,
			/* method parameters */ UDF,
			/* method throwns */ UDF,
			/* method return */ UDF
		]],
		[/* method */ 'set(int,java.lang.Object)', [
			/* method description */ UDF,
			/* method sees */ UDF,
			/* method parameters */ UDF,
			/* method throwns */ UDF,
			/* method return */ UDF
		]],
		[/* method */ 'removeAll(java.util.Collection)', [
			/* method description */ UDF,
			/* method sees */ UDF,
			/* method parameters */ UDF,
			/* method throwns */ UDF,
			/* method return */ UDF
		]],
		[/* method */ 'retainAll(java.util.Collection)', [
			/* method description */ UDF,
			/* method sees */ UDF,
			/* method parameters */ UDF,
			/* method throwns */ UDF,
			/* method return */ UDF
		]],
		[/* method */ 'listIterator(int)', [
			/* method description */ UDF,
			/* method sees */ UDF,
			/* method parameters */ UDF,
			/* method throwns */ UDF,
			/* method return */ UDF
		]],
		[/* method */ 'listIterator()', [
			/* method description */ UDF,
			/* method sees */ UDF,
			/* method parameters */ UDF,
			/* method throwns */ UDF,
			/* method return */ UDF
		]],
		[/* method */ 'containsAll(java.util.Collection)', [
			/* method description */ UDF,
			/* method sees */ UDF,
			/* method parameters */ UDF,
			/* method throwns */ UDF,
			/* method return */ UDF
		]],
		[/* method */ 'isLazyDefaultValues()', [
			/* method description */ UDF,
			/* method sees */ UDF,
			/* method parameters */ UDF,
			/* method throwns */ UDF,
			/* method return */ UDF
		]],
		[/* method */ 'getInitClosure()', [
			/* method description */ UDF,
			/* method sees */ UDF,
			/* method parameters */ UDF,
			/* method throwns */ UDF,
			/* method return */ UDF
		]],
		[/* method */ 'getDelegate()', [
			/* method description */ UDF,
			/* method sees */ UDF,
			/* method parameters */ UDF,
			/* method throwns */ UDF,
			/* method return */ UDF
		]],
		[/* method */ 'getAt(int)', [
			[/* method description */
				[/* text */ 't', `Overwrites subscript operator handling by redirecting to `],
				[/* reference */ 'r', `get(int)`],
				[/* text */ 't', `.`]
			],
			/* method sees */ UDF,
			/* method parameters */ UDF,
			/* method throwns */ UDF,
			/* method return */ UDF
		]]
	],
]);
