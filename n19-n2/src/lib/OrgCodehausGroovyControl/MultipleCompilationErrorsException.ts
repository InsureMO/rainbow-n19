import {PrintWriter} from '../JavaIO';
import {StringBuilderWriter} from '../OrgApacheGroovyIO';
import {CompilationFailedException} from './CompilationFailedException';
import {CompilerConfiguration} from './CompilerConfiguration';
import {ErrorCollector} from './ErrorCollector';
import {Janitor} from './Janitor';

export class MultipleCompilationErrorsException extends CompilationFailedException {
	protected _collector: ErrorCollector;

	constructor(ec: ErrorCollector) {
		super(0, null);
		if (ec == null) {
			const config = super.unit != null ? super.unit.configuration : new CompilerConfiguration();
			this._collector = new ErrorCollector(config);
		} else {
			this._collector = ec;
		}
	}

	get errorCollector(): ErrorCollector {
		return this._collector;
	}

	get message(): string {
		const sb = new StringBuilderWriter()
		const writer = new PrintWriter(sb);
		const janitor = new Janitor();

		writer.write(super.message);
		writer.println(':');
		try {
			this.errorCollector.write(writer, janitor);
		} finally {
			janitor.cleanup();
		}

		return sb.toString();
	}
}
