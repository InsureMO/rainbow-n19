import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.util.AbstractCollection', [
	[/* class description */
		[/* text */ 't', `This class provides a skeletal implementation of the `],
		[/* inline code block */ 'i', `Collection`],
		[/* text */ 't', `
 interface, to minimize the effort required to implement this interface. `],
		[/* block */ 'b', [
			[/* text */ 't', `

 To implement an unmodifiable collection, the programmer needs only to
 extend this class and provide implementations for the `],
			[/* inline code block */ 'i', `iterator`],
			[/* text */ 't', ` and
 `],
			[/* inline code block */ 'i', `size`],
			[/* text */ 't', ` methods.  (The iterator returned by the `],
			[/* inline code block */ 'i', `iterator`],
			[/* text */ 't', `
 method must implement `],
			[/* inline code block */ 'i', `hasNext`],
			[/* text */ 't', ` and `],
			[/* inline code block */ 'i', `next`],
			[/* text */ 't', `.)`]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `

 To implement a modifiable collection, the programmer must additionally
 override this class's `],
			[/* inline code block */ 'i', `add`],
			[/* text */ 't', ` method (which otherwise throws an
 `],
			[/* inline code block */ 'i', `UnsupportedOperationException`],
			[/* text */ 't', `), and the iterator returned by the
 `],
			[/* inline code block */ 'i', `iterator`],
			[/* text */ 't', ` method must additionally implement its `],
			[/* inline code block */ 'i', `remove`],
			[/* text */ 't', `
 method.`]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `

 The programmer should generally provide a void (no argument) and
 `],
			[/* inline code block */ 'i', `Collection`],
			[/* text */ 't', ` constructor, as per the recommendation in the
 `],
			[/* inline code block */ 'i', `Collection`],
			[/* text */ 't', ` interface specification.`]
		]],
		[/* block */ 'b', `

 The documentation for each non-abstract method in this class describes its
 implementation in detail.  Each of these methods may be overridden if
 the collection being implemented admits a more efficient implementation.`],
		[/* block */ 'b', [
			[/* text */ 't', `

 This class is a member of the
 `],
			[/* text */ 't', `Java Collections Framework`],
			[/* text */ 't', `.`]
		]]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Sole constructor.  (For invocation by subclass constructors, typically
 implicit.)`]
			],
			/* parameters */ UDF,
			/* throws */ UDF
		]]
	],
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
					[/* reference */ 'r', `java.lang.Class#getComponentType()`, `runtime component type`],
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
		[/* method */ 'size()', UDF],
		[/* method */ 'iterator()', [
			[/* method description */
				[/* text */ 't', `Returns an iterator over the elements contained in this collection.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an iterator over the elements contained in this collection`]
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
					[/* reference */ 'r', `java.util.Collection#optional-restrictions`, `optional`],
					[/* text */ 't', `)`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified element is null and this
         collection does not permit null elements
         (`],
					[/* reference */ 'r', `java.util.Collection#optional-restrictions`, `optional`],
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
					[/* reference */ 'r', `java.util.Collection#optional-restrictions`, `optional`],
					[/* text */ 't', `)`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified collection contains one
         or more null elements and this collection does not permit null
         elements
         (`],
					[/* reference */ 'r', `java.util.Collection#optional-restrictions`, `optional`],
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
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `remove`],
					[/* text */ 't', ` operation
         is not supported by this collection`]
				]],
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the type of the specified element
         is incompatible with this collection
         (`],
					[/* reference */ 'r', `java.util.Collection#optional-restrictions`, `optional`],
					[/* text */ 't', `)`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified element is null and this
         collection does not permit null elements
         (`],
					[/* reference */ 'r', `java.util.Collection#optional-restrictions`, `optional`],
					[/* text */ 't', `)`]
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
					[/* reference */ 'r', `java.util.Collection#optional-restrictions`, `optional`],
					[/* text */ 't', `)`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if this collection contains one or more
         null elements and the specified collection does not support
         null elements
         (`],
					[/* reference */ 'r', `java.util.Collection#optional-restrictions`, `optional`],
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
					[/* reference */ 'r', `java.util.Collection#optional-restrictions`, `optional`],
					[/* text */ 't', `)`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if this collection contains one or more
         null elements and the specified collection does not permit null
         elements
         (`],
					[/* reference */ 'r', `java.util.Collection#optional-restrictions`, `optional`],
					[/* text */ 't', `),
         or if the specified collection is null`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this collection changed as a result of the call`]
			]
		]],
		[/* method */ 'toArray()', [
			[/* method description */
				[/* text */ 't', `Returns an array containing all of the elements in this collection.
 If this collection makes any guarantees as to what order its elements
 are returned by its iterator, this method must return the elements in
 the same order. The returned array's `],
				[/* reference */ 'r', `java.lang.Class#getComponentType()`, `runtime component type`],
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
				[/* reference */ 'r', `java.lang.Class#getComponentType()`, `runtime component type`],
				[/* text */ 't', ` is `],
				[/* inline code block */ 'i', `Object`],
				[/* text */ 't', `, containing all of the elements in this collection`]
			]
		]],
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Returns a string representation of this collection.  The string
 representation consists of a list of the collection's elements in the
 order they are returned by its iterator, enclosed in square brackets
 (`],
				[/* inline code block */ 'i', `"[]"`],
				[/* text */ 't', `).  Adjacent elements are separated by the characters
 `],
				[/* inline code block */ 'i', `", "`],
				[/* text */ 't', ` (comma and space).  Elements are converted to strings as
 by `],
				[/* reference */ 'r', `java.lang.String#valueOf(java.lang.Object)`, `String.valueOf(Object)`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a string representation of this collection`]
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
		]]
	],
]);
