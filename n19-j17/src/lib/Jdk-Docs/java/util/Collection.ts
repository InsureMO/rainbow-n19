import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.util.Collection', [
	[/* class description */
		[/* text */ 't', `The root interface in the `],
		[/* text */ 't', `collection hierarchy`],
		[/* text */ 't', `.  A collection
 represents a group of objects, known as its `],
		[/* text */ 't', `elements`],
		[/* text */ 't', `.  Some
 collections allow duplicate elements and others do not.  Some are ordered
 and others unordered.  The JDK does not provide any `],
		[/* text */ 't', `direct`],
		[/* text */ 't', `
 implementations of this interface: it provides implementations of more
 specific subinterfaces like `],
		[/* inline code block */ 'i', `Set`],
		[/* text */ 't', ` and `],
		[/* inline code block */ 'i', `List`],
		[/* text */ 't', `.  This interface
 is typically used to pass collections around and manipulate them where
 maximum generality is desired.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `Bags`],
			[/* text */ 't', ` or `],
			[/* text */ 't', `multisets`],
			[/* text */ 't', ` (unordered collections that may contain
 duplicate elements) should implement this interface directly.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `All general-purpose `],
			[/* inline code block */ 'i', `Collection`],
			[/* text */ 't', ` implementation classes (which
 typically implement `],
			[/* inline code block */ 'i', `Collection`],
			[/* text */ 't', ` indirectly through one of its
 subinterfaces) should provide two "standard" constructors: a void (no
 arguments) constructor, which creates an empty collection, and a
 constructor with a single argument of type `],
			[/* inline code block */ 'i', `Collection`],
			[/* text */ 't', `, which
 creates a new collection with the same elements as its argument.  In
 effect, the latter constructor allows the user to copy any collection,
 producing an equivalent collection of the desired implementation type.
 There is no way to enforce this convention (as interfaces cannot contain
 constructors) but all of the general-purpose `],
			[/* inline code block */ 'i', `Collection`],
			[/* text */ 't', `
 implementations in the Java platform libraries comply.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Certain methods are specified to be
 `],
			[/* text */ 't', `optional`],
			[/* text */ 't', `. If a collection implementation doesn't implement a
 particular operation, it should define the corresponding method to throw
 `],
			[/* inline code block */ 'i', `UnsupportedOperationException`],
			[/* text */ 't', `. Such methods are marked "optional
 operation" in method specifications of the collections interfaces.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ``],
			[/* text */ 't', `Some collection implementations
 have restrictions on the elements that they may contain.
 For example, some implementations prohibit null elements,
 and some have restrictions on the types of their elements.  Attempting to
 add an ineligible element throws an unchecked exception, typically
 `],
			[/* inline code block */ 'i', `NullPointerException`],
			[/* text */ 't', ` or `],
			[/* inline code block */ 'i', `ClassCastException`],
			[/* text */ 't', `.  Attempting
 to query the presence of an ineligible element may throw an exception,
 or it may simply return false; some implementations will exhibit the former
 behavior and some will exhibit the latter.  More generally, attempting an
 operation on an ineligible element whose completion would not result in
 the insertion of an ineligible element into the collection may throw an
 exception or it may succeed, at the option of the implementation.
 Such exceptions are marked as "optional" in the specification for this
 interface.

 `]
		]],
		[/* block */ 'b', `It is up to each collection to determine its own synchronization
 policy.  In the absence of a stronger guarantee by the
 implementation, undefined behavior may result from the invocation
 of any method on a collection that is being mutated by another
 thread; this includes direct invocations, passing the collection to
 a method that might perform invocations, and using an existing
 iterator to examine the collection.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `Many methods in Collections Framework interfaces are defined in
 terms of the `],
			[/* reference */ 'r', `java.Object#equals(java.lang.Object)`],
			[/* text */ 't', ` method.  For example,
 the specification for the `],
			[/* reference */ 'r', `#contains(java.lang.Object)`, `contains(Object o)`],
			[/* text */ 't', `
 method says: "returns `],
			[/* inline code block */ 'i', `true`],
			[/* text */ 't', ` if and only if this collection
 contains at least one element `],
			[/* inline code block */ 'i', `e`],
			[/* text */ 't', ` such that
 `],
			[/* inline code block */ 'i', `(o==null ? e==null : o.equals(e))`],
			[/* text */ 't', `."  This specification should
 `],
			[/* text */ 't', `not`],
			[/* text */ 't', ` be construed to imply that invoking `],
			[/* inline code block */ 'i', `Collection.contains`],
			[/* text */ 't', `
 with a non-null argument `],
			[/* inline code block */ 'i', `o`],
			[/* text */ 't', ` will cause `],
			[/* inline code block */ 'i', `o.equals(e)`],
			[/* text */ 't', ` to be
 invoked for any element `],
			[/* inline code block */ 'i', `e`],
			[/* text */ 't', `.  Implementations are free to implement
 optimizations whereby the `],
			[/* inline code block */ 'i', `equals`],
			[/* text */ 't', ` invocation is avoided, for
 example, by first comparing the hash codes of the two elements.  (The
 `],
			[/* reference */ 'r', `java.Object#hashCode()`],
			[/* text */ 't', ` specification guarantees that two objects with
 unequal hash codes cannot be equal.)  More generally, implementations of
 the various Collections Framework interfaces are free to take advantage of
 the specified behavior of underlying `],
			[/* reference */ 'r', `java.lang.Object`],
			[/* text */ 't', ` methods wherever the
 implementor deems it appropriate.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Some collection operations which perform recursive traversal of the
 collection may fail with an exception for self-referential instances where
 the collection directly or indirectly contains itself. This includes the
 `],
			[/* inline code block */ 'i', `clone()`],
			[/* text */ 't', `, `],
			[/* inline code block */ 'i', `equals()`],
			[/* text */ 't', `, `],
			[/* inline code block */ 'i', `hashCode()`],
			[/* text */ 't', ` and `],
			[/* inline code block */ 'i', `toString()`],
			[/* text */ 't', `
 methods. Implementations may optionally handle the self-referential scenario,
 however most current implementations do not do so.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `View Collections`]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Most collections manage storage for elements they contain. By contrast, `],
			[/* text */ 't', `view
 collections`],
			[/* text */ 't', ` themselves do not store elements, but instead they rely on a
 backing collection to store the actual elements. Operations that are not handled
 by the view collection itself are delegated to the backing collection. Examples of
 view collections include the wrapper collections returned by methods such as
 `],
			[/* reference */ 'r', `.Collections#checkedCollection(java.util.Collection,java.lang.Class)`],
			[/* text */ 't', `,
 `],
			[/* reference */ 'r', `.Collections#synchronizedCollection(java.util.Collection)`],
			[/* text */ 't', `, and
 `],
			[/* reference */ 'r', `.Collections#unmodifiableCollection(java.util.Collection)`],
			[/* text */ 't', `.
 Other examples of view collections include collections that provide a
 different representation of the same elements, for example, as
 provided by `],
			[/* reference */ 'r', `.List#subList(int,int)`],
			[/* text */ 't', `,
 `],
			[/* reference */ 'r', `.NavigableSet#subSet(E,boolean,E,boolean)`],
			[/* text */ 't', `, or
 `],
			[/* reference */ 'r', `.Map#entrySet()`],
			[/* text */ 't', `.
 Any changes made to the backing collection are visible in the view collection.
 Correspondingly, any changes made to the view collection — if changes
 are permitted — are written through to the backing collection.
 Although they technically aren't collections, instances of
 `],
			[/* reference */ 'r', `java.util.Iterator`],
			[/* text */ 't', ` and `],
			[/* reference */ 'r', `java.util.ListIterator`],
			[/* text */ 't', ` can also allow modifications
 to be written through to the backing collection, and in some cases,
 modifications to the backing collection will be visible to the Iterator
 during iteration.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Unmodifiable Collections`]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Certain methods of this interface are considered "destructive" and are called
 "mutator" methods in that they modify the group of objects contained within
 the collection on which they operate. They can be specified to throw
 `],
			[/* inline code block */ 'i', `UnsupportedOperationException`],
			[/* text */ 't', ` if this collection implementation
 does not support the operation. Such methods should (but are not required
 to) throw an `],
			[/* inline code block */ 'i', `UnsupportedOperationException`],
			[/* text */ 't', ` if the invocation would
 have no effect on the collection. For example, consider a collection that
 does not support the `],
			[/* reference */ 'r', `#add(E)`, `add`],
			[/* text */ 't', ` operation. What will happen if the
 `],
			[/* reference */ 'r', `#addAll(java.util.Collection)`, `addAll`],
			[/* text */ 't', ` method is invoked on this collection, with an empty
 collection as the argument? The addition of zero elements has no effect,
 so it is permissible for this collection simply to do nothing and not to throw
 an exception. However, it is recommended that such cases throw an exception
 unconditionally, as throwing only in certain cases can lead to
 programming errors.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `An `],
			[/* text */ 't', `unmodifiable collection`],
			[/* text */ 't', ` is a collection, all of whose
 mutator methods (as defined above) are specified to throw
 `],
			[/* inline code block */ 'i', `UnsupportedOperationException`],
			[/* text */ 't', `. Such a collection thus cannot be
 modified by calling any methods on it. For a collection to be properly
 unmodifiable, any view collections derived from it must also be unmodifiable.
 For example, if a List is unmodifiable, the List returned by
 `],
			[/* reference */ 'r', `.List#subList(int,int)`],
			[/* text */ 't', ` is also unmodifiable.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `An unmodifiable collection is not necessarily immutable. If the
 contained elements are mutable, the entire collection is clearly
 mutable, even though it might be unmodifiable. For example, consider
 two unmodifiable lists containing mutable elements. The result of calling
 `],
			[/* inline code block */ 'i', `list1.equals(list2)`],
			[/* text */ 't', ` might differ from one call to the next if
 the elements had been mutated, even though both lists are unmodifiable.
 However, if an unmodifiable collection contains all immutable elements,
 it can be considered effectively immutable.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Unmodifiable View Collections`]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `An `],
			[/* text */ 't', `unmodifiable view collection`],
			[/* text */ 't', ` is a collection that is unmodifiable
 and that is also a view onto a backing collection. Its mutator methods throw
 `],
			[/* inline code block */ 'i', `UnsupportedOperationException`],
			[/* text */ 't', `, as described above, while
 reading and querying methods are delegated to the backing collection.
 The effect is to provide read-only access to the backing collection.
 This is useful for a component to provide users with read access to
 an internal collection, while preventing them from modifying such
 collections unexpectedly. Examples of unmodifiable view collections
 are those returned by the
 `],
			[/* reference */ 'r', `.Collections#unmodifiableCollection(java.util.Collection)`],
			[/* text */ 't', `,
 `],
			[/* reference */ 'r', `.Collections#unmodifiableList(java.util.List)`],
			[/* text */ 't', `, and
 related methods.

 `]
		]],
		[/* block */ 'b', `Note that changes to the backing collection might still be possible,
 and if they occur, they are visible through the unmodifiable view. Thus,
 an unmodifiable view collection is not necessarily immutable. However,
 if the backing collection of an unmodifiable view is effectively immutable,
 or if the only reference to the backing collection is through an
 unmodifiable view, the view can be considered effectively immutable.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `Serializability of Collections`]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Serializability of collections is optional. As such, none of the collections
 interfaces are declared to implement the `],
			[/* reference */ 'r', `java.io.Serializable`],
			[/* text */ 't', ` interface.
 However, serializability is regarded as being generally useful, so most collection
 implementations are serializable.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `The collection implementations that are public classes (such as `],
			[/* inline code block */ 'i', `ArrayList`],
			[/* text */ 't', `
 or `],
			[/* inline code block */ 'i', `HashMap`],
			[/* text */ 't', `) are declared to implement the `],
			[/* inline code block */ 'i', `Serializable`],
			[/* text */ 't', ` interface if they
 are in fact serializable. Some collections implementations are not public classes,
 such as the `],
			[/* text */ 't', `unmodifiable collections.`],
			[/* text */ 't', ` In such cases, the
 serializability of such collections is described in the specification of the method
 that creates them, or in some other suitable place. In cases where the serializability
 of a collection is not specified, there is no guarantee about the serializability of such
 collections. In particular, many `],
			[/* text */ 't', `view collections`],
			[/* text */ 't', ` are not serializable.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `A collection implementation that implements the `],
			[/* inline code block */ 'i', `Serializable`],
			[/* text */ 't', ` interface cannot
 be guaranteed to be serializable. The reason is that in general, collections
 contain elements of other types, and it is not possible to determine statically
 whether instances of some element type are actually serializable. For example, consider
 a serializable `],
			[/* inline code block */ 'i', `Collection<E>`],
			[/* text */ 't', `, where `],
			[/* inline code block */ 'i', `E`],
			[/* text */ 't', ` does not implement the
 `],
			[/* inline code block */ 'i', `Serializable`],
			[/* text */ 't', ` interface. The collection may be serializable, if it contains only
 elements of some serializable subtype of `],
			[/* inline code block */ 'i', `E`],
			[/* text */ 't', `, or if it is empty. Collections are
 thus said to be `],
			[/* text */ 't', `conditionally serializable,`],
			[/* text */ 't', ` as the serializability of the collection
 as a whole depends on whether the collection itself is serializable and on whether all
 contained elements are also serializable.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `An additional case occurs with instances of `],
			[/* reference */ 'r', `java.util.SortedSet`],
			[/* text */ 't', ` and `],
			[/* reference */ 'r', `java.util.SortedMap`],
			[/* text */ 't', `.
 These collections can be created with a `],
			[/* reference */ 'r', `java.util.Comparator`],
			[/* text */ 't', ` that imposes an ordering on
 the set elements or map keys. Such a collection is serializable only if the provided
 `],
			[/* inline code block */ 'i', `Comparator`],
			[/* text */ 't', ` is also serializable.

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
		[/* method */ 'toArray(java.lang.Object[])', [
			[/* method description */
				[/* text */ 't', `Returns an array containing all of the elements in this collection;
 the runtime type of the returned array is that of the specified array.
 If the collection fits in the specified array, it is returned therein.
 Otherwise, a new array is allocated with the runtime type of the
 specified array and the size of this collection.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If this collection fits in the specified array with room to spare
 (i.e., the array has more elements than this collection), the element
 in the array immediately following the end of the collection is set to
 `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.  (This is useful in determining the length of this
 collection `],
					[/* text */ 't', `only`],
					[/* text */ 't', ` if the caller knows that this collection does
 not contain any `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` elements.)

 `]
				]],
				[/* block */ 'b', `If this collection makes any guarantees as to what order its elements
 are returned by its iterator, this method must return the elements in
 the same order.`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the array into which the elements of this collection are to be
        stored, if it is big enough; otherwise, a new array of the same
        runtime type is allocated for this purpose.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArrayStoreException', [/* throw description */
					[/* text */ 't', `if the runtime type of any element in this
         collection is not assignable to the `],
					[/* reference */ 'r', `java.Class#getComponentType()`],
					[/* text */ 't', ` of the specified array`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified array is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `an array containing all of the elements in this collection`]
			]
		]],
		[/* method */ 'add(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Ensures that this collection contains the specified element (optional
 operation).  Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this collection changed as a
 result of the call.  (Returns `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` if this collection does
 not permit duplicates and already contains the specified element.)`],
				[/* block */ 'b', [
					[/* text */ 't', `

 Collections that support this operation may place limitations on what
 elements may be added to this collection.  In particular, some
 collections will refuse to add `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` elements, and others will
 impose restrictions on the type of elements that may be added.
 Collection classes should clearly specify in their documentation any
 restrictions on what elements may be added.`]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `

 If a collection refuses to add a particular element for any reason
 other than that it already contains the element, it `],
					[/* text */ 't', `must`],
					[/* text */ 't', ` throw
 an exception (rather than returning `],
					[/* inline code block */ 'i', `false`],
					[/* text */ 't', `).  This preserves
 the invariant that a collection always contains the specified element
 after this call returns.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'e', [/* parameter description */
					[/* text */ 't', `element whose presence in this collection is to be ensured`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `add`],
					[/* text */ 't', ` operation
         is not supported by this collection`]
				]],
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the class of the specified element
         prevents it from being added to this collection`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified element is null and this
         collection does not permit null elements`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if some property of the element
         prevents it from being added to this collection`]
				]],
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `if the element cannot be added at this
         time due to insertion restrictions`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this collection changed as a result of the
         call`]
			]
		]],
		[/* method */ 'addAll(java.util.Collection)', [
			[/* method description */
				[/* text */ 't', `Adds all of the elements in the specified collection to this collection
 (optional operation).  The behavior of this operation is undefined if
 the specified collection is modified while the operation is in progress.
 (This implies that the behavior of this call is undefined if the
 specified collection is this collection, and this collection is
 nonempty.)`]
			],
			[/* parameters */
				[/* parameter */ 'c', [/* parameter description */
					[/* text */ 't', `collection containing elements to be added to this collection`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `addAll`],
					[/* text */ 't', ` operation
         is not supported by this collection`]
				]],
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the class of an element of the specified
         collection prevents it from being added to this collection`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified collection contains a
         null element and this collection does not permit null elements,
         or if the specified collection is null`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if some property of an element of the
         specified collection prevents it from being added to this
         collection`]
				]],
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `if not all the elements can be added at
         this time due to insertion restrictions`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this collection changed as a result of the call`]
			]
		]],
		[/* method */ 'contains(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this collection contains the specified element.
 More formally, returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if and only if this collection
 contains at least one element `],
				[/* inline code block */ 'i', `e`],
				[/* text */ 't', ` such that
 `],
				[/* inline code block */ 'i', `Objects.equals(o, e)`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'o', [/* parameter description */
					[/* text */ 't', `element whose presence in this collection is to be tested`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the type of the specified element
         is incompatible with this collection
         (`],
					[/* text */ 't', `optional`],
					[/* text */ 't', `)`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified element is null and this
         collection does not permit null elements
         (`],
					[/* text */ 't', `optional`],
					[/* text */ 't', `)`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this collection contains the specified
         element`]
			]
		]],
		[/* method */ 'containsAll(java.util.Collection)', [
			[/* method description */
				[/* text */ 't', `Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this collection contains all of the elements
 in the specified collection.`]
			],
			[/* parameters */
				[/* parameter */ 'c', [/* parameter description */
					[/* text */ 't', `collection to be checked for containment in this collection`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the types of one or more elements
         in the specified collection are incompatible with this
         collection
         (`],
					[/* text */ 't', `optional`],
					[/* text */ 't', `)`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified collection contains one
         or more null elements and this collection does not permit null
         elements
         (`],
					[/* text */ 't', `optional`],
					[/* text */ 't', `),
         or if the specified collection is null.`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this collection contains all of the elements
         in the specified collection`]
			]
		]],
		[/* method */ 'equals(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Compares the specified object with this collection for equality. `],
				[/* block */ 'b', [
					[/* text */ 't', `

 While the `],
					[/* inline code block */ 'i', `Collection`],
					[/* text */ 't', ` interface adds no stipulations to the
 general contract for the `],
					[/* inline code block */ 'i', `Object.equals`],
					[/* text */ 't', `, programmers who
 implement the `],
					[/* inline code block */ 'i', `Collection`],
					[/* text */ 't', ` interface "directly" (in other words,
 create a class that is a `],
					[/* inline code block */ 'i', `Collection`],
					[/* text */ 't', ` but is not a `],
					[/* inline code block */ 'i', `Set`],
					[/* text */ 't', `
 or a `],
					[/* inline code block */ 'i', `List`],
					[/* text */ 't', `) must exercise care if they choose to override the
 `],
					[/* inline code block */ 'i', `Object.equals`],
					[/* text */ 't', `.  It is not necessary to do so, and the simplest
 course of action is to rely on `],
					[/* inline code block */ 'i', `Object`],
					[/* text */ 't', `'s implementation, but
 the implementor may wish to implement a "value comparison" in place of
 the default "reference comparison."  (The `],
					[/* inline code block */ 'i', `List`],
					[/* text */ 't', ` and
 `],
					[/* inline code block */ 'i', `Set`],
					[/* text */ 't', ` interfaces mandate such value comparisons.)`]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `

 The general contract for the `],
					[/* inline code block */ 'i', `Object.equals`],
					[/* text */ 't', ` method states that
 equals must be symmetric (in other words, `],
					[/* inline code block */ 'i', `a.equals(b)`],
					[/* text */ 't', ` if and
 only if `],
					[/* inline code block */ 'i', `b.equals(a)`],
					[/* text */ 't', `).  The contracts for `],
					[/* inline code block */ 'i', `List.equals`],
					[/* text */ 't', `
 and `],
					[/* inline code block */ 'i', `Set.equals`],
					[/* text */ 't', ` state that lists are only equal to other lists,
 and sets to other sets.  Thus, a custom `],
					[/* inline code block */ 'i', `equals`],
					[/* text */ 't', ` method for a
 collection class that implements neither the `],
					[/* inline code block */ 'i', `List`],
					[/* text */ 't', ` nor
 `],
					[/* inline code block */ 'i', `Set`],
					[/* text */ 't', ` interface must return `],
					[/* inline code block */ 'i', `false`],
					[/* text */ 't', ` when this collection
 is compared to any list or set.  (By the same logic, it is not possible
 to write a class that correctly implements both the `],
					[/* inline code block */ 'i', `Set`],
					[/* text */ 't', ` and
 `],
					[/* inline code block */ 'i', `List`],
					[/* text */ 't', ` interfaces.)`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'o', [/* parameter description */
					[/* text */ 't', `object to be compared for equality with this collection`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the specified object is equal to this
 collection`]
			]
		]],
		[/* method */ 'isEmpty()', [
			[/* method description */
				[/* text */ 't', `Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this collection contains no elements.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this collection contains no elements`]
			]
		]],
		[/* method */ 'remove(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Removes a single instance of the specified element from this
 collection, if it is present (optional operation).  More formally,
 removes an element `],
				[/* inline code block */ 'i', `e`],
				[/* text */ 't', ` such that
 `],
				[/* inline code block */ 'i', `Objects.equals(o, e)`],
				[/* text */ 't', `, if
 this collection contains one or more such elements.  Returns
 `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this collection contained the specified element (or
 equivalently, if this collection changed as a result of the call).`]
			],
			[/* parameters */
				[/* parameter */ 'o', [/* parameter description */
					[/* text */ 't', `element to be removed from this collection, if present`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the type of the specified element
         is incompatible with this collection
         (`],
					[/* text */ 't', `optional`],
					[/* text */ 't', `)`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified element is null and this
         collection does not permit null elements
         (`],
					[/* text */ 't', `optional`],
					[/* text */ 't', `)`]
				]],
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `remove`],
					[/* text */ 't', ` operation
         is not supported by this collection`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if an element was removed as a result of this call`]
			]
		]],
		[/* method */ 'removeAll(java.util.Collection)', [
			[/* method description */
				[/* text */ 't', `Removes all of this collection's elements that are also contained in the
 specified collection (optional operation).  After this call returns,
 this collection will contain no elements in common with the specified
 collection.`]
			],
			[/* parameters */
				[/* parameter */ 'c', [/* parameter description */
					[/* text */ 't', `collection containing elements to be removed from this collection`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `removeAll`],
					[/* text */ 't', ` method
         is not supported by this collection`]
				]],
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the types of one or more elements
         in this collection are incompatible with the specified
         collection
         (`],
					[/* text */ 't', `optional`],
					[/* text */ 't', `)`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if this collection contains one or more
         null elements and the specified collection does not support
         null elements
         (`],
					[/* text */ 't', `optional`],
					[/* text */ 't', `),
         or if the specified collection is null`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this collection changed as a result of the
         call`]
			]
		]],
		[/* method */ 'retainAll(java.util.Collection)', [
			[/* method description */
				[/* text */ 't', `Retains only the elements in this collection that are contained in the
 specified collection (optional operation).  In other words, removes from
 this collection all of its elements that are not contained in the
 specified collection.`]
			],
			[/* parameters */
				[/* parameter */ 'c', [/* parameter description */
					[/* text */ 't', `collection containing elements to be retained in this collection`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `retainAll`],
					[/* text */ 't', ` operation
         is not supported by this collection`]
				]],
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the types of one or more elements
         in this collection are incompatible with the specified
         collection
         (`],
					[/* text */ 't', `optional`],
					[/* text */ 't', `)`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if this collection contains one or more
         null elements and the specified collection does not permit null
         elements
         (`],
					[/* text */ 't', `optional`],
					[/* text */ 't', `),
         or if the specified collection is null`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this collection changed as a result of the call`]
			]
		]],
		[/* method */ 'hashCode()', [
			[/* method description */
				[/* text */ 't', `Returns the hash code value for this collection.  While the
 `],
				[/* inline code block */ 'i', `Collection`],
				[/* text */ 't', ` interface adds no stipulations to the general
 contract for the `],
				[/* inline code block */ 'i', `Object.hashCode`],
				[/* text */ 't', ` method, programmers should
 take note that any class that overrides the `],
				[/* inline code block */ 'i', `Object.equals`],
				[/* text */ 't', `
 method must also override the `],
				[/* inline code block */ 'i', `Object.hashCode`],
				[/* text */ 't', ` method in order
 to satisfy the general contract for the `],
				[/* inline code block */ 'i', `Object.hashCode`],
				[/* text */ 't', ` method.
 In particular, `],
				[/* inline code block */ 'i', `c1.equals(c2)`],
				[/* text */ 't', ` implies that
 `],
				[/* inline code block */ 'i', `c1.hashCode()==c2.hashCode()`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the hash code value for this collection`]
			]
		]],
		[/* method */ 'size()', [
			[/* method description */
				[/* text */ 't', `Returns the number of elements in this collection.  If this collection
 contains more than `],
				[/* inline code block */ 'i', `Integer.MAX_VALUE`],
				[/* text */ 't', ` elements, returns
 `],
				[/* inline code block */ 'i', `Integer.MAX_VALUE`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the number of elements in this collection`]
			]
		]],
		[/* method */ 'toArray()', [
			[/* method description */
				[/* text */ 't', `Returns an array containing all of the elements in this collection.
 If this collection makes any guarantees as to what order its elements
 are returned by its iterator, this method must return the elements in
 the same order. The returned array's `],
				[/* reference */ 'r', `java.Class#getComponentType()`],
				[/* text */ 't', ` is `],
				[/* inline code block */ 'i', `Object`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', `The returned array will be "safe" in that no references to it are
 maintained by this collection.  (In other words, this method must
 allocate a new array even if this collection is backed by an array).
 The caller is thus free to modify the returned array.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an array, whose `],
				[/* reference */ 'r', `java.Class#getComponentType()`],
				[/* text */ 't', ` is `],
				[/* inline code block */ 'i', `Object`],
				[/* text */ 't', `, containing all of the elements in this collection`]
			]
		]],
		[/* method */ 'iterator()', [
			[/* method description */
				[/* text */ 't', `Returns an iterator over the elements in this collection.  There are no
 guarantees concerning the order in which the elements are returned
 (unless this collection is an instance of some class that provides a
 guarantee).`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an `],
				[/* inline code block */ 'i', `Iterator`],
				[/* text */ 't', ` over the elements in this collection`]
			]
		]],
		[/* method */ 'clear()', [
			[/* method description */
				[/* text */ 't', `Removes all of the elements from this collection (optional operation).
 The collection will be empty after this method returns.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `clear`],
					[/* text */ 't', ` operation
         is not supported by this collection`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'toArray(java.util.function.IntFunction)', [
			[/* method description */
				[/* text */ 't', `Returns an array containing all of the elements in this collection,
 using the provided `],
				[/* inline code block */ 'i', `generator`],
				[/* text */ 't', ` function to allocate the returned array.

 `],
				[/* block */ 'b', `If this collection makes any guarantees as to what order its elements
 are returned by its iterator, this method must return the elements in
 the same order.`]
			],
			[/* parameters */
				[/* parameter */ 'generator', [/* parameter description */
					[/* text */ 't', `a function which produces a new array of the desired
                  type and the provided length`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArrayStoreException', [/* throw description */
					[/* text */ 't', `if the runtime type of any element in this
         collection is not assignable to the `],
					[/* reference */ 'r', `java.Class#getComponentType()`],
					[/* text */ 't', ` of the generated array`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the generator function is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `an array containing all of the elements in this collection`]
			]
		]],
		[/* method */ 'removeIf(java.util.function.Predicate)', [
			[/* method description */
				[/* text */ 't', `Removes all of the elements of this collection that satisfy the given
 predicate.  Errors or runtime exceptions thrown during iteration or by
 the predicate are relayed to the caller.`]
			],
			[/* parameters */
				[/* parameter */ 'filter', [/* parameter description */
					[/* text */ 't', `a predicate which returns `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` for elements to be
        removed`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified filter is null`]
				]],
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if elements cannot be removed
         from this collection.  Implementations may throw this exception if a
         matching element cannot be removed or if, in general, removal is not
         supported.`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if any elements were removed`]
			]
		]],
		[/* method */ 'spliterator()', [
			[/* method description */
				[/* text */ 't', `Creates a `],
				[/* reference */ 'r', `java.util.Spliterator`],
				[/* text */ 't', ` over the elements in this collection.

 Implementations should document characteristic values reported by the
 spliterator.  Such characteristic values are not required to be reported
 if the spliterator reports `],
				[/* reference */ 'r', `.Spliterator#SIZED`],
				[/* text */ 't', ` and this collection
 contains no elements.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The default implementation should be overridden by subclasses that
 can return a more efficient spliterator.  In order to
 preserve expected laziness behavior for the `],
					[/* reference */ 'r', `#stream()`, `stream()`],
					[/* text */ 't', ` and
 `],
					[/* reference */ 'r', `#parallelStream()`, `parallelStream()`],
					[/* text */ 't', ` methods, spliterators should either have the
 characteristic of `],
					[/* inline code block */ 'i', `IMMUTABLE`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `CONCURRENT`],
					[/* text */ 't', `, or be
 `],
					[/* reference */ 'r', `.Spliterator#binding`],
					[/* text */ 't', `.
 If none of these is practical, the overriding class should describe the
 spliterator's documented policy of binding and structural interference,
 and should override the `],
					[/* reference */ 'r', `#stream()`, `stream()`],
					[/* text */ 't', ` and `],
					[/* reference */ 'r', `#parallelStream()`, `parallelStream()`],
					[/* text */ 't', `
 methods to create streams using a `],
					[/* inline code block */ 'i', `Supplier`],
					[/* text */ 't', ` of the spliterator,
 as in:
 `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `Stream<E> s = StreamSupport.stream(() -> spliterator(), spliteratorCharacteristics)`]
				]],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `These requirements ensure that streams produced by the
 `],
					[/* reference */ 'r', `#stream()`, `stream()`],
					[/* text */ 't', ` and `],
					[/* reference */ 'r', `#parallelStream()`, `parallelStream()`],
					[/* text */ 't', ` methods will reflect the
 contents of the collection as of initiation of the terminal stream
 operation.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Spliterator`],
				[/* text */ 't', ` over the elements in this collection`]
			]
		]],
		[/* method */ 'parallelStream()', [
			[/* method description */
				[/* text */ 't', `Returns a possibly parallel `],
				[/* inline code block */ 'i', `Stream`],
				[/* text */ 't', ` with this collection as its
 source.  It is allowable for this method to return a sequential stream.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This method should be overridden when the `],
					[/* reference */ 'r', `#spliterator()`, `spliterator()`],
					[/* text */ 't', `
 method cannot return a spliterator that is `],
					[/* inline code block */ 'i', `IMMUTABLE`],
					[/* text */ 't', `,
 `],
					[/* inline code block */ 'i', `CONCURRENT`],
					[/* text */ 't', `, or `],
					[/* text */ 't', `late-binding`],
					[/* text */ 't', `. (See `],
					[/* reference */ 'r', `#spliterator()`, `spliterator()`],
					[/* text */ 't', `
 for details.)`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a possibly parallel `],
				[/* inline code block */ 'i', `Stream`],
				[/* text */ 't', ` over the elements in this
 collection`]
			]
		]],
		[/* method */ 'stream()', [
			[/* method description */
				[/* text */ 't', `Returns a sequential `],
				[/* inline code block */ 'i', `Stream`],
				[/* text */ 't', ` with this collection as its source.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This method should be overridden when the `],
					[/* reference */ 'r', `#spliterator()`, `spliterator()`],
					[/* text */ 't', `
 method cannot return a spliterator that is `],
					[/* inline code block */ 'i', `IMMUTABLE`],
					[/* text */ 't', `,
 `],
					[/* inline code block */ 'i', `CONCURRENT`],
					[/* text */ 't', `, or `],
					[/* text */ 't', `late-binding`],
					[/* text */ 't', `. (See `],
					[/* reference */ 'r', `#spliterator()`, `spliterator()`],
					[/* text */ 't', `
 for details.)`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a sequential `],
				[/* inline code block */ 'i', `Stream`],
				[/* text */ 't', ` over the elements in this collection`]
			]
		]]
	],
]);
