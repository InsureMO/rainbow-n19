import {ModifiersValue} from '../Java';
import {ClassHelper} from './ClassHelper';
import {ClassNode} from './ClassNode';
import {FieldNode} from './FieldNode';
import {MixinNode} from './MixinNode';
import {VariableScope} from './VariableScope';

export class InnerClassNode extends ClassNode {
	private readonly _outerClass: ClassNode;
	private _scope: VariableScope;
	private _anonymous: boolean;

	/**
	 * @param outerClass
	 * @param name is the full name of the class
	 * @param modifiers the modifiers, @see org.objectweb.asm.Opcodes
	 * @param superClass the base class name - use "java.lang.Object" if no direct base class
	 * @param interfaces
	 * @param mixins
	 */
	constructor(outerClass: ClassNode, name: string, modifiers: ModifiersValue, superClass: ClassNode, interfaces?: Array<ClassNode>, mixins?: Array<MixinNode>) {
		super(name, modifiers, superClass, interfaces ?? ClassHelper.EMPTY_TYPE_ARRAY, mixins ?? MixinNode.EMPTY_ARRAY);
		this._outerClass = outerClass;
		outerClass.addInnerClass(this);
	}

	get outerClass(): ClassNode {
		return this._outerClass;
	}

	get outerMostClass(): ClassNode {
		let outerClass = this.outerClass;
		while (outerClass instanceof InnerClassNode) {
			outerClass = outerClass.outerClass;
		}
		return outerClass;
	}

	/**
	 * @return the field node on the outer class or null if this is not an inner class
	 */

	getOuterField(name: string): FieldNode {
		return this.outerClass.getDeclaredField(name);
	}

	get variableScope(): VariableScope {
		return this._scope;
	}

	setVariableScope(scope: VariableScope) {
		this._scope = scope;
	}

	get isAnonymous(): boolean {
		return this._anonymous;
	}

	setAnonymous(anonymous: boolean): void {
		this._anonymous = anonymous;
	}
}
