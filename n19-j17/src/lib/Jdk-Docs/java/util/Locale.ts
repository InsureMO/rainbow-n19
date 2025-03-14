import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.util.Locale', [
	[/* class description */
		[/* text */ 't', `A `],
		[/* inline code block */ 'i', `Locale`],
		[/* text */ 't', ` object represents a specific geographical, political,
 or cultural region. An operation that requires a `],
		[/* inline code block */ 'i', `Locale`],
		[/* text */ 't', ` to perform
 its task is called `],
		[/* text */ 't', `locale-sensitive`],
		[/* text */ 't', ` and uses the `],
		[/* inline code block */ 'i', `Locale`],
		[/* text */ 't', `
 to tailor information for the user. For example, displaying a number
 is a locale-sensitive operation— the number should be formatted
 according to the customs and conventions of the user's native country,
 region, or culture.

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` The `],
			[/* inline code block */ 'i', `Locale`],
			[/* text */ 't', ` class implements IETF BCP 47 which is composed of
 `],
			[/* external link */ 'a', `http://tools.ietf.org/html/rfc4647`, `RFC 4647 "Matching of Language Tags"`],
			[/* text */ 't', ` and `],
			[/* external link */ 'a', `http://tools.ietf.org/html/rfc5646`, `RFC 5646 "Tags for Identifying Languages"`],
			[/* text */ 't', ` with support for the LDML (UTS#35, "Unicode
 Locale Data Markup Language") BCP 47-compatible extensions for locale data
 exchange.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` A `],
			[/* inline code block */ 'i', `Locale`],
			[/* text */ 't', ` object logically consists of the fields
 described below.

 `]
		]],
		[/* dl */ 'dl', [
			[/* dt */ 'dt', [
				[/* anchor */ 'r', '#-id', `def_language`, `language`]
			]],
			[/* dd */ 'dd', [
				[/* text */ 't', `ISO 639 alpha-2 or alpha-3 language code, or registered
   language subtags up to 8 alpha letters (for future enhancements).
   When a language has both an alpha-2 code and an alpha-3 code, the
   alpha-2 code must be used.  You can find a full list of valid
   language codes in the IANA Language Subtag Registry (search for
   "Type: language").  The language field is case insensitive, but
   `],
				[/* inline code block */ 'i', `Locale`],
				[/* text */ 't', ` always canonicalizes to lower case.`]
			]],
			[/* dd */ 'dd', [
				[/* text */ 't', `Well-formed language values have the form
   `],
				[/* inline code block */ 'i', `[a-zA-Z]{2,8}`],
				[/* text */ 't', `.  Note that this is not the full
   BCP47 language production, since it excludes extlang.  They are
   not needed since modern three-letter language codes replace
   them.`]
			]],
			[/* dd */ 'dd', [
				[/* text */ 't', `Example: "en" (English), "ja" (Japanese), "kok" (Konkani)`]
			]],
			[/* dt */ 'dt', [
				[/* anchor */ 'r', '#-id', `def_script`, `script`]
			]],
			[/* dd */ 'dd', [
				[/* text */ 't', `ISO 15924 alpha-4 script code.  You can find a full list of
   valid script codes in the IANA Language Subtag Registry (search
   for "Type: script").  The script field is case insensitive, but
   `],
				[/* inline code block */ 'i', `Locale`],
				[/* text */ 't', ` always canonicalizes to title case (the first
   letter is upper case and the rest of the letters are lower
   case).`]
			]],
			[/* dd */ 'dd', [
				[/* text */ 't', `Well-formed script values have the form
   `],
				[/* inline code block */ 'i', `[a-zA-Z]{4}`]
			]],
			[/* dd */ 'dd', [
				[/* text */ 't', `Example: "Latn" (Latin), "Cyrl" (Cyrillic)`]
			]],
			[/* dt */ 'dt', [
				[/* anchor */ 'r', '#-id', `def_region`, `country (region)`]
			]],
			[/* dd */ 'dd', [
				[/* text */ 't', `ISO 3166 alpha-2 country code or UN M.49 numeric-3 area code.
   You can find a full list of valid country and region codes in the
   IANA Language Subtag Registry (search for "Type: region").  The
   country (region) field is case insensitive, but
   `],
				[/* inline code block */ 'i', `Locale`],
				[/* text */ 't', ` always canonicalizes to upper case.`]
			]],
			[/* dd */ 'dd', [
				[/* text */ 't', `Well-formed country/region values have
   the form `],
				[/* inline code block */ 'i', `[a-zA-Z]{2} | [0-9]{3}`]
			]],
			[/* dd */ 'dd', [
				[/* text */ 't', `Example: "US" (United States), "FR" (France), "029"
   (Caribbean)`]
			]],
			[/* dt */ 'dt', [
				[/* anchor */ 'r', '#-id', `def_variant`, `variant`]
			]],
			[/* dd */ 'dd', [
				[/* text */ 't', `Any arbitrary value used to indicate a variation of a
   `],
				[/* inline code block */ 'i', `Locale`],
				[/* text */ 't', `.  Where there are two or more variant values
   each indicating its own semantics, these values should be ordered
   by importance, with most important first, separated by
   underscore('_').  The variant field is case sensitive.`]
			]],
			[/* dd */ 'dd', [
				[/* text */ 't', `Note: IETF BCP 47 places syntactic restrictions on variant
   subtags.  Also BCP 47 subtags are strictly used to indicate
   additional variations that define a language or its dialects that
   are not covered by any combinations of language, script and
   region subtags.  You can find a full list of valid variant codes
   in the IANA Language Subtag Registry (search for "Type: variant").

   `],
				[/* block */ 'b', [
					[/* text */ 't', `However, the variant field in `],
					[/* inline code block */ 'i', `Locale`],
					[/* text */ 't', ` has
   historically been used for any kind of variation, not just
   language variations.  For example, some supported variants
   available in Java SE Runtime Environments indicate alternative
   cultural behaviors such as calendar type or number script.  In
   BCP 47 this kind of information, which does not identify the
   language, is supported by extension subtags or private use
   subtags.`]
				]]
			]],
			[/* dd */ 'dd', [
				[/* text */ 't', `Well-formed variant values have the form `],
				[/* inline code block */ 'i', `SUBTAG (('_'|'-') SUBTAG)*`],
				[/* text */ 't', ` where `],
				[/* inline code block */ 'i', `SUBTAG = [0-9][0-9a-zA-Z]{3} | [0-9a-zA-Z]{5,8}`],
				[/* text */ 't', `. (Note: BCP 47 only
   uses hyphen ('-') as a delimiter, this is more lenient).`]
			]],
			[/* dd */ 'dd', [
				[/* text */ 't', `Example: "polyton" (Polytonic Greek), "POSIX"`]
			]],
			[/* dt */ 'dt', [
				[/* anchor */ 'r', '#-id', `def_extensions`, `extensions`]
			]],
			[/* dd */ 'dd', [
				[/* text */ 't', `A map from single character keys to string values, indicating
   extensions apart from language identification.  The extensions in
   `],
				[/* inline code block */ 'i', `Locale`],
				[/* text */ 't', ` implement the semantics and syntax of BCP 47
   extension subtags and private use subtags. The extensions are
   case insensitive, but `],
				[/* inline code block */ 'i', `Locale`],
				[/* text */ 't', ` canonicalizes all
   extension keys and values to lower case. Note that extensions
   cannot have empty values.`]
			]],
			[/* dd */ 'dd', [
				[/* text */ 't', `Well-formed keys are single characters from the set
   `],
				[/* inline code block */ 'i', `[0-9a-zA-Z]`],
				[/* text */ 't', `.  Well-formed values have the form
   `],
				[/* inline code block */ 'i', `SUBTAG ('-' SUBTAG)*`],
				[/* text */ 't', ` where for the key 'x'
   `],
				[/* inline code block */ 'i', `SUBTAG = [0-9a-zA-Z]{1,8}`],
				[/* text */ 't', ` and for other keys
   `],
				[/* inline code block */ 'i', `SUBTAG = [0-9a-zA-Z]{2,8}`],
				[/* text */ 't', ` (that is, 'x' allows
   single-character subtags).`]
			]],
			[/* dd */ 'dd', [
				[/* text */ 't', `Example: key="u"/value="ca-japanese" (Japanese Calendar),
   key="x"/value="java-1-7"`]
			]]
		]],
		[/* text */ 't', `

 `],
		[/* text */ 't', `Note:`],
		[/* text */ 't', ` Although BCP 47 requires field values to be registered
 in the IANA Language Subtag Registry, the `],
		[/* inline code block */ 'i', `Locale`],
		[/* text */ 't', ` class
 does not provide any validation features.  The `],
		[/* inline code block */ 'i', `Builder`],
		[/* text */ 't', `
 only checks if an individual field satisfies the syntactic
 requirement (is well-formed), but does not validate the value
 itself.  See `],
		[/* reference */ 'r', `java.util.Locale.Builder`, `Locale.Builder`],
		[/* text */ 't', ` for details.

 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* anchor */ 'r', '#-id', `def_locale_extension`, `Unicode locale/language extension`]
		]],
		[/* text */ 't', `

 `],
		[/* block */ 'b', `UTS#35, "Unicode Locale Data Markup Language" defines optional
 attributes and keywords to override or refine the default behavior
 associated with a locale.  A keyword is represented by a pair of
 key and type.  For example, "nu-thai" indicates that Thai local
 digits (value:"thai") should be used for formatting numbers
 (key:"nu").

 `],
		[/* block */ 'b', [
			[/* text */ 't', `The keywords are mapped to a BCP 47 extension value using the
 extension key 'u' (`],
			[/* text */ 't', `UNICODE_LOCALE_EXTENSION`],
			[/* text */ 't', `).  The above
 example, "nu-thai", becomes the extension "u-nu-thai".

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Thus, when a `],
			[/* inline code block */ 'i', `Locale`],
			[/* text */ 't', ` object contains Unicode locale
 attributes and keywords,
 `],
			[/* inline code block */ 'i', `getExtension(UNICODE_LOCALE_EXTENSION)`],
			[/* text */ 't', ` will return a
 String representing this information, for example, "nu-thai".  The
 `],
			[/* inline code block */ 'i', `Locale`],
			[/* text */ 't', ` class also provides `],
			[/* reference */ 'r', `#getUnicodeLocaleAttributes()`, `getUnicodeLocaleAttributes()`],
			[/* text */ 't', `, `],
			[/* reference */ 'r', `#getUnicodeLocaleKeys()`, `getUnicodeLocaleKeys()`],
			[/* text */ 't', `, and
 `],
			[/* reference */ 'r', `#getUnicodeLocaleType(java.lang.String)`, `getUnicodeLocaleType(java.lang.String)`],
			[/* text */ 't', ` which allow you to access Unicode
 locale attributes and key/type pairs directly.  When represented as
 a string, the Unicode Locale Extension lists attributes
 alphabetically, followed by key/type sequences with keys listed
 alphabetically (the order of subtags comprising a key's type is
 fixed when the type is defined)

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `A well-formed locale key has the form
 `],
			[/* inline code block */ 'i', `[0-9a-zA-Z]{2}`],
			[/* text */ 't', `.  A well-formed locale type has the
 form `],
			[/* inline code block */ 'i', `"" | [0-9a-zA-Z]{3,8} ('-' [0-9a-zA-Z]{3,8})*`],
			[/* text */ 't', ` (it
 can be empty, or a series of subtags 3-8 alphanums in length).  A
 well-formed locale attribute has the form
 `],
			[/* inline code block */ 'i', `[0-9a-zA-Z]{3,8}`],
			[/* text */ 't', ` (it is a single subtag with the same
 form as a locale type subtag).

 `]
		]],
		[/* block */ 'b', `The Unicode locale extension specifies optional behavior in
 locale-sensitive services.  Although the LDML specification defines
 various keys and values, actual locale-sensitive service
 implementations in a Java Runtime Environment might not support any
 particular Unicode locale attributes or key/type pairs.

 `],
		[/* block */ 'b', `Creating a Locale`],
		[/* text */ 't', `

 `],
		[/* block */ 'b', [
			[/* text */ 't', `There are several different ways to create a `],
			[/* inline code block */ 'i', `Locale`],
			[/* text */ 't', `
 object.

 `]
		]],
		[/* block */ 'b', `Builder`],
		[/* text */ 't', `

 `],
		[/* block */ 'b', [
			[/* text */ 't', `Using `],
			[/* reference */ 'r', `java.util.Locale.Builder`, `Locale.Builder`],
			[/* text */ 't', ` you can construct a `],
			[/* inline code block */ 'i', `Locale`],
			[/* text */ 't', ` object
 that conforms to BCP 47 syntax.

 `]
		]],
		[/* block */ 'b', `Constructors`],
		[/* text */ 't', `

 `],
		[/* block */ 'b', [
			[/* text */ 't', `The `],
			[/* inline code block */ 'i', `Locale`],
			[/* text */ 't', ` class provides three constructors:
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 `],
			[/* code block */ 'c', [
				[/* text */ 't', `     `],
				[/* text */ 't', `Locale(String language)`],
				[/* text */ 't', `
     `],
				[/* text */ 't', `Locale(String language, String country)`],
				[/* text */ 't', `
     `],
				[/* text */ 't', `Locale(String language, String country, String variant)`],
				[/* text */ 't', `
 `]
			]],
			[/* text */ 't', `
 `]
		]],
		[/* text */ 't', `
 These constructors allow you to create a `],
		[/* inline code block */ 'i', `Locale`],
		[/* text */ 't', ` object
 with language, country and variant, but you cannot specify
 script or extensions.

 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', `Factory Methods`],
		[/* text */ 't', `

 `],
		[/* block */ 'b', [
			[/* text */ 't', `The method `],
			[/* reference */ 'r', `#forLanguageTag(java.lang.String)`, `forLanguageTag(java.lang.String)`],
			[/* text */ 't', ` creates a `],
			[/* inline code block */ 'i', `Locale`],
			[/* text */ 't', `
 object for a well-formed BCP 47 language tag.

 `]
		]],
		[/* block */ 'b', `Locale Constants`],
		[/* text */ 't', `

 `],
		[/* block */ 'b', [
			[/* text */ 't', `The `],
			[/* inline code block */ 'i', `Locale`],
			[/* text */ 't', ` class provides a number of convenient constants
 that you can use to create `],
			[/* inline code block */ 'i', `Locale`],
			[/* text */ 't', ` objects for commonly used
 locales. For example, the following creates a `],
			[/* inline code block */ 'i', `Locale`],
			[/* text */ 't', ` object
 for the United States:
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 `],
			[/* code block */ 'c', `     Locale.US
 `],
			[/* text */ 't', `
 `]
		]],
		[/* text */ 't', `

 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* anchor */ 'r', '#-id', `LocaleMatching`, `Locale Matching`]
		]],
		[/* text */ 't', `

 `],
		[/* block */ 'b', `If an application or a system is internationalized and provides localized
 resources for multiple locales, it sometimes needs to find one or more
 locales (or language tags) which meet each user's specific preferences. Note
 that a term "language tag" is used interchangeably with "locale" in this
 locale matching documentation.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `In order to do matching a user's preferred locales to a set of language
 tags, `],
			[/* external link */ 'a', `http://tools.ietf.org/html/rfc4647`, `RFC 4647 Matching of Language Tags`],
			[/* text */ 't', ` defines two mechanisms: filtering and lookup.
 `],
			[/* text */ 't', `Filtering`],
			[/* text */ 't', ` is used to get all matching locales, whereas
 `],
			[/* text */ 't', `lookup`],
			[/* text */ 't', ` is to choose the best matching locale.
 Matching is done case-insensitively. These matching mechanisms are described
 in the following sections.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `A user's preference is called a `],
			[/* text */ 't', `Language Priority List`],
			[/* text */ 't', ` and is
 expressed as a list of language ranges. There are syntactically two types of
 language ranges: basic and extended. See
 `],
			[/* reference */ 'r', `java.util.Locale.LanguageRange`, `Locale.LanguageRange`],
			[/* text */ 't', ` for details.

 `]
		]],
		[/* block */ 'b', `Filtering`],
		[/* text */ 't', `

 `],
		[/* block */ 'b', `The filtering operation returns all matching language tags. It is defined
 in RFC 4647 as follows:
 "In filtering, each language range represents the least specific language
 tag (that is, the language tag with fewest number of subtags) that is an
 acceptable match. All of the language tags in the matching set of tags will
 have an equal or greater number of subtags than the language range. Every
 non-wildcard subtag in the language range will appear in every one of the
 matching language tags."

 `],
		[/* block */ 'b', [
			[/* text */ 't', `There are two types of filtering: filtering for basic language ranges
 (called "basic filtering") and filtering for extended language ranges
 (called "extended filtering"). They may return different results by what
 kind of language ranges are included in the given Language Priority List.
 `],
			[/* reference */ 'r', `enum class in java.util.Locale.FilteringMode`, `Locale.FilteringMode`],
			[/* text */ 't', ` is a parameter to specify how filtering should
 be done.

 `]
		]],
		[/* block */ 'b', `Lookup`],
		[/* text */ 't', `

 `],
		[/* block */ 'b', `The lookup operation returns the best matching language tags. It is
 defined in RFC 4647 as follows:
 "By contrast with filtering, each language range represents the most
 specific tag that is an acceptable match.  The first matching tag found,
 according to the user's priority, is considered the closest match and is the
 item returned."

 `],
		[/* block */ 'b', [
			[/* text */ 't', `For example, if a Language Priority List consists of two language ranges,
 `],
			[/* inline code block */ 'i', `"zh-Hant-TW"`],
			[/* text */ 't', ` and `],
			[/* inline code block */ 'i', `"en-US"`],
			[/* text */ 't', `, in prioritized order, lookup
 method progressively searches the language tags below in order to find the
 best matching language tag.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 `],
			[/* code block */ 'c', `    1. zh-Hant-TW
    2. zh-Hant
    3. zh
    4. en-US
    5. en
 `],
			[/* text */ 't', `
 `]
		]],
		[/* text */ 't', `
 If there is a language tag which matches completely to a language range
 above, the language tag is returned.

 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* inline code block */ 'i', `"*"`],
			[/* text */ 't', ` is the special language range, and it is ignored in lookup.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `If multiple language tags match as a result of the subtag `],
			[/* inline code block */ 'i', `'*'`],
			[/* text */ 't', `
 included in a language range, the first matching language tag returned by
 an `],
			[/* reference */ 'r', `java.util.Iterator`, `Iterator`],
			[/* text */ 't', ` over a `],
			[/* reference */ 'r', `java.util.Collection`, `Collection`],
			[/* text */ 't', ` of language tags is treated as
 the best matching one.

 `]
		]],
		[/* block */ 'b', `Use of Locale`],
		[/* text */ 't', `

 `],
		[/* block */ 'b', [
			[/* text */ 't', `Once you've created a `],
			[/* inline code block */ 'i', `Locale`],
			[/* text */ 't', ` you can query it for information
 about itself. Use `],
			[/* inline code block */ 'i', `getCountry`],
			[/* text */ 't', ` to get the country (or region)
 code and `],
			[/* inline code block */ 'i', `getLanguage`],
			[/* text */ 't', ` to get the language code.
 You can use `],
			[/* inline code block */ 'i', `getDisplayCountry`],
			[/* text */ 't', ` to get the
 name of the country suitable for displaying to the user. Similarly,
 you can use `],
			[/* inline code block */ 'i', `getDisplayLanguage`],
			[/* text */ 't', ` to get the name of
 the language suitable for displaying to the user. Interestingly,
 the `],
			[/* inline code block */ 'i', `getDisplayXXX`],
			[/* text */ 't', ` methods are themselves locale-sensitive
 and have two versions: one that uses the default
 `],
			[/* reference */ 'r', `java.util.Locale.Category#DISPLAY`, `DISPLAY`],
			[/* text */ 't', ` locale and one
 that uses the locale specified as an argument.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `The Java Platform provides a number of classes that perform locale-sensitive
 operations. For example, the `],
			[/* inline code block */ 'i', `NumberFormat`],
			[/* text */ 't', ` class formats
 numbers, currency, and percentages in a locale-sensitive manner. Classes
 such as `],
			[/* inline code block */ 'i', `NumberFormat`],
			[/* text */ 't', ` have several convenience methods
 for creating a default object of that type. For example, the
 `],
			[/* inline code block */ 'i', `NumberFormat`],
			[/* text */ 't', ` class provides these three convenience methods
 for creating a default `],
			[/* inline code block */ 'i', `NumberFormat`],
			[/* text */ 't', ` object:
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 `],
			[/* code block */ 'c', `     NumberFormat.getInstance()
     NumberFormat.getCurrencyInstance()
     NumberFormat.getPercentInstance()
 `],
			[/* text */ 't', `
 `]
		]],
		[/* text */ 't', `
 Each of these methods has two variants; one with an explicit locale
 and one without; the latter uses the default
 `],
		[/* reference */ 'r', `java.util.Locale.Category#FORMAT`, `FORMAT`],
		[/* text */ 't', ` locale:
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 `],
			[/* code block */ 'c', `     NumberFormat.getInstance(myLocale)
     NumberFormat.getCurrencyInstance(myLocale)
     NumberFormat.getPercentInstance(myLocale)
 `],
			[/* text */ 't', `
 `]
		]],
		[/* text */ 't', `
 A `],
		[/* inline code block */ 'i', `Locale`],
		[/* text */ 't', ` is the mechanism for identifying the kind of object
 (`],
		[/* inline code block */ 'i', `NumberFormat`],
		[/* text */ 't', `) that you would like to get. The locale is
 `],
		[/* text */ 't', `just`],
		[/* text */ 't', ` a mechanism for identifying objects,
 `],
		[/* text */ 't', `not`],
		[/* text */ 't', ` a container for the objects themselves.

 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', `Compatibility`],
		[/* text */ 't', `

 `],
		[/* block */ 'b', [
			[/* text */ 't', `In order to maintain compatibility with existing usage, Locale's
 constructors retain their behavior prior to the Java Runtime
 Environment version 1.7.  The same is largely true for the
 `],
			[/* inline code block */ 'i', `toString`],
			[/* text */ 't', ` method. Thus Locale objects can continue to
 be used as they were. In particular, clients who parse the output
 of toString into language, country, and variant fields can continue
 to do so (although this is strongly discouraged), although the
 variant field will have additional information in it if script or
 extensions are present.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `In addition, BCP 47 imposes syntax restrictions that are not
 imposed by Locale's constructors. This means that conversions
 between some Locales and BCP 47 language tags cannot be made without
 losing information. Thus `],
			[/* inline code block */ 'i', `toLanguageTag`],
			[/* text */ 't', ` cannot
 represent the state of locales whose language, country, or variant
 do not conform to BCP 47.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Because of these issues, it is recommended that clients migrate
 away from constructing non-conforming locales and use the
 `],
			[/* inline code block */ 'i', `forLanguageTag`],
			[/* text */ 't', ` and `],
			[/* inline code block */ 'i', `Locale.Builder`],
			[/* text */ 't', ` APIs instead.
 Clients desiring a string representation of the complete locale can
 then always rely on `],
			[/* inline code block */ 'i', `toLanguageTag`],
			[/* text */ 't', ` for this purpose.

 `]
		]],
		[/* block */ 'b', [
			[/* anchor */ 'r', '#-id', `special_cases_constructor`, `Special cases`]
		]],
		[/* text */ 't', `

 `],
		[/* block */ 'b', [
			[/* text */ 't', `For compatibility reasons, two
 non-conforming locales are treated as special cases.  These are
 `],
			[/* inline code block */ 'i', `ja_JP_JP`],
			[/* text */ 't', ` and `],
			[/* inline code block */ 'i', `th_TH_TH`],
			[/* text */ 't', `. These are ill-formed
 in BCP 47 since the variants are too short. To ease migration to BCP 47,
 these are treated specially during construction.  These two cases (and only
 these) cause a constructor to generate an extension, all other values behave
 exactly as they did prior to Java 7.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Java has used `],
			[/* inline code block */ 'i', `ja_JP_JP`],
			[/* text */ 't', ` to represent Japanese as used in
 Japan together with the Japanese Imperial calendar. This is now
 representable using a Unicode locale extension, by specifying the
 Unicode locale key `],
			[/* inline code block */ 'i', `ca`],
			[/* text */ 't', ` (for "calendar") and type
 `],
			[/* inline code block */ 'i', `japanese`],
			[/* text */ 't', `. When the Locale constructor is called with the
 arguments "ja", "JP", "JP", the extension "u-ca-japanese" is
 automatically added.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Java has used `],
			[/* inline code block */ 'i', `th_TH_TH`],
			[/* text */ 't', ` to represent Thai as used in
 Thailand together with Thai digits. This is also now representable using
 a Unicode locale extension, by specifying the Unicode locale key
 `],
			[/* inline code block */ 'i', `nu`],
			[/* text */ 't', ` (for "number") and value `],
			[/* inline code block */ 'i', `thai`],
			[/* text */ 't', `. When the Locale
 constructor is called with the arguments "th", "TH", "TH", the
 extension "u-nu-thai" is automatically added.

 `]
		]],
		[/* block */ 'b', `Serialization`],
		[/* text */ 't', `

 `],
		[/* block */ 'b', `During serialization, writeObject writes all fields to the output
 stream, including extensions.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `During deserialization, readResolve adds extensions as described
 in `],
			[/* text */ 't', `Special Cases`],
			[/* text */ 't', `, only
 for the two cases th_TH_TH and ja_JP_JP.

 `]
		]],
		[/* block */ 'b', [
			[/* anchor */ 'r', '#-id', `legacy_language_codes`, `Legacy language codes`]
		]],
		[/* text */ 't', `

 `],
		[/* block */ 'b', [
			[/* text */ 't', `Locale's constructor has always converted three language codes to
 their earlier, obsoleted forms: `],
			[/* inline code block */ 'i', `he`],
			[/* text */ 't', ` maps to `],
			[/* inline code block */ 'i', `iw`],
			[/* text */ 't', `,
 `],
			[/* inline code block */ 'i', `yi`],
			[/* text */ 't', ` maps to `],
			[/* inline code block */ 'i', `ji`],
			[/* text */ 't', `, and `],
			[/* inline code block */ 'i', `id`],
			[/* text */ 't', ` maps to
 `],
			[/* inline code block */ 'i', `in`],
			[/* text */ 't', `. Since Java SE 17, this is no longer the case. Each
 language maps to its new form; `],
			[/* inline code block */ 'i', `iw`],
			[/* text */ 't', ` maps to `],
			[/* inline code block */ 'i', `he`],
			[/* text */ 't', `, `],
			[/* inline code block */ 'i', `ji`],
			[/* text */ 't', `
 maps to `],
			[/* inline code block */ 'i', `yi`],
			[/* text */ 't', `, and `],
			[/* inline code block */ 'i', `in`],
			[/* text */ 't', ` maps to `],
			[/* inline code block */ 'i', `id`],
			[/* text */ 't', `.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `For the backward compatible behavior, the system property
 `],
			[/* inline code block */ 'i', `java.locale.useOldISOCodes`],
			[/* text */ 't', ` reverts the behavior
 back to that of before Java SE 17. If the system property is set to
 `],
			[/* inline code block */ 'i', `true`],
			[/* text */ 't', `, those three current language codes are mapped to their
 backward compatible forms. The property is only read at Java runtime
 startup and subsequent calls to `],
			[/* inline code block */ 'i', `System.setProperty()`],
			[/* text */ 't', ` will
 have no effect.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `The APIs added in 1.7 map between the old and new language codes,
 maintaining the mapped codes internal to Locale (so that
 `],
			[/* inline code block */ 'i', `getLanguage`],
			[/* text */ 't', ` and `],
			[/* inline code block */ 'i', `toString`],
			[/* text */ 't', ` reflect the mapped
 code, which depends on the `],
			[/* inline code block */ 'i', `java.locale.useOldISOCodes`],
			[/* text */ 't', ` system
 property), but using the new codes in the BCP 47 language tag APIs (so
 that `],
			[/* inline code block */ 'i', `toLanguageTag`],
			[/* text */ 't', ` reflects the new one). This
 preserves the equivalence between Locales no matter which code or
 API is used to construct them. Java's default resource bundle
 lookup mechanism also implements this mapping, so that resources
 can be named using either convention, see `],
			[/* reference */ 'r', `java.util.ResourceBundle.Control`, `ResourceBundle.Control`],
			[/* text */ 't', `.

 `]
		]],
		[/* block */ 'b', `Three-letter language/country(region) codes`],
		[/* text */ 't', `

 `],
		[/* block */ 'b', `The Locale constructors have always specified that the language
 and the country param be two characters in length, although in
 practice they have accepted any length.  The specification has now
 been relaxed to allow language codes of two to eight characters and
 country (region) codes of two to three characters, and in
 particular, three-letter language codes and three-digit region
 codes as specified in the IANA Language Subtag Registry.  For
 compatibility, the implementation still does not impose a length
 constraint.`]
	],
	[/* fields */
		[/* field */ 'CANADA', [
			[/* field description */
				[/* text */ 't', `Useful constant for country.`]
			],
		]],
		[/* field */ 'CANADA_FRENCH', [
			[/* field description */
				[/* text */ 't', `Useful constant for country.`]
			],
		]],
		[/* field */ 'CHINA', [
			[/* field description */
				[/* text */ 't', `Useful constant for country.`]
			],
		]],
		[/* field */ 'CHINESE', [
			[/* field description */
				[/* text */ 't', `Useful constant for language.`]
			],
		]],
		[/* field */ 'ENGLISH', [
			[/* field description */
				[/* text */ 't', `Useful constant for language.`]
			],
		]],
		[/* field */ 'FRANCE', [
			[/* field description */
				[/* text */ 't', `Useful constant for country.`]
			],
		]],
		[/* field */ 'FRENCH', [
			[/* field description */
				[/* text */ 't', `Useful constant for language.`]
			],
		]],
		[/* field */ 'GERMAN', [
			[/* field description */
				[/* text */ 't', `Useful constant for language.`]
			],
		]],
		[/* field */ 'GERMANY', [
			[/* field description */
				[/* text */ 't', `Useful constant for country.`]
			],
		]],
		[/* field */ 'ITALIAN', [
			[/* field description */
				[/* text */ 't', `Useful constant for language.`]
			],
		]],
		[/* field */ 'ITALY', [
			[/* field description */
				[/* text */ 't', `Useful constant for country.`]
			],
		]],
		[/* field */ 'JAPAN', [
			[/* field description */
				[/* text */ 't', `Useful constant for country.`]
			],
		]],
		[/* field */ 'JAPANESE', [
			[/* field description */
				[/* text */ 't', `Useful constant for language.`]
			],
		]],
		[/* field */ 'KOREA', [
			[/* field description */
				[/* text */ 't', `Useful constant for country.`]
			],
		]],
		[/* field */ 'KOREAN', [
			[/* field description */
				[/* text */ 't', `Useful constant for language.`]
			],
		]],
		[/* field */ 'PRC', [
			[/* field description */
				[/* text */ 't', `Useful constant for country.`]
			],
		]],
		[/* field */ 'PRIVATE_USE_EXTENSION', [
			[/* field description */
				[/* text */ 't', `The key for the private use extension ('x').`]
			],
		]],
		[/* field */ 'ROOT', [
			[/* field description */
				[/* text */ 't', `Useful constant for the root locale.  The root locale is the locale whose
 language, country, and variant are empty ("") strings.  This is regarded
 as the base locale of all locales, and is used as the language/country
 neutral locale for the locale sensitive operations.`]
			],
		]],
		[/* field */ 'SIMPLIFIED_CHINESE', [
			[/* field description */
				[/* text */ 't', `Useful constant for language.`]
			],
		]],
		[/* field */ 'TAIWAN', [
			[/* field description */
				[/* text */ 't', `Useful constant for country.`]
			],
		]],
		[/* field */ 'TRADITIONAL_CHINESE', [
			[/* field description */
				[/* text */ 't', `Useful constant for language.`]
			],
		]],
		[/* field */ 'UK', [
			[/* field description */
				[/* text */ 't', `Useful constant for country.`]
			],
		]],
		[/* field */ 'UNICODE_LOCALE_EXTENSION', [
			[/* field description */
				[/* text */ 't', `The key for Unicode locale extension ('u').`]
			],
		]],
		[/* field */ 'US', [
			[/* field description */
				[/* text */ 't', `Useful constant for country.`]
			],
		]]
	],
	[/* constructors */
		[/* constructor */ '<init>(java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Construct a locale from a language code.
 This constructor normalizes the language value to lowercase.`]
			],
			[/* parameters */
				[/* parameter */ 'language', [/* parameter description */
					[/* text */ 't', `An ISO 639 alpha-2 or alpha-3 language code, or a language subtag
 up to 8 characters in length.  See the `],
					[/* inline code block */ 'i', `Locale`],
					[/* text */ 't', ` class description about
 valid language values.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `thrown if argument is null.`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.lang.String,java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Construct a locale from language and country.
 This constructor normalizes the language value to lowercase and
 the country value to uppercase.`]
			],
			[/* parameters */
				[/* parameter */ 'language', [/* parameter description */
					[/* text */ 't', `An ISO 639 alpha-2 or alpha-3 language code, or a language subtag
 up to 8 characters in length.  See the `],
					[/* inline code block */ 'i', `Locale`],
					[/* text */ 't', ` class description about
 valid language values.`]
				]],
				[/* parameter */ 'country', [/* parameter description */
					[/* text */ 't', `An ISO 3166 alpha-2 country code or a UN M.49 numeric-3 area code.
 See the `],
					[/* inline code block */ 'i', `Locale`],
					[/* text */ 't', ` class description about valid country values.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `thrown if either argument is null.`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.lang.String,java.lang.String,java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Construct a locale from language, country and variant.
 This constructor normalizes the language value to lowercase and
 the country value to uppercase.`]
			],
			[/* parameters */
				[/* parameter */ 'language', [/* parameter description */
					[/* text */ 't', `An ISO 639 alpha-2 or alpha-3 language code, or a language subtag
 up to 8 characters in length.  See the `],
					[/* inline code block */ 'i', `Locale`],
					[/* text */ 't', ` class description about
 valid language values.`]
				]],
				[/* parameter */ 'country', [/* parameter description */
					[/* text */ 't', `An ISO 3166 alpha-2 country code or a UN M.49 numeric-3 area code.
 See the `],
					[/* inline code block */ 'i', `Locale`],
					[/* text */ 't', ` class description about valid country values.`]
				]],
				[/* parameter */ 'variant', [/* parameter description */
					[/* text */ 't', `Any arbitrary value used to indicate a variation of a `],
					[/* inline code block */ 'i', `Locale`],
					[/* text */ 't', `.
 See the `],
					[/* inline code block */ 'i', `Locale`],
					[/* text */ 't', ` class description for the details.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `thrown if any argument is null.`]
				]]
			]
		]]
	],
	[/* methods */
		[/* method */ 'equals(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Returns true if this Locale is equal to another object.  A Locale is
 deemed equal to another Locale with identical language, script, country,
 variant and extensions, and unequal to all other objects.`]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `the reference object with which to compare.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if this Locale is equal to the specified object.`]
			]
		]],
		[/* method */ 'hasExtensions()', [
			[/* method description */
				[/* text */ 't', `Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this `],
				[/* inline code block */ 'i', `Locale`],
				[/* text */ 't', ` has any `],
				[/* text */ 't', `extensions`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this `],
				[/* inline code block */ 'i', `Locale`],
				[/* text */ 't', ` has any extensions`]
			]
		]],
		[/* method */ 'getDisplayCountry()', [
			[/* method description */
				[/* text */ 't', `Returns a name for the locale's country that is appropriate for display to the
 user.
 If possible, the name returned will be localized for the default
 `],
				[/* reference */ 'r', `java.util.Locale.Category#DISPLAY`, `DISPLAY`],
				[/* text */ 't', ` locale.
 For example, if the locale is fr_FR and the default
 `],
				[/* reference */ 'r', `java.util.Locale.Category#DISPLAY`, `DISPLAY`],
				[/* text */ 't', ` locale
 is en_US, getDisplayCountry() will return "France"; if the locale is en_US and
 the default `],
				[/* reference */ 'r', `java.util.Locale.Category#DISPLAY`, `DISPLAY`],
				[/* text */ 't', ` locale is fr_FR,
 getDisplayCountry() will return "Etats-Unis".
 If the name returned cannot be localized for the default
 `],
				[/* reference */ 'r', `java.util.Locale.Category#DISPLAY`, `DISPLAY`],
				[/* text */ 't', ` locale,
 (say, we don't have a Japanese name for Croatia),
 this function falls back on the English name, and uses the ISO code as a last-resort
 value.  If the locale doesn't specify a country, this function returns the empty string.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The name of the country appropriate to the locale.`]
			]
		]],
		[/* method */ 'getDisplayLanguage()', [
			[/* method description */
				[/* text */ 't', `Returns a name for the locale's language that is appropriate for display to the
 user.
 If possible, the name returned will be localized for the default
 `],
				[/* reference */ 'r', `java.util.Locale.Category#DISPLAY`, `DISPLAY`],
				[/* text */ 't', ` locale.
 For example, if the locale is fr_FR and the default
 `],
				[/* reference */ 'r', `java.util.Locale.Category#DISPLAY`, `DISPLAY`],
				[/* text */ 't', ` locale
 is en_US, getDisplayLanguage() will return "French"; if the locale is en_US and
 the default `],
				[/* reference */ 'r', `java.util.Locale.Category#DISPLAY`, `DISPLAY`],
				[/* text */ 't', ` locale is fr_FR,
 getDisplayLanguage() will return "anglais".
 If the name returned cannot be localized for the default
 `],
				[/* reference */ 'r', `java.util.Locale.Category#DISPLAY`, `DISPLAY`],
				[/* text */ 't', ` locale,
 (say, we don't have a Japanese name for Croatian),
 this function falls back on the English name, and uses the ISO code as a last-resort
 value.  If the locale doesn't specify a language, this function returns the empty string.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The name of the display language.`]
			]
		]],
		[/* method */ 'getDisplayName()', [
			[/* method description */
				[/* text */ 't', `Returns a name for the locale that is appropriate for display to the
 user. This will be the values returned by getDisplayLanguage(),
 getDisplayScript(), getDisplayCountry(), getDisplayVariant() and
 optional `],
				[/* reference */ 'r', `java.util.Locale#def_locale_extension`, `Unicode extensions`],
				[/* text */ 't', `
 assembled into a single string. The non-empty values are used in order, with
 the second and subsequent names in parentheses.  For example:
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 language (script, country, variant(, extension)*)`],
					[/* new line */ 'n'],
					[/* text */ 't', `
 language (country(, extension)*)`],
					[/* new line */ 'n'],
					[/* text */ 't', `
 language (variant(, extension)*)`],
					[/* new line */ 'n'],
					[/* text */ 't', `
 script (country(, extension)*)`],
					[/* new line */ 'n'],
					[/* text */ 't', `
 country (extension)*`],
					[/* new line */ 'n'],
					[/* text */ 't', `
 `]
				]],
				[/* text */ 't', `
 depending on which fields are specified in the locale. The field
 separator in the above parentheses, denoted as a comma character, may
 be localized depending on the locale. If the language, script, country,
 and variant fields are all empty, this function returns the empty string.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The name of the locale appropriate to display.`]
			]
		]],
		[/* method */ 'getDisplayVariant()', [
			[/* method description */
				[/* text */ 't', `Returns a name for the locale's variant code that is appropriate for display to the
 user.  If possible, the name will be localized for the default
 `],
				[/* reference */ 'r', `java.util.Locale.Category#DISPLAY`, `DISPLAY`],
				[/* text */ 't', ` locale.  If the locale
 doesn't specify a variant code, this function returns the empty string.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The name of the display variant code appropriate to the locale.`]
			]
		]],
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Returns a string representation of this `],
				[/* inline code block */ 'i', `Locale`],
				[/* text */ 't', `
 object, consisting of language, country, variant, script,
 and extensions as below:
 `],
				[/* block */ 'b', `
 language + "_" + country + "_" + (variant + "_#" | "#") + script + "_" + extensions
 `],
				[/* text */ 't', `

 Language is always lower case, country is always upper case, script is always title
 case, and extensions are always lower case.  Extensions and private use subtags
 will be in canonical order as explained in `],
				[/* reference */ 'r', `#toLanguageTag()`, `toLanguageTag()`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', `When the locale has neither script nor extensions, the result is the same as in
 Java 6 and prior.

 `],
				[/* block */ 'b', `If both the language and country fields are missing, this function will return
 the empty string, even if the variant, script, or extensions field is present (you
 can't have a locale with just a variant, the variant must accompany a well-formed
 language or country code).

 `],
				[/* block */ 'b', `If script or extensions are present and variant is missing, no underscore is
 added before the "#".

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This behavior is designed to support debugging and to be compatible with
 previous uses of `],
					[/* inline code block */ 'i', `toString`],
					[/* text */ 't', ` that expected language, country, and variant
 fields only.  To represent a Locale as a String for interchange purposes, use
 `],
					[/* reference */ 'r', `#toLanguageTag()`, `toLanguageTag()`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', `Examples: `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* inline code block */ 'i', `en`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `de_DE`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `_GB`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `en_US_WIN`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `de__POSIX`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `zh_CN_#Hans`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `zh_TW_#Hant_x-java`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `th_TH_TH_#u-nu-thai`]
					]]
				]],
				[/* block */ 'b', '']
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `A string representation of the Locale, for debugging.`]
			]
		]],
		[/* method */ 'hashCode()', [
			[/* method description */
				[/* text */ 't', `Override hashCode.
 Since Locales are often used in hashtables, caches the value
 for speed.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a hash code value for this object.`]
			]
		]],
		[/* method */ 'clone()', [
			[/* method description */
				[/* text */ 't', `Overrides Cloneable.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a clone of this instance.`]
			]
		]],
		[/* method */ 'getCountry()', [
			[/* method description */
				[/* text */ 't', `Returns the country/region code for this locale, which should
 either be the empty string, an uppercase ISO 3166 2-letter code,
 or a UN M.49 3-digit code.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The country/region code, or the empty string if none is defined.`]
			]
		]],
		[/* method */ 'getDisplayCountry(java.util.Locale)', [
			[/* method description */
				[/* text */ 't', `Returns a name for the locale's country that is appropriate for display to the
 user.
 If possible, the name returned will be localized according to inLocale.
 For example, if the locale is fr_FR and inLocale
 is en_US, getDisplayCountry() will return "France"; if the locale is en_US and
 inLocale is fr_FR, getDisplayCountry() will return "Etats-Unis".
 If the name returned cannot be localized according to inLocale.
 (say, we don't have a Japanese name for Croatia),
 this function falls back on the English name, and finally
 on the ISO code as a last-resort value.  If the locale doesn't specify a country,
 this function returns the empty string.`]
			],
			[/* parameters */
				[/* parameter */ 'inLocale', [/* parameter description */
					[/* text */ 't', `The locale for which to retrieve the display country.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `inLocale`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The name of the country appropriate to the given locale.`]
			]
		]],
		[/* method */ 'getDisplayLanguage(java.util.Locale)', [
			[/* method description */
				[/* text */ 't', `Returns a name for the locale's language that is appropriate for display to the
 user.
 If possible, the name returned will be localized according to inLocale.
 For example, if the locale is fr_FR and inLocale
 is en_US, getDisplayLanguage() will return "French"; if the locale is en_US and
 inLocale is fr_FR, getDisplayLanguage() will return "anglais".
 If the name returned cannot be localized according to inLocale,
 (say, we don't have a Japanese name for Croatian),
 this function falls back on the English name, and finally
 on the ISO code as a last-resort value.  If the locale doesn't specify a language,
 this function returns the empty string.`]
			],
			[/* parameters */
				[/* parameter */ 'inLocale', [/* parameter description */
					[/* text */ 't', `The locale for which to retrieve the display language.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `inLocale`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The name of the display language appropriate to the given locale.`]
			]
		]],
		[/* method */ 'getDisplayName(java.util.Locale)', [
			[/* method description */
				[/* text */ 't', `Returns a name for the locale that is appropriate for display
 to the user.  This will be the values returned by
 getDisplayLanguage(), getDisplayScript(),getDisplayCountry()
 getDisplayVariant(), and optional `],
				[/* reference */ 'r', `java.util.Locale#def_locale_extension`, `Unicode extensions`],
				[/* text */ 't', ` assembled into a single string. The non-empty
 values are used in order, with the second and subsequent names in
 parentheses.  For example:
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 language (script, country, variant(, extension)*)`],
					[/* new line */ 'n'],
					[/* text */ 't', `
 language (country(, extension)*)`],
					[/* new line */ 'n'],
					[/* text */ 't', `
 language (variant(, extension)*)`],
					[/* new line */ 'n'],
					[/* text */ 't', `
 script (country(, extension)*)`],
					[/* new line */ 'n'],
					[/* text */ 't', `
 country (extension)*`],
					[/* new line */ 'n'],
					[/* text */ 't', `
 `]
				]],
				[/* text */ 't', `
 depending on which fields are specified in the locale. The field
 separator in the above parentheses, denoted as a comma character, may
 be localized depending on the locale. If the language, script, country,
 and variant fields are all empty, this function returns the empty string.`]
			],
			[/* parameters */
				[/* parameter */ 'inLocale', [/* parameter description */
					[/* text */ 't', `The locale for which to retrieve the display name.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `inLocale`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The name of the locale appropriate to display.`]
			]
		]],
		[/* method */ 'getDisplayScript()', [
			[/* method description */
				[/* text */ 't', `Returns a name for the locale's script that is appropriate for display to
 the user. If possible, the name will be localized for the default
 `],
				[/* reference */ 'r', `java.util.Locale.Category#DISPLAY`, `DISPLAY`],
				[/* text */ 't', ` locale.  Returns
 the empty string if this locale doesn't specify a script code.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the display name of the script code for the current default
     `],
				[/* reference */ 'r', `java.util.Locale.Category#DISPLAY`, `DISPLAY`],
				[/* text */ 't', ` locale`]
			]
		]],
		[/* method */ 'getDisplayScript(java.util.Locale)', [
			[/* method description */
				[/* text */ 't', `Returns a name for the locale's script that is appropriate
 for display to the user. If possible, the name will be
 localized for the given locale. Returns the empty string if
 this locale doesn't specify a script code.`]
			],
			[/* parameters */
				[/* parameter */ 'inLocale', [/* parameter description */
					[/* text */ 't', `The locale for which to retrieve the display script.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `inLocale`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the display name of the script code for the current default
 `],
				[/* reference */ 'r', `java.util.Locale.Category#DISPLAY`, `DISPLAY`],
				[/* text */ 't', ` locale`]
			]
		]],
		[/* method */ 'getDisplayVariant(java.util.Locale)', [
			[/* method description */
				[/* text */ 't', `Returns a name for the locale's variant code that is appropriate for display to the
 user.  If possible, the name will be localized for inLocale.  If the locale
 doesn't specify a variant code, this function returns the empty string.`]
			],
			[/* parameters */
				[/* parameter */ 'inLocale', [/* parameter description */
					[/* text */ 't', `The locale for which to retrieve the display variant code.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `inLocale`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The name of the display variant code appropriate to the given locale.`]
			]
		]],
		[/* method */ 'getExtension(char)', [
			[/* method description */
				[/* text */ 't', `Returns the extension (or private use) value associated with
 the specified key, or null if there is no extension
 associated with the key. To be well-formed, the key must be one
 of `],
				[/* inline code block */ 'i', `[0-9A-Za-z]`],
				[/* text */ 't', `. Keys are case-insensitive, so
 for example 'z' and 'Z' represent the same extension.`]
			],
			[/* parameters */
				[/* parameter */ 'key', [/* parameter description */
					[/* text */ 't', `the extension key`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if key is not well-formed`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The extension, or null if this locale defines no
 extension for the specified key.`]
			]
		]],
		[/* method */ 'getISO3Country()', [
			[/* method description */
				[/* text */ 't', `Returns a three-letter abbreviation for this locale's country.
 If the country matches an ISO 3166-1 alpha-2 code, the
 corresponding ISO 3166-1 alpha-3 uppercase code is returned.
 If the locale doesn't specify a country, this will be the empty
 string.

 `],
				[/* block */ 'b', `The ISO 3166-1 codes can be found on-line.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.util.MissingResourceException', [/* throw description */
					[/* text */ 't', `Throws MissingResourceException if the
 three-letter country abbreviation is not available for this locale.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `A three-letter abbreviation of this locale's country.`]
			]
		]],
		[/* method */ 'getISO3Language()', [
			[/* method description */
				[/* text */ 't', `Returns a three-letter abbreviation of this locale's language.
 If the language matches an ISO 639-1 two-letter code, the
 corresponding ISO 639-2/T three-letter lowercase code is
 returned.  The ISO 639-2 language codes can be found on-line,
 see "Codes for the Representation of Names of Languages Part 2:
 Alpha-3 Code".  If the locale specifies a three-letter
 language, the language is returned as is.  If the locale does
 not specify a language the empty string is returned.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.util.MissingResourceException', [/* throw description */
					[/* text */ 't', `Throws MissingResourceException if
 three-letter language abbreviation is not available for this locale.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `A three-letter abbreviation of this locale's language.`]
			]
		]],
		[/* method */ 'getLanguage()', [
			[/* method description */
				[/* text */ 't', `Returns the language code of this Locale.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The language code, or the empty string if none is defined.`]
			]
		]],
		[/* method */ 'getScript()', [
			[/* method description */
				[/* text */ 't', `Returns the script for this locale, which should
 either be the empty string or an ISO 15924 4-letter script
 code. The first letter is uppercase and the rest are
 lowercase, for example, 'Latn', 'Cyrl'.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The script code, or the empty string if none is defined.`]
			]
		]],
		[/* method */ 'getUnicodeLocaleType(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Returns the Unicode locale type associated with the specified Unicode locale key
 for this locale. Returns the empty string for keys that are defined with no type.
 Returns null if the key is not defined. Keys are case-insensitive. The key must
 be two alphanumeric characters ([0-9a-zA-Z]), or an IllegalArgumentException is
 thrown.`]
			],
			[/* parameters */
				[/* parameter */ 'key', [/* parameter description */
					[/* text */ 't', `the Unicode locale key`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the key is not well-formed`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `key`],
					[/* text */ 't', ` is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The Unicode locale type associated with the key, or null if the
 locale does not define the key.`]
			]
		]],
		[/* method */ 'getVariant()', [
			[/* method description */
				[/* text */ 't', `Returns the variant code for this locale.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The variant code, or the empty string if none is defined.`]
			]
		]],
		[/* method */ 'toLanguageTag()', [
			[/* method description */
				[/* text */ 't', `Returns a well-formed IETF BCP 47 language tag representing
 this locale.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If this `],
					[/* inline code block */ 'i', `Locale`],
					[/* text */ 't', ` has a language, country, or
 variant that does not satisfy the IETF BCP 47 language tag
 syntax requirements, this method handles these fields as
 described below:

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `Language:`],
					[/* text */ 't', ` If language is empty, or not `],
					[/* text */ 't', `well-formed`],
					[/* text */ 't', ` (for example "a" or
 "e2"), it will be emitted as "und" (Undetermined).

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `Country:`],
					[/* text */ 't', ` If country is not `],
					[/* text */ 't', `well-formed`],
					[/* text */ 't', ` (for example "12" or "USA"),
 it will be omitted.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `Variant:`],
					[/* text */ 't', ` If variant `],
					[/* text */ 't', `is`],
					[/* text */ 't', ` `],
					[/* text */ 't', `well-formed`],
					[/* text */ 't', `, each sub-segment
 (delimited by '-' or '_') is emitted as a subtag.  Otherwise:
 `]
				]],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `if all sub-segments match `],
						[/* inline code block */ 'i', `[0-9a-zA-Z]{1,8}`],
						[/* text */ 't', `
 (for example "WIN" or "Oracle_JDK_Standard_Edition"), the first
 ill-formed sub-segment and all following will be appended to
 the private use subtag.  The first appended subtag will be
 "lvariant", followed by the sub-segments in order, separated by
 hyphen. For example, "x-lvariant-WIN",
 "Oracle-x-lvariant-JDK-Standard-Edition".

 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `if any sub-segment does not match
 `],
						[/* inline code block */ 'i', `[0-9a-zA-Z]{1,8}`],
						[/* text */ 't', `, the variant will be truncated
 and the problematic sub-segment and all following sub-segments
 will be omitted.  If the remainder is non-empty, it will be
 emitted as a private use subtag as above (even if the remainder
 turns out to be well-formed).  For example,
 "Solaris_isjustthecoolestthing" is emitted as
 "x-lvariant-Solaris", not as "solaris".`]
					]]
				]],
				[/* text */ 't', `

 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', `Special Conversions:`],
				[/* list */ 'l', [
					[/* block */ 'b', `Deprecated ISO language codes "iw", "ji", and "in" are
 converted to "he", "yi", and "id", respectively.

 `],
					[/* block */ 'b', `A locale with language "no", country "NO", and variant
 "NY", representing Norwegian Nynorsk (Norway), is converted
 to a language tag "nn-NO".`]
				]],
				[/* text */ 't', `

 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', `Note:`],
				[/* code block */ 'c', `   new Locale("xx", "YY").toLanguageTag();`],
				[/* text */ 't', `

 will return "xx-YY", but the language subtag "xx" and the
 region subtag "YY" are invalid because they are not registered
 in the IANA Language Subtag Registry.`],
				[/* block */ 'b', '']
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a BCP47 language tag representing the locale`]
			]
		]],
		[/* method */ 'stripExtensions()', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this `],
				[/* inline code block */ 'i', `Locale`],
				[/* text */ 't', ` with no `],
				[/* text */ 't', `extensions`],
				[/* text */ 't', `. If this `],
				[/* inline code block */ 'i', `Locale`],
				[/* text */ 't', ` has no extensions, this `],
				[/* inline code block */ 'i', `Locale`],
				[/* text */ 't', `
 is returned.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a copy of this `],
				[/* inline code block */ 'i', `Locale`],
				[/* text */ 't', ` with no extensions, or `],
				[/* inline code block */ 'i', `this`],
				[/* text */ 't', `
         if `],
				[/* inline code block */ 'i', `this`],
				[/* text */ 't', ` has no extensions`]
			]
		]],
		[/* method */ 'getExtensionKeys()', [
			[/* method description */
				[/* text */ 't', `Returns the set of extension keys associated with this locale, or the
 empty set if it has no extensions. The returned set is unmodifiable.
 The keys will all be lower-case.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The set of extension keys, or the empty set if this locale has
 no extensions.`]
			]
		]],
		[/* method */ 'getUnicodeLocaleAttributes()', [
			[/* method description */
				[/* text */ 't', `Returns the set of unicode locale attributes associated with
 this locale, or the empty set if it has no attributes. The
 returned set is unmodifiable.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The set of attributes.`]
			]
		]],
		[/* method */ 'getUnicodeLocaleKeys()', [
			[/* method description */
				[/* text */ 't', `Returns the set of Unicode locale keys defined by this locale, or the empty set if
 this locale has none.  The returned set is immutable.  Keys are all lower case.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The set of Unicode locale keys, or the empty set if this locale has
 no Unicode locale keywords.`]
			]
		]],
		[/* method */ 'lookupTag(java.util.List,java.util.Collection)', [
			[/* method description */
				[/* text */ 't', `Returns the best-matching language tag using the lookup mechanism
 defined in RFC 4647.

 This lookup operation on the given `],
				[/* inline code block */ 'i', `tags`],
				[/* text */ 't', ` ensures that the
 first matching tag with preserved case is returned.`]
			],
			[/* parameters */
				[/* parameter */ 'priorityList', [/* parameter description */
					[/* text */ 't', `user's Language Priority List in which each language
     tag is sorted in descending order based on priority or weight`]
				]],
				[/* parameter */ 'tags', [/* parameter description */
					[/* text */ 't', `language tangs used for matching`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `priorityList`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `tags`],
					[/* text */ 't', ` is
     `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the best matching language tag chosen based on priority or
     weight, or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if nothing matches.`]
			]
		]],
		[/* method */ 'getISOCountries()', [
			[/* method description */
				[/* text */ 't', `Returns a list of all 2-letter country codes defined in ISO 3166.
 Can be used to create Locales.
 This method is equivalent to `],
				[/* reference */ 'r', `#getISOCountries(java.util.Locale.IsoCountryCode)`, `getISOCountries(Locale.IsoCountryCode type)`],
				[/* text */ 't', `
 with `],
				[/* inline code block */ 'i', `type`],
				[/* text */ 't', `  `],
				[/* reference */ 'r', `java.util.Locale.IsoCountryCode#PART1_ALPHA2`, `Locale.IsoCountryCode.PART1_ALPHA2`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 `],
					[/* text */ 't', `Note:`],
					[/* text */ 't', ` The `],
					[/* inline code block */ 'i', `Locale`],
					[/* text */ 't', ` class also supports other codes for
 country (region), such as 3-letter numeric UN M.49 area codes.
 Therefore, the list returned by this method does not contain ALL valid
 codes that can be used to create Locales.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 Note that this method does not return obsolete 2-letter country codes.
 ISO3166-3 codes which designate country codes for those obsolete codes,
 can be retrieved from `],
					[/* reference */ 'r', `#getISOCountries(java.util.Locale.IsoCountryCode)`, `getISOCountries(Locale.IsoCountryCode type)`],
					[/* text */ 't', ` with
 `],
					[/* inline code block */ 'i', `type`],
					[/* text */ 't', `  `],
					[/* reference */ 'r', `java.util.Locale.IsoCountryCode#PART3`, `Locale.IsoCountryCode.PART3`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `An array of ISO 3166 two-letter country codes.`]
			]
		]],
		[/* method */ 'getISOLanguages()', [
			[/* method description */
				[/* text */ 't', `Returns a list of all 2-letter language codes defined in ISO 639.
 Can be used to create Locales.
 `],
				[/* block */ 'b', `Note:`],
				[/* list */ 'l', [
					[/* block */ 'b', `ISO 639 is not a stable standard— some languages' codes have changed.
 The list this function returns includes both the new and the old codes for the
 languages whose codes have changed.
 `],
					[/* block */ 'b', [
						[/* text */ 't', `The `],
						[/* inline code block */ 'i', `Locale`],
						[/* text */ 't', ` class also supports language codes up to
 8 characters in length.  Therefore, the list returned by this method does
 not contain ALL valid codes that can be used to create Locales.
 `]
					]]
				]],
				[/* block */ 'b', '']
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `An array of ISO 639 two-letter language codes.`]
			]
		]],
		[/* method */ 'filterTags(java.util.List,java.util.Collection)', [
			[/* method description */
				[/* text */ 't', `Returns a list of matching languages tags using the basic filtering
 mechanism defined in RFC 4647. This is equivalent to
 `],
				[/* reference */ 'r', `#filterTags(java.util.List,java.util.Collection,java.util.Locale.FilteringMode)`, `filterTags(List, Collection, FilteringMode)`],
				[/* text */ 't', ` when `],
				[/* inline code block */ 'i', `mode`],
				[/* text */ 't', `
 is `],
				[/* reference */ 'r', `java.util.Locale.FilteringMode#AUTOSELECT_FILTERING`, `Locale.FilteringMode.AUTOSELECT_FILTERING`],
				[/* text */ 't', `.

 This filter operation on the given `],
				[/* inline code block */ 'i', `tags`],
				[/* text */ 't', ` ensures that only
 unique matching tag(s) are returned with preserved case. In case of
 duplicate matching tags with the case difference, the first matching
 tag with preserved case is returned.
 For example, "de-ch" is returned out of the duplicate matching tags
 "de-ch" and "de-CH", if "de-ch" is checked first for matching in the
 given `],
				[/* inline code block */ 'i', `tags`],
				[/* text */ 't', `. Note that if the given `],
				[/* inline code block */ 'i', `tags`],
				[/* text */ 't', ` is an unordered
 `],
				[/* inline code block */ 'i', `Collection`],
				[/* text */ 't', `, the returned matching tag out of duplicate tags is
 subject to change, depending on the implementation of the
 `],
				[/* inline code block */ 'i', `Collection`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'priorityList', [/* parameter description */
					[/* text */ 't', `user's Language Priority List in which each language
     tag is sorted in descending order based on priority or weight`]
				]],
				[/* parameter */ 'tags', [/* parameter description */
					[/* text */ 't', `language tags`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `priorityList`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `tags`],
					[/* text */ 't', ` is
     `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a list of matching language tags sorted in descending order
     based on priority or weight, or an empty list if nothing matches.
     The list is modifiable.`]
			]
		]],
		[/* method */ 'filterTags(java.util.List,java.util.Collection,java.util.Locale.FilteringMode)', [
			[/* method description */
				[/* text */ 't', `Returns a list of matching languages tags using the basic filtering
 mechanism defined in RFC 4647.

 This filter operation on the given `],
				[/* inline code block */ 'i', `tags`],
				[/* text */ 't', ` ensures that only
 unique matching tag(s) are returned with preserved case. In case of
 duplicate matching tags with the case difference, the first matching
 tag with preserved case is returned.
 For example, "de-ch" is returned out of the duplicate matching tags
 "de-ch" and "de-CH", if "de-ch" is checked first for matching in the
 given `],
				[/* inline code block */ 'i', `tags`],
				[/* text */ 't', `. Note that if the given `],
				[/* inline code block */ 'i', `tags`],
				[/* text */ 't', ` is an unordered
 `],
				[/* inline code block */ 'i', `Collection`],
				[/* text */ 't', `, the returned matching tag out of duplicate tags is
 subject to change, depending on the implementation of the
 `],
				[/* inline code block */ 'i', `Collection`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'priorityList', [/* parameter description */
					[/* text */ 't', `user's Language Priority List in which each language
     tag is sorted in descending order based on priority or weight`]
				]],
				[/* parameter */ 'tags', [/* parameter description */
					[/* text */ 't', `language tags`]
				]],
				[/* parameter */ 'mode', [/* parameter description */
					[/* text */ 't', `filtering mode`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `priorityList`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `tags`],
					[/* text */ 't', ` is
     `],
					[/* inline code block */ 'i', `null`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if one or more extended language ranges
     are included in the given list when
     `],
					[/* reference */ 'r', `java.util.Locale.FilteringMode#REJECT_EXTENDED_RANGES`, `Locale.FilteringMode.REJECT_EXTENDED_RANGES`],
					[/* text */ 't', ` is specified`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a list of matching language tags sorted in descending order
     based on priority or weight, or an empty list if nothing matches.
     The list is modifiable.`]
			]
		]],
		[/* method */ 'filter(java.util.List,java.util.Collection)', [
			[/* method description */
				[/* text */ 't', `Returns a list of matching `],
				[/* inline code block */ 'i', `Locale`],
				[/* text */ 't', ` instances using the filtering
 mechanism defined in RFC 4647. This is equivalent to
 `],
				[/* reference */ 'r', `#filter(java.util.List,java.util.Collection,java.util.Locale.FilteringMode)`, `filter(List, Collection, FilteringMode)`],
				[/* text */ 't', ` when `],
				[/* inline code block */ 'i', `mode`],
				[/* text */ 't', ` is
 `],
				[/* reference */ 'r', `java.util.Locale.FilteringMode#AUTOSELECT_FILTERING`, `Locale.FilteringMode.AUTOSELECT_FILTERING`],
				[/* text */ 't', `.

 This filter operation on the given `],
				[/* inline code block */ 'i', `locales`],
				[/* text */ 't', ` ensures that only
 unique matching locale(s) are returned.`]
			],
			[/* parameters */
				[/* parameter */ 'priorityList', [/* parameter description */
					[/* text */ 't', `user's Language Priority List in which each language
     tag is sorted in descending order based on priority or weight`]
				]],
				[/* parameter */ 'locales', [/* parameter description */
					[/* text */ 't', ``],
					[/* inline code block */ 'i', `Locale`],
					[/* text */ 't', ` instances used for matching`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `priorityList`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `locales`],
					[/* text */ 't', `
     is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a list of `],
				[/* inline code block */ 'i', `Locale`],
				[/* text */ 't', ` instances for matching language tags
     sorted in descending order based on priority or weight, or an empty
     list if nothing matches. The list is modifiable.`]
			]
		]],
		[/* method */ 'filter(java.util.List,java.util.Collection,java.util.Locale.FilteringMode)', [
			[/* method description */
				[/* text */ 't', `Returns a list of matching `],
				[/* inline code block */ 'i', `Locale`],
				[/* text */ 't', ` instances using the filtering
 mechanism defined in RFC 4647.

 This filter operation on the given `],
				[/* inline code block */ 'i', `locales`],
				[/* text */ 't', ` ensures that only
 unique matching locale(s) are returned.`]
			],
			[/* parameters */
				[/* parameter */ 'priorityList', [/* parameter description */
					[/* text */ 't', `user's Language Priority List in which each language
     tag is sorted in descending order based on priority or weight`]
				]],
				[/* parameter */ 'locales', [/* parameter description */
					[/* text */ 't', ``],
					[/* inline code block */ 'i', `Locale`],
					[/* text */ 't', ` instances used for matching`]
				]],
				[/* parameter */ 'mode', [/* parameter description */
					[/* text */ 't', `filtering mode`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `priorityList`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `locales`],
					[/* text */ 't', `
     is `],
					[/* inline code block */ 'i', `null`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if one or more extended language ranges
     are included in the given list when
     `],
					[/* reference */ 'r', `java.util.Locale.FilteringMode#REJECT_EXTENDED_RANGES`, `Locale.FilteringMode.REJECT_EXTENDED_RANGES`],
					[/* text */ 't', ` is specified`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a list of `],
				[/* inline code block */ 'i', `Locale`],
				[/* text */ 't', ` instances for matching language tags
     sorted in descending order based on priority or weight, or an empty
     list if nothing matches. The list is modifiable.`]
			]
		]],
		[/* method */ 'forLanguageTag(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Returns a locale for the specified IETF BCP 47 language tag string.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If the specified language tag contains any ill-formed subtags,
 the first such subtag and all following subtags are ignored.  Compare
 to `],
					[/* reference */ 'r', `java.util.Locale.Builder#setLanguageTag(java.lang.String)`, `Locale.Builder.setLanguageTag(java.lang.String)`],
					[/* text */ 't', ` which throws an exception
 in this case.

 `]
				]],
				[/* block */ 'b', `conversions`],
				[/* list */ 'l', [
					[/* block */ 'b', `The language code "und" is mapped to language "".

 `],
					[/* block */ 'b', [
						[/* text */ 't', `The language codes "iw", "ji", and "in" are mapped to "he",
 "yi", and "id" respectively. (This is the same canonicalization
 that's done in Locale's constructors.) See
 `],
						[/* text */ 't', `Legacy language codes`],
						[/* text */ 't', `
 for more information.

 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `The portion of a private use subtag prefixed by "lvariant",
 if any, is removed and appended to the variant field in the
 result locale (without case normalization).  If it is then
 empty, the private use subtag is discarded:

 `],
						[/* code block */ 'c', `     Locale loc;
     loc = Locale.forLanguageTag("en-US-x-lvariant-POSIX");
     loc.getVariant(); // returns "POSIX"
     loc.getExtension('x'); // returns null

     loc = Locale.forLanguageTag("de-POSIX-x-URP-lvariant-Abc-Def");
     loc.getVariant(); // returns "POSIX_Abc_Def"
     loc.getExtension('x'); // returns "urp"
 `],
						[/* text */ 't', `

 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `When the languageTag argument contains an extlang subtag,
 the first such subtag is used as the language, and the primary
 language subtag and other extlang subtags are ignored:

 `],
						[/* code block */ 'c', `     Locale.forLanguageTag("ar-aao").getLanguage(); // returns "aao"
     Locale.forLanguageTag("en-abc-def-us").toString(); // returns "abc_US"
 `],
						[/* text */ 't', `

 `]
					]],
					[/* block */ 'b', `Case is normalized except for variant tags, which are left
 unchanged.  Language is normalized to lower case, script to
 title case, country to upper case, and extensions to lower
 case.

 `],
					[/* block */ 'b', [
						[/* text */ 't', `If, after processing, the locale would exactly match either
 ja_JP_JP or th_TH_TH with no extensions, the appropriate
 extensions are added as though the constructor had been called:

 `],
						[/* code block */ 'c', `    Locale.forLanguageTag("ja-JP-x-lvariant-JP").toLanguageTag();
    // returns "ja-JP-u-ca-japanese-x-lvariant-JP"
    Locale.forLanguageTag("th-TH-x-lvariant-TH").toLanguageTag();
    // returns "th-TH-u-nu-thai-x-lvariant-TH"
 `]
					]]
				]],
				[/* text */ 't', `

 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', `This implements the 'Language-Tag' production of BCP47, and
 so supports legacy (regular and irregular, referred to as
 "Type: grandfathered" in BCP47) as well as
 private use language tags.  Stand alone private use tags are
 represented as empty language and extension 'x-whatever',
 and legacy tags are converted to their canonical replacements
 where they exist.

 `],
				[/* block */ 'b', `Legacy tags with canonical replacements are as follows:

 `],
				[/* table */ 'tbl',
					[/* caption */ 'tc'],
					[/* table header */ 'th', [
						[/* table row */ 'tr', [
							[/* table header cell */ 'thc', [
								[/* text */ 't', `legacy tag`]
							]],
							[/* table header cell */ 'thc', [
								[/* text */ 't', `modern replacement`]
							]]
						]]
					]],
					[/* table body */ 'tb', [
						[/* table row */ 'tr', [
							[/* table header cell */ 'thc', [
								[/* text */ 't', `art-lojban`]
							]],
							[/* table cell */ 'tbc', [
								[/* text */ 't', `jbo`]
							]]
						]],
						[/* table row */ 'tr', [
							[/* table header cell */ 'thc', [
								[/* text */ 't', `i-ami`]
							]],
							[/* table cell */ 'tbc', [
								[/* text */ 't', `ami`]
							]]
						]],
						[/* table row */ 'tr', [
							[/* table header cell */ 'thc', [
								[/* text */ 't', `i-bnn`]
							]],
							[/* table cell */ 'tbc', [
								[/* text */ 't', `bnn`]
							]]
						]],
						[/* table row */ 'tr', [
							[/* table header cell */ 'thc', [
								[/* text */ 't', `i-hak`]
							]],
							[/* table cell */ 'tbc', [
								[/* text */ 't', `hak`]
							]]
						]],
						[/* table row */ 'tr', [
							[/* table header cell */ 'thc', [
								[/* text */ 't', `i-klingon`]
							]],
							[/* table cell */ 'tbc', [
								[/* text */ 't', `tlh`]
							]]
						]],
						[/* table row */ 'tr', [
							[/* table header cell */ 'thc', [
								[/* text */ 't', `i-lux`]
							]],
							[/* table cell */ 'tbc', [
								[/* text */ 't', `lb`]
							]]
						]],
						[/* table row */ 'tr', [
							[/* table header cell */ 'thc', [
								[/* text */ 't', `i-navajo`]
							]],
							[/* table cell */ 'tbc', [
								[/* text */ 't', `nv`]
							]]
						]],
						[/* table row */ 'tr', [
							[/* table header cell */ 'thc', [
								[/* text */ 't', `i-pwn`]
							]],
							[/* table cell */ 'tbc', [
								[/* text */ 't', `pwn`]
							]]
						]],
						[/* table row */ 'tr', [
							[/* table header cell */ 'thc', [
								[/* text */ 't', `i-tao`]
							]],
							[/* table cell */ 'tbc', [
								[/* text */ 't', `tao`]
							]]
						]],
						[/* table row */ 'tr', [
							[/* table header cell */ 'thc', [
								[/* text */ 't', `i-tay`]
							]],
							[/* table cell */ 'tbc', [
								[/* text */ 't', `tay`]
							]]
						]],
						[/* table row */ 'tr', [
							[/* table header cell */ 'thc', [
								[/* text */ 't', `i-tsu`]
							]],
							[/* table cell */ 'tbc', [
								[/* text */ 't', `tsu`]
							]]
						]],
						[/* table row */ 'tr', [
							[/* table header cell */ 'thc', [
								[/* text */ 't', `no-bok`]
							]],
							[/* table cell */ 'tbc', [
								[/* text */ 't', `nb`]
							]]
						]],
						[/* table row */ 'tr', [
							[/* table header cell */ 'thc', [
								[/* text */ 't', `no-nyn`]
							]],
							[/* table cell */ 'tbc', [
								[/* text */ 't', `nn`]
							]]
						]],
						[/* table row */ 'tr', [
							[/* table header cell */ 'thc', [
								[/* text */ 't', `sgn-BE-FR`]
							]],
							[/* table cell */ 'tbc', [
								[/* text */ 't', `sfb`]
							]]
						]],
						[/* table row */ 'tr', [
							[/* table header cell */ 'thc', [
								[/* text */ 't', `sgn-BE-NL`]
							]],
							[/* table cell */ 'tbc', [
								[/* text */ 't', `vgt`]
							]]
						]],
						[/* table row */ 'tr', [
							[/* table header cell */ 'thc', [
								[/* text */ 't', `sgn-CH-DE`]
							]],
							[/* table cell */ 'tbc', [
								[/* text */ 't', `sgg`]
							]]
						]],
						[/* table row */ 'tr', [
							[/* table header cell */ 'thc', [
								[/* text */ 't', `zh-guoyu`]
							]],
							[/* table cell */ 'tbc', [
								[/* text */ 't', `cmn`]
							]]
						]],
						[/* table row */ 'tr', [
							[/* table header cell */ 'thc', [
								[/* text */ 't', `zh-hakka`]
							]],
							[/* table cell */ 'tbc', [
								[/* text */ 't', `hak`]
							]]
						]],
						[/* table row */ 'tr', [
							[/* table header cell */ 'thc', [
								[/* text */ 't', `zh-min-nan`]
							]],
							[/* table cell */ 'tbc', [
								[/* text */ 't', `nan`]
							]]
						]],
						[/* table row */ 'tr', [
							[/* table header cell */ 'thc', [
								[/* text */ 't', `zh-xiang`]
							]],
							[/* table cell */ 'tbc', [
								[/* text */ 't', `hsn`]
							]]
						]]
					]],
				],
				[/* text */ 't', `

 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', `Legacy tags with no modern replacement will be
 converted as follows:

 `],
				[/* table */ 'tbl',
					[/* caption */ 'tc'],
					[/* table header */ 'th', [
						[/* table row */ 'tr', [
							[/* table header cell */ 'thc', [
								[/* text */ 't', `legacy tag`]
							]],
							[/* table header cell */ 'thc', [
								[/* text */ 't', `converts to`]
							]]
						]]
					]],
					[/* table body */ 'tb', [
						[/* table row */ 'tr', [
							[/* table header cell */ 'thc', [
								[/* text */ 't', `cel-gaulish`]
							]],
							[/* table cell */ 'tbc', [
								[/* text */ 't', `xtg-x-cel-gaulish`]
							]]
						]],
						[/* table row */ 'tr', [
							[/* table header cell */ 'thc', [
								[/* text */ 't', `en-GB-oed`]
							]],
							[/* table cell */ 'tbc', [
								[/* text */ 't', `en-GB-x-oed`]
							]]
						]],
						[/* table row */ 'tr', [
							[/* table header cell */ 'thc', [
								[/* text */ 't', `i-default`]
							]],
							[/* table cell */ 'tbc', [
								[/* text */ 't', `en-x-i-default`]
							]]
						]],
						[/* table row */ 'tr', [
							[/* table header cell */ 'thc', [
								[/* text */ 't', `i-enochian`]
							]],
							[/* table cell */ 'tbc', [
								[/* text */ 't', `und-x-i-enochian`]
							]]
						]],
						[/* table row */ 'tr', [
							[/* table header cell */ 'thc', [
								[/* text */ 't', `i-mingo`]
							]],
							[/* table cell */ 'tbc', [
								[/* text */ 't', `see-x-i-mingo`]
							]]
						]],
						[/* table row */ 'tr', [
							[/* table header cell */ 'thc', [
								[/* text */ 't', `zh-min`]
							]],
							[/* table cell */ 'tbc', [
								[/* text */ 't', `nan-x-zh-min`]
							]]
						]]
					]],
				],
				[/* text */ 't', `

 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', `For a list of all legacy tags, see the
 IANA Language Subtag Registry (search for "Type: grandfathered").

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Note`],
					[/* text */ 't', `: there is no guarantee that `],
					[/* inline code block */ 'i', `toLanguageTag`],
					[/* text */ 't', `
 and `],
					[/* inline code block */ 'i', `forLanguageTag`],
					[/* text */ 't', ` will round-trip.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'languageTag', [/* parameter description */
					[/* text */ 't', `the language tag`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `languageTag`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The locale that best represents the language tag.`]
			]
		]],
		[/* method */ 'getDefault()', [
			[/* method description */
				[/* text */ 't', `Gets the current value of the default locale for this instance
 of the Java Virtual Machine.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The Java Virtual Machine sets the default locale during startup
 based on the host environment. It is used by many locale-sensitive
 methods if no locale is explicitly specified.
 It can be changed using the
 `],
					[/* reference */ 'r', `#setDefault(java.util.Locale)`, `setDefault`],
					[/* text */ 't', ` method.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the default locale for this instance of the Java Virtual Machine`]
			]
		]],
		[/* method */ 'getDefault(java.util.Locale.Category)', [
			[/* method description */
				[/* text */ 't', `Gets the current value of the default locale for the specified Category
 for this instance of the Java Virtual Machine.
 `],
				[/* block */ 'b', `
 The Java Virtual Machine sets the default locale during startup based
 on the host environment. It is used by many locale-sensitive methods
 if no locale is explicitly specified. It can be changed using the
 setDefault(Locale.Category, Locale) method.`]
			],
			[/* parameters */
				[/* parameter */ 'category', [/* parameter description */
					[/* text */ 't', `the specified category to get the default locale`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if category is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the default locale for the specified Category for this instance
     of the Java Virtual Machine`]
			]
		]],
		[/* method */ 'lookup(java.util.List,java.util.Collection)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `Locale`],
				[/* text */ 't', ` instance for the best-matching language
 tag using the lookup mechanism defined in RFC 4647.`]
			],
			[/* parameters */
				[/* parameter */ 'priorityList', [/* parameter description */
					[/* text */ 't', `user's Language Priority List in which each language
     tag is sorted in descending order based on priority or weight`]
				]],
				[/* parameter */ 'locales', [/* parameter description */
					[/* text */ 't', ``],
					[/* inline code block */ 'i', `Locale`],
					[/* text */ 't', ` instances used for matching`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `priorityList`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `tags`],
					[/* text */ 't', ` is
     `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the best matching `],
				[/* inline code block */ 'i', `Locale`],
				[/* text */ 't', ` instance chosen based on
     priority or weight, or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if nothing matches.`]
			]
		]],
		[/* method */ 'getAvailableLocales()', [
			[/* method description */
				[/* text */ 't', `Returns an array of all installed locales.
 The returned array represents the union of locales supported
 by the Java runtime environment and by installed
 `],
				[/* reference */ 'r', `java.util.spi.LocaleServiceProvider`, `LocaleServiceProvider`],
				[/* text */ 't', `
 implementations.  It must contain at least a `],
				[/* inline code block */ 'i', `Locale`],
				[/* text */ 't', `
 instance equal to `],
				[/* text */ 't', `Locale.US`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `An array of installed locales.`]
			]
		]],
		[/* method */ 'getISOCountries(java.util.Locale.IsoCountryCode)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `Set`],
				[/* text */ 't', ` of ISO3166 country codes for the specified type.`]
			],
			[/* parameters */
				[/* parameter */ 'type', [/* parameter description */
					[/* text */ 't', ``],
					[/* reference */ 'r', `enum class in java.util.Locale.IsoCountryCode`, `Locale.IsoCountryCode`],
					[/* text */ 't', ` specified ISO code type.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if type is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Set`],
				[/* text */ 't', ` of ISO country codes for the specified type.`]
			]
		]],
		[/* method */ 'setDefault(java.util.Locale.Category,java.util.Locale)', [
			[/* method description */
				[/* text */ 't', `Sets the default locale for the specified Category for this instance
 of the Java Virtual Machine. This does not affect the host locale.
 `],
				[/* block */ 'b', `
 If there is a security manager, its checkPermission method is called
 with a PropertyPermission("user.language", "write") permission before
 the default locale is changed.
 `],
				[/* block */ 'b', `
 The Java Virtual Machine sets the default locale during startup based
 on the host environment. It is used by many locale-sensitive methods
 if no locale is explicitly specified.
 `],
				[/* block */ 'b', `
 Since changing the default locale may affect many different areas of
 functionality, this method should only be used if the caller is
 prepared to reinitialize locale-sensitive code running within the
 same Java Virtual Machine.`]
			],
			[/* parameters */
				[/* parameter */ 'category', [/* parameter description */
					[/* text */ 't', `the specified category to set the default locale`]
				]],
				[/* parameter */ 'newLocale', [/* parameter description */
					[/* text */ 't', `the new default locale`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if a security manager exists and its
     checkPermission method doesn't allow the operation.`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if category and/or newLocale is null`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'setDefault(java.util.Locale)', [
			[/* method description */
				[/* text */ 't', `Sets the default locale for this instance of the Java Virtual Machine.
 This does not affect the host locale.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 If there is a security manager, its `],
					[/* inline code block */ 'i', `checkPermission`],
					[/* text */ 't', `
 method is called with a `],
					[/* inline code block */ 'i', `PropertyPermission("user.language", "write")`],
					[/* text */ 't', `
 permission before the default locale is changed.
 `]
				]],
				[/* block */ 'b', `
 The Java Virtual Machine sets the default locale during startup
 based on the host environment. It is used by many locale-sensitive
 methods if no locale is explicitly specified.
 `],
				[/* block */ 'b', `
 Since changing the default locale may affect many different areas
 of functionality, this method should only be used if the caller
 is prepared to reinitialize locale-sensitive code running
 within the same Java Virtual Machine.
 `],
				[/* block */ 'b', `
 By setting the default locale with this method, all of the default
 locales for each Category are also set to the specified default locale.`]
			],
			[/* parameters */
				[/* parameter */ 'newLocale', [/* parameter description */
					[/* text */ 't', `the new default locale`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if a security manager exists and its
        `],
					[/* inline code block */ 'i', `checkPermission`],
					[/* text */ 't', ` method doesn't allow the operation.`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `newLocale`],
					[/* text */ 't', ` is null`]
				]]
			],
			/* return */ UDF
		]]
	],
]);
