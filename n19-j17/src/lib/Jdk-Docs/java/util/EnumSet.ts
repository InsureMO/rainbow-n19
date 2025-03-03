import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.util.EnumSet', [
	[/* class description */
		[/* text */ 't', `A specialized `],
		[/* reference */ 'r', `java.util.Set`],
		[/* text */ 't', ` implementation for use with enum types.  All of
 the elements in an enum set must come from a single enum type that is
 specified, explicitly or implicitly, when the set is created.  Enum sets
 are represented internally as bit vectors.  This representation is
 extremely compact and efficient. The space and time performance of this
 class should be good enough to allow its use as a high-quality, typesafe
 alternative to traditional `],
		[/* inline code block */ 'i', `int`],
		[/* text */ 't', `-based "bit flags."  Even bulk
 operations (such as `],
		[/* inline code block */ 'i', `containsAll`],
		[/* text */ 't', ` and `],
		[/* inline code block */ 'i', `retainAll`],
		[/* text */ 't', `) should
 run very quickly if their argument is also an enum set.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `The iterator returned by the `],
			[/* inline code block */ 'i', `iterator`],
			[/* text */ 't', ` method traverses the
 elements in their `],
			[/* text */ 't', `natural order`],
			[/* text */ 't', ` (the order in which the enum
 constants are declared).  The returned iterator is `],
			[/* text */ 't', `weakly
 consistent`],
			[/* text */ 't', `: it will never throw `],
			[/* reference */ 'r', `java.util.ConcurrentModificationException`],
			[/* text */ 't', `
 and it may or may not show the effects of any modifications to the set that
 occur while the iteration is in progress.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Null elements are not permitted.  Attempts to insert a null element
 will throw `],
			[/* reference */ 'r', `java.lang.NullPointerException`],
			[/* text */ 't', `.  Attempts to test for the
 presence of a null element or to remove one will, however, function
 properly.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Like most collection implementations, `],
			[/* inline code block */ 'i', `EnumSet`],
			[/* text */ 't', ` is not
 synchronized.  If multiple threads access an enum set concurrently, and at
 least one of the threads modifies the set, it should be synchronized
 externally.  This is typically accomplished by synchronizing on some
 object that naturally encapsulates the enum set.  If no such object exists,
 the set should be "wrapped" using the `],
			[/* reference */ 'r', `.Collections#synchronizedSet(java.util.Set)`],
			[/* text */ 't', `
 method.  This is best done at creation time, to prevent accidental
 unsynchronized access:

 `]
		]],
		[/* code block */ 'c', ` Set<MyEnum> s = Collections.synchronizedSet(EnumSet.noneOf(MyEnum.class));
 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `Implementation note: All basic operations execute in constant time.
 They are likely (though not guaranteed) to be much faster than their
 `],
			[/* reference */ 'r', `java.util.HashSet`],
			[/* text */ 't', ` counterparts.  Even bulk operations execute in
 constant time if their argument is also an enum set.

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
		[/* method */ 'clone()', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this set.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a copy of this set`]
			]
		]],
		[/* method */ 'copyOf(java.util.Collection)', [
			[/* method description */
				[/* text */ 't', `Creates an enum set initialized from the specified collection.  If
 the specified collection is an `],
				[/* inline code block */ 'i', `EnumSet`],
				[/* text */ 't', ` instance, this static
 factory method behaves identically to `],
				[/* reference */ 'r', `#copyOf(java.util.EnumSet)`, `copyOf(EnumSet)`],
				[/* text */ 't', `.
 Otherwise, the specified collection must contain at least one element
 (in order to determine the new enum set's element type).`]
			],
			[/* parameters */
				[/* parameter */ 'c', [/* parameter description */
					[/* text */ 't', `the collection from which to initialize this enum set`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `c`],
					[/* text */ 't', ` is not an
     `],
					[/* inline code block */ 'i', `EnumSet`],
					[/* text */ 't', ` instance and contains no elements`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `c`],
					[/* text */ 't', ` is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `An enum set initialized from the given collection.`]
			]
		]],
		[/* method */ 'copyOf(java.util.EnumSet)', [
			[/* method description */
				[/* text */ 't', `Creates an enum set with the same element type as the specified enum
 set, initially containing the same elements (if any).`]
			],
			[/* parameters */
				[/* parameter */ 's', [/* parameter description */
					[/* text */ 't', `the enum set from which to initialize this enum set`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `s`],
					[/* text */ 't', ` is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `A copy of the specified enum set.`]
			]
		]],
		[/* method */ 'of(java.lang.Enum,java.lang.Enum,java.lang.Enum)', [
			[/* method description */
				[/* text */ 't', `Creates an enum set initially containing the specified elements.

 Overloadings of this method exist to initialize an enum set with
 one through five elements.  A sixth overloading is provided that
 uses the varargs feature.  This overloading may be used to create
 an enum set initially containing an arbitrary number of elements, but
 is likely to run slower than the overloadings that do not use varargs.`]
			],
			[/* parameters */
				[/* parameter */ 'e1', [/* parameter description */
					[/* text */ 't', `an element that this set is to contain initially`]
				]],
				[/* parameter */ 'e2', [/* parameter description */
					[/* text */ 't', `another element that this set is to contain initially`]
				]],
				[/* parameter */ 'e3', [/* parameter description */
					[/* text */ 't', `another element that this set is to contain initially`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if any parameters are null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `an enum set initially containing the specified elements`]
			]
		]],
		[/* method */ 'of(java.lang.Enum,java.lang.Enum)', [
			[/* method description */
				[/* text */ 't', `Creates an enum set initially containing the specified elements.

 Overloadings of this method exist to initialize an enum set with
 one through five elements.  A sixth overloading is provided that
 uses the varargs feature.  This overloading may be used to create
 an enum set initially containing an arbitrary number of elements, but
 is likely to run slower than the overloadings that do not use varargs.`]
			],
			[/* parameters */
				[/* parameter */ 'e1', [/* parameter description */
					[/* text */ 't', `an element that this set is to contain initially`]
				]],
				[/* parameter */ 'e2', [/* parameter description */
					[/* text */ 't', `another element that this set is to contain initially`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if any parameters are null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `an enum set initially containing the specified elements`]
			]
		]],
		[/* method */ 'of(java.lang.Enum,java.lang.Enum,java.lang.Enum,java.lang.Enum)', [
			[/* method description */
				[/* text */ 't', `Creates an enum set initially containing the specified elements.

 Overloadings of this method exist to initialize an enum set with
 one through five elements.  A sixth overloading is provided that
 uses the varargs feature.  This overloading may be used to create
 an enum set initially containing an arbitrary number of elements, but
 is likely to run slower than the overloadings that do not use varargs.`]
			],
			[/* parameters */
				[/* parameter */ 'e1', [/* parameter description */
					[/* text */ 't', `an element that this set is to contain initially`]
				]],
				[/* parameter */ 'e2', [/* parameter description */
					[/* text */ 't', `another element that this set is to contain initially`]
				]],
				[/* parameter */ 'e3', [/* parameter description */
					[/* text */ 't', `another element that this set is to contain initially`]
				]],
				[/* parameter */ 'e4', [/* parameter description */
					[/* text */ 't', `another element that this set is to contain initially`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if any parameters are null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `an enum set initially containing the specified elements`]
			]
		]],
		[/* method */ 'of(java.lang.Enum,java.lang.Enum...)', UDF],
		[/* method */ 'of(java.lang.Enum)', [
			[/* method description */
				[/* text */ 't', `Creates an enum set initially containing the specified element.

 Overloadings of this method exist to initialize an enum set with
 one through five elements.  A sixth overloading is provided that
 uses the varargs feature.  This overloading may be used to create
 an enum set initially containing an arbitrary number of elements, but
 is likely to run slower than the overloadings that do not use varargs.`]
			],
			[/* parameters */
				[/* parameter */ 'e', [/* parameter description */
					[/* text */ 't', `the element that this set is to contain initially`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `e`],
					[/* text */ 't', ` is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `an enum set initially containing the specified element`]
			]
		]],
		[/* method */ 'of(java.lang.Enum,java.lang.Enum,java.lang.Enum,java.lang.Enum,java.lang.Enum)', [
			[/* method description */
				[/* text */ 't', `Creates an enum set initially containing the specified elements.

 Overloadings of this method exist to initialize an enum set with
 one through five elements.  A sixth overloading is provided that
 uses the varargs feature.  This overloading may be used to create
 an enum set initially containing an arbitrary number of elements, but
 is likely to run slower than the overloadings that do not use varargs.`]
			],
			[/* parameters */
				[/* parameter */ 'e1', [/* parameter description */
					[/* text */ 't', `an element that this set is to contain initially`]
				]],
				[/* parameter */ 'e2', [/* parameter description */
					[/* text */ 't', `another element that this set is to contain initially`]
				]],
				[/* parameter */ 'e3', [/* parameter description */
					[/* text */ 't', `another element that this set is to contain initially`]
				]],
				[/* parameter */ 'e4', [/* parameter description */
					[/* text */ 't', `another element that this set is to contain initially`]
				]],
				[/* parameter */ 'e5', [/* parameter description */
					[/* text */ 't', `another element that this set is to contain initially`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if any parameters are null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `an enum set initially containing the specified elements`]
			]
		]],
		[/* method */ 'noneOf(java.lang.Class)', [
			[/* method description */
				[/* text */ 't', `Creates an empty enum set with the specified element type.`]
			],
			[/* parameters */
				[/* parameter */ 'elementType', [/* parameter description */
					[/* text */ 't', `the class object of the element type for this enum
     set`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `elementType`],
					[/* text */ 't', ` is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `An empty enum set of the specified type.`]
			]
		]],
		[/* method */ 'range(java.lang.Enum,java.lang.Enum)', [
			[/* method description */
				[/* text */ 't', `Creates an enum set initially containing all of the elements in the
 range defined by the two specified endpoints.  The returned set will
 contain the endpoints themselves, which may be identical but must not
 be out of order.`]
			],
			[/* parameters */
				[/* parameter */ 'from', [/* parameter description */
					[/* text */ 't', `the first element in the range`]
				]],
				[/* parameter */ 'to', [/* parameter description */
					[/* text */ 't', `the last element in the range`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `from`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `to`],
					[/* text */ 't', ` are null`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `from.compareTo(to) > 0`]
				]]
			],
			[/* return description */
				[/* text */ 't', `an enum set initially containing all of the elements in the
         range defined by the two specified endpoints`]
			]
		]],
		[/* method */ 'allOf(java.lang.Class)', [
			[/* method description */
				[/* text */ 't', `Creates an enum set containing all of the elements in the specified
 element type.`]
			],
			[/* parameters */
				[/* parameter */ 'elementType', [/* parameter description */
					[/* text */ 't', `the class object of the element type for this enum
     set`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `elementType`],
					[/* text */ 't', ` is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `An enum set containing all the elements in the specified type.`]
			]
		]],
		[/* method */ 'complementOf(java.util.EnumSet)', [
			[/* method description */
				[/* text */ 't', `Creates an enum set with the same element type as the specified enum
 set, initially containing all the elements of this type that are
 `],
				[/* text */ 't', `not`],
				[/* text */ 't', ` contained in the specified set.`]
			],
			[/* parameters */
				[/* parameter */ 's', [/* parameter description */
					[/* text */ 't', `the enum set from whose complement to initialize this enum set`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `s`],
					[/* text */ 't', ` is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The complement of the specified set in this set`]
			]
		]]
	],
]);
