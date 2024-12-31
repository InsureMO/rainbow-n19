import {AssertionError, IllegalArgumentException} from '../JavaExceptions';
import {GroovySyntaxSource} from './GroovySyntaxSource';

export class GroovySyntaxError extends AssertionError {
	private readonly _source: number;
	private readonly _line: number;
	private readonly _column: number;

	constructor(message: string, source: GroovySyntaxSource, line: number, column: number) {
		super(message);

		if (source != GroovySyntaxSource.LEXER && source != GroovySyntaxSource.PARSER) {
			throw new IllegalArgumentException('Invalid syntax error source: ' + source);
		}

		this._source = source;
		this._line = line;
		this._column = column;
	}

	get source(): GroovySyntaxSource {
		return this._source;
	}

	get line(): number {
		return this._line;
	}

	get column(): number {
		return this._column;
	}
}
