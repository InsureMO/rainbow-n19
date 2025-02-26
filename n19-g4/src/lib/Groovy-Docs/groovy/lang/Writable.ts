import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('groovy.lang.Writable', [
	[ /* class description */
		['b', `Represents an object which is capable of writing itself to a text stream
 in a more efficient format than just creating a toString() representation
 of itself. This mechanism is particularly useful for templates and such like.`],
		['b', `
 It is worth noting that writable implementations often override their
 toString() implementation as well to allow rendering the same result
 directly to a String; however this is not required.`],
	],
	UDF,
	/* class sees */ UDF,
	UDF, UDF, UDF
]);
