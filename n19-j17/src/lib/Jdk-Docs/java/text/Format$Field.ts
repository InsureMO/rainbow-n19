import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.text.Format$Field', [
	[/* class description */
		[/* text */ 't', `Defines constants that are used as attribute keys in the
 `],
		[/* inline code block */ 'i', `AttributedCharacterIterator`],
		[/* text */ 't', ` returned
 from `],
		[/* inline code block */ 'i', `Format.formatToCharacterIterator`],
		[/* text */ 't', ` and as
 field identifiers in `],
		[/* inline code block */ 'i', `FieldPosition`],
		[/* text */ 't', `.`]
	],
	/* fields */,
	[/* constructors */
		[/* constructor */ '<init>(java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Creates a Field with the specified name.`]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `Name of the attribute`]
				]]
			],
			/* throws */ UDF
		]]
	],
	/* methods */,
	/* enum values */ UDF
]);
