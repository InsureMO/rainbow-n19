import {GroovyClassLoader} from '../GroovyLang';
import {ModuleNode} from '../OrgCodehausGroovyAst';
import {CompilerConfiguration} from './CompilerConfiguration';
import {ErrorCollector} from './ErrorCollector';
import {SourceUnit} from './SourceUnit';

export class ParserPluginSupport {
	static buildAST(sourceText: string, config: CompilerConfiguration, loader: GroovyClassLoader, errors: ErrorCollector): ModuleNode /* throws CompilationFailedException */ {
		const sourceUnit = new SourceUnit('Script' + Date.now() + '.groovy', sourceText, config, loader, errors);
		sourceUnit.parse();
		sourceUnit.completePhase();
		sourceUnit.nextPhase();
		sourceUnit.convert();
		return sourceUnit.ast;
	}
}
