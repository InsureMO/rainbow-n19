import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.io.FileFilter', [
	[/* class description */
		[/* text */ 't', `A filter for abstract pathnames.

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` Instances of this interface may be passed to the
 `],
			[/* reference */ 'r', `java.io.File#listFiles(java.io.FileFilter)`, `listFiles(FileFilter)`],
			[/* text */ 't', ` method
 of the `],
			[/* reference */ 'r', `java.io.File`, `File`],
			[/* text */ 't', ` class.`]
		]]
	],
	/* fields */,
	/* constructors */,
	[/* methods */
		[/* method */ 'accept(java.io.File)', [
			[/* method description */
				[/* text */ 't', `Tests whether or not the specified abstract pathname should be
 included in a pathname list.`]
			],
			[/* parameters */
				[/* parameter */ 'pathname', [/* parameter description */
					[/* text */ 't', `The abstract pathname to be tested`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if and only if `],
				[/* inline code block */ 'i', `pathname`],
				[/* text */ 't', `
          should be included`]
			]
		]]
	],
	/* enum values */ UDF
]);
