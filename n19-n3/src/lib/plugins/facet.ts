import {combineConfig, Facet} from '@codemirror/state';
import {EditingClassLoader} from '@rainbow-n19/n2';
import {GroovyAstHolder} from '../ast';

export interface ClassDocsToggle {
	toggle(): void;
}

export interface GroovyFacetData {
	astHolder: GroovyAstHolder;
	classLoader: EditingClassLoader;
	classDocsToggle?: ClassDocsToggle;
}

export const GroovyFacet = Facet.define<GroovyFacetData, GroovyFacetData>({
	combine(configs: readonly GroovyFacetData[]): GroovyFacetData {
		return combineConfig(configs, {});
	}
});
