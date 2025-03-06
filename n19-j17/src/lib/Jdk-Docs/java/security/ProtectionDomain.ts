import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.security.ProtectionDomain', [
	[/* class description */
		[/* text */ 't', `The ProtectionDomain class encapsulates the characteristics of a domain,
 which encloses a set of classes whose instances are granted a set
 of permissions when being executed on behalf of a given set of Principals.
 `],
		[/* block */ 'b', `
 A static set of permissions can be bound to a ProtectionDomain when it is
 constructed; such permissions are granted to the domain regardless of the
 Policy in force. However, to support dynamic security policies, a
 ProtectionDomain can also be constructed such that it is dynamically
 mapped to a set of permissions by the current Policy whenever a permission
 is checked.`]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>(java.security.CodeSource,java.security.PermissionCollection)', [
			[/* constructor description */
				[/* text */ 't', `Creates a new ProtectionDomain with the given CodeSource and
 Permissions. If the permissions object is not null, then
  `],
				[/* inline code block */ 'i', `setReadOnly()`],
				[/* text */ 't', ` will be called on the passed in
 Permissions object.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The permissions granted to this domain are static, i.e.
 invoking the `],
					[/* reference */ 'r', `#staticPermissionsOnly()`, `staticPermissionsOnly()`],
					[/* text */ 't', ` method returns true.
 They contain only the ones passed to this constructor and
 the current Policy will not be consulted.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'codesource', [/* parameter description */
					[/* text */ 't', `the codesource associated with this domain`]
				]],
				[/* parameter */ 'permissions', [/* parameter description */
					[/* text */ 't', `the permissions granted to this domain`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.security.CodeSource,java.security.PermissionCollection,java.lang.ClassLoader,java.security.Principal[])', [
			[/* constructor description */
				[/* text */ 't', `Creates a new ProtectionDomain qualified by the given CodeSource,
 Permissions, ClassLoader and array of Principals. If the
 permissions object is not null, then `],
				[/* inline code block */ 'i', `setReadOnly()`],
				[/* text */ 't', `
 will be called on the passed in Permissions object.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The permissions granted to this domain are dynamic, i.e.
 invoking the `],
					[/* reference */ 'r', `#staticPermissionsOnly()`, `staticPermissionsOnly()`],
					[/* text */ 't', ` method returns false.
 They include both the static permissions passed to this constructor,
 and any permissions granted to this domain by the current Policy at the
 time a permission is checked.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 This constructor is typically used by
 `],
					[/* reference */ 'r', `java.security.SecureClassLoader`, `ClassLoaders`],
					[/* text */ 't', `
 and `],
					[/* reference */ 'r', `java.security.DomainCombiner`, `DomainCombiners`],
					[/* text */ 't', ` which delegate to
 `],
					[/* inline code block */ 'i', `Policy`],
					[/* text */ 't', ` to actively associate the permissions granted to
 this domain. This constructor affords the
 Policy provider the opportunity to augment the supplied
 PermissionCollection to reflect policy changes.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'codesource', [/* parameter description */
					[/* text */ 't', `the CodeSource associated with this domain`]
				]],
				[/* parameter */ 'permissions', [/* parameter description */
					[/* text */ 't', `the permissions granted to this domain`]
				]],
				[/* parameter */ 'classloader', [/* parameter description */
					[/* text */ 't', `the ClassLoader associated with this domain`]
				]],
				[/* parameter */ 'principals', [/* parameter description */
					[/* text */ 't', `the array of Principals associated with this
 domain. The contents of the array are copied to protect against
 subsequent modification.`]
				]]
			],
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'implies(java.security.Permission)', [
			[/* method description */
				[/* text */ 't', `Check and see if this ProtectionDomain implies the permissions
 expressed in the Permission object.
 `],
				[/* block */ 'b', `
 The set of permissions evaluated is a function of whether the
 ProtectionDomain was constructed with a static set of permissions
 or it was bound to a dynamically mapped set of permissions.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the `],
					[/* reference */ 'r', `#staticPermissionsOnly()`, `staticPermissionsOnly()`],
					[/* text */ 't', ` method returns
 true, then the permission will only be checked against the
 PermissionCollection supplied at construction.
 `]
				]],
				[/* block */ 'b', `
 Otherwise, the permission will be checked against the combination
 of the PermissionCollection supplied at construction and
 the current Policy binding.`]
			],
			[/* parameters */
				[/* parameter */ 'perm', [/* parameter description */
					[/* text */ 't', `the Permission object to check.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if `],
				[/* inline code block */ 'i', `perm`],
				[/* text */ 't', ` is implied by this ProtectionDomain.`]
			]
		]],
		[/* method */ 'staticPermissionsOnly()', [
			[/* method description */
				[/* text */ 't', `Returns true if this domain contains only static permissions
 and does not check the current `],
				[/* inline code block */ 'i', `Policy`],
				[/* text */ 't', ` at the time of
 permission checking.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if this domain contains only static permissions.`]
			]
		]],
		[/* method */ 'getClassLoader()', [
			[/* method description */
				[/* text */ 't', `Returns the ClassLoader of this domain.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the ClassLoader of this domain which may be null.`]
			]
		]],
		[/* method */ 'getCodeSource()', [
			[/* method description */
				[/* text */ 't', `Returns the CodeSource of this domain.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the CodeSource of this domain which may be null.`]
			]
		]],
		[/* method */ 'getPermissions()', [
			[/* method description */
				[/* text */ 't', `Returns the static permissions granted to this domain.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the static set of permissions for this domain which may be null.`]
			]
		]],
		[/* method */ 'getPrincipals()', [
			[/* method description */
				[/* text */ 't', `Returns an array of principals for this domain.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a non-null array of principals for this domain.
 Returns a new array each time this method is called.`]
			]
		]],
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Convert a ProtectionDomain to a String.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a string representation of the object.`]
			]
		]]
	],
]);
