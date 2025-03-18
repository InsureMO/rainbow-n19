import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.security.AccessControlContext', [
	/* class description */,
	/* fields */,
	[/* constructors */
		[/* constructor */ '<init>(java.security.AccessControlContext,java.security.DomainCombiner)', [
			[/* constructor description */
				[/* text */ 't', `Create a new `],
				[/* inline code block */ 'i', `AccessControlContext`],
				[/* text */ 't', ` with the given
 `],
				[/* inline code block */ 'i', `AccessControlContext`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `DomainCombiner`],
				[/* text */ 't', `.
 This constructor associates the provided
 `],
				[/* inline code block */ 'i', `DomainCombiner`],
				[/* text */ 't', ` with the provided
 `],
				[/* inline code block */ 'i', `AccessControlContext`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'acc', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `AccessControlContext`],
					[/* text */ 't', ` associated
          with the provided `],
					[/* inline code block */ 'i', `DomainCombiner`],
					[/* text */ 't', `.`]
				]],
				[/* parameter */ 'combiner', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `DomainCombiner`],
					[/* text */ 't', ` to be associated
          with the provided `],
					[/* inline code block */ 'i', `AccessControlContext`],
					[/* text */ 't', `.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the provided
          `],
					[/* inline code block */ 'i', `context`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if a security manager is installed and the
          caller does not have the "createAccessControlContext"
          `],
					[/* reference */ 'r', `java.security.SecurityPermission`, `SecurityPermission`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.security.ProtectionDomain[])', [
			[/* constructor description */
				[/* text */ 't', `Create an AccessControlContext with the given array of ProtectionDomains.
 Context must not be null. Duplicate domains will be removed from the
 context.`]
			],
			[/* parameters */
				[/* parameter */ 'context', [/* parameter description */
					[/* text */ 't', `the ProtectionDomains associated with this context.
 The non-duplicate domains are copied from the array. Subsequent
 changes to the array will not affect this AccessControlContext.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `context`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`]
				]]
			]
		]]
	],
	[/* methods */
		[/* method */ 'equals(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Checks two AccessControlContext objects for equality.
 Checks that `],
				[/* inline code block */ 'i', `obj`],
				[/* text */ 't', ` is
 an AccessControlContext and has the same set of ProtectionDomains
 as this context.`]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `the object we are testing for equality with this object.`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `true if `],
				[/* inline code block */ 'i', `obj`],
				[/* text */ 't', ` is an AccessControlContext, and has the
 same set of ProtectionDomains as this context, false otherwise.`]
			]
		]],
		[/* method */ 'hashCode()', [
			[/* method description */
				[/* text */ 't', `Returns the hash code value for this context. The hash code
 is computed by exclusive or-ing the hash code of all the protection
 domains in the context together.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `a hash code value for this context.`]
			]
		]],
		[/* method */ 'getDomainCombiner()', [
			[/* method description */
				[/* text */ 't', `Get the `],
				[/* inline code block */ 'i', `DomainCombiner`],
				[/* text */ 't', ` associated with this
 `],
				[/* inline code block */ 'i', `AccessControlContext`],
				[/* text */ 't', `.`]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if a security manager is installed and
          the caller does not have the "getDomainCombiner"
          `],
					[/* reference */ 'r', `java.security.SecurityPermission`, `SecurityPermission`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the `],
				[/* inline code block */ 'i', `DomainCombiner`],
				[/* text */ 't', ` associated with this
          `],
				[/* inline code block */ 'i', `AccessControlContext`],
				[/* text */ 't', `, or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `
          if there is none.`]
			]
		]],
		[/* method */ 'checkPermission(java.security.Permission)', [
			[/* method description */
				[/* text */ 't', `Determines whether the access request indicated by the
 specified permission should be allowed or denied, based on
 the security policy currently in effect, and the context in
 this object. The request is allowed only if every ProtectionDomain
 in the context implies the permission. Otherwise the request is
 denied.

 `],
				[/* block */ 'b', `
 This method quietly returns if the access request
 is permitted, or throws a suitable AccessControlException otherwise.`]
			],
			[/* parameters */
				[/* parameter */ 'perm', [/* parameter description */
					[/* text */ 't', `the requested permission.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.security.AccessControlException', [/* throw description */
					[/* text */ 't', `if the specified permission
 is not permitted, based on the current security policy and the
 context encapsulated by this object.`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the permission to check for is null.`]
				]]
			],
			/* return */ UDF
		]]
	],
	/* enum values */ UDF
]);
