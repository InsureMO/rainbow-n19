import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('groovy.lang.NumberRange', [
	[ /* class description */
		['b', `Represents an immutable list of Numbers from a value to a value with a particular step size.

 In general, it isn't recommended using a NumberRange as a key to a map. The range
 0..3 is deemed to be equal to 0.0..3.0 but they have different hashCode values,
 so storing a value using one of these ranges couldn't be retrieved using the other.`],
	],
	UDF,
	/* class sees */ UDF,
	UDF, UDF, UDF
]);
