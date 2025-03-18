import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.security.Permission', [
	[/* class description */
		[/* text */ 't', `Abstract class for representing access to a system resource.
 All permissions have a name (whose interpretation depends on the subclass),
 as well as abstract functions for defining the semantics of the
 particular Permission subclass.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `Most Permission objects also include an "actions" list that tells the actions
 that are permitted for the object.  For example,
 for a `],
			[/* inline code block */ 'i', `java.io.FilePermission`],
			[/* text */ 't', ` object, the permission name is
 the pathname of a file (or directory), and the actions list
 (such as "read, write") specifies which actions are granted for the
 specified file (or for files in the specified directory).
 The actions list is optional for Permission objects, such as
 `],
			[/* inline code block */ 'i', `java.lang.RuntimePermission`],
			[/* text */ 't', `,
 that don't need such a list; you either have the named permission (such
 as "system.exit") or you don't.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `An important method that must be implemented by each subclass is
 the `],
			[/* inline code block */ 'i', `implies`],
			[/* text */ 't', ` method to compare Permissions. Basically,
 "permission p1 implies permission p2" means that
 if one is granted permission p1, one is naturally granted permission p2.
 Thus, this is not an equality test, but rather more of a
 subset test.

 `]
		]],
		[/* block */ 'b', ` Permission objects are similar to String objects in that they
 are immutable once they have been created. Subclasses should not
 provide methods that can change the state of a permission
 once it has been created.`]
	],
	/* fields */,
	[/* constructors */
		[/* constructor */ '<init>(java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a permission with the specified name.`]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `name of the Permission object being created.`]
				]]
			],
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'equals(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Checks two Permission objects for equality.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 Do not use the `],
					[/* inline code block */ 'i', `equals`],
					[/* text */ 't', ` method for making access control
 decisions; use the `],
					[/* inline code block */ 'i', `implies`],
					[/* text */ 't', ` method.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `the object we are testing for equality with this object.`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `true if both Permission objects are equivalent.`]
			]
		]],
		[/* method */ 'implies(java.security.Permission)', [
			[/* method description */
				[/* text */ 't', `Checks if the specified permission's actions are "implied by"
 this object's actions.
 `],
				[/* block */ 'b', `
 This must be implemented by subclasses of Permission, as they are the
 only ones that can impose semantics on a Permission object.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The `],
					[/* inline code block */ 'i', `implies`],
					[/* text */ 't', ` method is used by the AccessController to determine
 whether or not a requested permission is implied by another permission that
 is known to be valid in the current execution context.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'permission', [/* parameter description */
					[/* text */ 't', `the permission to check against.`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `true if the specified permission is implied by this object,
 false if not.`]
			]
		]],
		[/* method */ 'hashCode()', [
			[/* method description */
				[/* text */ 't', `Returns the hash code value for this Permission object.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The required `],
					[/* inline code block */ 'i', `hashCode`],
					[/* text */ 't', ` behavior for Permission Objects is
 the following:
 `]
				]],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `Whenever it is invoked on the same Permission object more than
     once during an execution of a Java application, the
     `],
						[/* inline code block */ 'i', `hashCode`],
						[/* text */ 't', ` method
     must consistently return the same integer. This integer need not
     remain consistent from one execution of an application to another
     execution of the same application.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `If two Permission objects are equal according to the
     `],
						[/* inline code block */ 'i', `equals`],
						[/* text */ 't', `
     method, then calling the `],
						[/* inline code block */ 'i', `hashCode`],
						[/* text */ 't', ` method on each of the
     two Permission objects must produce the same integer result.
 `]
					]]
				]],
				[/* block */ 'b', '']
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `a hash code value for this object.`]
			]
		]],
		[/* method */ 'getActions()', [
			[/* method description */
				[/* text */ 't', `Returns the actions as a String. This is abstract
 so subclasses can defer creating a String representation until
 one is needed. Subclasses should always return actions in what they
 consider to be their
 canonical form. For example, two FilePermission objects created via
 the following:

 `],
				[/* code block */ 'c', `   perm1 = new FilePermission(p1,"read,write");
   perm2 = new FilePermission(p2,"write,read");
 `],
				[/* text */ 't', `

 both return
 "read,write" when the `],
				[/* inline code block */ 'i', `getActions`],
				[/* text */ 't', ` method is invoked.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the actions of this Permission.`]
			]
		]],
		[/* method */ 'getName()', [
			[/* method description */
				[/* text */ 't', `Returns the name of this Permission.
 For example, in the case of a `],
				[/* inline code block */ 'i', `java.io.FilePermission`],
				[/* text */ 't', `,
 the name will be a pathname.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the name of this Permission.`]
			]
		]],
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Returns a string describing this Permission.  The convention is to
 specify the class name, the permission name, and the actions in
 the following format: '("ClassName" "name" "actions")', or
 '("ClassName" "name")' if actions list is null or empty.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `information about this Permission.`]
			]
		]],
		[/* method */ 'newPermissionCollection()', [
			[/* method description */
				[/* text */ 't', `Returns an empty PermissionCollection for a given Permission object, or null if
 one is not defined. Subclasses of class Permission should
 override this if they need to store their permissions in a particular
 PermissionCollection object in order to provide the correct semantics
 when the `],
				[/* inline code block */ 'i', `PermissionCollection.implies`],
				[/* text */ 't', ` method is called.
 If null is returned,
 then the caller of this method is free to store permissions of this
 type in any PermissionCollection they choose (one that uses a Hashtable,
 one that uses a Vector, etc).`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `a new PermissionCollection object for this type of Permission, or
 null if one is not defined.`]
			]
		]],
		[/* method */ 'checkGuard(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Implements the guard interface for a permission. The
 `],
				[/* inline code block */ 'i', `SecurityManager.checkPermission`],
				[/* text */ 't', ` method is called,
 passing this permission object as the permission to check.
 Returns silently if access is granted. Otherwise, throws
 a SecurityException.`]
			],
			[/* parameters */
				[/* parameter */ 'object', [/* parameter description */
					[/* text */ 't', `the object being guarded (currently ignored).`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if a security manager exists and its
        `],
					[/* inline code block */ 'i', `checkPermission`],
					[/* text */ 't', ` method doesn't allow access.`]
				]]
			],
			/* return */ UDF
		]]
	],
	/* enum values */ UDF
]);
