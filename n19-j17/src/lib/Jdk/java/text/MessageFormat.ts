import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.text.MessageFormat', [
	/* super class, extends java.text.Format */
	'java.text.Format',
	/* interfaces */,
	/* modifiers */ 1,
	/* declared annotations */,
	/* type parameters */,
	[/* declared constructors */
		[/* public java.text.MessageFormat(java.lang.String) */
			[/* parameters */
				[/* parameter */
					/* name */ 'pattern',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.text.MessageFormat(java.lang.String,java.util.Locale) */
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
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	[/* declared methods */
		[/* public boolean java.text.MessageFormat.equals(java.lang.Object) */
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
		[/* public final java.lang.StringBuffer java.text.MessageFormat.format(java.lang.Object,java.lang.StringBuffer,java.text.FieldPosition) */
			/* name */ 'format',
			[/* parameters */
				[/* parameter */
					/* name */ 'arguments',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'result',
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
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final java.lang.StringBuffer java.text.MessageFormat.format(java.lang.Object[],java.lang.StringBuffer,java.text.FieldPosition) */
			/* name */ 'format',
			[/* parameters */
				[/* parameter */
					/* name */ 'arguments',
					/* type */ '[Ljava.lang.Object;',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'result',
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
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int java.text.MessageFormat.hashCode() */
			/* name */ 'hashCode',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.Object java.text.MessageFormat.clone() */
			/* name */ 'clone',
			/* parameters */,
			/* return */ 'java.lang.Object',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.Object java.text.MessageFormat.parseObject(java.lang.String,java.text.ParsePosition) */
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
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.Object[] java.text.MessageFormat.parse(java.lang.String) throws java.text.ParseException */
			/* name */ 'parse',
			[/* parameters */
				[/* parameter */
					/* name */ 'source',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ '[Ljava.lang.Object;',
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
		[/* public java.lang.Object[] java.text.MessageFormat.parse(java.lang.String,java.text.ParsePosition) */
			/* name */ 'parse',
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
			/* return */ '[Ljava.lang.Object;',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String java.text.MessageFormat.toPattern() */
			/* name */ 'toPattern',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.text.AttributedCharacterIterator java.text.MessageFormat.formatToCharacterIterator(java.lang.Object) */
			/* name */ 'formatToCharacterIterator',
			[/* parameters */
				[/* parameter */
					/* name */ 'arguments',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.text.AttributedCharacterIterator',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.text.Format[] java.text.MessageFormat.getFormats() */
			/* name */ 'getFormats',
			/* parameters */,
			/* return */ '[Ljava.text.Format;',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.text.Format[] java.text.MessageFormat.getFormatsByArgumentIndex() */
			/* name */ 'getFormatsByArgumentIndex',
			/* parameters */,
			/* return */ '[Ljava.text.Format;',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.Locale java.text.MessageFormat.getLocale() */
			/* name */ 'getLocale',
			/* parameters */,
			/* return */ 'java.util.Locale',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.String java.text.MessageFormat.format(java.lang.String,java.lang.Object...) */
			/* name */ 'format',
			[/* parameters */
				[/* parameter */
					/* name */ 'pattern',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arguments',
					/* type */ '[Ljava.lang.Object;',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 137,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void java.text.MessageFormat.applyPattern(java.lang.String) */
			/* name */ 'applyPattern',
			[/* parameters */
				[/* parameter */
					/* name */ 'pattern',
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
		[/* public void java.text.MessageFormat.setFormat(int,java.text.Format) */
			/* name */ 'setFormat',
			[/* parameters */
				[/* parameter */
					/* name */ 'formatElementIndex',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'newFormat',
					/* type */ 'java.text.Format',
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
		[/* public void java.text.MessageFormat.setFormatByArgumentIndex(int,java.text.Format) */
			/* name */ 'setFormatByArgumentIndex',
			[/* parameters */
				[/* parameter */
					/* name */ 'argumentIndex',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'newFormat',
					/* type */ 'java.text.Format',
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
		[/* public void java.text.MessageFormat.setFormats(java.text.Format[]) */
			/* name */ 'setFormats',
			[/* parameters */
				[/* parameter */
					/* name */ 'newFormats',
					/* type */ '[Ljava.text.Format;',
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
		[/* public void java.text.MessageFormat.setFormatsByArgumentIndex(java.text.Format[]) */
			/* name */ 'setFormatsByArgumentIndex',
			[/* parameters */
				[/* parameter */
					/* name */ 'newFormats',
					/* type */ '[Ljava.text.Format;',
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
		[/* public void java.text.MessageFormat.setLocale(java.util.Locale) */
			/* name */ 'setLocale',
			[/* parameters */
				[/* parameter */
					/* name */ 'locale',
					/* type */ 'java.util.Locale',
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
