import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.util.Locale$IsoCountryCode', [
	[/* class description */
		[/* text */ 't', `Enum for specifying the type defined in ISO 3166. This enum is used to
 retrieve the two-letter ISO3166-1 alpha-2, three-letter ISO3166-1
 alpha-3, four-letter ISO3166-3 country codes.`]
	],
	/* fields */,
	/* constructors */,
	[/* methods */
		[/* method */ 'valueOf(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Returns the enum constant of this class with the specified name.
The string must match `],
				[/* text */ 't', `exactly`],
				[/* text */ 't', ` an identifier used to declare an
enum constant in this class.  (Extraneous whitespace characters are 
not permitted.)`]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `the name of the enum constant to be returned.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if this enum class has no constant with the specified name`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the argument is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the enum constant with the specified name`]
			]
		]],
		[/* method */ 'values()', [
			[/* method description */
				[/* text */ 't', `Returns an array containing the constants of this enum class, in
the order they are declared.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `an array containing the constants of this enum class, in the order they are declared`]
			]
		]]
	],
	[/* enum values */
		[/* enum value */ 'PART1_ALPHA2', [
			[/* enum value description */
				[/* text */ 't', `PART1_ALPHA2 is used to represent the ISO3166-1 alpha-2 two letter
 country codes.`]
			],
		]],
		[/* enum value */ 'PART1_ALPHA3', [
			[/* enum value description */
				[/* text */ 't', `PART1_ALPHA3 is used to represent the ISO3166-1 alpha-3 three letter
 country codes.`]
			],
		]],
		[/* enum value */ 'PART3', [
			[/* enum value description */
				[/* text */ 't', `PART3 is used to represent the ISO3166-3 four letter country codes.`]
			],
		]]
	],
]);
