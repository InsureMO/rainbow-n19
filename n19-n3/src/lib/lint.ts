import {syntaxTree} from '@codemirror/language';
import {Diagnostic, linter} from '@codemirror/lint';
import {EditorState} from '@codemirror/state';
import {SyntaxNodeRef} from '@lezer/common';
import {EditingClassLoader, Parsed} from '@rainbow-n19/n2';
import {GroovyFacet, GroovyFacetParsedCache} from './facet';

type DiagnosticCollector = (diagnostics: Array<Diagnostic>) => void;
const ParsedNodeVisitor = Parsed.ParsedNodeVisitor;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ok: DiagnosticCollector = (_diagnostics: Array<Diagnostic>) => {
};
const lintImportDeclaration = (
	sn: SyntaxNodeRef, parsedCache: GroovyFacetParsedCache, classLoader: EditingClassLoader,
	state: EditorState): DiagnosticCollector => {
	const [node] = ParsedNodeVisitor.findAtomicNodeByOffset(parsedCache.atomicNodes, sn.from, sn.to - 1);
	if (node != null) {
		const parent = node.positionedNodeRef.parent;
		const {startOffset: start, endOffset: end} = parent.decorated;
		const text = state.sliceDoc(start, end + 1);
		let importName = text.replace(/^\s*import\s+/, '');
		if (importName.endsWith('.*')) {
			importName = importName.substring(0, importName.length - 2).trim();
		}
		const foundClass = classLoader.findClass(importName);
		if (foundClass == null) {
			return (diagnostics) => {
				diagnostics.push({
					from: start,
					to: end + 1,
					severity: 'error',
					message: 'Import class not found.'
				});
			};
		}
	}
	return ok;
};
export const LinterPlugin = linter(view => {
	const diagnostics: Array<Diagnostic> = [];
	const config = view.state.facet(GroovyFacet);
	const {parsedCache, classLoader} = config;
	syntaxTree(view.state).cursor().iterate(node => {
		switch (node.name) {
			case 'IMPORT':
				lintImportDeclaration(node, parsedCache, classLoader, view.state)(diagnostics);
				break;
			default:
				// do nothing
				break;
		}
	});
	return diagnostics;
});
