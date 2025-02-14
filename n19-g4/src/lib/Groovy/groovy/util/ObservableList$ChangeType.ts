import {UDF} from '../../../utils';
import {GroovyClassCreateHelper} from '../../GroovyClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
GroovyClassCreateHelper.class('groovy.util.ObservableList$ChangeType', [
	/* super class, extends java.lang.Enum<groovy.util.ObservableList$ChangeType> */
	[/* parameterized type */ 'pt', [
		[/* actual argument types */
			'groovy.util.ObservableList$ChangeType'
		],
		/* raw type */ 'java.lang.Enum',
		/* owner type */ UDF
	]],
	/* interfaces */,
	/* modifiers */ 16409,
	/* declared annotations */,
	/* type parameters */,
	/* declared constructors */,
	[/* declared methods */
		[/* public static groovy.util.ObservableList$ChangeType groovy.util.ObservableList$ChangeType.resolve(int) */
			/* name */ 'resolve',
			[/* parameters */
				[/* parameter */
					/* name */ 'ordinal',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'groovy.util.ObservableList$ChangeType',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static groovy.util.ObservableList$ChangeType groovy.util.ObservableList$ChangeType.valueOf(java.lang.String) */
			/* name */ 'valueOf',
			[/* parameters */
				[/* parameter */
					/* name */ 'name',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'groovy.util.ObservableList$ChangeType',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static groovy.util.ObservableList$ChangeType[] groovy.util.ObservableList$ChangeType.values() */
			/* name */ 'values',
			/* parameters */,
			/* return */ '[Lgroovy.util.ObservableList$ChangeType;',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	[/* declared fields */
		[/* public static final java.lang.Object groovy.util.ObservableList$ChangeType.oldValue */
			/* name */ 'oldValue',
			/* type */ 'java.lang.Object',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final java.lang.Object groovy.util.ObservableList$ChangeType.newValue */
			/* name */ 'newValue',
			/* type */ 'java.lang.Object',
			/* annotations */ UDF,
			/* modifiers */ 25
		]
	],
	[/* enum values */
		['ADDED', 0],
		['UPDATED', 1],
		['REMOVED', 2],
		['CLEARED', 3],
		['MULTI_ADD', 4],
		['MULTI_REMOVE', 5],
		['NONE', 6]
	]
]);
