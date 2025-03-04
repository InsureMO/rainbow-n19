import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.util.DuplicateFormatFlagsException', [
	[/* class description */
		[/* text */ 't', `Unchecked exception thrown when duplicate flags are provided in the format
 specifier.

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
		[/* constructor */ '<init>(java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Constructs an instance of this class with the specified flags.`]
			],
			[/* parameters */
				[/* parameter */ 'f', [/* parameter description */
					[/* text */ 't', `The set of format flags which contain a duplicate flag.`]
				]]
			],
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'getFlags()', [
			[/* method description */
				[/* text */ 't', `Returns the set of flags which contains a duplicate flag.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The flags`]
			]
		]],
		[/* method */ 'getMessage()', UDF]
	],
]);
