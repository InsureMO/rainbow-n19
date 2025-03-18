import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.util.stream.Collector$Characteristics', [
	[/* class description */
		[/* text */ 't', `Characteristics indicating properties of a `],
		[/* inline code block */ 'i', `Collector`],
		[/* text */ 't', `, which can
 be used to optimize reduction implementations.`]
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
		[/* enum value */ 'CONCURRENT', [
			[/* enum value description */
				[/* text */ 't', `Indicates that this collector is `],
				[/* text */ 't', `concurrent`],
				[/* text */ 't', `, meaning that
 the result container can support the accumulator function being
 called concurrently with the same result container from multiple
 threads.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If a `],
					[/* inline code block */ 'i', `CONCURRENT`],
					[/* text */ 't', ` collector is not also `],
					[/* inline code block */ 'i', `UNORDERED`],
					[/* text */ 't', `,
 then it should only be evaluated concurrently if applied to an
 unordered data source.`]
				]]
			],
		]],
		[/* enum value */ 'UNORDERED', [
			[/* enum value description */
				[/* text */ 't', `Indicates that the collection operation does not commit to preserving
 the encounter order of input elements.  (This might be true if the
 result container has no intrinsic order, such as a `],
				[/* reference */ 'r', `java.util.Set`, `Set`],
				[/* text */ 't', `.)`]
			],
		]],
		[/* enum value */ 'IDENTITY_FINISH', [
			[/* enum value description */
				[/* text */ 't', `Indicates that the finisher function is the identity function and
 can be elided.  If set, it must be the case that an unchecked cast
 from A to R will succeed.`]
			],
		]]
	],
]);
