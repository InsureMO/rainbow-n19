import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.util.zip.DataFormatException', [
	[/* class description */
		[/* text */ 't', `Signals that a data format error has occurred.`]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Constructs a DataFormatException with no detail message.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a DataFormatException with the specified detail message.
 A detail message is a String that describes this particular exception.`]
			],
			[/* parameters */
				[/* parameter */ 's', [/* parameter description */
					[/* text */ 't', `the String containing a detail message`]
				]]
			],
			/* throws */ UDF
		]]
	],
	/* methods */ UDF,
]);
