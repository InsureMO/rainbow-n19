import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.util.Observable', [
	/* super class, extends java.lang.Object */
	'java.lang.Object',
	/* interfaces */,
	/* modifiers */ 1,
	[/* declared annotations */
		[
			'java.lang.Deprecated',
			['p', 'since', '9'],
			['p', 'forRemoval', false]
		]
	],
	/* type parameters */,
	[/* declared constructors */
		[/* public java.util.Observable() */
			/* parameters */,
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	[/* declared methods */
		[/* protected synchronized void java.util.Observable.clearChanged() */
			/* name */ 'clearChanged',
			/* parameters */,
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 36,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* protected synchronized void java.util.Observable.setChanged() */
			/* name */ 'setChanged',
			/* parameters */,
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 36,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public synchronized boolean java.util.Observable.hasChanged() */
			/* name */ 'hasChanged',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 33,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public synchronized int java.util.Observable.countObservers() */
			/* name */ 'countObservers',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 33,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public synchronized void java.util.Observable.addObserver(java.util.Observer) */
			/* name */ 'addObserver',
			[/* parameters */
				[/* parameter */
					/* name */ 'o',
					/* type */ 'java.util.Observer',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 33,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public synchronized void java.util.Observable.deleteObserver(java.util.Observer) */
			/* name */ 'deleteObserver',
			[/* parameters */
				[/* parameter */
					/* name */ 'o',
					/* type */ 'java.util.Observer',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 33,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public synchronized void java.util.Observable.deleteObservers() */
			/* name */ 'deleteObservers',
			/* parameters */,
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 33,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void java.util.Observable.notifyObservers() */
			/* name */ 'notifyObservers',
			/* parameters */,
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void java.util.Observable.notifyObservers(java.lang.Object) */
			/* name */ 'notifyObservers',
			[/* parameters */
				[/* parameter */
					/* name */ 'arrLocal',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
