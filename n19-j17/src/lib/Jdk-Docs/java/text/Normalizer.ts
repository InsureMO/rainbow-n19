import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.text.Normalizer', [
	[/* class description */
		[/* text */ 't', `This class provides the method `],
		[/* inline code block */ 'i', `normalize`],
		[/* text */ 't', ` which transforms Unicode
 text into an equivalent composed or decomposed form, allowing for easier
 sorting and searching of text.
 The `],
		[/* inline code block */ 'i', `normalize`],
		[/* text */ 't', ` method supports the standard normalization forms
 described in
 `],
		[/* external link */ 'a', `https://www.unicode.org/reports/tr15/`, `Unicode Standard Annex #15 — Unicode Normalization Forms`],
		[/* text */ 't', `.
 `],
		[/* block */ 'b', `
 Characters with accents or other adornments can be encoded in
 several different ways in Unicode.  For example, take the character A-acute.
 In Unicode, this can be encoded as a single character (the "composed" form):

 `],
		[/* code block */ 'c', `      U+00C1    LATIN CAPITAL LETTER A WITH ACUTE`],
		[/* text */ 't', `

 or as two separate characters (the "decomposed" form):

 `],
		[/* code block */ 'c', `      U+0041    LATIN CAPITAL LETTER A
      U+0301    COMBINING ACUTE ACCENT`],
		[/* text */ 't', `

 To a user of your program, however, both of these sequences should be
 treated as the same "user-level" character "A with acute accent".  When you
 are searching or comparing text, you must ensure that these two sequences are
 treated as equivalent.  In addition, you must handle characters with more than
 one accent. Sometimes the order of a character's combining accents is
 significant, while in other cases accent sequences in different orders are
 really equivalent.
 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', `
 Similarly, the string "ffi" can be encoded as three separate letters:

 `],
		[/* code block */ 'c', `      U+0066    LATIN SMALL LETTER F
      U+0066    LATIN SMALL LETTER F
      U+0069    LATIN SMALL LETTER I`],
		[/* text */ 't', `

 or as the single character

 `],
		[/* code block */ 'c', `      U+FB03    LATIN SMALL LIGATURE FFI`],
		[/* text */ 't', `

 The ffi ligature is not a distinct semantic character, and strictly speaking
 it shouldn't be in Unicode at all, but it was included for compatibility
 with existing character sets that already provided it.  The Unicode standard
 identifies such characters by giving them "compatibility" decompositions
 into the corresponding semantic characters.  When sorting and searching, you
 will often want to use these mappings.
 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `
 The `],
			[/* inline code block */ 'i', `normalize`],
			[/* text */ 't', ` method helps solve these problems by transforming
 text into the canonical composed and decomposed forms as shown in the first
 example above. In addition, you can have it perform compatibility
 decompositions so that you can treat compatibility characters the same as
 their equivalents.
 Finally, the `],
			[/* inline code block */ 'i', `normalize`],
			[/* text */ 't', ` method rearranges accents into the
 proper canonical order, so that you do not have to worry about accent
 rearrangement on your own.
 `]
		]],
		[/* block */ 'b', `
 The W3C generally recommends to exchange texts in NFC.
 Note also that most legacy character encodings use only precomposed forms and
 often do not encode any combining marks by themselves. For conversion to such
 character encodings the Unicode text needs to be normalized to NFC.
 For more usage examples, see the Unicode Standard Annex.`]
	],
	/* fields */,
	/* constructors */,
	[/* methods */
		[/* method */ 'isNormalized(java.lang.CharSequence,java.text.Normalizer.Form)', [
			[/* method description */
				[/* text */ 't', `Determines if the given sequence of char values is normalized.`]
			],
			[/* parameters */
				[/* parameter */ 'src', [/* parameter description */
					[/* text */ 't', `The sequence of char values to be checked.`]
				]],
				[/* parameter */ 'form', [/* parameter description */
					[/* text */ 't', `The normalization form; one of
                   `],
					[/* reference */ 'r', `java.text.Normalizer.Form#NFC`, `Normalizer.Form.NFC`],
					[/* text */ 't', `,
                   `],
					[/* reference */ 'r', `java.text.Normalizer.Form#NFD`, `Normalizer.Form.NFD`],
					[/* text */ 't', `,
                   `],
					[/* reference */ 'r', `java.text.Normalizer.Form#NFKC`, `Normalizer.Form.NFKC`],
					[/* text */ 't', `,
                   `],
					[/* reference */ 'r', `java.text.Normalizer.Form#NFKD`, `Normalizer.Form.NFKD`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `src`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `form`],
					[/* text */ 't', `
 is null.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `true if the sequence of char values is normalized;
 false otherwise.`]
			]
		]],
		[/* method */ 'normalize(java.lang.CharSequence,java.text.Normalizer.Form)', [
			[/* method description */
				[/* text */ 't', `Normalize a sequence of char values.
 The sequence will be normalized according to the specified normalization
 form.`]
			],
			[/* parameters */
				[/* parameter */ 'src', [/* parameter description */
					[/* text */ 't', `The sequence of char values to normalize.`]
				]],
				[/* parameter */ 'form', [/* parameter description */
					[/* text */ 't', `The normalization form; one of
                   `],
					[/* reference */ 'r', `java.text.Normalizer.Form#NFC`, `Normalizer.Form.NFC`],
					[/* text */ 't', `,
                   `],
					[/* reference */ 'r', `java.text.Normalizer.Form#NFD`, `Normalizer.Form.NFD`],
					[/* text */ 't', `,
                   `],
					[/* reference */ 'r', `java.text.Normalizer.Form#NFKC`, `Normalizer.Form.NFKC`],
					[/* text */ 't', `,
                   `],
					[/* reference */ 'r', `java.text.Normalizer.Form#NFKD`, `Normalizer.Form.NFKD`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `src`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `form`],
					[/* text */ 't', `
 is null.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The normalized String`]
			]
		]]
	],
	/* enum values */ UDF
]);
