import {UDF} from '../../../../../utils';
import {DocsCollector} from '../../../../DocsCollector';

DocsCollector.collect('java.nio.file.spi.FileSystemProvider', [
	[/* class description */
		[/* text */ 't', `Service-provider class for file systems. The methods defined by the `],
		[/* reference */ 'r', `java.nio.file.Files`, `Files`],
		[/* text */ 't', ` class will typically delegate to an instance of this
 class.

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` A file system provider is a concrete implementation of this class that
 implements the abstract methods defined by this class. A provider is
 identified by a `],
			[/* inline code block */ 'i', `URI`],
			[/* text */ 't', ` `],
			[/* reference */ 'r', `#getScheme()`, `scheme`],
			[/* text */ 't', `. The default provider
 is identified by the URI scheme "file". It creates the `],
			[/* reference */ 'r', `java.nio.file.FileSystem`, `FileSystem`],
			[/* text */ 't', ` that
 provides access to the file systems accessible to the Java virtual machine.
 The `],
			[/* reference */ 'r', `java.nio.file.FileSystems`, `FileSystems`],
			[/* text */ 't', ` class defines how file system providers are located
 and loaded. The default provider is typically a system-default provider but
 may be overridden if the system property `],
			[/* inline code block */ 'i', `java.nio.file.spi.DefaultFileSystemProvider`],
			[/* text */ 't', ` is set. In that case, the
 provider has a one argument constructor whose formal parameter type is `],
			[/* inline code block */ 'i', `FileSystemProvider`],
			[/* text */ 't', `. All other providers have a zero argument constructor
 that initializes the provider.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` A provider is a factory for one or more `],
			[/* reference */ 'r', `java.nio.file.FileSystem`, `FileSystem`],
			[/* text */ 't', ` instances. Each
 file system is identified by a `],
			[/* inline code block */ 'i', `URI`],
			[/* text */ 't', ` where the URI's scheme matches
 the provider's `],
			[/* reference */ 'r', `#getScheme()`, `scheme`],
			[/* text */ 't', `. The default file system, for example,
 is identified by the URI `],
			[/* inline code block */ 'i', `"file:///"`],
			[/* text */ 't', `. A memory-based file system,
 for example, may be identified by a URI such as `],
			[/* inline code block */ 'i', `"memory:///?name=logfs"`],
			[/* text */ 't', `.
 The `],
			[/* reference */ 'r', `#newFileSystem(java.net.URI,java.util.Map)`, `newFileSystem`],
			[/* text */ 't', ` method may be used to create a file
 system, and the `],
			[/* reference */ 'r', `#getFileSystem(java.net.URI)`, `getFileSystem`],
			[/* text */ 't', ` method may be used to
 obtain a reference to an existing file system created by the provider. Where
 a provider is the factory for a single file system then it is provider dependent
 if the file system is created when the provider is initialized, or later when
 the `],
			[/* inline code block */ 'i', `newFileSystem`],
			[/* text */ 't', ` method is invoked. In the case of the default
 provider, the `],
			[/* inline code block */ 'i', `FileSystem`],
			[/* text */ 't', ` is created when the provider is initialized.

 `]
		]],
		[/* block */ 'b', ` All of the methods in this class are safe for use by multiple concurrent
 threads.`]
	],
	/* fields */,
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Initializes a new instance of this class.

 `],
				[/* block */ 'b', ` During construction a provider may safely access files associated
 with the default provider but care needs to be taken to avoid circular
 loading of other installed providers. If circular loading of installed
 providers is detected then an unspecified error is thrown.`]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If a security manager has been installed and it denies
          `],
					[/* reference */ 'r', `java.lang.RuntimePermission`, `RuntimePermission`],
					[/* inline code block */ 'i', `("fileSystemProvider")`]
				]]
			]
		]]
	],
	[/* methods */
		[/* method */ 'readAttributes(java.nio.file.Path,java.lang.Class,java.nio.file.LinkOption...)', [
			[/* method description */
				[/* text */ 't', `Reads a file's attributes as a bulk operation. This method works in
 exactly the manner specified by the `],
				[/* reference */ 'r', `java.nio.file.Files#readAttributes(java.nio.file.Path,java.lang.Class,java.nio.file.LinkOption...)`, `Files.readAttributes(Path,Class,LinkOption[])`],
				[/* text */ 't', ` method.`]
			],
			[/* parameters */
				[/* parameter */ 'path', [/* parameter description */
					[/* text */ 't', `the path to the file`]
				]],
				[/* parameter */ 'type', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `Class`],
					[/* text */ 't', ` of the file attributes required
          to read`]
				]],
				[/* parameter */ 'options', [/* parameter description */
					[/* text */ 't', `options indicating how symbolic links are handled`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if an attributes of the given type are not supported`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `In the case of the default provider, a security manager is
          installed, its `],
					[/* reference */ 'r', `java.lang.SecurityManager#checkRead(java.lang.String)`, `checkRead`],
					[/* text */ 't', `
          method is invoked to check read access to the file`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the file attributes`]
			]
		]],
		[/* method */ 'getFileAttributeView(java.nio.file.Path,java.lang.Class,java.nio.file.LinkOption...)', [
			[/* method description */
				[/* text */ 't', `Returns a file attribute view of a given type. This method works in
 exactly the manner specified by the `],
				[/* reference */ 'r', `java.nio.file.Files#getFileAttributeView(java.nio.file.Path,java.lang.Class,java.nio.file.LinkOption...)`, `Files.getFileAttributeView(java.nio.file.Path, java.lang.Class<V>, java.nio.file.LinkOption...)`],
				[/* text */ 't', `
 method.`]
			],
			[/* parameters */
				[/* parameter */ 'path', [/* parameter description */
					[/* text */ 't', `the path to the file`]
				]],
				[/* parameter */ 'type', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `Class`],
					[/* text */ 't', ` object corresponding to the file attribute view`]
				]],
				[/* parameter */ 'options', [/* parameter description */
					[/* text */ 't', `options indicating how symbolic links are handled`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `a file attribute view of the specified type, or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if
          the attribute view type is not available`]
			]
		]],
		[/* method */ 'isHidden(java.nio.file.Path)', [
			[/* method description */
				[/* text */ 't', `Tells whether or not a file is considered `],
				[/* text */ 't', `hidden`],
				[/* text */ 't', `. This method
 works in exactly the manner specified by the `],
				[/* reference */ 'r', `java.nio.file.Files#isHidden(java.nio.file.Path)`, `Files.isHidden(java.nio.file.Path)`],
				[/* text */ 't', `
 method.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method is invoked by the `],
					[/* reference */ 'r', `java.nio.file.Files#isHidden(java.nio.file.Path)`, `isHidden`],
					[/* text */ 't', ` method.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'path', [/* parameter description */
					[/* text */ 't', `the path to the file to test`]
				]]
			],
			[/* throws */
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
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the file is considered hidden`]
			]
		]],
		[/* method */ 'isSameFile(java.nio.file.Path,java.nio.file.Path)', [
			[/* method description */
				[/* text */ 't', `Tests if two paths locate the same file. This method works in exactly the
 manner specified by the `],
				[/* reference */ 'r', `java.nio.file.Files#isSameFile(java.nio.file.Path,java.nio.file.Path)`, `Files.isSameFile(java.nio.file.Path, java.nio.file.Path)`],
				[/* text */ 't', ` method.`]
			],
			[/* parameters */
				[/* parameter */ 'path', [/* parameter description */
					[/* text */ 't', `one path to the file`]
				]],
				[/* parameter */ 'path2', [/* parameter description */
					[/* text */ 't', `the other path`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `In the case of the default provider, and a security manager is
          installed, the `],
					[/* reference */ 'r', `java.lang.SecurityManager#checkRead(java.lang.String)`, `checkRead`],
					[/* text */ 't', `
          method is invoked to check read access to both files.`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if, and only if, the two paths locate the same file`]
			]
		]],
		[/* method */ 'getScheme()', [
			[/* method description */
				[/* text */ 't', `Returns the URI scheme that identifies this provider.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `The URI scheme`]
			]
		]],
		[/* method */ 'newByteChannel(java.nio.file.Path,java.util.Set,java.nio.file.attribute.FileAttribute...)', [
			[/* method description */
				[/* text */ 't', `Opens or creates a file, returning a seekable byte channel to access the
 file. This method works in exactly the manner specified by the `],
				[/* reference */ 'r', `java.nio.file.Files#newByteChannel(java.nio.file.Path,java.util.Set,java.nio.file.attribute.FileAttribute...)`, `Files.newByteChannel(Path,Set,FileAttribute[])`],
				[/* text */ 't', ` method.`]
			],
			[/* parameters */
				[/* parameter */ 'path', [/* parameter description */
					[/* text */ 't', `the path to the file to open or create`]
				]],
				[/* parameter */ 'options', [/* parameter description */
					[/* text */ 't', `options specifying how the file is opened`]
				]],
				[/* parameter */ 'attrs', [/* parameter description */
					[/* text */ 't', `an optional list of file attributes to set atomically when
          creating the file`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the set contains an invalid combination of options`]
				]],
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if an unsupported open option is specified or the array contains
          attributes that cannot be set atomically when creating the file`]
				]],
				[/* throw */ 'java.nio.file.FileAlreadyExistsException', [/* throw description */
					[/* text */ 't', `If a file of that name already exists and the `],
					[/* reference */ 'r', `java.nio.file.StandardOpenOption#CREATE_NEW`, `CREATE_NEW`],
					[/* text */ 't', ` option is specified
          and the file is being opened for writing
          `],
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
          method is invoked to check read access to the path if the file is
          opened for reading. The `],
					[/* reference */ 'r', `java.lang.SecurityManager#checkWrite(java.lang.String)`, `checkWrite`],
					[/* text */ 't', ` method is invoked to check write access to the path
          if the file is opened for writing. The `],
					[/* reference */ 'r', `java.lang.SecurityManager#checkDelete(java.lang.String)`, `checkDelete`],
					[/* text */ 't', ` method is
          invoked to check delete access if the file is opened with the
          `],
					[/* inline code block */ 'i', `DELETE_ON_CLOSE`],
					[/* text */ 't', ` option.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a new seekable byte channel`]
			]
		]],
		[/* method */ 'newDirectoryStream(java.nio.file.Path,java.nio.file.DirectoryStream.Filter)', [
			[/* method description */
				[/* text */ 't', `Opens a directory, returning a `],
				[/* inline code block */ 'i', `DirectoryStream`],
				[/* text */ 't', ` to iterate over
 the entries in the directory. This method works in exactly the manner
 specified by the `],
				[/* reference */ 'r', `java.nio.file.Files#newDirectoryStream(java.nio.file.Path,java.nio.file.DirectoryStream.Filter)`, `Files.newDirectoryStream(java.nio.file.Path, java.nio.file.DirectoryStream.Filter)`],
				[/* text */ 't', `
 method.`]
			],
			[/* parameters */
				[/* parameter */ 'dir', [/* parameter description */
					[/* text */ 't', `the path to the directory`]
				]],
				[/* parameter */ 'filter', [/* parameter description */
					[/* text */ 't', `the directory stream filter`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.nio.file.NotDirectoryException', [/* throw description */
					[/* text */ 't', `if the file could not otherwise be opened because it is not
          a directory `],
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
          method is invoked to check read access to the directory.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a new and open `],
				[/* inline code block */ 'i', `DirectoryStream`],
				[/* text */ 't', ` object`]
			]
		]],
		[/* method */ 'getFileStore(java.nio.file.Path)', [
			[/* method description */
				[/* text */ 't', `Returns the `],
				[/* reference */ 'r', `java.nio.file.FileStore`, `FileStore`],
				[/* text */ 't', ` representing the file store where a file
 is located. This method works in exactly the manner specified by the
 `],
				[/* reference */ 'r', `java.nio.file.Files#getFileStore(java.nio.file.Path)`, `Files.getFileStore(java.nio.file.Path)`],
				[/* text */ 't', ` method.`]
			],
			[/* parameters */
				[/* parameter */ 'path', [/* parameter description */
					[/* text */ 't', `the path to the file`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `In the case of the default provider, and a security manager is
          installed, the `],
					[/* reference */ 'r', `java.lang.SecurityManager#checkRead(java.lang.String)`, `checkRead`],
					[/* text */ 't', `
          method is invoked to check read access to the file, and in
          addition it checks
          `],
					[/* reference */ 'r', `java.lang.RuntimePermission`, `RuntimePermission`],
					[/* inline code block */ 'i', `("getFileStoreAttributes")`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the file store where the file is stored`]
			]
		]],
		[/* method */ 'getFileSystem(java.net.URI)', [
			[/* method description */
				[/* text */ 't', `Returns an existing `],
				[/* inline code block */ 'i', `FileSystem`],
				[/* text */ 't', ` created by this provider.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method returns a reference to a `],
					[/* inline code block */ 'i', `FileSystem`],
					[/* text */ 't', ` that was
 created by invoking the `],
					[/* reference */ 'r', `#newFileSystem(java.net.URI,java.util.Map)`, `newFileSystem(URI,Map)`],
					[/* text */ 't', `
 method. File systems created the `],
					[/* reference */ 'r', `#newFileSystem(java.nio.file.Path,java.util.Map)`, `newFileSystem(Path,Map)`],
					[/* text */ 't', ` method are not returned by this method.
 The file system is identified by its `],
					[/* inline code block */ 'i', `URI`],
					[/* text */ 't', `. Its exact form
 is highly provider dependent. In the case of the default provider the URI's
 path component is `],
					[/* inline code block */ 'i', `"/"`],
					[/* text */ 't', ` and the authority, query and fragment components
 are undefined (Undefined components are represented by `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `).

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` Once a file system created by this provider is `],
					[/* reference */ 'r', `java.nio.file.FileSystem#close()`, `closed`],
					[/* text */ 't', ` it is provider-dependent if this
 method returns a reference to the closed file system or throws `],
					[/* reference */ 'r', `java.nio.file.FileSystemNotFoundException`, `FileSystemNotFoundException`],
					[/* text */ 't', `. If the provider allows a new file system to
 be created with the same URI as a file system it previously created then
 this method throws the exception if invoked after the file system is
 closed (and before a new instance is created by the `],
					[/* reference */ 'r', `#newFileSystem(java.net.URI,java.util.Map)`, `newFileSystem`],
					[/* text */ 't', ` method).

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` If a security manager is installed then a provider implementation
 may require to check a permission before returning a reference to an
 existing file system. In the case of the `],
					[/* reference */ 'r', `java.nio.file.FileSystems#getDefault()`, `default`],
					[/* text */ 't', ` file system, no permission check is required.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'uri', [/* parameter description */
					[/* text */ 't', `URI reference`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If the pre-conditions for the `],
					[/* inline code block */ 'i', `uri`],
					[/* text */ 't', ` parameter aren't met`]
				]],
				[/* throw */ 'java.nio.file.FileSystemNotFoundException', [/* throw description */
					[/* text */ 't', `If the file system does not exist`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If a security manager is installed and it denies an unspecified
          permission.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The file system`]
			]
		]],
		[/* method */ 'newFileSystem(java.net.URI,java.util.Map)', [
			[/* method description */
				[/* text */ 't', `Constructs a new `],
				[/* inline code block */ 'i', `FileSystem`],
				[/* text */ 't', ` object identified by a URI. This
 method is invoked by the `],
				[/* reference */ 'r', `java.nio.file.FileSystems#newFileSystem(java.net.URI,java.util.Map)`, `FileSystems.newFileSystem(URI,Map)`],
				[/* text */ 't', `
 method to open a new file system identified by a URI.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The `],
					[/* inline code block */ 'i', `uri`],
					[/* text */ 't', ` parameter is an absolute, hierarchical URI, with a
 scheme equal (without regard to case) to the scheme supported by this
 provider. The exact form of the URI is highly provider dependent. The
 `],
					[/* inline code block */ 'i', `env`],
					[/* text */ 't', ` parameter is a map of provider specific properties to configure
 the file system.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` This method throws `],
					[/* reference */ 'r', `java.nio.file.FileSystemAlreadyExistsException`, `FileSystemAlreadyExistsException`],
					[/* text */ 't', ` if the
 file system already exists because it was previously created by an
 invocation of this method. Once a file system is `],
					[/* reference */ 'r', `java.nio.file.FileSystem#close()`, `closed`],
					[/* text */ 't', ` it is provider-dependent if the
 provider allows a new file system to be created with the same URI as a
 file system it previously created.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'uri', [/* parameter description */
					[/* text */ 't', `URI reference`]
				]],
				[/* parameter */ 'env', [/* parameter description */
					[/* text */ 't', `A map of provider specific properties to configure the file system;
          may be empty`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If the pre-conditions for the `],
					[/* inline code block */ 'i', `uri`],
					[/* text */ 't', ` parameter aren't met,
          or the `],
					[/* inline code block */ 'i', `env`],
					[/* text */ 't', ` parameter does not contain properties required
          by the provider, or a property value is invalid`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `An I/O error occurs creating the file system`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If a security manager is installed and it denies an unspecified
          permission required by the file system provider implementation`]
				]],
				[/* throw */ 'java.nio.file.FileSystemAlreadyExistsException', [/* throw description */
					[/* text */ 't', `If the file system has already been created`]
				]]
			],
			[/* return description */
				[/* text */ 't', `A new file system`]
			]
		]],
		[/* method */ 'getPath(java.net.URI)', [
			[/* method description */
				[/* text */ 't', `Return a `],
				[/* inline code block */ 'i', `Path`],
				[/* text */ 't', ` object by converting the given `],
				[/* reference */ 'r', `java.net.URI`, `URI`],
				[/* text */ 't', `. The
 resulting `],
				[/* inline code block */ 'i', `Path`],
				[/* text */ 't', ` is associated with a `],
				[/* reference */ 'r', `java.nio.file.FileSystem`, `FileSystem`],
				[/* text */ 't', ` that
 already exists or is constructed automatically.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The exact form of the URI is file system provider dependent. In the
 case of the default provider, the URI scheme is `],
					[/* inline code block */ 'i', `"file"`],
					[/* text */ 't', ` and the
 given URI has a non-empty path component, and undefined query, and
 fragment components. The resulting `],
					[/* inline code block */ 'i', `Path`],
					[/* text */ 't', ` is associated with the
 default `],
					[/* reference */ 'r', `java.nio.file.FileSystems#getDefault()`, `default`],
					[/* text */ 't', ` `],
					[/* inline code block */ 'i', `FileSystem`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` If a security manager is installed then a provider implementation
 may require to check a permission. In the case of the `],
					[/* reference */ 'r', `java.nio.file.FileSystems#getDefault()`, `default`],
					[/* text */ 't', ` file system, no permission check is
 required.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'uri', [/* parameter description */
					[/* text */ 't', `The URI to convert`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If the URI scheme does not identify this provider or other
          preconditions on the uri parameter do not hold`]
				]],
				[/* throw */ 'java.nio.file.FileSystemNotFoundException', [/* throw description */
					[/* text */ 't', `The file system, identified by the URI, does not exist and
          cannot be created automatically`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If a security manager is installed and it denies an unspecified
          permission.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The resulting `],
				[/* inline code block */ 'i', `Path`]
			]
		]],
		[/* method */ 'readAttributes(java.nio.file.Path,java.lang.String,java.nio.file.LinkOption...)', [
			[/* method description */
				[/* text */ 't', `Reads a set of file attributes as a bulk operation. This method works in
 exactly the manner specified by the `],
				[/* reference */ 'r', `java.nio.file.Files#readAttributes(java.nio.file.Path,java.lang.String,java.nio.file.LinkOption...)`, `Files.readAttributes(Path,String,LinkOption[])`],
				[/* text */ 't', ` method.`]
			],
			[/* parameters */
				[/* parameter */ 'path', [/* parameter description */
					[/* text */ 't', `the path to the file`]
				]],
				[/* parameter */ 'attributes', [/* parameter description */
					[/* text */ 't', `the attributes to read`]
				]],
				[/* parameter */ 'options', [/* parameter description */
					[/* text */ 't', `options indicating how symbolic links are handled`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the attribute view is not available`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if no attributes are specified or an unrecognized attributes is
          specified`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If an I/O error occurs`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `In the case of the default provider, and a security manager is
          installed, its `],
					[/* reference */ 'r', `java.lang.SecurityManager#checkRead(java.lang.String)`, `checkRead`],
					[/* text */ 't', `
          method denies read access to the file. If this method is invoked
          to read security sensitive attributes then the security manager
          may be invoke to check for additional permissions.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a map of the attributes returned; may be empty. The map's keys
          are the attribute names, its values are the attribute values`]
			]
		]],
		[/* method */ 'checkAccess(java.nio.file.Path,java.nio.file.AccessMode...)', [
			[/* method description */
				[/* text */ 't', `Checks the existence, and optionally the accessibility, of a file.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method may be used by the `],
					[/* reference */ 'r', `java.nio.file.Files#isReadable(java.nio.file.Path)`, `isReadable`],
					[/* text */ 't', `,
 `],
					[/* reference */ 'r', `java.nio.file.Files#isWritable(java.nio.file.Path)`, `isWritable`],
					[/* text */ 't', ` and `],
					[/* reference */ 'r', `java.nio.file.Files#isExecutable(java.nio.file.Path)`, `isExecutable`],
					[/* text */ 't', ` methods to check the accessibility of a file.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` This method checks the existence of a file and that this Java virtual
 machine has appropriate privileges that would allow it access the file
 according to all of access modes specified in the `],
					[/* inline code block */ 'i', `modes`],
					[/* text */ 't', ` parameter
 as follows:

 `]
				]],
				[/* table */ 'tbl',
					[/* caption */ 'tc'],
					[/* table header */ 'th', [
						[/* table row */ 'tr', [
							[/* table header cell */ 'thc', [
								[/* text */ 't', `Value`]
							]],
							[/* table header cell */ 'thc', [
								[/* text */ 't', `Description`]
							]]
						]]
					]],
					[/* table body */ 'tb', [
						[/* table row */ 'tr', [
							[/* table header cell */ 'thc', [
								[/* text */ 't', ` `],
								[/* reference */ 'r', `java.nio.file.AccessMode#READ`, `READ`],
								[/* text */ 't', ` `]
							]],
							[/* table cell */ 'tbc', [
								[/* text */ 't', ` Checks that the file exists and that the Java virtual machine has
     permission to read the file. `]
							]]
						]],
						[/* table row */ 'tr', [
							[/* table header cell */ 'thc', [
								[/* text */ 't', ` `],
								[/* reference */ 'r', `java.nio.file.AccessMode#WRITE`, `WRITE`],
								[/* text */ 't', ` `]
							]],
							[/* table cell */ 'tbc', [
								[/* text */ 't', ` Checks that the file exists and that the Java virtual machine has
     permission to write to the file, `]
							]]
						]],
						[/* table row */ 'tr', [
							[/* table header cell */ 'thc', [
								[/* text */ 't', ` `],
								[/* reference */ 'r', `java.nio.file.AccessMode#EXECUTE`, `EXECUTE`],
								[/* text */ 't', ` `]
							]],
							[/* table cell */ 'tbc', [
								[/* text */ 't', ` Checks that the file exists and that the Java virtual machine has
     permission to `],
								[/* reference */ 'r', `java.lang.Runtime#exec(java.lang.String)`, `execute`],
								[/* text */ 't', ` the file. The semantics
     may differ when checking access to a directory. For example, on UNIX
     systems, checking for `],
								[/* inline code block */ 'i', `EXECUTE`],
								[/* text */ 't', ` access checks that the Java
     virtual machine has permission to search the directory in order to
     access file or subdirectories. `]
							]]
						]]
					]],
				],
				[/* text */ 't', `

 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', ` If the `],
					[/* inline code block */ 'i', `modes`],
					[/* text */ 't', ` parameter is of length zero, then the existence
 of the file is checked.

 `]
				]],
				[/* block */ 'b', ` This method follows symbolic links if the file referenced by this
 object is a symbolic link. Depending on the implementation, this method
 may require to read file permissions, access control lists, or other
 file attributes in order to check the effective access to the file. To
 determine the effective access to a file may require access to several
 attributes and so in some implementations this method may not be atomic
 with respect to other file system operations.`]
			],
			[/* parameters */
				[/* parameter */ 'path', [/* parameter description */
					[/* text */ 't', `the path to the file to check`]
				]],
				[/* parameter */ 'modes', [/* parameter description */
					[/* text */ 't', `The access modes to check; may have zero elements`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `an implementation is required to support checking for
          `],
					[/* inline code block */ 'i', `READ`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `WRITE`],
					[/* text */ 't', `, and `],
					[/* inline code block */ 'i', `EXECUTE`],
					[/* text */ 't', ` access. This
          exception is specified to allow for the `],
					[/* inline code block */ 'i', `Access`],
					[/* text */ 't', ` enum to
          be extended in future releases.`]
				]],
				[/* throw */ 'java.nio.file.NoSuchFileException', [/* throw description */
					[/* text */ 't', `if a file does not exist `],
					[/* text */ 't', `(optional specific exception)`]
				]],
				[/* throw */ 'java.nio.file.AccessDeniedException', [/* throw description */
					[/* text */ 't', `the requested access would be denied or the access cannot be
          determined because the Java virtual machine has insufficient
          privileges or other reasons. `],
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
          is invoked when checking read access to the file or only the
          existence of the file, the `],
					[/* reference */ 'r', `java.lang.SecurityManager#checkWrite(java.lang.String)`, `checkWrite`],
					[/* text */ 't', ` is invoked when checking write access to the file,
          and `],
					[/* reference */ 'r', `java.lang.SecurityManager#checkExec(java.lang.String)`, `checkExec`],
					[/* text */ 't', ` is invoked
          when checking execute access.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'copy(java.nio.file.Path,java.nio.file.Path,java.nio.file.CopyOption...)', [
			[/* method description */
				[/* text */ 't', `Copy a file to a target file. This method works in exactly the manner
 specified by the `],
				[/* reference */ 'r', `java.nio.file.Files#copy(java.nio.file.Path,java.nio.file.Path,java.nio.file.CopyOption...)`, `Files.copy(Path,Path,CopyOption[])`],
				[/* text */ 't', ` method
 except that both the source and target paths must be associated with
 this provider.`]
			],
			[/* parameters */
				[/* parameter */ 'source', [/* parameter description */
					[/* text */ 't', `the path to the file to copy`]
				]],
				[/* parameter */ 'target', [/* parameter description */
					[/* text */ 't', `the path to the target file`]
				]],
				[/* parameter */ 'options', [/* parameter description */
					[/* text */ 't', `options specifying how the copy should be done`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the array contains a copy option that is not supported`]
				]],
				[/* throw */ 'java.nio.file.FileAlreadyExistsException', [/* throw description */
					[/* text */ 't', `if the target file exists but cannot be replaced because the
          `],
					[/* inline code block */ 'i', `REPLACE_EXISTING`],
					[/* text */ 't', ` option is not specified `],
					[/* text */ 't', `(optional
          specific exception)`]
				]],
				[/* throw */ 'java.nio.file.DirectoryNotEmptyException', [/* throw description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `REPLACE_EXISTING`],
					[/* text */ 't', ` option is specified but the file
          cannot be replaced because it is a non-empty directory
          `],
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
          method is invoked to check read access to the source file, the
          `],
					[/* reference */ 'r', `java.lang.SecurityManager#checkWrite(java.lang.String)`, `checkWrite`],
					[/* text */ 't', ` is invoked
          to check write access to the target file. If a symbolic link is
          copied the security manager is invoked to check `],
					[/* reference */ 'r', `java.nio.file.LinkPermission`, `LinkPermission`],
					[/* inline code block */ 'i', `("symbolic")`],
					[/* text */ 't', `.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'createDirectory(java.nio.file.Path,java.nio.file.attribute.FileAttribute...)', [
			[/* method description */
				[/* text */ 't', `Creates a new directory. This method works in exactly the manner
 specified by the `],
				[/* reference */ 'r', `java.nio.file.Files#createDirectory(java.nio.file.Path,java.nio.file.attribute.FileAttribute...)`, `Files.createDirectory(java.nio.file.Path, java.nio.file.attribute.FileAttribute<?>...)`],
				[/* text */ 't', ` method.`]
			],
			[/* parameters */
				[/* parameter */ 'dir', [/* parameter description */
					[/* text */ 't', `the directory to create`]
				]],
				[/* parameter */ 'attrs', [/* parameter description */
					[/* text */ 't', `an optional list of file attributes to set atomically when
          creating the directory`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the array contains an attribute that cannot be set atomically
          when creating the directory`]
				]],
				[/* throw */ 'java.nio.file.FileAlreadyExistsException', [/* throw description */
					[/* text */ 't', `if a directory could not otherwise be created because a file of
          that name already exists `],
					[/* text */ 't', `(optional specific exception)`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs or the parent directory does not exist`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `In the case of the default provider, and a security manager is
          installed, the `],
					[/* reference */ 'r', `java.lang.SecurityManager#checkWrite(java.lang.String)`, `checkWrite`],
					[/* text */ 't', `
          method is invoked to check write access to the new directory.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'delete(java.nio.file.Path)', [
			[/* method description */
				[/* text */ 't', `Deletes a file. This method works in exactly the  manner specified by the
 `],
				[/* reference */ 'r', `java.nio.file.Files#delete(java.nio.file.Path)`, `Files.delete(java.nio.file.Path)`],
				[/* text */ 't', ` method.`]
			],
			[/* parameters */
				[/* parameter */ 'path', [/* parameter description */
					[/* text */ 't', `the path to the file to delete`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.nio.file.NoSuchFileException', [/* throw description */
					[/* text */ 't', `if the file does not exist `],
					[/* text */ 't', `(optional specific exception)`]
				]],
				[/* throw */ 'java.nio.file.DirectoryNotEmptyException', [/* throw description */
					[/* text */ 't', `if the file is a directory and could not otherwise be deleted
          because the directory is not empty `],
					[/* text */ 't', `(optional specific
          exception)`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `In the case of the default provider, and a security manager is
          installed, the `],
					[/* reference */ 'r', `java.lang.SecurityManager#checkDelete(java.lang.String)`, `SecurityManager.checkDelete(String)`],
					[/* text */ 't', ` method
          is invoked to check delete access to the file`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'move(java.nio.file.Path,java.nio.file.Path,java.nio.file.CopyOption...)', [
			[/* method description */
				[/* text */ 't', `Move or rename a file to a target file. This method works in exactly the
 manner specified by the `],
				[/* reference */ 'r', `java.nio.file.Files#move(java.nio.file.Path,java.nio.file.Path,java.nio.file.CopyOption...)`, `Files.move(java.nio.file.Path, java.nio.file.Path, java.nio.file.CopyOption...)`],
				[/* text */ 't', ` method except that both the
 source and target paths must be associated with this provider.`]
			],
			[/* parameters */
				[/* parameter */ 'source', [/* parameter description */
					[/* text */ 't', `the path to the file to move`]
				]],
				[/* parameter */ 'target', [/* parameter description */
					[/* text */ 't', `the path to the target file`]
				]],
				[/* parameter */ 'options', [/* parameter description */
					[/* text */ 't', `options specifying how the move should be done`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the array contains a copy option that is not supported`]
				]],
				[/* throw */ 'java.nio.file.FileAlreadyExistsException', [/* throw description */
					[/* text */ 't', `if the target file exists but cannot be replaced because the
          `],
					[/* inline code block */ 'i', `REPLACE_EXISTING`],
					[/* text */ 't', ` option is not specified `],
					[/* text */ 't', `(optional
          specific exception)`]
				]],
				[/* throw */ 'java.nio.file.DirectoryNotEmptyException', [/* throw description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `REPLACE_EXISTING`],
					[/* text */ 't', ` option is specified but the file
          cannot be replaced because it is a non-empty directory
          `],
					[/* text */ 't', `(optional specific exception)`]
				]],
				[/* throw */ 'java.nio.file.AtomicMoveNotSupportedException', [/* throw description */
					[/* text */ 't', `if the options array contains the `],
					[/* inline code block */ 'i', `ATOMIC_MOVE`],
					[/* text */ 't', ` option but
          the file cannot be moved as an atomic file system operation.`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `In the case of the default provider, and a security manager is
          installed, the `],
					[/* reference */ 'r', `java.lang.SecurityManager#checkWrite(java.lang.String)`, `checkWrite`],
					[/* text */ 't', `
          method is invoked to check write access to both the source and
          target file.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'setAttribute(java.nio.file.Path,java.lang.String,java.lang.Object,java.nio.file.LinkOption...)', [
			[/* method description */
				[/* text */ 't', `Sets the value of a file attribute. This method works in exactly the
 manner specified by the `],
				[/* reference */ 'r', `java.nio.file.Files#setAttribute(java.nio.file.Path,java.lang.String,java.lang.Object,java.nio.file.LinkOption...)`, `Files.setAttribute(java.nio.file.Path, java.lang.String, java.lang.Object, java.nio.file.LinkOption...)`],
				[/* text */ 't', ` method.`]
			],
			[/* parameters */
				[/* parameter */ 'path', [/* parameter description */
					[/* text */ 't', `the path to the file`]
				]],
				[/* parameter */ 'attribute', [/* parameter description */
					[/* text */ 't', `the attribute to set`]
				]],
				[/* parameter */ 'value', [/* parameter description */
					[/* text */ 't', `the attribute value`]
				]],
				[/* parameter */ 'options', [/* parameter description */
					[/* text */ 't', `options indicating how symbolic links are handled`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the attribute view is not available`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the attribute name is not specified, or is not recognized, or
          the attribute value is of the correct type but has an
          inappropriate value`]
				]],
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `If the attribute value is not of the expected type or is a
          collection containing elements that are not of the expected
          type`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If an I/O error occurs`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `In the case of the default provider, and a security manager is
          installed, its `],
					[/* reference */ 'r', `java.lang.SecurityManager#checkWrite(java.lang.String)`, `checkWrite`],
					[/* text */ 't', `
          method denies write access to the file. If this method is invoked
          to set security sensitive attributes then the security manager
          may be invoked to check for additional permissions.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'deleteIfExists(java.nio.file.Path)', [
			[/* method description */
				[/* text */ 't', `Deletes a file if it exists. This method works in exactly the manner
 specified by the `],
				[/* reference */ 'r', `java.nio.file.Files#deleteIfExists(java.nio.file.Path)`, `Files.deleteIfExists(java.nio.file.Path)`],
				[/* text */ 't', ` method.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The default implementation of this method simply invokes `],
					[/* reference */ 'r', `#delete(java.nio.file.Path)`, `delete(java.nio.file.Path)`],
					[/* text */ 't', ` ignoring the `],
					[/* inline code block */ 'i', `NoSuchFileException`],
					[/* text */ 't', ` when the file does not
 exist. It may be overridden where appropriate.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'path', [/* parameter description */
					[/* text */ 't', `the path to the file to delete`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.nio.file.DirectoryNotEmptyException', [/* throw description */
					[/* text */ 't', `if the file is a directory and could not otherwise be deleted
          because the directory is not empty `],
					[/* text */ 't', `(optional specific
          exception)`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `In the case of the default provider, and a security manager is
          installed, the `],
					[/* reference */ 'r', `java.lang.SecurityManager#checkDelete(java.lang.String)`, `SecurityManager.checkDelete(String)`],
					[/* text */ 't', ` method
          is invoked to check delete access to the file`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the file was deleted by this method; `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` if the file could not be deleted because it did not
          exist`]
			]
		]],
		[/* method */ 'newInputStream(java.nio.file.Path,java.nio.file.OpenOption...)', [
			[/* method description */
				[/* text */ 't', `Opens a file, returning an input stream to read from the file. This
 method works in exactly the manner specified by the `],
				[/* reference */ 'r', `java.nio.file.Files#newInputStream(java.nio.file.Path,java.nio.file.OpenOption...)`, `Files.newInputStream(java.nio.file.Path, java.nio.file.OpenOption...)`],
				[/* text */ 't', ` method.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The default implementation of this method opens a channel to the file
 as if by invoking the `],
					[/* reference */ 'r', `#newByteChannel(java.nio.file.Path,java.util.Set,java.nio.file.attribute.FileAttribute...)`, `newByteChannel(java.nio.file.Path, java.util.Set<? extends java.nio.file.OpenOption>, java.nio.file.attribute.FileAttribute<?>...)`],
					[/* text */ 't', ` method and constructs a
 stream that reads bytes from the channel. This method should be overridden
 where appropriate.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'path', [/* parameter description */
					[/* text */ 't', `the path to the file to open`]
				]],
				[/* parameter */ 'options', [/* parameter description */
					[/* text */ 't', `options specifying how the file is opened`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if an invalid combination of options is specified`]
				]],
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if an unsupported option is specified`]
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
				[/* text */ 't', `a new input stream`]
			]
		]],
		[/* method */ 'newOutputStream(java.nio.file.Path,java.nio.file.OpenOption...)', [
			[/* method description */
				[/* text */ 't', `Opens or creates a file, returning an output stream that may be used to
 write bytes to the file. This method works in exactly the manner
 specified by the `],
				[/* reference */ 'r', `java.nio.file.Files#newOutputStream(java.nio.file.Path,java.nio.file.OpenOption...)`, `Files.newOutputStream(java.nio.file.Path, java.nio.file.OpenOption...)`],
				[/* text */ 't', ` method.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The default implementation of this method opens a channel to the file
 as if by invoking the `],
					[/* reference */ 'r', `#newByteChannel(java.nio.file.Path,java.util.Set,java.nio.file.attribute.FileAttribute...)`, `newByteChannel(java.nio.file.Path, java.util.Set<? extends java.nio.file.OpenOption>, java.nio.file.attribute.FileAttribute<?>...)`],
					[/* text */ 't', ` method and constructs a
 stream that writes bytes to the channel. This method should be overridden
 where appropriate.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'path', [/* parameter description */
					[/* text */ 't', `the path to the file to open or create`]
				]],
				[/* parameter */ 'options', [/* parameter description */
					[/* text */ 't', `options specifying how the file is opened`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `options`],
					[/* text */ 't', ` contains an invalid combination of options`]
				]],
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if an unsupported option is specified`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs`]
				]],
				[/* throw */ 'java.nio.file.FileAlreadyExistsException', [/* throw description */
					[/* text */ 't', `If a file of that name already exists and the `],
					[/* reference */ 'r', `java.nio.file.StandardOpenOption#CREATE_NEW`, `CREATE_NEW`],
					[/* text */ 't', ` option is specified
          `],
					[/* text */ 't', `(optional specific exception)`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `In the case of the default provider, and a security manager is
          installed, the `],
					[/* reference */ 'r', `java.lang.SecurityManager#checkWrite(java.lang.String)`, `checkWrite`],
					[/* text */ 't', `
          method is invoked to check write access to the file. The `],
					[/* reference */ 'r', `java.lang.SecurityManager#checkDelete(java.lang.String)`, `checkDelete`],
					[/* text */ 't', ` method is
          invoked to check delete access if the file is opened with the
          `],
					[/* inline code block */ 'i', `DELETE_ON_CLOSE`],
					[/* text */ 't', ` option.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a new output stream`]
			]
		]],
		[/* method */ 'newAsynchronousFileChannel(java.nio.file.Path,java.util.Set,java.util.concurrent.ExecutorService,java.nio.file.attribute.FileAttribute...)', [
			[/* method description */
				[/* text */ 't', `Opens or creates a file for reading and/or writing, returning an
 asynchronous file channel to access the file. This method works in
 exactly the manner specified by the `],
				[/* reference */ 'r', `java.nio.channels.AsynchronousFileChannel#open(java.nio.file.Path,java.util.Set,java.util.concurrent.ExecutorService,java.nio.file.attribute.FileAttribute...)`, `AsynchronousFileChannel.open`],
				[/* text */ 't', ` method.
 A provider that does not support all the features required to construct
 an asynchronous file channel throws `],
				[/* inline code block */ 'i', `UnsupportedOperationException`],
				[/* text */ 't', `.
 The default provider is required to support the creation of asynchronous
 file channels. When not overridden, the default implementation of this
 method throws `],
				[/* inline code block */ 'i', `UnsupportedOperationException`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'path', [/* parameter description */
					[/* text */ 't', `the path of the file to open or create`]
				]],
				[/* parameter */ 'options', [/* parameter description */
					[/* text */ 't', `options specifying how the file is opened`]
				]],
				[/* parameter */ 'executor', [/* parameter description */
					[/* text */ 't', `the thread pool or `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` to associate the channel with
          the default thread pool`]
				]],
				[/* parameter */ 'attrs', [/* parameter description */
					[/* text */ 't', `an optional list of file attributes to set atomically when
          creating the file`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If the set contains an invalid combination of options`]
				]],
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `If this provider that does not support creating asynchronous file
          channels, or an unsupported open option or file attribute is
          specified`]
				]],
				[/* throw */ 'java.nio.file.FileAlreadyExistsException', [/* throw description */
					[/* text */ 't', `If a file of that name already exists and the `],
					[/* reference */ 'r', `java.nio.file.StandardOpenOption#CREATE_NEW`, `CREATE_NEW`],
					[/* text */ 't', ` option is specified
          and the file is being opened for writing
          `],
					[/* text */ 't', `(optional specific exception)`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If an I/O error occurs`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `In the case of the default file system, the `],
					[/* reference */ 'r', `java.lang.SecurityManager#checkRead(java.lang.String)`, `SecurityManager.checkRead(String)`],
					[/* text */ 't', ` method is invoked to check
          read access if the file is opened for reading. The `],
					[/* reference */ 'r', `java.lang.SecurityManager#checkWrite(java.lang.String)`, `SecurityManager.checkWrite(String)`],
					[/* text */ 't', ` method is invoked to check
          write access if the file is opened for writing`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a new asynchronous file channel`]
			]
		]],
		[/* method */ 'newFileChannel(java.nio.file.Path,java.util.Set,java.nio.file.attribute.FileAttribute...)', [
			[/* method description */
				[/* text */ 't', `Opens or creates a file for reading and/or writing, returning a file
 channel to access the file. This method works in exactly the manner
 specified by the `],
				[/* reference */ 'r', `java.nio.channels.FileChannel#open(java.nio.file.Path,java.util.Set,java.nio.file.attribute.FileAttribute...)`, `FileChannel.open`],
				[/* text */ 't', ` method. A provider that does not support all the
 features required to construct a file channel throws `],
				[/* inline code block */ 'i', `UnsupportedOperationException`],
				[/* text */ 't', `. The default provider is required to
 support the creation of file channels. When not overridden, the default
 implementation throws `],
				[/* inline code block */ 'i', `UnsupportedOperationException`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'path', [/* parameter description */
					[/* text */ 't', `the path of the file to open or create`]
				]],
				[/* parameter */ 'options', [/* parameter description */
					[/* text */ 't', `options specifying how the file is opened`]
				]],
				[/* parameter */ 'attrs', [/* parameter description */
					[/* text */ 't', `an optional list of file attributes to set atomically when
          creating the file`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If the set contains an invalid combination of options`]
				]],
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `If this provider that does not support creating file channels,
          or an unsupported open option or file attribute is specified`]
				]],
				[/* throw */ 'java.nio.file.FileAlreadyExistsException', [/* throw description */
					[/* text */ 't', `If a file of that name already exists and the `],
					[/* reference */ 'r', `java.nio.file.StandardOpenOption#CREATE_NEW`, `CREATE_NEW`],
					[/* text */ 't', ` option is specified
          and the file is being opened for writing
          `],
					[/* text */ 't', `(optional specific exception)`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If an I/O error occurs`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `In the case of the default file system, the `],
					[/* reference */ 'r', `java.lang.SecurityManager#checkRead(java.lang.String)`, `SecurityManager.checkRead(String)`],
					[/* text */ 't', ` method is invoked to check
          read access if the file is opened for reading. The `],
					[/* reference */ 'r', `java.lang.SecurityManager#checkWrite(java.lang.String)`, `SecurityManager.checkWrite(String)`],
					[/* text */ 't', ` method is invoked to check
          write access if the file is opened for writing`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a new file channel`]
			]
		]],
		[/* method */ 'newFileSystem(java.nio.file.Path,java.util.Map)', [
			[/* method description */
				[/* text */ 't', `Constructs a new `],
				[/* inline code block */ 'i', `FileSystem`],
				[/* text */ 't', ` to access the contents of a file as a
 file system.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method is intended for specialized providers of pseudo file
 systems where the contents of one or more files is treated as a file
 system. The `],
					[/* inline code block */ 'i', `env`],
					[/* text */ 't', ` parameter is a map of provider specific properties
 to configure the file system.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` If this provider does not support the creation of such file systems
 or if the provider does not recognize the file type of the given file then
 it throws `],
					[/* inline code block */ 'i', `UnsupportedOperationException`],
					[/* text */ 't', `. The default implementation
 of this method throws `],
					[/* inline code block */ 'i', `UnsupportedOperationException`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'path', [/* parameter description */
					[/* text */ 't', `The path to the file`]
				]],
				[/* parameter */ 'env', [/* parameter description */
					[/* text */ 't', `A map of provider specific properties to configure the file system;
          may be empty`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `If this provider does not support access to the contents as a
          file system or it does not recognize the file type of the
          given file`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If the `],
					[/* inline code block */ 'i', `env`],
					[/* text */ 't', ` parameter does not contain properties required
          by the provider, or a property value is invalid`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If an I/O error occurs`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If a security manager is installed and it denies an unspecified
          permission.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `A new file system`]
			]
		]],
		[/* method */ 'readSymbolicLink(java.nio.file.Path)', [
			[/* method description */
				[/* text */ 't', `Reads the target of a symbolic link. This method works in exactly the
 manner specified by the `],
				[/* reference */ 'r', `java.nio.file.Files#readSymbolicLink(java.nio.file.Path)`, `Files.readSymbolicLink(java.nio.file.Path)`],
				[/* text */ 't', ` method.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The default implementation of this method throws `],
					[/* inline code block */ 'i', `UnsupportedOperationException`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'link', [/* parameter description */
					[/* text */ 't', `the path to the symbolic link`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the implementation does not support symbolic links`]
				]],
				[/* throw */ 'java.nio.file.NotLinkException', [/* throw description */
					[/* text */ 't', `if the target could otherwise not be read because the file
          is not a symbolic link `],
					[/* text */ 't', `(optional specific exception)`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `In the case of the default provider, and a security manager
          is installed, it checks that `],
					[/* inline code block */ 'i', `FilePermission`],
					[/* text */ 't', ` has been
          granted with the "`],
					[/* inline code block */ 'i', `readlink`],
					[/* text */ 't', `" action to read the link.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The target of the symbolic link`]
			]
		]],
		[/* method */ 'installedProviders()', [
			[/* method description */
				[/* text */ 't', `Returns a list of the installed file system providers.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The first invocation of this method causes the default provider to be
 initialized (if not already initialized) and loads any other installed
 providers as described by the `],
					[/* reference */ 'r', `java.nio.file.FileSystems`, `FileSystems`],
					[/* text */ 't', ` class.`]
				]]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.util.ServiceConfigurationError', [/* throw description */
					[/* text */ 't', `When an error occurs while loading a service provider`]
				]]
			],
			[/* return description */
				[/* text */ 't', `An unmodifiable list of the installed file system providers. The
          list contains at least one element, that is the default file
          system provider`]
			]
		]],
		[/* method */ 'createLink(java.nio.file.Path,java.nio.file.Path)', [
			[/* method description */
				[/* text */ 't', `Creates a new link (directory entry) for an existing file. This method
 works in exactly the manner specified by the `],
				[/* reference */ 'r', `java.nio.file.Files#createLink(java.nio.file.Path,java.nio.file.Path)`, `Files.createLink(java.nio.file.Path, java.nio.file.Path)`],
				[/* text */ 't', `
 method.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The default implementation of this method throws `],
					[/* inline code block */ 'i', `UnsupportedOperationException`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'link', [/* parameter description */
					[/* text */ 't', `the link (directory entry) to create`]
				]],
				[/* parameter */ 'existing', [/* parameter description */
					[/* text */ 't', `a path to an existing file`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the implementation does not support adding an existing file
          to a directory`]
				]],
				[/* throw */ 'java.nio.file.FileAlreadyExistsException', [/* throw description */
					[/* text */ 't', `if the entry could not otherwise be created because a file of
          that name already exists `],
					[/* text */ 't', `(optional specific exception)`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `In the case of the default provider, and a security manager
          is installed, it denies `],
					[/* reference */ 'r', `java.nio.file.LinkPermission`, `LinkPermission`],
					[/* inline code block */ 'i', `("hard")`],
					[/* text */ 't', `
          or its `],
					[/* reference */ 'r', `java.lang.SecurityManager#checkWrite(java.lang.String)`, `checkWrite`],
					[/* text */ 't', `
          method denies write access to either the  link or the
          existing file.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'createSymbolicLink(java.nio.file.Path,java.nio.file.Path,java.nio.file.attribute.FileAttribute...)', [
			[/* method description */
				[/* text */ 't', `Creates a symbolic link to a target. This method works in exactly the
 manner specified by the `],
				[/* reference */ 'r', `java.nio.file.Files#createSymbolicLink(java.nio.file.Path,java.nio.file.Path,java.nio.file.attribute.FileAttribute...)`, `Files.createSymbolicLink(java.nio.file.Path, java.nio.file.Path, java.nio.file.attribute.FileAttribute<?>...)`],
				[/* text */ 't', ` method.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The default implementation of this method throws `],
					[/* inline code block */ 'i', `UnsupportedOperationException`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'link', [/* parameter description */
					[/* text */ 't', `the path of the symbolic link to create`]
				]],
				[/* parameter */ 'target', [/* parameter description */
					[/* text */ 't', `the target of the symbolic link`]
				]],
				[/* parameter */ 'attrs', [/* parameter description */
					[/* text */ 't', `the array of attributes to set atomically when creating the
          symbolic link`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the implementation does not support symbolic links or the
          array contains an attribute that cannot be set atomically when
          creating the symbolic link`]
				]],
				[/* throw */ 'java.nio.file.FileAlreadyExistsException', [/* throw description */
					[/* text */ 't', `if a file with the name already exists `],
					[/* text */ 't', `(optional specific
          exception)`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `In the case of the default provider, and a security manager
          is installed, it denies `],
					[/* reference */ 'r', `java.nio.file.LinkPermission`, `LinkPermission`],
					[/* inline code block */ 'i', `("symbolic")`],
					[/* text */ 't', `
          or its `],
					[/* reference */ 'r', `java.lang.SecurityManager#checkWrite(java.lang.String)`, `checkWrite`],
					[/* text */ 't', `
          method denies write access to the path of the symbolic link.`]
				]]
			],
			/* return */ UDF
		]]
	],
	/* enum values */ UDF
]);
