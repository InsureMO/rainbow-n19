import {GroovyAstNode} from '../../node';
import {TokenId, TokenType} from '../../tokens';
import {
	CsscmfDeclarationPointcuts,
	IfElseDeclarationPointcuts,
	TypeDeclarationPointcuts
} from '../node-pointcut-specific';
import {NodePointcutBuilderFacade as $} from './pointcut-builder';

export type PointcutBasisDefs = { build: (node: GroovyAstNode) => void } | 'TODO' | 'NotRequired';

export const PointcutBasis: Readonly<Partial<{ [key in TokenId]: PointcutBasisDefs }>> = {
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
	[TokenId.PackageDeclaration]: $
		// newline and sl comments is not allowed
		.DisableAcceptAll5BaseNodesAsChild()
		.AcceptTokenIdsAsChild(
			TokenId.Identifier, TokenId.Dot,
			TokenId.Whitespaces, TokenId.Tabs, TokenId.MultipleLinesComment)
		.EndWithSemicolon(),
	[TokenId.ImportDeclaration]: $
		// newline and sl comments is not allowed
		.DisableAcceptAll5BaseNodesAsChild()
		.AcceptTokenIdsAsChild(
			TokenId.STATIC, TokenId.Identifier, TokenId.Dot, TokenId.AS,
			// alias of TokenId.Multiple, only in import declaration
			TokenId.ImportAllMark,
			TokenId.Whitespaces, TokenId.Tabs, TokenId.MultipleLinesComment)
		.EndWithSemicolon(),
	[TokenId.ImportAllMark]: 'TODO',
	[TokenId.InterfaceDeclaration]: $
		.AcceptTokenIdsAsChild(
			TokenId.Tmp$NeverHappen,
			...TypeDeclarationPointcuts.StandardTypeChildAcceptTokenIds)
		.TakeLBraceAs(TokenId.ClassBody)
		.EndWithSemicolon()
		.CloseOnChildWithTokenClosed(TokenId.ClassBody),
	[TokenId.ClassDeclaration]: $
		.AcceptTokenIdsAsChild(
			TokenId.Tmp$NeverHappen,
			...TypeDeclarationPointcuts.StandardTypeChildAcceptTokenIds)
		.TakeLBraceAs(TokenId.ClassBody)
		.EndWithSemicolon()
		.CloseOnChildWithTokenClosed(TokenId.ClassBody),
	[TokenId.AtInterfaceClassDeclaration]: $
		.AcceptTokenIdsAsChild(
			TokenId.Tmp$NeverHappen,
			...TypeDeclarationPointcuts.StandardTypeChildAcceptTokenIds)
		.TakeLBraceAs(TokenId.ClassBody)
		.EndWithSemicolon()
		.CloseOnChildWithTokenClosed(TokenId.ClassBody),
	[TokenId.EnumClassDeclaration]: $
		.AcceptTokenIdsAsChild(
			TokenId.Tmp$NeverHappen,
			...TypeDeclarationPointcuts.StandardTypeChildAcceptTokenIds)
		.TakeLBraceAs(TokenId.ClassBody)
		.EndWithSemicolon()
		.CloseOnChildWithTokenClosed(TokenId.ClassBody),
	[TokenId.RecordClassDeclaration]: $
		.AcceptTokenIdsAsChild(
			TokenId.Tmp$NeverHappen,
			...TypeDeclarationPointcuts.StandardTypeChildAcceptTokenIds)
		.TakeLBraceAs(TokenId.ClassBody)
		.EndWithSemicolon()
		.CloseOnChildWithTokenClosed(TokenId.ClassBody),
	[TokenId.TraitClassDeclaration]: $
		.AcceptTokenIdsAsChild(
			TokenId.Tmp$NeverHappen,
			...TypeDeclarationPointcuts.StandardTypeChildAcceptTokenIds)
		.TakeLBraceAs(TokenId.ClassBody)
		.EndWithSemicolon()
		.CloseOnChildWithTokenClosed(TokenId.ClassBody),
	[TokenId.ClassBody]: $.EndWithToken(TokenId.RBrace),
	[TokenId.StaticBlockDeclaration]: $
		.AcceptTokenIdsAsChild(TokenId.StaticBlockBody)
		.TakeLBraceAs(TokenId.StaticBlockBody)
		.EndWithSemicolon()
		.CloseOnChildWithTokenClosed(TokenId.StaticBlockBody),
	[TokenId.StaticBlockBody]: $.EndWithToken(TokenId.RBrace),
	[TokenId.ConstructorDeclaration]: $
		.TakeLBraceAs(TokenId.ConstructorBody)
		.EndWithSemicolon()
		.CloseOnChildWithTokenClosed(TokenId.ConstructorBody),
	[TokenId.ConstructorBody]: $.EndWithToken(TokenId.RBrace),
	[TokenId.MethodDeclaration]: $
		.TakeLBraceAs(TokenId.MethodBody)
		.EndWithSemicolon()
		.CloseOnChildWithTokenClosed(TokenId.MethodBody),
	[TokenId.MethodBody]: $.EndWithToken(TokenId.RBrace),
	[TokenId.FieldDeclaration]: $.EndWithSemicolon(),
	[TokenId.AnnotationDeclaration]: $
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
	[TokenId.SynchronizedBlockDeclaration]: $
		.AcceptTokenIdsAsChild(TokenId.ParenBlock, TokenId.SynchronizedBlockBody)
		.TakeLBraceAs(TokenId.SynchronizedBlockBody)
		.EndWithSemicolon()
		.CloseOnChildWithTokenClosed(TokenId.SynchronizedBlockBody),
	[TokenId.SynchronizedBlockBody]: $.EndWithToken(TokenId.RBrace),
	[TokenId.IfDeclaration]: $
		.AcceptTokenIdsAsChild(TokenId.IfIfDeclaration, TokenId.IfElseIfDeclaration, TokenId.IfElseDeclaration)
		.EndWithSemicolon(),
	[TokenId.IfIfDeclaration]: $
		.AcceptTokenIdsAsChild(TokenId.ParenBlock, TokenId.IfIfBody)
		.TakeLBraceAs(TokenId.IfIfBody)
		.EndWithSemicolon()
		.CloseOnChildWithTokenClosed(TokenId.IfIfBody),
	[TokenId.IfIfBody]: $.EndWithToken(TokenId.RBrace),
	[TokenId.IfElseIfDeclaration]: $
		.AcceptTokenIdsAsChild(TokenId.ParenBlock, TokenId.IfElseIfBody)
		.TakeLBraceAs(TokenId.IfElseIfBody)
		.EndWithSemicolon()
		.CloseOnChildWithTokenClosed(TokenId.IfElseIfBody),
	[TokenId.IfElseIfBody]: $.EndWithToken(TokenId.RBrace),
	[TokenId.IfElseDeclaration]: $
		.AcceptTokenIdsAsChild(TokenId.IF, TokenId.IfElseBody)
		.TakeLBraceAs(TokenId.IfElseBody)
		.EndWithSemicolon()
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		.OnChildAppended(IfElseDeclarationPointcuts.onChildAppended)
		.CloseOnChildWithTokenClosed(TokenId.IfElseBody),
	[TokenId.IfElseBody]: $.EndWithToken(TokenId.RBrace),
	[TokenId.SwitchDeclaration]: $
		.AcceptTokenIdsAsChild(
			TokenId.ParenBlock, TokenId.SwitchBody,
			TokenId.SwitchCaseDeclaration, TokenId.SwitchDefaultDeclaration)
		.TakeLBraceAs(TokenId.SwitchBody)
		.EndWithSemicolon()
		.CloseOnChildWithTokenClosed(TokenId.SwitchBody),
	[TokenId.SwitchBody]: $.EndWithToken(TokenId.RBrace),
	[TokenId.SwitchCaseDeclaration]: $
		.RejectTokenIdsAsChild(TokenId.SwitchCaseDeclaration, TokenId.SwitchDefaultDeclaration,
			// any legitimate right brace will be received by the block initiated by the left brace.
			// therefore, an independent right brace must mark the end of the switch body.
			TokenId.RBrace)
		.EndWithSemicolon(),
	[TokenId.SwitchDefaultDeclaration]: $
		.RejectTokenIdsAsChild(TokenId.SwitchCaseDeclaration, TokenId.SwitchDefaultDeclaration,
			// any legitimate right brace will be received by the block initiated by the left brace.
			// therefore, an independent right brace must mark the end of the switch body.
			TokenId.RBrace)
		.EndWithSemicolon(),
	[TokenId.WhileDeclaration]: $
		.AcceptTokenIdsAsChild(TokenId.ParenBlock, TokenId.WhileBody)
		.TakeLBraceAs(TokenId.WhileBody)
		.EndWithSemicolon()
		.CloseOnChildWithTokenClosed(TokenId.WhileBody),
	[TokenId.WhileBody]: $.EndWithToken(TokenId.RBrace),
	[TokenId.DoWhileDeclaration]: $
		.AcceptTokenIdsAsChild(TokenId.DoWhileBody, TokenId.WHILE, TokenId.ParenBlock)
		.TakeLBraceAs(TokenId.DoWhileBody)
		.EndWithSemicolon()
		// TODO need to check the paren block is directly after while keyword?
		.CloseOnChildWithTokenClosed(TokenId.ParenBlock),
	[TokenId.DoWhileBody]: $.EndWithToken(TokenId.RBrace),
	[TokenId.ForDeclaration]: $
		.AcceptTokenIdsAsChild(TokenId.ParenBlock, TokenId.ForBody)
		.TakeLBraceAs(TokenId.ForBody)
		.EndWithSemicolon()
		.CloseOnChildWithTokenClosed(TokenId.ForBody),
	[TokenId.ForBody]: $.EndWithToken(TokenId.RBrace),
	[TokenId.TryDeclaration]: $
		.AcceptTokenIdsAsChild(TokenId.TryTryDeclaration, TokenId.TryCatchDeclaration, TokenId.TryFinallyDeclaration)
		.EndWithSemicolon(),
	[TokenId.TryTryDeclaration]: $
		.AcceptTokenIdsAsChild(TokenId.ParenBlock, TokenId.TryTryBody)
		.TakeLBraceAs(TokenId.TryTryBody)
		.EndWithSemicolon()
		.CloseOnChildWithTokenClosed(TokenId.TryTryBody),
	[TokenId.TryTryBody]: $.EndWithToken(TokenId.RBrace),
	[TokenId.TryCatchDeclaration]: $
		.AcceptTokenIdsAsChild(TokenId.ParenBlock, TokenId.TryCatchBody)
		.TakeLBraceAs(TokenId.TryCatchBody)
		.EndWithSemicolon()
		.CloseOnChildWithTokenClosed(TokenId.TryCatchBody),
	[TokenId.TryCatchBody]: $.EndWithToken(TokenId.RBrace),
	[TokenId.TryFinallyDeclaration]: $
		.AcceptTokenIdsAsChild(TokenId.TryFinallyBody)
		.TakeLBraceAs(TokenId.TryFinallyBody)
		.EndWithSemicolon()
		.CloseOnChildWithTokenClosed(TokenId.TryFinallyBody),
	[TokenId.TryFinallyBody]: $.EndWithToken(TokenId.RBrace),
	[TokenId.Closure]: $.EndWithToken(TokenId.RBrace),
	[TokenId.LambdaDeclaration]: 'TODO',
	[TokenId.LambdaBody]: $.EndWithToken(TokenId.RBrace),
	[TokenId.CodeBlock]: $.EndWithToken(TokenId.RBrace),
	[TokenId.ParenBlock]: $.EndWithToken(TokenId.RParen),
	[TokenId.AssertStatement]: $.EndWithSemicolon(),
	[TokenId.BreakStatement]: $.EndWithSemicolon(),
	[TokenId.ContinueStatement]: $.EndWithSemicolon(),
	[TokenId.DefStatement]: $.EndWithSemicolon(),
	[TokenId.VarStatement]: $.EndWithSemicolon(),
	[TokenId.NewExpression]: $.EndWithSemicolon(),
	[TokenId.ThrowStatement]: $.EndWithSemicolon(),
	[TokenId.ArrayInitializer]: $.EndWithToken(TokenId.RBrace),
	[TokenId.AtFieldPathElement]: $
		.AcceptTokenIdsAsChild(TokenId.Identifier, TokenId.StringLiteral)
		.EndWithSemicolon(),
	// temporary
	[TokenId.Tmp$CsscmfDeclaration]: $
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
