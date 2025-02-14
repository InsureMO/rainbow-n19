import {UDF} from '../../../utils';
import {GroovyClassCreateHelper} from '../../GroovyClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
GroovyClassCreateHelper.class('groovy.lang.GrabResolver', [
	/* super class */,
	[/* interfaces, implements java.lang.annotation.Annotation */
		'java.lang.annotation.Annotation'
	],
	/* modifiers */ 9729,
	[/* declared annotations */
		[
			'java.lang.annotation.Retention',
			['p', 'value', 'java.lang.annotation.RetentionPolicy.SOURCE']
		],
		[
			'java.lang.annotation.Target',
			['p', 'value', ['java.lang.annotation.ElementType.CONSTRUCTOR', 'java.lang.annotation.ElementType.FIELD', 'java.lang.annotation.ElementType.LOCAL_VARIABLE', 'java.lang.annotation.ElementType.METHOD', 'java.lang.annotation.ElementType.PARAMETER', 'java.lang.annotation.ElementType.TYPE']]
		]
	],
	/* type parameters */,
	/* declared constructors */,
	[/* declared methods */
		[/* public abstract boolean groovy.lang.GrabResolver.initClass() */
			/* name */ 'initClass',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract boolean groovy.lang.GrabResolver.m2Compatible() */
			/* name */ 'm2Compatible',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.lang.String groovy.lang.GrabResolver.name() */
			/* name */ 'name',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.lang.String groovy.lang.GrabResolver.root() */
			/* name */ 'root',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.lang.String groovy.lang.GrabResolver.value() */
			/* name */ 'value',
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
