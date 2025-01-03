import {IClassLoader} from '../Java';
import {GroovyBugError} from '../OrgCodehausGroovy';
import {ModuleNode} from '../OrgCodehausGroovyAst';
import {ParserPlugin, SourceUnit} from '../OrgCodehausGroovyControl';
import {Reduction} from '../OrgCodehausGroovySyntax';

export class Antlr4ParserPlugin implements ParserPlugin {
	parseCST(sourceUnit: SourceUnit, reader: Reader): Reduction {
		if (!sourceUnit.source.canReopenSource) {
			try {
				sourceUnit.setSource(new StringReaderSource(IOGroovyMethods.getText(reader), sourceUnit.configuration));
			} catch (e /* IOException */) {
				throw new GroovyBugError({message: 'Failed to create StringReaderSource', cause: e});
			}
		}
		return null;
	}

	buildAST(sourceUnit: SourceUnit, classLoader: IClassLoader, cst: Reduction): ModuleNode {
		const builder = new AstBuilder(sourceUnit,
			sourceUnit.configuration.isGroovydocEnabled,
			sourceUnit.configuration.isRuntimeGroovydocEnabled
		);
		return builder.buildAST();
	}
}
