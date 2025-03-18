import {UDF} from '../../../../../utils';
import {DocsCollector} from '../../../../DocsCollector';

DocsCollector.collect('java.nio.file.attribute.BasicFileAttributes', [
	[/* class description */
		[/* text */ 't', `Basic attributes associated with a file in a file system.

 `],
		[/* block */ 'b', ` Basic file attributes are attributes that are common to many file systems
 and consist of mandatory and optional file attributes as defined by this
 interface.

 `],
		[/* block */ 'b', `Usage Example:`],
		[/* code block */ 'c', `    Path file = ...
    BasicFileAttributes attrs = Files.readAttributes(file, BasicFileAttributes.class);
 `],
		[/* block */ 'b', '']
	],
	/* fields */,
	/* constructors */,
	[/* methods */
		[/* method */ 'isDirectory()', [
			[/* method description */
				[/* text */ 't', `Tells whether the file is a directory.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the file is a directory`]
			]
		]],
		[/* method */ 'isOther()', [
			[/* method description */
				[/* text */ 't', `Tells whether the file is something other than a regular file, directory,
 or symbolic link.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the file something other than a regular file,
         directory or symbolic link`]
			]
		]],
		[/* method */ 'isRegularFile()', [
			[/* method description */
				[/* text */ 't', `Tells whether the file is a regular file with opaque content.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the file is a regular file with opaque content`]
			]
		]],
		[/* method */ 'isSymbolicLink()', [
			[/* method description */
				[/* text */ 't', `Tells whether the file is a symbolic link.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the file is a symbolic link`]
			]
		]],
		[/* method */ 'fileKey()', [
			[/* method description */
				[/* text */ 't', `Returns an object that uniquely identifies the given file, or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if a file key is not available. On some platforms or file systems
 it is possible to use an identifier, or a combination of identifiers to
 uniquely identify a file. Such identifiers are important for operations
 such as file tree traversal in file systems that support `],
				[/* text */ 't', `symbolic links`],
				[/* text */ 't', ` or file systems
 that allow a file to be an entry in more than one directory. On UNIX file
 systems, for example, the `],
				[/* text */ 't', `device ID`],
				[/* text */ 't', ` and `],
				[/* text */ 't', `inode`],
				[/* text */ 't', ` are
 commonly used for such purposes.

 `],
				[/* block */ 'b', ` The file key returned by this method can only be guaranteed to be
 unique if the file system and files remain static. Whether a file system
 re-uses identifiers after a file is deleted is implementation dependent and
 therefore unspecified.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` File keys returned by this method can be compared for equality and are
 suitable for use in collections. If the file system and files remain static,
 and two files are the `],
					[/* reference */ 'r', `java.nio.file.Files#isSameFile(java.nio.file.Path,java.nio.file.Path)`, `same`],
					[/* text */ 't', ` with
 non-`],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` file keys, then their file keys are equal.`]
				]]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `an object that uniquely identifies the given file, or `],
				[/* inline code block */ 'i', `null`]
			]
		]],
		[/* method */ 'creationTime()', [
			[/* method description */
				[/* text */ 't', `Returns the creation time. The creation time is the time that the file
 was created.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` If the file system implementation does not support a time stamp
 to indicate the time when the file was created then this method returns
 an implementation specific default value, typically the `],
					[/* reference */ 'r', `#lastModifiedTime()`, `last-modified-time`],
					[/* text */ 't', ` or a `],
					[/* inline code block */ 'i', `FileTime`],
					[/* text */ 't', `
 representing the epoch (1970-01-01T00:00:00Z).`]
				]]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `FileTime`],
				[/* text */ 't', ` representing the time the file was created`]
			]
		]],
		[/* method */ 'lastAccessTime()', [
			[/* method description */
				[/* text */ 't', `Returns the time of last access.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` If the file system implementation does not support a time stamp
 to indicate the time of last access then this method returns
 an implementation specific default value, typically the `],
					[/* reference */ 'r', `#lastModifiedTime()`, `last-modified-time`],
					[/* text */ 't', ` or a `],
					[/* inline code block */ 'i', `FileTime`],
					[/* text */ 't', `
 representing the epoch (1970-01-01T00:00:00Z).`]
				]]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `FileTime`],
				[/* text */ 't', ` representing the time of last access`]
			]
		]],
		[/* method */ 'lastModifiedTime()', [
			[/* method description */
				[/* text */ 't', `Returns the time of last modification.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` If the file system implementation does not support a time stamp
 to indicate the time of last modification then this method returns an
 implementation specific default value, typically a `],
					[/* inline code block */ 'i', `FileTime`],
					[/* text */ 't', `
 representing the epoch (1970-01-01T00:00:00Z).`]
				]]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `FileTime`],
				[/* text */ 't', ` representing the time the file was last
          modified`]
			]
		]],
		[/* method */ 'size()', [
			[/* method description */
				[/* text */ 't', `Returns the size of the file (in bytes). The size may differ from the
 actual size on the file system due to compression, support for sparse
 files, or other reasons. The size of files that are not `],
				[/* reference */ 'r', `#isRegularFile()`, `regular`],
				[/* text */ 't', ` files is implementation specific and
 therefore unspecified.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the file size, in bytes`]
			]
		]]
	],
	/* enum values */ UDF
]);
