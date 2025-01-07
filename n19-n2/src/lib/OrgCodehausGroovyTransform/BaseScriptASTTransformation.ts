import {ClassHelper, ClassNode} from '../OrgCodehausGroovyAst';
import {GroovyAstMakeFirst} from '../TsAddon';
import {AbstractASTTransformation} from './AbstractASTTransformation';

export class BaseScriptASTTransformation extends AbstractASTTransformation {
	public static readonly MY_TYPE: ClassNode = ClassHelper.make(GroovyAstMakeFirst.GroovyTransform.BaseScript);
	// TODO IMPLEMENTS ME!
}