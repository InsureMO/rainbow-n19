import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.util.AbstractSet', [
	[/* class description */
		[/* text */ 't', `This class provides a skeletal implementation of the `],
		[/* inline code block */ 'i', `Set`],
		[/* text */ 't', `
 interface to minimize the effort required to implement this
 interface. `],
		[/* block */ 'b', [
			[/* text */ 't', `

 The process of implementing a set by extending this class is identical
 to that of implementing a Collection by extending AbstractCollection,
 except that all of the methods and constructors in subclasses of this
 class must obey the additional constraints imposed by the `],
			[/* inline code block */ 'i', `Set`],
			[/* text */ 't', `
 interface (for instance, the add method must not permit addition of
 multiple instances of an object to a set).`]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `

 Note that this class does not override any of the implementations from
 the `],
			[/* inline code block */ 'i', `AbstractCollection`],
			[/* text */ 't', ` class.  It merely adds implementations
 for `],
			[/* inline code block */ 'i', `equals`],
			[/* text */ 't', ` and `],
			[/* inline code block */ 'i', `hashCode`],
			[/* text */ 't', `.`]
		]],
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
		[/* method */ 'equals(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Compares the specified object with this set for equality.  Returns
 `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the given object is also a set, the two sets have
 the same size, and every member of the given set is contained in
 this set.  This ensures that the `],
				[/* inline code block */ 'i', `equals`],
				[/* text */ 't', ` method works
 properly across different implementations of the `],
				[/* inline code block */ 'i', `Set`],
				[/* text */ 't', `
 interface.`],
				[/* block */ 'b', [
					[/* text */ 't', `

 This implementation first checks if the specified object is this
 set; if so it returns `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', `.  Then, it checks if the
 specified object is a set whose size is identical to the size of
 this set; if not, it returns false.  If so, it returns
 `],
					[/* inline code block */ 'i', `containsAll((Collection) o)`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'o', [/* parameter description */
					[/* text */ 't', `object to be compared for equality with this set`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the specified object is equal to this set`]
			]
		]],
		[/* method */ 'hashCode()', [
			[/* method description */
				[/* text */ 't', `Returns the hash code value for this set.  The hash code of a set is
 defined to be the sum of the hash codes of the elements in the set,
 where the hash code of a `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` element is defined to be zero.
 This ensures that `],
				[/* inline code block */ 'i', `s1.equals(s2)`],
				[/* text */ 't', ` implies that
 `],
				[/* inline code block */ 'i', `s1.hashCode()==s2.hashCode()`],
				[/* text */ 't', ` for any two sets `],
				[/* inline code block */ 'i', `s1`],
				[/* text */ 't', `
 and `],
				[/* inline code block */ 'i', `s2`],
				[/* text */ 't', `, as required by the general contract of
 `],
				[/* reference */ 'r', `java.Object#hashCode()`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This implementation iterates over the set, calling the
 `],
					[/* inline code block */ 'i', `hashCode`],
					[/* text */ 't', ` method on each element in the set, and adding up
 the results.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the hash code value for this set`]
			]
		]],
		[/* method */ 'removeAll(java.util.Collection)', [
			[/* method description */
				[/* text */ 't', `Removes from this set all of its elements that are contained in the
 specified collection (optional operation).  If the specified
 collection is also a set, this operation effectively modifies this
 set so that its value is the `],
				[/* text */ 't', `asymmetric set difference`],
				[/* text */ 't', ` of
 the two sets.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This implementation determines which is the smaller of this set
 and the specified collection, by invoking the `],
					[/* inline code block */ 'i', `size`],
					[/* text */ 't', `
 method on each.  If this set has fewer elements, then the
 implementation iterates over this set, checking each element
 returned by the iterator in turn to see if it is contained in
 the specified collection.  If it is so contained, it is removed
 from this set with the iterator's `],
					[/* inline code block */ 'i', `remove`],
					[/* text */ 't', ` method.  If
 the specified collection has fewer elements, then the
 implementation iterates over the specified collection, removing
 from this set each element returned by the iterator, using this
 set's `],
					[/* inline code block */ 'i', `remove`],
					[/* text */ 't', ` method.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `Note that this implementation will throw an
 `],
					[/* inline code block */ 'i', `UnsupportedOperationException`],
					[/* text */ 't', ` if the iterator returned by the
 `],
					[/* inline code block */ 'i', `iterator`],
					[/* text */ 't', ` method does not implement the `],
					[/* inline code block */ 'i', `remove`],
					[/* text */ 't', ` method.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'c', [/* parameter description */
					[/* text */ 't', `collection containing elements to be removed from this set`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `removeAll`],
					[/* text */ 't', ` operation
         is not supported by this set`]
				]],
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the class of an element of this set
         is incompatible with the specified collection
 (`],
					[/* reference */ 'r', `.Collection#optional-restrictions`],
					[/* text */ 't', `)`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if this set contains a null element and the
         specified collection does not permit null elements
 (`],
					[/* reference */ 'r', `.Collection#optional-restrictions`],
					[/* text */ 't', `),
         or if the specified collection is null`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this set changed as a result of the call`]
			]
		]]
	],
]);
