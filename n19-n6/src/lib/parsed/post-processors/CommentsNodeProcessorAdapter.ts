import {TerminalNode} from 'antlr4';
import {GroovyParser, NlsContext, SepContext} from '../../parser';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

export abstract class CommentsNodeProcessorAdapter<C extends NlsContext | SepContext> extends PostNodeProcessorAdapter<C> {
	protected isSingleLineComment(node: TerminalNode): boolean {
		return node.symbol.type === GroovyParser.NL && node.symbol.text?.startsWith('//') === true;
	}

	protected isMultipleLineComment(node: TerminalNode): boolean {
		return node.symbol.type === GroovyParser.NL
			&& (node.symbol.text?.length ?? 0) >= 3
			&& node.symbol.text?.startsWith('/*') === true
			&& node.symbol.text?.endsWith('*/') === true;
	}

	protected isComment(node: TerminalNode): boolean {
		return this.isSingleLineComment(node) || this.isMultipleLineComment(node);
	}
}