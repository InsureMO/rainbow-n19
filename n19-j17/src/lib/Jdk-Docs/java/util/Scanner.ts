import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.util.Scanner', [
	[/* class description */
		[/* text */ 't', `A simple text scanner which can parse primitive types and strings using
 regular expressions.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `A `],
			[/* inline code block */ 'i', `Scanner`],
			[/* text */ 't', ` breaks its input into tokens using a
 delimiter pattern, which by default matches whitespace. The resulting
 tokens may then be converted into values of different types using the
 various `],
			[/* inline code block */ 'i', `next`],
			[/* text */ 't', ` methods.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `For example, this code allows a user to read a number from
 `],
			[/* inline code block */ 'i', `System.in`],
			[/* text */ 't', `:
 `]
		]],
		[/* block */ 'b', [
			[/* code block */ 'c', [
				[/* inline code block */ 'i', `Scanner sc = new Scanner(System.in);
     int i = sc.nextInt();`]
			]]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `As another example, this code allows `],
			[/* inline code block */ 'i', `long`],
			[/* text */ 't', ` types to be
 assigned from entries in a file `],
			[/* inline code block */ 'i', `myNumbers`],
			[/* text */ 't', `:
 `]
		]],
		[/* block */ 'b', [
			[/* code block */ 'c', [
				[/* inline code block */ 'i', `Scanner sc = new Scanner(new File("myNumbers"));
      while (sc.hasNextLong()) {
          long aLong = sc.nextLong();
      }`]
			]]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', `The scanner can also use delimiters other than whitespace. This
 example reads several items in from a string:
 `],
		[/* block */ 'b', [
			[/* code block */ 'c', [
				[/* inline code block */ 'i', `String input = "1 fish 2 fish red fish blue fish";
     Scanner s = new Scanner(input).useDelimiter("\\\\s*fish\\\\s*");
     System.out.println(s.nextInt());
     System.out.println(s.nextInt());
     System.out.println(s.next());
     System.out.println(s.next());
     s.close();`]
			]]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', `
 prints the following output:
 `],
		[/* block */ 'b', [
			[/* code block */ 'c', [
				[/* inline code block */ 'i', `1
     2
     red
     blue`]
			]]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', `The same output can be generated with this code, which uses a regular
 expression to parse all four tokens at once:
 `],
		[/* block */ 'b', [
			[/* code block */ 'c', [
				[/* inline code block */ 'i', `String input = "1 fish 2 fish red fish blue fish";
     Scanner s = new Scanner(input);
     s.findInLine("(\\\\d+) fish (\\\\d+) fish (\\\\w+) fish (\\\\w+)");
     MatchResult result = s.match();
     for (int i=1; i<=result.groupCount(); i++)
         System.out.println(result.group(i));
     s.close();`]
			]]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `The `],
			[/* text */ 't', `default whitespace delimiter`],
			[/* text */ 't', ` used
 by a scanner is as recognized by `],
			[/* reference */ 'r', `java.Character#isWhitespace(int)`],
			[/* text */ 't', `. The `],
			[/* reference */ 'r', `#reset()`, `reset()`],
			[/* text */ 't', `
 method will reset the value of the scanner's delimiter to the default
 whitespace delimiter regardless of whether it was previously changed.

 `]
		]],
		[/* block */ 'b', `A scanning operation may block waiting for input.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `The `],
			[/* reference */ 'r', `#next()`, `next()`],
			[/* text */ 't', ` and `],
			[/* reference */ 'r', `#hasNext()`, `hasNext()`],
			[/* text */ 't', ` methods and their
 companion methods (such as `],
			[/* reference */ 'r', `#nextInt()`, `nextInt()`],
			[/* text */ 't', ` and
 `],
			[/* reference */ 'r', `#hasNextInt()`, `hasNextInt()`],
			[/* text */ 't', `) first skip any input that matches the delimiter
 pattern, and then attempt to return the next token. Both `],
			[/* inline code block */ 'i', `hasNext()`],
			[/* text */ 't', `
 and `],
			[/* inline code block */ 'i', `next()`],
			[/* text */ 't', ` methods may block waiting for further input.  Whether a
 `],
			[/* inline code block */ 'i', `hasNext()`],
			[/* text */ 't', ` method blocks has no connection to whether or not its
 associated `],
			[/* inline code block */ 'i', `next()`],
			[/* text */ 't', ` method will block. The `],
			[/* reference */ 'r', `#tokens()`, `tokens()`],
			[/* text */ 't', ` method
 may also block waiting for input.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `The `],
			[/* reference */ 'r', `#findInLine(java.lang.String)`, `findInLine()`],
			[/* text */ 't', `,
 `],
			[/* reference */ 'r', `#findWithinHorizon(java.lang.String,int)`, `findWithinHorizon()`],
			[/* text */ 't', `,
 `],
			[/* reference */ 'r', `#skip(java.util.regex.Pattern)`, `skip()`],
			[/* text */ 't', `, and `],
			[/* reference */ 'r', `#findAll(java.util.regex.Pattern)`, `findAll()`],
			[/* text */ 't', `
 methods operate independently of the delimiter pattern. These methods will
 attempt to match the specified pattern with no regard to delimiters in the
 input and thus can be used in special circumstances where delimiters are
 not relevant. These methods may block waiting for more input.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `When a scanner throws an `],
			[/* reference */ 'r', `java.util.InputMismatchException`],
			[/* text */ 't', `, the scanner
 will not pass the token that caused the exception, so that it may be
 retrieved or skipped via some other method.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Depending upon the type of delimiting pattern, empty tokens may be
 returned. For example, the pattern `],
			[/* inline code block */ 'i', `"\\\\s+"`],
			[/* text */ 't', ` will return no empty
 tokens since it matches multiple instances of the delimiter. The delimiting
 pattern `],
			[/* inline code block */ 'i', `"\\\\s"`],
			[/* text */ 't', ` could return empty tokens since it only passes one
 space at a time.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` A scanner can read text from any object which implements the `],
			[/* reference */ 'r', `java.lang.Readable`],
			[/* text */ 't', ` interface.  If an invocation of the underlying
 readable's `],
			[/* reference */ 'r', `java.Readable#read(java.nio.CharBuffer)`],
			[/* text */ 't', ` method throws an `],
			[/* reference */ 'r', `java.io.IOException`],
			[/* text */ 't', ` then the scanner assumes that the end of the input
 has been reached.  The most recent `],
			[/* inline code block */ 'i', `IOException`],
			[/* text */ 't', ` thrown by the
 underlying readable can be retrieved via the `],
			[/* reference */ 'r', `#ioException()`, `ioException()`],
			[/* text */ 't', ` method.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `When a `],
			[/* inline code block */ 'i', `Scanner`],
			[/* text */ 't', ` is closed, it will close its input source
 if the source implements the `],
			[/* reference */ 'r', `java.io.Closeable`],
			[/* text */ 't', ` interface.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `A `],
			[/* inline code block */ 'i', `Scanner`],
			[/* text */ 't', ` is not safe for multithreaded use without
 external synchronization.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Unless otherwise mentioned, passing a `],
			[/* inline code block */ 'i', `null`],
			[/* text */ 't', ` parameter into
 any method of a `],
			[/* inline code block */ 'i', `Scanner`],
			[/* text */ 't', ` will cause a
 `],
			[/* inline code block */ 'i', `NullPointerException`],
			[/* text */ 't', ` to be thrown.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `A scanner will default to interpreting numbers as decimal unless a
 different radix has been set by using the `],
			[/* reference */ 'r', `#useRadix(int)`, `useRadix(int)`],
			[/* text */ 't', ` method. The
 `],
			[/* reference */ 'r', `#reset()`, `reset()`],
			[/* text */ 't', ` method will reset the value of the scanner's radix to
 `],
			[/* inline code block */ 'i', `10`],
			[/* text */ 't', ` regardless of whether it was previously changed.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Localized numbers`]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` An instance of this class is capable of scanning numbers in the standard
 formats as well as in the formats of the scanner's locale. A scanner's
 `],
			[/* text */ 't', `initial locale`],
			[/* text */ 't', `is the value returned by the `],
			[/* reference */ 'r', `.Locale#getDefault(java.util.Locale.Category)`],
			[/* text */ 't', ` method; it may be changed via the `],
			[/* reference */ 'r', `#useLocale(java.util.Locale)`, `useLocale()`],
			[/* text */ 't', ` method. The `],
			[/* reference */ 'r', `#reset()`, `reset()`],
			[/* text */ 't', ` method will reset the value of the
 scanner's locale to the initial locale regardless of whether it was
 previously changed.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `The localized formats are defined in terms of the following parameters,
 which for a particular locale are taken from that locale's `],
			[/* reference */ 'r', `java.text.DecimalFormat`],
			[/* text */ 't', ` object, `],
			[/* inline code block */ 'i', `df`],
			[/* text */ 't', `, and its and
 `],
			[/* reference */ 'r', `java.text.DecimalFormatSymbols`],
			[/* text */ 't', ` object,
 `],
			[/* inline code block */ 'i', `dfs`],
			[/* text */ 't', `.

 `]
		]],
		[/* block */ 'b', [
			[/* dl */ 'dl', [
				[/* dt */ 'dt', [
					[/* text */ 't', `LocalGroupSeparator  `],
					[/* text */ 't', `
         `]
				]],
				[/* dd */ 'dd', [
					[/* text */ 't', `The character used to separate thousands groups,
         `],
					[/* text */ 't', `i.e.,`],
					[/* text */ 't', ` `],
					[/* inline code block */ 'i', `dfs.`],
					[/* reference */ 'r', `java.DecimalFormatSymbols#getGroupingSeparator()`],
					[/* text */ 't', `
     `]
				]],
				[/* dt */ 'dt', [
					[/* text */ 't', `LocalDecimalSeparator  `],
					[/* text */ 't', `
         `]
				]],
				[/* dd */ 'dd', [
					[/* text */ 't', `The character used for the decimal point,
     `],
					[/* text */ 't', `i.e.,`],
					[/* text */ 't', ` `],
					[/* inline code block */ 'i', `dfs.`],
					[/* reference */ 'r', `java.DecimalFormatSymbols#getDecimalSeparator()`],
					[/* text */ 't', `
     `]
				]],
				[/* dt */ 'dt', [
					[/* text */ 't', `LocalPositivePrefix  `],
					[/* text */ 't', `
         `]
				]],
				[/* dd */ 'dd', [
					[/* text */ 't', `The string that appears before a positive number (may
         be empty), `],
					[/* text */ 't', `i.e.,`],
					[/* text */ 't', ` `],
					[/* inline code block */ 'i', `df.`],
					[/* reference */ 'r', `java.DecimalFormat#getPositivePrefix()`],
					[/* text */ 't', `
     `]
				]],
				[/* dt */ 'dt', [
					[/* text */ 't', `LocalPositiveSuffix  `],
					[/* text */ 't', `
         `]
				]],
				[/* dd */ 'dd', [
					[/* text */ 't', `The string that appears after a positive number (may be
         empty), `],
					[/* text */ 't', `i.e.,`],
					[/* text */ 't', ` `],
					[/* inline code block */ 'i', `df.`],
					[/* reference */ 'r', `java.DecimalFormat#getPositiveSuffix()`],
					[/* text */ 't', `
     `]
				]],
				[/* dt */ 'dt', [
					[/* text */ 't', `LocalNegativePrefix  `],
					[/* text */ 't', `
         `]
				]],
				[/* dd */ 'dd', [
					[/* text */ 't', `The string that appears before a negative number (may
         be empty), `],
					[/* text */ 't', `i.e.,`],
					[/* text */ 't', ` `],
					[/* inline code block */ 'i', `df.`],
					[/* reference */ 'r', `java.DecimalFormat#getNegativePrefix()`],
					[/* text */ 't', `
     `]
				]],
				[/* dt */ 'dt', [
					[/* text */ 't', `LocalNegativeSuffix  `],
					[/* text */ 't', `
         `]
				]],
				[/* dd */ 'dd', [
					[/* text */ 't', `The string that appears after a negative number (may be
         empty), `],
					[/* text */ 't', `i.e.,`],
					[/* text */ 't', ` `],
					[/* inline code block */ 'i', `df.`],
					[/* reference */ 'r', `java.DecimalFormat#getNegativeSuffix()`],
					[/* text */ 't', `
     `]
				]],
				[/* dt */ 'dt', [
					[/* text */ 't', `LocalNaN  `],
					[/* text */ 't', `
         `]
				]],
				[/* dd */ 'dd', [
					[/* text */ 't', `The string that represents not-a-number for
         floating-point values,
         `],
					[/* text */ 't', `i.e.,`],
					[/* text */ 't', ` `],
					[/* inline code block */ 'i', `dfs.`],
					[/* reference */ 'r', `java.DecimalFormatSymbols#getNaN()`],
					[/* text */ 't', `
     `]
				]],
				[/* dt */ 'dt', [
					[/* text */ 't', `LocalInfinity  `],
					[/* text */ 't', `
         `]
				]],
				[/* dd */ 'dd', [
					[/* text */ 't', `The string that represents infinity for floating-point
         values, `],
					[/* text */ 't', `i.e.,`],
					[/* text */ 't', ` `],
					[/* inline code block */ 'i', `dfs.`],
					[/* reference */ 'r', `java.DecimalFormatSymbols#getInfinity()`],
					[/* text */ 't', `
 `]
				]]
			]]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `Number syntax`]
		]],
		[/* block */ 'b', ` The strings that can be parsed as numbers by an instance of this class
 are specified in terms of the following regular-expression grammar, where
 Rmax is the highest digit in the radix being used (for example, Rmax is 9 in base 10).

 `],
		[/* dl */ 'dl', [
			[/* dt */ 'dt', [
				[/* text */ 't', `NonAsciiDigit`],
				[/* text */ 't', `:
       `]
			]],
			[/* dd */ 'dd', [
				[/* text */ 't', `A non-ASCII character c for which
            `],
				[/* reference */ 'r', `java.Character#isDigit(char)`],
				[/* inline code block */ 'i', `(c)`],
				[/* text */ 't', `
                        returns true

   `]
			]],
			[/* dt */ 'dt', [
				[/* text */ 't', `Non0Digit`],
				[/* text */ 't', `:
       `]
			]],
			[/* dd */ 'dd', [
				[/* inline code block */ 'i', `[1-`],
				[/* text */ 't', `Rmax`],
				[/* inline code block */ 'i', `] |`],
				[/* text */ 't', `NonASCIIDigit`],
				[/* text */ 't', `

   `]
			]],
			[/* dt */ 'dt', [
				[/* text */ 't', `Digit`],
				[/* text */ 't', `:
       `]
			]],
			[/* dd */ 'dd', [
				[/* inline code block */ 'i', `[0-`],
				[/* text */ 't', `Rmax`],
				[/* inline code block */ 'i', `] |`],
				[/* text */ 't', `NonASCIIDigit`],
				[/* text */ 't', `

   `]
			]],
			[/* dt */ 'dt', [
				[/* text */ 't', `GroupedNumeral`],
				[/* text */ 't', `:
       `]
			]],
			[/* dd */ 'dd', [
				[/* inline code block */ 'i', `(`],
				[/* text */ 't', `Non0Digit`],
				[/* text */ 't', `
                   `],
				[/* text */ 't', `Digit`],
				[/* inline code block */ 'i', `?`],
				[/* text */ 't', `Digit`],
				[/* inline code block */ 'i', `?`],
				[/* text */ 't', `
       `]
			]],
			[/* dd */ 'dd', [
				[/* text */ 't', `    `],
				[/* inline code block */ 'i', `(`],
				[/* text */ 't', `LocalGroupSeparator`],
				[/* text */ 't', `
                         `],
				[/* text */ 't', `Digit`],
				[/* text */ 't', `
                         `],
				[/* text */ 't', `Digit`],
				[/* text */ 't', `
                         `],
				[/* text */ 't', `Digit`],
				[/* inline code block */ 'i', `)+ )`],
				[/* text */ 't', `

   `]
			]],
			[/* dt */ 'dt', [
				[/* text */ 't', `Numeral`],
				[/* text */ 't', `:
       `]
			]],
			[/* dd */ 'dd', [
				[/* inline code block */ 'i', `( (`],
				[/* text */ 't', `Digit`],
				[/* inline code block */ 'i', `+ ) |`],
				[/* text */ 't', `GroupedNumeral`],
				[/* inline code block */ 'i', `)`],
				[/* text */ 't', `

   `]
			]],
			[/* dt */ 'dt', [
				[/* text */ 't', `Integer:`],
				[/* text */ 't', `
       `]
			]],
			[/* dd */ 'dd', [
				[/* inline code block */ 'i', `( [-+]? (`],
				[/* text */ 't', `Numeral`],
				[/* inline code block */ 'i', `) )`],
				[/* text */ 't', `
       `]
			]],
			[/* dd */ 'dd', [
				[/* inline code block */ 'i', `|`],
				[/* text */ 't', `LocalPositivePrefix`],
				[/* text */ 't', ` `],
				[/* text */ 't', `Numeral`],
				[/* text */ 't', `
                      `],
				[/* text */ 't', `LocalPositiveSuffix`],
				[/* text */ 't', `
       `]
			]],
			[/* dd */ 'dd', [
				[/* inline code block */ 'i', `|`],
				[/* text */ 't', `LocalNegativePrefix`],
				[/* text */ 't', ` `],
				[/* text */ 't', `Numeral`],
				[/* text */ 't', `
                 `],
				[/* text */ 't', `LocalNegativeSuffix`],
				[/* text */ 't', `

   `]
			]],
			[/* dt */ 'dt', [
				[/* text */ 't', `DecimalNumeral`],
				[/* text */ 't', `:
       `]
			]],
			[/* dd */ 'dd', [
				[/* text */ 't', `Numeral`],
				[/* text */ 't', `
       `]
			]],
			[/* dd */ 'dd', [
				[/* inline code block */ 'i', `|`],
				[/* text */ 't', `Numeral`],
				[/* text */ 't', `
                 `],
				[/* text */ 't', `LocalDecimalSeparator`],
				[/* text */ 't', `
                 `],
				[/* text */ 't', `Digit`],
				[/* inline code block */ 'i', `*`],
				[/* text */ 't', `
       `]
			]],
			[/* dd */ 'dd', [
				[/* inline code block */ 'i', `|`],
				[/* text */ 't', `LocalDecimalSeparator`],
				[/* text */ 't', `
                 `],
				[/* text */ 't', `Digit`],
				[/* inline code block */ 'i', `+`],
				[/* text */ 't', `

   `]
			]],
			[/* dt */ 'dt', [
				[/* text */ 't', `Exponent`],
				[/* text */ 't', `:
       `]
			]],
			[/* dd */ 'dd', [
				[/* inline code block */ 'i', `( [eE] [+-]?`],
				[/* text */ 't', `Digit`],
				[/* inline code block */ 'i', `+ )`],
				[/* text */ 't', `

   `]
			]],
			[/* dt */ 'dt', [
				[/* text */ 't', `Decimal:`],
				[/* text */ 't', `
       `]
			]],
			[/* dd */ 'dd', [
				[/* inline code block */ 'i', `( [-+]?`],
				[/* text */ 't', `DecimalNumeral`],
				[/* text */ 't', `
                         `],
				[/* text */ 't', `Exponent`],
				[/* inline code block */ 'i', `? )`],
				[/* text */ 't', `
       `]
			]],
			[/* dd */ 'dd', [
				[/* inline code block */ 'i', `|`],
				[/* text */ 't', `LocalPositivePrefix`],
				[/* text */ 't', `
                 `],
				[/* text */ 't', `DecimalNumeral`],
				[/* text */ 't', `
                 `],
				[/* text */ 't', `LocalPositiveSuffix`],
				[/* text */ 't', `
                 `],
				[/* text */ 't', `Exponent`],
				[/* inline code block */ 'i', `?`],
				[/* text */ 't', `
       `]
			]],
			[/* dd */ 'dd', [
				[/* inline code block */ 'i', `|`],
				[/* text */ 't', `LocalNegativePrefix`],
				[/* text */ 't', `
                 `],
				[/* text */ 't', `DecimalNumeral`],
				[/* text */ 't', `
                 `],
				[/* text */ 't', `LocalNegativeSuffix`],
				[/* text */ 't', `
                 `],
				[/* text */ 't', `Exponent`],
				[/* inline code block */ 'i', `?`],
				[/* text */ 't', `

   `]
			]],
			[/* dt */ 'dt', [
				[/* text */ 't', `HexFloat`],
				[/* text */ 't', `:
       `]
			]],
			[/* dd */ 'dd', [
				[/* inline code block */ 'i', `[-+]? 0[xX][0-9a-fA-F]*\\.[0-9a-fA-F]+ ([pP][-+]?[0-9]+)?`],
				[/* text */ 't', `

   `]
			]],
			[/* dt */ 'dt', [
				[/* text */ 't', `NonNumber`],
				[/* text */ 't', `:
       `]
			]],
			[/* dd */ 'dd', [
				[/* inline code block */ 'i', `NaN |`],
				[/* text */ 't', `LocalNan`],
				[/* inline code block */ 'i', `| Infinity |`],
				[/* text */ 't', `LocalInfinity`],
				[/* text */ 't', `

   `]
			]],
			[/* dt */ 'dt', [
				[/* text */ 't', `SignedNonNumber`],
				[/* text */ 't', `:
       `]
			]],
			[/* dd */ 'dd', [
				[/* inline code block */ 'i', `( [-+]?`],
				[/* text */ 't', `NonNumber`],
				[/* inline code block */ 'i', `)`],
				[/* text */ 't', `
       `]
			]],
			[/* dd */ 'dd', [
				[/* inline code block */ 'i', `|`],
				[/* text */ 't', `LocalPositivePrefix`],
				[/* text */ 't', `
                 `],
				[/* text */ 't', `NonNumber`],
				[/* text */ 't', `
                 `],
				[/* text */ 't', `LocalPositiveSuffix`],
				[/* text */ 't', `
       `]
			]],
			[/* dd */ 'dd', [
				[/* inline code block */ 'i', `|`],
				[/* text */ 't', `LocalNegativePrefix`],
				[/* text */ 't', `
                 `],
				[/* text */ 't', `NonNumber`],
				[/* text */ 't', `
                 `],
				[/* text */ 't', `LocalNegativeSuffix`],
				[/* text */ 't', `

   `]
			]],
			[/* dt */ 'dt', [
				[/* text */ 't', `Float`],
				[/* text */ 't', `:
       `]
			]],
			[/* dd */ 'dd', [
				[/* text */ 't', `Decimal`],
				[/* text */ 't', `
           `],
				[/* inline code block */ 'i', `|`],
				[/* text */ 't', `HexFloat`],
				[/* text */ 't', `
           `],
				[/* inline code block */ 'i', `|`],
				[/* text */ 't', `SignedNonNumber`],
				[/* text */ 't', `

 `]
			]]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', `Whitespace is not significant in the above regular expressions.`]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>(java.io.File)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new `],
				[/* inline code block */ 'i', `Scanner`],
				[/* text */ 't', ` that produces values scanned
 from the specified file. Bytes from the file are converted into
 characters using the underlying platform's
 `],
				[/* reference */ 'r', `java.charset.Charset#defaultCharset()`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'source', [/* parameter description */
					[/* text */ 't', `A file to be scanned`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.FileNotFoundException', [/* throw description */
					[/* text */ 't', `if source is not found`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.io.File,java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new `],
				[/* inline code block */ 'i', `Scanner`],
				[/* text */ 't', ` that produces values scanned
 from the specified file. Bytes from the file are converted into
 characters using the specified charset.`]
			],
			[/* parameters */
				[/* parameter */ 'source', [/* parameter description */
					[/* text */ 't', `A file to be scanned`]
				]],
				[/* parameter */ 'charsetName', [/* parameter description */
					[/* text */ 't', `The encoding type used to convert bytes from the file
        into characters to be scanned`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.FileNotFoundException', [/* throw description */
					[/* text */ 't', `if source is not found`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the specified encoding is
         not found`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.io.File,java.nio.charset.Charset)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new `],
				[/* inline code block */ 'i', `Scanner`],
				[/* text */ 't', ` that produces values scanned
 from the specified file. Bytes from the file are converted into
 characters using the specified charset.`]
			],
			[/* parameters */
				[/* parameter */ 'source', [/* parameter description */
					[/* text */ 't', `A file to be scanned`]
				]],
				[/* parameter */ 'charset', [/* parameter description */
					[/* text */ 't', `The charset used to convert bytes from the file
         into characters to be scanned`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs opening the source`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.io.InputStream)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new `],
				[/* inline code block */ 'i', `Scanner`],
				[/* text */ 't', ` that produces values scanned
 from the specified input stream. Bytes from the stream are converted
 into characters using the underlying platform's
 `],
				[/* reference */ 'r', `java.charset.Charset#defaultCharset()`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'source', [/* parameter description */
					[/* text */ 't', `An input stream to be scanned`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.io.InputStream,java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new `],
				[/* inline code block */ 'i', `Scanner`],
				[/* text */ 't', ` that produces values scanned
 from the specified input stream. Bytes from the stream are converted
 into characters using the specified charset.`]
			],
			[/* parameters */
				[/* parameter */ 'source', [/* parameter description */
					[/* text */ 't', `An input stream to be scanned`]
				]],
				[/* parameter */ 'charsetName', [/* parameter description */
					[/* text */ 't', `The encoding type used to convert bytes from the
        stream into characters to be scanned`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the specified character set
         does not exist`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.io.InputStream,java.nio.charset.Charset)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new `],
				[/* inline code block */ 'i', `Scanner`],
				[/* text */ 't', ` that produces values scanned
 from the specified input stream. Bytes from the stream are converted
 into characters using the specified charset.`]
			],
			[/* parameters */
				[/* parameter */ 'source', [/* parameter description */
					[/* text */ 't', `an input stream to be scanned`]
				]],
				[/* parameter */ 'charset', [/* parameter description */
					[/* text */ 't', `the charset used to convert bytes from the file
         into characters to be scanned`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.Readable)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new `],
				[/* inline code block */ 'i', `Scanner`],
				[/* text */ 't', ` that produces values scanned
 from the specified source.`]
			],
			[/* parameters */
				[/* parameter */ 'source', [/* parameter description */
					[/* text */ 't', `A character source implementing the `],
					[/* reference */ 'r', `java.lang.Readable`],
					[/* text */ 't', `
         interface`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new `],
				[/* inline code block */ 'i', `Scanner`],
				[/* text */ 't', ` that produces values scanned
 from the specified string.`]
			],
			[/* parameters */
				[/* parameter */ 'source', [/* parameter description */
					[/* text */ 't', `A string to scan`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.nio.channels.ReadableByteChannel)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new `],
				[/* inline code block */ 'i', `Scanner`],
				[/* text */ 't', ` that produces values scanned
 from the specified channel. Bytes from the source are converted into
 characters using the underlying platform's
 `],
				[/* reference */ 'r', `java.charset.Charset#defaultCharset()`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'source', [/* parameter description */
					[/* text */ 't', `A channel to scan`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.nio.channels.ReadableByteChannel,java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new `],
				[/* inline code block */ 'i', `Scanner`],
				[/* text */ 't', ` that produces values scanned
 from the specified channel. Bytes from the source are converted into
 characters using the specified charset.`]
			],
			[/* parameters */
				[/* parameter */ 'source', [/* parameter description */
					[/* text */ 't', `A channel to scan`]
				]],
				[/* parameter */ 'charsetName', [/* parameter description */
					[/* text */ 't', `The encoding type used to convert bytes from the
        channel into characters to be scanned`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the specified character set
         does not exist`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.nio.channels.ReadableByteChannel,java.nio.charset.Charset)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new `],
				[/* inline code block */ 'i', `Scanner`],
				[/* text */ 't', ` that produces values scanned
 from the specified channel. Bytes from the source are converted into
 characters using the specified charset.`]
			],
			[/* parameters */
				[/* parameter */ 'source', [/* parameter description */
					[/* text */ 't', `a channel to scan`]
				]],
				[/* parameter */ 'charset', [/* parameter description */
					[/* text */ 't', `the encoding type used to convert bytes from the
        channel into characters to be scanned`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.nio.file.Path)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new `],
				[/* inline code block */ 'i', `Scanner`],
				[/* text */ 't', ` that produces values scanned
 from the specified file. Bytes from the file are converted into
 characters using the underlying platform's
 `],
				[/* reference */ 'r', `java.charset.Charset#defaultCharset()`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'source', [/* parameter description */
					[/* text */ 't', `the path to the file to be scanned`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs opening source`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.nio.file.Path,java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new `],
				[/* inline code block */ 'i', `Scanner`],
				[/* text */ 't', ` that produces values scanned
 from the specified file. Bytes from the file are converted into
 characters using the specified charset.`]
			],
			[/* parameters */
				[/* parameter */ 'source', [/* parameter description */
					[/* text */ 't', `the path to the file to be scanned`]
				]],
				[/* parameter */ 'charsetName', [/* parameter description */
					[/* text */ 't', `The encoding type used to convert bytes from the file
          into characters to be scanned`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs opening source`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the specified encoding is not found`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.nio.file.Path,java.nio.charset.Charset)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new `],
				[/* inline code block */ 'i', `Scanner`],
				[/* text */ 't', ` that produces values scanned
 from the specified file. Bytes from the file are converted into
 characters using the specified charset.`]
			],
			[/* parameters */
				[/* parameter */ 'source', [/* parameter description */
					[/* text */ 't', `the path to the file to be scanned`]
				]],
				[/* parameter */ 'charset', [/* parameter description */
					[/* text */ 't', `the charset used to convert bytes from the file
          into characters to be scanned`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs opening the source`]
				]]
			]
		]]
	],
	[/* methods */
		[/* method */ 'hasNext()', [
			[/* method description */
				[/* text */ 't', `Returns true if this scanner has another token in its input.
 This method may block while waiting for input to scan.
 The scanner does not advance past any input.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `if this scanner is closed`]
				]]
			],
			[/* return description */
				[/* text */ 't', `true if and only if this scanner has another token`]
			]
		]],
		[/* method */ 'hasNext(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Returns true if the next token matches the pattern constructed from the
 specified string. The scanner does not advance past any input.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` An invocation of this method of the form `],
					[/* inline code block */ 'i', `hasNext(pattern)`],
					[/* text */ 't', `
 behaves in exactly the same way as the invocation
 `],
					[/* inline code block */ 'i', `hasNext(Pattern.compile(pattern))`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'pattern', [/* parameter description */
					[/* text */ 't', `a string specifying the pattern to scan`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `if this scanner is closed`]
				]]
			],
			[/* return description */
				[/* text */ 't', `true if and only if this scanner has another token matching
         the specified pattern`]
			]
		]],
		[/* method */ 'hasNext(java.util.regex.Pattern)', [
			[/* method description */
				[/* text */ 't', `Returns true if the next complete token matches the specified pattern.
 A complete token is prefixed and postfixed by input that matches
 the delimiter pattern. This method may block while waiting for input.
 The scanner does not advance past any input.`]
			],
			[/* parameters */
				[/* parameter */ 'pattern', [/* parameter description */
					[/* text */ 't', `the pattern to scan for`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `if this scanner is closed`]
				]]
			],
			[/* return description */
				[/* text */ 't', `true if and only if this scanner has another token matching
         the specified pattern`]
			]
		]],
		[/* method */ 'hasNextBigDecimal()', [
			[/* method description */
				[/* text */ 't', `Returns true if the next token in this scanner's input can be
 interpreted as a `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', ` using the
 `],
				[/* reference */ 'r', `#nextBigDecimal()`, `nextBigDecimal()`],
				[/* text */ 't', ` method. The scanner does not advance past any
 input.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `if this scanner is closed`]
				]]
			],
			[/* return description */
				[/* text */ 't', `true if and only if this scanner's next token is a valid
         `],
				[/* inline code block */ 'i', `BigDecimal`]
			]
		]],
		[/* method */ 'hasNextBigInteger()', [
			[/* method description */
				[/* text */ 't', `Returns true if the next token in this scanner's input can be
 interpreted as a `],
				[/* inline code block */ 'i', `BigInteger`],
				[/* text */ 't', ` in the default radix using the
 `],
				[/* reference */ 'r', `#nextBigInteger()`, `nextBigInteger()`],
				[/* text */ 't', ` method. The scanner does not advance past any
 input.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `if this scanner is closed`]
				]]
			],
			[/* return description */
				[/* text */ 't', `true if and only if this scanner's next token is a valid
         `],
				[/* inline code block */ 'i', `BigInteger`]
			]
		]],
		[/* method */ 'hasNextBigInteger(int)', [
			[/* method description */
				[/* text */ 't', `Returns true if the next token in this scanner's input can be
 interpreted as a `],
				[/* inline code block */ 'i', `BigInteger`],
				[/* text */ 't', ` in the specified radix using
 the `],
				[/* reference */ 'r', `#nextBigInteger()`, `nextBigInteger()`],
				[/* text */ 't', ` method. The scanner does not advance past
 any input.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If the radix is less than `],
					[/* reference */ 'r', `java.Character#MIN_RADIX`],
					[/* text */ 't', `
 or greater than `],
					[/* reference */ 'r', `java.Character#MAX_RADIX`],
					[/* text */ 't', `, then an
 `],
					[/* inline code block */ 'i', `IllegalArgumentException`],
					[/* text */ 't', ` is thrown.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'radix', [/* parameter description */
					[/* text */ 't', `the radix used to interpret the token as an integer`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `if this scanner is closed`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the radix is out of range`]
				]]
			],
			[/* return description */
				[/* text */ 't', `true if and only if this scanner's next token is a valid
         `],
				[/* inline code block */ 'i', `BigInteger`]
			]
		]],
		[/* method */ 'hasNextBoolean()', [
			[/* method description */
				[/* text */ 't', `Returns true if the next token in this scanner's input can be
 interpreted as a boolean value using a case insensitive pattern
 created from the string "true|false".  The scanner does not
 advance past the input that matched.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `if this scanner is closed`]
				]]
			],
			[/* return description */
				[/* text */ 't', `true if and only if this scanner's next token is a valid
         boolean value`]
			]
		]],
		[/* method */ 'hasNextByte()', [
			[/* method description */
				[/* text */ 't', `Returns true if the next token in this scanner's input can be
 interpreted as a byte value in the default radix using the
 `],
				[/* reference */ 'r', `#nextByte()`, `nextByte()`],
				[/* text */ 't', ` method. The scanner does not advance past any input.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `if this scanner is closed`]
				]]
			],
			[/* return description */
				[/* text */ 't', `true if and only if this scanner's next token is a valid
         byte value`]
			]
		]],
		[/* method */ 'hasNextByte(int)', [
			[/* method description */
				[/* text */ 't', `Returns true if the next token in this scanner's input can be
 interpreted as a byte value in the specified radix using the
 `],
				[/* reference */ 'r', `#nextByte()`, `nextByte()`],
				[/* text */ 't', ` method. The scanner does not advance past any input.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If the radix is less than `],
					[/* reference */ 'r', `java.Character#MIN_RADIX`],
					[/* text */ 't', `
 or greater than `],
					[/* reference */ 'r', `java.Character#MAX_RADIX`],
					[/* text */ 't', `, then an
 `],
					[/* inline code block */ 'i', `IllegalArgumentException`],
					[/* text */ 't', ` is thrown.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'radix', [/* parameter description */
					[/* text */ 't', `the radix used to interpret the token as a byte value`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `if this scanner is closed`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the radix is out of range`]
				]]
			],
			[/* return description */
				[/* text */ 't', `true if and only if this scanner's next token is a valid
         byte value`]
			]
		]],
		[/* method */ 'hasNextDouble()', [
			[/* method description */
				[/* text */ 't', `Returns true if the next token in this scanner's input can be
 interpreted as a double value using the `],
				[/* reference */ 'r', `#nextDouble()`, `nextDouble()`],
				[/* text */ 't', `
 method. The scanner does not advance past any input.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `if this scanner is closed`]
				]]
			],
			[/* return description */
				[/* text */ 't', `true if and only if this scanner's next token is a valid
         double value`]
			]
		]],
		[/* method */ 'hasNextFloat()', [
			[/* method description */
				[/* text */ 't', `Returns true if the next token in this scanner's input can be
 interpreted as a float value using the `],
				[/* reference */ 'r', `#nextFloat()`, `nextFloat()`],
				[/* text */ 't', `
 method. The scanner does not advance past any input.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `if this scanner is closed`]
				]]
			],
			[/* return description */
				[/* text */ 't', `true if and only if this scanner's next token is a valid
         float value`]
			]
		]],
		[/* method */ 'hasNextInt()', [
			[/* method description */
				[/* text */ 't', `Returns true if the next token in this scanner's input can be
 interpreted as an int value in the default radix using the
 `],
				[/* reference */ 'r', `#nextInt()`, `nextInt()`],
				[/* text */ 't', ` method. The scanner does not advance past any input.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `if this scanner is closed`]
				]]
			],
			[/* return description */
				[/* text */ 't', `true if and only if this scanner's next token is a valid
         int value`]
			]
		]],
		[/* method */ 'hasNextInt(int)', [
			[/* method description */
				[/* text */ 't', `Returns true if the next token in this scanner's input can be
 interpreted as an int value in the specified radix using the
 `],
				[/* reference */ 'r', `#nextInt()`, `nextInt()`],
				[/* text */ 't', ` method. The scanner does not advance past any input.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If the radix is less than `],
					[/* reference */ 'r', `java.Character#MIN_RADIX`],
					[/* text */ 't', `
 or greater than `],
					[/* reference */ 'r', `java.Character#MAX_RADIX`],
					[/* text */ 't', `, then an
 `],
					[/* inline code block */ 'i', `IllegalArgumentException`],
					[/* text */ 't', ` is thrown.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'radix', [/* parameter description */
					[/* text */ 't', `the radix used to interpret the token as an int value`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `if this scanner is closed`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the radix is out of range`]
				]]
			],
			[/* return description */
				[/* text */ 't', `true if and only if this scanner's next token is a valid
         int value`]
			]
		]],
		[/* method */ 'hasNextLine()', [
			[/* method description */
				[/* text */ 't', `Returns true if there is another line in the input of this scanner.
 This method may block while waiting for input. The scanner does not
 advance past any input.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `if this scanner is closed`]
				]]
			],
			[/* return description */
				[/* text */ 't', `true if and only if this scanner has another line of input`]
			]
		]],
		[/* method */ 'hasNextLong()', [
			[/* method description */
				[/* text */ 't', `Returns true if the next token in this scanner's input can be
 interpreted as a long value in the default radix using the
 `],
				[/* reference */ 'r', `#nextLong()`, `nextLong()`],
				[/* text */ 't', ` method. The scanner does not advance past any input.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `if this scanner is closed`]
				]]
			],
			[/* return description */
				[/* text */ 't', `true if and only if this scanner's next token is a valid
         long value`]
			]
		]],
		[/* method */ 'hasNextLong(int)', [
			[/* method description */
				[/* text */ 't', `Returns true if the next token in this scanner's input can be
 interpreted as a long value in the specified radix using the
 `],
				[/* reference */ 'r', `#nextLong()`, `nextLong()`],
				[/* text */ 't', ` method. The scanner does not advance past any input.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If the radix is less than `],
					[/* reference */ 'r', `java.Character#MIN_RADIX`],
					[/* text */ 't', `
 or greater than `],
					[/* reference */ 'r', `java.Character#MAX_RADIX`],
					[/* text */ 't', `, then an
 `],
					[/* inline code block */ 'i', `IllegalArgumentException`],
					[/* text */ 't', ` is thrown.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'radix', [/* parameter description */
					[/* text */ 't', `the radix used to interpret the token as a long value`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `if this scanner is closed`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the radix is out of range`]
				]]
			],
			[/* return description */
				[/* text */ 't', `true if and only if this scanner's next token is a valid
         long value`]
			]
		]],
		[/* method */ 'hasNextShort()', [
			[/* method description */
				[/* text */ 't', `Returns true if the next token in this scanner's input can be
 interpreted as a short value in the default radix using the
 `],
				[/* reference */ 'r', `#nextShort()`, `nextShort()`],
				[/* text */ 't', ` method. The scanner does not advance past any input.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `if this scanner is closed`]
				]]
			],
			[/* return description */
				[/* text */ 't', `true if and only if this scanner's next token is a valid
         short value in the default radix`]
			]
		]],
		[/* method */ 'hasNextShort(int)', [
			[/* method description */
				[/* text */ 't', `Returns true if the next token in this scanner's input can be
 interpreted as a short value in the specified radix using the
 `],
				[/* reference */ 'r', `#nextShort()`, `nextShort()`],
				[/* text */ 't', ` method. The scanner does not advance past any input.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If the radix is less than `],
					[/* reference */ 'r', `java.Character#MIN_RADIX`],
					[/* text */ 't', `
 or greater than `],
					[/* reference */ 'r', `java.Character#MAX_RADIX`],
					[/* text */ 't', `, then an
 `],
					[/* inline code block */ 'i', `IllegalArgumentException`],
					[/* text */ 't', ` is thrown.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'radix', [/* parameter description */
					[/* text */ 't', `the radix used to interpret the token as a short value`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `if this scanner is closed`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the radix is out of range`]
				]]
			],
			[/* return description */
				[/* text */ 't', `true if and only if this scanner's next token is a valid
         short value in the specified radix`]
			]
		]],
		[/* method */ 'nextBoolean()', [
			[/* method description */
				[/* text */ 't', `Scans the next token of the input into a boolean value and returns
 that value. This method will throw `],
				[/* inline code block */ 'i', `InputMismatchException`],
				[/* text */ 't', `
 if the next token cannot be translated into a valid boolean value.
 If the match is successful, the scanner advances past the input that
 matched.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.util.InputMismatchException', [/* throw description */
					[/* text */ 't', `if the next token is not a valid boolean`]
				]],
				[/* throw */ 'java.util.NoSuchElementException', [/* throw description */
					[/* text */ 't', `if input is exhausted`]
				]],
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `if this scanner is closed`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the boolean scanned from the input`]
			]
		]],
		[/* method */ 'nextByte()', [
			[/* method description */
				[/* text */ 't', `Scans the next token of the input as a `],
				[/* inline code block */ 'i', `byte`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` An invocation of this method of the form
 `],
					[/* inline code block */ 'i', `nextByte()`],
					[/* text */ 't', ` behaves in exactly the same way as the
 invocation `],
					[/* inline code block */ 'i', `nextByte(radix)`],
					[/* text */ 't', `, where `],
					[/* inline code block */ 'i', `radix`],
					[/* text */ 't', `
 is the default radix of this scanner.`]
				]]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.util.InputMismatchException', [/* throw description */
					[/* text */ 't', `if the next token does not match the `],
					[/* text */ 't', `Integer`],
					[/* text */ 't', `
         regular expression, or is out of range`]
				]],
				[/* throw */ 'java.util.NoSuchElementException', [/* throw description */
					[/* text */ 't', `if input is exhausted`]
				]],
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `if this scanner is closed`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the `],
				[/* inline code block */ 'i', `byte`],
				[/* text */ 't', ` scanned from the input`]
			]
		]],
		[/* method */ 'nextByte(int)', [
			[/* method description */
				[/* text */ 't', `Scans the next token of the input as a `],
				[/* inline code block */ 'i', `byte`],
				[/* text */ 't', `.
 This method will throw `],
				[/* inline code block */ 'i', `InputMismatchException`],
				[/* text */ 't', `
 if the next token cannot be translated into a valid byte value as
 described below. If the translation is successful, the scanner advances
 past the input that matched.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` If the next token matches the `],
					[/* text */ 't', `Integer`],
					[/* text */ 't', ` regular expression defined
 above then the token is converted into a `],
					[/* inline code block */ 'i', `byte`],
					[/* text */ 't', ` value as if by
 removing all locale specific prefixes, group separators, and locale
 specific suffixes, then mapping non-ASCII digits into ASCII
 digits via `],
					[/* reference */ 'r', `java.Character#digit(char,int)`],
					[/* text */ 't', `, prepending a
 negative sign (-) if the locale specific negative prefixes and suffixes
 were present, and passing the resulting string to
 `],
					[/* reference */ 'r', `java.Byte#parseByte(java.lang.String,int)`],
					[/* text */ 't', ` with the
 specified radix.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `If the radix is less than `],
					[/* reference */ 'r', `java.Character#MIN_RADIX`],
					[/* text */ 't', `
 or greater than `],
					[/* reference */ 'r', `java.Character#MAX_RADIX`],
					[/* text */ 't', `, then an
 `],
					[/* inline code block */ 'i', `IllegalArgumentException`],
					[/* text */ 't', ` is thrown.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'radix', [/* parameter description */
					[/* text */ 't', `the radix used to interpret the token as a byte value`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.util.InputMismatchException', [/* throw description */
					[/* text */ 't', `if the next token does not match the `],
					[/* text */ 't', `Integer`],
					[/* text */ 't', `
         regular expression, or is out of range`]
				]],
				[/* throw */ 'java.util.NoSuchElementException', [/* throw description */
					[/* text */ 't', `if input is exhausted`]
				]],
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `if this scanner is closed`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the radix is out of range`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the `],
				[/* inline code block */ 'i', `byte`],
				[/* text */ 't', ` scanned from the input`]
			]
		]],
		[/* method */ 'nextDouble()', [
			[/* method description */
				[/* text */ 't', `Scans the next token of the input as a `],
				[/* inline code block */ 'i', `double`],
				[/* text */ 't', `.
 This method will throw `],
				[/* inline code block */ 'i', `InputMismatchException`],
				[/* text */ 't', `
 if the next token cannot be translated into a valid double value.
 If the translation is successful, the scanner advances past the input
 that matched.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` If the next token matches the `],
					[/* text */ 't', `Float`],
					[/* text */ 't', ` regular expression defined above
 then the token is converted into a `],
					[/* inline code block */ 'i', `double`],
					[/* text */ 't', ` value as if by
 removing all locale specific prefixes, group separators, and locale
 specific suffixes, then mapping non-ASCII digits into ASCII
 digits via `],
					[/* reference */ 'r', `java.Character#digit(char,int)`],
					[/* text */ 't', `, prepending a
 negative sign (-) if the locale specific negative prefixes and suffixes
 were present, and passing the resulting string to
 `],
					[/* reference */ 'r', `java.Double#parseDouble(java.lang.String)`],
					[/* text */ 't', `. If the token matches
 the localized NaN or infinity strings, then either "Nan" or "Infinity"
 is passed to `],
					[/* reference */ 'r', `java.Double#parseDouble(java.lang.String)`],
					[/* text */ 't', ` as
 appropriate.`]
				]]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.util.InputMismatchException', [/* throw description */
					[/* text */ 't', `if the next token does not match the `],
					[/* text */ 't', `Float`],
					[/* text */ 't', `
         regular expression, or is out of range`]
				]],
				[/* throw */ 'java.util.NoSuchElementException', [/* throw description */
					[/* text */ 't', `if the input is exhausted`]
				]],
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `if this scanner is closed`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the `],
				[/* inline code block */ 'i', `double`],
				[/* text */ 't', ` scanned from the input`]
			]
		]],
		[/* method */ 'nextFloat()', [
			[/* method description */
				[/* text */ 't', `Scans the next token of the input as a `],
				[/* inline code block */ 'i', `float`],
				[/* text */ 't', `.
 This method will throw `],
				[/* inline code block */ 'i', `InputMismatchException`],
				[/* text */ 't', `
 if the next token cannot be translated into a valid float value as
 described below. If the translation is successful, the scanner advances
 past the input that matched.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` If the next token matches the `],
					[/* text */ 't', `Float`],
					[/* text */ 't', ` regular expression defined above
 then the token is converted into a `],
					[/* inline code block */ 'i', `float`],
					[/* text */ 't', ` value as if by
 removing all locale specific prefixes, group separators, and locale
 specific suffixes, then mapping non-ASCII digits into ASCII
 digits via `],
					[/* reference */ 'r', `java.Character#digit(char,int)`],
					[/* text */ 't', `, prepending a
 negative sign (-) if the locale specific negative prefixes and suffixes
 were present, and passing the resulting string to
 `],
					[/* reference */ 'r', `java.Float#parseFloat(java.lang.String)`],
					[/* text */ 't', `. If the token matches
 the localized NaN or infinity strings, then either "Nan" or "Infinity"
 is passed to `],
					[/* reference */ 'r', `java.Float#parseFloat(java.lang.String)`],
					[/* text */ 't', ` as
 appropriate.`]
				]]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.util.InputMismatchException', [/* throw description */
					[/* text */ 't', `if the next token does not match the `],
					[/* text */ 't', `Float`],
					[/* text */ 't', `
         regular expression, or is out of range`]
				]],
				[/* throw */ 'java.util.NoSuchElementException', [/* throw description */
					[/* text */ 't', `if input is exhausted`]
				]],
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `if this scanner is closed`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the `],
				[/* inline code block */ 'i', `float`],
				[/* text */ 't', ` scanned from the input`]
			]
		]],
		[/* method */ 'nextInt()', [
			[/* method description */
				[/* text */ 't', `Scans the next token of the input as an `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` An invocation of this method of the form
 `],
					[/* inline code block */ 'i', `nextInt()`],
					[/* text */ 't', ` behaves in exactly the same way as the
 invocation `],
					[/* inline code block */ 'i', `nextInt(radix)`],
					[/* text */ 't', `, where `],
					[/* inline code block */ 'i', `radix`],
					[/* text */ 't', `
 is the default radix of this scanner.`]
				]]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.util.InputMismatchException', [/* throw description */
					[/* text */ 't', `if the next token does not match the `],
					[/* text */ 't', `Integer`],
					[/* text */ 't', `
         regular expression, or is out of range`]
				]],
				[/* throw */ 'java.util.NoSuchElementException', [/* throw description */
					[/* text */ 't', `if input is exhausted`]
				]],
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `if this scanner is closed`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` scanned from the input`]
			]
		]],
		[/* method */ 'nextInt(int)', [
			[/* method description */
				[/* text */ 't', `Scans the next token of the input as an `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', `.
 This method will throw `],
				[/* inline code block */ 'i', `InputMismatchException`],
				[/* text */ 't', `
 if the next token cannot be translated into a valid int value as
 described below. If the translation is successful, the scanner advances
 past the input that matched.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` If the next token matches the `],
					[/* text */ 't', `Integer`],
					[/* text */ 't', ` regular expression defined
 above then the token is converted into an `],
					[/* inline code block */ 'i', `int`],
					[/* text */ 't', ` value as if by
 removing all locale specific prefixes, group separators, and locale
 specific suffixes, then mapping non-ASCII digits into ASCII
 digits via `],
					[/* reference */ 'r', `java.Character#digit(char,int)`],
					[/* text */ 't', `, prepending a
 negative sign (-) if the locale specific negative prefixes and suffixes
 were present, and passing the resulting string to
 `],
					[/* reference */ 'r', `java.Integer#parseInt(java.lang.String,int)`],
					[/* text */ 't', ` with the
 specified radix.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `If the radix is less than `],
					[/* reference */ 'r', `java.Character#MIN_RADIX`],
					[/* text */ 't', `
 or greater than `],
					[/* reference */ 'r', `java.Character#MAX_RADIX`],
					[/* text */ 't', `, then an
 `],
					[/* inline code block */ 'i', `IllegalArgumentException`],
					[/* text */ 't', ` is thrown.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'radix', [/* parameter description */
					[/* text */ 't', `the radix used to interpret the token as an int value`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.util.InputMismatchException', [/* throw description */
					[/* text */ 't', `if the next token does not match the `],
					[/* text */ 't', `Integer`],
					[/* text */ 't', `
         regular expression, or is out of range`]
				]],
				[/* throw */ 'java.util.NoSuchElementException', [/* throw description */
					[/* text */ 't', `if input is exhausted`]
				]],
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `if this scanner is closed`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the radix is out of range`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` scanned from the input`]
			]
		]],
		[/* method */ 'radix()', [
			[/* method description */
				[/* text */ 't', `Returns this scanner's default radix.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `A scanner's radix affects elements of its default
 number matching regular expressions; see
 `],
					[/* text */ 't', `localized numbers`],
					[/* text */ 't', ` above.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the default radix of this scanner`]
			]
		]],
		[/* method */ 'ioException()', [
			[/* method description */
				[/* text */ 't', `Returns the `],
				[/* inline code block */ 'i', `IOException`],
				[/* text */ 't', ` last thrown by this
 `],
				[/* inline code block */ 'i', `Scanner`],
				[/* text */ 't', `'s underlying `],
				[/* inline code block */ 'i', `Readable`],
				[/* text */ 't', `. This method
 returns `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if no such exception exists.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the last exception thrown by this scanner's readable`]
			]
		]],
		[/* method */ 'findInLine(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Attempts to find the next occurrence of a pattern constructed from the
 specified string, ignoring delimiters.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `An invocation of this method of the form `],
					[/* inline code block */ 'i', `findInLine(pattern)`],
					[/* text */ 't', `
 behaves in exactly the same way as the invocation
 `],
					[/* inline code block */ 'i', `findInLine(Pattern.compile(pattern))`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'pattern', [/* parameter description */
					[/* text */ 't', `a string specifying the pattern to search for`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `if this scanner is closed`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the text that matched the specified pattern`]
			]
		]],
		[/* method */ 'findInLine(java.util.regex.Pattern)', [
			[/* method description */
				[/* text */ 't', `Attempts to find the next occurrence of the specified pattern ignoring
 delimiters. If the pattern is found before the next line separator, the
 scanner advances past the input that matched and returns the string that
 matched the pattern.
 If no such pattern is detected in the input up to the next line
 separator, then `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` is returned and the scanner's
 position is unchanged. This method may block waiting for input that
 matches the pattern.

 `],
				[/* block */ 'b', `Since this method continues to search through the input looking
 for the specified pattern, it may buffer all of the input searching for
 the desired token if no line separators are present.`]
			],
			[/* parameters */
				[/* parameter */ 'pattern', [/* parameter description */
					[/* text */ 't', `the pattern to scan for`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `if this scanner is closed`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the text that matched the specified pattern`]
			]
		]],
		[/* method */ 'findWithinHorizon(java.lang.String,int)', [
			[/* method description */
				[/* text */ 't', `Attempts to find the next occurrence of a pattern constructed from the
 specified string, ignoring delimiters.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `An invocation of this method of the form
 `],
					[/* inline code block */ 'i', `findWithinHorizon(pattern)`],
					[/* text */ 't', ` behaves in exactly the same way as
 the invocation
 `],
					[/* inline code block */ 'i', `findWithinHorizon(Pattern.compile(pattern), horizon)`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'pattern', [/* parameter description */
					[/* text */ 't', `a string specifying the pattern to search for`]
				]],
				[/* parameter */ 'horizon', [/* parameter description */
					[/* text */ 't', `the search horizon`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `if this scanner is closed`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if horizon is negative`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the text that matched the specified pattern`]
			]
		]],
		[/* method */ 'findWithinHorizon(java.util.regex.Pattern,int)', [
			[/* method description */
				[/* text */ 't', `Attempts to find the next occurrence of the specified pattern.

 `],
				[/* block */ 'b', `This method searches through the input up to the specified
 search horizon, ignoring delimiters. If the pattern is found the
 scanner advances past the input that matched and returns the string
 that matched the pattern. If no such pattern is detected then the
 null is returned and the scanner's position remains unchanged. This
 method may block waiting for input that matches the pattern.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `A scanner will never search more than `],
					[/* inline code block */ 'i', `horizon`],
					[/* text */ 't', ` code
 points beyond its current position. Note that a match may be clipped
 by the horizon; that is, an arbitrary match result may have been
 different if the horizon had been larger. The scanner treats the
 horizon as a transparent, non-anchoring bound (see `],
					[/* reference */ 'r', `.Matcher#useTransparentBounds(boolean)`],
					[/* text */ 't', ` and `],
					[/* reference */ 'r', `.Matcher#useAnchoringBounds(boolean)`],
					[/* text */ 't', `).

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `If horizon is `],
					[/* inline code block */ 'i', `0`],
					[/* text */ 't', `, then the horizon is ignored and
 this method continues to search through the input looking for the
 specified pattern without bound. In this case it may buffer all of
 the input searching for the pattern.

 `]
				]],
				[/* block */ 'b', `If horizon is negative, then an IllegalArgumentException is
 thrown.`]
			],
			[/* parameters */
				[/* parameter */ 'pattern', [/* parameter description */
					[/* text */ 't', `the pattern to scan for`]
				]],
				[/* parameter */ 'horizon', [/* parameter description */
					[/* text */ 't', `the search horizon`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `if this scanner is closed`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if horizon is negative`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the text that matched the specified pattern`]
			]
		]],
		[/* method */ 'next()', [
			[/* method description */
				[/* text */ 't', `Finds and returns the next complete token from this scanner.
 A complete token is preceded and followed by input that matches
 the delimiter pattern. This method may block while waiting for input
 to scan, even if a previous invocation of `],
				[/* reference */ 'r', `#hasNext()`, `hasNext()`],
				[/* text */ 't', ` returned
 `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.util.NoSuchElementException', [/* throw description */
					[/* text */ 't', `if no more tokens are available`]
				]],
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `if this scanner is closed`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the next token`]
			]
		]],
		[/* method */ 'next(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Returns the next token if it matches the pattern constructed from the
 specified string.  If the match is successful, the scanner advances
 past the input that matched the pattern.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` An invocation of this method of the form `],
					[/* inline code block */ 'i', `next(pattern)`],
					[/* text */ 't', `
 behaves in exactly the same way as the invocation
 `],
					[/* inline code block */ 'i', `next(Pattern.compile(pattern))`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'pattern', [/* parameter description */
					[/* text */ 't', `a string specifying the pattern to scan`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.util.NoSuchElementException', [/* throw description */
					[/* text */ 't', `if no such tokens are available`]
				]],
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `if this scanner is closed`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the next token`]
			]
		]],
		[/* method */ 'next(java.util.regex.Pattern)', [
			[/* method description */
				[/* text */ 't', `Returns the next token if it matches the specified pattern. This
 method may block while waiting for input to scan, even if a previous
 invocation of `],
				[/* reference */ 'r', `#hasNext(java.util.regex.Pattern)`, `hasNext(Pattern)`],
				[/* text */ 't', ` returned `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', `.
 If the match is successful, the scanner advances past the input that
 matched the pattern.`]
			],
			[/* parameters */
				[/* parameter */ 'pattern', [/* parameter description */
					[/* text */ 't', `the pattern to scan for`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.util.NoSuchElementException', [/* throw description */
					[/* text */ 't', `if no more tokens are available`]
				]],
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `if this scanner is closed`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the next token`]
			]
		]],
		[/* method */ 'nextLine()', [
			[/* method description */
				[/* text */ 't', `Advances this scanner past the current line and returns the input
 that was skipped.

 This method returns the rest of the current line, excluding any line
 separator at the end. The position is set to the beginning of the next
 line.

 `],
				[/* block */ 'b', `Since this method continues to search through the input looking
 for a line separator, it may buffer all of the input searching for
 the line to skip if no line separators are present.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.util.NoSuchElementException', [/* throw description */
					[/* text */ 't', `if no line was found`]
				]],
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `if this scanner is closed`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the line that was skipped`]
			]
		]],
		[/* method */ 'toString()', [
			[/* method description */
				[/* block */ 'b', [
					[/* text */ 't', `Returns the string representation of this `],
					[/* inline code block */ 'i', `Scanner`],
					[/* text */ 't', `. The
 string representation of a `],
					[/* inline code block */ 'i', `Scanner`],
					[/* text */ 't', ` contains information
 that may be useful for debugging. The exact format is unspecified.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The string representation of this scanner`]
			]
		]],
		[/* method */ 'nextBigDecimal()', [
			[/* method description */
				[/* text */ 't', `Scans the next token of the input as a `],
				[/* reference */ 'r', `java.math.BigDecimal`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` If the next token matches the `],
					[/* text */ 't', `Decimal`],
					[/* text */ 't', ` regular expression defined
 above then the token is converted into a `],
					[/* inline code block */ 'i', `BigDecimal`],
					[/* text */ 't', ` value as if
 by removing all group separators, mapping non-ASCII digits into ASCII
 digits via the `],
					[/* reference */ 'r', `java.Character#digit(char,int)`],
					[/* text */ 't', `, and passing the
 resulting string to the `],
					[/* reference */ 'r', `java.BigDecimal#<init>(java.lang.String)`],
					[/* text */ 't', `
 constructor.`]
				]]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.util.InputMismatchException', [/* throw description */
					[/* text */ 't', `if the next token does not match the `],
					[/* text */ 't', `Decimal`],
					[/* text */ 't', `
         regular expression, or is out of range`]
				]],
				[/* throw */ 'java.util.NoSuchElementException', [/* throw description */
					[/* text */ 't', `if the input is exhausted`]
				]],
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `if this scanner is closed`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', ` scanned from the input`]
			]
		]],
		[/* method */ 'nextBigInteger()', [
			[/* method description */
				[/* text */ 't', `Scans the next token of the input as a `],
				[/* reference */ 'r', `java.math.BigInteger`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` An invocation of this method of the form
 `],
					[/* inline code block */ 'i', `nextBigInteger()`],
					[/* text */ 't', ` behaves in exactly the same way as the
 invocation `],
					[/* inline code block */ 'i', `nextBigInteger(radix)`],
					[/* text */ 't', `, where `],
					[/* inline code block */ 'i', `radix`],
					[/* text */ 't', `
 is the default radix of this scanner.`]
				]]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.util.InputMismatchException', [/* throw description */
					[/* text */ 't', `if the next token does not match the `],
					[/* text */ 't', `Integer`],
					[/* text */ 't', `
         regular expression, or is out of range`]
				]],
				[/* throw */ 'java.util.NoSuchElementException', [/* throw description */
					[/* text */ 't', `if the input is exhausted`]
				]],
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `if this scanner is closed`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the `],
				[/* inline code block */ 'i', `BigInteger`],
				[/* text */ 't', ` scanned from the input`]
			]
		]],
		[/* method */ 'nextBigInteger(int)', [
			[/* method description */
				[/* text */ 't', `Scans the next token of the input as a `],
				[/* reference */ 'r', `java.math.BigInteger`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` If the next token matches the `],
					[/* text */ 't', `Integer`],
					[/* text */ 't', ` regular expression defined
 above then the token is converted into a `],
					[/* inline code block */ 'i', `BigInteger`],
					[/* text */ 't', ` value as if
 by removing all group separators, mapping non-ASCII digits into ASCII
 digits via the `],
					[/* reference */ 'r', `java.Character#digit(char,int)`],
					[/* text */ 't', `, and passing the
 resulting string to the `],
					[/* reference */ 'r', `java.BigInteger#<init>(java.lang.String)`],
					[/* text */ 't', ` constructor with the specified radix.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `If the radix is less than `],
					[/* reference */ 'r', `java.Character#MIN_RADIX`],
					[/* text */ 't', `
 or greater than `],
					[/* reference */ 'r', `java.Character#MAX_RADIX`],
					[/* text */ 't', `, then an
 `],
					[/* inline code block */ 'i', `IllegalArgumentException`],
					[/* text */ 't', ` is thrown.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'radix', [/* parameter description */
					[/* text */ 't', `the radix used to interpret the token`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.util.InputMismatchException', [/* throw description */
					[/* text */ 't', `if the next token does not match the `],
					[/* text */ 't', `Integer`],
					[/* text */ 't', `
         regular expression, or is out of range`]
				]],
				[/* throw */ 'java.util.NoSuchElementException', [/* throw description */
					[/* text */ 't', `if the input is exhausted`]
				]],
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `if this scanner is closed`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the radix is out of range`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the `],
				[/* inline code block */ 'i', `BigInteger`],
				[/* text */ 't', ` scanned from the input`]
			]
		]],
		[/* method */ 'locale()', [
			[/* method description */
				[/* text */ 't', `Returns this scanner's locale.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `A scanner's locale affects many elements of its default
 primitive matching regular expressions; see
 `],
					[/* text */ 't', `localized numbers`],
					[/* text */ 't', ` above.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `this scanner's locale`]
			]
		]],
		[/* method */ 'match()', [
			[/* method description */
				[/* text */ 't', `Returns the match result of the last scanning operation performed
 by this scanner. This method throws `],
				[/* inline code block */ 'i', `IllegalStateException`],
				[/* text */ 't', `
 if no match has been performed, or if the last match was
 not successful.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The various `],
					[/* inline code block */ 'i', `next`],
					[/* text */ 't', ` methods of `],
					[/* inline code block */ 'i', `Scanner`],
					[/* text */ 't', `
 make a match result available if they complete without throwing an
 exception. For instance, after an invocation of the `],
					[/* reference */ 'r', `#nextInt()`, `nextInt()`],
					[/* text */ 't', `
 method that returned an int, this method returns a
 `],
					[/* inline code block */ 'i', `MatchResult`],
					[/* text */ 't', ` for the search of the
 `],
					[/* text */ 't', `Integer`],
					[/* text */ 't', ` regular expression
 defined above. Similarly the `],
					[/* reference */ 'r', `#findInLine(java.lang.String)`, `findInLine()`],
					[/* text */ 't', `,
 `],
					[/* reference */ 'r', `#findWithinHorizon(java.lang.String,int)`, `findWithinHorizon()`],
					[/* text */ 't', `, and `],
					[/* reference */ 'r', `#skip(java.util.regex.Pattern)`, `skip()`],
					[/* text */ 't', `
 methods will make a match available if they succeed.`]
				]]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `If no match result is available`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a match result for the last match operation`]
			]
		]],
		[/* method */ 'delimiter()', [
			[/* method description */
				[/* text */ 't', `Returns the `],
				[/* inline code block */ 'i', `Pattern`],
				[/* text */ 't', ` this `],
				[/* inline code block */ 'i', `Scanner`],
				[/* text */ 't', ` is currently
 using to match delimiters.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `this scanner's delimiting pattern.`]
			]
		]],
		[/* method */ 'reset()', [
			[/* method description */
				[/* text */ 't', `Resets this scanner.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` Resetting a scanner discards all of its explicit state
 information which may have been changed by invocations of
 `],
					[/* reference */ 'r', `#useDelimiter(java.util.regex.Pattern)`, `useDelimiter()`],
					[/* text */ 't', `,
 `],
					[/* reference */ 'r', `#useLocale(java.util.Locale)`, `useLocale()`],
					[/* text */ 't', `, or
 `],
					[/* reference */ 'r', `#useRadix(int)`, `useRadix()`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` An invocation of this method of the form
 `],
					[/* inline code block */ 'i', `scanner.reset()`],
					[/* text */ 't', ` behaves in exactly the same way as the
 invocation

 `]
				]],
				[/* block */ 'b', [
					[/* code block */ 'c', [
						[/* inline code block */ 'i', `scanner.useDelimiter("\\\\p{javaWhitespace}+")
          .useLocale(Locale.getDefault(Locale.Category.FORMAT))
          .useRadix(10);`]
					]]
				]],
				[/* block */ 'b', '']
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `this scanner`]
			]
		]],
		[/* method */ 'skip(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Skips input that matches a pattern constructed from the specified
 string.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` An invocation of this method of the form `],
					[/* inline code block */ 'i', `skip(pattern)`],
					[/* text */ 't', `
 behaves in exactly the same way as the invocation
 `],
					[/* inline code block */ 'i', `skip(Pattern.compile(pattern))`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'pattern', [/* parameter description */
					[/* text */ 't', `a string specifying the pattern to skip over`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `if this scanner is closed`]
				]]
			],
			[/* return description */
				[/* text */ 't', `this scanner`]
			]
		]],
		[/* method */ 'skip(java.util.regex.Pattern)', [
			[/* method description */
				[/* text */ 't', `Skips input that matches the specified pattern, ignoring delimiters.
 This method will skip input if an anchored match of the specified
 pattern succeeds.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If a match to the specified pattern is not found at the
 current position, then no input is skipped and a
 `],
					[/* inline code block */ 'i', `NoSuchElementException`],
					[/* text */ 't', ` is thrown.

 `]
				]],
				[/* block */ 'b', `Since this method seeks to match the specified pattern starting at
 the scanner's current position, patterns that can match a lot of
 input (".*", for example) may cause the scanner to buffer a large
 amount of input.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Note that it is possible to skip something without risking a
 `],
					[/* inline code block */ 'i', `NoSuchElementException`],
					[/* text */ 't', ` by using a pattern that can
 match nothing, e.g., `],
					[/* inline code block */ 'i', `sc.skip("[ \\t]*")`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'pattern', [/* parameter description */
					[/* text */ 't', `a string specifying the pattern to skip over`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.util.NoSuchElementException', [/* throw description */
					[/* text */ 't', `if the specified pattern is not found`]
				]],
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `if this scanner is closed`]
				]]
			],
			[/* return description */
				[/* text */ 't', `this scanner`]
			]
		]],
		[/* method */ 'useDelimiter(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Sets this scanner's delimiting pattern to a pattern constructed from
 the specified `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` An invocation of this method of the form
 `],
					[/* inline code block */ 'i', `useDelimiter(pattern)`],
					[/* text */ 't', ` behaves in exactly the same way as the
 invocation `],
					[/* inline code block */ 'i', `useDelimiter(Pattern.compile(pattern))`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` Invoking the `],
					[/* reference */ 'r', `#reset()`, `reset()`],
					[/* text */ 't', ` method will set the scanner's delimiter
 to the `],
					[/* text */ 't', `default`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'pattern', [/* parameter description */
					[/* text */ 't', `A string specifying a delimiting pattern`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `this scanner`]
			]
		]],
		[/* method */ 'useDelimiter(java.util.regex.Pattern)', [
			[/* method description */
				[/* text */ 't', `Sets this scanner's delimiting pattern to the specified pattern.`]
			],
			[/* parameters */
				[/* parameter */ 'pattern', [/* parameter description */
					[/* text */ 't', `A delimiting pattern`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `this scanner`]
			]
		]],
		[/* method */ 'useLocale(java.util.Locale)', [
			[/* method description */
				[/* text */ 't', `Sets this scanner's locale to the specified locale.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `A scanner's locale affects many elements of its default
 primitive matching regular expressions; see
 `],
					[/* text */ 't', `localized numbers`],
					[/* text */ 't', ` above.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `Invoking the `],
					[/* reference */ 'r', `#reset()`, `reset()`],
					[/* text */ 't', ` method will set the scanner's locale to
 the `],
					[/* text */ 't', `initial locale`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'locale', [/* parameter description */
					[/* text */ 't', `A string specifying the locale to use`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `this scanner`]
			]
		]],
		[/* method */ 'useRadix(int)', [
			[/* method description */
				[/* text */ 't', `Sets this scanner's default radix to the specified radix.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `A scanner's radix affects elements of its default
 number matching regular expressions; see
 `],
					[/* text */ 't', `localized numbers`],
					[/* text */ 't', ` above.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `If the radix is less than `],
					[/* reference */ 'r', `java.Character#MIN_RADIX`],
					[/* text */ 't', `
 or greater than `],
					[/* reference */ 'r', `java.Character#MAX_RADIX`],
					[/* text */ 't', `, then an
 `],
					[/* inline code block */ 'i', `IllegalArgumentException`],
					[/* text */ 't', ` is thrown.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `Invoking the `],
					[/* reference */ 'r', `#reset()`, `reset()`],
					[/* text */ 't', ` method will set the scanner's radix to
 `],
					[/* inline code block */ 'i', `10`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'radix', [/* parameter description */
					[/* text */ 't', `The radix to use when scanning numbers`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if radix is out of range`]
				]]
			],
			[/* return description */
				[/* text */ 't', `this scanner`]
			]
		]],
		[/* method */ 'tokens()', [
			[/* method description */
				[/* text */ 't', `Returns a stream of delimiter-separated tokens from this scanner. The
 stream contains the same tokens that would be returned, starting from
 this scanner's current state, by calling the `],
				[/* reference */ 'r', `#next()`, `next()`],
				[/* text */ 't', ` method
 repeatedly until the `],
				[/* reference */ 'r', `#hasNext()`, `hasNext()`],
				[/* text */ 't', ` method returns false.

 `],
				[/* block */ 'b', `The resulting stream is sequential and ordered. All stream elements are
 non-null.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Scanning starts upon initiation of the terminal stream operation, using the
 current state of this scanner. Subsequent calls to any methods on this scanner
 other than `],
					[/* reference */ 'r', `#close()`, `close()`],
					[/* text */ 't', ` and `],
					[/* reference */ 'r', `#ioException()`, `ioException()`],
					[/* text */ 't', ` may return undefined results
 or may cause undefined effects on the returned stream. The returned stream's source
 `],
					[/* inline code block */ 'i', `Spliterator`],
					[/* text */ 't', ` is `],
					[/* text */ 't', `fail-fast`],
					[/* text */ 't', ` and will, on a best-effort basis, throw a
 `],
					[/* reference */ 'r', `java.util.ConcurrentModificationException`],
					[/* text */ 't', ` if any such calls are detected
 during stream pipeline execution.

 `]
				]],
				[/* block */ 'b', `After stream pipeline execution completes, this scanner is left in an indeterminate
 state and cannot be reused.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If this scanner contains a resource that must be released, this scanner
 should be closed, either by calling its `],
					[/* reference */ 'r', `#close()`, `close()`],
					[/* text */ 't', ` method, or by
 closing the returned stream. Closing the stream will close the underlying scanner.
 `],
					[/* inline code block */ 'i', `IllegalStateException`],
					[/* text */ 't', ` is thrown if the scanner has been closed when this
 method is called, or if this scanner is closed during stream pipeline execution.

 `]
				]],
				[/* block */ 'b', `This method might block waiting for more input.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `if this scanner is closed`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a sequential stream of token strings`]
			]
		]],
		[/* method */ 'findAll(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Returns a stream of match results that match the provided pattern string.
 The effect is equivalent to the following code:

 `],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `scanner.findAll(Pattern.compile(patString))`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'patString', [/* parameter description */
					[/* text */ 't', `the pattern string`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if patString is null`]
				]],
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `if this scanner is closed`]
				]],
				[/* throw */ 'java.util.regex.PatternSyntaxException', [/* throw description */
					[/* text */ 't', `if the regular expression's syntax is invalid`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a sequential stream of match results`]
			]
		]],
		[/* method */ 'findAll(java.util.regex.Pattern)', [
			[/* method description */
				[/* text */ 't', `Returns a stream of match results from this scanner. The stream
 contains the same results in the same order that would be returned by
 calling `],
				[/* inline code block */ 'i', `findWithinHorizon(pattern, 0)`],
				[/* text */ 't', ` and then `],
				[/* reference */ 'r', `#match()`, `match()`],
				[/* text */ 't', `
 successively as long as `],
				[/* reference */ 'r', `#findWithinHorizon(java.lang.String,int)`, `findWithinHorizon()`],
				[/* text */ 't', `
 finds matches.

 `],
				[/* block */ 'b', `The resulting stream is sequential and ordered. All stream elements are
 non-null.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Scanning starts upon initiation of the terminal stream operation, using the
 current state of this scanner. Subsequent calls to any methods on this scanner
 other than `],
					[/* reference */ 'r', `#close()`, `close()`],
					[/* text */ 't', ` and `],
					[/* reference */ 'r', `#ioException()`, `ioException()`],
					[/* text */ 't', ` may return undefined results
 or may cause undefined effects on the returned stream. The returned stream's source
 `],
					[/* inline code block */ 'i', `Spliterator`],
					[/* text */ 't', ` is `],
					[/* text */ 't', `fail-fast`],
					[/* text */ 't', ` and will, on a best-effort basis, throw a
 `],
					[/* reference */ 'r', `java.util.ConcurrentModificationException`],
					[/* text */ 't', ` if any such calls are detected
 during stream pipeline execution.

 `]
				]],
				[/* block */ 'b', `After stream pipeline execution completes, this scanner is left in an indeterminate
 state and cannot be reused.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If this scanner contains a resource that must be released, this scanner
 should be closed, either by calling its `],
					[/* reference */ 'r', `#close()`, `close()`],
					[/* text */ 't', ` method, or by
 closing the returned stream. Closing the stream will close the underlying scanner.
 `],
					[/* inline code block */ 'i', `IllegalStateException`],
					[/* text */ 't', ` is thrown if the scanner has been closed when this
 method is called, or if this scanner is closed during stream pipeline execution.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `As with the `],
					[/* reference */ 'r', `#findWithinHorizon(java.lang.String,int)`, `findWithinHorizon()`],
					[/* text */ 't', ` methods, this method
 might block waiting for additional input, and it might buffer an unbounded amount of
 input searching for a match.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'pattern', [/* parameter description */
					[/* text */ 't', `the pattern to be matched`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if pattern is null`]
				]],
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `if this scanner is closed`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a sequential stream of match results`]
			]
		]],
		[/* method */ 'nextLong()', [
			[/* method description */
				[/* text */ 't', `Scans the next token of the input as a `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` An invocation of this method of the form
 `],
					[/* inline code block */ 'i', `nextLong()`],
					[/* text */ 't', ` behaves in exactly the same way as the
 invocation `],
					[/* inline code block */ 'i', `nextLong(radix)`],
					[/* text */ 't', `, where `],
					[/* inline code block */ 'i', `radix`],
					[/* text */ 't', `
 is the default radix of this scanner.`]
				]]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.util.InputMismatchException', [/* throw description */
					[/* text */ 't', `if the next token does not match the `],
					[/* text */ 't', `Integer`],
					[/* text */ 't', `
         regular expression, or is out of range`]
				]],
				[/* throw */ 'java.util.NoSuchElementException', [/* throw description */
					[/* text */ 't', `if input is exhausted`]
				]],
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `if this scanner is closed`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` scanned from the input`]
			]
		]],
		[/* method */ 'nextLong(int)', [
			[/* method description */
				[/* text */ 't', `Scans the next token of the input as a `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', `.
 This method will throw `],
				[/* inline code block */ 'i', `InputMismatchException`],
				[/* text */ 't', `
 if the next token cannot be translated into a valid long value as
 described below. If the translation is successful, the scanner advances
 past the input that matched.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` If the next token matches the `],
					[/* text */ 't', `Integer`],
					[/* text */ 't', ` regular expression defined
 above then the token is converted into a `],
					[/* inline code block */ 'i', `long`],
					[/* text */ 't', ` value as if by
 removing all locale specific prefixes, group separators, and locale
 specific suffixes, then mapping non-ASCII digits into ASCII
 digits via `],
					[/* reference */ 'r', `java.Character#digit(char,int)`],
					[/* text */ 't', `, prepending a
 negative sign (-) if the locale specific negative prefixes and suffixes
 were present, and passing the resulting string to
 `],
					[/* reference */ 'r', `java.Long#parseLong(java.lang.String,int)`],
					[/* text */ 't', ` with the
 specified radix.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `If the radix is less than `],
					[/* reference */ 'r', `java.Character#MIN_RADIX`],
					[/* text */ 't', `
 or greater than `],
					[/* reference */ 'r', `java.Character#MAX_RADIX`],
					[/* text */ 't', `, then an
 `],
					[/* inline code block */ 'i', `IllegalArgumentException`],
					[/* text */ 't', ` is thrown.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'radix', [/* parameter description */
					[/* text */ 't', `the radix used to interpret the token as an int value`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.util.InputMismatchException', [/* throw description */
					[/* text */ 't', `if the next token does not match the `],
					[/* text */ 't', `Integer`],
					[/* text */ 't', `
         regular expression, or is out of range`]
				]],
				[/* throw */ 'java.util.NoSuchElementException', [/* throw description */
					[/* text */ 't', `if input is exhausted`]
				]],
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `if this scanner is closed`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the radix is out of range`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` scanned from the input`]
			]
		]],
		[/* method */ 'nextShort()', [
			[/* method description */
				[/* text */ 't', `Scans the next token of the input as a `],
				[/* inline code block */ 'i', `short`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` An invocation of this method of the form
 `],
					[/* inline code block */ 'i', `nextShort()`],
					[/* text */ 't', ` behaves in exactly the same way as the
 invocation `],
					[/* reference */ 'r', `#nextShort(int)`, `nextShort(radix)`],
					[/* text */ 't', `, where `],
					[/* inline code block */ 'i', `radix`],
					[/* text */ 't', `
 is the default radix of this scanner.`]
				]]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.util.InputMismatchException', [/* throw description */
					[/* text */ 't', `if the next token does not match the `],
					[/* text */ 't', `Integer`],
					[/* text */ 't', `
         regular expression, or is out of range`]
				]],
				[/* throw */ 'java.util.NoSuchElementException', [/* throw description */
					[/* text */ 't', `if input is exhausted`]
				]],
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `if this scanner is closed`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the `],
				[/* inline code block */ 'i', `short`],
				[/* text */ 't', ` scanned from the input`]
			]
		]],
		[/* method */ 'nextShort(int)', [
			[/* method description */
				[/* text */ 't', `Scans the next token of the input as a `],
				[/* inline code block */ 'i', `short`],
				[/* text */ 't', `.
 This method will throw `],
				[/* inline code block */ 'i', `InputMismatchException`],
				[/* text */ 't', `
 if the next token cannot be translated into a valid short value as
 described below. If the translation is successful, the scanner advances
 past the input that matched.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` If the next token matches the `],
					[/* text */ 't', `Integer`],
					[/* text */ 't', ` regular expression defined
 above then the token is converted into a `],
					[/* inline code block */ 'i', `short`],
					[/* text */ 't', ` value as if by
 removing all locale specific prefixes, group separators, and locale
 specific suffixes, then mapping non-ASCII digits into ASCII
 digits via `],
					[/* reference */ 'r', `java.Character#digit(char,int)`],
					[/* text */ 't', `, prepending a
 negative sign (-) if the locale specific negative prefixes and suffixes
 were present, and passing the resulting string to
 `],
					[/* reference */ 'r', `java.Short#parseShort(java.lang.String,int)`],
					[/* text */ 't', ` with the
 specified radix.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `If the radix is less than `],
					[/* reference */ 'r', `java.Character#MIN_RADIX`],
					[/* text */ 't', `
 or greater than `],
					[/* reference */ 'r', `java.Character#MAX_RADIX`],
					[/* text */ 't', `, then an
 `],
					[/* inline code block */ 'i', `IllegalArgumentException`],
					[/* text */ 't', ` is thrown.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'radix', [/* parameter description */
					[/* text */ 't', `the radix used to interpret the token as a short value`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.util.InputMismatchException', [/* throw description */
					[/* text */ 't', `if the next token does not match the `],
					[/* text */ 't', `Integer`],
					[/* text */ 't', `
         regular expression, or is out of range`]
				]],
				[/* throw */ 'java.util.NoSuchElementException', [/* throw description */
					[/* text */ 't', `if input is exhausted`]
				]],
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `if this scanner is closed`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the radix is out of range`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the `],
				[/* inline code block */ 'i', `short`],
				[/* text */ 't', ` scanned from the input`]
			]
		]],
		[/* method */ 'close()', [
			[/* method description */
				[/* text */ 't', `Closes this scanner.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` If this scanner has not yet been closed then if its underlying
 `],
					[/* reference */ 'r', `java.lang.Readable`],
					[/* text */ 't', ` also implements the `],
					[/* reference */ 'r', `java.io.Closeable`],
					[/* text */ 't', ` interface then the readable's `],
					[/* inline code block */ 'i', `close`],
					[/* text */ 't', ` method
 will be invoked.  If this scanner is already closed then invoking this
 method will have no effect.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `Attempting to perform search operations after a scanner has
 been closed will result in an `],
					[/* reference */ 'r', `java.lang.IllegalStateException`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'remove()', [
			[/* method description */
				[/* text */ 't', `The remove operation is not supported by this implementation of
 `],
				[/* inline code block */ 'i', `Iterator`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if this method is invoked.`]
				]]
			],
			/* return */ UDF
		]]
	],
]);
