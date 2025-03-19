import {foldService} from '@codemirror/language';
import {EditorState} from '@codemirror/state';
import {Optional} from '@rainbow-n19/n2';
import {Groovy, Parsed} from '@rainbow-n19/n6';
import {GroovyFacet} from './facet';

export type FoldRange = Optional<{ from: number, to: number }>;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const FoldServicePlugin = foldService.of((state: EditorState, from: number, to: number): FoldRange => {
	const config = state.facet(GroovyFacet);
	const parsedCache = config.parsedCache;
	const line = state.sliceDoc(from, to);
	let contentFrom = from;
	if (line.startsWith(' ')) {
		contentFrom = from + line.length - line.trimStart().length;
	}
	const nodes = Parsed.ParsedNodeVisitor.findAtomicNodesAtSameLineByOffset(parsedCache.atomicNodes, contentFrom);
	const leftNodes = nodes.filter(node => {
		return [Groovy.GroovyParser.LBRACE, Groovy.GroovyParser.LBRACK, Groovy.GroovyParser.LPAREN].includes(node.role)
			|| Groovy.GroovyParser.NL === node.role && node.text.startsWith('/*');
	});
	if (leftNodes.length === 0) {
		return null;
	}
	const ranges = leftNodes.map(decorated => {
		if (decorated.role === Groovy.GroovyParser.NL) {
			if (decorated.startLine === decorated.endLine) {
				// one line, not need to fold
				return null;
			}
			// ml comment node
			if (decorated.text.startsWith('/**')) {
				return {from: decorated.startOffset + 3, to: decorated.endOffset - 1};
			} else {
				return {from: decorated.startOffset + 2, to: decorated.endOffset - 1};
			}
		}
		const positioned = parsedCache.findPositionedNode(decorated);
		if (positioned == null) {
			return null;
		}
		const parent = positioned.parent;
		const children = parent.children;
		const myIndex = children.indexOf(positioned);
		let level = 0;
		for (let index = myIndex + 1, count = children.length; index < count; index++) {
			const node = children[index];
			if (node.decorated.role === positioned.decorated.role) {
				level++;
			} else if (node.decorated.role === positioned.decorated.role + 1) {
				// RBRACE = LBRACE + 1, RBRACK = LBRACK + 1, RPAREN = LPAREN + 1
				if (level !== 0) {
					level--;
				} else if (node.decorated.startLine === positioned.decorated.startLine) {
					// found match, in same line, no need to fold
					return null;
				} else {
					return {
						from: positioned.decorated.startOffset + 1,
						to: node.decorated.startOffset
					};
				}
			}
		}
		// not matched, right part not found
		return null;
	}).filter(x => x != null);
	return ranges.length === 0 ? null : ranges[ranges.length - 1];
});