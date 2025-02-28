import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.lang.reflect.Type', [
	[/* class description */
		[/* text */ 't', `Type is the common superinterface for all types in the Java
 programming language. These include raw types, parameterized types,
 array types, type variables and primitive types.`]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'getTypeName()', [
			[/* method description */
				[/* text */ 't', `Returns a string describing this type, including information
 about any type parameters.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a string describing this type`]
			]
		]]
	],
]);
