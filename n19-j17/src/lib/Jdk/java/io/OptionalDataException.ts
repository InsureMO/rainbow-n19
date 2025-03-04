import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.io.OptionalDataException', [
	/* super class, extends java.io.ObjectStreamException */
	'java.io.ObjectStreamException',
	/* interfaces */,
	/* modifiers */ 1,
	/* declared annotations */,
	/* type parameters */,
	/* declared constructors */,
	/* declared methods */,
	[/* declared fields */
		[/* public boolean java.io.OptionalDataException.eof */
			/* name */ 'eof',
			/* type */ 'boolean',
			/* annotations */ UDF,
			/* modifiers */ 1
		],
		[/* public int java.io.OptionalDataException.length */
			/* name */ 'length',
			/* type */ 'int',
			/* annotations */ UDF,
			/* modifiers */ 1
		]
	],
	/* enum values */ UDF
]);
