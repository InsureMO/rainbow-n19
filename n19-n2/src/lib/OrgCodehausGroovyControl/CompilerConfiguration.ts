import {UnsupportedOperationException} from '../JavaExceptions';
import {ParserPluginFactory} from './ParserPluginFactory';

export class CompilerConfiguration {
	private readonly _pluginFactory: ParserPluginFactory = ParserPluginFactory.antlr4;
	// TODO IMPLEMENTS ME!
	static readonly DEFAULT: CompilerConfiguration = new CompilerConfiguration();

	get scriptBaseClass(): string {
		throw new UnsupportedOperationException('Not implemented yet.');
	}

	get debug(): boolean {
		throw new UnsupportedOperationException('Not implemented yet.');
	}

	get tolerance(): number {
		throw new UnsupportedOperationException('Not implemented yet.');
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	setTolerance(tolerance: number): void {
		throw new UnsupportedOperationException('Not implemented yet.');
	}

	get warningLevel(): number {
		throw new UnsupportedOperationException('Not implemented yet.');
	}

	get pluginFactory(): ParserPluginFactory {
		return this._pluginFactory;
	}
}