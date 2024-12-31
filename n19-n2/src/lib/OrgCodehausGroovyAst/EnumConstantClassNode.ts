import {ModifiersValue} from '../Java';
import {Opcodes} from '../OrgObjectwebAsm';
import {ClassNode} from './ClassNode';
import {InnerClassNode} from './InnerClassNode';

export class EnumConstantClassNode extends InnerClassNode {
	constructor(outerClass: ClassNode, name: string, superClass: ClassNode, modifiers?: ModifiersValue) {
		super(outerClass, name, modifiers ?? (Opcodes.ACC_ENUM | Opcodes.ACC_FINAL), superClass);
	}
}
