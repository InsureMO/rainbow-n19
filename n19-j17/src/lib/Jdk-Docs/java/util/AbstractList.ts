import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.util.AbstractList', [
	[/* class description */
		[/* text */ 't', `This class provides a skeletal implementation of the `],
		[/* reference */ 'r', `java.util.List`],
		[/* text */ 't', `
 interface to minimize the effort required to implement this interface
 backed by a "random access" data store (such as an array).  For sequential
 access data (such as a linked list), `],
		[/* reference */ 'r', `java.util.AbstractSequentialList`],
		[/* text */ 't', ` should
 be used in preference to this class.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `To implement an unmodifiable list, the programmer needs only to extend
 this class and provide implementations for the `],
			[/* reference */ 'r', `#get(int)`, `get(int)`],
			[/* text */ 't', ` and
 `],
			[/* reference */ 'r', `.List#size()`],
			[/* text */ 't', ` methods.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `To implement a modifiable list, the programmer must additionally
 override the `],
			[/* reference */ 'r', `#set(int,E)`, `set(int, E)`],
			[/* text */ 't', ` method (which otherwise
 throws an `],
			[/* inline code block */ 'i', `UnsupportedOperationException`],
			[/* text */ 't', `).  If the list is
 variable-size the programmer must additionally override the
 `],
			[/* reference */ 'r', `#add(int,E)`, `add(int, E)`],
			[/* text */ 't', ` and `],
			[/* reference */ 'r', `#remove(int)`, `remove(int)`],
			[/* text */ 't', ` methods.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `The programmer should generally provide a void (no argument) and collection
 constructor, as per the recommendation in the `],
			[/* reference */ 'r', `java.util.Collection`],
			[/* text */ 't', ` interface
 specification.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Unlike the other abstract collection implementations, the programmer does
 `],
			[/* text */ 't', `not`],
			[/* text */ 't', ` have to provide an iterator implementation; the iterator and
 list iterator are implemented by this class, on top of the "random access"
 methods:
 `],
			[/* reference */ 'r', `#get(int)`, `get(int)`],
			[/* text */ 't', `,
 `],
			[/* reference */ 'r', `#set(int,E)`, `set(int, E)`],
			[/* text */ 't', `,
 `],
			[/* reference */ 'r', `#add(int,E)`, `add(int, E)`],
			[/* text */ 't', ` and
 `],
			[/* reference */ 'r', `#remove(int)`, `remove(int)`],
			[/* text */ 't', `.

 `]
		]],
		[/* block */ 'b', `The documentation for each non-abstract method in this class describes its
 implementation in detail.  Each of these methods may be overridden if the
 collection being implemented admits a more efficient implementation.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `This class is a member of the
 `],
			[/* text */ 't', `Java Collections Framework`],
			[/* text */ 't', `.`]
		]]
	],
	[/* fields */
		[/* field */ 'modCount', [
			[/* field description */
				[/* text */ 't', `The number of times this list has been `],
				[/* text */ 't', `structurally modified`],
				[/* text */ 't', `.
 Structural modifications are those that change the size of the
 list, or otherwise perturb it in such a fashion that iterations in
 progress may yield incorrect results.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This field is used by the iterator and list iterator implementation
 returned by the `],
					[/* inline code block */ 'i', `iterator`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `listIterator`],
					[/* text */ 't', ` methods.
 If the value of this field changes unexpectedly, the iterator (or list
 iterator) will throw a `],
					[/* inline code block */ 'i', `ConcurrentModificationException`],
					[/* text */ 't', ` in
 response to the `],
					[/* inline code block */ 'i', `next`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `remove`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `previous`],
					[/* text */ 't', `,
 `],
					[/* inline code block */ 'i', `set`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `add`],
					[/* text */ 't', ` operations.  This provides
 `],
					[/* text */ 't', `fail-fast`],
					[/* text */ 't', ` behavior, rather than non-deterministic behavior in
 the face of concurrent modification during iteration.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `Use of this field by subclasses is optional.`],
					[/* text */ 't', ` If a subclass
 wishes to provide fail-fast iterators (and list iterators), then it
 merely has to increment this field in its `],
					[/* inline code block */ 'i', `add(int, E)`],
					[/* text */ 't', ` and
 `],
					[/* inline code block */ 'i', `remove(int)`],
					[/* text */ 't', ` methods (and any other methods that it overrides
 that result in structural modifications to the list).  A single call to
 `],
					[/* inline code block */ 'i', `add(int, E)`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `remove(int)`],
					[/* text */ 't', ` must add no more than
 one to this field, or the iterators (and list iterators) will throw
 bogus `],
					[/* inline code block */ 'i', `ConcurrentModificationExceptions`],
					[/* text */ 't', `.  If an implementation
 does not wish to provide fail-fast iterators, this field may be
 ignored.`]
				]]
			],
		]]
	],
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
		[/* method */ 'removeRange(int,int)', [
			[/* method description */
				[/* text */ 't', `Removes from this list all of the elements whose index is between
 `],
				[/* inline code block */ 'i', `fromIndex`],
				[/* text */ 't', `, inclusive, and `],
				[/* inline code block */ 'i', `toIndex`],
				[/* text */ 't', `, exclusive.
 Shifts any succeeding elements to the left (reduces their index).
 This call shortens the list by `],
				[/* inline code block */ 'i', `(toIndex - fromIndex)`],
				[/* text */ 't', ` elements.
 (If `],
				[/* inline code block */ 'i', `toIndex==fromIndex`],
				[/* text */ 't', `, this operation has no effect.)

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This method is called by the `],
					[/* inline code block */ 'i', `clear`],
					[/* text */ 't', ` operation on this list
 and its subLists.  Overriding this method to take advantage of
 the internals of the list implementation can `],
					[/* text */ 't', `substantially`],
					[/* text */ 't', `
 improve the performance of the `],
					[/* inline code block */ 'i', `clear`],
					[/* text */ 't', ` operation on this list
 and its subLists.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'fromIndex', [/* parameter description */
					[/* text */ 't', `index of first element to be removed`]
				]],
				[/* parameter */ 'toIndex', [/* parameter description */
					[/* text */ 't', `index after last element to be removed`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'get(int)', [
			[/* method description */
				[/* text */ 't', `Returns the element at the specified position in this list.`]
			],
			[/* parameters */
				[/* parameter */ 'index', [/* parameter description */
					[/* text */ 't', `index of the element to return`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if the index is out of range
         (`],
					[/* inline code block */ 'i', `index < 0 || index >= size()`],
					[/* text */ 't', `)`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the element at the specified position in this list`]
			]
		]],
		[/* method */ 'add(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Appends the specified element to the end of this list (optional
 operation).

 `],
				[/* block */ 'b', `Lists that support this operation may place limitations on what
 elements may be added to this list.  In particular, some
 lists will refuse to add null elements, and others will impose
 restrictions on the type of elements that may be added.  List
 classes should clearly specify in their documentation any restrictions
 on what elements may be added.`]
			],
			[/* parameters */
				[/* parameter */ 'e', [/* parameter description */
					[/* text */ 't', `element to be appended to this list`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `add`],
					[/* text */ 't', ` operation
         is not supported by this list`]
				]],
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the class of the specified element
         prevents it from being added to this list`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified element is null and this
         list does not permit null elements`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if some property of this element
         prevents it from being added to this list`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` (as specified by `],
				[/* reference */ 'r', `.Collection#add(E)`],
				[/* text */ 't', `)`]
			]
		]],
		[/* method */ 'addAll(int,java.util.Collection)', [
			[/* method description */
				[/* text */ 't', `Inserts all of the elements in the specified collection into this
 list at the specified position (optional operation).  Shifts the
 element currently at that position (if any) and any subsequent
 elements to the right (increases their indices).  The new elements
 will appear in this list in the order that they are returned by the
 specified collection's iterator.  The behavior of this operation is
 undefined if the specified collection is modified while the
 operation is in progress.  (Note that this will occur if the specified
 collection is this list, and it's nonempty.)`]
			],
			[/* parameters */
				[/* parameter */ 'index', [/* parameter description */
					[/* text */ 't', `index at which to insert the first element from the
              specified collection`]
				]],
				[/* parameter */ 'c', [/* parameter description */
					[/* text */ 't', `collection containing elements to be added to this list`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `addAll`],
					[/* text */ 't', ` operation
         is not supported by this list`]
				]],
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the class of an element of the specified
         collection prevents it from being added to this list`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified collection contains one
         or more null elements and this list does not permit null
         elements, or if the specified collection is null`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if some property of an element of the
         specified collection prevents it from being added to this list`]
				]],
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if the index is out of range
         (`],
					[/* inline code block */ 'i', `index < 0 || index > size()`],
					[/* text */ 't', `)`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this list changed as a result of the call`]
			]
		]],
		[/* method */ 'equals(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Compares the specified object with this list for equality.  Returns
 `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if and only if the specified object is also a list, both
 lists have the same size, and all corresponding pairs of elements in
 the two lists are `],
				[/* text */ 't', `equal`],
				[/* text */ 't', `.  (Two elements `],
				[/* inline code block */ 'i', `e1`],
				[/* text */ 't', ` and
 `],
				[/* inline code block */ 'i', `e2`],
				[/* text */ 't', ` are `],
				[/* text */ 't', `equal`],
				[/* text */ 't', ` if `],
				[/* inline code block */ 'i', `(e1==null ? e2==null : e1.equals(e2))`],
				[/* text */ 't', `.)  In other words, two lists are defined to be
 equal if they contain the same elements in the same order.`]
			],
			[/* parameters */
				[/* parameter */ 'o', [/* parameter description */
					[/* text */ 't', `the object to be compared for equality with this list`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the specified object is equal to this list`]
			]
		]],
		[/* method */ 'remove(int)', [
			[/* method description */
				[/* text */ 't', `Removes the element at the specified position in this list (optional
 operation).  Shifts any subsequent elements to the left (subtracts one
 from their indices).  Returns the element that was removed from the
 list.`]
			],
			[/* parameters */
				[/* parameter */ 'index', [/* parameter description */
					[/* text */ 't', `the index of the element to be removed`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `remove`],
					[/* text */ 't', ` operation
         is not supported by this list`]
				]],
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if the index is out of range
         (`],
					[/* inline code block */ 'i', `index < 0 || index >= size()`],
					[/* text */ 't', `)`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the element previously at the specified position`]
			]
		]],
		[/* method */ 'set(int,java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Replaces the element at the specified position in this list with the
 specified element (optional operation).`]
			],
			[/* parameters */
				[/* parameter */ 'index', [/* parameter description */
					[/* text */ 't', `index of the element to replace`]
				]],
				[/* parameter */ 'element', [/* parameter description */
					[/* text */ 't', `element to be stored at the specified position`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `set`],
					[/* text */ 't', ` operation
         is not supported by this list`]
				]],
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the class of the specified element
         prevents it from being added to this list`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified element is null and
         this list does not permit null elements`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if some property of the specified
         element prevents it from being added to this list`]
				]],
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if the index is out of range
         (`],
					[/* inline code block */ 'i', `index < 0 || index >= size()`],
					[/* text */ 't', `)`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the element previously at the specified position`]
			]
		]],
		[/* method */ 'hashCode()', [
			[/* method description */
				[/* text */ 't', `Returns the hash code value for this list.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the hash code value for this list`]
			]
		]],
		[/* method */ 'indexOf(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Returns the index of the first occurrence of the specified element
 in this list, or -1 if this list does not contain the element.
 More formally, returns the lowest index `],
				[/* inline code block */ 'i', `i`],
				[/* text */ 't', ` such that
 `],
				[/* inline code block */ 'i', `Objects.equals(o, get(i))`],
				[/* text */ 't', `,
 or -1 if there is no such index.`]
			],
			[/* parameters */
				[/* parameter */ 'o', [/* parameter description */
					[/* text */ 't', `element to search for`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the type of the specified element
         is incompatible with this list
         (`],
					[/* reference */ 'r', `.Collection#optional-restrictions`],
					[/* text */ 't', `)`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified element is null and this
         list does not permit null elements
         (`],
					[/* reference */ 'r', `.Collection#optional-restrictions`],
					[/* text */ 't', `)`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the index of the first occurrence of the specified element in
         this list, or -1 if this list does not contain the element`]
			]
		]],
		[/* method */ 'lastIndexOf(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Returns the index of the last occurrence of the specified element
 in this list, or -1 if this list does not contain the element.
 More formally, returns the highest index `],
				[/* inline code block */ 'i', `i`],
				[/* text */ 't', ` such that
 `],
				[/* inline code block */ 'i', `Objects.equals(o, get(i))`],
				[/* text */ 't', `,
 or -1 if there is no such index.`]
			],
			[/* parameters */
				[/* parameter */ 'o', [/* parameter description */
					[/* text */ 't', `element to search for`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the type of the specified element
         is incompatible with this list
         (`],
					[/* reference */ 'r', `.Collection#optional-restrictions`],
					[/* text */ 't', `)`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified element is null and this
         list does not permit null elements
         (`],
					[/* reference */ 'r', `.Collection#optional-restrictions`],
					[/* text */ 't', `)`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the index of the last occurrence of the specified element in
         this list, or -1 if this list does not contain the element`]
			]
		]],
		[/* method */ 'iterator()', [
			[/* method description */
				[/* text */ 't', `Returns an iterator over the elements in this list in proper sequence.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an iterator over the elements in this list in proper sequence`]
			]
		]],
		[/* method */ 'subList(int,int)', [
			[/* method description */
				[/* text */ 't', `Returns a view of the portion of this list between the specified
 `],
				[/* inline code block */ 'i', `fromIndex`],
				[/* text */ 't', `, inclusive, and `],
				[/* inline code block */ 'i', `toIndex`],
				[/* text */ 't', `, exclusive.  (If
 `],
				[/* inline code block */ 'i', `fromIndex`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `toIndex`],
				[/* text */ 't', ` are equal, the returned list is
 empty.)  The returned list is backed by this list, so non-structural
 changes in the returned list are reflected in this list, and vice-versa.
 The returned list supports all of the optional list operations supported
 by this list.`],
				[/* block */ 'b', `

 This method eliminates the need for explicit range operations (of
 the sort that commonly exist for arrays).  Any operation that expects
 a list can be used as a range operation by passing a subList view
 instead of a whole list.  For example, the following idiom
 removes a range of elements from a list:
 `],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `list.subList(from, to).clear();`]
				]],
				[/* text */ 't', `
 Similar idioms may be constructed for `],
				[/* inline code block */ 'i', `indexOf`],
				[/* text */ 't', ` and
 `],
				[/* inline code block */ 'i', `lastIndexOf`],
				[/* text */ 't', `, and all of the algorithms in the
 `],
				[/* inline code block */ 'i', `Collections`],
				[/* text */ 't', ` class can be applied to a subList.`],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `

 The semantics of the list returned by this method become undefined if
 the backing list (i.e., this list) is `],
					[/* text */ 't', `structurally modified`],
					[/* text */ 't', ` in
 any way other than via the returned list.  (Structural modifications are
 those that change the size of this list, or otherwise perturb it in such
 a fashion that iterations in progress may yield incorrect results.)`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'fromIndex', [/* parameter description */
					[/* text */ 't', `low endpoint (inclusive) of the subList`]
				]],
				[/* parameter */ 'toIndex', [/* parameter description */
					[/* text */ 't', `high endpoint (exclusive) of the subList`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if an endpoint index value is out of range
         `],
					[/* inline code block */ 'i', `(fromIndex < 0 || toIndex > size)`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the endpoint indices are out of order
         `],
					[/* inline code block */ 'i', `(fromIndex > toIndex)`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a view of the specified range within this list`]
			]
		]],
		[/* method */ 'listIterator()', [
			[/* method description */
				[/* text */ 't', `Returns a list iterator over the elements in this list (in proper
 sequence).`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a list iterator over the elements in this list (in proper
         sequence)`]
			]
		]],
		[/* method */ 'listIterator(int)', [
			[/* method description */
				[/* text */ 't', `Returns a list iterator over the elements in this list (in proper
 sequence), starting at the specified position in the list.
 The specified index indicates the first element that would be
 returned by an initial call to `],
				[/* reference */ 'r', `.ListIterator#next()`],
				[/* text */ 't', `.
 An initial call to `],
				[/* reference */ 'r', `.ListIterator#previous()`],
				[/* text */ 't', ` would
 return the element with the specified index minus one.`]
			],
			[/* parameters */
				[/* parameter */ 'index', [/* parameter description */
					[/* text */ 't', `index of the first element to be returned from the
        list iterator (by a call to `],
					[/* reference */ 'r', `.ListIterator#next()`],
					[/* text */ 't', `)`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if the index is out of range
         (`],
					[/* inline code block */ 'i', `index < 0 || index > size()`],
					[/* text */ 't', `)`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a list iterator over the elements in this list (in proper
         sequence), starting at the specified position in the list`]
			]
		]],
		[/* method */ 'add(int,java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Inserts the specified element at the specified position in this list
 (optional operation).  Shifts the element currently at that position
 (if any) and any subsequent elements to the right (adds one to their
 indices).`]
			],
			[/* parameters */
				[/* parameter */ 'index', [/* parameter description */
					[/* text */ 't', `index at which the specified element is to be inserted`]
				]],
				[/* parameter */ 'element', [/* parameter description */
					[/* text */ 't', `element to be inserted`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `add`],
					[/* text */ 't', ` operation
         is not supported by this list`]
				]],
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the class of the specified element
         prevents it from being added to this list`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified element is null and
         this list does not permit null elements`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if some property of the specified
         element prevents it from being added to this list`]
				]],
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if the index is out of range
         (`],
					[/* inline code block */ 'i', `index < 0 || index > size()`],
					[/* text */ 't', `)`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'clear()', [
			[/* method description */
				[/* text */ 't', `Removes all of the elements from this list (optional operation).
 The list will be empty after this call returns.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `clear`],
					[/* text */ 't', ` operation
         is not supported by this list`]
				]]
			],
			/* return */ UDF
		]]
	],
]);
