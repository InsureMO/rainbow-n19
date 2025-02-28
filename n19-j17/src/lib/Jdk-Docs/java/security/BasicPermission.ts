import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.security.BasicPermission', [
	[/* class description */
		[/* text */ 't', `The BasicPermission class extends the Permission class, and
 can be used as the base class for permissions that want to
 follow the same naming convention as BasicPermission.
 `],
		[/* block */ 'b', `
 The name for a BasicPermission is the name of the given permission
 (for example, "exit",
 "setFactory", "print.queueJob", etc). The naming
 convention follows the  hierarchical property naming convention.
 An asterisk may appear by itself, or if immediately preceded by a "."
 may appear at the end of the name, to signify a wildcard match.
 For example, "*" and "java.*" signify a wildcard match, while "*java", "a*b",
 and "java*" do not.
 `],
		[/* block */ 'b', `
 The action string (inherited from Permission) is unused.
 Thus, BasicPermission is commonly used as the base class for
 "named" permissions
 (ones that contain a name but no actions list; you either have the
 named permission or you don't.)
 Subclasses may implement actions on top of BasicPermission,
 if desired.`]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>(java.lang.String,java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Creates a new BasicPermission object with the specified name.
 The name is the symbolic name of the BasicPermission, and the
 actions String is currently unused.`]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `the name of the BasicPermission.`]
				]],
				[/* parameter */ 'actions', [/* parameter description */
					[/* text */ 't', `ignored.`]
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
					[/* text */ 't', ` is empty.`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Creates a new BasicPermission with the specified name.
 Name is the symbolic name of the permission, such as
 "setFactory",
 "print.queueJob", or "topLevelWindow", etc.`]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `the name of the BasicPermission.`]
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
					[/* text */ 't', ` is empty.`]
				]]
			]
		]]
	],
	[/* methods */
		[/* method */ 'equals(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Checks two BasicPermission objects for equality.
 Checks that `],
				[/* inline code block */ 'i', `obj`],
				[/* text */ 't', `'s class is the same as this object's class
 and has the same name as this object.`]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `the object we are testing for equality with this object.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if `],
				[/* inline code block */ 'i', `obj`],
				[/* text */ 't', `'s class is the same as this object's class
  and has the same name as this BasicPermission object, false otherwise.`]
			]
		]],
		[/* method */ 'hashCode()', [
			[/* method description */
				[/* text */ 't', `Returns the hash code value for this object.
 The hash code used is the hash code of the name, that is,
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
				[/* text */ 't', `Checks if the specified permission is "implied" by
 this object.
 `],
				[/* block */ 'b', `
 More specifically, this method returns true if:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* inline code block */ 'i', `p`],
						[/* text */ 't', `'s class is the same as this object's class, and
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `p`],
						[/* text */ 't', `'s name equals or (in the case of wildcards)
      is implied by this object's
      name. For example, "a.b.*" implies "a.b.c".
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
				[/* text */ 't', `true if the passed permission is equal to or
 implied by this permission, false otherwise.`]
			]
		]],
		[/* method */ 'getActions()', [
			[/* method description */
				[/* text */ 't', `Returns the canonical string representation of the actions,
 which currently is the empty string "", since there are no actions for
 a BasicPermission.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the empty string "".`]
			]
		]],
		[/* method */ 'newPermissionCollection()', [
			[/* method description */
				[/* text */ 't', `Returns a new PermissionCollection object for storing BasicPermission
 objects.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `BasicPermission objects must be stored in a manner that allows them
 to be inserted in any order, but that also enables the
 PermissionCollection `],
					[/* inline code block */ 'i', `implies`],
					[/* text */ 't', ` method
 to be implemented in an efficient (and consistent) manner.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a new PermissionCollection object suitable for
 storing BasicPermissions.`]
			]
		]]
	],
]);
