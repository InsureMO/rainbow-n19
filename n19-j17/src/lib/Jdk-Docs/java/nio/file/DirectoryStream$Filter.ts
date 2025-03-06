import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.nio.file.DirectoryStream$Filter', [
	[/* class description */
		[/* text */ 't', `An interface that is implemented by objects that decide if a directory
 entry should be accepted or filtered. A `],
		[/* inline code block */ 'i', `Filter`],
		[/* text */ 't', ` is passed as the
 parameter to the `],
		[/* reference */ 'r', `java.nio.file.Files#newDirectoryStream(java.nio.file.Path,java.nio.file.DirectoryStream.Filter)`, `Files.newDirectoryStream(Path,DirectoryStream.Filter)`],
		[/* text */ 't', `
 method when opening a directory to iterate over the entries in the
 directory.`]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'accept(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Decides if the given directory entry should be accepted or filtered.`]
			],
			[/* parameters */
				[/* parameter */ 'entry', [/* parameter description */
					[/* text */ 't', `the directory entry to be tested`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If an I/O error occurs`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the directory entry should be accepted`]
			]
		]]
	],
]);
