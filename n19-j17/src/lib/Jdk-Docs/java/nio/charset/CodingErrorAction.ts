import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.nio.charset.CodingErrorAction', [
	[/* class description */
		[/* text */ 't', `A typesafe enumeration for coding-error actions.

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` Instances of this class are used to specify how malformed-input and
 unmappable-character errors are to be handled by charset `],
			[/* reference */ 'r', `.CharsetDecoder#cae`],
			[/* text */ 't', ` and `],
			[/* reference */ 'r', `.CharsetEncoder#cae`],
			[/* text */ 't', `.  `]
		]]
	],
	[/* fields */
		[/* field */ 'IGNORE', [
			[/* field description */
				[/* text */ 't', `Action indicating that a coding error is to be handled by dropping the
 erroneous input and resuming the coding operation.`]
			],
		]],
		[/* field */ 'REPLACE', [
			[/* field description */
				[/* text */ 't', `Action indicating that a coding error is to be handled by dropping the
 erroneous input, appending the coder's replacement value to the output
 buffer, and resuming the coding operation.`]
			],
		]],
		[/* field */ 'REPORT', [
			[/* field description */
				[/* text */ 't', `Action indicating that a coding error is to be reported, either by
 returning a `],
				[/* reference */ 'r', `java.nio.charset.CoderResult`],
				[/* text */ 't', ` object or by throwing a `],
				[/* reference */ 'r', `java.nio.charset.CharacterCodingException`],
				[/* text */ 't', `, whichever is appropriate for the method
 implementing the coding process.`]
			],
		]]
	],
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Returns a string describing this action.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `A descriptive string`]
			]
		]]
	],
]);
