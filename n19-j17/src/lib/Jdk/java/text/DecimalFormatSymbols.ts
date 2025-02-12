import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.text.DecimalFormatSymbols', [
	/* super class, extends java.lang.Object */
	'java.lang.Object',
	[/* interfaces, implements java.lang.Cloneable, java.io.Serializable */
		'java.lang.Cloneable',
		'java.io.Serializable'
	],
	/* modifiers */ 1,
	/* declared annotations */,
	/* type parameters */,
	[/* declared constructors */
		[/* public java.text.DecimalFormatSymbols() */
			/* parameters */,
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.text.DecimalFormatSymbols(java.util.Locale) */
			[/* parameters */
				[/* parameter */
					/* name */ 'locale',
					/* type */ 'java.util.Locale',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	[/* declared methods */
		[/* public boolean java.text.DecimalFormatSymbols.equals(java.lang.Object) */
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
		[/* public char java.text.DecimalFormatSymbols.getDecimalSeparator() */
			/* name */ 'getDecimalSeparator',
			/* parameters */,
			/* return */ 'char',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public char java.text.DecimalFormatSymbols.getDigit() */
			/* name */ 'getDigit',
			/* parameters */,
			/* return */ 'char',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public char java.text.DecimalFormatSymbols.getGroupingSeparator() */
			/* name */ 'getGroupingSeparator',
			/* parameters */,
			/* return */ 'char',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public char java.text.DecimalFormatSymbols.getMinusSign() */
			/* name */ 'getMinusSign',
			/* parameters */,
			/* return */ 'char',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public char java.text.DecimalFormatSymbols.getMonetaryDecimalSeparator() */
			/* name */ 'getMonetaryDecimalSeparator',
			/* parameters */,
			/* return */ 'char',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public char java.text.DecimalFormatSymbols.getMonetaryGroupingSeparator() */
			/* name */ 'getMonetaryGroupingSeparator',
			/* parameters */,
			/* return */ 'char',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public char java.text.DecimalFormatSymbols.getPatternSeparator() */
			/* name */ 'getPatternSeparator',
			/* parameters */,
			/* return */ 'char',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public char java.text.DecimalFormatSymbols.getPerMill() */
			/* name */ 'getPerMill',
			/* parameters */,
			/* return */ 'char',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public char java.text.DecimalFormatSymbols.getPercent() */
			/* name */ 'getPercent',
			/* parameters */,
			/* return */ 'char',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public char java.text.DecimalFormatSymbols.getZeroDigit() */
			/* name */ 'getZeroDigit',
			/* parameters */,
			/* return */ 'char',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int java.text.DecimalFormatSymbols.hashCode() */
			/* name */ 'hashCode',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.Object java.text.DecimalFormatSymbols.clone() */
			/* name */ 'clone',
			/* parameters */,
			/* return */ 'java.lang.Object',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String java.text.DecimalFormatSymbols.getCurrencySymbol() */
			/* name */ 'getCurrencySymbol',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String java.text.DecimalFormatSymbols.getExponentSeparator() */
			/* name */ 'getExponentSeparator',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String java.text.DecimalFormatSymbols.getInfinity() */
			/* name */ 'getInfinity',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String java.text.DecimalFormatSymbols.getInternationalCurrencySymbol() */
			/* name */ 'getInternationalCurrencySymbol',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String java.text.DecimalFormatSymbols.getNaN() */
			/* name */ 'getNaN',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.Currency java.text.DecimalFormatSymbols.getCurrency() */
			/* name */ 'getCurrency',
			/* parameters */,
			/* return */ 'java.util.Currency',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static final java.text.DecimalFormatSymbols java.text.DecimalFormatSymbols.getInstance() */
			/* name */ 'getInstance',
			/* parameters */,
			/* return */ 'java.text.DecimalFormatSymbols',
			/* exceptions */,
			/* modifiers */ 25,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static final java.text.DecimalFormatSymbols java.text.DecimalFormatSymbols.getInstance(java.util.Locale) */
			/* name */ 'getInstance',
			[/* parameters */
				[/* parameter */
					/* name */ 'adapter',
					/* type */ 'java.util.Locale',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.text.DecimalFormatSymbols',
			/* exceptions */,
			/* modifiers */ 25,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.util.Locale[] java.text.DecimalFormatSymbols.getAvailableLocales() */
			/* name */ 'getAvailableLocales',
			/* parameters */,
			/* return */ '[Ljava.util.Locale;',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void java.text.DecimalFormatSymbols.setCurrency(java.util.Currency) */
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
		[/* public void java.text.DecimalFormatSymbols.setCurrencySymbol(java.lang.String) */
			/* name */ 'setCurrencySymbol',
			[/* parameters */
				[/* parameter */
					/* name */ 'currency',
					/* type */ 'java.lang.String',
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
		[/* public void java.text.DecimalFormatSymbols.setDecimalSeparator(char) */
			/* name */ 'setDecimalSeparator',
			[/* parameters */
				[/* parameter */
					/* name */ 'decimalSeparator',
					/* type */ 'char',
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
		[/* public void java.text.DecimalFormatSymbols.setDigit(char) */
			/* name */ 'setDigit',
			[/* parameters */
				[/* parameter */
					/* name */ 'digit',
					/* type */ 'char',
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
		[/* public void java.text.DecimalFormatSymbols.setExponentSeparator(java.lang.String) */
			/* name */ 'setExponentSeparator',
			[/* parameters */
				[/* parameter */
					/* name */ 'exp',
					/* type */ 'java.lang.String',
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
		[/* public void java.text.DecimalFormatSymbols.setGroupingSeparator(char) */
			/* name */ 'setGroupingSeparator',
			[/* parameters */
				[/* parameter */
					/* name */ 'groupingSeparator',
					/* type */ 'char',
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
		[/* public void java.text.DecimalFormatSymbols.setInfinity(java.lang.String) */
			/* name */ 'setInfinity',
			[/* parameters */
				[/* parameter */
					/* name */ 'infinity',
					/* type */ 'java.lang.String',
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
		[/* public void java.text.DecimalFormatSymbols.setInternationalCurrencySymbol(java.lang.String) */
			/* name */ 'setInternationalCurrencySymbol',
			[/* parameters */
				[/* parameter */
					/* name */ 'currencyCode',
					/* type */ 'java.lang.String',
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
		[/* public void java.text.DecimalFormatSymbols.setMinusSign(char) */
			/* name */ 'setMinusSign',
			[/* parameters */
				[/* parameter */
					/* name */ 'minusSign',
					/* type */ 'char',
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
		[/* public void java.text.DecimalFormatSymbols.setMonetaryDecimalSeparator(char) */
			/* name */ 'setMonetaryDecimalSeparator',
			[/* parameters */
				[/* parameter */
					/* name */ 'sep',
					/* type */ 'char',
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
		[/* public void java.text.DecimalFormatSymbols.setMonetaryGroupingSeparator(char) */
			/* name */ 'setMonetaryGroupingSeparator',
			[/* parameters */
				[/* parameter */
					/* name */ 'monetaryGroupingSeparator',
					/* type */ 'char',
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
		[/* public void java.text.DecimalFormatSymbols.setNaN(java.lang.String) */
			/* name */ 'setNaN',
			[/* parameters */
				[/* parameter */
					/* name */ 'NaN',
					/* type */ 'java.lang.String',
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
		[/* public void java.text.DecimalFormatSymbols.setPatternSeparator(char) */
			/* name */ 'setPatternSeparator',
			[/* parameters */
				[/* parameter */
					/* name */ 'patternSeparator',
					/* type */ 'char',
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
		[/* public void java.text.DecimalFormatSymbols.setPerMill(char) */
			/* name */ 'setPerMill',
			[/* parameters */
				[/* parameter */
					/* name */ 'perMill',
					/* type */ 'char',
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
		[/* public void java.text.DecimalFormatSymbols.setPercent(char) */
			/* name */ 'setPercent',
			[/* parameters */
				[/* parameter */
					/* name */ 'percent',
					/* type */ 'char',
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
		[/* public void java.text.DecimalFormatSymbols.setZeroDigit(char) */
			/* name */ 'setZeroDigit',
			[/* parameters */
				[/* parameter */
					/* name */ 'zeroDigit',
					/* type */ 'char',
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
	/* declared fields */,
	/* enum values */ UDF
]);
