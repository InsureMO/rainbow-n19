import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.util.TimerTask', [
	/* super class, extends java.lang.Object */
	'java.lang.Object',
	[/* interfaces, implements java.lang.Runnable */
		'java.lang.Runnable'
	],
	/* modifiers */ 1025,
	/* declared annotations */,
	/* type parameters */,
	[/* declared constructors */
		[/* protected java.util.TimerTask() */
			/* parameters */,
			/* exceptions */,
			/* modifiers */ 4,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	[/* declared methods */
		[/* public abstract void java.util.TimerTask.run() */
			/* name */ 'run',
			/* parameters */,
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public boolean java.util.TimerTask.cancel() */
			/* name */ 'cancel',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public long java.util.TimerTask.scheduledExecutionTime() */
			/* name */ 'scheduledExecutionTime',
			/* parameters */,
			/* return */ 'long',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
