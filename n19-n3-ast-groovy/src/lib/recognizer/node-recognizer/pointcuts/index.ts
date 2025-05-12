import {ConstructorDeclaration} from './constructor-declaration';
import {FieldDeclaration} from './field-declaration';
import {ImportDeclaration} from './import-declaration';
import {LogicBlock} from './logic-block';
import {MethodDeclaration} from './method-declaration';
import {PackageDeclaration} from './package-declaration';
import {SharedNodePointcuts} from './shared';
import {StaticBlockDeclaration} from './static-block-declaration';
import {SwitchDeclaration} from './switch-declaration';
import {SynchronizedBlockDeclaration} from './synchronized-block-declaration';
import {TypeDeclaration} from './type-declaration';

export const NodePointcuts = {
	Shared: SharedNodePointcuts,
	ImportDeclaration,
	PackageDeclaration,
	TypeDeclaration,
	ConstructorDeclaration, MethodDeclaration, FieldDeclaration,
	StaticBlockDeclaration, SynchronizedBlockDeclaration,

	SwitchDeclaration,
	LogicBlock
} as const;
