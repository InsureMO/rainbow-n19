import {ClassDeclarationContext, TypeListContext} from '../../parser';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {ForTypeListUnderClassDeclarationPostProcessor} from './ClassDeclarationPostProcessor';

/**
 * could be child of following:<br>
 * 1. class declaration,<br>
 * 2. non wildcard type arguments.<br>
 * <br>
 * 1. find and put an "IMPLEMENTS" node after me, when parent is class declaration, and I am following "EXTENDS",<br>
 * 2. find and put an "PERMITS" node after me, when parent is class declaration, and I am following "IMPLEMENTS",<br>
 */
export class TypeListPostProcessor extends ForTypeListUnderClassDeclarationPostProcessor<TypeListContext> {
	collectAfterExit(node: HierarchicalNode): Array<DecoratedNode> {
		const decorated = node.decorated;
		const ctx = decorated.parsed.groovyParserRuleContext as TypeListContext;
		const parentCtx = ctx.parentCtx;
		if (parentCtx instanceof ClassDeclarationContext) {
			if (ctx === parentCtx._scs) {
				// i am extends
				return this.collectTerminalNodes({
					decorated: node.parent.decorated,
					terminals: [
						ForTypeListUnderClassDeclarationPostProcessor.CLASS_DECLARATION_IMPLEMENTS,
						ForTypeListUnderClassDeclarationPostProcessor.CLASS_DECLARATION_PERMITS
					],
					firstOnly: true
				});
			} else if (ctx === parentCtx._is) {
				// i am implements
				return this.collectTerminalNodeToArray({
					decorated: node.parent.decorated,
					terminal: ForTypeListUnderClassDeclarationPostProcessor.CLASS_DECLARATION_PERMITS
				});
			}
		}
		return [];
	}
}