import {IClassLoader} from '../Java';
import {ModuleNode} from '../OrgCodehausGroovyAst';
import {Reduction} from '../OrgCodehausGroovySyntax';
import {SourceUnit} from './SourceUnit';

export interface ParserPlugin {
	parseCST(sourceUnit: SourceUnit, reader: Reader): Reduction; /* throws CompilationFailedException*/

	buildAST(sourceUnit: SourceUnit, classLoader: IClassLoader, cst: Reduction): ModuleNode; /* throws ParserException */
}
