import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('javax.security.auth.Subject', [
	[/* class description */
		[/* block */ 'b', [
			[/* text */ 't', ` A `],
			[/* inline code block */ 'i', `Subject`],
			[/* text */ 't', ` represents a grouping of related information
 for a single entity, such as a person.
 Such information includes the Subject's identities as well as
 its security-related attributes
 (passwords and cryptographic keys, for example).

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` Subjects may potentially have multiple identities.
 Each identity is represented as a `],
			[/* inline code block */ 'i', `Principal`],
			[/* text */ 't', `
 within the `],
			[/* inline code block */ 'i', `Subject`],
			[/* text */ 't', `.  Principals simply bind names to a
 `],
			[/* inline code block */ 'i', `Subject`],
			[/* text */ 't', `.  For example, a `],
			[/* inline code block */ 'i', `Subject`],
			[/* text */ 't', ` that happens
 to be a person, Alice, might have two Principals:
 one which binds "Alice Bar", the name on her driver license,
 to the `],
			[/* inline code block */ 'i', `Subject`],
			[/* text */ 't', `, and another which binds,
 "999-99-9999", the number on her student identification card,
 to the `],
			[/* inline code block */ 'i', `Subject`],
			[/* text */ 't', `.  Both Principals refer to the same
 `],
			[/* inline code block */ 'i', `Subject`],
			[/* text */ 't', ` even though each has a different name.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` A `],
			[/* inline code block */ 'i', `Subject`],
			[/* text */ 't', ` may also own security-related attributes,
 which are referred to as credentials.
 Sensitive credentials that require special protection, such as
 private cryptographic keys, are stored within a private credential
 `],
			[/* inline code block */ 'i', `Set`],
			[/* text */ 't', `.  Credentials intended to be shared, such as
 public key certificates or Kerberos server tickets are stored
 within a public credential `],
			[/* inline code block */ 'i', `Set`],
			[/* text */ 't', `.  Different permissions
 are required to access and modify the different credential Sets.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` To retrieve all the Principals associated with a `],
			[/* inline code block */ 'i', `Subject`],
			[/* text */ 't', `,
 invoke the `],
			[/* inline code block */ 'i', `getPrincipals`],
			[/* text */ 't', ` method.  To retrieve
 all the public or private credentials belonging to a `],
			[/* inline code block */ 'i', `Subject`],
			[/* text */ 't', `,
 invoke the `],
			[/* inline code block */ 'i', `getPublicCredentials`],
			[/* text */ 't', ` method or
 `],
			[/* inline code block */ 'i', `getPrivateCredentials`],
			[/* text */ 't', ` method, respectively.
 To modify the returned `],
			[/* inline code block */ 'i', `Set`],
			[/* text */ 't', ` of Principals and credentials,
 use the methods defined in the `],
			[/* inline code block */ 'i', `Set`],
			[/* text */ 't', ` class.
 For example:
 `]
		]],
		[/* code block */ 'c', `      Subject subject;
      Principal principal;
      Object credential;

      // add a Principal and credential to the Subject
      subject.getPrincipals().add(principal);
      subject.getPublicCredentials().add(credential);
 `],
		[/* text */ 't', `

 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', ` This `],
			[/* inline code block */ 'i', `Subject`],
			[/* text */ 't', ` class implements `],
			[/* inline code block */ 'i', `Serializable`],
			[/* text */ 't', `.
 While the Principals associated with the `],
			[/* inline code block */ 'i', `Subject`],
			[/* text */ 't', ` are serialized,
 the credentials associated with the `],
			[/* inline code block */ 'i', `Subject`],
			[/* text */ 't', ` are not.
 Note that the `],
			[/* inline code block */ 'i', `java.security.Principal`],
			[/* text */ 't', ` class
 does not implement `],
			[/* inline code block */ 'i', `Serializable`],
			[/* text */ 't', `.  Therefore all concrete
 `],
			[/* inline code block */ 'i', `Principal`],
			[/* text */ 't', ` implementations associated with Subjects
 must implement `],
			[/* inline code block */ 'i', `Serializable`],
			[/* text */ 't', `.`]
		]]
	],
	/* fields */,
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Create an instance of a `],
				[/* inline code block */ 'i', `Subject`],
				[/* text */ 't', `
 with an empty `],
				[/* inline code block */ 'i', `Set`],
				[/* text */ 't', ` of Principals and empty
 Sets of public and private credentials.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The newly constructed Sets check whether this `],
					[/* inline code block */ 'i', `Subject`],
					[/* text */ 't', `
 has been set read-only before permitting subsequent modifications.
 The newly created Sets also prevent illegal modifications
 by ensuring that callers have sufficient permissions.  These Sets
 also prohibit null elements, and attempts to add or query a null
 element will result in a `],
					[/* inline code block */ 'i', `NullPointerException`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` To modify the Principals Set, the caller must have
 `],
					[/* inline code block */ 'i', `AuthPermission("modifyPrincipals")`],
					[/* text */ 't', `.
 To modify the public credential Set, the caller must have
 `],
					[/* inline code block */ 'i', `AuthPermission("modifyPublicCredentials")`],
					[/* text */ 't', `.
 To modify the private credential Set, the caller must have
 `],
					[/* inline code block */ 'i', `AuthPermission("modifyPrivateCredentials")`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */,
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(boolean,java.util.Set,java.util.Set,java.util.Set)', [
			[/* constructor description */
				[/* text */ 't', `Create an instance of a `],
				[/* inline code block */ 'i', `Subject`],
				[/* text */ 't', ` with
 Principals and credentials.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The Principals and credentials from the specified Sets
 are copied into newly constructed Sets.
 These newly created Sets check whether this `],
					[/* inline code block */ 'i', `Subject`],
					[/* text */ 't', `
 has been set read-only before permitting subsequent modifications.
 The newly created Sets also prevent illegal modifications
 by ensuring that callers have sufficient permissions.  These Sets
 also prohibit null elements, and attempts to add or query a null
 element will result in a `],
					[/* inline code block */ 'i', `NullPointerException`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` To modify the Principals Set, the caller must have
 `],
					[/* inline code block */ 'i', `AuthPermission("modifyPrincipals")`],
					[/* text */ 't', `.
 To modify the public credential Set, the caller must have
 `],
					[/* inline code block */ 'i', `AuthPermission("modifyPublicCredentials")`],
					[/* text */ 't', `.
 To modify the private credential Set, the caller must have
 `],
					[/* inline code block */ 'i', `AuthPermission("modifyPrivateCredentials")`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'readOnly', [/* parameter description */
					[/* text */ 't', `true if the `],
					[/* inline code block */ 'i', `Subject`],
					[/* text */ 't', ` is to be read-only,
          and false otherwise.`]
				]],
				[/* parameter */ 'principals', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `Set`],
					[/* text */ 't', ` of Principals
          to be associated with this `],
					[/* inline code block */ 'i', `Subject`],
					[/* text */ 't', `.`]
				]],
				[/* parameter */ 'pubCredentials', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `Set`],
					[/* text */ 't', ` of public credentials
          to be associated with this `],
					[/* inline code block */ 'i', `Subject`],
					[/* text */ 't', `.`]
				]],
				[/* parameter */ 'privCredentials', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `Set`],
					[/* text */ 't', ` of private credentials
          to be associated with this `],
					[/* inline code block */ 'i', `Subject`],
					[/* text */ 't', `.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified
          `],
					[/* inline code block */ 'i', `principals`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `pubCredentials`],
					[/* text */ 't', `,
          or `],
					[/* inline code block */ 'i', `privCredentials`],
					[/* text */ 't', ` are `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `,
          or a null value exists within any of these three
          Sets.`]
				]]
			]
		]]
	],
	[/* methods */
		[/* method */ 'getPrincipals(java.lang.Class)', [
			[/* method description */
				[/* text */ 't', `Return a `],
				[/* inline code block */ 'i', `Set`],
				[/* text */ 't', ` of Principals associated with this
 `],
				[/* inline code block */ 'i', `Subject`],
				[/* text */ 't', ` that are instances or subclasses of the specified
 `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The returned `],
					[/* inline code block */ 'i', `Set`],
					[/* text */ 't', ` is not backed by this Subject's
 internal `],
					[/* inline code block */ 'i', `Principal`],
					[/* text */ 't', ` `],
					[/* inline code block */ 'i', `Set`],
					[/* text */ 't', `.  A new
 `],
					[/* inline code block */ 'i', `Set`],
					[/* text */ 't', ` is created and returned for each method invocation.
 Modifications to the returned `],
					[/* inline code block */ 'i', `Set`],
					[/* text */ 't', `
 will not affect the internal `],
					[/* inline code block */ 'i', `Principal`],
					[/* text */ 't', ` `],
					[/* inline code block */ 'i', `Set`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'c', [/* parameter description */
					[/* text */ 't', `the returned `],
					[/* inline code block */ 'i', `Set`],
					[/* text */ 't', ` of Principals will all be
          instances of this class.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified `],
					[/* inline code block */ 'i', `Class`],
					[/* text */ 't', `
          is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Set`],
				[/* text */ 't', ` of Principals that are instances of the
          specified `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'getPrivateCredentials(java.lang.Class)', [
			[/* method description */
				[/* text */ 't', `Return a `],
				[/* inline code block */ 'i', `Set`],
				[/* text */ 't', ` of private credentials associated with this
 `],
				[/* inline code block */ 'i', `Subject`],
				[/* text */ 't', ` that are instances or subclasses of the specified
 `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` If a security manager is installed, the caller must have a
 `],
					[/* reference */ 'r', `javax.security.auth.PrivateCredentialPermission`, `PrivateCredentialPermission`],
					[/* text */ 't', ` to access all of the requested
 Credentials, or a `],
					[/* inline code block */ 'i', `SecurityException`],
					[/* text */ 't', ` will be thrown.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` The returned `],
					[/* inline code block */ 'i', `Set`],
					[/* text */ 't', ` is not backed by this Subject's
 internal private Credential `],
					[/* inline code block */ 'i', `Set`],
					[/* text */ 't', `.  A new
 `],
					[/* inline code block */ 'i', `Set`],
					[/* text */ 't', ` is created and returned for each method invocation.
 Modifications to the returned `],
					[/* inline code block */ 'i', `Set`],
					[/* text */ 't', `
 will not affect the internal private Credential `],
					[/* inline code block */ 'i', `Set`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'c', [/* parameter description */
					[/* text */ 't', `the returned `],
					[/* inline code block */ 'i', `Set`],
					[/* text */ 't', ` of private credentials will all be
          instances of this class.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified `],
					[/* inline code block */ 'i', `Class`],
					[/* text */ 't', `
          is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Set`],
				[/* text */ 't', ` of private credentials that are instances
          of the  specified `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'getPublicCredentials(java.lang.Class)', [
			[/* method description */
				[/* text */ 't', `Return a `],
				[/* inline code block */ 'i', `Set`],
				[/* text */ 't', ` of public credentials associated with this
 `],
				[/* inline code block */ 'i', `Subject`],
				[/* text */ 't', ` that are instances or subclasses of the specified
 `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The returned `],
					[/* inline code block */ 'i', `Set`],
					[/* text */ 't', ` is not backed by this Subject's
 internal public Credential `],
					[/* inline code block */ 'i', `Set`],
					[/* text */ 't', `.  A new
 `],
					[/* inline code block */ 'i', `Set`],
					[/* text */ 't', ` is created and returned for each method invocation.
 Modifications to the returned `],
					[/* inline code block */ 'i', `Set`],
					[/* text */ 't', `
 will not affect the internal public Credential `],
					[/* inline code block */ 'i', `Set`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'c', [/* parameter description */
					[/* text */ 't', `the returned `],
					[/* inline code block */ 'i', `Set`],
					[/* text */ 't', ` of public credentials will all be
          instances of this class.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified `],
					[/* inline code block */ 'i', `Class`],
					[/* text */ 't', `
          is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Set`],
				[/* text */ 't', ` of public credentials that are instances
          of the  specified `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'equals(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Compares the specified Object with this `],
				[/* inline code block */ 'i', `Subject`],
				[/* text */ 't', `
 for equality.  Returns true if the given object is also a Subject
 and the two `],
				[/* inline code block */ 'i', `Subject`],
				[/* text */ 't', ` instances are equivalent.
 More formally, two `],
				[/* inline code block */ 'i', `Subject`],
				[/* text */ 't', ` instances are
 equal if their `],
				[/* inline code block */ 'i', `Principal`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `Credential`],
				[/* text */ 't', `
 Sets are equal.`]
			],
			[/* parameters */
				[/* parameter */ 'o', [/* parameter description */
					[/* text */ 't', `Object to be compared for equality with this
          `],
					[/* inline code block */ 'i', `Subject`],
					[/* text */ 't', `.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if a security manager is installed and the
         caller does not have a `],
					[/* reference */ 'r', `javax.security.auth.PrivateCredentialPermission`, `PrivateCredentialPermission`],
					[/* text */ 't', `
         permission to access the private credentials for this
         `],
					[/* inline code block */ 'i', `Subject`],
					[/* text */ 't', ` or the provided `],
					[/* inline code block */ 'i', `Subject`],
					[/* text */ 't', `.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `true if the specified Object is equal to this
          `],
				[/* inline code block */ 'i', `Subject`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'isReadOnly()', [
			[/* method description */
				[/* text */ 't', `Query whether this `],
				[/* inline code block */ 'i', `Subject`],
				[/* text */ 't', ` is read-only.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `true if this `],
				[/* inline code block */ 'i', `Subject`],
				[/* text */ 't', ` is read-only, false otherwise.`]
			]
		]],
		[/* method */ 'hashCode()', [
			[/* method description */
				[/* text */ 't', `Returns a hashcode for this `],
				[/* inline code block */ 'i', `Subject`],
				[/* text */ 't', `.`]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if a security manager is installed and the
         caller does not have a `],
					[/* reference */ 'r', `javax.security.auth.PrivateCredentialPermission`, `PrivateCredentialPermission`],
					[/* text */ 't', `
         permission to access this Subject's private credentials.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a hashcode for this `],
				[/* inline code block */ 'i', `Subject`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Return the String representation of this `],
				[/* inline code block */ 'i', `Subject`],
				[/* text */ 't', `.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the String representation of this `],
				[/* inline code block */ 'i', `Subject`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'getPrivateCredentials()', [
			[/* method description */
				[/* text */ 't', `Return the `],
				[/* inline code block */ 'i', `Set`],
				[/* text */ 't', ` of private credentials held by this
 `],
				[/* inline code block */ 'i', `Subject`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The returned `],
					[/* inline code block */ 'i', `Set`],
					[/* text */ 't', ` is backed by this Subject's
 internal private Credential `],
					[/* inline code block */ 'i', `Set`],
					[/* text */ 't', `.  Any modification
 to the returned `],
					[/* inline code block */ 'i', `Set`],
					[/* text */ 't', ` affects the internal private
 Credential `],
					[/* inline code block */ 'i', `Set`],
					[/* text */ 't', ` as well.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` If a security manager is installed, the caller must have a
 `],
					[/* reference */ 'r', `javax.security.auth.AuthPermission#<init>(java.lang.String)`, `AuthPermission("modifyPrivateCredentials")`],
					[/* text */ 't', ` permission to modify
 the returned set, or a `],
					[/* inline code block */ 'i', `SecurityException`],
					[/* text */ 't', ` will be thrown.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` While iterating through the `],
					[/* inline code block */ 'i', `Set`],
					[/* text */ 't', `,
 a `],
					[/* inline code block */ 'i', `SecurityException`],
					[/* text */ 't', ` is thrown if a security manager is installed
 and the caller does not have a `],
					[/* reference */ 'r', `javax.security.auth.PrivateCredentialPermission`, `PrivateCredentialPermission`],
					[/* text */ 't', `
 to access a particular Credential.  The `],
					[/* inline code block */ 'i', `Iterator`],
					[/* text */ 't', `
 is nevertheless advanced to the next element in the `],
					[/* inline code block */ 'i', `Set`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Set`],
				[/* text */ 't', ` of private credentials held by this
          `],
				[/* inline code block */ 'i', `Subject`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'getPublicCredentials()', [
			[/* method description */
				[/* text */ 't', `Return the `],
				[/* inline code block */ 'i', `Set`],
				[/* text */ 't', ` of public credentials held by this
 `],
				[/* inline code block */ 'i', `Subject`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The returned `],
					[/* inline code block */ 'i', `Set`],
					[/* text */ 't', ` is backed by this Subject's
 internal public Credential `],
					[/* inline code block */ 'i', `Set`],
					[/* text */ 't', `.  Any modification
 to the returned `],
					[/* inline code block */ 'i', `Set`],
					[/* text */ 't', ` affects the internal public
 Credential `],
					[/* inline code block */ 'i', `Set`],
					[/* text */ 't', ` as well.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` If a security manager is installed, the caller must have a
 `],
					[/* reference */ 'r', `javax.security.auth.AuthPermission#<init>(java.lang.String)`, `AuthPermission("modifyPublicCredentials")`],
					[/* text */ 't', ` permission to modify
 the returned set, or a `],
					[/* inline code block */ 'i', `SecurityException`],
					[/* text */ 't', ` will be thrown.`]
				]]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Set`],
				[/* text */ 't', ` of public credentials held by this
          `],
				[/* inline code block */ 'i', `Subject`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'getPrincipals()', [
			[/* method description */
				[/* text */ 't', `Return the `],
				[/* inline code block */ 'i', `Set`],
				[/* text */ 't', ` of Principals associated with this
 `],
				[/* inline code block */ 'i', `Subject`],
				[/* text */ 't', `.  Each `],
				[/* inline code block */ 'i', `Principal`],
				[/* text */ 't', ` represents
 an identity for this `],
				[/* inline code block */ 'i', `Subject`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The returned `],
					[/* inline code block */ 'i', `Set`],
					[/* text */ 't', ` is backed by this Subject's
 internal `],
					[/* inline code block */ 'i', `Principal`],
					[/* text */ 't', ` `],
					[/* inline code block */ 'i', `Set`],
					[/* text */ 't', `.  Any modification
 to the returned `],
					[/* inline code block */ 'i', `Set`],
					[/* text */ 't', ` affects the internal
 `],
					[/* inline code block */ 'i', `Principal`],
					[/* text */ 't', ` `],
					[/* inline code block */ 'i', `Set`],
					[/* text */ 't', ` as well.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` If a security manager is installed, the caller must have a
 `],
					[/* reference */ 'r', `javax.security.auth.AuthPermission#<init>(java.lang.String)`, `AuthPermission("modifyPrincipals")`],
					[/* text */ 't', ` permission to modify
 the returned set, or a `],
					[/* inline code block */ 'i', `SecurityException`],
					[/* text */ 't', ` will be thrown.`]
				]]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the `],
				[/* inline code block */ 'i', `Set`],
				[/* text */ 't', ` of Principals associated with this
          `],
				[/* inline code block */ 'i', `Subject`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'doAs(javax.security.auth.Subject,java.security.PrivilegedAction)', [
			[/* method description */
				[/* text */ 't', `Perform work as a particular `],
				[/* inline code block */ 'i', `Subject`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method first retrieves the current Thread's
 `],
					[/* inline code block */ 'i', `AccessControlContext`],
					[/* text */ 't', ` via
 `],
					[/* inline code block */ 'i', `AccessController.getContext`],
					[/* text */ 't', `,
 and then instantiates a new `],
					[/* inline code block */ 'i', `AccessControlContext`],
					[/* text */ 't', `
 using the retrieved context along with a new
 `],
					[/* inline code block */ 'i', `SubjectDomainCombiner`],
					[/* text */ 't', ` (constructed using
 the provided `],
					[/* inline code block */ 'i', `Subject`],
					[/* text */ 't', `).
 Finally, this method invokes `],
					[/* inline code block */ 'i', `AccessController.doPrivileged`],
					[/* text */ 't', `,
 passing it the provided `],
					[/* inline code block */ 'i', `PrivilegedAction`],
					[/* text */ 't', `,
 as well as the newly constructed `],
					[/* inline code block */ 'i', `AccessControlContext`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'subject', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `Subject`],
					[/* text */ 't', ` that the specified
                  `],
					[/* inline code block */ 'i', `action`],
					[/* text */ 't', ` will run as.  This parameter
                  may be `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]],
				[/* parameter */ 'action', [/* parameter description */
					[/* text */ 't', `the code to be run as the specified
                  `],
					[/* inline code block */ 'i', `Subject`],
					[/* text */ 't', `.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `PrivilegedAction`],
					[/* text */ 't', `
                  is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if a security manager is installed and the
                  caller does not have an
                  `],
					[/* reference */ 'r', `javax.security.auth.AuthPermission#<init>(java.lang.String)`, `AuthPermission("doAs")`],
					[/* text */ 't', ` permission to invoke this
                  method.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the value returned by the PrivilegedAction's
                  `],
				[/* inline code block */ 'i', `run`],
				[/* text */ 't', ` method.`]
			]
		]],
		[/* method */ 'doAs(javax.security.auth.Subject,java.security.PrivilegedExceptionAction)', [
			[/* method description */
				[/* text */ 't', `Perform work as a particular `],
				[/* inline code block */ 'i', `Subject`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method first retrieves the current Thread's
 `],
					[/* inline code block */ 'i', `AccessControlContext`],
					[/* text */ 't', ` via
 `],
					[/* inline code block */ 'i', `AccessController.getContext`],
					[/* text */ 't', `,
 and then instantiates a new `],
					[/* inline code block */ 'i', `AccessControlContext`],
					[/* text */ 't', `
 using the retrieved context along with a new
 `],
					[/* inline code block */ 'i', `SubjectDomainCombiner`],
					[/* text */ 't', ` (constructed using
 the provided `],
					[/* inline code block */ 'i', `Subject`],
					[/* text */ 't', `).
 Finally, this method invokes `],
					[/* inline code block */ 'i', `AccessController.doPrivileged`],
					[/* text */ 't', `,
 passing it the provided `],
					[/* inline code block */ 'i', `PrivilegedExceptionAction`],
					[/* text */ 't', `,
 as well as the newly constructed `],
					[/* inline code block */ 'i', `AccessControlContext`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'subject', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `Subject`],
					[/* text */ 't', ` that the specified
                  `],
					[/* inline code block */ 'i', `action`],
					[/* text */ 't', ` will run as.  This parameter
                  may be `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]],
				[/* parameter */ 'action', [/* parameter description */
					[/* text */ 't', `the code to be run as the specified
                  `],
					[/* inline code block */ 'i', `Subject`],
					[/* text */ 't', `.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.security.PrivilegedActionException', [/* throw description */
					[/* text */ 't', `if the
                  `],
					[/* inline code block */ 'i', `PrivilegedExceptionAction.run`],
					[/* text */ 't', `
                  method throws a checked exception.`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified
                  `],
					[/* inline code block */ 'i', `PrivilegedExceptionAction`],
					[/* text */ 't', ` is
                  `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if a security manager is installed and the
                  caller does not have an
                  `],
					[/* reference */ 'r', `javax.security.auth.AuthPermission#<init>(java.lang.String)`, `AuthPermission("doAs")`],
					[/* text */ 't', ` permission to invoke this
                  method.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the value returned by the
                  PrivilegedExceptionAction's `],
				[/* inline code block */ 'i', `run`],
				[/* text */ 't', ` method.`]
			]
		]],
		[/* method */ 'doAsPrivileged(javax.security.auth.Subject,java.security.PrivilegedAction,java.security.AccessControlContext)', [
			[/* method description */
				[/* text */ 't', `Perform privileged work as a particular `],
				[/* inline code block */ 'i', `Subject`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method behaves exactly as `],
					[/* inline code block */ 'i', `Subject.doAs`],
					[/* text */ 't', `,
 except that instead of retrieving the current Thread's
 `],
					[/* inline code block */ 'i', `AccessControlContext`],
					[/* text */ 't', `, it uses the provided
 `],
					[/* inline code block */ 'i', `AccessControlContext`],
					[/* text */ 't', `.  If the provided
 `],
					[/* inline code block */ 'i', `AccessControlContext`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `,
 this method instantiates a new `],
					[/* inline code block */ 'i', `AccessControlContext`],
					[/* text */ 't', `
 with an empty collection of ProtectionDomains.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'subject', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `Subject`],
					[/* text */ 't', ` that the specified
                  `],
					[/* inline code block */ 'i', `action`],
					[/* text */ 't', ` will run as.  This parameter
                  may be `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]],
				[/* parameter */ 'action', [/* parameter description */
					[/* text */ 't', `the code to be run as the specified
                  `],
					[/* inline code block */ 'i', `Subject`],
					[/* text */ 't', `.`]
				]],
				[/* parameter */ 'acc', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `AccessControlContext`],
					[/* text */ 't', ` to be tied to the
                  specified `],
					[/* text */ 't', `subject`],
					[/* text */ 't', ` and `],
					[/* text */ 't', `action`],
					[/* text */ 't', `.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `PrivilegedAction`],
					[/* text */ 't', `
                  is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if a security manager is installed and the
                  caller does not have a
                  `],
					[/* reference */ 'r', `javax.security.auth.AuthPermission#<init>(java.lang.String)`, `AuthPermission("doAsPrivileged")`],
					[/* text */ 't', ` permission to invoke
                  this method.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the value returned by the PrivilegedAction's
                  `],
				[/* inline code block */ 'i', `run`],
				[/* text */ 't', ` method.`]
			]
		]],
		[/* method */ 'doAsPrivileged(javax.security.auth.Subject,java.security.PrivilegedExceptionAction,java.security.AccessControlContext)', [
			[/* method description */
				[/* text */ 't', `Perform privileged work as a particular `],
				[/* inline code block */ 'i', `Subject`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method behaves exactly as `],
					[/* inline code block */ 'i', `Subject.doAs`],
					[/* text */ 't', `,
 except that instead of retrieving the current Thread's
 `],
					[/* inline code block */ 'i', `AccessControlContext`],
					[/* text */ 't', `, it uses the provided
 `],
					[/* inline code block */ 'i', `AccessControlContext`],
					[/* text */ 't', `.  If the provided
 `],
					[/* inline code block */ 'i', `AccessControlContext`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `,
 this method instantiates a new `],
					[/* inline code block */ 'i', `AccessControlContext`],
					[/* text */ 't', `
 with an empty collection of ProtectionDomains.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'subject', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `Subject`],
					[/* text */ 't', ` that the specified
                  `],
					[/* inline code block */ 'i', `action`],
					[/* text */ 't', ` will run as.  This parameter
                  may be `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]],
				[/* parameter */ 'action', [/* parameter description */
					[/* text */ 't', `the code to be run as the specified
                  `],
					[/* inline code block */ 'i', `Subject`],
					[/* text */ 't', `.`]
				]],
				[/* parameter */ 'acc', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `AccessControlContext`],
					[/* text */ 't', ` to be tied to the
                  specified `],
					[/* text */ 't', `subject`],
					[/* text */ 't', ` and `],
					[/* text */ 't', `action`],
					[/* text */ 't', `.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.security.PrivilegedActionException', [/* throw description */
					[/* text */ 't', `if the
                  `],
					[/* inline code block */ 'i', `PrivilegedExceptionAction.run`],
					[/* text */ 't', `
                  method throws a checked exception.`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified
                  `],
					[/* inline code block */ 'i', `PrivilegedExceptionAction`],
					[/* text */ 't', ` is
                  `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if a security manager is installed and the
                  caller does not have a
                  `],
					[/* reference */ 'r', `javax.security.auth.AuthPermission#<init>(java.lang.String)`, `AuthPermission("doAsPrivileged")`],
					[/* text */ 't', ` permission to invoke
                  this method.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the value returned by the
                  PrivilegedExceptionAction's `],
				[/* inline code block */ 'i', `run`],
				[/* text */ 't', ` method.`]
			]
		]],
		[/* method */ 'getSubject(java.security.AccessControlContext)', [
			[/* method description */
				[/* text */ 't', `Get the `],
				[/* inline code block */ 'i', `Subject`],
				[/* text */ 't', ` associated with the provided
 `],
				[/* inline code block */ 'i', `AccessControlContext`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The `],
					[/* inline code block */ 'i', `AccessControlContext`],
					[/* text */ 't', ` may contain many
 Subjects (from nested `],
					[/* inline code block */ 'i', `doAs`],
					[/* text */ 't', ` calls).
 In this situation, the most recent `],
					[/* inline code block */ 'i', `Subject`],
					[/* text */ 't', ` associated
 with the `],
					[/* inline code block */ 'i', `AccessControlContext`],
					[/* text */ 't', ` is returned.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'acc', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `AccessControlContext`],
					[/* text */ 't', ` from which to retrieve
          the `],
					[/* inline code block */ 'i', `Subject`],
					[/* text */ 't', `.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if a security manager is installed and the
          caller does not have an
          `],
					[/* reference */ 'r', `javax.security.auth.AuthPermission#<init>(java.lang.String)`, `AuthPermission("getSubject")`],
					[/* text */ 't', ` permission to get the
          `],
					[/* inline code block */ 'i', `Subject`],
					[/* text */ 't', `.`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the provided
          `],
					[/* inline code block */ 'i', `AccessControlContext`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the `],
				[/* inline code block */ 'i', `Subject`],
				[/* text */ 't', ` associated with the provided
          `],
				[/* inline code block */ 'i', `AccessControlContext`],
				[/* text */ 't', `, or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `
          if no `],
				[/* inline code block */ 'i', `Subject`],
				[/* text */ 't', ` is associated
          with the provided `],
				[/* inline code block */ 'i', `AccessControlContext`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'setReadOnly()', [
			[/* method description */
				[/* text */ 't', `Set this `],
				[/* inline code block */ 'i', `Subject`],
				[/* text */ 't', ` to be read-only.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` Modifications (additions and removals) to this Subject's
 `],
					[/* inline code block */ 'i', `Principal`],
					[/* text */ 't', ` `],
					[/* inline code block */ 'i', `Set`],
					[/* text */ 't', ` and
 credential Sets will be disallowed.
 The `],
					[/* inline code block */ 'i', `destroy`],
					[/* text */ 't', ` operation on this Subject's credentials will
 still be permitted.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` Subsequent attempts to modify the Subject's `],
					[/* inline code block */ 'i', `Principal`],
					[/* text */ 't', `
 and credential Sets will result in an
 `],
					[/* inline code block */ 'i', `IllegalStateException`],
					[/* text */ 't', ` being thrown.
 Also, once a `],
					[/* inline code block */ 'i', `Subject`],
					[/* text */ 't', ` is read-only,
 it can not be reset to being writable again.`]
				]]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if a security manager is installed and the
         caller does not have an
         `],
					[/* reference */ 'r', `javax.security.auth.AuthPermission#<init>(java.lang.String)`, `AuthPermission("setReadOnly")`],
					[/* text */ 't', ` permission to set this
         `],
					[/* inline code block */ 'i', `Subject`],
					[/* text */ 't', ` to be read-only.`]
				]]
			],
			/* return */ UDF
		]]
	],
	/* enum values */ UDF
]);
