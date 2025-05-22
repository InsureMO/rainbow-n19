import {GroovyAstNode} from '../../node';
import {TokenId, TokenType} from '../../tokens';
import {AstRecognizer} from '../ast-recognizer';
import {PBS} from './index';
import {CsscmfDeclarationPointcuts, TypeDeclarationPointcuts} from '../statement';
import {PointcutBasisType} from '../defs';
import {NodePointcuts} from './defs';

export const PointcutBasis: Readonly<Partial<{ [key in TokenId]: PointcutBasisType }>> = {
	// number literal
	[TokenId.BinaryLiteral]: 'TODO',
	[TokenId.OctalLiteral]: 'TODO',
	[TokenId.HexadecimalLiteral]: 'TODO',
	[TokenId.IntegralLiteral]: 'TODO',
	[TokenId.DecimalLiteral]: 'TODO',
	// char literal
	[TokenId.CharLiteral]: 'TODO',
	// string literal
	[TokenId.StringLiteral]: 'TODO',
	[TokenId.GStringInterpolation]: 'TODO',
	[TokenId.GStringLiteral]: 'TODO',
	[TokenId.SlashyGStringLiteral]: 'TODO',
	[TokenId.DollarSlashyGStringLiteral]: 'TODO',
	// statement
	[TokenId.SingleLineComment]: 'TODO',
	[TokenId.MultipleLinesComment]: 'TODO',
	[TokenId.ScriptCommand]: 'TODO',
	[TokenId.PackageDeclaration]: PBS
		// newline and sl comments is not allowed
		.DisableAcceptAll5BaseNodesAsChild()
		.AcceptTokenIdsAsChild(
			TokenId.Identifier, TokenId.Dot,
			TokenId.Whitespaces, TokenId.Tabs, TokenId.MultipleLinesComment)
		.EndWithSemicolon(),
	[TokenId.ImportDeclaration]: PBS
		// newline and sl comments is not allowed
		.DisableAcceptAll5BaseNodesAsChild()
		.AcceptTokenIdsAsChild(
			TokenId.STATIC, TokenId.Identifier, TokenId.Dot, TokenId.AS,
			// alias of TokenId.Multiple, only in import declaration
			TokenId.ImportAllMark,
			TokenId.Whitespaces, TokenId.Tabs, TokenId.MultipleLinesComment)
		.EndWithSemicolon(),
	[TokenId.ImportAllMark]: 'TODO',
	[TokenId.InterfaceDeclaration]: PBS
		.AcceptTokenIdsAsChild(
			TokenId.Tmp$NeverHappen,
			...TypeDeclarationPointcuts.StandardTypeChildAcceptTokenIds)
		.TakeLBraceAs(TokenId.ClassBody)
		.EndWithSemicolon()
		.CloseOnChildWithTokenClosed(TokenId.ClassBody),
	[TokenId.ClassDeclaration]: PBS
		.AcceptTokenIdsAsChild(
			TokenId.Tmp$NeverHappen,
			...TypeDeclarationPointcuts.StandardTypeChildAcceptTokenIds)
		.TakeLBraceAs(TokenId.ClassBody)
		.EndWithSemicolon()
		.CloseOnChildWithTokenClosed(TokenId.ClassBody),
	[TokenId.AtInterfaceClassDeclaration]: PBS
		.AcceptTokenIdsAsChild(
			TokenId.Tmp$NeverHappen,
			...TypeDeclarationPointcuts.StandardTypeChildAcceptTokenIds)
		.TakeLBraceAs(TokenId.ClassBody)
		.EndWithSemicolon()
		.CloseOnChildWithTokenClosed(TokenId.ClassBody),
	[TokenId.EnumClassDeclaration]: PBS
		.AcceptTokenIdsAsChild(
			TokenId.Tmp$NeverHappen,
			...TypeDeclarationPointcuts.StandardTypeChildAcceptTokenIds)
		.TakeLBraceAs(TokenId.ClassBody)
		.EndWithSemicolon()
		.CloseOnChildWithTokenClosed(TokenId.ClassBody),
	[TokenId.RecordClassDeclaration]: PBS
		.AcceptTokenIdsAsChild(
			TokenId.Tmp$NeverHappen,
			...TypeDeclarationPointcuts.StandardTypeChildAcceptTokenIds)
		.TakeLBraceAs(TokenId.ClassBody)
		.EndWithSemicolon()
		.CloseOnChildWithTokenClosed(TokenId.ClassBody),
	[TokenId.TraitClassDeclaration]: PBS
		.AcceptTokenIdsAsChild(
			TokenId.Tmp$NeverHappen,
			...TypeDeclarationPointcuts.StandardTypeChildAcceptTokenIds)
		.TakeLBraceAs(TokenId.ClassBody)
		.EndWithSemicolon()
		.CloseOnChildWithTokenClosed(TokenId.ClassBody),
	[TokenId.ClassBody]: PBS.EndWithToken(TokenId.RBrace),
	[TokenId.StaticBlockDeclaration]: PBS
		.AcceptTokenIdsAsChild(TokenId.StaticBlockBody)
		.TakeLBraceAs(TokenId.StaticBlockBody)
		.EndWithSemicolon()
		.CloseOnChildWithTokenClosed(TokenId.StaticBlockBody),
	[TokenId.StaticBlockBody]: PBS.EndWithToken(TokenId.RBrace),
	[TokenId.ConstructorDeclaration]: PBS
		.TakeLBraceAs(TokenId.ConstructorBody)
		.EndWithSemicolon()
		.CloseOnChildWithTokenClosed(TokenId.ConstructorBody),
	[TokenId.ConstructorBody]: PBS.EndWithToken(TokenId.RBrace),
	[TokenId.MethodDeclaration]: PBS
		.TakeLBraceAs(TokenId.MethodBody)
		.EndWithSemicolon()
		.CloseOnChildWithTokenClosed(TokenId.MethodBody),
	[TokenId.MethodBody]: PBS.EndWithToken(TokenId.RBrace),
	[TokenId.FieldDeclaration]: PBS.EndWithSemicolon(),
	[TokenId.AnnotationDeclaration]: PBS
		// newline and sl comments is not allowed
		.DisableAcceptAll5BaseNodesAsChild()
		// TODO sl comments and new line are allowed before paren block
		.AcceptTokenIdsAsChild(
			TokenId.Identifier, TokenId.Dot,
			TokenId.Whitespaces, TokenId.Tabs, TokenId.MultipleLinesComment,
			TokenId.ParenBlock)
		.EndWithSemicolon()
		.CloseOnChildWithTokenClosed(TokenId.ParenBlock),
	[TokenId.GenericTypeDeclaration]: 'TODO',
	[TokenId.SynchronizedBlockDeclaration]: PBS
		.AcceptTokenIdsAsChild(TokenId.ParenBlock, TokenId.SynchronizedBlockBody)
		.TakeLBraceAs(TokenId.SynchronizedBlockBody)
		.EndWithSemicolon()
		.CloseOnChildWithTokenClosed(TokenId.SynchronizedBlockBody),
	[TokenId.SynchronizedBlockBody]: PBS.EndWithToken(TokenId.RBrace),
	[TokenId.IfDeclaration]: PBS
		.AcceptTokenIdsAsChild(TokenId.IfIfDeclaration, TokenId.IfElseIfDeclaration, TokenId.IfElseDeclaration)
		.EndWithSemicolon(),
	[TokenId.IfIfDeclaration]: PBS
		.AcceptTokenIdsAsChild(TokenId.ParenBlock, TokenId.IfIfBody)
		.TakeLBraceAs(TokenId.IfIfBody)
		.EndWithSemicolon()
		.CloseOnChildWithTokenClosed(TokenId.IfIfBody),
	[TokenId.IfIfBody]: PBS.EndWithToken(TokenId.RBrace),
	[TokenId.IfElseIfDeclaration]: PBS
		.AcceptTokenIdsAsChild(TokenId.ParenBlock, TokenId.IfElseIfBody)
		.TakeLBraceAs(TokenId.IfElseIfBody)
		.EndWithSemicolon()
		.CloseOnChildWithTokenClosed(TokenId.IfElseIfBody),
	[TokenId.IfElseIfBody]: PBS.EndWithToken(TokenId.RBrace),
	[TokenId.IfElseDeclaration]: PBS
		.AcceptTokenIdsAsChild(TokenId.IF, TokenId.IfElseBody)
		.TakeLBraceAs(TokenId.IfElseBody)
		.EndWithSemicolon()
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		.OnChildAppended((lastChildNode: GroovyAstNode, _astRecognizer: AstRecognizer): boolean => {
			if (lastChildNode.tokenId !== TokenId.IF) {
				return false;
			}
			// change parent to else-if
			const currentParent = lastChildNode.parent;
			currentParent.replaceTokenNature(TokenId.IfElseIfDeclaration, TokenType.LogicBlockDeclaration);
			NodePointcuts[TokenId.IfElseIfDeclaration](currentParent);
			return true;
		})
		.CloseOnChildWithTokenClosed(TokenId.IfElseBody),
	[TokenId.IfElseBody]: PBS.EndWithToken(TokenId.RBrace),
	[TokenId.SwitchDeclaration]: PBS
		.AcceptTokenIdsAsChild(
			TokenId.ParenBlock, TokenId.SwitchBody,
			TokenId.SwitchCaseDeclaration, TokenId.SwitchDefaultDeclaration)
		.TakeLBraceAs(TokenId.SwitchBody)
		.EndWithSemicolon()
		.CloseOnChildWithTokenClosed(TokenId.SwitchBody),
	[TokenId.SwitchBody]: PBS.EndWithToken(TokenId.RBrace),
	[TokenId.SwitchCaseDeclaration]: PBS
		.RejectTokenIdsAsChild(TokenId.SwitchCaseDeclaration, TokenId.SwitchDefaultDeclaration,
			// any legitimate right brace will be received by the block initiated by the left brace.
			// therefore, an independent right brace must mark the end of the switch body.
			TokenId.RBrace)
		.EndWithSemicolon(),
	[TokenId.SwitchDefaultDeclaration]: PBS
		.RejectTokenIdsAsChild(TokenId.SwitchCaseDeclaration, TokenId.SwitchDefaultDeclaration,
			// any legitimate right brace will be received by the block initiated by the left brace.
			// therefore, an independent right brace must mark the end of the switch body.
			TokenId.RBrace)
		.EndWithSemicolon(),
	[TokenId.WhileDeclaration]: PBS
		.AcceptTokenIdsAsChild(TokenId.ParenBlock, TokenId.WhileBody)
		.TakeLBraceAs(TokenId.WhileBody)
		.EndWithSemicolon()
		.CloseOnChildWithTokenClosed(TokenId.WhileBody),
	[TokenId.WhileBody]: PBS.EndWithToken(TokenId.RBrace),
	[TokenId.DoWhileDeclaration]: PBS
		.AcceptTokenIdsAsChild(TokenId.DoWhileBody, TokenId.WHILE, TokenId.ParenBlock)
		.TakeLBraceAs(TokenId.DoWhileBody)
		.EndWithSemicolon()
		// TODO need to check the paren block is directly after while keyword?
		.CloseOnChildWithTokenClosed(TokenId.ParenBlock),
	[TokenId.DoWhileBody]: PBS.EndWithToken(TokenId.RBrace),
	[TokenId.ForDeclaration]: PBS
		.AcceptTokenIdsAsChild(TokenId.ParenBlock, TokenId.ForBody)
		.TakeLBraceAs(TokenId.ForBody)
		.EndWithSemicolon()
		.CloseOnChildWithTokenClosed(TokenId.ForBody),
	[TokenId.ForBody]: PBS.EndWithToken(TokenId.RBrace),
	[TokenId.TryDeclaration]: PBS
		.AcceptTokenIdsAsChild(TokenId.TryTryDeclaration, TokenId.TryCatchDeclaration, TokenId.TryFinallyDeclaration)
		.EndWithSemicolon(),
	[TokenId.TryTryDeclaration]: PBS
		.AcceptTokenIdsAsChild(TokenId.ParenBlock, TokenId.TryTryBody)
		.TakeLBraceAs(TokenId.TryTryBody)
		.EndWithSemicolon()
		.CloseOnChildWithTokenClosed(TokenId.TryTryBody),
	[TokenId.TryTryBody]: PBS.EndWithToken(TokenId.RBrace),
	[TokenId.TryCatchDeclaration]: PBS
		.AcceptTokenIdsAsChild(TokenId.ParenBlock, TokenId.TryCatchBody)
		.TakeLBraceAs(TokenId.TryCatchBody)
		.EndWithSemicolon()
		.CloseOnChildWithTokenClosed(TokenId.TryCatchBody),
	[TokenId.TryCatchBody]: PBS.EndWithToken(TokenId.RBrace),
	[TokenId.TryFinallyDeclaration]: PBS
		.AcceptTokenIdsAsChild(TokenId.TryFinallyBody)
		.TakeLBraceAs(TokenId.TryFinallyBody)
		.EndWithSemicolon()
		.CloseOnChildWithTokenClosed(TokenId.TryFinallyBody),
	[TokenId.TryFinallyBody]: PBS.EndWithToken(TokenId.RBrace),
	[TokenId.Closure]: PBS.EndWithToken(TokenId.RBrace),
	[TokenId.LambdaDeclaration]: 'TODO',
	[TokenId.LambdaBody]: PBS.EndWithToken(TokenId.RBrace),
	[TokenId.CodeBlock]: PBS.EndWithToken(TokenId.RBrace),
	[TokenId.ParenBlock]: PBS.EndWithToken(TokenId.RParen),
	[TokenId.AssertStatement]: PBS.EndWithSemicolon(),
	[TokenId.BreakStatement]: PBS.EndWithSemicolon(),
	[TokenId.ContinueStatement]: PBS.EndWithSemicolon(),
	[TokenId.DefStatement]: PBS.EndWithSemicolon(),
	[TokenId.VarStatement]: PBS.EndWithSemicolon(),
	[TokenId.NewExpression]: PBS.EndWithSemicolon(),
	[TokenId.ThrowStatement]: PBS.EndWithSemicolon(),
	[TokenId.ArrayInitializer]: PBS.EndWithToken(TokenId.RBrace),
	[TokenId.AtFieldPathElement]: PBS
		.AcceptTokenIdsAsChild(TokenId.Identifier, TokenId.StringLiteral)
		.EndWithSemicolon(),
	// temporary
	[TokenId.Tmp$CsscmfDeclaration]: PBS
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
		.OnChildAppended(CsscmfDeclarationPointcuts.onChildAppended)
		.OnNodeClosed(CsscmfDeclarationPointcuts.onNodeClosed),
	[TokenId.Tmp$NeverHappen]: 'TODO'
};
