import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.util.IllegalFormatConversionException', [
	[/* class description */
		[/* text */ 't', `Unchecked exception thrown when the argument corresponding to the format
 specifier is of an incompatible type.

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` Unless otherwise specified, passing a `],
			[/* inline code block */ 'i', `null`],
			[/* text */ 't', ` argument to any
 method or constructor in this class will cause a `],
			[/* reference */ 'r', `java.lang.NullPointerException`],
			[/* text */ 't', ` to be thrown.`]
		]]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>(char,java.lang.Class)', [
			[/* constructor description */
				[/* text */ 't', `Constructs an instance of this class with the mismatched conversion and
 the corresponding argument class.`]
			],
			[/* parameters */
				[/* parameter */ 'c', [/* parameter description */
					[/* text */ 't', `Inapplicable conversion`]
				]],
				[/* parameter */ 'arg', [/* parameter description */
					[/* text */ 't', `Class of the mismatched argument`]
				]]
			],
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'getMessage()', UDF],
		[/* method */ 'getConversion()', [
			[/* method description */
				[/* text */ 't', `Returns the inapplicable conversion.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The inapplicable conversion`]
			]
		]],
		[/* method */ 'getArgumentClass()', [
			[/* method description */
				[/* text */ 't', `Returns the class of the mismatched argument.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The class of the mismatched argument`]
			]
		]]
	],
]);
