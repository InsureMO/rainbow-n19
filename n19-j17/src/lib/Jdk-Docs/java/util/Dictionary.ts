import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.util.Dictionary', [
	[/* class description */
		[/* text */ 't', `The `],
		[/* inline code block */ 'i', `Dictionary`],
		[/* text */ 't', ` class is the abstract parent of any
 class, such as `],
		[/* inline code block */ 'i', `Hashtable`],
		[/* text */ 't', `, which maps keys to values.
 Every key and every value is an object. In any one `],
		[/* inline code block */ 'i', `Dictionary`],
		[/* text */ 't', `
 object, every key is associated with at most one value. Given a
 `],
		[/* inline code block */ 'i', `Dictionary`],
		[/* text */ 't', ` and a key, the associated element can be looked up.
 Any non-`],
		[/* inline code block */ 'i', `null`],
		[/* text */ 't', ` object can be used as a key and as a value.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 As a rule, the `],
			[/* inline code block */ 'i', `equals`],
			[/* text */ 't', ` method should be used by
 implementations of this class to decide if two keys are the same.
 `]
		]],
		[/* block */ 'b', `NOTE: This class is obsolete.  New implementations should
 implement the Map interface, rather than extending this class.`]
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
		[/* method */ 'isEmpty()', [
			[/* method description */
				[/* text */ 't', `Tests if this dictionary maps no keys to value. The general contract
 for the `],
				[/* inline code block */ 'i', `isEmpty`],
				[/* text */ 't', ` method is that the result is true if and only
 if this dictionary contains no entries.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this dictionary maps no keys to values;
          `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'size()', [
			[/* method description */
				[/* text */ 't', `Returns the number of entries (distinct keys) in this dictionary.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the number of keys in this dictionary.`]
			]
		]],
		[/* method */ 'keys()', [
			[/* method description */
				[/* text */ 't', `Returns an enumeration of the keys in this dictionary. The general
 contract for the keys method is that an `],
				[/* inline code block */ 'i', `Enumeration`],
				[/* text */ 't', ` object
 is returned that will generate all the keys for which this dictionary
 contains entries.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `an enumeration of the keys in this dictionary.`]
			]
		]],
		[/* method */ 'elements()', [
			[/* method description */
				[/* text */ 't', `Returns an enumeration of the values in this dictionary. The general
 contract for the `],
				[/* inline code block */ 'i', `elements`],
				[/* text */ 't', ` method is that an
 `],
				[/* inline code block */ 'i', `Enumeration`],
				[/* text */ 't', ` is returned that will generate all the elements
 contained in entries in this dictionary.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `an enumeration of the values in this dictionary.`]
			]
		]],
		[/* method */ 'get(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Returns the value to which the key is mapped in this dictionary.
 The general contract for the `],
				[/* inline code block */ 'i', `isEmpty`],
				[/* text */ 't', ` method is that if this
 dictionary contains an entry for the specified key, the associated
 value is returned; otherwise, `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` is returned.`]
			],
			[/* parameters */
				[/* parameter */ 'key', [/* parameter description */
					[/* text */ 't', `a key in this dictionary.
          `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` if the key is not mapped to any value in
          this dictionary.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `key`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the value to which the key is mapped in this dictionary;`]
			]
		]],
		[/* method */ 'put(java.lang.Object,java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Maps the specified `],
				[/* inline code block */ 'i', `key`],
				[/* text */ 't', ` to the specified
 `],
				[/* inline code block */ 'i', `value`],
				[/* text */ 't', ` in this dictionary. Neither the key nor the
 value can be `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 If this dictionary already contains an entry for the specified
 `],
					[/* inline code block */ 'i', `key`],
					[/* text */ 't', `, the value already in this dictionary for that
 `],
					[/* inline code block */ 'i', `key`],
					[/* text */ 't', ` is returned, after modifying the entry to contain the
  new element. `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `If this dictionary does not already have an entry
  for the specified `],
					[/* inline code block */ 'i', `key`],
					[/* text */ 't', `, an entry is created for the
  specified `],
					[/* inline code block */ 'i', `key`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `value`],
					[/* text */ 't', `, and `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` is
  returned.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The `],
					[/* inline code block */ 'i', `value`],
					[/* text */ 't', ` can be retrieved by calling the
 `],
					[/* inline code block */ 'i', `get`],
					[/* text */ 't', ` method with a `],
					[/* inline code block */ 'i', `key`],
					[/* text */ 't', ` that is equal to
 the original `],
					[/* inline code block */ 'i', `key`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'key', [/* parameter description */
					[/* text */ 't', `the hashtable key.`]
				]],
				[/* parameter */ 'value', [/* parameter description */
					[/* text */ 't', `the value.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `key`],
					[/* text */ 't', ` or
               `],
					[/* inline code block */ 'i', `value`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the previous value to which the `],
				[/* inline code block */ 'i', `key`],
				[/* text */ 't', ` was mapped
             in this dictionary, or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if the key did not
             have a previous mapping.`]
			]
		]],
		[/* method */ 'remove(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Removes the `],
				[/* inline code block */ 'i', `key`],
				[/* text */ 't', ` (and its corresponding
 `],
				[/* inline code block */ 'i', `value`],
				[/* text */ 't', `) from this dictionary. This method does nothing
 if the `],
				[/* inline code block */ 'i', `key`],
				[/* text */ 't', ` is not in this dictionary.`]
			],
			[/* parameters */
				[/* parameter */ 'key', [/* parameter description */
					[/* text */ 't', `the key that needs to be removed.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `key`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the value to which the `],
				[/* inline code block */ 'i', `key`],
				[/* text */ 't', ` had been mapped in this
          dictionary, or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if the key did not have a
          mapping.`]
			]
		]]
	],
	/* enum values */ UDF
]);
