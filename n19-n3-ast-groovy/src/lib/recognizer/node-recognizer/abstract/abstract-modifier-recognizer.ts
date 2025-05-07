import {$NAF, GroovyAstNode} from '../../../node';
import {TokenId, TokenType} from '../../../tokens';
import {AstRecognizer} from '../../ast-recognizer';
import {AstRecognition} from '../../types';
import {AbstractRehydratableRecognizer, RehydrateFunc} from './abstract-rehydratable-recognizer';

export abstract class AbstractModifierRecognizer extends AbstractRehydratableRecognizer {
	protected getRehydrateFunctions(): Array<RehydrateFunc> {
		return [
			AbstractModifierRecognizer.rehydrateToCharsWhenInString,
			AbstractModifierRecognizer.rehydrateToIdentifierWhenAfterDotDirectly
		];
	}

	protected static isAccessModifier(tokenId: TokenId): boolean {
		return [TokenId.PUBLIC, TokenId.PROTECTED, TokenId.PRIVATE].includes(tokenId);
	}

	protected static isClassKeyword(tokenId: TokenId): boolean {
		return [
			TokenId.SEALED, TokenId.NON_SEALED, TokenId.PERMITS,
			TokenId.CLASS, TokenId.INTERFACE, TokenId.AT_INTERFACE, TokenId.ENUM, TokenId.RECORD, TokenId.TRAIT
		].includes(tokenId);
	}

	protected static isMethodKeyword(tokenId: TokenId): boolean {
		return [TokenId.NATIVE, TokenId.SYNCHRONIZED, TokenId.DEFAULT].includes(tokenId);
	}

