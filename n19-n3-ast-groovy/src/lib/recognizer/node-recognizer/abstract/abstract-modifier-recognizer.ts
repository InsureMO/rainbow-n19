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

	// noinspection JSUnusedGlobalSymbols
	protected static isAccessModifier(tokenId: TokenId): boolean {
		return [TokenId.PUBLIC, TokenId.PROTECTED, TokenId.PRIVATE].includes(tokenId);
	}

	// noinspection JSUnusedGlobalSymbols
	protected static isClassKeyword(tokenId: TokenId): boolean {
		return [
			TokenId.SEALED, TokenId.NON_SEALED, TokenId.PERMITS,
			TokenId.CLASS, TokenId.INTERFACE, TokenId.AT_INTERFACE, TokenId.ENUM, TokenId.RECORD, TokenId.TRAIT
		].includes(tokenId);
	}

	protected static isMethodKeyword(tokenId: TokenId): boolean {
		return [
			TokenId.NATIVE, TokenId.SYNCHRONIZED, TokenId.DEFAULT,
			TokenId.VOID
		].includes(tokenId);
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
				// class, static block, method, field
				TokenId.STATIC,
				// class, method, field (only field in groovy, it is not allowed in java)
				TokenId.STRICTFP,
				// sure to method
				TokenId.NATIVE, TokenId.SYNCHRONIZED, TokenId.DEFAULT,
				// class, method, field
				TokenId.FINAL,
				// sure to field
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
				TokenId.Identifier,
				TokenId.GenericTypeDeclaration, TokenId.AnnotationDeclaration,
				// method
				TokenId.VOID,
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
	protected static switchExtraAttrsForTypeDeclaration(_node: GroovyAstNode): void {
		// TODO switch extra attributes for type declaration node
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	protected static switchExtraAttrsForStaticBlockDeclaration(_node: GroovyAstNode): void {
		// TODO switch extra attributes for static block declaration node
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	protected static switchExtraAttrsForConstructorDeclaration(_node: GroovyAstNode): void {
		// TODO switch extra attributes for constructor declaration node
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	protected static switchExtraAttrsForMethodDeclaration(_node: GroovyAstNode): void {
		// TODO switch extra attributes for method declaration node
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	protected static switchExtraAttrsForFieldDeclaration(_node: GroovyAstNode): void {
		// TODO switch extra attributes for field declaration node
	}

	/**
	 * check the given child node can be identified as type declaration or not,
	 * replace token nature when it is.
	 */
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	protected static onClassKeywordAppended(lastChildNode: GroovyAstNode, _astRecognizer: AstRecognizer): boolean {
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
		AbstractModifierRecognizer.switchExtraAttrsForTypeDeclaration(statementNode);
		return true;
	}

	/**
	 * check the given child node can be identified as method declaration or not,
	 * replace token nature when it is.
	 */
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	protected static onMethodKeywordAppended(lastChildNode: GroovyAstNode, _astRecognizer: AstRecognizer): boolean {
		if (!AbstractModifierRecognizer.isMethodKeyword(lastChildNode.tokenId)) {
			return false;
		}

		const statementNode = lastChildNode.parent;
		statementNode.replaceTokenNature(TokenId.MethodDeclaration, TokenType.MethodDeclaration);
		AbstractModifierRecognizer.switchExtraAttrsForMethodDeclaration(statementNode);
		return true;
	}

	/**
	 * check the given child node can be identified as field declaration or not,
	 * replace token nature when it is.
	 */
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	protected static onFieldKeywordAppended(lastChildNode: GroovyAstNode, _astRecognizer: AstRecognizer): boolean {
		if (!AbstractModifierRecognizer.isFieldKeyword(lastChildNode.tokenId)) {
			return false;
		}

		const statementNode = lastChildNode.parent;
		statementNode.replaceTokenNature(TokenId.FieldDeclaration, TokenType.FieldDeclaration);
		AbstractModifierRecognizer.switchExtraAttrsForFieldDeclaration(statementNode);
		return true;
	}

	/**
	 * check the given child node can be identified as identifier or not,
	 * increase the identifier count if it is
	 */
	protected static onIdentifierAppended(lastChildNode: GroovyAstNode, astRecognizer: AstRecognizer): boolean {
		if (lastChildNode.tokenId !== TokenId.Identifier) {
			return false;
		}

		const statementNode = lastChildNode.parent;
		const identifierCount = $NAF.IdentifierChildCount.get(statementNode);
		if (identifierCount === 0) {
			$NAF.IdentifierChildCount.set(statementNode, 1);
		} else {
			// multiple identifiers, close declaration and chop-off the identifier node, move to parent
			astRecognizer.closeCurrentParent();
			astRecognizer.chopOffFromOldParentAndMoveToCurrentParent([lastChildNode]);
		}
		return true;
	}

	protected static createBodyStatementNode(declarationNode: GroovyAstNode, lbraceNode: GroovyAstNode, bodyTokenId: TokenId) {
		declarationNode.chopOffTrailingNodes([lbraceNode]);
		const bodyStatementNode = new GroovyAstNode({
			tokenId: bodyTokenId, tokenType: TokenType.LogicBlock,
			text: '',
			startOffset: lbraceNode.startOffset,
			startLine: lbraceNode.startLine, startColumn: lbraceNode.startColumn
		});
		bodyStatementNode.asParentOf(lbraceNode);
		declarationNode.asParentOf(bodyStatementNode);
		return true;
	}

	/**
	 * check the given child node can be identified as left brace or not,
	 * if so, when the existing previous siblings contains identifier or any keyword rather than static,
	 * then it is a class declaration. otherwise, it is identified to be a static block.
	 */
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	protected static onLBraceAppended(lastChildNode: GroovyAstNode, _astRecognizer: AstRecognizer): boolean {
		if (lastChildNode.tokenId !== TokenId.LBrace) {
			return false;
		}

		const statementNode = lastChildNode.parent;

		let isStaticBlockStart = true;
		if ($NAF.IdentifierChildCount.get(statementNode) > 0) {
			// has identifier
			statementNode.replaceTokenNature(TokenId.ClassDeclaration, TokenType.TypeDeclaration);
			AbstractModifierRecognizer.switchExtraAttrsForTypeDeclaration(statementNode);
			AbstractModifierRecognizer.createBodyStatementNode(statementNode, lastChildNode, TokenId.ClassBody);
			return true;
		}

		const children = statementNode.children;
		// the last child is given one, ignore
		for (let index = 0; index < children.length - 1; index++) {
			const previousSiblingNode = children[index];
			if (previousSiblingNode.tokenType === TokenType.Keyword && previousSiblingNode.tokenId !== TokenId.STATIC) {
				isStaticBlockStart = false;
			}
		}

		if (isStaticBlockStart) {
			statementNode.replaceTokenNature(TokenId.StaticBlockDeclaration, TokenType.LogicBlockDeclaration);
			AbstractModifierRecognizer.switchExtraAttrsForStaticBlockDeclaration(statementNode);
			AbstractModifierRecognizer.createBodyStatementNode(statementNode, lastChildNode, TokenId.StaticBlockBody);
		} else {
			statementNode.replaceTokenNature(TokenId.ClassDeclaration, TokenType.TypeDeclaration);
			AbstractModifierRecognizer.switchExtraAttrsForTypeDeclaration(statementNode);
			AbstractModifierRecognizer.createBodyStatementNode(statementNode, lastChildNode, TokenId.ClassBody);
		}

		return true;
	}

	/**
	 * check the given child node can be identified as left parenthesis or not,
	 * if so, find identifier in previous siblings. if not exists, it is identified as method declaration.
	 * if identifier is same as class name, it is identified as constructor declaration, otherwise as method declaration.
	 *
	 * It should be noted specifically that constructor and method definitions can only appear within the body of a class definition.
	 * Their appearance in other positions is unreasonable.
	 * Therefore, if it is determined that they are in other positions, they are simply considered as an incorrect method definitions,
	 * and the rationality of the names will no longer be checked.
	 */
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	protected static onLParenAppended(lastChildNode: GroovyAstNode, _astRecognizer: AstRecognizer): boolean {
		if (lastChildNode.tokenId !== TokenId.LParen) {
			return false;
		}

		const statementNode = lastChildNode.parent;
		const identifierCount = $NAF.IdentifierChildCount.get(statementNode);
		if (identifierCount === 0) {
			// no identifier exists, identified as method declaration
			statementNode.replaceTokenNature(TokenId.MethodDeclaration, TokenType.MethodDeclaration);
			AbstractModifierRecognizer.switchExtraAttrsForMethodDeclaration(statementNode);
			AbstractModifierRecognizer.createBodyStatementNode(statementNode, lastChildNode, TokenId.MethodBody);
			return true;
		}

		// check the parent of statement node, must be a class body.
		const parentOfStatementNode = statementNode.parent;
		if (parentOfStatementNode.tokenId !== TokenId.ClassBody) {
			// simply treated as method declaration
			statementNode.replaceTokenNature(TokenId.MethodDeclaration, TokenType.MethodDeclaration);
			AbstractModifierRecognizer.switchExtraAttrsForMethodDeclaration(statementNode);
			AbstractModifierRecognizer.createBodyStatementNode(statementNode, lastChildNode, TokenId.MethodBody);
			return true;
		}

		// check identifier with class name
		const identifierNode = statementNode.children.find(node => node.tokenId === TokenId.Identifier);
		const className = parentOfStatementNode.previousSiblings.find(node => node.tokenId === TokenId.Identifier)?.text;
		if (identifierNode.text === className) {
			// constructor
			statementNode.replaceTokenNature(TokenId.ConstructorDeclaration, TokenType.ConstructorDeclaration);
			AbstractModifierRecognizer.switchExtraAttrsForConstructorDeclaration(statementNode);
			AbstractModifierRecognizer.createBodyStatementNode(statementNode, lastChildNode, TokenId.ConstructorBody);
		} else {
			// method
			statementNode.replaceTokenNature(TokenId.MethodDeclaration, TokenType.MethodDeclaration);
			AbstractModifierRecognizer.switchExtraAttrsForMethodDeclaration(statementNode);
			AbstractModifierRecognizer.createBodyStatementNode(statementNode, lastChildNode, TokenId.MethodBody);
		}

		return true;
	}

	/**
	 * check the given child node can be identified as left parenthesis or not,
	 * if so, find identifier in previous siblings. if not exists, it is identified as method declaration.
	 * if identifier is same as class name, it is identified as constructor declaration, otherwise as method declaration.
	 */
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	protected static onEqualAppended(lastChildNode: GroovyAstNode, _astRecognizer: AstRecognizer): boolean {
		if (lastChildNode.tokenId !== TokenId.Equal) {
			return false;
		}

		const statementNode = lastChildNode.parent;
		statementNode.replaceTokenNature(TokenId.FieldDeclaration, TokenType.FieldDeclaration);
		AbstractModifierRecognizer.switchExtraAttrsForFieldDeclaration(statementNode);
		return true;
	}

	/**
	 * comma appended, and currently the exact type of declaration is still not determined.
	 * check the previous sibling nodes, if there is keyword def, or primitive types,
	 * then it will be identified as field.
	 * otherwise simply close current parent, and move the comma node to my parent
	 */
	protected static onCommaAppended(lastChildNode: GroovyAstNode, astRecognizer: AstRecognizer): boolean {
		if (lastChildNode.tokenId !== TokenId.Comma) {
			return false;
		}

		const hasDefOrPrimitiveType = lastChildNode.previousSiblings.find(node => {
			return node.tokenId === TokenId.DEF || node.tokenType === TokenType.PrimitiveType;
		});
		if (hasDefOrPrimitiveType) {
			const statementNode = lastChildNode.parent;
			statementNode.replaceTokenNature(TokenId.FieldDeclaration, TokenType.FieldDeclaration);
			AbstractModifierRecognizer.switchExtraAttrsForFieldDeclaration(statementNode);
		} else {
			// simply close, will invoke onNodeClosed to determine that what I am
			astRecognizer.closeCurrentParent();
		}
		return true;
	}

	/**
	 * semicolon appended, close declaration
	 */
	protected static onSemicolonAppended(lastChildNode: GroovyAstNode, astRecognizer: AstRecognizer): boolean {
		if (lastChildNode.tokenId !== TokenId.Semicolon) {
			return false;
		}

		// simply close, will invoke onNodeClosed to determine that what I am
		astRecognizer.closeCurrentParent();
		return true;
	}

	/**
	 * No modifier can determine the exact type of statement.
	 * Therefore, it is necessary to make judgments based on different scenarios.
	 */
	protected static onChildAppended(lastChildNode: GroovyAstNode, astRecognizer: AstRecognizer): void {
		const onChildAppendedFuncs = [
			AbstractModifierRecognizer.onClassKeywordAppended,
			AbstractModifierRecognizer.onMethodKeywordAppended,
			AbstractModifierRecognizer.onFieldKeywordAppended,
			AbstractModifierRecognizer.onIdentifierAppended,
			AbstractModifierRecognizer.onLBraceAppended,
			AbstractModifierRecognizer.onLParenAppended,
			AbstractModifierRecognizer.onEqualAppended,
			AbstractModifierRecognizer.onCommaAppended,
			AbstractModifierRecognizer.onSemicolonAppended
		];
		for (let index = 0, count = onChildAppendedFuncs.length; index < count; index++) {
			if (onChildAppendedFuncs[index](lastChildNode, astRecognizer)) {
				break;
			}
		}
	}

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
	protected static onNodeClosed(node: GroovyAstNode, astRecognizer: AstRecognizer): void {
		const possibilities = {class: true, method: true, field: true};
		node.children.forEach(node => {
			const {tokenId, tokenType} = node;
			if (tokenId === TokenId.ABSTRACT) {
				possibilities.field = false;
			} else if (tokenId === TokenId.DEF || tokenType === TokenType.PrimitiveType) {
				possibilities.class = false;
			} else if (tokenId === TokenId.GenericTypeDeclaration) {
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
			default: {
				// method in incorrect position
				node.replaceTokenNature(TokenId.MethodDeclaration, TokenType.MethodDeclaration);
				break;
			}
		}

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
