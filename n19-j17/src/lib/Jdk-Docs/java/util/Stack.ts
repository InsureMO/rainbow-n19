import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.util.Stack', [
	[/* class description */
		[/* text */ 't', `The `],
		[/* inline code block */ 'i', `Stack`],
		[/* text */ 't', ` class represents a last-in-first-out
 (LIFO) stack of objects. It extends class `],
		[/* inline code block */ 'i', `Vector`],
		[/* text */ 't', ` with five
 operations that allow a vector to be treated as a stack. The usual
 `],
		[/* inline code block */ 'i', `push`],
		[/* text */ 't', ` and `],
		[/* inline code block */ 'i', `pop`],
		[/* text */ 't', ` operations are provided, as well as a
 method to `],
		[/* inline code block */ 'i', `peek`],
		[/* text */ 't', ` at the top item on the stack, a method to test
 for whether the stack is `],
		[/* inline code block */ 'i', `empty`],
		[/* text */ 't', `, and a method to `],
		[/* inline code block */ 'i', `search`],
		[/* text */ 't', `
 the stack for an item and discover how far it is from the top.
 `],
		[/* block */ 'b', `
 When a stack is first created, it contains no items.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `A more complete and consistent set of LIFO stack operations is
 provided by the `],
			[/* reference */ 'r', `java.util.Deque`],
			[/* text */ 't', ` interface and its implementations, which
 should be used in preference to this class.  For example:
 `]
		]],
		[/* code block */ 'c', [
			[/* inline code block */ 'i', `Deque<Integer> stack = new ArrayDeque<Integer>();`]
		]],
		[/* block */ 'b', '']
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Creates an empty Stack.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'empty()', [
			[/* method description */
				[/* text */ 't', `Tests if this stack is empty.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if and only if this stack contains
          no items; `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'push(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Pushes an item onto the top of this stack. This has exactly
 the same effect as:
 `],
				[/* block */ 'b', [
					[/* code block */ 'c', ` addElement(item)`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'item', [/* parameter description */
					[/* text */ 't', `the item to be pushed onto this stack.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the `],
				[/* inline code block */ 'i', `item`],
				[/* text */ 't', ` argument.`]
			]
		]],
		[/* method */ 'peek()', [
			[/* method description */
				[/* text */ 't', `Looks at the object at the top of this stack without removing it
 from the stack.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.util.EmptyStackException', [/* throw description */
					[/* text */ 't', `if this stack is empty.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the object at the top of this stack (the last item
          of the `],
				[/* inline code block */ 'i', `Vector`],
				[/* text */ 't', ` object).`]
			]
		]],
		[/* method */ 'pop()', [
			[/* method description */
				[/* text */ 't', `Removes the object at the top of this stack and returns that
 object as the value of this function.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.util.EmptyStackException', [/* throw description */
					[/* text */ 't', `if this stack is empty.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The object at the top of this stack (the last item
          of the `],
				[/* inline code block */ 'i', `Vector`],
				[/* text */ 't', ` object).`]
			]
		]],
		[/* method */ 'search(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Returns the 1-based position where an object is on this stack.
 If the object `],
				[/* inline code block */ 'i', `o`],
				[/* text */ 't', ` occurs as an item in this stack, this
 method returns the distance from the top of the stack of the
 occurrence nearest the top of the stack; the topmost item on the
 stack is considered to be at distance `],
				[/* inline code block */ 'i', `1`],
				[/* text */ 't', `. The `],
				[/* inline code block */ 'i', `equals`],
				[/* text */ 't', `
 method is used to compare `],
				[/* inline code block */ 'i', `o`],
				[/* text */ 't', ` to the
 items in this stack.`]
			],
			[/* parameters */
				[/* parameter */ 'o', [/* parameter description */
					[/* text */ 't', `the desired object.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the 1-based position from the top of the stack where
          the object is located; the return value `],
				[/* inline code block */ 'i', `-1`],
				[/* text */ 't', `
          indicates that the object is not on the stack.`]
			]
		]]
	],
]);
