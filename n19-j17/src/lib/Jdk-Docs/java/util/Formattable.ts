import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.util.Formattable', [
	[/* class description */
		[/* text */ 't', `The `],
		[/* inline code block */ 'i', `Formattable`],
		[/* text */ 't', ` interface must be implemented by any class that
 needs to perform custom formatting using the `],
		[/* inline code block */ 'i', `'s'`],
		[/* text */ 't', ` conversion
 specifier of `],
		[/* reference */ 'r', `java.util.Formatter`, `Formatter`],
		[/* text */ 't', `.  This interface allows basic
 control for formatting arbitrary objects.

 For example, the following class prints out different representations of a
 stock's name depending on the flags and length constraints:

 `],
		[/* code block */ 'c', [
			[/* text */ 't', ` `],
			[/* inline code block */ 'i', `import java.nio.CharBuffer;
   import java.util.Formatter;
   import java.util.Formattable;
   import java.util.Locale;
   import static java.util.FormattableFlags.*;

   ...

   public class StockName implements Formattable {
       private String symbol, companyName, frenchCompanyName;
       public StockName(String symbol, String companyName,
                        String frenchCompanyName) {
           ...
       }

       ...

       public void formatTo(Formatter fmt, int f, int width, int precision) {
           StringBuilder sb = new StringBuilder();

           // decide form of name
           String name = companyName;
           if (fmt.locale().equals(Locale.FRANCE))
               name = frenchCompanyName;
           boolean alternate = (f & ALTERNATE) == ALTERNATE;
           boolean usesymbol = alternate || (precision != -1 && precision < 10);
           String out = (usesymbol ? symbol : name);

           // apply precision
           if (precision == -1 || out.length() < precision) {
               // write it all
               sb.append(out);
           } else {
               sb.append(out.substring(0, precision - 1)).append('*');
           }

           // apply width and justification
           int len = sb.length();
           if (len < width)
               for (int i = 0; i < width - len; i++)
                   if ((f & LEFT_JUSTIFY) == LEFT_JUSTIFY)
                       sb.append(' ');
                   else
                       sb.insert(0, ' ');

           fmt.format(sb.toString());
       }

       public String toString() {
           return String.format("%s - %s", symbol, companyName);
       }
   }`]
		]],
		[/* text */ 't', `

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` When used in conjunction with the `],
			[/* reference */ 'r', `java.util.Formatter`, `Formatter`],
			[/* text */ 't', `, the above
 class produces the following output for various format strings.

 `]
		]],
		[/* code block */ 'c', [
			[/* text */ 't', ` `],
			[/* inline code block */ 'i', `Formatter fmt = new Formatter();
   StockName sn = new StockName("HUGE", "Huge Fruit, Inc.",
                                "Fruit Titanesque, Inc.");
   fmt.format("%s", sn);                   //   -> "Huge Fruit, Inc."
   fmt.format("%s", sn.toString());        //   -> "HUGE - Huge Fruit, Inc."
   fmt.format("%#s", sn);                  //   -> "HUGE"
   fmt.format("%-10.8s", sn);              //   -> "HUGE      "
   fmt.format("%.12s", sn);                //   -> "Huge Fruit,*"
   fmt.format(Locale.FRANCE, "%25s", sn);  //   -> "   Fruit Titanesque, Inc."`]
		]],
		[/* text */ 't', `

 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', ` Formattables are not necessarily safe for multithreaded access.  Thread
 safety is optional and may be enforced by classes that extend and implement
 this interface.

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` Unless otherwise specified, passing a `],
			[/* inline code block */ 'i', `null`],
			[/* text */ 't', ` argument to
 any method in this interface will cause a `],
			[/* reference */ 'r', `java.lang.NullPointerException`, `NullPointerException`],
			[/* text */ 't', ` to be thrown.`]
		]]
	],
	/* fields */,
	/* constructors */,
	[/* methods */
		[/* method */ 'formatTo(java.util.Formatter,int,int,int)', [
			[/* method description */
				[/* text */ 't', `Formats the object using the provided `],
				[/* reference */ 'r', `java.util.Formatter`, `formatter`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'formatter', [/* parameter description */
					[/* text */ 't', `The `],
					[/* reference */ 'r', `java.util.Formatter`, `formatter`],
					[/* text */ 't', `.  Implementing classes may call
         `],
					[/* reference */ 'r', `java.util.Formatter#out()`, `formatter.out()`],
					[/* text */ 't', ` or `],
					[/* reference */ 'r', `java.util.Formatter#locale()`, `formatter.locale()`],
					[/* text */ 't', ` to obtain the `],
					[/* reference */ 'r', `java.lang.Appendable`, `Appendable`],
					[/* text */ 't', ` or `],
					[/* reference */ 'r', `java.util.Locale`, `Locale`],
					[/* text */ 't', ` used by this
         `],
					[/* inline code block */ 'i', `formatter`],
					[/* text */ 't', ` respectively.`]
				]],
				[/* parameter */ 'flags', [/* parameter description */
					[/* text */ 't', `The flags modify the output format.  The value is interpreted as
         a bitmask.  Any combination of the following flags may be set:
         `],
					[/* reference */ 'r', `java.util.FormattableFlags#LEFT_JUSTIFY`, `FormattableFlags.LEFT_JUSTIFY`],
					[/* text */ 't', `, `],
					[/* reference */ 'r', `java.util.FormattableFlags#UPPERCASE`, `FormattableFlags.UPPERCASE`],
					[/* text */ 't', `, and `],
					[/* reference */ 'r', `java.util.FormattableFlags#ALTERNATE`, `FormattableFlags.ALTERNATE`],
					[/* text */ 't', `.  If no flags are set, the default
         formatting of the implementing class will apply.`]
				]],
				[/* parameter */ 'width', [/* parameter description */
					[/* text */ 't', `The minimum number of characters to be written to the output.
         If the length of the converted value is less than the
         `],
					[/* inline code block */ 'i', `width`],
					[/* text */ 't', ` then the output will be padded by
         `],
					[/* inline code block */ 'i', `' '`],
					[/* text */ 't', ` until the total number of characters
         equals width.  The padding is at the beginning by default.  If
         the `],
					[/* reference */ 'r', `java.util.FormattableFlags#LEFT_JUSTIFY`, `FormattableFlags.LEFT_JUSTIFY`],
					[/* text */ 't', ` flag is set then the
         padding will be at the end.  If `],
					[/* inline code block */ 'i', `width`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `-1`],
					[/* text */ 't', `
         then there is no minimum.`]
				]],
				[/* parameter */ 'precision', [/* parameter description */
					[/* text */ 't', `The maximum number of characters to be written to the output.
         The precision is applied before the width, thus the output will
         be truncated to `],
					[/* inline code block */ 'i', `precision`],
					[/* text */ 't', ` characters even if the
         `],
					[/* inline code block */ 'i', `width`],
					[/* text */ 't', ` is greater than the `],
					[/* inline code block */ 'i', `precision`],
					[/* text */ 't', `.  If
         `],
					[/* inline code block */ 'i', `precision`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `-1`],
					[/* text */ 't', ` then there is no explicit
         limit on the number of characters.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.util.IllegalFormatException', [/* throw description */
					[/* text */ 't', `If any of the parameters are invalid.  For specification of all
          possible formatting errors, see the `],
					[/* reference */ 'r', `java.util.Formatter#detail`, `Details`],
					[/* text */ 't', ` section of the
          formatter class specification.`]
				]]
			],
			/* return */ UDF
		]]
	],
	/* enum values */ UDF
]);
