import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.text.AttributedCharacterIterator', [
	[/* class description */
		[/* text */ 't', `An `],
		[/* inline code block */ 'i', `AttributedCharacterIterator`],
		[/* text */ 't', ` allows iteration through both text and
 related attribute information.

 `],
		[/* block */ 'b', `
 An attribute is a key/value pair, identified by the key.  No two
 attributes on a given character can have the same key.

 `],
		[/* block */ 'b', `The values for an attribute are immutable, or must not be mutated
 by clients or storage.  They are always passed by reference, and not
 cloned.

 `],
		[/* block */ 'b', `run with respect to an attribute`],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* text */ 't', `the attribute is undefined or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` for the entire range, or
 `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `the attribute value is defined and has the same non-`],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` value for the
     entire range.
 `]
			]]
		]],
		[/* text */ 't', `

 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', `run with respect to a set of attributes`],
		[/* block */ 'b', [
			[/* text */ 't', `When getting a run with no explicit attributes specified (i.e.,
 calling `],
			[/* reference */ 'r', `#getRunStart()`, `getRunStart()`],
			[/* text */ 't', ` and `],
			[/* reference */ 'r', `#getRunLimit()`, `getRunLimit()`],
			[/* text */ 't', `), any
 contiguous text segments having the same attributes (the same set
 of attribute/value pairs) are treated as separate runs if the
 attributes have been given to those text segments separately.

 `]
		]],
		[/* block */ 'b', `The returned indexes are limited to the range of the iterator.

 `],
		[/* block */ 'b', `The returned attribute information is limited to runs that contain
 the current character.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 Attribute keys are instances of `],
			[/* reference */ 'r', `java.text.AttributedCharacterIterator.Attribute`, `AttributedCharacterIterator.Attribute`],
			[/* text */ 't', ` and its
 subclasses, such as `],
			[/* reference */ 'r', `java.awt.font.TextAttribute`, `TextAttribute`],
			[/* text */ 't', `.`]
		]]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'getRunLimit()', [
			[/* method description */
				[/* text */ 't', `Returns the index of the first character following the run
 with respect to all attributes containing the current character.

 `],
				[/* block */ 'b', `Any contiguous text segments having the same attributes (the
 same set of attribute/value pairs) are treated as separate runs
 if the attributes have been given to those text segments separately.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the index of the first character following the run`]
			]
		]],
		[/* method */ 'getRunLimit(java.text.AttributedCharacterIterator.Attribute)', [
			[/* method description */
				[/* text */ 't', `Returns the index of the first character following the run
 with respect to the given `],
				[/* inline code block */ 'i', `attribute`],
				[/* text */ 't', ` containing the current character.`]
			],
			[/* parameters */
				[/* parameter */ 'attribute', [/* parameter description */
					[/* text */ 't', `the desired attribute`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the index of the first character following the run`]
			]
		]],
		[/* method */ 'getRunLimit(java.util.Set)', [
			[/* method description */
				[/* text */ 't', `Returns the index of the first character following the run
 with respect to the given `],
				[/* inline code block */ 'i', `attributes`],
				[/* text */ 't', ` containing the current character.`]
			],
			[/* parameters */
				[/* parameter */ 'attributes', [/* parameter description */
					[/* text */ 't', `a set of the desired attributes`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the index of the first character following the run`]
			]
		]],
		[/* method */ 'getRunStart()', [
			[/* method description */
				[/* text */ 't', `Returns the index of the first character of the run
 with respect to all attributes containing the current character.

 `],
				[/* block */ 'b', `Any contiguous text segments having the same attributes (the
 same set of attribute/value pairs) are treated as separate runs
 if the attributes have been given to those text segments separately.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the index of the first character of the run`]
			]
		]],
		[/* method */ 'getRunStart(java.text.AttributedCharacterIterator.Attribute)', [
			[/* method description */
				[/* text */ 't', `Returns the index of the first character of the run
 with respect to the given `],
				[/* inline code block */ 'i', `attribute`],
				[/* text */ 't', ` containing the current character.`]
			],
			[/* parameters */
				[/* parameter */ 'attribute', [/* parameter description */
					[/* text */ 't', `the desired attribute.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the index of the first character of the run`]
			]
		]],
		[/* method */ 'getRunStart(java.util.Set)', [
			[/* method description */
				[/* text */ 't', `Returns the index of the first character of the run
 with respect to the given `],
				[/* inline code block */ 'i', `attributes`],
				[/* text */ 't', ` containing the current character.`]
			],
			[/* parameters */
				[/* parameter */ 'attributes', [/* parameter description */
					[/* text */ 't', `a set of the desired attributes.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the index of the first character of the run`]
			]
		]],
		[/* method */ 'getAttribute(java.text.AttributedCharacterIterator.Attribute)', [
			[/* method description */
				[/* text */ 't', `Returns the value of the named `],
				[/* inline code block */ 'i', `attribute`],
				[/* text */ 't', ` for the current character.
 Returns `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if the `],
				[/* inline code block */ 'i', `attribute`],
				[/* text */ 't', ` is not defined.`]
			],
			[/* parameters */
				[/* parameter */ 'attribute', [/* parameter description */
					[/* text */ 't', `the desired attribute`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the value of the named `],
				[/* inline code block */ 'i', `attribute`],
				[/* text */ 't', ` or `],
				[/* inline code block */ 'i', `null`]
			]
		]],
		[/* method */ 'getAttributes()', [
			[/* method description */
				[/* text */ 't', `Returns a map with the attributes defined on the current
 character.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a map with the attributes defined on the current character`]
			]
		]],
		[/* method */ 'getAllAttributeKeys()', [
			[/* method description */
				[/* text */ 't', `Returns the keys of all attributes defined on the
 iterator's text range. The set is empty if no
 attributes are defined.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the keys of all attributes`]
			]
		]]
	],
]);
