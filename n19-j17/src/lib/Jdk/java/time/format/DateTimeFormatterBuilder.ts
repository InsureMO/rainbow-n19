import {UDF} from '../../../../utils';
import {JdkClassCreateHelper} from '../../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.time.format.DateTimeFormatterBuilder', [
	/* super class, extends java.lang.Object */
	'java.lang.Object',
	/* interfaces */,
	/* modifiers */ 17,
	/* declared annotations */,
	/* type parameters */,
	[/* declared constructors */
		[/* public java.time.format.DateTimeFormatterBuilder() */
			/* parameters */,
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	[/* declared methods */
		[/* public java.time.format.DateTimeFormatter java.time.format.DateTimeFormatterBuilder.toFormatter() */
			/* name */ 'toFormatter',
			/* parameters */,
			/* return */ 'java.time.format.DateTimeFormatter',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.format.DateTimeFormatter java.time.format.DateTimeFormatterBuilder.toFormatter(java.util.Locale) */
			/* name */ 'toFormatter',
			[/* parameters */
				[/* parameter */
					/* name */ 'locale',
					/* type */ 'java.util.Locale',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.format.DateTimeFormatter',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.format.DateTimeFormatterBuilder java.time.format.DateTimeFormatterBuilder.append(java.time.format.DateTimeFormatter) */
			/* name */ 'append',
			[/* parameters */
				[/* parameter */
					/* name */ 'formatter',
					/* type */ 'java.time.format.DateTimeFormatter',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.format.DateTimeFormatterBuilder',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.format.DateTimeFormatterBuilder java.time.format.DateTimeFormatterBuilder.appendChronologyId() */
			/* name */ 'appendChronologyId',
			/* parameters */,
			/* return */ 'java.time.format.DateTimeFormatterBuilder',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.format.DateTimeFormatterBuilder java.time.format.DateTimeFormatterBuilder.appendChronologyText(java.time.format.TextStyle) */
			/* name */ 'appendChronologyText',
			[/* parameters */
				[/* parameter */
					/* name */ 'textStyle',
					/* type */ 'java.time.format.TextStyle',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.format.DateTimeFormatterBuilder',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.format.DateTimeFormatterBuilder java.time.format.DateTimeFormatterBuilder.appendDayPeriodText(java.time.format.TextStyle) */
			/* name */ 'appendDayPeriodText',
			[/* parameters */
				[/* parameter */
					/* name */ 'style',
					/* type */ 'java.time.format.TextStyle',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.format.DateTimeFormatterBuilder',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.format.DateTimeFormatterBuilder java.time.format.DateTimeFormatterBuilder.appendFraction(java.time.temporal.TemporalField,int,int,boolean) */
			/* name */ 'appendFraction',
			[/* parameters */
				[/* parameter */
					/* name */ 'field',
					/* type */ 'java.time.temporal.TemporalField',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'minWidth',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'maxWidth',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'decimalPoint',
					/* type */ 'boolean',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.format.DateTimeFormatterBuilder',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.format.DateTimeFormatterBuilder java.time.format.DateTimeFormatterBuilder.appendGenericZoneText(java.time.format.TextStyle) */
			/* name */ 'appendGenericZoneText',
			[/* parameters */
				[/* parameter */
					/* name */ 'textStyle',
					/* type */ 'java.time.format.TextStyle',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.format.DateTimeFormatterBuilder',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.format.DateTimeFormatterBuilder java.time.format.DateTimeFormatterBuilder.appendGenericZoneText(java.time.format.TextStyle,java.util.Set<java.time.ZoneId>) */
			/* name */ 'appendGenericZoneText',
			[/* parameters */
				[/* parameter */
					/* name */ 'textStyle',
					/* type */ 'java.time.format.TextStyle',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'preferredZones',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							'java.time.ZoneId'
						],
						/* raw type */ 'java.util.Set',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.format.DateTimeFormatterBuilder',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.format.DateTimeFormatterBuilder java.time.format.DateTimeFormatterBuilder.appendInstant() */
			/* name */ 'appendInstant',
			/* parameters */,
			/* return */ 'java.time.format.DateTimeFormatterBuilder',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.format.DateTimeFormatterBuilder java.time.format.DateTimeFormatterBuilder.appendInstant(int) */
			/* name */ 'appendInstant',
			[/* parameters */
				[/* parameter */
					/* name */ 'fractionalDigits',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.format.DateTimeFormatterBuilder',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.format.DateTimeFormatterBuilder java.time.format.DateTimeFormatterBuilder.appendLiteral(char) */
			/* name */ 'appendLiteral',
			[/* parameters */
				[/* parameter */
					/* name */ 'literal',
					/* type */ 'char',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.format.DateTimeFormatterBuilder',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.format.DateTimeFormatterBuilder java.time.format.DateTimeFormatterBuilder.appendLiteral(java.lang.String) */
			/* name */ 'appendLiteral',
			[/* parameters */
				[/* parameter */
					/* name */ 'literal',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.format.DateTimeFormatterBuilder',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.format.DateTimeFormatterBuilder java.time.format.DateTimeFormatterBuilder.appendLocalized(java.time.format.FormatStyle,java.time.format.FormatStyle) */
			/* name */ 'appendLocalized',
			[/* parameters */
				[/* parameter */
					/* name */ 'dateStyle',
					/* type */ 'java.time.format.FormatStyle',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'timeStyle',
					/* type */ 'java.time.format.FormatStyle',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.format.DateTimeFormatterBuilder',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.format.DateTimeFormatterBuilder java.time.format.DateTimeFormatterBuilder.appendLocalizedOffset(java.time.format.TextStyle) */
			/* name */ 'appendLocalizedOffset',
			[/* parameters */
				[/* parameter */
					/* name */ 'style',
					/* type */ 'java.time.format.TextStyle',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.format.DateTimeFormatterBuilder',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.format.DateTimeFormatterBuilder java.time.format.DateTimeFormatterBuilder.appendOffset(java.lang.String,java.lang.String) */
			/* name */ 'appendOffset',
			[/* parameters */
				[/* parameter */
					/* name */ 'pattern',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'noOffsetText',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.format.DateTimeFormatterBuilder',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.format.DateTimeFormatterBuilder java.time.format.DateTimeFormatterBuilder.appendOffsetId() */
			/* name */ 'appendOffsetId',
			/* parameters */,
			/* return */ 'java.time.format.DateTimeFormatterBuilder',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.format.DateTimeFormatterBuilder java.time.format.DateTimeFormatterBuilder.appendOptional(java.time.format.DateTimeFormatter) */
			/* name */ 'appendOptional',
			[/* parameters */
				[/* parameter */
					/* name */ 'formatter',
					/* type */ 'java.time.format.DateTimeFormatter',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.format.DateTimeFormatterBuilder',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.format.DateTimeFormatterBuilder java.time.format.DateTimeFormatterBuilder.appendPattern(java.lang.String) */
			/* name */ 'appendPattern',
			[/* parameters */
				[/* parameter */
					/* name */ 'pattern',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.format.DateTimeFormatterBuilder',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.format.DateTimeFormatterBuilder java.time.format.DateTimeFormatterBuilder.appendText(java.time.temporal.TemporalField) */
			/* name */ 'appendText',
			[/* parameters */
				[/* parameter */
					/* name */ 'field',
					/* type */ 'java.time.temporal.TemporalField',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.format.DateTimeFormatterBuilder',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.format.DateTimeFormatterBuilder java.time.format.DateTimeFormatterBuilder.appendText(java.time.temporal.TemporalField,java.time.format.TextStyle) */
			/* name */ 'appendText',
			[/* parameters */
				[/* parameter */
					/* name */ 'field',
					/* type */ 'java.time.temporal.TemporalField',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'textStyle',
					/* type */ 'java.time.format.TextStyle',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.format.DateTimeFormatterBuilder',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.format.DateTimeFormatterBuilder java.time.format.DateTimeFormatterBuilder.appendText(java.time.temporal.TemporalField,java.util.Map<java.lang.Long, java.lang.String>) */
			/* name */ 'appendText',
			[/* parameters */
				[/* parameter */
					/* name */ 'field',
					/* type */ 'java.time.temporal.TemporalField',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'textLookup',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							'java.lang.Long',
							'java.lang.String'
						],
						/* raw type */ 'java.util.Map',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.format.DateTimeFormatterBuilder',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.format.DateTimeFormatterBuilder java.time.format.DateTimeFormatterBuilder.appendValue(java.time.temporal.TemporalField) */
			/* name */ 'appendValue',
			[/* parameters */
				[/* parameter */
					/* name */ 'field',
					/* type */ 'java.time.temporal.TemporalField',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.format.DateTimeFormatterBuilder',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.format.DateTimeFormatterBuilder java.time.format.DateTimeFormatterBuilder.appendValue(java.time.temporal.TemporalField,int) */
			/* name */ 'appendValue',
			[/* parameters */
				[/* parameter */
					/* name */ 'field',
					/* type */ 'java.time.temporal.TemporalField',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'width',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.format.DateTimeFormatterBuilder',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.format.DateTimeFormatterBuilder java.time.format.DateTimeFormatterBuilder.appendValue(java.time.temporal.TemporalField,int,int,java.time.format.SignStyle) */
			/* name */ 'appendValue',
			[/* parameters */
				[/* parameter */
					/* name */ 'field',
					/* type */ 'java.time.temporal.TemporalField',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'minWidth',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'maxWidth',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'signStyle',
					/* type */ 'java.time.format.SignStyle',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.format.DateTimeFormatterBuilder',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.format.DateTimeFormatterBuilder java.time.format.DateTimeFormatterBuilder.appendValueReduced(java.time.temporal.TemporalField,int,int,int) */
			/* name */ 'appendValueReduced',
			[/* parameters */
				[/* parameter */
					/* name */ 'field',
					/* type */ 'java.time.temporal.TemporalField',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'width',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'maxWidth',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'baseValue',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.format.DateTimeFormatterBuilder',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.format.DateTimeFormatterBuilder java.time.format.DateTimeFormatterBuilder.appendValueReduced(java.time.temporal.TemporalField,int,int,java.time.chrono.ChronoLocalDate) */
			/* name */ 'appendValueReduced',
			[/* parameters */
				[/* parameter */
					/* name */ 'field',
					/* type */ 'java.time.temporal.TemporalField',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'width',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'maxWidth',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'baseDate',
					/* type */ 'java.time.chrono.ChronoLocalDate',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.format.DateTimeFormatterBuilder',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.format.DateTimeFormatterBuilder java.time.format.DateTimeFormatterBuilder.appendZoneId() */
			/* name */ 'appendZoneId',
			/* parameters */,
			/* return */ 'java.time.format.DateTimeFormatterBuilder',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.format.DateTimeFormatterBuilder java.time.format.DateTimeFormatterBuilder.appendZoneOrOffsetId() */
			/* name */ 'appendZoneOrOffsetId',
			/* parameters */,
			/* return */ 'java.time.format.DateTimeFormatterBuilder',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.format.DateTimeFormatterBuilder java.time.format.DateTimeFormatterBuilder.appendZoneRegionId() */
			/* name */ 'appendZoneRegionId',
			/* parameters */,
			/* return */ 'java.time.format.DateTimeFormatterBuilder',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.format.DateTimeFormatterBuilder java.time.format.DateTimeFormatterBuilder.appendZoneText(java.time.format.TextStyle) */
			/* name */ 'appendZoneText',
			[/* parameters */
				[/* parameter */
					/* name */ 'textStyle',
					/* type */ 'java.time.format.TextStyle',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.format.DateTimeFormatterBuilder',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.format.DateTimeFormatterBuilder java.time.format.DateTimeFormatterBuilder.appendZoneText(java.time.format.TextStyle,java.util.Set<java.time.ZoneId>) */
			/* name */ 'appendZoneText',
			[/* parameters */
				[/* parameter */
					/* name */ 'textStyle',
					/* type */ 'java.time.format.TextStyle',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'preferredZones',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							'java.time.ZoneId'
						],
						/* raw type */ 'java.util.Set',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.format.DateTimeFormatterBuilder',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.format.DateTimeFormatterBuilder java.time.format.DateTimeFormatterBuilder.optionalEnd() */
			/* name */ 'optionalEnd',
			/* parameters */,
			/* return */ 'java.time.format.DateTimeFormatterBuilder',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.format.DateTimeFormatterBuilder java.time.format.DateTimeFormatterBuilder.optionalStart() */
			/* name */ 'optionalStart',
			/* parameters */,
			/* return */ 'java.time.format.DateTimeFormatterBuilder',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.format.DateTimeFormatterBuilder java.time.format.DateTimeFormatterBuilder.padNext(int) */
			/* name */ 'padNext',
			[/* parameters */
				[/* parameter */
					/* name */ 'padWidth',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.format.DateTimeFormatterBuilder',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.format.DateTimeFormatterBuilder java.time.format.DateTimeFormatterBuilder.padNext(int,char) */
			/* name */ 'padNext',
			[/* parameters */
				[/* parameter */
					/* name */ 'padWidth',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'padChar',
					/* type */ 'char',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.format.DateTimeFormatterBuilder',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.format.DateTimeFormatterBuilder java.time.format.DateTimeFormatterBuilder.parseCaseInsensitive() */
			/* name */ 'parseCaseInsensitive',
			/* parameters */,
			/* return */ 'java.time.format.DateTimeFormatterBuilder',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.format.DateTimeFormatterBuilder java.time.format.DateTimeFormatterBuilder.parseCaseSensitive() */
			/* name */ 'parseCaseSensitive',
			/* parameters */,
			/* return */ 'java.time.format.DateTimeFormatterBuilder',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.format.DateTimeFormatterBuilder java.time.format.DateTimeFormatterBuilder.parseDefaulting(java.time.temporal.TemporalField,long) */
			/* name */ 'parseDefaulting',
			[/* parameters */
				[/* parameter */
					/* name */ 'field',
					/* type */ 'java.time.temporal.TemporalField',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'value',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.format.DateTimeFormatterBuilder',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.format.DateTimeFormatterBuilder java.time.format.DateTimeFormatterBuilder.parseLenient() */
			/* name */ 'parseLenient',
			/* parameters */,
			/* return */ 'java.time.format.DateTimeFormatterBuilder',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.format.DateTimeFormatterBuilder java.time.format.DateTimeFormatterBuilder.parseStrict() */
			/* name */ 'parseStrict',
			/* parameters */,
			/* return */ 'java.time.format.DateTimeFormatterBuilder',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.String java.time.format.DateTimeFormatterBuilder.getLocalizedDateTimePattern(java.time.format.FormatStyle,java.time.format.FormatStyle,java.time.chrono.Chronology,java.util.Locale) */
			/* name */ 'getLocalizedDateTimePattern',
			[/* parameters */
				[/* parameter */
					/* name */ 'timeStyle',
					/* type */ 'java.time.format.FormatStyle',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'chrono',
					/* type */ 'java.time.format.FormatStyle',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'locale',
					/* type */ 'java.time.chrono.Chronology',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'adapter',
					/* type */ 'java.util.Locale',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
