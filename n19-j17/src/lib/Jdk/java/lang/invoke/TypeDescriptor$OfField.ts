import {UDF} from '../../../../utils';
import {JdkClassCreateHelper} from '../../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.lang.invoke.TypeDescriptor$OfField', [
	/* super class */,
	[/* interfaces, implements java.lang.invoke.TypeDescriptor */
		'java.lang.invoke.TypeDescriptor'
	],
	/* modifiers */ 1545,
	/* declared annotations */,
	[/* type parameters */
		[/* type variable */
			/* name */ 'F',
			[/* bounds */
				[/* parameterized type */ 'pt', [
					[/* actual argument types */
						[/* type variable ref */ 'tr', [/* name */ 'F']]
					],
					/* raw type */ 'java.lang.invoke.TypeDescriptor$OfField',
					/* owner type */ 'java.lang.invoke.TypeDescriptor'
				]]
			],
			/* annotations */ UDF
		]
	],
	/* declared constructors */,
	[/* declared methods */
		[/* public abstract boolean java.lang.invoke.TypeDescriptor$OfField.isArray() */
			/* name */ 'isArray',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract boolean java.lang.invoke.TypeDescriptor$OfField.isPrimitive() */
			/* name */ 'isPrimitive',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract F java.lang.invoke.TypeDescriptor$OfField.componentType() */
			/* name */ 'componentType',
			/* parameters */,
			/* return */ [/* type variable ref */ 'tr', [/* name */ 'F']],
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract F java.lang.invoke.TypeDescriptor$OfField.arrayType() */
			/* name */ 'arrayType',
			/* parameters */,
			/* return */ [/* type variable ref */ 'tr', [/* name */ 'F']],
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
