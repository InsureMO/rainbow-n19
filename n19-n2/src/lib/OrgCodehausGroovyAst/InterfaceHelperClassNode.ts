import {ModifiersValue} from '../Java';
import {ClassHelper} from './ClassHelper';
import {ClassNode} from './ClassNode';
import {InnerClassNode} from './InnerClassNode';
import {MixinNode} from './MixinNode';

export class InterfaceHelperClassNode extends InnerClassNode {
	private readonly _callSites: Array<string> = [];

	/**
	 * @param outerClass
	 * @param name is the full name of the class
	 * @param modifiers the modifiers, @see org.objectweb.asm.Opcodes
	 * @param superClass the base class name - use "java.lang.Object" if no direct base class
	 * @param callSites list of callsites used in the interface
	 */
	constructor(outerClass: ClassNode, name: string, modifiers: ModifiersValue, superClass: ClassNode, callSites: Array<string>) {
		super(outerClass, name, modifiers, superClass, ClassHelper.EMPTY_TYPE_ARRAY, MixinNode.EMPTY_ARRAY);
		this.setCallSites(callSites);
	}

	setCallSites(cs: Array<string>): void {
		this._callSites.length = 0;
		this._callSites.push(...(cs ?? []));
	}

	get callSites(): Array<string> {
		return this._callSites;
	}
}
