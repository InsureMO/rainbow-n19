import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.io.File', [
	[/* class description */
		[/* text */ 't', `An abstract representation of file and directory pathnames.

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` User interfaces and operating systems use system-dependent `],
			[/* text */ 't', `pathname
 strings`],
			[/* text */ 't', ` to name files and directories.  This class presents an
 abstract, system-independent view of hierarchical pathnames.  An
 `],
			[/* text */ 't', `abstract pathname`],
			[/* text */ 't', ` has two components:

 `]
		]],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* text */ 't', ` An optional system-dependent `],
				[/* text */ 't', `prefix`],
				[/* text */ 't', ` string,
      such as a disk-drive specifier, `],
				[/* inline code block */ 'i', `"/"`],
				[/* text */ 't', ` for the UNIX root
      directory, or `],
				[/* inline code block */ 'i', `"\\\\\\\\"`],
				[/* text */ 't', ` for a Microsoft Windows UNC pathname, and
 `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', ` A sequence of zero or more string `],
				[/* text */ 't', `names`],
				[/* text */ 't', `.
 `]
			]]
		]],
		[/* text */ 't', `

 The first name in an abstract pathname may be a directory name or, in the
 case of Microsoft Windows UNC pathnames, a hostname.  Each subsequent name
 in an abstract pathname denotes a directory; the last name may denote
 either a directory or a file.  The `],
		[/* text */ 't', `empty`],
		[/* text */ 't', ` abstract pathname has no
 prefix and an empty name sequence.

 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', ` The conversion of a pathname string to or from an abstract pathname is
 inherently system-dependent.  When an abstract pathname is converted into a
 pathname string, each name is separated from the next by a single copy of
 the default `],
			[/* text */ 't', `separator character`],
			[/* text */ 't', `.  The default name-separator
 character is defined by the system property `],
			[/* inline code block */ 'i', `file.separator`],
			[/* text */ 't', `, and
 is made available in the public static fields `],
			[/* text */ 't', `separator`],
			[/* text */ 't', ` and `],
			[/* text */ 't', `separatorChar`],
			[/* text */ 't', ` of this class.
 When a pathname string is converted into an abstract pathname, the names
 within it may be separated by the default name-separator character or by any
 other name-separator character that is supported by the underlying system.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` A pathname, whether abstract or in string form, may be either
 `],
			[/* text */ 't', `absolute`],
			[/* text */ 't', ` or `],
			[/* text */ 't', `relative`],
			[/* text */ 't', `.  An absolute pathname is complete in
 that no other information is required in order to locate the file that it
 denotes.  A relative pathname, in contrast, must be interpreted in terms of
 information taken from some other pathname.  By default the classes in the
 `],
			[/* inline code block */ 'i', `java.io`],
			[/* text */ 't', ` package always resolve relative pathnames against the
 current user directory.  This directory is named by the system property
 `],
			[/* inline code block */ 'i', `user.dir`],
			[/* text */ 't', `, and is typically the directory in which the Java
 virtual machine was invoked.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` The `],
			[/* text */ 't', `parent`],
			[/* text */ 't', ` of an abstract pathname may be obtained by invoking
 the `],
			[/* reference */ 'r', `#getParent()`, `getParent()`],
			[/* text */ 't', ` method of this class and consists of the pathname's
 prefix and each name in the pathname's name sequence except for the last.
 Each directory's absolute pathname is an ancestor of any `],
			[/* inline code block */ 'i', `File`],
			[/* text */ 't', `
 object with an absolute abstract pathname which begins with the directory's
 absolute pathname.  For example, the directory denoted by the abstract
 pathname `],
			[/* inline code block */ 'i', `"/usr"`],
			[/* text */ 't', ` is an ancestor of the directory denoted by the
 pathname `],
			[/* inline code block */ 'i', `"/usr/local/bin"`],
			[/* text */ 't', `.

 `]
		]],
		[/* block */ 'b', ` The prefix concept is used to handle root directories on UNIX platforms,
 and drive specifiers, root directories and UNC pathnames on Microsoft Windows platforms,
 as follows:

 `],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* text */ 't', ` For UNIX platforms, the prefix of an absolute pathname is always
 `],
				[/* inline code block */ 'i', `"/"`],
				[/* text */ 't', `.  Relative pathnames have no prefix.  The abstract pathname
 denoting the root directory has the prefix `],
				[/* inline code block */ 'i', `"/"`],
				[/* text */ 't', ` and an empty
 name sequence.

 `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', ` For Microsoft Windows platforms, the prefix of a pathname that contains a drive
 specifier consists of the drive letter followed by `],
				[/* inline code block */ 'i', `":"`],
				[/* text */ 't', ` and
 possibly followed by `],
				[/* inline code block */ 'i', `"\\\\"`],
				[/* text */ 't', ` if the pathname is absolute.  The
 prefix of a UNC pathname is `],
				[/* inline code block */ 'i', `"\\\\\\\\"`],
				[/* text */ 't', `; the hostname and the share
 name are the first two names in the name sequence.  A relative pathname that
 does not specify a drive has no prefix.

 `]
			]]
		]],
		[/* text */ 't', `

 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', ` Instances of this class may or may not denote an actual file-system
 object such as a file or a directory.  If it does denote such an object
 then that object resides in a `],
			[/* text */ 't', `partition`],
			[/* text */ 't', `.  A partition is an
 operating system-specific portion of storage for a file system.  A single
 storage device (e.g. a physical disk-drive, flash memory, CD-ROM) may
 contain multiple partitions.  The object, if any, will reside on the
 partition `],
			[/* anchor */ 'r', '#-id', `partName`, `named`],
			[/* text */ 't', ` by some ancestor of the absolute
 form of this pathname.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` A file system may implement restrictions to certain operations on the
 actual file-system object, such as reading, writing, and executing.  These
 restrictions are collectively known as `],
			[/* text */ 't', `access permissions`],
			[/* text */ 't', `.  The file
 system may have multiple sets of access permissions on a single object.
 For example, one set may apply to the object's `],
			[/* text */ 't', `owner`],
			[/* text */ 't', `, and another
 may apply to all other users.  The access permissions on an object may
 cause some methods in this class to fail.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` Instances of the `],
			[/* inline code block */ 'i', `File`],
			[/* text */ 't', ` class are immutable; that is, once
 created, the abstract pathname represented by a `],
			[/* inline code block */ 'i', `File`],
			[/* text */ 't', ` object
 will never change.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Interoperability with `],
			[/* inline code block */ 'i', `java.nio.file`],
			[/* text */ 't', ` package`]
		]],
		[/* text */ 't', `

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` The `],
			[/* text */ 't', `java.nio.file`],
			[/* text */ 't', `
 package defines interfaces and classes for the Java virtual machine to access
 files, file attributes, and file systems. This API may be used to overcome
 many of the limitations of the `],
			[/* inline code block */ 'i', `java.io.File`],
			[/* text */ 't', ` class.
 The `],
			[/* reference */ 'r', `#toPath()`, `toPath`],
			[/* text */ 't', ` method may be used to obtain a `],
			[/* reference */ 'r', `java.nio.file.Path`, `Path`],
			[/* text */ 't', ` that uses the abstract path represented by a `],
			[/* inline code block */ 'i', `File`],
			[/* text */ 't', ` object to
 locate a file. The resulting `],
			[/* inline code block */ 'i', `Path`],
			[/* text */ 't', ` may be used with the `],
			[/* reference */ 'r', `java.nio.file.Files`, `Files`],
			[/* text */ 't', ` class to provide more efficient and extensive access to
 additional file operations, file attributes, and I/O exceptions to help
 diagnose errors when an operation on a file fails.`]
		]]
	],
	[/* fields */
		[/* field */ 'pathSeparator', [
			[/* field description */
				[/* text */ 't', `The system-dependent path-separator character, represented as a string
 for convenience.  This string contains a single character, namely
 `],
				[/* text */ 't', `pathSeparatorChar`],
				[/* text */ 't', `.`]
			],
		]],
		[/* field */ 'pathSeparatorChar', [
			[/* field description */
				[/* text */ 't', `The system-dependent path-separator character.  This field is
 initialized to contain the first character of the value of the system
 property `],
				[/* inline code block */ 'i', `path.separator`],
				[/* text */ 't', `.  This character is used to
 separate filenames in a sequence of files given as a `],
				[/* text */ 't', `path list`],
				[/* text */ 't', `.
 On UNIX systems, this character is `],
				[/* inline code block */ 'i', `':'`],
				[/* text */ 't', `; on Microsoft Windows systems it
 is `],
				[/* inline code block */ 'i', `';'`],
				[/* text */ 't', `.`]
			],
		]],
		[/* field */ 'separator', [
			[/* field description */
				[/* text */ 't', `The system-dependent default name-separator character, represented as a
 string for convenience.  This string contains a single character, namely
 `],
				[/* text */ 't', `separatorChar`],
				[/* text */ 't', `.`]
			],
		]],
		[/* field */ 'separatorChar', [
			[/* field description */
				[/* text */ 't', `The system-dependent default name-separator character.  This field is
 initialized to contain the first character of the value of the system
 property `],
				[/* inline code block */ 'i', `file.separator`],
				[/* text */ 't', `.  On UNIX systems the value of this
 field is `],
				[/* inline code block */ 'i', `'/'`],
				[/* text */ 't', `; on Microsoft Windows systems it is `],
				[/* inline code block */ 'i', `'\\\\'`],
				[/* text */ 't', `.`]
			],
		]]
	],
	[/* constructors */
		[/* constructor */ '<init>(java.io.File,java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Creates a new `],
				[/* inline code block */ 'i', `File`],
				[/* text */ 't', ` instance from a parent abstract
 pathname and a child pathname string.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` If `],
					[/* inline code block */ 'i', `parent`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` then the new
 `],
					[/* inline code block */ 'i', `File`],
					[/* text */ 't', ` instance is created as if by invoking the
 single-argument `],
					[/* inline code block */ 'i', `File`],
					[/* text */ 't', ` constructor on the given
 `],
					[/* inline code block */ 'i', `child`],
					[/* text */ 't', ` pathname string.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` Otherwise the `],
					[/* inline code block */ 'i', `parent`],
					[/* text */ 't', ` abstract pathname is taken to
 denote a directory, and the `],
					[/* inline code block */ 'i', `child`],
					[/* text */ 't', ` pathname string is taken
 to denote either a directory or a file.  If the `],
					[/* inline code block */ 'i', `child`],
					[/* text */ 't', `
 pathname string is absolute then it is converted into a relative
 pathname in a system-dependent way.  If `],
					[/* inline code block */ 'i', `parent`],
					[/* text */ 't', ` is the empty
 abstract pathname then the new `],
					[/* inline code block */ 'i', `File`],
					[/* text */ 't', ` instance is created by
 converting `],
					[/* inline code block */ 'i', `child`],
					[/* text */ 't', ` into an abstract pathname and resolving
 the result against a system-dependent default directory.  Otherwise each
 pathname string is converted into an abstract pathname and the child
 abstract pathname is resolved against the parent.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'parent', [/* parameter description */
					[/* text */ 't', `The parent abstract pathname`]
				]],
				[/* parameter */ 'child', [/* parameter description */
					[/* text */ 't', `The child pathname string`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `child`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Creates a new `],
				[/* inline code block */ 'i', `File`],
				[/* text */ 't', ` instance by converting the given
 pathname string into an abstract pathname.  If the given string is
 the empty string, then the result is the empty abstract pathname.`]
			],
			[/* parameters */
				[/* parameter */ 'pathname', [/* parameter description */
					[/* text */ 't', `A pathname string`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `If the `],
					[/* inline code block */ 'i', `pathname`],
					[/* text */ 't', ` argument is `],
					[/* inline code block */ 'i', `null`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.lang.String,java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Creates a new `],
				[/* inline code block */ 'i', `File`],
				[/* text */ 't', ` instance from a parent pathname string
 and a child pathname string.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` If `],
					[/* inline code block */ 'i', `parent`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` then the new
 `],
					[/* inline code block */ 'i', `File`],
					[/* text */ 't', ` instance is created as if by invoking the
 single-argument `],
					[/* inline code block */ 'i', `File`],
					[/* text */ 't', ` constructor on the given
 `],
					[/* inline code block */ 'i', `child`],
					[/* text */ 't', ` pathname string.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` Otherwise the `],
					[/* inline code block */ 'i', `parent`],
					[/* text */ 't', ` pathname string is taken to denote
 a directory, and the `],
					[/* inline code block */ 'i', `child`],
					[/* text */ 't', ` pathname string is taken to
 denote either a directory or a file.  If the `],
					[/* inline code block */ 'i', `child`],
					[/* text */ 't', ` pathname
 string is absolute then it is converted into a relative pathname in a
 system-dependent way.  If `],
					[/* inline code block */ 'i', `parent`],
					[/* text */ 't', ` is the empty string then
 the new `],
					[/* inline code block */ 'i', `File`],
					[/* text */ 't', ` instance is created by converting
 `],
					[/* inline code block */ 'i', `child`],
					[/* text */ 't', ` into an abstract pathname and resolving the result
 against a system-dependent default directory.  Otherwise each pathname
 string is converted into an abstract pathname and the child abstract
 pathname is resolved against the parent.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'parent', [/* parameter description */
					[/* text */ 't', `The parent pathname string`]
				]],
				[/* parameter */ 'child', [/* parameter description */
					[/* text */ 't', `The child pathname string`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `child`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.net.URI)', [
			[/* constructor description */
				[/* text */ 't', `Creates a new `],
				[/* inline code block */ 'i', `File`],
				[/* text */ 't', ` instance by converting the given
 `],
				[/* inline code block */ 'i', `file:`],
				[/* text */ 't', ` URI into an abstract pathname.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The exact form of a `],
					[/* inline code block */ 'i', `file:`],
					[/* text */ 't', ` URI is system-dependent, hence
 the transformation performed by this constructor is also
 system-dependent.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` For a given abstract pathname `],
					[/* text */ 't', `f`],
					[/* text */ 't', ` it is guaranteed that

 `]
				]],
				[/* blockquote */ 'q', [
					[/* inline code block */ 'i', `new File(`],
					[/* text */ 't', ` f`],
					[/* inline code block */ 'i', `.toURI()).equals(`],
					[/* text */ 't', ` f`],
					[/* inline code block */ 'i', `.getAbsoluteFile())`]
				]],
				[/* text */ 't', `

 so long as the original abstract pathname, the URI, and the new abstract
 pathname are all created in (possibly different invocations of) the same
 Java virtual machine.  This relationship typically does not hold,
 however, when a `],
				[/* inline code block */ 'i', `file:`],
				[/* text */ 't', ` URI that is created in a virtual machine
 on one operating system is converted into an abstract pathname in a
 virtual machine on a different operating system.`],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'uri', [/* parameter description */
					[/* text */ 't', `An absolute, hierarchical URI with a scheme equal to
         `],
					[/* inline code block */ 'i', `"file"`],
					[/* text */ 't', `, a non-empty path component, and undefined
         authority, query, and fragment components`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `uri`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If the preconditions on the parameter do not hold`]
				]]
			]
		]]
	],
	[/* methods */
		[/* method */ 'canExecute()', [
			[/* method description */
				[/* text */ 't', `Tests whether the application can execute the file denoted by this
 abstract pathname. On some platforms it may be possible to start the
 Java virtual machine with special privileges that allow it to execute
 files that are not marked executable. Consequently this method may return
 `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` even though the file does not have execute permissions.`]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If a security manager exists and its `],
					[/* reference */ 'r', `java.lang.SecurityManager#checkExec(java.lang.String)`, `SecurityManager.checkExec(java.lang.String)`],
					[/* text */ 't', `
          method denies execute access to the file`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if and only if the abstract pathname exists
          `],
				[/* text */ 't', `and`],
				[/* text */ 't', ` the application is allowed to execute the file`]
			]
		]],
		[/* method */ 'canRead()', [
			[/* method description */
				[/* text */ 't', `Tests whether the application can read the file denoted by this
 abstract pathname. On some platforms it may be possible to start the
 Java virtual machine with special privileges that allow it to read
 files that are marked as unreadable. Consequently this method may return
 `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` even though the file does not have read permissions.`]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If a security manager exists and its `],
					[/* reference */ 'r', `java.lang.SecurityManager#checkRead(java.lang.String)`, `SecurityManager.checkRead(java.lang.String)`],
					[/* text */ 't', `
          method denies read access to the file`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if and only if the file specified by this
          abstract pathname exists `],
				[/* text */ 't', `and`],
				[/* text */ 't', ` can be read by the
          application; `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise`]
			]
		]],
		[/* method */ 'canWrite()', [
			[/* method description */
				[/* text */ 't', `Tests whether the application can modify the file denoted by this
 abstract pathname. On some platforms it may be possible to start the
 Java virtual machine with special privileges that allow it to modify
 files that are marked read-only. Consequently this method may return
 `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` even though the file is marked read-only.`]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If a security manager exists and its `],
					[/* reference */ 'r', `java.lang.SecurityManager#checkWrite(java.lang.String)`, `SecurityManager.checkWrite(java.lang.String)`],
					[/* text */ 't', `
          method denies write access to the file`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if and only if the file system actually
          contains a file denoted by this abstract pathname `],
				[/* text */ 't', `and`],
				[/* text */ 't', `
          the application is allowed to write to the file;
          `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'createNewFile()', [
			[/* method description */
				[/* text */ 't', `Atomically creates a new, empty file named by this abstract pathname if
 and only if a file with this name does not yet exist.  The check for the
 existence of the file and the creation of the file if it does not exist
 are a single operation that is atomic with respect to all other
 filesystem activities that might affect the file.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 Note: this method should `],
					[/* text */ 't', `not`],
					[/* text */ 't', ` be used for file-locking, as
 the resulting protocol cannot be made to work reliably. The
 `],
					[/* reference */ 'r', `java.nio.channels.FileLock`, `FileLock`],
					[/* text */ 't', `
 facility should be used instead.`]
				]]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If an I/O error occurred`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If a security manager exists and its `],
					[/* reference */ 'r', `java.lang.SecurityManager#checkWrite(java.lang.String)`, `SecurityManager.checkWrite(java.lang.String)`],
					[/* text */ 't', `
          method denies write access to the file`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the named file does not exist and was
          successfully created; `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` if the named file
          already exists`]
			]
		]],
		[/* method */ 'delete()', [
			[/* method description */
				[/* text */ 't', `Deletes the file or directory denoted by this abstract pathname.  If
 this pathname denotes a directory, then the directory must be empty in
 order to be deleted.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` Note that the `],
					[/* reference */ 'r', `java.nio.file.Files`, `Files`],
					[/* text */ 't', ` class defines the `],
					[/* reference */ 'r', `java.nio.file.Files#delete(java.nio.file.Path)`, `delete`],
					[/* text */ 't', ` method to throw an `],
					[/* reference */ 'r', `java.io.IOException`, `IOException`],
					[/* text */ 't', `
 when a file cannot be deleted. This is useful for error reporting and to
 diagnose why a file cannot be deleted.`]
				]]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If a security manager exists and its `],
					[/* reference */ 'r', `java.lang.SecurityManager#checkDelete(java.lang.String)`, `SecurityManager.checkDelete(java.lang.String)`],
					[/* text */ 't', ` method denies
          delete access to the file`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if and only if the file or directory is
          successfully deleted; `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise`]
			]
		]],
		[/* method */ 'equals(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Tests this abstract pathname for equality with the given object.
 Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if and only if the argument is not
 `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` and is an abstract pathname that is the same as this
 abstract pathname.  Whether or not two abstract
 pathnames are equal depends upon the underlying operating system.
 On UNIX systems, alphabetic case is significant in comparing pathnames;
 on Microsoft Windows systems it is not.`]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `The object to be compared with this abstract pathname`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if and only if the objects are the same;
          `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise`]
			]
		]],
		[/* method */ 'exists()', [
			[/* method description */
				[/* text */ 't', `Tests whether the file or directory denoted by this abstract pathname
 exists.`]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If a security manager exists and its `],
					[/* reference */ 'r', `java.lang.SecurityManager#checkRead(java.lang.String)`, `SecurityManager.checkRead(java.lang.String)`],
					[/* text */ 't', `
          method denies read access to the file or directory`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if and only if the file or directory denoted
          by this abstract pathname exists; `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise`]
			]
		]],
		[/* method */ 'isAbsolute()', [
			[/* method description */
				[/* text */ 't', `Tests whether this abstract pathname is absolute.  The definition of
 absolute pathname is system dependent.  On UNIX systems, a pathname is
 absolute if its prefix is `],
				[/* inline code block */ 'i', `"/"`],
				[/* text */ 't', `.  On Microsoft Windows systems, a
 pathname is absolute if its prefix is a drive specifier followed by
 `],
				[/* inline code block */ 'i', `"\\\\"`],
				[/* text */ 't', `, or if its prefix is `],
				[/* inline code block */ 'i', `"\\\\\\\\"`],
				[/* text */ 't', `.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this abstract pathname is absolute,
          `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise`]
			]
		]],
		[/* method */ 'isDirectory()', [
			[/* method description */
				[/* text */ 't', `Tests whether the file denoted by this abstract pathname is a
 directory.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` Where it is required to distinguish an I/O exception from the case
 that the file is not a directory, or where several attributes of the
 same file are required at the same time, then the `],
					[/* reference */ 'r', `java.nio.file.Files#readAttributes(java.nio.file.Path,java.lang.Class,java.nio.file.LinkOption...)`, `Files.readAttributes`],
					[/* text */ 't', ` method may be used.`]
				]]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If a security manager exists and its `],
					[/* reference */ 'r', `java.lang.SecurityManager#checkRead(java.lang.String)`, `SecurityManager.checkRead(java.lang.String)`],
					[/* text */ 't', `
          method denies read access to the file`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if and only if the file denoted by this
          abstract pathname exists `],
				[/* text */ 't', `and`],
				[/* text */ 't', ` is a directory;
          `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise`]
			]
		]],
		[/* method */ 'isFile()', [
			[/* method description */
				[/* text */ 't', `Tests whether the file denoted by this abstract pathname is a normal
 file.  A file is `],
				[/* text */ 't', `normal`],
				[/* text */ 't', ` if it is not a directory and, in
 addition, satisfies other system-dependent criteria.  Any non-directory
 file created by a Java application is guaranteed to be a normal file.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` Where it is required to distinguish an I/O exception from the case
 that the file is not a normal file, or where several attributes of the
 same file are required at the same time, then the `],
					[/* reference */ 'r', `java.nio.file.Files#readAttributes(java.nio.file.Path,java.lang.Class,java.nio.file.LinkOption...)`, `Files.readAttributes`],
					[/* text */ 't', ` method may be used.`]
				]]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If a security manager exists and its `],
					[/* reference */ 'r', `java.lang.SecurityManager#checkRead(java.lang.String)`, `SecurityManager.checkRead(java.lang.String)`],
					[/* text */ 't', `
          method denies read access to the file`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if and only if the file denoted by this
          abstract pathname exists `],
				[/* text */ 't', `and`],
				[/* text */ 't', ` is a normal file;
          `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise`]
			]
		]],
		[/* method */ 'isHidden()', [
			[/* method description */
				[/* text */ 't', `Tests whether the file named by this abstract pathname is a hidden
 file.  The exact definition of `],
				[/* text */ 't', `hidden`],
				[/* text */ 't', ` is system-dependent.  On
 UNIX systems, a file is considered to be hidden if its name begins with
 a period character (`],
				[/* inline code block */ 'i', `'.'`],
				[/* text */ 't', `).  On Microsoft Windows systems, a file is
 considered to be hidden if it has been marked as such in the filesystem.`]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If a security manager exists and its `],
					[/* reference */ 'r', `java.lang.SecurityManager#checkRead(java.lang.String)`, `SecurityManager.checkRead(java.lang.String)`],
					[/* text */ 't', `
          method denies read access to the file`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if and only if the file denoted by this
          abstract pathname is hidden according to the conventions of the
          underlying platform`]
			]
		]],
		[/* method */ 'mkdir()', [
			[/* method description */
				[/* text */ 't', `Creates the directory named by this abstract pathname.`]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If a security manager exists and its `],
					[/* reference */ 'r', `java.lang.SecurityManager#checkWrite(java.lang.String)`, `SecurityManager.checkWrite(java.lang.String)`],
					[/* text */ 't', `
          method does not permit the named directory to be created`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if and only if the directory was
          created; `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise`]
			]
		]],
		[/* method */ 'mkdirs()', [
			[/* method description */
				[/* text */ 't', `Creates the directory named by this abstract pathname, including any
 necessary but nonexistent parent directories.  Note that if this
 operation fails it may have succeeded in creating some of the necessary
 parent directories.`]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If a security manager exists and its `],
					[/* reference */ 'r', `java.lang.SecurityManager#checkRead(java.lang.String)`, `SecurityManager.checkRead(java.lang.String)`],
					[/* text */ 't', `
          method does not permit verification of the existence of the
          named directory and all necessary parent directories; or if
          the `],
					[/* reference */ 'r', `java.lang.SecurityManager#checkWrite(java.lang.String)`, `SecurityManager.checkWrite(java.lang.String)`],
					[/* text */ 't', `
          method does not permit the named directory and all necessary
          parent directories to be created`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if and only if the directory was created,
          along with all necessary parent directories; `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', `
          otherwise`]
			]
		]],
		[/* method */ 'renameTo(java.io.File)', [
			[/* method description */
				[/* text */ 't', `Renames the file denoted by this abstract pathname.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` Many aspects of the behavior of this method are inherently
 platform-dependent: The rename operation might not be able to move a
 file from one filesystem to another, it might not be atomic, and it
 might not succeed if a file with the destination abstract pathname
 already exists.  The return value should always be checked to make sure
 that the rename operation was successful.  As instances of `],
					[/* inline code block */ 'i', `File`],
					[/* text */ 't', `
 are immutable, this File object is not changed to name the destination
 file or directory.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` Note that the `],
					[/* reference */ 'r', `java.nio.file.Files`, `Files`],
					[/* text */ 't', ` class defines the `],
					[/* reference */ 'r', `java.nio.file.Files#move(java.nio.file.Path,java.nio.file.Path,java.nio.file.CopyOption...)`, `move`],
					[/* text */ 't', ` method to move or rename a file in a
 platform independent manner.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'dest', [/* parameter description */
					[/* text */ 't', `The new abstract pathname for the named file`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If a security manager exists and its `],
					[/* reference */ 'r', `java.lang.SecurityManager#checkWrite(java.lang.String)`, `SecurityManager.checkWrite(java.lang.String)`],
					[/* text */ 't', `
          method denies write access to either the old or new pathnames`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `If parameter `],
					[/* inline code block */ 'i', `dest`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if and only if the renaming succeeded;
          `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise`]
			]
		]],
		[/* method */ 'setExecutable(boolean)', [
			[/* method description */
				[/* text */ 't', `A convenience method to set the owner's execute permission for this
 abstract pathname. On some platforms it may be possible to start the Java
 virtual machine with special privileges that allow it to execute files
 that are not marked executable.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `An invocation of this method of the form `],
					[/* inline code block */ 'i', `file.setExcutable(arg)`],
					[/* text */ 't', `
 behaves in exactly the same way as the invocation

 `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `file.setExecutable(arg, true)`]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'executable', [/* parameter description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', `, sets the access permission to allow execute
          operations; if `],
					[/* inline code block */ 'i', `false`],
					[/* text */ 't', ` to disallow execute operations`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If a security manager exists and its `],
					[/* reference */ 'r', `java.lang.SecurityManager#checkWrite(java.lang.String)`, `SecurityManager.checkWrite(java.lang.String)`],
					[/* text */ 't', `
          method denies write access to the file`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if and only if the operation succeeded.  The
           operation will fail if the user does not have permission to
           change the access permissions of this abstract pathname.  If
           `],
				[/* inline code block */ 'i', `executable`],
				[/* text */ 't', ` is `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` and the underlying
           file system does not implement an execute permission, then the
           operation will fail.`]
			]
		]],
		[/* method */ 'setExecutable(boolean,boolean)', [
			[/* method description */
				[/* text */ 't', `Sets the owner's or everybody's execute permission for this abstract
 pathname. On some platforms it may be possible to start the Java virtual
 machine with special privileges that allow it to execute files that are
 not marked executable.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The `],
					[/* reference */ 'r', `java.nio.file.Files`, `Files`],
					[/* text */ 't', ` class defines methods that operate on
 file attributes including file permissions. This may be used when finer
 manipulation of file permissions is required.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'executable', [/* parameter description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', `, sets the access permission to allow execute
          operations; if `],
					[/* inline code block */ 'i', `false`],
					[/* text */ 't', ` to disallow execute operations`]
				]],
				[/* parameter */ 'ownerOnly', [/* parameter description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', `, the execute permission applies only to the
          owner's execute permission; otherwise, it applies to everybody.
          If the underlying file system can not distinguish the owner's
          execute permission from that of others, then the permission will
          apply to everybody, regardless of this value.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If a security manager exists and its `],
					[/* reference */ 'r', `java.lang.SecurityManager#checkWrite(java.lang.String)`, `SecurityManager.checkWrite(java.lang.String)`],
					[/* text */ 't', `
          method denies write access to the file`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if and only if the operation succeeded.  The
          operation will fail if the user does not have permission to
          change the access permissions of this abstract pathname.  If
          `],
				[/* inline code block */ 'i', `executable`],
				[/* text */ 't', ` is `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` and the underlying
          file system does not implement an execute permission, then the
          operation will fail.`]
			]
		]],
		[/* method */ 'setLastModified(long)', [
			[/* method description */
				[/* text */ 't', `Sets the last-modified time of the file or directory named by this
 abstract pathname.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` All platforms support file-modification times to the nearest second,
 but some provide more precision.  The argument will be truncated to fit
 the supported precision.  If the operation succeeds and no intervening
 operations on the file take place, then the next invocation of the
 `],
					[/* reference */ 'r', `#lastModified()`, `lastModified()`],
					[/* text */ 't', ` method will return the (possibly
 truncated) `],
					[/* inline code block */ 'i', `time`],
					[/* text */ 't', ` argument that was passed to this method.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'time', [/* parameter description */
					[/* text */ 't', `The new last-modified time, measured in milliseconds since
               the epoch (00:00:00 GMT, January 1, 1970)`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If the argument is negative`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If a security manager exists and its `],
					[/* reference */ 'r', `java.lang.SecurityManager#checkWrite(java.lang.String)`, `SecurityManager.checkWrite(java.lang.String)`],
					[/* text */ 't', `
          method denies write access to the named file`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if and only if the operation succeeded;
          `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise`]
			]
		]],
		[/* method */ 'setReadable(boolean)', [
			[/* method description */
				[/* text */ 't', `A convenience method to set the owner's read permission for this abstract
 pathname. On some platforms it may be possible to start the Java virtual
 machine with special privileges that allow it to read files that are
 marked as unreadable.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `An invocation of this method of the form `],
					[/* inline code block */ 'i', `file.setReadable(arg)`],
					[/* text */ 't', `
 behaves in exactly the same way as the invocation

 `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `file.setReadable(arg, true)`]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'readable', [/* parameter description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', `, sets the access permission to allow read
          operations; if `],
					[/* inline code block */ 'i', `false`],
					[/* text */ 't', ` to disallow read operations`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If a security manager exists and its `],
					[/* reference */ 'r', `java.lang.SecurityManager#checkWrite(java.lang.String)`, `SecurityManager.checkWrite(java.lang.String)`],
					[/* text */ 't', `
          method denies write access to the file`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if and only if the operation succeeded.  The
          operation will fail if the user does not have permission to
          change the access permissions of this abstract pathname.  If
          `],
				[/* inline code block */ 'i', `readable`],
				[/* text */ 't', ` is `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` and the underlying
          file system does not implement a read permission, then the
          operation will fail.`]
			]
		]],
		[/* method */ 'setReadable(boolean,boolean)', [
			[/* method description */
				[/* text */ 't', `Sets the owner's or everybody's read permission for this abstract
 pathname. On some platforms it may be possible to start the Java virtual
 machine with special privileges that allow it to read files that are
 marked as unreadable.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The `],
					[/* reference */ 'r', `java.nio.file.Files`, `Files`],
					[/* text */ 't', ` class defines methods that operate on
 file attributes including file permissions. This may be used when finer
 manipulation of file permissions is required.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'readable', [/* parameter description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', `, sets the access permission to allow read
          operations; if `],
					[/* inline code block */ 'i', `false`],
					[/* text */ 't', ` to disallow read operations`]
				]],
				[/* parameter */ 'ownerOnly', [/* parameter description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', `, the read permission applies only to the
          owner's read permission; otherwise, it applies to everybody.  If
          the underlying file system can not distinguish the owner's read
          permission from that of others, then the permission will apply to
          everybody, regardless of this value.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If a security manager exists and its `],
					[/* reference */ 'r', `java.lang.SecurityManager#checkWrite(java.lang.String)`, `SecurityManager.checkWrite(java.lang.String)`],
					[/* text */ 't', `
          method denies write access to the file`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if and only if the operation succeeded.  The
          operation will fail if the user does not have permission to
          change the access permissions of this abstract pathname.  If
          `],
				[/* inline code block */ 'i', `readable`],
				[/* text */ 't', ` is `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` and the underlying
          file system does not implement a read permission, then the
          operation will fail.`]
			]
		]],
		[/* method */ 'setReadOnly()', [
			[/* method description */
				[/* text */ 't', `Marks the file or directory named by this abstract pathname so that
 only read operations are allowed. After invoking this method the file
 or directory will not change until it is either deleted or marked
 to allow write access. On some platforms it may be possible to start the
 Java virtual machine with special privileges that allow it to modify
 files that are marked read-only. Whether or not a read-only file or
 directory may be deleted depends upon the underlying system.`]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If a security manager exists and its `],
					[/* reference */ 'r', `java.lang.SecurityManager#checkWrite(java.lang.String)`, `SecurityManager.checkWrite(java.lang.String)`],
					[/* text */ 't', `
          method denies write access to the named file`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if and only if the operation succeeded;
          `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise`]
			]
		]],
		[/* method */ 'setWritable(boolean)', [
			[/* method description */
				[/* text */ 't', `A convenience method to set the owner's write permission for this abstract
 pathname. On some platforms it may be possible to start the Java virtual
 machine with special privileges that allow it to modify files that
 disallow write operations.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` An invocation of this method of the form `],
					[/* inline code block */ 'i', `file.setWritable(arg)`],
					[/* text */ 't', `
 behaves in exactly the same way as the invocation

 `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `file.setWritable(arg, true)`]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'writable', [/* parameter description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', `, sets the access permission to allow write
          operations; if `],
					[/* inline code block */ 'i', `false`],
					[/* text */ 't', ` to disallow write operations`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If a security manager exists and its `],
					[/* reference */ 'r', `java.lang.SecurityManager#checkWrite(java.lang.String)`, `SecurityManager.checkWrite(java.lang.String)`],
					[/* text */ 't', `
          method denies write access to the file`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if and only if the operation succeeded.  The
          operation will fail if the user does not have permission to
          change the access permissions of this abstract pathname.`]
			]
		]],
		[/* method */ 'setWritable(boolean,boolean)', [
			[/* method description */
				[/* text */ 't', `Sets the owner's or everybody's write permission for this abstract
 pathname. On some platforms it may be possible to start the Java virtual
 machine with special privileges that allow it to modify files that
 disallow write operations.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The `],
					[/* reference */ 'r', `java.nio.file.Files`, `Files`],
					[/* text */ 't', ` class defines methods that operate on
 file attributes including file permissions. This may be used when finer
 manipulation of file permissions is required.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'writable', [/* parameter description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', `, sets the access permission to allow write
          operations; if `],
					[/* inline code block */ 'i', `false`],
					[/* text */ 't', ` to disallow write operations`]
				]],
				[/* parameter */ 'ownerOnly', [/* parameter description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', `, the write permission applies only to the
          owner's write permission; otherwise, it applies to everybody.  If
          the underlying file system can not distinguish the owner's write
          permission from that of others, then the permission will apply to
          everybody, regardless of this value.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If a security manager exists and its `],
					[/* reference */ 'r', `java.lang.SecurityManager#checkWrite(java.lang.String)`, `SecurityManager.checkWrite(java.lang.String)`],
					[/* text */ 't', `
          method denies write access to the named file`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if and only if the operation succeeded. The
          operation will fail if the user does not have permission to change
          the access permissions of this abstract pathname.`]
			]
		]],
		[/* method */ 'compareTo(java.io.File)', [
			[/* method description */
				[/* text */ 't', `Compares two abstract pathnames lexicographically.  The ordering
 defined by this method depends upon the underlying system.  On UNIX
 systems, alphabetic case is significant in comparing pathnames; on
 Microsoft Windows systems it is not.`]
			],
			[/* parameters */
				[/* parameter */ 'pathname', [/* parameter description */
					[/* text */ 't', `The abstract pathname to be compared to this abstract
                    pathname`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `Zero if the argument is equal to this abstract pathname, a
          value less than zero if this abstract pathname is
          lexicographically less than the argument, or a value greater
          than zero if this abstract pathname is lexicographically
          greater than the argument`]
			]
		]],
		[/* method */ 'hashCode()', [
			[/* method description */
				[/* text */ 't', `Computes a hash code for this abstract pathname.  Because equality of
 abstract pathnames is inherently system-dependent, so is the computation
 of their hash codes.  On UNIX systems, the hash code of an abstract
 pathname is equal to the exclusive `],
				[/* text */ 't', `or`],
				[/* text */ 't', ` of the hash code
 of its pathname string and the decimal value
 `],
				[/* inline code block */ 'i', `1234321`],
				[/* text */ 't', `.  On Microsoft Windows systems, the hash
 code is equal to the exclusive `],
				[/* text */ 't', `or`],
				[/* text */ 't', ` of the hash code of
 its pathname string converted to lower case and the decimal
 value `],
				[/* inline code block */ 'i', `1234321`],
				[/* text */ 't', `.  Locale is not taken into account on
 lowercasing the pathname string.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `A hash code for this abstract pathname`]
			]
		]],
		[/* method */ 'getAbsoluteFile()', [
			[/* method description */
				[/* text */ 't', `Returns the absolute form of this abstract pathname.  Equivalent to
 `],
				[/* inline code block */ 'i', `new File(this.getAbsolutePath())`],
				[/* text */ 't', `.`]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If a required system property value cannot be accessed.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The absolute abstract pathname denoting the same file or
          directory as this abstract pathname`]
			]
		]],
		[/* method */ 'getCanonicalFile()', [
			[/* method description */
				[/* text */ 't', `Returns the canonical form of this abstract pathname.  Equivalent to
 `],
				[/* inline code block */ 'i', `new File(this.getCanonicalPath())`],
				[/* text */ 't', `.`]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If an I/O error occurs, which is possible because the
          construction of the canonical pathname may require
          filesystem queries`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If a required system property value cannot be accessed, or
          if a security manager exists and its `],
					[/* reference */ 'r', `java.lang.SecurityManager#checkRead(java.io.FileDescriptor)`, `SecurityManager.checkRead(java.io.FileDescriptor)`],
					[/* text */ 't', ` method denies
          read access to the file`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The canonical pathname string denoting the same file or
          directory as this abstract pathname`]
			]
		]],
		[/* method */ 'getParentFile()', [
			[/* method description */
				[/* text */ 't', `Returns the abstract pathname of this abstract pathname's parent,
 or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if this pathname does not name a parent
 directory.

 `],
				[/* block */ 'b', `parent`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `The abstract pathname of the parent directory named by this
          abstract pathname, or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if this pathname
          does not name a parent`]
			]
		]],
		[/* method */ 'listFiles()', [
			[/* method description */
				[/* text */ 't', `Returns an array of abstract pathnames denoting the files in the
 directory denoted by this abstract pathname.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` If this abstract pathname does not denote a directory, then this
 method returns `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.  Otherwise an array of `],
					[/* inline code block */ 'i', `File`],
					[/* text */ 't', ` objects
 is returned, one for each file or directory in the directory.  Pathnames
 denoting the directory itself and the directory's parent directory are
 not included in the result.  Each resulting abstract pathname is
 constructed from this abstract pathname using the `],
					[/* reference */ 'r', `#%3Cinit%3E(java.io.File,java.lang.String)`, `File(File, String)`],
					[/* text */ 't', ` constructor.  Therefore if this
 pathname is absolute then each resulting pathname is absolute; if this
 pathname is relative then each resulting pathname will be relative to
 the same directory.

 `]
				]],
				[/* block */ 'b', ` There is no guarantee that the name strings in the resulting array
 will appear in any specific order; they are not, in particular,
 guaranteed to appear in alphabetical order.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` Note that the `],
					[/* reference */ 'r', `java.nio.file.Files`, `Files`],
					[/* text */ 't', ` class defines the `],
					[/* reference */ 'r', `java.nio.file.Files#newDirectoryStream(java.nio.file.Path)`, `newDirectoryStream`],
					[/* text */ 't', ` method
 to open a directory and iterate over the names of the files in the
 directory. This may use less resources when working with very large
 directories.`]
				]]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If a security manager exists and its `],
					[/* reference */ 'r', `java.lang.SecurityManager#checkRead(java.lang.String)`, `SecurityManager.checkRead(String)`],
					[/* text */ 't', ` method denies read access to
          the directory`]
				]]
			],
			[/* return description */
				[/* text */ 't', `An array of abstract pathnames denoting the files and
          directories in the directory denoted by this abstract pathname.
          The array will be empty if the directory is empty.  Returns
          `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if this abstract pathname does not denote a
          directory, or if an I/O error occurs.`]
			]
		]],
		[/* method */ 'listFiles(java.io.FileFilter)', [
			[/* method description */
				[/* text */ 't', `Returns an array of abstract pathnames denoting the files and
 directories in the directory denoted by this abstract pathname that
 satisfy the specified filter.  The behavior of this method is the same
 as that of the `],
				[/* reference */ 'r', `#listFiles()`, `listFiles()`],
				[/* text */ 't', ` method, except that the pathnames in
 the returned array must satisfy the filter.  If the given `],
				[/* inline code block */ 'i', `filter`],
				[/* text */ 't', `
 is `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` then all pathnames are accepted.  Otherwise, a pathname
 satisfies the filter if and only if the value `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` results when
 the `],
				[/* reference */ 'r', `java.io.FileFilter#accept(java.io.File)`, `FileFilter.accept(File)`],
				[/* text */ 't', ` method of the
 filter is invoked on the pathname.`]
			],
			[/* parameters */
				[/* parameter */ 'filter', [/* parameter description */
					[/* text */ 't', `A file filter`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If a security manager exists and its `],
					[/* reference */ 'r', `java.lang.SecurityManager#checkRead(java.lang.String)`, `SecurityManager.checkRead(String)`],
					[/* text */ 't', ` method denies read access to
          the directory`]
				]]
			],
			[/* return description */
				[/* text */ 't', `An array of abstract pathnames denoting the files and
          directories in the directory denoted by this abstract pathname.
          The array will be empty if the directory is empty.  Returns
          `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if this abstract pathname does not denote a
          directory, or if an I/O error occurs.`]
			]
		]],
		[/* method */ 'listFiles(java.io.FilenameFilter)', [
			[/* method description */
				[/* text */ 't', `Returns an array of abstract pathnames denoting the files and
 directories in the directory denoted by this abstract pathname that
 satisfy the specified filter.  The behavior of this method is the same
 as that of the `],
				[/* reference */ 'r', `#listFiles()`, `listFiles()`],
				[/* text */ 't', ` method, except that the pathnames in
 the returned array must satisfy the filter.  If the given `],
				[/* inline code block */ 'i', `filter`],
				[/* text */ 't', `
 is `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` then all pathnames are accepted.  Otherwise, a pathname
 satisfies the filter if and only if the value `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` results when
 the `],
				[/* reference */ 'r', `java.io.FilenameFilter#accept(java.io.File,java.lang.String)`, `FilenameFilter.accept(File, String)`],
				[/* text */ 't', ` method of the filter is
 invoked on this abstract pathname and the name of a file or directory in
 the directory that it denotes.`]
			],
			[/* parameters */
				[/* parameter */ 'filter', [/* parameter description */
					[/* text */ 't', `A filename filter`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If a security manager exists and its `],
					[/* reference */ 'r', `java.lang.SecurityManager#checkRead(java.lang.String)`, `SecurityManager.checkRead(String)`],
					[/* text */ 't', ` method denies read access to
          the directory`]
				]]
			],
			[/* return description */
				[/* text */ 't', `An array of abstract pathnames denoting the files and
          directories in the directory denoted by this abstract pathname.
          The array will be empty if the directory is empty.  Returns
          `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if this abstract pathname does not denote a
          directory, or if an I/O error occurs.`]
			]
		]],
		[/* method */ 'getAbsolutePath()', [
			[/* method description */
				[/* text */ 't', `Returns the absolute pathname string of this abstract pathname.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` If this abstract pathname is already absolute, then the pathname
 string is simply returned as if by the `],
					[/* reference */ 'r', `#getPath()`, `getPath()`],
					[/* text */ 't', `
 method.  If this abstract pathname is the empty abstract pathname then
 the pathname string of the current user directory, which is named by the
 system property `],
					[/* inline code block */ 'i', `user.dir`],
					[/* text */ 't', `, is returned.  Otherwise this
 pathname is resolved in a system-dependent way.  On UNIX systems, a
 relative pathname is made absolute by resolving it against the current
 user directory.  On Microsoft Windows systems, a relative pathname is made absolute
 by resolving it against the current directory of the drive named by the
 pathname, if any; if not, it is resolved against the current user
 directory.`]
				]]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If a required system property value cannot be accessed.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The absolute pathname string denoting the same file or
          directory as this abstract pathname`]
			]
		]],
		[/* method */ 'getCanonicalPath()', [
			[/* method description */
				[/* text */ 't', `Returns the canonical pathname string of this abstract pathname.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` A canonical pathname is both absolute and unique.  The precise
 definition of canonical form is system-dependent.  This method first
 converts this pathname to absolute form if necessary, as if by invoking the
 `],
					[/* reference */ 'r', `#getAbsolutePath()`, `getAbsolutePath()`],
					[/* text */ 't', ` method, and then maps it to its unique form in a
 system-dependent way.  This typically involves removing redundant names
 such as `],
					[/* inline code block */ 'i', `"."`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `".."`],
					[/* text */ 't', ` from the pathname, resolving
 symbolic links (on UNIX platforms), and converting drive letters to a
 standard case (on Microsoft Windows platforms).

 `]
				]],
				[/* block */ 'b', ` Every pathname that denotes an existing file or directory has a
 unique canonical form.  Every pathname that denotes a nonexistent file
 or directory also has a unique canonical form.  The canonical form of
 the pathname of a nonexistent file or directory may be different from
 the canonical form of the same pathname after the file or directory is
 created.  Similarly, the canonical form of the pathname of an existing
 file or directory may be different from the canonical form of the same
 pathname after the file or directory is deleted.`]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If an I/O error occurs, which is possible because the
          construction of the canonical pathname may require
          filesystem queries`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If a required system property value cannot be accessed, or
          if a security manager exists and its `],
					[/* reference */ 'r', `java.lang.SecurityManager#checkRead(java.io.FileDescriptor)`, `SecurityManager.checkRead(java.io.FileDescriptor)`],
					[/* text */ 't', ` method denies
          read access to the file`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The canonical pathname string denoting the same file or
          directory as this abstract pathname`]
			]
		]],
		[/* method */ 'getName()', [
			[/* method description */
				[/* text */ 't', `Returns the name of the file or directory denoted by this abstract
 pathname.  This is just the last name in the pathname's name
 sequence.  If the pathname's name sequence is empty, then the empty
 string is returned.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `The name of the file or directory denoted by this abstract
          pathname, or the empty string if this pathname's name sequence
          is empty`]
			]
		]],
		[/* method */ 'getParent()', [
			[/* method description */
				[/* text */ 't', `Returns the pathname string of this abstract pathname's parent, or
 `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if this pathname does not name a parent directory.

 `],
				[/* block */ 'b', `parent`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `The pathname string of the parent directory named by this
          abstract pathname, or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if this pathname
          does not name a parent`]
			]
		]],
		[/* method */ 'getPath()', [
			[/* method description */
				[/* text */ 't', `Converts this abstract pathname into a pathname string.  The resulting
 string uses the `],
				[/* text */ 't', `default name-separator character`],
				[/* text */ 't', ` to
 separate the names in the name sequence.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `The string form of this abstract pathname`]
			]
		]],
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Returns the pathname string of this abstract pathname.  This is just the
 string returned by the `],
				[/* reference */ 'r', `#getPath()`, `getPath()`],
				[/* text */ 't', ` method.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `The string form of this abstract pathname`]
			]
		]],
		[/* method */ 'list()', [
			[/* method description */
				[/* text */ 't', `Returns an array of strings naming the files and directories in the
 directory denoted by this abstract pathname.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` If this abstract pathname does not denote a directory, then this
 method returns `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.  Otherwise an array of strings is
 returned, one for each file or directory in the directory.  Names
 denoting the directory itself and the directory's parent directory are
 not included in the result.  Each string is a file name rather than a
 complete path.

 `]
				]],
				[/* block */ 'b', ` There is no guarantee that the name strings in the resulting array
 will appear in any specific order; they are not, in particular,
 guaranteed to appear in alphabetical order.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` Note that the `],
					[/* reference */ 'r', `java.nio.file.Files`, `Files`],
					[/* text */ 't', ` class defines the `],
					[/* reference */ 'r', `java.nio.file.Files#newDirectoryStream(java.nio.file.Path)`, `newDirectoryStream`],
					[/* text */ 't', ` method to
 open a directory and iterate over the names of the files in the directory.
 This may use less resources when working with very large directories, and
 may be more responsive when working with remote directories.`]
				]]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If a security manager exists and its `],
					[/* reference */ 'r', `java.lang.SecurityManager#checkRead(java.lang.String)`, `SecurityManager.checkRead(String)`],
					[/* text */ 't', ` method denies read access to
          the directory`]
				]]
			],
			[/* return description */
				[/* text */ 't', `An array of strings naming the files and directories in the
          directory denoted by this abstract pathname.  The array will be
          empty if the directory is empty.  Returns `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if
          this abstract pathname does not denote a directory, or if an
          I/O error occurs.`]
			]
		]],
		[/* method */ 'list(java.io.FilenameFilter)', [
			[/* method description */
				[/* text */ 't', `Returns an array of strings naming the files and directories in the
 directory denoted by this abstract pathname that satisfy the specified
 filter.  The behavior of this method is the same as that of the
 `],
				[/* reference */ 'r', `#list()`, `list()`],
				[/* text */ 't', ` method, except that the strings in the returned array
 must satisfy the filter.  If the given `],
				[/* inline code block */ 'i', `filter`],
				[/* text */ 't', ` is `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `
 then all names are accepted.  Otherwise, a name satisfies the filter if
 and only if the value `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` results when the `],
				[/* reference */ 'r', `java.io.FilenameFilter#accept(java.io.File,java.lang.String)`, `FilenameFilter.accept(File, String)`],
				[/* text */ 't', ` method
 of the filter is invoked on this abstract pathname and the name of a
 file or directory in the directory that it denotes.`]
			],
			[/* parameters */
				[/* parameter */ 'filter', [/* parameter description */
					[/* text */ 't', `A filename filter`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If a security manager exists and its `],
					[/* reference */ 'r', `java.lang.SecurityManager#checkRead(java.lang.String)`, `SecurityManager.checkRead(String)`],
					[/* text */ 't', ` method denies read access to
          the directory`]
				]]
			],
			[/* return description */
				[/* text */ 't', `An array of strings naming the files and directories in the
          directory denoted by this abstract pathname that were accepted
          by the given `],
				[/* inline code block */ 'i', `filter`],
				[/* text */ 't', `.  The array will be empty if the
          directory is empty or if no names were accepted by the filter.
          Returns `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if this abstract pathname does not denote
          a directory, or if an I/O error occurs.`]
			]
		]],
		[/* method */ 'toURI()', [
			[/* method description */
				[/* text */ 't', `Constructs a `],
				[/* inline code block */ 'i', `file:`],
				[/* text */ 't', ` URI that represents this abstract pathname.

 `],
				[/* block */ 'b', ` The exact form of the URI is system-dependent.  If it can be
 determined that the file denoted by this abstract pathname is a
 directory, then the resulting URI will end with a slash.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` For a given abstract pathname `],
					[/* text */ 't', `f`],
					[/* text */ 't', `, it is guaranteed that

 `]
				]],
				[/* blockquote */ 'q', [
					[/* inline code block */ 'i', `new File(`],
					[/* text */ 't', ` f`],
					[/* inline code block */ 'i', `.toURI()).equals(`],
					[/* text */ 't', ` f`],
					[/* inline code block */ 'i', `.getAbsoluteFile())`]
				]],
				[/* text */ 't', `

 so long as the original abstract pathname, the URI, and the new abstract
 pathname are all created in (possibly different invocations of) the same
 Java virtual machine.  Due to the system-dependent nature of abstract
 pathnames, however, this relationship typically does not hold when a
 `],
				[/* inline code block */ 'i', `file:`],
				[/* text */ 't', ` URI that is created in a virtual machine on one operating
 system is converted into an abstract pathname in a virtual machine on a
 different operating system.

 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', ` Note that when this abstract pathname represents a UNC pathname then
 all components of the UNC (including the server name component) are encoded
 in the `],
					[/* inline code block */ 'i', `URI`],
					[/* text */ 't', ` path. The authority component is undefined, meaning
 that it is represented as `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `. The `],
					[/* reference */ 'r', `java.nio.file.Path`, `Path`],
					[/* text */ 't', ` class defines the
 `],
					[/* reference */ 'r', `java.nio.file.Path#toUri()`, `toUri`],
					[/* text */ 't', ` method to encode the server name in the authority
 component of the resulting `],
					[/* inline code block */ 'i', `URI`],
					[/* text */ 't', `. The `],
					[/* reference */ 'r', `#toPath()`, `toPath`],
					[/* text */ 't', ` method
 may be used to obtain a `],
					[/* inline code block */ 'i', `Path`],
					[/* text */ 't', ` representing this abstract pathname.`]
				]]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If a required system property value cannot
 be accessed.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `An absolute, hierarchical URI with a scheme equal to
          `],
				[/* inline code block */ 'i', `"file"`],
				[/* text */ 't', `, a path representing this abstract pathname,
          and undefined authority, query, and fragment components`]
			]
		]],
		[/* method */ 'toURL()', [
			[/* method description */
				[/* text */ 't', `Converts this abstract pathname into a `],
				[/* inline code block */ 'i', `file:`],
				[/* text */ 't', ` URL.  The
 exact form of the URL is system-dependent.  If it can be determined that
 the file denoted by this abstract pathname is a directory, then the
 resulting URL will end with a slash.`]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.net.MalformedURLException', [/* throw description */
					[/* text */ 't', `If the path cannot be parsed as a URL`]
				]]
			],
			[/* return description */
				[/* text */ 't', `A URL object representing the equivalent file URL`]
			]
		]],
		[/* method */ 'toPath()', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* reference */ 'r', `java.nio.file.Path`, `java.nio.file.Path`],
				[/* text */ 't', ` object constructed from
 this abstract path. The resulting `],
				[/* inline code block */ 'i', `Path`],
				[/* text */ 't', ` is associated with the
 `],
				[/* reference */ 'r', `java.nio.file.FileSystems#getDefault()`, `default-filesystem`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', ` The first invocation of this method works as if invoking it were
 equivalent to evaluating the expression:
 `],
				[/* blockquote */ 'q', [
					[/* code block */ 'c', [
						[/* text */ 't', ` `],
						[/* text */ 't', `FileSystems.getDefault`],
						[/* text */ 't', `().`],
						[/* text */ 't', `getPath`],
						[/* text */ 't', `(this.`],
						[/* text */ 't', `getPath`],
						[/* text */ 't', `());
 `]
					]]
				]],
				[/* text */ 't', `
 Subsequent invocations of this method return the same `],
				[/* inline code block */ 'i', `Path`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', ` If this abstract pathname is the empty abstract pathname then this
 method returns a `],
					[/* inline code block */ 'i', `Path`],
					[/* text */ 't', ` that may be used to access the current
 user directory.`]
				]]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.nio.file.InvalidPathException', [/* throw description */
					[/* text */ 't', `if a `],
					[/* inline code block */ 'i', `Path`],
					[/* text */ 't', ` object cannot be constructed from the abstract
          path (see `],
					[/* reference */ 'r', `java.nio.file.FileSystem#getPath(java.lang.String,java.lang.String...)`, `FileSystem.getPath`],
					[/* text */ 't', `)`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Path`],
				[/* text */ 't', ` constructed from this abstract path`]
			]
		]],
		[/* method */ 'getFreeSpace()', [
			[/* method description */
				[/* text */ 't', `Returns the number of unallocated bytes in the partition `],
				[/* text */ 't', `named`],
				[/* text */ 't', ` by this abstract path name.  If the
 number of unallocated bytes in the partition is greater than
 `],
				[/* reference */ 'r', `java.lang.Long#MAX_VALUE`, `Long.MAX_VALUE`],
				[/* text */ 't', `, then `],
				[/* inline code block */ 'i', `Long.MAX_VALUE`],
				[/* text */ 't', ` will be returned.

 `],
				[/* block */ 'b', ` The returned number of unallocated bytes is a hint, but not
 a guarantee, that it is possible to use most or any of these
 bytes.  The number of unallocated bytes is most likely to be
 accurate immediately after this call.  It is likely to be made
 inaccurate by any external I/O operations including those made
 on the system outside of this virtual machine.  This method
 makes no guarantee that write operations to this file system
 will succeed.`]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If a security manager has been installed and it denies
          `],
					[/* reference */ 'r', `java.lang.RuntimePermission`, `RuntimePermission`],
					[/* inline code block */ 'i', `("getFileSystemAttributes")`],
					[/* text */ 't', `
          or its `],
					[/* reference */ 'r', `java.lang.SecurityManager#checkRead(java.lang.String)`, `SecurityManager.checkRead(String)`],
					[/* text */ 't', ` method denies
          read access to the file named by this abstract pathname`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The number of unallocated bytes on the partition or `],
				[/* inline code block */ 'i', `0L`],
				[/* text */ 't', `
          if the abstract pathname does not name a partition or if this
          number cannot be obtained.  This value will be less than or
          equal to the total file system size returned by
          `],
				[/* reference */ 'r', `#getTotalSpace()`, `getTotalSpace()`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'getTotalSpace()', [
			[/* method description */
				[/* text */ 't', `Returns the size of the partition `],
				[/* text */ 't', `named`],
				[/* text */ 't', ` by this
 abstract pathname. If the total number of bytes in the partition is
 greater than `],
				[/* reference */ 'r', `java.lang.Long#MAX_VALUE`, `Long.MAX_VALUE`],
				[/* text */ 't', `, then `],
				[/* inline code block */ 'i', `Long.MAX_VALUE`],
				[/* text */ 't', ` will be
 returned.`]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If a security manager has been installed and it denies
          `],
					[/* reference */ 'r', `java.lang.RuntimePermission`, `RuntimePermission`],
					[/* inline code block */ 'i', `("getFileSystemAttributes")`],
					[/* text */ 't', `
          or its `],
					[/* reference */ 'r', `java.lang.SecurityManager#checkRead(java.lang.String)`, `SecurityManager.checkRead(String)`],
					[/* text */ 't', ` method denies
          read access to the file named by this abstract pathname`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The size, in bytes, of the partition or `],
				[/* inline code block */ 'i', `0L`],
				[/* text */ 't', ` if this
          abstract pathname does not name a partition or if the size
          cannot be obtained`]
			]
		]],
		[/* method */ 'getUsableSpace()', [
			[/* method description */
				[/* text */ 't', `Returns the number of bytes available to this virtual machine on the
 partition `],
				[/* text */ 't', `named`],
				[/* text */ 't', ` by this abstract pathname.  If
 the number of available bytes in the partition is greater than
 `],
				[/* reference */ 'r', `java.lang.Long#MAX_VALUE`, `Long.MAX_VALUE`],
				[/* text */ 't', `, then `],
				[/* inline code block */ 'i', `Long.MAX_VALUE`],
				[/* text */ 't', ` will be returned.
 When possible, this method checks for write permissions and other
 operating system restrictions and will therefore usually provide a more
 accurate estimate of how much new data can actually be written than
 `],
				[/* reference */ 'r', `#getFreeSpace()`, `getFreeSpace()`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', ` The returned number of available bytes is a hint, but not a
 guarantee, that it is possible to use most or any of these bytes.  The
 number of available bytes is most likely to be accurate immediately
 after this call.  It is likely to be made inaccurate by any external
 I/O operations including those made on the system outside of this
 virtual machine.  This method makes no guarantee that write operations
 to this file system will succeed.`]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If a security manager has been installed and it denies
          `],
					[/* reference */ 'r', `java.lang.RuntimePermission`, `RuntimePermission`],
					[/* inline code block */ 'i', `("getFileSystemAttributes")`],
					[/* text */ 't', `
          or its `],
					[/* reference */ 'r', `java.lang.SecurityManager#checkRead(java.lang.String)`, `SecurityManager.checkRead(String)`],
					[/* text */ 't', ` method denies
          read access to the file named by this abstract pathname`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The number of available bytes on the partition or `],
				[/* inline code block */ 'i', `0L`],
				[/* text */ 't', `
          if the abstract pathname does not name a partition or if this
          number cannot be obtained.  On systems where this information
          is not available, this method will be equivalent to a call to
          `],
				[/* reference */ 'r', `#getFreeSpace()`, `getFreeSpace()`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'lastModified()', [
			[/* method description */
				[/* text */ 't', `Returns the time that the file denoted by this abstract pathname was
 last modified.`]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If a security manager exists and its `],
					[/* reference */ 'r', `java.lang.SecurityManager#checkRead(java.lang.String)`, `SecurityManager.checkRead(java.lang.String)`],
					[/* text */ 't', `
          method denies read access to the file`]
				]]
			],
			[/* return description */
				[/* text */ 't', `A `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` value representing the time the file was
          last modified, measured in milliseconds since the epoch
          (00:00:00 GMT, January 1, 1970), or `],
				[/* inline code block */ 'i', `0L`],
				[/* text */ 't', ` if the
          file does not exist or if an I/O error occurs.  The value may
          be negative indicating the number of milliseconds before the
          epoch`]
			]
		]],
		[/* method */ 'length()', [
			[/* method description */
				[/* text */ 't', `Returns the length of the file denoted by this abstract pathname.
 The return value is unspecified if this pathname denotes a directory.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` Where it is required to distinguish an I/O exception from the case
 that `],
					[/* inline code block */ 'i', `0L`],
					[/* text */ 't', ` is returned, or where several attributes of the same file
 are required at the same time, then the `],
					[/* reference */ 'r', `java.nio.file.Files#readAttributes(java.nio.file.Path,java.lang.Class,java.nio.file.LinkOption...)`, `Files.readAttributes`],
					[/* text */ 't', ` method may be used.`]
				]]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If a security manager exists and its `],
					[/* reference */ 'r', `java.lang.SecurityManager#checkRead(java.lang.String)`, `SecurityManager.checkRead(java.lang.String)`],
					[/* text */ 't', `
          method denies read access to the file`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The length, in bytes, of the file denoted by this abstract
          pathname, or `],
				[/* inline code block */ 'i', `0L`],
				[/* text */ 't', ` if the file does not exist.  Some
          operating systems may return `],
				[/* inline code block */ 'i', `0L`],
				[/* text */ 't', ` for pathnames
          denoting system-dependent entities such as devices or pipes.`]
			]
		]],
		[/* method */ 'createTempFile(java.lang.String,java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Creates an empty file in the default temporary-file directory, using
 the given prefix and suffix to generate its name. Invoking this method
 is equivalent to invoking `],
				[/* reference */ 'r', `#createTempFile(java.lang.String,java.lang.String,java.io.File)`, `createTempFile(prefix, suffix, null)`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The `],
					[/* reference */ 'r', `java.nio.file.Files#createTempFile(java.lang.String,java.lang.String,java.nio.file.attribute.FileAttribute...)`, `Files.createTempFile`],
					[/* text */ 't', ` method provides an alternative method to create an
 empty file in the temporary-file directory. Files created by that method
 may have more restrictive access permissions to files created by this
 method and so may be more suited to security-sensitive applications.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'prefix', [/* parameter description */
					[/* text */ 't', `The prefix string to be used in generating the file's
                    name; must be at least three characters long`]
				]],
				[/* parameter */ 'suffix', [/* parameter description */
					[/* text */ 't', `The suffix string to be used in generating the file's
                    name; may be `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `, in which case the
                    suffix `],
					[/* inline code block */ 'i', `".tmp"`],
					[/* text */ 't', ` will be used`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If the `],
					[/* inline code block */ 'i', `prefix`],
					[/* text */ 't', ` argument contains fewer than three
          characters`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If a file could not be created`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If a security manager exists and its `],
					[/* reference */ 'r', `java.lang.SecurityManager#checkWrite(java.lang.String)`, `SecurityManager.checkWrite(java.lang.String)`],
					[/* text */ 't', `
          method does not allow a file to be created`]
				]]
			],
			[/* return description */
				[/* text */ 't', `An abstract pathname denoting a newly-created empty file`]
			]
		]],
		[/* method */ 'createTempFile(java.lang.String,java.lang.String,java.io.File)', [
			[/* method description */
				[/* block */ 'b', ` Creates a new empty file in the specified directory, using the
 given prefix and suffix strings to generate its name.  If this method
 returns successfully then it is guaranteed that:

 `],
				[/* list */ 'l', [
					[/* block */ 'b', ` The file denoted by the returned abstract pathname did not exist
      before this method was invoked, and
 `],
					[/* block */ 'b', ` Neither this method nor any of its variants will return the same
      abstract pathname again in the current invocation of the virtual
      machine.
 `]
				]],
				[/* text */ 't', `

 This method provides only part of a temporary-file facility.  To arrange
 for a file created by this method to be deleted automatically, use the
 `],
				[/* reference */ 'r', `#deleteOnExit()`, `deleteOnExit()`],
				[/* text */ 't', ` method.

 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', ` The `],
					[/* inline code block */ 'i', `prefix`],
					[/* text */ 't', ` argument must be at least three characters
 long.  It is recommended that the prefix be a short, meaningful string
 such as `],
					[/* inline code block */ 'i', `"hjb"`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `"mail"`],
					[/* text */ 't', `.  The
 `],
					[/* inline code block */ 'i', `suffix`],
					[/* text */ 't', ` argument may be `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `, in which case the
 suffix `],
					[/* inline code block */ 'i', `".tmp"`],
					[/* text */ 't', ` will be used.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` To create the new file, the prefix and the suffix may first be
 adjusted to fit the limitations of the underlying platform.  If the
 prefix is too long then it will be truncated, but its first three
 characters will always be preserved.  If the suffix is too long then it
 too will be truncated, but if it begins with a period character
 (`],
					[/* inline code block */ 'i', `'.'`],
					[/* text */ 't', `) then the period and the first three characters
 following it will always be preserved.  Once these adjustments have been
 made the name of the new file will be generated by concatenating the
 prefix, five or more internally-generated characters, and the suffix.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` If the `],
					[/* inline code block */ 'i', `directory`],
					[/* text */ 't', ` argument is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` then the
 system-dependent default temporary-file directory will be used.  The
 default temporary-file directory is specified by the system property
 `],
					[/* inline code block */ 'i', `java.io.tmpdir`],
					[/* text */ 't', `.  On UNIX systems the default value of this
 property is typically `],
					[/* inline code block */ 'i', `"/tmp"`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `"/var/tmp"`],
					[/* text */ 't', `; on
 Microsoft Windows systems it is typically `],
					[/* inline code block */ 'i', `"C:\\\\WINNT\\\\TEMP"`],
					[/* text */ 't', `.  A different
 value may be given to this system property when the Java virtual machine
 is invoked, but programmatic changes to this property are not guaranteed
 to have any effect upon the temporary directory used by this method.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'prefix', [/* parameter description */
					[/* text */ 't', `The prefix string to be used in generating the file's
                    name; must be at least three characters long`]
				]],
				[/* parameter */ 'suffix', [/* parameter description */
					[/* text */ 't', `The suffix string to be used in generating the file's
                    name; may be `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `, in which case the
                    suffix `],
					[/* inline code block */ 'i', `".tmp"`],
					[/* text */ 't', ` will be used`]
				]],
				[/* parameter */ 'directory', [/* parameter description */
					[/* text */ 't', `The directory in which the file is to be created, or
                    `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` if the default temporary-file
                    directory is to be used`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If the `],
					[/* inline code block */ 'i', `prefix`],
					[/* text */ 't', ` argument contains fewer than three
          characters`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If a file could not be created`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If a security manager exists and its `],
					[/* reference */ 'r', `java.lang.SecurityManager#checkWrite(java.lang.String)`, `SecurityManager.checkWrite(java.lang.String)`],
					[/* text */ 't', `
          method does not allow a file to be created`]
				]]
			],
			[/* return description */
				[/* text */ 't', `An abstract pathname denoting a newly-created empty file`]
			]
		]],
		[/* method */ 'listRoots()', [
			[/* method description */
				[/* text */ 't', `List the available filesystem roots.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` A particular Java platform may support zero or more
 hierarchically-organized file systems.  Each file system has a
 `],
					[/* inline code block */ 'i', `root`],
					[/* text */ 't', ` directory from which all other files in that file system
 can be reached.  Windows platforms, for example, have a root directory
 for each active drive; UNIX platforms have a single root directory,
 namely `],
					[/* inline code block */ 'i', `"/"`],
					[/* text */ 't', `.  The set of available filesystem roots is affected
 by various system-level operations such as the insertion or ejection of
 removable media and the disconnecting or unmounting of physical or
 virtual disk drives.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` This method returns an array of `],
					[/* inline code block */ 'i', `File`],
					[/* text */ 't', ` objects that denote the
 root directories of the available filesystem roots.  It is guaranteed
 that the canonical pathname of any file physically present on the local
 machine will begin with one of the roots returned by this method.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` The canonical pathname of a file that resides on some other machine
 and is accessed via a remote-filesystem protocol such as SMB or NFS may
 or may not begin with one of the roots returned by this method.  If the
 pathname of a remote file is syntactically indistinguishable from the
 pathname of a local file then it will begin with one of the roots
 returned by this method.  Thus, for example, `],
					[/* inline code block */ 'i', `File`],
					[/* text */ 't', ` objects
 denoting the root directories of the mapped network drives of a Windows
 platform will be returned by this method, while `],
					[/* inline code block */ 'i', `File`],
					[/* text */ 't', ` objects
 containing UNC pathnames will not be returned by this method.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` Unlike most methods in this class, this method does not throw
 security exceptions.  If a security manager exists and its `],
					[/* reference */ 'r', `java.lang.SecurityManager#checkRead(java.lang.String)`, `SecurityManager.checkRead(String)`],
					[/* text */ 't', ` method denies read access to a
 particular root directory, then that directory will not appear in the
 result.`]
				]]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `An array of `],
				[/* inline code block */ 'i', `File`],
				[/* text */ 't', ` objects denoting the available
          filesystem roots, or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if the set of roots could not
          be determined.  The array will be empty if there are no
          filesystem roots.`]
			]
		]],
		[/* method */ 'deleteOnExit()', [
			[/* method description */
				[/* text */ 't', `Requests that the file or directory denoted by this abstract
 pathname be deleted when the virtual machine terminates.
 Files (or directories) are deleted in the reverse order that
 they are registered. Invoking this method to delete a file or
 directory that is already registered for deletion has no effect.
 Deletion will be attempted only for normal termination of the
 virtual machine, as defined by the Java Language Specification.

 `],
				[/* block */ 'b', ` Once deletion has been requested, it is not possible to cancel the
 request.  This method should therefore be used with care.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 Note: this method should `],
					[/* text */ 't', `not`],
					[/* text */ 't', ` be used for file-locking, as
 the resulting protocol cannot be made to work reliably. The
 `],
					[/* reference */ 'r', `java.nio.channels.FileLock`, `FileLock`],
					[/* text */ 't', `
 facility should be used instead.`]
				]]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If a security manager exists and its `],
					[/* reference */ 'r', `java.lang.SecurityManager#checkDelete(java.lang.String)`, `SecurityManager.checkDelete(java.lang.String)`],
					[/* text */ 't', ` method denies
          delete access to the file`]
				]]
			],
			/* return */ UDF
		]]
	],
	/* enum values */ UDF
]);
