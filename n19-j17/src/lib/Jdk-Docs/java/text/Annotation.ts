import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.text.Annotation', [
	[/* class description */
		[/* text */ 't', `An Annotation object is used as a wrapper for a text attribute value if
 the attribute has annotation characteristics. These characteristics are:
 `],
		[/* list */ 'l', [
			[/* block */ 'b', `The text range that the attribute is applied to is critical to the
 semantics of the range. That means, the attribute cannot be applied to subranges
 of the text range that it applies to, and, if two adjacent text ranges have
 the same value for this attribute, the attribute still cannot be applied to
 the combined range as a whole with this value.
 `],
			[/* block */ 'b', `The attribute or its value usually do no longer apply if the underlying text is
 changed.
 `]
		]],
		[/* text */ 't', `

 An example is grammatical information attached to a sentence:
 For the previous sentence, you can say that "an example"
 is the subject, but you cannot say the same about "an", "example", or "exam".
 When the text is changed, the grammatical information typically becomes invalid.
 Another example is Japanese reading information (yomi).

 `],
		[/* block */ 'b', `
 Wrapping the attribute value into an Annotation object guarantees that
 adjacent text runs don't get merged even if the attribute values are equal,
 and indicates to text containers that the attribute should be discarded if
 the underlying text is modified.`]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>(java.lang.Object)', [
			[/* constructor description */
				[/* text */ 't', `Constructs an annotation record with the given value, which
 may be null.`]
			],
			[/* parameters */
				[/* parameter */ 'value', [/* parameter description */
					[/* text */ 't', `the value of the attribute`]
				]]
			],
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'getValue()', [
			[/* method description */
				[/* text */ 't', `Returns the value of the attribute, which may be null.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the value of the attribute`]
			]
		]],
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Returns the String representation of this Annotation.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', ` representation of this `],
				[/* inline code block */ 'i', `Annotation`]
			]
		]]
	],
]);
