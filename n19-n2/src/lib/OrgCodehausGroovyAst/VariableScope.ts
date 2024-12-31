import {Optional} from '../TsAddon';
import {ClassNode} from './ClassNode';
import {Variable} from './Variable';

export class VariableScope {
	private readonly _parent: Optional<VariableScope>;
	private _classScope: ClassNode;
	private _inStaticContext: boolean = false;
	private _declaredVariables: Map<string, Variable> = new Map();
	private _referencedLocalVariables: Map<string, Variable>;
	private _referencedClassVariables: Map<string, Variable>;

	constructor(parent?: VariableScope) {
		this._parent = parent;
	}

	get parent(): Optional<VariableScope> {
		return this._parent;
	}

	get isRoot(): boolean {
		return this.parent == null;
	}

	/**
	 * Non-null iff this scope corresponds to a class; as opposed to a method, "if" statement, block statement, etc.
	 */
	get classScope(): ClassNode {
		return this._classScope;
	}

	/**
	 * Returns true iff this scope corresponds to a class; as opposed to a method, "if" statement, block statement, etc.
	 */
	get isClassScope(): boolean {
		return (this.classScope != null);
	}

	setClassScope(classScope: ClassNode): void {
		this._classScope = classScope;
	}

	get isInStaticContext(): boolean {
		return this._inStaticContext;
	}

	setInStaticContext(inStaticContext: boolean): void {
		this._inStaticContext = inStaticContext;
	}

	getDeclaredVariable(name: string): Optional<Variable> {
		return this._declaredVariables.get(name);
	}

	getReferencedLocalVariable(name: string): Optional<Variable> {
		return this._referencedLocalVariables.get(name);
	}

	getReferencedClassVariable(name: string): Optional<Variable> {
		return this._referencedClassVariables.get(name);
	}

	isReferencedLocalVariable(name: string): boolean {
		return this._referencedLocalVariables.has(name);
	}

	isReferencedClassVariable(name: string): boolean {
		return this._referencedClassVariables.has(name);
	}

	/**
	 * Gets a map containing the variables declared in this scope. This map cannot be modified.
	 *
	 * @return a map containing the declared variable references
	 */
	get declaredVariables(): Map<string, Variable> {
		return this._declaredVariables;
	}

	protected get referencedLocalVariables(): Map<string, Variable> {
		return this._referencedLocalVariables;
	}

	get referencedLocalVariablesCount(): number {
		return this._referencedLocalVariables.size;
	}

	/**
	 * Gets a map containing the class variables referenced by this scope. This not can not be modified.
	 *
	 * @return a map containing the class variable references
	 */
	get referencedClassVariables(): Map<string, Variable> {
		return this._referencedClassVariables;
	}

	/**
	 * Gets an iterator for the declared class variables. The remove operation is not supported.
	 *
	 * @return an iterator for the declared variables
	 */
	get declaredVariablesIterator(): IterableIterator<Variable> {
		return this.declaredVariables.values();
	}

	/**
	 * Gets an iterator for the referenced local variables. The remove operation *is* supported.
	 *
	 * @return an iterator for the referenced local variables
	 */
	getReferencedLocalVariablesIterator(): IterableIterator<Variable> {
		return this.referencedLocalVariables.values();
	}

	/**
	 * Gets an iterator for the referenced class variables. The remove operation is not supported.
	 *
	 * @return an iterator for the referenced class variables
	 */
	getReferencedClassVariablesIterator(): IterableIterator<Variable> {
		return this.referencedClassVariables.values();
	}

	putDeclaredVariable(variable: Variable): void {
		this._declaredVariables.set(variable.name, variable);
	}

	putReferencedLocalVariable(variable: Variable): void {
		this._referencedLocalVariables.set(variable.name, variable);
	}

	putReferencedClassVariable(variable: Variable): void {
		this._referencedClassVariables.set(variable.name, variable);
	}

	removeReferencedClassVariable(name: string): Optional<Variable> {
		if (this.referencedClassVariables.size === 0) {
			return null;
		} else {
			const exists = this.referencedClassVariables.get(name);
			this.referencedClassVariables.delete(name);
			return exists;
		}
	}

	copy(): VariableScope {
		const that = new VariableScope(this.parent);
		that._classScope = this.classScope;
		that._inStaticContext = this.isInStaticContext;
		if (this.declaredVariables.size !== 0) {
			that._declaredVariables = new Map(this.declaredVariables);
		}
		if (this.referencedLocalVariables.size !== 0) {
			that._referencedLocalVariables = new Map(this.referencedLocalVariables);
		}
		if (this.referencedClassVariables.size !== 0) {
			that._referencedClassVariables = new Map(this.referencedClassVariables);
		}
		return that;
	}
}
