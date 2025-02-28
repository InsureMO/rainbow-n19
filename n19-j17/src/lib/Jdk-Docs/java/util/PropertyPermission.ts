import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.util.PropertyPermission', [
	[/* class description */
		[/* text */ 't', `This class is for property permissions.

 `],
		[/* block */ 'b', `
 The name is the name of the property ("java.home",
 "os.name", etc). The naming
 convention follows the  hierarchical property naming convention.
 Also, an asterisk
 may appear at the end of the name, following a ".", or by itself, to
 signify a wildcard match. For example: "java.*" and "*" signify a wildcard
 match, while "*java" and "a*b" do not.
 `],
		[/* block */ 'b', `
 The actions to be granted are passed to the constructor in a string containing
 a list of one or more comma-separated keywords. The possible keywords are
 "read" and "write". Their meaning is defined as follows:

 `],
		[/* dl */ 't', ''],
		[/* block */ 'b', ''],
		[/* block */ 'b', `
 The actions string is converted to lowercase before processing.
 `],
		[/* block */ 'b', `
 Care should be taken before granting code permission to access
 certain system properties.  For example, granting permission to
 access the "java.home" system property gives potentially malevolent
 code sensitive information about the system environment (the Java
 installation directory).  Also, granting permission to access
 the "user.name" and "user.home" system properties gives potentially
 malevolent code sensitive information about the user environment
 (the user's account name and home directory).`]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>(java.lang.String,java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Creates a new PropertyPermission object with the specified name.
 The name is the name of the system property, and
 `],
				[/* text */ 't', `actions`],
				[/* text */ 't', ` contains a comma-separated list of the
 desired actions granted on the property. Possible actions are
 "read" and "write".`]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `the name of the PropertyPermission.`]
				]],
				[/* parameter */ 'actions', [/* parameter description */
					[/* text */ 't', `the actions string.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `name`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `name`],
					[/* text */ 't', ` is empty or if
 `],
					[/* inline code block */ 'i', `actions`],
					[/* text */ 't', ` is invalid.`]
				]]
			]
		]]
	],
	[/* methods */
		[/* method */ 'equals(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Checks two PropertyPermission objects for equality. Checks that `],
				[/* text */ 't', `obj`],
				[/* text */ 't', ` is
 a PropertyPermission, and has the same name and actions as this object.`]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `the object we are testing for equality with this object.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if obj is a PropertyPermission, and has the same name and
 actions as this PropertyPermission object.`]
			]
		]],
		[/* method */ 'hashCode()', [
			[/* method description */
				[/* text */ 't', `Returns the hash code value for this object.
 The hash code used is the hash code of this permissions name, that is,
 `],
				[/* inline code block */ 'i', `getName().hashCode()`],
				[/* text */ 't', `, where `],
				[/* inline code block */ 'i', `getName`],
				[/* text */ 't', ` is
 from the Permission superclass.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a hash code value for this object.`]
			]
		]],
		[/* method */ 'implies(java.security.Permission)', [
			[/* method description */
				[/* text */ 't', `Checks if this PropertyPermission object "implies" the specified
 permission.
 `],
				[/* block */ 'b', `
 More specifically, this method returns true if:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `p`],
						[/* text */ 't', ` is an instanceof PropertyPermission,
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `p`],
						[/* text */ 't', `'s actions are a subset of this
 object's actions, and
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `p`],
						[/* text */ 't', `'s name is implied by this object's
      name. For example, "java.*" implies "java.home".
 `]
					]]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'p', [/* parameter description */
					[/* text */ 't', `the permission to check against.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if the specified permission is implied by this object,
 false if not.`]
			]
		]],
		[/* method */ 'getActions()', [
			[/* method description */
				[/* text */ 't', `Returns the "canonical string representation" of the actions.
 That is, this method always returns present actions in the following order:
 read, write. For example, if this PropertyPermission object
 allows both write and read actions, a call to `],
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
				[/* text */ 't', `Returns a new PermissionCollection object for storing
 PropertyPermission objects.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a new PermissionCollection object suitable for storing
 PropertyPermissions.`]
			]
		]]
	],
]);
