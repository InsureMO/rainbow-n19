import {combineConfig, Facet} from '@codemirror/state';
import {Parsed} from '@rainbow-n19/n2';

export interface GroovyFacetParsedCache {
	atomicNodes: Array<Parsed.DecoratedNode>;
	positionedNodes: Array<Parsed.PositionedNode>;
}

export interface GroovyFacetData {
	parsedCache: GroovyFacetParsedCache;
}

/**
 * This is how the ts-related extensions are
 * configured: this facet sets the path of the file
 * and the environment to use, and the rest of
 * the extensions, like tsLint and tsAutocomplete,
 * pull those settings automatically from editor state.
 */
export const GroovyFacet = Facet.define<GroovyFacetData, GroovyFacetData>({
	combine(configs: readonly GroovyFacetData[]): GroovyFacetData {
		return combineConfig(configs, {});
	}
});
