import {AstVisitor} from '../../ast-visitor';
import {
	AbstractAstNode,
	AbstractKeywordNode,
	AbstractMarkNode,
	AbstractOperatorNode,
	AbstractPrimitiveTypeNode,
	AbstractSameCharsNode,
	AbstractSymbolNode
} from '../../node';
import {TokenId} from '../../tokens';
import {AbstractKeywordCaptor} from '../abstract-keyword-captor';
import {AbstractMultipleCharsCaptor} from '../abstract-multiple-chars-captor';
import {AbstractSameCharsCaptor} from '../abstract-same-chars-captor';
import {AbstractSingleCharCaptor} from '../abstract-single-char-captor';
import {Char} from '../types';
import {AtomicTokenDefOfDualCaptors, AtomicTokenDefOfMultiCaptors, AtomicTokenDefOfSingleCaptor} from './internal';
import {AstNodeCaptorConstructor, AstNodeConstructor} from './types';
import {capitalize} from './utils';

/**
 * extends given super class
 * @param className
 * @param tokenId
 * @param SuperCass should be a class or an abstract class, which implements {@link AstNode}
 */
export const createNodeClassExtendsGivenSuperClass =
	(className: string, tokenId: TokenId, SuperCass: AstNodeConstructor): AstNodeConstructor => {
		const NodeClass = class extends SuperCass {
			get tokenId(): TokenId {
				return tokenId;
			}
		};
		Object.defineProperty(NodeClass, 'name', {value: `${className}Node`});
		return NodeClass;
	};

// single-char captor
export const createSingleCharCaptorClass =
	(className: string, char: Char, NodeClass: AstNodeConstructor): AstNodeCaptorConstructor => {
		const CaptorClass = class extends AbstractSingleCharCaptor {
			constructor(astVisitor: AstVisitor) {
				super(char, astVisitor);
			}

			protected getAstNodeConstructor(): AstNodeConstructor {
				return NodeClass;
			}
		};
		Object.defineProperty(CaptorClass, 'name', {value: `${className}Captor`});
		return CaptorClass;
	};

// same-chars captor
export const createSameCharsCaptorClass =
	(className: string, char: Char, NodeClass: AstNodeConstructor): AstNodeCaptorConstructor => {
		const CaptorClass = class extends AbstractSameCharsCaptor {
			constructor(astVisitor: AstVisitor) {
				super(char, astVisitor);
			}

			protected getAstNodeConstructor(): AstNodeConstructor {
				return NodeClass;
			}
		};
		Object.defineProperty(CaptorClass, 'name', {value: `${className}Captor`});
		return CaptorClass;
	};

// multi-chars captor
export const createMultiCharsCaptorClass =
	(className: string, operator: string, NodeClass: AstNodeConstructor): AstNodeCaptorConstructor => {
		const CaptorClass = class extends AbstractMultipleCharsCaptor {
			constructor(astVisitor: AstVisitor) {
				super(operator, astVisitor);
			}

			protected getAstNodeConstructor(): AstNodeConstructor {
				return NodeClass;
			}
		};
		Object.defineProperty(CaptorClass, 'name', {value: `${className}Captor`});
		return CaptorClass;
	};

// keyword captor
export const createKeywordCaptorClass =
	(className: string, keyword: string, NodeClass: AstNodeConstructor): AstNodeCaptorConstructor => {
		const CaptorClass = class extends AbstractKeywordCaptor {
			constructor(astVisitor: AstVisitor) {
				super(keyword, astVisitor);
			}

			protected getAstNodeConstructor(): AstNodeConstructor {
				return NodeClass;
			}
		};
		Object.defineProperty(CaptorClass, 'name', {value: `${className}Captor`});
		return CaptorClass;
	};

// primitive type
export const createPrimitiveTypeNodeClass =
	(className: string, tokenId: TokenId): AstNodeConstructor => {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		return createNodeClassExtendsGivenSuperClass(className, tokenId, AbstractPrimitiveTypeNode as any);
	};
export const createPrimitiveTypeDefClasses =
	(className: string, tokenId: TokenId, keyword: string): AtomicTokenDefOfSingleCaptor => {
		const NodeClass = createPrimitiveTypeNodeClass(className, tokenId);
		const CaptorClass = createKeywordCaptorClass(className, keyword, NodeClass);
		return [NodeClass, CaptorClass];
	};

// keyword
export const createKeywordNodeClass =
	(className: string, tokenId: TokenId): AstNodeConstructor => {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		return createNodeClassExtendsGivenSuperClass(className, tokenId, AbstractKeywordNode as any);
	};
