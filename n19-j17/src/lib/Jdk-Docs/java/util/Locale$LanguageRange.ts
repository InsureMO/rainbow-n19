import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.util.Locale$LanguageRange', [
	[/* class description */
		[/* text */ 't', `This class expresses a `],
		[/* text */ 't', `Language Range`],
		[/* text */ 't', ` defined in
 `],
		[/* external link */ 'a', `http://tools.ietf.org/html/rfc4647`, `RFC 4647 Matching of Language Tags`],
		[/* text */ 't', `. A language range is an identifier which is used to
 select language tag(s) meeting specific requirements by using the
 mechanisms described in `],
		[/* external link */ 'a', `Locale.html#LocaleMatching`, `Locale Matching`],
		[/* text */ 't', `. A list which represents a user's preferences and consists
 of language ranges is called a `],
		[/* text */ 't', `Language Priority List`],
		[/* text */ 't', `.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `There are two types of language ranges: basic and extended. In RFC
 4647, the syntax of language ranges is expressed in
 `],
			[/* external link */ 'a', `http://tools.ietf.org/html/rfc4234`, `ABNF`],
			[/* text */ 't', ` as follows:
 `]
		]],
		[/* block */ 'b', [
			[/* code block */ 'c', `     basic-language-range    = (1*8ALPHA *("-" 1*8alphanum)) / "*"
     extended-language-range = (1*8ALPHA / "*")
                               *("-" (1*8alphanum / "*"))
     alphanum                = ALPHA / DIGIT
 `]
		]],
		[/* text */ 't', `
 For example, `],
		[/* inline code block */ 'i', `"en"`],
		[/* text */ 't', ` (English), `],
		[/* inline code block */ 'i', `"ja-JP"`],
		[/* text */ 't', ` (Japanese, Japan),
 `],
		[/* inline code block */ 'i', `"*"`],
		[/* text */ 't', ` (special language range which matches any language tag) are
 basic language ranges, whereas `],
		[/* inline code block */ 'i', `"*-CH"`],
		[/* text */ 't', ` (any languages,
 Switzerland), `],
		[/* inline code block */ 'i', `"es-*"`],
		[/* text */ 't', ` (Spanish, any regions), and
 `],
		[/* inline code block */ 'i', `"zh-Hant-*"`],
		[/* text */ 't', ` (Traditional Chinese, any regions) are extended
 language ranges.`],
		[/* block */ 'b', '']
	],
	[/* fields */
		[/* field */ 'MAX_WEIGHT', [
			[/* field description */
				[/* text */ 't', `A constant holding the maximum value of weight, 1.0, which indicates
 that the language range is a good fit for the user.`]
			],
		]],
		[/* field */ 'MIN_WEIGHT', [
			[/* field description */
				[/* text */ 't', `A constant holding the minimum value of weight, 0.0, which indicates
 that the language range is not a good fit for the user.`]
			],
		]]
	],
	[/* constructors */
		[/* constructor */ '<init>(java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a `],
				[/* inline code block */ 'i', `LanguageRange`],
				[/* text */ 't', ` using the given `],
				[/* inline code block */ 'i', `range`],
				[/* text */ 't', `.
 Note that no validation is done against the IANA Language Subtag
 Registry at time of construction.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This is equivalent to `],
					[/* inline code block */ 'i', `LanguageRange(range, MAX_WEIGHT)`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'range', [/* parameter description */
					[/* text */ 't', `a language range`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the given `],
					[/* inline code block */ 'i', `range`],
					[/* text */ 't', ` is
     `],
					[/* inline code block */ 'i', `null`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the given `],
					[/* inline code block */ 'i', `range`],
					[/* text */ 't', ` does not
 comply with the syntax of the language range mentioned in RFC 4647`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.lang.String,double)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a `],
				[/* inline code block */ 'i', `LanguageRange`],
				[/* text */ 't', ` using the given `],
				[/* inline code block */ 'i', `range`],
				[/* text */ 't', ` and
 `],
				[/* inline code block */ 'i', `weight`],
				[/* text */ 't', `. Note that no validation is done against the IANA
 Language Subtag Registry at time of construction.`]
			],
			[/* parameters */
				[/* parameter */ 'range', [/* parameter description */
					[/* text */ 't', `a language range`]
				]],
				[/* parameter */ 'weight', [/* parameter description */
					[/* text */ 't', `a weight value between `],
					[/* inline code block */ 'i', `MIN_WEIGHT`],
					[/* text */ 't', ` and
     `],
					[/* inline code block */ 'i', `MAX_WEIGHT`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the given `],
					[/* inline code block */ 'i', `range`],
					[/* text */ 't', ` is
     `],
					[/* inline code block */ 'i', `null`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the given `],
					[/* inline code block */ 'i', `range`],
					[/* text */ 't', ` does not
 comply with the syntax of the language range mentioned in RFC 4647
 or if the given `],
					[/* inline code block */ 'i', `weight`],
					[/* text */ 't', ` is less than `],
					[/* inline code block */ 'i', `MIN_WEIGHT`],
					[/* text */ 't', `
 or greater than `],
					[/* inline code block */ 'i', `MAX_WEIGHT`]
				]]
			]
		]]
	],
	[/* methods */
		[/* method */ 'equals(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Compares this object to the specified object. The result is true if
 and only if the argument is not `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` and is a
 `],
				[/* inline code block */ 'i', `LanguageRange`],
				[/* text */ 't', ` object that contains the same `],
				[/* inline code block */ 'i', `range`],
				[/* text */ 't', `
 and `],
				[/* inline code block */ 'i', `weight`],
				[/* text */ 't', ` values as this object.`]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `the object to compare with`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this object's `],
				[/* inline code block */ 'i', `range`],
				[/* text */ 't', ` and
     `],
				[/* inline code block */ 'i', `weight`],
				[/* text */ 't', ` are the same as the `],
				[/* inline code block */ 'i', `obj`],
				[/* text */ 't', `'s; `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', `
     otherwise.`]
			]
		]],
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Returns an informative string representation of this `],
				[/* inline code block */ 'i', `LanguageRange`],
				[/* text */ 't', `
 object, consisting of language range and weight if the range is
 weighted and the weight is less than the max weight.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a string representation of this `],
				[/* inline code block */ 'i', `LanguageRange`],
				[/* text */ 't', ` object.`]
			]
		]],
		[/* method */ 'hashCode()', [
			[/* method description */
				[/* text */ 't', `Returns a hash code value for the object.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a hash code value for this object.`]
			]
		]],
		[/* method */ 'parse(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Parses the given `],
				[/* inline code block */ 'i', `ranges`],
				[/* text */ 't', ` to generate a Language Priority List.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This method performs a syntactic check for each language range in
 the given `],
					[/* inline code block */ 'i', `ranges`],
					[/* text */ 't', ` but doesn't do validation using the IANA
 Language Subtag Registry.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The `],
					[/* inline code block */ 'i', `ranges`],
					[/* text */ 't', ` to be given can take one of the following
 forms:

 `]
				]],
				[/* code block */ 'c', `   "Accept-Language: ja,en;q=0.4"  (weighted list with Accept-Language prefix)
   "ja,en;q=0.4"                   (weighted list)
   "ja,en"                         (prioritized list)
 `],
				[/* text */ 't', `

 In a weighted list, each language range is given a weight value.
 The weight value is identical to the "quality value" in
 `],
				[/* external link */ 'a', `http://tools.ietf.org/html/rfc2616`, `RFC 2616`],
				[/* text */ 't', `, and it
 expresses how much the user prefers  the language. A weight value is
 specified after a corresponding language range followed by
 `],
				[/* inline code block */ 'i', `";q="`],
				[/* text */ 't', `, and the default weight value is `],
				[/* inline code block */ 'i', `MAX_WEIGHT`],
				[/* text */ 't', `
 when it is omitted.

 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', `Unlike a weighted list, language ranges in a prioritized list
 are sorted in the descending order based on its priority. The first
 language range has the highest priority and meets the user's
 preference most.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `In either case, language ranges are sorted in descending order in
 the Language Priority List based on priority or weight. If a
 language range appears in the given `],
					[/* inline code block */ 'i', `ranges`],
					[/* text */ 't', ` more than once,
 only the first one is included on the Language Priority List.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The returned list consists of language ranges from the given
 `],
					[/* inline code block */ 'i', `ranges`],
					[/* text */ 't', ` and their equivalents found in the IANA Language
 Subtag Registry. For example, if the given `],
					[/* inline code block */ 'i', `ranges`],
					[/* text */ 't', ` is
 `],
					[/* inline code block */ 'i', `"Accept-Language: iw,en-us;q=0.7,en;q=0.3"`],
					[/* text */ 't', `, the elements in
 the list to be returned are:

 `]
				]],
				[/* code block */ 'c', [
					[/* text */ 't', `Range`],
					[/* text */ 't', `Weight`],
					[/* text */ 't', `
    "iw" (older tag for Hebrew)             1.0
    "he" (new preferred code for Hebrew)    1.0
    "en-us" (English, United States)        0.7
    "en" (English)                          0.3
 `]
				]],
				[/* text */ 't', `

 Two language ranges, `],
				[/* inline code block */ 'i', `"iw"`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `"he"`],
				[/* text */ 't', `, have the same
 highest priority in the list. By adding `],
				[/* inline code block */ 'i', `"he"`],
				[/* text */ 't', ` to the user's
 Language Priority List, locale-matching method can find Hebrew as a
 matching locale (or language tag) even if the application or system
 offers only `],
				[/* inline code block */ 'i', `"he"`],
				[/* text */ 't', ` as a supported locale (or language tag).`],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'ranges', [/* parameter description */
					[/* text */ 't', `a list of comma-separated language ranges or a list of
     language ranges in the form of the "Accept-Language" header
     defined in `],
					[/* external link */ 'a', `http://tools.ietf.org/html/rfc2616`, `RFC 2616`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `ranges`],
					[/* text */ 't', ` is null`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if a language range or a weight
     found in the given `],
					[/* inline code block */ 'i', `ranges`],
					[/* text */ 't', ` is ill-formed`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a Language Priority List consisting of language ranges
     included in the given `],
				[/* inline code block */ 'i', `ranges`],
				[/* text */ 't', ` and their equivalent
     language ranges if available. The list is modifiable.`]
			]
		]],
		[/* method */ 'parse(java.lang.String,java.util.Map)', [
			[/* method description */
				[/* text */ 't', `Parses the given `],
				[/* inline code block */ 'i', `ranges`],
				[/* text */ 't', ` to generate a Language Priority
 List, and then customizes the list using the given `],
				[/* inline code block */ 'i', `map`],
				[/* text */ 't', `.
 This method is equivalent to
 `],
				[/* inline code block */ 'i', `mapEquivalents(parse(ranges), map)`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'ranges', [/* parameter description */
					[/* text */ 't', `a list of comma-separated language ranges or a list
     of language ranges in the form of the "Accept-Language" header
     defined in `],
					[/* external link */ 'a', `http://tools.ietf.org/html/rfc2616`, `RFC 2616`]
				]],
				[/* parameter */ 'map', [/* parameter description */
					[/* text */ 't', `a map containing information to customize language ranges`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `ranges`],
					[/* text */ 't', ` is null`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if a language range or a weight
     found in the given `],
					[/* inline code block */ 'i', `ranges`],
					[/* text */ 't', ` is ill-formed`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a Language Priority List with customization. The list is
     modifiable.`]
			]
		]],
		[/* method */ 'mapEquivalents(java.util.List,java.util.Map)', [
			[/* method description */
				[/* text */ 't', `Generates a new customized Language Priority List using the given
 `],
				[/* inline code block */ 'i', `priorityList`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `map`],
				[/* text */ 't', `. If the given `],
				[/* inline code block */ 'i', `map`],
				[/* text */ 't', ` is
 empty, this method returns a copy of the given `],
				[/* inline code block */ 'i', `priorityList`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `In the map, a key represents a language range whereas a value is
 a list of equivalents of it. `],
					[/* inline code block */ 'i', `'*'`],
					[/* text */ 't', ` cannot be used in the map.
 Each equivalent language range has the same weight value as its
 original language range.

 `]
				]],
				[/* code block */ 'c', [
					[/* text */ 't', `  An example of map:
    `],
					[/* text */ 't', `Key`],
					[/* text */ 't', `Value`],
					[/* text */ 't', `
      "zh" (Chinese)                 "zh",
                                     "zh-Hans"(Simplified Chinese)
      "zh-HK" (Chinese, Hong Kong)   "zh-HK"
      "zh-TW" (Chinese, Taiwan)      "zh-TW"
 `]
				]],
				[/* text */ 't', `

 The customization is performed after modification using the IANA
 Language Subtag Registry.

 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `For example, if a user's Language Priority List consists of five
 language ranges (`],
					[/* inline code block */ 'i', `"zh"`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `"zh-CN"`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `"en"`],
					[/* text */ 't', `,
 `],
					[/* inline code block */ 'i', `"zh-TW"`],
					[/* text */ 't', `, and `],
					[/* inline code block */ 'i', `"zh-HK"`],
					[/* text */ 't', `), the newly generated Language
 Priority List which is customized using the above map example will
 consists of `],
					[/* inline code block */ 'i', `"zh"`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `"zh-Hans"`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `"zh-CN"`],
					[/* text */ 't', `,
 `],
					[/* inline code block */ 'i', `"zh-Hans-CN"`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `"en"`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `"zh-TW"`],
					[/* text */ 't', `, and
 `],
					[/* inline code block */ 'i', `"zh-HK"`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* inline code block */ 'i', `"zh-HK"`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `"zh-TW"`],
					[/* text */ 't', ` aren't converted to
 `],
					[/* inline code block */ 'i', `"zh-Hans-HK"`],
					[/* text */ 't', ` nor `],
					[/* inline code block */ 'i', `"zh-Hans-TW"`],
					[/* text */ 't', ` even if they are
 included in the Language Priority List. In this example, mapping
 is used to clearly distinguish Simplified Chinese and Traditional
 Chinese.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `If the `],
					[/* inline code block */ 'i', `"zh"`],
					[/* text */ 't', `-to-`],
					[/* inline code block */ 'i', `"zh"`],
					[/* text */ 't', ` mapping isn't included in the
 map, a simple replacement will be performed and the customized list
 won't include `],
					[/* inline code block */ 'i', `"zh"`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `"zh-CN"`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'priorityList', [/* parameter description */
					[/* text */ 't', `user's Language Priority List`]
				]],
				[/* parameter */ 'map', [/* parameter description */
					[/* text */ 't', `a map containing information to customize language ranges`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `priorityList`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a new Language Priority List with customization. The list is
     modifiable.`]
			]
		]],
		[/* method */ 'getWeight()', [
			[/* method description */
				[/* text */ 't', `Returns the weight of this `],
				[/* inline code block */ 'i', `LanguageRange`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the weight value.`]
			]
		]],
		[/* method */ 'getRange()', [
			[/* method description */
				[/* text */ 't', `Returns the language range of this `],
				[/* inline code block */ 'i', `LanguageRange`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the language range.`]
			]
		]]
	],
]);
