import {UDF} from '../../../utils';
import {GroovyClassCreateHelper} from '../../GroovyClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
GroovyClassCreateHelper.class('groovy.util.ObservableMap$ChangeType', [
	/* super class, extends java.lang.Enum<groovy.util.ObservableMap$ChangeType> */
	[/* parameterized type */ 'pt', [
		[/* actual argument types */
			'groovy.util.ObservableMap$ChangeType'
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
		[/* public static groovy.util.ObservableMap$ChangeType groovy.util.ObservableMap$ChangeType.resolve(int) */
			/* name */ 'resolve',
			[/* parameters */
				[/* parameter */
					/* name */ 'ordinal',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'groovy.util.ObservableMap$ChangeType',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static groovy.util.ObservableMap$ChangeType groovy.util.ObservableMap$ChangeType.valueOf(java.lang.String) */
			/* name */ 'valueOf',
			[/* parameters */
				[/* parameter */
					/* name */ 'name',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'groovy.util.ObservableMap$ChangeType',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static groovy.util.ObservableMap$ChangeType[] groovy.util.ObservableMap$ChangeType.values() */
			/* name */ 'values',
			/* parameters */,
			/* return */ '[Lgroovy.util.ObservableMap$ChangeType;',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	[/* declared fields */
		[/* public static final java.lang.Object groovy.util.ObservableMap$ChangeType.oldValue */
			/* name */ 'oldValue',
			/* type */ 'java.lang.Object',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final java.lang.Object groovy.util.ObservableMap$ChangeType.newValue */
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
		['MULTI', 4],
		['NONE', 5]
	]
]);
