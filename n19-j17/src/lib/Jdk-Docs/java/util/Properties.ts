import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.util.Properties', [
	[/* class description */
		[/* text */ 't', `The `],
		[/* inline code block */ 'i', `Properties`],
		[/* text */ 't', ` class represents a persistent set of
 properties. The `],
		[/* inline code block */ 'i', `Properties`],
		[/* text */ 't', ` can be saved to a stream
 or loaded from a stream. Each key and its corresponding value in
 the property list is a string.
 `],
		[/* block */ 'b', `
 A property list can contain another property list as its
 "defaults"; this second property list is searched if
 the property key is not found in the original property list.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 Because `],
			[/* inline code block */ 'i', `Properties`],
			[/* text */ 't', ` inherits from `],
			[/* inline code block */ 'i', `Hashtable`],
			[/* text */ 't', `, the
 `],
			[/* inline code block */ 'i', `put`],
			[/* text */ 't', ` and `],
			[/* inline code block */ 'i', `putAll`],
			[/* text */ 't', ` methods can be applied to a
 `],
			[/* inline code block */ 'i', `Properties`],
			[/* text */ 't', ` object.  Their use is strongly discouraged as they
 allow the caller to insert entries whose keys or values are not
 `],
			[/* inline code block */ 'i', `Strings`],
			[/* text */ 't', `.  The `],
			[/* inline code block */ 'i', `setProperty`],
			[/* text */ 't', ` method should be used
 instead.  If the `],
			[/* inline code block */ 'i', `store`],
			[/* text */ 't', ` or `],
			[/* inline code block */ 'i', `save`],
			[/* text */ 't', ` method is called
 on a "compromised" `],
			[/* inline code block */ 'i', `Properties`],
			[/* text */ 't', ` object that contains a
 non-`],
			[/* inline code block */ 'i', `String`],
			[/* text */ 't', ` key or value, the call will fail. Similarly,
 the call to the `],
			[/* inline code block */ 'i', `propertyNames`],
			[/* text */ 't', ` or `],
			[/* inline code block */ 'i', `list`],
			[/* text */ 't', ` method
 will fail if it is called on a "compromised" `],
			[/* inline code block */ 'i', `Properties`],
			[/* text */ 't', `
 object that contains a non-`],
			[/* inline code block */ 'i', `String`],
			[/* text */ 't', ` key.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 The iterators returned by the `],
			[/* inline code block */ 'i', `iterator`],
			[/* text */ 't', ` method of this class's
 "collection views" (that is, `],
			[/* inline code block */ 'i', `entrySet()`],
			[/* text */ 't', `, `],
			[/* inline code block */ 'i', `keySet()`],
			[/* text */ 't', `, and
 `],
			[/* inline code block */ 'i', `values()`],
			[/* text */ 't', `) may not fail-fast (unlike the Hashtable implementation).
 These iterators are guaranteed to traverse elements as they existed upon
 construction exactly once, and may (but are not guaranteed to) reflect any
 modifications subsequent to construction.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 The `],
			[/* reference */ 'r', `#load(java.io.Reader)`, `load(Reader)`],
			[/* inline code block */ 'i', `/`],
			[/* reference */ 'r', `#store(java.io.Writer,java.lang.String)`, `store(Writer, String)`],
			[/* text */ 't', `
 methods load and store properties from and to a character based stream
 in a simple line-oriented format specified below.

 The `],
			[/* reference */ 'r', `#load(java.io.InputStream)`, `load(InputStream)`],
			[/* inline code block */ 'i', `/`],
			[/* reference */ 'r', `#store(java.io.OutputStream,java.lang.String)`, `store(OutputStream, String)`],
			[/* text */ 't', `
 methods work the same way as the load(Reader)/store(Writer, String) pair, except
 the input/output stream is encoded in ISO 8859-1 character encoding.
 Characters that cannot be directly represented in this encoding can be written using
 Unicode escapes as defined in section `],
			[/* external link */ 'a', `https://docs.oracle.com/javase/specs/jls/se17/html/jls-3.html#jls-3.3`, `3.3`],
			[/* text */ 't', ` of
 `],
			[/* text */ 't', `The Java Language Specification`],
			[/* text */ 't', `;
 only a single 'u' character is allowed in an escape
 sequence.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` The `],
			[/* reference */ 'r', `#loadFromXML(java.io.InputStream)`, `loadFromXML(InputStream)`],
			[/* text */ 't', ` and `],
			[/* reference */ 'r', `#storeToXML(java.io.OutputStream,java.lang.String,java.lang.String)`, `storeToXML(OutputStream, String, String)`],
			[/* text */ 't', ` methods load and store properties
 in a simple XML format.  By default the UTF-8 character encoding is used,
 however a specific encoding may be specified if required. Implementations
 are required to support UTF-8 and UTF-16 and may support other encodings.
 An XML properties document has the following DOCTYPE declaration:

 `]
		]],
		[/* code block */ 'c', ` <!DOCTYPE properties SYSTEM "http://java.sun.com/dtd/properties.dtd">
 `],
		[/* text */ 't', `
 Note that the system URI (http://java.sun.com/dtd/properties.dtd) is
 `],
		[/* text */ 't', `not`],
		[/* text */ 't', ` accessed when exporting or importing properties; it merely
 serves as a string to uniquely identify the DTD, which is:
 `],
		[/* code block */ 'c', `    <?xml version="1.0" encoding="UTF-8"?>

    <!-- DTD for properties -->

    <!ELEMENT properties ( comment?, entry* ) >

    <!ATTLIST properties version CDATA #FIXED "1.0">

    <!ELEMENT comment (#PCDATA) >

    <!ELEMENT entry (#PCDATA) >

    <!ATTLIST entry key CDATA #REQUIRED>
 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `This class is thread-safe: multiple threads can share a single
 `],
			[/* inline code block */ 'i', `Properties`],
			[/* text */ 't', ` object without the need for external synchronization.`]
		]]
	],
	[/* fields */
		[/* field */ 'defaults', [
			[/* field description */
				[/* text */ 't', `A property list that contains default values for any keys not
 found in this property list.`]
			],
		]]
	],
	[/* constructors */
		[/* constructor */ '<init>(java.util.Properties)', [
			[/* constructor description */
				[/* text */ 't', `Creates an empty property list with the specified defaults.`]
			],
			[/* parameters */
				[/* parameter */ 'defaults', [/* parameter description */
					[/* text */ 't', `the defaults.`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(int)', [
			[/* constructor description */
				[/* text */ 't', `Creates an empty property list with no default values, and with an
 initial size accommodating the specified number of elements without the
 need to dynamically resize.`]
			],
			[/* parameters */
				[/* parameter */ 'initialCapacity', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `Properties`],
					[/* text */ 't', ` will be sized to
         accommodate this many elements`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the initial capacity is less than
         zero.`]
				]]
			]
		]],
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Creates an empty property list with no default values.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'remove(java.lang.Object)', UDF],
		[/* method */ 'remove(java.lang.Object,java.lang.Object)', UDF],
		[/* method */ 'get(java.lang.Object)', UDF],
		[/* method */ 'put(java.lang.Object,java.lang.Object)', UDF],
		[/* method */ 'getProperty(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Searches for the property with the specified key in this property list.
 If the key is not found in this property list, the default property list,
 and its defaults, recursively, are then checked. The method returns
 `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if the property is not found.`]
			],
			[/* parameters */
				[/* parameter */ 'key', [/* parameter description */
					[/* text */ 't', `the property key.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the value in this property list with the specified key value.`]
			]
		]],
		[/* method */ 'getProperty(java.lang.String,java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Searches for the property with the specified key in this property list.
 If the key is not found in this property list, the default property list,
 and its defaults, recursively, are then checked. The method returns the
 default value argument if the property is not found.`]
			],
			[/* parameters */
				[/* parameter */ 'key', [/* parameter description */
					[/* text */ 't', `the hashtable key.`]
				]],
				[/* parameter */ 'defaultValue', [/* parameter description */
					[/* text */ 't', `a default value.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the value in this property list with the specified key value.`]
			]
		]],
		[/* method */ 'equals(java.lang.Object)', UDF],
		[/* method */ 'toString()', UDF],
		[/* method */ 'values()', UDF],
		[/* method */ 'hashCode()', UDF],
		[/* method */ 'clone()', UDF],
		[/* method */ 'load(java.io.Reader)', [
			[/* method description */
				[/* text */ 't', `Reads a property list (key and element pairs) from the input
 character stream in a simple line-oriented format.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 Properties are processed in terms of lines. There are two
 kinds of line, `],
					[/* text */ 't', `natural lines`],
					[/* text */ 't', ` and `],
					[/* text */ 't', `logical lines`],
					[/* text */ 't', `.
 A natural line is defined as a line of
 characters that is terminated either by a set of line terminator
 characters (`],
					[/* inline code block */ 'i', `\\n`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `\\r`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `\\r\\n`],
					[/* text */ 't', `)
 or by the end of the stream. A natural line may be either a blank line,
 a comment line, or hold all or some of a key-element pair. A logical
 line holds all the data of a key-element pair, which may be spread
 out across several adjacent natural lines by escaping
 the line terminator sequence with a backslash character
 `],
					[/* inline code block */ 'i', `\\`],
					[/* text */ 't', `.  Note that a comment line cannot be extended
 in this manner; every natural line that is a comment must have
 its own comment indicator, as described below. Lines are read from
 input until the end of the stream is reached.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 A natural line that contains only white space characters is
 considered blank and is ignored.  A comment line has an ASCII
 `],
					[/* inline code block */ 'i', `'#'`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `'!'`],
					[/* text */ 't', ` as its first non-white
 space character; comment lines are also ignored and do not
 encode key-element information.  In addition to line
 terminators, this format considers the characters space
 (`],
					[/* inline code block */ 'i', `' '`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `'\\u0020'`],
					[/* text */ 't', `), tab
 (`],
					[/* inline code block */ 'i', `'\\t'`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `'\\u0009'`],
					[/* text */ 't', `), and form feed
 (`],
					[/* inline code block */ 'i', `'\\f'`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `'\\u000C'`],
					[/* text */ 't', `) to be white
 space.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 If a logical line is spread across several natural lines, the
 backslash escaping the line terminator sequence, the line
 terminator sequence, and any white space at the start of the
 following line have no affect on the key or element values.
 The remainder of the discussion of key and element parsing
 (when loading) will assume all the characters constituting
 the key and element appear on a single natural line after
 line continuation characters have been removed.  Note that
 it is `],
					[/* text */ 't', `not`],
					[/* text */ 't', ` sufficient to only examine the character
 preceding a line terminator sequence to decide if the line
 terminator is escaped; there must be an odd number of
 contiguous backslashes for the line terminator to be escaped.
 Since the input is processed from left to right, a
 non-zero even number of 2`],
					[/* text */ 't', `n`],
					[/* text */ 't', ` contiguous backslashes
 before a line terminator (or elsewhere) encodes `],
					[/* text */ 't', `n`],
					[/* text */ 't', `
 backslashes after escape processing.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The key contains all of the characters in the line starting
 with the first non-white space character and up to, but not
 including, the first unescaped `],
					[/* inline code block */ 'i', `'='`],
					[/* text */ 't', `,
 `],
					[/* inline code block */ 'i', `':'`],
					[/* text */ 't', `, or white space character other than a line
 terminator. All of these key termination characters may be
 included in the key by escaping them with a preceding backslash
 character; for example,`]
				]],
				[/* block */ 'b', [
					[/* inline code block */ 'i', `\\:\\=`]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `

 would be the two-character key `],
					[/* inline code block */ 'i', `":="`],
					[/* text */ 't', `.  Line
 terminator characters can be included using `],
					[/* inline code block */ 'i', `\\r`],
					[/* text */ 't', ` and
 `],
					[/* inline code block */ 'i', `\\n`],
					[/* text */ 't', ` escape sequences.  Any white space after the
 key is skipped; if the first non-white space character after
 the key is `],
					[/* inline code block */ 'i', `'='`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `':'`],
					[/* text */ 't', `, then it is
 ignored and any white space characters after it are also
 skipped.  All remaining characters on the line become part of
 the associated element string; if there are no remaining
 characters, the element is the empty string
 `],
					[/* inline code block */ 'i', `""`],
					[/* text */ 't', `.  Once the raw character sequences
 constituting the key and element are identified, escape
 processing is performed as described above.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 As an example, each of the following three lines specifies the key
 `],
					[/* inline code block */ 'i', `"Truth"`],
					[/* text */ 't', ` and the associated element value
 `],
					[/* inline code block */ 'i', `"Beauty"`],
					[/* text */ 't', `:
 `]
				]],
				[/* code block */ 'c', ` Truth = Beauty
  Truth:Beauty
 Truth                    :Beauty
 `],
				[/* text */ 't', `
 As another example, the following three lines specify a single
 property:
 `],
				[/* code block */ 'c', ` fruits                           apple, banana, pear, \\
                                  cantaloupe, watermelon, \\
                                  kiwi, mango
 `],
				[/* text */ 't', `
 The key is `],
				[/* inline code block */ 'i', `"fruits"`],
				[/* text */ 't', ` and the associated element is:
 `],
				[/* code block */ 'c', `"apple, banana, pear, cantaloupe, watermelon, kiwi, mango"`],
				[/* text */ 't', `
 Note that a space appears before each `],
				[/* inline code block */ 'i', `\\`],
				[/* text */ 't', ` so that a space
 will appear after each comma in the final result; the `],
				[/* inline code block */ 'i', `\\`],
				[/* text */ 't', `,
 line terminator, and leading white space on the continuation line are
 merely discarded and are `],
				[/* text */ 't', `not`],
				[/* text */ 't', ` replaced by one or more other
 characters.
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', `
 As a third example, the line:
 `],
				[/* code block */ 'c', `cheeses
 `],
				[/* text */ 't', `
 specifies that the key is `],
				[/* inline code block */ 'i', `"cheeses"`],
				[/* text */ 't', ` and the associated
 element is the empty string `],
				[/* inline code block */ 'i', `""`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', ``],
					[/* text */ 't', `
 Characters in keys and elements can be represented in escape
 sequences similar to those used for character and string literals
 (see sections `],
					[/* external link */ 'a', `https://docs.oracle.com/javase/specs/jls/se17/html/jls-3.html#jls-3.3`, `3.3`],
					[/* text */ 't', ` and `],
					[/* external link */ 'a', `https://docs.oracle.com/javase/specs/jls/se17/html/jls-3.html#jls-3.10.6`, `3.10.6`],
					[/* text */ 't', ` of
 `],
					[/* text */ 't', `The Java Language Specification`],
					[/* text */ 't', `).

 The differences from the character escape sequences and Unicode
 escapes used for characters and strings are:

 `]
				]],
				[/* list */ 'l', [
					[/* block */ 'b', ` Octal escapes are not recognized.

 `],
					[/* block */ 'b', [
						[/* text */ 't', ` The character sequence `],
						[/* inline code block */ 'i', `\\b`],
						[/* text */ 't', ` does `],
						[/* text */ 't', `not`],
						[/* text */ 't', `
 represent a backspace character.

 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', ` The method does not treat a backslash character,
 `],
						[/* inline code block */ 'i', `\\`],
						[/* text */ 't', `, before a non-valid escape character as an
 error; the backslash is silently dropped.  For example, in a
 Java string the sequence `],
						[/* inline code block */ 'i', `"\\z"`],
						[/* text */ 't', ` would cause a
 compile time error.  In contrast, this method silently drops
 the backslash.  Therefore, this method treats the two character
 sequence `],
						[/* inline code block */ 'i', `"\\b"`],
						[/* text */ 't', ` as equivalent to the single
 character `],
						[/* inline code block */ 'i', `'b'`],
						[/* text */ 't', `.

 `]
					]],
					[/* block */ 'b', ` Escapes are not necessary for single and double quotes;
 however, by the rule above, single and double quote characters
 preceded by a backslash still yield single and double quote
 characters, respectively.

 `],
					[/* block */ 'b', ` Only a single 'u' character is allowed in a Unicode escape
 sequence.

 `]
				]],
				[/* block */ 'b', ''],
				[/* block */ 'b', `
 The specified stream remains open after this method returns.`]
			],
			[/* parameters */
				[/* parameter */ 'reader', [/* parameter description */
					[/* text */ 't', `the input character stream.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an error occurred when reading from the
          input stream.`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if a malformed Unicode escape
          appears in the input.`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `reader`],
					[/* text */ 't', ` is null.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'load(java.io.InputStream)', [
			[/* method description */
				[/* text */ 't', `Reads a property list (key and element pairs) from the input
 byte stream. The input stream is in a simple line-oriented
 format as specified in
 `],
				[/* reference */ 'r', `#load(java.io.Reader)`, `load(Reader)`],
				[/* text */ 't', ` and is assumed to use
 the ISO 8859-1 character encoding; that is each byte is one Latin1
 character. Characters not in Latin1, and certain special characters,
 are represented in keys and elements using Unicode escapes as defined in
 section `],
				[/* external link */ 'a', `https://docs.oracle.com/javase/specs/jls/se17/html/jls-3.html#jls-3.3`, `3.3`],
				[/* text */ 't', ` of
 `],
				[/* text */ 't', `The Java Language Specification`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', `
 The specified stream remains open after this method returns.`]
			],
			[/* parameters */
				[/* parameter */ 'inStream', [/* parameter description */
					[/* text */ 't', `the input stream.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an error occurred when reading from the
             input stream.`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the input stream contains a
             malformed Unicode escape sequence.`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `inStream`],
					[/* text */ 't', ` is null.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'store(java.io.OutputStream,java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Writes this property list (key and element pairs) in this
 `],
				[/* inline code block */ 'i', `Properties`],
				[/* text */ 't', ` table to the output stream in a format suitable
 for loading into a `],
				[/* inline code block */ 'i', `Properties`],
				[/* text */ 't', ` table using the
 `],
				[/* reference */ 'r', `#load(java.io.InputStream)`, `load(InputStream)`],
				[/* text */ 't', ` method.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 Properties from the defaults table of this `],
					[/* inline code block */ 'i', `Properties`],
					[/* text */ 't', `
 table (if any) are `],
					[/* text */ 't', `not`],
					[/* text */ 't', ` written out by this method.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method outputs the comments, properties keys and values in
 the same format as specified in
 `],
					[/* reference */ 'r', `#store(java.io.Writer,java.lang.String)`, `store(Writer)`],
					[/* text */ 't', `,
 with the following differences:
 `]
				]],
				[/* list */ 'l', [
					[/* block */ 'b', `The stream is written using the ISO 8859-1 character encoding.

 `],
					[/* block */ 'b', [
						[/* text */ 't', `Characters not in Latin-1 in the comments are written as
 `],
						[/* inline code block */ 'i', `\\u`],
						[/* text */ 't', `xxxx`],
						[/* text */ 't', ` for their appropriate unicode
 hexadecimal value `],
						[/* text */ 't', `xxxx`],
						[/* text */ 't', `.

 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `Characters less than `],
						[/* inline code block */ 'i', `\\u0020`],
						[/* text */ 't', ` and characters greater
 than `],
						[/* inline code block */ 'i', `\\u007E`],
						[/* text */ 't', ` in property keys or values are written
 as `],
						[/* inline code block */ 'i', `\\u`],
						[/* text */ 't', `xxxx`],
						[/* text */ 't', ` for the appropriate hexadecimal
 value `],
						[/* text */ 't', `xxxx`],
						[/* text */ 't', `.
 `]
					]]
				]],
				[/* block */ 'b', ''],
				[/* block */ 'b', `
 After the entries have been written, the output stream is flushed.
 The output stream remains open after this method returns.`]
			],
			[/* parameters */
				[/* parameter */ 'out', [/* parameter description */
					[/* text */ 't', `an output stream.`]
				]],
				[/* parameter */ 'comments', [/* parameter description */
					[/* text */ 't', `a description of the property list.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if writing this property list to the specified
             output stream throws an `],
					[/* inline code block */ 'i', `IOException`],
					[/* text */ 't', `.`]
				]],
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if this `],
					[/* inline code block */ 'i', `Properties`],
					[/* text */ 't', ` object
             contains any keys or values that are not `],
					[/* inline code block */ 'i', `Strings`],
					[/* text */ 't', `.`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `out`],
					[/* text */ 't', ` is null.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'store(java.io.Writer,java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Writes this property list (key and element pairs) in this
 `],
				[/* inline code block */ 'i', `Properties`],
				[/* text */ 't', ` table to the output character stream in a
 format suitable for using the `],
				[/* reference */ 'r', `#load(java.io.Reader)`, `load(Reader)`],
				[/* text */ 't', `
 method.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 Properties from the defaults table of this `],
					[/* inline code block */ 'i', `Properties`],
					[/* text */ 't', `
 table (if any) are `],
					[/* text */ 't', `not`],
					[/* text */ 't', ` written out by this method.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the comments argument is not null, then an ASCII `],
					[/* inline code block */ 'i', `#`],
					[/* text */ 't', `
 character, the comments string, and a line separator are first written
 to the output stream. Thus, the `],
					[/* inline code block */ 'i', `comments`],
					[/* text */ 't', ` can serve as an
 identifying comment. Any one of a line feed ('\\n'), a carriage
 return ('\\r'), or a carriage return followed immediately by a line feed
 in comments is replaced by a line separator generated by the `],
					[/* inline code block */ 'i', `Writer`],
					[/* text */ 't', `
 and if the next character in comments is not character `],
					[/* inline code block */ 'i', `#`],
					[/* text */ 't', ` or
 character `],
					[/* inline code block */ 'i', `!`],
					[/* text */ 't', ` then an ASCII `],
					[/* inline code block */ 'i', `#`],
					[/* text */ 't', ` is written out
 after that line separator.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 Next, a comment line is always written, consisting of an ASCII
 `],
					[/* inline code block */ 'i', `#`],
					[/* text */ 't', ` character, the current date and time (as if produced
 by the `],
					[/* inline code block */ 'i', `toString`],
					[/* text */ 't', ` method of `],
					[/* inline code block */ 'i', `Date`],
					[/* text */ 't', ` for the
 current time), and a line separator as generated by the `],
					[/* inline code block */ 'i', `Writer`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 Then every entry in this `],
					[/* inline code block */ 'i', `Properties`],
					[/* text */ 't', ` table is
 written out, one per line. For each entry the key string is
 written, then an ASCII `],
					[/* inline code block */ 'i', `=`],
					[/* text */ 't', `, then the associated
 element string. For the key, all space characters are
 written with a preceding `],
					[/* inline code block */ 'i', `\\`],
					[/* text */ 't', ` character.  For the
 element, leading space characters, but not embedded or trailing
 space characters, are written with a preceding `],
					[/* inline code block */ 'i', `\\`],
					[/* text */ 't', `
 character. The key and element characters `],
					[/* inline code block */ 'i', `#`],
					[/* text */ 't', `,
 `],
					[/* inline code block */ 'i', `!`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `=`],
					[/* text */ 't', `, and `],
					[/* inline code block */ 'i', `:`],
					[/* text */ 't', ` are written
 with a preceding backslash to ensure that they are properly loaded.
 `]
				]],
				[/* block */ 'b', `
 After the entries have been written, the output stream is flushed.
 The output stream remains open after this method returns.`]
			],
			[/* parameters */
				[/* parameter */ 'writer', [/* parameter description */
					[/* text */ 't', `an output character stream writer.`]
				]],
				[/* parameter */ 'comments', [/* parameter description */
					[/* text */ 't', `a description of the property list.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if writing this property list to the specified
             output stream throws an `],
					[/* inline code block */ 'i', `IOException`],
					[/* text */ 't', `.`]
				]],
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if this `],
					[/* inline code block */ 'i', `Properties`],
					[/* text */ 't', ` object
             contains any keys or values that are not `],
					[/* inline code block */ 'i', `Strings`],
					[/* text */ 't', `.`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `writer`],
					[/* text */ 't', ` is null.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'clear()', UDF],
		[/* method */ 'isEmpty()', UDF],
		[/* method */ 'replace(java.lang.Object,java.lang.Object,java.lang.Object)', UDF],
		[/* method */ 'replace(java.lang.Object,java.lang.Object)', UDF],
		[/* method */ 'replaceAll(java.util.function.BiFunction)', UDF],
		[/* method */ 'size()', UDF],
		[/* method */ 'contains(java.lang.Object)', UDF],
		[/* method */ 'list(java.io.PrintStream)', [
			[/* method description */
				[/* text */ 't', `Prints this property list out to the specified output stream.
 This method is useful for debugging.`]
			],
			[/* parameters */
				[/* parameter */ 'out', [/* parameter description */
					[/* text */ 't', `an output stream.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if any key in this property list
          is not a string.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'list(java.io.PrintWriter)', [
			[/* method description */
				[/* text */ 't', `Prints this property list out to the specified output stream.
 This method is useful for debugging.`]
			],
			[/* parameters */
				[/* parameter */ 'out', [/* parameter description */
					[/* text */ 't', `an output stream.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if any key in this property list
          is not a string.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'elements()', UDF],
		[/* method */ 'merge(java.lang.Object,java.lang.Object,java.util.function.BiFunction)', UDF],
		[/* method */ 'entrySet()', UDF],
		[/* method */ 'putAll(java.util.Map)', UDF],
		[/* method */ 'putIfAbsent(java.lang.Object,java.lang.Object)', UDF],
		[/* method */ 'compute(java.lang.Object,java.util.function.BiFunction)', UDF],
		[/* method */ 'setProperty(java.lang.String,java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Calls the `],
				[/* inline code block */ 'i', `Hashtable`],
				[/* text */ 't', ` method `],
				[/* inline code block */ 'i', `put`],
				[/* text */ 't', `. Provided for
 parallelism with the `],
				[/* inline code block */ 'i', `getProperty`],
				[/* text */ 't', ` method. Enforces use of
 strings for property keys and values. The value returned is the
 result of the `],
				[/* inline code block */ 'i', `Hashtable`],
				[/* text */ 't', ` call to `],
				[/* inline code block */ 'i', `put`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'key', [/* parameter description */
					[/* text */ 't', `the key to be placed into this property list.`]
				]],
				[/* parameter */ 'value', [/* parameter description */
					[/* text */ 't', `the value corresponding to `],
					[/* inline code block */ 'i', `key`],
					[/* text */ 't', `.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the previous value of the specified key in this property
             list, or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if it did not have one.`]
			]
		]],
		[/* method */ 'forEach(java.util.function.BiConsumer)', UDF],
		[/* method */ 'containsKey(java.lang.Object)', UDF],
		[/* method */ 'computeIfAbsent(java.lang.Object,java.util.function.Function)', UDF],
		[/* method */ 'storeToXML(java.io.OutputStream,java.lang.String,java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Emits an XML document representing all of the properties contained
 in this table, using the specified encoding.

 `],
				[/* block */ 'b', `The XML document will have the following DOCTYPE declaration:
 `],
				[/* code block */ 'c', ` <!DOCTYPE properties SYSTEM "http://java.sun.com/dtd/properties.dtd">
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `If the specified comment is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` then no comment
 will be stored in the document.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` An implementation is required to support writing of XML documents
 that use the "`],
					[/* inline code block */ 'i', `UTF-8`],
					[/* text */ 't', `" or "`],
					[/* inline code block */ 'i', `UTF-16`],
					[/* text */ 't', `" encoding. An
 implementation may support additional encodings.

 `]
				]],
				[/* block */ 'b', `The specified stream remains open after this method returns.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This method behaves the same as
 `],
					[/* reference */ 'r', `#storeToXML(java.io.OutputStream,java.lang.String,java.nio.charset.Charset)`, `storeToXML(OutputStream os, String comment, Charset charset)`],
					[/* text */ 't', `
 except that it will `],
					[/* reference */ 'r', `java.Charset#forName(java.lang.String)`],
					[/* text */ 't', `
 using the given encoding name.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'os', [/* parameter description */
					[/* text */ 't', `the output stream on which to emit the XML document.`]
				]],
				[/* parameter */ 'comment', [/* parameter description */
					[/* text */ 't', `a description of the property list, or `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `
                  if no comment is desired.`]
				]],
				[/* parameter */ 'encoding', [/* parameter description */
					[/* text */ 't', `the name of a supported
                  `],
					[/* text */ 't', `character encoding`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if writing to the specified output stream
         results in an `],
					[/* inline code block */ 'i', `IOException`],
					[/* text */ 't', `.`]
				]],
				[/* throw */ 'java.io.UnsupportedEncodingException', [/* throw description */
					[/* text */ 't', `if the encoding is not
         supported by the implementation.`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `os`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `,
         or if `],
					[/* inline code block */ 'i', `encoding`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]],
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if this `],
					[/* inline code block */ 'i', `Properties`],
					[/* text */ 't', ` object
         contains any keys or values that are not `],
					[/* inline code block */ 'i', `Strings`],
					[/* text */ 't', `.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'storeToXML(java.io.OutputStream,java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Emits an XML document representing all of the properties contained
 in this table.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` An invocation of this method of the form `],
					[/* inline code block */ 'i', `props.storeToXML(os, comment)`],
					[/* text */ 't', ` behaves in exactly the same way as the invocation
 `],
					[/* inline code block */ 'i', `props.storeToXML(os, comment, "UTF-8");`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'os', [/* parameter description */
					[/* text */ 't', `the output stream on which to emit the XML document.`]
				]],
				[/* parameter */ 'comment', [/* parameter description */
					[/* text */ 't', `a description of the property list, or `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `
        if no comment is desired.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if writing to the specified output stream
         results in an `],
					[/* inline code block */ 'i', `IOException`],
					[/* text */ 't', `.`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `os`],
					[/* text */ 't', ` is null.`]
				]],
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if this `],
					[/* inline code block */ 'i', `Properties`],
					[/* text */ 't', ` object
         contains any keys or values that are not
         `],
					[/* inline code block */ 'i', `Strings`],
					[/* text */ 't', `.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'storeToXML(java.io.OutputStream,java.lang.String,java.nio.charset.Charset)', [
			[/* method description */
				[/* text */ 't', `Emits an XML document representing all of the properties contained
 in this table, using the specified encoding.

 `],
				[/* block */ 'b', `The XML document will have the following DOCTYPE declaration:
 `],
				[/* code block */ 'c', ` <!DOCTYPE properties SYSTEM "http://java.sun.com/dtd/properties.dtd">
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `If the specified comment is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` then no comment
 will be stored in the document.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` An implementation is required to support writing of XML documents
 that use the "`],
					[/* inline code block */ 'i', `UTF-8`],
					[/* text */ 't', `" or "`],
					[/* inline code block */ 'i', `UTF-16`],
					[/* text */ 't', `" encoding. An
 implementation may support additional encodings.

 `]
				]],
				[/* block */ 'b', ` Unmappable characters for the specified charset will be encoded as
 numeric character references.

 `],
				[/* block */ 'b', `The specified stream remains open after this method returns.`]
			],
			[/* parameters */
				[/* parameter */ 'os', [/* parameter description */
					[/* text */ 't', `the output stream on which to emit the XML document.`]
				]],
				[/* parameter */ 'comment', [/* parameter description */
					[/* text */ 't', `a description of the property list, or `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `
                  if no comment is desired.`]
				]],
				[/* parameter */ 'charset', [/* parameter description */
					[/* text */ 't', `the charset`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if writing to the specified output stream
         results in an `],
					[/* inline code block */ 'i', `IOException`],
					[/* text */ 't', `.`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `os`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `charset`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]],
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if this `],
					[/* inline code block */ 'i', `Properties`],
					[/* text */ 't', ` object
         contains any keys or values that are not `],
					[/* inline code block */ 'i', `Strings`],
					[/* text */ 't', `.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'keys()', UDF],
		[/* method */ 'keySet()', UDF],
		[/* method */ 'containsValue(java.lang.Object)', UDF],
		[/* method */ 'getOrDefault(java.lang.Object,java.lang.Object)', UDF],
		[/* method */ 'computeIfPresent(java.lang.Object,java.util.function.BiFunction)', UDF],
		[/* method */ 'save(java.io.OutputStream,java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Calls the `],
				[/* inline code block */ 'i', `store(OutputStream out, String comments)`],
				[/* text */ 't', ` method
 and suppresses IOExceptions that were thrown.`]
			],
			[/* parameters */
				[/* parameter */ 'out', [/* parameter description */
					[/* text */ 't', `an output stream.`]
				]],
				[/* parameter */ 'comments', [/* parameter description */
					[/* text */ 't', `a description of the property list.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if this `],
					[/* inline code block */ 'i', `Properties`],
					[/* text */ 't', ` object
             contains any keys or values that are not
             `],
					[/* inline code block */ 'i', `Strings`],
					[/* text */ 't', `.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'loadFromXML(java.io.InputStream)', [
			[/* method description */
				[/* text */ 't', `Loads all of the properties represented by the XML document on the
 specified input stream into this properties table.

 `],
				[/* block */ 'b', `The XML document must have the following DOCTYPE declaration:
 `],
				[/* code block */ 'c', ` <!DOCTYPE properties SYSTEM "http://java.sun.com/dtd/properties.dtd">
 `],
				[/* text */ 't', `
 Furthermore, the document must satisfy the properties DTD described
 above.

 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', ` An implementation is required to read XML documents that use the
 "`],
					[/* inline code block */ 'i', `UTF-8`],
					[/* text */ 't', `" or "`],
					[/* inline code block */ 'i', `UTF-16`],
					[/* text */ 't', `" encoding. An implementation may
 support additional encodings.

 `]
				]],
				[/* block */ 'b', `The specified stream is closed after this method returns.`]
			],
			[/* parameters */
				[/* parameter */ 'in', [/* parameter description */
					[/* text */ 't', `the input stream from which to read the XML document.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if reading from the specified input stream
         results in an `],
					[/* inline code block */ 'i', `IOException`],
					[/* text */ 't', `.`]
				]],
				[/* throw */ 'java.io.UnsupportedEncodingException', [/* throw description */
					[/* text */ 't', `if the document's encoding
         declaration can be read and it specifies an encoding that is not
         supported`]
				]],
				[/* throw */ 'java.util.InvalidPropertiesFormatException', [/* throw description */
					[/* text */ 't', `Data on input stream does not
         constitute a valid XML document with the mandated document type.`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `in`],
					[/* text */ 't', ` is null.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'propertyNames()', [
			[/* method description */
				[/* text */ 't', `Returns an enumeration of all the keys in this property list,
 including distinct keys in the default property list if a key
 of the same name has not already been found from the main
 properties list.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if any key in this property list
          is not a string.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `an enumeration of all the keys in this property list, including
          the keys in the default property list.`]
			]
		]],
		[/* method */ 'stringPropertyNames()', [
			[/* method description */
				[/* text */ 't', `Returns an unmodifiable set of keys from this property list
 where the key and its corresponding value are strings,
 including distinct keys in the default property list if a key
 of the same name has not already been found from the main
 properties list.  Properties whose key or value is not
 of type `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', ` are omitted.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The returned set is not backed by this `],
					[/* inline code block */ 'i', `Properties`],
					[/* text */ 't', ` object.
 Changes to this `],
					[/* inline code block */ 'i', `Properties`],
					[/* text */ 't', ` object are not reflected in the
 returned set.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an unmodifiable set of keys in this property list where
          the key and its corresponding value are strings,
          including the keys in the default property list.`]
			]
		]],
		[/* method */ 'rehash()', UDF]
	],
]);
