import {GroovyAstNode} from '../../node';
import {TokenId} from '../../tokens';
import {AnnotationDeclaration} from './annotation-declaration';
import {AssertStatement} from './assert-statement';
import {AtFieldPathElement} from './at-field-path-element';
import {BreakStatement} from './break-statement';
import {ConstructorDeclaration} from './constructor-declaration';
import {ContinueStatement} from './continue-statement';
import {DefStatement} from './def-statement';
import {DoWhileDeclaration} from './do-while-declaration';
import {FieldDeclaration} from './field-declaration';
import {ForDeclaration} from './for-declaration';
import {IfDeclaration} from './if-declaration';
import {ImportDeclaration} from './import-declaration';
import {LogicBlock} from './logic-block';
import {MethodDeclaration} from './method-declaration';
import {NewExpression} from './new-expression';
import {PackageDeclaration} from './package-declaration';
import {SharedNodePointcuts} from './shared';
import {StaticBlockDeclaration} from './static-block-declaration';
import {SwitchDeclaration} from './switch-declaration';
import {SynchronizedBlockDeclaration} from './synchronized-block-declaration';
import {ThrowStatement} from './throw-statement';
import {TryDeclaration} from './try-declaration';
import {TypeDeclaration} from './type-declaration';
import {VarStatement} from './var-statement';
import {WhileDeclaration} from './while-declaration';

export const NodePointcuts = {
	Shared: SharedNodePointcuts,
	ImportDeclaration,
	PackageDeclaration,
	AnnotationDeclaration,
	TypeDeclaration,
	ConstructorDeclaration, MethodDeclaration, FieldDeclaration,
	StaticBlockDeclaration, SynchronizedBlockDeclaration,

	SwitchDeclaration, DoWhileDeclaration, WhileDeclaration,
	IfDeclaration, ForDeclaration, TryDeclaration,

	AssertStatement,
	BreakStatement, ContinueStatement,
	DefStatement, VarStatement, ThrowStatement,

	NewExpression,

	AtFieldPathElement,

	LogicBlock,

	Extras: {
		[TokenId.ImportDeclaration]: ImportDeclaration.extra,
		[TokenId.PackageDeclaration]: PackageDeclaration.extra,

		[TokenId.AnnotationDeclaration]: AnnotationDeclaration.extra,

		[TokenId.Tmp$CsscmfDeclaration]: TypeDeclaration.Csscmf.extra,
		[TokenId.ClassDeclaration]: TypeDeclaration.Class.extra,
		[TokenId.InterfaceDeclaration]: TypeDeclaration.Interface.extra,
		[TokenId.AtInterfaceClassDeclaration]: TypeDeclaration.AtInterface.extra,
		[TokenId.EnumClassDeclaration]: TypeDeclaration.Enum.extra,
		[TokenId.RecordClassDeclaration]: TypeDeclaration.Record.extra,
		[TokenId.TraitClassDeclaration]: TypeDeclaration.Trait.extra,
		[TokenId.ClassBody]: LogicBlock.Brace.extra,

		[TokenId.ConstructorDeclaration]: ConstructorDeclaration.extra,
		[TokenId.ConstructorBody]: LogicBlock.Brace.extra,
		[TokenId.MethodDeclaration]: MethodDeclaration.extra,
		[TokenId.MethodBody]: LogicBlock.Brace.extra,
		[TokenId.FieldDeclaration]: FieldDeclaration.extra,

		[TokenId.StaticBlockDeclaration]: StaticBlockDeclaration.extra,
		[TokenId.StaticBlockBody]: LogicBlock.Brace.extra,
		[TokenId.SynchronizedBlockDeclaration]: SynchronizedBlockDeclaration.extra,
		[TokenId.SynchronizedBlockBody]: LogicBlock.Brace.extra,

		[TokenId.SwitchDeclaration]: SwitchDeclaration.extra,
		[TokenId.SwitchBody]: LogicBlock.Brace.extra,
		[TokenId.SwitchCaseDeclaration]: SwitchDeclaration.Case.extra,
		[TokenId.SwitchDefaultDeclaration]: SwitchDeclaration.Default.extra,
		[TokenId.DoWhileDeclaration]: DoWhileDeclaration.extra,
		[TokenId.DoWhileBody]: LogicBlock.Brace.extra,
		[TokenId.WhileDeclaration]: WhileDeclaration.extra,
		[TokenId.WhileBody]: LogicBlock.Brace.extra,
		[TokenId.IfDeclaration]: IfDeclaration.extra,
		[TokenId.IfIfDeclaration]: IfDeclaration.If.extra,
		[TokenId.IfIfBody]: LogicBlock.Brace.extra,
		[TokenId.IfElseIfDeclaration]: IfDeclaration.ElseIf.extra,
		[TokenId.IfElseIfBody]: LogicBlock.Brace.extra,
		[TokenId.IfElseDeclaration]: IfDeclaration.Else.extra,
		[TokenId.IfElseBody]: LogicBlock.Brace.extra,
		[TokenId.ForDeclaration]: ForDeclaration.extra,
		[TokenId.ForBody]: LogicBlock.Brace.extra,
		[TokenId.TryDeclaration]: TryDeclaration.extra,
		[TokenId.TryTryDeclaration]: TryDeclaration.Try.extra,
		[TokenId.TryTryBody]: LogicBlock.Brace.extra,
		[TokenId.TryCatchDeclaration]: TryDeclaration.Catch.extra,
		[TokenId.TryCatchBody]: LogicBlock.Brace.extra,
		[TokenId.TryFinallyDeclaration]: TryDeclaration.Finally.extra,
		[TokenId.TryFinallyBody]: LogicBlock.Brace.extra,

		[TokenId.AssertStatement]: AssertStatement.extra,
		[TokenId.BreakStatement]: BreakStatement.extra,
		[TokenId.ContinueStatement]: ContinueStatement.extra,

		[TokenId.DefStatement]: DefStatement.extra,
		[TokenId.VarStatement]: VarStatement.extra,

		[TokenId.ThrowStatement]: ThrowStatement.extra,

		[TokenId.NewExpression]: NewExpression.extra,

		[TokenId.AtFieldPathElement]: AtFieldPathElement.extra,

		[TokenId.CodeBlock]: LogicBlock.Brace.extra,
		[TokenId.ParenBlock]: LogicBlock.Paren.extra
	} as Readonly<Record<TokenId, (node: GroovyAstNode) => void>>
} as const;

export * from './neaf';
