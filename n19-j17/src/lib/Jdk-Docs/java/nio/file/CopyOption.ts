import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.nio.file.CopyOption', [
	[/* class description */
		[/* text */ 't', `An object that configures how to copy or move a file.

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` Objects of this type may be used with the `],
			[/* reference */ 'r', `.Files#copy(java.nio.file.Path,java.nio.file.Path,java.nio.file.CopyOption...)`],
			[/* text */ 't', `,
 `],
			[/* reference */ 'r', `.Files#copy(java.io.InputStream,java.nio.file.Path,java.nio.file.CopyOption...)`],
			[/* text */ 't', ` and `],
			[/* reference */ 'r', `.Files#move(java.nio.file.Path,java.nio.file.Path,java.nio.file.CopyOption...)`],
			[/* text */ 't', ` methods to configure how a file is
 copied or moved.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` The `],
			[/* reference */ 'r', `enum class in java.nio.file.StandardCopyOption`],
			[/* text */ 't', ` enumeration type defines the
 `],
			[/* text */ 't', `standard`],
			[/* text */ 't', ` options.`]
		]]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	/* methods */ UDF,
]);
