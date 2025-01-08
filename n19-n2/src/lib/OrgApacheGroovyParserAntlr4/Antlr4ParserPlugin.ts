import {IClassLoader} from '../Java';
import {Reader} from '../JavaIO';
import {GroovyBugError} from '../OrgCodehausGroovy';
import {ModuleNode} from '../OrgCodehausGroovyAst';
import {ParserPlugin, SourceUnit, StringReaderSource} from '../OrgCodehausGroovyControl';
import {Reduction} from '../OrgCodehausGroovySyntax';
import {AstBuilder} from './AstBuilder';

export class Antlr4ParserPlugin implements ParserPlugin {
	static getText(reader: Reader): string {
		let answer = '';
		// reading the content of the reader within a char buffer
		// allow to keep the correct line endings
		const charBuffer = new Array<number>(8192);
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		let nbCharRead: number = 0;
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		while ((nbCharRead = reader.read(charBuffer)) != -1) {
			// appends buffer
			answer = answer + String.fromCharCode(...charBuffer);
		}
		const temp = reader;
		reader = null;
		temp.close();
		return answer;
	}

	parseCST(sourceUnit: SourceUnit, reader: Reader): Reduction {
		if (!sourceUnit.source.canReopenSource) {
			try {
				sourceUnit.setSource(new StringReaderSource(Antlr4ParserPlugin.getText(reader), sourceUnit.configuration));
			} catch (e /* IOException */) {
				throw new GroovyBugError({message: 'Failed to create StringReaderSource', cause: e});
			}
		}
		return null;
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	buildAST(sourceUnit: SourceUnit, _classLoader: IClassLoader, _cst: Reduction): ModuleNode {
		const builder = new AstBuilder(sourceUnit,
			sourceUnit.configuration.isGroovydocEnabled,
			sourceUnit.configuration.isRuntimeGroovydocEnabled
		);
		return builder.buildAST();
	}
}
