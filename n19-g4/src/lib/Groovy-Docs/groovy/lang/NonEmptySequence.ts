import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('groovy.lang.NonEmptySequence', [
	[/* class description */
		[/* text */ 't', `Represents a sequence of one or more objects of a given type.
 The type can be omitted in which case any type of object can be added.`]
	],
	/* fields */,
	[/* constructors */
		[/* constructor */ '<init>()', [
			/* constructor description */,
			/* parameters */,
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.Class)', [
			/* constructor description */,
			/* parameters */,
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.Class,java.util.List)', [
			/* constructor description */,
			/* parameters */,
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'minimumSize()', [
			/* method description */,
			/* parameters */,
			/* throws */,
			/* return */ UDF
		]]
	],
	/* enum values */ UDF
]);
