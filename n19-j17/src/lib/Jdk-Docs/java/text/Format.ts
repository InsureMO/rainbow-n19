import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.text.Format', [
	[/* class description */
		[/* inline code block */ 'i', `Format`],
		[/* text */ 't', ` is an abstract base class for formatting locale-sensitive
 information such as dates, messages, and numbers.

 `],
		[/* block */ 'b', [
			[/* inline code block */ 'i', `Format`],
			[/* text */ 't', ` defines the programming interface for formatting
 locale-sensitive objects into `],
			[/* inline code block */ 'i', `String`],
			[/* text */ 't', `s (the
 `],
			[/* inline code block */ 'i', `format`],
			[/* text */ 't', ` method) and for parsing `],
			[/* inline code block */ 'i', `String`],
			[/* text */ 't', `s back
 into objects (the `],
			[/* inline code block */ 'i', `parseObject`],
			[/* text */ 't', ` method).

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 Generally, a format's `],
			[/* inline code block */ 'i', `parseObject`],
			[/* text */ 't', ` method must be able to parse
 any string formatted by its `],
			[/* inline code block */ 'i', `format`],
			[/* text */ 't', ` method. However, there may
 be exceptional cases where this is not possible. For example, a
 `],
			[/* inline code block */ 'i', `format`],
			[/* text */ 't', ` method might create two adjacent integer numbers with
 no separator in between, and in this case the `],
			[/* inline code block */ 'i', `parseObject`],
			[/* text */ 't', ` could
 not tell which digits belong to which number.

 `]
		]],
		[/* block */ 'b', `Subclassing`],
		[/* block */ 'b', [
			[/* text */ 't', `
 The Java Platform provides three specialized subclasses of `],
			[/* inline code block */ 'i', `Format`],
			[/* text */ 't', `--
 `],
			[/* inline code block */ 'i', `DateFormat`],
			[/* text */ 't', `, `],
			[/* inline code block */ 'i', `MessageFormat`],
			[/* text */ 't', `, and
 `],
			[/* inline code block */ 'i', `NumberFormat`],
			[/* text */ 't', `--for formatting dates, messages, and numbers,
 respectively.
 `]
		]],
		[/* block */ 'b', `
 Concrete subclasses must implement three methods:
 `],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* inline code block */ 'i', `format(Object obj, StringBuffer toAppendTo, FieldPosition pos)`]
			]],
			[/* block */ 'b', [
				[/* inline code block */ 'i', `formatToCharacterIterator(Object obj)`]
			]],
			[/* block */ 'b', [
				[/* inline code block */ 'i', `parseObject(String source, ParsePosition pos)`]
			]]
		]],
		[/* text */ 't', `
 These general methods allow polymorphic parsing and formatting of objects
 and are used, for example, by `],
		[/* inline code block */ 'i', `MessageFormat`],
		[/* text */ 't', `.
 Subclasses often also provide additional `],
		[/* inline code block */ 'i', `format`],
		[/* text */ 't', ` methods for
 specific input types as well as `],
		[/* inline code block */ 'i', `parse`],
		[/* text */ 't', ` methods for specific
 result types. Any `],
		[/* inline code block */ 'i', `parse`],
		[/* text */ 't', ` method that does not take a
 `],
		[/* inline code block */ 'i', `ParsePosition`],
		[/* text */ 't', ` argument should throw `],
		[/* inline code block */ 'i', `ParseException`],
		[/* text */ 't', `
 when no text in the required format is at the beginning of the input text.

 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', `
 Most subclasses will also implement the following factory methods:
 `],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* inline code block */ 'i', `getInstance`],
				[/* text */ 't', ` for getting a useful format object appropriate
 for the current locale
 `]
			]],
			[/* block */ 'b', [
				[/* inline code block */ 'i', `getInstance(Locale)`],
				[/* text */ 't', ` for getting a useful format
 object appropriate for the specified locale
 `]
			]]
		]],
		[/* text */ 't', `
 In addition, some subclasses may also implement other
 `],
		[/* inline code block */ 'i', `getXxxxInstance`],
		[/* text */ 't', ` methods for more specialized control. For
 example, the `],
		[/* inline code block */ 'i', `NumberFormat`],
		[/* text */ 't', ` class provides
 `],
		[/* inline code block */ 'i', `getPercentInstance`],
		[/* text */ 't', ` and `],
		[/* inline code block */ 'i', `getCurrencyInstance`],
		[/* text */ 't', `
 methods for getting specialized number formatters.

 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `
 Subclasses of `],
			[/* inline code block */ 'i', `Format`],
			[/* text */ 't', ` that allow programmers to create objects
 for locales (with `],
			[/* inline code block */ 'i', `getInstance(Locale)`],
			[/* text */ 't', ` for example)
 must also implement the following class method:
 `]
		]],
		[/* block */ 'b', [
			[/* code block */ 'c', ` public static Locale[] getAvailableLocales()
 `]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `
 And finally subclasses may define a set of constants to identify the various
 fields in the formatted output. These constants are used to create a FieldPosition
 object which identifies what information is contained in the field and its
 position in the formatted result. These constants should be named
 `],
			[/* inline code block */ 'i', `item_FIELD`],
			[/* text */ 't', ` where `],
			[/* inline code block */ 'i', `item`],
			[/* text */ 't', ` identifies
 the field. For examples of these constants, see `],
			[/* inline code block */ 'i', `ERA_FIELD`],
			[/* text */ 't', ` and its
 friends in `],
			[/* reference */ 'r', `java.text.DateFormat`, `DateFormat`],
			[/* text */ 't', `.

 `]
		]],
		[/* block */ 'b', [
			[/* anchor */ 'r', '#-id', `synchronization`, `Synchronization`]
		]],
		[/* block */ 'b', `
 Formats are generally not synchronized.
 It is recommended to create separate format instances for each thread.
 If multiple threads access a format concurrently, it must be synchronized
 externally.`]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Sole constructor.  (For invocation by subclass constructors, typically
 implicit.)`]
			],
			/* parameters */ UDF,
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'parseObject(java.lang.String,java.text.ParsePosition)', [
			[/* method description */
				[/* text */ 't', `Parses text from a string to produce an object.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The method attempts to parse text starting at the index given by
 `],
					[/* inline code block */ 'i', `pos`],
					[/* text */ 't', `.
 If parsing succeeds, then the index of `],
					[/* inline code block */ 'i', `pos`],
					[/* text */ 't', ` is updated
 to the index after the last character used (parsing does not necessarily
 use all characters up to the end of the string), and the parsed
 object is returned. The updated `],
					[/* inline code block */ 'i', `pos`],
					[/* text */ 't', ` can be used to
 indicate the starting point for the next call to this method.
 If an error occurs, then the index of `],
					[/* inline code block */ 'i', `pos`],
					[/* text */ 't', ` is not
 changed, the error index of `],
					[/* inline code block */ 'i', `pos`],
					[/* text */ 't', ` is set to the index of
 the character where the error occurred, and null is returned.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'source', [/* parameter description */
					[/* text */ 't', `A `],
					[/* inline code block */ 'i', `String`],
					[/* text */ 't', `, part of which should be parsed.`]
				]],
				[/* parameter */ 'pos', [/* parameter description */
					[/* text */ 't', `A `],
					[/* inline code block */ 'i', `ParsePosition`],
					[/* text */ 't', ` object with index and error
            index information as described above.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `source`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `pos`],
					[/* text */ 't', ` is null.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `An `],
				[/* inline code block */ 'i', `Object`],
				[/* text */ 't', ` parsed from the string. In case of
         error, returns null.`]
			]
		]],
		[/* method */ 'format(java.lang.Object,java.lang.StringBuffer,java.text.FieldPosition)', [
			[/* method description */
				[/* text */ 't', `Formats an object and appends the resulting text to a given string
 buffer.
 If the `],
				[/* inline code block */ 'i', `pos`],
				[/* text */ 't', ` argument identifies a field used by the format,
 then its indices are set to the beginning and end of the first such
 field encountered.`]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `The object to format`]
				]],
				[/* parameter */ 'toAppendTo', [/* parameter description */
					[/* text */ 't', `where the text is to be appended`]
				]],
				[/* parameter */ 'pos', [/* parameter description */
					[/* text */ 't', `A `],
					[/* inline code block */ 'i', `FieldPosition`],
					[/* text */ 't', ` identifying a field
               in the formatted text`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `toAppendTo`],
					[/* text */ 't', ` or
            `],
					[/* inline code block */ 'i', `pos`],
					[/* text */ 't', ` is null`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the Format cannot format the given
            object`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the string buffer passed in as `],
				[/* inline code block */ 'i', `toAppendTo`],
				[/* text */ 't', `,
               with formatted text appended`]
			]
		]],
		[/* method */ 'format(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Formats an object to produce a string. This is equivalent to
 `],
				[/* block */ 'b', [
					[/* reference */ 'r', `#format(java.lang.Object,java.lang.StringBuffer,java.text.FieldPosition)`, `format`],
					[/* inline code block */ 'i', `(obj, new StringBuffer(), new FieldPosition(0)).toString();`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `The object to format`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the Format cannot format the given
            object`]
				]]
			],
			[/* return description */
				[/* text */ 't', `Formatted string.`]
			]
		]],
		[/* method */ 'clone()', [
			[/* method description */
				[/* text */ 't', `Creates and returns a copy of this object.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a clone of this instance.`]
			]
		]],
		[/* method */ 'parseObject(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Parses text from the beginning of the given string to produce an object.
 The method may not use the entire text of the given string.`]
			],
			[/* parameters */
				[/* parameter */ 'source', [/* parameter description */
					[/* text */ 't', `A `],
					[/* inline code block */ 'i', `String`],
					[/* text */ 't', ` whose beginning should be parsed.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.text.ParseException', [/* throw description */
					[/* text */ 't', `if the beginning of the specified string
            cannot be parsed.`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `source`],
					[/* text */ 't', ` is null.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `An `],
				[/* inline code block */ 'i', `Object`],
				[/* text */ 't', ` parsed from the string.`]
			]
		]],
		[/* method */ 'formatToCharacterIterator(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Formats an Object producing an `],
				[/* inline code block */ 'i', `AttributedCharacterIterator`],
				[/* text */ 't', `.
 You can use the returned `],
				[/* inline code block */ 'i', `AttributedCharacterIterator`],
				[/* text */ 't', `
 to build the resulting String, as well as to determine information
 about the resulting String.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 Each attribute key of the AttributedCharacterIterator will be of type
 `],
					[/* inline code block */ 'i', `Field`],
					[/* text */ 't', `. It is up to each `],
					[/* inline code block */ 'i', `Format`],
					[/* text */ 't', ` implementation
 to define what the legal values are for each attribute in the
 `],
					[/* inline code block */ 'i', `AttributedCharacterIterator`],
					[/* text */ 't', `, but typically the attribute
 key is also used as the attribute value.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The default implementation creates an
 `],
					[/* inline code block */ 'i', `AttributedCharacterIterator`],
					[/* text */ 't', ` with no attributes. Subclasses
 that support fields should override this and create an
 `],
					[/* inline code block */ 'i', `AttributedCharacterIterator`],
					[/* text */ 't', ` with meaningful attributes.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `The object to format`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if obj is null.`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `when the Format cannot format the
            given object.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `AttributedCharacterIterator describing the formatted value.`]
			]
		]]
	],
]);
