import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.text.AttributedCharacterIterator$Attribute', [
	[/* class description */
		[/* text */ 't', `Defines attribute keys that are used to identify text attributes. These
 keys are used in `],
		[/* inline code block */ 'i', `AttributedCharacterIterator`],
		[/* text */ 't', ` and `],
		[/* inline code block */ 'i', `AttributedString`],
		[/* text */ 't', `.`]
	],
	[/* fields */
		[/* field */ 'LANGUAGE', [
			[/* field description */
				[/* text */ 't', `Attribute key for the language of some text.
 `],
				[/* block */ 'b', [
					[/* text */ 't', ` Values are instances of `],
					[/* reference */ 'r', `java.util.Locale`],
					[/* text */ 't', `.`]
				]]
			],
		]],
		[/* field */ 'READING', [
			[/* field description */
				[/* text */ 't', `Attribute key for the reading of some text. In languages where the written form
 and the pronunciation of a word are only loosely related (such as Japanese),
 it is often necessary to store the reading (pronunciation) along with the
 written form.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `Values are instances of `],
					[/* reference */ 'r', `java.text.Annotation`],
					[/* text */ 't', ` holding instances of `],
					[/* reference */ 'r', `java.lang.String`],
					[/* text */ 't', `.`]
				]]
			],
		]],
		[/* field */ 'INPUT_METHOD_SEGMENT', [
			[/* field description */
				[/* text */ 't', `Attribute key for input method segments. Input methods often break
 up text into segments, which usually correspond to words.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `Values are instances of `],
					[/* reference */ 'r', `java.text.Annotation`],
					[/* text */ 't', ` holding a `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` reference.`]
				]]
			],
		]]
	],
	[/* constructors */
		[/* constructor */ '<init>(java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Constructs an `],
				[/* inline code block */ 'i', `Attribute`],
				[/* text */ 't', ` with the given name.`]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `the name of `],
					[/* inline code block */ 'i', `Attribute`]
				]]
			],
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'getName()', [
			[/* method description */
				[/* text */ 't', `Returns the name of the attribute.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the name of `],
				[/* inline code block */ 'i', `Attribute`]
			]
		]],
		[/* method */ 'equals(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Compares two objects for equality. This version only returns true
 for `],
				[/* inline code block */ 'i', `x.equals(y)`],
				[/* text */ 't', ` if `],
				[/* inline code block */ 'i', `x`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `y`],
				[/* text */ 't', ` refer
 to the same object, and guarantees this for all subclasses.`]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `the reference object with which to compare.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this object is the same as the obj
          argument; `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Returns a string representation of the object. This version returns the
 concatenation of class name, `],
				[/* inline code block */ 'i', `"("`],
				[/* text */ 't', `, a name identifying the attribute
 and `],
				[/* inline code block */ 'i', `")"`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a string representation of the object.`]
			]
		]],
		[/* method */ 'hashCode()', [
			[/* method description */
				[/* text */ 't', `Returns a hash code value for the object. This version is identical to
 the one in `],
				[/* inline code block */ 'i', `Object`],
				[/* text */ 't', `, but is also final.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a hash code value for this object.`]
			]
		]],
		[/* method */ 'readResolve()', [
			[/* method description */
				[/* text */ 't', `Resolves instances being deserialized to the predefined constants.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.InvalidObjectException', [/* throw description */
					[/* text */ 't', `if the object to resolve is not
                                an instance of `],
					[/* inline code block */ 'i', `Attribute`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the resolved `],
				[/* inline code block */ 'i', `Attribute`],
				[/* text */ 't', ` object`]
			]
		]]
	],
]);
