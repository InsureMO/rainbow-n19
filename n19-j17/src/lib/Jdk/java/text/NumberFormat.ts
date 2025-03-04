import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.text.NumberFormat', [
	/* super class, extends java.text.Format */
	'java.text.Format',
	/* interfaces */,
	/* modifiers */ 1025,
	/* declared annotations */,
	/* type parameters */,
	[/* declared constructors */
		[/* protected java.text.NumberFormat() */
			/* parameters */,
			/* exceptions */,
			/* modifiers */ 4,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	[/* declared methods */
		[/* public abstract java.lang.Number java.text.NumberFormat.parse(java.lang.String,java.text.ParsePosition) */
			/* name */ 'parse',
			[/* parameters */
				[/* parameter */
					/* name */ 'source',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'parsePosition',
					/* type */ 'java.text.ParsePosition',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.Number',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.lang.StringBuffer java.text.NumberFormat.format(double,java.lang.StringBuffer,java.text.FieldPosition) */
			/* name */ 'format',
			[/* parameters */
				[/* parameter */
					/* name */ 'number',
					/* type */ 'double',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'toAppendTo',
					/* type */ 'java.lang.StringBuffer',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'pos',
					/* type */ 'java.text.FieldPosition',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.StringBuffer',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.lang.StringBuffer java.text.NumberFormat.format(long,java.lang.StringBuffer,java.text.FieldPosition) */
			/* name */ 'format',
			[/* parameters */
				[/* parameter */
					/* name */ 'number',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'toAppendTo',
					/* type */ 'java.lang.StringBuffer',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'pos',
					/* type */ 'java.text.FieldPosition',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.StringBuffer',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public boolean java.text.NumberFormat.equals(java.lang.Object) */
			/* name */ 'equals',
			[/* parameters */
				[/* parameter */
					/* name */ 'obj',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public boolean java.text.NumberFormat.isGroupingUsed() */
			/* name */ 'isGroupingUsed',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public boolean java.text.NumberFormat.isParseIntegerOnly() */
			/* name */ 'isParseIntegerOnly',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final java.lang.Object java.text.NumberFormat.parseObject(java.lang.String,java.text.ParsePosition) */
			/* name */ 'parseObject',
			[/* parameters */
				[/* parameter */
					/* name */ 'source',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'pos',
					/* type */ 'java.text.ParsePosition',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.Object',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final java.lang.String java.text.NumberFormat.format(double) */
			/* name */ 'format',
			[/* parameters */
				[/* parameter */
					/* name */ 'number',
					/* type */ 'double',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final java.lang.String java.text.NumberFormat.format(long) */
			/* name */ 'format',
			[/* parameters */
				[/* parameter */
					/* name */ 'number',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int java.text.NumberFormat.getMaximumFractionDigits() */
			/* name */ 'getMaximumFractionDigits',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int java.text.NumberFormat.getMaximumIntegerDigits() */
			/* name */ 'getMaximumIntegerDigits',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int java.text.NumberFormat.getMinimumFractionDigits() */
			/* name */ 'getMinimumFractionDigits',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int java.text.NumberFormat.getMinimumIntegerDigits() */
			/* name */ 'getMinimumIntegerDigits',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int java.text.NumberFormat.hashCode() */
			/* name */ 'hashCode',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.Number java.text.NumberFormat.parse(java.lang.String) throws java.text.ParseException */
			/* name */ 'parse',
			[/* parameters */
				[/* parameter */
					/* name */ 'source',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.Number',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.text.ParseException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.Object java.text.NumberFormat.clone() */
			/* name */ 'clone',
			/* parameters */,
			/* return */ 'java.lang.Object',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.StringBuffer java.text.NumberFormat.format(java.lang.Object,java.lang.StringBuffer,java.text.FieldPosition) */
			/* name */ 'format',
			[/* parameters */
				[/* parameter */
					/* name */ 'number',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'toAppendTo',
					/* type */ 'java.lang.StringBuffer',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'pos',
					/* type */ 'java.text.FieldPosition',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.StringBuffer',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.math.RoundingMode java.text.NumberFormat.getRoundingMode() */
			/* name */ 'getRoundingMode',
			/* parameters */,
			/* return */ 'java.math.RoundingMode',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.Currency java.text.NumberFormat.getCurrency() */
			/* name */ 'getCurrency',
			/* parameters */,
			/* return */ 'java.util.Currency',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static final java.text.NumberFormat java.text.NumberFormat.getCurrencyInstance() */
			/* name */ 'getCurrencyInstance',
			/* parameters */,
			/* return */ 'java.text.NumberFormat',
			/* exceptions */,
			/* modifiers */ 25,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static final java.text.NumberFormat java.text.NumberFormat.getInstance() */
			/* name */ 'getInstance',
			/* parameters */,
			/* return */ 'java.text.NumberFormat',
			/* exceptions */,
			/* modifiers */ 25,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static final java.text.NumberFormat java.text.NumberFormat.getIntegerInstance() */
			/* name */ 'getIntegerInstance',
			/* parameters */,
			/* return */ 'java.text.NumberFormat',
			/* exceptions */,
			/* modifiers */ 25,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static final java.text.NumberFormat java.text.NumberFormat.getNumberInstance() */
			/* name */ 'getNumberInstance',
			/* parameters */,
			/* return */ 'java.text.NumberFormat',
			/* exceptions */,
			/* modifiers */ 25,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static final java.text.NumberFormat java.text.NumberFormat.getPercentInstance() */
			/* name */ 'getPercentInstance',
			/* parameters */,
			/* return */ 'java.text.NumberFormat',
			/* exceptions */,
			/* modifiers */ 25,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.text.NumberFormat java.text.NumberFormat.getCompactNumberInstance() */
			/* name */ 'getCompactNumberInstance',
			/* parameters */,
			/* return */ 'java.text.NumberFormat',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.text.NumberFormat java.text.NumberFormat.getCompactNumberInstance(java.util.Locale,java.text.NumberFormat$Style) */
			/* name */ 'getCompactNumberInstance',
			[/* parameters */
				[/* parameter */
					/* name */ 'locale',
					/* type */ 'java.util.Locale',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'formatStyle',
					/* type */ 'java.text.NumberFormat$Style',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.text.NumberFormat',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.text.NumberFormat java.text.NumberFormat.getCurrencyInstance(java.util.Locale) */
			/* name */ 'getCurrencyInstance',
			[/* parameters */
				[/* parameter */
					/* name */ 'inLocale',
					/* type */ 'java.util.Locale',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.text.NumberFormat',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.text.NumberFormat java.text.NumberFormat.getInstance(java.util.Locale) */
			/* name */ 'getInstance',
			[/* parameters */
				[/* parameter */
					/* name */ 'inLocale',
					/* type */ 'java.util.Locale',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.text.NumberFormat',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.text.NumberFormat java.text.NumberFormat.getIntegerInstance(java.util.Locale) */
			/* name */ 'getIntegerInstance',
			[/* parameters */
				[/* parameter */
					/* name */ 'inLocale',
					/* type */ 'java.util.Locale',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.text.NumberFormat',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.text.NumberFormat java.text.NumberFormat.getNumberInstance(java.util.Locale) */
			/* name */ 'getNumberInstance',
			[/* parameters */
				[/* parameter */
					/* name */ 'inLocale',
					/* type */ 'java.util.Locale',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.text.NumberFormat',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.text.NumberFormat java.text.NumberFormat.getPercentInstance(java.util.Locale) */
			/* name */ 'getPercentInstance',
			[/* parameters */
				[/* parameter */
					/* name */ 'inLocale',
					/* type */ 'java.util.Locale',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.text.NumberFormat',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.util.Locale[] java.text.NumberFormat.getAvailableLocales() */
			/* name */ 'getAvailableLocales',
			/* parameters */,
			/* return */ '[Ljava.util.Locale;',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void java.text.NumberFormat.setCurrency(java.util.Currency) */
			/* name */ 'setCurrency',
			[/* parameters */
				[/* parameter */
					/* name */ 'currency',
					/* type */ 'java.util.Currency',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void java.text.NumberFormat.setGroupingUsed(boolean) */
			/* name */ 'setGroupingUsed',
			[/* parameters */
				[/* parameter */
					/* name */ 'newValue',
					/* type */ 'boolean',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void java.text.NumberFormat.setMaximumFractionDigits(int) */
			/* name */ 'setMaximumFractionDigits',
			[/* parameters */
				[/* parameter */
					/* name */ 'newValue',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void java.text.NumberFormat.setMaximumIntegerDigits(int) */
			/* name */ 'setMaximumIntegerDigits',
			[/* parameters */
				[/* parameter */
					/* name */ 'newValue',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void java.text.NumberFormat.setMinimumFractionDigits(int) */
			/* name */ 'setMinimumFractionDigits',
			[/* parameters */
				[/* parameter */
					/* name */ 'newValue',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void java.text.NumberFormat.setMinimumIntegerDigits(int) */
			/* name */ 'setMinimumIntegerDigits',
			[/* parameters */
				[/* parameter */
					/* name */ 'newValue',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void java.text.NumberFormat.setParseIntegerOnly(boolean) */
			/* name */ 'setParseIntegerOnly',
			[/* parameters */
				[/* parameter */
					/* name */ 'value',
					/* type */ 'boolean',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void java.text.NumberFormat.setRoundingMode(java.math.RoundingMode) */
			/* name */ 'setRoundingMode',
			[/* parameters */
				[/* parameter */
					/* name */ 'roundingMode',
					/* type */ 'java.math.RoundingMode',
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
		[/* public static final int java.text.NumberFormat.FRACTION_FIELD */
			/* name */ 'FRACTION_FIELD',
			/* type */ 'int',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final int java.text.NumberFormat.INTEGER_FIELD */
			/* name */ 'INTEGER_FIELD',
			/* type */ 'int',
			/* annotations */ UDF,
			/* modifiers */ 25
		]
	],
	/* enum values */ UDF
]);
