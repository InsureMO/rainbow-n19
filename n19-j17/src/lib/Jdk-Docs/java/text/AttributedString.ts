import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.text.AttributedString', [
	[/* class description */
		[/* text */ 't', `An AttributedString holds text and related attribute information. It
 may be used as the actual data storage in some cases where a text
 reader wants to access attributed text through the AttributedCharacterIterator
 interface.

 `],
		[/* block */ 'b', `
 An attribute is a key/value pair, identified by the key.  No two
 attributes on a given character can have the same key.

 `],
		[/* block */ 'b', `The values for an attribute are immutable, or must not be mutated
 by clients or storage.  They are always passed by reference, and not
 cloned.`]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>(java.text.AttributedCharacterIterator,int,int,java.text.AttributedCharacterIterator.Attribute[])', [
			[/* constructor description */
				[/* text */ 't', `Constructs an AttributedString instance with the subrange of
 the given attributed text represented by
 AttributedCharacterIterator.  Only attributes that match the
 given attributes will be incorporated into the instance. If the
 given range produces an empty text, all attributes will be
 discarded. Note that any attributes wrapped by an Annotation
 object are discarded for a subrange of the original attribute
 range.`]
			],
			[/* parameters */
				[/* parameter */ 'text', [/* parameter description */
					[/* text */ 't', `The text for this attributed string.`]
				]],
				[/* parameter */ 'beginIndex', [/* parameter description */
					[/* text */ 't', `Index of the first character of the range.`]
				]],
				[/* parameter */ 'endIndex', [/* parameter description */
					[/* text */ 't', `Index of the character following the last character
 of the range.`]
				]],
				[/* parameter */ 'attributes', [/* parameter description */
					[/* text */ 't', `Specifies attributes to be extracted
 from the text. If null is specified, all available attributes will
 be used.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `text`],
					[/* text */ 't', ` is null.`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the subrange given by
 beginIndex and endIndex is out of the text range.`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.text.AttributedCharacterIterator,int,int)', [
			[/* constructor description */
				[/* text */ 't', `Constructs an AttributedString instance with the subrange of
 the given attributed text represented by
 AttributedCharacterIterator. If the given range produces an
 empty text, all attributes will be discarded.  Note that any
 attributes wrapped by an Annotation object are discarded for a
 subrange of the original attribute range.`]
			],
			[/* parameters */
				[/* parameter */ 'text', [/* parameter description */
					[/* text */ 't', `The text for this attributed string.`]
				]],
				[/* parameter */ 'beginIndex', [/* parameter description */
					[/* text */ 't', `Index of the first character of the range.`]
				]],
				[/* parameter */ 'endIndex', [/* parameter description */
					[/* text */ 't', `Index of the character following the last character
 of the range.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `text`],
					[/* text */ 't', ` is null.`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the subrange given by
 beginIndex and endIndex is out of the text range.`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.text.AttributedCharacterIterator)', [
			[/* constructor description */
				[/* text */ 't', `Constructs an AttributedString instance with the given attributed
 text represented by AttributedCharacterIterator.`]
			],
			[/* parameters */
				[/* parameter */ 'text', [/* parameter description */
					[/* text */ 't', `The text for this attributed string.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `text`],
					[/* text */ 't', ` is null.`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Constructs an AttributedString instance with the given text.`]
			],
			[/* parameters */
				[/* parameter */ 'text', [/* parameter description */
					[/* text */ 't', `The text for this attributed string.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `text`],
					[/* text */ 't', ` is null.`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.lang.String,java.util.Map)', [
			[/* constructor description */
				[/* text */ 't', `Constructs an AttributedString instance with the given text and attributes.`]
			],
			[/* parameters */
				[/* parameter */ 'text', [/* parameter description */
					[/* text */ 't', `The text for this attributed string.`]
				]],
				[/* parameter */ 'attributes', [/* parameter description */
					[/* text */ 't', `The attributes that apply to the entire string.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `text`],
					[/* text */ 't', ` or
            `],
					[/* inline code block */ 'i', `attributes`],
					[/* text */ 't', ` is null.`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the text has length 0
 and the attributes parameter is not an empty Map (attributes
 cannot be applied to a 0-length range).`]
				]]
			]
		]]
	],
	[/* methods */
		[/* method */ 'getIterator(java.text.AttributedCharacterIterator.Attribute[],int,int)', [
			[/* method description */
				[/* text */ 't', `Creates an AttributedCharacterIterator instance that provides access to
 selected contents of this string.
 Information about attributes not listed in attributes that the
 implementor may have need not be made accessible through the iterator.
 If the list is null, all available attribute information should be made
 accessible.`]
			],
			[/* parameters */
				[/* parameter */ 'attributes', [/* parameter description */
					[/* text */ 't', `a list of attributes that the client is interested in`]
				]],
				[/* parameter */ 'beginIndex', [/* parameter description */
					[/* text */ 't', `the index of the first character`]
				]],
				[/* parameter */ 'endIndex', [/* parameter description */
					[/* text */ 't', `the index of the character following the last character`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if beginIndex is less than 0,
 endIndex is greater than the length of the string, or beginIndex is
 greater than endIndex.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `an iterator providing access to the text and its attributes`]
			]
		]],
		[/* method */ 'getIterator()', [
			[/* method description */
				[/* text */ 't', `Creates an AttributedCharacterIterator instance that provides access to the entire contents of
 this string.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `An iterator providing access to the text and its attributes.`]
			]
		]],
		[/* method */ 'getIterator(java.text.AttributedCharacterIterator.Attribute[])', [
			[/* method description */
				[/* text */ 't', `Creates an AttributedCharacterIterator instance that provides access to
 selected contents of this string.
 Information about attributes not listed in attributes that the
 implementor may have need not be made accessible through the iterator.
 If the list is null, all available attribute information should be made
 accessible.`]
			],
			[/* parameters */
				[/* parameter */ 'attributes', [/* parameter description */
					[/* text */ 't', `a list of attributes that the client is interested in`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an iterator providing access to the entire text and its selected attributes`]
			]
		]],
		[/* method */ 'addAttributes(java.util.Map,int,int)', [
			[/* method description */
				[/* text */ 't', `Adds a set of attributes to a subrange of the string.`]
			],
			[/* parameters */
				[/* parameter */ 'attributes', [/* parameter description */
					[/* text */ 't', `The attributes to be added to the string.`]
				]],
				[/* parameter */ 'beginIndex', [/* parameter description */
					[/* text */ 't', `Index of the first character of the range.`]
				]],
				[/* parameter */ 'endIndex', [/* parameter description */
					[/* text */ 't', `Index of the character following the last
 character of the range.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `attributes`],
					[/* text */ 't', ` is null.`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if beginIndex is less than
 0, endIndex is greater than the length of the string, or
 beginIndex and endIndex together don't define a non-empty
 subrange of the string and the attributes parameter is not an
 empty Map.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'addAttribute(java.text.AttributedCharacterIterator.Attribute,java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Adds an attribute to the entire string.`]
			],
			[/* parameters */
				[/* parameter */ 'attribute', [/* parameter description */
					[/* text */ 't', `the attribute key`]
				]],
				[/* parameter */ 'value', [/* parameter description */
					[/* text */ 't', `the value of the attribute; may be null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `attribute`],
					[/* text */ 't', ` is null.`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the AttributedString has length 0
 (attributes cannot be applied to a 0-length range).`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'addAttribute(java.text.AttributedCharacterIterator.Attribute,java.lang.Object,int,int)', [
			[/* method description */
				[/* text */ 't', `Adds an attribute to a subrange of the string.`]
			],
			[/* parameters */
				[/* parameter */ 'attribute', [/* parameter description */
					[/* text */ 't', `the attribute key`]
				]],
				[/* parameter */ 'value', [/* parameter description */
					[/* text */ 't', `The value of the attribute. May be null.`]
				]],
				[/* parameter */ 'beginIndex', [/* parameter description */
					[/* text */ 't', `Index of the first character of the range.`]
				]],
				[/* parameter */ 'endIndex', [/* parameter description */
					[/* text */ 't', `Index of the character following the last character of the range.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `attribute`],
					[/* text */ 't', ` is null.`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if beginIndex is less than 0, endIndex is
 greater than the length of the string, or beginIndex and endIndex together don't
 define a non-empty subrange of the string.`]
				]]
			],
			/* return */ UDF
		]]
	],
]);
