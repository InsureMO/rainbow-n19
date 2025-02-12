import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.lang.EnumConstantNotPresentException', [
	/* super class, extends java.lang.RuntimeException */
	'java.lang.RuntimeException',
	/* interfaces */,
	/* modifiers */ 1,
	/* declared annotations */,
	/* type parameters */,
	[/* declared constructors */
		[/* public java.lang.EnumConstantNotPresentException(java.lang.Class<? extends java.lang.Enum>,java.lang.String) */
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.lang.Enum'
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.lang.Class',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
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
		[/* public java.lang.Class<? extends java.lang.Enum> java.lang.EnumConstantNotPresentException.enumType() */
			/* name */ 'enumType',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* wildcard type */ 'wt', [
						[/* upper bounds */
							'java.lang.Enum'
						],
						/* lower bounds */ UDF
					]]
				],
				/* raw type */ 'java.lang.Class',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String java.lang.EnumConstantNotPresentException.constantName() */
			/* name */ 'constantName',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
