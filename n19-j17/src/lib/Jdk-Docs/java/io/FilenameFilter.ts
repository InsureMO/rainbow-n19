import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.io.FilenameFilter', [
	[/* class description */
		[/* text */ 't', `Instances of classes that implement this interface are used to
 filter filenames. These instances are used to filter directory
 listings in the `],
		[/* inline code block */ 'i', `list`],
		[/* text */ 't', ` method of class
 `],
		[/* inline code block */ 'i', `File`],
		[/* text */ 't', `, and by the Abstract Window Toolkit's file
 dialog component.`]
	],
	/* fields */,
	/* constructors */,
	[/* methods */
		[/* method */ 'accept(java.io.File,java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Tests if a specified file should be included in a file list.`]
			],
			[/* parameters */
				[/* parameter */ 'dir', [/* parameter description */
					[/* text */ 't', `the directory in which the file was found.`]
				]],
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `the name of the file.`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if and only if the name should be
 included in the file list; `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]]
	],
	/* enum values */ UDF
]);
