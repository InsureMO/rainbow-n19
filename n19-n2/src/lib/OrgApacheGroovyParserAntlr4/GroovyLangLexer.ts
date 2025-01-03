import {CharStream, LexerATNSimulator, NoViableAltException, PredictionContextCache} from 'antlr4';
import {GroovyLexer} from './GroovyLexer';

declare module 'antlr4' {
	interface LexerATNSimulator {
		line: number;
		column: number;
	}
}

class PositionAdjustingLexerATNSimulator extends LexerATNSimulator {
	resetAcceptPosition(input: CharStream, index: number, line: number, column: number): void {
		input.seek(index);
		this.line = line;
		this.column = column;
		this.consume(input);
	}
}

export class GroovyLangLexer extends GroovyLexer {
	// GroovyLangLexer(Reader reader) throws IOException {
	//     this(CharStreams.fromReader(reader));
	// }

	constructor(input: CharStream) {
		super(input);

		this._interp = new PositionAdjustingLexerATNSimulator(this, GroovyLexer._ATN, GroovyLexer._DECISIONS_TO_DFA, new PredictionContextCache());
	}

	recover(e: NoViableAltException): void {
		throw e; // if some lexical error occurred, stop parsing!
	}

	protected rollbackOneChar(): void {
		(this._interp as PositionAdjustingLexerATNSimulator).resetAcceptPosition(
			this._input, this._tokenStartCharIndex - 1, this._tokenStartLine, this._tokenStartColumn - 1);
	}
}
