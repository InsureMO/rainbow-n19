import {AssertStatement} from './assert-statement';
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
import {TryDeclaration} from './try-declaration';
import {TypeDeclaration} from './type-declaration';
import {VarStatement} from './var-statement';
import {WhileDeclaration} from './while-declaration';

export const NodePointcuts = {
	Shared: SharedNodePointcuts,
	ImportDeclaration,
	PackageDeclaration,
	TypeDeclaration,
	ConstructorDeclaration, MethodDeclaration, FieldDeclaration,
	StaticBlockDeclaration, SynchronizedBlockDeclaration,

	SwitchDeclaration, DoWhileDeclaration, WhileDeclaration,
	IfDeclaration, ForDeclaration, TryDeclaration,

	AssertStatement,
	BreakStatement, ContinueStatement,
	DefStatement, VarStatement,

	NewExpression,

	LogicBlock
} as const;
