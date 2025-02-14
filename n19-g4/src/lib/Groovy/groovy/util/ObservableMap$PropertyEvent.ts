import {UDF} from '../../../utils';
import {GroovyClassCreateHelper} from '../../GroovyClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
GroovyClassCreateHelper.class('groovy.util.ObservableMap$PropertyEvent', [
	/* super class, extends java.beans.PropertyChangeEvent */
	'java.beans.PropertyChangeEvent',
	/* interfaces */,
	/* modifiers */ 1033,
	/* declared annotations */,
	/* type parameters */,
	[/* declared constructors */
		[/* public groovy.util.ObservableMap$PropertyEvent(java.lang.Object,java.lang.String,java.lang.Object,java.lang.Object,groovy.util.ObservableMap$ChangeType) */
			[/* parameters */
				[/* parameter */
					/* name */ 'source',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'propertyName',
					/* type */ 'java.lang.String',
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
					/* type */ 'groovy.util.ObservableMap$ChangeType',
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
		[/* public groovy.util.ObservableMap$ChangeType groovy.util.ObservableMap$PropertyEvent.getChangeType() */
			/* name */ 'getChangeType',
			/* parameters */,
			/* return */ 'groovy.util.ObservableMap$ChangeType',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int groovy.util.ObservableMap$PropertyEvent.getType() */
			/* name */ 'getType',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String groovy.util.ObservableMap$PropertyEvent.getTypeAsString() */
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
