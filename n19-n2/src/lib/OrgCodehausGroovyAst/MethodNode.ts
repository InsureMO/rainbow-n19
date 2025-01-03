import {Modifier, ModifiersValue} from '../Java';
import {ClassNodeUtils, MethodNodeUtils} from '../OrgApacheGroovyAstTools';
import {BlockStatement, Statement} from '../OrgCodehausGroovyAstStmt';
import { GenericsUtils } from '../OrgCodehausGroovyAstTools';
import {Opcodes} from '../OrgObjectwebAsm';
import {Optional} from '../TsAddon';
import {AnnotatedNode} from './AnnotatedNode';
import {AstToTextHelper} from './AstToTextHelper';
import {ClassHelper} from './ClassHelper';
import {ClassNode} from './ClassNode';
import {ConstructorNode} from './ConstructorNode';
import {GenericsType} from './GenericsType';
import {Parameter} from './Parameter';
import {VariableScope} from './VariableScope';

export class MethodNode extends AnnotatedNode {
	private readonly _name: string;
	private _modifiers: ModifiersValue;
	private _syntheticPublic: boolean = false;
	private _returnType: ClassNode;
	private readonly _parameters: Array<Parameter> = [];
	private _hasDefaultValue: boolean = false;
	private _code: Statement;
	private _dynamicReturnType: boolean;
	private _variableScope: VariableScope;
	private readonly _exceptions: Array<ClassNode> = [];
	// type spec for generics
	private readonly _genericsTypes: Array<GenericsType> = [];
	// cached data
	private _typeDescriptor: string;

	// protected MethodNode() {
	//     this.name = null;
	//     this.exceptions = null;
	// }

	constructor(name: string, modifiers: ModifiersValue, returnType: ClassNode, parameters: Array<Parameter>, exceptions: Array<ClassNode>, code: Statement) {
		super();
		this._name = name;
		this._modifiers = modifiers;
		this._exceptions.push(...(exceptions ?? []));
		this._code = code;
		this.setReturnType(returnType);
		this.setParameters(parameters);
	}

	/**
	 * The type descriptor for a method node is a string containing the name of the method, its return type,
	 * and its parameter types in a canonical form. For simplicity, we use the format of a Java declaration
	 * without parameter names or generics.
	 */
	get typeDescriptor(): string {
		if (this._typeDescriptor == null) {
			this._typeDescriptor = MethodNodeUtils.methodDescriptor(this, false);
		}
		return this._typeDescriptor;
	}

	/**
	 * @deprecated use {@link org.apache.groovy.ast.tools.MethodNodeUtils#methodDescriptor(MethodNode, boolean)}
	 */
	getTypeDescriptor(pretty: boolean): string {
		return MethodNodeUtils.methodDescriptor(this, pretty);
	}

	private invalidateCachedData(): void {
		this._typeDescriptor = null;
	}

	get code(): Statement {
		return this._code;
	}

	setCode(code: Statement): void {
		this._code = code;
	}

	get modifiers(): ModifiersValue {
		return this._modifiers;
	}

	setModifiers(modifiers: ModifiersValue): void {
		this.invalidateCachedData();
		this._modifiers = modifiers;
		this.variableScope.setInStaticContext(this.isStatic);
	}

	get name(): string {
		return this._name;
	}

	get parameters(): Array<Parameter> {
		return this._parameters;
	}

	setParameters(parameters: Array<Parameter>): void {
		this.invalidateCachedData();
		const scope = new VariableScope();
		this._hasDefaultValue = false;
		this._parameters.length = 0;
		this._parameters.push(...(parameters ?? []));
		if (parameters != null && parameters.length > 0) {
			for (const para of parameters) {
				if (para.hasInitialExpression()) {
					this._hasDefaultValue = true;
				}
				para.setInStaticContext(this.isStatic);
				scope.putDeclaredVariable(para);
			}
		}
		this.setVariableScope(scope);
	}

	/**
	 * @return {@code true} if any parameter has a default value
	 */
	hasDefaultValue(): boolean {
		return this._hasDefaultValue;
	}

	get returnType(): ClassNode {
		return this._returnType;
	}

	setReturnType(returnType: ClassNode): void {
		this.invalidateCachedData();
		this._dynamicReturnType = this._dynamicReturnType || ClassHelper.isDynamicTyped(returnType);
		this._returnType = returnType ?? ClassHelper.OBJECT_TYPE;
	}

	get isDynamicReturnType(): boolean {
		return this._dynamicReturnType;
	}

	get isVoidMethod(): boolean {
		return ClassHelper.isPrimitiveVoid(this.returnType);
	}

	get variableScope(): VariableScope {
		return this._variableScope;
	}

	setVariableScope(variableScope: VariableScope): void {
		this._variableScope = variableScope;
		variableScope.setInStaticContext(this.isStatic);
	}

