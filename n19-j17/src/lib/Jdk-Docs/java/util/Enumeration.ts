import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.util.Enumeration', [
	[/* class description */
		[/* text */ 't', `An object that implements the Enumeration interface generates a
 series of elements, one at a time. Successive calls to the
 `],
		[/* inline code block */ 'i', `nextElement`],
		[/* text */ 't', ` method return successive elements of the
 series.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 For example, to print all elements of a `],
			[/* inline code block */ 'i', `Vector<E>`],
			[/* text */ 't', `v`],
			[/* text */ 't', `:
 `]
		]],
		[/* code block */ 'c', `   for (Enumeration<E> e = v.elements(); e.hasMoreElements();)
       System.out.println(e.nextElement());`],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `
 Methods are provided to enumerate through the elements of a
 vector, the keys of a hashtable, and the values in a hashtable.
 Enumerations are also used to specify the input streams to a
 `],
			[/* inline code block */ 'i', `SequenceInputStream`],
			[/* text */ 't', `.`]
		]]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'hasMoreElements()', [
			[/* method description */
				[/* text */ 't', `Tests if this enumeration contains more elements.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if and only if this enumeration object
           contains at least one more element to provide;
          `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'nextElement()', [
			[/* method description */
				[/* text */ 't', `Returns the next element of this enumeration if this enumeration
 object has at least one more element to provide.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.util.NoSuchElementException', [/* throw description */
					[/* text */ 't', `if no more elements exist.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the next element of this enumeration.`]
			]
		]],
		[/* method */ 'asIterator()', [
			[/* method description */
				[/* text */ 't', `Returns an `],
				[/* reference */ 'r', `java.util.Iterator`, `Iterator`],
				[/* text */ 't', ` that traverses the remaining elements
 covered by this enumeration. Traversal is undefined if any methods
 are called on this enumeration after the call to `],
				[/* inline code block */ 'i', `asIterator`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an Iterator representing the remaining elements of this Enumeration`]
			]
		]]
	],
]);
