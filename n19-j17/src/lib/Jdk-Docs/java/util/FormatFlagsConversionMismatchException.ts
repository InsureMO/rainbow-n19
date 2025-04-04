import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.util.FormatFlagsConversionMismatchException', [
	[/* class description */
		[/* text */ 't', `Unchecked exception thrown when a conversion and flag are incompatible.

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` Unless otherwise specified, passing a `],
			[/* inline code block */ 'i', `null`],
			[/* text */ 't', ` argument to any
 method or constructor in this class will cause a `],
			[/* reference */ 'r', `java.lang.NullPointerException`, `NullPointerException`],
			[/* text */ 't', ` to be thrown.`]
		]]
	],
	/* fields */,
	[/* constructors */
		[/* constructor */ '<init>(java.lang.String,char)', [
			[/* constructor description */
				[/* text */ 't', `Constructs an instance of this class with the specified flag
 and conversion.`]
			],
			[/* parameters */
				[/* parameter */ 'f', [/* parameter description */
					[/* text */ 't', `The flag`]
				]],
				[/* parameter */ 'c', [/* parameter description */
					[/* text */ 't', `The conversion`]
				]]
			],
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'getConversion()', [
			[/* method description */
				[/* text */ 't', `Returns the incompatible conversion.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `The conversion`]
			]
		]],
		[/* method */ 'getFlags()', [
			[/* method description */
				[/* text */ 't', `Returns the incompatible flag.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `The flag`]
			]
		]],
		[/* method */ 'getMessage()', UDF]
	],
	/* enum values */ UDF
]);
