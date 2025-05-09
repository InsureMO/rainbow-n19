import {$NAF, GroovyAstNode} from '../../../../node';
import {TokenId, TokenType} from '../../../../tokens';
import {AstRecognizer} from '../../../ast-recognizer';
import {OneOfOnChildAppendedFunc, SharedNodePointcut} from './shared';

export interface LogicBlockCreationOptions {
	lbraceNode: GroovyAstNode;
	bodyTokenId: TokenId;
	/** default use {@link LogicBlock#extra}, if no pointcuts function passed */
	bodyNodePointcuts?: (node: GroovyAstNode) => void;
	astRecognizer: AstRecognizer;
}

export const LogicBlock = {
	onChildAppended: SharedNodePointcut.closeCurrentParentOnRBraceAppended,
	extra: (node: GroovyAstNode): void => {
		// TODO logic block node pointcuts
		$NAF.ChildAcceptableCheck.clear(node);
		$NAF.OnChildAppended.set(node, LogicBlock.onChildAppended);
		$NAF.OnChildClosed.clear(node);
		$NAF.OnNodeClosed.clear(node);
	},
	create: (options: LogicBlockCreationOptions): GroovyAstNode => {
		const {lbraceNode, bodyTokenId, bodyNodePointcuts, astRecognizer} = options;
		const declarationNode = lbraceNode.parent;
		declarationNode.chopOffTrailingNodes([lbraceNode]);
		const logicBlockNode = new GroovyAstNode({
			tokenId: bodyTokenId, tokenType: TokenType.LogicBlock,
			text: '',
			startOffset: lbraceNode.startOffset,
			startLine: lbraceNode.startLine, startColumn: lbraceNode.startColumn
		});
		if (bodyNodePointcuts != null) {
			bodyNodePointcuts(logicBlockNode);
		} else {
			LogicBlock.extra(logicBlockNode);
		}
		logicBlockNode.asParentOf(lbraceNode);
		astRecognizer.appendAsCurrentParent(logicBlockNode);
		return logicBlockNode;
	},
	createOnLBraceAppendedFuncForDeclaration: (tokenId: TokenId, bodyNodePointcuts?: LogicBlockCreationOptions['bodyNodePointcuts']): OneOfOnChildAppendedFunc => {
		return (lastChildNode: GroovyAstNode, astRecognizer: AstRecognizer): boolean => {
			if (lastChildNode.tokenId !== TokenId.LBrace) {
				return false;
			}
			LogicBlock.create({
				lbraceNode: lastChildNode,
				bodyTokenId: tokenId,
				bodyNodePointcuts,
				astRecognizer
			});
			return true;
		};
	}
} as const;