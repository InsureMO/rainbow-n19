import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.text.ChoiceFormat', [
	/* super class, extends java.text.NumberFormat */
	'java.text.NumberFormat',
	/* interfaces */,
	/* modifiers */ 1,
	/* declared annotations */,
	/* type parameters */,
	[/* declared constructors */
		[/* public java.text.ChoiceFormat(double[],java.lang.String[]) */
			[/* parameters */
				[/* parameter */
					/* name */ 'limits',
					/* type */ '[D',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'formats',
					/* type */ '[Ljava.lang.String;',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.text.ChoiceFormat(java.lang.String) */
			[/* parameters */
				[/* parameter */
					/* name */ 'newPattern',
					/* type */ 'java.lang.String',
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
		[/* public boolean java.text.ChoiceFormat.equals(java.lang.Object) */
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
		[/* public double[] java.text.ChoiceFormat.getLimits() */
			/* name */ 'getLimits',
			/* parameters */,
			/* return */ '[D',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int java.text.ChoiceFormat.hashCode() */
			/* name */ 'hashCode',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.Number java.text.ChoiceFormat.parse(java.lang.String,java.text.ParsePosition) */
			/* name */ 'parse',
			[/* parameters */
				[/* parameter */
					/* name */ 'text',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'status',
					/* type */ 'java.text.ParsePosition',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.Number',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.Object java.text.ChoiceFormat.clone() */
			/* name */ 'clone',
			/* parameters */,
			/* return */ 'java.lang.Object',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.Object[] java.text.ChoiceFormat.getFormats() */
			/* name */ 'getFormats',
			/* parameters */,
			/* return */ '[Ljava.lang.Object;',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String java.text.ChoiceFormat.toPattern() */
			/* name */ 'toPattern',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.StringBuffer java.text.ChoiceFormat.format(double,java.lang.StringBuffer,java.text.FieldPosition) */
			/* name */ 'format',
			[/* parameters */
				[/* parameter */
					/* name */ 'number',
					/* type */ 'double',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'java.lang.StringBuffer',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'toAppendTo',
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
		[/* public java.lang.StringBuffer java.text.ChoiceFormat.format(long,java.lang.StringBuffer,java.text.FieldPosition) */
			/* name */ 'format',
			[/* parameters */
				[/* parameter */
					/* name */ 'number',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'java.lang.StringBuffer',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'toAppendTo',
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
		[/* public static double java.text.ChoiceFormat.nextDouble(double,boolean) */
			/* name */ 'nextDouble',
			[/* parameters */
				[/* parameter */
					/* name */ 'd',
					/* type */ 'double',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'boolean',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'double',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static final double java.text.ChoiceFormat.nextDouble(double) */
			/* name */ 'nextDouble',
			[/* parameters */
				[/* parameter */
					/* name */ 'd',
					/* type */ 'double',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'double',
			/* exceptions */,
			/* modifiers */ 25,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static final double java.text.ChoiceFormat.previousDouble(double) */
			/* name */ 'previousDouble',
			[/* parameters */
				[/* parameter */
					/* name */ 'd',
					/* type */ 'double',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'double',
			/* exceptions */,
			/* modifiers */ 25,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void java.text.ChoiceFormat.applyPattern(java.lang.String) */
			/* name */ 'applyPattern',
			[/* parameters */
				[/* parameter */
					/* name */ 'newPattern',
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
		[/* public void java.text.ChoiceFormat.setChoices(double[],java.lang.String[]) */
			/* name */ 'setChoices',
			[/* parameters */
				[/* parameter */
					/* name */ 'limits',
					/* type */ '[D',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'formats',
					/* type */ '[Ljava.lang.String;',
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
