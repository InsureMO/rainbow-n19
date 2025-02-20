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

const determineTypedNode = (snr: SyntaxNodeRef, parsedCache: GroovyFacetParsedCache): Optional<PositionedNode> => {
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
	const importName = text.replace(/^\s*import\s+/, '');
	const offset = text.length - importName.length;

	let options: CompletionResult['options'];
	const packageNames = classLoader.allPackages().map(pkg => pkg.name);
	if (packageNames.includes(importName)) {
		// package is done
		// append classes in this package
		const classes = classLoader.findClassesOfPackage(importName)
			.filter(clazz => !clazz.isArray && !clazz.isPrimitive);
		options = [
			...packageNames.map(name => ({label: name, type: 'namespace'})),
			...classes.map(clazz => ({label: clazz.name, type: 'class'}))
		];
	} else {
		options = packageNames.map(name => ({label: name, type: 'namespace'}));
	}

	return {
		from: from + offset, to, options
		// validFor: (text) => {
		// 	console.log(text);
		// 	return true;
		// }
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
	let endOffset = pos;
	let typedNode: Optional<PositionedNode>;
	switch (sn.name) {
		case 'DOT':
			sn = sn.prevSibling;
			endOffset = endOffset - 1;
			break;
		case 'Identifier':
		case 'CapitalizedIdentifier': {
			// do nothing
			break;
		}
		default:
			// clear node
			sn = null;
	}
	if (sn != null) {
		typedNode = determineTypedNode(sn, parsedCache);
		if (typedNode != null) {
			const text = state.sliceDoc(typedNode.decorated.startOffset, endOffset);
			return findAutoCompletion(typedNode, text, classLoader, typedNode.decorated.startOffset, pos);
		}
	}
	return (void 0);
};

export const createAutoCompletion = (): CompletionSource => {
	return async (context: CompletionContext): Promise<CompletionResult | null> => {
		return getAutoCompletion(context);
	};
};

export const AutoCompletionPlugin = autocompletion({override: [createAutoCompletion()]});
