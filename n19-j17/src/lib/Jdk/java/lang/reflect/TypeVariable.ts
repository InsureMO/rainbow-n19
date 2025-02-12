import {UDF} from '../../../../utils';
import {JdkClassCreateHelper} from '../../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.lang.reflect.TypeVariable', [
	/* super class */,
	[/* interfaces, implements java.lang.reflect.Type, java.lang.reflect.AnnotatedElement */
		'java.lang.reflect.Type',
		'java.lang.reflect.AnnotatedElement'
	],
	/* modifiers */ 1537,
	/* declared annotations */,
	[/* type parameters */
		[/* type variable */
			/* name */ 'D',
			[/* bounds */
				'java.lang.reflect.GenericDeclaration'
			],
			/* annotations */ UDF
		]
	],
	/* declared constructors */,
	[/* declared methods */
		[/* public abstract D java.lang.reflect.TypeVariable.getGenericDeclaration() */
			/* name */ 'getGenericDeclaration',
			/* parameters */,
			/* return */ [/* type variable ref */ 'tr', [/* name */ 'D']],
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.lang.String java.lang.reflect.TypeVariable.getName() */
			/* name */ 'getName',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.lang.reflect.AnnotatedType[] java.lang.reflect.TypeVariable.getAnnotatedBounds() */
			/* name */ 'getAnnotatedBounds',
			/* parameters */,
			/* return */ '[Ljava.lang.reflect.AnnotatedType;',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.lang.reflect.Type[] java.lang.reflect.TypeVariable.getBounds() */
			/* name */ 'getBounds',
			/* parameters */,
			/* return */ '[Ljava.lang.reflect.Type;',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
