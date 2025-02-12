import {UDF} from '../../../../utils';
import {JdkClassCreateHelper} from '../../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.time.chrono.JapaneseEra', [
	/* super class, extends java.lang.Object */
	'java.lang.Object',
	[/* interfaces, implements java.time.chrono.Era, java.io.Serializable */
		'java.time.chrono.Era',
		'java.io.Serializable'
	],
	/* modifiers */ 17,
	/* declared annotations */,
	/* type parameters */,
	/* declared constructors */,
	[/* declared methods */
		[/* public int java.time.chrono.JapaneseEra.getValue() */
			/* name */ 'getValue',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String java.time.chrono.JapaneseEra.getDisplayName(java.time.format.TextStyle,java.util.Locale) */
			/* name */ 'getDisplayName',
			[/* parameters */
				[/* parameter */
					/* name */ 'style',
					/* type */ 'java.time.format.TextStyle',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'locale',
					/* type */ 'java.util.Locale',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String java.time.chrono.JapaneseEra.toString() */
			/* name */ 'toString',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.temporal.ValueRange java.time.chrono.JapaneseEra.range(java.time.temporal.TemporalField) */
			/* name */ 'range',
			[/* parameters */
				[/* parameter */
					/* name */ 'field',
					/* type */ 'java.time.temporal.TemporalField',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.temporal.ValueRange',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.time.chrono.JapaneseEra java.time.chrono.JapaneseEra.of(int) */
			/* name */ 'of',
			[/* parameters */
				[/* parameter */
					/* name */ 'japaneseEra',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.chrono.JapaneseEra',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.time.chrono.JapaneseEra java.time.chrono.JapaneseEra.valueOf(java.lang.String) */
			/* name */ 'valueOf',
			[/* parameters */
				[/* parameter */
					/* name */ 'japaneseEra',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.chrono.JapaneseEra',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.time.chrono.JapaneseEra[] java.time.chrono.JapaneseEra.values() */
			/* name */ 'values',
			/* parameters */,
			/* return */ '[Ljava.time.chrono.JapaneseEra;',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	[/* declared fields */
		[/* public static final java.time.chrono.JapaneseEra java.time.chrono.JapaneseEra.MEIJI */
			/* name */ 'MEIJI',
			/* type */ 'java.time.chrono.JapaneseEra',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final java.time.chrono.JapaneseEra java.time.chrono.JapaneseEra.TAISHO */
			/* name */ 'TAISHO',
			/* type */ 'java.time.chrono.JapaneseEra',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final java.time.chrono.JapaneseEra java.time.chrono.JapaneseEra.SHOWA */
			/* name */ 'SHOWA',
			/* type */ 'java.time.chrono.JapaneseEra',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final java.time.chrono.JapaneseEra java.time.chrono.JapaneseEra.HEISEI */
			/* name */ 'HEISEI',
			/* type */ 'java.time.chrono.JapaneseEra',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final java.time.chrono.JapaneseEra java.time.chrono.JapaneseEra.REIWA */
			/* name */ 'REIWA',
			/* type */ 'java.time.chrono.JapaneseEra',
			/* annotations */ UDF,
			/* modifiers */ 25
		]
	],
	/* enum values */ UDF
]);
