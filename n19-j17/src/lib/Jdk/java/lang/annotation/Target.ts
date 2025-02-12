import {UDF} from '../../../../utils';
import {JdkClassCreateHelper} from '../../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.lang.annotation.Target', [
	/* super class */,
	[/* interfaces, implements java.lang.annotation.Annotation */
		'java.lang.annotation.Annotation'
	],
	/* modifiers */ 9729,
	[/* declared annotations */
		['java.lang.annotation.Documented'],
		[
			'java.lang.annotation.Retention',
			['p', 'value', 'java.lang.annotation.RetentionPolicy.RUNTIME']
		],
		[
			'java.lang.annotation.Target',
			['p', 'value', ['java.lang.annotation.ElementType.ANNOTATION_TYPE']]
		]
	],
	/* type parameters */,
	/* declared constructors */,
	[/* declared methods */
		[/* public abstract java.lang.annotation.ElementType[] java.lang.annotation.Target.value() */
			/* name */ 'value',
			/* parameters */,
			/* return */ '[Ljava.lang.annotation.ElementType;',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