	get isAbstract(): boolean {
		return (this.modifiers & Opcodes.ACC_ABSTRACT) != 0;
	}

	get isDefault(): boolean {
		return (this.modifiers & (Opcodes.ACC_ABSTRACT | Opcodes.ACC_PUBLIC | Opcodes.ACC_STATIC)) == Opcodes.ACC_PUBLIC
			&& this.declaringClass?.isInterface === true;
	}

	get isFinal(): boolean {
		return (this.modifiers & Opcodes.ACC_FINAL) != 0;
	}

	get isStatic(): boolean {
		return (this.modifiers & Opcodes.ACC_STATIC) != 0;
	}

	get isPublic(): boolean {
		return (this.modifiers & Opcodes.ACC_PUBLIC) != 0;
	}

	get isPrivate(): boolean {
		return (this.modifiers & Opcodes.ACC_PRIVATE) != 0;
	}

	get isProtected(): boolean {
		return (this.modifiers & Opcodes.ACC_PROTECTED) != 0;
	}

	get isPackageScope(): boolean {
		return (this.modifiers & (Opcodes.ACC_PUBLIC | Opcodes.ACC_PRIVATE | Opcodes.ACC_PROTECTED)) == 0;
	}

	get exceptions(): Array<ClassNode> {
		return this._exceptions;
	}

	get firstStatement(): Optional<Statement> {
		if (this.code == null) {
			return null;
		}
		let first = this.code;
		while (first instanceof BlockStatement) {
			const list = first.statements;
			if (list.length === 0) {
				first = null;
			} else {
				first = list[0];
			}
		}
		return first;
	}

	get genericsTypes(): Array<GenericsType> {
		return this._genericsTypes;
	}

	setGenericsTypes(genericsTypes: Array<GenericsType>): void {
		this.invalidateCachedData();
		this._genericsTypes.length = 0;
		this._genericsTypes.push(...(genericsTypes ?? []));
	}

	/**
	 * @return {@code true} if annotation method has a default value
	 */
	hasAnnotationDefault(): boolean {
		return this.getNodeMetaData('org.codehaus.groovy.ast.MethodNode.hasDefaultValue') === true;
	}

	setAnnotationDefault(hasDefaultValue: boolean): void {
		if (hasDefaultValue) {
			this.putNodeMetaData('org.codehaus.groovy.ast.MethodNode.hasDefaultValue', true);
		} else {
			this.removeNodeMetaData('org.codehaus.groovy.ast.MethodNode.hasDefaultValue');
		}
	}

	/**
	 * @return {@code true} if this method is the run method from a script
	 */
	get isScriptBody(): boolean {
		return this.getNodeMetaData('org.codehaus.groovy.ast.MethodNode.isScriptBody') === true;
	}

	/**
	 * Sets the flag for this method to indicate it is a script body implementation.
	 *
	 * @see ModuleNode#createStatementsClass()
	 */
	setIsScriptBody(): void {
		this.setNodeMetaData('org.codehaus.groovy.ast.MethodNode.isScriptBody', true);
	}

	get isStaticConstructor(): boolean {
		return '<clinit>' === this.name;
	}

	/**
	 * @since 4.0.0
	 */
	get isConstructor(): boolean {
		return '<init>' === this.name;
	}

	/**
	 * Indicates that this method has been "promoted" to by
	 * Groovy when in fact there was no modifier explicitly
	 * in the source code. I.e. it remembers that it has applied
	 * Groovy's "methods by default" rule. This property is
	 * typically only of interest to AST transform writers.
	 *
	 * @return {@code true} if this class is but had no explicit modifier
	 */
	get isSyntheticPublic(): boolean {
		return this._syntheticPublic;
	}

	setSyntheticPublic(syntheticPublic: boolean): void {
		this._syntheticPublic = syntheticPublic;
	}

	get text(): string {
		const mask = this instanceof ConstructorNode ? Modifier.constructorModifiers() : Modifier.methodModifiers();
		let name = this.name;
		if (name.indexOf(' ') != -1) { // GROOVY-10417
			name = '"' + name + '"';
		}
		return AstToTextHelper.getModifiersText(this.modifiers & mask) +
			' ' +
			GenericsUtils.toGenericTypesString(this.genericsTypes) +
			AstToTextHelper.getClassText(this.returnType) +
			' ' +
			name +
			'(' +
			AstToTextHelper.getParametersText(this.parameters) +
			')' +
			AstToTextHelper.getThrowsClauseText(this.exceptions) +
			' { ... }';
	}

	toString(): string {
		const declaringClass = this.declaringClass;
		return super.toString() + '[' + MethodNodeUtils.methodDescriptor(this, true) + (declaringClass == null ? '' : ' from ' + ClassNodeUtils.formatTypeName(declaringClass)) + ']';
	}
}
