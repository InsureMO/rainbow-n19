import {UDF} from '../../../../../utils';
import {DocsCollector} from '../../../../DocsCollector';

DocsCollector.collect('java.nio.file.attribute.UserPrincipalLookupService', [
	[/* class description */
		[/* text */ 't', `An object to lookup user and group principals by name. A `],
		[/* reference */ 'r', `java.nio.file.attribute.UserPrincipal`, `UserPrincipal`],
		[/* text */ 't', `
 represents an identity that may be used to determine access rights to objects
 in a file system. A `],
		[/* reference */ 'r', `java.nio.file.attribute.GroupPrincipal`, `GroupPrincipal`],
		[/* text */ 't', ` represents a `],
		[/* text */ 't', `group identity`],
		[/* text */ 't', `.
 A `],
		[/* inline code block */ 'i', `UserPrincipalLookupService`],
		[/* text */ 't', ` defines methods to lookup identities by
 name or group name (which are typically user or account names). Whether names
 and group names are case sensitive or not depends on the implementation.
 The exact definition of a group is implementation specific but typically a
 group represents an identity created for administrative purposes so as to
 determine the access rights for the members of the group. In particular it is
 implementation specific if the `],
		[/* text */ 't', `namespace`],
		[/* text */ 't', ` for names and groups is the
 same or is distinct. To ensure consistent and correct behavior across
 platforms it is recommended that this API be used as if the namespaces are
 distinct. In other words, the `],
		[/* reference */ 'r', `#lookupPrincipalByName(java.lang.String)`, `lookupPrincipalByName`],
		[/* text */ 't', ` should be used to lookup users, and `],
		[/* reference */ 'r', `#lookupPrincipalByGroupName(java.lang.String)`, `lookupPrincipalByGroupName`],
		[/* text */ 't', ` should be used to
 lookup groups.`]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Initializes a new instance of this class.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'lookupPrincipalByGroupName(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Lookup a group principal by group name.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` Where an implementation does not support any notion of group then
 this method always throws `],
					[/* reference */ 'r', `java.nio.file.attribute.UserPrincipalNotFoundException`, `UserPrincipalNotFoundException`],
					[/* text */ 't', `. Where
 the namespace for user accounts and groups is the same, then this method
 is identical to invoking `],
					[/* reference */ 'r', `#lookupPrincipalByName(java.lang.String)`, `lookupPrincipalByName`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'group', [/* parameter description */
					[/* text */ 't', `the string representation of the group to lookup`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.nio.file.attribute.UserPrincipalNotFoundException', [/* throw description */
					[/* text */ 't', `the principal does not exist or is not a group`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `In the case of the default provider, and a security manager is
          installed, it checks
          `],
					[/* reference */ 'r', `java.lang.RuntimePermission`, `RuntimePermission`],
					[/* inline code block */ 'i', `("lookupUserInformation")`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a group principal`]
			]
		]],
		[/* method */ 'lookupPrincipalByName(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Lookup a user principal by name.`]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `the string representation of the user principal to lookup`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.nio.file.attribute.UserPrincipalNotFoundException', [/* throw description */
					[/* text */ 't', `the principal does not exist`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `In the case of the default provider, and a security manager is
          installed, it checks
          `],
					[/* reference */ 'r', `java.lang.RuntimePermission`, `RuntimePermission`],
					[/* inline code block */ 'i', `("lookupUserInformation")`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a user principal`]
			]
		]]
	],
]);
