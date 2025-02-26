import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('groovy.lang.ClosureInvokingMethod', [
	[ /* class description */
		['b', `An interface for MetaMethods that invoke closures to implements. Used by ExpandoMetaClass`],
	],
	UDF,
	[ /* class sees */ 'groovy.lang.ExpandoMetaClass'],
	UDF, UDF, UDF
]);
