import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('groovy.lang.NonEmptySequence', [
	[ /* class description */
		['b', `Represents a sequence of one or more objects of a given type.
 The type can be omitted in which case any type of object can be added.`],
	],
	UDF,
	/* class sees */ UDF,
	UDF, UDF, UDF
]);
