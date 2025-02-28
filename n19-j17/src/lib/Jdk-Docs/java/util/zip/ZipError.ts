import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.util.zip.ZipError', [
	[/* class description */
		[/* text */ 't', `Signals that an unrecoverable error has occurred.`]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>(java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a ZipError with the given detail message.`]
			],
			[/* parameters */
				[/* parameter */ 's', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `String`],
					[/* text */ 't', ` containing a detail message`]
				]]
			],
			/* throws */ UDF
		]]
	],
	/* methods */ UDF,
]);
