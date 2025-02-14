import {UDF} from '../../../utils';
import {GroovyClassCreateHelper} from '../../GroovyClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
GroovyClassCreateHelper.class('groovy.lang.Newify', [
	/* super class */,
	[/* interfaces, implements java.lang.annotation.Annotation */
		'java.lang.annotation.Annotation'
	],
	/* modifiers */ 9729,
	[/* declared annotations */
		['java.lang.annotation.Documented'],
		[
			'java.lang.annotation.Retention',
			['p', 'value', 'java.lang.annotation.RetentionPolicy.SOURCE']
		],
		[
			'java.lang.annotation.Target',
			['p', 'value', ['java.lang.annotation.ElementType.CONSTRUCTOR', 'java.lang.annotation.ElementType.METHOD', 'java.lang.annotation.ElementType.TYPE', 'java.lang.annotation.ElementType.FIELD', 'java.lang.annotation.ElementType.LOCAL_VARIABLE']]
		]
	],
	/* type parameters */,
	/* declared constructors */,
	[/* declared methods */
		[/* public abstract boolean groovy.lang.Newify.auto() */
			/* name */ 'auto',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.lang.Class<?>[] groovy.lang.Newify.value() */
			/* name */ 'value',
			/* parameters */,
			/* return */ [/* generic array type */ 'ga', [[/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* wildcard type */ 'wt', [
						[/* upper bounds */
							'java.lang.Object'
						],
						/* lower bounds */ UDF
					]]
				],
				/* raw type */ 'java.lang.Class',
				/* owner type */ UDF
			]]]],
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.lang.String groovy.lang.Newify.pattern() */
			/* name */ 'pattern',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
