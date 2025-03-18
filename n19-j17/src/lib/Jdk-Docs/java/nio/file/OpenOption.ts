import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.nio.file.OpenOption', [
	[/* class description */
		[/* text */ 't', `An object that configures how to open or create a file.

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` Objects of this type are used by methods such as `],
			[/* reference */ 'r', `java.nio.file.Files#newOutputStream(java.nio.file.Path,java.nio.file.OpenOption...)`, `newOutputStream`],
			[/* text */ 't', `, `],
			[/* reference */ 'r', `java.nio.file.Files#newByteChannel(java.nio.file.Path,java.util.Set,java.nio.file.attribute.FileAttribute...)`, `newByteChannel`],
			[/* text */ 't', `, `],
			[/* reference */ 'r', `java.nio.channels.FileChannel#open(java.nio.file.Path,java.util.Set,java.nio.file.attribute.FileAttribute...)`, `FileChannel.open`],
			[/* text */ 't', `, and `],
			[/* reference */ 'r', `java.nio.channels.AsynchronousFileChannel#open(java.nio.file.Path,java.util.Set,java.util.concurrent.ExecutorService,java.nio.file.attribute.FileAttribute...)`, `AsynchronousFileChannel.open`],
			[/* text */ 't', `
 when opening or creating a file.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` The `],
			[/* reference */ 'r', `java.nio.file.StandardOpenOption`, `StandardOpenOption`],
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
