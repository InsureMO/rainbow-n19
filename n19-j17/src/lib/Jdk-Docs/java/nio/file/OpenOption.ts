import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.nio.file.OpenOption', [
	[/* class description */
		[/* text */ 't', `An object that configures how to open or create a file.

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` Objects of this type are used by methods such as `],
			[/* reference */ 'r', `.Files#newOutputStream(java.nio.file.Path,java.nio.file.OpenOption...)`],
			[/* text */ 't', `, `],
			[/* reference */ 'r', `.Files#newByteChannel(java.nio.file.Path,java.util.Set,java.nio.file.attribute.FileAttribute...)`],
			[/* text */ 't', `, `],
			[/* reference */ 'r', `java.FileChannel#open(java.nio.file.Path,java.util.Set,java.nio.file.attribute.FileAttribute...)`],
			[/* text */ 't', `, and `],
			[/* reference */ 'r', `java.AsynchronousFileChannel#open(java.nio.file.Path,java.util.Set,java.util.concurrent.ExecutorService,java.nio.file.attribute.FileAttribute...)`],
			[/* text */ 't', `
 when opening or creating a file.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` The `],
			[/* reference */ 'r', `enum class in java.nio.file.StandardOpenOption`],
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
