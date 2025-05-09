import {
	$NAF,
	ChildAcceptableCheckFunc,
	GroovyAstNode,
	OnChildAppendedFunc,
	OnChildClosedFunc,
	OnNodeClosedFunc
} from '../../../../node';
import {TokenId, TokenType} from '../../../../tokens';
import {AstRecognizer} from '../../../ast-recognizer';
import {ConstructorDeclaration} from './constructor-declaration';
import {FieldDeclaration} from './field-declaration';
import {LogicBlock} from './logic-block';
import {MethodDeclaration} from './method-declaration';
import {OneOfOnChildAppendedFunc, SharedNodePointcut} from './shared';
import {StaticBlockDeclaration} from './static-block-declaration';

// noinspection JSUnusedGlobalSymbols
const Utils = {
	isAccessModifier: (tokenId: TokenId): boolean => {
		return [TokenId.PUBLIC, TokenId.PROTECTED, TokenId.PRIVATE].includes(tokenId);
	},
	isClassKeyword: (tokenId: TokenId): boolean => {
		return [
			TokenId.SEALED, TokenId.NON_SEALED, TokenId.PERMITS,
			TokenId.CLASS, TokenId.INTERFACE, TokenId.AT_INTERFACE, TokenId.ENUM, TokenId.RECORD, TokenId.TRAIT
		].includes(tokenId);
	},
	isMethodKeyword: (tokenId: TokenId): boolean => {
		return [
			TokenId.NATIVE, TokenId.SYNCHRONIZED, TokenId.DEFAULT,
			TokenId.VOID
		].includes(tokenId);
	},
	isFieldKeyword: (tokenId: TokenId): boolean => {
		return [TokenId.TRANSIENT, TokenId.VOLATILE].includes(tokenId);
	},
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	standardTypeChildAcceptableCheck: ((mightBeChildNode: GroovyAstNode, _astRecognizer: AstRecognizer): boolean => {
		// TODO need the 6 type declaration keywords or not?
		return [
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
			// class, method, field
			TokenId.FINAL,
			TokenId.Whitespaces, TokenId.Tabs, TokenId.NewLine,
			/*
			 * could be
			 * 1. name,
			 * 2. return type of method,
			 * 3. type of field
			 */
			TokenId.Identifier,
			TokenId.GenericTypeDeclaration, TokenId.AnnotationDeclaration,
			// sure to class or static block
			TokenId.LBrace,
			// end
			TokenId.Semicolon,
			TokenId.SingleLineComment, TokenId.MultipleLinesComment,
			// of course class body can be child of any type declaration
			TokenId.ClassBody
		].includes(mightBeChildNode.tokenId);
	}) as ChildAcceptableCheckFunc,
	standardTypeOnLBraceAppended: ((lastChildNode: GroovyAstNode, astRecognizer: AstRecognizer): boolean => {
		if (lastChildNode.tokenId !== TokenId.LBrace) {
			return false;
		}
		LogicBlock.create({
			declarationNode: lastChildNode.parent,
			lbraceNode: lastChildNode,
			bodyTokenId: TokenId.ClassBody,
			astRecognizer
		});
		return true;
	}) as OneOfOnChildAppendedFunc,
	standardTypeOnChildAppended: ((lastChildNode: GroovyAstNode, astRecognizer: AstRecognizer): void => {
		const onChildAppendedFuncs = [
			Utils.standardTypeOnLBraceAppended,
			SharedNodePointcut.closeCurrentParentOnSemicolonAppendedAndReturn
		];
		for (let index = 0, count = onChildAppendedFuncs.length; index < count; index++) {
			if (onChildAppendedFuncs[index](lastChildNode, astRecognizer)) {
				break;
			}
		}
	}) as OnChildAppendedFunc,
	onClassBodyClosed: ((lastChildNode: GroovyAstNode, astRecognizer: AstRecognizer): void => {
		if (lastChildNode.tokenId === TokenId.ClassBody) {
			astRecognizer.closeCurrentParent();
		}
	}) as OnChildClosedFunc
} as const;

