import {FailedPredicateException, Parser, ParserATNSimulator, TokenStream} from 'antlr4';
import {Throwable} from '../JavaExceptions';
import {GroovyParser} from './GroovyParser';

class LightWeightFailedPredicateException extends FailedPredicateException {
	constructor(recognizer: Parser, predicate: string, message: string) {
		super(recognizer, predicate, message);
	}

	// TODO remove this method, seems it is used only in java
	// public fillInStackTrace(): Throwable {
	// 	// `FailedPredicateException` is used to change the control flow,
	// 	// so its stack trace can be eliminated for better performance
	// 	return this;
	// }
}

export class GroovyLangParser extends GroovyParser {
	/** SystemUtil.getBooleanSafe("groovy.antlr4.profile"); */
	private static readonly GROOVY_PARSER_PROFILING_ENABLED: boolean = false;

	constructor(input: TokenStream) {
		super(input);

		this._interp = new ParserATNSimulator(this, ParserAtnManager.INSTANCE.getATN());

		if (GroovyLangParser.GROOVY_PARSER_PROFILING_ENABLED) {
			this.setProfile(true);
		}
	}

	protected createFailedPredicateException(predicate: string, message?: string): FailedPredicateException {
		return new LightWeightFailedPredicateException(this, predicate, message);
	}
}
