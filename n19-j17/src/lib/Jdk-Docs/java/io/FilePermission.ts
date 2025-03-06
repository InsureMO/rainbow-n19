import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.io.FilePermission', [
	[/* class description */
		[/* text */ 't', `This class represents access to a file or directory.  A FilePermission consists
 of a pathname and a set of actions valid for that pathname.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 Pathname is the pathname of the file or directory granted the specified
 actions. A pathname that ends in "/*" (where "/" is
 the file separator character, `],
			[/* inline code block */ 'i', `File.separatorChar`],
			[/* text */ 't', `) indicates
 all the files and directories contained in that directory. A pathname
 that ends with "/-" indicates (recursively) all files
 and subdirectories contained in that directory. Such a pathname is called
 a wildcard pathname. Otherwise, it's a simple pathname.
 `]
		]],
		[/* block */ 'b', `any`],
		[/* block */ 'b', `
 Note: A pathname consisting of a single "*" indicates all the files
 in the current directory, while a pathname consisting of a single "-"
 indicates all the files in the current directory and
 (recursively) all files and subdirectories contained in the current
 directory.
 `],
		[/* block */ 'b', `
 The actions to be granted are passed to the constructor in a string containing
 a list of one or more comma-separated keywords. The possible keywords are
 "read", "write", "execute", "delete", and "readlink". Their meaning is
 defined as follows:

 `],
		[/* dl */ 'dl', [
			[/* dt */ 'dt', [
				[/* text */ 't', ` read `]
			]],
			[/* dd */ 'dd', [
				[/* text */ 't', ` read permission
    `]
			]],
			[/* dt */ 'dt', [
				[/* text */ 't', ` write `]
			]],
			[/* dd */ 'dd', [
				[/* text */ 't', ` write permission
    `]
			]],
			[/* dt */ 'dt', [
				[/* text */ 't', ` execute
    `]
			]],
			[/* dd */ 'dd', [
				[/* text */ 't', ` execute permission. Allows `],
				[/* inline code block */ 'i', `Runtime.exec`],
				[/* text */ 't', ` to
         be called. Corresponds to `],
				[/* inline code block */ 'i', `SecurityManager.checkExec`],
				[/* text */ 't', `.
    `]
			]],
			[/* dt */ 'dt', [
				[/* text */ 't', ` delete
    `]
			]],
			[/* dd */ 'dd', [
				[/* text */ 't', ` delete permission. Allows `],
				[/* inline code block */ 'i', `File.delete`],
				[/* text */ 't', ` to
         be called. Corresponds to `],
				[/* inline code block */ 'i', `SecurityManager.checkDelete`],
				[/* text */ 't', `.
    `]
			]],
			[/* dt */ 'dt', [
				[/* text */ 't', ` readlink
    `]
			]],
			[/* dd */ 'dd', [
				[/* text */ 't', ` read link permission. Allows the target of a
         `],
				[/* text */ 't', `symbolic link`],
				[/* text */ 't', `
         to be read by invoking the `],
				[/* reference */ 'r', `java.nio.file.Files#readSymbolicLink(java.nio.file.Path)`, `readSymbolicLink`],
				[/* text */ 't', ` method.
 `]
			]]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', `
 The actions string is converted to lowercase before processing.
 `],
		[/* block */ 'b', `
 Be careful when granting FilePermissions. Think about the implications
 of granting read and especially write access to various files and
 directories. The "<<ALL FILES>>" permission with write action is
 especially dangerous. This grants permission to write to the entire
 file system. One thing this effectively allows is replacement of the
 system binary, including the JVM runtime environment.
 `],
		[/* block */ 'b', `
 Please note: Code can always read a file from the same
 directory it's in (or a subdirectory of that directory); it does not
 need explicit permission to do so.`]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>(java.lang.String,java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Creates a new FilePermission object with the specified actions.
 `],
				[/* text */ 't', `path`],
				[/* text */ 't', ` is the pathname of a file or directory, and `],
				[/* text */ 't', `actions`],
				[/* text */ 't', `
 contains a comma-separated list of the desired actions granted on the
 file or directory. Possible actions are
 "read", "write", "execute", "delete", and "readlink".

 `],
				[/* block */ 'b', [
					[/* text */ 't', `A pathname that ends in "/*" (where "/" is
 the file separator character, `],
					[/* inline code block */ 'i', `File.separatorChar`],
					[/* text */ 't', `)
 indicates all the files and directories contained in that directory.
 A pathname that ends with "/-" indicates (recursively) all files and
 subdirectories contained in that directory. The special pathname
 "<<ALL FILES>>" matches any file.

 `]
				]],
				[/* block */ 'b', `A pathname consisting of a single "*" indicates all the files
 in the current directory, while a pathname consisting of a single "-"
 indicates all the files in the current directory and
 (recursively) all files and subdirectories contained in the current
 directory.

 `],
				[/* block */ 'b', `A pathname containing an empty string represents an empty path.`]
			],
			[/* parameters */
				[/* parameter */ 'path', [/* parameter description */
					[/* text */ 't', `the pathname of the file/directory.`]
				]],
				[/* parameter */ 'actions', [/* parameter description */
					[/* text */ 't', `the action string.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if actions is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `, empty,
         malformed or contains an action other than the specified
         possible actions`]
				]]
			]
		]]
	],
	[/* methods */
		[/* method */ 'equals(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Checks two FilePermission objects for equality. Checks that `],
				[/* text */ 't', `obj`],
				[/* text */ 't', ` is
 a FilePermission, and has the same pathname and actions as this object.`]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `the object we are testing for equality with this object.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if obj is a FilePermission, and has the same
          pathname and actions as this FilePermission object,
          `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'implies(java.security.Permission)', [
			[/* method description */
				[/* text */ 't', `Checks if this FilePermission object "implies" the specified permission.
 `],
				[/* block */ 'b', `
 More specifically, this method returns true if:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `p`],
						[/* text */ 't', ` is an instanceof FilePermission,
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `p`],
						[/* text */ 't', `'s actions are a proper subset of this
 object's actions, and
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `p`],
						[/* text */ 't', `'s pathname is implied by this object's
      pathname. For example, "/tmp/*" implies "/tmp/foo", since
      "/tmp/*" encompasses all files in the "/tmp" directory,
      including the one named "foo".
 `]
					]]
				]],
				[/* block */ 'b', ''],
				[/* block */ 'b', `
 Precisely, a simple pathname implies another simple pathname
 if and only if they are equal. A simple pathname never implies
 a wildcard pathname. A wildcard pathname implies another wildcard
 pathname if and only if all simple pathnames implied by the latter
 are implied by the former. A wildcard pathname implies a simple
 pathname if and only if
 `],
				[/* list */ 'l', [
					[/* block */ 'b', `if the wildcard flag is "*", the simple pathname's path
     must be right inside the wildcard pathname's path.
     `],
					[/* block */ 'b', `if the wildcard flag is "-", the simple pathname's path
     must be recursively inside the wildcard pathname's path.
 `]
				]],
				[/* block */ 'b', ''],
				[/* block */ 'b', `
 "<<ALL FILES>>" implies every other pathname. No pathname,
 except for "<<ALL FILES>>" itself, implies
 "<<ALL FILES>>".`]
			],
			[/* parameters */
				[/* parameter */ 'p', [/* parameter description */
					[/* text */ 't', `the permission to check against.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the specified permission is not
                  `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` and is implied by this object,
                  `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'hashCode()', [
			[/* method description */
				[/* text */ 't', `Returns the hash code value for this object.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a hash code value for this object.`]
			]
		]],
		[/* method */ 'getActions()', [
			[/* method description */
				[/* text */ 't', `Returns the "canonical string representation" of the actions.
 That is, this method always returns present actions in the following order:
 read, write, execute, delete, readlink. For example, if this FilePermission
 object allows both write and read actions, a call to `],
				[/* inline code block */ 'i', `getActions`],
				[/* text */ 't', `
 will return the string "read,write".`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the canonical string representation of the actions.`]
			]
		]],
		[/* method */ 'newPermissionCollection()', [
			[/* method description */
				[/* text */ 't', `Returns a new PermissionCollection object for storing FilePermission
 objects.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 FilePermission objects must be stored in a manner that allows them
 to be inserted into the collection in any order, but that also enables the
 PermissionCollection `],
					[/* inline code block */ 'i', `implies`],
					[/* text */ 't', `
 method to be implemented in an efficient (and consistent) manner.

 `]
				]],
				[/* block */ 'b', `For example, if you have two FilePermissions:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* inline code block */ 'i', `"/tmp/-", "read"`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `"/tmp/scratch/foo", "write"`]
					]]
				]],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `and you are calling the `],
					[/* inline code block */ 'i', `implies`],
					[/* text */ 't', ` method with the FilePermission:

 `]
				]],
				[/* code block */ 'c', `   "/tmp/scratch/foo", "read,write",
 `],
				[/* text */ 't', `

 then the `],
				[/* inline code block */ 'i', `implies`],
				[/* text */ 't', ` function must
 take into account both the "/tmp/-" and "/tmp/scratch/foo"
 permissions, so the effective permission is "read,write",
 and `],
				[/* inline code block */ 'i', `implies`],
				[/* text */ 't', ` returns true. The "implies" semantics for
 FilePermissions are handled properly by the PermissionCollection object
 returned by this `],
				[/* inline code block */ 'i', `newPermissionCollection`],
				[/* text */ 't', ` method.`],
				[/* block */ 'b', '']
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a new PermissionCollection object suitable for storing
 FilePermissions.`]
			]
		]]
	],
]);