const CscmfDeclaration = {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	childAcceptableCheck: ((mightBeChildNode: GroovyAstNode, _astRecognizer: AstRecognizer): boolean => {
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
				TokenId.Whitespaces, TokenId.Tabs, TokenId.NewLine,
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
				TokenId.SingleLineComment, TokenId.MultipleLinesComment
			].includes(mightBeChildNode.tokenId);
	}) as ChildAcceptableCheckFunc,
	/**
	 * check the given child node can be identified as type declaration or not,
	 * replace token nature when it is.
	 */
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	onClassKeywordAppended: ((lastChildNode: GroovyAstNode, _astRecognizer: AstRecognizer): boolean => {
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
	}) as OneOfOnChildAppendedFunc,
	/**
	 * check the given child node can be identified as method declaration or not,
	 * replace token nature when it is.
	 */
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	onMethodKeywordAppended: ((lastChildNode: GroovyAstNode, _astRecognizer: AstRecognizer): boolean => {
		if (!Utils.isMethodKeyword(lastChildNode.tokenId)) {
			return false;
		}

		const statementNode = lastChildNode.parent;
		statementNode.replaceTokenNature(TokenId.MethodDeclaration, TokenType.MethodDeclaration);
		MethodDeclaration.extra(statementNode);
		return true;
	}) as OneOfOnChildAppendedFunc,
	/**
	 * check the given child node can be identified as field declaration or not,
	 * replace token nature when it is.
	 */
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	onFieldKeywordAppended: ((lastChildNode: GroovyAstNode, _astRecognizer: AstRecognizer): boolean => {
		if (!Utils.isFieldKeyword(lastChildNode.tokenId)) {
			return false;
		}

		const statementNode = lastChildNode.parent;
		statementNode.replaceTokenNature(TokenId.FieldDeclaration, TokenType.FieldDeclaration);
		FieldDeclaration.extra(statementNode);
		return true;
	}) as OneOfOnChildAppendedFunc,
	/**
	 * check the given child node can be identified as identifier or not,
	 * increase the identifier count if it is
	 */
	onIdentifierAppended: ((lastChildNode: GroovyAstNode, astRecognizer: AstRecognizer): boolean => {
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
	}) as OneOfOnChildAppendedFunc,
	/**
	 * check the given child node can be identified as left brace or not,
	 * if so, when the existing previous siblings contains identifier or any keyword rather than static,
	 * then it is a class declaration. otherwise, it is identified to be a static block.
	 */
	onLBraceAppended: ((lastChildNode: GroovyAstNode, astRecognizer: AstRecognizer): boolean => {
		if (lastChildNode.tokenId !== TokenId.LBrace) {
			return false;
		}

		const statementNode = lastChildNode.parent;

		let isStaticBlockStart = true;
		if ($NAF.IdentifierChildCount.get(statementNode) > 0) {
			// has identifier
			statementNode.replaceTokenNature(TokenId.ClassDeclaration, TokenType.TypeDeclaration);
			ClassDeclaration.extra(statementNode);
			LogicBlock.create({
				declarationNode: statementNode,
				lbraceNode: lastChildNode,
				bodyTokenId: TokenId.ClassBody,
				astRecognizer
			});
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
			StaticBlockDeclaration.extra(statementNode);
			LogicBlock.create({
				declarationNode: statementNode,
				lbraceNode: lastChildNode,
				bodyTokenId: TokenId.StaticBlockBody,
				astRecognizer
			});
		} else {
			statementNode.replaceTokenNature(TokenId.ClassDeclaration, TokenType.TypeDeclaration);
			ClassDeclaration.extra(statementNode);
			LogicBlock.create({
				declarationNode: statementNode,
				lbraceNode: lastChildNode,
				bodyTokenId: TokenId.ClassBody,
				astRecognizer
			});
		}

		return true;
	}) as OneOfOnChildAppendedFunc,
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
	onLParenAppended: ((lastChildNode: GroovyAstNode, astRecognizer: AstRecognizer): boolean => {
		if (lastChildNode.tokenId !== TokenId.LParen) {
			return false;
		}

		const statementNode = lastChildNode.parent;
		const identifierCount = $NAF.IdentifierChildCount.get(statementNode);
		if (identifierCount === 0) {
			// no identifier exists, identified as method declaration
			statementNode.replaceTokenNature(TokenId.MethodDeclaration, TokenType.MethodDeclaration);
			MethodDeclaration.extra(statementNode);
			LogicBlock.create({
				declarationNode: statementNode,
				lbraceNode: lastChildNode,
				bodyTokenId: TokenId.MethodBody,
				astRecognizer
			});
			return true;
		}

		// check the parent of statement node, must be a class body.
		const parentOfStatementNode = statementNode.parent;
		if (parentOfStatementNode.tokenId !== TokenId.ClassBody) {
			// simply treated as method declaration
			statementNode.replaceTokenNature(TokenId.MethodDeclaration, TokenType.MethodDeclaration);
			MethodDeclaration.extra(statementNode);
			LogicBlock.create({
				declarationNode: statementNode,
				lbraceNode: lastChildNode,
				bodyTokenId: TokenId.MethodBody,
				astRecognizer
			});
			return true;
		}

		// check identifier with class name
		const identifierNode = statementNode.children.find(node => node.tokenId === TokenId.Identifier);
		const className = parentOfStatementNode.previousSiblings.find(node => node.tokenId === TokenId.Identifier)?.text;
		if (identifierNode.text === className) {
			// constructor
			statementNode.replaceTokenNature(TokenId.ConstructorDeclaration, TokenType.ConstructorDeclaration);
			ConstructorDeclaration.extra(statementNode);
			LogicBlock.create({
				declarationNode: statementNode,
				lbraceNode: lastChildNode,
				bodyTokenId: TokenId.ConstructorBody,
				astRecognizer
			});
		} else {
			// method
			statementNode.replaceTokenNature(TokenId.MethodDeclaration, TokenType.MethodDeclaration);
			MethodDeclaration.extra(statementNode);
			LogicBlock.create({
				declarationNode: statementNode,
				lbraceNode: lastChildNode,
				bodyTokenId: TokenId.MethodBody,
				astRecognizer
			});
		}

		return true;
	}) as OneOfOnChildAppendedFunc,
	/**
	 * check the given child node can be identified as left parenthesis or not,
	 * if so, find identifier in previous siblings. if not exists, it is identified as method declaration.
	 * if identifier is same as class name, it is identified as constructor declaration, otherwise as method declaration.
	 */
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	onEqualAppended: ((lastChildNode: GroovyAstNode, _astRecognizer: AstRecognizer): boolean => {
		if (lastChildNode.tokenId !== TokenId.Equal) {
			return false;
		}

		const statementNode = lastChildNode.parent;
		statementNode.replaceTokenNature(TokenId.FieldDeclaration, TokenType.FieldDeclaration);
		FieldDeclaration.extra(statementNode);
		return true;
	}) as OneOfOnChildAppendedFunc,
	/**
	 * comma appended, and currently the exact type of declaration is still not determined.
	 * check the previous sibling nodes, if there is keyword def, or primitive types,
	 * then it will be identified as field.
	 * otherwise simply close current parent, and move the comma node to my parent
	 */
	onCommaAppended: ((lastChildNode: GroovyAstNode, astRecognizer: AstRecognizer): boolean => {
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
	}) as OneOfOnChildAppendedFunc,
	/**
	 * No modifier can determine the exact type of statement.
	 * Therefore, it is necessary to make judgments based on different scenarios.
	 */
	onChildAppended: ((lastChildNode: GroovyAstNode, astRecognizer: AstRecognizer): void => {
		const onChildAppendedFuncs = [
			CscmfDeclaration.onClassKeywordAppended,
			CscmfDeclaration.onMethodKeywordAppended,
			CscmfDeclaration.onFieldKeywordAppended,
			CscmfDeclaration.onIdentifierAppended,
			CscmfDeclaration.onLBraceAppended,
			CscmfDeclaration.onLParenAppended,
			CscmfDeclaration.onEqualAppended,
			CscmfDeclaration.onCommaAppended,
			SharedNodePointcut.closeCurrentParentOnSemicolonAppendedAndReturn
		];
		for (let index = 0, count = onChildAppendedFuncs.length; index < count; index++) {
			if (onChildAppendedFuncs[index](lastChildNode, astRecognizer)) {
				break;
			}
		}
	}) as OnChildAppendedFunc,
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
	onNodeClosed: ((node: GroovyAstNode, astRecognizer: AstRecognizer): void => {
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

		SharedNodePointcut.moveTrailingMLCommentsToParentOnNodeClosed(node, astRecognizer);
	}) as OnNodeClosedFunc,
	extra: (node: GroovyAstNode): void => {
		$NAF.ChildAcceptableCheck.set(node, CscmfDeclaration.childAcceptableCheck);
		$NAF.OnChildAppended.set(node, CscmfDeclaration.onChildAppended);
		$NAF.OnNodeClosed.set(node, CscmfDeclaration.onNodeClosed);
	}
} as const;

