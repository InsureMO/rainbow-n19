import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.security.Provider$Service', [
	[/* class description */
		[/* text */ 't', `The description of a security service. It encapsulates the properties
 of a service and contains a factory method to obtain new implementation
 instances of this service.

 `],
		[/* block */ 'b', `Each service has a provider that offers the service, a type,
 an algorithm name, and the name of the class that implements the
 service. Optionally, it also includes a list of alternate algorithm
 names for this service (aliases) and attributes, which are a map of
 (name, value) String pairs.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `This class defines the methods `],
			[/* reference */ 'r', `supportsParameter()`],
			[/* text */ 't', ` and `],
			[/* reference */ 'r', `newInstance()`],
			[/* text */ 't', `
 which are used by the Java security framework when it searches for
 suitable services and instantiates them. The valid arguments to those
 methods depend on the type of service. For the service types defined
 within Java SE, see the
 `],
			[/* external link */ 'a', `https://docs.oracle.com/pls/topic/lookup?ctx=javase17&id=security_guide_jca`, `Java Cryptography Architecture (JCA) Reference Guide`],
			[/* text */ 't', `
 for the valid values.
 Note that components outside of Java SE can define additional types of
 services and their behavior.

 `]
		]],
		[/* block */ 'b', `Instances of this class are immutable.`]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>(java.security.Provider,java.lang.String,java.lang.String,java.lang.String,java.util.List,java.util.Map)', [
			[/* constructor description */
				[/* text */ 't', `Construct a new service.`]
			],
			[/* parameters */
				[/* parameter */ 'provider', [/* parameter description */
					[/* text */ 't', `the provider that offers this service`]
				]],
				[/* parameter */ 'type', [/* parameter description */
					[/* text */ 't', `the type of this service`]
				]],
				[/* parameter */ 'algorithm', [/* parameter description */
					[/* text */ 't', `the algorithm name`]
				]],
				[/* parameter */ 'className', [/* parameter description */
					[/* text */ 't', `the name of the class implementing this service`]
				]],
				[/* parameter */ 'aliases', [/* parameter description */
					[/* text */ 't', `List of aliases or null if algorithm has no aliases`]
				]],
				[/* parameter */ 'attributes', [/* parameter description */
					[/* text */ 't', `Map of attributes or null if this implementation
                   has no attributes`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if provider, type, algorithm, or
 className is null`]
				]]
			]
		]]
	],
	[/* methods */
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Return a String representation of this service.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a String representation of this service.`]
			]
		]],
		[/* method */ 'newInstance(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Return a new instance of the implementation described by this
 service. The security provider framework uses this method to
 construct implementations. Applications will typically not need
 to call it.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The default implementation uses reflection to invoke the
 standard constructor for this type of service.
 Security providers can override this method to implement
 instantiation in a different way.
 For details and the values of constructorParameter that are
 valid for the various types of services see the
 `],
					[/* external link */ 'a', `https://docs.oracle.com/pls/topic/lookup?ctx=javase17&id=security_guide_jca`, `Java Cryptography Architecture (JCA) Reference Guide`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'constructorParameter', [/* parameter description */
					[/* text */ 't', `the value to pass to the constructor,
 or null if this type of service does not use a constructorParameter.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.security.InvalidParameterException', [/* throw description */
					[/* text */ 't', `if the value of
 constructorParameter is invalid for this type of service.`]
				]],
				[/* throw */ 'java.security.NoSuchAlgorithmException', [/* throw description */
					[/* text */ 't', `if instantiation failed for
 any other reason.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a new implementation of this service`]
			]
		]],
		[/* method */ 'getType()', [
			[/* method description */
				[/* text */ 't', `Get the type of this service. For example, `],
				[/* inline code block */ 'i', `MessageDigest`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the type of this service`]
			]
		]],
		[/* method */ 'getClassName()', [
			[/* method description */
				[/* text */ 't', `Return the name of the class implementing this service.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the name of the class implementing this service`]
			]
		]],
		[/* method */ 'getAttribute(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Return the value of the specified attribute or null if this
 attribute is not set for this Service.`]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `the name of the requested attribute`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if name is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the value of the specified attribute or null if the
         attribute is not present`]
			]
		]],
		[/* method */ 'getProvider()', [
			[/* method description */
				[/* text */ 't', `Return the Provider of this service.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the Provider of this service`]
			]
		]],
		[/* method */ 'getAlgorithm()', [
			[/* method description */
				[/* text */ 't', `Return the name of the algorithm of this service. For example,
 `],
				[/* inline code block */ 'i', `SHA-1`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the algorithm of this service`]
			]
		]],
		[/* method */ 'supportsParameter(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Test whether this Service can use the specified parameter.
 Returns false if this service cannot use the parameter. Returns
 true if this service can use the parameter, if a fast test is
 infeasible, or if the status is unknown.

 `],
				[/* block */ 'b', `The security provider framework uses this method with
 some types of services to quickly exclude non-matching
 implementations for consideration.
 Applications will typically not need to call it.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `For details and the values of parameter that are valid for the
 various types of services see the top of this class and the
 `],
					[/* external link */ 'a', `https://docs.oracle.com/pls/topic/lookup?ctx=javase17&id=security_guide_jca`, `Java Cryptography Architecture (JCA) Reference Guide`],
					[/* text */ 't', `.
 Security providers can override it to implement their own test.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'parameter', [/* parameter description */
					[/* text */ 't', `the parameter to test`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.security.InvalidParameterException', [/* throw description */
					[/* text */ 't', `if the value of parameter is
 invalid for this type of service or if this method cannot be
 used with this type of service`]
				]]
			],
			[/* return description */
				[/* text */ 't', `false if this service cannot use the specified
 parameter; true if it can possibly use the parameter`]
			]
		]]
	],
]);
