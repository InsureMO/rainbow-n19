import {UDF} from '../../../utils';
import {GroovyClassCreateHelper} from '../../GroovyClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
GroovyClassCreateHelper.class('groovy.lang.Delegate', [
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
			['p', 'value', ['java.lang.annotation.ElementType.FIELD', 'java.lang.annotation.ElementType.METHOD']]
		]
	],
	/* type parameters */,
	/* declared constructors */,
	[/* declared methods */
		[/* public abstract boolean groovy.lang.Delegate.allNames() */
			/* name */ 'allNames',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract boolean groovy.lang.Delegate.deprecated() */
			/* name */ 'deprecated',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract boolean groovy.lang.Delegate.interfaces() */
			/* name */ 'interfaces',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract boolean groovy.lang.Delegate.methodAnnotations() */
			/* name */ 'methodAnnotations',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract boolean groovy.lang.Delegate.parameterAnnotations() */
			/* name */ 'parameterAnnotations',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.lang.Class[] groovy.lang.Delegate.excludeTypes() */
			/* name */ 'excludeTypes',
			/* parameters */,
			/* return */ '[Ljava.lang.Class;',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.lang.Class[] groovy.lang.Delegate.includeTypes() */
			/* name */ 'includeTypes',
			/* parameters */,
			/* return */ '[Ljava.lang.Class;',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.lang.String[] groovy.lang.Delegate.excludes() */
			/* name */ 'excludes',
			/* parameters */,
			/* return */ '[Ljava.lang.String;',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.lang.String[] groovy.lang.Delegate.includes() */
			/* name */ 'includes',
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
