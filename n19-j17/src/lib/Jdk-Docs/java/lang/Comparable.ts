import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.lang.Comparable', [
	[/* class description */
		[/* text */ 't', `This interface imposes a total ordering on the objects of each class that
 implements it.  This ordering is referred to as the class's `],
		[/* text */ 't', `natural
 ordering`],
		[/* text */ 't', `, and the class's `],
		[/* inline code block */ 'i', `compareTo`],
		[/* text */ 't', ` method is referred to as
 its `],
		[/* text */ 't', `natural comparison method`],
		[/* text */ 't', `.`],
		[/* block */ 'b', [
			[/* text */ 't', `

 Lists (and arrays) of objects that implement this interface can be sorted
 automatically by `],
			[/* external link */ 'a', `../util/Collections.html#sort(java.util.List)`, `Collections.sort`],
			[/* text */ 't', ` (and
 `],
			[/* external link */ 'a', `../util/Arrays.html#sort(java.lang.Object%5B%5D)`, `Arrays.sort`],
			[/* text */ 't', `).  Objects that implement this
 interface can be used as keys in a `],
			[/* reference */ 'r', `java.util.SortedMap`],
			[/* text */ 't', ` or as
 elements in a `],
			[/* reference */ 'r', `java.util.SortedSet`],
			[/* text */ 't', `, without the need to
 specify a `],
			[/* reference */ 'r', `java.util.Comparator`],
			[/* text */ 't', `.`]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `

 The natural ordering for a class `],
			[/* inline code block */ 'i', `C`],
			[/* text */ 't', ` is said to be `],
			[/* text */ 't', `consistent
 with equals`],
			[/* text */ 't', ` if and only if `],
			[/* inline code block */ 'i', `e1.compareTo(e2) == 0`],
			[/* text */ 't', ` has
 the same boolean value as `],
			[/* inline code block */ 'i', `e1.equals(e2)`],
			[/* text */ 't', ` for every
 `],
			[/* inline code block */ 'i', `e1`],
			[/* text */ 't', ` and `],
			[/* inline code block */ 'i', `e2`],
			[/* text */ 't', ` of class `],
			[/* inline code block */ 'i', `C`],
			[/* text */ 't', `.  Note that `],
			[/* inline code block */ 'i', `null`],
			[/* text */ 't', `
 is not an instance of any class, and `],
			[/* inline code block */ 'i', `e.compareTo(null)`],
			[/* text */ 't', ` should
 throw a `],
			[/* inline code block */ 'i', `NullPointerException`],
			[/* text */ 't', ` even though `],
			[/* inline code block */ 'i', `e.equals(null)`],
			[/* text */ 't', `
 returns `],
			[/* inline code block */ 'i', `false`],
			[/* text */ 't', `.`]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `

 It is strongly recommended (though not required) that natural orderings be
 consistent with equals.  This is so because sorted sets (and sorted maps)
 without explicit comparators behave "strangely" when they are used with
 elements (or keys) whose natural ordering is inconsistent with equals.  In
 particular, such a sorted set (or sorted map) violates the general contract
 for set (or map), which is defined in terms of the `],
			[/* inline code block */ 'i', `equals`],
			[/* text */ 't', `
 method.`]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `

 For example, if one adds two keys `],
			[/* inline code block */ 'i', `a`],
			[/* text */ 't', ` and `],
			[/* inline code block */ 'i', `b`],
			[/* text */ 't', ` such that
 `],
			[/* inline code block */ 'i', `(!a.equals(b) && a.compareTo(b) == 0)`],
			[/* text */ 't', ` to a sorted
 set that does not use an explicit comparator, the second `],
			[/* inline code block */ 'i', `add`],
			[/* text */ 't', `
 operation returns false (and the size of the sorted set does not increase)
 because `],
			[/* inline code block */ 'i', `a`],
			[/* text */ 't', ` and `],
			[/* inline code block */ 'i', `b`],
			[/* text */ 't', ` are equivalent from the sorted set's
 perspective.`]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `

 Virtually all Java core classes that implement `],
			[/* inline code block */ 'i', `Comparable`],
			[/* text */ 't', `
 have natural orderings that are consistent with equals.  One
 exception is `],
			[/* reference */ 'r', `java.math.BigDecimal`],
			[/* text */ 't', `, whose `],
			[/* external link */ 'a', `../math/BigDecimal.html#compareTo(java.math.BigDecimal)`, `natural ordering`],
			[/* text */ 't', ` equates `],
			[/* inline code block */ 'i', `BigDecimal`],
			[/* text */ 't', ` objects with equal numerical values and different
 representations (such as 4.0 and 4.00). For `],
			[/* external link */ 'a', `../math/BigDecimal.html#equals(java.lang.Object)`, `BigDecimal.equals()`],
			[/* text */ 't', ` to return true,
 the representation and numerical value of the two `],
			[/* inline code block */ 'i', `BigDecimal`],
			[/* text */ 't', ` objects must be the same.`]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `

 For the mathematically inclined, the `],
			[/* text */ 't', `relation`],
			[/* text */ 't', ` that defines
 the natural ordering on a given class C is:`]
		]],
		[/* code block */ 'c', [
			[/* inline code block */ 'i', `{(x, y) such that x.compareTo(y) <= 0}.`]
		]],
		[/* text */ 't', ` The `],
		[/* text */ 't', `quotient`],
		[/* text */ 't', ` for this total order is: `],
		[/* code block */ 'c', [
			[/* inline code block */ 'i', `{(x, y) such that x.compareTo(y) == 0}.`]
		]],
		[/* text */ 't', `

 It follows immediately from the contract for `],
		[/* inline code block */ 'i', `compareTo`],
		[/* text */ 't', ` that the
 quotient is an `],
		[/* text */ 't', `equivalence relation`],
		[/* text */ 't', ` on `],
		[/* inline code block */ 'i', `C`],
		[/* text */ 't', `, and that the
 natural ordering is a `],
		[/* text */ 't', `total order`],
		[/* text */ 't', ` on `],
		[/* inline code block */ 'i', `C`],
		[/* text */ 't', `.  When we say that a
 class's natural ordering is `],
		[/* text */ 't', `consistent with equals`],
		[/* text */ 't', `, we mean that the
 quotient for the natural ordering is the equivalence relation defined by
 the class's `],
		[/* external link */ 'a', `Object.html#equals(java.lang.Object)`, `equals(Object)`],
		[/* text */ 't', ` method:`],
		[/* code block */ 'c', `     {(x, y) such that x.equals(y)}. `],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `

 In other words, when a class's natural ordering is consistent with
 equals, the equivalence classes defined by the equivalence relation
 of the `],
			[/* inline code block */ 'i', `equals`],
			[/* text */ 't', ` method and the equivalence classes defined by
 the quotient of the `],
			[/* inline code block */ 'i', `compareTo`],
			[/* text */ 't', ` method are the same.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `This interface is a member of the
 `],
			[/* external link */ 'a', `../../../java.base/java/util/package-summary.html#CollectionsFramework`, `Java Collections Framework`],
			[/* text */ 't', `.`]
		]]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'compareTo(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Compares this object with the specified object for order.  Returns a
 negative integer, zero, or a positive integer as this object is less
 than, equal to, or greater than the specified object.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The implementor must ensure `],
					[/* external link */ 'a', `Integer.html#signum(int)`, `signum`],
					[/* inline code block */ 'i', `(x.compareTo(y)) == -signum(y.compareTo(x))`],
					[/* text */ 't', ` for
 all `],
					[/* inline code block */ 'i', `x`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `y`],
					[/* text */ 't', `.  (This implies that `],
					[/* inline code block */ 'i', `x.compareTo(y)`],
					[/* text */ 't', ` must throw an exception if and only if `],
					[/* inline code block */ 'i', `y.compareTo(x)`],
					[/* text */ 't', ` throws an exception.)

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The implementor must also ensure that the relation is transitive:
 `],
					[/* inline code block */ 'i', `(x.compareTo(y) > 0 && y.compareTo(z) > 0)`],
					[/* text */ 't', ` implies
 `],
					[/* inline code block */ 'i', `x.compareTo(z) > 0`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `Finally, the implementor must ensure that `],
					[/* inline code block */ 'i', `x.compareTo(y)==0`],
					[/* text */ 't', ` implies that `],
					[/* inline code block */ 'i', `signum(x.compareTo(z)) == signum(y.compareTo(z))`],
					[/* text */ 't', `, for all `],
					[/* inline code block */ 'i', `z`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'o', [/* parameter description */
					[/* text */ 't', `the object to be compared.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified object is null`]
				]],
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the specified object's type prevents it
         from being compared to this object.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a negative integer, zero, or a positive integer as this object
          is less than, equal to, or greater than the specified object.`]
			]
		]]
	],
]);
