import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.time.ZoneId', [
	[/* class description */
		[/* text */ 't', `A time-zone ID, such as `],
		[/* inline code block */ 'i', `Europe/Paris`],
		[/* text */ 't', `.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 A `],
			[/* inline code block */ 'i', `ZoneId`],
			[/* text */ 't', ` is used to identify the rules used to convert between
 an `],
			[/* reference */ 'r', `java.time.Instant`],
			[/* text */ 't', ` and a `],
			[/* reference */ 'r', `java.time.LocalDateTime`],
			[/* text */ 't', `.
 There are two distinct types of ID:
 `]
		]],
		[/* list */ 'l', [
			[/* block */ 'b', `Fixed offsets - a fully resolved offset from UTC/Greenwich, that uses
  the same offset for all local date-times
 `],
			[/* block */ 'b', `Geographical regions - an area where a specific set of rules for finding
  the offset from UTC/Greenwich apply
 `]
		]],
		[/* text */ 't', `
 Most fixed offsets are represented by `],
		[/* reference */ 'r', `java.time.ZoneOffset`],
		[/* text */ 't', `.
 Calling `],
		[/* reference */ 'r', `#normalized()`, `normalized()`],
		[/* text */ 't', ` on any `],
		[/* inline code block */ 'i', `ZoneId`],
		[/* text */ 't', ` will ensure that a
 fixed offset ID will be represented as a `],
		[/* inline code block */ 'i', `ZoneOffset`],
		[/* text */ 't', `.
 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `
 The actual rules, describing when and how the offset changes, are defined by `],
			[/* reference */ 'r', `java.time.zone.ZoneRules`],
			[/* text */ 't', `.
 This class is simply an ID used to obtain the underlying rules.
 This approach is taken because rules are defined by governments and change
 frequently, whereas the ID is stable.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 The distinction has other effects. Serializing the `],
			[/* inline code block */ 'i', `ZoneId`],
			[/* text */ 't', ` will only send
 the ID, whereas serializing the rules sends the entire data set.
 Similarly, a comparison of two IDs only examines the ID, whereas
 a comparison of two rules examines the entire data set.

 `]
		]],
		[/* block */ 'b', `Time-zone IDs`],
		[/* text */ 't', `
 The ID is unique within the system.
 There are three types of ID.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 The simplest type of ID is that from `],
			[/* inline code block */ 'i', `ZoneOffset`],
			[/* text */ 't', `.
 This consists of 'Z' and IDs starting with '+' or '-'.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 The next type of ID are offset-style IDs with some form of prefix,
 such as 'GMT+2' or 'UTC+01:00'.
 The recognised prefixes are 'UTC', 'GMT' and 'UT'.
 The offset is the suffix and will be normalized during creation.
 These IDs can be normalized to a `],
			[/* inline code block */ 'i', `ZoneOffset`],
			[/* text */ 't', ` using `],
			[/* inline code block */ 'i', `normalized()`],
			[/* text */ 't', `.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 The third type of ID are region-based IDs. A region-based ID must be of
 two or more characters, and not start with 'UTC', 'GMT', 'UT' '+' or '-'.
 Region-based IDs are defined by configuration, see `],
			[/* reference */ 'r', `java.time.zone.ZoneRulesProvider`],
			[/* text */ 't', `.
 The configuration focuses on providing the lookup from the ID to the
 underlying `],
			[/* inline code block */ 'i', `ZoneRules`],
			[/* text */ 't', `.
 `]
		]],
		[/* block */ 'b', `
 Time-zone rules are defined by governments and change frequently.
 There are a number of organizations, known here as groups, that monitor
 time-zone changes and collate them.
 The default group is the IANA Time Zone Database (TZDB).
 Other organizations include IATA (the airline industry body) and Microsoft.
 `],
		[/* block */ 'b', `
 Each group defines its own format for the region ID it provides.
 The TZDB group defines IDs such as 'Europe/London' or 'America/New_York'.
 TZDB IDs take precedence over other groups.
 `],
		[/* block */ 'b', `
 It is strongly recommended that the group name is included in all IDs supplied by
 groups other than TZDB to avoid conflicts. For example, IATA airline time-zone
 region IDs are typically the same as the three letter airport code.
 However, the airport of Utrecht has the code 'UTC', which is obviously a conflict.
 The recommended format for region IDs from groups other than TZDB is 'group~region'.
 Thus if IATA data were defined, Utrecht airport would be 'IATA~UTC'.

 `],
		[/* block */ 'b', `Serialization`],
		[/* text */ 't', `
 This class can be serialized and stores the string zone ID in the external form.
 The `],
		[/* inline code block */ 'i', `ZoneOffset`],
		[/* text */ 't', ` subclass uses a dedicated format that only stores the
 offset from UTC/Greenwich.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 A `],
			[/* inline code block */ 'i', `ZoneId`],
			[/* text */ 't', ` can be deserialized in a Java Runtime where the ID is unknown.
 For example, if a server-side Java Runtime has been updated with a new zone ID, but
 the client-side Java Runtime has not been updated. In this case, the `],
			[/* inline code block */ 'i', `ZoneId`],
			[/* text */ 't', `
 object will exist, and can be queried using `],
			[/* inline code block */ 'i', `getId`],
			[/* text */ 't', `, `],
			[/* inline code block */ 'i', `equals`],
			[/* text */ 't', `,
 `],
			[/* inline code block */ 'i', `hashCode`],
			[/* text */ 't', `, `],
			[/* inline code block */ 'i', `toString`],
			[/* text */ 't', `, `],
			[/* inline code block */ 'i', `getDisplayName`],
			[/* text */ 't', ` and `],
			[/* inline code block */ 'i', `normalized`],
			[/* text */ 't', `.
 However, any call to `],
			[/* inline code block */ 'i', `getRules`],
			[/* text */ 't', ` will fail with `],
			[/* inline code block */ 'i', `ZoneRulesException`],
			[/* text */ 't', `.
 This approach is designed to allow a `],
			[/* reference */ 'r', `java.time.ZonedDateTime`],
			[/* text */ 't', ` to be loaded and
 queried, but not modified, on a Java Runtime with incomplete time-zone information.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 This is a `],
			[/* text */ 't', `value-based`],
			[/* text */ 't', `
 class; programmers should treat instances that are
 `],
			[/* reference */ 'r', `#equals(java.lang.Object)`, `equal`],
			[/* text */ 't', ` as interchangeable and should not
 use instances for synchronization, or unpredictable behavior may
 occur. For example, in a future release, synchronization may fail.
 The `],
			[/* inline code block */ 'i', `equals`],
			[/* text */ 't', ` method should be used for comparisons.`]
		]]
	],
	[/* fields */
		[/* field */ 'SHORT_IDS', [
			[/* field description */
				[/* text */ 't', `A map of zone overrides to enable the short time-zone names to be used.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 Use of short zone IDs has been deprecated in `],
					[/* inline code block */ 'i', `java.util.TimeZone`],
					[/* text */ 't', `.
 This map allows the IDs to continue to be used via the
 `],
					[/* reference */ 'r', `#of(java.lang.String,java.util.Map)`, `of(String, Map)`],
					[/* text */ 't', ` factory method.
 `]
				]],
				[/* block */ 'b', `
 This map contains a mapping of the IDs that is in line with TZDB 2005r and
 later, where 'EST', 'MST' and 'HST' map to IDs which do not include daylight
 savings.
 `],
				[/* block */ 'b', `
 This maps as follows:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', `EST - -05:00`],
					[/* block */ 'b', `HST - -10:00`],
					[/* block */ 'b', `MST - -07:00`],
					[/* block */ 'b', `ACT - Australia/Darwin`],
					[/* block */ 'b', `AET - Australia/Sydney`],
					[/* block */ 'b', `AGT - America/Argentina/Buenos_Aires`],
					[/* block */ 'b', `ART - Africa/Cairo`],
					[/* block */ 'b', `AST - America/Anchorage`],
					[/* block */ 'b', `BET - America/Sao_Paulo`],
					[/* block */ 'b', `BST - Asia/Dhaka`],
					[/* block */ 'b', `CAT - Africa/Harare`],
					[/* block */ 'b', `CNT - America/St_Johns`],
					[/* block */ 'b', `CST - America/Chicago`],
					[/* block */ 'b', `CTT - Asia/Shanghai`],
					[/* block */ 'b', `EAT - Africa/Addis_Ababa`],
					[/* block */ 'b', `ECT - Europe/Paris`],
					[/* block */ 'b', `IET - America/Indiana/Indianapolis`],
					[/* block */ 'b', `IST - Asia/Kolkata`],
					[/* block */ 'b', `JST - Asia/Tokyo`],
					[/* block */ 'b', `MIT - Pacific/Apia`],
					[/* block */ 'b', `NET - Asia/Yerevan`],
					[/* block */ 'b', `NST - Pacific/Auckland`],
					[/* block */ 'b', `PLT - Asia/Karachi`],
					[/* block */ 'b', `PNT - America/Phoenix`],
					[/* block */ 'b', `PRT - America/Puerto_Rico`],
					[/* block */ 'b', `PST - America/Los_Angeles`],
					[/* block */ 'b', `SST - Pacific/Guadalcanal`],
					[/* block */ 'b', `VST - Asia/Ho_Chi_Minh`]
				]],
				[/* text */ 't', `
 The map is unmodifiable.`],
				[/* block */ 'b', '']
			],
		]]
	],
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'equals(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Checks if this time-zone ID is equal to another time-zone ID.
 `],
				[/* block */ 'b', `
 The comparison is based on the ID.`]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `the object to check, null returns false`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if this is equal to the other time-zone ID`]
			]
		]],
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Outputs this zone as a `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', `, using the ID.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a string representation of this time-zone ID, not null`]
			]
		]],
		[/* method */ 'hashCode()', [
			[/* method description */
				[/* text */ 't', `A hash code for this time-zone ID.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a suitable hash code`]
			]
		]],
		[/* method */ 'of(java.lang.String,java.util.Map)', [
			[/* method description */
				[/* text */ 't', `Obtains an instance of `],
				[/* inline code block */ 'i', `ZoneId`],
				[/* text */ 't', ` using its ID using a map
 of aliases to supplement the standard zone IDs.
 `],
				[/* block */ 'b', `
 Many users of time-zones use short abbreviations, such as PST for
 'Pacific Standard Time' and PDT for 'Pacific Daylight Time'.
 These abbreviations are not unique, and so cannot be used as IDs.
 This method allows a map of string to time-zone to be setup and reused
 within an application.`]
			],
			[/* parameters */
				[/* parameter */ 'zoneId', [/* parameter description */
					[/* text */ 't', `the time-zone ID, not null`]
				]],
				[/* parameter */ 'aliasMap', [/* parameter description */
					[/* text */ 't', `a map of alias zone IDs (typically abbreviations) to real zone IDs, not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the zone ID has an invalid format`]
				]],
				[/* throw */ 'java.time.zone.ZoneRulesException', [/* throw description */
					[/* text */ 't', `if the zone ID is a region ID that cannot be found`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the zone ID, not null`]
			]
		]],
		[/* method */ 'of(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Obtains an instance of `],
				[/* inline code block */ 'i', `ZoneId`],
				[/* text */ 't', ` from an ID ensuring that the
 ID is valid and available for use.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method parses the ID producing a `],
					[/* inline code block */ 'i', `ZoneId`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `ZoneOffset`],
					[/* text */ 't', `.
 A `],
					[/* inline code block */ 'i', `ZoneOffset`],
					[/* text */ 't', ` is returned if the ID is 'Z', or starts with '+' or '-'.
 The result will always be a valid ID for which `],
					[/* reference */ 'r', `java.time.zone.ZoneRules`],
					[/* text */ 't', ` can be obtained.
 `]
				]],
				[/* block */ 'b', `
 Parsing matches the zone ID step by step as follows.
 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `If the zone ID equals 'Z', the result is `],
						[/* inline code block */ 'i', `ZoneOffset.UTC`],
						[/* text */ 't', `.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `If the zone ID consists of a single letter, the zone ID is invalid
  and `],
						[/* inline code block */ 'i', `DateTimeException`],
						[/* text */ 't', ` is thrown.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `If the zone ID starts with '+' or '-', the ID is parsed as a
  `],
						[/* inline code block */ 'i', `ZoneOffset`],
						[/* text */ 't', ` using `],
						[/* reference */ 'r', `.ZoneOffset#of(java.lang.String)`],
						[/* text */ 't', `.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `If the zone ID equals 'GMT', 'UTC' or 'UT' then the result is a `],
						[/* inline code block */ 'i', `ZoneId`],
						[/* text */ 't', `
  with the same ID and rules equivalent to `],
						[/* inline code block */ 'i', `ZoneOffset.UTC`],
						[/* text */ 't', `.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `If the zone ID starts with 'UTC+', 'UTC-', 'GMT+', 'GMT-', 'UT+' or 'UT-'
  then the ID is a prefixed offset-based ID. The ID is split in two, with
  a two or three letter prefix and a suffix starting with the sign.
  The suffix is parsed as a `],
						[/* reference */ 'r', `.ZoneOffset#of(java.lang.String)`],
						[/* text */ 't', `.
  The result will be a `],
						[/* inline code block */ 'i', `ZoneId`],
						[/* text */ 't', ` with the specified UTC/GMT/UT prefix
  and the normalized offset ID as per `],
						[/* reference */ 'r', `.ZoneOffset#getId()`],
						[/* text */ 't', `.
  The rules of the returned `],
						[/* inline code block */ 'i', `ZoneId`],
						[/* text */ 't', ` will be equivalent to the
  parsed `],
						[/* inline code block */ 'i', `ZoneOffset`],
						[/* text */ 't', `.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `All other IDs are parsed as region-based zone IDs. Region IDs must
  match the regular expression `],
						[/* inline code block */ 'i', `[A-Za-z][A-Za-z0-9~/._+-]+`],
						[/* text */ 't', `
  otherwise a `],
						[/* inline code block */ 'i', `DateTimeException`],
						[/* text */ 't', ` is thrown. If the zone ID is not
  in the configured set of IDs, `],
						[/* inline code block */ 'i', `ZoneRulesException`],
						[/* text */ 't', ` is thrown.
  The detailed format of the region ID depends on the group supplying the data.
  The default set of data is supplied by the IANA Time Zone Database (TZDB).
  This has region IDs of the form '{area}/{city}', such as 'Europe/Paris' or 'America/New_York'.
  This is compatible with most IDs from `],
						[/* reference */ 'r', `java.util.TimeZone`],
						[/* text */ 't', `.
 `]
					]]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'zoneId', [/* parameter description */
					[/* text */ 't', `the time-zone ID, not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the zone ID has an invalid format`]
				]],
				[/* throw */ 'java.time.zone.ZoneRulesException', [/* throw description */
					[/* text */ 't', `if the zone ID is a region ID that cannot be found`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the zone ID, not null`]
			]
		]],
		[/* method */ 'from(java.time.temporal.TemporalAccessor)', [
			[/* method description */
				[/* text */ 't', `Obtains an instance of `],
				[/* inline code block */ 'i', `ZoneId`],
				[/* text */ 't', ` from a temporal object.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This obtains a zone based on the specified temporal.
 A `],
					[/* inline code block */ 'i', `TemporalAccessor`],
					[/* text */ 't', ` represents an arbitrary set of date and time information,
 which this factory converts to an instance of `],
					[/* inline code block */ 'i', `ZoneId`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 A `],
					[/* inline code block */ 'i', `TemporalAccessor`],
					[/* text */ 't', ` represents some form of date and time information.
 This factory converts the arbitrary temporal object to an instance of `],
					[/* inline code block */ 'i', `ZoneId`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The conversion will try to obtain the zone in a way that favours region-based
 zones over offset-based zones using `],
					[/* reference */ 'r', `.TemporalQueries#zone()`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method matches the signature of the functional interface `],
					[/* reference */ 'r', `java.time.temporal.TemporalQuery`],
					[/* text */ 't', `
 allowing it to be used as a query via method reference, `],
					[/* inline code block */ 'i', `ZoneId::from`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'temporal', [/* parameter description */
					[/* text */ 't', `the temporal object to convert, not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if unable to convert to a `],
					[/* inline code block */ 'i', `ZoneId`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the zone ID, not null`]
			]
		]],
		[/* method */ 'getId()', [
			[/* method description */
				[/* text */ 't', `Gets the unique time-zone ID.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This ID uniquely defines this object.
 The format of an offset based ID is defined by `],
					[/* reference */ 'r', `.ZoneOffset#getId()`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the time-zone unique ID, not null`]
			]
		]],
		[/* method */ 'normalized()', [
			[/* method description */
				[/* text */ 't', `Normalizes the time-zone ID, returning a `],
				[/* inline code block */ 'i', `ZoneOffset`],
				[/* text */ 't', ` where possible.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The returns a normalized `],
					[/* inline code block */ 'i', `ZoneId`],
					[/* text */ 't', ` that can be used in place of this ID.
 The result will have `],
					[/* inline code block */ 'i', `ZoneRules`],
					[/* text */ 't', ` equivalent to those returned by this object,
 however the ID returned by `],
					[/* inline code block */ 'i', `getId()`],
					[/* text */ 't', ` may be different.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The normalization checks if the rules of this `],
					[/* inline code block */ 'i', `ZoneId`],
					[/* text */ 't', ` have a fixed offset.
 If they do, then the `],
					[/* inline code block */ 'i', `ZoneOffset`],
					[/* text */ 't', ` equal to that offset is returned.
 Otherwise `],
					[/* inline code block */ 'i', `this`],
					[/* text */ 't', ` is returned.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the time-zone unique ID, not null`]
			]
		]],
		[/* method */ 'systemDefault()', [
			[/* method description */
				[/* text */ 't', `Gets the system default time-zone.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This queries `],
					[/* reference */ 'r', `java.TimeZone#getDefault()`],
					[/* text */ 't', ` to find the default time-zone
 and converts it to a `],
					[/* inline code block */ 'i', `ZoneId`],
					[/* text */ 't', `. If the system default time-zone is changed,
 then the result of this method will also change.`]
				]]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the converted zone ID has an invalid format`]
				]],
				[/* throw */ 'java.time.zone.ZoneRulesException', [/* throw description */
					[/* text */ 't', `if the converted zone region ID cannot be found`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the zone ID, not null`]
			]
		]],
		[/* method */ 'getRules()', [
			[/* method description */
				[/* text */ 't', `Gets the time-zone rules for this ID allowing calculations to be performed.
 `],
				[/* block */ 'b', `
 The rules provide the functionality associated with a time-zone,
 such as finding the offset for a given instant or local date-time.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 A time-zone can be invalid if it is deserialized in a Java Runtime which
 does not have the same rules loaded as the Java Runtime that stored it.
 In this case, calling this method will throw a `],
					[/* inline code block */ 'i', `ZoneRulesException`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The rules are supplied by `],
					[/* reference */ 'r', `java.time.zone.ZoneRulesProvider`],
					[/* text */ 't', `. An advanced provider may
 support dynamic updates to the rules without restarting the Java Runtime.
 If so, then the result of this method may change over time.
 Each individual call will be still remain thread-safe.
 `]
				]],
				[/* block */ 'b', [
					[/* reference */ 'r', `java.time.ZoneOffset`],
					[/* text */ 't', ` will always return a set of rules where the offset never changes.`]
				]]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.time.zone.ZoneRulesException', [/* throw description */
					[/* text */ 't', `if no rules are available for this ID`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the rules, not null`]
			]
		]],
		[/* method */ 'getDisplayName(java.time.format.TextStyle,java.util.Locale)', [
			[/* method description */
				[/* text */ 't', `Gets the textual representation of the zone, such as 'British Time' or
 '+02:00'.
 `],
				[/* block */ 'b', `
 This returns the textual name used to identify the time-zone ID,
 suitable for presentation to the user.
 The parameters control the style of the returned text and the locale.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 If no textual mapping is found then the `],
					[/* reference */ 'r', `#getId()`, `full ID`],
					[/* text */ 't', ` is returned.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'style', [/* parameter description */
					[/* text */ 't', `the length of the text required, not null`]
				]],
				[/* parameter */ 'locale', [/* parameter description */
					[/* text */ 't', `the locale to use, not null`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the text value of the zone, not null`]
			]
		]],
		[/* method */ 'getAvailableZoneIds()', [
			[/* method description */
				[/* text */ 't', `Gets the set of available zone IDs.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This set includes the string form of all available region-based IDs.
 Offset-based zone IDs are not included in the returned set.
 The ID can be passed to `],
					[/* reference */ 'r', `#of(java.lang.String)`, `of(String)`],
					[/* text */ 't', ` to create a `],
					[/* inline code block */ 'i', `ZoneId`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', `
 The set of zone IDs can increase over time, although in a typical application
 the set of IDs is fixed. Each call to this method is thread-safe.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a modifiable copy of the set of zone IDs, not null`]
			]
		]],
		[/* method */ 'ofOffset(java.lang.String,java.time.ZoneOffset)', [
			[/* method description */
				[/* text */ 't', `Obtains an instance of `],
				[/* inline code block */ 'i', `ZoneId`],
				[/* text */ 't', ` wrapping an offset.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the prefix is "GMT", "UTC", or "UT" a `],
					[/* inline code block */ 'i', `ZoneId`],
					[/* text */ 't', `
 with the prefix and the non-zero offset is returned.
 If the prefix is empty `],
					[/* inline code block */ 'i', `""`],
					[/* text */ 't', ` the `],
					[/* inline code block */ 'i', `ZoneOffset`],
					[/* text */ 't', ` is returned.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'prefix', [/* parameter description */
					[/* text */ 't', `the time-zone ID, not null`]
				]],
				[/* parameter */ 'offset', [/* parameter description */
					[/* text */ 't', `the offset, not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the prefix is not one of
     "GMT", "UTC", or "UT", or ""`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the zone ID, not null`]
			]
		]]
	],
]);
