import {UDF} from '../../../../../utils';
import {DocsCollector} from '../../../../DocsCollector';

DocsCollector.collect('java.nio.file.attribute.FileAttribute', [
	[/* class description */
		[/* text */ 't', `An object that encapsulates the value of a file attribute that can be set
 atomically when creating a new file or directory by invoking the `],
		[/* reference */ 'r', `java.nio.file.Files#createFile(java.nio.file.Path,java.nio.file.attribute.FileAttribute...)`, `createFile`],
		[/* text */ 't', ` or `],
		[/* reference */ 'r', `java.nio.file.Files#createDirectory(java.nio.file.Path,java.nio.file.attribute.FileAttribute...)`, `createDirectory`],
		[/* text */ 't', ` methods.`]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'name()', [
			[/* method description */
				[/* text */ 't', `Returns the attribute name.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The attribute name`]
			]
		]],
		[/* method */ 'value()', [
			[/* method description */
				[/* text */ 't', `Returns the attribute value.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The attribute value`]
			]
		]]
	],
]);
