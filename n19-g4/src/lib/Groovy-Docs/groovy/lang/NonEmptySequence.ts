import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('groovy.lang.NonEmptySequence', [
	[/* class description */
		[/* text */ 't', `Represents a sequence of one or more objects of a given type.
 The type can be omitted in which case any type of object can be added.`]
	],
	/* class sees */ UDF,
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>(java.lang.Class,java.util.List)', [
			/* constructor description */ UDF,
			/* constructor sees */ UDF,
			/* constructor parameters */ UDF,
			/* constructor throwns */ UDF
		]],
		[/* constructor */ '<init>(java.lang.Class)', [
			/* constructor description */ UDF,
			/* constructor sees */ UDF,
			/* constructor parameters */ UDF,
			/* constructor throwns */ UDF
		]],
		[/* constructor */ '<init>()', [
			/* constructor description */ UDF,
			/* constructor sees */ UDF,
			/* constructor parameters */ UDF,
			/* constructor throwns */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'minimumSize()', [
			/* method description */ UDF,
			/* method sees */ UDF,
			/* method parameters */ UDF,
			/* method throwns */ UDF,
			/* method return */ UDF
		]]
	],
]);
