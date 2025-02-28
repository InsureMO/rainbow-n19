import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.lang.reflect.MalformedParameterizedTypeException', [
	[/* class description */
		[/* text */ 't', `Thrown when a semantically malformed parameterized type is
 encountered by a reflective method that needs to instantiate it.
 For example, if the number of type arguments to a parameterized type
 is wrong.`]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Constructs a `],
				[/* inline code block */ 'i', `MalformedParameterizedTypeException`],
				[/* text */ 't', ` with
 no detail message.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a `],
				[/* inline code block */ 'i', `MalformedParameterizedTypeException`],
				[/* text */ 't', ` with
 the given detail message.`]
			],
			[/* parameters */
				[/* parameter */ 'message', [/* parameter description */
					[/* text */ 't', `the detail message; may be `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			/* throws */ UDF
		]]
	],
	/* methods */ UDF,
]);
