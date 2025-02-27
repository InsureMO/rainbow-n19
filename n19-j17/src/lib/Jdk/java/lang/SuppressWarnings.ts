import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.lang.SuppressWarnings', [
	/* super class */,
	[/* interfaces, implements java.lang.annotation.Annotation */
		'java.lang.annotation.Annotation'
	],
	/* modifiers */ 9729,
	[/* declared annotations */
		[
			'java.lang.annotation.Target',
			['p', 'value', ['java.lang.annotation.ElementType.TYPE', 'java.lang.annotation.ElementType.FIELD', 'java.lang.annotation.ElementType.METHOD', 'java.lang.annotation.ElementType.PARAMETER', 'java.lang.annotation.ElementType.CONSTRUCTOR', 'java.lang.annotation.ElementType.LOCAL_VARIABLE', 'java.lang.annotation.ElementType.MODULE']]
		],
		[
			'java.lang.annotation.Retention',
			['p', 'value', 'java.lang.annotation.RetentionPolicy.SOURCE']
		]
	],
	/* type parameters */,
	/* declared constructors */,
	[/* declared methods */
		[/* public abstract java.lang.String[] java.lang.SuppressWarnings.value() */
			/* name */ 'value',
			/* parameters */,
			/* return */ '[Ljava.lang.String;',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