export const createKeywordDefClasses =
	(className: string, tokenId: TokenId, keyword: string): AtomicTokenDefOfSingleCaptor => {
		const NodeClass = createKeywordNodeClass(className, tokenId);
		const CaptorClass = createKeywordCaptorClass(className, keyword, NodeClass);
		return [NodeClass, CaptorClass];
	};
export const createDualKeywordsDefClasses =
	(className: string, tokenId: TokenId, keywords: [string, string]): AtomicTokenDefOfDualCaptors => {
		const [keyword1, keyword2] = keywords;
		const NodeClass = createKeywordNodeClass(className, tokenId);
		const CaptorClass1 = createKeywordCaptorClass(`${className}Of${capitalize(keyword1)}`, keyword1, NodeClass);
		const CaptorClass2 = createKeywordCaptorClass(`${className}Of${capitalize(keyword2)}`, keyword2, NodeClass);
		return [NodeClass, [CaptorClass1, CaptorClass2]];
	};

// operator
export const createOperatorNodeClass =
	(className: string, tokenId: TokenId): AstNodeConstructor => {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		return createNodeClassExtendsGivenSuperClass(className, tokenId, AbstractOperatorNode as any);
	};
export const createOperatorDefClasses =
	(className: string, tokenId: TokenId, operator: string): AtomicTokenDefOfSingleCaptor => {
		const NodeClass = createOperatorNodeClass(className, tokenId);
		const CaptorClass = (operator.length === 1)
			? createSingleCharCaptorClass(className, operator, NodeClass)
			: createMultiCharsCaptorClass(className, operator, NodeClass);
		return [NodeClass, CaptorClass];
	};

// separator
export const createSeparatorNodeClass =
	(className: string, tokenId: TokenId): AstNodeConstructor => {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		return createNodeClassExtendsGivenSuperClass(className, tokenId, AbstractSymbolNode as any);
	};
export const createSeparatorDefClasses =
	(className: string, tokenId: TokenId, separator: Char): AtomicTokenDefOfSingleCaptor => {
		const NodeClass = createSeparatorNodeClass(className, tokenId);
		const CaptorClass = createSingleCharCaptorClass(className, separator, NodeClass);
		return [NodeClass, CaptorClass];
	};

// comments mark
export const createCommentsMarkNodeClass =
	(className: string, tokenId: TokenId): AstNodeConstructor => {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		return createNodeClassExtendsGivenSuperClass(className, tokenId, AbstractMarkNode as any);
	};
export const createCommentsMarkDefClasses =
	(className: string, tokenId: TokenId, mark: string): AtomicTokenDefOfSingleCaptor => {
		const NodeClass = createCommentsMarkNodeClass(className, tokenId);
		const CaptorClass = createMultiCharsCaptorClass(className, mark, NodeClass);
		return [NodeClass, CaptorClass];
	};

// script comment mark
export const createScriptCommandMarkNodeClass =
	(className: string, tokenId: TokenId): AstNodeConstructor => {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		return createNodeClassExtendsGivenSuperClass(className, tokenId, AbstractMarkNode as any);
	};
export const createScriptCommentMarkDefClasses =
	(className: string, tokenId: TokenId, mark: string): AtomicTokenDefOfSingleCaptor => {
		const NodeClass = createScriptCommandMarkNodeClass(className, tokenId);
		const CaptorClass = createMultiCharsCaptorClass(className, mark, NodeClass);
		return [NodeClass, CaptorClass];
	};

// same chars
export const createSameCharsNodeClass =
	(className: string, tokenId: TokenId): AstNodeConstructor => {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		return createNodeClassExtendsGivenSuperClass(className, tokenId, AbstractSameCharsNode as any);
	};
export const createSameCharsDefClasses =
	(className: string, tokenId: TokenId, char: Char): AtomicTokenDefOfSingleCaptor => {
		const NodeClass = createSameCharsNodeClass(className, tokenId);
		const CaptorClass = createSameCharsCaptorClass(className, char, NodeClass);
		return [NodeClass, CaptorClass];
	};

// multi-chars matches
export const createMultiCharPatternsNodeClass =
	(className: string, tokenId: TokenId): AstNodeConstructor => {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		return createNodeClassExtendsGivenSuperClass(className, tokenId, AbstractAstNode as any);
	};
export const createMultiCharPatternsDefClasses =
	(className: string, tokenId: TokenId, patterns: Array<string>): AtomicTokenDefOfMultiCaptors => {
		const NodeClass = createMultiCharPatternsNodeClass(className, tokenId);
		return [NodeClass, patterns.map(pattern => {
			return (pattern.length === 1)
				? createSingleCharCaptorClass(className, pattern, NodeClass)
				: createMultiCharsCaptorClass(className, pattern, NodeClass);
		})];
	};
