import {ClassExpression, Expression, ListExpression} from '../OrgCodehausGroovyAstExpr';
import {BlockStatement} from '../OrgCodehausGroovyAstStmt';
import {GeneralUtils} from '../OrgCodehausGroovyAstTools';
import {SourceUnit} from '../OrgCodehausGroovyControl';
import {AbstractASTTransformation} from '../OrgCodehausGroovyTransform';
import {Opcodes} from '../OrgObjectwebAsm';
import {GroovyAstMakeFirst} from '../TsAddon';
import {AnnotatedNode} from './AnnotatedNode';
import {AnnotationNode} from './AnnotationNode';
import {ASTNode} from './ASTNode';
import {ClassHelper} from './ClassHelper';
import {ClassNode} from './ClassNode';
import {Parameter} from './Parameter';

/**
 * @deprecated
 */
// TODO COPY FROM GROOVY: @GroovyASTTransformation(phase = CompilePhase.CANONICALIZATION)
export class MixinASTTransformation extends AbstractASTTransformation {
	private static readonly MY_TYPE: ClassNode = ClassHelper.make(GroovyAstMakeFirst.GroovyLang.Mixin);

	visit(nodes: Array<ASTNode>, source: SourceUnit): void {
		this.init(nodes, source);
		const node = nodes[0] as AnnotationNode;
		const parent = nodes[1] as AnnotatedNode;
		if (!MixinASTTransformation.MY_TYPE.equals(node.classNode))
			return;

		const expr: Expression = node.getMember('value');
		if (expr == null) {
			return;
		}

		let useClasses: Expression = null;
		if (expr instanceof ClassExpression) {
			useClasses = expr;
		} else if (expr instanceof ListExpression) {
			for (const ex of expr.expressions) {
				if (!(ex instanceof ClassExpression)) {
					return;
				}
			}
			useClasses = expr;
		}

		if (useClasses == null) {
			return;
		}

		if (parent instanceof ClassNode) {
			const annotatedClass = parent;

			const noParams = Parameter.EMPTY_ARRAY;
			let clinit = annotatedClass.getDeclaredMethod('<clinit>', noParams);
			if (clinit == null) {
				// @ts-ignore
				clinit = annotatedClass.addMethod('<clinit>', Opcodes.ACC_PUBLIC | Opcodes.ACC_STATIC | Opcodes.ACC_SYNTHETIC, ClassHelper.VOID_TYPE, noParams, null, new BlockStatement());
				clinit.setSynthetic(true);
			}

			const code = clinit.code as BlockStatement;
			code.addStatement(GeneralUtils.stmt(GeneralUtils.callX(GeneralUtils.propX(GeneralUtils.classX(annotatedClass), 'metaClass'), 'mixin', useClasses))
			);
		}
	}
}
