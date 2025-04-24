import {combineConfig, Facet} from '@codemirror/state';
import {EditingClassLoader} from '@rainbow-n19/n2';
import {AstHolder} from '@rainbow-n19/n3-ast-groovy';

export interface HelpToggle {
	toggle(): void;
}

export interface GroovyFacetData {
	astHolder: AstHolder;
	classLoader: EditingClassLoader;
	helpToggle?: HelpToggle;
}

export const GroovyFacet = Facet.define<GroovyFacetData, GroovyFacetData>({
	combine(configs: readonly GroovyFacetData[]): GroovyFacetData {
		return combineConfig(configs, {});
	}
});
