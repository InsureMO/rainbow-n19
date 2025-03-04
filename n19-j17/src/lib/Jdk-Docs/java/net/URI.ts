import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.net.URI', [
	[/* class description */
		[/* text */ 't', `Represents a Uniform Resource Identifier (URI) reference.

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` Aside from some minor deviations noted below, an instance of this
 class represents a URI reference as defined by
 `],
			[/* external link */ 'a', `http://www.ietf.org/rfc/rfc2396.txt`, `RFC 2396: Uniform Resource Identifiers (URI): Generic Syntax`],
			[/* text */ 't', `, amended by `],
			[/* external link */ 'a', `http://www.ietf.org/rfc/rfc2732.txt`, `RFC 2732: Format for Literal IPv6 Addresses in URLs`],
			[/* text */ 't', `. The Literal IPv6 address format
 also supports scope_ids. The syntax and usage of scope_ids is described
 `],
			[/* reference */ 'r', `.Inet6Address#scoped`],
			[/* text */ 't', `.
 This class provides constructors for creating URI instances from
 their components or by parsing their string forms, methods for accessing the
 various components of an instance, and methods for normalizing, resolving,
 and relativizing URI instances.  Instances of this class are immutable.


 `]
		]],
		[/* block */ 'b', ` URI syntax and components `],
		[/* text */ 't', `

 At the highest level a URI reference (hereinafter simply "URI") in string
 form has the syntax

 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 [`],
			[/* text */ 't', `scheme`],
			[/* inline code block */ 'i', `:`],
			[/* text */ 't', `]`],
			[/* text */ 't', `scheme-specific-part`],
			[/* text */ 't', `[`],
			[/* inline code block */ 'i', `#`],
			[/* text */ 't', `fragment`],
			[/* text */ 't', `]
 `]
		]],
		[/* text */ 't', `

 where square brackets [...] delineate optional components and the characters
 `],
		[/* inline code block */ 'i', `:`],
		[/* text */ 't', ` and `],
		[/* inline code block */ 'i', `#`],
		[/* text */ 't', ` stand for themselves.

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` An `],
			[/* text */ 't', `absolute`],
			[/* text */ 't', ` URI specifies a scheme; a URI that is not absolute is
 said to be `],
			[/* text */ 't', `relative`],
			[/* text */ 't', `.  URIs are also classified according to whether
 they are `],
			[/* text */ 't', `opaque`],
			[/* text */ 't', ` or `],
			[/* text */ 't', `hierarchical`],
			[/* text */ 't', `.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` An `],
			[/* text */ 't', `opaque`],
			[/* text */ 't', ` URI is an absolute URI whose scheme-specific part does
 not begin with a slash character (`],
			[/* inline code block */ 'i', `'/'`],
			[/* text */ 't', `).  Opaque URIs are not
 subject to further parsing.  Some examples of opaque URIs are:

 `]
		]],
		[/* block */ 'b', [
			[/* list */ 'l', [
				[/* block */ 'b', [
					[/* inline code block */ 'i', `mailto:java-net@www.example.com`]
				]],
				[/* block */ 'b', [
					[/* inline code block */ 'i', `news:comp.lang.java`]
				]],
				[/* block */ 'b', [
					[/* inline code block */ 'i', `urn:isbn:096139210x`]
				]]
			]]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', ` A `],
			[/* text */ 't', `hierarchical`],
			[/* text */ 't', ` URI is either an absolute URI whose
 scheme-specific part begins with a slash character, or a relative URI, that
 is, a URI that does not specify a scheme.  Some examples of hierarchical
 URIs are:

 `]
		]],
		[/* block */ 'b', [
			[/* inline code block */ 'i', `http://example.com/languages/java/`],
			[/* new line */ 'n'],
			[/* inline code block */ 'i', `sample/a/index.html#28`],
			[/* new line */ 'n'],
			[/* inline code block */ 'i', `../../demo/b/index.html`],
			[/* new line */ 'n'],
			[/* inline code block */ 'i', `file:///~/calendar`]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', ` A hierarchical URI is subject to further parsing according to the syntax

 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 [`],
			[/* text */ 't', `scheme`],
			[/* inline code block */ 'i', `:`],
			[/* text */ 't', `][`],
			[/* inline code block */ 'i', `//`],
			[/* text */ 't', `authority`],
			[/* text */ 't', `][`],
			[/* text */ 't', `path`],
			[/* text */ 't', `][`],
			[/* inline code block */ 'i', `?`],
			[/* text */ 't', `query`],
			[/* text */ 't', `][`],
			[/* inline code block */ 'i', `#`],
			[/* text */ 't', `fragment`],
			[/* text */ 't', `]
 `]
		]],
		[/* text */ 't', `

 where the characters `],
		[/* inline code block */ 'i', `:`],
		[/* text */ 't', `, `],
		[/* inline code block */ 'i', `/`],
		[/* text */ 't', `,
 `],
		[/* inline code block */ 'i', `?`],
		[/* text */ 't', `, and `],
		[/* inline code block */ 'i', `#`],
		[/* text */ 't', ` stand for themselves.  The
 scheme-specific part of a hierarchical URI consists of the characters
 between the scheme and fragment components.

 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', ` The authority component of a hierarchical URI is, if specified, either
 `],
			[/* text */ 't', `server-based`],
			[/* text */ 't', ` or `],
			[/* text */ 't', `registry-based`],
			[/* text */ 't', `.  A server-based authority
 parses according to the familiar syntax

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 [`],
			[/* text */ 't', `user-info`],
			[/* inline code block */ 'i', `@`],
			[/* text */ 't', `]`],
			[/* text */ 't', `host`],
			[/* text */ 't', `[`],
			[/* inline code block */ 'i', `:`],
			[/* text */ 't', `port`],
			[/* text */ 't', `]
 `]
		]],
		[/* text */ 't', `

 where the characters `],
		[/* inline code block */ 'i', `@`],
		[/* text */ 't', ` and `],
		[/* inline code block */ 'i', `:`],
		[/* text */ 't', ` stand for
 themselves.  Nearly all URI schemes currently in use are server-based.  An
 authority component that does not parse in this way is considered to be
 registry-based.

 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', ` The path component of a hierarchical URI is itself said to be absolute
 if it begins with a slash character (`],
			[/* inline code block */ 'i', `'/'`],
			[/* text */ 't', `); otherwise it is
 relative.  The path of a hierarchical URI that is either absolute or
 specifies an authority is always absolute.

 `]
		]],
		[/* block */ 'b', ` All told, then, a URI instance has the following nine components:

 `],
		[/* table */ 'tbl',
			[/* caption */ 'tc'],
			[/* table header */ 'th', [
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `Component`]
					]],
					[/* table header cell */ 'thc', [
						[/* text */ 't', `Type`]
					]]
				]]
			]],
			[/* table body */ 'tb', [
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `scheme`]
					]],
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `String`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `scheme-specific-part`]
					]],
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `String`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `authority`]
					]],
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `String`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `user-info`]
					]],
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `String`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `host`]
					]],
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `String`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `port`]
					]],
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `int`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `path`]
					]],
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `String`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `query`]
					]],
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `String`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `fragment`]
					]],
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `String`]
					]]
				]]
			]],
		],
		[/* text */ 't', `

 In a given instance any particular component is either `],
		[/* text */ 't', `undefined`],
		[/* text */ 't', ` or
 `],
		[/* text */ 't', `defined`],
		[/* text */ 't', ` with a distinct value.  Undefined string components are
 represented by `],
		[/* inline code block */ 'i', `null`],
		[/* text */ 't', `, while undefined integer components are
 represented by `],
		[/* inline code block */ 'i', `-1`],
		[/* text */ 't', `.  A string component may be defined to have the
 empty string as its value; this is not equivalent to that component being
 undefined.

 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', ` Whether a particular component is or is not defined in an instance
 depends upon the type of the URI being represented.  An absolute URI has a
 scheme component.  An opaque URI has a scheme, a scheme-specific part, and
 possibly a fragment, but has no other components.  A hierarchical URI always
 has a path (though it may be empty) and a scheme-specific-part (which at
 least contains the path), and may have any of the other components.  If the
 authority component is present and is server-based then the host component
 will be defined and the user-information and port components may be defined.


 `],
		[/* block */ 'b', ` Operations on URI instances `],
		[/* text */ 't', `

 The key operations supported by this class are those of
 `],
		[/* text */ 't', `normalization`],
		[/* text */ 't', `, `],
		[/* text */ 't', `resolution`],
		[/* text */ 't', `, and `],
		[/* text */ 't', `relativization`],
		[/* text */ 't', `.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `Normalization`],
			[/* text */ 't', ` is the process of removing unnecessary `],
			[/* inline code block */ 'i', `"."`],
			[/* text */ 't', `
 and `],
			[/* inline code block */ 'i', `".."`],
			[/* text */ 't', ` segments from the path component of a hierarchical URI.
 Each `],
			[/* inline code block */ 'i', `"."`],
			[/* text */ 't', ` segment is simply removed.  A `],
			[/* inline code block */ 'i', `".."`],
			[/* text */ 't', ` segment is
 removed only if it is preceded by a non-`],
			[/* inline code block */ 'i', `".."`],
			[/* text */ 't', ` segment.
 Normalization has no effect upon opaque URIs.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Resolution`],
			[/* text */ 't', ` is the process of resolving one URI against another,
 `],
			[/* text */ 't', `base`],
			[/* text */ 't', ` URI.  The resulting URI is constructed from components of both
 URIs in the manner specified by RFC 2396, taking components from the
 base URI for those not specified in the original.  For hierarchical URIs,
 the path of the original is resolved against the path of the base and then
 normalized.  The result, for example, of resolving

 `]
		]],
		[/* block */ 'b', [
			[/* inline code block */ 'i', `sample/a/index.html#28`],
			[/* text */ 't', `
             
     (1)
 `]
		]],
		[/* text */ 't', `

 against the base URI `],
		[/* inline code block */ 'i', `http://example.com/languages/java/`],
		[/* text */ 't', ` is the result
 URI

 `],
		[/* block */ 'b', [
			[/* inline code block */ 'i', `http://example.com/languages/java/sample/a/index.html#28`]
		]],
		[/* text */ 't', `

 Resolving the relative URI

 `],
		[/* block */ 'b', [
			[/* inline code block */ 'i', `../../demo/b/index.html`],
			[/* text */ 't', `    (2)
 `]
		]],
		[/* text */ 't', `

 against this result yields, in turn,

 `],
		[/* block */ 'b', [
			[/* inline code block */ 'i', `http://example.com/languages/java/demo/b/index.html`]
		]],
		[/* text */ 't', `

 Resolution of both absolute and relative URIs, and of both absolute and
 relative paths in the case of hierarchical URIs, is supported.  Resolving
 the URI `],
		[/* inline code block */ 'i', `file:///~calendar`],
		[/* text */ 't', ` against any other URI simply yields the
 original URI, since it is absolute.  Resolving the relative URI (2) above
 against the relative base URI (1) yields the normalized, but still relative,
 URI

 `],
		[/* block */ 'b', [
			[/* inline code block */ 'i', `demo/b/index.html`]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `Relativization`],
			[/* text */ 't', `, finally, is the inverse of resolution: For any
 two normalized URIs `],
			[/* text */ 't', `u`],
			[/* text */ 't', ` and `],
			[/* text */ 't', `v`],
			[/* text */ 't', `,

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `u`],
			[/* inline code block */ 'i', `.relativize(`],
			[/* text */ 't', `u`],
			[/* inline code block */ 'i', `.resolve(`],
			[/* text */ 't', `v`],
			[/* inline code block */ 'i', `)).equals(`],
			[/* text */ 't', `v`],
			[/* inline code block */ 'i', `)`],
			[/* text */ 't', `  and`],
			[/* new line */ 'n'],
			[/* text */ 't', `u`],
			[/* inline code block */ 'i', `.resolve(`],
			[/* text */ 't', `u`],
			[/* inline code block */ 'i', `.relativize(`],
			[/* text */ 't', `v`],
			[/* inline code block */ 'i', `)).equals(`],
			[/* text */ 't', `v`],
			[/* inline code block */ 'i', `)`],
			[/* text */ 't', `  .`],
			[/* new line */ 'n']
		]],
		[/* text */ 't', `

 This operation is often useful when constructing a document containing URIs
 that must be made relative to the base URI of the document wherever
 possible.  For example, relativizing the URI

 `],
		[/* block */ 'b', [
			[/* inline code block */ 'i', `http://example.com/languages/java/sample/a/index.html#28`]
		]],
		[/* text */ 't', `

 against the base URI

 `],
		[/* block */ 'b', [
			[/* inline code block */ 'i', `http://example.com/languages/java/`]
		]],
		[/* text */ 't', `

 yields the relative URI `],
		[/* inline code block */ 'i', `sample/a/index.html#28`],
		[/* text */ 't', `.


 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', ` Character categories `],
		[/* text */ 't', `

 RFC 2396 specifies precisely which characters are permitted in the
 various components of a URI reference.  The following categories, most of
 which are taken from that specification, are used below to describe these
 constraints:

 `],
		[/* table */ 'tbl',
			[/* caption */ 'tc'],
			[/* table header */ 'th', [
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `Category`]
					]],
					[/* table header cell */ 'thc', [
						[/* text */ 't', `Description`]
					]]
				]]
			]],
			[/* table body */ 'tb', [
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `alpha`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `The US-ASCII alphabetic characters,
        `],
						[/* inline code block */ 'i', `'A'`],
						[/* text */ 't', ` through `],
						[/* inline code block */ 'i', `'Z'`],
						[/* text */ 't', `
        and `],
						[/* inline code block */ 'i', `'a'`],
						[/* text */ 't', ` through `],
						[/* inline code block */ 'i', `'z'`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `digit`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `The US-ASCII decimal digit characters,
       `],
						[/* inline code block */ 'i', `'0'`],
						[/* text */ 't', ` through `],
						[/* inline code block */ 'i', `'9'`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `alphanum`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `All `],
						[/* text */ 't', `alpha`],
						[/* text */ 't', ` and `],
						[/* text */ 't', `digit`],
						[/* text */ 't', ` characters`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `unreserved`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `All `],
						[/* text */ 't', `alphanum`],
						[/* text */ 't', ` characters together with those in the string
        `],
						[/* inline code block */ 'i', `"_-!.~'()*"`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `punct`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `The characters in the string `],
						[/* inline code block */ 'i', `",;:$&+="`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `reserved`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `All `],
						[/* text */ 't', `punct`],
						[/* text */ 't', ` characters together with those in the string
        `],
						[/* inline code block */ 'i', `"?/[]@"`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `escaped`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `Escaped octets, that is, triplets consisting of the percent
           character (`],
						[/* inline code block */ 'i', `'%'`],
						[/* text */ 't', `) followed by two hexadecimal digits
           (`],
						[/* inline code block */ 'i', `'0'`],
						[/* text */ 't', `-`],
						[/* inline code block */ 'i', `'9'`],
						[/* text */ 't', `, `],
						[/* inline code block */ 'i', `'A'`],
						[/* text */ 't', `-`],
						[/* inline code block */ 'i', `'F'`],
						[/* text */ 't', `, and
           `],
						[/* inline code block */ 'i', `'a'`],
						[/* text */ 't', `-`],
						[/* inline code block */ 'i', `'f'`],
						[/* text */ 't', `)`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `other`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `The Unicode characters that are not in the US-ASCII character set,
           are not control characters (according to the `],
						[/* reference */ 'r', `java.Character#isISOControl(int)`],
						[/* text */ 't', `
           method), and are not space characters (according to the `],
						[/* reference */ 'r', `java.Character#isSpaceChar(int)`],
						[/* text */ 't', `
           method)  `],
						[/* text */ 't', `Deviation from RFC 2396`]
					]]
				]]
			]],
		],
		[/* block */ 'b', [
			[/* text */ 't', ``],
			[/* text */ 't', ` The set of all legal URI characters consists of
 the `],
			[/* text */ 't', `unreserved`],
			[/* text */ 't', `, `],
			[/* text */ 't', `reserved`],
			[/* text */ 't', `, `],
			[/* text */ 't', `escaped`],
			[/* text */ 't', `, and `],
			[/* text */ 't', `other`],
			[/* text */ 't', `
 characters.


 `]
		]],
		[/* block */ 'b', ` Escaped octets, quotation, encoding, and decoding `],
		[/* text */ 't', `

 RFC 2396 allows escaped octets to appear in the user-info, path, query, and
 fragment components.  Escaping serves two purposes in URIs:

 `],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* block */ 'b', [
					[/* text */ 't', ` To `],
					[/* text */ 't', `encode`],
					[/* text */ 't', ` non-US-ASCII characters when a URI is required to
   conform strictly to RFC 2396 by not containing any `],
					[/* text */ 't', `other`],
					[/* text */ 't', `
   characters.  `]
				]]
			]],
			[/* block */ 'b', [
				[/* block */ 'b', [
					[/* text */ 't', ` To `],
					[/* text */ 't', `quote`],
					[/* text */ 't', ` characters that are otherwise illegal in a
   component.  The user-info, path, query, and fragment components differ
   slightly in terms of which characters are considered legal and illegal.
   `]
				]]
			]]
		]],
		[/* text */ 't', `

 These purposes are served in this class by three related operations:

 `],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* block */ 'b', [
					[/* text */ 't', ``],
					[/* text */ 't', ` A character is `],
					[/* text */ 't', `encoded`],
					[/* text */ 't', ` by replacing it
   with the sequence of escaped octets that represent that character in the
   UTF-8 character set.  The Euro currency symbol (`],
					[/* inline code block */ 'i', `'\\u20AC'`],
					[/* text */ 't', `),
   for example, is encoded as `],
					[/* inline code block */ 'i', `"%E2%82%AC"`],
					[/* text */ 't', `.  `],
					[/* text */ 't', `Deviation from
   RFC 2396`]
				]]
			]],
			[/* block */ 'b', [
				[/* block */ 'b', [
					[/* text */ 't', ``],
					[/* text */ 't', ` An illegal character is `],
					[/* text */ 't', `quoted`],
					[/* text */ 't', ` simply by
   encoding it.  The space character, for example, is quoted by replacing it
   with `],
					[/* inline code block */ 'i', `"%20"`],
					[/* text */ 't', `.  UTF-8 contains US-ASCII, hence for US-ASCII
   characters this transformation has exactly the effect required by
   RFC 2396. `]
				]]
			]],
			[/* block */ 'b', [
				[/* block */ 'b', [
					[/* text */ 't', ``],
					[/* text */ 't', `
   A sequence of escaped octets is `],
					[/* text */ 't', `decoded`],
					[/* text */ 't', ` by
   replacing it with the sequence of characters that it represents in the
   UTF-8 character set.  UTF-8 contains US-ASCII, hence decoding has the
   effect of de-quoting any quoted US-ASCII characters as well as that of
   decoding any encoded non-US-ASCII characters.  If a `],
					[/* reference */ 'r', `java.charset.CharsetDecoder#ce`],
					[/* text */ 't', ` occurs
   when decoding the escaped octets then the erroneous octets are replaced by
   `],
					[/* inline code block */ 'i', `'\\uFFFD'`],
					[/* text */ 't', `, the Unicode replacement character.  `]
				]]
			]]
		]],
		[/* text */ 't', `

 These operations are exposed in the constructors and methods of this class
 as follows:

 `],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* block */ 'b', [
					[/* text */ 't', ` The `],
					[/* reference */ 'r', `#%3Cinit%3E(java.lang.String)`, `single-argument constructor`],
					[/* text */ 't', ` requires any illegal characters in its argument to be
   quoted and preserves any escaped octets and `],
					[/* text */ 't', `other`],
					[/* text */ 't', ` characters that
   are present.  `]
				]]
			]],
			[/* block */ 'b', [
				[/* block */ 'b', [
					[/* text */ 't', ` The `],
					[/* reference */ 'r', `#%3Cinit%3E(java.lang.String,java.lang.String,java.lang.String,int,java.lang.String,java.lang.String,java.lang.String)`, `multi-argument constructors`],
					[/* text */ 't', ` quote illegal characters as
   required by the components in which they appear.  The percent character
   (`],
					[/* inline code block */ 'i', `'%'`],
					[/* text */ 't', `) is always quoted by these constructors.  Any `],
					[/* text */ 't', `other`],
					[/* text */ 't', `
   characters are preserved.  `]
				]]
			]],
			[/* block */ 'b', [
				[/* block */ 'b', [
					[/* text */ 't', ` The `],
					[/* reference */ 'r', `#getRawUserInfo()`, `getRawUserInfo`],
					[/* text */ 't', `, `],
					[/* reference */ 'r', `#getRawPath()`, `getRawPath`],
					[/* text */ 't', `, `],
					[/* reference */ 'r', `#getRawQuery()`, `getRawQuery`],
					[/* text */ 't', `, `],
					[/* reference */ 'r', `#getRawFragment()`, `getRawFragment`],
					[/* text */ 't', `, `],
					[/* reference */ 'r', `#getRawAuthority()`, `getRawAuthority`],
					[/* text */ 't', `, and `],
					[/* reference */ 'r', `#getRawSchemeSpecificPart()`, `getRawSchemeSpecificPart`],
					[/* text */ 't', ` methods return the
   values of their corresponding components in raw form, without interpreting
   any escaped octets.  The strings returned by these methods may contain
   both escaped octets and `],
					[/* text */ 't', `other`],
					[/* text */ 't', ` characters, and will not contain any
   illegal characters.  `]
				]]
			]],
			[/* block */ 'b', [
				[/* block */ 'b', [
					[/* text */ 't', ` The `],
					[/* reference */ 'r', `#getUserInfo()`, `getUserInfo`],
					[/* text */ 't', `, `],
					[/* reference */ 'r', `#getPath()`, `getPath`],
					[/* text */ 't', `, `],
					[/* reference */ 'r', `#getQuery()`, `getQuery`],
					[/* text */ 't', `, `],
					[/* reference */ 'r', `#getFragment()`, `getFragment`],
					[/* text */ 't', `, `],
					[/* reference */ 'r', `#getAuthority()`, `getAuthority`],
					[/* text */ 't', `, and `],
					[/* reference */ 'r', `#getSchemeSpecificPart()`, `getSchemeSpecificPart`],
					[/* text */ 't', ` methods decode any escaped
   octets in their corresponding components.  The strings returned by these
   methods may contain both `],
					[/* text */ 't', `other`],
					[/* text */ 't', ` characters and illegal characters,
   and will not contain any escaped octets.  `]
				]]
			]],
			[/* block */ 'b', [
				[/* block */ 'b', [
					[/* text */ 't', ` The `],
					[/* reference */ 'r', `#toString()`, `toString`],
					[/* text */ 't', ` method returns a URI string with
   all necessary quotation but which may contain `],
					[/* text */ 't', `other`],
					[/* text */ 't', ` characters.
   `]
				]]
			]],
			[/* block */ 'b', [
				[/* block */ 'b', [
					[/* text */ 't', ` The `],
					[/* reference */ 'r', `#toASCIIString()`, `toASCIIString`],
					[/* text */ 't', ` method returns a fully
   quoted and encoded URI string that does not contain any `],
					[/* text */ 't', `other`],
					[/* text */ 't', `
   characters.  `]
				]]
			]]
		]],
		[/* block */ 'b', ` Identities `],
		[/* text */ 't', `

 For any URI `],
		[/* text */ 't', `u`],
		[/* text */ 't', `, it is always the case that

 `],
		[/* block */ 'b', [
			[/* inline code block */ 'i', `new URI(`],
			[/* text */ 't', `u`],
			[/* inline code block */ 'i', `.toString()).equals(`],
			[/* text */ 't', `u`],
			[/* inline code block */ 'i', `)`],
			[/* text */ 't', ` .
 `]
		]],
		[/* text */ 't', `

 For any URI `],
		[/* text */ 't', `u`],
		[/* text */ 't', ` that does not contain redundant syntax such as two
 slashes before an empty authority (as in `],
		[/* inline code block */ 'i', `file:///tmp/`],
		[/* text */ 't', ` ) or a
 colon following a host name but no port (as in
 `],
		[/* inline code block */ 'i', `http://www.example.com:`],
		[/* text */ 't', ` ), and that does not encode characters
 except those that must be quoted, the following identities also hold:
 `],
		[/* code block */ 'c', [
			[/* text */ 't', `     new URI(`],
			[/* text */ 't', `u`],
			[/* text */ 't', `.getScheme(),
             `],
			[/* text */ 't', `u`],
			[/* text */ 't', `.getSchemeSpecificPart(),
             `],
			[/* text */ 't', `u`],
			[/* text */ 't', `.getFragment())
     .equals(`],
			[/* text */ 't', `u`],
			[/* text */ 't', `)`]
		]],
		[/* text */ 't', `
 in all cases,
 `],
		[/* code block */ 'c', [
			[/* text */ 't', `     new URI(`],
			[/* text */ 't', `u`],
			[/* text */ 't', `.getScheme(),
             `],
			[/* text */ 't', `u`],
			[/* text */ 't', `.getAuthority(),
             `],
			[/* text */ 't', `u`],
			[/* text */ 't', `.getPath(), `],
			[/* text */ 't', `u`],
			[/* text */ 't', `.getQuery(),
             `],
			[/* text */ 't', `u`],
			[/* text */ 't', `.getFragment())
     .equals(`],
			[/* text */ 't', `u`],
			[/* text */ 't', `)`]
		]],
		[/* text */ 't', `
 if `],
		[/* text */ 't', `u`],
		[/* text */ 't', ` is hierarchical, and
 `],
		[/* code block */ 'c', [
			[/* text */ 't', `     new URI(`],
			[/* text */ 't', `u`],
			[/* text */ 't', `.getScheme(),
             `],
			[/* text */ 't', `u`],
			[/* text */ 't', `.getUserInfo(), `],
			[/* text */ 't', `u`],
			[/* text */ 't', `.getHost(), `],
			[/* text */ 't', `u`],
			[/* text */ 't', `.getPort(),
             `],
			[/* text */ 't', `u`],
			[/* text */ 't', `.getPath(), `],
			[/* text */ 't', `u`],
			[/* text */ 't', `.getQuery(),
             `],
			[/* text */ 't', `u`],
			[/* text */ 't', `.getFragment())
     .equals(`],
			[/* text */ 't', `u`],
			[/* text */ 't', `)`]
		]],
		[/* text */ 't', `
 if `],
		[/* text */ 't', `u`],
		[/* text */ 't', ` is hierarchical and has either no authority or a server-based
 authority.


 `],
		[/* block */ 'b', ` URIs, URLs, and URNs `],
		[/* text */ 't', `

 A URI is a uniform resource `],
		[/* text */ 't', `identifier`],
		[/* text */ 't', ` while a URL is a uniform
 resource `],
		[/* text */ 't', `locator`],
		[/* text */ 't', `.  Hence every URL is a URI, abstractly speaking, but
 not every URI is a URL.  This is because there is another subcategory of
 URIs, uniform resource `],
		[/* text */ 't', `names`],
		[/* text */ 't', ` (URNs), which name resources but do not
 specify how to locate them.  The `],
		[/* inline code block */ 'i', `mailto`],
		[/* text */ 't', `, `],
		[/* inline code block */ 'i', `news`],
		[/* text */ 't', `, and
 `],
		[/* inline code block */ 'i', `isbn`],
		[/* text */ 't', ` URIs shown above are examples of URNs.

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` The conceptual distinction between URIs and URLs is reflected in the
 differences between this class and the `],
			[/* reference */ 'r', `java.net.URL`],
			[/* text */ 't', ` class.

 `]
		]],
		[/* block */ 'b', ` An instance of this class represents a URI reference in the syntactic
 sense defined by RFC 2396.  A URI may be either absolute or relative.
 A URI string is parsed according to the generic syntax without regard to the
 scheme, if any, that it specifies.  No lookup of the host, if any, is
 performed, and no scheme-dependent stream handler is constructed.  Equality,
 hashing, and comparison are defined strictly in terms of the character
 content of the instance.  In other words, a URI instance is little more than
 a structured string that supports the syntactic, scheme-independent
 operations of comparison, normalization, resolution, and relativization.

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` An instance of the `],
			[/* reference */ 'r', `java.net.URL`],
			[/* text */ 't', ` class, by contrast, represents the
 syntactic components of a URL together with some of the information required
 to access the resource that it describes.  A URL must be absolute, that is,
 it must always specify a scheme.  A URL string is parsed according to its
 scheme.  A stream handler is always established for a URL, and in fact it is
 impossible to create a URL instance for a scheme for which no handler is
 available.  Equality and hashing depend upon both the scheme and the
 Internet address of the host, if any; comparison is not defined.  In other
 words, a URL is a structured string that supports the syntactic operation of
 resolution as well as the network I/O operations of looking up the host and
 opening a connection to the specified resource.`]
		]]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>(java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a URI by parsing the given string.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This constructor parses the given string exactly as specified by the
 grammar in `],
					[/* external link */ 'a', `http://www.ietf.org/rfc/rfc2396.txt`, `RFC 2396`],
					[/* text */ 't', `,
 Appendix A, `],
					[/* text */ 't', `except for the following deviations:`]
				]],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* block */ 'b', [
							[/* text */ 't', ` An empty authority component is permitted as long as it is
   followed by a non-empty path, a query component, or a fragment
   component.  This allows the parsing of URIs such as
   `],
							[/* inline code block */ 'i', `"file:///foo/bar"`],
							[/* text */ 't', `, which seems to be the intent of
   RFC 2396 although the grammar does not permit it.  If the
   authority component is empty then the user-information, host, and port
   components are undefined. `]
						]]
					]],
					[/* block */ 'b', [
						[/* block */ 'b', [
							[/* text */ 't', ` Empty relative paths are permitted; this seems to be the
   intent of RFC 2396 although the grammar does not permit it.  The
   primary consequence of this deviation is that a standalone fragment
   such as `],
							[/* inline code block */ 'i', `"#foo"`],
							[/* text */ 't', ` parses as a relative URI with an empty path
   and the given fragment, and can be usefully `],
							[/* text */ 't', `resolved`],
							[/* text */ 't', ` against a base URI.

   `]
						]]
					]],
					[/* block */ 'b', [
						[/* block */ 'b', [
							[/* text */ 't', ` IPv4 addresses in host components are parsed rigorously, as
   specified by `],
							[/* external link */ 'a', `http://www.ietf.org/rfc/rfc2732.txt`, `RFC 2732`],
							[/* text */ 't', `: Each
   element of a dotted-quad address must contain no more than three
   decimal digits.  Each element is further constrained to have a value
   no greater than 255. `]
						]]
					]],
					[/* block */ 'b', [
						[/* block */ 'b', [
							[/* text */ 't', ` Hostnames in host components that comprise only a single
   domain label are permitted to start with an `],
							[/* text */ 't', `alphanum`],
							[/* text */ 't', `
   character. This seems to be the intent of `],
							[/* external link */ 'a', `http://www.ietf.org/rfc/rfc2396.txt`, `RFC 2396`],
							[/* text */ 't', `
   section 3.2.2 although the grammar does not permit it. The
   consequence of this deviation is that the authority component of a
   hierarchical URI such as `],
							[/* inline code block */ 'i', `s://123`],
							[/* text */ 't', `, will parse as a server-based
   authority. `]
						]]
					]],
					[/* block */ 'b', [
						[/* block */ 'b', [
							[/* text */ 't', ` IPv6 addresses are permitted for the host component.  An IPv6
   address must be enclosed in square brackets (`],
							[/* inline code block */ 'i', `'['`],
							[/* text */ 't', ` and
   `],
							[/* inline code block */ 'i', `']'`],
							[/* text */ 't', `) as specified by `],
							[/* external link */ 'a', `http://www.ietf.org/rfc/rfc2732.txt`, `RFC 2732`],
							[/* text */ 't', `.  The
   IPv6 address itself must parse according to `],
							[/* external link */ 'a', `http://www.ietf.org/rfc/rfc2373.txt`, `RFC 2373`],
							[/* text */ 't', `.  IPv6
   addresses are further constrained to describe no more than sixteen
   bytes of address information, a constraint implicit in RFC 2373
   but not expressible in the grammar. `]
						]]
					]],
					[/* block */ 'b', [
						[/* block */ 'b', [
							[/* text */ 't', ` Characters in the `],
							[/* text */ 't', `other`],
							[/* text */ 't', ` category are permitted wherever
   RFC 2396 permits `],
							[/* text */ 't', `escaped`],
							[/* text */ 't', ` octets, that is, in the
   user-information, path, query, and fragment components, as well as in
   the authority component if the authority is registry-based.  This
   allows URIs to contain Unicode characters beyond those in the US-ASCII
   character set. `]
						]]
					]],
					[/* block */ 'b', '']
				]]
			],
			[/* parameters */
				[/* parameter */ 'str', [/* parameter description */
					[/* text */ 't', `The string to be parsed into a URI`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `str`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`]
				]],
				[/* throw */ 'java.net.URISyntaxException', [/* throw description */
					[/* text */ 't', `If the given string violates RFC 2396, as augmented
          by the above deviations`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.lang.String,java.lang.String,java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a URI from the given components.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` A component may be left undefined by passing `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', ` This constructor first builds a URI in string form using the given
 components as follows:  `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* block */ 'b', ` Initially, the result string is empty.  `]
					]],
					[/* block */ 'b', [
						[/* block */ 'b', [
							[/* text */ 't', ` If a scheme is given then it is appended to the result,
   followed by a colon character (`],
							[/* inline code block */ 'i', `':'`],
							[/* text */ 't', `).  `]
						]]
					]],
					[/* block */ 'b', [
						[/* block */ 'b', [
							[/* text */ 't', ` If a scheme-specific part is given then it is appended.  Any
   character that is not a `],
							[/* text */ 't', `legal URI character`],
							[/* text */ 't', `
   is `],
							[/* text */ 't', `quoted`],
							[/* text */ 't', `.  `]
						]]
					]],
					[/* block */ 'b', [
						[/* block */ 'b', [
							[/* text */ 't', ` Finally, if a fragment is given then a hash character
   (`],
							[/* inline code block */ 'i', `'#'`],
							[/* text */ 't', `) is appended to the string, followed by the fragment.
   Any character that is not a legal URI character is quoted.  `]
						]]
					]]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` The resulting URI string is then parsed in order to create the new
 URI instance as if by invoking the `],
					[/* reference */ 'r', `#%3Cinit%3E(java.lang.String)`, `URI(String)`],
					[/* text */ 't', ` constructor;
 this may cause a `],
					[/* reference */ 'r', `java.net.URISyntaxException`],
					[/* text */ 't', ` to be thrown.  `]
				]]
			],
			[/* parameters */
				[/* parameter */ 'scheme', [/* parameter description */
					[/* text */ 't', `Scheme name`]
				]],
				[/* parameter */ 'ssp', [/* parameter description */
					[/* text */ 't', `Scheme-specific part`]
				]],
				[/* parameter */ 'fragment', [/* parameter description */
					[/* text */ 't', `Fragment`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.net.URISyntaxException', [/* throw description */
					[/* text */ 't', `If the URI string constructed from the given components
          violates RFC 2396`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.lang.String,java.lang.String,java.lang.String,int,java.lang.String,java.lang.String,java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a hierarchical URI from the given components.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` If a scheme is given then the path, if also given, must either be
 empty or begin with a slash character (`],
					[/* inline code block */ 'i', `'/'`],
					[/* text */ 't', `).  Otherwise a
 component of the new URI may be left undefined by passing `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `
 for the corresponding parameter or, in the case of the `],
					[/* inline code block */ 'i', `port`],
					[/* text */ 't', `
 parameter, by passing `],
					[/* inline code block */ 'i', `-1`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` This constructor first builds a URI string from the given components
 according to the rules specified in `],
					[/* external link */ 'a', `http://www.ietf.org/rfc/rfc2396.txt`, `RFC 2396`],
					[/* text */ 't', `,
 section 5.2, step 7: `]
				]],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* block */ 'b', ` Initially, the result string is empty. `]
					]],
					[/* block */ 'b', [
						[/* block */ 'b', [
							[/* text */ 't', ` If a scheme is given then it is appended to the result,
   followed by a colon character (`],
							[/* inline code block */ 'i', `':'`],
							[/* text */ 't', `).  `]
						]]
					]],
					[/* block */ 'b', [
						[/* block */ 'b', [
							[/* text */ 't', ` If user information, a host, or a port are given then the
   string `],
							[/* inline code block */ 'i', `"//"`],
							[/* text */ 't', ` is appended.  `]
						]]
					]],
					[/* block */ 'b', [
						[/* block */ 'b', [
							[/* text */ 't', ` If user information is given then it is appended, followed by
   a commercial-at character (`],
							[/* inline code block */ 'i', `'@'`],
							[/* text */ 't', `).  Any character not in the
   `],
							[/* text */ 't', `unreserved`],
							[/* text */ 't', `, `],
							[/* text */ 't', `punct`],
							[/* text */ 't', `, `],
							[/* text */ 't', `escaped`],
							[/* text */ 't', `, or `],
							[/* text */ 't', `other`],
							[/* text */ 't', `
   categories is `],
							[/* text */ 't', `quoted`],
							[/* text */ 't', `.  `]
						]]
					]],
					[/* block */ 'b', [
						[/* block */ 'b', [
							[/* text */ 't', ` If a host is given then it is appended.  If the host is a
   literal IPv6 address but is not enclosed in square brackets
   (`],
							[/* inline code block */ 'i', `'['`],
							[/* text */ 't', ` and `],
							[/* inline code block */ 'i', `']'`],
							[/* text */ 't', `) then the square brackets are added.
   `]
						]]
					]],
					[/* block */ 'b', [
						[/* block */ 'b', [
							[/* text */ 't', ` If a port number is given then a colon character
   (`],
							[/* inline code block */ 'i', `':'`],
							[/* text */ 't', `) is appended, followed by the port number in decimal.
   `]
						]]
					]],
					[/* block */ 'b', [
						[/* block */ 'b', [
							[/* text */ 't', ` If a path is given then it is appended.  Any character not in
   the `],
							[/* text */ 't', `unreserved`],
							[/* text */ 't', `, `],
							[/* text */ 't', `punct`],
							[/* text */ 't', `, `],
							[/* text */ 't', `escaped`],
							[/* text */ 't', `, or `],
							[/* text */ 't', `other`],
							[/* text */ 't', `
   categories, and not equal to the slash character (`],
							[/* inline code block */ 'i', `'/'`],
							[/* text */ 't', `) or the
   commercial-at character (`],
							[/* inline code block */ 'i', `'@'`],
							[/* text */ 't', `), is quoted.  `]
						]]
					]],
					[/* block */ 'b', [
						[/* block */ 'b', [
							[/* text */ 't', ` If a query is given then a question-mark character
   (`],
							[/* inline code block */ 'i', `'?'`],
							[/* text */ 't', `) is appended, followed by the query.  Any character that
   is not a `],
							[/* text */ 't', `legal URI character`],
							[/* text */ 't', ` is quoted.
   `]
						]]
					]],
					[/* block */ 'b', [
						[/* block */ 'b', [
							[/* text */ 't', ` Finally, if a fragment is given then a hash character
   (`],
							[/* inline code block */ 'i', `'#'`],
							[/* text */ 't', `) is appended, followed by the fragment.  Any character
   that is not a legal URI character is quoted.  `]
						]]
					]]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` The resulting URI string is then parsed as if by invoking the `],
					[/* reference */ 'r', `#%3Cinit%3E(java.lang.String)`, `URI(String)`],
					[/* text */ 't', ` constructor and then invoking the `],
					[/* reference */ 'r', `#parseServerAuthority()`, `parseServerAuthority()`],
					[/* text */ 't', ` method upon the result; this may cause a `],
					[/* reference */ 'r', `java.net.URISyntaxException`],
					[/* text */ 't', ` to be thrown.  `]
				]]
			],
			[/* parameters */
				[/* parameter */ 'scheme', [/* parameter description */
					[/* text */ 't', `Scheme name`]
				]],
				[/* parameter */ 'userInfo', [/* parameter description */
					[/* text */ 't', `User name and authorization information`]
				]],
				[/* parameter */ 'host', [/* parameter description */
					[/* text */ 't', `Host name`]
				]],
				[/* parameter */ 'port', [/* parameter description */
					[/* text */ 't', `Port number`]
				]],
				[/* parameter */ 'path', [/* parameter description */
					[/* text */ 't', `Path`]
				]],
				[/* parameter */ 'query', [/* parameter description */
					[/* text */ 't', `Query`]
				]],
				[/* parameter */ 'fragment', [/* parameter description */
					[/* text */ 't', `Fragment`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.net.URISyntaxException', [/* throw description */
					[/* text */ 't', `If both a scheme and a path are given but the path is relative,
         if the URI string constructed from the given components violates
         RFC 2396, or if the authority component of the string is
         present but cannot be parsed as a server-based authority`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.lang.String,java.lang.String,java.lang.String,java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a hierarchical URI from the given components.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` A component may be left undefined by passing `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', ` This convenience constructor works as if by invoking the
 seven-argument constructor as follows:

 `],
				[/* block */ 'b', [
					[/* inline code block */ 'i', `new`],
					[/* reference */ 'r', `#%3Cinit%3E(java.lang.String,java.lang.String,java.lang.String,int,java.lang.String,java.lang.String,java.lang.String)`, `URI`],
					[/* inline code block */ 'i', `(scheme, null, host, -1, path, null, fragment);`]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'scheme', [/* parameter description */
					[/* text */ 't', `Scheme name`]
				]],
				[/* parameter */ 'host', [/* parameter description */
					[/* text */ 't', `Host name`]
				]],
				[/* parameter */ 'path', [/* parameter description */
					[/* text */ 't', `Path`]
				]],
				[/* parameter */ 'fragment', [/* parameter description */
					[/* text */ 't', `Fragment`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.net.URISyntaxException', [/* throw description */
					[/* text */ 't', `If the URI string constructed from the given components
          violates RFC 2396`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a hierarchical URI from the given components.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` If a scheme is given then the path, if also given, must either be
 empty or begin with a slash character (`],
					[/* inline code block */ 'i', `'/'`],
					[/* text */ 't', `).  Otherwise a
 component of the new URI may be left undefined by passing `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `
 for the corresponding parameter.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` This constructor first builds a URI string from the given components
 according to the rules specified in `],
					[/* external link */ 'a', `http://www.ietf.org/rfc/rfc2396.txt`, `RFC 2396`],
					[/* text */ 't', `,
 section 5.2, step 7: `]
				]],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* block */ 'b', ` Initially, the result string is empty.  `]
					]],
					[/* block */ 'b', [
						[/* block */ 'b', [
							[/* text */ 't', ` If a scheme is given then it is appended to the result,
   followed by a colon character (`],
							[/* inline code block */ 'i', `':'`],
							[/* text */ 't', `).  `]
						]]
					]],
					[/* block */ 'b', [
						[/* block */ 'b', [
							[/* text */ 't', ` If an authority is given then the string `],
							[/* inline code block */ 'i', `"//"`],
							[/* text */ 't', ` is
   appended, followed by the authority.  If the authority contains a
   literal IPv6 address then the address must be enclosed in square
   brackets (`],
							[/* inline code block */ 'i', `'['`],
							[/* text */ 't', ` and `],
							[/* inline code block */ 'i', `']'`],
							[/* text */ 't', `).  Any character not in the
   `],
							[/* text */ 't', `unreserved`],
							[/* text */ 't', `, `],
							[/* text */ 't', `punct`],
							[/* text */ 't', `, `],
							[/* text */ 't', `escaped`],
							[/* text */ 't', `, or `],
							[/* text */ 't', `other`],
							[/* text */ 't', `
   categories, and not equal to the commercial-at character
   (`],
							[/* inline code block */ 'i', `'@'`],
							[/* text */ 't', `), is `],
							[/* text */ 't', `quoted`],
							[/* text */ 't', `.  `]
						]]
					]],
					[/* block */ 'b', [
						[/* block */ 'b', [
							[/* text */ 't', ` If a path is given then it is appended.  Any character not in
   the `],
							[/* text */ 't', `unreserved`],
							[/* text */ 't', `, `],
							[/* text */ 't', `punct`],
							[/* text */ 't', `, `],
							[/* text */ 't', `escaped`],
							[/* text */ 't', `, or `],
							[/* text */ 't', `other`],
							[/* text */ 't', `
   categories, and not equal to the slash character (`],
							[/* inline code block */ 'i', `'/'`],
							[/* text */ 't', `) or the
   commercial-at character (`],
							[/* inline code block */ 'i', `'@'`],
							[/* text */ 't', `), is quoted.  `]
						]]
					]],
					[/* block */ 'b', [
						[/* block */ 'b', [
							[/* text */ 't', ` If a query is given then a question-mark character
   (`],
							[/* inline code block */ 'i', `'?'`],
							[/* text */ 't', `) is appended, followed by the query.  Any character that
   is not a `],
							[/* text */ 't', `legal URI character`],
							[/* text */ 't', ` is quoted.
   `]
						]]
					]],
					[/* block */ 'b', [
						[/* block */ 'b', [
							[/* text */ 't', ` Finally, if a fragment is given then a hash character
   (`],
							[/* inline code block */ 'i', `'#'`],
							[/* text */ 't', `) is appended, followed by the fragment.  Any character
   that is not a legal URI character is quoted.  `]
						]]
					]]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` The resulting URI string is then parsed as if by invoking the `],
					[/* reference */ 'r', `#%3Cinit%3E(java.lang.String)`, `URI(String)`],
					[/* text */ 't', ` constructor and then invoking the `],
					[/* reference */ 'r', `#parseServerAuthority()`, `parseServerAuthority()`],
					[/* text */ 't', ` method upon the result; this may cause a `],
					[/* reference */ 'r', `java.net.URISyntaxException`],
					[/* text */ 't', ` to be thrown.  `]
				]]
			],
			[/* parameters */
				[/* parameter */ 'scheme', [/* parameter description */
					[/* text */ 't', `Scheme name`]
				]],
				[/* parameter */ 'authority', [/* parameter description */
					[/* text */ 't', `Authority`]
				]],
				[/* parameter */ 'path', [/* parameter description */
					[/* text */ 't', `Path`]
				]],
				[/* parameter */ 'query', [/* parameter description */
					[/* text */ 't', `Query`]
				]],
				[/* parameter */ 'fragment', [/* parameter description */
					[/* text */ 't', `Fragment`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.net.URISyntaxException', [/* throw description */
					[/* text */ 't', `If both a scheme and a path are given but the path is relative,
         if the URI string constructed from the given components violates
         RFC 2396, or if the authority component of the string is
         present but cannot be parsed as a server-based authority`]
				]]
			]
		]]
	],
	[/* methods */
		[/* method */ 'equals(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Tests this URI for equality with another object.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` If the given object is not a URI then this method immediately
 returns `],
					[/* inline code block */ 'i', `false`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', ` For two URIs to be considered equal requires that either both are
 opaque or both are hierarchical.  Their schemes must either both be
 undefined or else be equal without regard to case. Their fragments
 must either both be undefined or else be equal.

 `],
				[/* block */ 'b', ` For two opaque URIs to be considered equal, their scheme-specific
 parts must be equal.

 `],
				[/* block */ 'b', ` For two hierarchical URIs to be considered equal, their paths must
 be equal and their queries must either both be undefined or else be
 equal.  Their authorities must either both be undefined, or both be
 registry-based, or both be server-based.  If their authorities are
 defined and are registry-based, then they must be equal.  If their
 authorities are defined and are server-based, then their hosts must be
 equal without regard to case, their port numbers must be equal, and
 their user-information components must be equal.

 `],
				[/* block */ 'b', ` When testing the user-information, path, query, fragment, authority,
 or scheme-specific parts of two URIs for equality, the raw forms rather
 than the encoded forms of these components are compared and the
 hexadecimal digits of escaped octets are compared without regard to
 case.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method satisfies the general contract of the `],
					[/* reference */ 'r', `java.Object#equals(java.lang.Object)`],
					[/* text */ 't', ` method. `]
				]]
			],
			[/* parameters */
				[/* parameter */ 'ob', [/* parameter description */
					[/* text */ 't', `The object to which this object is to be compared`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if, and only if, the given object is a URI that
          is identical to this URI`]
			]
		]],
		[/* method */ 'isAbsolute()', [
			[/* method description */
				[/* text */ 't', `Tells whether or not this URI is absolute.

 `],
				[/* block */ 'b', ` A URI is absolute if, and only if, it has a scheme component. `]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if, and only if, this URI is absolute`]
			]
		]],
		[/* method */ 'isOpaque()', [
			[/* method description */
				[/* text */ 't', `Tells whether or not this URI is opaque.

 `],
				[/* block */ 'b', ` A URI is opaque if, and only if, it is absolute and its
 scheme-specific part does not begin with a slash character ('/').
 An opaque URI has a scheme, a scheme-specific part, and possibly
 a fragment; all other components are undefined. `]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if, and only if, this URI is opaque`]
			]
		]],
		[/* method */ 'compareTo(java.net.URI)', [
			[/* method description */
				[/* text */ 't', `Compares this URI to another object, which must be a URI.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` When comparing corresponding components of two URIs, if one
 component is undefined but the other is defined then the first is
 considered to be less than the second.  Unless otherwise noted, string
 components are ordered according to their natural, case-sensitive
 ordering as defined by the `],
					[/* reference */ 'r', `java.String#compareTo(java.lang.String)`],
					[/* text */ 't', ` method.  String components that are subject to
 encoding are compared by comparing their raw forms rather than their
 encoded forms and the hexadecimal digits of escaped octets are compared
 without regard to case.

 `]
				]],
				[/* block */ 'b', ` The ordering of URIs is defined as follows: `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* block */ 'b', ` Two URIs with different schemes are ordered according the
   ordering of their schemes, without regard to case. `]
					]],
					[/* block */ 'b', [
						[/* block */ 'b', ` A hierarchical URI is considered to be less than an opaque URI
   with an identical scheme. `]
					]],
					[/* block */ 'b', [
						[/* block */ 'b', ` Two opaque URIs with identical schemes are ordered according
   to the ordering of their scheme-specific parts. `]
					]],
					[/* block */ 'b', [
						[/* block */ 'b', ` Two opaque URIs with identical schemes and scheme-specific
   parts are ordered according to the ordering of their
   fragments. `]
					]],
					[/* block */ 'b', [
						[/* block */ 'b', ` Two hierarchical URIs with identical schemes are ordered
   according to the ordering of their authority components: `],
						[/* list */ 'l', [
							[/* block */ 'b', [
								[/* block */ 'b', ` If both authority components are server-based then the URIs
     are ordered according to their user-information components; if these
     components are identical then the URIs are ordered according to the
     ordering of their hosts, without regard to case; if the hosts are
     identical then the URIs are ordered according to the ordering of
     their ports. `]
							]],
							[/* block */ 'b', [
								[/* block */ 'b', ` If one or both authority components are registry-based then
     the URIs are ordered according to the ordering of their authority
     components. `]
							]]
						]]
					]],
					[/* block */ 'b', [
						[/* block */ 'b', ` Finally, two hierarchical URIs with identical schemes and
   authority components are ordered according to the ordering of their
   paths; if their paths are identical then they are ordered according to
   the ordering of their queries; if the queries are identical then they
   are ordered according to the order of their fragments. `]
					]]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` This method satisfies the general contract of the `],
					[/* reference */ 'r', `java.Comparable#compareTo(T)`],
					[/* text */ 't', `
 method. `]
				]]
			],
			[/* parameters */
				[/* parameter */ 'that', [/* parameter description */
					[/* text */ 't', `The object to which this URI is to be compared`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `If the given object is not a URI`]
				]]
			],
			[/* return description */
				[/* text */ 't', `A negative integer, zero, or a positive integer as this URI is
          less than, equal to, or greater than the given URI`]
			]
		]],
		[/* method */ 'getPort()', [
			[/* method description */
				[/* text */ 't', `Returns the port number of this URI.

 `],
				[/* block */ 'b', ` The port component of a URI, if defined, is a non-negative
 integer. `]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The port component of this URI,
          or `],
				[/* inline code block */ 'i', `-1`],
				[/* text */ 't', ` if the port is undefined`]
			]
		]],
		[/* method */ 'hashCode()', [
			[/* method description */
				[/* text */ 't', `Returns a hash-code value for this URI.  The hash code is based upon all
 of the URI's components, and satisfies the general contract of the
 `],
				[/* reference */ 'r', `java.Object#hashCode()`],
				[/* text */ 't', ` method.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `A hash-code value for this URI`]
			]
		]],
		[/* method */ 'getAuthority()', [
			[/* method description */
				[/* text */ 't', `Returns the decoded authority component of this URI.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The string returned by this method is equal to that returned by the
 `],
					[/* reference */ 'r', `#getRawAuthority()`, `getRawAuthority`],
					[/* text */ 't', ` method except that all
 sequences of escaped octets are `],
					[/* text */ 't', `decoded`],
					[/* text */ 't', `.  `]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The decoded authority component of this URI,
          or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if the authority is undefined`]
			]
		]],
		[/* method */ 'getFragment()', [
			[/* method description */
				[/* text */ 't', `Returns the decoded fragment component of this URI.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The string returned by this method is equal to that returned by the
 `],
					[/* reference */ 'r', `#getRawFragment()`, `getRawFragment`],
					[/* text */ 't', ` method except that all
 sequences of escaped octets are `],
					[/* text */ 't', `decoded`],
					[/* text */ 't', `.  `]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The decoded fragment component of this URI,
          or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if the fragment is undefined`]
			]
		]],
		[/* method */ 'getHost()', [
			[/* method description */
				[/* text */ 't', `Returns the host component of this URI.

 `],
				[/* block */ 'b', ` The host component of a URI, if defined, will have one of the
 following forms: `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* block */ 'b', [
							[/* text */ 't', ` A domain name consisting of one or more `],
							[/* text */ 't', `labels`],
							[/* text */ 't', `
   separated by period characters (`],
							[/* inline code block */ 'i', `'.'`],
							[/* text */ 't', `), optionally followed by
   a period character.  Each label consists of `],
							[/* text */ 't', `alphanum`],
							[/* text */ 't', ` characters
   as well as hyphen characters (`],
							[/* inline code block */ 'i', `'-'`],
							[/* text */ 't', `), though hyphens never
   occur as the first or last characters in a label. The rightmost
   label of a domain name consisting of two or more labels, begins
   with an `],
							[/* text */ 't', `alpha`],
							[/* text */ 't', ` character. `]
						]]
					]],
					[/* block */ 'b', [
						[/* block */ 'b', [
							[/* text */ 't', ` A dotted-quad IPv4 address of the form
   `],
							[/* text */ 't', `digit`],
							[/* inline code block */ 'i', `+.`],
							[/* text */ 't', `digit`],
							[/* inline code block */ 'i', `+.`],
							[/* text */ 't', `digit`],
							[/* inline code block */ 'i', `+.`],
							[/* text */ 't', `digit`],
							[/* inline code block */ 'i', `+`],
							[/* text */ 't', `,
   where no `],
							[/* text */ 't', `digit`],
							[/* text */ 't', ` sequence is longer than three characters and no
   sequence has a value larger than 255. `]
						]]
					]],
					[/* block */ 'b', [
						[/* block */ 'b', [
							[/* text */ 't', ` An IPv6 address enclosed in square brackets (`],
							[/* inline code block */ 'i', `'['`],
							[/* text */ 't', ` and
   `],
							[/* inline code block */ 'i', `']'`],
							[/* text */ 't', `) and consisting of hexadecimal digits, colon characters
   (`],
							[/* inline code block */ 'i', `':'`],
							[/* text */ 't', `), and possibly an embedded IPv4 address.  The full
   syntax of IPv6 addresses is specified in `],
							[/* external link */ 'a', `http://www.ietf.org/rfc/rfc2373.txt`, `RFC 2373: IPv6 Addressing Architecture`],
							[/* text */ 't', `.  `]
						]]
					]]
				]],
				[/* text */ 't', `

 The host component of a URI cannot contain escaped octets, hence this
 method does not perform any decoding.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The host component of this URI,
          or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if the host is undefined`]
			]
		]],
		[/* method */ 'getPath()', [
			[/* method description */
				[/* text */ 't', `Returns the decoded path component of this URI.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The string returned by this method is equal to that returned by the
 `],
					[/* reference */ 'r', `#getRawPath()`, `getRawPath`],
					[/* text */ 't', ` method except that all sequences of
 escaped octets are `],
					[/* text */ 't', `decoded`],
					[/* text */ 't', `.  `]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The decoded path component of this URI,
          or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if the path is undefined`]
			]
		]],
		[/* method */ 'getQuery()', [
			[/* method description */
				[/* text */ 't', `Returns the decoded query component of this URI.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The string returned by this method is equal to that returned by the
 `],
					[/* reference */ 'r', `#getRawQuery()`, `getRawQuery`],
					[/* text */ 't', ` method except that all sequences of
 escaped octets are `],
					[/* text */ 't', `decoded`],
					[/* text */ 't', `.  `]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The decoded query component of this URI,
          or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if the query is undefined`]
			]
		]],
		[/* method */ 'getRawAuthority()', [
			[/* method description */
				[/* text */ 't', `Returns the raw authority component of this URI.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The authority component of a URI, if defined, only contains the
 commercial-at character (`],
					[/* inline code block */ 'i', `'@'`],
					[/* text */ 't', `) and characters in the
 `],
					[/* text */ 't', `unreserved`],
					[/* text */ 't', `, `],
					[/* text */ 't', `punct`],
					[/* text */ 't', `, `],
					[/* text */ 't', `escaped`],
					[/* text */ 't', `, and `],
					[/* text */ 't', `other`],
					[/* text */ 't', `
 categories.  If the authority is server-based then it is further
 constrained to have valid user-information, host, and port
 components. `]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The raw authority component of this URI,
          or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if the authority is undefined`]
			]
		]],
		[/* method */ 'getRawFragment()', [
			[/* method description */
				[/* text */ 't', `Returns the raw fragment component of this URI.

 `],
				[/* block */ 'b', ` The fragment component of a URI, if defined, only contains legal URI
 characters. `]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The raw fragment component of this URI,
          or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if the fragment is undefined`]
			]
		]],
		[/* method */ 'getRawPath()', [
			[/* method description */
				[/* text */ 't', `Returns the raw path component of this URI.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The path component of a URI, if defined, only contains the slash
 character (`],
					[/* inline code block */ 'i', `'/'`],
					[/* text */ 't', `), the commercial-at character (`],
					[/* inline code block */ 'i', `'@'`],
					[/* text */ 't', `),
 and characters in the `],
					[/* text */ 't', `unreserved`],
					[/* text */ 't', `, `],
					[/* text */ 't', `punct`],
					[/* text */ 't', `, `],
					[/* text */ 't', `escaped`],
					[/* text */ 't', `,
 and `],
					[/* text */ 't', `other`],
					[/* text */ 't', ` categories. `]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The path component of this URI,
          or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if the path is undefined`]
			]
		]],
		[/* method */ 'getRawQuery()', [
			[/* method description */
				[/* text */ 't', `Returns the raw query component of this URI.

 `],
				[/* block */ 'b', ` The query component of a URI, if defined, only contains legal URI
 characters. `]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The raw query component of this URI,
          or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if the query is undefined`]
			]
		]],
		[/* method */ 'getRawSchemeSpecificPart()', [
			[/* method description */
				[/* text */ 't', `Returns the raw scheme-specific part of this URI.  The scheme-specific
 part is never undefined, though it may be empty.

 `],
				[/* block */ 'b', ` The scheme-specific part of a URI only contains legal URI
 characters. `]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The raw scheme-specific part of this URI
          (never `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `)`]
			]
		]],
		[/* method */ 'getRawUserInfo()', [
			[/* method description */
				[/* text */ 't', `Returns the raw user-information component of this URI.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The user-information component of a URI, if defined, only contains
 characters in the `],
					[/* text */ 't', `unreserved`],
					[/* text */ 't', `, `],
					[/* text */ 't', `punct`],
					[/* text */ 't', `, `],
					[/* text */ 't', `escaped`],
					[/* text */ 't', `, and
 `],
					[/* text */ 't', `other`],
					[/* text */ 't', ` categories. `]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The raw user-information component of this URI,
          or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if the user information is undefined`]
			]
		]],
		[/* method */ 'getScheme()', [
			[/* method description */
				[/* text */ 't', `Returns the scheme component of this URI.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The scheme component of a URI, if defined, only contains characters
 in the `],
					[/* text */ 't', `alphanum`],
					[/* text */ 't', ` category and in the string `],
					[/* inline code block */ 'i', `"-.+"`],
					[/* text */ 't', `.  A
 scheme always starts with an `],
					[/* text */ 't', `alpha`],
					[/* text */ 't', ` character. `]
				]],
				[/* block */ 'b', `

 The scheme component of a URI cannot contain escaped octets, hence this
 method does not perform any decoding.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The scheme component of this URI,
          or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if the scheme is undefined`]
			]
		]],
		[/* method */ 'getSchemeSpecificPart()', [
			[/* method description */
				[/* text */ 't', `Returns the decoded scheme-specific part of this URI.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The string returned by this method is equal to that returned by the
 `],
					[/* reference */ 'r', `#getRawSchemeSpecificPart()`, `getRawSchemeSpecificPart`],
					[/* text */ 't', ` method
 except that all sequences of escaped octets are `],
					[/* text */ 't', `decoded`],
					[/* text */ 't', `.  `]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The decoded scheme-specific part of this URI
          (never `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `)`]
			]
		]],
		[/* method */ 'getUserInfo()', [
			[/* method description */
				[/* text */ 't', `Returns the decoded user-information component of this URI.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The string returned by this method is equal to that returned by the
 `],
					[/* reference */ 'r', `#getRawUserInfo()`, `getRawUserInfo`],
					[/* text */ 't', ` method except that all
 sequences of escaped octets are `],
					[/* text */ 't', `decoded`],
					[/* text */ 't', `.  `]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The decoded user-information component of this URI,
          or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if the user information is undefined`]
			]
		]],
		[/* method */ 'toASCIIString()', [
			[/* method description */
				[/* text */ 't', `Returns the content of this URI as a US-ASCII string.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` If this URI does not contain any characters in the `],
					[/* text */ 't', `other`],
					[/* text */ 't', `
 category then an invocation of this method will return the same value as
 an invocation of the `],
					[/* reference */ 'r', `#toString()`, `toString`],
					[/* text */ 't', ` method.  Otherwise
 this method works as if by invoking that method and then `],
					[/* text */ 't', `encoding`],
					[/* text */ 't', ` the result.  `]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The string form of this URI, encoded as needed
          so that it only contains characters in the US-ASCII
          charset`]
			]
		]],
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Returns the content of this URI as a string.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` If this URI was created by invoking one of the constructors in this
 class then a string equivalent to the original input string, or to the
 string computed from the originally-given components, as appropriate, is
 returned.  Otherwise this URI was created by normalization, resolution,
 or relativization, and so a string is constructed from this URI's
 components according to the rules specified in `],
					[/* external link */ 'a', `http://www.ietf.org/rfc/rfc2396.txt`, `RFC 2396`],
					[/* text */ 't', `,
 section 5.2, step 7. `]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The string form of this URI`]
			]
		]],
		[/* method */ 'normalize()', [
			[/* method description */
				[/* text */ 't', `Normalizes this URI's path.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` If this URI is opaque, or if its path is already in normal form,
 then this URI is returned.  Otherwise a new URI is constructed that is
 identical to this URI except that its path is computed by normalizing
 this URI's path in a manner consistent with `],
					[/* external link */ 'a', `http://www.ietf.org/rfc/rfc2396.txt`, `RFC 2396`],
					[/* text */ 't', `,
 section 5.2, step 6, sub-steps c through f; that is:
 `]
				]],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* block */ 'b', [
							[/* text */ 't', ` All `],
							[/* inline code block */ 'i', `"."`],
							[/* text */ 't', ` segments are removed. `]
						]]
					]],
					[/* block */ 'b', [
						[/* block */ 'b', [
							[/* text */ 't', ` If a `],
							[/* inline code block */ 'i', `".."`],
							[/* text */ 't', ` segment is preceded by a non-`],
							[/* inline code block */ 'i', `".."`],
							[/* text */ 't', `
   segment then both of these segments are removed.  This step is
   repeated until it is no longer applicable. `]
						]]
					]],
					[/* block */ 'b', [
						[/* block */ 'b', [
							[/* text */ 't', ` If the path is relative, and if its first segment contains a
   colon character (`],
							[/* inline code block */ 'i', `':'`],
							[/* text */ 't', `), then a `],
							[/* inline code block */ 'i', `"."`],
							[/* text */ 't', ` segment is
   prepended.  This prevents a relative URI with a path such as
   `],
							[/* inline code block */ 'i', `"a:b/c/d"`],
							[/* text */ 't', ` from later being re-parsed as an opaque URI with a
   scheme of `],
							[/* inline code block */ 'i', `"a"`],
							[/* text */ 't', ` and a scheme-specific part of `],
							[/* inline code block */ 'i', `"b/c/d"`],
							[/* text */ 't', `.
   `],
							[/* text */ 't', `(Deviation from RFC 2396)`]
						]]
					]]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` A normalized path will begin with one or more `],
					[/* inline code block */ 'i', `".."`],
					[/* text */ 't', ` segments
 if there were insufficient non-`],
					[/* inline code block */ 'i', `".."`],
					[/* text */ 't', ` segments preceding them to
 allow their removal.  A normalized path will begin with a `],
					[/* inline code block */ 'i', `"."`],
					[/* text */ 't', `
 segment if one was inserted by step 3 above.  Otherwise, a normalized
 path will not contain any `],
					[/* inline code block */ 'i', `"."`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `".."`],
					[/* text */ 't', ` segments. `]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `A URI equivalent to this URI,
          but whose path is in normal form`]
			]
		]],
		[/* method */ 'parseServerAuthority()', [
			[/* method description */
				[/* text */ 't', `Attempts to parse this URI's authority component, if defined, into
 user-information, host, and port components.

 `],
				[/* block */ 'b', ` If this URI's authority component has already been recognized as
 being server-based then it will already have been parsed into
 user-information, host, and port components.  In this case, or if this
 URI has no authority component, this method simply returns this URI.

 `],
				[/* block */ 'b', ` Otherwise this method attempts once more to parse the authority
 component into user-information, host, and port components, and throws
 an exception describing why the authority component could not be parsed
 in that way.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method is provided because the generic URI syntax specified in
 `],
					[/* external link */ 'a', `http://www.ietf.org/rfc/rfc2396.txt`, `RFC 2396`],
					[/* text */ 't', `
 cannot always distinguish a malformed server-based authority from a
 legitimate registry-based authority.  It must therefore treat some
 instances of the former as instances of the latter.  The authority
 component in the URI string `],
					[/* inline code block */ 'i', `"//foo:bar"`],
					[/* text */ 't', `, for example, is not a
 legal server-based authority but it is legal as a registry-based
 authority.

 `]
				]],
				[/* block */ 'b', ` In many common situations, for example when working URIs that are
 known to be either URNs or URLs, the hierarchical URIs being used will
 always be server-based.  They therefore must either be parsed as such or
 treated as an error.  In these cases a statement such as

 `],
				[/* block */ 'b', [
					[/* inline code block */ 'i', `URI`],
					[/* text */ 't', `u`],
					[/* inline code block */ 'i', `= new URI(str).parseServerAuthority();`]
				]],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', ` can be used to ensure that `],
					[/* text */ 't', `u`],
					[/* text */ 't', ` always refers to a URI that, if
 it has an authority component, has a server-based authority with proper
 user-information, host, and port components.  Invoking this method also
 ensures that if the authority could not be parsed in that way then an
 appropriate diagnostic message can be issued based upon the exception
 that is thrown. `]
				]]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.net.URISyntaxException', [/* throw description */
					[/* text */ 't', `If the authority component of this URI is defined
          but cannot be parsed as a server-based authority
          according to RFC 2396`]
				]]
			],
			[/* return description */
				[/* text */ 't', `A URI whose authority field has been parsed
          as a server-based authority`]
			]
		]],
		[/* method */ 'relativize(java.net.URI)', [
			[/* method description */
				[/* text */ 't', `Relativizes the given URI against this URI.

 `],
				[/* block */ 'b', ` The relativization of the given URI against this URI is computed as
 follows: `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* block */ 'b', ` If either this URI or the given URI are opaque, or if the
   scheme and authority components of the two URIs are not identical, or
   if the path of this URI is not a prefix of the path of the given URI,
   then the given URI is returned. `]
					]],
					[/* block */ 'b', [
						[/* block */ 'b', ` Otherwise a new relative hierarchical URI is constructed with
   query and fragment components taken from the given URI and with a path
   component computed by removing this URI's path from the beginning of
   the given URI's path. `]
					]]
				]]
			],
			[/* parameters */
				[/* parameter */ 'uri', [/* parameter description */
					[/* text */ 't', `The URI to be relativized against this URI`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `uri`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The resulting URI`]
			]
		]],
		[/* method */ 'resolve(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Constructs a new URI by parsing the given string and then resolving it
 against this URI.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This convenience method works as if invoking it were equivalent to
 evaluating the expression `],
					[/* reference */ 'r', `#resolve(java.net.URI)`, `resolve`],
					[/* inline code block */ 'i', `(URI.`],
					[/* reference */ 'r', `#create(java.lang.String)`, `create`],
					[/* inline code block */ 'i', `(str))`],
					[/* text */ 't', `. `]
				]]
			],
			[/* parameters */
				[/* parameter */ 'str', [/* parameter description */
					[/* text */ 't', `The string to be parsed into a URI`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `str`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If the given string violates RFC 2396`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The resulting URI`]
			]
		]],
		[/* method */ 'resolve(java.net.URI)', [
			[/* method description */
				[/* text */ 't', `Resolves the given URI against this URI.

 `],
				[/* block */ 'b', ` If the given URI is already absolute, or if this URI is opaque, then
 the given URI is returned.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ``],
					[/* text */ 't', ` If the given URI's fragment component is
 defined, its path component is empty, and its scheme, authority, and
 query components are undefined, then a URI with the given fragment but
 with all other components equal to those of this URI is returned.  This
 allows a URI representing a standalone fragment reference, such as
 `],
					[/* inline code block */ 'i', `"#foo"`],
					[/* text */ 't', `, to be usefully resolved against a base URI.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` Otherwise this method constructs a new hierarchical URI in a manner
 consistent with `],
					[/* external link */ 'a', `http://www.ietf.org/rfc/rfc2396.txt`, `RFC 2396`],
					[/* text */ 't', `,
 section 5.2; that is: `]
				]],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* block */ 'b', ` A new URI is constructed with this URI's scheme and the given
   URI's query and fragment components. `]
					]],
					[/* block */ 'b', [
						[/* block */ 'b', ` If the given URI has an authority component then the new URI's
   authority and path are taken from the given URI. `]
					]],
					[/* block */ 'b', [
						[/* block */ 'b', ` Otherwise the new URI's authority component is copied from
   this URI, and its path is computed as follows: `],
						[/* list */ 'l', [
							[/* block */ 'b', [
								[/* block */ 'b', ` If the given URI's path is absolute then the new URI's path
     is taken from the given URI. `]
							]],
							[/* block */ 'b', [
								[/* block */ 'b', [
									[/* text */ 't', ` Otherwise the given URI's path is relative, and so the new
     URI's path is computed by resolving the path of the given URI
     against the path of this URI.  This is done by concatenating all but
     the last segment of this URI's path, if any, with the given URI's
     path and then normalizing the result as if by invoking the `],
									[/* reference */ 'r', `#normalize()`, `normalize`],
									[/* text */ 't', ` method. `]
								]]
							]]
						]]
					]]
				]],
				[/* block */ 'b', ` The result of this method is absolute if, and only if, either this
 URI is absolute or the given URI is absolute.  `]
			],
			[/* parameters */
				[/* parameter */ 'uri', [/* parameter description */
					[/* text */ 't', `The URI to be resolved against this URI`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `uri`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The resulting URI`]
			]
		]],
		[/* method */ 'toURL()', [
			[/* method description */
				[/* text */ 't', `Constructs a URL from this URI.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This convenience method works as if invoking it were equivalent to
 evaluating the expression `],
					[/* inline code block */ 'i', `new URL(this.toString())`],
					[/* text */ 't', ` after
 first checking that this URI is absolute. `]
				]]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If this URL is not absolute`]
				]],
				[/* throw */ 'java.net.MalformedURLException', [/* throw description */
					[/* text */ 't', `If a protocol handler for the URL could not be found,
          or if some other error occurred while constructing the URL`]
				]]
			],
			[/* return description */
				[/* text */ 't', `A URL constructed from this URI`]
			]
		]],
		[/* method */ 'create(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Creates a URI by parsing the given string.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This convenience factory method works as if by invoking the `],
					[/* reference */ 'r', `#%3Cinit%3E(java.lang.String)`, `URI(String)`],
					[/* text */ 't', ` constructor; any `],
					[/* reference */ 'r', `java.net.URISyntaxException`],
					[/* text */ 't', ` thrown by the
 constructor is caught and wrapped in a new `],
					[/* reference */ 'r', `java.lang.IllegalArgumentException`],
					[/* text */ 't', ` object, which is then thrown.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` This method is provided for use in situations where it is known that
 the given string is a legal URI, for example for URI constants declared
 within a program, and so it would be considered a programming error
 for the string not to parse as such.  The constructors, which throw
 `],
					[/* reference */ 'r', `java.net.URISyntaxException`],
					[/* text */ 't', ` directly, should be used in situations where a
 URI is being constructed from user input or from some other source that
 may be prone to errors.  `]
				]]
			],
			[/* parameters */
				[/* parameter */ 'str', [/* parameter description */
					[/* text */ 't', `The string to be parsed into a URI`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `str`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If the given string violates RFC 2396`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The new URI`]
			]
		]]
	],
]);
