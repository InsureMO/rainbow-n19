import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.io.Serial', [
	/* super class */,
	[/* interfaces, implements java.lang.annotation.Annotation */
		'java.lang.annotation.Annotation'
	],
	/* modifiers */ 9729,
	[/* declared annotations */
		[
			'java.lang.annotation.Target',
			['p', 'value', ['java.lang.annotation.ElementType.METHOD', 'java.lang.annotation.ElementType.FIELD']]
		],
		[
			'java.lang.annotation.Retention',
			['p', 'value', 'java.lang.annotation.RetentionPolicy.SOURCE']
		]
	],
	/* type parameters */,
	/* declared constructors */,
	/* declared methods */,
	/* declared fields */,
	/* enum values */ UDF
]);
