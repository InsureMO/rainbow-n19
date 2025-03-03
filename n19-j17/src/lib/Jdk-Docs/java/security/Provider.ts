import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.security.Provider', [
	[/* class description */
		[/* text */ 't', `This class represents a "provider" for the
 Java Security API, where a provider implements some or all parts of
 Java Security. Services that a provider may implement include:

 `],
		[/* list */ 'l', [
			[/* block */ 'b', `Algorithms (such as DSA, RSA, or SHA-256).

 `],
			[/* block */ 'b', `Key generation, conversion, and management facilities (such as for
 algorithm-specific keys).

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Some provider implementations may encounter unrecoverable internal
 errors during their operation, for example a failure to communicate with a
 security token. A `],
			[/* reference */ 'r', `java.security.ProviderException`],
			[/* text */ 't', ` should be used to indicate
 such errors.

 `]
		]],
		[/* block */ 'b', `Please note that a provider can be used to implement any security
 service in Java that uses a pluggable architecture with a choice
 of implementations that fit underneath.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `The service type `],
			[/* inline code block */ 'i', `Provider`],
			[/* text */ 't', ` is reserved for use by the
 security framework. Services of this type cannot be added, removed,
 or modified by applications.
 The following attributes are automatically placed in each Provider object:
 `]
		]],
		[/* table */ 'tbl',
			[/* caption */ 'tc', [
				[/* text */ 't', `Attributes Automatically Placed in a Provider Object`]
			]],
			[/* table header */ 'th', [
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `Name`]
					]],
					[/* table header cell */ 'thc', [
						[/* text */ 't', `Value`]
					]]
				]]
			]],
			[/* table body */ 'tb', [
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `Provider.id name`]
					]],
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `String.valueOf(provider.getName())`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `Provider.id version`]
					]],
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `String.valueOf(provider.getVersionStr())`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `Provider.id info`]
					]],
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `String.valueOf(provider.getInfo())`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `Provider.id className`]
					]],
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `provider.getClass().getName()`]
					]]
				]]
			]],
		],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `Each provider has a name and a version string. A provider normally
 identifies itself with a file named `],
			[/* inline code block */ 'i', `java.security.Provider`],
			[/* text */ 't', `
 in the resource directory `],
			[/* inline code block */ 'i', `META-INF/services`],
			[/* text */ 't', `.
 Security providers are looked up via the `],
			[/* reference */ 'r', `java.util.ServiceLoader`],
			[/* text */ 't', ` mechanism
 using the `],
			[/* reference */ 'r', `java.ClassLoader#getSystemClassLoader()`],
			[/* text */ 't', `.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Providers may be configured such that they are automatically
 installed and made available at runtime via the
 `],
			[/* reference */ 'r', `.Security#getProviders()`],
			[/* text */ 't', ` method.
 The mechanism for configuring and installing security providers is
 implementation-specific.`]
		]]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>(java.lang.String,java.lang.String,java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a provider with the specified name, version string,
 and information.

 `],
				[/* block */ 'b', `The version string contains a version number optionally followed
 by other information separated by one of the characters of '+', '-'.

 The format for the version number is:

 `],
				[/* block */ 'b', [
					[/* code block */ 'c', `     ^[0-9]+(\\.[0-9]+)*
 `]
				]],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `In order to return the version number in a double, when there are
 more than two components (separated by '.' as defined above), only
 the first two components are retained. The resulting string is then
 passed to `],
					[/* reference */ 'r', `java.Double#valueOf(java.lang.String)`],
					[/* text */ 't', ` to generate version number,
 i.e. `],
					[/* reference */ 'r', `#getVersion()`, `getVersion()`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', `If the conversion failed, value 0 will be used.`]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `the provider name.`]
				]],
				[/* parameter */ 'versionStr', [/* parameter description */
					[/* text */ 't', `the provider version string.`]
				]],
				[/* parameter */ 'info', [/* parameter description */
					[/* text */ 't', `a description of the provider and its services.`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.String,double,java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a provider with the specified name, version number,
 and information. Calling this constructor is equivalent to call the
 `],
				[/* reference */ 'r', `#%3Cinit%3E(java.lang.String,java.lang.String,java.lang.String)`, `Provider(String, String, String)`],
				[/* text */ 't', ` with `],
				[/* inline code block */ 'i', `name`],
				[/* text */ 't', `
 name, `],
				[/* inline code block */ 'i', `Double.toString(version)`],
				[/* text */ 't', `, and `],
				[/* inline code block */ 'i', `info`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `the provider name.`]
				]],
				[/* parameter */ 'version', [/* parameter description */
					[/* text */ 't', `the provider version number.`]
				]],
				[/* parameter */ 'info', [/* parameter description */
					[/* text */ 't', `a description of the provider and its services.`]
				]]
			],
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'getName()', [
			[/* method description */
				[/* text */ 't', `Returns the name of this provider.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the name of this provider.`]
			]
		]],
		[/* method */ 'remove(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Removes the `],
				[/* inline code block */ 'i', `key`],
				[/* text */ 't', ` property (and its corresponding
 `],
				[/* inline code block */ 'i', `value`],
				[/* text */ 't', `).

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If a security manager is enabled, its `],
					[/* inline code block */ 'i', `checkSecurityAccess`],
					[/* text */ 't', `
 method is called with the string `],
					[/* inline code block */ 'i', `"removeProviderProperty."+name`],
					[/* text */ 't', `,
 where `],
					[/* inline code block */ 'i', `name`],
					[/* text */ 't', ` is the provider name, to see if it's ok to remove this
 provider's properties.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'key', [/* parameter description */
					[/* text */ 't', `the key that needs to be removed`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if a security manager exists and its `],
					[/* reference */ 'r', `java.SecurityManager#checkSecurityAccess(java.lang.String)`],
					[/* text */ 't', ` method
          denies access to remove this provider's properties.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the value to which the key had been mapped in this hashtable,
          or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if the key did not have a mapping`]
			]
		]],
		[/* method */ 'remove(java.lang.Object,java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Removes the entry for the specified key only if it is currently
 mapped to the specified value.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If a security manager is enabled, its `],
					[/* inline code block */ 'i', `checkSecurityAccess`],
					[/* text */ 't', `
 method is called with the string `],
					[/* inline code block */ 'i', `"removeProviderProperty."+name`],
					[/* text */ 't', `,
 where `],
					[/* inline code block */ 'i', `name`],
					[/* text */ 't', ` is the provider name, to see if it's ok to remove this
 provider's properties.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'key', [/* parameter description */
					[/* text */ 't', `key with which the specified value is associated`]
				]],
				[/* parameter */ 'value', [/* parameter description */
					[/* text */ 't', `value expected to be associated with the specified key`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if a security manager exists and its `],
					[/* reference */ 'r', `java.SecurityManager#checkSecurityAccess(java.lang.String)`],
					[/* text */ 't', ` method
          denies access to remove this provider's properties.`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the value was removed`]
			]
		]],
		[/* method */ 'get(java.lang.Object)', UDF],
		[/* method */ 'put(java.lang.Object,java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Sets the `],
				[/* inline code block */ 'i', `key`],
				[/* text */ 't', ` property to have the specified
 `],
				[/* inline code block */ 'i', `value`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If a security manager is enabled, its `],
					[/* inline code block */ 'i', `checkSecurityAccess`],
					[/* text */ 't', `
 method is called with the string `],
					[/* inline code block */ 'i', `"putProviderProperty."+name`],
					[/* text */ 't', `,
 where `],
					[/* inline code block */ 'i', `name`],
					[/* text */ 't', ` is the provider name, to see if it's ok to set this
 provider's property values.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'key', [/* parameter description */
					[/* text */ 't', `the hashtable key`]
				]],
				[/* parameter */ 'value', [/* parameter description */
					[/* text */ 't', `the value`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if a security manager exists and its `],
					[/* reference */ 'r', `java.SecurityManager#checkSecurityAccess(java.lang.String)`],
					[/* text */ 't', ` method
          denies access to set property values.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the previous value of the specified key in this hashtable,
             or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if it did not have one`]
			]
		]],
		[/* method */ 'getProperty(java.lang.String)', UDF],
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Returns a string with the name and the version string
 of this provider.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the string with the name and the version string
 for this provider.`]
			]
		]],
		[/* method */ 'values()', [
			[/* method description */
				[/* text */ 't', `Returns an unmodifiable Collection view of the property values
 contained in this provider.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a collection view of the values contained in this map`]
			]
		]],
		[/* method */ 'load(java.io.InputStream)', [
			[/* method description */
				[/* text */ 't', `Reads a property list (key and element pairs) from the input stream.`]
			],
			[/* parameters */
				[/* parameter */ 'inStream', [/* parameter description */
					[/* text */ 't', `the input stream.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an error occurred when reading from the
               input stream.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'clear()', [
			[/* method description */
				[/* text */ 't', `Clears this provider so that it no longer contains the properties
 used to look up facilities implemented by the provider.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If a security manager is enabled, its `],
					[/* inline code block */ 'i', `checkSecurityAccess`],
					[/* text */ 't', `
 method is called with the string `],
					[/* inline code block */ 'i', `"clearProviderProperties."+name`],
					[/* text */ 't', `
 (where `],
					[/* inline code block */ 'i', `name`],
					[/* text */ 't', ` is the provider name) to see if it's ok to clear
 this provider.`]
				]]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if a security manager exists and its `],
					[/* reference */ 'r', `java.SecurityManager#checkSecurityAccess(java.lang.String)`],
					[/* text */ 't', ` method
          denies access to clear this provider`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'replace(java.lang.Object,java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Replaces the entry for the specified key only if it is
 currently mapped to some value.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If a security manager is enabled, its `],
					[/* inline code block */ 'i', `checkSecurityAccess`],
					[/* text */ 't', `
 method is called with the string `],
					[/* inline code block */ 'i', `"putProviderProperty."+name`],
					[/* text */ 't', `,
 where `],
					[/* inline code block */ 'i', `name`],
					[/* text */ 't', ` is the provider name, to see if it's ok to set this
 provider's property values.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'key', [/* parameter description */
					[/* text */ 't', `key with which the specified value is associated`]
				]],
				[/* parameter */ 'value', [/* parameter description */
					[/* text */ 't', `value to be associated with the specified key`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if a security manager exists and its `],
					[/* reference */ 'r', `java.SecurityManager#checkSecurityAccess(java.lang.String)`],
					[/* text */ 't', ` method
          denies access to set property values.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the previous value associated with the specified key, or
         `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if there was no mapping for the key.
         (A `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` return can also indicate that the map
         previously associated `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` with the key,
         if the implementation supports null values.)`]
			]
		]],
		[/* method */ 'replace(java.lang.Object,java.lang.Object,java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Replaces the entry for the specified key only if currently
 mapped to the specified value.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If a security manager is enabled, its `],
					[/* inline code block */ 'i', `checkSecurityAccess`],
					[/* text */ 't', `
 method is called with the string `],
					[/* inline code block */ 'i', `"putProviderProperty."+name`],
					[/* text */ 't', `,
 where `],
					[/* inline code block */ 'i', `name`],
					[/* text */ 't', ` is the provider name, to see if it's ok to set this
 provider's property values.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'key', [/* parameter description */
					[/* text */ 't', `key with which the specified value is associated`]
				]],
				[/* parameter */ 'oldValue', [/* parameter description */
					[/* text */ 't', `value expected to be associated with the specified key`]
				]],
				[/* parameter */ 'newValue', [/* parameter description */
					[/* text */ 't', `value to be associated with the specified key`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if a security manager exists and its `],
					[/* reference */ 'r', `java.SecurityManager#checkSecurityAccess(java.lang.String)`],
					[/* text */ 't', ` method
          denies access to set property values.`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the value was replaced`]
			]
		]],
		[/* method */ 'replaceAll(java.util.function.BiFunction)', [
			[/* method description */
				[/* text */ 't', `Replaces each entry's value with the result of invoking the given
 function on that entry, in the order entries are returned by an entry
 set iterator, until all entries have been processed or the function
 throws an exception.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If a security manager is enabled, its `],
					[/* inline code block */ 'i', `checkSecurityAccess`],
					[/* text */ 't', `
 method is called with the string `],
					[/* inline code block */ 'i', `"putProviderProperty."+name`],
					[/* text */ 't', `,
 where `],
					[/* inline code block */ 'i', `name`],
					[/* text */ 't', ` is the provider name, to see if it's ok to set this
 provider's property values.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'function', [/* parameter description */
					[/* text */ 't', `the function to apply to each entry`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if a security manager exists and its `],
					[/* reference */ 'r', `java.SecurityManager#checkSecurityAccess(java.lang.String)`],
					[/* text */ 't', ` method
          denies access to set property values.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'elements()', UDF],
		[/* method */ 'merge(java.lang.Object,java.lang.Object,java.util.function.BiFunction)', [
			[/* method description */
				[/* text */ 't', `If the specified key is not already associated with a value or is
 associated with null, associates it with the given value. Otherwise,
 replaces the value with the results of the given remapping function,
 or removes if the result is null. This method may be of use when
 combining multiple mapped values for a key.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If a security manager is enabled, its `],
					[/* inline code block */ 'i', `checkSecurityAccess`],
					[/* text */ 't', `
 method is called with the strings `],
					[/* inline code block */ 'i', `"putProviderProperty."+name`],
					[/* text */ 't', `
 and `],
					[/* inline code block */ 'i', `"removeProviderProperty."+name`],
					[/* text */ 't', `, where `],
					[/* inline code block */ 'i', `name`],
					[/* text */ 't', ` is the
 provider name, to see if it's ok to set this provider's property values
 and remove this provider's properties.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'key', [/* parameter description */
					[/* text */ 't', `key with which the resulting value is to be associated`]
				]],
				[/* parameter */ 'value', [/* parameter description */
					[/* text */ 't', `the non-null value to be merged with the existing value
        associated with the key or, if no existing value or a null value
        is associated with the key, to be associated with the key`]
				]],
				[/* parameter */ 'remappingFunction', [/* parameter description */
					[/* text */ 't', `the remapping function to recompute a value if
        present`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if a security manager exists and its `],
					[/* reference */ 'r', `java.SecurityManager#checkSecurityAccess(java.lang.String)`],
					[/* text */ 't', ` method
          denies access to set property values or remove properties.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the new value associated with the specified key, or null if no
         value is associated with the key`]
			]
		]],
		[/* method */ 'entrySet()', [
			[/* method description */
				[/* text */ 't', `Returns an unmodifiable Set view of the property entries contained
 in this Provider.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a set view of the mappings contained in this map`]
			]
		]],
		[/* method */ 'putAll(java.util.Map)', [
			[/* method description */
				[/* text */ 't', `Copies all of the mappings from the specified Map to this provider.
 These mappings will replace any properties that this provider had
 for any of the keys currently in the specified Map.`]
			],
			[/* parameters */
				[/* parameter */ 't', [/* parameter description */
					[/* text */ 't', `mappings to be stored in this map`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'putIfAbsent(java.lang.Object,java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `If the specified key is not already associated with a value (or is mapped
 to `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `) associates it with the given value and returns
 `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `, else returns the current value.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If a security manager is enabled, its `],
					[/* inline code block */ 'i', `checkSecurityAccess`],
					[/* text */ 't', `
 method is called with the string `],
					[/* inline code block */ 'i', `"putProviderProperty."+name`],
					[/* text */ 't', `,
 where `],
					[/* inline code block */ 'i', `name`],
					[/* text */ 't', ` is the provider name, to see if it's ok to set this
 provider's property values.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'key', [/* parameter description */
					[/* text */ 't', `key with which the specified value is to be associated`]
				]],
				[/* parameter */ 'value', [/* parameter description */
					[/* text */ 't', `value to be associated with the specified key`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if a security manager exists and its `],
					[/* reference */ 'r', `java.SecurityManager#checkSecurityAccess(java.lang.String)`],
					[/* text */ 't', ` method
          denies access to set property values.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the previous value associated with the specified key, or
         `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if there was no mapping for the key.
         (A `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` return can also indicate that the map
         previously associated `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` with the key,
         if the implementation supports null values.)`]
			]
		]],
		[/* method */ 'compute(java.lang.Object,java.util.function.BiFunction)', [
			[/* method description */
				[/* text */ 't', `Attempts to compute a mapping for the specified key and its
 current mapped value (or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if there is no current
 mapping).

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If a security manager is enabled, its `],
					[/* inline code block */ 'i', `checkSecurityAccess`],
					[/* text */ 't', `
 method is called with the strings `],
					[/* inline code block */ 'i', `"putProviderProperty."+name`],
					[/* text */ 't', `
 and `],
					[/* inline code block */ 'i', `"removeProviderProperty."+name`],
					[/* text */ 't', `, where `],
					[/* inline code block */ 'i', `name`],
					[/* text */ 't', ` is the
 provider name, to see if it's ok to set this provider's property values
 and remove this provider's properties.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'key', [/* parameter description */
					[/* text */ 't', `key with which the specified value is to be associated`]
				]],
				[/* parameter */ 'remappingFunction', [/* parameter description */
					[/* text */ 't', `the remapping function to compute a value`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if a security manager exists and its `],
					[/* reference */ 'r', `java.SecurityManager#checkSecurityAccess(java.lang.String)`],
					[/* text */ 't', ` method
          denies access to set property values or remove properties.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the new value associated with the specified key, or null if none`]
			]
		]],
		[/* method */ 'forEach(java.util.function.BiConsumer)', [
			[/* method description */
				[/* block */ 'b', `Performs the given action for each entry in this map until all entries
 have been processed or the action throws an exception.   Unless
 otherwise specified by the implementing class, actions are performed in
 the order of entry set iteration (if an iteration order is specified.)
 Exceptions thrown by the action are relayed to the caller.`]
			],
			[/* parameters */
				[/* parameter */ 'action', [/* parameter description */
					[/* text */ 't', `The action to be performed for each entry`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'computeIfAbsent(java.lang.Object,java.util.function.Function)', [
			[/* method description */
				[/* text */ 't', `If the specified key is not already associated with a value (or
 is mapped to `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `), attempts to compute its value using
 the given mapping function and enters it into this map unless
 `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If a security manager is enabled, its `],
					[/* inline code block */ 'i', `checkSecurityAccess`],
					[/* text */ 't', `
 method is called with the strings `],
					[/* inline code block */ 'i', `"putProviderProperty."+name`],
					[/* text */ 't', `
 and `],
					[/* inline code block */ 'i', `"removeProviderProperty."+name`],
					[/* text */ 't', `, where `],
					[/* inline code block */ 'i', `name`],
					[/* text */ 't', ` is the
 provider name, to see if it's ok to set this provider's property values
 and remove this provider's properties.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'key', [/* parameter description */
					[/* text */ 't', `key with which the specified value is to be associated`]
				]],
				[/* parameter */ 'mappingFunction', [/* parameter description */
					[/* text */ 't', `the mapping function to compute a value`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if a security manager exists and its `],
					[/* reference */ 'r', `java.SecurityManager#checkSecurityAccess(java.lang.String)`],
					[/* text */ 't', ` method
          denies access to set property values and remove properties.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the current (existing or computed) value associated with
         the specified key, or null if the computed value is null`]
			]
		]],
		[/* method */ 'keys()', UDF],
		[/* method */ 'keySet()', [
			[/* method description */
				[/* text */ 't', `Returns an unmodifiable Set view of the property keys contained in
 this provider.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a set view of the keys contained in this map`]
			]
		]],
		[/* method */ 'getOrDefault(java.lang.Object,java.lang.Object)', [
			[/* method description */
				[/* block */ 'b', [
					[/* text */ 't', `Returns the value to which the specified key is mapped, or
 `],
					[/* inline code block */ 'i', `defaultValue`],
					[/* text */ 't', ` if this map contains no mapping for the key.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'key', [/* parameter description */
					[/* text */ 't', `the key whose associated value is to be returned`]
				]],
				[/* parameter */ 'defaultValue', [/* parameter description */
					[/* text */ 't', `the default mapping of the key`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the value to which the specified key is mapped, or
 `],
				[/* inline code block */ 'i', `defaultValue`],
				[/* text */ 't', ` if this map contains no mapping for the key`]
			]
		]],
		[/* method */ 'computeIfPresent(java.lang.Object,java.util.function.BiFunction)', [
			[/* method description */
				[/* text */ 't', `If the value for the specified key is present and non-null, attempts to
 compute a new mapping given the key and its current mapped value.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If a security manager is enabled, its `],
					[/* inline code block */ 'i', `checkSecurityAccess`],
					[/* text */ 't', `
 method is called with the strings `],
					[/* inline code block */ 'i', `"putProviderProperty."+name`],
					[/* text */ 't', `
 and `],
					[/* inline code block */ 'i', `"removeProviderProperty."+name`],
					[/* text */ 't', `, where `],
					[/* inline code block */ 'i', `name`],
					[/* text */ 't', ` is the
 provider name, to see if it's ok to set this provider's property values
 and remove this provider's properties.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'key', [/* parameter description */
					[/* text */ 't', `key with which the specified value is to be associated`]
				]],
				[/* parameter */ 'remappingFunction', [/* parameter description */
					[/* text */ 't', `the remapping function to compute a value`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if a security manager exists and its `],
					[/* reference */ 'r', `java.SecurityManager#checkSecurityAccess(java.lang.String)`],
					[/* text */ 't', ` method
          denies access to set property values or remove properties.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the new value associated with the specified key, or null if none`]
			]
		]],
		[/* method */ 'getVersion()', [
			[/* method description */
				[/* text */ 't', `Returns the version number for this provider.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the version number for this provider.`]
			]
		]],
		[/* method */ 'getService(java.lang.String,java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Get the service describing this Provider's implementation of the
 specified type of this algorithm or alias. If no such
 implementation exists, this method returns null. If there are two
 matching services, one added to this provider using
 `],
				[/* reference */ 'r', `#putService(java.security.Provider.Service)`, `putService()`],
				[/* text */ 't', ` and one added via `],
				[/* reference */ 'r', `#put(java.lang.Object,java.lang.Object)`, `put()`],
				[/* text */ 't', `,
 the service added via `],
				[/* reference */ 'r', `#putService(java.security.Provider.Service)`, `putService()`],
				[/* text */ 't', ` is returned.`]
			],
			[/* parameters */
				[/* parameter */ 'type', [/* parameter description */
					[/* text */ 't', `the type of `],
					[/* reference */ 'r', `java.security.Provider.Service`],
					[/* text */ 't', ` requested
 (for example, `],
					[/* inline code block */ 'i', `MessageDigest`],
					[/* text */ 't', `)`]
				]],
				[/* parameter */ 'algorithm', [/* parameter description */
					[/* text */ 't', `the case insensitive algorithm name (or alternate
 alias) of the service requested (for example, `],
					[/* inline code block */ 'i', `SHA-1`],
					[/* text */ 't', `)`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if type or algorithm is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the service describing this Provider's matching service
 or null if no such service exists`]
			]
		]],
		[/* method */ 'getServices()', [
			[/* method description */
				[/* text */ 't', `Get an unmodifiable Set of all services supported by
 this Provider.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an unmodifiable Set of all services supported by
 this Provider`]
			]
		]],
		[/* method */ 'configure(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Apply the supplied configuration argument to this provider instance
 and return the configured provider. Note that if this provider cannot
 be configured in-place, a new provider will be created and returned.
 Therefore, callers should always use the returned provider.`]
			],
			[/* parameters */
				[/* parameter */ 'configArg', [/* parameter description */
					[/* text */ 't', `the configuration information for configuring this
         provider.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if a configuration argument is
         not supported.`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the supplied configuration argument is
         null.`]
				]],
				[/* throw */ 'java.security.InvalidParameterException', [/* throw description */
					[/* text */ 't', `if the supplied configuration argument
         is invalid.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a provider configured with the supplied configuration argument.`]
			]
		]],
		[/* method */ 'isConfigured()', [
			[/* method description */
				[/* text */ 't', `Check if this provider instance has been configured.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if no further configuration is needed, false otherwise.`]
			]
		]],
		[/* method */ 'getVersionStr()', [
			[/* method description */
				[/* text */ 't', `Returns the version string for this provider.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the version string for this provider.`]
			]
		]],
		[/* method */ 'getInfo()', [
			[/* method description */
				[/* text */ 't', `Returns a human-readable description of the provider and its
 services.  This may return an HTML page, with relevant links.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a description of the provider and its services.`]
			]
		]],
		[/* method */ 'putService(java.security.Provider.Service)', [
			[/* method description */
				[/* text */ 't', `Add a service. If a service of the same type with the same algorithm
 name exists and it was added using `],
				[/* reference */ 'r', `#putService(java.security.Provider.Service)`, `putService()`],
				[/* text */ 't', `,
 it is replaced by the new service.
 This method also places information about this service
 in the provider's Hashtable values in the format described in the
 `],
				[/* external link */ 'a', `https://docs.oracle.com/pls/topic/lookup?ctx=javase17&id=security_guide_jca`, `Java Cryptography Architecture (JCA) Reference Guide`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Also, if there is a security manager, its
 `],
					[/* inline code block */ 'i', `checkSecurityAccess`],
					[/* text */ 't', ` method is called with the string
 `],
					[/* inline code block */ 'i', `"putProviderProperty."+name`],
					[/* text */ 't', `, where `],
					[/* inline code block */ 'i', `name`],
					[/* text */ 't', ` is
 the provider name, to see if it's ok to set this provider's property
 values. If the default implementation of `],
					[/* inline code block */ 'i', `checkSecurityAccess`],
					[/* text */ 't', `
 is used (that is, that method is not overridden), then this results in
 a call to the security manager's `],
					[/* inline code block */ 'i', `checkPermission`],
					[/* text */ 't', ` method with
 a `],
					[/* inline code block */ 'i', `SecurityPermission("putProviderProperty."+name)`],
					[/* text */ 't', `
 permission.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 's', [/* parameter description */
					[/* text */ 't', `the Service to add`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if a security manager exists and its `],
					[/* reference */ 'r', `java.SecurityManager#checkSecurityAccess(java.lang.String)`],
					[/* text */ 't', ` method denies
      access to set property values.`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if s is null`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'removeService(java.security.Provider.Service)', [
			[/* method description */
				[/* text */ 't', `Remove a service previously added using
 `],
				[/* reference */ 'r', `#putService(java.security.Provider.Service)`, `putService()`],
				[/* text */ 't', `. The specified service is removed from
 this provider. It will no longer be returned by
 `],
				[/* reference */ 'r', `#getService(java.lang.String,java.lang.String)`, `getService()`],
				[/* text */ 't', ` and its information will be removed
 from this provider's Hashtable.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Also, if there is a security manager, its
 `],
					[/* inline code block */ 'i', `checkSecurityAccess`],
					[/* text */ 't', ` method is called with the string
 `],
					[/* inline code block */ 'i', `"removeProviderProperty."+name`],
					[/* text */ 't', `, where `],
					[/* inline code block */ 'i', `name`],
					[/* text */ 't', ` is
 the provider name, to see if it's ok to remove this provider's
 properties. If the default implementation of
 `],
					[/* inline code block */ 'i', `checkSecurityAccess`],
					[/* text */ 't', ` is used (that is, that method is not
 overridden), then this results in a call to the security manager's
 `],
					[/* inline code block */ 'i', `checkPermission`],
					[/* text */ 't', ` method with a
 `],
					[/* inline code block */ 'i', `SecurityPermission("removeProviderProperty."+name)`],
					[/* text */ 't', `
 permission.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 's', [/* parameter description */
					[/* text */ 't', `the Service to be removed`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if a security manager exists and its `],
					[/* reference */ 'r', `java.SecurityManager#checkSecurityAccess(java.lang.String)`],
					[/* text */ 't', ` method denies
          access to remove this provider's properties.`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if s is null`]
				]]
			],
			/* return */ UDF
		]]
	],
]);
