import {ConstructorDeclaration} from './constructor-declaration';
import {FieldDeclaration} from './field-declaration';
import {ImportDeclaration} from './import-declaration';
import {LogicBlock} from './logic-block';
import {MethodDeclaration} from './method-declaration';
import {PackageDeclaration} from './package-declaration';
import {SharedNodePointcut} from './shared';
import {StaticBlockDeclaration} from './static-block-declaration';
import {SynchronizedBlockDeclaration} from './synchronized-block-declaration';
import {TypeDeclaration} from './type-declaration';

export const NodePointcuts = {
	Shared: SharedNodePointcut,
	ImportDeclaration,
	PackageDeclaration,
	TypeDeclaration, StaticBlockDeclaration,
	ConstructorDeclaration, MethodDeclaration, FieldDeclaration,
	SynchronizedBlockDeclaration,
	LogicBlock
} as const;
