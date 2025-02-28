import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.text.ParseException', [
	[/* class description */
		[/* text */ 't', `Signals that an error has been reached unexpectedly
 while parsing.`]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>(java.lang.String,int)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a ParseException with the specified detail message and
 offset.
 A detail message is a String that describes this particular exception.`]
			],
			[/* parameters */
				[/* parameter */ 's', [/* parameter description */
					[/* text */ 't', `the detail message`]
				]],
				[/* parameter */ 'errorOffset', [/* parameter description */
					[/* text */ 't', `the position where the error is found while parsing.`]
				]]
			],
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'getErrorOffset()', [
			[/* method description */
				[/* text */ 't', `Returns the position where the error was found.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the position where the error was found`]
			]
		]]
	],
]);
