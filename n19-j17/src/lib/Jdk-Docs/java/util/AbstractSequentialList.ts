import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.util.AbstractSequentialList', [
	[/* class description */
		[/* text */ 't', `This class provides a skeletal implementation of the `],
		[/* inline code block */ 'i', `List`],
		[/* text */ 't', `
 interface to minimize the effort required to implement this interface
 backed by a "sequential access" data store (such as a linked list).  For
 random access data (such as an array), `],
		[/* inline code block */ 'i', `AbstractList`],
		[/* text */ 't', ` should be used
 in preference to this class.`],
		[/* block */ 'b', [
			[/* text */ 't', `

 This class is the opposite of the `],
			[/* inline code block */ 'i', `AbstractList`],
			[/* text */ 't', ` class in the sense
 that it implements the "random access" methods (`],
			[/* inline code block */ 'i', `get(int index)`],
			[/* text */ 't', `,
 `],
			[/* inline code block */ 'i', `set(int index, E element)`],
			[/* text */ 't', `, `],
			[/* inline code block */ 'i', `add(int index, E element)`],
			[/* text */ 't', ` and
 `],
			[/* inline code block */ 'i', `remove(int index)`],
			[/* text */ 't', `) on top of the list's list iterator, instead of
 the other way around.`]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `

 To implement a list the programmer needs only to extend this class and
 provide implementations for the `],
			[/* inline code block */ 'i', `listIterator`],
			[/* text */ 't', ` and `],
			[/* inline code block */ 'i', `size`],
			[/* text */ 't', `
 methods.  For an unmodifiable list, the programmer need only implement the
 list iterator's `],
			[/* inline code block */ 'i', `hasNext`],
			[/* text */ 't', `, `],
			[/* inline code block */ 'i', `next`],
			[/* text */ 't', `, `],
			[/* inline code block */ 'i', `hasPrevious`],
			[/* text */ 't', `,
 `],
			[/* inline code block */ 'i', `previous`],
			[/* text */ 't', ` and `],
			[/* inline code block */ 'i', `index`],
			[/* text */ 't', ` methods.`]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `

 For a modifiable list the programmer should additionally implement the list
 iterator's `],
			[/* inline code block */ 'i', `set`],
			[/* text */ 't', ` method.  For a variable-size list the programmer
 should additionally implement the list iterator's `],
			[/* inline code block */ 'i', `remove`],
			[/* text */ 't', ` and
 `],
			[/* inline code block */ 'i', `add`],
			[/* text */ 't', ` methods.`]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `

 The programmer should generally provide a void (no argument) and collection
 constructor, as per the recommendation in the `],
			[/* inline code block */ 'i', `Collection`],
			[/* text */ 't', ` interface
 specification.`]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `

 This class is a member of the
 `],
			[/* text */ 't', `Java Collections Framework`],
			[/* text */ 't', `.`]
		]]
	],
	/* fields */,
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Sole constructor.  (For invocation by subclass constructors, typically
 implicit.)`]
			],
			/* parameters */,
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'listIterator(int)', [
			[/* method description */
				[/* text */ 't', `Returns a list iterator over the elements in this list (in proper
 sequence).`]
			],
			[/* parameters */
				[/* parameter */ 'index', [/* parameter description */
					[/* text */ 't', `index of first element to be returned from the list
         iterator (by a call to the `],
					[/* inline code block */ 'i', `next`],
					[/* text */ 't', ` method)`]
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
         sequence)`]
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
 collection is this list, and it's nonempty.)

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This implementation gets an iterator over the specified collection and
 a list iterator over this list pointing to the indexed element (with
 `],
					[/* inline code block */ 'i', `listIterator(index)`],
					[/* text */ 't', `).  Then, it iterates over the specified
 collection, inserting the elements obtained from the iterator into this
 list, one at a time, using `],
					[/* inline code block */ 'i', `ListIterator.add`],
					[/* text */ 't', ` followed by
 `],
					[/* inline code block */ 'i', `ListIterator.next`],
					[/* text */ 't', ` (to skip over the added element).

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `Note that this implementation will throw an
 `],
					[/* inline code block */ 'i', `UnsupportedOperationException`],
					[/* text */ 't', ` if the list iterator returned by
 the `],
					[/* inline code block */ 'i', `listIterator`],
					[/* text */ 't', ` method does not implement the `],
					[/* inline code block */ 'i', `add`],
					[/* text */ 't', `
 operation.`]
				]]
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
		[/* method */ 'get(int)', [
			[/* method description */
				[/* text */ 't', `Returns the element at the specified position in this list.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This implementation first gets a list iterator pointing to the
 indexed element (with `],
					[/* inline code block */ 'i', `listIterator(index)`],
					[/* text */ 't', `).  Then, it gets
 the element using `],
					[/* inline code block */ 'i', `ListIterator.next`],
					[/* text */ 't', ` and returns it.`]
				]]
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
		[/* method */ 'remove(int)', [
			[/* method description */
				[/* text */ 't', `Removes the element at the specified position in this list (optional
 operation).  Shifts any subsequent elements to the left (subtracts one
 from their indices).  Returns the element that was removed from the
 list.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This implementation first gets a list iterator pointing to the
 indexed element (with `],
					[/* inline code block */ 'i', `listIterator(index)`],
					[/* text */ 't', `).  Then, it removes
 the element with `],
					[/* inline code block */ 'i', `ListIterator.remove`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `Note that this implementation will throw an
 `],
					[/* inline code block */ 'i', `UnsupportedOperationException`],
					[/* text */ 't', ` if the list iterator does not
 implement the `],
					[/* inline code block */ 'i', `remove`],
					[/* text */ 't', ` operation.`]
				]]
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
 specified element (optional operation).

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This implementation first gets a list iterator pointing to the
 indexed element (with `],
					[/* inline code block */ 'i', `listIterator(index)`],
					[/* text */ 't', `).  Then, it gets
 the current element using `],
					[/* inline code block */ 'i', `ListIterator.next`],
					[/* text */ 't', ` and replaces it
 with `],
					[/* inline code block */ 'i', `ListIterator.set`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `Note that this implementation will throw an
 `],
					[/* inline code block */ 'i', `UnsupportedOperationException`],
					[/* text */ 't', ` if the list iterator does not
 implement the `],
					[/* inline code block */ 'i', `set`],
					[/* text */ 't', ` operation.`]
				]]
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
		[/* method */ 'iterator()', [
			[/* method description */
				[/* text */ 't', `Returns an iterator over the elements in this list (in proper
 sequence).`],
				[/* block */ 'b', `

 This implementation merely returns a list iterator over the list.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `an iterator over the elements in this list (in proper sequence)`]
			]
		]],
		[/* method */ 'add(int,java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Inserts the specified element at the specified position in this list
 (optional operation).  Shifts the element currently at that position
 (if any) and any subsequent elements to the right (adds one to their
 indices).

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This implementation first gets a list iterator pointing to the
 indexed element (with `],
					[/* inline code block */ 'i', `listIterator(index)`],
					[/* text */ 't', `).  Then, it
 inserts the specified element with `],
					[/* inline code block */ 'i', `ListIterator.add`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `Note that this implementation will throw an
 `],
					[/* inline code block */ 'i', `UnsupportedOperationException`],
					[/* text */ 't', ` if the list iterator does not
 implement the `],
					[/* inline code block */ 'i', `add`],
					[/* text */ 't', ` operation.`]
				]]
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
		]]
	],
	/* enum values */ UDF
]);
