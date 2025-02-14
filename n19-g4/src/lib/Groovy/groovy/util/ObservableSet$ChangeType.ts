import {UDF} from '../../../utils';
import {GroovyClassCreateHelper} from '../../GroovyClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
GroovyClassCreateHelper.class('groovy.util.ObservableSet$ChangeType', [
	/* super class, extends java.lang.Enum<groovy.util.ObservableSet$ChangeType> */
	[/* parameterized type */ 'pt', [
		[/* actual argument types */
			'groovy.util.ObservableSet$ChangeType'
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
		[/* public static groovy.util.ObservableSet$ChangeType groovy.util.ObservableSet$ChangeType.valueOf(java.lang.String) */
			/* name */ 'valueOf',
			[/* parameters */
				[/* parameter */
					/* name */ 'name',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'groovy.util.ObservableSet$ChangeType',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static groovy.util.ObservableSet$ChangeType[] groovy.util.ObservableSet$ChangeType.values() */
			/* name */ 'values',
			/* parameters */,
			/* return */ '[Lgroovy.util.ObservableSet$ChangeType;',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	[/* declared fields */
		[/* public static final java.lang.Object groovy.util.ObservableSet$ChangeType.oldValue */
			/* name */ 'oldValue',
			/* type */ 'java.lang.Object',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final java.lang.Object groovy.util.ObservableSet$ChangeType.newValue */
			/* name */ 'newValue',
			/* type */ 'java.lang.Object',
			/* annotations */ UDF,
			/* modifiers */ 25
		]
	],
	[/* enum values */
		['ADDED', 0],
		['REMOVED', 1],
		['CLEARED', 2],
		['MULTI_ADD', 3],
		['MULTI_REMOVE', 4],
		['NONE', 5]
	]
]);
