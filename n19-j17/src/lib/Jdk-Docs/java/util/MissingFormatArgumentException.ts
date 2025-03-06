import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.util.MissingFormatArgumentException', [
	[/* class description */
		[/* text */ 't', `Unchecked exception thrown when there is a format specifier which does not
 have a corresponding argument or if an argument index refers to an argument
 that does not exist.

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
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>(java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Constructs an instance of this class with the unmatched format
 specifier.`]
			],
			[/* parameters */
				[/* parameter */ 's', [/* parameter description */
					[/* text */ 't', `Format specifier which does not have a corresponding argument`]
				]]
			],
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'getFormatSpecifier()', [
			[/* method description */
				[/* text */ 't', `Returns the unmatched format specifier.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The unmatched format specifier`]
			]
		]],
		[/* method */ 'getMessage()', UDF]
	],
]);
