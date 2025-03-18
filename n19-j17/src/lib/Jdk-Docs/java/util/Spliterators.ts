import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.util.Spliterators', [
	[/* class description */
		[/* text */ 't', `Static classes and methods for operating on or creating instances of
 `],
		[/* reference */ 'r', `java.util.Spliterator`, `Spliterator`],
		[/* text */ 't', ` and its primitive specializations
 `],
		[/* reference */ 'r', `java.util.Spliterator.OfInt`, `Spliterator.OfInt`],
		[/* text */ 't', `, `],
		[/* reference */ 'r', `java.util.Spliterator.OfLong`, `Spliterator.OfLong`],
		[/* text */ 't', `, and
 `],
		[/* reference */ 'r', `java.util.Spliterator.OfDouble`, `Spliterator.OfDouble`],
		[/* text */ 't', `.`]
	],
	/* fields */,
	/* constructors */,
	[/* methods */
		[/* method */ 'iterator(java.util.Spliterator)', [
			[/* method description */
				[/* text */ 't', `Creates an `],
				[/* inline code block */ 'i', `Iterator`],
				[/* text */ 't', ` from a `],
				[/* inline code block */ 'i', `Spliterator`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', `Traversal of elements should be accomplished through the iterator.
 The behaviour of traversal is undefined if the spliterator is operated
 after the iterator is returned.`]
			],
			[/* parameters */
				[/* parameter */ 'spliterator', [/* parameter description */
					[/* text */ 't', `The spliterator`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the given spliterator is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `An iterator`]
			]
		]],
		[/* method */ 'emptySpliterator()', [
			[/* method description */
				[/* text */ 't', `Creates an empty `],
				[/* inline code block */ 'i', `Spliterator`],
				[/* text */ 't', `

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The empty spliterator reports `],
					[/* reference */ 'r', `java.util.Spliterator#SIZED`, `Spliterator.SIZED`],
					[/* text */ 't', ` and
 `],
					[/* reference */ 'r', `java.util.Spliterator#SUBSIZED`, `Spliterator.SUBSIZED`],
					[/* text */ 't', `.  Calls to
 `],
					[/* reference */ 'r', `java.util.Spliterator#trySplit()`, `Spliterator.trySplit()`],
					[/* text */ 't', ` always return `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `An empty spliterator`]
			]
		]],
		[/* method */ 'spliterator(java.lang.Object[],int)', [
			[/* method description */
				[/* text */ 't', `Creates a `],
				[/* inline code block */ 'i', `Spliterator`],
				[/* text */ 't', ` covering the elements of a given array,
 using a customized set of spliterator characteristics.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This method is provided as an implementation convenience for
 Spliterators which store portions of their elements in arrays, and need
 fine control over Spliterator characteristics.  Most other situations in
 which a Spliterator for an array is needed should use
 `],
					[/* reference */ 'r', `java.util.Arrays#spliterator(T[])`, `Arrays.spliterator(Object[])`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The returned spliterator always reports the characteristics
 `],
					[/* inline code block */ 'i', `SIZED`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `SUBSIZED`],
					[/* text */ 't', `.  The caller may provide additional
 characteristics for the spliterator to report; it is common to
 additionally specify `],
					[/* inline code block */ 'i', `IMMUTABLE`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `ORDERED`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'array', [/* parameter description */
					[/* text */ 't', `The array, assumed to be unmodified during use`]
				]],
				[/* parameter */ 'additionalCharacteristics', [/* parameter description */
					[/* text */ 't', `Additional spliterator characteristics
        of this spliterator's source or elements beyond `],
					[/* inline code block */ 'i', `SIZED`],
					[/* text */ 't', ` and
        `],
					[/* inline code block */ 'i', `SUBSIZED`],
					[/* text */ 't', ` which are always reported`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the given array is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `A spliterator for an array`]
			]
		]],
		[/* method */ 'spliterator(java.lang.Object[],int,int,int)', [
			[/* method description */
				[/* text */ 't', `Creates a `],
				[/* inline code block */ 'i', `Spliterator`],
				[/* text */ 't', ` covering a range of elements of a given
 array, using a customized set of spliterator characteristics.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This method is provided as an implementation convenience for
 Spliterators which store portions of their elements in arrays, and need
 fine control over Spliterator characteristics.  Most other situations in
 which a Spliterator for an array is needed should use
 `],
					[/* reference */ 'r', `java.util.Arrays#spliterator(T[])`, `Arrays.spliterator(Object[])`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The returned spliterator always reports the characteristics
 `],
					[/* inline code block */ 'i', `SIZED`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `SUBSIZED`],
					[/* text */ 't', `.  The caller may provide additional
 characteristics for the spliterator to report; it is common to
 additionally specify `],
					[/* inline code block */ 'i', `IMMUTABLE`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `ORDERED`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'array', [/* parameter description */
					[/* text */ 't', `The array, assumed to be unmodified during use`]
				]],
				[/* parameter */ 'fromIndex', [/* parameter description */
					[/* text */ 't', `The least index (inclusive) to cover`]
				]],
				[/* parameter */ 'toIndex', [/* parameter description */
					[/* text */ 't', `One past the greatest index to cover`]
				]],
				[/* parameter */ 'additionalCharacteristics', [/* parameter description */
					[/* text */ 't', `Additional spliterator characteristics
        of this spliterator's source or elements beyond `],
					[/* inline code block */ 'i', `SIZED`],
					[/* text */ 't', ` and
        `],
					[/* inline code block */ 'i', `SUBSIZED`],
					[/* text */ 't', ` which are always reported`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the given array is `],
					[/* inline code block */ 'i', `null`]
				]],
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `fromIndex`],
					[/* text */ 't', ` is negative,
         `],
					[/* inline code block */ 'i', `toIndex`],
					[/* text */ 't', ` is less than `],
					[/* inline code block */ 'i', `fromIndex`],
					[/* text */ 't', `, or
         `],
					[/* inline code block */ 'i', `toIndex`],
					[/* text */ 't', ` is greater than the array size`]
				]]
			],
			[/* return description */
				[/* text */ 't', `A spliterator for an array`]
			]
		]],
		[/* method */ 'spliterator(java.util.Collection,int)', [
			[/* method description */
				[/* text */ 't', `Creates a `],
				[/* inline code block */ 'i', `Spliterator`],
				[/* text */ 't', ` using the given collection's
 `],
				[/* reference */ 'r', `java.util.Collection#iterator()`, `Collection.iterator()`],
				[/* text */ 't', ` as the source of elements, and
 reporting its `],
				[/* reference */ 'r', `java.util.Collection#size()`, `Collection.size()`],
				[/* text */ 't', ` as its initial size.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The spliterator is
 `],
					[/* reference */ 'r', `java.util.Spliterator#binding`, `late-binding`],
					[/* text */ 't', `, inherits
 the `],
					[/* text */ 't', `fail-fast`],
					[/* text */ 't', ` properties of the collection's iterator, and
 implements `],
					[/* inline code block */ 'i', `trySplit`],
					[/* text */ 't', ` to permit limited parallelism.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'c', [/* parameter description */
					[/* text */ 't', `The collection`]
				]],
				[/* parameter */ 'characteristics', [/* parameter description */
					[/* text */ 't', `Characteristics of this spliterator's source or
        elements.  The characteristics `],
					[/* inline code block */ 'i', `SIZED`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `SUBSIZED`],
					[/* text */ 't', `
        are additionally reported unless `],
					[/* inline code block */ 'i', `CONCURRENT`],
					[/* text */ 't', ` is supplied.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the given collection is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `A spliterator from an iterator`]
			]
		]],
		[/* method */ 'spliterator(java.util.Iterator,long,int)', [
			[/* method description */
				[/* text */ 't', `Creates a `],
				[/* inline code block */ 'i', `Spliterator`],
				[/* text */ 't', ` using a given `],
				[/* inline code block */ 'i', `Iterator`],
				[/* text */ 't', `
 as the source of elements, and with a given initially reported size.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The spliterator is not
 `],
					[/* reference */ 'r', `java.util.Spliterator#binding`, `late-binding`],
					[/* text */ 't', `, inherits
 the `],
					[/* text */ 't', `fail-fast`],
					[/* text */ 't', ` properties of the iterator, and implements
 `],
					[/* inline code block */ 'i', `trySplit`],
					[/* text */ 't', ` to permit limited parallelism.

 `]
				]],
				[/* block */ 'b', `Traversal of elements should be accomplished through the spliterator.
 The behaviour of splitting and traversal is undefined if the iterator is
 operated on after the spliterator is returned, or the initially reported
 size is not equal to the actual number of elements in the source.`]
			],
			[/* parameters */
				[/* parameter */ 'iterator', [/* parameter description */
					[/* text */ 't', `The iterator for the source`]
				]],
				[/* parameter */ 'size', [/* parameter description */
					[/* text */ 't', `The number of elements in the source, to be reported as
        initial `],
					[/* inline code block */ 'i', `estimateSize`]
				]],
				[/* parameter */ 'characteristics', [/* parameter description */
					[/* text */ 't', `Characteristics of this spliterator's source or
        elements.  The characteristics `],
					[/* inline code block */ 'i', `SIZED`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `SUBSIZED`],
					[/* text */ 't', `
        are additionally reported unless `],
					[/* inline code block */ 'i', `CONCURRENT`],
					[/* text */ 't', ` is supplied.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the given iterator is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `A spliterator from an iterator`]
			]
		]],
		[/* method */ 'spliteratorUnknownSize(java.util.Iterator,int)', [
			[/* method description */
				[/* text */ 't', `Creates a `],
				[/* inline code block */ 'i', `Spliterator`],
				[/* text */ 't', ` using a given `],
				[/* inline code block */ 'i', `Iterator`],
				[/* text */ 't', `
 as the source of elements, with no initial size estimate.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The spliterator is not
 `],
					[/* reference */ 'r', `java.util.Spliterator#binding`, `late-binding`],
					[/* text */ 't', `, inherits
 the `],
					[/* text */ 't', `fail-fast`],
					[/* text */ 't', ` properties of the iterator, and implements
 `],
					[/* inline code block */ 'i', `trySplit`],
					[/* text */ 't', ` to permit limited parallelism.

 `]
				]],
				[/* block */ 'b', `Traversal of elements should be accomplished through the spliterator.
 The behaviour of splitting and traversal is undefined if the iterator is
 operated on after the spliterator is returned.`]
			],
			[/* parameters */
				[/* parameter */ 'iterator', [/* parameter description */
					[/* text */ 't', `The iterator for the source`]
				]],
				[/* parameter */ 'characteristics', [/* parameter description */
					[/* text */ 't', `Characteristics of this spliterator's source
        or elements (`],
					[/* inline code block */ 'i', `SIZED`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `SUBSIZED`],
					[/* text */ 't', `, if supplied, are
        ignored and are not reported.)`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the given iterator is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `A spliterator from an iterator`]
			]
		]],
		[/* method */ 'iterator(java.util.Spliterator.OfDouble)', [
			[/* method description */
				[/* text */ 't', `Creates an `],
				[/* inline code block */ 'i', `PrimitiveIterator.OfDouble`],
				[/* text */ 't', ` from a
 `],
				[/* inline code block */ 'i', `Spliterator.OfDouble`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', `Traversal of elements should be accomplished through the iterator.
 The behaviour of traversal is undefined if the spliterator is operated
 after the iterator is returned.`]
			],
			[/* parameters */
				[/* parameter */ 'spliterator', [/* parameter description */
					[/* text */ 't', `The spliterator`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the given spliterator is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `An iterator`]
			]
		]],
		[/* method */ 'iterator(java.util.Spliterator.OfInt)', [
			[/* method description */
				[/* text */ 't', `Creates an `],
				[/* inline code block */ 'i', `PrimitiveIterator.OfInt`],
				[/* text */ 't', ` from a
 `],
				[/* inline code block */ 'i', `Spliterator.OfInt`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', `Traversal of elements should be accomplished through the iterator.
 The behaviour of traversal is undefined if the spliterator is operated
 after the iterator is returned.`]
			],
			[/* parameters */
				[/* parameter */ 'spliterator', [/* parameter description */
					[/* text */ 't', `The spliterator`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the given spliterator is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `An iterator`]
			]
		]],
		[/* method */ 'iterator(java.util.Spliterator.OfLong)', [
			[/* method description */
				[/* text */ 't', `Creates an `],
				[/* inline code block */ 'i', `PrimitiveIterator.OfLong`],
				[/* text */ 't', ` from a
 `],
				[/* inline code block */ 'i', `Spliterator.OfLong`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', `Traversal of elements should be accomplished through the iterator.
 The behaviour of traversal is undefined if the spliterator is operated
 after the iterator is returned.`]
			],
			[/* parameters */
				[/* parameter */ 'spliterator', [/* parameter description */
					[/* text */ 't', `The spliterator`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the given spliterator is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `An iterator`]
			]
		]],
		[/* method */ 'emptyDoubleSpliterator()', [
			[/* method description */
				[/* text */ 't', `Creates an empty `],
				[/* inline code block */ 'i', `Spliterator.OfDouble`],
				[/* text */ 't', `

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The empty spliterator reports `],
					[/* reference */ 'r', `java.util.Spliterator#SIZED`, `Spliterator.SIZED`],
					[/* text */ 't', ` and
 `],
					[/* reference */ 'r', `java.util.Spliterator#SUBSIZED`, `Spliterator.SUBSIZED`],
					[/* text */ 't', `.  Calls to
 `],
					[/* reference */ 'r', `java.util.Spliterator#trySplit()`, `Spliterator.trySplit()`],
					[/* text */ 't', ` always return `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `An empty spliterator`]
			]
		]],
		[/* method */ 'spliterator(double[],int)', [
			[/* method description */
				[/* text */ 't', `Creates a `],
				[/* inline code block */ 'i', `Spliterator.OfDouble`],
				[/* text */ 't', ` covering the elements of a given array,
 using a customized set of spliterator characteristics.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This method is provided as an implementation convenience for
 Spliterators which store portions of their elements in arrays, and need
 fine control over Spliterator characteristics.  Most other situations in
 which a Spliterator for an array is needed should use
 `],
					[/* reference */ 'r', `java.util.Arrays#spliterator(double[])`, `Arrays.spliterator(double[])`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The returned spliterator always reports the characteristics
 `],
					[/* inline code block */ 'i', `SIZED`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `SUBSIZED`],
					[/* text */ 't', `.  The caller may provide additional
 characteristics for the spliterator to report; it is common to
 additionally specify `],
					[/* inline code block */ 'i', `IMMUTABLE`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `ORDERED`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'array', [/* parameter description */
					[/* text */ 't', `The array, assumed to be unmodified during use`]
				]],
				[/* parameter */ 'additionalCharacteristics', [/* parameter description */
					[/* text */ 't', `Additional spliterator characteristics
        of this spliterator's source or elements beyond `],
					[/* inline code block */ 'i', `SIZED`],
					[/* text */ 't', ` and
        `],
					[/* inline code block */ 'i', `SUBSIZED`],
					[/* text */ 't', ` which are always reported`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the given array is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `A spliterator for an array`]
			]
		]],
		[/* method */ 'spliterator(double[],int,int,int)', [
			[/* method description */
				[/* text */ 't', `Creates a `],
				[/* inline code block */ 'i', `Spliterator.OfDouble`],
				[/* text */ 't', ` covering a range of elements of a
 given array, using a customized set of spliterator characteristics.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This method is provided as an implementation convenience for
 Spliterators which store portions of their elements in arrays, and need
 fine control over Spliterator characteristics.  Most other situations in
 which a Spliterator for an array is needed should use
 `],
					[/* reference */ 'r', `java.util.Arrays#spliterator(double[],int,int)`, `Arrays.spliterator(double[], int, int)`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The returned spliterator always reports the characteristics
 `],
					[/* inline code block */ 'i', `SIZED`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `SUBSIZED`],
					[/* text */ 't', `.  The caller may provide additional
 characteristics for the spliterator to report.  (For example, if it is
 known the array will not be further modified, specify `],
					[/* inline code block */ 'i', `IMMUTABLE`],
					[/* text */ 't', `;
 if the array data is considered to have an encounter order, specify
 `],
					[/* inline code block */ 'i', `ORDERED`],
					[/* text */ 't', `).  The method `],
					[/* reference */ 'r', `java.util.Arrays#spliterator(long[],int,int)`, `Arrays.spliterator(long[], int, int)`],
					[/* text */ 't', ` can
 often be used instead, which returns a spliterator that reports
 `],
					[/* inline code block */ 'i', `SIZED`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `SUBSIZED`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `IMMUTABLE`],
					[/* text */ 't', `, and `],
					[/* inline code block */ 'i', `ORDERED`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'array', [/* parameter description */
					[/* text */ 't', `The array, assumed to be unmodified during use`]
				]],
				[/* parameter */ 'fromIndex', [/* parameter description */
					[/* text */ 't', `The least index (inclusive) to cover`]
				]],
				[/* parameter */ 'toIndex', [/* parameter description */
					[/* text */ 't', `One past the greatest index to cover`]
				]],
				[/* parameter */ 'additionalCharacteristics', [/* parameter description */
					[/* text */ 't', `Additional spliterator characteristics
        of this spliterator's source or elements beyond `],
					[/* inline code block */ 'i', `SIZED`],
					[/* text */ 't', ` and
        `],
					[/* inline code block */ 'i', `SUBSIZED`],
					[/* text */ 't', ` which are always reported`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the given array is `],
					[/* inline code block */ 'i', `null`]
				]],
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `fromIndex`],
					[/* text */ 't', ` is negative,
         `],
					[/* inline code block */ 'i', `toIndex`],
					[/* text */ 't', ` is less than `],
					[/* inline code block */ 'i', `fromIndex`],
					[/* text */ 't', `, or
         `],
					[/* inline code block */ 'i', `toIndex`],
					[/* text */ 't', ` is greater than the array size`]
				]]
			],
			[/* return description */
				[/* text */ 't', `A spliterator for an array`]
			]
		]],
		[/* method */ 'spliterator(java.util.PrimitiveIterator.OfDouble,long,int)', [
			[/* method description */
				[/* text */ 't', `Creates a `],
				[/* inline code block */ 'i', `Spliterator.OfDouble`],
				[/* text */ 't', ` using a given
 `],
				[/* inline code block */ 'i', `DoubleStream.DoubleIterator`],
				[/* text */ 't', ` as the source of elements, and with a
 given initially reported size.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The spliterator is not
 `],
					[/* reference */ 'r', `java.util.Spliterator#binding`, `late-binding`],
					[/* text */ 't', `, inherits
 the `],
					[/* text */ 't', `fail-fast`],
					[/* text */ 't', ` properties of the iterator, and implements
 `],
					[/* inline code block */ 'i', `trySplit`],
					[/* text */ 't', ` to permit limited parallelism.

 `]
				]],
				[/* block */ 'b', `Traversal of elements should be accomplished through the spliterator.
 The behaviour of splitting and traversal is undefined if the iterator is
 operated on after the spliterator is returned, or the initially reported
 size is not equal to the actual number of elements in the source.`]
			],
			[/* parameters */
				[/* parameter */ 'iterator', [/* parameter description */
					[/* text */ 't', `The iterator for the source`]
				]],
				[/* parameter */ 'size', [/* parameter description */
					[/* text */ 't', `The number of elements in the source, to be reported as
        initial `],
					[/* inline code block */ 'i', `estimateSize`]
				]],
				[/* parameter */ 'characteristics', [/* parameter description */
					[/* text */ 't', `Characteristics of this spliterator's source or
        elements.  The characteristics `],
					[/* inline code block */ 'i', `SIZED`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `SUBSIZED`],
					[/* text */ 't', `
        are additionally reported unless `],
					[/* inline code block */ 'i', `CONCURRENT`],
					[/* text */ 't', ` is supplied.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the given iterator is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `A spliterator from an iterator`]
			]
		]],
		[/* method */ 'spliteratorUnknownSize(java.util.PrimitiveIterator.OfDouble,int)', [
			[/* method description */
				[/* text */ 't', `Creates a `],
				[/* inline code block */ 'i', `Spliterator.OfDouble`],
				[/* text */ 't', ` using a given
 `],
				[/* inline code block */ 'i', `DoubleStream.DoubleIterator`],
				[/* text */ 't', ` as the source of elements, with no
 initial size estimate.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The spliterator is not
 `],
					[/* reference */ 'r', `java.util.Spliterator#binding`, `late-binding`],
					[/* text */ 't', `, inherits
 the `],
					[/* text */ 't', `fail-fast`],
					[/* text */ 't', ` properties of the iterator, and implements
 `],
					[/* inline code block */ 'i', `trySplit`],
					[/* text */ 't', ` to permit limited parallelism.

 `]
				]],
				[/* block */ 'b', `Traversal of elements should be accomplished through the spliterator.
 The behaviour of splitting and traversal is undefined if the iterator is
 operated on after the spliterator is returned.`]
			],
			[/* parameters */
				[/* parameter */ 'iterator', [/* parameter description */
					[/* text */ 't', `The iterator for the source`]
				]],
				[/* parameter */ 'characteristics', [/* parameter description */
					[/* text */ 't', `Characteristics of this spliterator's source
        or elements (`],
					[/* inline code block */ 'i', `SIZED`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `SUBSIZED`],
					[/* text */ 't', `, if supplied, are
        ignored and are not reported.)`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the given iterator is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `A spliterator from an iterator`]
			]
		]],
		[/* method */ 'emptyIntSpliterator()', [
			[/* method description */
				[/* text */ 't', `Creates an empty `],
				[/* inline code block */ 'i', `Spliterator.OfInt`],
				[/* text */ 't', `

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The empty spliterator reports `],
					[/* reference */ 'r', `java.util.Spliterator#SIZED`, `Spliterator.SIZED`],
					[/* text */ 't', ` and
 `],
					[/* reference */ 'r', `java.util.Spliterator#SUBSIZED`, `Spliterator.SUBSIZED`],
					[/* text */ 't', `.  Calls to
 `],
					[/* reference */ 'r', `java.util.Spliterator#trySplit()`, `Spliterator.trySplit()`],
					[/* text */ 't', ` always return `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `An empty spliterator`]
			]
		]],
		[/* method */ 'spliterator(int[],int)', [
			[/* method description */
				[/* text */ 't', `Creates a `],
				[/* inline code block */ 'i', `Spliterator.OfInt`],
				[/* text */ 't', ` covering the elements of a given array,
 using a customized set of spliterator characteristics.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This method is provided as an implementation convenience for
 Spliterators which store portions of their elements in arrays, and need
 fine control over Spliterator characteristics.  Most other situations in
 which a Spliterator for an array is needed should use
 `],
					[/* reference */ 'r', `java.util.Arrays#spliterator(int[])`, `Arrays.spliterator(int[])`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The returned spliterator always reports the characteristics
 `],
					[/* inline code block */ 'i', `SIZED`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `SUBSIZED`],
					[/* text */ 't', `.  The caller may provide additional
 characteristics for the spliterator to report; it is common to
 additionally specify `],
					[/* inline code block */ 'i', `IMMUTABLE`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `ORDERED`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'array', [/* parameter description */
					[/* text */ 't', `The array, assumed to be unmodified during use`]
				]],
				[/* parameter */ 'additionalCharacteristics', [/* parameter description */
					[/* text */ 't', `Additional spliterator characteristics
        of this spliterator's source or elements beyond `],
					[/* inline code block */ 'i', `SIZED`],
					[/* text */ 't', ` and
        `],
					[/* inline code block */ 'i', `SUBSIZED`],
					[/* text */ 't', ` which are always reported`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the given array is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `A spliterator for an array`]
			]
		]],
		[/* method */ 'spliterator(int[],int,int,int)', [
			[/* method description */
				[/* text */ 't', `Creates a `],
				[/* inline code block */ 'i', `Spliterator.OfInt`],
				[/* text */ 't', ` covering a range of elements of a
 given array, using a customized set of spliterator characteristics.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This method is provided as an implementation convenience for
 Spliterators which store portions of their elements in arrays, and need
 fine control over Spliterator characteristics.  Most other situations in
 which a Spliterator for an array is needed should use
 `],
					[/* reference */ 'r', `java.util.Arrays#spliterator(int[],int,int)`, `Arrays.spliterator(int[], int, int)`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The returned spliterator always reports the characteristics
 `],
					[/* inline code block */ 'i', `SIZED`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `SUBSIZED`],
					[/* text */ 't', `.  The caller may provide additional
 characteristics for the spliterator to report; it is common to
 additionally specify `],
					[/* inline code block */ 'i', `IMMUTABLE`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `ORDERED`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'array', [/* parameter description */
					[/* text */ 't', `The array, assumed to be unmodified during use`]
				]],
				[/* parameter */ 'fromIndex', [/* parameter description */
					[/* text */ 't', `The least index (inclusive) to cover`]
				]],
				[/* parameter */ 'toIndex', [/* parameter description */
					[/* text */ 't', `One past the greatest index to cover`]
				]],
				[/* parameter */ 'additionalCharacteristics', [/* parameter description */
					[/* text */ 't', `Additional spliterator characteristics
        of this spliterator's source or elements beyond `],
					[/* inline code block */ 'i', `SIZED`],
					[/* text */ 't', ` and
        `],
					[/* inline code block */ 'i', `SUBSIZED`],
					[/* text */ 't', ` which are always reported`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the given array is `],
					[/* inline code block */ 'i', `null`]
				]],
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `fromIndex`],
					[/* text */ 't', ` is negative,
         `],
					[/* inline code block */ 'i', `toIndex`],
					[/* text */ 't', ` is less than `],
					[/* inline code block */ 'i', `fromIndex`],
					[/* text */ 't', `, or
         `],
					[/* inline code block */ 'i', `toIndex`],
					[/* text */ 't', ` is greater than the array size`]
				]]
			],
			[/* return description */
				[/* text */ 't', `A spliterator for an array`]
			]
		]],
		[/* method */ 'spliterator(java.util.PrimitiveIterator.OfInt,long,int)', [
			[/* method description */
				[/* text */ 't', `Creates a `],
				[/* inline code block */ 'i', `Spliterator.OfInt`],
				[/* text */ 't', ` using a given
 `],
				[/* inline code block */ 'i', `IntStream.IntIterator`],
				[/* text */ 't', ` as the source of elements, and with a given
 initially reported size.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The spliterator is not
 `],
					[/* reference */ 'r', `java.util.Spliterator#binding`, `late-binding`],
					[/* text */ 't', `, inherits
 the `],
					[/* text */ 't', `fail-fast`],
					[/* text */ 't', ` properties of the iterator, and implements
 `],
					[/* inline code block */ 'i', `trySplit`],
					[/* text */ 't', ` to permit limited parallelism.

 `]
				]],
				[/* block */ 'b', `Traversal of elements should be accomplished through the spliterator.
 The behaviour of splitting and traversal is undefined if the iterator is
 operated on after the spliterator is returned, or the initially reported
 size is not equal to the actual number of elements in the source.`]
			],
			[/* parameters */
				[/* parameter */ 'iterator', [/* parameter description */
					[/* text */ 't', `The iterator for the source`]
				]],
				[/* parameter */ 'size', [/* parameter description */
					[/* text */ 't', `The number of elements in the source, to be reported as
        initial `],
					[/* inline code block */ 'i', `estimateSize`],
					[/* text */ 't', `.`]
				]],
				[/* parameter */ 'characteristics', [/* parameter description */
					[/* text */ 't', `Characteristics of this spliterator's source or
        elements.  The characteristics `],
					[/* inline code block */ 'i', `SIZED`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `SUBSIZED`],
					[/* text */ 't', `
        are additionally reported unless `],
					[/* inline code block */ 'i', `CONCURRENT`],
					[/* text */ 't', ` is supplied.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the given iterator is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `A spliterator from an iterator`]
			]
		]],
		[/* method */ 'spliteratorUnknownSize(java.util.PrimitiveIterator.OfInt,int)', [
			[/* method description */
				[/* text */ 't', `Creates a `],
				[/* inline code block */ 'i', `Spliterator.OfInt`],
				[/* text */ 't', ` using a given
 `],
				[/* inline code block */ 'i', `IntStream.IntIterator`],
				[/* text */ 't', ` as the source of elements, with no initial
 size estimate.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The spliterator is not
 `],
					[/* reference */ 'r', `java.util.Spliterator#binding`, `late-binding`],
					[/* text */ 't', `, inherits
 the `],
					[/* text */ 't', `fail-fast`],
					[/* text */ 't', ` properties of the iterator, and implements
 `],
					[/* inline code block */ 'i', `trySplit`],
					[/* text */ 't', ` to permit limited parallelism.

 `]
				]],
				[/* block */ 'b', `Traversal of elements should be accomplished through the spliterator.
 The behaviour of splitting and traversal is undefined if the iterator is
 operated on after the spliterator is returned.`]
			],
			[/* parameters */
				[/* parameter */ 'iterator', [/* parameter description */
					[/* text */ 't', `The iterator for the source`]
				]],
				[/* parameter */ 'characteristics', [/* parameter description */
					[/* text */ 't', `Characteristics of this spliterator's source
        or elements (`],
					[/* inline code block */ 'i', `SIZED`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `SUBSIZED`],
					[/* text */ 't', `, if supplied, are
        ignored and are not reported.)`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the given iterator is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `A spliterator from an iterator`]
			]
		]],
		[/* method */ 'emptyLongSpliterator()', [
			[/* method description */
				[/* text */ 't', `Creates an empty `],
				[/* inline code block */ 'i', `Spliterator.OfLong`],
				[/* text */ 't', `

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The empty spliterator reports `],
					[/* reference */ 'r', `java.util.Spliterator#SIZED`, `Spliterator.SIZED`],
					[/* text */ 't', ` and
 `],
					[/* reference */ 'r', `java.util.Spliterator#SUBSIZED`, `Spliterator.SUBSIZED`],
					[/* text */ 't', `.  Calls to
 `],
					[/* reference */ 'r', `java.util.Spliterator#trySplit()`, `Spliterator.trySplit()`],
					[/* text */ 't', ` always return `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `An empty spliterator`]
			]
		]],
		[/* method */ 'spliterator(java.util.PrimitiveIterator.OfLong,long,int)', [
			[/* method description */
				[/* text */ 't', `Creates a `],
				[/* inline code block */ 'i', `Spliterator.OfLong`],
				[/* text */ 't', ` using a given
 `],
				[/* inline code block */ 'i', `LongStream.LongIterator`],
				[/* text */ 't', ` as the source of elements, and with a
 given initially reported size.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The spliterator is not
 `],
					[/* reference */ 'r', `java.util.Spliterator#binding`, `late-binding`],
					[/* text */ 't', `, inherits
 the `],
					[/* text */ 't', `fail-fast`],
					[/* text */ 't', ` properties of the iterator, and implements
 `],
					[/* inline code block */ 'i', `trySplit`],
					[/* text */ 't', ` to permit limited parallelism.

 `]
				]],
				[/* block */ 'b', `Traversal of elements should be accomplished through the spliterator.
 The behaviour of splitting and traversal is undefined if the iterator is
 operated on after the spliterator is returned, or the initially reported
 size is not equal to the actual number of elements in the source.`]
			],
			[/* parameters */
				[/* parameter */ 'iterator', [/* parameter description */
					[/* text */ 't', `The iterator for the source`]
				]],
				[/* parameter */ 'size', [/* parameter description */
					[/* text */ 't', `The number of elements in the source, to be reported as
        initial `],
					[/* inline code block */ 'i', `estimateSize`],
					[/* text */ 't', `.`]
				]],
				[/* parameter */ 'characteristics', [/* parameter description */
					[/* text */ 't', `Characteristics of this spliterator's source or
        elements.  The characteristics `],
					[/* inline code block */ 'i', `SIZED`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `SUBSIZED`],
					[/* text */ 't', `
        are additionally reported unless `],
					[/* inline code block */ 'i', `CONCURRENT`],
					[/* text */ 't', ` is supplied.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the given iterator is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `A spliterator from an iterator`]
			]
		]],
		[/* method */ 'spliterator(long[],int)', [
			[/* method description */
				[/* text */ 't', `Creates a `],
				[/* inline code block */ 'i', `Spliterator.OfLong`],
				[/* text */ 't', ` covering the elements of a given array,
 using a customized set of spliterator characteristics.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This method is provided as an implementation convenience for
 Spliterators which store portions of their elements in arrays, and need
 fine control over Spliterator characteristics.  Most other situations in
 which a Spliterator for an array is needed should use
 `],
					[/* reference */ 'r', `java.util.Arrays#spliterator(long[])`, `Arrays.spliterator(long[])`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The returned spliterator always reports the characteristics
 `],
					[/* inline code block */ 'i', `SIZED`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `SUBSIZED`],
					[/* text */ 't', `.  The caller may provide additional
 characteristics for the spliterator to report; it is common to
 additionally specify `],
					[/* inline code block */ 'i', `IMMUTABLE`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `ORDERED`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'array', [/* parameter description */
					[/* text */ 't', `The array, assumed to be unmodified during use`]
				]],
				[/* parameter */ 'additionalCharacteristics', [/* parameter description */
					[/* text */ 't', `Additional spliterator characteristics
        of this spliterator's source or elements beyond `],
					[/* inline code block */ 'i', `SIZED`],
					[/* text */ 't', ` and
        `],
					[/* inline code block */ 'i', `SUBSIZED`],
					[/* text */ 't', ` which are always reported`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the given array is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `A spliterator for an array`]
			]
		]],
		[/* method */ 'spliterator(long[],int,int,int)', [
			[/* method description */
				[/* text */ 't', `Creates a `],
				[/* inline code block */ 'i', `Spliterator.OfLong`],
				[/* text */ 't', ` covering a range of elements of a
 given array, using a customized set of spliterator characteristics.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This method is provided as an implementation convenience for
 Spliterators which store portions of their elements in arrays, and need
 fine control over Spliterator characteristics.  Most other situations in
 which a Spliterator for an array is needed should use
 `],
					[/* reference */ 'r', `java.util.Arrays#spliterator(long[],int,int)`, `Arrays.spliterator(long[], int, int)`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The returned spliterator always reports the characteristics
 `],
					[/* inline code block */ 'i', `SIZED`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `SUBSIZED`],
					[/* text */ 't', `.  The caller may provide additional
 characteristics for the spliterator to report.  (For example, if it is
 known the array will not be further modified, specify `],
					[/* inline code block */ 'i', `IMMUTABLE`],
					[/* text */ 't', `;
 if the array data is considered to have an encounter order, specify
 `],
					[/* inline code block */ 'i', `ORDERED`],
					[/* text */ 't', `).  The method `],
					[/* reference */ 'r', `java.util.Arrays#spliterator(long[],int,int)`, `Arrays.spliterator(long[], int, int)`],
					[/* text */ 't', ` can
 often be used instead, which returns a spliterator that reports
 `],
					[/* inline code block */ 'i', `SIZED`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `SUBSIZED`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `IMMUTABLE`],
					[/* text */ 't', `, and `],
					[/* inline code block */ 'i', `ORDERED`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'array', [/* parameter description */
					[/* text */ 't', `The array, assumed to be unmodified during use`]
				]],
				[/* parameter */ 'fromIndex', [/* parameter description */
					[/* text */ 't', `The least index (inclusive) to cover`]
				]],
				[/* parameter */ 'toIndex', [/* parameter description */
					[/* text */ 't', `One past the greatest index to cover`]
				]],
				[/* parameter */ 'additionalCharacteristics', [/* parameter description */
					[/* text */ 't', `Additional spliterator characteristics
        of this spliterator's source or elements beyond `],
					[/* inline code block */ 'i', `SIZED`],
					[/* text */ 't', ` and
        `],
					[/* inline code block */ 'i', `SUBSIZED`],
					[/* text */ 't', ` which are always reported`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the given array is `],
					[/* inline code block */ 'i', `null`]
				]],
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `fromIndex`],
					[/* text */ 't', ` is negative,
         `],
					[/* inline code block */ 'i', `toIndex`],
					[/* text */ 't', ` is less than `],
					[/* inline code block */ 'i', `fromIndex`],
					[/* text */ 't', `, or
         `],
					[/* inline code block */ 'i', `toIndex`],
					[/* text */ 't', ` is greater than the array size`]
				]]
			],
			[/* return description */
				[/* text */ 't', `A spliterator for an array`]
			]
		]],
		[/* method */ 'spliteratorUnknownSize(java.util.PrimitiveIterator.OfLong,int)', [
			[/* method description */
				[/* text */ 't', `Creates a `],
				[/* inline code block */ 'i', `Spliterator.OfLong`],
				[/* text */ 't', ` using a given
 `],
				[/* inline code block */ 'i', `LongStream.LongIterator`],
				[/* text */ 't', ` as the source of elements, with no
 initial size estimate.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The spliterator is not
 `],
					[/* reference */ 'r', `java.util.Spliterator#binding`, `late-binding`],
					[/* text */ 't', `, inherits
 the `],
					[/* text */ 't', `fail-fast`],
					[/* text */ 't', ` properties of the iterator, and implements
 `],
					[/* inline code block */ 'i', `trySplit`],
					[/* text */ 't', ` to permit limited parallelism.

 `]
				]],
				[/* block */ 'b', `Traversal of elements should be accomplished through the spliterator.
 The behaviour of splitting and traversal is undefined if the iterator is
 operated on after the spliterator is returned.`]
			],
			[/* parameters */
				[/* parameter */ 'iterator', [/* parameter description */
					[/* text */ 't', `The iterator for the source`]
				]],
				[/* parameter */ 'characteristics', [/* parameter description */
					[/* text */ 't', `Characteristics of this spliterator's source
        or elements (`],
					[/* inline code block */ 'i', `SIZED`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `SUBSIZED`],
					[/* text */ 't', `, if supplied, are
        ignored and are not reported.)`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the given iterator is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `A spliterator from an iterator`]
			]
		]]
	],
	/* enum values */ UDF
]);
