import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.util.FormattableFlags', [
	[/* class description */
		[/* text */ 't', `FormattableFlags are passed to the `],
		[/* reference */ 'r', `java.util.Formattable#formatTo(java.util.Formatter,int,int,int)`, `Formattable.formatTo()`],
		[/* text */ 't', ` method and modify the output format for `],
		[/* reference */ 'r', `java.util.Formattable`, `Formattables`],
		[/* text */ 't', `.  Implementations of `],
		[/* reference */ 'r', `java.util.Formattable`, `Formattable`],
		[/* text */ 't', ` are
 responsible for interpreting and validating any flags.`]
	],
	[/* fields */
		[/* field */ 'ALTERNATE', [
			[/* field description */
				[/* text */ 't', `Requires the output to use an alternate form.  The definition of the
 form is specified by the `],
				[/* inline code block */ 'i', `Formattable`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This flag corresponds to `],
					[/* inline code block */ 'i', `'#'`],
					[/* text */ 't', ` (`],
					[/* inline code block */ 'i', `'\\u0023'`],
					[/* text */ 't', `) in
 the format specifier.`]
				]]
			],
		]],
		[/* field */ 'LEFT_JUSTIFY', [
			[/* field description */
				[/* text */ 't', `Left-justifies the output.  Spaces (`],
				[/* inline code block */ 'i', `'\\u0020'`],
				[/* text */ 't', `) will be added
 at the end of the converted value as required to fill the minimum width
 of the field.  If this flag is not set then the output will be
 right-justified.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This flag corresponds to `],
					[/* inline code block */ 'i', `'-'`],
					[/* text */ 't', ` (`],
					[/* inline code block */ 'i', `'\\u002d'`],
					[/* text */ 't', `) in
 the format specifier.`]
				]]
			],
		]],
		[/* field */ 'UPPERCASE', [
			[/* field description */
				[/* text */ 't', `Converts the output to upper case according to the rules of the
 `],
				[/* reference */ 'r', `java.util.Locale`, `locale`],
				[/* text */ 't', ` given during creation of the
 `],
				[/* inline code block */ 'i', `formatter`],
				[/* text */ 't', ` argument of the `],
				[/* reference */ 'r', `java.util.Formattable#formatTo(java.util.Formatter,int,int,int)`, `formatTo()`],
				[/* text */ 't', ` method.  The output should be equivalent the following
 invocation of `],
				[/* reference */ 'r', `java.lang.String#toUpperCase(java.util.Locale)`, `String.toUpperCase(java.util.Locale)`],
				[/* text */ 't', `

 `],
				[/* code block */ 'c', `     out.toUpperCase() `],
				[/* text */ 't', `

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This flag corresponds to `],
					[/* inline code block */ 'i', `'S'`],
					[/* text */ 't', ` (`],
					[/* inline code block */ 'i', `'\\u0053'`],
					[/* text */ 't', `) in
 the format specifier.`]
				]]
			],
		]]
	],
	/* constructors */,
	/* methods */,
	/* enum values */ UDF
]);
