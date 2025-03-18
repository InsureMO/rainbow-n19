import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.nio.file.FileSystem', [
	[/* class description */
		[/* text */ 't', `Provides an interface to a file system and is the factory for objects to
 access files and other objects in the file system.

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` The default file system, obtained by invoking the `],
			[/* reference */ 'r', `java.nio.file.FileSystems#getDefault()`, `FileSystems.getDefault`],
			[/* text */ 't', ` method, provides access to the file system that is
 accessible to the Java virtual machine. The `],
			[/* reference */ 'r', `java.nio.file.FileSystems`, `FileSystems`],
			[/* text */ 't', ` class defines
 methods to create file systems that provide access to other types of (custom)
 file systems.

 `]
		]],
		[/* block */ 'b', ` A file system is the factory for several types of objects:

 `],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* block */ 'b', [
					[/* text */ 't', ` The `],
					[/* reference */ 'r', `#getPath(java.lang.String,java.lang.String...)`, `getPath`],
					[/* text */ 't', ` method converts a system dependent
     `],
					[/* text */ 't', `path string`],
					[/* text */ 't', `, returning a `],
					[/* reference */ 'r', `java.nio.file.Path`, `Path`],
					[/* text */ 't', ` object that may be used
     to locate and access a file. `]
				]]
			]],
			[/* block */ 'b', [
				[/* block */ 'b', [
					[/* text */ 't', ` The `],
					[/* reference */ 'r', `#getPathMatcher(java.lang.String)`, `getPathMatcher`],
					[/* text */ 't', ` method is used
     to create a `],
					[/* reference */ 'r', `java.nio.file.PathMatcher`, `PathMatcher`],
					[/* text */ 't', ` that performs match operations on
     paths. `]
				]]
			]],
			[/* block */ 'b', [
				[/* block */ 'b', [
					[/* text */ 't', ` The `],
					[/* reference */ 'r', `#getFileStores()`, `getFileStores`],
					[/* text */ 't', ` method returns an iterator
     over the underlying `],
					[/* reference */ 'r', `java.nio.file.FileStore`, `file-stores`],
					[/* text */ 't', `. `]
				]]
			]],
			[/* block */ 'b', [
				[/* block */ 'b', [
					[/* text */ 't', ` The `],
					[/* reference */ 'r', `#getUserPrincipalLookupService()`, `getUserPrincipalLookupService`],
					[/* text */ 't', `
     method returns the `],
					[/* reference */ 'r', `java.nio.file.attribute.UserPrincipalLookupService`, `UserPrincipalLookupService`],
					[/* text */ 't', ` to lookup users or
     groups by name. `]
				]]
			]],
			[/* block */ 'b', [
				[/* block */ 'b', [
					[/* text */ 't', ` The `],
					[/* reference */ 'r', `#newWatchService()`, `newWatchService`],
					[/* text */ 't', ` method creates a
     `],
					[/* reference */ 'r', `java.nio.file.WatchService`, `WatchService`],
					[/* text */ 't', ` that may be used to watch objects for changes and
     events. `]
				]]
			]]
		]],
		[/* text */ 't', `

 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', ` File systems vary greatly. In some cases the file system is a single
 hierarchy of files with one top-level root directory. In other cases it may
 have several distinct file hierarchies, each with its own top-level root
 directory. The `],
			[/* reference */ 'r', `#getRootDirectories()`, `getRootDirectories`],
			[/* text */ 't', ` method may be
 used to iterate over the root directories in the file system. A file system
 is typically composed of one or more underlying `],
			[/* reference */ 'r', `java.nio.file.FileStore`, `file-stores`],
			[/* text */ 't', `
 that provide the storage for the files. Theses file stores can also vary in
 the features they support, and the file attributes or `],
			[/* text */ 't', `meta-data`],
			[/* text */ 't', ` that
 they associate with files.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` A file system is open upon creation and can be closed by invoking its
 `],
			[/* reference */ 'r', `#close()`, `close`],
			[/* text */ 't', ` method. Once closed, any further attempt to access
 objects in the file system cause `],
			[/* reference */ 'r', `java.nio.file.ClosedFileSystemException`, `ClosedFileSystemException`],
			[/* text */ 't', ` to be
 thrown. File systems created by the default `],
			[/* reference */ 'r', `java.nio.file.spi.FileSystemProvider`, `provider`],
			[/* text */ 't', `
 cannot be closed.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` A `],
			[/* inline code block */ 'i', `FileSystem`],
			[/* text */ 't', ` can provide read-only or read-write access to the
 file system. Whether or not a file system provides read-only access is
 established when the `],
			[/* inline code block */ 'i', `FileSystem`],
			[/* text */ 't', ` is created and can be tested by invoking
 its `],
			[/* reference */ 'r', `#isReadOnly()`, `isReadOnly`],
			[/* text */ 't', ` method. Attempts to write to file stores
 by means of an object associated with a read-only file system throws `],
			[/* reference */ 'r', `java.nio.file.ReadOnlyFileSystemException`, `ReadOnlyFileSystemException`],
			[/* text */ 't', `.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` File systems are safe for use by multiple concurrent threads. The `],
			[/* reference */ 'r', `#close()`, `close`],
			[/* text */ 't', ` method may be invoked at any time to close a file system but
 whether a file system is `],
			[/* text */ 't', `asynchronously closeable`],
			[/* text */ 't', ` is provider specific
 and therefore unspecified. In other words, if a thread is accessing an
 object in a file system, and another thread invokes the `],
			[/* inline code block */ 'i', `close`],
			[/* text */ 't', ` method
 then it may require to block until the first operation is complete. Closing
 a file system causes all open channels, watch services, and other `],
			[/* reference */ 'r', `java.io.Closeable`, `closeable`],
			[/* text */ 't', ` objects associated with the file system to be closed.`]
		]]
	],
	/* fields */,
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Initializes a new instance of this class.`]
			],
			/* parameters */,
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'isOpen()', [
			[/* method description */
				[/* text */ 't', `Tells whether or not this file system is open.

 `],
				[/* block */ 'b', ` File systems created by the default provider are always open.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if, and only if, this file system is open`]
			]
		]],
		[/* method */ 'isReadOnly()', [
			[/* method description */
				[/* text */ 't', `Tells whether or not this file system allows only read-only access to
 its file stores.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if, and only if, this file system provides
          read-only access`]
			]
		]],
		[/* method */ 'getFileStores()', [
			[/* method description */
				[/* text */ 't', `Returns an object to iterate over the underlying file stores.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The elements of the returned iterator are the `],
					[/* reference */ 'r', `java.nio.file.FileStore`, `FileStores`],
					[/* text */ 't', ` for this file system. The order of the elements is
 not defined and the file stores may change during the lifetime of the
 Java virtual machine. When an I/O error occurs, perhaps because a file
 store is not accessible, then it is not returned by the iterator.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` In the case of the default provider, and a security manager is
 installed, the security manager is invoked to check `],
					[/* reference */ 'r', `java.lang.RuntimePermission`, `RuntimePermission`],
					[/* inline code block */ 'i', `("getFileStoreAttributes")`],
					[/* text */ 't', `. If denied, then
 no file stores are returned by the iterator. In addition, the security
 manager's `],
					[/* reference */ 'r', `java.lang.SecurityManager#checkRead(java.lang.String)`, `SecurityManager.checkRead(String)`],
					[/* text */ 't', ` method is invoked to
 check read access to the file store's `],
					[/* text */ 't', `top-most`],
					[/* text */ 't', ` directory. If
 denied, the file store is not returned by the iterator. It is system
 dependent if the permission checks are done when the iterator is obtained
 or during iteration.

 `]
				]],
				[/* block */ 'b', `Usage Example:`],
				[/* code block */ 'c', `     for (FileStore store: FileSystems.getDefault().getFileStores()) {
         long total = store.getTotalSpace() / 1024;
         long used = (store.getTotalSpace() - store.getUnallocatedSpace()) / 1024;
         long avail = store.getUsableSpace() / 1024;
         System.out.format("%-20s %12d %12d %12d%n", store, total, used, avail);
     }
 `],
				[/* block */ 'b', '']
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `An object to iterate over the backing file stores`]
			]
		]],
		[/* method */ 'getRootDirectories()', [
			[/* method description */
				[/* text */ 't', `Returns an object to iterate over the paths of the root directories.

 `],
				[/* block */ 'b', ` A file system provides access to a file store that may be composed
 of a number of distinct file hierarchies, each with its own top-level
 root directory. Unless denied by the security manager, each element in
 the returned iterator corresponds to the root directory of a distinct
 file hierarchy. The order of the elements is not defined. The file
 hierarchies may change during the lifetime of the Java virtual machine.
 For example, in some implementations, the insertion of removable media
 may result in the creation of a new file hierarchy with its own
 top-level directory.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` When a security manager is installed, it is invoked to check access
 to the each root directory. If denied, the root directory is not returned
 by the iterator. In the case of the default provider, the `],
					[/* reference */ 'r', `java.lang.SecurityManager#checkRead(java.lang.String)`, `SecurityManager.checkRead(String)`],
					[/* text */ 't', ` method is invoked to check read access
 to each root directory. It is system dependent if the permission checks
 are done when the iterator is obtained or during iteration.`]
				]]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `An object to iterate over the root directories`]
			]
		]],
		[/* method */ 'getSeparator()', [
			[/* method description */
				[/* text */ 't', `Returns the name separator, represented as a string.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The name separator is used to separate names in a path string. An
 implementation may support multiple name separators in which case this
 method returns an implementation specific `],
					[/* text */ 't', `default`],
					[/* text */ 't', ` name separator.
 This separator is used when creating path strings by invoking the `],
					[/* reference */ 'r', `java.nio.file.Path#toString()`, `toString()`],
					[/* text */ 't', ` method.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` In the case of the default provider, this method returns the same
 separator as `],
					[/* reference */ 'r', `java.io.File#separator`, `File.separator`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `The name separator`]
			]
		]],
		[/* method */ 'getUserPrincipalLookupService()', [
			[/* method description */
				[/* text */ 't', `Returns the `],
				[/* inline code block */ 'i', `UserPrincipalLookupService`],
				[/* text */ 't', ` for this file system
 `],
				[/* text */ 't', `(optional operation)`],
				[/* text */ 't', `. The resulting lookup service may be used to
 lookup user or group names.

 `],
				[/* block */ 'b', `Usage Example:`],
				[/* code block */ 'c', `     UserPrincipalLookupService lookupService = FileSystems.getDefault().getUserPrincipalLookupService();
     Files.setOwner(path, lookupService.lookupPrincipalByName("joe"));
 `],
				[/* block */ 'b', '']
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `If this `],
					[/* inline code block */ 'i', `FileSystem`],
					[/* text */ 't', ` does not does have a lookup service`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The `],
				[/* inline code block */ 'i', `UserPrincipalLookupService`],
				[/* text */ 't', ` for this file system`]
			]
		]],
		[/* method */ 'getPath(java.lang.String,java.lang.String...)', [
			[/* method description */
				[/* text */ 't', `Converts a path string, or a sequence of strings that when joined form
 a path string, to a `],
				[/* inline code block */ 'i', `Path`],
				[/* text */ 't', `. If `],
				[/* inline code block */ 'i', `more`],
				[/* text */ 't', ` does not specify any
 elements then the value of the `],
				[/* inline code block */ 'i', `first`],
				[/* text */ 't', ` parameter is the path string
 to convert. If `],
				[/* inline code block */ 'i', `more`],
				[/* text */ 't', ` specifies one or more elements then each
 non-empty string, including `],
				[/* inline code block */ 'i', `first`],
				[/* text */ 't', `, is considered to be a sequence
 of name elements (see `],
				[/* reference */ 'r', `java.nio.file.Path`, `Path`],
				[/* text */ 't', `) and is joined to form a path string.
 The details as to how the Strings are joined is provider specific but
 typically they will be joined using the `],
				[/* reference */ 'r', `#getSeparator()`, `name-separator`],
				[/* text */ 't', ` as the separator. For example, if the name separator is
 "`],
				[/* inline code block */ 'i', `/`],
				[/* text */ 't', `" and `],
				[/* inline code block */ 'i', `getPath("/foo","bar","gus")`],
				[/* text */ 't', ` is invoked, then the
 path string `],
				[/* inline code block */ 'i', `"/foo/bar/gus"`],
				[/* text */ 't', ` is converted to a `],
				[/* inline code block */ 'i', `Path`],
				[/* text */ 't', `.
 A `],
				[/* inline code block */ 'i', `Path`],
				[/* text */ 't', ` representing an empty path is returned if `],
				[/* inline code block */ 'i', `first`],
				[/* text */ 't', `
 is the empty string and `],
				[/* inline code block */ 'i', `more`],
				[/* text */ 't', ` does not contain any non-empty
 strings.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The parsing and conversion to a path object is inherently
 implementation dependent. In the simplest case, the path string is rejected,
 and `],
					[/* reference */ 'r', `java.nio.file.InvalidPathException`, `InvalidPathException`],
					[/* text */ 't', ` thrown, if the path string contains
 characters that cannot be converted to characters that are `],
					[/* text */ 't', `legal`],
					[/* text */ 't', `
 to the file store. For example, on UNIX systems, the NUL (\\u0000)
 character is not allowed to be present in a path. An implementation may
 choose to reject path strings that contain names that are longer than those
 allowed by any file store, and where an implementation supports a complex
 path syntax, it may choose to reject path strings that are `],
					[/* text */ 't', `badly
 formed`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', ` In the case of the default provider, path strings are parsed based
 on the definition of paths at the platform or virtual file system level.
 For example, an operating system may not allow specific characters to be
 present in a file name, but a specific underlying file store may impose
 different or additional restrictions on the set of legal
 characters.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method throws `],
					[/* reference */ 'r', `java.nio.file.InvalidPathException`, `InvalidPathException`],
					[/* text */ 't', ` when the path string
 cannot be converted to a path. Where possible, and where applicable,
 the exception is created with an `],
					[/* reference */ 'r', `java.nio.file.InvalidPathException#getIndex()`, `index`],
					[/* text */ 't', ` value indicating the first position in the `],
					[/* inline code block */ 'i', `path`],
					[/* text */ 't', ` parameter
 that caused the path string to be rejected.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'first', [/* parameter description */
					[/* text */ 't', `the path string or initial part of the path string`]
				]],
				[/* parameter */ 'more', [/* parameter description */
					[/* text */ 't', `additional strings to be joined to form the path string`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.nio.file.InvalidPathException', [/* throw description */
					[/* text */ 't', `If the path string cannot be converted`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the resulting `],
				[/* inline code block */ 'i', `Path`]
			]
		]],
		[/* method */ 'getPathMatcher(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `PathMatcher`],
				[/* text */ 't', ` that performs match operations on the
 `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', ` representation of `],
				[/* reference */ 'r', `java.nio.file.Path`, `Path`],
				[/* text */ 't', ` objects by interpreting a
 given pattern.

 The `],
				[/* inline code block */ 'i', `syntaxAndPattern`],
				[/* text */ 't', ` parameter identifies the syntax and the
 pattern and takes the form:
 `],
				[/* blockquote */ 'q', [
					[/* code block */ 'c', [
						[/* text */ 't', ` `],
						[/* text */ 't', `syntax`],
						[/* text */ 't', `:`],
						[/* text */ 't', `pattern`],
						[/* text */ 't', `
 `]
					]]
				]],
				[/* text */ 't', `
 where `],
				[/* inline code block */ 'i', `':'`],
				[/* text */ 't', ` stands for itself.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` A `],
					[/* inline code block */ 'i', `FileSystem`],
					[/* text */ 't', ` implementation supports the "`],
					[/* inline code block */ 'i', `glob`],
					[/* text */ 't', `" and
 "`],
					[/* inline code block */ 'i', `regex`],
					[/* text */ 't', `" syntaxes, and may support others. The value of the syntax
 component is compared without regard to case.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` When the syntax is "`],
					[/* inline code block */ 'i', `glob`],
					[/* text */ 't', `" then the `],
					[/* inline code block */ 'i', `String`],
					[/* text */ 't', `
 representation of the path is matched using a limited pattern language
 that resembles regular expressions but with a simpler syntax. For example:

 `]
				]],
				[/* table */ 'tbl',
					[/* caption */ 'tc'],
					[/* table header */ 'th', [
						[/* table row */ 'tr', [
							[/* table header cell */ 'thc', [
								[/* text */ 't', `Example
   `]
							]],
							[/* table header cell */ 'thc', [
								[/* text */ 't', `Description
 `]
							]]
						]]
					]],
					[/* table body */ 'tb', [
						[/* table row */ 'tr', [
							[/* table header cell */ 'thc', [
								[/* inline code block */ 'i', `*.java`]
							]],
							[/* table cell */ 'tbc', [
								[/* text */ 't', `Matches a path that represents a file name ending in `],
								[/* inline code block */ 'i', `.java`]
							]]
						]],
						[/* table row */ 'tr', [
							[/* table header cell */ 'thc', [
								[/* inline code block */ 'i', `*.*`]
							]],
							[/* table cell */ 'tbc', [
								[/* text */ 't', `Matches file names containing a dot`]
							]]
						]],
						[/* table row */ 'tr', [
							[/* table header cell */ 'thc', [
								[/* inline code block */ 'i', `*.{java,class}`]
							]],
							[/* table cell */ 'tbc', [
								[/* text */ 't', `Matches file names ending with `],
								[/* inline code block */ 'i', `.java`],
								[/* text */ 't', ` or `],
								[/* inline code block */ 'i', `.class`]
							]]
						]],
						[/* table row */ 'tr', [
							[/* table header cell */ 'thc', [
								[/* inline code block */ 'i', `foo.?`]
							]],
							[/* table cell */ 'tbc', [
								[/* text */ 't', `Matches file names starting with `],
								[/* inline code block */ 'i', `foo.`],
								[/* text */ 't', ` and a single
   character extension`]
							]]
						]],
						[/* table row */ 'tr', [
							[/* table header cell */ 'thc', [
								[/* inline code block */ 'i', `/home/*/*`],
								[/* text */ 't', `
   `]
							]],
							[/* table cell */ 'tbc', [
								[/* text */ 't', `Matches `],
								[/* inline code block */ 'i', `/home/gus/data`],
								[/* text */ 't', ` on UNIX platforms`]
							]]
						]],
						[/* table row */ 'tr', [
							[/* table header cell */ 'thc', [
								[/* inline code block */ 'i', `/home/**`],
								[/* text */ 't', `
   `]
							]],
							[/* table cell */ 'tbc', [
								[/* text */ 't', `Matches `],
								[/* inline code block */ 'i', `/home/gus`],
								[/* text */ 't', ` and
   `],
								[/* inline code block */ 'i', `/home/gus/data`],
								[/* text */ 't', ` on UNIX platforms`]
							]]
						]],
						[/* table row */ 'tr', [
							[/* table header cell */ 'thc', [
								[/* inline code block */ 'i', `C:\\\\*`],
								[/* text */ 't', `
   `]
							]],
							[/* table cell */ 'tbc', [
								[/* text */ 't', `Matches `],
								[/* inline code block */ 'i', `C:\\foo`],
								[/* text */ 't', ` and `],
								[/* inline code block */ 'i', `C:\\bar`],
								[/* text */ 't', ` on the Windows
   platform (note that the backslash is escaped; as a string literal in the
   Java Language the pattern would be `],
								[/* inline code block */ 'i', `"C:\\\\\\\\*"`],
								[/* text */ 't', `) `]
							]]
						]]
					]],
				],
				[/* text */ 't', `

 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', ` The following rules are used to interpret glob patterns:

 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* block */ 'b', [
							[/* text */ 't', ` The `],
							[/* inline code block */ 'i', `*`],
							[/* text */ 't', ` character matches zero or more `],
							[/* reference */ 'r', `java.lang.Character`, `characters`],
							[/* text */ 't', ` of a `],
							[/* reference */ 'r', `java.nio.file.Path#getName(int)`, `name`],
							[/* text */ 't', ` component without
   crossing directory boundaries. `]
						]]
					]],
					[/* block */ 'b', [
						[/* block */ 'b', [
							[/* text */ 't', ` The `],
							[/* inline code block */ 'i', `**`],
							[/* text */ 't', ` characters matches zero or more `],
							[/* reference */ 'r', `java.lang.Character`, `characters`],
							[/* text */ 't', ` crossing directory boundaries. `]
						]]
					]],
					[/* block */ 'b', [
						[/* block */ 'b', [
							[/* text */ 't', ` The `],
							[/* inline code block */ 'i', `?`],
							[/* text */ 't', ` character matches exactly one character of a
   name component.`]
						]]
					]],
					[/* block */ 'b', [
						[/* block */ 'b', [
							[/* text */ 't', ` The backslash character (`],
							[/* inline code block */ 'i', `\\`],
							[/* text */ 't', `) is used to escape characters
   that would otherwise be interpreted as special characters. The expression
   `],
							[/* inline code block */ 'i', `\\\\`],
							[/* text */ 't', ` matches a single backslash and "\\{" matches a left brace
   for example.  `]
						]]
					]],
					[/* block */ 'b', [
						[/* block */ 'b', [
							[/* text */ 't', ` The `],
							[/* inline code block */ 'i', `[ ]`],
							[/* text */ 't', ` characters are a `],
							[/* text */ 't', `bracket expression`],
							[/* text */ 't', ` that
   match a single character of a name component out of a set of characters.
   For example, `],
							[/* inline code block */ 'i', `[abc]`],
							[/* text */ 't', ` matches `],
							[/* inline code block */ 'i', `"a"`],
							[/* text */ 't', `, `],
							[/* inline code block */ 'i', `"b"`],
							[/* text */ 't', `, or `],
							[/* inline code block */ 'i', `"c"`],
							[/* text */ 't', `.
   The hyphen (`],
							[/* inline code block */ 'i', `-`],
							[/* text */ 't', `) may be used to specify a range so `],
							[/* inline code block */ 'i', `[a-z]`],
							[/* text */ 't', `
   specifies a range that matches from `],
							[/* inline code block */ 'i', `"a"`],
							[/* text */ 't', ` to `],
							[/* inline code block */ 'i', `"z"`],
							[/* text */ 't', ` (inclusive).
   These forms can be mixed so [abce-g] matches `],
							[/* inline code block */ 'i', `"a"`],
							[/* text */ 't', `, `],
							[/* inline code block */ 'i', `"b"`],
							[/* text */ 't', `,
   `],
							[/* inline code block */ 'i', `"c"`],
							[/* text */ 't', `, `],
							[/* inline code block */ 'i', `"e"`],
							[/* text */ 't', `, `],
							[/* inline code block */ 'i', `"f"`],
							[/* text */ 't', ` or `],
							[/* inline code block */ 'i', `"g"`],
							[/* text */ 't', `. If the character
   after the `],
							[/* inline code block */ 'i', `[`],
							[/* text */ 't', ` is a `],
							[/* inline code block */ 'i', `!`],
							[/* text */ 't', ` then it is used for negation so `],
							[/* inline code block */ 'i', `[!a-c]`],
							[/* text */ 't', ` matches any character except `],
							[/* inline code block */ 'i', `"a"`],
							[/* text */ 't', `, `],
							[/* inline code block */ 'i', `"b"`],
							[/* text */ 't', `, or `],
							[/* inline code block */ 'i', `"c"`],
							[/* text */ 't', `.
   `]
						]],
						[/* block */ 'b', [
							[/* text */ 't', ` Within a bracket expression the `],
							[/* inline code block */ 'i', `*`],
							[/* text */ 't', `, `],
							[/* inline code block */ 'i', `?`],
							[/* text */ 't', ` and `],
							[/* inline code block */ 'i', `\\`],
							[/* text */ 't', `
   characters match themselves. The (`],
							[/* inline code block */ 'i', `-`],
							[/* text */ 't', `) character matches itself if
   it is the first character within the brackets, or the first character
   after the `],
							[/* inline code block */ 'i', `!`],
							[/* text */ 't', ` if negating.`]
						]]
					]],
					[/* block */ 'b', [
						[/* block */ 'b', [
							[/* text */ 't', ` The `],
							[/* inline code block */ 'i', `{ }`],
							[/* text */ 't', ` characters are a group of subpatterns, where
   the group matches if any subpattern in the group matches. The `],
							[/* inline code block */ 'i', `","`],
							[/* text */ 't', `
   character is used to separate the subpatterns. Groups cannot be nested.
   `]
						]]
					]],
					[/* block */ 'b', [
						[/* block */ 'b', [
							[/* text */ 't', ` Leading period`],
							[/* inline code block */ 'i', `/`],
							[/* text */ 't', `dot characters in file name are
   treated as regular characters in match operations. For example,
   the `],
							[/* inline code block */ 'i', `"*"`],
							[/* text */ 't', ` glob pattern matches file name `],
							[/* inline code block */ 'i', `".login"`],
							[/* text */ 't', `.
   The `],
							[/* reference */ 'r', `java.nio.file.Files#isHidden(java.nio.file.Path)`, `Files.isHidden(java.nio.file.Path)`],
							[/* text */ 't', ` method may be used to test whether a file
   is considered hidden.
   `]
						]]
					]],
					[/* block */ 'b', [
						[/* block */ 'b', [
							[/* text */ 't', ` All other characters match themselves in an implementation
   dependent manner. This includes characters representing any `],
							[/* reference */ 'r', `#getSeparator()`, `name-separators`],
							[/* text */ 't', `. `]
						]]
					]],
					[/* block */ 'b', [
						[/* block */ 'b', [
							[/* text */ 't', ` The matching of `],
							[/* reference */ 'r', `java.nio.file.Path#getRoot()`, `root`],
							[/* text */ 't', ` components is highly
   implementation-dependent and is not specified. `]
						]]
					]]
				]],
				[/* text */ 't', `

 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', ` When the syntax is "`],
					[/* inline code block */ 'i', `regex`],
					[/* text */ 't', `" then the pattern component is a
 regular expression as defined by the `],
					[/* reference */ 'r', `java.util.regex.Pattern`, `Pattern`],
					[/* text */ 't', `
 class.

 `]
				]],
				[/* block */ 'b', `  For both the glob and regex syntaxes, the matching details, such as
 whether the matching is case sensitive, are implementation-dependent
 and therefore not specified.`]
			],
			[/* parameters */
				[/* parameter */ 'syntaxAndPattern', [/* parameter description */
					[/* text */ 't', `The syntax and pattern`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If the parameter does not take the form: `],
					[/* inline code block */ 'i', `syntax:pattern`]
				]],
				[/* throw */ 'java.util.regex.PatternSyntaxException', [/* throw description */
					[/* text */ 't', `If the pattern is invalid`]
				]],
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `If the pattern syntax is not known to the implementation`]
				]]
			],
			[/* return description */
				[/* text */ 't', `A path matcher that may be used to match paths against the pattern`]
			]
		]],
		[/* method */ 'provider()', [
			[/* method description */
				[/* text */ 't', `Returns the provider that created this file system.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `The provider that created this file system.`]
			]
		]],
		[/* method */ 'newWatchService()', [
			[/* method description */
				[/* text */ 't', `Constructs a new `],
				[/* reference */ 'r', `java.nio.file.WatchService`, `WatchService`],
				[/* text */ 't', ` `],
				[/* text */ 't', `(optional operation)`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', ` This method constructs a new watch service that may be used to watch
 registered objects for changes and events.`]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `If this `],
					[/* inline code block */ 'i', `FileSystem`],
					[/* text */ 't', ` does not support watching file system
          objects for changes and events. This exception is not thrown
          by `],
					[/* inline code block */ 'i', `FileSystems`],
					[/* text */ 't', ` created by the default provider.`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If an I/O error occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a new watch service`]
			]
		]],
		[/* method */ 'supportedFileAttributeViews()', [
			[/* method description */
				[/* text */ 't', `Returns the set of the `],
				[/* reference */ 'r', `java.nio.file.attribute.AttributeView#name()`, `names`],
				[/* text */ 't', ` of the file
 attribute views supported by this `],
				[/* inline code block */ 'i', `FileSystem`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The `],
					[/* reference */ 'r', `java.nio.file.attribute.BasicFileAttributeView`, `BasicFileAttributeView`],
					[/* text */ 't', ` is required to be supported and
 therefore the set contains at least one element, "basic".

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` The `],
					[/* reference */ 'r', `java.nio.file.FileStore#supportsFileAttributeView(java.lang.String)`, `supportsFileAttributeView(String)`],
					[/* text */ 't', ` method may be used to test if an
 underlying `],
					[/* reference */ 'r', `java.nio.file.FileStore`, `FileStore`],
					[/* text */ 't', ` supports the file attributes identified by a
 file attribute view.`]
				]]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `An unmodifiable set of the names of the supported file attribute
          views`]
			]
		]],
		[/* method */ 'close()', [
			[/* method description */
				[/* text */ 't', `Closes this file system.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` After a file system is closed then all subsequent access to the file
 system, either by methods defined by this class or on objects associated
 with this file system, throw `],
					[/* reference */ 'r', `java.nio.file.ClosedFileSystemException`, `ClosedFileSystemException`],
					[/* text */ 't', `. If the
 file system is already closed then invoking this method has no effect.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` Closing a file system will close all open `],
					[/* reference */ 'r', `java.nio.channels.Channel`, `channels`],
					[/* text */ 't', `, `],
					[/* reference */ 'r', `java.nio.file.DirectoryStream`, `directory-streams`],
					[/* text */ 't', `,
 `],
					[/* reference */ 'r', `java.nio.file.WatchService`, `watch-service`],
					[/* text */ 't', `, and other closeable objects associated
 with this file system. The `],
					[/* reference */ 'r', `java.nio.file.FileSystems#getDefault()`, `default`],
					[/* text */ 't', ` file
 system cannot be closed.`]
				]]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If an I/O error occurs`]
				]],
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `Thrown in the case of the default file system`]
				]]
			],
			/* return */ UDF
		]]
	],
	/* enum values */ UDF
]);
