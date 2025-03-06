import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.time.zone.ZoneRulesProvider', [
	[/* class description */
		[/* text */ 't', `Provider of time-zone rules to the system.
 `],
		[/* block */ 'b', `
 This class manages the configuration of time-zone rules.
 The static methods provide the public API that can be used to manage the providers.
 The abstract methods provide the SPI that allows rules to be provided.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 ZoneRulesProvider may be installed in an instance of the Java Platform as
 extension classes, that is, jar files placed into any of the usual extension
 directories. Installed providers are loaded using the service-provider loading
 facility defined by the `],
			[/* reference */ 'r', `java.util.ServiceLoader`, `ServiceLoader`],
			[/* text */ 't', ` class. A ZoneRulesProvider
 identifies itself with a provider configuration file named
 `],
			[/* inline code block */ 'i', `java.time.zone.ZoneRulesProvider`],
			[/* text */ 't', ` in the resource directory
 `],
			[/* inline code block */ 'i', `META-INF/services`],
			[/* text */ 't', `. The file should contain a line that specifies the
 fully qualified concrete zonerules-provider class name.
 Providers may also be made available by adding them to the class path or by
 registering themselves via `],
			[/* reference */ 'r', `#registerProvider(java.time.zone.ZoneRulesProvider)`, `registerProvider(java.time.zone.ZoneRulesProvider)`],
			[/* text */ 't', ` method.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 The Java virtual machine has a default provider that provides zone rules
 for the time-zones defined by IANA Time Zone Database (TZDB). If the system
 property `],
			[/* inline code block */ 'i', `java.time.zone.DefaultZoneRulesProvider`],
			[/* text */ 't', ` is defined then
 it is taken to be the fully-qualified name of a concrete ZoneRulesProvider
 class to be loaded as the default provider, using the system class loader.
 If this system property is not defined, a system-default provider will be
 loaded to serve as the default provider.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 Rules are looked up primarily by zone ID, as used by `],
			[/* reference */ 'r', `java.time.ZoneId`, `ZoneId`],
			[/* text */ 't', `.
 Only zone region IDs may be used, zone offset IDs are not used here.
 `]
		]],
		[/* block */ 'b', `
 Time-zone rules are political, thus the data can change at any time.
 Each provider will provide the latest rules for each zone ID, but they
 may also provide the history of how the rules changed.`]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Constructor.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'provideRules(java.lang.String,boolean)', [
			[/* method description */
				[/* text */ 't', `SPI method to get the rules for the zone ID.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This loads the rules for the specified zone ID.
 The provider implementation must validate that the zone ID is valid and
 available, throwing a `],
					[/* inline code block */ 'i', `ZoneRulesException`],
					[/* text */ 't', ` if it is not.
 The result of the method in the valid case depends on the caching flag.
 `]
				]],
				[/* block */ 'b', `
 If the provider implementation is not dynamic, then the result of the
 method must be the non-null set of rules selected by the ID.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the provider implementation is dynamic, then the flag gives the option
 of preventing the returned rules from being cached in `],
					[/* reference */ 'r', `java.time.ZoneId`, `ZoneId`],
					[/* text */ 't', `.
 When the flag is true, the provider is permitted to return null, where
 null will prevent the rules from being cached in `],
					[/* inline code block */ 'i', `ZoneId`],
					[/* text */ 't', `.
 When the flag is false, the provider must return non-null rules.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'zoneId', [/* parameter description */
					[/* text */ 't', `the zone ID as defined by `],
					[/* inline code block */ 'i', `ZoneId`],
					[/* text */ 't', `, not null`]
				]],
				[/* parameter */ 'forCaching', [/* parameter description */
					[/* text */ 't', `whether the rules are being queried for caching,
 true if the returned rules will be cached by `],
					[/* inline code block */ 'i', `ZoneId`],
					[/* text */ 't', `,
 false if they will be returned to the user without being cached in `],
					[/* inline code block */ 'i', `ZoneId`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.zone.ZoneRulesException', [/* throw description */
					[/* text */ 't', `if rules cannot be obtained for the zone ID`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the rules, null if `],
				[/* inline code block */ 'i', `forCaching`],
				[/* text */ 't', ` is true and this
 is a dynamic provider that wants to prevent caching in `],
				[/* inline code block */ 'i', `ZoneId`],
				[/* text */ 't', `,
 otherwise not null`]
			]
		]],
		[/* method */ 'provideVersions(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `SPI method to get the history of rules for the zone ID.
 `],
				[/* block */ 'b', `
 This returns a map of historical rules keyed by a version string.
 The exact meaning and format of the version is provider specific.
 The version must follow lexicographical order, thus the returned map will
 be order from the oldest known rules to the newest available rules.
 The default 'TZDB' group uses version numbering consisting of the year
 followed by a letter, such as '2009e' or '2012f'.
 `],
				[/* block */ 'b', `
 Implementations must provide a result for each valid zone ID, however
 they do not have to provide a history of rules.
 Thus the map will contain at least one element, and will only contain
 more than one element if historical rule information is available.
 `],
				[/* block */ 'b', `
 The returned versions remain available and valid for the lifetime of the application.
 A dynamic provider may increase the set of versions as more data becomes available.`]
			],
			[/* parameters */
				[/* parameter */ 'zoneId', [/* parameter description */
					[/* text */ 't', `the zone ID as defined by `],
					[/* inline code block */ 'i', `ZoneId`],
					[/* text */ 't', `, not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.zone.ZoneRulesException', [/* throw description */
					[/* text */ 't', `if history cannot be obtained for the zone ID`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a modifiable copy of the history of the rules for the ID, sorted
  from oldest to newest, not null`]
			]
		]],
		[/* method */ 'provideZoneIds()', [
			[/* method description */
				[/* text */ 't', `SPI method to get the available zone IDs.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This obtains the IDs that this `],
					[/* inline code block */ 'i', `ZoneRulesProvider`],
					[/* text */ 't', ` provides.
 A provider should provide data for at least one zone ID.
 `]
				]],
				[/* block */ 'b', `
 The returned zone IDs remain available and valid for the lifetime of the application.
 A dynamic provider may increase the set of IDs as more data becomes available.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.time.zone.ZoneRulesException', [/* throw description */
					[/* text */ 't', `if a problem occurs while providing the IDs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the set of zone IDs being provided, not null`]
			]
		]],
		[/* method */ 'provideRefresh()', [
			[/* method description */
				[/* text */ 't', `SPI method to refresh the rules from the underlying data provider.
 `],
				[/* block */ 'b', `
 This method provides the opportunity for a provider to dynamically
 recheck the underlying data provider to find the latest rules.
 This could be used to load new rules without stopping the JVM.
 Dynamic behavior is entirely optional and most providers do not support it.
 `],
				[/* block */ 'b', `
 This implementation returns false.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.time.zone.ZoneRulesException', [/* throw description */
					[/* text */ 't', `if an error occurs during the refresh`]
				]]
			],
			[/* return description */
				[/* text */ 't', `true if the rules were updated`]
			]
		]],
		[/* method */ 'refresh()', [
			[/* method description */
				[/* text */ 't', `Refreshes the rules from the underlying data provider.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method allows an application to request that the providers check
 for any updates to the provided rules.
 After calling this method, the offset stored in any `],
					[/* reference */ 'r', `java.time.ZonedDateTime`, `ZonedDateTime`],
					[/* text */ 't', `
 may be invalid for the zone ID.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 Dynamic update of rules is a complex problem and most applications
 should not use this method or dynamic rules.
 To achieve dynamic rules, a provider implementation will have to be written
 as per the specification of this class.
 In addition, instances of `],
					[/* inline code block */ 'i', `ZoneRules`],
					[/* text */ 't', ` must not be cached in the
 application as they will become stale. However, the boolean flag on
 `],
					[/* reference */ 'r', `#provideRules(java.lang.String,boolean)`, `provideRules(String, boolean)`],
					[/* text */ 't', ` allows provider implementations
 to control the caching of `],
					[/* inline code block */ 'i', `ZoneId`],
					[/* text */ 't', `, potentially ensuring that
 all objects in the system see the new rules.
 Note that there is likely to be a cost in performance of a dynamic rules
 provider. Note also that no dynamic rules provider is in this specification.`]
				]]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.time.zone.ZoneRulesException', [/* throw description */
					[/* text */ 't', `if an error occurs during the refresh`]
				]]
			],
			[/* return description */
				[/* text */ 't', `true if the rules were updated`]
			]
		]],
		[/* method */ 'getRules(java.lang.String,boolean)', [
			[/* method description */
				[/* text */ 't', `Gets the rules for the zone ID.
 `],
				[/* block */ 'b', `
 This returns the latest available rules for the zone ID.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method relies on time-zone data provider files that are configured.
 These are loaded using a `],
					[/* inline code block */ 'i', `ServiceLoader`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The caching flag is designed to allow provider implementations to
 prevent the rules being cached in `],
					[/* inline code block */ 'i', `ZoneId`],
					[/* text */ 't', `.
 Under normal circumstances, the caching of zone rules is highly desirable
 as it will provide greater performance. However, there is a use case where
 the caching would not be desirable, see `],
					[/* reference */ 'r', `#provideRules(java.lang.String,boolean)`, `provideRules(java.lang.String, boolean)`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'zoneId', [/* parameter description */
					[/* text */ 't', `the zone ID as defined by `],
					[/* inline code block */ 'i', `ZoneId`],
					[/* text */ 't', `, not null`]
				]],
				[/* parameter */ 'forCaching', [/* parameter description */
					[/* text */ 't', `whether the rules are being queried for caching,
 true if the returned rules will be cached by `],
					[/* inline code block */ 'i', `ZoneId`],
					[/* text */ 't', `,
 false if they will be returned to the user without being cached in `],
					[/* inline code block */ 'i', `ZoneId`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.zone.ZoneRulesException', [/* throw description */
					[/* text */ 't', `if rules cannot be obtained for the zone ID`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the rules, null if `],
				[/* inline code block */ 'i', `forCaching`],
				[/* text */ 't', ` is true and this
 is a dynamic provider that wants to prevent caching in `],
				[/* inline code block */ 'i', `ZoneId`],
				[/* text */ 't', `,
 otherwise not null`]
			]
		]],
		[/* method */ 'getVersions(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Gets the history of rules for the zone ID.
 `],
				[/* block */ 'b', `
 Time-zones are defined by governments and change frequently.
 This method allows applications to find the history of changes to the
 rules for a single zone ID. The map is keyed by a string, which is the
 version string associated with the rules.
 `],
				[/* block */ 'b', `
 The exact meaning and format of the version is provider specific.
 The version must follow lexicographical order, thus the returned map will
 be order from the oldest known rules to the newest available rules.
 The default 'TZDB' group uses version numbering consisting of the year
 followed by a letter, such as '2009e' or '2012f'.
 `],
				[/* block */ 'b', `
 Implementations must provide a result for each valid zone ID, however
 they do not have to provide a history of rules.
 Thus the map will always contain one element, and will only contain more
 than one element if historical rule information is available.`]
			],
			[/* parameters */
				[/* parameter */ 'zoneId', [/* parameter description */
					[/* text */ 't', `the zone ID as defined by `],
					[/* inline code block */ 'i', `ZoneId`],
					[/* text */ 't', `, not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.zone.ZoneRulesException', [/* throw description */
					[/* text */ 't', `if history cannot be obtained for the zone ID`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a modifiable copy of the history of the rules for the ID, sorted
  from oldest to newest, not null`]
			]
		]],
		[/* method */ 'getAvailableZoneIds()', [
			[/* method description */
				[/* text */ 't', `Gets the set of available zone IDs.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 These IDs are the string form of a `],
					[/* reference */ 'r', `java.time.ZoneId`, `ZoneId`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the unmodifiable set of zone IDs, not null`]
			]
		]],
		[/* method */ 'registerProvider(java.time.zone.ZoneRulesProvider)', [
			[/* method description */
				[/* text */ 't', `Registers a zone rules provider.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This adds a new provider to those currently available.
 A provider supplies rules for one or more zone IDs.
 A provider cannot be registered if it supplies a zone ID that has already been
 registered. See the notes on time-zone IDs in `],
					[/* reference */ 'r', `java.time.ZoneId`, `ZoneId`],
					[/* text */ 't', `, especially
 the section on using the concept of a "group" to make IDs unique.
 `]
				]],
				[/* block */ 'b', `
 To ensure the integrity of time-zones already created, there is no way
 to deregister providers.`]
			],
			[/* parameters */
				[/* parameter */ 'provider', [/* parameter description */
					[/* text */ 't', `the provider to register, not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.zone.ZoneRulesException', [/* throw description */
					[/* text */ 't', `if a zone ID is already registered`]
				]]
			],
			/* return */ UDF
		]]
	],
]);
