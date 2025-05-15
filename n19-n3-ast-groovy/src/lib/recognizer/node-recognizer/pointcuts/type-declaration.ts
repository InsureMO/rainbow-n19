import {GroovyAstNode, OnNodeClosedFunc} from '../../../node';
import {TokenId, TokenType} from '../../../tokens';
import {AstRecognizer} from '../../ast-recognizer';
import {$Neaf} from '../../neaf-wrapper';
import {ConstructorDeclaration} from './constructor-declaration';
import {FieldDeclaration} from './field-declaration';
import {MethodDeclaration} from './method-declaration';
import {OneOfOnChildAppendedFunc, SharedNodePointcuts} from './shared';
import {StaticBlockDeclaration} from './static-block-declaration';
import {SynchronizedBlockDeclaration} from './synchronized-block-declaration';

class TypeDeclarationUtils {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	// noinspection JSUnusedGlobalSymbols
	static readonly isAccessModifier = (tokenId: TokenId): boolean => {
		return [TokenId.PUBLIC, TokenId.PROTECTED, TokenId.PRIVATE].includes(tokenId);
	};
	// noinspection JSUnusedGlobalSymbols
	static readonly isClassKeyword = (tokenId: TokenId): boolean => {
		return [
			TokenId.SEALED, TokenId.NON_SEALED, TokenId.PERMITS,
			TokenId.CLASS, TokenId.INTERFACE, TokenId.AT_INTERFACE, TokenId.ENUM, TokenId.RECORD, TokenId.TRAIT
		].includes(tokenId);
	};
	static readonly isMethodKeyword = (tokenId: TokenId): boolean => {
		return [TokenId.NATIVE, TokenId.DEFAULT, TokenId.VOID].includes(tokenId);
	};
	static readonly isFieldKeyword = (tokenId: TokenId): boolean => {
		return [TokenId.TRANSIENT, TokenId.VOLATILE].includes(tokenId);
	};

	// standard behaviors of type declaration, node must be one of 6 type declarations.
	static readonly StandardTypeChildAcceptTokenIds = [
		TokenId.PUBLIC, TokenId.PROTECTED, TokenId.PRIVATE,
		TokenId.SEALED, TokenId.NON_SEALED, TokenId.PERMITS,
		TokenId.ABSTRACT,
		TokenId.STATIC,
		TokenId.STRICTFP,
		TokenId.EXTENDS, TokenId.IMPLEMENTS,
		TokenId.FINAL,
		TokenId.Identifier,
		TokenId.GenericTypeDeclaration, TokenId.AnnotationDeclaration,
		TokenId.ClassBody
	];
}

