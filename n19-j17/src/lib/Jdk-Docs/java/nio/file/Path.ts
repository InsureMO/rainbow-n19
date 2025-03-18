import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.nio.file.Path', [
	[/* class description */
		[/* text */ 't', `An object that may be used to locate a file in a file system. It will
 typically represent a system dependent file path.

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` A `],
			[/* inline code block */ 'i', `Path`],
			[/* text */ 't', ` represents a path that is hierarchical and composed of a
 sequence of directory and file name elements separated by a special separator
 or delimiter. A `],
			[/* text */ 't', `root component`],
			[/* text */ 't', `, that identifies a file system
 hierarchy, may also be present. The name element that is `],
			[/* text */ 't', `farthest`],
			[/* text */ 't', `
 from the root of the directory hierarchy is the name of a file or directory.
 The other name elements are directory names. A `],
			[/* inline code block */ 'i', `Path`],
			[/* text */ 't', ` can represent a
 root, a root and a sequence of names, or simply one or more name elements.
 A `],
			[/* inline code block */ 'i', `Path`],
			[/* text */ 't', ` is considered to be an `],
			[/* text */ 't', `empty path`],
			[/* text */ 't', ` if it consists
 solely of one name element that is empty. Accessing a file using an
 `],
			[/* text */ 't', `empty path`],
			[/* text */ 't', ` is equivalent to accessing the default directory of the
 file system. `],
			[/* inline code block */ 'i', `Path`],
			[/* text */ 't', ` defines the `],
			[/* reference */ 'r', `#getFileName()`, `getFileName`],
			[/* text */ 't', `,
 `],
			[/* reference */ 'r', `#getParent()`, `getParent`],
			[/* text */ 't', `, `],
			[/* reference */ 'r', `#getRoot()`, `getRoot`],
			[/* text */ 't', `, and `],
			[/* reference */ 'r', `#subpath(int,int)`, `subpath`],
			[/* text */ 't', ` methods to access the path components or a subsequence of its name
 elements.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` In addition to accessing the components of a path, a `],
			[/* inline code block */ 'i', `Path`],
			[/* text */ 't', ` also
 defines the `],
			[/* reference */ 'r', `#resolve(java.nio.file.Path)`, `resolve`],
			[/* text */ 't', ` and `],
			[/* reference */ 'r', `#resolveSibling(java.nio.file.Path)`, `resolveSibling`],
			[/* text */ 't', ` methods to combine paths. The `],
			[/* reference */ 'r', `#relativize(java.nio.file.Path)`, `relativize`],
			[/* text */ 't', `
 method that can be used to construct a relative path between two paths.
 Paths can be `],
			[/* reference */ 'r', `#compareTo(java.nio.file.Path)`, `compared`],
			[/* text */ 't', `, and tested against each other using
 the `],
			[/* reference */ 'r', `#startsWith(java.nio.file.Path)`, `startsWith`],
			[/* text */ 't', ` and `],
			[/* reference */ 'r', `#endsWith(java.nio.file.Path)`, `endsWith`],
			[/* text */ 't', ` methods.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` This interface extends `],
			[/* reference */ 'r', `java.nio.file.Watchable`, `Watchable`],
			[/* text */ 't', ` interface so that a directory
 located by a path can be `],
			[/* reference */ 'r', `#register(java.nio.file.WatchService,java.nio.file.WatchEvent.Kind%5B%5D,java.nio.file.WatchEvent.Modifier...)`, `registered`],
			[/* text */ 't', ` with a `],
			[/* reference */ 'r', `java.nio.file.WatchService`, `WatchService`],
			[/* text */ 't', ` and entries in the directory watched. `]
		]],
		[/* text */ 't', `

 `],
		[/* block */ 'b', `WARNING:`],
		[/* text */ 't', `

 `],
		[/* block */ 'b', `Accessing Files`],
		[/* text */ 't', `
 `],
		[/* block */ 'b', [
			[/* text */ 't', ` Paths may be used with the `],
			[/* reference */ 'r', `java.nio.file.Files`, `Files`],
			[/* text */ 't', ` class to operate on files,
 directories, and other types of files. For example, suppose we want a `],
			[/* reference */ 'r', `java.io.BufferedReader`, `BufferedReader`],
			[/* text */ 't', ` to read text from a file "`],
			[/* inline code block */ 'i', `access.log`],
			[/* text */ 't', `". The
 file is located in a directory "`],
			[/* inline code block */ 'i', `logs`],
			[/* text */ 't', `" relative to the current working
 directory and is UTF-8 encoded.
 `]
		]],
		[/* code block */ 'c', `     Path path = FileSystems.getDefault().getPath("logs", "access.log");
     BufferedReader reader = Files.newBufferedReader(path, StandardCharsets.UTF_8);
 `],
		[/* text */ 't', `

 `],
		[/* anchor */ 'r', '#-id', `interop`, ``],
		[/* block */ 'b', ''],
		[/* block */ 'b', `Interoperability`],
		[/* text */ 't', `
 `],
		[/* block */ 'b', [
			[/* text */ 't', ` Paths associated with the default `],
			[/* reference */ 'r', `java.nio.file.spi.FileSystemProvider`, `provider`],
			[/* text */ 't', ` are generally interoperable
 with the `],
			[/* reference */ 'r', `java.io.File`, `java.io.File`],
			[/* text */ 't', ` class. Paths created by other
 providers are unlikely to be interoperable with the abstract path names
 represented by `],
			[/* inline code block */ 'i', `java.io.File`],
			[/* text */ 't', `. The `],
			[/* reference */ 'r', `java.io.File#toPath()`, `toPath`],
			[/* text */ 't', `
 method may be used to obtain a `],
			[/* inline code block */ 'i', `Path`],
			[/* text */ 't', ` from the abstract path name
 represented by a `],
			[/* inline code block */ 'i', `java.io.File`],
			[/* text */ 't', ` object. The resulting `],
			[/* inline code block */ 'i', `Path`],
			[/* text */ 't', ` can
 be used to operate on the same file as the `],
			[/* inline code block */ 'i', `java.io.File`],
			[/* text */ 't', ` object. In
 addition, the `],
			[/* reference */ 'r', `#toFile()`, `toFile`],
			[/* text */ 't', ` method is useful to construct a `],
			[/* inline code block */ 'i', `File`],
			[/* text */ 't', ` from the `],
			[/* inline code block */ 'i', `String`],
			[/* text */ 't', ` representation of a `],
			[/* inline code block */ 'i', `Path`],
			[/* text */ 't', `.

 `]
		]],
		[/* block */ 'b', `Concurrency`],
		[/* text */ 't', `
 `],
		[/* block */ 'b', ` Implementations of this interface are immutable and safe for use by
 multiple concurrent threads.`]
	],
	/* fields */,
	/* constructors */,
	[/* methods */
		[/* method */ 'endsWith(java.nio.file.Path)', [
			[/* method description */
				[/* text */ 't', `Tests if this path ends with the given path.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` If the given path has `],
					[/* text */ 't', `N`],
					[/* text */ 't', ` elements, and no root component,
 and this path has `],
					[/* text */ 't', `N`],
					[/* text */ 't', ` or more elements, then this path ends with
 the given path if the last `],
					[/* text */ 't', `N`],
					[/* text */ 't', ` elements of each path, starting at
 the element farthest from the root, are equal.

 `]
				]],
				[/* block */ 'b', `ends with`],
				[/* block */ 'b', [
					[/* text */ 't', ` If the given path is associated with a different `],
					[/* inline code block */ 'i', `FileSystem`],
					[/* text */ 't', `
 to this path then `],
					[/* inline code block */ 'i', `false`],
					[/* text */ 't', ` is returned.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'other', [/* parameter description */
					[/* text */ 't', `the given path`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this path ends with the given path; otherwise
          `],
				[/* inline code block */ 'i', `false`]
			]
		]],
		[/* method */ 'equals(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Tests this path for equality with the given object.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` If the given object is not a Path, or is a Path associated with a
 different `],
					[/* inline code block */ 'i', `FileSystem`],
					[/* text */ 't', `, then this method returns `],
					[/* inline code block */ 'i', `false`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` Whether or not two path are equal depends on the file system
 implementation. In some cases the paths are compared without regard
 to case, and others are case sensitive. This method does not access the
 file system and the file is not required to exist. Where required, the
 `],
					[/* reference */ 'r', `java.nio.file.Files#isSameFile(java.nio.file.Path,java.nio.file.Path)`, `isSameFile`],
					[/* text */ 't', ` method may be used to check if two
 paths locate the same file.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` This method satisfies the general contract of the `],
					[/* reference */ 'r', `java.lang.Object#equals(java.lang.Object)`, `Object.equals`],
					[/* text */ 't', ` method. `]
				]]
			],
			[/* parameters */
				[/* parameter */ 'other', [/* parameter description */
					[/* text */ 't', `the object to which this object is to be compared`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if, and only if, the given object is a `],
				[/* inline code block */ 'i', `Path`],
				[/* text */ 't', `
          that is identical to this `],
				[/* inline code block */ 'i', `Path`]
			]
		]],
		[/* method */ 'isAbsolute()', [
			[/* method description */
				[/* text */ 't', `Tells whether or not this path is absolute.

 `],
				[/* block */ 'b', ` An absolute path is complete in that it doesn't need to be combined
 with other path information in order to locate a file.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if, and only if, this path is absolute`]
			]
		]],
		[/* method */ 'startsWith(java.nio.file.Path)', [
			[/* method description */
				[/* text */ 't', `Tests if this path starts with the given path.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This path `],
					[/* text */ 't', `starts`],
					[/* text */ 't', ` with the given path if this path's root
 component `],
					[/* text */ 't', `starts`],
					[/* text */ 't', ` with the root component of the given path,
 and this path starts with the same name elements as the given path.
 If the given path has more name elements than this path then `],
					[/* inline code block */ 'i', `false`],
					[/* text */ 't', `
 is returned.

 `]
				]],
				[/* block */ 'b', ` Whether or not the root component of this path starts with the root
 component of the given path is file system specific. If this path does
 not have a root component and the given path has a root component then
 this path does not start with the given path.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` If the given path is associated with a different `],
					[/* inline code block */ 'i', `FileSystem`],
					[/* text */ 't', `
 to this path then `],
					[/* inline code block */ 'i', `false`],
					[/* text */ 't', ` is returned.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'other', [/* parameter description */
					[/* text */ 't', `the given path`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this path starts with the given path; otherwise
          `],
				[/* inline code block */ 'i', `false`]
			]
		]],
		[/* method */ 'compareTo(java.nio.file.Path)', [
			[/* method description */
				[/* text */ 't', `Compares two abstract paths lexicographically. The ordering defined by
 this method is provider specific, and in the case of the default
 provider, platform specific. This method does not access the file system
 and neither file is required to exist.

 `],
				[/* block */ 'b', ` This method may not be used to compare paths that are associated
 with different file system providers.`]
			],
			[/* parameters */
				[/* parameter */ 'other', [/* parameter description */
					[/* text */ 't', `the path compared to this path.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the paths are associated with different providers`]
				]]
			],
			[/* return description */
				[/* text */ 't', `zero if the argument is `],
				[/* reference */ 'r', `#equals(java.lang.Object)`, `equal`],
				[/* text */ 't', ` to this path, a
          value less than zero if this path is lexicographically less than
          the argument, or a value greater than zero if this path is
          lexicographically greater than the argument`]
			]
		]],
		[/* method */ 'getNameCount()', [
			[/* method description */
				[/* text */ 't', `Returns the number of name elements in the path.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the number of elements in the path, or `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if this path
          only represents a root component`]
			]
		]],
		[/* method */ 'hashCode()', [
			[/* method description */
				[/* text */ 't', `Computes a hash code for this path.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The hash code is based upon the components of the path, and
 satisfies the general contract of the `],
					[/* reference */ 'r', `java.lang.Object#hashCode()`, `Object.hashCode`],
					[/* text */ 't', ` method.`]
				]]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the hash-code value for this path`]
			]
		]],
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Returns the string representation of this path.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` If this path was created by converting a path string using the
 `],
					[/* reference */ 'r', `java.nio.file.FileSystem#getPath(java.lang.String,java.lang.String...)`, `getPath`],
					[/* text */ 't', ` method then the path string returned
 by this method may differ from the original String used to create the path.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` The returned path string uses the default name `],
					[/* reference */ 'r', `java.nio.file.FileSystem#getSeparator()`, `separator`],
					[/* text */ 't', ` to separate names in the path.`]
				]]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the string representation of this path`]
			]
		]],
		[/* method */ 'toUri()', [
			[/* method description */
				[/* text */ 't', `Returns a URI to represent this path.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method constructs an absolute `],
					[/* reference */ 'r', `java.net.URI`, `URI`],
					[/* text */ 't', ` with a `],
					[/* reference */ 'r', `java.net.URI#getScheme()`, `scheme`],
					[/* text */ 't', ` equal to the URI scheme that identifies the
 provider. The exact form of the scheme specific part is highly provider
 dependent.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` In the case of the default provider, the URI is hierarchical with
 a `],
					[/* reference */ 'r', `java.net.URI#getPath()`, `path`],
					[/* text */ 't', ` component that is absolute. The query and
 fragment components are undefined. Whether the authority component is
 defined or not is implementation dependent. There is no guarantee that
 the `],
					[/* inline code block */ 'i', `URI`],
					[/* text */ 't', ` may be used to construct a `],
					[/* reference */ 'r', `java.io.File`, `java.io.File`],
					[/* text */ 't', `.
 In particular, if this path represents a Universal Naming Convention (UNC)
 path, then the UNC server name may be encoded in the authority component
 of the resulting URI. In the case of the default provider, and the file
 exists, and it can be determined that the file is a directory, then the
 resulting `],
					[/* inline code block */ 'i', `URI`],
					[/* text */ 't', ` will end with a slash.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` The default provider provides a similar `],
					[/* text */ 't', `round-trip`],
					[/* text */ 't', ` guarantee
 to the `],
					[/* reference */ 'r', `java.io.File`, `File`],
					[/* text */ 't', ` class. For a given `],
					[/* inline code block */ 'i', `Path`],
					[/* text */ 't', ` `],
					[/* text */ 't', `p`],
					[/* text */ 't', ` it
 is guaranteed that
 `]
				]],
				[/* blockquote */ 'q', [
					[/* text */ 't', `
 `],
					[/* reference */ 'r', `#of(java.net.URI)`, `Path.of`],
					[/* inline code block */ 'i', `(`],
					[/* text */ 't', `p`],
					[/* inline code block */ 'i', `.toUri()).equals(`],
					[/* text */ 't', `p`],
					[/* text */ 't', `
 `],
					[/* inline code block */ 'i', `.`],
					[/* reference */ 'r', `#toAbsolutePath()`, `toAbsolutePath`],
					[/* inline code block */ 'i', `())`],
					[/* text */ 't', `
 `]
				]],
				[/* text */ 't', `
 so long as the original `],
				[/* inline code block */ 'i', `Path`],
				[/* text */ 't', `, the `],
				[/* inline code block */ 'i', `URI`],
				[/* text */ 't', `, and the new `],
				[/* inline code block */ 'i', `Path`],
				[/* text */ 't', ` are all created in (possibly different invocations of) the same
 Java virtual machine. Whether other providers make any guarantees is
 provider specific and therefore unspecified.

 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', `compound`]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.io.IOError', [/* throw description */
					[/* text */ 't', `if an I/O error occurs obtaining the absolute path, or where a
          file system is constructed to access the contents of a file as
          a file system, and the URI of the enclosing file system cannot be
          obtained`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `In the case of the default provider, and a security manager
          is installed, the `],
					[/* reference */ 'r', `#toAbsolutePath()`, `toAbsolutePath`],
					[/* text */ 't', ` method
          throws a security exception.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the URI representing this path`]
			]
		]],
		[/* method */ 'getFileSystem()', [
			[/* method description */
				[/* text */ 't', `Returns the file system that created this object.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the file system that created this object`]
			]
		]],
		[/* method */ 'getFileName()', [
			[/* method description */
				[/* text */ 't', `Returns the name of the file or directory denoted by this path as a
 `],
				[/* inline code block */ 'i', `Path`],
				[/* text */ 't', ` object. The file name is the `],
				[/* text */ 't', `farthest`],
				[/* text */ 't', ` element from
 the root in the directory hierarchy.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `a path representing the name of the file or directory, or
          `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if this path has zero elements`]
			]
		]],
		[/* method */ 'getName(int)', [
			[/* method description */
				[/* text */ 't', `Returns a name element of this path as a `],
				[/* inline code block */ 'i', `Path`],
				[/* text */ 't', ` object.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The `],
					[/* inline code block */ 'i', `index`],
					[/* text */ 't', ` parameter is the index of the name element to return.
 The element that is `],
					[/* text */ 't', `closest`],
					[/* text */ 't', ` to the root in the directory hierarchy
 has index `],
					[/* inline code block */ 'i', `0`],
					[/* text */ 't', `. The element that is `],
					[/* text */ 't', `farthest`],
					[/* text */ 't', ` from the root
 has index `],
					[/* reference */ 'r', `#getNameCount()`, `count`],
					[/* inline code block */ 'i', `-1`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'index', [/* parameter description */
					[/* text */ 't', `the index of the element`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `index`],
					[/* text */ 't', ` is negative, `],
					[/* inline code block */ 'i', `index`],
					[/* text */ 't', ` is greater than or
          equal to the number of elements, or this path has zero name
          elements`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the name element`]
			]
		]],
		[/* method */ 'getParent()', [
			[/* method description */
				[/* text */ 't', `Returns the `],
				[/* text */ 't', `parent path`],
				[/* text */ 't', `, or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if this path does not
 have a parent.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The parent of this path object consists of this path's root
 component, if any, and each element in the path except for the
 `],
					[/* text */ 't', `farthest`],
					[/* text */ 't', ` from the root in the directory hierarchy. This method
 does not access the file system; the path or its parent may not exist.
 Furthermore, this method does not eliminate special names such as "."
 and ".." that may be used in some implementations. On UNIX for example,
 the parent of "`],
					[/* inline code block */ 'i', `/a/b/c`],
					[/* text */ 't', `" is "`],
					[/* inline code block */ 'i', `/a/b`],
					[/* text */ 't', `", and the parent of
 `],
					[/* inline code block */ 'i', `"x/y/.`],
					[/* text */ 't', `" is "`],
					[/* inline code block */ 'i', `x/y`],
					[/* text */ 't', `". This method may be used with the `],
					[/* reference */ 'r', `#normalize()`, `normalize`],
					[/* text */ 't', ` method, to eliminate redundant names, for cases where
 `],
					[/* text */ 't', `shell-like`],
					[/* text */ 't', ` navigation is required.

 `]
				]],
				[/* block */ 'b', ` If this path has more than one element, and no root component, then
 this method is equivalent to evaluating the expression:
 `],
				[/* blockquote */ 'q', [
					[/* code block */ 'c', ` subpath(0, getNameCount()-1);
 `]
				]],
				[/* block */ 'b', '']
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `a path representing the path's parent`]
			]
		]],
		[/* method */ 'getRoot()', [
			[/* method description */
				[/* text */ 't', `Returns the root component of this path as a `],
				[/* inline code block */ 'i', `Path`],
				[/* text */ 't', ` object,
 or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if this path does not have a root component.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `a path representing the root component of this path,
          or `],
				[/* inline code block */ 'i', `null`]
			]
		]],
		[/* method */ 'normalize()', [
			[/* method description */
				[/* text */ 't', `Returns a path that is this path with redundant name elements eliminated.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The precise definition of this method is implementation dependent but
 in general it derives from this path, a path that does not contain
 `],
					[/* text */ 't', `redundant`],
					[/* text */ 't', ` name elements. In many file systems, the "`],
					[/* inline code block */ 'i', `.`],
					[/* text */ 't', `"
 and "`],
					[/* inline code block */ 'i', `..`],
					[/* text */ 't', `" are special names used to indicate the current directory
 and parent directory. In such file systems all occurrences of "`],
					[/* inline code block */ 'i', `.`],
					[/* text */ 't', `"
 are considered redundant. If a "`],
					[/* inline code block */ 'i', `..`],
					[/* text */ 't', `" is preceded by a
 non-"`],
					[/* inline code block */ 'i', `..`],
					[/* text */ 't', `" name then both names are considered redundant (the
 process to identify such names is repeated until it is no longer
 applicable).

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` This method does not access the file system; the path may not locate
 a file that exists. Eliminating "`],
					[/* inline code block */ 'i', `..`],
					[/* text */ 't', `" and a preceding name from a
 path may result in the path that locates a different file than the original
 path. This can arise when the preceding name is a symbolic link.`]
				]]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the resulting path or this path if it does not contain
          redundant name elements; an empty path is returned if this path
          does not have a root component and all name elements are redundant`]
			]
		]],
		[/* method */ 'relativize(java.nio.file.Path)', [
			[/* method description */
				[/* text */ 't', `Constructs a relative path between this path and a given path.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` Relativization is the inverse of `],
					[/* reference */ 'r', `#resolve(java.nio.file.Path)`, `resolution`],
					[/* text */ 't', `.
 This method attempts to construct a `],
					[/* reference */ 'r', `#isAbsolute()`, `relative`],
					[/* text */ 't', ` path
 that when `],
					[/* reference */ 'r', `#resolve(java.nio.file.Path)`, `resolved`],
					[/* text */ 't', ` against this path, yields a
 path that locates the same file as the given path. For example, on UNIX,
 if this path is `],
					[/* inline code block */ 'i', `"/a/b"`],
					[/* text */ 't', ` and the given path is `],
					[/* inline code block */ 'i', `"/a/b/c/d"`],
					[/* text */ 't', `
 then the resulting relative path would be `],
					[/* inline code block */ 'i', `"c/d"`],
					[/* text */ 't', `. Where this
 path and the given path do not have a `],
					[/* reference */ 'r', `#getRoot()`, `root`],
					[/* text */ 't', ` component,
 then a relative path can be constructed. A relative path cannot be
 constructed if only one of the paths have a root component. Where both
 paths have a root component then it is implementation dependent if a
 relative path can be constructed. If this path and the given path are
 `],
					[/* reference */ 'r', `#equals(java.lang.Object)`, `equal`],
					[/* text */ 't', ` then an `],
					[/* text */ 't', `empty path`],
					[/* text */ 't', ` is returned.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` For any two `],
					[/* reference */ 'r', `#normalize()`, `normalized`],
					[/* text */ 't', ` paths `],
					[/* text */ 't', `p`],
					[/* text */ 't', ` and
 `],
					[/* text */ 't', `q`],
					[/* text */ 't', `, where `],
					[/* text */ 't', `q`],
					[/* text */ 't', ` does not have a root component,
 `]
				]],
				[/* blockquote */ 'q', [
					[/* text */ 't', `
   `],
					[/* text */ 't', `p`],
					[/* inline code block */ 'i', `.relativize(`],
					[/* text */ 't', `p`],
					[/* text */ 't', `
   `],
					[/* inline code block */ 'i', `.resolve(`],
					[/* text */ 't', `q`],
					[/* inline code block */ 'i', `)).equals(`],
					[/* text */ 't', `q`],
					[/* inline code block */ 'i', `)`],
					[/* text */ 't', `
 `]
				]],
				[/* text */ 't', `

 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', ` When symbolic links are supported, then whether the resulting path,
 when resolved against this path, yields a path that can be used to locate
 the `],
					[/* reference */ 'r', `java.nio.file.Files#isSameFile(java.nio.file.Path,java.nio.file.Path)`, `same`],
					[/* text */ 't', ` file as `],
					[/* inline code block */ 'i', `other`],
					[/* text */ 't', ` is implementation
 dependent. For example, if this path is  `],
					[/* inline code block */ 'i', `"/a/b"`],
					[/* text */ 't', ` and the given
 path is `],
					[/* inline code block */ 'i', `"/a/x"`],
					[/* text */ 't', ` then the resulting relative path may be `],
					[/* inline code block */ 'i', `"../x"`],
					[/* text */ 't', `. If `],
					[/* inline code block */ 'i', `"b"`],
					[/* text */ 't', ` is a symbolic link then is implementation
 dependent if `],
					[/* inline code block */ 'i', `"a/b/../x"`],
					[/* text */ 't', ` would locate the same file as `],
					[/* inline code block */ 'i', `"/a/x"`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'other', [/* parameter description */
					[/* text */ 't', `the path to relativize against this path`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `other`],
					[/* text */ 't', ` is not a `],
					[/* inline code block */ 'i', `Path`],
					[/* text */ 't', ` that can be relativized
          against this path`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the resulting relative path, or an empty path if both paths are
          equal`]
			]
		]],
		[/* method */ 'resolve(java.nio.file.Path)', [
			[/* method description */
				[/* text */ 't', `Resolve the given path against this path.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` If the `],
					[/* inline code block */ 'i', `other`],
					[/* text */ 't', ` parameter is an `],
					[/* reference */ 'r', `#isAbsolute()`, `absolute`],
					[/* text */ 't', `
 path then this method trivially returns `],
					[/* inline code block */ 'i', `other`],
					[/* text */ 't', `. If `],
					[/* inline code block */ 'i', `other`],
					[/* text */ 't', `
 is an `],
					[/* text */ 't', `empty path`],
					[/* text */ 't', ` then this method trivially returns this path.
 Otherwise this method considers this path to be a directory and resolves
 the given path against this path. In the simplest case, the given path
 does not have a `],
					[/* reference */ 'r', `#getRoot()`, `root`],
					[/* text */ 't', ` component, in which case this method
 `],
					[/* text */ 't', `joins`],
					[/* text */ 't', ` the given path to this path and returns a resulting path
 that `],
					[/* reference */ 'r', `#endsWith(java.nio.file.Path)`, `ends`],
					[/* text */ 't', ` with the given path. Where the given path has
 a root component then resolution is highly implementation dependent and
 therefore unspecified.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'other', [/* parameter description */
					[/* text */ 't', `the path to resolve against this path`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `the resulting path`]
			]
		]],
		[/* method */ 'subpath(int,int)', [
			[/* method description */
				[/* text */ 't', `Returns a relative `],
				[/* inline code block */ 'i', `Path`],
				[/* text */ 't', ` that is a subsequence of the name
 elements of this path.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The `],
					[/* inline code block */ 'i', `beginIndex`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `endIndex`],
					[/* text */ 't', ` parameters specify the
 subsequence of name elements. The name that is `],
					[/* text */ 't', `closest`],
					[/* text */ 't', ` to the root
 in the directory hierarchy has index `],
					[/* inline code block */ 'i', `0`],
					[/* text */ 't', `. The name that is
 `],
					[/* text */ 't', `farthest`],
					[/* text */ 't', ` from the root has index `],
					[/* reference */ 'r', `#getNameCount()`, `count`],
					[/* inline code block */ 'i', `-1`],
					[/* text */ 't', `. The returned `],
					[/* inline code block */ 'i', `Path`],
					[/* text */ 't', ` object has the name elements
 that begin at `],
					[/* inline code block */ 'i', `beginIndex`],
					[/* text */ 't', ` and extend to the element at index `],
					[/* inline code block */ 'i', `endIndex-1`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'beginIndex', [/* parameter description */
					[/* text */ 't', `the index of the first element, inclusive`]
				]],
				[/* parameter */ 'endIndex', [/* parameter description */
					[/* text */ 't', `the index of the last element, exclusive`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `beginIndex`],
					[/* text */ 't', ` is negative, or greater than or equal to
          the number of elements. If `],
					[/* inline code block */ 'i', `endIndex`],
					[/* text */ 't', ` is less than or
          equal to `],
					[/* inline code block */ 'i', `beginIndex`],
					[/* text */ 't', `, or larger than the number of elements.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a new `],
				[/* inline code block */ 'i', `Path`],
				[/* text */ 't', ` object that is a subsequence of the name
          elements in this `],
				[/* inline code block */ 'i', `Path`]
			]
		]],
		[/* method */ 'toAbsolutePath()', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `Path`],
				[/* text */ 't', ` object representing the absolute path of this
 path.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` If this path is already `],
					[/* reference */ 'r', `#isAbsolute()`, `absolute`],
					[/* text */ 't', ` then this
 method simply returns this path. Otherwise, this method resolves the path
 in an implementation dependent manner, typically by resolving the path
 against a file system default directory. Depending on the implementation,
 this method may throw an I/O error if the file system is not accessible.`]
				]]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.io.IOError', [/* throw description */
					[/* text */ 't', `if an I/O error occurs`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `In the case of the default provider, a security manager
          is installed, and this path is not absolute, then the security
          manager's `],
					[/* reference */ 'r', `java.lang.SecurityManager#checkPropertyAccess(java.lang.String)`, `checkPropertyAccess`],
					[/* text */ 't', ` method is invoked to check access to the
          system property `],
					[/* inline code block */ 'i', `user.dir`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Path`],
				[/* text */ 't', ` object representing the absolute path`]
			]
		]],
		[/* method */ 'toRealPath(java.nio.file.LinkOption...)', [
			[/* method description */
				[/* text */ 't', `Returns the `],
				[/* text */ 't', `real`],
				[/* text */ 't', ` path of an existing file.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The precise definition of this method is implementation dependent but
 in general it derives from this path, an `],
					[/* reference */ 'r', `#isAbsolute()`, `absolute`],
					[/* text */ 't', `
 path that locates the `],
					[/* reference */ 'r', `java.nio.file.Files#isSameFile(java.nio.file.Path,java.nio.file.Path)`, `same`],
					[/* text */ 't', ` file as this path, but
 with name elements that represent the actual name of the directories
 and the file. For example, where filename comparisons on a file system
 are case insensitive then the name elements represent the names in their
 actual case. Additionally, the resulting path has redundant name
 elements removed.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` If this path is relative then its absolute path is first obtained,
 as if by invoking the `],
					[/* reference */ 'r', `#toAbsolutePath()`, `toAbsolutePath`],
					[/* text */ 't', ` method.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` The `],
					[/* inline code block */ 'i', `options`],
					[/* text */ 't', ` array may be used to indicate how symbolic links
 are handled. By default, symbolic links are resolved to their final
 target. If the option `],
					[/* reference */ 'r', `java.nio.file.LinkOption#NOFOLLOW_LINKS`, `NOFOLLOW_LINKS`],
					[/* text */ 't', ` is
 present then this method does not resolve symbolic links.

 Some implementations allow special names such as "`],
					[/* inline code block */ 'i', `..`],
					[/* text */ 't', `" to refer to
 the parent directory. When deriving the `],
					[/* text */ 't', `real path`],
					[/* text */ 't', `, and a
 "`],
					[/* inline code block */ 'i', `..`],
					[/* text */ 't', `" (or equivalent) is preceded by a non-"`],
					[/* inline code block */ 'i', `..`],
					[/* text */ 't', `" name then
 an implementation will typically cause both names to be removed. When
 not resolving symbolic links and the preceding name is a symbolic link
 then the names are only removed if it guaranteed that the resulting path
 will locate the same file as this path.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'options', [/* parameter description */
					[/* text */ 't', `options indicating how symbolic links are handled`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if the file does not exist or an I/O error occurs`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `In the case of the default provider, and a security manager
          is installed, its `],
					[/* reference */ 'r', `java.lang.SecurityManager#checkRead(java.lang.String)`, `checkRead`],
					[/* text */ 't', `
          method is invoked to check read access to the file, and where
          this path is not absolute, its `],
					[/* reference */ 'r', `java.lang.SecurityManager#checkPropertyAccess(java.lang.String)`, `checkPropertyAccess`],
					[/* text */ 't', ` method is invoked to check access to the
          system property `],
					[/* inline code block */ 'i', `user.dir`]
				]]
			],
			[/* return description */
				[/* text */ 't', `an absolute path represent the `],
				[/* text */ 't', `real`],
				[/* text */ 't', ` path of the file
          located by this object`]
			]
		]],
		[/* method */ 'register(java.nio.file.WatchService,java.nio.file.WatchEvent.Kind[],java.nio.file.WatchEvent.Modifier...)', [
			[/* method description */
				[/* text */ 't', `Registers the file located by this path with a watch service.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` In this release, this path locates a directory that exists. The
 directory is registered with the watch service so that entries in the
 directory can be watched. The `],
					[/* inline code block */ 'i', `events`],
					[/* text */ 't', ` parameter is the events to
 register and may contain the following events:
 `]
				]],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* reference */ 'r', `java.nio.file.StandardWatchEventKinds#ENTRY_CREATE`, `ENTRY_CREATE`],
						[/* text */ 't', ` -
       entry created or moved into the directory`]
					]],
					[/* block */ 'b', [
						[/* reference */ 'r', `java.nio.file.StandardWatchEventKinds#ENTRY_DELETE`, `ENTRY_DELETE`],
						[/* text */ 't', ` -
        entry deleted or moved out of the directory`]
					]],
					[/* block */ 'b', [
						[/* reference */ 'r', `java.nio.file.StandardWatchEventKinds#ENTRY_MODIFY`, `ENTRY_MODIFY`],
						[/* text */ 't', ` -
        entry in directory was modified`]
					]]
				]],
				[/* text */ 't', `

 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', ` The `],
					[/* reference */ 'r', `java.nio.file.WatchEvent#context()`, `context`],
					[/* text */ 't', ` for these events is the
 relative path between the directory located by this path, and the path
 that locates the directory entry that is created, deleted, or modified.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` The set of events may include additional implementation specific
 event that are not defined by the enum `],
					[/* reference */ 'r', `java.nio.file.StandardWatchEventKinds`, `StandardWatchEventKinds`],
					[/* text */ 't', `

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` The `],
					[/* inline code block */ 'i', `modifiers`],
					[/* text */ 't', ` parameter specifies `],
					[/* text */ 't', `modifiers`],
					[/* text */ 't', ` that
 qualify how the directory is registered. This release does not define any
 `],
					[/* text */ 't', `standard`],
					[/* text */ 't', ` modifiers. It may contain implementation specific
 modifiers.

 `]
				]],
				[/* block */ 'b', ` Where a file is registered with a watch service by means of a symbolic
 link then it is implementation specific if the watch continues to depend
 on the existence of the symbolic link after it is registered.`]
			],
			[/* parameters */
				[/* parameter */ 'watcher', [/* parameter description */
					[/* text */ 't', `the watch service to which this object is to be registered`]
				]],
				[/* parameter */ 'events', [/* parameter description */
					[/* text */ 't', `the events for which this object should be registered`]
				]],
				[/* parameter */ 'modifiers', [/* parameter description */
					[/* text */ 't', `the modifiers, if any, that modify how the object is registered`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if unsupported events or modifiers are specified`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if an invalid combination of events or modifiers is specified`]
				]],
				[/* throw */ 'java.nio.file.ClosedWatchServiceException', [/* throw description */
					[/* text */ 't', `if the watch service is closed`]
				]],
				[/* throw */ 'java.nio.file.NotDirectoryException', [/* throw description */
					[/* text */ 't', `if the file is registered to watch the entries in a directory
          and the file is not a directory  `],
					[/* text */ 't', `(optional specific exception)`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `In the case of the default provider, and a security manager is
          installed, the `],
					[/* reference */ 'r', `java.lang.SecurityManager#checkRead(java.lang.String)`, `checkRead`],
					[/* text */ 't', `
          method is invoked to check read access to the file.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a key representing the registration of this object with the
          given watch service`]
			]
		]],
		[/* method */ 'endsWith(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Tests if this path ends with a `],
				[/* inline code block */ 'i', `Path`],
				[/* text */ 't', `, constructed by converting
 the given path string, in exactly the manner specified by the `],
				[/* reference */ 'r', `#endsWith(java.nio.file.Path)`, `endsWith(Path)`],
				[/* text */ 't', ` method. On UNIX for example, the path
 "`],
				[/* inline code block */ 'i', `foo/bar`],
				[/* text */ 't', `" ends with "`],
				[/* inline code block */ 'i', `foo/bar`],
				[/* text */ 't', `" and "`],
				[/* inline code block */ 'i', `bar`],
				[/* text */ 't', `". It does
 not end with "`],
				[/* inline code block */ 'i', `r`],
				[/* text */ 't', `" or "`],
				[/* inline code block */ 'i', `/bar`],
				[/* text */ 't', `". Note that trailing separators
 are not taken into account, and so invoking this method on the `],
				[/* inline code block */ 'i', `Path`],
				[/* text */ 't', `"`],
				[/* inline code block */ 'i', `foo/bar`],
				[/* text */ 't', `" with the `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', ` "`],
				[/* inline code block */ 'i', `bar/`],
				[/* text */ 't', `" returns
 `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'other', [/* parameter description */
					[/* text */ 't', `the given path string`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.nio.file.InvalidPathException', [/* throw description */
					[/* text */ 't', `If the path string cannot be converted to a Path.`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this path ends with the given path; otherwise
          `],
				[/* inline code block */ 'i', `false`]
			]
		]],
		[/* method */ 'startsWith(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Tests if this path starts with a `],
				[/* inline code block */ 'i', `Path`],
				[/* text */ 't', `, constructed by converting
 the given path string, in exactly the manner specified by the `],
				[/* reference */ 'r', `#startsWith(java.nio.file.Path)`, `startsWith(Path)`],
				[/* text */ 't', ` method. On UNIX for example, the path
 "`],
				[/* inline code block */ 'i', `foo/bar`],
				[/* text */ 't', `" starts with "`],
				[/* inline code block */ 'i', `foo`],
				[/* text */ 't', `" and "`],
				[/* inline code block */ 'i', `foo/bar`],
				[/* text */ 't', `". It
 does not start with "`],
				[/* inline code block */ 'i', `f`],
				[/* text */ 't', `" or "`],
				[/* inline code block */ 'i', `fo`],
				[/* text */ 't', `".`]
			],
			[/* parameters */
				[/* parameter */ 'other', [/* parameter description */
					[/* text */ 't', `the given path string`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.nio.file.InvalidPathException', [/* throw description */
					[/* text */ 't', `If the path string cannot be converted to a Path.`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this path starts with the given path; otherwise
          `],
				[/* inline code block */ 'i', `false`]
			]
		]],
		[/* method */ 'toFile()', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* reference */ 'r', `java.io.File`, `File`],
				[/* text */ 't', ` object representing this path. Where this `],
				[/* inline code block */ 'i', `Path`],
				[/* text */ 't', ` is associated with the default provider, then this method is
 equivalent to returning a `],
				[/* inline code block */ 'i', `File`],
				[/* text */ 't', ` object constructed with the
 `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', ` representation of this path.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` If this path was created by invoking the `],
					[/* inline code block */ 'i', `File`],
					[/* text */ 't', ` `],
					[/* reference */ 'r', `java.io.File#toPath()`, `toPath`],
					[/* text */ 't', ` method then there is no guarantee that the `],
					[/* inline code block */ 'i', `File`],
					[/* text */ 't', ` object returned by this method is `],
					[/* reference */ 'r', `#equals(java.lang.Object)`, `equal`],
					[/* text */ 't', ` to the
 original `],
					[/* inline code block */ 'i', `File`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if this `],
					[/* inline code block */ 'i', `Path`],
					[/* text */ 't', ` is not associated with the default provider`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `File`],
				[/* text */ 't', ` object representing this path`]
			]
		]],
		[/* method */ 'resolve(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Converts a given path string to a `],
				[/* inline code block */ 'i', `Path`],
				[/* text */ 't', ` and resolves it against
 this `],
				[/* inline code block */ 'i', `Path`],
				[/* text */ 't', ` in exactly the manner specified by the `],
				[/* reference */ 'r', `#resolve(java.nio.file.Path)`, `resolve`],
				[/* text */ 't', ` method. For example, suppose that the name
 separator is "`],
				[/* inline code block */ 'i', `/`],
				[/* text */ 't', `" and a path represents "`],
				[/* inline code block */ 'i', `foo/bar`],
				[/* text */ 't', `", then
 invoking this method with the path string "`],
				[/* inline code block */ 'i', `gus`],
				[/* text */ 't', `" will result in
 the `],
				[/* inline code block */ 'i', `Path`],
				[/* text */ 't', ` "`],
				[/* inline code block */ 'i', `foo/bar/gus`],
				[/* text */ 't', `".`]
			],
			[/* parameters */
				[/* parameter */ 'other', [/* parameter description */
					[/* text */ 't', `the path string to resolve against this path`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.nio.file.InvalidPathException', [/* throw description */
					[/* text */ 't', `if the path string cannot be converted to a Path.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the resulting path`]
			]
		]],
		[/* method */ 'resolveSibling(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Converts a given path string to a `],
				[/* inline code block */ 'i', `Path`],
				[/* text */ 't', ` and resolves it against
 this path's `],
				[/* reference */ 'r', `#getParent()`, `parent`],
				[/* text */ 't', ` path in exactly the manner
 specified by the `],
				[/* reference */ 'r', `#resolveSibling(java.nio.file.Path)`, `resolveSibling`],
				[/* text */ 't', ` method.`]
			],
			[/* parameters */
				[/* parameter */ 'other', [/* parameter description */
					[/* text */ 't', `the path string to resolve against this path's parent`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.nio.file.InvalidPathException', [/* throw description */
					[/* text */ 't', `if the path string cannot be converted to a Path.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the resulting path`]
			]
		]],
		[/* method */ 'resolveSibling(java.nio.file.Path)', [
			[/* method description */
				[/* text */ 't', `Resolves the given path against this path's `],
				[/* reference */ 'r', `#getParent()`, `parent`],
				[/* text */ 't', `
 path. This is useful where a file name needs to be `],
				[/* text */ 't', `replaced`],
				[/* text */ 't', ` with
 another file name. For example, suppose that the name separator is
 "`],
				[/* inline code block */ 'i', `/`],
				[/* text */ 't', `" and a path represents "`],
				[/* inline code block */ 'i', `dir1/dir2/foo`],
				[/* text */ 't', `", then invoking
 this method with the `],
				[/* inline code block */ 'i', `Path`],
				[/* text */ 't', ` "`],
				[/* inline code block */ 'i', `bar`],
				[/* text */ 't', `" will result in the `],
				[/* inline code block */ 'i', `Path`],
				[/* text */ 't', ` "`],
				[/* inline code block */ 'i', `dir1/dir2/bar`],
				[/* text */ 't', `". If this path does not have a parent path,
 or `],
				[/* inline code block */ 'i', `other`],
				[/* text */ 't', ` is `],
				[/* reference */ 'r', `#isAbsolute()`, `absolute`],
				[/* text */ 't', `, then this method
 returns `],
				[/* inline code block */ 'i', `other`],
				[/* text */ 't', `. If `],
				[/* inline code block */ 'i', `other`],
				[/* text */ 't', ` is an empty path then this method
 returns this path's parent, or where this path doesn't have a parent, the
 empty path.`]
			],
			[/* parameters */
				[/* parameter */ 'other', [/* parameter description */
					[/* text */ 't', `the path to resolve against this path's parent`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `the resulting path`]
			]
		]],
		[/* method */ 'register(java.nio.file.WatchService,java.nio.file.WatchEvent.Kind...)', [
			[/* method description */
				[/* text */ 't', `Registers the file located by this path with a watch service.

 `],
				[/* block */ 'b', ` An invocation of this method behaves in exactly the same way as the
 invocation
 `],
				[/* code block */ 'c', [
					[/* text */ 't', `     watchable.`],
					[/* text */ 't', `register`],
					[/* text */ 't', `(watcher, events, new WatchEvent.Modifier[0]);
 `]
				]],
				[/* text */ 't', `

 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', `Usage Example:`],
				[/* code block */ 'c', `     Path dir = ...
     WatchService watcher = ...

     WatchKey key = dir.register(watcher, ENTRY_CREATE, ENTRY_DELETE, ENTRY_MODIFY);
 `],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'watcher', [/* parameter description */
					[/* text */ 't', `The watch service to which this object is to be registered`]
				]],
				[/* parameter */ 'events', [/* parameter description */
					[/* text */ 't', `The events for which this object should be registered`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `If unsupported events are specified`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If an invalid combination of events is specified`]
				]],
				[/* throw */ 'java.nio.file.ClosedWatchServiceException', [/* throw description */
					[/* text */ 't', `If the watch service is closed`]
				]],
				[/* throw */ 'java.nio.file.NotDirectoryException', [/* throw description */
					[/* text */ 't', `If the file is registered to watch the entries in a directory
          and the file is not a directory  `],
					[/* text */ 't', `(optional specific exception)`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If an I/O error occurs`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `In the case of the default provider, and a security manager is
          installed, the `],
					[/* reference */ 'r', `java.lang.SecurityManager#checkRead(java.lang.String)`, `checkRead`],
					[/* text */ 't', `
          method is invoked to check read access to the file.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `A key representing the registration of this object with the
          given watch service`]
			]
		]],
		[/* method */ 'iterator()', [
			[/* method description */
				[/* text */ 't', `Returns an iterator over the name elements of this path.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The first element returned by the iterator represents the name
 element that is closest to the root in the directory hierarchy, the
 second element is the next closest, and so on. The last element returned
 is the name of the file or directory denoted by this path. The `],
					[/* reference */ 'r', `#getRoot()`, `root`],
					[/* text */ 't', ` component, if present, is not returned by the iterator.`]
				]]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `an iterator over the name elements of this path.`]
			]
		]],
		[/* method */ 'of(java.lang.String,java.lang.String...)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `Path`],
				[/* text */ 't', ` by converting a path string, or a sequence of
 strings that when joined form a path string. If `],
				[/* inline code block */ 'i', `more`],
				[/* text */ 't', ` does not
 specify any elements then the value of the `],
				[/* inline code block */ 'i', `first`],
				[/* text */ 't', ` parameter is
 the path string to convert. If `],
				[/* inline code block */ 'i', `more`],
				[/* text */ 't', ` specifies one or more
 elements then each non-empty string, including `],
				[/* inline code block */ 'i', `first`],
				[/* text */ 't', `, is
 considered to be a sequence of name elements and is joined to form a
 path string. The details as to how the Strings are joined is provider
 specific but typically they will be joined using the
 `],
				[/* reference */ 'r', `java.nio.file.FileSystem#getSeparator()`, `name-separator`],
				[/* text */ 't', ` as the separator.
 For example, if the name separator is "`],
				[/* inline code block */ 'i', `/`],
				[/* text */ 't', `" and
 `],
				[/* inline code block */ 'i', `getPath("/foo","bar","gus")`],
				[/* text */ 't', ` is invoked, then the path string
 `],
				[/* inline code block */ 'i', `"/foo/bar/gus"`],
				[/* text */ 't', ` is converted to a `],
				[/* inline code block */ 'i', `Path`],
				[/* text */ 't', `. A `],
				[/* inline code block */ 'i', `Path`],
				[/* text */ 't', `
 representing an empty path is returned if `],
				[/* inline code block */ 'i', `first`],
				[/* text */ 't', ` is the empty
 string and `],
				[/* inline code block */ 'i', `more`],
				[/* text */ 't', ` does not contain any non-empty strings.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The `],
					[/* inline code block */ 'i', `Path`],
					[/* text */ 't', ` is obtained by invoking the `],
					[/* reference */ 'r', `java.nio.file.FileSystem#getPath(java.lang.String,java.lang.String...)`, `getPath`],
					[/* text */ 't', ` method of the `],
					[/* reference */ 'r', `java.nio.file.FileSystems#getDefault()`, `default`],
					[/* text */ 't', ` `],
					[/* reference */ 'r', `java.nio.file.FileSystem`, `FileSystem`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` Note that while this method is very convenient, using it will imply
 an assumed reference to the default `],
					[/* inline code block */ 'i', `FileSystem`],
					[/* text */ 't', ` and limit the
 utility of the calling code. Hence it should not be used in library code
 intended for flexible reuse. A more flexible alternative is to use an
 existing `],
					[/* inline code block */ 'i', `Path`],
					[/* text */ 't', ` instance as an anchor, such as:
 `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `Path dir = ...
     Path path = dir.resolve("file");`]
				]],
				[/* block */ 'b', '']
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
					[/* text */ 't', `if the path string cannot be converted to a `],
					[/* inline code block */ 'i', `Path`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the resulting `],
				[/* inline code block */ 'i', `Path`]
			]
		]],
		[/* method */ 'of(java.net.URI)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `Path`],
				[/* text */ 't', ` by converting a URI.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method iterates over the `],
					[/* reference */ 'r', `java.nio.file.spi.FileSystemProvider#installedProviders()`, `installed`],
					[/* text */ 't', ` providers to locate the provider that is identified by the
 URI `],
					[/* reference */ 'r', `java.net.URI#getScheme()`, `scheme`],
					[/* text */ 't', ` of the given URI. URI schemes are
 compared without regard to case. If the provider is found then its `],
					[/* reference */ 'r', `java.nio.file.spi.FileSystemProvider#getPath(java.net.URI)`, `getPath`],
					[/* text */ 't', ` method is invoked to convert the
 URI.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` In the case of the default provider, identified by the URI scheme
 "file", the given URI has a non-empty path component, and undefined query
 and fragment components. Whether the authority component may be present
 is platform specific. The returned `],
					[/* inline code block */ 'i', `Path`],
					[/* text */ 't', ` is associated with the
 `],
					[/* reference */ 'r', `java.nio.file.FileSystems#getDefault()`, `default`],
					[/* text */ 't', ` file system.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` The default provider provides a similar `],
					[/* text */ 't', `round-trip`],
					[/* text */ 't', ` guarantee
 to the `],
					[/* reference */ 'r', `java.io.File`, `File`],
					[/* text */ 't', ` class. For a given `],
					[/* inline code block */ 'i', `Path`],
					[/* text */ 't', ` `],
					[/* text */ 't', `p`],
					[/* text */ 't', ` it
 is guaranteed that
 `]
				]],
				[/* blockquote */ 'q', [
					[/* inline code block */ 'i', `Path.of(`],
					[/* text */ 't', `p`],
					[/* inline code block */ 'i', `.`],
					[/* reference */ 'r', `#toUri()`, `toUri`],
					[/* inline code block */ 'i', `()).equals(`],
					[/* text */ 't', `
 `],
					[/* text */ 't', `p`],
					[/* inline code block */ 'i', `.`],
					[/* reference */ 'r', `#toAbsolutePath()`, `toAbsolutePath`],
					[/* inline code block */ 'i', `())`],
					[/* text */ 't', `
 `]
				]],
				[/* text */ 't', `
 so long as the original `],
				[/* inline code block */ 'i', `Path`],
				[/* text */ 't', `, the `],
				[/* inline code block */ 'i', `URI`],
				[/* text */ 't', `, and the new `],
				[/* inline code block */ 'i', `Path`],
				[/* text */ 't', ` are all created in (possibly different invocations of) the same
 Java virtual machine. Whether other providers make any guarantees is
 provider specific and therefore unspecified.`],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'uri', [/* parameter description */
					[/* text */ 't', `the URI to convert`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if preconditions on the `],
					[/* inline code block */ 'i', `uri`],
					[/* text */ 't', ` parameter do not hold. The
          format of the URI is provider specific.`]
				]],
				[/* throw */ 'java.nio.file.FileSystemNotFoundException', [/* throw description */
					[/* text */ 't', `The file system, identified by the URI, does not exist and
          cannot be created automatically, or the provider identified by
          the URI's scheme component is not installed`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if a security manager is installed and it denies an unspecified
          permission to access the file system`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the resulting `],
				[/* inline code block */ 'i', `Path`]
			]
		]]
	],
	/* enum values */ UDF
]);
