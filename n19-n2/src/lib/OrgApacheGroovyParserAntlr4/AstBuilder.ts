import {CharStreams, CommonTokenStream, ErrorListener, PredictionMode, RecognitionException, Recognizer} from 'antlr4';
import {GroovyLangLexer} from './GroovyLangLexer';
import {GroovyLangParser} from './GroovyLangParser';
import {GroovyParserVisitor} from './GroovyParserVisitor';
import {GroovySyntaxError} from './GroovySyntaxError';
import {GroovySyntaxSource} from './GroovySyntaxSource';
import {GroovyParserRuleContext} from './ParserContexts';

declare module 'antlr4' {
	interface TokenStream {
		seek(index: number): void;
	}
}

export type GroovyAst = any

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export class AstBuilder extends GroovyParserVisitor<any> {
	// SystemUtil.getIntegerSafe("groovy.antlr4.sll.threshold", -1)
	private static readonly SLL_THRESHOLD = -1;
	private readonly lexer: GroovyLangLexer;
	private readonly parser: GroovyLangParser;

	static ast(source: string): GroovyAst {
		return new AstBuilder(source).buildAST();
	}

	constructor(source: string) {
		super();
		this.lexer = new GroovyLangLexer(CharStreams.fromString(source));
		this.parser = new GroovyLangParser(new CommonTokenStream(this.lexer));
	}

	buildAST(): GroovyAst {
		return this.visit(this.buildCST());
	}

	private buildCST(): GroovyParserRuleContext;
	private buildCST(predictionMode: PredictionMode): GroovyParserRuleContext
	private buildCST(predictionMode?: PredictionMode): GroovyParserRuleContext /* throws CompilationFailedException */ {
		if (predictionMode != null) {
			this.parser._interp.predictionMode = predictionMode;

			if (PredictionMode.SLL == predictionMode) {
				this.removeErrorListeners();
			} else {
				this.addErrorListeners();
			}

			return this.parser.compilationUnit();
		} else {
			let result: GroovyParserRuleContext;

			// parsing have to wait util clearing is complete.
			const tokenStream = this.parser._input;
			if (AstBuilder.SLL_THRESHOLD >= 0 && tokenStream.size > AstBuilder.SLL_THRESHOLD) {
				// The more tokens to parse, the more possibility SLL will fail and the more parsing time will waste.
				// The option `groovy.antlr4.sll.threshold` could be tuned for better parsing performance, but it is disabled by default.
				// If the token count is greater than `groovy.antlr4.sll.threshold`, use LL directly.
				result = this.buildCST(PredictionMode.LL);
			} else {
				try {
					result = this.buildCST(PredictionMode.SLL);
				} catch (e) {
					// if some syntax error occurred in the lexer, no need to retry the powerful LL mode
					if (e instanceof GroovySyntaxError && GroovySyntaxSource.LEXER == e.source) {
						throw e;
					}

					tokenStream.seek(0);
					result = this.buildCST(PredictionMode.LL);
				}
			}

			return result;
		}
	}

	private createANTLRErrorListener<TSymbol>(): ErrorListener<TSymbol> {
		return new class extends ErrorListener<TSymbol> {
			constructor() {
				super();
			}

			syntaxError(recognizer: Recognizer<TSymbol>, offendingSymbol: TSymbol, line: number, column: number, msg: string, e: RecognitionException | undefined): void {

			}
		}();
	}

	private removeErrorListeners(): void {
		this.lexer.removeErrorListeners();
		this.parser.removeErrorListeners();
	}

	private addErrorListeners(): void {
		this.lexer.removeErrorListeners();
		this.lexer.addErrorListener(this.createANTLRErrorListener());

		this.parser.removeErrorListeners();
		this.parser.addErrorListener(this.createANTLRErrorListener());
	}
}
