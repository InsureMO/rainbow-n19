import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.nio.file.CopyOption', [
	[/* class description */
		[/* text */ 't', `An object that configures how to copy or move a file.

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` Objects of this type may be used with the `],
			[/* reference */ 'r', `java.nio.file.Files#copy(java.nio.file.Path,java.nio.file.Path,java.nio.file.CopyOption...)`, `Files.copy(Path,Path,CopyOption...)`],
			[/* text */ 't', `,
 `],
			[/* reference */ 'r', `java.nio.file.Files#copy(java.io.InputStream,java.nio.file.Path,java.nio.file.CopyOption...)`, `Files.copy(InputStream,Path,CopyOption...)`],
			[/* text */ 't', ` and `],
			[/* reference */ 'r', `java.nio.file.Files#move(java.nio.file.Path,java.nio.file.Path,java.nio.file.CopyOption...)`, `Files.move(Path,Path,CopyOption...)`],
			[/* text */ 't', ` methods to configure how a file is
 copied or moved.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` The `],
			[/* reference */ 'r', `enum class in java.nio.file.StandardCopyOption`, `StandardCopyOption`],
			[/* text */ 't', ` enumeration type defines the
 `],
			[/* text */ 't', `standard`],
			[/* text */ 't', ` options.`]
		]]
	],
	/* fields */,
	/* constructors */,
	/* methods */,
	/* enum values */ UDF
]);
