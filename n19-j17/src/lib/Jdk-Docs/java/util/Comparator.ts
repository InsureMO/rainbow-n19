import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.util.Comparator', [
	[/* class description */
		[/* text */ 't', `A comparison function, which imposes a `],
		[/* text */ 't', `total ordering`],
		[/* text */ 't', ` on
 some collection of objects.  Comparators can be passed to a sort
 method (such as `],
		[/* reference */ 'r', `.Collections#sort(java.util.List,java.util.Comparator)`],
		[/* text */ 't', ` or `],
		[/* reference */ 'r', `.Arrays#sort(T[],java.util.Comparator)`],
		[/* text */ 't', `) to allow precise control over the sort order.
 Comparators can also be used to control the order of certain data
 structures (such as `],
		[/* reference */ 'r', `java.util.SortedSet`],
		[/* text */ 't', ` or
 `],
		[/* reference */ 'r', `java.util.SortedMap`],
		[/* text */ 't', `), or to provide an ordering for
 collections of objects that don't have a `],
		[/* reference */ 'r', `java.lang.Comparable`],
		[/* text */ 't', `.`],
		[/* block */ 'b', [
			[/* text */ 't', `

 The ordering imposed by a comparator `],
			[/* inline code block */ 'i', `c`],
			[/* text */ 't', ` on a set of elements
 `],
			[/* inline code block */ 'i', `S`],
			[/* text */ 't', ` is said to be `],
			[/* text */ 't', `consistent with equals`],
			[/* text */ 't', ` if and only if
 `],
			[/* inline code block */ 'i', `c.compare(e1, e2)==0`],
			[/* text */ 't', ` has the same boolean value as
 `],
			[/* inline code block */ 'i', `e1.equals(e2)`],
			[/* text */ 't', ` for every `],
			[/* inline code block */ 'i', `e1`],
			[/* text */ 't', ` and `],
			[/* inline code block */ 'i', `e2`],
			[/* text */ 't', ` in
 `],
			[/* inline code block */ 'i', `S`],
			[/* text */ 't', `.`]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `

 Caution should be exercised when using a comparator capable of imposing an
 ordering inconsistent with equals to order a sorted set (or sorted map).
 Suppose a sorted set (or sorted map) with an explicit comparator `],
			[/* inline code block */ 'i', `c`],
			[/* text */ 't', `
 is used with elements (or keys) drawn from a set `],
			[/* inline code block */ 'i', `S`],
			[/* text */ 't', `.  If the
 ordering imposed by `],
			[/* inline code block */ 'i', `c`],
			[/* text */ 't', ` on `],
			[/* inline code block */ 'i', `S`],
			[/* text */ 't', ` is inconsistent with equals,
 the sorted set (or sorted map) will behave "strangely."  In particular the
 sorted set (or sorted map) will violate the general contract for set (or
 map), which is defined in terms of `],
			[/* inline code block */ 'i', `equals`],
			[/* text */ 't', `.`]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `

 For example, suppose one adds two elements `],
			[/* inline code block */ 'i', `a`],
			[/* text */ 't', ` and `],
			[/* inline code block */ 'i', `b`],
			[/* text */ 't', ` such that
 `],
			[/* inline code block */ 'i', `(a.equals(b) && c.compare(a, b) != 0)`],
			[/* text */ 't', `
 to an empty `],
			[/* inline code block */ 'i', `TreeSet`],
			[/* text */ 't', ` with comparator `],
			[/* inline code block */ 'i', `c`],
			[/* text */ 't', `.
 The second `],
			[/* inline code block */ 'i', `add`],
			[/* text */ 't', ` operation will return
 true (and the size of the tree set will increase) because `],
			[/* inline code block */ 'i', `a`],
			[/* text */ 't', ` and
 `],
			[/* inline code block */ 'i', `b`],
			[/* text */ 't', ` are not equivalent from the tree set's perspective, even though
 this is contrary to the specification of the
 `],
			[/* reference */ 'r', `.Set#add(E)`],
			[/* text */ 't', ` method.`]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `

 Note: It is generally a good idea for comparators to also implement
 `],
			[/* inline code block */ 'i', `java.io.Serializable`],
			[/* text */ 't', `, as they may be used as ordering methods in
 serializable data structures (like `],
			[/* reference */ 'r', `java.util.TreeSet`],
			[/* text */ 't', `, `],
			[/* reference */ 'r', `java.util.TreeMap`],
			[/* text */ 't', `).  In
 order for the data structure to serialize successfully, the comparator (if
 provided) must implement `],
			[/* inline code block */ 'i', `Serializable`],
			[/* text */ 't', `.`]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `

 For the mathematically inclined, the `],
			[/* text */ 't', `relation`],
			[/* text */ 't', ` that defines the
 `],
			[/* text */ 't', `imposed ordering`],
			[/* text */ 't', ` that a given comparator `],
			[/* inline code block */ 'i', `c`],
			[/* text */ 't', ` imposes on a
 given set of objects `],
			[/* inline code block */ 'i', `S`],
			[/* text */ 't', ` is:`]
		]],
		[/* code block */ 'c', `       {(x, y) such that c.compare(x, y) <= 0}.
 `],
		[/* text */ 't', ` The `],
		[/* text */ 't', `quotient`],
		[/* text */ 't', ` for this total order is:`],
		[/* code block */ 'c', `       {(x, y) such that c.compare(x, y) == 0}.
 `],
		[/* text */ 't', `

 It follows immediately from the contract for `],
		[/* inline code block */ 'i', `compare`],
		[/* text */ 't', ` that the
 quotient is an `],
		[/* text */ 't', `equivalence relation`],
		[/* text */ 't', ` on `],
		[/* inline code block */ 'i', `S`],
		[/* text */ 't', `, and that the
 imposed ordering is a `],
		[/* text */ 't', `total order`],
		[/* text */ 't', ` on `],
		[/* inline code block */ 'i', `S`],
		[/* text */ 't', `.  When we say that
 the ordering imposed by `],
		[/* inline code block */ 'i', `c`],
		[/* text */ 't', ` on `],
		[/* inline code block */ 'i', `S`],
		[/* text */ 't', ` is `],
		[/* text */ 't', `consistent with
 equals`],
		[/* text */ 't', `, we mean that the quotient for the ordering is the equivalence
 relation defined by the objects' `],
		[/* reference */ 'r', `java.Object#equals(java.lang.Object)`],
		[/* text */ 't', ` method(s):`],
		[/* code block */ 'c', `     {(x, y) such that x.equals(y)}. `],
		[/* text */ 't', `

 In other words, when the imposed ordering is consistent with
 equals, the equivalence classes defined by the equivalence relation
 of the `],
		[/* inline code block */ 'i', `equals`],
		[/* text */ 't', ` method and the equivalence classes defined by
 the quotient of the `],
		[/* inline code block */ 'i', `compare`],
		[/* text */ 't', ` method are the same.

 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `Unlike `],
			[/* inline code block */ 'i', `Comparable`],
			[/* text */ 't', `, a comparator may optionally permit
 comparison of null arguments, while maintaining the requirements for
 an equivalence relation.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `This interface is a member of the
 `],
			[/* text */ 't', `Java Collections Framework`],
			[/* text */ 't', `.`]
		]]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'equals(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Indicates whether some other object is "equal to"
 this comparator.  This method must obey the general contract of
 `],
				[/* reference */ 'r', `java.Object#equals(java.lang.Object)`],
				[/* text */ 't', `.  Additionally, this method can
 return `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', `only`],
				[/* text */ 't', ` if the specified object is also
 a comparator and it imposes the same ordering as this
 comparator.  Thus, `],
				[/* inline code block */ 'i', `comp1.equals(comp2)`],
				[/* text */ 't', ` implies that
 `],
				[/* reference */ 'r', `java.Integer#signum(int)`],
				[/* inline code block */ 'i', `(comp1.compare(o1, o2))==signum(comp2.compare(o1, o2))`],
				[/* text */ 't', ` for every object reference
 `],
				[/* inline code block */ 'i', `o1`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `o2`],
				[/* text */ 't', `.`],
				[/* block */ 'b', [
					[/* text */ 't', `

 Note that it is `],
					[/* text */ 't', `always`],
					[/* text */ 't', ` safe `],
					[/* text */ 't', `not`],
					[/* text */ 't', ` to override
 `],
					[/* inline code block */ 'i', `Object.equals(Object)`],
					[/* text */ 't', `.  However, overriding this method may,
 in some cases, improve performance by allowing programs to determine
 that two distinct comparators impose the same order.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `the reference object with which to compare.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` only if the specified object is also
          a comparator and it imposes the same ordering as this
          comparator.`]
			]
		]],
		[/* method */ 'compare(java.lang.Object,java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Compares its two arguments for order.  Returns a negative integer,
 zero, or a positive integer as the first argument is less than, equal
 to, or greater than the second.`],
				[/* block */ 'b', [
					[/* text */ 't', `

 The implementor must ensure that `],
					[/* reference */ 'r', `java.Integer#signum(int)`],
					[/* inline code block */ 'i', `(compare(x, y)) == -signum(compare(y, x))`],
					[/* text */ 't', ` for
 all `],
					[/* inline code block */ 'i', `x`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `y`],
					[/* text */ 't', `.  (This implies that `],
					[/* inline code block */ 'i', `compare(x, y)`],
					[/* text */ 't', ` must throw an exception if and only if `],
					[/* inline code block */ 'i', `compare(y, x)`],
					[/* text */ 't', ` throws an exception.)`]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `

 The implementor must also ensure that the relation is transitive:
 `],
					[/* inline code block */ 'i', `((compare(x, y)>0) && (compare(y, z)>0))`],
					[/* text */ 't', ` implies
 `],
					[/* inline code block */ 'i', `compare(x, z)>0`],
					[/* text */ 't', `.`]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `

 Finally, the implementor must ensure that `],
					[/* inline code block */ 'i', `compare(x, y)==0`],
					[/* text */ 't', ` implies that `],
					[/* inline code block */ 'i', `signum(compare(x, z))==signum(compare(y, z))`],
					[/* text */ 't', ` for all `],
					[/* inline code block */ 'i', `z`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'o1', [/* parameter description */
					[/* text */ 't', `the first object to be compared.`]
				]],
				[/* parameter */ 'o2', [/* parameter description */
					[/* text */ 't', `the second object to be compared.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if an argument is null and this
         comparator does not permit null arguments`]
				]],
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the arguments' types prevent them from
         being compared by this comparator.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a negative integer, zero, or a positive integer as the
         first argument is less than, equal to, or greater than the
         second.`]
			]
		]],
		[/* method */ 'reverseOrder()', [
			[/* method description */
				[/* text */ 't', `Returns a comparator that imposes the reverse of the `],
				[/* text */ 't', `natural
 ordering`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The returned comparator is serializable and throws `],
					[/* reference */ 'r', `java.lang.NullPointerException`],
					[/* text */ 't', ` when comparing `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a comparator that imposes the reverse of the `],
				[/* text */ 't', `natural
         ordering`],
				[/* text */ 't', ` on `],
				[/* inline code block */ 'i', `Comparable`],
				[/* text */ 't', ` objects.`]
			]
		]],
		[/* method */ 'comparing(java.util.function.Function)', [
			[/* method description */
				[/* text */ 't', `Accepts a function that extracts a `],
				[/* reference */ 'r', `java.lang.Comparable`],
				[/* text */ 't', ` sort key from a type `],
				[/* inline code block */ 'i', `T`],
				[/* text */ 't', `, and returns a `],
				[/* inline code block */ 'i', `Comparator<T>`],
				[/* text */ 't', ` that compares by that sort key.

 `],
				[/* block */ 'b', `The returned comparator is serializable if the specified function
 is also serializable.`]
			],
			[/* parameters */
				[/* parameter */ 'keyExtractor', [/* parameter description */
					[/* text */ 't', `the function used to extract the `],
					[/* reference */ 'r', `java.lang.Comparable`],
					[/* text */ 't', ` sort key`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the argument is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a comparator that compares by an extracted key`]
			]
		]],
		[/* method */ 'comparing(java.util.function.Function,java.util.Comparator)', [
			[/* method description */
				[/* text */ 't', `Accepts a function that extracts a sort key from a type `],
				[/* inline code block */ 'i', `T`],
				[/* text */ 't', `, and
 returns a `],
				[/* inline code block */ 'i', `Comparator<T>`],
				[/* text */ 't', ` that compares by that sort key using
 the specified `],
				[/* reference */ 'r', `java.util.Comparator`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', `The returned comparator is serializable if the specified function
 and comparator are both serializable.`]
			],
			[/* parameters */
				[/* parameter */ 'keyExtractor', [/* parameter description */
					[/* text */ 't', `the function used to extract the sort key`]
				]],
				[/* parameter */ 'keyComparator', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `Comparator`],
					[/* text */ 't', ` used to compare the sort key`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if either argument is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a comparator that compares by an extracted key using the
         specified `],
				[/* inline code block */ 'i', `Comparator`]
			]
		]],
		[/* method */ 'thenComparing(java.util.Comparator)', [
			[/* method description */
				[/* text */ 't', `Returns a lexicographic-order comparator with another comparator.
 If this `],
				[/* inline code block */ 'i', `Comparator`],
				[/* text */ 't', ` considers two elements equal, i.e.
 `],
				[/* inline code block */ 'i', `compare(a, b) == 0`],
				[/* text */ 't', `, `],
				[/* inline code block */ 'i', `other`],
				[/* text */ 't', ` is used to determine the order.

 `],
				[/* block */ 'b', `The returned comparator is serializable if the specified comparator
 is also serializable.`]
			],
			[/* parameters */
				[/* parameter */ 'other', [/* parameter description */
					[/* text */ 't', `the other comparator to be used when this comparator
         compares two objects that are equal.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the argument is null.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a lexicographic-order comparator composed of this and then the
         other comparator`]
			]
		]],
		[/* method */ 'thenComparing(java.util.function.Function,java.util.Comparator)', [
			[/* method description */
				[/* text */ 't', `Returns a lexicographic-order comparator with a function that
 extracts a key to be compared with the given `],
				[/* inline code block */ 'i', `Comparator`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'keyExtractor', [/* parameter description */
					[/* text */ 't', `the function used to extract the sort key`]
				]],
				[/* parameter */ 'keyComparator', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `Comparator`],
					[/* text */ 't', ` used to compare the sort key`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if either argument is null.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a lexicographic-order comparator composed of this comparator
         and then comparing on the key extracted by the keyExtractor function`]
			]
		]],
		[/* method */ 'thenComparing(java.util.function.Function)', [
			[/* method description */
				[/* text */ 't', `Returns a lexicographic-order comparator with a function that
 extracts a `],
				[/* inline code block */ 'i', `Comparable`],
				[/* text */ 't', ` sort key.`]
			],
			[/* parameters */
				[/* parameter */ 'keyExtractor', [/* parameter description */
					[/* text */ 't', `the function used to extract the `],
					[/* reference */ 'r', `java.lang.Comparable`],
					[/* text */ 't', ` sort key`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the argument is null.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a lexicographic-order comparator composed of this and then the
         `],
				[/* reference */ 'r', `java.lang.Comparable`],
				[/* text */ 't', ` sort key.`]
			]
		]],
		[/* method */ 'comparingInt(java.util.function.ToIntFunction)', [
			[/* method description */
				[/* text */ 't', `Accepts a function that extracts an `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` sort key from a type
 `],
				[/* inline code block */ 'i', `T`],
				[/* text */ 't', `, and returns a `],
				[/* inline code block */ 'i', `Comparator<T>`],
				[/* text */ 't', ` that compares by that
 sort key.

 `],
				[/* block */ 'b', `The returned comparator is serializable if the specified function
 is also serializable.`]
			],
			[/* parameters */
				[/* parameter */ 'keyExtractor', [/* parameter description */
					[/* text */ 't', `the function used to extract the integer sort key`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the argument is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a comparator that compares by an extracted key`]
			]
		]],
		[/* method */ 'comparingLong(java.util.function.ToLongFunction)', [
			[/* method description */
				[/* text */ 't', `Accepts a function that extracts a `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` sort key from a type
 `],
				[/* inline code block */ 'i', `T`],
				[/* text */ 't', `, and returns a `],
				[/* inline code block */ 'i', `Comparator<T>`],
				[/* text */ 't', ` that compares by that
 sort key.

 `],
				[/* block */ 'b', `The returned comparator is serializable if the specified function is
 also serializable.`]
			],
			[/* parameters */
				[/* parameter */ 'keyExtractor', [/* parameter description */
					[/* text */ 't', `the function used to extract the long sort key`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the argument is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a comparator that compares by an extracted key`]
			]
		]],
		[/* method */ 'comparingDouble(java.util.function.ToDoubleFunction)', [
			[/* method description */
				[/* text */ 't', `Accepts a function that extracts a `],
				[/* inline code block */ 'i', `double`],
				[/* text */ 't', ` sort key from a type
 `],
				[/* inline code block */ 'i', `T`],
				[/* text */ 't', `, and returns a `],
				[/* inline code block */ 'i', `Comparator<T>`],
				[/* text */ 't', ` that compares by that
 sort key.

 `],
				[/* block */ 'b', `The returned comparator is serializable if the specified function
 is also serializable.`]
			],
			[/* parameters */
				[/* parameter */ 'keyExtractor', [/* parameter description */
					[/* text */ 't', `the function used to extract the double sort key`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the argument is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a comparator that compares by an extracted key`]
			]
		]],
		[/* method */ 'reversed()', [
			[/* method description */
				[/* text */ 't', `Returns a comparator that imposes the reverse ordering of this
 comparator.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a comparator that imposes the reverse ordering of this
         comparator.`]
			]
		]],
		[/* method */ 'thenComparingInt(java.util.function.ToIntFunction)', [
			[/* method description */
				[/* text */ 't', `Returns a lexicographic-order comparator with a function that
 extracts an `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` sort key.`]
			],
			[/* parameters */
				[/* parameter */ 'keyExtractor', [/* parameter description */
					[/* text */ 't', `the function used to extract the integer sort key`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the argument is null.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a lexicographic-order comparator composed of this and then the
         `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` sort key`]
			]
		]],
		[/* method */ 'thenComparingLong(java.util.function.ToLongFunction)', [
			[/* method description */
				[/* text */ 't', `Returns a lexicographic-order comparator with a function that
 extracts a `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` sort key.`]
			],
			[/* parameters */
				[/* parameter */ 'keyExtractor', [/* parameter description */
					[/* text */ 't', `the function used to extract the long sort key`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the argument is null.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a lexicographic-order comparator composed of this and then the
         `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` sort key`]
			]
		]],
		[/* method */ 'thenComparingDouble(java.util.function.ToDoubleFunction)', [
			[/* method description */
				[/* text */ 't', `Returns a lexicographic-order comparator with a function that
 extracts a `],
				[/* inline code block */ 'i', `double`],
				[/* text */ 't', ` sort key.`]
			],
			[/* parameters */
				[/* parameter */ 'keyExtractor', [/* parameter description */
					[/* text */ 't', `the function used to extract the double sort key`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the argument is null.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a lexicographic-order comparator composed of this and then the
         `],
				[/* inline code block */ 'i', `double`],
				[/* text */ 't', ` sort key`]
			]
		]],
		[/* method */ 'naturalOrder()', [
			[/* method description */
				[/* text */ 't', `Returns a comparator that compares `],
				[/* reference */ 'r', `java.lang.Comparable`],
				[/* text */ 't', ` objects in natural
 order.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The returned comparator is serializable and throws `],
					[/* reference */ 'r', `java.lang.NullPointerException`],
					[/* text */ 't', ` when comparing `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a comparator that imposes the `],
				[/* text */ 't', `natural ordering`],
				[/* text */ 't', ` on `],
				[/* inline code block */ 'i', `Comparable`],
				[/* text */ 't', ` objects.`]
			]
		]],
		[/* method */ 'nullsFirst(java.util.Comparator)', [
			[/* method description */
				[/* text */ 't', `Returns a null-friendly comparator that considers `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` to be
 less than non-null. When both are `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `, they are considered
 equal. If both are non-null, the specified `],
				[/* inline code block */ 'i', `Comparator`],
				[/* text */ 't', ` is used
 to determine the order. If the specified comparator is `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `,
 then the returned comparator considers all non-null values to be equal.

 `],
				[/* block */ 'b', `The returned comparator is serializable if the specified comparator
 is serializable.`]
			],
			[/* parameters */
				[/* parameter */ 'comparator', [/* parameter description */
					[/* text */ 't', `a `],
					[/* inline code block */ 'i', `Comparator`],
					[/* text */ 't', ` for comparing non-null values`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a comparator that considers `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` to be less than
         non-null, and compares non-null objects with the supplied
         `],
				[/* inline code block */ 'i', `Comparator`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'nullsLast(java.util.Comparator)', [
			[/* method description */
				[/* text */ 't', `Returns a null-friendly comparator that considers `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` to be
 greater than non-null. When both are `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `, they are considered
 equal. If both are non-null, the specified `],
				[/* inline code block */ 'i', `Comparator`],
				[/* text */ 't', ` is used
 to determine the order. If the specified comparator is `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `,
 then the returned comparator considers all non-null values to be equal.

 `],
				[/* block */ 'b', `The returned comparator is serializable if the specified comparator
 is serializable.`]
			],
			[/* parameters */
				[/* parameter */ 'comparator', [/* parameter description */
					[/* text */ 't', `a `],
					[/* inline code block */ 'i', `Comparator`],
					[/* text */ 't', ` for comparing non-null values`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a comparator that considers `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` to be greater than
         non-null, and compares non-null objects with the supplied
         `],
				[/* inline code block */ 'i', `Comparator`],
				[/* text */ 't', `.`]
			]
		]]
	],
]);
