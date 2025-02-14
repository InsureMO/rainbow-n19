import {UDF} from '../../../utils';
import {GroovyClassCreateHelper} from '../../GroovyClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
GroovyClassCreateHelper.class('groovy.lang.GroovyResourceLoader', [
	/* super class */,
	/* interfaces */,
	/* modifiers */ 1537,
	/* declared annotations */,
	/* type parameters */,
	/* declared constructors */,
	[/* declared methods */
		[/* public abstract java.net.URL groovy.lang.GroovyResourceLoader.loadGroovySource(java.lang.String) throws java.net.MalformedURLException */
			/* name */ 'loadGroovySource',
			[/* parameters */
				[/* parameter */
					/* name */ 'filename',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.net.URL',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.net.MalformedURLException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
