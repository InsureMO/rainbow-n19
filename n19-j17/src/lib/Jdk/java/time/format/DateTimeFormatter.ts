import {UDF} from '../../../../utils';
import {JdkClassCreateHelper} from '../../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.time.format.DateTimeFormatter', [
	/* super class, extends java.lang.Object */
	'java.lang.Object',
	/* interfaces */,
	/* modifiers */ 17,
	/* declared annotations */,
	/* type parameters */,
	/* declared constructors */,
	[/* declared methods */
		[/* public <T> T java.time.format.DateTimeFormatter.parse(java.lang.CharSequence,java.time.temporal.TemporalQuery<T>) */
			/* name */ 'parse',
			[/* parameters */
				[/* parameter */
					/* name */ 'text',
					/* type */ 'java.lang.CharSequence',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'query',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* type variable ref */ 'tr', [/* name */ 'T']]
						],
						/* raw type */ 'java.time.temporal.TemporalQuery',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* type variable ref */ 'tr', [/* name */ 'T']],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			[/* type parameters */
				[/* type variable */
					/* name */ 'T',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public java.lang.String java.time.format.DateTimeFormatter.format(java.time.temporal.TemporalAccessor) */
			/* name */ 'format',
			[/* parameters */
				[/* parameter */
					/* name */ 'temporal',
					/* type */ 'java.time.temporal.TemporalAccessor',
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
		[/* public java.lang.String java.time.format.DateTimeFormatter.toString() */
			/* name */ 'toString',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.text.Format java.time.format.DateTimeFormatter.toFormat() */
			/* name */ 'toFormat',
			/* parameters */,
			/* return */ 'java.text.Format',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.text.Format java.time.format.DateTimeFormatter.toFormat(java.time.temporal.TemporalQuery<?>) */
			/* name */ 'toFormat',
			[/* parameters */
				[/* parameter */
					/* name */ 'parseQuery',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.lang.Object'
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.time.temporal.TemporalQuery',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.text.Format',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.ZoneId java.time.format.DateTimeFormatter.getZone() */
			/* name */ 'getZone',
			/* parameters */,
			/* return */ 'java.time.ZoneId',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.chrono.Chronology java.time.format.DateTimeFormatter.getChronology() */
			/* name */ 'getChronology',
			/* parameters */,
			/* return */ 'java.time.chrono.Chronology',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.format.DateTimeFormatter java.time.format.DateTimeFormatter.localizedBy(java.util.Locale) */
			/* name */ 'localizedBy',
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
		[/* public java.time.format.DateTimeFormatter java.time.format.DateTimeFormatter.withChronology(java.time.chrono.Chronology) */
			/* name */ 'withChronology',
			[/* parameters */
				[/* parameter */
					/* name */ 'chrono',
					/* type */ 'java.time.chrono.Chronology',
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
		[/* public java.time.format.DateTimeFormatter java.time.format.DateTimeFormatter.withDecimalStyle(java.time.format.DecimalStyle) */
			/* name */ 'withDecimalStyle',
			[/* parameters */
				[/* parameter */
					/* name */ 'decimalStyle',
					/* type */ 'java.time.format.DecimalStyle',
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
		[/* public java.time.format.DateTimeFormatter java.time.format.DateTimeFormatter.withLocale(java.util.Locale) */
			/* name */ 'withLocale',
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
		[/* public java.time.format.DateTimeFormatter java.time.format.DateTimeFormatter.withResolverFields(java.time.temporal.TemporalField...) */
			/* name */ 'withResolverFields',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ '[Ljava.time.temporal.TemporalField;',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.format.DateTimeFormatter',
			/* exceptions */,
			/* modifiers */ 129,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.format.DateTimeFormatter java.time.format.DateTimeFormatter.withResolverFields(java.util.Set<java.time.temporal.TemporalField>) */
			/* name */ 'withResolverFields',
			[/* parameters */
				[/* parameter */
					/* name */ 'resolverFields',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							'java.time.temporal.TemporalField'
						],
						/* raw type */ 'java.util.Set',
						/* owner type */ UDF
					]],
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
		[/* public java.time.format.DateTimeFormatter java.time.format.DateTimeFormatter.withResolverStyle(java.time.format.ResolverStyle) */
			/* name */ 'withResolverStyle',
			[/* parameters */
				[/* parameter */
					/* name */ 'resolverStyle',
					/* type */ 'java.time.format.ResolverStyle',
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
		[/* public java.time.format.DateTimeFormatter java.time.format.DateTimeFormatter.withZone(java.time.ZoneId) */
			/* name */ 'withZone',
			[/* parameters */
				[/* parameter */
					/* name */ 'zone',
					/* type */ 'java.time.ZoneId',
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
		[/* public java.time.format.DecimalStyle java.time.format.DateTimeFormatter.getDecimalStyle() */
			/* name */ 'getDecimalStyle',
			/* parameters */,
			/* return */ 'java.time.format.DecimalStyle',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.format.ResolverStyle java.time.format.DateTimeFormatter.getResolverStyle() */
			/* name */ 'getResolverStyle',
			/* parameters */,
			/* return */ 'java.time.format.ResolverStyle',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.temporal.TemporalAccessor java.time.format.DateTimeFormatter.parse(java.lang.CharSequence) */
			/* name */ 'parse',
			[/* parameters */
				[/* parameter */
					/* name */ 'text',
					/* type */ 'java.lang.CharSequence',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.temporal.TemporalAccessor',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.temporal.TemporalAccessor java.time.format.DateTimeFormatter.parse(java.lang.CharSequence,java.text.ParsePosition) */
			/* name */ 'parse',
			[/* parameters */
				[/* parameter */
					/* name */ 'text',
					/* type */ 'java.lang.CharSequence',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'position',
					/* type */ 'java.text.ParsePosition',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.temporal.TemporalAccessor',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.temporal.TemporalAccessor java.time.format.DateTimeFormatter.parseBest(java.lang.CharSequence,java.time.temporal.TemporalQuery<?>...) */
			/* name */ 'parseBest',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.CharSequence',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ [/* generic array type */ 'ga', [[/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.lang.Object'
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.time.temporal.TemporalQuery',
						/* owner type */ UDF
					]]]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.temporal.TemporalAccessor',
			/* exceptions */,
			/* modifiers */ 129,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.temporal.TemporalAccessor java.time.format.DateTimeFormatter.parseUnresolved(java.lang.CharSequence,java.text.ParsePosition) */
			/* name */ 'parseUnresolved',
			[/* parameters */
				[/* parameter */
					/* name */ 'text',
					/* type */ 'java.lang.CharSequence',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'position',
					/* type */ 'java.text.ParsePosition',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.temporal.TemporalAccessor',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.Locale java.time.format.DateTimeFormatter.getLocale() */
			/* name */ 'getLocale',
			/* parameters */,
			/* return */ 'java.util.Locale',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.Set<java.time.temporal.TemporalField> java.time.format.DateTimeFormatter.getResolverFields() */
			/* name */ 'getResolverFields',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.time.temporal.TemporalField'
				],
				/* raw type */ 'java.util.Set',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static final java.time.temporal.TemporalQuery<java.lang.Boolean> java.time.format.DateTimeFormatter.parsedLeapSecond() */
			/* name */ 'parsedLeapSecond',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.lang.Boolean'
				],
				/* raw type */ 'java.time.temporal.TemporalQuery',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 25,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static final java.time.temporal.TemporalQuery<java.time.Period> java.time.format.DateTimeFormatter.parsedExcessDays() */
			/* name */ 'parsedExcessDays',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.time.Period'
				],
				/* raw type */ 'java.time.temporal.TemporalQuery',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 25,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.time.format.DateTimeFormatter java.time.format.DateTimeFormatter.ofLocalizedDate(java.time.format.FormatStyle) */
			/* name */ 'ofLocalizedDate',
			[/* parameters */
				[/* parameter */
					/* name */ 'dateStyle',
					/* type */ 'java.time.format.FormatStyle',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.format.DateTimeFormatter',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.time.format.DateTimeFormatter java.time.format.DateTimeFormatter.ofLocalizedDateTime(java.time.format.FormatStyle) */
			/* name */ 'ofLocalizedDateTime',
			[/* parameters */
				[/* parameter */
					/* name */ 'dateTimeStyle',
					/* type */ 'java.time.format.FormatStyle',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.format.DateTimeFormatter',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.time.format.DateTimeFormatter java.time.format.DateTimeFormatter.ofLocalizedDateTime(java.time.format.FormatStyle,java.time.format.FormatStyle) */
			/* name */ 'ofLocalizedDateTime',
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
			/* return */ 'java.time.format.DateTimeFormatter',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.time.format.DateTimeFormatter java.time.format.DateTimeFormatter.ofLocalizedTime(java.time.format.FormatStyle) */
			/* name */ 'ofLocalizedTime',
			[/* parameters */
				[/* parameter */
					/* name */ 'timeStyle',
					/* type */ 'java.time.format.FormatStyle',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.format.DateTimeFormatter',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.time.format.DateTimeFormatter java.time.format.DateTimeFormatter.ofPattern(java.lang.String) */
			/* name */ 'ofPattern',
			[/* parameters */
				[/* parameter */
					/* name */ 'pattern',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.format.DateTimeFormatter',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.time.format.DateTimeFormatter java.time.format.DateTimeFormatter.ofPattern(java.lang.String,java.util.Locale) */
			/* name */ 'ofPattern',
			[/* parameters */
				[/* parameter */
					/* name */ 'pattern',
					/* type */ 'java.lang.String',
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
			/* return */ 'java.time.format.DateTimeFormatter',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void java.time.format.DateTimeFormatter.formatTo(java.time.temporal.TemporalAccessor,java.lang.Appendable) */
			/* name */ 'formatTo',
			[/* parameters */
				[/* parameter */
					/* name */ 'temporal',
					/* type */ 'java.time.temporal.TemporalAccessor',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'appendable',
					/* type */ 'java.lang.Appendable',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	[/* declared fields */
		[/* public static final java.time.format.DateTimeFormatter java.time.format.DateTimeFormatter.ISO_LOCAL_DATE */
			/* name */ 'ISO_LOCAL_DATE',
			/* type */ 'java.time.format.DateTimeFormatter',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final java.time.format.DateTimeFormatter java.time.format.DateTimeFormatter.ISO_OFFSET_DATE */
			/* name */ 'ISO_OFFSET_DATE',
			/* type */ 'java.time.format.DateTimeFormatter',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final java.time.format.DateTimeFormatter java.time.format.DateTimeFormatter.ISO_DATE */
			/* name */ 'ISO_DATE',
			/* type */ 'java.time.format.DateTimeFormatter',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final java.time.format.DateTimeFormatter java.time.format.DateTimeFormatter.ISO_LOCAL_TIME */
			/* name */ 'ISO_LOCAL_TIME',
			/* type */ 'java.time.format.DateTimeFormatter',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final java.time.format.DateTimeFormatter java.time.format.DateTimeFormatter.ISO_OFFSET_TIME */
			/* name */ 'ISO_OFFSET_TIME',
			/* type */ 'java.time.format.DateTimeFormatter',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final java.time.format.DateTimeFormatter java.time.format.DateTimeFormatter.ISO_TIME */
			/* name */ 'ISO_TIME',
			/* type */ 'java.time.format.DateTimeFormatter',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final java.time.format.DateTimeFormatter java.time.format.DateTimeFormatter.ISO_LOCAL_DATE_TIME */
			/* name */ 'ISO_LOCAL_DATE_TIME',
			/* type */ 'java.time.format.DateTimeFormatter',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final java.time.format.DateTimeFormatter java.time.format.DateTimeFormatter.ISO_OFFSET_DATE_TIME */
			/* name */ 'ISO_OFFSET_DATE_TIME',
			/* type */ 'java.time.format.DateTimeFormatter',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final java.time.format.DateTimeFormatter java.time.format.DateTimeFormatter.ISO_ZONED_DATE_TIME */
			/* name */ 'ISO_ZONED_DATE_TIME',
			/* type */ 'java.time.format.DateTimeFormatter',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final java.time.format.DateTimeFormatter java.time.format.DateTimeFormatter.ISO_DATE_TIME */
			/* name */ 'ISO_DATE_TIME',
			/* type */ 'java.time.format.DateTimeFormatter',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final java.time.format.DateTimeFormatter java.time.format.DateTimeFormatter.ISO_ORDINAL_DATE */
			/* name */ 'ISO_ORDINAL_DATE',
			/* type */ 'java.time.format.DateTimeFormatter',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final java.time.format.DateTimeFormatter java.time.format.DateTimeFormatter.ISO_WEEK_DATE */
			/* name */ 'ISO_WEEK_DATE',
			/* type */ 'java.time.format.DateTimeFormatter',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final java.time.format.DateTimeFormatter java.time.format.DateTimeFormatter.ISO_INSTANT */
			/* name */ 'ISO_INSTANT',
			/* type */ 'java.time.format.DateTimeFormatter',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final java.time.format.DateTimeFormatter java.time.format.DateTimeFormatter.BASIC_ISO_DATE */
			/* name */ 'BASIC_ISO_DATE',
			/* type */ 'java.time.format.DateTimeFormatter',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final java.time.format.DateTimeFormatter java.time.format.DateTimeFormatter.RFC_1123_DATE_TIME */
			/* name */ 'RFC_1123_DATE_TIME',
			/* type */ 'java.time.format.DateTimeFormatter',
			/* annotations */ UDF,
			/* modifiers */ 25
		]
	],
	/* enum values */ UDF
]);
