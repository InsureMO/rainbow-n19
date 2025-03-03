import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.util.InvalidPropertiesFormatException', [
	[/* class description */
		[/* text */ 't', `Thrown to indicate that an operation could not complete because
 the input did not conform to the appropriate XML document type
 for a collection of properties, as per the `],
		[/* reference */ 'r', `java.util.Properties`],
		[/* text */ 't', `
 specification.`],
		[/* block */ 'b', `

 Note, that although InvalidPropertiesFormatException inherits Serializable
 interface from Exception, it is not intended to be Serializable. Appropriate
 serialization methods are implemented to throw NotSerializableException.`]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>(java.lang.Throwable)', [
			[/* constructor description */
				[/* text */ 't', `Constructs an InvalidPropertiesFormatException with the specified
 cause.`]
			],
			[/* parameters */
				[/* parameter */ 'cause', [/* parameter description */
					[/* text */ 't', `the cause (which is saved for later retrieval by the
         `],
					[/* reference */ 'r', `java.Throwable#getCause()`],
					[/* text */ 't', ` method).`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Constructs an InvalidPropertiesFormatException with the specified
 detail message.`]
			],
			[/* parameters */
				[/* parameter */ 'message', [/* parameter description */
					[/* text */ 't', `the detail message. The detail message is saved for
          later retrieval by the `],
					[/* reference */ 'r', `java.Throwable#getMessage()`],
					[/* text */ 't', ` method.`]
				]]
			],
			/* throws */ UDF
		]]
	],
	/* methods */ UDF,
]);