	protected static isFieldKeyword(tokenId: TokenId): boolean {
		return [TokenId.TRANSIENT, TokenId.VOLATILE].includes(tokenId);
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	protected static childAcceptableCheck(mightBeChildNode: GroovyAstNode, _astRecognizer: AstRecognizer): boolean {
		return mightBeChildNode.tokenType === TokenType.PrimitiveType /* could be 1. return type of method, 2. type of field */
			|| [
				// class, constructor, method, field
				TokenId.PUBLIC, TokenId.PROTECTED, TokenId.PRIVATE,
				// class
				TokenId.SEALED, TokenId.NON_SEALED, TokenId.PERMITS,
				// class, method
				TokenId.ABSTRACT,
				// class, method, field, static block
				TokenId.STATIC,
				// class, method, field (only field in groovy, it is not allowed in java)
				TokenId.STRICTFP,
				// method
				TokenId.NATIVE, TokenId.SYNCHRONIZED, TokenId.DEFAULT,
				// class, method, field
				TokenId.FINAL,
				// field
				TokenId.TRANSIENT, TokenId.VOLATILE,
				// constructor, method, field
				TokenId.DEF,
				TokenId.Whitespaces, TokenId.Tabs,
				/*
				 * could be
				 * 1. name,
				 * 2. return type of method,
				 * 3. type of field
				 */
				TokenId.Identifier, TokenId.VOID,
				// sure to class
				TokenId.CLASS, TokenId.INTERFACE, TokenId.AT_INTERFACE, TokenId.ENUM, TokenId.RECORD, TokenId.TRAIT,
				// sure to class or static block
				TokenId.LBrace,
				// sure to constructor or method.
				// record class also has paren pair, but it is after record keyword. and it is determined as record class declaration already.
				TokenId.LParen,
				// sure to field, it is value assigning
				TokenId.Equal,
				// sure to field, end this part
				TokenId.Comma,
				// end
				TokenId.Semicolon,
				TokenId.MultipleLinesComment
			].includes(mightBeChildNode.tokenId);
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	protected static onClassKeywordAppended(lastChildNode: GroovyAstNode, _astRecognizer: AstRecognizer): boolean {
		const {tokenId} = lastChildNode;
		const statementNode = lastChildNode.parent;
		// need to check which keyword
		switch (tokenId) {
			case TokenId.CLASS: {
				statementNode.replaceTokenNature(TokenId.ClassDeclaration, TokenType.ClassDeclaration);
				break;
			}
			case TokenId.INTERFACE: {
				statementNode.replaceTokenNature(TokenId.InterfaceDeclaration, TokenType.ClassDeclaration);
				break;
			}
			case TokenId.AT_INTERFACE: {
				statementNode.replaceTokenNature(TokenId.AtInterfaceClassDeclaration, TokenType.ClassDeclaration);
				break;
			}
			case TokenId.ENUM: {
				statementNode.replaceTokenNature(TokenId.EnumClassDeclaration, TokenType.ClassDeclaration);
				break;
			}
			case TokenId.RECORD: {
				statementNode.replaceTokenNature(TokenId.RecordClassDeclaration, TokenType.ClassDeclaration);
				break;
			}
			case TokenId.TRAIT: {
				statementNode.replaceTokenNature(TokenId.TraitClassDeclaration, TokenType.ClassDeclaration);
				break;
			}
			case TokenId.SEALED:
			case TokenId.NON_SEALED:
			case TokenId.PERMITS: {
				// don't know which kind of class declaration, anyway, it cannot be @interface, enum, record, trait
				//
				// and sealed, permits keywords are allowed to be identifier, depends on the declaration context,
				// which not handled now
				break;
			}
			default: {
				return false;
			}
		}
		// TODO switch to class extra attrs
		// $NAF.ChildAcceptableCheck.set(statementNode, ClassDeclarationRecognizer.childAcceptableCheck);
		// $NAF.OnChildAppended.set(statementNode, ClassDeclarationRecognizer.onChildAppended);
		// $NAF.OnNodeClosed.set(statementNode, ClassDeclarationRecognizer.onNodeClosed);
		return true;
	}

	/**
	 * No modifier can determine the exact type of statement.
	 * Therefore, it is necessary to make judgments based on different scenarios.
	 */
	protected static onChildAppended(lastChildNode: GroovyAstNode, astRecognizer: AstRecognizer): void {
		const {tokenId} = lastChildNode;
		if (tokenId === TokenId.Equal) {
			// is field
			const statementNode = lastChildNode.parent;
			statementNode.replaceTokenNature(TokenId.FieldDeclaration, TokenType.FieldDeclaration);
			// TODO switch to field extra attrs
			// $NAF.ChildAcceptableCheck.set(statementNode, FieldDeclarationRecognizer.childAcceptableCheck);
			// $NAF.OnChildAppended.set(statementNode, FieldDeclarationRecognizer.onChildAppended);
			// $NAF.OnNodeClosed.set(statementNode, FieldDeclarationRecognizer.onNodeClosed);
		} else if (tokenId === TokenId.LParen) {
			// is constructor or method, check name to identify

		} else if (tokenId === TokenId.Identifier) {
			$NAF.IdentifierChildCount.increase(lastChildNode.parent);
		} else if (tokenId === TokenId.Semicolon) {
			// simply close, will invoke onNodeClosed to determine that what I am
			astRecognizer.closeCurrentParent();
		}
		// TODO other situations on child appended
	}

	/**
	 * Abnormal termination. The node has not exited the temporary state.
	 * Check the content and change it to the official node type.
	 */
	protected static onNodeClosed(node: GroovyAstNode, astRecognizer: AstRecognizer): void {
		// TODO replace token nature according to current situation
		AbstractModifierRecognizer.moveTrailingMLCommentsToParentOnNodeClosed(node, astRecognizer);
	}

	protected createDeclarationNode(node: GroovyAstNode): GroovyAstNode {
		const statementNode = new GroovyAstNode({
			tokenId: TokenId.Tmp$OneOfClassConstructorMethodFieldDeclaration, tokenType: TokenType.TemporaryStatement,
			text: '', startOffset: node.startOffset,
			startLine: node.startLine, startColumn: node.startColumn
		});
		$NAF.ChildAcceptableCheck.set(statementNode, AbstractModifierRecognizer.childAcceptableCheck);
		$NAF.OnChildAppended.set(statementNode, AbstractModifierRecognizer.onChildAppended);
		$NAF.OnNodeClosed.set(statementNode, AbstractModifierRecognizer.onNodeClosed);

		return statementNode;
	}

	protected doRecognize(recognition: AstRecognition): number {
		const {node, nodeIndex, astRecognizer} = recognition;

		const currentParent = astRecognizer.getCurrentParent();
		if (currentParent.tokenId === TokenId.Tmp$OneOfClassConstructorMethodFieldDeclaration) {
			astRecognizer.appendAsLeaf(node, false);
		} else {
			const statementNode = this.createDeclarationNode(node);
			statementNode.asParentOf(node);
			astRecognizer.appendAsCurrentParent(statementNode);
		}

		return nodeIndex + 1;
	}
}
