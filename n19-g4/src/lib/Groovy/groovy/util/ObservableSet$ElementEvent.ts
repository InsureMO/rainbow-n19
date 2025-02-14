import {UDF} from '../../../utils';
import {GroovyClassCreateHelper} from '../../GroovyClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
GroovyClassCreateHelper.class('groovy.util.ObservableSet$ElementEvent', [
	/* super class, extends java.beans.PropertyChangeEvent */
	'java.beans.PropertyChangeEvent',
	/* interfaces */,
	/* modifiers */ 1033,
	/* declared annotations */,
	/* type parameters */,
	[/* declared constructors */
		[/* public groovy.util.ObservableSet$ElementEvent(java.lang.Object,java.lang.Object,java.lang.Object,groovy.util.ObservableSet$ChangeType) */
			[/* parameters */
				[/* parameter */
					/* name */ 'source',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'oldValue',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'newValue',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'type',
					/* type */ 'groovy.util.ObservableSet$ChangeType',
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
		[/* public groovy.util.ObservableSet$ChangeType groovy.util.ObservableSet$ElementEvent.getChangeType() */
			/* name */ 'getChangeType',
			/* parameters */,
			/* return */ 'groovy.util.ObservableSet$ChangeType',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int groovy.util.ObservableSet$ElementEvent.getType() */
			/* name */ 'getType',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String groovy.util.ObservableSet$ElementEvent.getTypeAsString() */
			/* name */ 'getTypeAsString',
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
