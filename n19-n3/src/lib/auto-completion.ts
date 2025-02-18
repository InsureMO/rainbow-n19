import {autocompletion, CompletionContext, CompletionResult, CompletionSource} from '@codemirror/autocomplete';
import {syntaxTree} from '@codemirror/language';
import {SyntaxNodeRef} from '@lezer/common';
import {Java, Optional, Parsed} from '@rainbow-n19/n2';
import {GroovyFacet, GroovyFacetParsedCache} from './facet';

// const GroovyParser = Groovy.GroovyParser;
const ParsedNodeVisitor = Parsed.ParsedNodeVisitor;
type PositionedNode = Parsed.PositionedNode;
// type DecoratedNode = Parsed.DecoratedNode;
type IClassLoader = Java.IClassLoader;

const findNearestTypedNode = (node: PositionedNode): Optional<PositionedNode> => {
	switch (node.roleText) {
		case 'Identifier': /* symbols */
		case 'CapitalizedIdentifier':
		case 'qualifiedNameElement': /* rules */
		case 'qualifiedName':
			return findNearestTypedNode(node.parent);
		case 'importDeclaration':
			return node;
		default:
			return (void 0);
	}
};

const determineMinTypedNode = (snr: SyntaxNodeRef, parsedCache: GroovyFacetParsedCache): Optional<PositionedNode> => {
	switch (snr.name) {
		case 'Identifier':
		case 'CapitalizedIdentifier': {
			const [node] = ParsedNodeVisitor.findAtomicNodeByOffset(parsedCache.atomicNodes, snr.from, snr.to - 1);
			return node == null ? (void 0) : findNearestTypedNode(node.positionedNodeRef);
		}
	}

	return (void 0);
};

const findAutoCompletionForImport = (text: string, classLoader: IClassLoader, from: number, to?: number): CompletionResult | null => {
	const packageName = text.replace(/^\s*import\s+/, '');
	const offset = text.length - packageName.length;

	return {
		from: from + offset, to,
		options: classLoader.allPackages().map(pkg => pkg.name).map(name => ({label: name, type: 'keyword'})),
		validFor: (text) => {
			console.log(text);
			return true;
		}
	};
};

const findAutoCompletion = (node: PositionedNode, text: string, classLoader: IClassLoader, from: number, to?: number): CompletionResult | null => {
	switch (node.roleText) {
		case 'importDeclaration':
			return findAutoCompletionForImport(text, classLoader, from, to);
		default:
			return (void 0);
	}
};

export const getAutoCompletion: CompletionSource = (context: CompletionContext): CompletionResult | null => {
	const state = context.state;
	const config = state.facet(GroovyFacet);
	const {parsedCache, classLoader} = config;

	const pos = context.pos;
	// node before cursor position
	let sn = syntaxTree(state).resolveInner(pos, -1);
	const name = sn.name;

	let typedNode: Optional<PositionedNode>;
	if (name === 'DOT') {
		sn = sn.prevSibling;
		if (sn != null) {
			typedNode = determineMinTypedNode(sn, parsedCache);
		}
	}
	if (typedNode != null) {
		const text = state.sliceDoc(typedNode.decorated.startOffset, pos - 1);
		return findAutoCompletion(typedNode, text, classLoader, typedNode.decorated.startOffset, pos);
	} else {
		return (void 0);
	}
};

export const createAutoCompletion = (): CompletionSource => {
	return async (context: CompletionContext): Promise<CompletionResult | null> => {
		return getAutoCompletion(context);
	};
};

export const AutoCompletionPlugin = autocompletion({override: [createAutoCompletion()]});
