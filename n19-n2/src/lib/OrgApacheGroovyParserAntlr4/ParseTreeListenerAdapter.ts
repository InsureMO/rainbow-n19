import {ErrorNode, ParserRuleContext, ParseTreeListener, TerminalNode} from 'antlr4';

/** default do nothing */
export class ParseTreeListenerAdapter implements ParseTreeListener {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	enterEveryRule(_ctx: ParserRuleContext): void {
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	exitEveryRule(_ctx: ParserRuleContext): void {
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	visitErrorNode(_node: ErrorNode): void {
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	visitTerminal(_node: TerminalNode): void {
	}
}
