import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.lang.reflect.GenericSignatureFormatError', [
	[/* class description */
		[/* text */ 't', `Thrown when a syntactically malformed signature attribute is
 encountered by a reflective method that needs to interpret the generic
 signature information for a class or interface, method or constructor.`]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new `],
				[/* inline code block */ 'i', `GenericSignatureFormatError`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new `],
				[/* inline code block */ 'i', `GenericSignatureFormatError`],
				[/* text */ 't', ` with the
 specified message.`]
			],
			[/* parameters */
				[/* parameter */ 'message', [/* parameter description */
					[/* text */ 't', `the detail message, may be `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			/* throws */ UDF
		]]
	],
	/* methods */ UDF,
]);
