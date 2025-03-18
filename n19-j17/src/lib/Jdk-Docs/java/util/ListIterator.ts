import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.util.ListIterator', [
	[/* class description */
		[/* text */ 't', `An iterator for lists that allows the programmer
 to traverse the list in either direction, modify
 the list during iteration, and obtain the iterator's
 current position in the list. A `],
		[/* inline code block */ 'i', `ListIterator`],
		[/* text */ 't', `
 has no current element; its `],
		[/* text */ 't', `cursor position`],
		[/* text */ 't', ` always
 lies between the element that would be returned by a call
 to `],
		[/* inline code block */ 'i', `previous()`],
		[/* text */ 't', ` and the element that would be
 returned by a call to `],
		[/* inline code block */ 'i', `next()`],
		[/* text */ 't', `.
 An iterator for a list of length `],
		[/* inline code block */ 'i', `n`],
		[/* text */ 't', ` has `],
		[/* inline code block */ 'i', `n+1`],
		[/* text */ 't', ` possible
 cursor positions, as illustrated by the carets (`],
		[/* inline code block */ 'i', `^`],
		[/* text */ 't', `) below:
 `],
		[/* code block */ 'c', `                      Element(0)   Element(1)   Element(2)   ... Element(n-1)
 cursor positions:  ^            ^            ^            ^                  ^
 `],
		[/* text */ 't', `
 Note that the `],
		[/* reference */ 'r', `#remove()`, `remove()`],
		[/* text */ 't', ` and `],
		[/* reference */ 'r', `#set(E)`, `set(Object)`],
		[/* text */ 't', ` methods are
 `],
		[/* text */ 't', `not`],
		[/* text */ 't', ` defined in terms of the cursor position;  they are defined to
 operate on the last element returned by a call to `],
		[/* reference */ 'r', `#next()`, `next()`],
		[/* text */ 't', ` or
 `],
		[/* reference */ 'r', `#previous()`, `previous()`],
		[/* text */ 't', `.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `This interface is a member of the
 `],
			[/* text */ 't', `Java Collections Framework`],
			[/* text */ 't', `.`]
		]]
	],
	/* fields */,
	/* constructors */,
	[/* methods */
		[/* method */ 'hasNext()', [
			[/* method description */
				[/* text */ 't', `Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this list iterator has more elements when
 traversing the list in the forward direction. (In other words,
 returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if `],
				[/* reference */ 'r', `#next()`, `next()`],
				[/* text */ 't', ` would return an element rather
 than throwing an exception.)`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the list iterator has more elements when
         traversing the list in the forward direction`]
			]
		]],
		[/* method */ 'hasPrevious()', [
			[/* method description */
				[/* text */ 't', `Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this list iterator has more elements when
 traversing the list in the reverse direction.  (In other words,
 returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if `],
				[/* reference */ 'r', `#previous()`, `previous()`],
				[/* text */ 't', ` would return an element
 rather than throwing an exception.)`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the list iterator has more elements when
         traversing the list in the reverse direction`]
			]
		]],
		[/* method */ 'next()', [
			[/* method description */
				[/* text */ 't', `Returns the next element in the list and advances the cursor position.
 This method may be called repeatedly to iterate through the list,
 or intermixed with calls to `],
				[/* reference */ 'r', `#previous()`, `previous()`],
				[/* text */ 't', ` to go back and forth.
 (Note that alternating calls to `],
				[/* inline code block */ 'i', `next`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `previous`],
				[/* text */ 't', `
 will return the same element repeatedly.)`]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.util.NoSuchElementException', [/* throw description */
					[/* text */ 't', `if the iteration has no next element`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the next element in the list`]
			]
		]],
		[/* method */ 'previous()', [
			[/* method description */
				[/* text */ 't', `Returns the previous element in the list and moves the cursor
 position backwards.  This method may be called repeatedly to
 iterate through the list backwards, or intermixed with calls to
 `],
				[/* reference */ 'r', `#next()`, `next()`],
				[/* text */ 't', ` to go back and forth.  (Note that alternating calls
 to `],
				[/* inline code block */ 'i', `next`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `previous`],
				[/* text */ 't', ` will return the same
 element repeatedly.)`]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.util.NoSuchElementException', [/* throw description */
					[/* text */ 't', `if the iteration has no previous
         element`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the previous element in the list`]
			]
		]],
		[/* method */ 'nextIndex()', [
			[/* method description */
				[/* text */ 't', `Returns the index of the element that would be returned by a
 subsequent call to `],
				[/* reference */ 'r', `#next()`, `next()`],
				[/* text */ 't', `. (Returns list size if the list
 iterator is at the end of the list.)`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the index of the element that would be returned by a
         subsequent call to `],
				[/* inline code block */ 'i', `next`],
				[/* text */ 't', `, or list size if the list
         iterator is at the end of the list`]
			]
		]],
		[/* method */ 'previousIndex()', [
			[/* method description */
				[/* text */ 't', `Returns the index of the element that would be returned by a
 subsequent call to `],
				[/* reference */ 'r', `#previous()`, `previous()`],
				[/* text */ 't', `. (Returns -1 if the list
 iterator is at the beginning of the list.)`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the index of the element that would be returned by a
         subsequent call to `],
				[/* inline code block */ 'i', `previous`],
				[/* text */ 't', `, or -1 if the list
         iterator is at the beginning of the list`]
			]
		]],
		[/* method */ 'add(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Inserts the specified element into the list (optional operation).
 The element is inserted immediately before the element that
 would be returned by `],
				[/* reference */ 'r', `#next()`, `next()`],
				[/* text */ 't', `, if any, and after the element
 that would be returned by `],
				[/* reference */ 'r', `#previous()`, `previous()`],
				[/* text */ 't', `, if any.  (If the
 list contains no elements, the new element becomes the sole element
 on the list.)  The new element is inserted before the implicit
 cursor: a subsequent call to `],
				[/* inline code block */ 'i', `next`],
				[/* text */ 't', ` would be unaffected, and a
 subsequent call to `],
				[/* inline code block */ 'i', `previous`],
				[/* text */ 't', ` would return the new element.
 (This call increases by one the value that would be returned by a
 call to `],
				[/* inline code block */ 'i', `nextIndex`],
				[/* text */ 't', ` or `],
				[/* inline code block */ 'i', `previousIndex`],
				[/* text */ 't', `.)`]
			],
			[/* parameters */
				[/* parameter */ 'e', [/* parameter description */
					[/* text */ 't', `the element to insert`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `add`],
					[/* text */ 't', ` method is
         not supported by this list iterator`]
				]],
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the class of the specified element
         prevents it from being added to this list`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if some aspect of this element
         prevents it from being added to this list`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'remove()', [
			[/* method description */
				[/* text */ 't', `Removes from the list the last element that was returned by `],
				[/* reference */ 'r', `#next()`, `next()`],
				[/* text */ 't', ` or `],
				[/* reference */ 'r', `#previous()`, `previous()`],
				[/* text */ 't', ` (optional operation).  This call can
 only be made once per call to `],
				[/* inline code block */ 'i', `next`],
				[/* text */ 't', ` or `],
				[/* inline code block */ 'i', `previous`],
				[/* text */ 't', `.
 It can be made only if `],
				[/* reference */ 'r', `#add(E)`, `add(E)`],
				[/* text */ 't', ` has not been
 called after the last call to `],
				[/* inline code block */ 'i', `next`],
				[/* text */ 't', ` or `],
				[/* inline code block */ 'i', `previous`],
				[/* text */ 't', `.`]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `remove`],
					[/* text */ 't', `
         operation is not supported by this list iterator`]
				]],
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `if neither `],
					[/* inline code block */ 'i', `next`],
					[/* text */ 't', ` nor
         `],
					[/* inline code block */ 'i', `previous`],
					[/* text */ 't', ` have been called, or `],
					[/* inline code block */ 'i', `remove`],
					[/* text */ 't', ` or
         `],
					[/* inline code block */ 'i', `add`],
					[/* text */ 't', ` have been called after the last call to
         `],
					[/* inline code block */ 'i', `next`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `previous`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'set(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Replaces the last element returned by `],
				[/* reference */ 'r', `#next()`, `next()`],
				[/* text */ 't', ` or
 `],
				[/* reference */ 'r', `#previous()`, `previous()`],
				[/* text */ 't', ` with the specified element (optional operation).
 This call can be made only if neither `],
				[/* reference */ 'r', `#remove()`, `remove()`],
				[/* text */ 't', ` nor `],
				[/* reference */ 'r', `#add(E)`, `add(E)`],
				[/* text */ 't', ` have been called after the last call to `],
				[/* inline code block */ 'i', `next`],
				[/* text */ 't', ` or
 `],
				[/* inline code block */ 'i', `previous`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'e', [/* parameter description */
					[/* text */ 't', `the element with which to replace the last element returned by
          `],
					[/* inline code block */ 'i', `next`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `previous`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `set`],
					[/* text */ 't', ` operation
         is not supported by this list iterator`]
				]],
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the class of the specified element
         prevents it from being added to this list`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if some aspect of the specified
         element prevents it from being added to this list`]
				]],
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `if neither `],
					[/* inline code block */ 'i', `next`],
					[/* text */ 't', ` nor
         `],
					[/* inline code block */ 'i', `previous`],
					[/* text */ 't', ` have been called, or `],
					[/* inline code block */ 'i', `remove`],
					[/* text */ 't', ` or
         `],
					[/* inline code block */ 'i', `add`],
					[/* text */ 't', ` have been called after the last call to
         `],
					[/* inline code block */ 'i', `next`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `previous`]
				]]
			],
			/* return */ UDF
		]]
	],
	/* enum values */ UDF
]);
