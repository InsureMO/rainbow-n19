import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.io.ObjectInputFilter$FilterInfo', [
	[/* class description */
		[/* text */ 't', `FilterInfo provides access to information about the current object
 being deserialized and the status of the `],
		[/* reference */ 'r', `java.io.ObjectInputStream`],
		[/* text */ 't', `.`]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'depth()', [
			[/* method description */
				[/* text */ 't', `The current depth.
 The depth starts at `],
				[/* inline code block */ 'i', `1`],
				[/* text */ 't', ` and increases for each nested object and
 decrements when each nested object returns.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the current depth`]
			]
		]],
		[/* method */ 'arrayLength()', [
			[/* method description */
				[/* text */ 't', `The number of array elements when deserializing an array of the class.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the non-negative number of array elements when deserializing
 an array of the class, otherwise -1`]
			]
		]],
		[/* method */ 'serialClass()', [
			[/* method description */
				[/* text */ 't', `The class of an object being deserialized.
 For arrays, it is the array type.
 For example, the array class name of a 2 dimensional array of strings is
 "`],
				[/* inline code block */ 'i', `[[Ljava.lang.String;`],
				[/* text */ 't', `".
 To check the array's element type, iteratively use
 `],
				[/* reference */ 'r', `java.Class#getComponentType()`],
				[/* text */ 't', ` while the result
 is an array and then check the class.
 The `],
				[/* inline code block */ 'i', `serialClass is null`],
				[/* text */ 't', ` in the case where a new object is not being
 created and to give the filter a chance to check the depth, number of
 references to existing objects, and the stream size.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `class of an object being deserialized; may be null`]
			]
		]],
		[/* method */ 'references()', [
			[/* method description */
				[/* text */ 't', `The current number of object references.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the non-negative current number of object references`]
			]
		]],
		[/* method */ 'streamBytes()', [
			[/* method description */
				[/* text */ 't', `The current number of bytes consumed.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the non-negative current number of bytes consumed`]
			]
		]]
	],
]);
