import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.util.Arrays', [
	[/* class description */
		[/* text */ 't', `This class contains various methods for manipulating arrays (such as
 sorting and searching). This class also contains a static factory
 that allows arrays to be viewed as lists.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `The methods in this class all throw a `],
			[/* inline code block */ 'i', `NullPointerException`],
			[/* text */ 't', `,
 if the specified array reference is null, except where noted.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `The documentation for the methods contained in this class includes
 brief descriptions of the `],
			[/* text */ 't', `implementations`],
			[/* text */ 't', `. Such descriptions should
 be regarded as `],
			[/* text */ 't', `implementation notes`],
			[/* text */ 't', `, rather than parts of the
 `],
			[/* text */ 't', `specification`],
			[/* text */ 't', `. Implementors should feel free to substitute other
 algorithms, so long as the specification itself is adhered to. (For
 example, the algorithm used by `],
			[/* inline code block */ 'i', `sort(Object[])`],
			[/* text */ 't', ` does not have to be
 a MergeSort, but it does have to be `],
			[/* text */ 't', `stable`],
			[/* text */ 't', `.)

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `This class is a member of the
 `],
			[/* text */ 't', `Java Collections Framework`],
			[/* text */ 't', `.`]
		]]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'compare(java.lang.Comparable[],int,int,java.lang.Comparable[],int,int)', [
			[/* method description */
				[/* text */ 't', `Compares two `],
				[/* inline code block */ 'i', `Object`],
				[/* text */ 't', ` arrays lexicographically over the specified
 ranges.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If the two arrays, over the specified ranges, share a common prefix
 then the lexicographic comparison is the result of comparing two
 elements of type `],
					[/* inline code block */ 'i', `T`],
					[/* text */ 't', ` at a relative index `],
					[/* inline code block */ 'i', `i`],
					[/* text */ 't', ` within the
 respective arrays that is the prefix length, as if by:
 `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `Comparator.nullsFirst(Comparator.<T>naturalOrder()).
         compare(a[aFromIndex + i, b[bFromIndex + i])`]
				]],
				[/* text */ 't', `
 Otherwise, one array is a proper prefix of the other and, lexicographic
 comparison is the result of comparing the two range lengths.
 (See `],
				[/* reference */ 'r', `#mismatch(java.lang.Object%5B%5D,int,int,java.lang.Object%5B%5D,int,int)`, `mismatch(Object[], int, int, Object[], int, int)`],
				[/* text */ 't', ` for the
 definition of a common and proper prefix.)

 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `The comparison is consistent with
 `],
					[/* reference */ 'r', `#equals(java.lang.Object%5B%5D,int,int,java.lang.Object%5B%5D,int,int)`, `equals`],
					[/* text */ 't', `, more
 specifically the following holds for arrays `],
					[/* inline code block */ 'i', `a`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', ` with
 specified ranges [`],
					[/* inline code block */ 'i', `aFromIndex`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `atoIndex`],
					[/* text */ 't', `) and
 [`],
					[/* inline code block */ 'i', `bFromIndex`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `btoIndex`],
					[/* text */ 't', `) respectively:
 `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `Arrays.equals(a, aFromIndex, aToIndex, b, bFromIndex, bToIndex) ==
         (Arrays.compare(a, aFromIndex, aToIndex, b, bFromIndex, bToIndex) == 0)`]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the first array to compare`]
				]],
				[/* parameter */ 'aFromIndex', [/* parameter description */
					[/* text */ 't', `the index (inclusive) of the first element in the
                   first array to be compared`]
				]],
				[/* parameter */ 'aToIndex', [/* parameter description */
					[/* text */ 't', `the index (exclusive) of the last element in the
                 first array to be compared`]
				]],
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the second array to compare`]
				]],
				[/* parameter */ 'bFromIndex', [/* parameter description */
					[/* text */ 't', `the index (inclusive) of the first element in the
                   second array to be compared`]
				]],
				[/* parameter */ 'bToIndex', [/* parameter description */
					[/* text */ 't', `the index (exclusive) of the last element in the
                 second array to be compared`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `aFromIndex > aToIndex`],
					[/* text */ 't', ` or
         if `],
					[/* inline code block */ 'i', `bFromIndex > bToIndex`]
				]],
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `aFromIndex < 0 or aToIndex > a.length`],
					[/* text */ 't', ` or
         if `],
					[/* inline code block */ 'i', `bFromIndex < 0 or bToIndex > b.length`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if either array is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the value `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if, over the specified ranges, the first and
         second array are equal and contain the same elements in the same
         order;
         a value less than `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if, over the specified ranges, the
         first array is lexicographically less than the second array; and
         a value greater than `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if, over the specified ranges, the
         first array is lexicographically greater than the second array`]
			]
		]],
		[/* method */ 'compare(java.lang.Comparable[],java.lang.Comparable[])', [
			[/* method description */
				[/* text */ 't', `Compares two `],
				[/* inline code block */ 'i', `Object`],
				[/* text */ 't', ` arrays, within comparable elements,
 lexicographically.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If the two arrays share a common prefix then the lexicographic
 comparison is the result of comparing two elements of type `],
					[/* inline code block */ 'i', `T`],
					[/* text */ 't', ` at
 an index `],
					[/* inline code block */ 'i', `i`],
					[/* text */ 't', ` within the respective arrays that is the prefix
 length, as if by:
 `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `Comparator.nullsFirst(Comparator.<T>naturalOrder()).
         compare(a[i], b[i])`]
				]],
				[/* text */ 't', `
 Otherwise, one array is a proper prefix of the other and, lexicographic
 comparison is the result of comparing the two array lengths.
 (See `],
				[/* reference */ 'r', `#mismatch(java.lang.Object%5B%5D,java.lang.Object%5B%5D)`, `mismatch(Object[], Object[])`],
				[/* text */ 't', ` for the definition of a common
 and proper prefix.)

 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `A `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` array reference is considered lexicographically less
 than a non-`],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` array reference. Two `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` array
 references are considered equal.
 A `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` array element is considered lexicographically less than a
 non-`],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` array element. Two `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` array elements are
 considered equal.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The comparison is consistent with `],
					[/* reference */ 'r', `#equals(java.lang.Object%5B%5D,java.lang.Object%5B%5D)`, `equals`],
					[/* text */ 't', `,
 more specifically the following holds for arrays `],
					[/* inline code block */ 'i', `a`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', `:
 `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `Arrays.equals(a, b) == (Arrays.compare(a, b) == 0)`]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the first array to compare`]
				]],
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the second array to compare`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the value `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if the first and second array are equal and
         contain the same elements in the same order;
         a value less than `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if the first array is
         lexicographically less than the second array; and
         a value greater than `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if the first array is
         lexicographically greater than the second array`]
			]
		]],
		[/* method */ 'parallelSort(java.lang.Comparable[])', [
			[/* method description */
				[/* text */ 't', `Sorts the specified array of objects into ascending order, according
 to the `],
				[/* reference */ 'r', `java.lang.Comparable`, `natural ordering`],
				[/* text */ 't', ` of its elements.
 All elements in the array must implement the `],
				[/* reference */ 'r', `java.lang.Comparable`, `Comparable`],
				[/* text */ 't', `
 interface.  Furthermore, all elements in the array must be
 `],
				[/* text */ 't', `mutually comparable`],
				[/* text */ 't', ` (that is, `],
				[/* inline code block */ 'i', `e1.compareTo(e2)`],
				[/* text */ 't', ` must
 not throw a `],
				[/* inline code block */ 'i', `ClassCastException`],
				[/* text */ 't', ` for any elements `],
				[/* inline code block */ 'i', `e1`],
				[/* text */ 't', `
 and `],
				[/* inline code block */ 'i', `e2`],
				[/* text */ 't', ` in the array).

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This sort is guaranteed to be `],
					[/* text */ 't', `stable`],
					[/* text */ 't', `:  equal elements will
 not be reordered as a result of the sort.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the array to be sorted`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the array contains elements that are not
         `],
					[/* text */ 't', `mutually comparable`],
					[/* text */ 't', ` (for example, strings and integers)`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `(optional) if the natural
         ordering of the array elements is found to violate the
         `],
					[/* reference */ 'r', `java.lang.Comparable`, `Comparable`],
					[/* text */ 't', ` contract`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'parallelSort(java.lang.Comparable[],int,int)', [
			[/* method description */
				[/* text */ 't', `Sorts the specified range of the specified array of objects into
 ascending order, according to the
 `],
				[/* reference */ 'r', `java.lang.Comparable`, `natural ordering`],
				[/* text */ 't', ` of its
 elements.  The range to be sorted extends from index
 `],
				[/* inline code block */ 'i', `fromIndex`],
				[/* text */ 't', `, inclusive, to index `],
				[/* inline code block */ 'i', `toIndex`],
				[/* text */ 't', `, exclusive.
 (If `],
				[/* inline code block */ 'i', `fromIndex==toIndex`],
				[/* text */ 't', `, the range to be sorted is empty.)  All
 elements in this range must implement the `],
				[/* reference */ 'r', `java.lang.Comparable`, `Comparable`],
				[/* text */ 't', `
 interface.  Furthermore, all elements in this range must be `],
				[/* text */ 't', `mutually
 comparable`],
				[/* text */ 't', ` (that is, `],
				[/* inline code block */ 'i', `e1.compareTo(e2)`],
				[/* text */ 't', ` must not throw a
 `],
				[/* inline code block */ 'i', `ClassCastException`],
				[/* text */ 't', ` for any elements `],
				[/* inline code block */ 'i', `e1`],
				[/* text */ 't', ` and
 `],
				[/* inline code block */ 'i', `e2`],
				[/* text */ 't', ` in the array).

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This sort is guaranteed to be `],
					[/* text */ 't', `stable`],
					[/* text */ 't', `:  equal elements will
 not be reordered as a result of the sort.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the array to be sorted`]
				]],
				[/* parameter */ 'fromIndex', [/* parameter description */
					[/* text */ 't', `the index of the first element (inclusive) to be
        sorted`]
				]],
				[/* parameter */ 'toIndex', [/* parameter description */
					[/* text */ 't', `the index of the last element (exclusive) to be sorted`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `fromIndex > toIndex`],
					[/* text */ 't', ` or
         (optional) if the natural ordering of the array elements is
         found to violate the `],
					[/* reference */ 'r', `java.lang.Comparable`, `Comparable`],
					[/* text */ 't', ` contract`]
				]],
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `fromIndex < 0`],
					[/* text */ 't', ` or
         `],
					[/* inline code block */ 'i', `toIndex > a.length`]
				]],
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the array contains elements that are
         not `],
					[/* text */ 't', `mutually comparable`],
					[/* text */ 't', ` (for example, strings and
         integers).`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'copyOf(java.lang.Object[],int,java.lang.Class)', [
			[/* method description */
				[/* text */ 't', `Copies the specified array, truncating or padding with nulls (if necessary)
 so the copy has the specified length.  For all indices that are
 valid in both the original array and the copy, the two arrays will
 contain identical values.  For any indices that are valid in the
 copy but not the original, the copy will contain `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `.
 Such indices will exist if and only if the specified length
 is greater than that of the original array.
 The resulting array is of the class `],
				[/* inline code block */ 'i', `newType`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'original', [/* parameter description */
					[/* text */ 't', `the array to be copied`]
				]],
				[/* parameter */ 'newLength', [/* parameter description */
					[/* text */ 't', `the length of the copy to be returned`]
				]],
				[/* parameter */ 'newType', [/* parameter description */
					[/* text */ 't', `the class of the copy to be returned`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NegativeArraySizeException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `newLength`],
					[/* text */ 't', ` is negative`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `original`],
					[/* text */ 't', ` is null`]
				]],
				[/* throw */ 'java.lang.ArrayStoreException', [/* throw description */
					[/* text */ 't', `if an element copied from
     `],
					[/* inline code block */ 'i', `original`],
					[/* text */ 't', ` is not of a runtime type that can be stored in
     an array of class `],
					[/* inline code block */ 'i', `newType`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a copy of the original array, truncated or padded with nulls
     to obtain the specified length`]
			]
		]],
		[/* method */ 'copyOfRange(java.lang.Object[],int,int,java.lang.Class)', [
			[/* method description */
				[/* text */ 't', `Copies the specified range of the specified array into a new array.
 The initial index of the range (`],
				[/* inline code block */ 'i', `from`],
				[/* text */ 't', `) must lie between zero
 and `],
				[/* inline code block */ 'i', `original.length`],
				[/* text */ 't', `, inclusive.  The value at
 `],
				[/* inline code block */ 'i', `original[from]`],
				[/* text */ 't', ` is placed into the initial element of the copy
 (unless `],
				[/* inline code block */ 'i', `from == original.length`],
				[/* text */ 't', ` or `],
				[/* inline code block */ 'i', `from == to`],
				[/* text */ 't', `).
 Values from subsequent elements in the original array are placed into
 subsequent elements in the copy.  The final index of the range
 (`],
				[/* inline code block */ 'i', `to`],
				[/* text */ 't', `), which must be greater than or equal to `],
				[/* inline code block */ 'i', `from`],
				[/* text */ 't', `,
 may be greater than `],
				[/* inline code block */ 'i', `original.length`],
				[/* text */ 't', `, in which case
 `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` is placed in all elements of the copy whose index is
 greater than or equal to `],
				[/* inline code block */ 'i', `original.length - from`],
				[/* text */ 't', `.  The length
 of the returned array will be `],
				[/* inline code block */ 'i', `to - from`],
				[/* text */ 't', `.
 The resulting array is of the class `],
				[/* inline code block */ 'i', `newType`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'original', [/* parameter description */
					[/* text */ 't', `the array from which a range is to be copied`]
				]],
				[/* parameter */ 'from', [/* parameter description */
					[/* text */ 't', `the initial index of the range to be copied, inclusive`]
				]],
				[/* parameter */ 'to', [/* parameter description */
					[/* text */ 't', `the final index of the range to be copied, exclusive.
     (This index may lie outside the array.)`]
				]],
				[/* parameter */ 'newType', [/* parameter description */
					[/* text */ 't', `the class of the copy to be returned`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `from < 0`],
					[/* text */ 't', `
     or `],
					[/* inline code block */ 'i', `from > original.length`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `from > to`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `original`],
					[/* text */ 't', ` is null`]
				]],
				[/* throw */ 'java.lang.ArrayStoreException', [/* throw description */
					[/* text */ 't', `if an element copied from
     `],
					[/* inline code block */ 'i', `original`],
					[/* text */ 't', ` is not of a runtime type that can be stored in
     an array of class `],
					[/* inline code block */ 'i', `newType`],
					[/* text */ 't', `.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a new array containing the specified range from the original array,
     truncated or padded with nulls to obtain the required length`]
			]
		]],
		[/* method */ 'equals(java.lang.Object[],int,int,java.lang.Object[],int,int,java.util.Comparator)', [
			[/* method description */
				[/* text */ 't', `Returns true if the two specified arrays of Objects, over the specified
 ranges, are `],
				[/* text */ 't', `equal`],
				[/* text */ 't', ` to one another.

 `],
				[/* block */ 'b', `Two arrays are considered equal if the number of elements covered by
 each range is the same, and all corresponding pairs of elements over the
 specified ranges in the two arrays are equal.  In other words, two arrays
 are equal if they contain, over the specified ranges, the same elements
 in the same order.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Two objects `],
					[/* inline code block */ 'i', `e1`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `e2`],
					[/* text */ 't', ` are considered `],
					[/* text */ 't', `equal`],
					[/* text */ 't', ` if,
 given the specified comparator, `],
					[/* inline code block */ 'i', `cmp.compare(e1, e2) == 0`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the first array to be tested for equality`]
				]],
				[/* parameter */ 'aFromIndex', [/* parameter description */
					[/* text */ 't', `the index (inclusive) of the first element in the
                   first array to be tested`]
				]],
				[/* parameter */ 'aToIndex', [/* parameter description */
					[/* text */ 't', `the index (exclusive) of the last element in the
                 first array to be tested`]
				]],
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the second array to be tested for equality`]
				]],
				[/* parameter */ 'bFromIndex', [/* parameter description */
					[/* text */ 't', `the index (inclusive) of the first element in the
                   second array to be tested`]
				]],
				[/* parameter */ 'bToIndex', [/* parameter description */
					[/* text */ 't', `the index (exclusive) of the last element in the
                 second array to be tested`]
				]],
				[/* parameter */ 'cmp', [/* parameter description */
					[/* text */ 't', `the comparator to compare array elements`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `aFromIndex > aToIndex`],
					[/* text */ 't', ` or
         if `],
					[/* inline code block */ 'i', `bFromIndex > bToIndex`]
				]],
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `aFromIndex < 0 or aToIndex > a.length`],
					[/* text */ 't', ` or
         if `],
					[/* inline code block */ 'i', `bFromIndex < 0 or bToIndex > b.length`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if either array or the comparator is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the two arrays, over the specified ranges, are
         equal`]
			]
		]],
		[/* method */ 'equals(java.lang.Object[],java.lang.Object[],java.util.Comparator)', [
			[/* method description */
				[/* text */ 't', `Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the two specified arrays of Objects are
 `],
				[/* text */ 't', `equal`],
				[/* text */ 't', ` to one another.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Two arrays are considered equal if both arrays contain the same number
 of elements, and all corresponding pairs of elements in the two arrays
 are equal.  In other words, the two arrays are equal if they contain the
 same elements in the same order.  Also, two array references are
 considered equal if both are `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `Two objects `],
					[/* inline code block */ 'i', `e1`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `e2`],
					[/* text */ 't', ` are considered `],
					[/* text */ 't', `equal`],
					[/* text */ 't', ` if,
 given the specified comparator, `],
					[/* inline code block */ 'i', `cmp.compare(e1, e2) == 0`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `one array to be tested for equality`]
				]],
				[/* parameter */ 'a2', [/* parameter description */
					[/* text */ 't', `the other array to be tested for equality`]
				]],
				[/* parameter */ 'cmp', [/* parameter description */
					[/* text */ 't', `the comparator to compare array elements`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the comparator is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the two arrays are equal`]
			]
		]],
		[/* method */ 'binarySearch(java.lang.Object[],int,int,java.lang.Object,java.util.Comparator)', [
			[/* method description */
				[/* text */ 't', `Searches a range of
 the specified array for the specified object using the binary
 search algorithm.
 The range must be sorted into ascending order
 according to the specified comparator (as by the
 `],
				[/* reference */ 'r', `#sort(T%5B%5D,int,int,java.util.Comparator)`, `sort(T[], int, int, Comparator)`],
				[/* text */ 't', `
 method) prior to making this call.
 If it is not sorted, the results are undefined.
 If the range contains multiple elements equal to the specified object,
 there is no guarantee which one will be found.`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the array to be searched`]
				]],
				[/* parameter */ 'fromIndex', [/* parameter description */
					[/* text */ 't', `the index of the first element (inclusive) to be
          searched`]
				]],
				[/* parameter */ 'toIndex', [/* parameter description */
					[/* text */ 't', `the index of the last element (exclusive) to be searched`]
				]],
				[/* parameter */ 'key', [/* parameter description */
					[/* text */ 't', `the value to be searched for`]
				]],
				[/* parameter */ 'c', [/* parameter description */
					[/* text */ 't', `the comparator by which the array is ordered.  A
        `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` value indicates that the elements'
        `],
					[/* reference */ 'r', `java.lang.Comparable`, `natural ordering`],
					[/* text */ 't', ` should be used.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the range contains elements that are not
         `],
					[/* text */ 't', `mutually comparable`],
					[/* text */ 't', ` using the specified comparator,
         or the search key is not comparable to the
         elements in the range using this comparator.`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `fromIndex > toIndex`]
				]],
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `fromIndex < 0 or toIndex > a.length`]
				]]
			],
			[/* return description */
				[/* text */ 't', `index of the search key, if it is contained in the array
         within the specified range;
         otherwise, `],
				[/* inline code block */ 'i', `(-(insertion point) - 1)`],
				[/* text */ 't', `.  The
         `],
				[/* text */ 't', `insertion point`],
				[/* text */ 't', ` is defined as the point at which the
         key would be inserted into the array: the index of the first
         element in the range greater than the key,
         or `],
				[/* inline code block */ 'i', `toIndex`],
				[/* text */ 't', ` if all
         elements in the range are less than the specified key.  Note
         that this guarantees that the return value will be >= 0 if
         and only if the key is found.`]
			]
		]],
		[/* method */ 'binarySearch(java.lang.Object[],java.lang.Object,java.util.Comparator)', [
			[/* method description */
				[/* text */ 't', `Searches the specified array for the specified object using the binary
 search algorithm.  The array must be sorted into ascending order
 according to the specified comparator (as by the
 `],
				[/* reference */ 'r', `#sort(T%5B%5D,java.util.Comparator)`, `sort(T[], Comparator)`],
				[/* text */ 't', `
 method) prior to making this call.  If it is
 not sorted, the results are undefined.
 If the array contains multiple
 elements equal to the specified object, there is no guarantee which one
 will be found.`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the array to be searched`]
				]],
				[/* parameter */ 'key', [/* parameter description */
					[/* text */ 't', `the value to be searched for`]
				]],
				[/* parameter */ 'c', [/* parameter description */
					[/* text */ 't', `the comparator by which the array is ordered.  A
        `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` value indicates that the elements'
        `],
					[/* reference */ 'r', `java.lang.Comparable`, `natural ordering`],
					[/* text */ 't', ` should be used.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the array contains elements that are not
         `],
					[/* text */ 't', `mutually comparable`],
					[/* text */ 't', ` using the specified comparator,
         or the search key is not comparable to the
         elements of the array using this comparator.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `index of the search key, if it is contained in the array;
         otherwise, `],
				[/* inline code block */ 'i', `(-(insertion point) - 1)`],
				[/* text */ 't', `.  The
         `],
				[/* text */ 't', `insertion point`],
				[/* text */ 't', ` is defined as the point at which the
         key would be inserted into the array: the index of the first
         element greater than the key, or `],
				[/* inline code block */ 'i', `a.length`],
				[/* text */ 't', ` if all
         elements in the array are less than the specified key.  Note
         that this guarantees that the return value will be >= 0 if
         and only if the key is found.`]
			]
		]],
		[/* method */ 'compare(java.lang.Object[],int,int,java.lang.Object[],int,int,java.util.Comparator)', [
			[/* method description */
				[/* text */ 't', `Compares two `],
				[/* inline code block */ 'i', `Object`],
				[/* text */ 't', ` arrays lexicographically over the specified
 ranges.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If the two arrays, over the specified ranges, share a common prefix
 then the lexicographic comparison is the result of comparing with the
 specified comparator two elements at a relative index within the
 respective arrays that is the prefix length.
 Otherwise, one array is a proper prefix of the other and, lexicographic
 comparison is the result of comparing the two range lengths.
 (See `],
					[/* reference */ 'r', `#mismatch(java.lang.Object%5B%5D,int,int,java.lang.Object%5B%5D,int,int)`, `mismatch(Object[], int, int, Object[], int, int)`],
					[/* text */ 't', ` for the
 definition of a common and proper prefix.)`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the first array to compare`]
				]],
				[/* parameter */ 'aFromIndex', [/* parameter description */
					[/* text */ 't', `the index (inclusive) of the first element in the
                   first array to be compared`]
				]],
				[/* parameter */ 'aToIndex', [/* parameter description */
					[/* text */ 't', `the index (exclusive) of the last element in the
                 first array to be compared`]
				]],
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the second array to compare`]
				]],
				[/* parameter */ 'bFromIndex', [/* parameter description */
					[/* text */ 't', `the index (inclusive) of the first element in the
                   second array to be compared`]
				]],
				[/* parameter */ 'bToIndex', [/* parameter description */
					[/* text */ 't', `the index (exclusive) of the last element in the
                 second array to be compared`]
				]],
				[/* parameter */ 'cmp', [/* parameter description */
					[/* text */ 't', `the comparator to compare array elements`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `aFromIndex > aToIndex`],
					[/* text */ 't', ` or
         if `],
					[/* inline code block */ 'i', `bFromIndex > bToIndex`]
				]],
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `aFromIndex < 0 or aToIndex > a.length`],
					[/* text */ 't', ` or
         if `],
					[/* inline code block */ 'i', `bFromIndex < 0 or bToIndex > b.length`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if either array or the comparator is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the value `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if, over the specified ranges, the first and
         second array are equal and contain the same elements in the same
         order;
         a value less than `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if, over the specified ranges, the
         first array is lexicographically less than the second array; and
         a value greater than `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if, over the specified ranges, the
         first array is lexicographically greater than the second array`]
			]
		]],
		[/* method */ 'compare(java.lang.Object[],java.lang.Object[],java.util.Comparator)', [
			[/* method description */
				[/* text */ 't', `Compares two `],
				[/* inline code block */ 'i', `Object`],
				[/* text */ 't', ` arrays lexicographically using a specified
 comparator.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If the two arrays share a common prefix then the lexicographic
 comparison is the result of comparing with the specified comparator two
 elements at an index within the respective arrays that is the prefix
 length.
 Otherwise, one array is a proper prefix of the other and, lexicographic
 comparison is the result of comparing the two array lengths.
 (See `],
					[/* reference */ 'r', `#mismatch(java.lang.Object%5B%5D,java.lang.Object%5B%5D)`, `mismatch(Object[], Object[])`],
					[/* text */ 't', ` for the definition of a common
 and proper prefix.)

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `A `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` array reference is considered lexicographically less
 than a non-`],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` array reference.  Two `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` array
 references are considered equal.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the first array to compare`]
				]],
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the second array to compare`]
				]],
				[/* parameter */ 'cmp', [/* parameter description */
					[/* text */ 't', `the comparator to compare array elements`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the comparator is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the value `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if the first and second array are equal and
         contain the same elements in the same order;
         a value less than `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if the first array is
         lexicographically less than the second array; and
         a value greater than `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if the first array is
         lexicographically greater than the second array`]
			]
		]],
		[/* method */ 'mismatch(java.lang.Object[],int,int,java.lang.Object[],int,int,java.util.Comparator)', [
			[/* method description */
				[/* text */ 't', `Finds and returns the relative index of the first mismatch between two
 `],
				[/* inline code block */ 'i', `Object`],
				[/* text */ 't', ` arrays over the specified ranges, otherwise return -1 if
 no mismatch is found.  The index will be in the range of 0 (inclusive) up
 to the length (inclusive) of the smaller range.

 `],
				[/* block */ 'b', `If the two arrays, over the specified ranges, share a common prefix
 then the returned relative index is the length of the common prefix and
 it follows that there is a mismatch between the two elements at that
 relative index within the respective arrays.
 If one array is a proper prefix of the other, over the specified ranges,
 then the returned relative index is the length of the smaller range and
 it follows that the relative index is only valid for the array with the
 larger range.
 Otherwise, there is no mismatch.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Two non-`],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` arrays, `],
					[/* inline code block */ 'i', `a`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', ` with specified
 ranges [`],
					[/* inline code block */ 'i', `aFromIndex`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `atoIndex`],
					[/* text */ 't', `) and
 [`],
					[/* inline code block */ 'i', `bFromIndex`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `btoIndex`],
					[/* text */ 't', `) respectively, share a common
 prefix of length `],
					[/* inline code block */ 'i', `pl`],
					[/* text */ 't', ` if the following expression is true:
 `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `pl >= 0 &&
     pl < Math.min(aToIndex - aFromIndex, bToIndex - bFromIndex) &&
     Arrays.equals(a, aFromIndex, aFromIndex + pl, b, bFromIndex, bFromIndex + pl, cmp) &&
     cmp.compare(a[aFromIndex + pl], b[bFromIndex + pl]) != 0`]
				]],
				[/* text */ 't', `
 Note that a common prefix length of `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` indicates that the first
 elements from each array mismatch.

 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `Two non-`],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` arrays, `],
					[/* inline code block */ 'i', `a`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', ` with specified
 ranges [`],
					[/* inline code block */ 'i', `aFromIndex`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `atoIndex`],
					[/* text */ 't', `) and
 [`],
					[/* inline code block */ 'i', `bFromIndex`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `btoIndex`],
					[/* text */ 't', `) respectively, share a proper
 prefix if the following expression is true:
 `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `(aToIndex - aFromIndex) != (bToIndex - bFromIndex) &&
     Arrays.equals(a, 0, Math.min(aToIndex - aFromIndex, bToIndex - bFromIndex),
                   b, 0, Math.min(aToIndex - aFromIndex, bToIndex - bFromIndex),
                   cmp)`]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the first array to be tested for a mismatch`]
				]],
				[/* parameter */ 'aFromIndex', [/* parameter description */
					[/* text */ 't', `the index (inclusive) of the first element in the
                   first array to be tested`]
				]],
				[/* parameter */ 'aToIndex', [/* parameter description */
					[/* text */ 't', `the index (exclusive) of the last element in the
                 first array to be tested`]
				]],
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the second array to be tested for a mismatch`]
				]],
				[/* parameter */ 'bFromIndex', [/* parameter description */
					[/* text */ 't', `the index (inclusive) of the first element in the
                   second array to be tested`]
				]],
				[/* parameter */ 'bToIndex', [/* parameter description */
					[/* text */ 't', `the index (exclusive) of the last element in the
                 second array to be tested`]
				]],
				[/* parameter */ 'cmp', [/* parameter description */
					[/* text */ 't', `the comparator to compare array elements`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `aFromIndex > aToIndex`],
					[/* text */ 't', ` or
         if `],
					[/* inline code block */ 'i', `bFromIndex > bToIndex`]
				]],
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `aFromIndex < 0 or aToIndex > a.length`],
					[/* text */ 't', ` or
         if `],
					[/* inline code block */ 'i', `bFromIndex < 0 or bToIndex > b.length`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if either array or the comparator is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the relative index of the first mismatch between the two arrays
         over the specified ranges, otherwise `],
				[/* inline code block */ 'i', `-1`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'mismatch(java.lang.Object[],java.lang.Object[],java.util.Comparator)', [
			[/* method description */
				[/* text */ 't', `Finds and returns the index of the first mismatch between two
 `],
				[/* inline code block */ 'i', `Object`],
				[/* text */ 't', ` arrays, otherwise return -1 if no mismatch is found.
 The index will be in the range of 0 (inclusive) up to the length
 (inclusive) of the smaller array.

 `],
				[/* block */ 'b', `The specified comparator is used to determine if two array elements
 from the each array are not equal.

 `],
				[/* block */ 'b', `If the two arrays share a common prefix then the returned index is the
 length of the common prefix and it follows that there is a mismatch
 between the two elements at that index within the respective arrays.
 If one array is a proper prefix of the other then the returned index is
 the length of the smaller array and it follows that the index is only
 valid for the larger array.
 Otherwise, there is no mismatch.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Two non-`],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` arrays, `],
					[/* inline code block */ 'i', `a`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', `, share a common
 prefix of length `],
					[/* inline code block */ 'i', `pl`],
					[/* text */ 't', ` if the following expression is true:
 `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `pl >= 0 &&
     pl < Math.min(a.length, b.length) &&
     Arrays.equals(a, 0, pl, b, 0, pl, cmp)
     cmp.compare(a[pl], b[pl]) != 0`]
				]],
				[/* text */ 't', `
 Note that a common prefix length of `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` indicates that the first
 elements from each array mismatch.

 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `Two non-`],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` arrays, `],
					[/* inline code block */ 'i', `a`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', `, share a proper
 prefix if the following expression is true:
 `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `a.length != b.length &&
     Arrays.equals(a, 0, Math.min(a.length, b.length),
                   b, 0, Math.min(a.length, b.length),
                   cmp)`]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the first array to be tested for a mismatch`]
				]],
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the second array to be tested for a mismatch`]
				]],
				[/* parameter */ 'cmp', [/* parameter description */
					[/* text */ 't', `the comparator to compare array elements`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if either array or the comparator is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the index of the first mismatch between the two arrays,
         otherwise `],
				[/* inline code block */ 'i', `-1`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'asList(java.lang.Object...)', UDF],
		[/* method */ 'spliterator(java.lang.Object[])', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* reference */ 'r', `java.util.Spliterator`, `Spliterator`],
				[/* text */ 't', ` covering all of the specified array.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The spliterator reports `],
					[/* reference */ 'r', `java.util.Spliterator#SIZED`, `Spliterator.SIZED`],
					[/* text */ 't', `,
 `],
					[/* reference */ 'r', `java.util.Spliterator#SUBSIZED`, `Spliterator.SUBSIZED`],
					[/* text */ 't', `, `],
					[/* reference */ 'r', `java.util.Spliterator#ORDERED`, `Spliterator.ORDERED`],
					[/* text */ 't', `, and
 `],
					[/* reference */ 'r', `java.util.Spliterator#IMMUTABLE`, `Spliterator.IMMUTABLE`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'array', [/* parameter description */
					[/* text */ 't', `the array, assumed to be unmodified during use`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a spliterator for the array elements`]
			]
		]],
		[/* method */ 'spliterator(java.lang.Object[],int,int)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* reference */ 'r', `java.util.Spliterator`, `Spliterator`],
				[/* text */ 't', ` covering the specified range of the
 specified array.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The spliterator reports `],
					[/* reference */ 'r', `java.util.Spliterator#SIZED`, `Spliterator.SIZED`],
					[/* text */ 't', `,
 `],
					[/* reference */ 'r', `java.util.Spliterator#SUBSIZED`, `Spliterator.SUBSIZED`],
					[/* text */ 't', `, `],
					[/* reference */ 'r', `java.util.Spliterator#ORDERED`, `Spliterator.ORDERED`],
					[/* text */ 't', `, and
 `],
					[/* reference */ 'r', `java.util.Spliterator#IMMUTABLE`, `Spliterator.IMMUTABLE`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'array', [/* parameter description */
					[/* text */ 't', `the array, assumed to be unmodified during use`]
				]],
				[/* parameter */ 'startInclusive', [/* parameter description */
					[/* text */ 't', `the first index to cover, inclusive`]
				]],
				[/* parameter */ 'endExclusive', [/* parameter description */
					[/* text */ 't', `index immediately past the last index to cover`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `startInclusive`],
					[/* text */ 't', ` is
         negative, `],
					[/* inline code block */ 'i', `endExclusive`],
					[/* text */ 't', ` is less than
         `],
					[/* inline code block */ 'i', `startInclusive`],
					[/* text */ 't', `, or `],
					[/* inline code block */ 'i', `endExclusive`],
					[/* text */ 't', ` is greater than
         the array size`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a spliterator for the array elements`]
			]
		]],
		[/* method */ 'stream(java.lang.Object[])', [
			[/* method description */
				[/* text */ 't', `Returns a sequential `],
				[/* reference */ 'r', `java.util.stream.Stream`, `Stream`],
				[/* text */ 't', ` with the specified array as its
 source.`]
			],
			[/* parameters */
				[/* parameter */ 'array', [/* parameter description */
					[/* text */ 't', `The array, assumed to be unmodified during use`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Stream`],
				[/* text */ 't', ` for the array`]
			]
		]],
		[/* method */ 'stream(java.lang.Object[],int,int)', [
			[/* method description */
				[/* text */ 't', `Returns a sequential `],
				[/* reference */ 'r', `java.util.stream.Stream`, `Stream`],
				[/* text */ 't', ` with the specified range of the
 specified array as its source.`]
			],
			[/* parameters */
				[/* parameter */ 'array', [/* parameter description */
					[/* text */ 't', `the array, assumed to be unmodified during use`]
				]],
				[/* parameter */ 'startInclusive', [/* parameter description */
					[/* text */ 't', `the first index to cover, inclusive`]
				]],
				[/* parameter */ 'endExclusive', [/* parameter description */
					[/* text */ 't', `index immediately past the last index to cover`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `startInclusive`],
					[/* text */ 't', ` is
         negative, `],
					[/* inline code block */ 'i', `endExclusive`],
					[/* text */ 't', ` is less than
         `],
					[/* inline code block */ 'i', `startInclusive`],
					[/* text */ 't', `, or `],
					[/* inline code block */ 'i', `endExclusive`],
					[/* text */ 't', ` is greater than
         the array size`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Stream`],
				[/* text */ 't', ` for the array range`]
			]
		]],
		[/* method */ 'copyOf(java.lang.Object[],int)', [
			[/* method description */
				[/* text */ 't', `Copies the specified array, truncating or padding with nulls (if necessary)
 so the copy has the specified length.  For all indices that are
 valid in both the original array and the copy, the two arrays will
 contain identical values.  For any indices that are valid in the
 copy but not the original, the copy will contain `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `.
 Such indices will exist if and only if the specified length
 is greater than that of the original array.
 The resulting array is of exactly the same class as the original array.`]
			],
			[/* parameters */
				[/* parameter */ 'original', [/* parameter description */
					[/* text */ 't', `the array to be copied`]
				]],
				[/* parameter */ 'newLength', [/* parameter description */
					[/* text */ 't', `the length of the copy to be returned`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NegativeArraySizeException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `newLength`],
					[/* text */ 't', ` is negative`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `original`],
					[/* text */ 't', ` is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a copy of the original array, truncated or padded with nulls
     to obtain the specified length`]
			]
		]],
		[/* method */ 'copyOfRange(java.lang.Object[],int,int)', [
			[/* method description */
				[/* text */ 't', `Copies the specified range of the specified array into a new array.
 The initial index of the range (`],
				[/* inline code block */ 'i', `from`],
				[/* text */ 't', `) must lie between zero
 and `],
				[/* inline code block */ 'i', `original.length`],
				[/* text */ 't', `, inclusive.  The value at
 `],
				[/* inline code block */ 'i', `original[from]`],
				[/* text */ 't', ` is placed into the initial element of the copy
 (unless `],
				[/* inline code block */ 'i', `from == original.length`],
				[/* text */ 't', ` or `],
				[/* inline code block */ 'i', `from == to`],
				[/* text */ 't', `).
 Values from subsequent elements in the original array are placed into
 subsequent elements in the copy.  The final index of the range
 (`],
				[/* inline code block */ 'i', `to`],
				[/* text */ 't', `), which must be greater than or equal to `],
				[/* inline code block */ 'i', `from`],
				[/* text */ 't', `,
 may be greater than `],
				[/* inline code block */ 'i', `original.length`],
				[/* text */ 't', `, in which case
 `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` is placed in all elements of the copy whose index is
 greater than or equal to `],
				[/* inline code block */ 'i', `original.length - from`],
				[/* text */ 't', `.  The length
 of the returned array will be `],
				[/* inline code block */ 'i', `to - from`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', `
 The resulting array is of exactly the same class as the original array.`]
			],
			[/* parameters */
				[/* parameter */ 'original', [/* parameter description */
					[/* text */ 't', `the array from which a range is to be copied`]
				]],
				[/* parameter */ 'from', [/* parameter description */
					[/* text */ 't', `the initial index of the range to be copied, inclusive`]
				]],
				[/* parameter */ 'to', [/* parameter description */
					[/* text */ 't', `the final index of the range to be copied, exclusive.
     (This index may lie outside the array.)`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `from < 0`],
					[/* text */ 't', `
     or `],
					[/* inline code block */ 'i', `from > original.length`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `from > to`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `original`],
					[/* text */ 't', ` is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a new array containing the specified range from the original array,
     truncated or padded with nulls to obtain the required length`]
			]
		]],
		[/* method */ 'parallelPrefix(java.lang.Object[],int,int,java.util.function.BinaryOperator)', [
			[/* method description */
				[/* text */ 't', `Performs `],
				[/* reference */ 'r', `#parallelPrefix(T%5B%5D,java.util.function.BinaryOperator)`, `parallelPrefix(Object[], BinaryOperator)`],
				[/* text */ 't', `
 for the given subrange of the array.`]
			],
			[/* parameters */
				[/* parameter */ 'array', [/* parameter description */
					[/* text */ 't', `the array`]
				]],
				[/* parameter */ 'fromIndex', [/* parameter description */
					[/* text */ 't', `the index of the first element, inclusive`]
				]],
				[/* parameter */ 'toIndex', [/* parameter description */
					[/* text */ 't', `the index of the last element, exclusive`]
				]],
				[/* parameter */ 'op', [/* parameter description */
					[/* text */ 't', `a side-effect-free, associative function to perform the
 cumulation`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `fromIndex > toIndex`]
				]],
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `fromIndex < 0`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `toIndex > array.length`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified array or function is null`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'parallelPrefix(java.lang.Object[],java.util.function.BinaryOperator)', [
			[/* method description */
				[/* text */ 't', `Cumulates, in parallel, each element of the given array in place,
 using the supplied function. For example if the array initially
 holds `],
				[/* inline code block */ 'i', `[2, 1, 0, 3]`],
				[/* text */ 't', ` and the operation performs addition,
 then upon return the array holds `],
				[/* inline code block */ 'i', `[2, 3, 3, 6]`],
				[/* text */ 't', `.
 Parallel prefix computation is usually more efficient than
 sequential loops for large arrays.`]
			],
			[/* parameters */
				[/* parameter */ 'array', [/* parameter description */
					[/* text */ 't', `the array, which is modified in-place by this method`]
				]],
				[/* parameter */ 'op', [/* parameter description */
					[/* text */ 't', `a side-effect-free, associative function to perform the
 cumulation`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified array or function is null`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'parallelSetAll(java.lang.Object[],java.util.function.IntFunction)', [
			[/* method description */
				[/* text */ 't', `Set all elements of the specified array, in parallel, using the
 provided generator function to compute each element.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If the generator function throws an exception, an unchecked exception
 is thrown from `],
					[/* inline code block */ 'i', `parallelSetAll`],
					[/* text */ 't', ` and the array is left in an
 indeterminate state.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'array', [/* parameter description */
					[/* text */ 't', `array to be initialized`]
				]],
				[/* parameter */ 'generator', [/* parameter description */
					[/* text */ 't', `a function accepting an index and producing the desired
        value for that position`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the generator is null`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'parallelSort(java.lang.Object[],int,int,java.util.Comparator)', [
			[/* method description */
				[/* text */ 't', `Sorts the specified range of the specified array of objects according
 to the order induced by the specified comparator.  The range to be
 sorted extends from index `],
				[/* inline code block */ 'i', `fromIndex`],
				[/* text */ 't', `, inclusive, to index
 `],
				[/* inline code block */ 'i', `toIndex`],
				[/* text */ 't', `, exclusive.  (If `],
				[/* inline code block */ 'i', `fromIndex==toIndex`],
				[/* text */ 't', `, the
 range to be sorted is empty.)  All elements in the range must be
 `],
				[/* text */ 't', `mutually comparable`],
				[/* text */ 't', ` by the specified comparator (that is,
 `],
				[/* inline code block */ 'i', `c.compare(e1, e2)`],
				[/* text */ 't', ` must not throw a `],
				[/* inline code block */ 'i', `ClassCastException`],
				[/* text */ 't', `
 for any elements `],
				[/* inline code block */ 'i', `e1`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `e2`],
				[/* text */ 't', ` in the range).

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This sort is guaranteed to be `],
					[/* text */ 't', `stable`],
					[/* text */ 't', `:  equal elements will
 not be reordered as a result of the sort.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the array to be sorted`]
				]],
				[/* parameter */ 'fromIndex', [/* parameter description */
					[/* text */ 't', `the index of the first element (inclusive) to be
        sorted`]
				]],
				[/* parameter */ 'toIndex', [/* parameter description */
					[/* text */ 't', `the index of the last element (exclusive) to be sorted`]
				]],
				[/* parameter */ 'cmp', [/* parameter description */
					[/* text */ 't', `the comparator to determine the order of the array.  A
        `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` value indicates that the elements'
        `],
					[/* reference */ 'r', `java.lang.Comparable`, `natural ordering`],
					[/* text */ 't', ` should be used.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `fromIndex > toIndex`],
					[/* text */ 't', ` or
         (optional) if the natural ordering of the array elements is
         found to violate the `],
					[/* reference */ 'r', `java.lang.Comparable`, `Comparable`],
					[/* text */ 't', ` contract`]
				]],
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `fromIndex < 0`],
					[/* text */ 't', ` or
         `],
					[/* inline code block */ 'i', `toIndex > a.length`]
				]],
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the array contains elements that are
         not `],
					[/* text */ 't', `mutually comparable`],
					[/* text */ 't', ` (for example, strings and
         integers).`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'parallelSort(java.lang.Object[],java.util.Comparator)', [
			[/* method description */
				[/* text */ 't', `Sorts the specified array of objects according to the order induced by
 the specified comparator.  All elements in the array must be
 `],
				[/* text */ 't', `mutually comparable`],
				[/* text */ 't', ` by the specified comparator (that is,
 `],
				[/* inline code block */ 'i', `c.compare(e1, e2)`],
				[/* text */ 't', ` must not throw a `],
				[/* inline code block */ 'i', `ClassCastException`],
				[/* text */ 't', `
 for any elements `],
				[/* inline code block */ 'i', `e1`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `e2`],
				[/* text */ 't', ` in the array).

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This sort is guaranteed to be `],
					[/* text */ 't', `stable`],
					[/* text */ 't', `:  equal elements will
 not be reordered as a result of the sort.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the array to be sorted`]
				]],
				[/* parameter */ 'cmp', [/* parameter description */
					[/* text */ 't', `the comparator to determine the order of the array.  A
        `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` value indicates that the elements'
        `],
					[/* reference */ 'r', `java.lang.Comparable`, `natural ordering`],
					[/* text */ 't', ` should be used.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the array contains elements that are
         not `],
					[/* text */ 't', `mutually comparable`],
					[/* text */ 't', ` using the specified comparator`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `(optional) if the comparator is
         found to violate the `],
					[/* reference */ 'r', `java.util.Comparator`, `Comparator`],
					[/* text */ 't', ` contract`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'setAll(java.lang.Object[],java.util.function.IntFunction)', [
			[/* method description */
				[/* text */ 't', `Set all elements of the specified array, using the provided
 generator function to compute each element.

 `],
				[/* block */ 'b', `If the generator function throws an exception, it is relayed to
 the caller and the array is left in an indeterminate state.`]
			],
			[/* parameters */
				[/* parameter */ 'array', [/* parameter description */
					[/* text */ 't', `array to be initialized`]
				]],
				[/* parameter */ 'generator', [/* parameter description */
					[/* text */ 't', `a function accepting an index and producing the desired
        value for that position`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the generator is null`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'sort(java.lang.Object[],int,int,java.util.Comparator)', [
			[/* method description */
				[/* text */ 't', `Sorts the specified range of the specified array of objects according
 to the order induced by the specified comparator.  The range to be
 sorted extends from index `],
				[/* inline code block */ 'i', `fromIndex`],
				[/* text */ 't', `, inclusive, to index
 `],
				[/* inline code block */ 'i', `toIndex`],
				[/* text */ 't', `, exclusive.  (If `],
				[/* inline code block */ 'i', `fromIndex==toIndex`],
				[/* text */ 't', `, the
 range to be sorted is empty.)  All elements in the range must be
 `],
				[/* text */ 't', `mutually comparable`],
				[/* text */ 't', ` by the specified comparator (that is,
 `],
				[/* inline code block */ 'i', `c.compare(e1, e2)`],
				[/* text */ 't', ` must not throw a `],
				[/* inline code block */ 'i', `ClassCastException`],
				[/* text */ 't', `
 for any elements `],
				[/* inline code block */ 'i', `e1`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `e2`],
				[/* text */ 't', ` in the range).

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This sort is guaranteed to be `],
					[/* text */ 't', `stable`],
					[/* text */ 't', `:  equal elements will
 not be reordered as a result of the sort.

 `]
				]],
				[/* block */ 'b', `Implementation note: This implementation is a stable, adaptive,
 iterative mergesort that requires far fewer than n lg(n) comparisons
 when the input array is partially sorted, while offering the
 performance of a traditional mergesort when the input array is
 randomly ordered.  If the input array is nearly sorted, the
 implementation requires approximately n comparisons.  Temporary
 storage requirements vary from a small constant for nearly sorted
 input arrays to n/2 object references for randomly ordered input
 arrays.

 `],
				[/* block */ 'b', `The implementation takes equal advantage of ascending and
 descending order in its input array, and can take advantage of
 ascending and descending order in different parts of the same
 input array.  It is well-suited to merging two or more sorted arrays:
 simply concatenate the arrays and sort the resulting array.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The implementation was adapted from Tim Peters's list sort for Python
 (`],
					[/* external link */ 'a', `http://svn.python.org/projects/python/trunk/Objects/listsort.txt`, `TimSort`],
					[/* text */ 't', `).  It uses techniques from Peter McIlroy's "Optimistic
 Sorting and Information Theoretic Complexity", in Proceedings of the
 Fourth Annual ACM-SIAM Symposium on Discrete Algorithms, pp 467-474,
 January 1993.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the array to be sorted`]
				]],
				[/* parameter */ 'fromIndex', [/* parameter description */
					[/* text */ 't', `the index of the first element (inclusive) to be
        sorted`]
				]],
				[/* parameter */ 'toIndex', [/* parameter description */
					[/* text */ 't', `the index of the last element (exclusive) to be sorted`]
				]],
				[/* parameter */ 'c', [/* parameter description */
					[/* text */ 't', `the comparator to determine the order of the array.  A
        `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` value indicates that the elements'
        `],
					[/* reference */ 'r', `java.lang.Comparable`, `natural ordering`],
					[/* text */ 't', ` should be used.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the array contains elements that are not
         `],
					[/* text */ 't', `mutually comparable`],
					[/* text */ 't', ` using the specified comparator.`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `fromIndex > toIndex`],
					[/* text */ 't', ` or
         (optional) if the comparator is found to violate the
         `],
					[/* reference */ 'r', `java.util.Comparator`, `Comparator`],
					[/* text */ 't', ` contract`]
				]],
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `fromIndex < 0`],
					[/* text */ 't', ` or
         `],
					[/* inline code block */ 'i', `toIndex > a.length`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'sort(java.lang.Object[],java.util.Comparator)', [
			[/* method description */
				[/* text */ 't', `Sorts the specified array of objects according to the order induced by
 the specified comparator.  All elements in the array must be
 `],
				[/* text */ 't', `mutually comparable`],
				[/* text */ 't', ` by the specified comparator (that is,
 `],
				[/* inline code block */ 'i', `c.compare(e1, e2)`],
				[/* text */ 't', ` must not throw a `],
				[/* inline code block */ 'i', `ClassCastException`],
				[/* text */ 't', `
 for any elements `],
				[/* inline code block */ 'i', `e1`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `e2`],
				[/* text */ 't', ` in the array).

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This sort is guaranteed to be `],
					[/* text */ 't', `stable`],
					[/* text */ 't', `:  equal elements will
 not be reordered as a result of the sort.

 `]
				]],
				[/* block */ 'b', `Implementation note: This implementation is a stable, adaptive,
 iterative mergesort that requires far fewer than n lg(n) comparisons
 when the input array is partially sorted, while offering the
 performance of a traditional mergesort when the input array is
 randomly ordered.  If the input array is nearly sorted, the
 implementation requires approximately n comparisons.  Temporary
 storage requirements vary from a small constant for nearly sorted
 input arrays to n/2 object references for randomly ordered input
 arrays.

 `],
				[/* block */ 'b', `The implementation takes equal advantage of ascending and
 descending order in its input array, and can take advantage of
 ascending and descending order in different parts of the same
 input array.  It is well-suited to merging two or more sorted arrays:
 simply concatenate the arrays and sort the resulting array.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The implementation was adapted from Tim Peters's list sort for Python
 (`],
					[/* external link */ 'a', `http://svn.python.org/projects/python/trunk/Objects/listsort.txt`, `TimSort`],
					[/* text */ 't', `).  It uses techniques from Peter McIlroy's "Optimistic
 Sorting and Information Theoretic Complexity", in Proceedings of the
 Fourth Annual ACM-SIAM Symposium on Discrete Algorithms, pp 467-474,
 January 1993.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the array to be sorted`]
				]],
				[/* parameter */ 'c', [/* parameter description */
					[/* text */ 't', `the comparator to determine the order of the array.  A
        `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` value indicates that the elements'
        `],
					[/* reference */ 'r', `java.lang.Comparable`, `natural ordering`],
					[/* text */ 't', ` should be used.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the array contains elements that are
         not `],
					[/* text */ 't', `mutually comparable`],
					[/* text */ 't', ` using the specified comparator`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `(optional) if the comparator is
         found to violate the `],
					[/* reference */ 'r', `java.util.Comparator`, `Comparator`],
					[/* text */ 't', ` contract`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'deepEquals(java.lang.Object[],java.lang.Object[])', [
			[/* method description */
				[/* text */ 't', `Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the two specified arrays are `],
				[/* text */ 't', `deeply
 equal`],
				[/* text */ 't', ` to one another.  Unlike the `],
				[/* reference */ 'r', `#equals(java.lang.Object%5B%5D,java.lang.Object%5B%5D)`, `equals(Object[],Object[])`],
				[/* text */ 't', `
 method, this method is appropriate for use with nested arrays of
 arbitrary depth.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Two array references are considered deeply equal if both
 are `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `, or if they refer to arrays that contain the same
 number of elements and all corresponding pairs of elements in the two
 arrays are deeply equal.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `Two possibly `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` elements `],
					[/* inline code block */ 'i', `e1`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `e2`],
					[/* text */ 't', ` are
 deeply equal if any of the following conditions hold:
 `]
				]],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* inline code block */ 'i', `e1`],
						[/* text */ 't', ` and `],
						[/* inline code block */ 'i', `e2`],
						[/* text */ 't', ` are both arrays of object reference
         types, and `],
						[/* inline code block */ 'i', `Arrays.deepEquals(e1, e2) would return true`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `e1`],
						[/* text */ 't', ` and `],
						[/* inline code block */ 'i', `e2`],
						[/* text */ 't', ` are arrays of the same primitive
         type, and the appropriate overloading of
         `],
						[/* inline code block */ 'i', `Arrays.equals(e1, e2)`],
						[/* text */ 't', ` would return true.
    `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `e1 == e2`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `e1.equals(e2)`],
						[/* text */ 't', ` would return true.
 `]
					]]
				]],
				[/* text */ 't', `
 Note that this definition permits `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` elements at any depth.

 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', `If either of the specified arrays contain themselves as elements
 either directly or indirectly through one or more levels of arrays,
 the behavior of this method is undefined.`]
			],
			[/* parameters */
				[/* parameter */ 'a1', [/* parameter description */
					[/* text */ 't', `one array to be tested for equality`]
				]],
				[/* parameter */ 'a2', [/* parameter description */
					[/* text */ 't', `the other array to be tested for equality`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the two arrays are equal`]
			]
		]],
		[/* method */ 'equals(boolean[],boolean[])', [
			[/* method description */
				[/* text */ 't', `Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the two specified arrays of booleans are
 `],
				[/* text */ 't', `equal`],
				[/* text */ 't', ` to one another.  Two arrays are considered equal if both
 arrays contain the same number of elements, and all corresponding pairs
 of elements in the two arrays are equal.  In other words, two arrays
 are equal if they contain the same elements in the same order.  Also,
 two array references are considered equal if both are `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `one array to be tested for equality`]
				]],
				[/* parameter */ 'a2', [/* parameter description */
					[/* text */ 't', `the other array to be tested for equality`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the two arrays are equal`]
			]
		]],
		[/* method */ 'equals(boolean[],int,int,boolean[],int,int)', [
			[/* method description */
				[/* text */ 't', `Returns true if the two specified arrays of booleans, over the specified
 ranges, are `],
				[/* text */ 't', `equal`],
				[/* text */ 't', ` to one another.

 `],
				[/* block */ 'b', `Two arrays are considered equal if the number of elements covered by
 each range is the same, and all corresponding pairs of elements over the
 specified ranges in the two arrays are equal.  In other words, two arrays
 are equal if they contain, over the specified ranges, the same elements
 in the same order.`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the first array to be tested for equality`]
				]],
				[/* parameter */ 'aFromIndex', [/* parameter description */
					[/* text */ 't', `the index (inclusive) of the first element in the
                   first array to be tested`]
				]],
				[/* parameter */ 'aToIndex', [/* parameter description */
					[/* text */ 't', `the index (exclusive) of the last element in the
                 first array to be tested`]
				]],
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the second array to be tested for equality`]
				]],
				[/* parameter */ 'bFromIndex', [/* parameter description */
					[/* text */ 't', `the index (inclusive) of the first element in the
                   second array to be tested`]
				]],
				[/* parameter */ 'bToIndex', [/* parameter description */
					[/* text */ 't', `the index (exclusive) of the last element in the
                 second array to be tested`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `aFromIndex > aToIndex`],
					[/* text */ 't', ` or
         if `],
					[/* inline code block */ 'i', `bFromIndex > bToIndex`]
				]],
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `aFromIndex < 0 or aToIndex > a.length`],
					[/* text */ 't', ` or
         if `],
					[/* inline code block */ 'i', `bFromIndex < 0 or bToIndex > b.length`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if either array is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the two arrays, over the specified ranges, are
         equal`]
			]
		]],
		[/* method */ 'equals(byte[],byte[])', [
			[/* method description */
				[/* text */ 't', `Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the two specified arrays of bytes are
 `],
				[/* text */ 't', `equal`],
				[/* text */ 't', ` to one another.  Two arrays are considered equal if both
 arrays contain the same number of elements, and all corresponding pairs
 of elements in the two arrays are equal.  In other words, two arrays
 are equal if they contain the same elements in the same order.  Also,
 two array references are considered equal if both are `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `one array to be tested for equality`]
				]],
				[/* parameter */ 'a2', [/* parameter description */
					[/* text */ 't', `the other array to be tested for equality`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the two arrays are equal`]
			]
		]],
		[/* method */ 'equals(byte[],int,int,byte[],int,int)', [
			[/* method description */
				[/* text */ 't', `Returns true if the two specified arrays of bytes, over the specified
 ranges, are `],
				[/* text */ 't', `equal`],
				[/* text */ 't', ` to one another.

 `],
				[/* block */ 'b', `Two arrays are considered equal if the number of elements covered by
 each range is the same, and all corresponding pairs of elements over the
 specified ranges in the two arrays are equal.  In other words, two arrays
 are equal if they contain, over the specified ranges, the same elements
 in the same order.`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the first array to be tested for equality`]
				]],
				[/* parameter */ 'aFromIndex', [/* parameter description */
					[/* text */ 't', `the index (inclusive) of the first element in the
                   first array to be tested`]
				]],
				[/* parameter */ 'aToIndex', [/* parameter description */
					[/* text */ 't', `the index (exclusive) of the last element in the
                 first array to be tested`]
				]],
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the second array to be tested for equality`]
				]],
				[/* parameter */ 'bFromIndex', [/* parameter description */
					[/* text */ 't', `the index (inclusive) of the first element in the
                   second array to be tested`]
				]],
				[/* parameter */ 'bToIndex', [/* parameter description */
					[/* text */ 't', `the index (exclusive) of the last element in the
                 second array to be tested`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `aFromIndex > aToIndex`],
					[/* text */ 't', ` or
         if `],
					[/* inline code block */ 'i', `bFromIndex > bToIndex`]
				]],
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `aFromIndex < 0 or aToIndex > a.length`],
					[/* text */ 't', ` or
         if `],
					[/* inline code block */ 'i', `bFromIndex < 0 or bToIndex > b.length`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if either array is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the two arrays, over the specified ranges, are
         equal`]
			]
		]],
		[/* method */ 'equals(char[],char[])', [
			[/* method description */
				[/* text */ 't', `Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the two specified arrays of chars are
 `],
				[/* text */ 't', `equal`],
				[/* text */ 't', ` to one another.  Two arrays are considered equal if both
 arrays contain the same number of elements, and all corresponding pairs
 of elements in the two arrays are equal.  In other words, two arrays
 are equal if they contain the same elements in the same order.  Also,
 two array references are considered equal if both are `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `one array to be tested for equality`]
				]],
				[/* parameter */ 'a2', [/* parameter description */
					[/* text */ 't', `the other array to be tested for equality`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the two arrays are equal`]
			]
		]],
		[/* method */ 'equals(char[],int,int,char[],int,int)', [
			[/* method description */
				[/* text */ 't', `Returns true if the two specified arrays of chars, over the specified
 ranges, are `],
				[/* text */ 't', `equal`],
				[/* text */ 't', ` to one another.

 `],
				[/* block */ 'b', `Two arrays are considered equal if the number of elements covered by
 each range is the same, and all corresponding pairs of elements over the
 specified ranges in the two arrays are equal.  In other words, two arrays
 are equal if they contain, over the specified ranges, the same elements
 in the same order.`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the first array to be tested for equality`]
				]],
				[/* parameter */ 'aFromIndex', [/* parameter description */
					[/* text */ 't', `the index (inclusive) of the first element in the
                   first array to be tested`]
				]],
				[/* parameter */ 'aToIndex', [/* parameter description */
					[/* text */ 't', `the index (exclusive) of the last element in the
                 first array to be tested`]
				]],
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the second array to be tested for equality`]
				]],
				[/* parameter */ 'bFromIndex', [/* parameter description */
					[/* text */ 't', `the index (inclusive) of the first element in the
                   second array to be tested`]
				]],
				[/* parameter */ 'bToIndex', [/* parameter description */
					[/* text */ 't', `the index (exclusive) of the last element in the
                 second array to be tested`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `aFromIndex > aToIndex`],
					[/* text */ 't', ` or
         if `],
					[/* inline code block */ 'i', `bFromIndex > bToIndex`]
				]],
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `aFromIndex < 0 or aToIndex > a.length`],
					[/* text */ 't', ` or
         if `],
					[/* inline code block */ 'i', `bFromIndex < 0 or bToIndex > b.length`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if either array is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the two arrays, over the specified ranges, are
         equal`]
			]
		]],
		[/* method */ 'equals(double[],double[])', [
			[/* method description */
				[/* text */ 't', `Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the two specified arrays of doubles are
 `],
				[/* text */ 't', `equal`],
				[/* text */ 't', ` to one another.  Two arrays are considered equal if both
 arrays contain the same number of elements, and all corresponding pairs
 of elements in the two arrays are equal.  In other words, two arrays
 are equal if they contain the same elements in the same order.  Also,
 two array references are considered equal if both are `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `.

 Two doubles `],
				[/* inline code block */ 'i', `d1`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `d2`],
				[/* text */ 't', ` are considered equal if:
 `],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `new Double(d1).equals(new Double(d2))`]
				]],
				[/* text */ 't', `
 (Unlike the `],
				[/* inline code block */ 'i', `==`],
				[/* text */ 't', ` operator, this method considers
 `],
				[/* inline code block */ 'i', `NaN`],
				[/* text */ 't', ` equal to itself, and 0.0d unequal to -0.0d.)`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `one array to be tested for equality`]
				]],
				[/* parameter */ 'a2', [/* parameter description */
					[/* text */ 't', `the other array to be tested for equality`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the two arrays are equal`]
			]
		]],
		[/* method */ 'equals(double[],int,int,double[],int,int)', [
			[/* method description */
				[/* text */ 't', `Returns true if the two specified arrays of doubles, over the specified
 ranges, are `],
				[/* text */ 't', `equal`],
				[/* text */ 't', ` to one another.

 `],
				[/* block */ 'b', `Two arrays are considered equal if the number of elements covered by
 each range is the same, and all corresponding pairs of elements over the
 specified ranges in the two arrays are equal.  In other words, two arrays
 are equal if they contain, over the specified ranges, the same elements
 in the same order.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Two doubles `],
					[/* inline code block */ 'i', `d1`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `d2`],
					[/* text */ 't', ` are considered equal if:
 `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `new Double(d1).equals(new Double(d2))`]
				]],
				[/* text */ 't', `
 (Unlike the `],
				[/* inline code block */ 'i', `==`],
				[/* text */ 't', ` operator, this method considers
 `],
				[/* inline code block */ 'i', `NaN`],
				[/* text */ 't', ` equal to itself, and 0.0d unequal to -0.0d.)`],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the first array to be tested for equality`]
				]],
				[/* parameter */ 'aFromIndex', [/* parameter description */
					[/* text */ 't', `the index (inclusive) of the first element in the
                   first array to be tested`]
				]],
				[/* parameter */ 'aToIndex', [/* parameter description */
					[/* text */ 't', `the index (exclusive) of the last element in the
                 first array to be tested`]
				]],
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the second array to be tested for equality`]
				]],
				[/* parameter */ 'bFromIndex', [/* parameter description */
					[/* text */ 't', `the index (inclusive) of the first element in the
                   second array to be tested`]
				]],
				[/* parameter */ 'bToIndex', [/* parameter description */
					[/* text */ 't', `the index (exclusive) of the last element in the
                 second array to be tested`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `aFromIndex > aToIndex`],
					[/* text */ 't', ` or
         if `],
					[/* inline code block */ 'i', `bFromIndex > bToIndex`]
				]],
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `aFromIndex < 0 or aToIndex > a.length`],
					[/* text */ 't', ` or
         if `],
					[/* inline code block */ 'i', `bFromIndex < 0 or bToIndex > b.length`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if either array is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the two arrays, over the specified ranges, are
         equal`]
			]
		]],
		[/* method */ 'equals(float[],float[])', [
			[/* method description */
				[/* text */ 't', `Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the two specified arrays of floats are
 `],
				[/* text */ 't', `equal`],
				[/* text */ 't', ` to one another.  Two arrays are considered equal if both
 arrays contain the same number of elements, and all corresponding pairs
 of elements in the two arrays are equal.  In other words, two arrays
 are equal if they contain the same elements in the same order.  Also,
 two array references are considered equal if both are `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `.

 Two floats `],
				[/* inline code block */ 'i', `f1`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `f2`],
				[/* text */ 't', ` are considered equal if:
 `],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `new Float(f1).equals(new Float(f2))`]
				]],
				[/* text */ 't', `
 (Unlike the `],
				[/* inline code block */ 'i', `==`],
				[/* text */ 't', ` operator, this method considers
 `],
				[/* inline code block */ 'i', `NaN`],
				[/* text */ 't', ` equal to itself, and 0.0f unequal to -0.0f.)`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `one array to be tested for equality`]
				]],
				[/* parameter */ 'a2', [/* parameter description */
					[/* text */ 't', `the other array to be tested for equality`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the two arrays are equal`]
			]
		]],
		[/* method */ 'equals(float[],int,int,float[],int,int)', [
			[/* method description */
				[/* text */ 't', `Returns true if the two specified arrays of floats, over the specified
 ranges, are `],
				[/* text */ 't', `equal`],
				[/* text */ 't', ` to one another.

 `],
				[/* block */ 'b', `Two arrays are considered equal if the number of elements covered by
 each range is the same, and all corresponding pairs of elements over the
 specified ranges in the two arrays are equal.  In other words, two arrays
 are equal if they contain, over the specified ranges, the same elements
 in the same order.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Two floats `],
					[/* inline code block */ 'i', `f1`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `f2`],
					[/* text */ 't', ` are considered equal if:
 `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `new Float(f1).equals(new Float(f2))`]
				]],
				[/* text */ 't', `
 (Unlike the `],
				[/* inline code block */ 'i', `==`],
				[/* text */ 't', ` operator, this method considers
 `],
				[/* inline code block */ 'i', `NaN`],
				[/* text */ 't', ` equal to itself, and 0.0f unequal to -0.0f.)`],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the first array to be tested for equality`]
				]],
				[/* parameter */ 'aFromIndex', [/* parameter description */
					[/* text */ 't', `the index (inclusive) of the first element in the
                   first array to be tested`]
				]],
				[/* parameter */ 'aToIndex', [/* parameter description */
					[/* text */ 't', `the index (exclusive) of the last element in the
                 first array to be tested`]
				]],
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the second array to be tested for equality`]
				]],
				[/* parameter */ 'bFromIndex', [/* parameter description */
					[/* text */ 't', `the index (inclusive) of the first element in the
                   second array to be tested`]
				]],
				[/* parameter */ 'bToIndex', [/* parameter description */
					[/* text */ 't', `the index (exclusive) of the last element in the
                 second array to be tested`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `aFromIndex > aToIndex`],
					[/* text */ 't', ` or
         if `],
					[/* inline code block */ 'i', `bFromIndex > bToIndex`]
				]],
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `aFromIndex < 0 or aToIndex > a.length`],
					[/* text */ 't', ` or
         if `],
					[/* inline code block */ 'i', `bFromIndex < 0 or bToIndex > b.length`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if either array is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the two arrays, over the specified ranges, are
         equal`]
			]
		]],
		[/* method */ 'equals(int[],int,int,int[],int,int)', [
			[/* method description */
				[/* text */ 't', `Returns true if the two specified arrays of ints, over the specified
 ranges, are `],
				[/* text */ 't', `equal`],
				[/* text */ 't', ` to one another.

 `],
				[/* block */ 'b', `Two arrays are considered equal if the number of elements covered by
 each range is the same, and all corresponding pairs of elements over the
 specified ranges in the two arrays are equal.  In other words, two arrays
 are equal if they contain, over the specified ranges, the same elements
 in the same order.`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the first array to be tested for equality`]
				]],
				[/* parameter */ 'aFromIndex', [/* parameter description */
					[/* text */ 't', `the index (inclusive) of the first element in the
                   first array to be tested`]
				]],
				[/* parameter */ 'aToIndex', [/* parameter description */
					[/* text */ 't', `the index (exclusive) of the last element in the
                 first array to be tested`]
				]],
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the second array to be tested for equality`]
				]],
				[/* parameter */ 'bFromIndex', [/* parameter description */
					[/* text */ 't', `the index (inclusive) of the first element in the
                   second array to be tested`]
				]],
				[/* parameter */ 'bToIndex', [/* parameter description */
					[/* text */ 't', `the index (exclusive) of the last element in the
                 second array to be tested`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `aFromIndex > aToIndex`],
					[/* text */ 't', ` or
         if `],
					[/* inline code block */ 'i', `bFromIndex > bToIndex`]
				]],
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `aFromIndex < 0 or aToIndex > a.length`],
					[/* text */ 't', ` or
         if `],
					[/* inline code block */ 'i', `bFromIndex < 0 or bToIndex > b.length`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if either array is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the two arrays, over the specified ranges, are
         equal`]
			]
		]],
		[/* method */ 'equals(int[],int[])', [
			[/* method description */
				[/* text */ 't', `Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the two specified arrays of ints are
 `],
				[/* text */ 't', `equal`],
				[/* text */ 't', ` to one another.  Two arrays are considered equal if both
 arrays contain the same number of elements, and all corresponding pairs
 of elements in the two arrays are equal.  In other words, two arrays
 are equal if they contain the same elements in the same order.  Also,
 two array references are considered equal if both are `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `one array to be tested for equality`]
				]],
				[/* parameter */ 'a2', [/* parameter description */
					[/* text */ 't', `the other array to be tested for equality`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the two arrays are equal`]
			]
		]],
		[/* method */ 'equals(java.lang.Object[],int,int,java.lang.Object[],int,int)', [
			[/* method description */
				[/* text */ 't', `Returns true if the two specified arrays of Objects, over the specified
 ranges, are `],
				[/* text */ 't', `equal`],
				[/* text */ 't', ` to one another.

 `],
				[/* block */ 'b', `Two arrays are considered equal if the number of elements covered by
 each range is the same, and all corresponding pairs of elements over the
 specified ranges in the two arrays are equal.  In other words, two arrays
 are equal if they contain, over the specified ranges, the same elements
 in the same order.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Two objects `],
					[/* inline code block */ 'i', `e1`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `e2`],
					[/* text */ 't', ` are considered `],
					[/* text */ 't', `equal`],
					[/* text */ 't', ` if
 `],
					[/* inline code block */ 'i', `Objects.equals(e1, e2)`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the first array to be tested for equality`]
				]],
				[/* parameter */ 'aFromIndex', [/* parameter description */
					[/* text */ 't', `the index (inclusive) of the first element in the
                   first array to be tested`]
				]],
				[/* parameter */ 'aToIndex', [/* parameter description */
					[/* text */ 't', `the index (exclusive) of the last element in the
                 first array to be tested`]
				]],
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the second array to be tested for equality`]
				]],
				[/* parameter */ 'bFromIndex', [/* parameter description */
					[/* text */ 't', `the index (inclusive) of the first element in the
                   second array to be tested`]
				]],
				[/* parameter */ 'bToIndex', [/* parameter description */
					[/* text */ 't', `the index (exclusive) of the last element in the
                 second array to be tested`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `aFromIndex > aToIndex`],
					[/* text */ 't', ` or
         if `],
					[/* inline code block */ 'i', `bFromIndex > bToIndex`]
				]],
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `aFromIndex < 0 or aToIndex > a.length`],
					[/* text */ 't', ` or
         if `],
					[/* inline code block */ 'i', `bFromIndex < 0 or bToIndex > b.length`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if either array is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the two arrays, over the specified ranges, are
         equal`]
			]
		]],
		[/* method */ 'equals(java.lang.Object[],java.lang.Object[])', [
			[/* method description */
				[/* text */ 't', `Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the two specified arrays of Objects are
 `],
				[/* text */ 't', `equal`],
				[/* text */ 't', ` to one another.  The two arrays are considered equal if
 both arrays contain the same number of elements, and all corresponding
 pairs of elements in the two arrays are equal.  Two objects `],
				[/* inline code block */ 'i', `e1`],
				[/* text */ 't', `
 and `],
				[/* inline code block */ 'i', `e2`],
				[/* text */ 't', ` are considered `],
				[/* text */ 't', `equal`],
				[/* text */ 't', ` if
 `],
				[/* inline code block */ 'i', `Objects.equals(e1, e2)`],
				[/* text */ 't', `.
 In other words, the two arrays are equal if
 they contain the same elements in the same order.  Also, two array
 references are considered equal if both are `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `one array to be tested for equality`]
				]],
				[/* parameter */ 'a2', [/* parameter description */
					[/* text */ 't', `the other array to be tested for equality`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the two arrays are equal`]
			]
		]],
		[/* method */ 'equals(long[],int,int,long[],int,int)', [
			[/* method description */
				[/* text */ 't', `Returns true if the two specified arrays of longs, over the specified
 ranges, are `],
				[/* text */ 't', `equal`],
				[/* text */ 't', ` to one another.

 `],
				[/* block */ 'b', `Two arrays are considered equal if the number of elements covered by
 each range is the same, and all corresponding pairs of elements over the
 specified ranges in the two arrays are equal.  In other words, two arrays
 are equal if they contain, over the specified ranges, the same elements
 in the same order.`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the first array to be tested for equality`]
				]],
				[/* parameter */ 'aFromIndex', [/* parameter description */
					[/* text */ 't', `the index (inclusive) of the first element in the
                   first array to be tested`]
				]],
				[/* parameter */ 'aToIndex', [/* parameter description */
					[/* text */ 't', `the index (exclusive) of the last element in the
                 first array to be tested`]
				]],
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the second array to be tested for equality`]
				]],
				[/* parameter */ 'bFromIndex', [/* parameter description */
					[/* text */ 't', `the index (inclusive) of the first element in the
                   second array to be tested`]
				]],
				[/* parameter */ 'bToIndex', [/* parameter description */
					[/* text */ 't', `the index (exclusive) of the last element in the
                 second array to be tested`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `aFromIndex > aToIndex`],
					[/* text */ 't', ` or
         if `],
					[/* inline code block */ 'i', `bFromIndex > bToIndex`]
				]],
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `aFromIndex < 0 or aToIndex > a.length`],
					[/* text */ 't', ` or
         if `],
					[/* inline code block */ 'i', `bFromIndex < 0 or bToIndex > b.length`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if either array is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the two arrays, over the specified ranges, are
         equal`]
			]
		]],
		[/* method */ 'equals(long[],long[])', [
			[/* method description */
				[/* text */ 't', `Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the two specified arrays of longs are
 `],
				[/* text */ 't', `equal`],
				[/* text */ 't', ` to one another.  Two arrays are considered equal if both
 arrays contain the same number of elements, and all corresponding pairs
 of elements in the two arrays are equal.  In other words, two arrays
 are equal if they contain the same elements in the same order.  Also,
 two array references are considered equal if both are `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `one array to be tested for equality`]
				]],
				[/* parameter */ 'a2', [/* parameter description */
					[/* text */ 't', `the other array to be tested for equality`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the two arrays are equal`]
			]
		]],
		[/* method */ 'equals(short[],int,int,short[],int,int)', [
			[/* method description */
				[/* text */ 't', `Returns true if the two specified arrays of shorts, over the specified
 ranges, are `],
				[/* text */ 't', `equal`],
				[/* text */ 't', ` to one another.

 `],
				[/* block */ 'b', `Two arrays are considered equal if the number of elements covered by
 each range is the same, and all corresponding pairs of elements over the
 specified ranges in the two arrays are equal.  In other words, two arrays
 are equal if they contain, over the specified ranges, the same elements
 in the same order.`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the first array to be tested for equality`]
				]],
				[/* parameter */ 'aFromIndex', [/* parameter description */
					[/* text */ 't', `the index (inclusive) of the first element in the
                   first array to be tested`]
				]],
				[/* parameter */ 'aToIndex', [/* parameter description */
					[/* text */ 't', `the index (exclusive) of the last element in the
                 first array to be tested`]
				]],
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the second array to be tested for equality`]
				]],
				[/* parameter */ 'bFromIndex', [/* parameter description */
					[/* text */ 't', `the index (inclusive) of the first element in the
                   second array to be tested`]
				]],
				[/* parameter */ 'bToIndex', [/* parameter description */
					[/* text */ 't', `the index (exclusive) of the last element in the
                 second array to be tested`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `aFromIndex > aToIndex`],
					[/* text */ 't', ` or
         if `],
					[/* inline code block */ 'i', `bFromIndex > bToIndex`]
				]],
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `aFromIndex < 0 or aToIndex > a.length`],
					[/* text */ 't', ` or
         if `],
					[/* inline code block */ 'i', `bFromIndex < 0 or bToIndex > b.length`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if either array is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the two arrays, over the specified ranges, are
         equal`]
			]
		]],
		[/* method */ 'equals(short[],short[])', [
			[/* method description */
				[/* text */ 't', `Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the two specified arrays of shorts are
 `],
				[/* text */ 't', `equal`],
				[/* text */ 't', ` to one another.  Two arrays are considered equal if both
 arrays contain the same number of elements, and all corresponding pairs
 of elements in the two arrays are equal.  In other words, two arrays
 are equal if they contain the same elements in the same order.  Also,
 two array references are considered equal if both are `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `one array to be tested for equality`]
				]],
				[/* parameter */ 'a2', [/* parameter description */
					[/* text */ 't', `the other array to be tested for equality`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the two arrays are equal`]
			]
		]],
		[/* method */ 'copyOf(boolean[],int)', [
			[/* method description */
				[/* text */ 't', `Copies the specified array, truncating or padding with `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` (if necessary)
 so the copy has the specified length.  For all indices that are
 valid in both the original array and the copy, the two arrays will
 contain identical values.  For any indices that are valid in the
 copy but not the original, the copy will contain `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', `.
 Such indices will exist if and only if the specified length
 is greater than that of the original array.`]
			],
			[/* parameters */
				[/* parameter */ 'original', [/* parameter description */
					[/* text */ 't', `the array to be copied`]
				]],
				[/* parameter */ 'newLength', [/* parameter description */
					[/* text */ 't', `the length of the copy to be returned`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NegativeArraySizeException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `newLength`],
					[/* text */ 't', ` is negative`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `original`],
					[/* text */ 't', ` is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a copy of the original array, truncated or padded with false elements
     to obtain the specified length`]
			]
		]],
		[/* method */ 'copyOfRange(boolean[],int,int)', [
			[/* method description */
				[/* text */ 't', `Copies the specified range of the specified array into a new array.
 The initial index of the range (`],
				[/* inline code block */ 'i', `from`],
				[/* text */ 't', `) must lie between zero
 and `],
				[/* inline code block */ 'i', `original.length`],
				[/* text */ 't', `, inclusive.  The value at
 `],
				[/* inline code block */ 'i', `original[from]`],
				[/* text */ 't', ` is placed into the initial element of the copy
 (unless `],
				[/* inline code block */ 'i', `from == original.length`],
				[/* text */ 't', ` or `],
				[/* inline code block */ 'i', `from == to`],
				[/* text */ 't', `).
 Values from subsequent elements in the original array are placed into
 subsequent elements in the copy.  The final index of the range
 (`],
				[/* inline code block */ 'i', `to`],
				[/* text */ 't', `), which must be greater than or equal to `],
				[/* inline code block */ 'i', `from`],
				[/* text */ 't', `,
 may be greater than `],
				[/* inline code block */ 'i', `original.length`],
				[/* text */ 't', `, in which case
 `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` is placed in all elements of the copy whose index is
 greater than or equal to `],
				[/* inline code block */ 'i', `original.length - from`],
				[/* text */ 't', `.  The length
 of the returned array will be `],
				[/* inline code block */ 'i', `to - from`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'original', [/* parameter description */
					[/* text */ 't', `the array from which a range is to be copied`]
				]],
				[/* parameter */ 'from', [/* parameter description */
					[/* text */ 't', `the initial index of the range to be copied, inclusive`]
				]],
				[/* parameter */ 'to', [/* parameter description */
					[/* text */ 't', `the final index of the range to be copied, exclusive.
     (This index may lie outside the array.)`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `from < 0`],
					[/* text */ 't', `
     or `],
					[/* inline code block */ 'i', `from > original.length`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `from > to`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `original`],
					[/* text */ 't', ` is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a new array containing the specified range from the original array,
     truncated or padded with false elements to obtain the required length`]
			]
		]],
		[/* method */ 'copyOf(byte[],int)', [
			[/* method description */
				[/* text */ 't', `Copies the specified array, truncating or padding with zeros (if necessary)
 so the copy has the specified length.  For all indices that are
 valid in both the original array and the copy, the two arrays will
 contain identical values.  For any indices that are valid in the
 copy but not the original, the copy will contain `],
				[/* inline code block */ 'i', `(byte)0`],
				[/* text */ 't', `.
 Such indices will exist if and only if the specified length
 is greater than that of the original array.`]
			],
			[/* parameters */
				[/* parameter */ 'original', [/* parameter description */
					[/* text */ 't', `the array to be copied`]
				]],
				[/* parameter */ 'newLength', [/* parameter description */
					[/* text */ 't', `the length of the copy to be returned`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NegativeArraySizeException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `newLength`],
					[/* text */ 't', ` is negative`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `original`],
					[/* text */ 't', ` is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a copy of the original array, truncated or padded with zeros
     to obtain the specified length`]
			]
		]],
		[/* method */ 'copyOfRange(byte[],int,int)', [
			[/* method description */
				[/* text */ 't', `Copies the specified range of the specified array into a new array.
 The initial index of the range (`],
				[/* inline code block */ 'i', `from`],
				[/* text */ 't', `) must lie between zero
 and `],
				[/* inline code block */ 'i', `original.length`],
				[/* text */ 't', `, inclusive.  The value at
 `],
				[/* inline code block */ 'i', `original[from]`],
				[/* text */ 't', ` is placed into the initial element of the copy
 (unless `],
				[/* inline code block */ 'i', `from == original.length`],
				[/* text */ 't', ` or `],
				[/* inline code block */ 'i', `from == to`],
				[/* text */ 't', `).
 Values from subsequent elements in the original array are placed into
 subsequent elements in the copy.  The final index of the range
 (`],
				[/* inline code block */ 'i', `to`],
				[/* text */ 't', `), which must be greater than or equal to `],
				[/* inline code block */ 'i', `from`],
				[/* text */ 't', `,
 may be greater than `],
				[/* inline code block */ 'i', `original.length`],
				[/* text */ 't', `, in which case
 `],
				[/* inline code block */ 'i', `(byte)0`],
				[/* text */ 't', ` is placed in all elements of the copy whose index is
 greater than or equal to `],
				[/* inline code block */ 'i', `original.length - from`],
				[/* text */ 't', `.  The length
 of the returned array will be `],
				[/* inline code block */ 'i', `to - from`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'original', [/* parameter description */
					[/* text */ 't', `the array from which a range is to be copied`]
				]],
				[/* parameter */ 'from', [/* parameter description */
					[/* text */ 't', `the initial index of the range to be copied, inclusive`]
				]],
				[/* parameter */ 'to', [/* parameter description */
					[/* text */ 't', `the final index of the range to be copied, exclusive.
     (This index may lie outside the array.)`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `from < 0`],
					[/* text */ 't', `
     or `],
					[/* inline code block */ 'i', `from > original.length`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `from > to`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `original`],
					[/* text */ 't', ` is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a new array containing the specified range from the original array,
     truncated or padded with zeros to obtain the required length`]
			]
		]],
		[/* method */ 'copyOf(char[],int)', [
			[/* method description */
				[/* text */ 't', `Copies the specified array, truncating or padding with null characters (if necessary)
 so the copy has the specified length.  For all indices that are valid
 in both the original array and the copy, the two arrays will contain
 identical values.  For any indices that are valid in the copy but not
 the original, the copy will contain `],
				[/* inline code block */ 'i', `'\\u0000'`],
				[/* text */ 't', `.  Such indices
 will exist if and only if the specified length is greater than that of
 the original array.`]
			],
			[/* parameters */
				[/* parameter */ 'original', [/* parameter description */
					[/* text */ 't', `the array to be copied`]
				]],
				[/* parameter */ 'newLength', [/* parameter description */
					[/* text */ 't', `the length of the copy to be returned`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NegativeArraySizeException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `newLength`],
					[/* text */ 't', ` is negative`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `original`],
					[/* text */ 't', ` is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a copy of the original array, truncated or padded with null characters
     to obtain the specified length`]
			]
		]],
		[/* method */ 'copyOfRange(char[],int,int)', [
			[/* method description */
				[/* text */ 't', `Copies the specified range of the specified array into a new array.
 The initial index of the range (`],
				[/* inline code block */ 'i', `from`],
				[/* text */ 't', `) must lie between zero
 and `],
				[/* inline code block */ 'i', `original.length`],
				[/* text */ 't', `, inclusive.  The value at
 `],
				[/* inline code block */ 'i', `original[from]`],
				[/* text */ 't', ` is placed into the initial element of the copy
 (unless `],
				[/* inline code block */ 'i', `from == original.length`],
				[/* text */ 't', ` or `],
				[/* inline code block */ 'i', `from == to`],
				[/* text */ 't', `).
 Values from subsequent elements in the original array are placed into
 subsequent elements in the copy.  The final index of the range
 (`],
				[/* inline code block */ 'i', `to`],
				[/* text */ 't', `), which must be greater than or equal to `],
				[/* inline code block */ 'i', `from`],
				[/* text */ 't', `,
 may be greater than `],
				[/* inline code block */ 'i', `original.length`],
				[/* text */ 't', `, in which case
 `],
				[/* inline code block */ 'i', `'\\u0000'`],
				[/* text */ 't', ` is placed in all elements of the copy whose index is
 greater than or equal to `],
				[/* inline code block */ 'i', `original.length - from`],
				[/* text */ 't', `.  The length
 of the returned array will be `],
				[/* inline code block */ 'i', `to - from`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'original', [/* parameter description */
					[/* text */ 't', `the array from which a range is to be copied`]
				]],
				[/* parameter */ 'from', [/* parameter description */
					[/* text */ 't', `the initial index of the range to be copied, inclusive`]
				]],
				[/* parameter */ 'to', [/* parameter description */
					[/* text */ 't', `the final index of the range to be copied, exclusive.
     (This index may lie outside the array.)`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `from < 0`],
					[/* text */ 't', `
     or `],
					[/* inline code block */ 'i', `from > original.length`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `from > to`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `original`],
					[/* text */ 't', ` is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a new array containing the specified range from the original array,
     truncated or padded with null characters to obtain the required length`]
			]
		]],
		[/* method */ 'copyOf(double[],int)', [
			[/* method description */
				[/* text */ 't', `Copies the specified array, truncating or padding with zeros (if necessary)
 so the copy has the specified length.  For all indices that are
 valid in both the original array and the copy, the two arrays will
 contain identical values.  For any indices that are valid in the
 copy but not the original, the copy will contain `],
				[/* inline code block */ 'i', `0d`],
				[/* text */ 't', `.
 Such indices will exist if and only if the specified length
 is greater than that of the original array.`]
			],
			[/* parameters */
				[/* parameter */ 'original', [/* parameter description */
					[/* text */ 't', `the array to be copied`]
				]],
				[/* parameter */ 'newLength', [/* parameter description */
					[/* text */ 't', `the length of the copy to be returned`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NegativeArraySizeException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `newLength`],
					[/* text */ 't', ` is negative`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `original`],
					[/* text */ 't', ` is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a copy of the original array, truncated or padded with zeros
     to obtain the specified length`]
			]
		]],
		[/* method */ 'copyOfRange(double[],int,int)', [
			[/* method description */
				[/* text */ 't', `Copies the specified range of the specified array into a new array.
 The initial index of the range (`],
				[/* inline code block */ 'i', `from`],
				[/* text */ 't', `) must lie between zero
 and `],
				[/* inline code block */ 'i', `original.length`],
				[/* text */ 't', `, inclusive.  The value at
 `],
				[/* inline code block */ 'i', `original[from]`],
				[/* text */ 't', ` is placed into the initial element of the copy
 (unless `],
				[/* inline code block */ 'i', `from == original.length`],
				[/* text */ 't', ` or `],
				[/* inline code block */ 'i', `from == to`],
				[/* text */ 't', `).
 Values from subsequent elements in the original array are placed into
 subsequent elements in the copy.  The final index of the range
 (`],
				[/* inline code block */ 'i', `to`],
				[/* text */ 't', `), which must be greater than or equal to `],
				[/* inline code block */ 'i', `from`],
				[/* text */ 't', `,
 may be greater than `],
				[/* inline code block */ 'i', `original.length`],
				[/* text */ 't', `, in which case
 `],
				[/* inline code block */ 'i', `0d`],
				[/* text */ 't', ` is placed in all elements of the copy whose index is
 greater than or equal to `],
				[/* inline code block */ 'i', `original.length - from`],
				[/* text */ 't', `.  The length
 of the returned array will be `],
				[/* inline code block */ 'i', `to - from`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'original', [/* parameter description */
					[/* text */ 't', `the array from which a range is to be copied`]
				]],
				[/* parameter */ 'from', [/* parameter description */
					[/* text */ 't', `the initial index of the range to be copied, inclusive`]
				]],
				[/* parameter */ 'to', [/* parameter description */
					[/* text */ 't', `the final index of the range to be copied, exclusive.
     (This index may lie outside the array.)`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `from < 0`],
					[/* text */ 't', `
     or `],
					[/* inline code block */ 'i', `from > original.length`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `from > to`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `original`],
					[/* text */ 't', ` is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a new array containing the specified range from the original array,
     truncated or padded with zeros to obtain the required length`]
			]
		]],
		[/* method */ 'copyOf(float[],int)', [
			[/* method description */
				[/* text */ 't', `Copies the specified array, truncating or padding with zeros (if necessary)
 so the copy has the specified length.  For all indices that are
 valid in both the original array and the copy, the two arrays will
 contain identical values.  For any indices that are valid in the
 copy but not the original, the copy will contain `],
				[/* inline code block */ 'i', `0f`],
				[/* text */ 't', `.
 Such indices will exist if and only if the specified length
 is greater than that of the original array.`]
			],
			[/* parameters */
				[/* parameter */ 'original', [/* parameter description */
					[/* text */ 't', `the array to be copied`]
				]],
				[/* parameter */ 'newLength', [/* parameter description */
					[/* text */ 't', `the length of the copy to be returned`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NegativeArraySizeException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `newLength`],
					[/* text */ 't', ` is negative`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `original`],
					[/* text */ 't', ` is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a copy of the original array, truncated or padded with zeros
     to obtain the specified length`]
			]
		]],
		[/* method */ 'copyOfRange(float[],int,int)', [
			[/* method description */
				[/* text */ 't', `Copies the specified range of the specified array into a new array.
 The initial index of the range (`],
				[/* inline code block */ 'i', `from`],
				[/* text */ 't', `) must lie between zero
 and `],
				[/* inline code block */ 'i', `original.length`],
				[/* text */ 't', `, inclusive.  The value at
 `],
				[/* inline code block */ 'i', `original[from]`],
				[/* text */ 't', ` is placed into the initial element of the copy
 (unless `],
				[/* inline code block */ 'i', `from == original.length`],
				[/* text */ 't', ` or `],
				[/* inline code block */ 'i', `from == to`],
				[/* text */ 't', `).
 Values from subsequent elements in the original array are placed into
 subsequent elements in the copy.  The final index of the range
 (`],
				[/* inline code block */ 'i', `to`],
				[/* text */ 't', `), which must be greater than or equal to `],
				[/* inline code block */ 'i', `from`],
				[/* text */ 't', `,
 may be greater than `],
				[/* inline code block */ 'i', `original.length`],
				[/* text */ 't', `, in which case
 `],
				[/* inline code block */ 'i', `0f`],
				[/* text */ 't', ` is placed in all elements of the copy whose index is
 greater than or equal to `],
				[/* inline code block */ 'i', `original.length - from`],
				[/* text */ 't', `.  The length
 of the returned array will be `],
				[/* inline code block */ 'i', `to - from`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'original', [/* parameter description */
					[/* text */ 't', `the array from which a range is to be copied`]
				]],
				[/* parameter */ 'from', [/* parameter description */
					[/* text */ 't', `the initial index of the range to be copied, inclusive`]
				]],
				[/* parameter */ 'to', [/* parameter description */
					[/* text */ 't', `the final index of the range to be copied, exclusive.
     (This index may lie outside the array.)`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `from < 0`],
					[/* text */ 't', `
     or `],
					[/* inline code block */ 'i', `from > original.length`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `from > to`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `original`],
					[/* text */ 't', ` is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a new array containing the specified range from the original array,
     truncated or padded with zeros to obtain the required length`]
			]
		]],
		[/* method */ 'binarySearch(byte[],byte)', [
			[/* method description */
				[/* text */ 't', `Searches the specified array of bytes for the specified value using the
 binary search algorithm.  The array must be sorted (as
 by the `],
				[/* reference */ 'r', `#sort(byte%5B%5D)`, `sort(byte[])`],
				[/* text */ 't', ` method) prior to making this call.  If it
 is not sorted, the results are undefined.  If the array contains
 multiple elements with the specified value, there is no guarantee which
 one will be found.`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the array to be searched`]
				]],
				[/* parameter */ 'key', [/* parameter description */
					[/* text */ 't', `the value to be searched for`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `index of the search key, if it is contained in the array;
         otherwise, `],
				[/* inline code block */ 'i', `(-(insertion point) - 1)`],
				[/* text */ 't', `.  The
         `],
				[/* text */ 't', `insertion point`],
				[/* text */ 't', ` is defined as the point at which the
         key would be inserted into the array: the index of the first
         element greater than the key, or `],
				[/* inline code block */ 'i', `a.length`],
				[/* text */ 't', ` if all
         elements in the array are less than the specified key.  Note
         that this guarantees that the return value will be >= 0 if
         and only if the key is found.`]
			]
		]],
		[/* method */ 'binarySearch(byte[],int,int,byte)', [
			[/* method description */
				[/* text */ 't', `Searches a range of
 the specified array of bytes for the specified value using the
 binary search algorithm.
 The range must be sorted (as
 by the `],
				[/* reference */ 'r', `#sort(byte%5B%5D,int,int)`, `sort(byte[], int, int)`],
				[/* text */ 't', ` method)
 prior to making this call.  If it
 is not sorted, the results are undefined.  If the range contains
 multiple elements with the specified value, there is no guarantee which
 one will be found.`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the array to be searched`]
				]],
				[/* parameter */ 'fromIndex', [/* parameter description */
					[/* text */ 't', `the index of the first element (inclusive) to be
          searched`]
				]],
				[/* parameter */ 'toIndex', [/* parameter description */
					[/* text */ 't', `the index of the last element (exclusive) to be searched`]
				]],
				[/* parameter */ 'key', [/* parameter description */
					[/* text */ 't', `the value to be searched for`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `fromIndex > toIndex`]
				]],
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `fromIndex < 0 or toIndex > a.length`]
				]]
			],
			[/* return description */
				[/* text */ 't', `index of the search key, if it is contained in the array
         within the specified range;
         otherwise, `],
				[/* inline code block */ 'i', `(-(insertion point) - 1)`],
				[/* text */ 't', `.  The
         `],
				[/* text */ 't', `insertion point`],
				[/* text */ 't', ` is defined as the point at which the
         key would be inserted into the array: the index of the first
         element in the range greater than the key,
         or `],
				[/* inline code block */ 'i', `toIndex`],
				[/* text */ 't', ` if all
         elements in the range are less than the specified key.  Note
         that this guarantees that the return value will be >= 0 if
         and only if the key is found.`]
			]
		]],
		[/* method */ 'binarySearch(char[],char)', [
			[/* method description */
				[/* text */ 't', `Searches the specified array of chars for the specified value using the
 binary search algorithm.  The array must be sorted (as
 by the `],
				[/* reference */ 'r', `#sort(char%5B%5D)`, `sort(char[])`],
				[/* text */ 't', ` method) prior to making this call.  If it
 is not sorted, the results are undefined.  If the array contains
 multiple elements with the specified value, there is no guarantee which
 one will be found.`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the array to be searched`]
				]],
				[/* parameter */ 'key', [/* parameter description */
					[/* text */ 't', `the value to be searched for`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `index of the search key, if it is contained in the array;
         otherwise, `],
				[/* inline code block */ 'i', `(-(insertion point) - 1)`],
				[/* text */ 't', `.  The
         `],
				[/* text */ 't', `insertion point`],
				[/* text */ 't', ` is defined as the point at which the
         key would be inserted into the array: the index of the first
         element greater than the key, or `],
				[/* inline code block */ 'i', `a.length`],
				[/* text */ 't', ` if all
         elements in the array are less than the specified key.  Note
         that this guarantees that the return value will be >= 0 if
         and only if the key is found.`]
			]
		]],
		[/* method */ 'binarySearch(char[],int,int,char)', [
			[/* method description */
				[/* text */ 't', `Searches a range of
 the specified array of chars for the specified value using the
 binary search algorithm.
 The range must be sorted (as
 by the `],
				[/* reference */ 'r', `#sort(char%5B%5D,int,int)`, `sort(char[], int, int)`],
				[/* text */ 't', ` method)
 prior to making this call.  If it
 is not sorted, the results are undefined.  If the range contains
 multiple elements with the specified value, there is no guarantee which
 one will be found.`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the array to be searched`]
				]],
				[/* parameter */ 'fromIndex', [/* parameter description */
					[/* text */ 't', `the index of the first element (inclusive) to be
          searched`]
				]],
				[/* parameter */ 'toIndex', [/* parameter description */
					[/* text */ 't', `the index of the last element (exclusive) to be searched`]
				]],
				[/* parameter */ 'key', [/* parameter description */
					[/* text */ 't', `the value to be searched for`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `fromIndex > toIndex`]
				]],
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `fromIndex < 0 or toIndex > a.length`]
				]]
			],
			[/* return description */
				[/* text */ 't', `index of the search key, if it is contained in the array
         within the specified range;
         otherwise, `],
				[/* inline code block */ 'i', `(-(insertion point) - 1)`],
				[/* text */ 't', `.  The
         `],
				[/* text */ 't', `insertion point`],
				[/* text */ 't', ` is defined as the point at which the
         key would be inserted into the array: the index of the first
         element in the range greater than the key,
         or `],
				[/* inline code block */ 'i', `toIndex`],
				[/* text */ 't', ` if all
         elements in the range are less than the specified key.  Note
         that this guarantees that the return value will be >= 0 if
         and only if the key is found.`]
			]
		]],
		[/* method */ 'binarySearch(double[],double)', [
			[/* method description */
				[/* text */ 't', `Searches the specified array of doubles for the specified value using
 the binary search algorithm.  The array must be sorted
 (as by the `],
				[/* reference */ 'r', `#sort(double%5B%5D)`, `sort(double[])`],
				[/* text */ 't', ` method) prior to making this call.
 If it is not sorted, the results are undefined.  If the array contains
 multiple elements with the specified value, there is no guarantee which
 one will be found.  This method considers all NaN values to be
 equivalent and equal.`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the array to be searched`]
				]],
				[/* parameter */ 'key', [/* parameter description */
					[/* text */ 't', `the value to be searched for`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `index of the search key, if it is contained in the array;
         otherwise, `],
				[/* inline code block */ 'i', `(-(insertion point) - 1)`],
				[/* text */ 't', `.  The
         `],
				[/* text */ 't', `insertion point`],
				[/* text */ 't', ` is defined as the point at which the
         key would be inserted into the array: the index of the first
         element greater than the key, or `],
				[/* inline code block */ 'i', `a.length`],
				[/* text */ 't', ` if all
         elements in the array are less than the specified key.  Note
         that this guarantees that the return value will be >= 0 if
         and only if the key is found.`]
			]
		]],
		[/* method */ 'binarySearch(double[],int,int,double)', [
			[/* method description */
				[/* text */ 't', `Searches a range of
 the specified array of doubles for the specified value using
 the binary search algorithm.
 The range must be sorted
 (as by the `],
				[/* reference */ 'r', `#sort(double%5B%5D,int,int)`, `sort(double[], int, int)`],
				[/* text */ 't', ` method)
 prior to making this call.
 If it is not sorted, the results are undefined.  If the range contains
 multiple elements with the specified value, there is no guarantee which
 one will be found.  This method considers all NaN values to be
 equivalent and equal.`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the array to be searched`]
				]],
				[/* parameter */ 'fromIndex', [/* parameter description */
					[/* text */ 't', `the index of the first element (inclusive) to be
          searched`]
				]],
				[/* parameter */ 'toIndex', [/* parameter description */
					[/* text */ 't', `the index of the last element (exclusive) to be searched`]
				]],
				[/* parameter */ 'key', [/* parameter description */
					[/* text */ 't', `the value to be searched for`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `fromIndex > toIndex`]
				]],
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `fromIndex < 0 or toIndex > a.length`]
				]]
			],
			[/* return description */
				[/* text */ 't', `index of the search key, if it is contained in the array
         within the specified range;
         otherwise, `],
				[/* inline code block */ 'i', `(-(insertion point) - 1)`],
				[/* text */ 't', `.  The
         `],
				[/* text */ 't', `insertion point`],
				[/* text */ 't', ` is defined as the point at which the
         key would be inserted into the array: the index of the first
         element in the range greater than the key,
         or `],
				[/* inline code block */ 'i', `toIndex`],
				[/* text */ 't', ` if all
         elements in the range are less than the specified key.  Note
         that this guarantees that the return value will be >= 0 if
         and only if the key is found.`]
			]
		]],
		[/* method */ 'binarySearch(float[],float)', [
			[/* method description */
				[/* text */ 't', `Searches the specified array of floats for the specified value using
 the binary search algorithm. The array must be sorted
 (as by the `],
				[/* reference */ 'r', `#sort(float%5B%5D)`, `sort(float[])`],
				[/* text */ 't', ` method) prior to making this call. If
 it is not sorted, the results are undefined. If the array contains
 multiple elements with the specified value, there is no guarantee which
 one will be found. This method considers all NaN values to be
 equivalent and equal.`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the array to be searched`]
				]],
				[/* parameter */ 'key', [/* parameter description */
					[/* text */ 't', `the value to be searched for`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `index of the search key, if it is contained in the array;
         otherwise, `],
				[/* inline code block */ 'i', `(-(insertion point) - 1)`],
				[/* text */ 't', `. The
         `],
				[/* text */ 't', `insertion point`],
				[/* text */ 't', ` is defined as the point at which the
         key would be inserted into the array: the index of the first
         element greater than the key, or `],
				[/* inline code block */ 'i', `a.length`],
				[/* text */ 't', ` if all
         elements in the array are less than the specified key. Note
         that this guarantees that the return value will be >= 0 if
         and only if the key is found.`]
			]
		]],
		[/* method */ 'binarySearch(float[],int,int,float)', [
			[/* method description */
				[/* text */ 't', `Searches a range of
 the specified array of floats for the specified value using
 the binary search algorithm.
 The range must be sorted
 (as by the `],
				[/* reference */ 'r', `#sort(float%5B%5D,int,int)`, `sort(float[], int, int)`],
				[/* text */ 't', ` method)
 prior to making this call. If
 it is not sorted, the results are undefined. If the range contains
 multiple elements with the specified value, there is no guarantee which
 one will be found. This method considers all NaN values to be
 equivalent and equal.`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the array to be searched`]
				]],
				[/* parameter */ 'fromIndex', [/* parameter description */
					[/* text */ 't', `the index of the first element (inclusive) to be
          searched`]
				]],
				[/* parameter */ 'toIndex', [/* parameter description */
					[/* text */ 't', `the index of the last element (exclusive) to be searched`]
				]],
				[/* parameter */ 'key', [/* parameter description */
					[/* text */ 't', `the value to be searched for`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `fromIndex > toIndex`]
				]],
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `fromIndex < 0 or toIndex > a.length`]
				]]
			],
			[/* return description */
				[/* text */ 't', `index of the search key, if it is contained in the array
         within the specified range;
         otherwise, `],
				[/* inline code block */ 'i', `(-(insertion point) - 1)`],
				[/* text */ 't', `. The
         `],
				[/* text */ 't', `insertion point`],
				[/* text */ 't', ` is defined as the point at which the
         key would be inserted into the array: the index of the first
         element in the range greater than the key,
         or `],
				[/* inline code block */ 'i', `toIndex`],
				[/* text */ 't', ` if all
         elements in the range are less than the specified key. Note
         that this guarantees that the return value will be >= 0 if
         and only if the key is found.`]
			]
		]],
		[/* method */ 'binarySearch(int[],int)', [
			[/* method description */
				[/* text */ 't', `Searches the specified array of ints for the specified value using the
 binary search algorithm.  The array must be sorted (as
 by the `],
				[/* reference */ 'r', `#sort(int%5B%5D)`, `sort(int[])`],
				[/* text */ 't', ` method) prior to making this call.  If it
 is not sorted, the results are undefined.  If the array contains
 multiple elements with the specified value, there is no guarantee which
 one will be found.`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the array to be searched`]
				]],
				[/* parameter */ 'key', [/* parameter description */
					[/* text */ 't', `the value to be searched for`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `index of the search key, if it is contained in the array;
         otherwise, `],
				[/* inline code block */ 'i', `(-(insertion point) - 1)`],
				[/* text */ 't', `.  The
         `],
				[/* text */ 't', `insertion point`],
				[/* text */ 't', ` is defined as the point at which the
         key would be inserted into the array: the index of the first
         element greater than the key, or `],
				[/* inline code block */ 'i', `a.length`],
				[/* text */ 't', ` if all
         elements in the array are less than the specified key.  Note
         that this guarantees that the return value will be >= 0 if
         and only if the key is found.`]
			]
		]],
		[/* method */ 'binarySearch(int[],int,int,int)', [
			[/* method description */
				[/* text */ 't', `Searches a range of
 the specified array of ints for the specified value using the
 binary search algorithm.
 The range must be sorted (as
 by the `],
				[/* reference */ 'r', `#sort(int%5B%5D,int,int)`, `sort(int[], int, int)`],
				[/* text */ 't', ` method)
 prior to making this call.  If it
 is not sorted, the results are undefined.  If the range contains
 multiple elements with the specified value, there is no guarantee which
 one will be found.`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the array to be searched`]
				]],
				[/* parameter */ 'fromIndex', [/* parameter description */
					[/* text */ 't', `the index of the first element (inclusive) to be
          searched`]
				]],
				[/* parameter */ 'toIndex', [/* parameter description */
					[/* text */ 't', `the index of the last element (exclusive) to be searched`]
				]],
				[/* parameter */ 'key', [/* parameter description */
					[/* text */ 't', `the value to be searched for`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `fromIndex > toIndex`]
				]],
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `fromIndex < 0 or toIndex > a.length`]
				]]
			],
			[/* return description */
				[/* text */ 't', `index of the search key, if it is contained in the array
         within the specified range;
         otherwise, `],
				[/* inline code block */ 'i', `(-(insertion point) - 1)`],
				[/* text */ 't', `.  The
         `],
				[/* text */ 't', `insertion point`],
				[/* text */ 't', ` is defined as the point at which the
         key would be inserted into the array: the index of the first
         element in the range greater than the key,
         or `],
				[/* inline code block */ 'i', `toIndex`],
				[/* text */ 't', ` if all
         elements in the range are less than the specified key.  Note
         that this guarantees that the return value will be >= 0 if
         and only if the key is found.`]
			]
		]],
		[/* method */ 'binarySearch(java.lang.Object[],int,int,java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Searches a range of
 the specified array for the specified object using the binary
 search algorithm.
 The range must be sorted into ascending order
 according to the
 `],
				[/* reference */ 'r', `java.lang.Comparable`, `natural ordering`],
				[/* text */ 't', `
 of its elements (as by the
 `],
				[/* reference */ 'r', `#sort(java.lang.Object%5B%5D,int,int)`, `sort(Object[], int, int)`],
				[/* text */ 't', ` method) prior to making this
 call.  If it is not sorted, the results are undefined.
 (If the range contains elements that are not mutually comparable (for
 example, strings and integers), it `],
				[/* text */ 't', `cannot`],
				[/* text */ 't', ` be sorted according
 to the natural ordering of its elements, hence results are undefined.)
 If the range contains multiple
 elements equal to the specified object, there is no guarantee which
 one will be found.`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the array to be searched`]
				]],
				[/* parameter */ 'fromIndex', [/* parameter description */
					[/* text */ 't', `the index of the first element (inclusive) to be
          searched`]
				]],
				[/* parameter */ 'toIndex', [/* parameter description */
					[/* text */ 't', `the index of the last element (exclusive) to be searched`]
				]],
				[/* parameter */ 'key', [/* parameter description */
					[/* text */ 't', `the value to be searched for`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the search key is not comparable to the
         elements of the array within the specified range.`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `fromIndex > toIndex`]
				]],
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `fromIndex < 0 or toIndex > a.length`]
				]]
			],
			[/* return description */
				[/* text */ 't', `index of the search key, if it is contained in the array
         within the specified range;
         otherwise, `],
				[/* inline code block */ 'i', `(-(insertion point) - 1)`],
				[/* text */ 't', `.  The
         `],
				[/* text */ 't', `insertion point`],
				[/* text */ 't', ` is defined as the point at which the
         key would be inserted into the array: the index of the first
         element in the range greater than the key,
         or `],
				[/* inline code block */ 'i', `toIndex`],
				[/* text */ 't', ` if all
         elements in the range are less than the specified key.  Note
         that this guarantees that the return value will be >= 0 if
         and only if the key is found.`]
			]
		]],
		[/* method */ 'binarySearch(java.lang.Object[],java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Searches the specified array for the specified object using the binary
 search algorithm. The array must be sorted into ascending order
 according to the
 `],
				[/* reference */ 'r', `java.lang.Comparable`, `natural ordering`],
				[/* text */ 't', `
 of its elements (as by the
 `],
				[/* reference */ 'r', `#sort(java.lang.Object%5B%5D)`, `sort(Object[])`],
				[/* text */ 't', ` method) prior to making this call.
 If it is not sorted, the results are undefined.
 (If the array contains elements that are not mutually comparable (for
 example, strings and integers), it `],
				[/* text */ 't', `cannot`],
				[/* text */ 't', ` be sorted according
 to the natural ordering of its elements, hence results are undefined.)
 If the array contains multiple
 elements equal to the specified object, there is no guarantee which
 one will be found.`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the array to be searched`]
				]],
				[/* parameter */ 'key', [/* parameter description */
					[/* text */ 't', `the value to be searched for`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the search key is not comparable to the
         elements of the array.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `index of the search key, if it is contained in the array;
         otherwise, `],
				[/* inline code block */ 'i', `(-(insertion point) - 1)`],
				[/* text */ 't', `.  The
         `],
				[/* text */ 't', `insertion point`],
				[/* text */ 't', ` is defined as the point at which the
         key would be inserted into the array: the index of the first
         element greater than the key, or `],
				[/* inline code block */ 'i', `a.length`],
				[/* text */ 't', ` if all
         elements in the array are less than the specified key.  Note
         that this guarantees that the return value will be >= 0 if
         and only if the key is found.`]
			]
		]],
		[/* method */ 'binarySearch(long[],int,int,long)', [
			[/* method description */
				[/* text */ 't', `Searches a range of
 the specified array of longs for the specified value using the
 binary search algorithm.
 The range must be sorted (as
 by the `],
				[/* reference */ 'r', `#sort(long%5B%5D,int,int)`, `sort(long[], int, int)`],
				[/* text */ 't', ` method)
 prior to making this call.  If it
 is not sorted, the results are undefined.  If the range contains
 multiple elements with the specified value, there is no guarantee which
 one will be found.`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the array to be searched`]
				]],
				[/* parameter */ 'fromIndex', [/* parameter description */
					[/* text */ 't', `the index of the first element (inclusive) to be
          searched`]
				]],
				[/* parameter */ 'toIndex', [/* parameter description */
					[/* text */ 't', `the index of the last element (exclusive) to be searched`]
				]],
				[/* parameter */ 'key', [/* parameter description */
					[/* text */ 't', `the value to be searched for`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `fromIndex > toIndex`]
				]],
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `fromIndex < 0 or toIndex > a.length`]
				]]
			],
			[/* return description */
				[/* text */ 't', `index of the search key, if it is contained in the array
         within the specified range;
         otherwise, `],
				[/* inline code block */ 'i', `(-(insertion point) - 1)`],
				[/* text */ 't', `.  The
         `],
				[/* text */ 't', `insertion point`],
				[/* text */ 't', ` is defined as the point at which the
         key would be inserted into the array: the index of the first
         element in the range greater than the key,
         or `],
				[/* inline code block */ 'i', `toIndex`],
				[/* text */ 't', ` if all
         elements in the range are less than the specified key.  Note
         that this guarantees that the return value will be >= 0 if
         and only if the key is found.`]
			]
		]],
		[/* method */ 'binarySearch(long[],long)', [
			[/* method description */
				[/* text */ 't', `Searches the specified array of longs for the specified value using the
 binary search algorithm.  The array must be sorted (as
 by the `],
				[/* reference */ 'r', `#sort(long%5B%5D)`, `sort(long[])`],
				[/* text */ 't', ` method) prior to making this call.  If it
 is not sorted, the results are undefined.  If the array contains
 multiple elements with the specified value, there is no guarantee which
 one will be found.`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the array to be searched`]
				]],
				[/* parameter */ 'key', [/* parameter description */
					[/* text */ 't', `the value to be searched for`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `index of the search key, if it is contained in the array;
         otherwise, `],
				[/* inline code block */ 'i', `(-(insertion point) - 1)`],
				[/* text */ 't', `.  The
         `],
				[/* text */ 't', `insertion point`],
				[/* text */ 't', ` is defined as the point at which the
         key would be inserted into the array: the index of the first
         element greater than the key, or `],
				[/* inline code block */ 'i', `a.length`],
				[/* text */ 't', ` if all
         elements in the array are less than the specified key.  Note
         that this guarantees that the return value will be >= 0 if
         and only if the key is found.`]
			]
		]],
		[/* method */ 'binarySearch(short[],int,int,short)', [
			[/* method description */
				[/* text */ 't', `Searches a range of
 the specified array of shorts for the specified value using
 the binary search algorithm.
 The range must be sorted
 (as by the `],
				[/* reference */ 'r', `#sort(short%5B%5D,int,int)`, `sort(short[], int, int)`],
				[/* text */ 't', ` method)
 prior to making this call.  If
 it is not sorted, the results are undefined.  If the range contains
 multiple elements with the specified value, there is no guarantee which
 one will be found.`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the array to be searched`]
				]],
				[/* parameter */ 'fromIndex', [/* parameter description */
					[/* text */ 't', `the index of the first element (inclusive) to be
          searched`]
				]],
				[/* parameter */ 'toIndex', [/* parameter description */
					[/* text */ 't', `the index of the last element (exclusive) to be searched`]
				]],
				[/* parameter */ 'key', [/* parameter description */
					[/* text */ 't', `the value to be searched for`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `fromIndex > toIndex`]
				]],
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `fromIndex < 0 or toIndex > a.length`]
				]]
			],
			[/* return description */
				[/* text */ 't', `index of the search key, if it is contained in the array
         within the specified range;
         otherwise, `],
				[/* inline code block */ 'i', `(-(insertion point) - 1)`],
				[/* text */ 't', `.  The
         `],
				[/* text */ 't', `insertion point`],
				[/* text */ 't', ` is defined as the point at which the
         key would be inserted into the array: the index of the first
         element in the range greater than the key,
         or `],
				[/* inline code block */ 'i', `toIndex`],
				[/* text */ 't', ` if all
         elements in the range are less than the specified key.  Note
         that this guarantees that the return value will be >= 0 if
         and only if the key is found.`]
			]
		]],
		[/* method */ 'binarySearch(short[],short)', [
			[/* method description */
				[/* text */ 't', `Searches the specified array of shorts for the specified value using
 the binary search algorithm.  The array must be sorted
 (as by the `],
				[/* reference */ 'r', `#sort(short%5B%5D)`, `sort(short[])`],
				[/* text */ 't', ` method) prior to making this call.  If
 it is not sorted, the results are undefined.  If the array contains
 multiple elements with the specified value, there is no guarantee which
 one will be found.`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the array to be searched`]
				]],
				[/* parameter */ 'key', [/* parameter description */
					[/* text */ 't', `the value to be searched for`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `index of the search key, if it is contained in the array;
         otherwise, `],
				[/* inline code block */ 'i', `(-(insertion point) - 1)`],
				[/* text */ 't', `.  The
         `],
				[/* text */ 't', `insertion point`],
				[/* text */ 't', ` is defined as the point at which the
         key would be inserted into the array: the index of the first
         element greater than the key, or `],
				[/* inline code block */ 'i', `a.length`],
				[/* text */ 't', ` if all
         elements in the array are less than the specified key.  Note
         that this guarantees that the return value will be >= 0 if
         and only if the key is found.`]
			]
		]],
		[/* method */ 'compare(boolean[],boolean[])', [
			[/* method description */
				[/* text */ 't', `Compares two `],
				[/* inline code block */ 'i', `boolean`],
				[/* text */ 't', ` arrays lexicographically.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If the two arrays share a common prefix then the lexicographic
 comparison is the result of comparing two elements, as if by
 `],
					[/* reference */ 'r', `java.lang.Boolean#compare(boolean,boolean)`, `Boolean.compare(boolean, boolean)`],
					[/* text */ 't', `, at an index within the
 respective arrays that is the prefix length.
 Otherwise, one array is a proper prefix of the other and, lexicographic
 comparison is the result of comparing the two array lengths.
 (See `],
					[/* reference */ 'r', `#mismatch(boolean%5B%5D,boolean%5B%5D)`, `mismatch(boolean[], boolean[])`],
					[/* text */ 't', ` for the definition of a
 common and proper prefix.)

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `A `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` array reference is considered lexicographically less
 than a non-`],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` array reference.  Two `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` array
 references are considered equal.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The comparison is consistent with `],
					[/* reference */ 'r', `#equals(boolean%5B%5D,boolean%5B%5D)`, `equals`],
					[/* text */ 't', `,
 more specifically the following holds for arrays `],
					[/* inline code block */ 'i', `a`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', `:
 `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `Arrays.equals(a, b) == (Arrays.compare(a, b) == 0)`]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the first array to compare`]
				]],
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the second array to compare`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the value `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if the first and second array are equal and
         contain the same elements in the same order;
         a value less than `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if the first array is
         lexicographically less than the second array; and
         a value greater than `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if the first array is
         lexicographically greater than the second array`]
			]
		]],
		[/* method */ 'compare(boolean[],int,int,boolean[],int,int)', [
			[/* method description */
				[/* text */ 't', `Compares two `],
				[/* inline code block */ 'i', `boolean`],
				[/* text */ 't', ` arrays lexicographically over the specified
 ranges.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If the two arrays, over the specified ranges, share a common prefix
 then the lexicographic comparison is the result of comparing two
 elements, as if by `],
					[/* reference */ 'r', `java.lang.Boolean#compare(boolean,boolean)`, `Boolean.compare(boolean, boolean)`],
					[/* text */ 't', `, at a
 relative index within the respective arrays that is the length of the
 prefix.
 Otherwise, one array is a proper prefix of the other and, lexicographic
 comparison is the result of comparing the two range lengths.
 (See `],
					[/* reference */ 'r', `#mismatch(boolean%5B%5D,int,int,boolean%5B%5D,int,int)`, `mismatch(boolean[], int, int, boolean[], int, int)`],
					[/* text */ 't', ` for the
 definition of a common and proper prefix.)

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The comparison is consistent with
 `],
					[/* reference */ 'r', `#equals(boolean%5B%5D,int,int,boolean%5B%5D,int,int)`, `equals`],
					[/* text */ 't', `, more
 specifically the following holds for arrays `],
					[/* inline code block */ 'i', `a`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', ` with
 specified ranges [`],
					[/* inline code block */ 'i', `aFromIndex`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `atoIndex`],
					[/* text */ 't', `) and
 [`],
					[/* inline code block */ 'i', `bFromIndex`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `btoIndex`],
					[/* text */ 't', `) respectively:
 `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `Arrays.equals(a, aFromIndex, aToIndex, b, bFromIndex, bToIndex) ==
         (Arrays.compare(a, aFromIndex, aToIndex, b, bFromIndex, bToIndex) == 0)`]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the first array to compare`]
				]],
				[/* parameter */ 'aFromIndex', [/* parameter description */
					[/* text */ 't', `the index (inclusive) of the first element in the
                   first array to be compared`]
				]],
				[/* parameter */ 'aToIndex', [/* parameter description */
					[/* text */ 't', `the index (exclusive) of the last element in the
                 first array to be compared`]
				]],
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the second array to compare`]
				]],
				[/* parameter */ 'bFromIndex', [/* parameter description */
					[/* text */ 't', `the index (inclusive) of the first element in the
                   second array to be compared`]
				]],
				[/* parameter */ 'bToIndex', [/* parameter description */
					[/* text */ 't', `the index (exclusive) of the last element in the
                 second array to be compared`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `aFromIndex > aToIndex`],
					[/* text */ 't', ` or
         if `],
					[/* inline code block */ 'i', `bFromIndex > bToIndex`]
				]],
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `aFromIndex < 0 or aToIndex > a.length`],
					[/* text */ 't', ` or
         if `],
					[/* inline code block */ 'i', `bFromIndex < 0 or bToIndex > b.length`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if either array is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the value `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if, over the specified ranges, the first and
         second array are equal and contain the same elements in the same
         order;
         a value less than `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if, over the specified ranges, the
         first array is lexicographically less than the second array; and
         a value greater than `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if, over the specified ranges, the
         first array is lexicographically greater than the second array`]
			]
		]],
		[/* method */ 'compare(byte[],byte[])', [
			[/* method description */
				[/* text */ 't', `Compares two `],
				[/* inline code block */ 'i', `byte`],
				[/* text */ 't', ` arrays lexicographically.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If the two arrays share a common prefix then the lexicographic
 comparison is the result of comparing two elements, as if by
 `],
					[/* reference */ 'r', `java.lang.Byte#compare(byte,byte)`, `Byte.compare(byte, byte)`],
					[/* text */ 't', `, at an index within the respective
 arrays that is the prefix length.
 Otherwise, one array is a proper prefix of the other and, lexicographic
 comparison is the result of comparing the two array lengths.
 (See `],
					[/* reference */ 'r', `#mismatch(byte%5B%5D,byte%5B%5D)`, `mismatch(byte[], byte[])`],
					[/* text */ 't', ` for the definition of a common and
 proper prefix.)

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `A `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` array reference is considered lexicographically less
 than a non-`],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` array reference.  Two `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` array
 references are considered equal.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The comparison is consistent with `],
					[/* reference */ 'r', `#equals(byte%5B%5D,byte%5B%5D)`, `equals`],
					[/* text */ 't', `,
 more specifically the following holds for arrays `],
					[/* inline code block */ 'i', `a`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', `:
 `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `Arrays.equals(a, b) == (Arrays.compare(a, b) == 0)`]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the first array to compare`]
				]],
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the second array to compare`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the value `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if the first and second array are equal and
         contain the same elements in the same order;
         a value less than `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if the first array is
         lexicographically less than the second array; and
         a value greater than `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if the first array is
         lexicographically greater than the second array`]
			]
		]],
		[/* method */ 'compare(byte[],int,int,byte[],int,int)', [
			[/* method description */
				[/* text */ 't', `Compares two `],
				[/* inline code block */ 'i', `byte`],
				[/* text */ 't', ` arrays lexicographically over the specified
 ranges.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If the two arrays, over the specified ranges, share a common prefix
 then the lexicographic comparison is the result of comparing two
 elements, as if by `],
					[/* reference */ 'r', `java.lang.Byte#compare(byte,byte)`, `Byte.compare(byte, byte)`],
					[/* text */ 't', `, at a relative index
 within the respective arrays that is the length of the prefix.
 Otherwise, one array is a proper prefix of the other and, lexicographic
 comparison is the result of comparing the two range lengths.
 (See `],
					[/* reference */ 'r', `#mismatch(byte%5B%5D,int,int,byte%5B%5D,int,int)`, `mismatch(byte[], int, int, byte[], int, int)`],
					[/* text */ 't', ` for the
 definition of a common and proper prefix.)

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The comparison is consistent with
 `],
					[/* reference */ 'r', `#equals(byte%5B%5D,int,int,byte%5B%5D,int,int)`, `equals`],
					[/* text */ 't', `, more
 specifically the following holds for arrays `],
					[/* inline code block */ 'i', `a`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', ` with
 specified ranges [`],
					[/* inline code block */ 'i', `aFromIndex`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `atoIndex`],
					[/* text */ 't', `) and
 [`],
					[/* inline code block */ 'i', `bFromIndex`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `btoIndex`],
					[/* text */ 't', `) respectively:
 `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `Arrays.equals(a, aFromIndex, aToIndex, b, bFromIndex, bToIndex) ==
         (Arrays.compare(a, aFromIndex, aToIndex, b, bFromIndex, bToIndex) == 0)`]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the first array to compare`]
				]],
				[/* parameter */ 'aFromIndex', [/* parameter description */
					[/* text */ 't', `the index (inclusive) of the first element in the
                   first array to be compared`]
				]],
				[/* parameter */ 'aToIndex', [/* parameter description */
					[/* text */ 't', `the index (exclusive) of the last element in the
                 first array to be compared`]
				]],
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the second array to compare`]
				]],
				[/* parameter */ 'bFromIndex', [/* parameter description */
					[/* text */ 't', `the index (inclusive) of the first element in the
                   second array to be compared`]
				]],
				[/* parameter */ 'bToIndex', [/* parameter description */
					[/* text */ 't', `the index (exclusive) of the last element in the
                 second array to be compared`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `aFromIndex > aToIndex`],
					[/* text */ 't', ` or
         if `],
					[/* inline code block */ 'i', `bFromIndex > bToIndex`]
				]],
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `aFromIndex < 0 or aToIndex > a.length`],
					[/* text */ 't', ` or
         if `],
					[/* inline code block */ 'i', `bFromIndex < 0 or bToIndex > b.length`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if either array is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the value `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if, over the specified ranges, the first and
         second array are equal and contain the same elements in the same
         order;
         a value less than `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if, over the specified ranges, the
         first array is lexicographically less than the second array; and
         a value greater than `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if, over the specified ranges, the
         first array is lexicographically greater than the second array`]
			]
		]],
		[/* method */ 'compare(char[],char[])', [
			[/* method description */
				[/* text */ 't', `Compares two `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', ` arrays lexicographically.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If the two arrays share a common prefix then the lexicographic
 comparison is the result of comparing two elements, as if by
 `],
					[/* reference */ 'r', `java.lang.Character#compare(char,char)`, `Character.compare(char, char)`],
					[/* text */ 't', `, at an index within the respective
 arrays that is the prefix length.
 Otherwise, one array is a proper prefix of the other and, lexicographic
 comparison is the result of comparing the two array lengths.
 (See `],
					[/* reference */ 'r', `#mismatch(char%5B%5D,char%5B%5D)`, `mismatch(char[], char[])`],
					[/* text */ 't', ` for the definition of a common and
 proper prefix.)

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `A `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` array reference is considered lexicographically less
 than a non-`],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` array reference.  Two `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` array
 references are considered equal.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The comparison is consistent with `],
					[/* reference */ 'r', `#equals(char%5B%5D,char%5B%5D)`, `equals`],
					[/* text */ 't', `,
 more specifically the following holds for arrays `],
					[/* inline code block */ 'i', `a`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', `:
 `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `Arrays.equals(a, b) == (Arrays.compare(a, b) == 0)`]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the first array to compare`]
				]],
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the second array to compare`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the value `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if the first and second array are equal and
         contain the same elements in the same order;
         a value less than `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if the first array is
         lexicographically less than the second array; and
         a value greater than `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if the first array is
         lexicographically greater than the second array`]
			]
		]],
		[/* method */ 'compare(char[],int,int,char[],int,int)', [
			[/* method description */
				[/* text */ 't', `Compares two `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', ` arrays lexicographically over the specified
 ranges.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If the two arrays, over the specified ranges, share a common prefix
 then the lexicographic comparison is the result of comparing two
 elements, as if by `],
					[/* reference */ 'r', `java.lang.Character#compare(char,char)`, `Character.compare(char, char)`],
					[/* text */ 't', `, at a relative
 index within the respective arrays that is the length of the prefix.
 Otherwise, one array is a proper prefix of the other and, lexicographic
 comparison is the result of comparing the two range lengths.
 (See `],
					[/* reference */ 'r', `#mismatch(char%5B%5D,int,int,char%5B%5D,int,int)`, `mismatch(char[], int, int, char[], int, int)`],
					[/* text */ 't', ` for the
 definition of a common and proper prefix.)

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The comparison is consistent with
 `],
					[/* reference */ 'r', `#equals(char%5B%5D,int,int,char%5B%5D,int,int)`, `equals`],
					[/* text */ 't', `, more
 specifically the following holds for arrays `],
					[/* inline code block */ 'i', `a`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', ` with
 specified ranges [`],
					[/* inline code block */ 'i', `aFromIndex`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `atoIndex`],
					[/* text */ 't', `) and
 [`],
					[/* inline code block */ 'i', `bFromIndex`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `btoIndex`],
					[/* text */ 't', `) respectively:
 `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `Arrays.equals(a, aFromIndex, aToIndex, b, bFromIndex, bToIndex) ==
         (Arrays.compare(a, aFromIndex, aToIndex, b, bFromIndex, bToIndex) == 0)`]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the first array to compare`]
				]],
				[/* parameter */ 'aFromIndex', [/* parameter description */
					[/* text */ 't', `the index (inclusive) of the first element in the
                   first array to be compared`]
				]],
				[/* parameter */ 'aToIndex', [/* parameter description */
					[/* text */ 't', `the index (exclusive) of the last element in the
                 first array to be compared`]
				]],
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the second array to compare`]
				]],
				[/* parameter */ 'bFromIndex', [/* parameter description */
					[/* text */ 't', `the index (inclusive) of the first element in the
                   second array to be compared`]
				]],
				[/* parameter */ 'bToIndex', [/* parameter description */
					[/* text */ 't', `the index (exclusive) of the last element in the
                 second array to be compared`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `aFromIndex > aToIndex`],
					[/* text */ 't', ` or
         if `],
					[/* inline code block */ 'i', `bFromIndex > bToIndex`]
				]],
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `aFromIndex < 0 or aToIndex > a.length`],
					[/* text */ 't', ` or
         if `],
					[/* inline code block */ 'i', `bFromIndex < 0 or bToIndex > b.length`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if either array is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the value `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if, over the specified ranges, the first and
         second array are equal and contain the same elements in the same
         order;
         a value less than `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if, over the specified ranges, the
         first array is lexicographically less than the second array; and
         a value greater than `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if, over the specified ranges, the
         first array is lexicographically greater than the second array`]
			]
		]],
		[/* method */ 'compare(double[],double[])', [
			[/* method description */
				[/* text */ 't', `Compares two `],
				[/* inline code block */ 'i', `double`],
				[/* text */ 't', ` arrays lexicographically.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If the two arrays share a common prefix then the lexicographic
 comparison is the result of comparing two elements, as if by
 `],
					[/* reference */ 'r', `java.lang.Double#compare(double,double)`, `Double.compare(double, double)`],
					[/* text */ 't', `, at an index within the respective
 arrays that is the prefix length.
 Otherwise, one array is a proper prefix of the other and, lexicographic
 comparison is the result of comparing the two array lengths.
 (See `],
					[/* reference */ 'r', `#mismatch(double%5B%5D,double%5B%5D)`, `mismatch(double[], double[])`],
					[/* text */ 't', ` for the definition of a common
 and proper prefix.)

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `A `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` array reference is considered lexicographically less
 than a non-`],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` array reference.  Two `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` array
 references are considered equal.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The comparison is consistent with `],
					[/* reference */ 'r', `#equals(double%5B%5D,double%5B%5D)`, `equals`],
					[/* text */ 't', `,
 more specifically the following holds for arrays `],
					[/* inline code block */ 'i', `a`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', `:
 `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `Arrays.equals(a, b) == (Arrays.compare(a, b) == 0)`]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the first array to compare`]
				]],
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the second array to compare`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the value `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if the first and second array are equal and
         contain the same elements in the same order;
         a value less than `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if the first array is
         lexicographically less than the second array; and
         a value greater than `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if the first array is
         lexicographically greater than the second array`]
			]
		]],
		[/* method */ 'compare(double[],int,int,double[],int,int)', [
			[/* method description */
				[/* text */ 't', `Compares two `],
				[/* inline code block */ 'i', `double`],
				[/* text */ 't', ` arrays lexicographically over the specified
 ranges.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If the two arrays, over the specified ranges, share a common prefix
 then the lexicographic comparison is the result of comparing two
 elements, as if by `],
					[/* reference */ 'r', `java.lang.Double#compare(double,double)`, `Double.compare(double, double)`],
					[/* text */ 't', `, at a relative
 index within the respective arrays that is the length of the prefix.
 Otherwise, one array is a proper prefix of the other and, lexicographic
 comparison is the result of comparing the two range lengths.
 (See `],
					[/* reference */ 'r', `#mismatch(double%5B%5D,int,int,double%5B%5D,int,int)`, `mismatch(double[], int, int, double[], int, int)`],
					[/* text */ 't', ` for the
 definition of a common and proper prefix.)

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The comparison is consistent with
 `],
					[/* reference */ 'r', `#equals(double%5B%5D,int,int,double%5B%5D,int,int)`, `equals`],
					[/* text */ 't', `, more
 specifically the following holds for arrays `],
					[/* inline code block */ 'i', `a`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', ` with
 specified ranges [`],
					[/* inline code block */ 'i', `aFromIndex`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `atoIndex`],
					[/* text */ 't', `) and
 [`],
					[/* inline code block */ 'i', `bFromIndex`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `btoIndex`],
					[/* text */ 't', `) respectively:
 `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `Arrays.equals(a, aFromIndex, aToIndex, b, bFromIndex, bToIndex) ==
         (Arrays.compare(a, aFromIndex, aToIndex, b, bFromIndex, bToIndex) == 0)`]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the first array to compare`]
				]],
				[/* parameter */ 'aFromIndex', [/* parameter description */
					[/* text */ 't', `the index (inclusive) of the first element in the
                   first array to be compared`]
				]],
				[/* parameter */ 'aToIndex', [/* parameter description */
					[/* text */ 't', `the index (exclusive) of the last element in the
                 first array to be compared`]
				]],
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the second array to compare`]
				]],
				[/* parameter */ 'bFromIndex', [/* parameter description */
					[/* text */ 't', `the index (inclusive) of the first element in the
                   second array to be compared`]
				]],
				[/* parameter */ 'bToIndex', [/* parameter description */
					[/* text */ 't', `the index (exclusive) of the last element in the
                 second array to be compared`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `aFromIndex > aToIndex`],
					[/* text */ 't', ` or
         if `],
					[/* inline code block */ 'i', `bFromIndex > bToIndex`]
				]],
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `aFromIndex < 0 or aToIndex > a.length`],
					[/* text */ 't', ` or
         if `],
					[/* inline code block */ 'i', `bFromIndex < 0 or bToIndex > b.length`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if either array is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the value `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if, over the specified ranges, the first and
         second array are equal and contain the same elements in the same
         order;
         a value less than `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if, over the specified ranges, the
         first array is lexicographically less than the second array; and
         a value greater than `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if, over the specified ranges, the
         first array is lexicographically greater than the second array`]
			]
		]],
		[/* method */ 'compare(float[],float[])', [
			[/* method description */
				[/* text */ 't', `Compares two `],
				[/* inline code block */ 'i', `float`],
				[/* text */ 't', ` arrays lexicographically.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If the two arrays share a common prefix then the lexicographic
 comparison is the result of comparing two elements, as if by
 `],
					[/* reference */ 'r', `java.lang.Float#compare(float,float)`, `Float.compare(float, float)`],
					[/* text */ 't', `, at an index within the respective
 arrays that is the prefix length.
 Otherwise, one array is a proper prefix of the other and, lexicographic
 comparison is the result of comparing the two array lengths.
 (See `],
					[/* reference */ 'r', `#mismatch(float%5B%5D,float%5B%5D)`, `mismatch(float[], float[])`],
					[/* text */ 't', ` for the definition of a common
 and proper prefix.)

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `A `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` array reference is considered lexicographically less
 than a non-`],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` array reference.  Two `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` array
 references are considered equal.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The comparison is consistent with `],
					[/* reference */ 'r', `#equals(float%5B%5D,float%5B%5D)`, `equals`],
					[/* text */ 't', `,
 more specifically the following holds for arrays `],
					[/* inline code block */ 'i', `a`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', `:
 `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `Arrays.equals(a, b) == (Arrays.compare(a, b) == 0)`]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the first array to compare`]
				]],
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the second array to compare`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the value `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if the first and second array are equal and
         contain the same elements in the same order;
         a value less than `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if the first array is
         lexicographically less than the second array; and
         a value greater than `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if the first array is
         lexicographically greater than the second array`]
			]
		]],
		[/* method */ 'compare(float[],int,int,float[],int,int)', [
			[/* method description */
				[/* text */ 't', `Compares two `],
				[/* inline code block */ 'i', `float`],
				[/* text */ 't', ` arrays lexicographically over the specified
 ranges.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If the two arrays, over the specified ranges, share a common prefix
 then the lexicographic comparison is the result of comparing two
 elements, as if by `],
					[/* reference */ 'r', `java.lang.Float#compare(float,float)`, `Float.compare(float, float)`],
					[/* text */ 't', `, at a relative
 index within the respective arrays that is the length of the prefix.
 Otherwise, one array is a proper prefix of the other and, lexicographic
 comparison is the result of comparing the two range lengths.
 (See `],
					[/* reference */ 'r', `#mismatch(float%5B%5D,int,int,float%5B%5D,int,int)`, `mismatch(float[], int, int, float[], int, int)`],
					[/* text */ 't', ` for the
 definition of a common and proper prefix.)

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The comparison is consistent with
 `],
					[/* reference */ 'r', `#equals(float%5B%5D,int,int,float%5B%5D,int,int)`, `equals`],
					[/* text */ 't', `, more
 specifically the following holds for arrays `],
					[/* inline code block */ 'i', `a`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', ` with
 specified ranges [`],
					[/* inline code block */ 'i', `aFromIndex`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `atoIndex`],
					[/* text */ 't', `) and
 [`],
					[/* inline code block */ 'i', `bFromIndex`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `btoIndex`],
					[/* text */ 't', `) respectively:
 `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `Arrays.equals(a, aFromIndex, aToIndex, b, bFromIndex, bToIndex) ==
         (Arrays.compare(a, aFromIndex, aToIndex, b, bFromIndex, bToIndex) == 0)`]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the first array to compare`]
				]],
				[/* parameter */ 'aFromIndex', [/* parameter description */
					[/* text */ 't', `the index (inclusive) of the first element in the
                   first array to be compared`]
				]],
				[/* parameter */ 'aToIndex', [/* parameter description */
					[/* text */ 't', `the index (exclusive) of the last element in the
                 first array to be compared`]
				]],
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the second array to compare`]
				]],
				[/* parameter */ 'bFromIndex', [/* parameter description */
					[/* text */ 't', `the index (inclusive) of the first element in the
                   second array to be compared`]
				]],
				[/* parameter */ 'bToIndex', [/* parameter description */
					[/* text */ 't', `the index (exclusive) of the last element in the
                 second array to be compared`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `aFromIndex > aToIndex`],
					[/* text */ 't', ` or
         if `],
					[/* inline code block */ 'i', `bFromIndex > bToIndex`]
				]],
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `aFromIndex < 0 or aToIndex > a.length`],
					[/* text */ 't', ` or
         if `],
					[/* inline code block */ 'i', `bFromIndex < 0 or bToIndex > b.length`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if either array is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the value `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if, over the specified ranges, the first and
         second array are equal and contain the same elements in the same
         order;
         a value less than `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if, over the specified ranges, the
         first array is lexicographically less than the second array; and
         a value greater than `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if, over the specified ranges, the
         first array is lexicographically greater than the second array`]
			]
		]],
		[/* method */ 'compare(int[],int,int,int[],int,int)', [
			[/* method description */
				[/* text */ 't', `Compares two `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` arrays lexicographically over the specified
 ranges.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If the two arrays, over the specified ranges, share a common prefix
 then the lexicographic comparison is the result of comparing two
 elements, as if by `],
					[/* reference */ 'r', `java.lang.Integer#compare(int,int)`, `Integer.compare(int, int)`],
					[/* text */ 't', `, at a relative index
 within the respective arrays that is the length of the prefix.
 Otherwise, one array is a proper prefix of the other and, lexicographic
 comparison is the result of comparing the two range lengths.
 (See `],
					[/* reference */ 'r', `#mismatch(int%5B%5D,int,int,int%5B%5D,int,int)`, `mismatch(int[], int, int, int[], int, int)`],
					[/* text */ 't', ` for the
 definition of a common and proper prefix.)

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The comparison is consistent with
 `],
					[/* reference */ 'r', `#equals(int%5B%5D,int,int,int%5B%5D,int,int)`, `equals`],
					[/* text */ 't', `, more
 specifically the following holds for arrays `],
					[/* inline code block */ 'i', `a`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', ` with
 specified ranges [`],
					[/* inline code block */ 'i', `aFromIndex`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `atoIndex`],
					[/* text */ 't', `) and
 [`],
					[/* inline code block */ 'i', `bFromIndex`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `btoIndex`],
					[/* text */ 't', `) respectively:
 `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `Arrays.equals(a, aFromIndex, aToIndex, b, bFromIndex, bToIndex) ==
         (Arrays.compare(a, aFromIndex, aToIndex, b, bFromIndex, bToIndex) == 0)`]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the first array to compare`]
				]],
				[/* parameter */ 'aFromIndex', [/* parameter description */
					[/* text */ 't', `the index (inclusive) of the first element in the
                   first array to be compared`]
				]],
				[/* parameter */ 'aToIndex', [/* parameter description */
					[/* text */ 't', `the index (exclusive) of the last element in the
                 first array to be compared`]
				]],
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the second array to compare`]
				]],
				[/* parameter */ 'bFromIndex', [/* parameter description */
					[/* text */ 't', `the index (inclusive) of the first element in the
                   second array to be compared`]
				]],
				[/* parameter */ 'bToIndex', [/* parameter description */
					[/* text */ 't', `the index (exclusive) of the last element in the
                 second array to be compared`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `aFromIndex > aToIndex`],
					[/* text */ 't', ` or
         if `],
					[/* inline code block */ 'i', `bFromIndex > bToIndex`]
				]],
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `aFromIndex < 0 or aToIndex > a.length`],
					[/* text */ 't', ` or
         if `],
					[/* inline code block */ 'i', `bFromIndex < 0 or bToIndex > b.length`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if either array is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the value `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if, over the specified ranges, the first and
         second array are equal and contain the same elements in the same
         order;
         a value less than `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if, over the specified ranges, the
         first array is lexicographically less than the second array; and
         a value greater than `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if, over the specified ranges, the
         first array is lexicographically greater than the second array`]
			]
		]],
		[/* method */ 'compare(int[],int[])', [
			[/* method description */
				[/* text */ 't', `Compares two `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` arrays lexicographically.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If the two arrays share a common prefix then the lexicographic
 comparison is the result of comparing two elements, as if by
 `],
					[/* reference */ 'r', `java.lang.Integer#compare(int,int)`, `Integer.compare(int, int)`],
					[/* text */ 't', `, at an index within the respective
 arrays that is the prefix length.
 Otherwise, one array is a proper prefix of the other and, lexicographic
 comparison is the result of comparing the two array lengths.
 (See `],
					[/* reference */ 'r', `#mismatch(int%5B%5D,int%5B%5D)`, `mismatch(int[], int[])`],
					[/* text */ 't', ` for the definition of a common and
 proper prefix.)

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `A `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` array reference is considered lexicographically less
 than a non-`],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` array reference.  Two `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` array
 references are considered equal.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The comparison is consistent with `],
					[/* reference */ 'r', `#equals(int%5B%5D,int%5B%5D)`, `equals`],
					[/* text */ 't', `,
 more specifically the following holds for arrays `],
					[/* inline code block */ 'i', `a`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', `:
 `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `Arrays.equals(a, b) == (Arrays.compare(a, b) == 0)`]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the first array to compare`]
				]],
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the second array to compare`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the value `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if the first and second array are equal and
         contain the same elements in the same order;
         a value less than `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if the first array is
         lexicographically less than the second array; and
         a value greater than `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if the first array is
         lexicographically greater than the second array`]
			]
		]],
		[/* method */ 'compare(long[],int,int,long[],int,int)', [
			[/* method description */
				[/* text */ 't', `Compares two `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` arrays lexicographically over the specified
 ranges.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If the two arrays, over the specified ranges, share a common prefix
 then the lexicographic comparison is the result of comparing two
 elements, as if by `],
					[/* reference */ 'r', `java.lang.Long#compare(long,long)`, `Long.compare(long, long)`],
					[/* text */ 't', `, at a relative index
 within the respective arrays that is the length of the prefix.
 Otherwise, one array is a proper prefix of the other and, lexicographic
 comparison is the result of comparing the two range lengths.
 (See `],
					[/* reference */ 'r', `#mismatch(long%5B%5D,int,int,long%5B%5D,int,int)`, `mismatch(long[], int, int, long[], int, int)`],
					[/* text */ 't', ` for the
 definition of a common and proper prefix.)

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The comparison is consistent with
 `],
					[/* reference */ 'r', `#equals(long%5B%5D,int,int,long%5B%5D,int,int)`, `equals`],
					[/* text */ 't', `, more
 specifically the following holds for arrays `],
					[/* inline code block */ 'i', `a`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', ` with
 specified ranges [`],
					[/* inline code block */ 'i', `aFromIndex`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `atoIndex`],
					[/* text */ 't', `) and
 [`],
					[/* inline code block */ 'i', `bFromIndex`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `btoIndex`],
					[/* text */ 't', `) respectively:
 `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `Arrays.equals(a, aFromIndex, aToIndex, b, bFromIndex, bToIndex) ==
         (Arrays.compare(a, aFromIndex, aToIndex, b, bFromIndex, bToIndex) == 0)`]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the first array to compare`]
				]],
				[/* parameter */ 'aFromIndex', [/* parameter description */
					[/* text */ 't', `the index (inclusive) of the first element in the
                   first array to be compared`]
				]],
				[/* parameter */ 'aToIndex', [/* parameter description */
					[/* text */ 't', `the index (exclusive) of the last element in the
                 first array to be compared`]
				]],
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the second array to compare`]
				]],
				[/* parameter */ 'bFromIndex', [/* parameter description */
					[/* text */ 't', `the index (inclusive) of the first element in the
                   second array to be compared`]
				]],
				[/* parameter */ 'bToIndex', [/* parameter description */
					[/* text */ 't', `the index (exclusive) of the last element in the
                 second array to be compared`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `aFromIndex > aToIndex`],
					[/* text */ 't', ` or
         if `],
					[/* inline code block */ 'i', `bFromIndex > bToIndex`]
				]],
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `aFromIndex < 0 or aToIndex > a.length`],
					[/* text */ 't', ` or
         if `],
					[/* inline code block */ 'i', `bFromIndex < 0 or bToIndex > b.length`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if either array is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the value `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if, over the specified ranges, the first and
         second array are equal and contain the same elements in the same
         order;
         a value less than `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if, over the specified ranges, the
         first array is lexicographically less than the second array; and
         a value greater than `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if, over the specified ranges, the
         first array is lexicographically greater than the second array`]
			]
		]],
		[/* method */ 'compare(long[],long[])', [
			[/* method description */
				[/* text */ 't', `Compares two `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` arrays lexicographically.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If the two arrays share a common prefix then the lexicographic
 comparison is the result of comparing two elements, as if by
 `],
					[/* reference */ 'r', `java.lang.Long#compare(long,long)`, `Long.compare(long, long)`],
					[/* text */ 't', `, at an index within the respective
 arrays that is the prefix length.
 Otherwise, one array is a proper prefix of the other and, lexicographic
 comparison is the result of comparing the two array lengths.
 (See `],
					[/* reference */ 'r', `#mismatch(long%5B%5D,long%5B%5D)`, `mismatch(long[], long[])`],
					[/* text */ 't', ` for the definition of a common and
 proper prefix.)

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `A `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` array reference is considered lexicographically less
 than a non-`],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` array reference.  Two `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` array
 references are considered equal.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The comparison is consistent with `],
					[/* reference */ 'r', `#equals(long%5B%5D,long%5B%5D)`, `equals`],
					[/* text */ 't', `,
 more specifically the following holds for arrays `],
					[/* inline code block */ 'i', `a`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', `:
 `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `Arrays.equals(a, b) == (Arrays.compare(a, b) == 0)`]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the first array to compare`]
				]],
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the second array to compare`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the value `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if the first and second array are equal and
         contain the same elements in the same order;
         a value less than `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if the first array is
         lexicographically less than the second array; and
         a value greater than `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if the first array is
         lexicographically greater than the second array`]
			]
		]],
		[/* method */ 'compare(short[],int,int,short[],int,int)', [
			[/* method description */
				[/* text */ 't', `Compares two `],
				[/* inline code block */ 'i', `short`],
				[/* text */ 't', ` arrays lexicographically over the specified
 ranges.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If the two arrays, over the specified ranges, share a common prefix
 then the lexicographic comparison is the result of comparing two
 elements, as if by `],
					[/* reference */ 'r', `java.lang.Short#compare(short,short)`, `Short.compare(short, short)`],
					[/* text */ 't', `, at a relative
 index within the respective arrays that is the length of the prefix.
 Otherwise, one array is a proper prefix of the other and, lexicographic
 comparison is the result of comparing the two range lengths.
 (See `],
					[/* reference */ 'r', `#mismatch(short%5B%5D,int,int,short%5B%5D,int,int)`, `mismatch(short[], int, int, short[], int, int)`],
					[/* text */ 't', ` for the
 definition of a common and proper prefix.)

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The comparison is consistent with
 `],
					[/* reference */ 'r', `#equals(short%5B%5D,int,int,short%5B%5D,int,int)`, `equals`],
					[/* text */ 't', `, more
 specifically the following holds for arrays `],
					[/* inline code block */ 'i', `a`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', ` with
 specified ranges [`],
					[/* inline code block */ 'i', `aFromIndex`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `atoIndex`],
					[/* text */ 't', `) and
 [`],
					[/* inline code block */ 'i', `bFromIndex`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `btoIndex`],
					[/* text */ 't', `) respectively:
 `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `Arrays.equals(a, aFromIndex, aToIndex, b, bFromIndex, bToIndex) ==
         (Arrays.compare(a, aFromIndex, aToIndex, b, bFromIndex, bToIndex) == 0)`]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the first array to compare`]
				]],
				[/* parameter */ 'aFromIndex', [/* parameter description */
					[/* text */ 't', `the index (inclusive) of the first element in the
                   first array to be compared`]
				]],
				[/* parameter */ 'aToIndex', [/* parameter description */
					[/* text */ 't', `the index (exclusive) of the last element in the
                 first array to be compared`]
				]],
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the second array to compare`]
				]],
				[/* parameter */ 'bFromIndex', [/* parameter description */
					[/* text */ 't', `the index (inclusive) of the first element in the
                   second array to be compared`]
				]],
				[/* parameter */ 'bToIndex', [/* parameter description */
					[/* text */ 't', `the index (exclusive) of the last element in the
                 second array to be compared`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `aFromIndex > aToIndex`],
					[/* text */ 't', ` or
         if `],
					[/* inline code block */ 'i', `bFromIndex > bToIndex`]
				]],
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `aFromIndex < 0 or aToIndex > a.length`],
					[/* text */ 't', ` or
         if `],
					[/* inline code block */ 'i', `bFromIndex < 0 or bToIndex > b.length`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if either array is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the value `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if, over the specified ranges, the first and
         second array are equal and contain the same elements in the same
         order;
         a value less than `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if, over the specified ranges, the
         first array is lexicographically less than the second array; and
         a value greater than `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if, over the specified ranges, the
         first array is lexicographically greater than the second array`]
			]
		]],
		[/* method */ 'compare(short[],short[])', [
			[/* method description */
				[/* text */ 't', `Compares two `],
				[/* inline code block */ 'i', `short`],
				[/* text */ 't', ` arrays lexicographically.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If the two arrays share a common prefix then the lexicographic
 comparison is the result of comparing two elements, as if by
 `],
					[/* reference */ 'r', `java.lang.Short#compare(short,short)`, `Short.compare(short, short)`],
					[/* text */ 't', `, at an index within the respective
 arrays that is the prefix length.
 Otherwise, one array is a proper prefix of the other and, lexicographic
 comparison is the result of comparing the two array lengths.
 (See `],
					[/* reference */ 'r', `#mismatch(short%5B%5D,short%5B%5D)`, `mismatch(short[], short[])`],
					[/* text */ 't', ` for the definition of a common
 and proper prefix.)

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `A `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` array reference is considered lexicographically less
 than a non-`],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` array reference.  Two `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` array
 references are considered equal.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The comparison is consistent with `],
					[/* reference */ 'r', `#equals(short%5B%5D,short%5B%5D)`, `equals`],
					[/* text */ 't', `,
 more specifically the following holds for arrays `],
					[/* inline code block */ 'i', `a`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', `:
 `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `Arrays.equals(a, b) == (Arrays.compare(a, b) == 0)`]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the first array to compare`]
				]],
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the second array to compare`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the value `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if the first and second array are equal and
         contain the same elements in the same order;
         a value less than `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if the first array is
         lexicographically less than the second array; and
         a value greater than `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if the first array is
         lexicographically greater than the second array`]
			]
		]],
		[/* method */ 'compareUnsigned(byte[],byte[])', [
			[/* method description */
				[/* text */ 't', `Compares two `],
				[/* inline code block */ 'i', `byte`],
				[/* text */ 't', ` arrays lexicographically, numerically treating
 elements as unsigned.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If the two arrays share a common prefix then the lexicographic
 comparison is the result of comparing two elements, as if by
 `],
					[/* reference */ 'r', `java.lang.Byte#compareUnsigned(byte,byte)`, `Byte.compareUnsigned(byte, byte)`],
					[/* text */ 't', `, at an index within the
 respective arrays that is the prefix length.
 Otherwise, one array is a proper prefix of the other and, lexicographic
 comparison is the result of comparing the two array lengths.
 (See `],
					[/* reference */ 'r', `#mismatch(byte%5B%5D,byte%5B%5D)`, `mismatch(byte[], byte[])`],
					[/* text */ 't', ` for the definition of a common
 and proper prefix.)

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `A `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` array reference is considered lexicographically less
 than a non-`],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` array reference.  Two `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` array
 references are considered equal.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the first array to compare`]
				]],
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the second array to compare`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the value `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if the first and second array are
         equal and contain the same elements in the same order;
         a value less than `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if the first array is
         lexicographically less than the second array; and
         a value greater than `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if the first array is
         lexicographically greater than the second array`]
			]
		]],
		[/* method */ 'compareUnsigned(byte[],int,int,byte[],int,int)', [
			[/* method description */
				[/* text */ 't', `Compares two `],
				[/* inline code block */ 'i', `byte`],
				[/* text */ 't', ` arrays lexicographically over the specified
 ranges, numerically treating elements as unsigned.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If the two arrays, over the specified ranges, share a common prefix
 then the lexicographic comparison is the result of comparing two
 elements, as if by `],
					[/* reference */ 'r', `java.lang.Byte#compareUnsigned(byte,byte)`, `Byte.compareUnsigned(byte, byte)`],
					[/* text */ 't', `, at a
 relative index within the respective arrays that is the length of the
 prefix.
 Otherwise, one array is a proper prefix of the other and, lexicographic
 comparison is the result of comparing the two range lengths.
 (See `],
					[/* reference */ 'r', `#mismatch(byte%5B%5D,int,int,byte%5B%5D,int,int)`, `mismatch(byte[], int, int, byte[], int, int)`],
					[/* text */ 't', ` for the
 definition of a common and proper prefix.)`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the first array to compare`]
				]],
				[/* parameter */ 'aFromIndex', [/* parameter description */
					[/* text */ 't', `the index (inclusive) of the first element in the
                   first array to be compared`]
				]],
				[/* parameter */ 'aToIndex', [/* parameter description */
					[/* text */ 't', `the index (exclusive) of the last element in the
                 first array to be compared`]
				]],
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the second array to compare`]
				]],
				[/* parameter */ 'bFromIndex', [/* parameter description */
					[/* text */ 't', `the index (inclusive) of the first element in the
                   second array to be compared`]
				]],
				[/* parameter */ 'bToIndex', [/* parameter description */
					[/* text */ 't', `the index (exclusive) of the last element in the
                 second array to be compared`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `aFromIndex > aToIndex`],
					[/* text */ 't', ` or
         if `],
					[/* inline code block */ 'i', `bFromIndex > bToIndex`]
				]],
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `aFromIndex < 0 or aToIndex > a.length`],
					[/* text */ 't', ` or
         if `],
					[/* inline code block */ 'i', `bFromIndex < 0 or bToIndex > b.length`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if either array is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the value `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if, over the specified ranges, the first and
         second array are equal and contain the same elements in the same
         order;
         a value less than `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if, over the specified ranges, the
         first array is lexicographically less than the second array; and
         a value greater than `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if, over the specified ranges, the
         first array is lexicographically greater than the second array`]
			]
		]],
		[/* method */ 'compareUnsigned(int[],int,int,int[],int,int)', [
			[/* method description */
				[/* text */ 't', `Compares two `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` arrays lexicographically over the specified
 ranges, numerically treating elements as unsigned.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If the two arrays, over the specified ranges, share a common prefix
 then the lexicographic comparison is the result of comparing two
 elements, as if by `],
					[/* reference */ 'r', `java.lang.Integer#compareUnsigned(int,int)`, `Integer.compareUnsigned(int, int)`],
					[/* text */ 't', `, at a
 relative index within the respective arrays that is the length of the
 prefix.
 Otherwise, one array is a proper prefix of the other and, lexicographic
 comparison is the result of comparing the two range lengths.
 (See `],
					[/* reference */ 'r', `#mismatch(int%5B%5D,int,int,int%5B%5D,int,int)`, `mismatch(int[], int, int, int[], int, int)`],
					[/* text */ 't', ` for the
 definition of a common and proper prefix.)`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the first array to compare`]
				]],
				[/* parameter */ 'aFromIndex', [/* parameter description */
					[/* text */ 't', `the index (inclusive) of the first element in the
                   first array to be compared`]
				]],
				[/* parameter */ 'aToIndex', [/* parameter description */
					[/* text */ 't', `the index (exclusive) of the last element in the
                 first array to be compared`]
				]],
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the second array to compare`]
				]],
				[/* parameter */ 'bFromIndex', [/* parameter description */
					[/* text */ 't', `the index (inclusive) of the first element in the
                   second array to be compared`]
				]],
				[/* parameter */ 'bToIndex', [/* parameter description */
					[/* text */ 't', `the index (exclusive) of the last element in the
                 second array to be compared`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `aFromIndex > aToIndex`],
					[/* text */ 't', ` or
         if `],
					[/* inline code block */ 'i', `bFromIndex > bToIndex`]
				]],
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `aFromIndex < 0 or aToIndex > a.length`],
					[/* text */ 't', ` or
         if `],
					[/* inline code block */ 'i', `bFromIndex < 0 or bToIndex > b.length`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if either array is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the value `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if, over the specified ranges, the first and
         second array are equal and contain the same elements in the same
         order;
         a value less than `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if, over the specified ranges, the
         first array is lexicographically less than the second array; and
         a value greater than `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if, over the specified ranges, the
         first array is lexicographically greater than the second array`]
			]
		]],
		[/* method */ 'compareUnsigned(int[],int[])', [
			[/* method description */
				[/* text */ 't', `Compares two `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` arrays lexicographically, numerically treating
 elements as unsigned.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If the two arrays share a common prefix then the lexicographic
 comparison is the result of comparing two elements, as if by
 `],
					[/* reference */ 'r', `java.lang.Integer#compareUnsigned(int,int)`, `Integer.compareUnsigned(int, int)`],
					[/* text */ 't', `, at an index within the
 respective arrays that is the prefix length.
 Otherwise, one array is a proper prefix of the other and, lexicographic
 comparison is the result of comparing the two array lengths.
 (See `],
					[/* reference */ 'r', `#mismatch(int%5B%5D,int%5B%5D)`, `mismatch(int[], int[])`],
					[/* text */ 't', ` for the definition of a common
 and proper prefix.)

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `A `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` array reference is considered lexicographically less
 than a non-`],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` array reference.  Two `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` array
 references are considered equal.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the first array to compare`]
				]],
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the second array to compare`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the value `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if the first and second array are
         equal and contain the same elements in the same order;
         a value less than `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if the first array is
         lexicographically less than the second array; and
         a value greater than `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if the first array is
         lexicographically greater than the second array`]
			]
		]],
		[/* method */ 'compareUnsigned(long[],int,int,long[],int,int)', [
			[/* method description */
				[/* text */ 't', `Compares two `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` arrays lexicographically over the specified
 ranges, numerically treating elements as unsigned.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If the two arrays, over the specified ranges, share a common prefix
 then the lexicographic comparison is the result of comparing two
 elements, as if by `],
					[/* reference */ 'r', `java.lang.Long#compareUnsigned(long,long)`, `Long.compareUnsigned(long, long)`],
					[/* text */ 't', `, at a
 relative index within the respective arrays that is the length of the
 prefix.
 Otherwise, one array is a proper prefix of the other and, lexicographic
 comparison is the result of comparing the two range lengths.
 (See `],
					[/* reference */ 'r', `#mismatch(long%5B%5D,int,int,long%5B%5D,int,int)`, `mismatch(long[], int, int, long[], int, int)`],
					[/* text */ 't', ` for the
 definition of a common and proper prefix.)`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the first array to compare`]
				]],
				[/* parameter */ 'aFromIndex', [/* parameter description */
					[/* text */ 't', `the index (inclusive) of the first element in the
                   first array to be compared`]
				]],
				[/* parameter */ 'aToIndex', [/* parameter description */
					[/* text */ 't', `the index (exclusive) of the last element in the
                 first array to be compared`]
				]],
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the second array to compare`]
				]],
				[/* parameter */ 'bFromIndex', [/* parameter description */
					[/* text */ 't', `the index (inclusive) of the first element in the
                   second array to be compared`]
				]],
				[/* parameter */ 'bToIndex', [/* parameter description */
					[/* text */ 't', `the index (exclusive) of the last element in the
                 second array to be compared`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `aFromIndex > aToIndex`],
					[/* text */ 't', ` or
         if `],
					[/* inline code block */ 'i', `bFromIndex > bToIndex`]
				]],
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `aFromIndex < 0 or aToIndex > a.length`],
					[/* text */ 't', ` or
         if `],
					[/* inline code block */ 'i', `bFromIndex < 0 or bToIndex > b.length`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if either array is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the value `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if, over the specified ranges, the first and
         second array are equal and contain the same elements in the same
         order;
         a value less than `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if, over the specified ranges, the
         first array is lexicographically less than the second array; and
         a value greater than `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if, over the specified ranges, the
         first array is lexicographically greater than the second array`]
			]
		]],
		[/* method */ 'compareUnsigned(long[],long[])', [
			[/* method description */
				[/* text */ 't', `Compares two `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` arrays lexicographically, numerically treating
 elements as unsigned.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If the two arrays share a common prefix then the lexicographic
 comparison is the result of comparing two elements, as if by
 `],
					[/* reference */ 'r', `java.lang.Long#compareUnsigned(long,long)`, `Long.compareUnsigned(long, long)`],
					[/* text */ 't', `, at an index within the
 respective arrays that is the prefix length.
 Otherwise, one array is a proper prefix of the other and, lexicographic
 comparison is the result of comparing the two array lengths.
 (See `],
					[/* reference */ 'r', `#mismatch(long%5B%5D,long%5B%5D)`, `mismatch(long[], long[])`],
					[/* text */ 't', ` for the definition of a common
 and proper prefix.)

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `A `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` array reference is considered lexicographically less
 than a non-`],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` array reference.  Two `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` array
 references are considered equal.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the first array to compare`]
				]],
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the second array to compare`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the value `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if the first and second array are
         equal and contain the same elements in the same order;
         a value less than `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if the first array is
         lexicographically less than the second array; and
         a value greater than `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if the first array is
         lexicographically greater than the second array`]
			]
		]],
		[/* method */ 'compareUnsigned(short[],int,int,short[],int,int)', [
			[/* method description */
				[/* text */ 't', `Compares two `],
				[/* inline code block */ 'i', `short`],
				[/* text */ 't', ` arrays lexicographically over the specified
 ranges, numerically treating elements as unsigned.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If the two arrays, over the specified ranges, share a common prefix
 then the lexicographic comparison is the result of comparing two
 elements, as if by `],
					[/* reference */ 'r', `java.lang.Short#compareUnsigned(short,short)`, `Short.compareUnsigned(short, short)`],
					[/* text */ 't', `, at a
 relative index within the respective arrays that is the length of the
 prefix.
 Otherwise, one array is a proper prefix of the other and, lexicographic
 comparison is the result of comparing the two range lengths.
 (See `],
					[/* reference */ 'r', `#mismatch(short%5B%5D,int,int,short%5B%5D,int,int)`, `mismatch(short[], int, int, short[], int, int)`],
					[/* text */ 't', ` for the
 definition of a common and proper prefix.)`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the first array to compare`]
				]],
				[/* parameter */ 'aFromIndex', [/* parameter description */
					[/* text */ 't', `the index (inclusive) of the first element in the
                   first array to be compared`]
				]],
				[/* parameter */ 'aToIndex', [/* parameter description */
					[/* text */ 't', `the index (exclusive) of the last element in the
                 first array to be compared`]
				]],
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the second array to compare`]
				]],
				[/* parameter */ 'bFromIndex', [/* parameter description */
					[/* text */ 't', `the index (inclusive) of the first element in the
                   second array to be compared`]
				]],
				[/* parameter */ 'bToIndex', [/* parameter description */
					[/* text */ 't', `the index (exclusive) of the last element in the
                 second array to be compared`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `aFromIndex > aToIndex`],
					[/* text */ 't', ` or
         if `],
					[/* inline code block */ 'i', `bFromIndex > bToIndex`]
				]],
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `aFromIndex < 0 or aToIndex > a.length`],
					[/* text */ 't', ` or
         if `],
					[/* inline code block */ 'i', `bFromIndex < 0 or bToIndex > b.length`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if either array is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the value `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if, over the specified ranges, the first and
         second array are equal and contain the same elements in the same
         order;
         a value less than `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if, over the specified ranges, the
         first array is lexicographically less than the second array; and
         a value greater than `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if, over the specified ranges, the
         first array is lexicographically greater than the second array`]
			]
		]],
		[/* method */ 'compareUnsigned(short[],short[])', [
			[/* method description */
				[/* text */ 't', `Compares two `],
				[/* inline code block */ 'i', `short`],
				[/* text */ 't', ` arrays lexicographically, numerically treating
 elements as unsigned.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If the two arrays share a common prefix then the lexicographic
 comparison is the result of comparing two elements, as if by
 `],
					[/* reference */ 'r', `java.lang.Short#compareUnsigned(short,short)`, `Short.compareUnsigned(short, short)`],
					[/* text */ 't', `, at an index within the
 respective arrays that is the prefix length.
 Otherwise, one array is a proper prefix of the other and, lexicographic
 comparison is the result of comparing the two array lengths.
 (See `],
					[/* reference */ 'r', `#mismatch(short%5B%5D,short%5B%5D)`, `mismatch(short[], short[])`],
					[/* text */ 't', ` for the definition of a common
 and proper prefix.)

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `A `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` array reference is considered lexicographically less
 than a non-`],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` array reference.  Two `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` array
 references are considered equal.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the first array to compare`]
				]],
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the second array to compare`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the value `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if the first and second array are
         equal and contain the same elements in the same order;
         a value less than `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if the first array is
         lexicographically less than the second array; and
         a value greater than `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if the first array is
         lexicographically greater than the second array`]
			]
		]],
		[/* method */ 'deepHashCode(java.lang.Object[])', [
			[/* method description */
				[/* text */ 't', `Returns a hash code based on the "deep contents" of the specified
 array.  If the array contains other arrays as elements, the
 hash code is based on their contents and so on, ad infinitum.
 It is therefore unacceptable to invoke this method on an array that
 contains itself as an element, either directly or indirectly through
 one or more levels of arrays.  The behavior of such an invocation is
 undefined.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `For any two arrays `],
					[/* inline code block */ 'i', `a`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', ` such that
 `],
					[/* inline code block */ 'i', `Arrays.deepEquals(a, b)`],
					[/* text */ 't', `, it is also the case that
 `],
					[/* inline code block */ 'i', `Arrays.deepHashCode(a) == Arrays.deepHashCode(b)`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The computation of the value returned by this method is similar to
 that of the value returned by `],
					[/* reference */ 'r', `java.util.List#hashCode()`, `List.hashCode()`],
					[/* text */ 't', ` on a list
 containing the same elements as `],
					[/* inline code block */ 'i', `a`],
					[/* text */ 't', ` in the same order, with one
 difference: If an element `],
					[/* inline code block */ 'i', `e`],
					[/* text */ 't', ` of `],
					[/* inline code block */ 'i', `a`],
					[/* text */ 't', ` is itself an array,
 its hash code is computed not by calling `],
					[/* inline code block */ 'i', `e.hashCode()`],
					[/* text */ 't', `, but as
 by calling the appropriate overloading of `],
					[/* inline code block */ 'i', `Arrays.hashCode(e)`],
					[/* text */ 't', `
 if `],
					[/* inline code block */ 'i', `e`],
					[/* text */ 't', ` is an array of a primitive type, or as by calling
 `],
					[/* inline code block */ 'i', `Arrays.deepHashCode(e)`],
					[/* text */ 't', ` recursively if `],
					[/* inline code block */ 'i', `e`],
					[/* text */ 't', ` is an array
 of a reference type.  If `],
					[/* inline code block */ 'i', `a`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `, this method
 returns 0.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the array whose deep-content-based hash code to compute`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a deep-content-based hash code for `],
				[/* inline code block */ 'i', `a`]
			]
		]],
		[/* method */ 'hashCode(boolean[])', [
			[/* method description */
				[/* text */ 't', `Returns a hash code based on the contents of the specified array.
 For any two `],
				[/* inline code block */ 'i', `boolean`],
				[/* text */ 't', ` arrays `],
				[/* inline code block */ 'i', `a`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `b`],
				[/* text */ 't', `
 such that `],
				[/* inline code block */ 'i', `Arrays.equals(a, b)`],
				[/* text */ 't', `, it is also the case that
 `],
				[/* inline code block */ 'i', `Arrays.hashCode(a) == Arrays.hashCode(b)`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The value returned by this method is the same value that would be
 obtained by invoking the `],
					[/* reference */ 'r', `java.util.List#hashCode()`, `hashCode`],
					[/* text */ 't', `
 method on a `],
					[/* reference */ 'r', `java.util.List`, `List`],
					[/* text */ 't', ` containing a sequence of `],
					[/* reference */ 'r', `java.lang.Boolean`, `Boolean`],
					[/* text */ 't', `
 instances representing the elements of `],
					[/* inline code block */ 'i', `a`],
					[/* text */ 't', ` in the same order.
 If `],
					[/* inline code block */ 'i', `a`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `, this method returns 0.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the array whose hash value to compute`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a content-based hash code for `],
				[/* inline code block */ 'i', `a`]
			]
		]],
		[/* method */ 'hashCode(byte[])', [
			[/* method description */
				[/* text */ 't', `Returns a hash code based on the contents of the specified array.
 For any two `],
				[/* inline code block */ 'i', `byte`],
				[/* text */ 't', ` arrays `],
				[/* inline code block */ 'i', `a`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `b`],
				[/* text */ 't', `
 such that `],
				[/* inline code block */ 'i', `Arrays.equals(a, b)`],
				[/* text */ 't', `, it is also the case that
 `],
				[/* inline code block */ 'i', `Arrays.hashCode(a) == Arrays.hashCode(b)`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The value returned by this method is the same value that would be
 obtained by invoking the `],
					[/* reference */ 'r', `java.util.List#hashCode()`, `hashCode`],
					[/* text */ 't', `
 method on a `],
					[/* reference */ 'r', `java.util.List`, `List`],
					[/* text */ 't', ` containing a sequence of `],
					[/* reference */ 'r', `java.lang.Byte`, `Byte`],
					[/* text */ 't', `
 instances representing the elements of `],
					[/* inline code block */ 'i', `a`],
					[/* text */ 't', ` in the same order.
 If `],
					[/* inline code block */ 'i', `a`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `, this method returns 0.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the array whose hash value to compute`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a content-based hash code for `],
				[/* inline code block */ 'i', `a`]
			]
		]],
		[/* method */ 'hashCode(char[])', [
			[/* method description */
				[/* text */ 't', `Returns a hash code based on the contents of the specified array.
 For any two `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', ` arrays `],
				[/* inline code block */ 'i', `a`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `b`],
				[/* text */ 't', `
 such that `],
				[/* inline code block */ 'i', `Arrays.equals(a, b)`],
				[/* text */ 't', `, it is also the case that
 `],
				[/* inline code block */ 'i', `Arrays.hashCode(a) == Arrays.hashCode(b)`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The value returned by this method is the same value that would be
 obtained by invoking the `],
					[/* reference */ 'r', `java.util.List#hashCode()`, `hashCode`],
					[/* text */ 't', `
 method on a `],
					[/* reference */ 'r', `java.util.List`, `List`],
					[/* text */ 't', ` containing a sequence of `],
					[/* reference */ 'r', `java.lang.Character`, `Character`],
					[/* text */ 't', `
 instances representing the elements of `],
					[/* inline code block */ 'i', `a`],
					[/* text */ 't', ` in the same order.
 If `],
					[/* inline code block */ 'i', `a`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `, this method returns 0.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the array whose hash value to compute`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a content-based hash code for `],
				[/* inline code block */ 'i', `a`]
			]
		]],
		[/* method */ 'hashCode(double[])', [
			[/* method description */
				[/* text */ 't', `Returns a hash code based on the contents of the specified array.
 For any two `],
				[/* inline code block */ 'i', `double`],
				[/* text */ 't', ` arrays `],
				[/* inline code block */ 'i', `a`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `b`],
				[/* text */ 't', `
 such that `],
				[/* inline code block */ 'i', `Arrays.equals(a, b)`],
				[/* text */ 't', `, it is also the case that
 `],
				[/* inline code block */ 'i', `Arrays.hashCode(a) == Arrays.hashCode(b)`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The value returned by this method is the same value that would be
 obtained by invoking the `],
					[/* reference */ 'r', `java.util.List#hashCode()`, `hashCode`],
					[/* text */ 't', `
 method on a `],
					[/* reference */ 'r', `java.util.List`, `List`],
					[/* text */ 't', ` containing a sequence of `],
					[/* reference */ 'r', `java.lang.Double`, `Double`],
					[/* text */ 't', `
 instances representing the elements of `],
					[/* inline code block */ 'i', `a`],
					[/* text */ 't', ` in the same order.
 If `],
					[/* inline code block */ 'i', `a`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `, this method returns 0.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the array whose hash value to compute`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a content-based hash code for `],
				[/* inline code block */ 'i', `a`]
			]
		]],
		[/* method */ 'hashCode(float[])', [
			[/* method description */
				[/* text */ 't', `Returns a hash code based on the contents of the specified array.
 For any two `],
				[/* inline code block */ 'i', `float`],
				[/* text */ 't', ` arrays `],
				[/* inline code block */ 'i', `a`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `b`],
				[/* text */ 't', `
 such that `],
				[/* inline code block */ 'i', `Arrays.equals(a, b)`],
				[/* text */ 't', `, it is also the case that
 `],
				[/* inline code block */ 'i', `Arrays.hashCode(a) == Arrays.hashCode(b)`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The value returned by this method is the same value that would be
 obtained by invoking the `],
					[/* reference */ 'r', `java.util.List#hashCode()`, `hashCode`],
					[/* text */ 't', `
 method on a `],
					[/* reference */ 'r', `java.util.List`, `List`],
					[/* text */ 't', ` containing a sequence of `],
					[/* reference */ 'r', `java.lang.Float`, `Float`],
					[/* text */ 't', `
 instances representing the elements of `],
					[/* inline code block */ 'i', `a`],
					[/* text */ 't', ` in the same order.
 If `],
					[/* inline code block */ 'i', `a`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `, this method returns 0.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the array whose hash value to compute`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a content-based hash code for `],
				[/* inline code block */ 'i', `a`]
			]
		]],
		[/* method */ 'hashCode(int[])', [
			[/* method description */
				[/* text */ 't', `Returns a hash code based on the contents of the specified array.
 For any two non-null `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` arrays `],
				[/* inline code block */ 'i', `a`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `b`],
				[/* text */ 't', `
 such that `],
				[/* inline code block */ 'i', `Arrays.equals(a, b)`],
				[/* text */ 't', `, it is also the case that
 `],
				[/* inline code block */ 'i', `Arrays.hashCode(a) == Arrays.hashCode(b)`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The value returned by this method is the same value that would be
 obtained by invoking the `],
					[/* reference */ 'r', `java.util.List#hashCode()`, `hashCode`],
					[/* text */ 't', `
 method on a `],
					[/* reference */ 'r', `java.util.List`, `List`],
					[/* text */ 't', ` containing a sequence of `],
					[/* reference */ 'r', `java.lang.Integer`, `Integer`],
					[/* text */ 't', `
 instances representing the elements of `],
					[/* inline code block */ 'i', `a`],
					[/* text */ 't', ` in the same order.
 If `],
					[/* inline code block */ 'i', `a`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `, this method returns 0.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the array whose hash value to compute`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a content-based hash code for `],
				[/* inline code block */ 'i', `a`]
			]
		]],
		[/* method */ 'hashCode(java.lang.Object[])', [
			[/* method description */
				[/* text */ 't', `Returns a hash code based on the contents of the specified array.  If
 the array contains other arrays as elements, the hash code is based on
 their identities rather than their contents.  It is therefore
 acceptable to invoke this method on an array that contains itself as an
 element,  either directly or indirectly through one or more levels of
 arrays.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `For any two arrays `],
					[/* inline code block */ 'i', `a`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', ` such that
 `],
					[/* inline code block */ 'i', `Arrays.equals(a, b)`],
					[/* text */ 't', `, it is also the case that
 `],
					[/* inline code block */ 'i', `Arrays.hashCode(a) == Arrays.hashCode(b)`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The value returned by this method is equal to the value that would
 be returned by `],
					[/* inline code block */ 'i', `Arrays.asList(a).hashCode()`],
					[/* text */ 't', `, unless `],
					[/* inline code block */ 'i', `a`],
					[/* text */ 't', `
 is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `, in which case `],
					[/* inline code block */ 'i', `0`],
					[/* text */ 't', ` is returned.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the array whose content-based hash code to compute`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a content-based hash code for `],
				[/* inline code block */ 'i', `a`]
			]
		]],
		[/* method */ 'hashCode(long[])', [
			[/* method description */
				[/* text */ 't', `Returns a hash code based on the contents of the specified array.
 For any two `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` arrays `],
				[/* inline code block */ 'i', `a`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `b`],
				[/* text */ 't', `
 such that `],
				[/* inline code block */ 'i', `Arrays.equals(a, b)`],
				[/* text */ 't', `, it is also the case that
 `],
				[/* inline code block */ 'i', `Arrays.hashCode(a) == Arrays.hashCode(b)`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The value returned by this method is the same value that would be
 obtained by invoking the `],
					[/* reference */ 'r', `java.util.List#hashCode()`, `hashCode`],
					[/* text */ 't', `
 method on a `],
					[/* reference */ 'r', `java.util.List`, `List`],
					[/* text */ 't', ` containing a sequence of `],
					[/* reference */ 'r', `java.lang.Long`, `Long`],
					[/* text */ 't', `
 instances representing the elements of `],
					[/* inline code block */ 'i', `a`],
					[/* text */ 't', ` in the same order.
 If `],
					[/* inline code block */ 'i', `a`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `, this method returns 0.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the array whose hash value to compute`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a content-based hash code for `],
				[/* inline code block */ 'i', `a`]
			]
		]],
		[/* method */ 'hashCode(short[])', [
			[/* method description */
				[/* text */ 't', `Returns a hash code based on the contents of the specified array.
 For any two `],
				[/* inline code block */ 'i', `short`],
				[/* text */ 't', ` arrays `],
				[/* inline code block */ 'i', `a`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `b`],
				[/* text */ 't', `
 such that `],
				[/* inline code block */ 'i', `Arrays.equals(a, b)`],
				[/* text */ 't', `, it is also the case that
 `],
				[/* inline code block */ 'i', `Arrays.hashCode(a) == Arrays.hashCode(b)`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The value returned by this method is the same value that would be
 obtained by invoking the `],
					[/* reference */ 'r', `java.util.List#hashCode()`, `hashCode`],
					[/* text */ 't', `
 method on a `],
					[/* reference */ 'r', `java.util.List`, `List`],
					[/* text */ 't', ` containing a sequence of `],
					[/* reference */ 'r', `java.lang.Short`, `Short`],
					[/* text */ 't', `
 instances representing the elements of `],
					[/* inline code block */ 'i', `a`],
					[/* text */ 't', ` in the same order.
 If `],
					[/* inline code block */ 'i', `a`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `, this method returns 0.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the array whose hash value to compute`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a content-based hash code for `],
				[/* inline code block */ 'i', `a`]
			]
		]],
		[/* method */ 'mismatch(boolean[],boolean[])', [
			[/* method description */
				[/* text */ 't', `Finds and returns the index of the first mismatch between two
 `],
				[/* inline code block */ 'i', `boolean`],
				[/* text */ 't', ` arrays, otherwise return -1 if no mismatch is found.  The
 index will be in the range of 0 (inclusive) up to the length (inclusive)
 of the smaller array.

 `],
				[/* block */ 'b', `If the two arrays share a common prefix then the returned index is the
 length of the common prefix and it follows that there is a mismatch
 between the two elements at that index within the respective arrays.
 If one array is a proper prefix of the other then the returned index is
 the length of the smaller array and it follows that the index is only
 valid for the larger array.
 Otherwise, there is no mismatch.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Two non-`],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` arrays, `],
					[/* inline code block */ 'i', `a`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', `, share a common
 prefix of length `],
					[/* inline code block */ 'i', `pl`],
					[/* text */ 't', ` if the following expression is true:
 `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `pl >= 0 &&
     pl < Math.min(a.length, b.length) &&
     Arrays.equals(a, 0, pl, b, 0, pl) &&
     a[pl] != b[pl]`]
				]],
				[/* text */ 't', `
 Note that a common prefix length of `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` indicates that the first
 elements from each array mismatch.

 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `Two non-`],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` arrays, `],
					[/* inline code block */ 'i', `a`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', `, share a proper
 prefix if the following expression is true:
 `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `a.length != b.length &&
     Arrays.equals(a, 0, Math.min(a.length, b.length),
                   b, 0, Math.min(a.length, b.length))`]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the first array to be tested for a mismatch`]
				]],
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the second array to be tested for a mismatch`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if either array is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the index of the first mismatch between the two arrays,
         otherwise `],
				[/* inline code block */ 'i', `-1`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'mismatch(boolean[],int,int,boolean[],int,int)', [
			[/* method description */
				[/* text */ 't', `Finds and returns the relative index of the first mismatch between two
 `],
				[/* inline code block */ 'i', `boolean`],
				[/* text */ 't', ` arrays over the specified ranges, otherwise return -1 if
 no mismatch is found.  The index will be in the range of 0 (inclusive) up
 to the length (inclusive) of the smaller range.

 `],
				[/* block */ 'b', `If the two arrays, over the specified ranges, share a common prefix
 then the returned relative index is the length of the common prefix and
 it follows that there is a mismatch between the two elements at that
 relative index within the respective arrays.
 If one array is a proper prefix of the other, over the specified ranges,
 then the returned relative index is the length of the smaller range and
 it follows that the relative index is only valid for the array with the
 larger range.
 Otherwise, there is no mismatch.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Two non-`],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` arrays, `],
					[/* inline code block */ 'i', `a`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', ` with specified
 ranges [`],
					[/* inline code block */ 'i', `aFromIndex`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `atoIndex`],
					[/* text */ 't', `) and
 [`],
					[/* inline code block */ 'i', `bFromIndex`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `btoIndex`],
					[/* text */ 't', `) respectively, share a common
 prefix of length `],
					[/* inline code block */ 'i', `pl`],
					[/* text */ 't', ` if the following expression is true:
 `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `pl >= 0 &&
     pl < Math.min(aToIndex - aFromIndex, bToIndex - bFromIndex) &&
     Arrays.equals(a, aFromIndex, aFromIndex + pl, b, bFromIndex, bFromIndex + pl) &&
     a[aFromIndex + pl] != b[bFromIndex + pl]`]
				]],
				[/* text */ 't', `
 Note that a common prefix length of `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` indicates that the first
 elements from each array mismatch.

 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `Two non-`],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` arrays, `],
					[/* inline code block */ 'i', `a`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', ` with specified
 ranges [`],
					[/* inline code block */ 'i', `aFromIndex`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `atoIndex`],
					[/* text */ 't', `) and
 [`],
					[/* inline code block */ 'i', `bFromIndex`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `btoIndex`],
					[/* text */ 't', `) respectively, share a proper
 prefix if the following expression is true:
 `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `(aToIndex - aFromIndex) != (bToIndex - bFromIndex) &&
     Arrays.equals(a, 0, Math.min(aToIndex - aFromIndex, bToIndex - bFromIndex),
                   b, 0, Math.min(aToIndex - aFromIndex, bToIndex - bFromIndex))`]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the first array to be tested for a mismatch`]
				]],
				[/* parameter */ 'aFromIndex', [/* parameter description */
					[/* text */ 't', `the index (inclusive) of the first element in the
                   first array to be tested`]
				]],
				[/* parameter */ 'aToIndex', [/* parameter description */
					[/* text */ 't', `the index (exclusive) of the last element in the
                 first array to be tested`]
				]],
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the second array to be tested for a mismatch`]
				]],
				[/* parameter */ 'bFromIndex', [/* parameter description */
					[/* text */ 't', `the index (inclusive) of the first element in the
                   second array to be tested`]
				]],
				[/* parameter */ 'bToIndex', [/* parameter description */
					[/* text */ 't', `the index (exclusive) of the last element in the
                 second array to be tested`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `aFromIndex > aToIndex`],
					[/* text */ 't', ` or
         if `],
					[/* inline code block */ 'i', `bFromIndex > bToIndex`]
				]],
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `aFromIndex < 0 or aToIndex > a.length`],
					[/* text */ 't', ` or
         if `],
					[/* inline code block */ 'i', `bFromIndex < 0 or bToIndex > b.length`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if either array is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the relative index of the first mismatch between the two arrays
         over the specified ranges, otherwise `],
				[/* inline code block */ 'i', `-1`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'mismatch(byte[],byte[])', [
			[/* method description */
				[/* text */ 't', `Finds and returns the index of the first mismatch between two `],
				[/* inline code block */ 'i', `byte`],
				[/* text */ 't', `
 arrays, otherwise return -1 if no mismatch is found.  The index will be
 in the range of 0 (inclusive) up to the length (inclusive) of the smaller
 array.

 `],
				[/* block */ 'b', `If the two arrays share a common prefix then the returned index is the
 length of the common prefix and it follows that there is a mismatch
 between the two elements at that index within the respective arrays.
 If one array is a proper prefix of the other then the returned index is
 the length of the smaller array and it follows that the index is only
 valid for the larger array.
 Otherwise, there is no mismatch.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Two non-`],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` arrays, `],
					[/* inline code block */ 'i', `a`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', `, share a common
 prefix of length `],
					[/* inline code block */ 'i', `pl`],
					[/* text */ 't', ` if the following expression is true:
 `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `pl >= 0 &&
     pl < Math.min(a.length, b.length) &&
     Arrays.equals(a, 0, pl, b, 0, pl) &&
     a[pl] != b[pl]`]
				]],
				[/* text */ 't', `
 Note that a common prefix length of `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` indicates that the first
 elements from each array mismatch.

 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `Two non-`],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` arrays, `],
					[/* inline code block */ 'i', `a`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', `, share a proper
 prefix if the following expression is true:
 `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `a.length != b.length &&
     Arrays.equals(a, 0, Math.min(a.length, b.length),
                   b, 0, Math.min(a.length, b.length))`]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the first array to be tested for a mismatch`]
				]],
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the second array to be tested for a mismatch`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if either array is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the index of the first mismatch between the two arrays,
         otherwise `],
				[/* inline code block */ 'i', `-1`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'mismatch(byte[],int,int,byte[],int,int)', [
			[/* method description */
				[/* text */ 't', `Finds and returns the relative index of the first mismatch between two
 `],
				[/* inline code block */ 'i', `byte`],
				[/* text */ 't', ` arrays over the specified ranges, otherwise return -1 if no
 mismatch is found.  The index will be in the range of 0 (inclusive) up to
 the length (inclusive) of the smaller range.

 `],
				[/* block */ 'b', `If the two arrays, over the specified ranges, share a common prefix
 then the returned relative index is the length of the common prefix and
 it follows that there is a mismatch between the two elements at that
 relative index within the respective arrays.
 If one array is a proper prefix of the other, over the specified ranges,
 then the returned relative index is the length of the smaller range and
 it follows that the relative index is only valid for the array with the
 larger range.
 Otherwise, there is no mismatch.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Two non-`],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` arrays, `],
					[/* inline code block */ 'i', `a`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', ` with specified
 ranges [`],
					[/* inline code block */ 'i', `aFromIndex`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `atoIndex`],
					[/* text */ 't', `) and
 [`],
					[/* inline code block */ 'i', `bFromIndex`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `btoIndex`],
					[/* text */ 't', `) respectively, share a common
 prefix of length `],
					[/* inline code block */ 'i', `pl`],
					[/* text */ 't', ` if the following expression is true:
 `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `pl >= 0 &&
     pl < Math.min(aToIndex - aFromIndex, bToIndex - bFromIndex) &&
     Arrays.equals(a, aFromIndex, aFromIndex + pl, b, bFromIndex, bFromIndex + pl) &&
     a[aFromIndex + pl] != b[bFromIndex + pl]`]
				]],
				[/* text */ 't', `
 Note that a common prefix length of `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` indicates that the first
 elements from each array mismatch.

 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `Two non-`],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` arrays, `],
					[/* inline code block */ 'i', `a`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', ` with specified
 ranges [`],
					[/* inline code block */ 'i', `aFromIndex`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `atoIndex`],
					[/* text */ 't', `) and
 [`],
					[/* inline code block */ 'i', `bFromIndex`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `btoIndex`],
					[/* text */ 't', `) respectively, share a proper
 prefix if the following expression is true:
 `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `(aToIndex - aFromIndex) != (bToIndex - bFromIndex) &&
     Arrays.equals(a, 0, Math.min(aToIndex - aFromIndex, bToIndex - bFromIndex),
                   b, 0, Math.min(aToIndex - aFromIndex, bToIndex - bFromIndex))`]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the first array to be tested for a mismatch`]
				]],
				[/* parameter */ 'aFromIndex', [/* parameter description */
					[/* text */ 't', `the index (inclusive) of the first element in the
                   first array to be tested`]
				]],
				[/* parameter */ 'aToIndex', [/* parameter description */
					[/* text */ 't', `the index (exclusive) of the last element in the
                 first array to be tested`]
				]],
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the second array to be tested for a mismatch`]
				]],
				[/* parameter */ 'bFromIndex', [/* parameter description */
					[/* text */ 't', `the index (inclusive) of the first element in the
                   second array to be tested`]
				]],
				[/* parameter */ 'bToIndex', [/* parameter description */
					[/* text */ 't', `the index (exclusive) of the last element in the
                 second array to be tested`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `aFromIndex > aToIndex`],
					[/* text */ 't', ` or
         if `],
					[/* inline code block */ 'i', `bFromIndex > bToIndex`]
				]],
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `aFromIndex < 0 or aToIndex > a.length`],
					[/* text */ 't', ` or
         if `],
					[/* inline code block */ 'i', `bFromIndex < 0 or bToIndex > b.length`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if either array is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the relative index of the first mismatch between the two arrays
         over the specified ranges, otherwise `],
				[/* inline code block */ 'i', `-1`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'mismatch(char[],char[])', [
			[/* method description */
				[/* text */ 't', `Finds and returns the index of the first mismatch between two `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', `
 arrays, otherwise return -1 if no mismatch is found.  The index will be
 in the range of 0 (inclusive) up to the length (inclusive) of the smaller
 array.

 `],
				[/* block */ 'b', `If the two arrays share a common prefix then the returned index is the
 length of the common prefix and it follows that there is a mismatch
 between the two elements at that index within the respective arrays.
 If one array is a proper prefix of the other then the returned index is
 the length of the smaller array and it follows that the index is only
 valid for the larger array.
 Otherwise, there is no mismatch.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Two non-`],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` arrays, `],
					[/* inline code block */ 'i', `a`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', `, share a common
 prefix of length `],
					[/* inline code block */ 'i', `pl`],
					[/* text */ 't', ` if the following expression is true:
 `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `pl >= 0 &&
     pl < Math.min(a.length, b.length) &&
     Arrays.equals(a, 0, pl, b, 0, pl) &&
     a[pl] != b[pl]`]
				]],
				[/* text */ 't', `
 Note that a common prefix length of `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` indicates that the first
 elements from each array mismatch.

 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `Two non-`],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` arrays, `],
					[/* inline code block */ 'i', `a`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', `, share a proper
 prefix if the following expression is true:
 `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `a.length != b.length &&
     Arrays.equals(a, 0, Math.min(a.length, b.length),
                   b, 0, Math.min(a.length, b.length))`]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the first array to be tested for a mismatch`]
				]],
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the second array to be tested for a mismatch`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if either array is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the index of the first mismatch between the two arrays,
         otherwise `],
				[/* inline code block */ 'i', `-1`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'mismatch(char[],int,int,char[],int,int)', [
			[/* method description */
				[/* text */ 't', `Finds and returns the relative index of the first mismatch between two
 `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', ` arrays over the specified ranges, otherwise return -1 if no
 mismatch is found.  The index will be in the range of 0 (inclusive) up to
 the length (inclusive) of the smaller range.

 `],
				[/* block */ 'b', `If the two arrays, over the specified ranges, share a common prefix
 then the returned relative index is the length of the common prefix and
 it follows that there is a mismatch between the two elements at that
 relative index within the respective arrays.
 If one array is a proper prefix of the other, over the specified ranges,
 then the returned relative index is the length of the smaller range and
 it follows that the relative index is only valid for the array with the
 larger range.
 Otherwise, there is no mismatch.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Two non-`],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` arrays, `],
					[/* inline code block */ 'i', `a`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', ` with specified
 ranges [`],
					[/* inline code block */ 'i', `aFromIndex`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `atoIndex`],
					[/* text */ 't', `) and
 [`],
					[/* inline code block */ 'i', `bFromIndex`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `btoIndex`],
					[/* text */ 't', `) respectively, share a common
 prefix of length `],
					[/* inline code block */ 'i', `pl`],
					[/* text */ 't', ` if the following expression is true:
 `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `pl >= 0 &&
     pl < Math.min(aToIndex - aFromIndex, bToIndex - bFromIndex) &&
     Arrays.equals(a, aFromIndex, aFromIndex + pl, b, bFromIndex, bFromIndex + pl) &&
     a[aFromIndex + pl] != b[bFromIndex + pl]`]
				]],
				[/* text */ 't', `
 Note that a common prefix length of `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` indicates that the first
 elements from each array mismatch.

 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `Two non-`],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` arrays, `],
					[/* inline code block */ 'i', `a`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', ` with specified
 ranges [`],
					[/* inline code block */ 'i', `aFromIndex`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `atoIndex`],
					[/* text */ 't', `) and
 [`],
					[/* inline code block */ 'i', `bFromIndex`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `btoIndex`],
					[/* text */ 't', `) respectively, share a proper
 prefix if the following expression is true:
 `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `(aToIndex - aFromIndex) != (bToIndex - bFromIndex) &&
     Arrays.equals(a, 0, Math.min(aToIndex - aFromIndex, bToIndex - bFromIndex),
                   b, 0, Math.min(aToIndex - aFromIndex, bToIndex - bFromIndex))`]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the first array to be tested for a mismatch`]
				]],
				[/* parameter */ 'aFromIndex', [/* parameter description */
					[/* text */ 't', `the index (inclusive) of the first element in the
                   first array to be tested`]
				]],
				[/* parameter */ 'aToIndex', [/* parameter description */
					[/* text */ 't', `the index (exclusive) of the last element in the
                 first array to be tested`]
				]],
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the second array to be tested for a mismatch`]
				]],
				[/* parameter */ 'bFromIndex', [/* parameter description */
					[/* text */ 't', `the index (inclusive) of the first element in the
                   second array to be tested`]
				]],
				[/* parameter */ 'bToIndex', [/* parameter description */
					[/* text */ 't', `the index (exclusive) of the last element in the
                 second array to be tested`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `aFromIndex > aToIndex`],
					[/* text */ 't', ` or
         if `],
					[/* inline code block */ 'i', `bFromIndex > bToIndex`]
				]],
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `aFromIndex < 0 or aToIndex > a.length`],
					[/* text */ 't', ` or
         if `],
					[/* inline code block */ 'i', `bFromIndex < 0 or bToIndex > b.length`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if either array is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the relative index of the first mismatch between the two arrays
         over the specified ranges, otherwise `],
				[/* inline code block */ 'i', `-1`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'mismatch(double[],double[])', [
			[/* method description */
				[/* text */ 't', `Finds and returns the index of the first mismatch between two
 `],
				[/* inline code block */ 'i', `double`],
				[/* text */ 't', ` arrays, otherwise return -1 if no mismatch is found.  The
 index will be in the range of 0 (inclusive) up to the length (inclusive)
 of the smaller array.

 `],
				[/* block */ 'b', `If the two arrays share a common prefix then the returned index is the
 length of the common prefix and it follows that there is a mismatch
 between the two elements at that index within the respective arrays.
 If one array is a proper prefix of the other then the returned index is
 the length of the smaller array and it follows that the index is only
 valid for the larger array.
 Otherwise, there is no mismatch.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Two non-`],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` arrays, `],
					[/* inline code block */ 'i', `a`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', `, share a common
 prefix of length `],
					[/* inline code block */ 'i', `pl`],
					[/* text */ 't', ` if the following expression is true:
 `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `pl >= 0 &&
     pl < Math.min(a.length, b.length) &&
     Arrays.equals(a, 0, pl, b, 0, pl) &&
     Double.compare(a[pl], b[pl]) != 0`]
				]],
				[/* text */ 't', `
 Note that a common prefix length of `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` indicates that the first
 elements from each array mismatch.

 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `Two non-`],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` arrays, `],
					[/* inline code block */ 'i', `a`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', `, share a proper
 prefix if the following expression is true:
 `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `a.length != b.length &&
     Arrays.equals(a, 0, Math.min(a.length, b.length),
                   b, 0, Math.min(a.length, b.length))`]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the first array to be tested for a mismatch`]
				]],
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the second array to be tested for a mismatch`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if either array is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the index of the first mismatch between the two arrays,
         otherwise `],
				[/* inline code block */ 'i', `-1`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'mismatch(double[],int,int,double[],int,int)', [
			[/* method description */
				[/* text */ 't', `Finds and returns the relative index of the first mismatch between two
 `],
				[/* inline code block */ 'i', `double`],
				[/* text */ 't', ` arrays over the specified ranges, otherwise return -1 if
 no mismatch is found.  The index will be in the range of 0 (inclusive) up
 to the length (inclusive) of the smaller range.

 `],
				[/* block */ 'b', `If the two arrays, over the specified ranges, share a common prefix
 then the returned relative index is the length of the common prefix and
 it follows that there is a mismatch between the two elements at that
 relative index within the respective arrays.
 If one array is a proper prefix of the other, over the specified ranges,
 then the returned relative index is the length of the smaller range and
 it follows that the relative index is only valid for the array with the
 larger range.
 Otherwise, there is no mismatch.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Two non-`],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` arrays, `],
					[/* inline code block */ 'i', `a`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', ` with specified
 ranges [`],
					[/* inline code block */ 'i', `aFromIndex`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `atoIndex`],
					[/* text */ 't', `) and
 [`],
					[/* inline code block */ 'i', `bFromIndex`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `btoIndex`],
					[/* text */ 't', `) respectively, share a common
 prefix of length `],
					[/* inline code block */ 'i', `pl`],
					[/* text */ 't', ` if the following expression is true:
 `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `pl >= 0 &&
     pl < Math.min(aToIndex - aFromIndex, bToIndex - bFromIndex) &&
     Arrays.equals(a, aFromIndex, aFromIndex + pl, b, bFromIndex, bFromIndex + pl) &&
     Double.compare(a[aFromIndex + pl], b[bFromIndex + pl]) != 0`]
				]],
				[/* text */ 't', `
 Note that a common prefix length of `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` indicates that the first
 elements from each array mismatch.

 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `Two non-`],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` arrays, `],
					[/* inline code block */ 'i', `a`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', ` with specified
 ranges [`],
					[/* inline code block */ 'i', `aFromIndex`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `atoIndex`],
					[/* text */ 't', `) and
 [`],
					[/* inline code block */ 'i', `bFromIndex`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `btoIndex`],
					[/* text */ 't', `) respectively, share a proper
 prefix if the following expression is true:
 `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `(aToIndex - aFromIndex) != (bToIndex - bFromIndex) &&
     Arrays.equals(a, 0, Math.min(aToIndex - aFromIndex, bToIndex - bFromIndex),
                   b, 0, Math.min(aToIndex - aFromIndex, bToIndex - bFromIndex))`]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the first array to be tested for a mismatch`]
				]],
				[/* parameter */ 'aFromIndex', [/* parameter description */
					[/* text */ 't', `the index (inclusive) of the first element in the
                   first array to be tested`]
				]],
				[/* parameter */ 'aToIndex', [/* parameter description */
					[/* text */ 't', `the index (exclusive) of the last element in the
                 first array to be tested`]
				]],
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the second array to be tested for a mismatch`]
				]],
				[/* parameter */ 'bFromIndex', [/* parameter description */
					[/* text */ 't', `the index (inclusive) of the first element in the
                   second array to be tested`]
				]],
				[/* parameter */ 'bToIndex', [/* parameter description */
					[/* text */ 't', `the index (exclusive) of the last element in the
                 second array to be tested`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `aFromIndex > aToIndex`],
					[/* text */ 't', ` or
         if `],
					[/* inline code block */ 'i', `bFromIndex > bToIndex`]
				]],
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `aFromIndex < 0 or aToIndex > a.length`],
					[/* text */ 't', ` or
         if `],
					[/* inline code block */ 'i', `bFromIndex < 0 or bToIndex > b.length`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if either array is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the relative index of the first mismatch between the two arrays
         over the specified ranges, otherwise `],
				[/* inline code block */ 'i', `-1`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'mismatch(float[],float[])', [
			[/* method description */
				[/* text */ 't', `Finds and returns the index of the first mismatch between two `],
				[/* inline code block */ 'i', `float`],
				[/* text */ 't', `
 arrays, otherwise return -1 if no mismatch is found.  The index will be
 in the range of 0 (inclusive) up to the length (inclusive) of the smaller
 array.

 `],
				[/* block */ 'b', `If the two arrays share a common prefix then the returned index is the
 length of the common prefix and it follows that there is a mismatch
 between the two elements at that index within the respective arrays.
 If one array is a proper prefix of the other then the returned index is
 the length of the smaller array and it follows that the index is only
 valid for the larger array.
 Otherwise, there is no mismatch.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Two non-`],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` arrays, `],
					[/* inline code block */ 'i', `a`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', `, share a common
 prefix of length `],
					[/* inline code block */ 'i', `pl`],
					[/* text */ 't', ` if the following expression is true:
 `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `pl >= 0 &&
     pl < Math.min(a.length, b.length) &&
     Arrays.equals(a, 0, pl, b, 0, pl) &&
     Float.compare(a[pl], b[pl]) != 0`]
				]],
				[/* text */ 't', `
 Note that a common prefix length of `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` indicates that the first
 elements from each array mismatch.

 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `Two non-`],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` arrays, `],
					[/* inline code block */ 'i', `a`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', `, share a proper
 prefix if the following expression is true:
 `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `a.length != b.length &&
     Arrays.equals(a, 0, Math.min(a.length, b.length),
                   b, 0, Math.min(a.length, b.length))`]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the first array to be tested for a mismatch`]
				]],
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the second array to be tested for a mismatch`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if either array is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the index of the first mismatch between the two arrays,
         otherwise `],
				[/* inline code block */ 'i', `-1`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'mismatch(float[],int,int,float[],int,int)', [
			[/* method description */
				[/* text */ 't', `Finds and returns the relative index of the first mismatch between two
 `],
				[/* inline code block */ 'i', `float`],
				[/* text */ 't', ` arrays over the specified ranges, otherwise return -1 if no
 mismatch is found.  The index will be in the range of 0 (inclusive) up to
 the length (inclusive) of the smaller range.

 `],
				[/* block */ 'b', `If the two arrays, over the specified ranges, share a common prefix
 then the returned relative index is the length of the common prefix and
 it follows that there is a mismatch between the two elements at that
 relative index within the respective arrays.
 If one array is a proper prefix of the other, over the specified ranges,
 then the returned relative index is the length of the smaller range and
 it follows that the relative index is only valid for the array with the
 larger range.
 Otherwise, there is no mismatch.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Two non-`],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` arrays, `],
					[/* inline code block */ 'i', `a`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', ` with specified
 ranges [`],
					[/* inline code block */ 'i', `aFromIndex`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `atoIndex`],
					[/* text */ 't', `) and
 [`],
					[/* inline code block */ 'i', `bFromIndex`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `btoIndex`],
					[/* text */ 't', `) respectively, share a common
 prefix of length `],
					[/* inline code block */ 'i', `pl`],
					[/* text */ 't', ` if the following expression is true:
 `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `pl >= 0 &&
     pl < Math.min(aToIndex - aFromIndex, bToIndex - bFromIndex) &&
     Arrays.equals(a, aFromIndex, aFromIndex + pl, b, bFromIndex, bFromIndex + pl) &&
     Float.compare(a[aFromIndex + pl], b[bFromIndex + pl]) != 0`]
				]],
				[/* text */ 't', `
 Note that a common prefix length of `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` indicates that the first
 elements from each array mismatch.

 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `Two non-`],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` arrays, `],
					[/* inline code block */ 'i', `a`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', ` with specified
 ranges [`],
					[/* inline code block */ 'i', `aFromIndex`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `atoIndex`],
					[/* text */ 't', `) and
 [`],
					[/* inline code block */ 'i', `bFromIndex`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `btoIndex`],
					[/* text */ 't', `) respectively, share a proper
 prefix if the following expression is true:
 `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `(aToIndex - aFromIndex) != (bToIndex - bFromIndex) &&
     Arrays.equals(a, 0, Math.min(aToIndex - aFromIndex, bToIndex - bFromIndex),
                   b, 0, Math.min(aToIndex - aFromIndex, bToIndex - bFromIndex))`]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the first array to be tested for a mismatch`]
				]],
				[/* parameter */ 'aFromIndex', [/* parameter description */
					[/* text */ 't', `the index (inclusive) of the first element in the
                   first array to be tested`]
				]],
				[/* parameter */ 'aToIndex', [/* parameter description */
					[/* text */ 't', `the index (exclusive) of the last element in the
                 first array to be tested`]
				]],
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the second array to be tested for a mismatch`]
				]],
				[/* parameter */ 'bFromIndex', [/* parameter description */
					[/* text */ 't', `the index (inclusive) of the first element in the
                   second array to be tested`]
				]],
				[/* parameter */ 'bToIndex', [/* parameter description */
					[/* text */ 't', `the index (exclusive) of the last element in the
                 second array to be tested`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `aFromIndex > aToIndex`],
					[/* text */ 't', ` or
         if `],
					[/* inline code block */ 'i', `bFromIndex > bToIndex`]
				]],
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `aFromIndex < 0 or aToIndex > a.length`],
					[/* text */ 't', ` or
         if `],
					[/* inline code block */ 'i', `bFromIndex < 0 or bToIndex > b.length`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if either array is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the relative index of the first mismatch between the two arrays
         over the specified ranges, otherwise `],
				[/* inline code block */ 'i', `-1`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'mismatch(int[],int,int,int[],int,int)', [
			[/* method description */
				[/* text */ 't', `Finds and returns the relative index of the first mismatch between two
 `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` arrays over the specified ranges, otherwise return -1 if no
 mismatch is found.  The index will be in the range of 0 (inclusive) up to
 the length (inclusive) of the smaller range.

 `],
				[/* block */ 'b', `If the two arrays, over the specified ranges, share a common prefix
 then the returned relative index is the length of the common prefix and
 it follows that there is a mismatch between the two elements at that
 relative index within the respective arrays.
 If one array is a proper prefix of the other, over the specified ranges,
 then the returned relative index is the length of the smaller range and
 it follows that the relative index is only valid for the array with the
 larger range.
 Otherwise, there is no mismatch.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Two non-`],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` arrays, `],
					[/* inline code block */ 'i', `a`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', ` with specified
 ranges [`],
					[/* inline code block */ 'i', `aFromIndex`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `atoIndex`],
					[/* text */ 't', `) and
 [`],
					[/* inline code block */ 'i', `bFromIndex`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `btoIndex`],
					[/* text */ 't', `) respectively, share a common
 prefix of length `],
					[/* inline code block */ 'i', `pl`],
					[/* text */ 't', ` if the following expression is true:
 `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `pl >= 0 &&
     pl < Math.min(aToIndex - aFromIndex, bToIndex - bFromIndex) &&
     Arrays.equals(a, aFromIndex, aFromIndex + pl, b, bFromIndex, bFromIndex + pl) &&
     a[aFromIndex + pl] != b[bFromIndex + pl]`]
				]],
				[/* text */ 't', `
 Note that a common prefix length of `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` indicates that the first
 elements from each array mismatch.

 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `Two non-`],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` arrays, `],
					[/* inline code block */ 'i', `a`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', ` with specified
 ranges [`],
					[/* inline code block */ 'i', `aFromIndex`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `atoIndex`],
					[/* text */ 't', `) and
 [`],
					[/* inline code block */ 'i', `bFromIndex`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `btoIndex`],
					[/* text */ 't', `) respectively, share a proper
 prefix if the following expression is true:
 `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `(aToIndex - aFromIndex) != (bToIndex - bFromIndex) &&
     Arrays.equals(a, 0, Math.min(aToIndex - aFromIndex, bToIndex - bFromIndex),
                   b, 0, Math.min(aToIndex - aFromIndex, bToIndex - bFromIndex))`]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the first array to be tested for a mismatch`]
				]],
				[/* parameter */ 'aFromIndex', [/* parameter description */
					[/* text */ 't', `the index (inclusive) of the first element in the
                   first array to be tested`]
				]],
				[/* parameter */ 'aToIndex', [/* parameter description */
					[/* text */ 't', `the index (exclusive) of the last element in the
                 first array to be tested`]
				]],
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the second array to be tested for a mismatch`]
				]],
				[/* parameter */ 'bFromIndex', [/* parameter description */
					[/* text */ 't', `the index (inclusive) of the first element in the
                   second array to be tested`]
				]],
				[/* parameter */ 'bToIndex', [/* parameter description */
					[/* text */ 't', `the index (exclusive) of the last element in the
                 second array to be tested`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `aFromIndex > aToIndex`],
					[/* text */ 't', ` or
         if `],
					[/* inline code block */ 'i', `bFromIndex > bToIndex`]
				]],
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `aFromIndex < 0 or aToIndex > a.length`],
					[/* text */ 't', ` or
         if `],
					[/* inline code block */ 'i', `bFromIndex < 0 or bToIndex > b.length`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if either array is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the relative index of the first mismatch between the two arrays
         over the specified ranges, otherwise `],
				[/* inline code block */ 'i', `-1`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'mismatch(int[],int[])', [
			[/* method description */
				[/* text */ 't', `Finds and returns the index of the first mismatch between two `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', `
 arrays, otherwise return -1 if no mismatch is found.  The index will be
 in the range of 0 (inclusive) up to the length (inclusive) of the smaller
 array.

 `],
				[/* block */ 'b', `If the two arrays share a common prefix then the returned index is the
 length of the common prefix and it follows that there is a mismatch
 between the two elements at that index within the respective arrays.
 If one array is a proper prefix of the other then the returned index is
 the length of the smaller array and it follows that the index is only
 valid for the larger array.
 Otherwise, there is no mismatch.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Two non-`],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` arrays, `],
					[/* inline code block */ 'i', `a`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', `, share a common
 prefix of length `],
					[/* inline code block */ 'i', `pl`],
					[/* text */ 't', ` if the following expression is true:
 `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `pl >= 0 &&
     pl < Math.min(a.length, b.length) &&
     Arrays.equals(a, 0, pl, b, 0, pl) &&
     a[pl] != b[pl]`]
				]],
				[/* text */ 't', `
 Note that a common prefix length of `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` indicates that the first
 elements from each array mismatch.

 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `Two non-`],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` arrays, `],
					[/* inline code block */ 'i', `a`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', `, share a proper
 prefix if the following expression is true:
 `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `a.length != b.length &&
     Arrays.equals(a, 0, Math.min(a.length, b.length),
                   b, 0, Math.min(a.length, b.length))`]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the first array to be tested for a mismatch`]
				]],
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the second array to be tested for a mismatch`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if either array is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the index of the first mismatch between the two arrays,
         otherwise `],
				[/* inline code block */ 'i', `-1`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'mismatch(java.lang.Object[],int,int,java.lang.Object[],int,int)', [
			[/* method description */
				[/* text */ 't', `Finds and returns the relative index of the first mismatch between two
 `],
				[/* inline code block */ 'i', `Object`],
				[/* text */ 't', ` arrays over the specified ranges, otherwise return -1 if
 no mismatch is found.  The index will be in the range of 0 (inclusive) up
 to the length (inclusive) of the smaller range.

 `],
				[/* block */ 'b', `If the two arrays, over the specified ranges, share a common prefix
 then the returned relative index is the length of the common prefix and
 it follows that there is a mismatch between the two elements at that
 relative index within the respective arrays.
 If one array is a proper prefix of the other, over the specified ranges,
 then the returned relative index is the length of the smaller range and
 it follows that the relative index is only valid for the array with the
 larger range.
 Otherwise, there is no mismatch.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Two non-`],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` arrays, `],
					[/* inline code block */ 'i', `a`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', ` with specified
 ranges [`],
					[/* inline code block */ 'i', `aFromIndex`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `atoIndex`],
					[/* text */ 't', `) and
 [`],
					[/* inline code block */ 'i', `bFromIndex`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `btoIndex`],
					[/* text */ 't', `) respectively, share a common
 prefix of length `],
					[/* inline code block */ 'i', `pl`],
					[/* text */ 't', ` if the following expression is true:
 `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `pl >= 0 &&
     pl < Math.min(aToIndex - aFromIndex, bToIndex - bFromIndex) &&
     Arrays.equals(a, aFromIndex, aFromIndex + pl, b, bFromIndex, bFromIndex + pl) &&
     !Objects.equals(a[aFromIndex + pl], b[bFromIndex + pl])`]
				]],
				[/* text */ 't', `
 Note that a common prefix length of `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` indicates that the first
 elements from each array mismatch.

 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `Two non-`],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` arrays, `],
					[/* inline code block */ 'i', `a`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', ` with specified
 ranges [`],
					[/* inline code block */ 'i', `aFromIndex`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `atoIndex`],
					[/* text */ 't', `) and
 [`],
					[/* inline code block */ 'i', `bFromIndex`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `btoIndex`],
					[/* text */ 't', `) respectively, share a proper
 prefix if the following expression is true:
 `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `(aToIndex - aFromIndex) != (bToIndex - bFromIndex) &&
     Arrays.equals(a, 0, Math.min(aToIndex - aFromIndex, bToIndex - bFromIndex),
                   b, 0, Math.min(aToIndex - aFromIndex, bToIndex - bFromIndex))`]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the first array to be tested for a mismatch`]
				]],
				[/* parameter */ 'aFromIndex', [/* parameter description */
					[/* text */ 't', `the index (inclusive) of the first element in the
                   first array to be tested`]
				]],
				[/* parameter */ 'aToIndex', [/* parameter description */
					[/* text */ 't', `the index (exclusive) of the last element in the
                 first array to be tested`]
				]],
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the second array to be tested for a mismatch`]
				]],
				[/* parameter */ 'bFromIndex', [/* parameter description */
					[/* text */ 't', `the index (inclusive) of the first element in the
                   second array to be tested`]
				]],
				[/* parameter */ 'bToIndex', [/* parameter description */
					[/* text */ 't', `the index (exclusive) of the last element in the
                 second array to be tested`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `aFromIndex > aToIndex`],
					[/* text */ 't', ` or
         if `],
					[/* inline code block */ 'i', `bFromIndex > bToIndex`]
				]],
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `aFromIndex < 0 or aToIndex > a.length`],
					[/* text */ 't', ` or
         if `],
					[/* inline code block */ 'i', `bFromIndex < 0 or bToIndex > b.length`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if either array is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the relative index of the first mismatch between the two arrays
         over the specified ranges, otherwise `],
				[/* inline code block */ 'i', `-1`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'mismatch(java.lang.Object[],java.lang.Object[])', [
			[/* method description */
				[/* text */ 't', `Finds and returns the index of the first mismatch between two
 `],
				[/* inline code block */ 'i', `Object`],
				[/* text */ 't', ` arrays, otherwise return -1 if no mismatch is found.  The
 index will be in the range of 0 (inclusive) up to the length (inclusive)
 of the smaller array.

 `],
				[/* block */ 'b', `If the two arrays share a common prefix then the returned index is the
 length of the common prefix and it follows that there is a mismatch
 between the two elements at that index within the respective arrays.
 If one array is a proper prefix of the other then the returned index is
 the length of the smaller array and it follows that the index is only
 valid for the larger array.
 Otherwise, there is no mismatch.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Two non-`],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` arrays, `],
					[/* inline code block */ 'i', `a`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', `, share a common
 prefix of length `],
					[/* inline code block */ 'i', `pl`],
					[/* text */ 't', ` if the following expression is true:
 `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `pl >= 0 &&
     pl < Math.min(a.length, b.length) &&
     Arrays.equals(a, 0, pl, b, 0, pl) &&
     !Objects.equals(a[pl], b[pl])`]
				]],
				[/* text */ 't', `
 Note that a common prefix length of `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` indicates that the first
 elements from each array mismatch.

 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `Two non-`],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` arrays, `],
					[/* inline code block */ 'i', `a`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', `, share a proper
 prefix if the following expression is true:
 `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `a.length != b.length &&
     Arrays.equals(a, 0, Math.min(a.length, b.length),
                   b, 0, Math.min(a.length, b.length))`]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the first array to be tested for a mismatch`]
				]],
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the second array to be tested for a mismatch`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if either array is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the index of the first mismatch between the two arrays,
         otherwise `],
				[/* inline code block */ 'i', `-1`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'mismatch(long[],int,int,long[],int,int)', [
			[/* method description */
				[/* text */ 't', `Finds and returns the relative index of the first mismatch between two
 `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` arrays over the specified ranges, otherwise return -1 if no
 mismatch is found.  The index will be in the range of 0 (inclusive) up to
 the length (inclusive) of the smaller range.

 `],
				[/* block */ 'b', `If the two arrays, over the specified ranges, share a common prefix
 then the returned relative index is the length of the common prefix and
 it follows that there is a mismatch between the two elements at that
 relative index within the respective arrays.
 If one array is a proper prefix of the other, over the specified ranges,
 then the returned relative index is the length of the smaller range and
 it follows that the relative index is only valid for the array with the
 larger range.
 Otherwise, there is no mismatch.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Two non-`],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` arrays, `],
					[/* inline code block */ 'i', `a`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', ` with specified
 ranges [`],
					[/* inline code block */ 'i', `aFromIndex`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `atoIndex`],
					[/* text */ 't', `) and
 [`],
					[/* inline code block */ 'i', `bFromIndex`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `btoIndex`],
					[/* text */ 't', `) respectively, share a common
 prefix of length `],
					[/* inline code block */ 'i', `pl`],
					[/* text */ 't', ` if the following expression is true:
 `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `pl >= 0 &&
     pl < Math.min(aToIndex - aFromIndex, bToIndex - bFromIndex) &&
     Arrays.equals(a, aFromIndex, aFromIndex + pl, b, bFromIndex, bFromIndex + pl) &&
     a[aFromIndex + pl] != b[bFromIndex + pl]`]
				]],
				[/* text */ 't', `
 Note that a common prefix length of `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` indicates that the first
 elements from each array mismatch.

 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `Two non-`],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` arrays, `],
					[/* inline code block */ 'i', `a`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', ` with specified
 ranges [`],
					[/* inline code block */ 'i', `aFromIndex`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `atoIndex`],
					[/* text */ 't', `) and
 [`],
					[/* inline code block */ 'i', `bFromIndex`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `btoIndex`],
					[/* text */ 't', `) respectively, share a proper
 prefix if the following expression is true:
 `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `(aToIndex - aFromIndex) != (bToIndex - bFromIndex) &&
     Arrays.equals(a, 0, Math.min(aToIndex - aFromIndex, bToIndex - bFromIndex),
                   b, 0, Math.min(aToIndex - aFromIndex, bToIndex - bFromIndex))`]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the first array to be tested for a mismatch`]
				]],
				[/* parameter */ 'aFromIndex', [/* parameter description */
					[/* text */ 't', `the index (inclusive) of the first element in the
                   first array to be tested`]
				]],
				[/* parameter */ 'aToIndex', [/* parameter description */
					[/* text */ 't', `the index (exclusive) of the last element in the
                 first array to be tested`]
				]],
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the second array to be tested for a mismatch`]
				]],
				[/* parameter */ 'bFromIndex', [/* parameter description */
					[/* text */ 't', `the index (inclusive) of the first element in the
                   second array to be tested`]
				]],
				[/* parameter */ 'bToIndex', [/* parameter description */
					[/* text */ 't', `the index (exclusive) of the last element in the
                 second array to be tested`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `aFromIndex > aToIndex`],
					[/* text */ 't', ` or
         if `],
					[/* inline code block */ 'i', `bFromIndex > bToIndex`]
				]],
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `aFromIndex < 0 or aToIndex > a.length`],
					[/* text */ 't', ` or
         if `],
					[/* inline code block */ 'i', `bFromIndex < 0 or bToIndex > b.length`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if either array is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the relative index of the first mismatch between the two arrays
         over the specified ranges, otherwise `],
				[/* inline code block */ 'i', `-1`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'mismatch(long[],long[])', [
			[/* method description */
				[/* text */ 't', `Finds and returns the index of the first mismatch between two `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', `
 arrays, otherwise return -1 if no mismatch is found.  The index will be
 in the range of 0 (inclusive) up to the length (inclusive) of the smaller
 array.

 `],
				[/* block */ 'b', `If the two arrays share a common prefix then the returned index is the
 length of the common prefix and it follows that there is a mismatch
 between the two elements at that index within the respective arrays.
 If one array is a proper prefix of the other then the returned index is
 the length of the smaller array and it follows that the index is only
 valid for the larger array.
 Otherwise, there is no mismatch.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Two non-`],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` arrays, `],
					[/* inline code block */ 'i', `a`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', `, share a common
 prefix of length `],
					[/* inline code block */ 'i', `pl`],
					[/* text */ 't', ` if the following expression is true:
 `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `pl >= 0 &&
     pl < Math.min(a.length, b.length) &&
     Arrays.equals(a, 0, pl, b, 0, pl) &&
     a[pl] != b[pl]`]
				]],
				[/* text */ 't', `
 Note that a common prefix length of `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` indicates that the first
 elements from each array mismatch.

 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `Two non-`],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` arrays, `],
					[/* inline code block */ 'i', `a`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', `, share a proper
 prefix if the following expression is true:
 `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `a.length != b.length &&
     Arrays.equals(a, 0, Math.min(a.length, b.length),
                   b, 0, Math.min(a.length, b.length))`]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the first array to be tested for a mismatch`]
				]],
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the second array to be tested for a mismatch`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if either array is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the index of the first mismatch between the two arrays,
         otherwise `],
				[/* inline code block */ 'i', `-1`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'mismatch(short[],int,int,short[],int,int)', [
			[/* method description */
				[/* text */ 't', `Finds and returns the relative index of the first mismatch between two
 `],
				[/* inline code block */ 'i', `short`],
				[/* text */ 't', ` arrays over the specified ranges, otherwise return -1 if no
 mismatch is found.  The index will be in the range of 0 (inclusive) up to
 the length (inclusive) of the smaller range.

 `],
				[/* block */ 'b', `If the two arrays, over the specified ranges, share a common prefix
 then the returned relative index is the length of the common prefix and
 it follows that there is a mismatch between the two elements at that
 relative index within the respective arrays.
 If one array is a proper prefix of the other, over the specified ranges,
 then the returned relative index is the length of the smaller range and
 it follows that the relative index is only valid for the array with the
 larger range.
 Otherwise, there is no mismatch.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Two non-`],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` arrays, `],
					[/* inline code block */ 'i', `a`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', ` with specified
 ranges [`],
					[/* inline code block */ 'i', `aFromIndex`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `atoIndex`],
					[/* text */ 't', `) and
 [`],
					[/* inline code block */ 'i', `bFromIndex`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `btoIndex`],
					[/* text */ 't', `) respectively, share a common
 prefix of length `],
					[/* inline code block */ 'i', `pl`],
					[/* text */ 't', ` if the following expression is true:
 `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `pl >= 0 &&
     pl < Math.min(aToIndex - aFromIndex, bToIndex - bFromIndex) &&
     Arrays.equals(a, aFromIndex, aFromIndex + pl, b, bFromIndex, bFromIndex + pl) &&
     a[aFromIndex + pl] != b[bFromIndex + pl]`]
				]],
				[/* text */ 't', `
 Note that a common prefix length of `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` indicates that the first
 elements from each array mismatch.

 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `Two non-`],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` arrays, `],
					[/* inline code block */ 'i', `a`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', ` with specified
 ranges [`],
					[/* inline code block */ 'i', `aFromIndex`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `atoIndex`],
					[/* text */ 't', `) and
 [`],
					[/* inline code block */ 'i', `bFromIndex`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `btoIndex`],
					[/* text */ 't', `) respectively, share a proper
 prefix if the following expression is true:
 `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `(aToIndex - aFromIndex) != (bToIndex - bFromIndex) &&
     Arrays.equals(a, 0, Math.min(aToIndex - aFromIndex, bToIndex - bFromIndex),
                   b, 0, Math.min(aToIndex - aFromIndex, bToIndex - bFromIndex))`]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the first array to be tested for a mismatch`]
				]],
				[/* parameter */ 'aFromIndex', [/* parameter description */
					[/* text */ 't', `the index (inclusive) of the first element in the
                   first array to be tested`]
				]],
				[/* parameter */ 'aToIndex', [/* parameter description */
					[/* text */ 't', `the index (exclusive) of the last element in the
                 first array to be tested`]
				]],
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the second array to be tested for a mismatch`]
				]],
				[/* parameter */ 'bFromIndex', [/* parameter description */
					[/* text */ 't', `the index (inclusive) of the first element in the
                   second array to be tested`]
				]],
				[/* parameter */ 'bToIndex', [/* parameter description */
					[/* text */ 't', `the index (exclusive) of the last element in the
                 second array to be tested`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `aFromIndex > aToIndex`],
					[/* text */ 't', ` or
         if `],
					[/* inline code block */ 'i', `bFromIndex > bToIndex`]
				]],
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `aFromIndex < 0 or aToIndex > a.length`],
					[/* text */ 't', ` or
         if `],
					[/* inline code block */ 'i', `bFromIndex < 0 or bToIndex > b.length`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if either array is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the relative index of the first mismatch between the two arrays
         over the specified ranges, otherwise `],
				[/* inline code block */ 'i', `-1`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'mismatch(short[],short[])', [
			[/* method description */
				[/* text */ 't', `Finds and returns the index of the first mismatch between two `],
				[/* inline code block */ 'i', `short`],
				[/* text */ 't', `
 arrays, otherwise return -1 if no mismatch is found.  The index will be
 in the range of 0 (inclusive) up to the length (inclusive) of the smaller
 array.

 `],
				[/* block */ 'b', `If the two arrays share a common prefix then the returned index is the
 length of the common prefix and it follows that there is a mismatch
 between the two elements at that index within the respective arrays.
 If one array is a proper prefix of the other then the returned index is
 the length of the smaller array and it follows that the index is only
 valid for the larger array.
 Otherwise, there is no mismatch.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Two non-`],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` arrays, `],
					[/* inline code block */ 'i', `a`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', `, share a common
 prefix of length `],
					[/* inline code block */ 'i', `pl`],
					[/* text */ 't', ` if the following expression is true:
 `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `pl >= 0 &&
     pl < Math.min(a.length, b.length) &&
     Arrays.equals(a, 0, pl, b, 0, pl) &&
     a[pl] != b[pl]`]
				]],
				[/* text */ 't', `
 Note that a common prefix length of `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` indicates that the first
 elements from each array mismatch.

 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `Two non-`],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` arrays, `],
					[/* inline code block */ 'i', `a`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', `, share a proper
 prefix if the following expression is true:
 `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `a.length != b.length &&
     Arrays.equals(a, 0, Math.min(a.length, b.length),
                   b, 0, Math.min(a.length, b.length))`]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the first array to be tested for a mismatch`]
				]],
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the second array to be tested for a mismatch`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if either array is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the index of the first mismatch between the two arrays,
         otherwise `],
				[/* inline code block */ 'i', `-1`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'copyOf(int[],int)', [
			[/* method description */
				[/* text */ 't', `Copies the specified array, truncating or padding with zeros (if necessary)
 so the copy has the specified length.  For all indices that are
 valid in both the original array and the copy, the two arrays will
 contain identical values.  For any indices that are valid in the
 copy but not the original, the copy will contain `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', `.
 Such indices will exist if and only if the specified length
 is greater than that of the original array.`]
			],
			[/* parameters */
				[/* parameter */ 'original', [/* parameter description */
					[/* text */ 't', `the array to be copied`]
				]],
				[/* parameter */ 'newLength', [/* parameter description */
					[/* text */ 't', `the length of the copy to be returned`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NegativeArraySizeException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `newLength`],
					[/* text */ 't', ` is negative`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `original`],
					[/* text */ 't', ` is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a copy of the original array, truncated or padded with zeros
     to obtain the specified length`]
			]
		]],
		[/* method */ 'copyOfRange(int[],int,int)', [
			[/* method description */
				[/* text */ 't', `Copies the specified range of the specified array into a new array.
 The initial index of the range (`],
				[/* inline code block */ 'i', `from`],
				[/* text */ 't', `) must lie between zero
 and `],
				[/* inline code block */ 'i', `original.length`],
				[/* text */ 't', `, inclusive.  The value at
 `],
				[/* inline code block */ 'i', `original[from]`],
				[/* text */ 't', ` is placed into the initial element of the copy
 (unless `],
				[/* inline code block */ 'i', `from == original.length`],
				[/* text */ 't', ` or `],
				[/* inline code block */ 'i', `from == to`],
				[/* text */ 't', `).
 Values from subsequent elements in the original array are placed into
 subsequent elements in the copy.  The final index of the range
 (`],
				[/* inline code block */ 'i', `to`],
				[/* text */ 't', `), which must be greater than or equal to `],
				[/* inline code block */ 'i', `from`],
				[/* text */ 't', `,
 may be greater than `],
				[/* inline code block */ 'i', `original.length`],
				[/* text */ 't', `, in which case
 `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` is placed in all elements of the copy whose index is
 greater than or equal to `],
				[/* inline code block */ 'i', `original.length - from`],
				[/* text */ 't', `.  The length
 of the returned array will be `],
				[/* inline code block */ 'i', `to - from`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'original', [/* parameter description */
					[/* text */ 't', `the array from which a range is to be copied`]
				]],
				[/* parameter */ 'from', [/* parameter description */
					[/* text */ 't', `the initial index of the range to be copied, inclusive`]
				]],
				[/* parameter */ 'to', [/* parameter description */
					[/* text */ 't', `the final index of the range to be copied, exclusive.
     (This index may lie outside the array.)`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `from < 0`],
					[/* text */ 't', `
     or `],
					[/* inline code block */ 'i', `from > original.length`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `from > to`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `original`],
					[/* text */ 't', ` is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a new array containing the specified range from the original array,
     truncated or padded with zeros to obtain the required length`]
			]
		]],
		[/* method */ 'deepToString(java.lang.Object[])', [
			[/* method description */
				[/* text */ 't', `Returns a string representation of the "deep contents" of the specified
 array.  If the array contains other arrays as elements, the string
 representation contains their contents and so on.  This method is
 designed for converting multidimensional arrays to strings.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The string representation consists of a list of the array's
 elements, enclosed in square brackets (`],
					[/* inline code block */ 'i', `"[]"`],
					[/* text */ 't', `).  Adjacent
 elements are separated by the characters `],
					[/* inline code block */ 'i', `", "`],
					[/* text */ 't', ` (a comma
 followed by a space).  Elements are converted to strings as by
 `],
					[/* inline code block */ 'i', `String.valueOf(Object)`],
					[/* text */ 't', `, unless they are themselves
 arrays.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `If an element `],
					[/* inline code block */ 'i', `e`],
					[/* text */ 't', ` is an array of a primitive type, it is
 converted to a string as by invoking the appropriate overloading of
 `],
					[/* inline code block */ 'i', `Arrays.toString(e)`],
					[/* text */ 't', `.  If an element `],
					[/* inline code block */ 'i', `e`],
					[/* text */ 't', ` is an array of a
 reference type, it is converted to a string as by invoking
 this method recursively.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `To avoid infinite recursion, if the specified array contains itself
 as an element, or contains an indirect reference to itself through one
 or more levels of arrays, the self-reference is converted to the string
 `],
					[/* inline code block */ 'i', `"[...]"`],
					[/* text */ 't', `.  For example, an array containing only a reference
 to itself would be rendered as `],
					[/* inline code block */ 'i', `"[[...]]"`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `This method returns `],
					[/* inline code block */ 'i', `"null"`],
					[/* text */ 't', ` if the specified array
 is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the array whose string representation to return`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a string representation of `],
				[/* inline code block */ 'i', `a`]
			]
		]],
		[/* method */ 'toString(boolean[])', [
			[/* method description */
				[/* text */ 't', `Returns a string representation of the contents of the specified array.
 The string representation consists of a list of the array's elements,
 enclosed in square brackets (`],
				[/* inline code block */ 'i', `"[]"`],
				[/* text */ 't', `).  Adjacent elements are
 separated by the characters `],
				[/* inline code block */ 'i', `", "`],
				[/* text */ 't', ` (a comma followed by a
 space).  Elements are converted to strings as by
 `],
				[/* inline code block */ 'i', `String.valueOf(boolean)`],
				[/* text */ 't', `.  Returns `],
				[/* inline code block */ 'i', `"null"`],
				[/* text */ 't', ` if
 `],
				[/* inline code block */ 'i', `a`],
				[/* text */ 't', ` is `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the array whose string representation to return`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a string representation of `],
				[/* inline code block */ 'i', `a`]
			]
		]],
		[/* method */ 'toString(byte[])', [
			[/* method description */
				[/* text */ 't', `Returns a string representation of the contents of the specified array.
 The string representation consists of a list of the array's elements,
 enclosed in square brackets (`],
				[/* inline code block */ 'i', `"[]"`],
				[/* text */ 't', `).  Adjacent elements
 are separated by the characters `],
				[/* inline code block */ 'i', `", "`],
				[/* text */ 't', ` (a comma followed
 by a space).  Elements are converted to strings as by
 `],
				[/* inline code block */ 'i', `String.valueOf(byte)`],
				[/* text */ 't', `.  Returns `],
				[/* inline code block */ 'i', `"null"`],
				[/* text */ 't', ` if
 `],
				[/* inline code block */ 'i', `a`],
				[/* text */ 't', ` is `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the array whose string representation to return`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a string representation of `],
				[/* inline code block */ 'i', `a`]
			]
		]],
		[/* method */ 'toString(char[])', [
			[/* method description */
				[/* text */ 't', `Returns a string representation of the contents of the specified array.
 The string representation consists of a list of the array's elements,
 enclosed in square brackets (`],
				[/* inline code block */ 'i', `"[]"`],
				[/* text */ 't', `).  Adjacent elements are
 separated by the characters `],
				[/* inline code block */ 'i', `", "`],
				[/* text */ 't', ` (a comma followed by a
 space).  Elements are converted to strings as by
 `],
				[/* inline code block */ 'i', `String.valueOf(char)`],
				[/* text */ 't', `.  Returns `],
				[/* inline code block */ 'i', `"null"`],
				[/* text */ 't', ` if `],
				[/* inline code block */ 'i', `a`],
				[/* text */ 't', `
 is `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the array whose string representation to return`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a string representation of `],
				[/* inline code block */ 'i', `a`]
			]
		]],
		[/* method */ 'toString(double[])', [
			[/* method description */
				[/* text */ 't', `Returns a string representation of the contents of the specified array.
 The string representation consists of a list of the array's elements,
 enclosed in square brackets (`],
				[/* inline code block */ 'i', `"[]"`],
				[/* text */ 't', `).  Adjacent elements are
 separated by the characters `],
				[/* inline code block */ 'i', `", "`],
				[/* text */ 't', ` (a comma followed by a
 space).  Elements are converted to strings as by
 `],
				[/* inline code block */ 'i', `String.valueOf(double)`],
				[/* text */ 't', `.  Returns `],
				[/* inline code block */ 'i', `"null"`],
				[/* text */ 't', ` if `],
				[/* inline code block */ 'i', `a`],
				[/* text */ 't', `
 is `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the array whose string representation to return`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a string representation of `],
				[/* inline code block */ 'i', `a`]
			]
		]],
		[/* method */ 'toString(float[])', [
			[/* method description */
				[/* text */ 't', `Returns a string representation of the contents of the specified array.
 The string representation consists of a list of the array's elements,
 enclosed in square brackets (`],
				[/* inline code block */ 'i', `"[]"`],
				[/* text */ 't', `).  Adjacent elements are
 separated by the characters `],
				[/* inline code block */ 'i', `", "`],
				[/* text */ 't', ` (a comma followed by a
 space).  Elements are converted to strings as by
 `],
				[/* inline code block */ 'i', `String.valueOf(float)`],
				[/* text */ 't', `.  Returns `],
				[/* inline code block */ 'i', `"null"`],
				[/* text */ 't', ` if `],
				[/* inline code block */ 'i', `a`],
				[/* text */ 't', `
 is `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the array whose string representation to return`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a string representation of `],
				[/* inline code block */ 'i', `a`]
			]
		]],
		[/* method */ 'toString(int[])', [
			[/* method description */
				[/* text */ 't', `Returns a string representation of the contents of the specified array.
 The string representation consists of a list of the array's elements,
 enclosed in square brackets (`],
				[/* inline code block */ 'i', `"[]"`],
				[/* text */ 't', `).  Adjacent elements are
 separated by the characters `],
				[/* inline code block */ 'i', `", "`],
				[/* text */ 't', ` (a comma followed by a
 space).  Elements are converted to strings as by
 `],
				[/* inline code block */ 'i', `String.valueOf(int)`],
				[/* text */ 't', `.  Returns `],
				[/* inline code block */ 'i', `"null"`],
				[/* text */ 't', ` if `],
				[/* inline code block */ 'i', `a`],
				[/* text */ 't', ` is
 `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the array whose string representation to return`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a string representation of `],
				[/* inline code block */ 'i', `a`]
			]
		]],
		[/* method */ 'toString(java.lang.Object[])', [
			[/* method description */
				[/* text */ 't', `Returns a string representation of the contents of the specified array.
 If the array contains other arrays as elements, they are converted to
 strings by the `],
				[/* reference */ 'r', `java.lang.Object#toString()`, `Object.toString()`],
				[/* text */ 't', ` method inherited from
 `],
				[/* inline code block */ 'i', `Object`],
				[/* text */ 't', `, which describes their `],
				[/* text */ 't', `identities`],
				[/* text */ 't', ` rather than
 their contents.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The value returned by this method is equal to the value that would
 be returned by `],
					[/* inline code block */ 'i', `Arrays.asList(a).toString()`],
					[/* text */ 't', `, unless `],
					[/* inline code block */ 'i', `a`],
					[/* text */ 't', `
 is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `, in which case `],
					[/* inline code block */ 'i', `"null"`],
					[/* text */ 't', ` is returned.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the array whose string representation to return`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a string representation of `],
				[/* inline code block */ 'i', `a`]
			]
		]],
		[/* method */ 'toString(long[])', [
			[/* method description */
				[/* text */ 't', `Returns a string representation of the contents of the specified array.
 The string representation consists of a list of the array's elements,
 enclosed in square brackets (`],
				[/* inline code block */ 'i', `"[]"`],
				[/* text */ 't', `).  Adjacent elements are
 separated by the characters `],
				[/* inline code block */ 'i', `", "`],
				[/* text */ 't', ` (a comma followed by a
 space).  Elements are converted to strings as by
 `],
				[/* inline code block */ 'i', `String.valueOf(long)`],
				[/* text */ 't', `.  Returns `],
				[/* inline code block */ 'i', `"null"`],
				[/* text */ 't', ` if `],
				[/* inline code block */ 'i', `a`],
				[/* text */ 't', `
 is `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the array whose string representation to return`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a string representation of `],
				[/* inline code block */ 'i', `a`]
			]
		]],
		[/* method */ 'toString(short[])', [
			[/* method description */
				[/* text */ 't', `Returns a string representation of the contents of the specified array.
 The string representation consists of a list of the array's elements,
 enclosed in square brackets (`],
				[/* inline code block */ 'i', `"[]"`],
				[/* text */ 't', `).  Adjacent elements are
 separated by the characters `],
				[/* inline code block */ 'i', `", "`],
				[/* text */ 't', ` (a comma followed by a
 space).  Elements are converted to strings as by
 `],
				[/* inline code block */ 'i', `String.valueOf(short)`],
				[/* text */ 't', `.  Returns `],
				[/* inline code block */ 'i', `"null"`],
				[/* text */ 't', ` if `],
				[/* inline code block */ 'i', `a`],
				[/* text */ 't', `
 is `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the array whose string representation to return`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a string representation of `],
				[/* inline code block */ 'i', `a`]
			]
		]],
		[/* method */ 'spliterator(double[])', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* reference */ 'r', `java.util.Spliterator.OfDouble`, `Spliterator.OfDouble`],
				[/* text */ 't', ` covering all of the specified
 array.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The spliterator reports `],
					[/* reference */ 'r', `java.util.Spliterator#SIZED`, `Spliterator.SIZED`],
					[/* text */ 't', `,
 `],
					[/* reference */ 'r', `java.util.Spliterator#SUBSIZED`, `Spliterator.SUBSIZED`],
					[/* text */ 't', `, `],
					[/* reference */ 'r', `java.util.Spliterator#ORDERED`, `Spliterator.ORDERED`],
					[/* text */ 't', `, and
 `],
					[/* reference */ 'r', `java.util.Spliterator#IMMUTABLE`, `Spliterator.IMMUTABLE`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'array', [/* parameter description */
					[/* text */ 't', `the array, assumed to be unmodified during use`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a spliterator for the array elements`]
			]
		]],
		[/* method */ 'spliterator(double[],int,int)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* reference */ 'r', `java.util.Spliterator.OfDouble`, `Spliterator.OfDouble`],
				[/* text */ 't', ` covering the specified range of
 the specified array.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The spliterator reports `],
					[/* reference */ 'r', `java.util.Spliterator#SIZED`, `Spliterator.SIZED`],
					[/* text */ 't', `,
 `],
					[/* reference */ 'r', `java.util.Spliterator#SUBSIZED`, `Spliterator.SUBSIZED`],
					[/* text */ 't', `, `],
					[/* reference */ 'r', `java.util.Spliterator#ORDERED`, `Spliterator.ORDERED`],
					[/* text */ 't', `, and
 `],
					[/* reference */ 'r', `java.util.Spliterator#IMMUTABLE`, `Spliterator.IMMUTABLE`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'array', [/* parameter description */
					[/* text */ 't', `the array, assumed to be unmodified during use`]
				]],
				[/* parameter */ 'startInclusive', [/* parameter description */
					[/* text */ 't', `the first index to cover, inclusive`]
				]],
				[/* parameter */ 'endExclusive', [/* parameter description */
					[/* text */ 't', `index immediately past the last index to cover`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `startInclusive`],
					[/* text */ 't', ` is
         negative, `],
					[/* inline code block */ 'i', `endExclusive`],
					[/* text */ 't', ` is less than
         `],
					[/* inline code block */ 'i', `startInclusive`],
					[/* text */ 't', `, or `],
					[/* inline code block */ 'i', `endExclusive`],
					[/* text */ 't', ` is greater than
         the array size`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a spliterator for the array elements`]
			]
		]],
		[/* method */ 'spliterator(int[])', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* reference */ 'r', `java.util.Spliterator.OfInt`, `Spliterator.OfInt`],
				[/* text */ 't', ` covering all of the specified array.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The spliterator reports `],
					[/* reference */ 'r', `java.util.Spliterator#SIZED`, `Spliterator.SIZED`],
					[/* text */ 't', `,
 `],
					[/* reference */ 'r', `java.util.Spliterator#SUBSIZED`, `Spliterator.SUBSIZED`],
					[/* text */ 't', `, `],
					[/* reference */ 'r', `java.util.Spliterator#ORDERED`, `Spliterator.ORDERED`],
					[/* text */ 't', `, and
 `],
					[/* reference */ 'r', `java.util.Spliterator#IMMUTABLE`, `Spliterator.IMMUTABLE`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'array', [/* parameter description */
					[/* text */ 't', `the array, assumed to be unmodified during use`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a spliterator for the array elements`]
			]
		]],
		[/* method */ 'spliterator(int[],int,int)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* reference */ 'r', `java.util.Spliterator.OfInt`, `Spliterator.OfInt`],
				[/* text */ 't', ` covering the specified range of the
 specified array.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The spliterator reports `],
					[/* reference */ 'r', `java.util.Spliterator#SIZED`, `Spliterator.SIZED`],
					[/* text */ 't', `,
 `],
					[/* reference */ 'r', `java.util.Spliterator#SUBSIZED`, `Spliterator.SUBSIZED`],
					[/* text */ 't', `, `],
					[/* reference */ 'r', `java.util.Spliterator#ORDERED`, `Spliterator.ORDERED`],
					[/* text */ 't', `, and
 `],
					[/* reference */ 'r', `java.util.Spliterator#IMMUTABLE`, `Spliterator.IMMUTABLE`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'array', [/* parameter description */
					[/* text */ 't', `the array, assumed to be unmodified during use`]
				]],
				[/* parameter */ 'startInclusive', [/* parameter description */
					[/* text */ 't', `the first index to cover, inclusive`]
				]],
				[/* parameter */ 'endExclusive', [/* parameter description */
					[/* text */ 't', `index immediately past the last index to cover`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `startInclusive`],
					[/* text */ 't', ` is
         negative, `],
					[/* inline code block */ 'i', `endExclusive`],
					[/* text */ 't', ` is less than
         `],
					[/* inline code block */ 'i', `startInclusive`],
					[/* text */ 't', `, or `],
					[/* inline code block */ 'i', `endExclusive`],
					[/* text */ 't', ` is greater than
         the array size`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a spliterator for the array elements`]
			]
		]],
		[/* method */ 'spliterator(long[])', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* reference */ 'r', `java.util.Spliterator.OfLong`, `Spliterator.OfLong`],
				[/* text */ 't', ` covering all of the specified array.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The spliterator reports `],
					[/* reference */ 'r', `java.util.Spliterator#SIZED`, `Spliterator.SIZED`],
					[/* text */ 't', `,
 `],
					[/* reference */ 'r', `java.util.Spliterator#SUBSIZED`, `Spliterator.SUBSIZED`],
					[/* text */ 't', `, `],
					[/* reference */ 'r', `java.util.Spliterator#ORDERED`, `Spliterator.ORDERED`],
					[/* text */ 't', `, and
 `],
					[/* reference */ 'r', `java.util.Spliterator#IMMUTABLE`, `Spliterator.IMMUTABLE`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'array', [/* parameter description */
					[/* text */ 't', `the array, assumed to be unmodified during use`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the spliterator for the array elements`]
			]
		]],
		[/* method */ 'spliterator(long[],int,int)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* reference */ 'r', `java.util.Spliterator.OfLong`, `Spliterator.OfLong`],
				[/* text */ 't', ` covering the specified range of the
 specified array.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The spliterator reports `],
					[/* reference */ 'r', `java.util.Spliterator#SIZED`, `Spliterator.SIZED`],
					[/* text */ 't', `,
 `],
					[/* reference */ 'r', `java.util.Spliterator#SUBSIZED`, `Spliterator.SUBSIZED`],
					[/* text */ 't', `, `],
					[/* reference */ 'r', `java.util.Spliterator#ORDERED`, `Spliterator.ORDERED`],
					[/* text */ 't', `, and
 `],
					[/* reference */ 'r', `java.util.Spliterator#IMMUTABLE`, `Spliterator.IMMUTABLE`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'array', [/* parameter description */
					[/* text */ 't', `the array, assumed to be unmodified during use`]
				]],
				[/* parameter */ 'startInclusive', [/* parameter description */
					[/* text */ 't', `the first index to cover, inclusive`]
				]],
				[/* parameter */ 'endExclusive', [/* parameter description */
					[/* text */ 't', `index immediately past the last index to cover`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `startInclusive`],
					[/* text */ 't', ` is
         negative, `],
					[/* inline code block */ 'i', `endExclusive`],
					[/* text */ 't', ` is less than
         `],
					[/* inline code block */ 'i', `startInclusive`],
					[/* text */ 't', `, or `],
					[/* inline code block */ 'i', `endExclusive`],
					[/* text */ 't', ` is greater than
         the array size`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a spliterator for the array elements`]
			]
		]],
		[/* method */ 'stream(double[])', [
			[/* method description */
				[/* text */ 't', `Returns a sequential `],
				[/* reference */ 'r', `java.util.stream.DoubleStream`, `DoubleStream`],
				[/* text */ 't', ` with the specified array as its
 source.`]
			],
			[/* parameters */
				[/* parameter */ 'array', [/* parameter description */
					[/* text */ 't', `the array, assumed to be unmodified during use`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `DoubleStream`],
				[/* text */ 't', ` for the array`]
			]
		]],
		[/* method */ 'stream(double[],int,int)', [
			[/* method description */
				[/* text */ 't', `Returns a sequential `],
				[/* reference */ 'r', `java.util.stream.DoubleStream`, `DoubleStream`],
				[/* text */ 't', ` with the specified range of the
 specified array as its source.`]
			],
			[/* parameters */
				[/* parameter */ 'array', [/* parameter description */
					[/* text */ 't', `the array, assumed to be unmodified during use`]
				]],
				[/* parameter */ 'startInclusive', [/* parameter description */
					[/* text */ 't', `the first index to cover, inclusive`]
				]],
				[/* parameter */ 'endExclusive', [/* parameter description */
					[/* text */ 't', `index immediately past the last index to cover`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `startInclusive`],
					[/* text */ 't', ` is
         negative, `],
					[/* inline code block */ 'i', `endExclusive`],
					[/* text */ 't', ` is less than
         `],
					[/* inline code block */ 'i', `startInclusive`],
					[/* text */ 't', `, or `],
					[/* inline code block */ 'i', `endExclusive`],
					[/* text */ 't', ` is greater than
         the array size`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `DoubleStream`],
				[/* text */ 't', ` for the array range`]
			]
		]],
		[/* method */ 'stream(int[])', [
			[/* method description */
				[/* text */ 't', `Returns a sequential `],
				[/* reference */ 'r', `java.util.stream.IntStream`, `IntStream`],
				[/* text */ 't', ` with the specified array as its
 source.`]
			],
			[/* parameters */
				[/* parameter */ 'array', [/* parameter description */
					[/* text */ 't', `the array, assumed to be unmodified during use`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an `],
				[/* inline code block */ 'i', `IntStream`],
				[/* text */ 't', ` for the array`]
			]
		]],
		[/* method */ 'stream(int[],int,int)', [
			[/* method description */
				[/* text */ 't', `Returns a sequential `],
				[/* reference */ 'r', `java.util.stream.IntStream`, `IntStream`],
				[/* text */ 't', ` with the specified range of the
 specified array as its source.`]
			],
			[/* parameters */
				[/* parameter */ 'array', [/* parameter description */
					[/* text */ 't', `the array, assumed to be unmodified during use`]
				]],
				[/* parameter */ 'startInclusive', [/* parameter description */
					[/* text */ 't', `the first index to cover, inclusive`]
				]],
				[/* parameter */ 'endExclusive', [/* parameter description */
					[/* text */ 't', `index immediately past the last index to cover`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `startInclusive`],
					[/* text */ 't', ` is
         negative, `],
					[/* inline code block */ 'i', `endExclusive`],
					[/* text */ 't', ` is less than
         `],
					[/* inline code block */ 'i', `startInclusive`],
					[/* text */ 't', `, or `],
					[/* inline code block */ 'i', `endExclusive`],
					[/* text */ 't', ` is greater than
         the array size`]
				]]
			],
			[/* return description */
				[/* text */ 't', `an `],
				[/* inline code block */ 'i', `IntStream`],
				[/* text */ 't', ` for the array range`]
			]
		]],
		[/* method */ 'stream(long[])', [
			[/* method description */
				[/* text */ 't', `Returns a sequential `],
				[/* reference */ 'r', `java.util.stream.LongStream`, `LongStream`],
				[/* text */ 't', ` with the specified array as its
 source.`]
			],
			[/* parameters */
				[/* parameter */ 'array', [/* parameter description */
					[/* text */ 't', `the array, assumed to be unmodified during use`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `LongStream`],
				[/* text */ 't', ` for the array`]
			]
		]],
		[/* method */ 'stream(long[],int,int)', [
			[/* method description */
				[/* text */ 't', `Returns a sequential `],
				[/* reference */ 'r', `java.util.stream.LongStream`, `LongStream`],
				[/* text */ 't', ` with the specified range of the
 specified array as its source.`]
			],
			[/* parameters */
				[/* parameter */ 'array', [/* parameter description */
					[/* text */ 't', `the array, assumed to be unmodified during use`]
				]],
				[/* parameter */ 'startInclusive', [/* parameter description */
					[/* text */ 't', `the first index to cover, inclusive`]
				]],
				[/* parameter */ 'endExclusive', [/* parameter description */
					[/* text */ 't', `index immediately past the last index to cover`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `startInclusive`],
					[/* text */ 't', ` is
         negative, `],
					[/* inline code block */ 'i', `endExclusive`],
					[/* text */ 't', ` is less than
         `],
					[/* inline code block */ 'i', `startInclusive`],
					[/* text */ 't', `, or `],
					[/* inline code block */ 'i', `endExclusive`],
					[/* text */ 't', ` is greater than
         the array size`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `LongStream`],
				[/* text */ 't', ` for the array range`]
			]
		]],
		[/* method */ 'copyOf(long[],int)', [
			[/* method description */
				[/* text */ 't', `Copies the specified array, truncating or padding with zeros (if necessary)
 so the copy has the specified length.  For all indices that are
 valid in both the original array and the copy, the two arrays will
 contain identical values.  For any indices that are valid in the
 copy but not the original, the copy will contain `],
				[/* inline code block */ 'i', `0L`],
				[/* text */ 't', `.
 Such indices will exist if and only if the specified length
 is greater than that of the original array.`]
			],
			[/* parameters */
				[/* parameter */ 'original', [/* parameter description */
					[/* text */ 't', `the array to be copied`]
				]],
				[/* parameter */ 'newLength', [/* parameter description */
					[/* text */ 't', `the length of the copy to be returned`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NegativeArraySizeException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `newLength`],
					[/* text */ 't', ` is negative`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `original`],
					[/* text */ 't', ` is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a copy of the original array, truncated or padded with zeros
     to obtain the specified length`]
			]
		]],
		[/* method */ 'copyOfRange(long[],int,int)', [
			[/* method description */
				[/* text */ 't', `Copies the specified range of the specified array into a new array.
 The initial index of the range (`],
				[/* inline code block */ 'i', `from`],
				[/* text */ 't', `) must lie between zero
 and `],
				[/* inline code block */ 'i', `original.length`],
				[/* text */ 't', `, inclusive.  The value at
 `],
				[/* inline code block */ 'i', `original[from]`],
				[/* text */ 't', ` is placed into the initial element of the copy
 (unless `],
				[/* inline code block */ 'i', `from == original.length`],
				[/* text */ 't', ` or `],
				[/* inline code block */ 'i', `from == to`],
				[/* text */ 't', `).
 Values from subsequent elements in the original array are placed into
 subsequent elements in the copy.  The final index of the range
 (`],
				[/* inline code block */ 'i', `to`],
				[/* text */ 't', `), which must be greater than or equal to `],
				[/* inline code block */ 'i', `from`],
				[/* text */ 't', `,
 may be greater than `],
				[/* inline code block */ 'i', `original.length`],
				[/* text */ 't', `, in which case
 `],
				[/* inline code block */ 'i', `0L`],
				[/* text */ 't', ` is placed in all elements of the copy whose index is
 greater than or equal to `],
				[/* inline code block */ 'i', `original.length - from`],
				[/* text */ 't', `.  The length
 of the returned array will be `],
				[/* inline code block */ 'i', `to - from`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'original', [/* parameter description */
					[/* text */ 't', `the array from which a range is to be copied`]
				]],
				[/* parameter */ 'from', [/* parameter description */
					[/* text */ 't', `the initial index of the range to be copied, inclusive`]
				]],
				[/* parameter */ 'to', [/* parameter description */
					[/* text */ 't', `the final index of the range to be copied, exclusive.
     (This index may lie outside the array.)`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `from < 0`],
					[/* text */ 't', `
     or `],
					[/* inline code block */ 'i', `from > original.length`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `from > to`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `original`],
					[/* text */ 't', ` is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a new array containing the specified range from the original array,
     truncated or padded with zeros to obtain the required length`]
			]
		]],
		[/* method */ 'copyOf(short[],int)', [
			[/* method description */
				[/* text */ 't', `Copies the specified array, truncating or padding with zeros (if necessary)
 so the copy has the specified length.  For all indices that are
 valid in both the original array and the copy, the two arrays will
 contain identical values.  For any indices that are valid in the
 copy but not the original, the copy will contain `],
				[/* inline code block */ 'i', `(short)0`],
				[/* text */ 't', `.
 Such indices will exist if and only if the specified length
 is greater than that of the original array.`]
			],
			[/* parameters */
				[/* parameter */ 'original', [/* parameter description */
					[/* text */ 't', `the array to be copied`]
				]],
				[/* parameter */ 'newLength', [/* parameter description */
					[/* text */ 't', `the length of the copy to be returned`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NegativeArraySizeException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `newLength`],
					[/* text */ 't', ` is negative`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `original`],
					[/* text */ 't', ` is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a copy of the original array, truncated or padded with zeros
     to obtain the specified length`]
			]
		]],
		[/* method */ 'copyOfRange(short[],int,int)', [
			[/* method description */
				[/* text */ 't', `Copies the specified range of the specified array into a new array.
 The initial index of the range (`],
				[/* inline code block */ 'i', `from`],
				[/* text */ 't', `) must lie between zero
 and `],
				[/* inline code block */ 'i', `original.length`],
				[/* text */ 't', `, inclusive.  The value at
 `],
				[/* inline code block */ 'i', `original[from]`],
				[/* text */ 't', ` is placed into the initial element of the copy
 (unless `],
				[/* inline code block */ 'i', `from == original.length`],
				[/* text */ 't', ` or `],
				[/* inline code block */ 'i', `from == to`],
				[/* text */ 't', `).
 Values from subsequent elements in the original array are placed into
 subsequent elements in the copy.  The final index of the range
 (`],
				[/* inline code block */ 'i', `to`],
				[/* text */ 't', `), which must be greater than or equal to `],
				[/* inline code block */ 'i', `from`],
				[/* text */ 't', `,
 may be greater than `],
				[/* inline code block */ 'i', `original.length`],
				[/* text */ 't', `, in which case
 `],
				[/* inline code block */ 'i', `(short)0`],
				[/* text */ 't', ` is placed in all elements of the copy whose index is
 greater than or equal to `],
				[/* inline code block */ 'i', `original.length - from`],
				[/* text */ 't', `.  The length
 of the returned array will be `],
				[/* inline code block */ 'i', `to - from`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'original', [/* parameter description */
					[/* text */ 't', `the array from which a range is to be copied`]
				]],
				[/* parameter */ 'from', [/* parameter description */
					[/* text */ 't', `the initial index of the range to be copied, inclusive`]
				]],
				[/* parameter */ 'to', [/* parameter description */
					[/* text */ 't', `the final index of the range to be copied, exclusive.
     (This index may lie outside the array.)`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `from < 0`],
					[/* text */ 't', `
     or `],
					[/* inline code block */ 'i', `from > original.length`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `from > to`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `original`],
					[/* text */ 't', ` is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a new array containing the specified range from the original array,
     truncated or padded with zeros to obtain the required length`]
			]
		]],
		[/* method */ 'fill(boolean[],boolean)', [
			[/* method description */
				[/* text */ 't', `Assigns the specified boolean value to each element of the specified
 array of booleans.`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the array to be filled`]
				]],
				[/* parameter */ 'val', [/* parameter description */
					[/* text */ 't', `the value to be stored in all elements of the array`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'fill(boolean[],int,int,boolean)', [
			[/* method description */
				[/* text */ 't', `Assigns the specified boolean value to each element of the specified
 range of the specified array of booleans.  The range to be filled
 extends from index `],
				[/* inline code block */ 'i', `fromIndex`],
				[/* text */ 't', `, inclusive, to index
 `],
				[/* inline code block */ 'i', `toIndex`],
				[/* text */ 't', `, exclusive.  (If `],
				[/* inline code block */ 'i', `fromIndex==toIndex`],
				[/* text */ 't', `, the
 range to be filled is empty.)`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the array to be filled`]
				]],
				[/* parameter */ 'fromIndex', [/* parameter description */
					[/* text */ 't', `the index of the first element (inclusive) to be
        filled with the specified value`]
				]],
				[/* parameter */ 'toIndex', [/* parameter description */
					[/* text */ 't', `the index of the last element (exclusive) to be
        filled with the specified value`]
				]],
				[/* parameter */ 'val', [/* parameter description */
					[/* text */ 't', `the value to be stored in all elements of the array`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `fromIndex > toIndex`]
				]],
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `fromIndex < 0`],
					[/* text */ 't', ` or
         `],
					[/* inline code block */ 'i', `toIndex > a.length`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'fill(byte[],byte)', [
			[/* method description */
				[/* text */ 't', `Assigns the specified byte value to each element of the specified array
 of bytes.`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the array to be filled`]
				]],
				[/* parameter */ 'val', [/* parameter description */
					[/* text */ 't', `the value to be stored in all elements of the array`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'fill(byte[],int,int,byte)', [
			[/* method description */
				[/* text */ 't', `Assigns the specified byte value to each element of the specified
 range of the specified array of bytes.  The range to be filled
 extends from index `],
				[/* inline code block */ 'i', `fromIndex`],
				[/* text */ 't', `, inclusive, to index
 `],
				[/* inline code block */ 'i', `toIndex`],
				[/* text */ 't', `, exclusive.  (If `],
				[/* inline code block */ 'i', `fromIndex==toIndex`],
				[/* text */ 't', `, the
 range to be filled is empty.)`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the array to be filled`]
				]],
				[/* parameter */ 'fromIndex', [/* parameter description */
					[/* text */ 't', `the index of the first element (inclusive) to be
        filled with the specified value`]
				]],
				[/* parameter */ 'toIndex', [/* parameter description */
					[/* text */ 't', `the index of the last element (exclusive) to be
        filled with the specified value`]
				]],
				[/* parameter */ 'val', [/* parameter description */
					[/* text */ 't', `the value to be stored in all elements of the array`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `fromIndex > toIndex`]
				]],
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `fromIndex < 0`],
					[/* text */ 't', ` or
         `],
					[/* inline code block */ 'i', `toIndex > a.length`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'fill(char[],char)', [
			[/* method description */
				[/* text */ 't', `Assigns the specified char value to each element of the specified array
 of chars.`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the array to be filled`]
				]],
				[/* parameter */ 'val', [/* parameter description */
					[/* text */ 't', `the value to be stored in all elements of the array`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'fill(char[],int,int,char)', [
			[/* method description */
				[/* text */ 't', `Assigns the specified char value to each element of the specified
 range of the specified array of chars.  The range to be filled
 extends from index `],
				[/* inline code block */ 'i', `fromIndex`],
				[/* text */ 't', `, inclusive, to index
 `],
				[/* inline code block */ 'i', `toIndex`],
				[/* text */ 't', `, exclusive.  (If `],
				[/* inline code block */ 'i', `fromIndex==toIndex`],
				[/* text */ 't', `, the
 range to be filled is empty.)`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the array to be filled`]
				]],
				[/* parameter */ 'fromIndex', [/* parameter description */
					[/* text */ 't', `the index of the first element (inclusive) to be
        filled with the specified value`]
				]],
				[/* parameter */ 'toIndex', [/* parameter description */
					[/* text */ 't', `the index of the last element (exclusive) to be
        filled with the specified value`]
				]],
				[/* parameter */ 'val', [/* parameter description */
					[/* text */ 't', `the value to be stored in all elements of the array`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `fromIndex > toIndex`]
				]],
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `fromIndex < 0`],
					[/* text */ 't', ` or
         `],
					[/* inline code block */ 'i', `toIndex > a.length`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'fill(double[],double)', [
			[/* method description */
				[/* text */ 't', `Assigns the specified double value to each element of the specified
 array of doubles.`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the array to be filled`]
				]],
				[/* parameter */ 'val', [/* parameter description */
					[/* text */ 't', `the value to be stored in all elements of the array`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'fill(double[],int,int,double)', [
			[/* method description */
				[/* text */ 't', `Assigns the specified double value to each element of the specified
 range of the specified array of doubles.  The range to be filled
 extends from index `],
				[/* inline code block */ 'i', `fromIndex`],
				[/* text */ 't', `, inclusive, to index
 `],
				[/* inline code block */ 'i', `toIndex`],
				[/* text */ 't', `, exclusive.  (If `],
				[/* inline code block */ 'i', `fromIndex==toIndex`],
				[/* text */ 't', `, the
 range to be filled is empty.)`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the array to be filled`]
				]],
				[/* parameter */ 'fromIndex', [/* parameter description */
					[/* text */ 't', `the index of the first element (inclusive) to be
        filled with the specified value`]
				]],
				[/* parameter */ 'toIndex', [/* parameter description */
					[/* text */ 't', `the index of the last element (exclusive) to be
        filled with the specified value`]
				]],
				[/* parameter */ 'val', [/* parameter description */
					[/* text */ 't', `the value to be stored in all elements of the array`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `fromIndex > toIndex`]
				]],
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `fromIndex < 0`],
					[/* text */ 't', ` or
         `],
					[/* inline code block */ 'i', `toIndex > a.length`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'fill(float[],float)', [
			[/* method description */
				[/* text */ 't', `Assigns the specified float value to each element of the specified array
 of floats.`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the array to be filled`]
				]],
				[/* parameter */ 'val', [/* parameter description */
					[/* text */ 't', `the value to be stored in all elements of the array`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'fill(float[],int,int,float)', [
			[/* method description */
				[/* text */ 't', `Assigns the specified float value to each element of the specified
 range of the specified array of floats.  The range to be filled
 extends from index `],
				[/* inline code block */ 'i', `fromIndex`],
				[/* text */ 't', `, inclusive, to index
 `],
				[/* inline code block */ 'i', `toIndex`],
				[/* text */ 't', `, exclusive.  (If `],
				[/* inline code block */ 'i', `fromIndex==toIndex`],
				[/* text */ 't', `, the
 range to be filled is empty.)`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the array to be filled`]
				]],
				[/* parameter */ 'fromIndex', [/* parameter description */
					[/* text */ 't', `the index of the first element (inclusive) to be
        filled with the specified value`]
				]],
				[/* parameter */ 'toIndex', [/* parameter description */
					[/* text */ 't', `the index of the last element (exclusive) to be
        filled with the specified value`]
				]],
				[/* parameter */ 'val', [/* parameter description */
					[/* text */ 't', `the value to be stored in all elements of the array`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `fromIndex > toIndex`]
				]],
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `fromIndex < 0`],
					[/* text */ 't', ` or
         `],
					[/* inline code block */ 'i', `toIndex > a.length`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'fill(int[],int)', [
			[/* method description */
				[/* text */ 't', `Assigns the specified int value to each element of the specified array
 of ints.`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the array to be filled`]
				]],
				[/* parameter */ 'val', [/* parameter description */
					[/* text */ 't', `the value to be stored in all elements of the array`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'fill(int[],int,int,int)', [
			[/* method description */
				[/* text */ 't', `Assigns the specified int value to each element of the specified
 range of the specified array of ints.  The range to be filled
 extends from index `],
				[/* inline code block */ 'i', `fromIndex`],
				[/* text */ 't', `, inclusive, to index
 `],
				[/* inline code block */ 'i', `toIndex`],
				[/* text */ 't', `, exclusive.  (If `],
				[/* inline code block */ 'i', `fromIndex==toIndex`],
				[/* text */ 't', `, the
 range to be filled is empty.)`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the array to be filled`]
				]],
				[/* parameter */ 'fromIndex', [/* parameter description */
					[/* text */ 't', `the index of the first element (inclusive) to be
        filled with the specified value`]
				]],
				[/* parameter */ 'toIndex', [/* parameter description */
					[/* text */ 't', `the index of the last element (exclusive) to be
        filled with the specified value`]
				]],
				[/* parameter */ 'val', [/* parameter description */
					[/* text */ 't', `the value to be stored in all elements of the array`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `fromIndex > toIndex`]
				]],
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `fromIndex < 0`],
					[/* text */ 't', ` or
         `],
					[/* inline code block */ 'i', `toIndex > a.length`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'fill(java.lang.Object[],int,int,java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Assigns the specified Object reference to each element of the specified
 range of the specified array of Objects.  The range to be filled
 extends from index `],
				[/* inline code block */ 'i', `fromIndex`],
				[/* text */ 't', `, inclusive, to index
 `],
				[/* inline code block */ 'i', `toIndex`],
				[/* text */ 't', `, exclusive.  (If `],
				[/* inline code block */ 'i', `fromIndex==toIndex`],
				[/* text */ 't', `, the
 range to be filled is empty.)`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the array to be filled`]
				]],
				[/* parameter */ 'fromIndex', [/* parameter description */
					[/* text */ 't', `the index of the first element (inclusive) to be
        filled with the specified value`]
				]],
				[/* parameter */ 'toIndex', [/* parameter description */
					[/* text */ 't', `the index of the last element (exclusive) to be
        filled with the specified value`]
				]],
				[/* parameter */ 'val', [/* parameter description */
					[/* text */ 't', `the value to be stored in all elements of the array`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `fromIndex > toIndex`]
				]],
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `fromIndex < 0`],
					[/* text */ 't', ` or
         `],
					[/* inline code block */ 'i', `toIndex > a.length`]
				]],
				[/* throw */ 'java.lang.ArrayStoreException', [/* throw description */
					[/* text */ 't', `if the specified value is not of a
         runtime type that can be stored in the specified array`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'fill(java.lang.Object[],java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Assigns the specified Object reference to each element of the specified
 array of Objects.`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the array to be filled`]
				]],
				[/* parameter */ 'val', [/* parameter description */
					[/* text */ 't', `the value to be stored in all elements of the array`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArrayStoreException', [/* throw description */
					[/* text */ 't', `if the specified value is not of a
         runtime type that can be stored in the specified array`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'fill(long[],int,int,long)', [
			[/* method description */
				[/* text */ 't', `Assigns the specified long value to each element of the specified
 range of the specified array of longs.  The range to be filled
 extends from index `],
				[/* inline code block */ 'i', `fromIndex`],
				[/* text */ 't', `, inclusive, to index
 `],
				[/* inline code block */ 'i', `toIndex`],
				[/* text */ 't', `, exclusive.  (If `],
				[/* inline code block */ 'i', `fromIndex==toIndex`],
				[/* text */ 't', `, the
 range to be filled is empty.)`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the array to be filled`]
				]],
				[/* parameter */ 'fromIndex', [/* parameter description */
					[/* text */ 't', `the index of the first element (inclusive) to be
        filled with the specified value`]
				]],
				[/* parameter */ 'toIndex', [/* parameter description */
					[/* text */ 't', `the index of the last element (exclusive) to be
        filled with the specified value`]
				]],
				[/* parameter */ 'val', [/* parameter description */
					[/* text */ 't', `the value to be stored in all elements of the array`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `fromIndex > toIndex`]
				]],
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `fromIndex < 0`],
					[/* text */ 't', ` or
         `],
					[/* inline code block */ 'i', `toIndex > a.length`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'fill(long[],long)', [
			[/* method description */
				[/* text */ 't', `Assigns the specified long value to each element of the specified array
 of longs.`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the array to be filled`]
				]],
				[/* parameter */ 'val', [/* parameter description */
					[/* text */ 't', `the value to be stored in all elements of the array`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'fill(short[],int,int,short)', [
			[/* method description */
				[/* text */ 't', `Assigns the specified short value to each element of the specified
 range of the specified array of shorts.  The range to be filled
 extends from index `],
				[/* inline code block */ 'i', `fromIndex`],
				[/* text */ 't', `, inclusive, to index
 `],
				[/* inline code block */ 'i', `toIndex`],
				[/* text */ 't', `, exclusive.  (If `],
				[/* inline code block */ 'i', `fromIndex==toIndex`],
				[/* text */ 't', `, the
 range to be filled is empty.)`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the array to be filled`]
				]],
				[/* parameter */ 'fromIndex', [/* parameter description */
					[/* text */ 't', `the index of the first element (inclusive) to be
        filled with the specified value`]
				]],
				[/* parameter */ 'toIndex', [/* parameter description */
					[/* text */ 't', `the index of the last element (exclusive) to be
        filled with the specified value`]
				]],
				[/* parameter */ 'val', [/* parameter description */
					[/* text */ 't', `the value to be stored in all elements of the array`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `fromIndex > toIndex`]
				]],
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `fromIndex < 0`],
					[/* text */ 't', ` or
         `],
					[/* inline code block */ 'i', `toIndex > a.length`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'fill(short[],short)', [
			[/* method description */
				[/* text */ 't', `Assigns the specified short value to each element of the specified array
 of shorts.`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the array to be filled`]
				]],
				[/* parameter */ 'val', [/* parameter description */
					[/* text */ 't', `the value to be stored in all elements of the array`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'parallelPrefix(double[],int,int,java.util.function.DoubleBinaryOperator)', [
			[/* method description */
				[/* text */ 't', `Performs `],
				[/* reference */ 'r', `#parallelPrefix(double%5B%5D,java.util.function.DoubleBinaryOperator)`, `parallelPrefix(double[], DoubleBinaryOperator)`],
				[/* text */ 't', `
 for the given subrange of the array.`]
			],
			[/* parameters */
				[/* parameter */ 'array', [/* parameter description */
					[/* text */ 't', `the array`]
				]],
				[/* parameter */ 'fromIndex', [/* parameter description */
					[/* text */ 't', `the index of the first element, inclusive`]
				]],
				[/* parameter */ 'toIndex', [/* parameter description */
					[/* text */ 't', `the index of the last element, exclusive`]
				]],
				[/* parameter */ 'op', [/* parameter description */
					[/* text */ 't', `a side-effect-free, associative function to perform the
 cumulation`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `fromIndex > toIndex`]
				]],
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `fromIndex < 0`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `toIndex > array.length`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified array or function is null`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'parallelPrefix(double[],java.util.function.DoubleBinaryOperator)', [
			[/* method description */
				[/* text */ 't', `Cumulates, in parallel, each element of the given array in place,
 using the supplied function. For example if the array initially
 holds `],
				[/* inline code block */ 'i', `[2.0, 1.0, 0.0, 3.0]`],
				[/* text */ 't', ` and the operation performs addition,
 then upon return the array holds `],
				[/* inline code block */ 'i', `[2.0, 3.0, 3.0, 6.0]`],
				[/* text */ 't', `.
 Parallel prefix computation is usually more efficient than
 sequential loops for large arrays.

 `],
				[/* block */ 'b', ` Because floating-point operations may not be strictly associative,
 the returned result may not be identical to the value that would be
 obtained if the operation was performed sequentially.`]
			],
			[/* parameters */
				[/* parameter */ 'array', [/* parameter description */
					[/* text */ 't', `the array, which is modified in-place by this method`]
				]],
				[/* parameter */ 'op', [/* parameter description */
					[/* text */ 't', `a side-effect-free function to perform the cumulation`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified array or function is null`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'parallelPrefix(int[],int,int,java.util.function.IntBinaryOperator)', [
			[/* method description */
				[/* text */ 't', `Performs `],
				[/* reference */ 'r', `#parallelPrefix(int%5B%5D,java.util.function.IntBinaryOperator)`, `parallelPrefix(int[], IntBinaryOperator)`],
				[/* text */ 't', `
 for the given subrange of the array.`]
			],
			[/* parameters */
				[/* parameter */ 'array', [/* parameter description */
					[/* text */ 't', `the array`]
				]],
				[/* parameter */ 'fromIndex', [/* parameter description */
					[/* text */ 't', `the index of the first element, inclusive`]
				]],
				[/* parameter */ 'toIndex', [/* parameter description */
					[/* text */ 't', `the index of the last element, exclusive`]
				]],
				[/* parameter */ 'op', [/* parameter description */
					[/* text */ 't', `a side-effect-free, associative function to perform the
 cumulation`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `fromIndex > toIndex`]
				]],
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `fromIndex < 0`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `toIndex > array.length`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified array or function is null`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'parallelPrefix(int[],java.util.function.IntBinaryOperator)', [
			[/* method description */
				[/* text */ 't', `Cumulates, in parallel, each element of the given array in place,
 using the supplied function. For example if the array initially
 holds `],
				[/* inline code block */ 'i', `[2, 1, 0, 3]`],
				[/* text */ 't', ` and the operation performs addition,
 then upon return the array holds `],
				[/* inline code block */ 'i', `[2, 3, 3, 6]`],
				[/* text */ 't', `.
 Parallel prefix computation is usually more efficient than
 sequential loops for large arrays.`]
			],
			[/* parameters */
				[/* parameter */ 'array', [/* parameter description */
					[/* text */ 't', `the array, which is modified in-place by this method`]
				]],
				[/* parameter */ 'op', [/* parameter description */
					[/* text */ 't', `a side-effect-free, associative function to perform the
 cumulation`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified array or function is null`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'parallelPrefix(long[],int,int,java.util.function.LongBinaryOperator)', [
			[/* method description */
				[/* text */ 't', `Performs `],
				[/* reference */ 'r', `#parallelPrefix(long%5B%5D,java.util.function.LongBinaryOperator)`, `parallelPrefix(long[], LongBinaryOperator)`],
				[/* text */ 't', `
 for the given subrange of the array.`]
			],
			[/* parameters */
				[/* parameter */ 'array', [/* parameter description */
					[/* text */ 't', `the array`]
				]],
				[/* parameter */ 'fromIndex', [/* parameter description */
					[/* text */ 't', `the index of the first element, inclusive`]
				]],
				[/* parameter */ 'toIndex', [/* parameter description */
					[/* text */ 't', `the index of the last element, exclusive`]
				]],
				[/* parameter */ 'op', [/* parameter description */
					[/* text */ 't', `a side-effect-free, associative function to perform the
 cumulation`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `fromIndex > toIndex`]
				]],
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `fromIndex < 0`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `toIndex > array.length`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified array or function is null`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'parallelPrefix(long[],java.util.function.LongBinaryOperator)', [
			[/* method description */
				[/* text */ 't', `Cumulates, in parallel, each element of the given array in place,
 using the supplied function. For example if the array initially
 holds `],
				[/* inline code block */ 'i', `[2, 1, 0, 3]`],
				[/* text */ 't', ` and the operation performs addition,
 then upon return the array holds `],
				[/* inline code block */ 'i', `[2, 3, 3, 6]`],
				[/* text */ 't', `.
 Parallel prefix computation is usually more efficient than
 sequential loops for large arrays.`]
			],
			[/* parameters */
				[/* parameter */ 'array', [/* parameter description */
					[/* text */ 't', `the array, which is modified in-place by this method`]
				]],
				[/* parameter */ 'op', [/* parameter description */
					[/* text */ 't', `a side-effect-free, associative function to perform the
 cumulation`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified array or function is null`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'parallelSetAll(double[],java.util.function.IntToDoubleFunction)', [
			[/* method description */
				[/* text */ 't', `Set all elements of the specified array, in parallel, using the
 provided generator function to compute each element.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If the generator function throws an exception, an unchecked exception
 is thrown from `],
					[/* inline code block */ 'i', `parallelSetAll`],
					[/* text */ 't', ` and the array is left in an
 indeterminate state.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'array', [/* parameter description */
					[/* text */ 't', `array to be initialized`]
				]],
				[/* parameter */ 'generator', [/* parameter description */
					[/* text */ 't', `a function accepting an index and producing the desired
        value for that position`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the generator is null`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'parallelSetAll(int[],java.util.function.IntUnaryOperator)', [
			[/* method description */
				[/* text */ 't', `Set all elements of the specified array, in parallel, using the
 provided generator function to compute each element.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If the generator function throws an exception, an unchecked exception
 is thrown from `],
					[/* inline code block */ 'i', `parallelSetAll`],
					[/* text */ 't', ` and the array is left in an
 indeterminate state.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'array', [/* parameter description */
					[/* text */ 't', `array to be initialized`]
				]],
				[/* parameter */ 'generator', [/* parameter description */
					[/* text */ 't', `a function accepting an index and producing the desired
 value for that position`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the generator is null`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'parallelSetAll(long[],java.util.function.IntToLongFunction)', [
			[/* method description */
				[/* text */ 't', `Set all elements of the specified array, in parallel, using the
 provided generator function to compute each element.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If the generator function throws an exception, an unchecked exception
 is thrown from `],
					[/* inline code block */ 'i', `parallelSetAll`],
					[/* text */ 't', ` and the array is left in an
 indeterminate state.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'array', [/* parameter description */
					[/* text */ 't', `array to be initialized`]
				]],
				[/* parameter */ 'generator', [/* parameter description */
					[/* text */ 't', `a function accepting an index and producing the desired
        value for that position`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the generator is null`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'parallelSort(byte[])', [
			[/* method description */
				[/* text */ 't', `Sorts the specified array into ascending numerical order.`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the array to be sorted`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'parallelSort(byte[],int,int)', [
			[/* method description */
				[/* text */ 't', `Sorts the specified range of the array into ascending numerical order.
 The range to be sorted extends from the index `],
				[/* inline code block */ 'i', `fromIndex`],
				[/* text */ 't', `,
 inclusive, to the index `],
				[/* inline code block */ 'i', `toIndex`],
				[/* text */ 't', `, exclusive. If
 `],
				[/* inline code block */ 'i', `fromIndex == toIndex`],
				[/* text */ 't', `, the range to be sorted is empty.`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the array to be sorted`]
				]],
				[/* parameter */ 'fromIndex', [/* parameter description */
					[/* text */ 't', `the index of the first element, inclusive, to be sorted`]
				]],
				[/* parameter */ 'toIndex', [/* parameter description */
					[/* text */ 't', `the index of the last element, exclusive, to be sorted`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `fromIndex > toIndex`]
				]],
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `fromIndex < 0`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `toIndex > a.length`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'parallelSort(char[])', [
			[/* method description */
				[/* text */ 't', `Sorts the specified array into ascending numerical order.`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the array to be sorted`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'parallelSort(char[],int,int)', [
			[/* method description */
				[/* text */ 't', `Sorts the specified range of the array into ascending numerical order.
 The range to be sorted extends from the index `],
				[/* inline code block */ 'i', `fromIndex`],
				[/* text */ 't', `,
 inclusive, to the index `],
				[/* inline code block */ 'i', `toIndex`],
				[/* text */ 't', `, exclusive. If
 `],
				[/* inline code block */ 'i', `fromIndex == toIndex`],
				[/* text */ 't', `, the range to be sorted is empty.`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the array to be sorted`]
				]],
				[/* parameter */ 'fromIndex', [/* parameter description */
					[/* text */ 't', `the index of the first element, inclusive, to be sorted`]
				]],
				[/* parameter */ 'toIndex', [/* parameter description */
					[/* text */ 't', `the index of the last element, exclusive, to be sorted`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `fromIndex > toIndex`]
				]],
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `fromIndex < 0`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `toIndex > a.length`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'parallelSort(double[])', [
			[/* method description */
				[/* text */ 't', `Sorts the specified array into ascending numerical order.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The `],
					[/* inline code block */ 'i', `<`],
					[/* text */ 't', ` relation does not provide a total order on all double
 values: `],
					[/* inline code block */ 'i', `-0.0d == 0.0d`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` and a `],
					[/* inline code block */ 'i', `Double.NaN`],
					[/* text */ 't', `
 value compares neither less than, greater than, nor equal to any value,
 even itself. This method uses the total order imposed by the method
 `],
					[/* reference */ 'r', `java.lang.Double#compareTo(java.lang.Double)`, `Double.compareTo(java.lang.Double)`],
					[/* text */ 't', `: `],
					[/* inline code block */ 'i', `-0.0d`],
					[/* text */ 't', ` is treated as less than value
 `],
					[/* inline code block */ 'i', `0.0d`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `Double.NaN`],
					[/* text */ 't', ` is considered greater than any
 other value and all `],
					[/* inline code block */ 'i', `Double.NaN`],
					[/* text */ 't', ` values are considered equal.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the array to be sorted`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'parallelSort(double[],int,int)', [
			[/* method description */
				[/* text */ 't', `Sorts the specified range of the array into ascending numerical order.
 The range to be sorted extends from the index `],
				[/* inline code block */ 'i', `fromIndex`],
				[/* text */ 't', `,
 inclusive, to the index `],
				[/* inline code block */ 'i', `toIndex`],
				[/* text */ 't', `, exclusive. If
 `],
				[/* inline code block */ 'i', `fromIndex == toIndex`],
				[/* text */ 't', `, the range to be sorted is empty.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The `],
					[/* inline code block */ 'i', `<`],
					[/* text */ 't', ` relation does not provide a total order on all double
 values: `],
					[/* inline code block */ 'i', `-0.0d == 0.0d`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` and a `],
					[/* inline code block */ 'i', `Double.NaN`],
					[/* text */ 't', `
 value compares neither less than, greater than, nor equal to any value,
 even itself. This method uses the total order imposed by the method
 `],
					[/* reference */ 'r', `java.lang.Double#compareTo(java.lang.Double)`, `Double.compareTo(java.lang.Double)`],
					[/* text */ 't', `: `],
					[/* inline code block */ 'i', `-0.0d`],
					[/* text */ 't', ` is treated as less than value
 `],
					[/* inline code block */ 'i', `0.0d`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `Double.NaN`],
					[/* text */ 't', ` is considered greater than any
 other value and all `],
					[/* inline code block */ 'i', `Double.NaN`],
					[/* text */ 't', ` values are considered equal.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the array to be sorted`]
				]],
				[/* parameter */ 'fromIndex', [/* parameter description */
					[/* text */ 't', `the index of the first element, inclusive, to be sorted`]
				]],
				[/* parameter */ 'toIndex', [/* parameter description */
					[/* text */ 't', `the index of the last element, exclusive, to be sorted`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `fromIndex > toIndex`]
				]],
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `fromIndex < 0`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `toIndex > a.length`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'parallelSort(float[])', [
			[/* method description */
				[/* text */ 't', `Sorts the specified array into ascending numerical order.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The `],
					[/* inline code block */ 'i', `<`],
					[/* text */ 't', ` relation does not provide a total order on all float
 values: `],
					[/* inline code block */ 'i', `-0.0f == 0.0f`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` and a `],
					[/* inline code block */ 'i', `Float.NaN`],
					[/* text */ 't', `
 value compares neither less than, greater than, nor equal to any value,
 even itself. This method uses the total order imposed by the method
 `],
					[/* reference */ 'r', `java.lang.Float#compareTo(java.lang.Float)`, `Float.compareTo(java.lang.Float)`],
					[/* text */ 't', `: `],
					[/* inline code block */ 'i', `-0.0f`],
					[/* text */ 't', ` is treated as less than value
 `],
					[/* inline code block */ 'i', `0.0f`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `Float.NaN`],
					[/* text */ 't', ` is considered greater than any
 other value and all `],
					[/* inline code block */ 'i', `Float.NaN`],
					[/* text */ 't', ` values are considered equal.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the array to be sorted`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'parallelSort(float[],int,int)', [
			[/* method description */
				[/* text */ 't', `Sorts the specified range of the array into ascending numerical order.
 The range to be sorted extends from the index `],
				[/* inline code block */ 'i', `fromIndex`],
				[/* text */ 't', `,
 inclusive, to the index `],
				[/* inline code block */ 'i', `toIndex`],
				[/* text */ 't', `, exclusive. If
 `],
				[/* inline code block */ 'i', `fromIndex == toIndex`],
				[/* text */ 't', `, the range to be sorted is empty.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The `],
					[/* inline code block */ 'i', `<`],
					[/* text */ 't', ` relation does not provide a total order on all float
 values: `],
					[/* inline code block */ 'i', `-0.0f == 0.0f`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` and a `],
					[/* inline code block */ 'i', `Float.NaN`],
					[/* text */ 't', `
 value compares neither less than, greater than, nor equal to any value,
 even itself. This method uses the total order imposed by the method
 `],
					[/* reference */ 'r', `java.lang.Float#compareTo(java.lang.Float)`, `Float.compareTo(java.lang.Float)`],
					[/* text */ 't', `: `],
					[/* inline code block */ 'i', `-0.0f`],
					[/* text */ 't', ` is treated as less than value
 `],
					[/* inline code block */ 'i', `0.0f`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `Float.NaN`],
					[/* text */ 't', ` is considered greater than any
 other value and all `],
					[/* inline code block */ 'i', `Float.NaN`],
					[/* text */ 't', ` values are considered equal.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the array to be sorted`]
				]],
				[/* parameter */ 'fromIndex', [/* parameter description */
					[/* text */ 't', `the index of the first element, inclusive, to be sorted`]
				]],
				[/* parameter */ 'toIndex', [/* parameter description */
					[/* text */ 't', `the index of the last element, exclusive, to be sorted`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `fromIndex > toIndex`]
				]],
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `fromIndex < 0`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `toIndex > a.length`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'parallelSort(int[])', [
			[/* method description */
				[/* text */ 't', `Sorts the specified array into ascending numerical order.`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the array to be sorted`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'parallelSort(int[],int,int)', [
			[/* method description */
				[/* text */ 't', `Sorts the specified range of the array into ascending numerical order.
 The range to be sorted extends from the index `],
				[/* inline code block */ 'i', `fromIndex`],
				[/* text */ 't', `,
 inclusive, to the index `],
				[/* inline code block */ 'i', `toIndex`],
				[/* text */ 't', `, exclusive. If
 `],
				[/* inline code block */ 'i', `fromIndex == toIndex`],
				[/* text */ 't', `, the range to be sorted is empty.`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the array to be sorted`]
				]],
				[/* parameter */ 'fromIndex', [/* parameter description */
					[/* text */ 't', `the index of the first element, inclusive, to be sorted`]
				]],
				[/* parameter */ 'toIndex', [/* parameter description */
					[/* text */ 't', `the index of the last element, exclusive, to be sorted`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `fromIndex > toIndex`]
				]],
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `fromIndex < 0`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `toIndex > a.length`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'parallelSort(long[])', [
			[/* method description */
				[/* text */ 't', `Sorts the specified array into ascending numerical order.`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the array to be sorted`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'parallelSort(long[],int,int)', [
			[/* method description */
				[/* text */ 't', `Sorts the specified range of the array into ascending numerical order.
 The range to be sorted extends from the index `],
				[/* inline code block */ 'i', `fromIndex`],
				[/* text */ 't', `,
 inclusive, to the index `],
				[/* inline code block */ 'i', `toIndex`],
				[/* text */ 't', `, exclusive. If
 `],
				[/* inline code block */ 'i', `fromIndex == toIndex`],
				[/* text */ 't', `, the range to be sorted is empty.`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the array to be sorted`]
				]],
				[/* parameter */ 'fromIndex', [/* parameter description */
					[/* text */ 't', `the index of the first element, inclusive, to be sorted`]
				]],
				[/* parameter */ 'toIndex', [/* parameter description */
					[/* text */ 't', `the index of the last element, exclusive, to be sorted`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `fromIndex > toIndex`]
				]],
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `fromIndex < 0`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `toIndex > a.length`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'parallelSort(short[])', [
			[/* method description */
				[/* text */ 't', `Sorts the specified array into ascending numerical order.`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the array to be sorted`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'parallelSort(short[],int,int)', [
			[/* method description */
				[/* text */ 't', `Sorts the specified range of the array into ascending numerical order.
 The range to be sorted extends from the index `],
				[/* inline code block */ 'i', `fromIndex`],
				[/* text */ 't', `,
 inclusive, to the index `],
				[/* inline code block */ 'i', `toIndex`],
				[/* text */ 't', `, exclusive. If
 `],
				[/* inline code block */ 'i', `fromIndex == toIndex`],
				[/* text */ 't', `, the range to be sorted is empty.`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the array to be sorted`]
				]],
				[/* parameter */ 'fromIndex', [/* parameter description */
					[/* text */ 't', `the index of the first element, inclusive, to be sorted`]
				]],
				[/* parameter */ 'toIndex', [/* parameter description */
					[/* text */ 't', `the index of the last element, exclusive, to be sorted`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `fromIndex > toIndex`]
				]],
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `fromIndex < 0`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `toIndex > a.length`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'setAll(double[],java.util.function.IntToDoubleFunction)', [
			[/* method description */
				[/* text */ 't', `Set all elements of the specified array, using the provided
 generator function to compute each element.

 `],
				[/* block */ 'b', `If the generator function throws an exception, it is relayed to
 the caller and the array is left in an indeterminate state.`]
			],
			[/* parameters */
				[/* parameter */ 'array', [/* parameter description */
					[/* text */ 't', `array to be initialized`]
				]],
				[/* parameter */ 'generator', [/* parameter description */
					[/* text */ 't', `a function accepting an index and producing the desired
        value for that position`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the generator is null`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'setAll(int[],java.util.function.IntUnaryOperator)', [
			[/* method description */
				[/* text */ 't', `Set all elements of the specified array, using the provided
 generator function to compute each element.

 `],
				[/* block */ 'b', `If the generator function throws an exception, it is relayed to
 the caller and the array is left in an indeterminate state.`]
			],
			[/* parameters */
				[/* parameter */ 'array', [/* parameter description */
					[/* text */ 't', `array to be initialized`]
				]],
				[/* parameter */ 'generator', [/* parameter description */
					[/* text */ 't', `a function accepting an index and producing the desired
        value for that position`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the generator is null`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'setAll(long[],java.util.function.IntToLongFunction)', [
			[/* method description */
				[/* text */ 't', `Set all elements of the specified array, using the provided
 generator function to compute each element.

 `],
				[/* block */ 'b', `If the generator function throws an exception, it is relayed to
 the caller and the array is left in an indeterminate state.`]
			],
			[/* parameters */
				[/* parameter */ 'array', [/* parameter description */
					[/* text */ 't', `array to be initialized`]
				]],
				[/* parameter */ 'generator', [/* parameter description */
					[/* text */ 't', `a function accepting an index and producing the desired
        value for that position`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the generator is null`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'sort(byte[])', [
			[/* method description */
				[/* text */ 't', `Sorts the specified array into ascending numerical order.`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the array to be sorted`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'sort(byte[],int,int)', [
			[/* method description */
				[/* text */ 't', `Sorts the specified range of the array into ascending order. The range
 to be sorted extends from the index `],
				[/* inline code block */ 'i', `fromIndex`],
				[/* text */ 't', `, inclusive, to
 the index `],
				[/* inline code block */ 'i', `toIndex`],
				[/* text */ 't', `, exclusive. If `],
				[/* inline code block */ 'i', `fromIndex == toIndex`],
				[/* text */ 't', `,
 the range to be sorted is empty.`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the array to be sorted`]
				]],
				[/* parameter */ 'fromIndex', [/* parameter description */
					[/* text */ 't', `the index of the first element, inclusive, to be sorted`]
				]],
				[/* parameter */ 'toIndex', [/* parameter description */
					[/* text */ 't', `the index of the last element, exclusive, to be sorted`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `fromIndex > toIndex`]
				]],
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `fromIndex < 0`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `toIndex > a.length`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'sort(char[])', [
			[/* method description */
				[/* text */ 't', `Sorts the specified array into ascending numerical order.`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the array to be sorted`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'sort(char[],int,int)', [
			[/* method description */
				[/* text */ 't', `Sorts the specified range of the array into ascending order. The range
 to be sorted extends from the index `],
				[/* inline code block */ 'i', `fromIndex`],
				[/* text */ 't', `, inclusive, to
 the index `],
				[/* inline code block */ 'i', `toIndex`],
				[/* text */ 't', `, exclusive. If `],
				[/* inline code block */ 'i', `fromIndex == toIndex`],
				[/* text */ 't', `,
 the range to be sorted is empty.`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the array to be sorted`]
				]],
				[/* parameter */ 'fromIndex', [/* parameter description */
					[/* text */ 't', `the index of the first element, inclusive, to be sorted`]
				]],
				[/* parameter */ 'toIndex', [/* parameter description */
					[/* text */ 't', `the index of the last element, exclusive, to be sorted`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `fromIndex > toIndex`]
				]],
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `fromIndex < 0`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `toIndex > a.length`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'sort(double[])', [
			[/* method description */
				[/* text */ 't', `Sorts the specified array into ascending numerical order.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The `],
					[/* inline code block */ 'i', `<`],
					[/* text */ 't', ` relation does not provide a total order on all double
 values: `],
					[/* inline code block */ 'i', `-0.0d == 0.0d`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` and a `],
					[/* inline code block */ 'i', `Double.NaN`],
					[/* text */ 't', `
 value compares neither less than, greater than, nor equal to any value,
 even itself. This method uses the total order imposed by the method
 `],
					[/* reference */ 'r', `java.lang.Double#compareTo(java.lang.Double)`, `Double.compareTo(java.lang.Double)`],
					[/* text */ 't', `: `],
					[/* inline code block */ 'i', `-0.0d`],
					[/* text */ 't', ` is treated as less than value
 `],
					[/* inline code block */ 'i', `0.0d`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `Double.NaN`],
					[/* text */ 't', ` is considered greater than any
 other value and all `],
					[/* inline code block */ 'i', `Double.NaN`],
					[/* text */ 't', ` values are considered equal.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the array to be sorted`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'sort(double[],int,int)', [
			[/* method description */
				[/* text */ 't', `Sorts the specified range of the array into ascending order. The range
 to be sorted extends from the index `],
				[/* inline code block */ 'i', `fromIndex`],
				[/* text */ 't', `, inclusive, to
 the index `],
				[/* inline code block */ 'i', `toIndex`],
				[/* text */ 't', `, exclusive. If `],
				[/* inline code block */ 'i', `fromIndex == toIndex`],
				[/* text */ 't', `,
 the range to be sorted is empty.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The `],
					[/* inline code block */ 'i', `<`],
					[/* text */ 't', ` relation does not provide a total order on all double
 values: `],
					[/* inline code block */ 'i', `-0.0d == 0.0d`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` and a `],
					[/* inline code block */ 'i', `Double.NaN`],
					[/* text */ 't', `
 value compares neither less than, greater than, nor equal to any value,
 even itself. This method uses the total order imposed by the method
 `],
					[/* reference */ 'r', `java.lang.Double#compareTo(java.lang.Double)`, `Double.compareTo(java.lang.Double)`],
					[/* text */ 't', `: `],
					[/* inline code block */ 'i', `-0.0d`],
					[/* text */ 't', ` is treated as less than value
 `],
					[/* inline code block */ 'i', `0.0d`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `Double.NaN`],
					[/* text */ 't', ` is considered greater than any
 other value and all `],
					[/* inline code block */ 'i', `Double.NaN`],
					[/* text */ 't', ` values are considered equal.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the array to be sorted`]
				]],
				[/* parameter */ 'fromIndex', [/* parameter description */
					[/* text */ 't', `the index of the first element, inclusive, to be sorted`]
				]],
				[/* parameter */ 'toIndex', [/* parameter description */
					[/* text */ 't', `the index of the last element, exclusive, to be sorted`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `fromIndex > toIndex`]
				]],
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `fromIndex < 0`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `toIndex > a.length`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'sort(float[])', [
			[/* method description */
				[/* text */ 't', `Sorts the specified array into ascending numerical order.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The `],
					[/* inline code block */ 'i', `<`],
					[/* text */ 't', ` relation does not provide a total order on all float
 values: `],
					[/* inline code block */ 'i', `-0.0f == 0.0f`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` and a `],
					[/* inline code block */ 'i', `Float.NaN`],
					[/* text */ 't', `
 value compares neither less than, greater than, nor equal to any value,
 even itself. This method uses the total order imposed by the method
 `],
					[/* reference */ 'r', `java.lang.Float#compareTo(java.lang.Float)`, `Float.compareTo(java.lang.Float)`],
					[/* text */ 't', `: `],
					[/* inline code block */ 'i', `-0.0f`],
					[/* text */ 't', ` is treated as less than value
 `],
					[/* inline code block */ 'i', `0.0f`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `Float.NaN`],
					[/* text */ 't', ` is considered greater than any
 other value and all `],
					[/* inline code block */ 'i', `Float.NaN`],
					[/* text */ 't', ` values are considered equal.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the array to be sorted`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'sort(float[],int,int)', [
			[/* method description */
				[/* text */ 't', `Sorts the specified range of the array into ascending order. The range
 to be sorted extends from the index `],
				[/* inline code block */ 'i', `fromIndex`],
				[/* text */ 't', `, inclusive, to
 the index `],
				[/* inline code block */ 'i', `toIndex`],
				[/* text */ 't', `, exclusive. If `],
				[/* inline code block */ 'i', `fromIndex == toIndex`],
				[/* text */ 't', `,
 the range to be sorted is empty.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The `],
					[/* inline code block */ 'i', `<`],
					[/* text */ 't', ` relation does not provide a total order on all float
 values: `],
					[/* inline code block */ 'i', `-0.0f == 0.0f`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` and a `],
					[/* inline code block */ 'i', `Float.NaN`],
					[/* text */ 't', `
 value compares neither less than, greater than, nor equal to any value,
 even itself. This method uses the total order imposed by the method
 `],
					[/* reference */ 'r', `java.lang.Float#compareTo(java.lang.Float)`, `Float.compareTo(java.lang.Float)`],
					[/* text */ 't', `: `],
					[/* inline code block */ 'i', `-0.0f`],
					[/* text */ 't', ` is treated as less than value
 `],
					[/* inline code block */ 'i', `0.0f`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `Float.NaN`],
					[/* text */ 't', ` is considered greater than any
 other value and all `],
					[/* inline code block */ 'i', `Float.NaN`],
					[/* text */ 't', ` values are considered equal.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the array to be sorted`]
				]],
				[/* parameter */ 'fromIndex', [/* parameter description */
					[/* text */ 't', `the index of the first element, inclusive, to be sorted`]
				]],
				[/* parameter */ 'toIndex', [/* parameter description */
					[/* text */ 't', `the index of the last element, exclusive, to be sorted`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `fromIndex > toIndex`]
				]],
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `fromIndex < 0`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `toIndex > a.length`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'sort(int[])', [
			[/* method description */
				[/* text */ 't', `Sorts the specified array into ascending numerical order.`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the array to be sorted`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'sort(int[],int,int)', [
			[/* method description */
				[/* text */ 't', `Sorts the specified range of the array into ascending order. The range
 to be sorted extends from the index `],
				[/* inline code block */ 'i', `fromIndex`],
				[/* text */ 't', `, inclusive, to
 the index `],
				[/* inline code block */ 'i', `toIndex`],
				[/* text */ 't', `, exclusive. If `],
				[/* inline code block */ 'i', `fromIndex == toIndex`],
				[/* text */ 't', `,
 the range to be sorted is empty.`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the array to be sorted`]
				]],
				[/* parameter */ 'fromIndex', [/* parameter description */
					[/* text */ 't', `the index of the first element, inclusive, to be sorted`]
				]],
				[/* parameter */ 'toIndex', [/* parameter description */
					[/* text */ 't', `the index of the last element, exclusive, to be sorted`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `fromIndex > toIndex`]
				]],
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `fromIndex < 0`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `toIndex > a.length`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'sort(java.lang.Object[])', [
			[/* method description */
				[/* text */ 't', `Sorts the specified array of objects into ascending order, according
 to the `],
				[/* reference */ 'r', `java.lang.Comparable`, `natural ordering`],
				[/* text */ 't', ` of its elements.
 All elements in the array must implement the `],
				[/* reference */ 'r', `java.lang.Comparable`, `Comparable`],
				[/* text */ 't', `
 interface.  Furthermore, all elements in the array must be
 `],
				[/* text */ 't', `mutually comparable`],
				[/* text */ 't', ` (that is, `],
				[/* inline code block */ 'i', `e1.compareTo(e2)`],
				[/* text */ 't', ` must
 not throw a `],
				[/* inline code block */ 'i', `ClassCastException`],
				[/* text */ 't', ` for any elements `],
				[/* inline code block */ 'i', `e1`],
				[/* text */ 't', `
 and `],
				[/* inline code block */ 'i', `e2`],
				[/* text */ 't', ` in the array).

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This sort is guaranteed to be `],
					[/* text */ 't', `stable`],
					[/* text */ 't', `:  equal elements will
 not be reordered as a result of the sort.

 `]
				]],
				[/* block */ 'b', `Implementation note: This implementation is a stable, adaptive,
 iterative mergesort that requires far fewer than n lg(n) comparisons
 when the input array is partially sorted, while offering the
 performance of a traditional mergesort when the input array is
 randomly ordered.  If the input array is nearly sorted, the
 implementation requires approximately n comparisons.  Temporary
 storage requirements vary from a small constant for nearly sorted
 input arrays to n/2 object references for randomly ordered input
 arrays.

 `],
				[/* block */ 'b', `The implementation takes equal advantage of ascending and
 descending order in its input array, and can take advantage of
 ascending and descending order in different parts of the same
 input array.  It is well-suited to merging two or more sorted arrays:
 simply concatenate the arrays and sort the resulting array.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The implementation was adapted from Tim Peters's list sort for Python
 (`],
					[/* external link */ 'a', `http://svn.python.org/projects/python/trunk/Objects/listsort.txt`, `TimSort`],
					[/* text */ 't', `).  It uses techniques from Peter McIlroy's "Optimistic
 Sorting and Information Theoretic Complexity", in Proceedings of the
 Fourth Annual ACM-SIAM Symposium on Discrete Algorithms, pp 467-474,
 January 1993.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the array to be sorted`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the array contains elements that are not
         `],
					[/* text */ 't', `mutually comparable`],
					[/* text */ 't', ` (for example, strings and integers)`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `(optional) if the natural
         ordering of the array elements is found to violate the
         `],
					[/* reference */ 'r', `java.lang.Comparable`, `Comparable`],
					[/* text */ 't', ` contract`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'sort(java.lang.Object[],int,int)', [
			[/* method description */
				[/* text */ 't', `Sorts the specified range of the specified array of objects into
 ascending order, according to the
 `],
				[/* reference */ 'r', `java.lang.Comparable`, `natural ordering`],
				[/* text */ 't', ` of its
 elements.  The range to be sorted extends from index
 `],
				[/* inline code block */ 'i', `fromIndex`],
				[/* text */ 't', `, inclusive, to index `],
				[/* inline code block */ 'i', `toIndex`],
				[/* text */ 't', `, exclusive.
 (If `],
				[/* inline code block */ 'i', `fromIndex==toIndex`],
				[/* text */ 't', `, the range to be sorted is empty.)  All
 elements in this range must implement the `],
				[/* reference */ 'r', `java.lang.Comparable`, `Comparable`],
				[/* text */ 't', `
 interface.  Furthermore, all elements in this range must be `],
				[/* text */ 't', `mutually
 comparable`],
				[/* text */ 't', ` (that is, `],
				[/* inline code block */ 'i', `e1.compareTo(e2)`],
				[/* text */ 't', ` must not throw a
 `],
				[/* inline code block */ 'i', `ClassCastException`],
				[/* text */ 't', ` for any elements `],
				[/* inline code block */ 'i', `e1`],
				[/* text */ 't', ` and
 `],
				[/* inline code block */ 'i', `e2`],
				[/* text */ 't', ` in the array).

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This sort is guaranteed to be `],
					[/* text */ 't', `stable`],
					[/* text */ 't', `:  equal elements will
 not be reordered as a result of the sort.

 `]
				]],
				[/* block */ 'b', `Implementation note: This implementation is a stable, adaptive,
 iterative mergesort that requires far fewer than n lg(n) comparisons
 when the input array is partially sorted, while offering the
 performance of a traditional mergesort when the input array is
 randomly ordered.  If the input array is nearly sorted, the
 implementation requires approximately n comparisons.  Temporary
 storage requirements vary from a small constant for nearly sorted
 input arrays to n/2 object references for randomly ordered input
 arrays.

 `],
				[/* block */ 'b', `The implementation takes equal advantage of ascending and
 descending order in its input array, and can take advantage of
 ascending and descending order in different parts of the same
 input array.  It is well-suited to merging two or more sorted arrays:
 simply concatenate the arrays and sort the resulting array.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The implementation was adapted from Tim Peters's list sort for Python
 (`],
					[/* external link */ 'a', `http://svn.python.org/projects/python/trunk/Objects/listsort.txt`, `TimSort`],
					[/* text */ 't', `).  It uses techniques from Peter McIlroy's "Optimistic
 Sorting and Information Theoretic Complexity", in Proceedings of the
 Fourth Annual ACM-SIAM Symposium on Discrete Algorithms, pp 467-474,
 January 1993.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the array to be sorted`]
				]],
				[/* parameter */ 'fromIndex', [/* parameter description */
					[/* text */ 't', `the index of the first element (inclusive) to be
        sorted`]
				]],
				[/* parameter */ 'toIndex', [/* parameter description */
					[/* text */ 't', `the index of the last element (exclusive) to be sorted`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `fromIndex > toIndex`],
					[/* text */ 't', ` or
         (optional) if the natural ordering of the array elements is
         found to violate the `],
					[/* reference */ 'r', `java.lang.Comparable`, `Comparable`],
					[/* text */ 't', ` contract`]
				]],
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `fromIndex < 0`],
					[/* text */ 't', ` or
         `],
					[/* inline code block */ 'i', `toIndex > a.length`]
				]],
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the array contains elements that are
         not `],
					[/* text */ 't', `mutually comparable`],
					[/* text */ 't', ` (for example, strings and
         integers).`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'sort(long[])', [
			[/* method description */
				[/* text */ 't', `Sorts the specified array into ascending numerical order.`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the array to be sorted`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'sort(long[],int,int)', [
			[/* method description */
				[/* text */ 't', `Sorts the specified range of the array into ascending order. The range
 to be sorted extends from the index `],
				[/* inline code block */ 'i', `fromIndex`],
				[/* text */ 't', `, inclusive, to
 the index `],
				[/* inline code block */ 'i', `toIndex`],
				[/* text */ 't', `, exclusive. If `],
				[/* inline code block */ 'i', `fromIndex == toIndex`],
				[/* text */ 't', `,
 the range to be sorted is empty.`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the array to be sorted`]
				]],
				[/* parameter */ 'fromIndex', [/* parameter description */
					[/* text */ 't', `the index of the first element, inclusive, to be sorted`]
				]],
				[/* parameter */ 'toIndex', [/* parameter description */
					[/* text */ 't', `the index of the last element, exclusive, to be sorted`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `fromIndex > toIndex`]
				]],
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `fromIndex < 0`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `toIndex > a.length`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'sort(short[])', [
			[/* method description */
				[/* text */ 't', `Sorts the specified array into ascending numerical order.`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the array to be sorted`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'sort(short[],int,int)', [
			[/* method description */
				[/* text */ 't', `Sorts the specified range of the array into ascending order. The range
 to be sorted extends from the index `],
				[/* inline code block */ 'i', `fromIndex`],
				[/* text */ 't', `, inclusive, to
 the index `],
				[/* inline code block */ 'i', `toIndex`],
				[/* text */ 't', `, exclusive. If `],
				[/* inline code block */ 'i', `fromIndex == toIndex`],
				[/* text */ 't', `,
 the range to be sorted is empty.`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the array to be sorted`]
				]],
				[/* parameter */ 'fromIndex', [/* parameter description */
					[/* text */ 't', `the index of the first element, inclusive, to be sorted`]
				]],
				[/* parameter */ 'toIndex', [/* parameter description */
					[/* text */ 't', `the index of the last element, exclusive, to be sorted`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `fromIndex > toIndex`]
				]],
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `fromIndex < 0`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `toIndex > a.length`]
				]]
			],
			/* return */ UDF
		]]
	],
]);
