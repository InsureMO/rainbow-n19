import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('groovy.lang.Mixin', [
	[ /* class description */
		['b', `<span class="deprecated-label">Deprecated.</span>`],
		['b', `<div class="deprecation-comment">static mixins have been deprecated in favour of traits (trait keyword).</div>`],
	],
	UDF,
	/* class sees */ UDF,
	UDF, UDF, UDF
]);
