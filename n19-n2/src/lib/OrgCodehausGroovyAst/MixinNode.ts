import {ModifiersValue} from '../Java';
import {ClassHelper} from './ClassHelper';
import {ClassNode} from './ClassNode';

export class MixinNode extends ClassNode {
	static readonly EMPTY_ARRAY: Array<MixinNode> = [];

	/**
	 * @param name is the full name of the class
	 * @param modifiers the modifiers, @see org.objectweb.asm.Opcodes
	 * @param superType the base class name - use "java.lang.Object" if no direct base class
	 * @param interfaces
	 */
	constructor(name: string, modifiers: ModifiersValue, superType: ClassNode, interfaces?: Array<ClassNode>) {
		super(name, modifiers, superType, interfaces ?? ClassHelper.EMPTY_TYPE_ARRAY, MixinNode.EMPTY_ARRAY);
	}
}
