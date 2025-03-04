import {combineConfig, Facet} from '@codemirror/state';
import {EditingClassLoader, Optional, Parsed} from '@rainbow-n19/n2';

export interface GroovyFacetParsedCacheData {
	atomicNodes: Array<Parsed.DecoratedNode>;
	positionedNodes: Array<Parsed.PositionedNode>;
}

export interface GroovyFacetParsedCache {
	atomicNodes: Array<Parsed.DecoratedNode>;
	positionedNodes: Array<Parsed.PositionedNode>;
	install(data: GroovyFacetParsedCacheData): void;
	findPositionedNode(decorated: Parsed.DecoratedNode): Optional<Parsed.PositionedNode>;
}

export interface ClassDocsToggleHandler {
	toggle(): void;
}

export interface GroovyFacetInputData {
	parsedCache: GroovyFacetParsedCache;
	classLoader: EditingClassLoader | (() => EditingClassLoader);
	classDocs?: ClassDocsToggleHandler;
}

export interface GroovyFacetData {
	parsedCache: GroovyFacetParsedCache;
	classLoader: EditingClassLoader;
	classDocs?: ClassDocsToggleHandler;
}

/**
 * This is how the ts-related extensions are
 * configured: this facet sets the path of the file
 * and the environment to use, and the rest of
 * the extensions, like tsLint and tsAutocomplete,
 * pull those settings automatically from editor state.
 */
export const GroovyFacet = Facet.define<GroovyFacetInputData, GroovyFacetData>({
	combine(configs: readonly GroovyFacetInputData[]): GroovyFacetData {
		const config = combineConfig(configs, {});
		return new Proxy(config, {
			get(target, key) {
				if (key === 'classLoader') {
					const classLoader = target[key];
					if (classLoader instanceof EditingClassLoader) {
						return classLoader;
					} else {
						return classLoader();
					}
				} else {
					return target[key];
				}
			}
		}) as GroovyFacetData;
	}
});

export class DefaultGroovyFacetParsedCache implements GroovyFacetParsedCache {
	private readonly _atomicNodes: Array<Parsed.DecoratedNode> = [];
	private readonly _positionedNodes: Array<Parsed.PositionedNode> = [];
	private readonly _mapFromDecoratedToPositioned: Map<Parsed.DecoratedNode, Parsed.PositionedNode> = new Map();

	get atomicNodes(): Array<Parsed.DecoratedNode> {
		return this._atomicNodes;
	}

	get positionedNodes(): Array<Parsed.PositionedNode> {
		return this._positionedNodes;
	}

	install(data: GroovyFacetParsedCacheData): void {
		const {atomicNodes = [], positionedNodes = []} = data;
		this._atomicNodes.length = 0;
		this._atomicNodes.push(...atomicNodes);
		this._positionedNodes.length = 0;
		this._positionedNodes.push(...positionedNodes);
		this.clearMaps();
		this.installMaps(this._positionedNodes);
	}

	private clearMaps(): void {
		this._mapFromDecoratedToPositioned.clear();
	}

	private installMaps(nodes: Array<Parsed.PositionedNode>): void {
		nodes.forEach(node => {
			this._mapFromDecoratedToPositioned.set(node.decorated, node);
			const children = node.children;
			if (children != null && children.length > 0) {
				this.installMaps(children);
			}
		});
	}

	findPositionedNode(decorated: Parsed.DecoratedNode): Optional<Parsed.PositionedNode> {
		return this._mapFromDecoratedToPositioned.get(decorated);
	}
}