const ClassDeclaration = {
	childAcceptableCheck: Utils.standardTypeChildAcceptableCheck,
	onChildAppended: Utils.standardTypeOnChildAppended,
	onChildClosed: Utils.onClassBodyClosed,
	extra: (node: GroovyAstNode): void => {
		$NAF.ChildAcceptableCheck.set(node, ClassDeclaration.childAcceptableCheck);
		$NAF.OnChildAppended.set(node, ClassDeclaration.onChildAppended);
		$NAF.OnChildClosed.set(node, ClassDeclaration.onChildClosed);
	}
} as const;
const InterfaceDeclaration = {
	childAcceptableCheck: Utils.standardTypeChildAcceptableCheck,
	onChildAppended: Utils.standardTypeOnChildAppended,
	onChildClosed: Utils.onClassBodyClosed,
	extra: (node: GroovyAstNode): void => {
		$NAF.ChildAcceptableCheck.set(node, InterfaceDeclaration.childAcceptableCheck);
		$NAF.OnChildAppended.set(node, InterfaceDeclaration.onChildAppended);
		$NAF.OnChildClosed.set(node, InterfaceDeclaration.onChildClosed);
	}
} as const;
const AtInterfaceClassDeclaration = {
	childAcceptableCheck: Utils.standardTypeChildAcceptableCheck,
	onChildAppended: Utils.standardTypeOnChildAppended,
	onChildClosed: Utils.onClassBodyClosed,
	extra: (node: GroovyAstNode): void => {
		$NAF.ChildAcceptableCheck.set(node, AtInterfaceClassDeclaration.childAcceptableCheck);
		$NAF.OnChildAppended.set(node, AtInterfaceClassDeclaration.onChildAppended);
		$NAF.OnChildClosed.set(node, AtInterfaceClassDeclaration.onChildClosed);
	}
} as const;
const EnumClassDeclaration = {
	childAcceptableCheck: Utils.standardTypeChildAcceptableCheck,
	onChildAppended: Utils.standardTypeOnChildAppended,
	onChildClosed: Utils.onClassBodyClosed,
	extra: (node: GroovyAstNode): void => {
		$NAF.ChildAcceptableCheck.set(node, EnumClassDeclaration.childAcceptableCheck);
		$NAF.OnChildAppended.set(node, EnumClassDeclaration.onChildAppended);
		$NAF.OnChildClosed.set(node, EnumClassDeclaration.onChildClosed);
	}
} as const;
const RecordClassDeclaration = {
	// TODO record has formal parameters part, enclose with parentheses
	childAcceptableCheck: Utils.standardTypeChildAcceptableCheck,
	onChildAppended: Utils.standardTypeOnChildAppended,
	onChildClosed: Utils.onClassBodyClosed,
	extra: (node: GroovyAstNode): void => {
		$NAF.ChildAcceptableCheck.set(node, RecordClassDeclaration.childAcceptableCheck);
		$NAF.OnChildAppended.set(node, RecordClassDeclaration.onChildAppended);
		$NAF.OnChildClosed.set(node, RecordClassDeclaration.onChildClosed);
	}
} as const;
const TraitClassDeclaration = {
	childAcceptableCheck: Utils.standardTypeChildAcceptableCheck,
	onChildAppended: Utils.standardTypeOnChildAppended,
	onChildClosed: Utils.onClassBodyClosed,
	extra: (node: GroovyAstNode): void => {
		$NAF.ChildAcceptableCheck.set(node, TraitClassDeclaration.childAcceptableCheck);
		$NAF.OnChildAppended.set(node, TraitClassDeclaration.onChildAppended);
		$NAF.OnChildClosed.set(node, TraitClassDeclaration.onChildClosed);
	}
} as const;
export const TypeDeclaration = {
	Utils,
	Cscmf: CscmfDeclaration,
	Class: ClassDeclaration,
	Interface: InterfaceDeclaration,
	AtInterface: AtInterfaceClassDeclaration,
	Enum: EnumClassDeclaration,
	Record: RecordClassDeclaration,
	Trait: TraitClassDeclaration,
	extra: (node: GroovyAstNode): void => {
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
			case TokenId.Tmp$CscmfDeclaration:
				CscmfDeclaration.extra(node);
				break;
			default:
				// do nothing
				break;
		}
	}
} as const;