class CsscmfDeclaration {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	/**
	 * check the given child node can be identified as type declaration or not,
	 * replace token nature when it is.
	 */
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
	static readonly onClassKeywordAppended = ((lastChildNode: GroovyAstNode, _astRecognizer: AstRecognizer): boolean => {
		const statementNode = lastChildNode.parent;
		// need to check which keyword
		switch (lastChildNode.tokenId) {
			case TokenId.CLASS: {
				statementNode.replaceTokenNature(TokenId.ClassDeclaration, TokenType.TypeDeclaration);
				break;
			}
			case TokenId.INTERFACE: {
				statementNode.replaceTokenNature(TokenId.InterfaceDeclaration, TokenType.TypeDeclaration);
				break;
			}
			case TokenId.AT_INTERFACE: {
				statementNode.replaceTokenNature(TokenId.AtInterfaceClassDeclaration, TokenType.TypeDeclaration);
				break;
			}
			case TokenId.ENUM: {
				statementNode.replaceTokenNature(TokenId.EnumClassDeclaration, TokenType.TypeDeclaration);
				break;
			}
			case TokenId.RECORD: {
				statementNode.replaceTokenNature(TokenId.RecordClassDeclaration, TokenType.TypeDeclaration);
				break;
			}
			case TokenId.TRAIT: {
				statementNode.replaceTokenNature(TokenId.TraitClassDeclaration, TokenType.TypeDeclaration);
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
		TypeDeclaration.extra(statementNode);
		return true;
	}) as OneOfOnChildAppendedFunc;
	/**
	 * check the given child node can be identified as method declaration or not,
	 * replace token nature when it is.
	 */
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
	static readonly onMethodKeywordAppended = ((lastChildNode: GroovyAstNode, _astRecognizer: AstRecognizer): boolean => {
		if (!TypeDeclarationUtils.isMethodKeyword(lastChildNode.tokenId)) {
			return false;
		}

		const statementNode = lastChildNode.parent;
		statementNode.replaceTokenNature(TokenId.MethodDeclaration, TokenType.MethodDeclaration);
		MethodDeclaration.extra(statementNode);
		return true;
	}) as OneOfOnChildAppendedFunc;
	/**
	 * check the given child node can be identified as field declaration or not,
	 * replace token nature when it is.
	 */
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
	static readonly onFieldKeywordAppended = ((lastChildNode: GroovyAstNode, _astRecognizer: AstRecognizer): boolean => {
		if (!TypeDeclarationUtils.isFieldKeyword(lastChildNode.tokenId)) {
			return false;
		}

		const statementNode = lastChildNode.parent;
		statementNode.replaceTokenNature(TokenId.FieldDeclaration, TokenType.FieldDeclaration);
		FieldDeclaration.extra(statementNode);
		return true;
	}) as OneOfOnChildAppendedFunc;
	/**
	 * check the given child node can be identified as identifier or not,
	 * increase the identifier count if it is
	 */
	static onIdentifierAppended = ((lastChildNode: GroovyAstNode, astRecognizer: AstRecognizer): boolean => {
		if (lastChildNode.tokenId !== TokenId.Identifier) {
			return false;
		}

		const statementNode = lastChildNode.parent;
		const identifierCount = $Neaf.IdentifierChildCount.get(statementNode);
		if (identifierCount === 0) {
			$Neaf.IdentifierChildCount.set(statementNode, 1);
		} else {
			// multiple identifiers, close declaration and chop-off the identifier node, move to parent
			astRecognizer.closeCurrentParent();
			astRecognizer.chopOffFromOldParentAndMoveToCurrentParent([lastChildNode]);
		}
		return true;
	}) as OneOfOnChildAppendedFunc;
	/**
	 * check the given child node can be identified as a code block or not.
	 * if so, when the existing previous siblings
	 * 1. has no identifier, has no other keyword rather than static: it is a static block,
	 * 2. has no identifier, has no other keyword rather than synchronized: it is a synchronized block,
	 * 3. it is a class declaration.

	 * why it is not one of constructor, method or field? because if there is any evidence to prove it is,
	 * it already was identified before the code block appended.
	 * e.g., left parenthesis appended, comma appended, equal appended, etc.
	 */
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
	static readonly onCodeBlockAppended = ((mightBeChildNode: GroovyAstNode, _astRecognizer: AstRecognizer): boolean => {
		if (mightBeChildNode.tokenId !== TokenId.CodeBlock) {
			return false;
		}

		const statementNode = mightBeChildNode.parent;

		let isStaticBlockStart = true;
		let isSynchronizedBlockStart = true;
		if ($Neaf.IdentifierChildCount.get(statementNode) > 0) {
			// has identifier
			statementNode.replaceTokenNature(TokenId.ClassDeclaration, TokenType.TypeDeclaration);
			ClassDeclaration.extra(statementNode);
			mightBeChildNode.replaceTokenNature(TokenId.ClassBody, TokenType.LogicBlock);
			return true;
		}

		const children = statementNode.children;
		// the last child is given one, ignore
		for (let index = 0; index < children.length - 1; index++) {
			const previousSiblingNode = children[index];
			if (previousSiblingNode.tokenType === TokenType.Keyword) {
				if (previousSiblingNode.tokenId !== TokenId.STATIC) {
					isStaticBlockStart = false;
				}
				if (previousSiblingNode.tokenId !== TokenId.SYNCHRONIZED) {
					isSynchronizedBlockStart = false;
				}
			}
		}

		if (isStaticBlockStart) {
			statementNode.replaceTokenNature(TokenId.StaticBlockDeclaration, TokenType.LogicBlockDeclaration);
			StaticBlockDeclaration.extra(statementNode);
			mightBeChildNode.replaceTokenNature(TokenId.StaticBlockBody, TokenType.LogicBlock);
		} else if (isSynchronizedBlockStart) {
			statementNode.replaceTokenNature(TokenId.SynchronizedBlockDeclaration, TokenType.LogicBlockDeclaration);
			SynchronizedBlockDeclaration.extra(statementNode);
			mightBeChildNode.replaceTokenNature(TokenId.SynchronizedBlockBody, TokenType.LogicBlock);
		} else {
			statementNode.replaceTokenNature(TokenId.ClassDeclaration, TokenType.TypeDeclaration);
			ClassDeclaration.extra(statementNode);
			mightBeChildNode.replaceTokenNature(TokenId.ClassBody, TokenType.LogicBlock);
		}

		return true;
	}) as OneOfOnChildAppendedFunc;
	/**
	 * check the given child node can be identified as a paren block or not,
	 * if so,
	 * 1. find identifier in previous siblings.
	 * 1.1 if not exists, and the previous keyword contains only synchronized, it is identified as synchronized block
	 * 1.2 if not exists, it is identified as method declaration.
	 * 1.3 if identifier is same as class name, it is identified as constructor declaration,
	 * 1.4 otherwise as method declaration.
	 *
	 * It should be noted specifically that constructor and method definitions can only appear within the body of a class definition,
	 * and synchronized block cannot be appeared within class body directly.
	 * Their appearance in other positions is unreasonable.
	 * Therefore, if it is determined that they are in other positions, they are simply considered as an incorrect method definitions,
	 * and the rationality of the names will no longer be checked.
	 */
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
	static readonly onParenBlockAppended = ((mightBeChildNode: GroovyAstNode, _astRecognizer: AstRecognizer): boolean => {
		if (mightBeChildNode.tokenId !== TokenId.LParen) {
			return false;
		}

		const statementNode = mightBeChildNode.parent;
		const identifierCount = $Neaf.IdentifierChildCount.get(statementNode);
		if (identifierCount === 0) {
			// no identifier exists, identified as method declaration
			let isSynchronizedBlockStart = true;
			const children = statementNode.children;
			// the last child is given one, ignore
			for (let index = 0; index < children.length - 1; index++) {
				const previousSiblingNode = children[index];
				if (previousSiblingNode.tokenType === TokenType.Keyword) {
					if (previousSiblingNode.tokenId !== TokenId.SYNCHRONIZED) {
						isSynchronizedBlockStart = false;
						break;
					}
				}
			}
			if (isSynchronizedBlockStart) {
				statementNode.replaceTokenNature(TokenId.SynchronizedBlockDeclaration, TokenType.LogicBlockDeclaration);
				SynchronizedBlockDeclaration.extra(statementNode);
			} else {
				statementNode.replaceTokenNature(TokenId.MethodDeclaration, TokenType.MethodDeclaration);
				MethodDeclaration.extra(statementNode);
			}
			return true;
		}

		// check the parent of statement node, must be a class body.
		const parentOfStatementNode = statementNode.parent;
		if (parentOfStatementNode.tokenId !== TokenId.ClassBody) {
			// simply treated as method declaration
			statementNode.replaceTokenNature(TokenId.MethodDeclaration, TokenType.MethodDeclaration);
			MethodDeclaration.extra(statementNode);
			return true;
		}

		// check identifier with class name
		const identifierNode = statementNode.children.find(node => node.tokenId === TokenId.Identifier);
		const className = parentOfStatementNode.previousSiblings.find(node => node.tokenId === TokenId.Identifier)?.text;
		if (identifierNode.text === className) {
			// constructor
			statementNode.replaceTokenNature(TokenId.ConstructorDeclaration, TokenType.ConstructorDeclaration);
			ConstructorDeclaration.extra(statementNode);
		} else {
			// method
			statementNode.replaceTokenNature(TokenId.MethodDeclaration, TokenType.MethodDeclaration);
			MethodDeclaration.extra(statementNode);
		}

		return true;
	}) as OneOfOnChildAppendedFunc;
	/**
	 * check the given child node can be identified as left parenthesis or not,
	 * if so, find identifier in previous siblings. if not exists, it is identified as method declaration.
	 * if identifier is same as class name, it is identified as constructor declaration, otherwise as method declaration.
	 */
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
	static readonly onEqualAppended = ((lastChildNode: GroovyAstNode, _astRecognizer: AstRecognizer): boolean => {
		if (lastChildNode.tokenId !== TokenId.Equal) {
			return false;
		}

		const statementNode = lastChildNode.parent;
		statementNode.replaceTokenNature(TokenId.FieldDeclaration, TokenType.FieldDeclaration);
		FieldDeclaration.extra(statementNode);
		return true;
	}) as OneOfOnChildAppendedFunc;
	/**
	 * comma appended, and currently the exact type of declaration is still not determined.
	 * check the previous sibling nodes, if there is keyword def, or primitive types,
	 * then it will be identified as field.
	 * otherwise simply close current parent, and move the comma node to my parent
	 */
	static readonly onCommaAppended = ((lastChildNode: GroovyAstNode, astRecognizer: AstRecognizer): boolean => {
		if (lastChildNode.tokenId !== TokenId.Comma) {
			return false;
		}

		const hasDefOrPrimitiveType = lastChildNode.previousSiblings.find(node => {
			return node.tokenId === TokenId.DEF || node.tokenType === TokenType.PrimitiveType;
		});
		if (hasDefOrPrimitiveType) {
			const statementNode = lastChildNode.parent;
			statementNode.replaceTokenNature(TokenId.FieldDeclaration, TokenType.FieldDeclaration);
			FieldDeclaration.extra(statementNode);
		} else {
			// simply close, will invoke onNodeClosed to determine that what I am
			astRecognizer.closeCurrentParent();
		}
		return true;
	}) as OneOfOnChildAppendedFunc;
	/**
	 * No modifier can determine the exact type of statement.
	 * Therefore, it is necessary to make judgments based on different scenarios.
	 */
	static readonly onChildAppended = SharedNodePointcuts.onChildAppendedOfFirstOrNone(
		CsscmfDeclaration.onClassKeywordAppended,
		CsscmfDeclaration.onMethodKeywordAppended,
		CsscmfDeclaration.onFieldKeywordAppended,
		CsscmfDeclaration.onIdentifierAppended,
		CsscmfDeclaration.onCodeBlockAppended,
		CsscmfDeclaration.onParenBlockAppended,
		CsscmfDeclaration.onEqualAppended,
		CsscmfDeclaration.onCommaAppended
	);
	/**
	 * The node is not recognized as any of type, static block, constructor, method, or field declaration.
	 * This means that no child nodes that can be used for identification have appeared.
	 * Therefore, the child nodes that have appeared are those that cannot be used for identification or have diverse semantics.
	 * Settings need to be made based on these child nodes.
	 * Since there will inevitably be diversity in logic, when setting it as a node of a specific type,
	 * the order of priority is type > method > field.
	 * That is to say, the static block and constructor will never appear during fuzzy identification.
	 *
	 * 1. has keyword abstract -> cannot be field,
	 * 2. has keyword def -> cannot be class,
	 * 3. has primitive types -> cannot be class,
	 * 4. has generic type declaration -> cannot be field,
	 * 5. parent is not class body -> cannot be method or field.
	 */
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
	static readonly onNodeClosed = ((node: GroovyAstNode, _astRecognizer: AstRecognizer): void => {
		const possibilities = {class: true, method: true, field: true};
		node.children.forEach(node => {
			const {tokenId, tokenType} = node;
			if (tokenId === TokenId.ABSTRACT) {
				possibilities.field = false;
			} else if (tokenId === TokenId.DEF || tokenType === TokenType.PrimitiveType) {
				possibilities.class = false;
			} else if (tokenId === TokenId.GenericTypeDeclaration) {
				possibilities.field = false;
			} else if (tokenId === TokenId.EXTENDS || tokenId === TokenId.IMPLEMENTS) {
				possibilities.method = false;
				possibilities.field = false;
			}
		});

		const withinClassBodyDirectly = node.parent.tokenId !== TokenId.ClassBody;
		// no need to switch extra attributes, since node is closed
		switch (true) {
			case possibilities.class: {
				// can be class, top priority
				node.replaceTokenNature(TokenId.ClassDeclaration, TokenType.TypeDeclaration);
				break;
			}
			case possibilities.method && withinClassBodyDirectly: {
				// can be method, 2nd priority
				node.replaceTokenNature(TokenId.MethodDeclaration, TokenType.MethodDeclaration);
				break;
			}
			case possibilities.field && withinClassBodyDirectly: {
				// can be field
				node.replaceTokenNature(TokenId.FieldDeclaration, TokenType.FieldDeclaration);
				break;
			}
			case !possibilities.class && !possibilities.method && !possibilities.field: {
				// TODO split nodes to multiple declarations
				break;
			}
			default: {
				// method in incorrect position
				node.replaceTokenNature(TokenId.MethodDeclaration, TokenType.MethodDeclaration);
				break;
			}
		}
	}) as OnNodeClosedFunc;
	static readonly extra = (node: GroovyAstNode): void => {
		$Neaf.of(node)
			// could be 1. return type of method, 2. type of field
			.AcceptTokenTypesAsChild(TokenType.PrimitiveType)
			.AcceptTokenIdsAsChild(
				// class, constructor, method, field
				TokenId.PUBLIC, TokenId.PROTECTED, TokenId.PRIVATE,
				// class
				TokenId.SEALED, TokenId.NON_SEALED, TokenId.PERMITS,
				// class, method
				TokenId.ABSTRACT,
				// class, static block, method, field
				TokenId.STATIC,
				// class, method, field (only field in groovy, it is not allowed in java)
				TokenId.STRICTFP,
				// class
				TokenId.EXTENDS, TokenId.IMPLEMENTS,
				// sure to method
				TokenId.NATIVE, TokenId.SYNCHRONIZED, TokenId.DEFAULT,
				// class, method, field
				TokenId.FINAL,
				// sure to field
				TokenId.TRANSIENT, TokenId.VOLATILE,
				// constructor, method, field
				TokenId.DEF,
				// constructor, method
				TokenId.THROWS,
				/*
				 * could be
				 * 1. name,
				 * 2. return type of method,
				 * 3. type of field
				 */
				TokenId.Identifier,
				TokenId.GenericTypeDeclaration, TokenId.AnnotationDeclaration,
				// method
				TokenId.VOID,
				// sure to class
				TokenId.CLASS, TokenId.INTERFACE, TokenId.AT_INTERFACE, TokenId.ENUM, TokenId.RECORD, TokenId.TRAIT,
				// sure to class or static block
				TokenId.LBrace, TokenId.CodeBlock,
				// sure to constructor or method.
				// record class also has paren pair, but it is after record keyword. and it is determined as record class declaration already.
				TokenId.LParen, TokenId.ParenBlock,
				// sure to field, it is value assigning
				TokenId.Equal,
				// sure to field, end this part
				TokenId.Comma
			)
			.EndWithSemicolon()
			.OnChildAppended(CsscmfDeclaration.onChildAppended)
			.OnNodeClosed(CsscmfDeclaration.onNodeClosed);
	};
}

class ClassDeclaration {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	static readonly extra = (node: GroovyAstNode): void => {
		$Neaf.of(node)
			.AcceptTokenIdsAsChild(
				TokenId.Tmp$NeverHappen,
				...TypeDeclarationUtils.StandardTypeChildAcceptTokenIds)
			.TakeLBraceAs(TokenId.ClassBody)
			.EndWithSemicolon()
			.CloseOnChildWithTokenClosed(TokenId.ClassBody);
	};
}

class InterfaceDeclaration {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	static readonly extra = (node: GroovyAstNode): void => {
		$Neaf.of(node)
			.AcceptTokenIdsAsChild(
				TokenId.Tmp$NeverHappen,
				...TypeDeclarationUtils.StandardTypeChildAcceptTokenIds)
			.TakeLBraceAs(TokenId.ClassBody)
			.EndWithSemicolon()
			.CloseOnChildWithTokenClosed(TokenId.ClassBody);
	};
}

class AtInterfaceClassDeclaration {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	static readonly extra = (node: GroovyAstNode): void => {
		$Neaf.of(node)
			.AcceptTokenIdsAsChild(
				TokenId.Tmp$NeverHappen,
				...TypeDeclarationUtils.StandardTypeChildAcceptTokenIds)
			.TakeLBraceAs(TokenId.ClassBody)
			.EndWithSemicolon()
			.CloseOnChildWithTokenClosed(TokenId.ClassBody);
	};
}

class EnumClassDeclaration {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	static readonly extra = (node: GroovyAstNode): void => {
		$Neaf.of(node)
			.AcceptTokenIdsAsChild(
				TokenId.Tmp$NeverHappen,
				...TypeDeclarationUtils.StandardTypeChildAcceptTokenIds)
			.TakeLBraceAs(TokenId.ClassBody)
			.EndWithSemicolon()
			.CloseOnChildWithTokenClosed(TokenId.ClassBody);
	};
}

class RecordClassDeclaration {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	// TODO record has formal parameters part, enclose with parentheses
	static readonly extra = (node: GroovyAstNode): void => {
		$Neaf.of(node)
			.AcceptTokenIdsAsChild(
				TokenId.Tmp$NeverHappen,
				...TypeDeclarationUtils.StandardTypeChildAcceptTokenIds)
			.TakeLBraceAs(TokenId.ClassBody)
			.EndWithSemicolon()
			.CloseOnChildWithTokenClosed(TokenId.ClassBody);
	};
}

class TraitClassDeclaration {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	static readonly extra = (node: GroovyAstNode): void => {
		$Neaf.of(node)
			.AcceptTokenIdsAsChild(
				TokenId.Tmp$NeverHappen,
				...TypeDeclarationUtils.StandardTypeChildAcceptTokenIds)
			.TakeLBraceAs(TokenId.ClassBody)
			.EndWithSemicolon()
			.CloseOnChildWithTokenClosed(TokenId.ClassBody);
	};
}

export class TypeDeclaration {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	static readonly Utils = TypeDeclarationUtils;
	static readonly Csscmf = CsscmfDeclaration;
	static readonly Class = ClassDeclaration;
	static readonly Interface = InterfaceDeclaration;
	static readonly AtInterface = AtInterfaceClassDeclaration;
	static readonly Enum = EnumClassDeclaration;
	static readonly Record = RecordClassDeclaration;
	static readonly Trait = TraitClassDeclaration;
	static readonly extra = (node: GroovyAstNode): void => {
		switch (node.tokenId) {
			case TokenId.ClassDeclaration:
				ClassDeclaration.extra(node);
				break;
			case TokenId.InterfaceDeclaration:
				InterfaceDeclaration.extra(node);
				break;
			case TokenId.AtInterfaceClassDeclaration:
				AtInterfaceClassDeclaration.extra(node);
				break;
			case TokenId.EnumClassDeclaration:
				EnumClassDeclaration.extra(node);
				break;
			case TokenId.RecordClassDeclaration:
				RecordClassDeclaration.extra(node);
				break;
			case TokenId.TraitClassDeclaration:
				TraitClassDeclaration.extra(node);
				break;
			case TokenId.Tmp$CsscmfDeclaration:
				CsscmfDeclaration.extra(node);
				break;
			default:
				// do nothing
				break;
		}
	};
}
