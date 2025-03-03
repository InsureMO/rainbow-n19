import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.security.PermissionCollection', [
	[/* class description */
		[/* text */ 't', `Abstract class representing a collection of Permission objects.

 `],
		[/* block */ 'b', `With a PermissionCollection, you can:
 `],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* text */ 't', ` add a permission to the collection using the `],
				[/* inline code block */ 'i', `add`],
				[/* text */ 't', ` method.
 `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', ` check to see if a particular permission is implied in the
      collection, using the `],
				[/* inline code block */ 'i', `implies`],
				[/* text */ 't', ` method.
 `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', ` enumerate all the permissions, using the `],
				[/* inline code block */ 'i', `elements`],
				[/* text */ 't', ` method.
 `]
			]]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `When it is desirable to group together a number of Permission objects
 of the same type, the `],
			[/* inline code block */ 'i', `newPermissionCollection`],
			[/* text */ 't', ` method on that
 particular type of Permission object should first be called. The default
 behavior (from the Permission class) is to simply return null.
 Subclasses of class Permission override the method if they need to store
 their permissions in a particular PermissionCollection object in order
 to provide the correct semantics when the
 `],
			[/* inline code block */ 'i', `PermissionCollection.implies`],
			[/* text */ 't', ` method is called.
 If a non-null value is returned, that PermissionCollection must be used.
 If null is returned, then the caller of `],
			[/* inline code block */ 'i', `newPermissionCollection`],
			[/* text */ 't', `
 is free to store permissions of the
 given type in any PermissionCollection they choose
 (one that uses a Hashtable, one that uses a Vector, etc).

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `The PermissionCollection returned by the
 `],
			[/* inline code block */ 'i', `Permission.newPermissionCollection`],
			[/* text */ 't', `
 method is a homogeneous collection, which stores only Permission objects
 for a given Permission type.  A PermissionCollection may also be
 heterogeneous.  For example, Permissions is a PermissionCollection
 subclass that represents a collection of PermissionCollections.
 That is, its members are each a homogeneous PermissionCollection.
 For example, a Permissions object might have a FilePermissionCollection
 for all the FilePermission objects, a SocketPermissionCollection for all the
 SocketPermission objects, and so on. Its `],
			[/* inline code block */ 'i', `add`],
			[/* text */ 't', ` method adds a
 permission to the appropriate collection.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Whenever a permission is added to a heterogeneous PermissionCollection
 such as Permissions, and the PermissionCollection doesn't yet contain a
 PermissionCollection of the specified permission's type, the
 PermissionCollection should call
 the `],
			[/* inline code block */ 'i', `newPermissionCollection`],
			[/* text */ 't', ` method on the permission's class
 to see if it requires a special PermissionCollection. If
 `],
			[/* inline code block */ 'i', `newPermissionCollection`],
			[/* text */ 't', `
 returns null, the PermissionCollection
 is free to store the permission in any type of PermissionCollection it
 desires (one using a Hashtable, one using a Vector, etc.). For example,
 the Permissions object uses a default PermissionCollection implementation
 that stores the permission objects in a Hashtable.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` Subclass implementations of PermissionCollection should assume
 that they may be called simultaneously from multiple threads,
 and therefore should be synchronized properly.  Furthermore,
 Enumerations returned via the `],
			[/* inline code block */ 'i', `elements`],
			[/* text */ 't', ` method are
 not `],
			[/* text */ 't', `fail-fast`],
			[/* text */ 't', `.  Modifications to a collection should not be
 performed while enumerating over that collection.`]
		]]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Constructor for subclasses to call.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'add(java.security.Permission)', [
			[/* method description */
				[/* text */ 't', `Adds a permission object to the current collection of permission objects.`]
			],
			[/* parameters */
				[/* parameter */ 'permission', [/* parameter description */
					[/* text */ 't', `the Permission object to add.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if this PermissionCollection object
                                 has been marked readonly`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if this PermissionCollection
                object is a homogeneous collection and the permission
                is not of the correct type.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Returns a string describing this PermissionCollection object,
 providing information about all the permissions it contains.
 The format is:
 `],
				[/* code block */ 'c', ` super.toString() (
   // enumerate all the Permission
   // objects and call toString() on them,
   // one per line..
 )`],
				[/* inline code block */ 'i', `super.toString`],
				[/* text */ 't', ` is a call to the `],
				[/* inline code block */ 'i', `toString`],
				[/* text */ 't', `
 method of this
 object's superclass, which is Object. The result is
 this PermissionCollection's type name followed by this object's
 hashcode, thus enabling clients to differentiate different
 PermissionCollections object, even if they contain the same permissions.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `information about this PermissionCollection object,
         as described above.`]
			]
		]],
		[/* method */ 'elements()', [
			[/* method description */
				[/* text */ 't', `Returns an enumeration of all the Permission objects in the collection.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an enumeration of all the Permissions.`]
			]
		]],
		[/* method */ 'setReadOnly()', [
			[/* method description */
				[/* text */ 't', `Marks this PermissionCollection object as "readonly". After
 a PermissionCollection object
 is marked as readonly, no new Permission objects can be added to it
 using `],
				[/* inline code block */ 'i', `add`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'implies(java.security.Permission)', [
			[/* method description */
				[/* text */ 't', `Checks to see if the specified permission is implied by
 the collection of Permission objects held in this PermissionCollection.`]
			],
			[/* parameters */
				[/* parameter */ 'permission', [/* parameter description */
					[/* text */ 't', `the Permission object to compare.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if "permission" is implied by the  permissions in
 the collection, false if not.`]
			]
		]],
		[/* method */ 'isReadOnly()', [
			[/* method description */
				[/* text */ 't', `Returns true if this PermissionCollection object is marked as readonly.
 If it is readonly, no new Permission objects can be added to it
 using `],
				[/* inline code block */ 'i', `add`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `By default, the object is `],
					[/* text */ 't', `not`],
					[/* text */ 't', ` readonly. It can be set to
 readonly by a call to `],
					[/* inline code block */ 'i', `setReadOnly`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if this PermissionCollection object is marked as readonly,
 false otherwise.`]
			]
		]],
		[/* method */ 'elementsAsStream()', [
			[/* method description */
				[/* text */ 't', `Returns a stream of all the Permission objects in the collection.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The collection should not be modified (see `],
					[/* reference */ 'r', `#add(java.security.Permission)`, `add(java.security.Permission)`],
					[/* text */ 't', `) during the
 execution of the terminal stream operation. Otherwise, the result of the
 terminal stream operation is undefined.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a stream of all the Permissions.`]
			]
		]]
	],
]);
