import {IClass, ModifiersValue} from '../Java';
import {ClassNodeUtils, MethodNodeUtils} from '../OrgApacheGroovyAstTools';
import {GroovyBugError} from '../OrgCodehausGroovy';
import {BinaryExpression, Expression, FieldExpression, TupleExpression} from '../OrgCodehausGroovyAstExpr';
import {BlockStatement, ExpressionStatement, Statement} from '../OrgCodehausGroovyAstStmt';
import {ParameterUtils} from '../OrgCodehausGroovyAstTools';
import {CompilePhase} from '../OrgCodehausGroovyControl';
import {Opcodes} from '../OrgObjectwebAsm';
import {Optional} from '../TsAddon';
import {AnnotatedNode} from './AnnotatedNode';
import {AnnotationNode} from './AnnotationNode';
import {ASTNode} from './ASTNode';
import {ClassHelper} from './ClassHelper';
import {CompileUnit} from './CompileUnit';
import {ConstructorNode} from './ConstructorNode';
import {FieldNode} from './FieldNode';
import {GenericsType} from './GenericsType';
import {GroovyClassVisitor} from './GroovyClassVisitor';
import {InnerClassNode} from './InnerClassNode';
import {MethodNode} from './MethodNode';
import {MixinNode} from './MixinNode';
import {ModuleNode} from './ModuleNode';
import {PackageNode} from './PackageNode';
import {Parameter} from './Parameter';
import {PropertyNode} from './PropertyNode';
import {RecordComponentNode} from './RecordComponentNode';

class MapOfLists {
	map: Map<any, Array<MethodNode>>;

	get(key: any): Array<MethodNode> {
		if (this.map == null) {
			return [];
		} else {
			return this.map.get(key);
		}
	}

	put(key: any, value: MethodNode): void {
		if (this.map == null) {
			this.map = new Map();
		}
		if (!this.map.has(key)) {
			this.map.set(key, [value]);
		}
	}

	remove(key: any, value: MethodNode): void {
		const nodes = this.map.get(key);
		if (nodes != null) {
			const index = nodes.indexOf(value);
			if (index !== -1) {
				nodes.splice(index, 1);
			}
		}
	}
}

export class ClassNode extends AnnotatedNode {
	static readonly EMPTY_ARRAY: Array<ClassNode> = [];
	static readonly THIS: ClassNode = new ClassNode(Object.class);
	static readonly SUPER: ClassNode = new ClassNode(Object.class);

	// noinspection TypeScriptFieldCanBeMadeReadonly
	private _name: string;
	private _modifiers: ModifiersValue;
	private _syntheticPublic: boolean = false;
	private readonly _interfaces: Array<ClassNode> = [];
	private readonly _mixins: Array<MixinNode>;
	private readonly _objectInitializers: Array<Statement> = [];
	private readonly _constructors: Array<ConstructorNode> = [];
	private readonly _methods: MapOfLists;
	private readonly _methodsList: Array<MethodNode> = [];
	private readonly _fields: Array<FieldNode> = [];
	private readonly _properties: Array<PropertyNode> = [];
	private readonly _fieldIndex: Map<string, FieldNode> = new Map();
	private _module: ModuleNode;
	private _compileUnit: CompileUnit;
	private _staticClass: boolean = false;
	private _scriptBody: boolean = false;
	private _script: boolean = false;
	private _superclass: ClassNode;
	private _isPrimaryNode: boolean = false;
	private readonly _innerClasses: Array<InnerClassNode> = [];
	private readonly _permittedSubclasses: Array<ClassNode> = [];
	private readonly _typeAnnotations: Array<AnnotationNode> = [];
	private readonly _recordComponents: Array<RecordComponentNode> = [];
	/** The AST Transformations to be applied during compilation. */
	private readonly _transformInstances: Map<CompilePhase, Map<IClass, Set<ASTNode>>> = (() => {
		const map = new Map<CompilePhase, Map<IClass, Set<ASTNode>>>();
		for (const phase of Object.values(CompilePhase)) {
			this._transformInstances.set(phase as CompilePhase, new Map<IClass, Set<ASTNode>>());
		}
		return map;
	})();
	// clazz!=null when resolved
	protected _clazz: IClass;
	// only false when this classNode is constructed from a class
	private _lazyInitDone: boolean = true;
	// not null if the ClassNode is an array
	private _componentType: ClassNode;
	// if not null this instance is handled as proxy
	// for the redirect
	private _redirect: ClassNode;
	// flag if the classes or its members are annotated
	private _annotated: boolean = false;
	// type spec for generics
	private readonly _genericsTypes: Array<GenericsType> = [];
	private _usesGenerics: boolean = false;
	// if set to true the name getGenericsTypes consists
	// of 1 element describing the name of the placeholder
	private _placeholder: boolean = false;
	/** Tracks the enclosing method for local inner classes. */
	private _enclosingMethod: MethodNode;

	/** Returns the {@code ClassNode} this node is a proxy for or the node itself. */
	redirect(): ClassNode {
		return this._redirect == null ? this : this._redirect.redirect();
	}

	get myRedirect(): Optional<ClassNode> {
		return this._redirect;
	}

	get isRedirectNode(): boolean {
		return this._redirect != null;
	}

	get isPrimaryNode(): boolean {
		return this._isPrimaryNode;
	}

	/**
	 * Sets this instance as proxy for the given {@code ClassNode}.
	 *
	 * @param node the class to redirect to; if {@code null} the redirect is removed
	 */
	setRedirect(node: ClassNode): void {
		if (this.isPrimaryNode) {
			throw new GroovyBugError('tried to set a redirect for a primary ClassNode (' + this.name + '->' + node.name + ').');
		}
		if (node != null && !this.isGenericsPlaceHolder) {
			node = node.redirect();
		}
		if (node == this) {
			return;
		}
		this._redirect = node;
	}

	setPrimaryNode(isPrimaryNode: boolean): void {
		this._isPrimaryNode = isPrimaryNode;
	}

	/**
	 * Returns a {@code ClassNode} representing an array of the type represented
	 * by this.
	 */
	makeArray(): ClassNode {
		let node: ClassNode;
		if (this.isRedirectNode) {
			node = this.myRedirect.makeArray();
			node._componentType = this;
		} else if (this.typeClass != null) {
			const type: IClass = Array.newInstance(this.typeClass, 0).getClass();
			// don't use the ClassHelper here!
			node = ClassNode.createArrayClassNode(this, type);
		} else {
			node = ClassNode.createArrayClassNode(this);
		}
		return node;
	}

	/**
	 * @return {@code true} if this instance is a primary {@code ClassNode}
	 */
	get isPrimaryClassNode(): boolean {
		return this.redirect().isPrimaryNode || (this.componentType != null && this.componentType.isPrimaryClassNode);
	}

	private static createArrayClassNode(componentType: ClassNode, clazz?: IClass): ClassNode {
		let created: ClassNode;
		if (clazz != null) {
			created = new ClassNode(clazz);
			created._componentType = componentType;
		} else {
			// TODO why here use "x[]"?, if name is from class, should follow the name rule of class,
			//  which is "[I", "[Ljava.lang.String;", etc.
			created = new ClassNode(componentType.name + '[]', Opcodes.ACC_PUBLIC, ClassHelper.OBJECT_TYPE);
			created._componentType = componentType.redirect();
			created._isPrimaryNode = false;
		}

		return created;
	}

	constructor(nameOrClazz: string | IClass, modifiers?: ModifiersValue, superclass?: ClassNode, interfaces?: Array<ClassNode>, mixins?: Array<MixinNode>) {
		super();
		if (typeof nameOrClazz === 'string') {
			this._name = nameOrClazz;
			this._modifiers = modifiers;
			this._superclass = superclass;
			this._interfaces = interfaces ?? ClassNode.EMPTY_ARRAY;
			this._mixins = mixins ?? MixinNode.EMPTY_ARRAY;
			this._isPrimaryNode = true;
			this._clazz = null;
			this._lazyInitDone = true;
		} else {
			this._name = nameOrClazz.name;
			this._modifiers = nameOrClazz.modifiers;
			this._superclass = null;
			this._interfaces = ClassNode.EMPTY_ARRAY;
			this._mixins = MixinNode.EMPTY_ARRAY;
			this._isPrimaryNode = false;
			this._clazz = nameOrClazz;
			this._lazyInitDone = false;
		}
		if (this.superclass != null) {
			this._usesGenerics = this.superclass.isUsingGenerics;
		}
		if (!this._usesGenerics && this.interfaces != null) {
			this._usesGenerics = this.interfaces.some(interfaceClass => interfaceClass.isUsingGenerics);
		}
		this._methods = new MapOfLists();
		this._methodsList = [];
	}

	/**
	 * The complete class structure will be initialized only when really needed
	 * to avoid having too many objects during compilation.
	 */
	private lazyClassInit(): void {
		if (this._lazyInitDone) {
			return;
		}
		if (this.isRedirectNode) {
			throw new GroovyBugError('lazyClassInit called on a proxy ClassNode, that must not happen. ' +
				'A redirect() call is missing somewhere!');
		}
		VMPluginFactory.plugin.configureClassNode(this.compileUnit, this);
		this._lazyInitDone = true;
	}

	get enclosingMethod(): Optional<MethodNode> {
		return this.redirect()._enclosingMethod;
	}

	setEnclosingMethod(enclosingMethod: MethodNode): void {
		this.redirect()._enclosingMethod = enclosingMethod;
	}

	/**
	 * Indicates that this class has been "promoted" to by Groovy when in
	 * fact there was no modifier explicitly in the source code. That is,
	 * it remembers that it has applied Groovy's "classes by default" rule.
	 * This property is typically only of interest to AST transform writers.
	 *
	 * @return {@code true} if node is but had no explicit modifier
	 */
	get isSyntheticPublic(): boolean {
		return this._syntheticPublic;
	}

	setSyntheticPublic(syntheticPublic: boolean): void {
		this._syntheticPublic = syntheticPublic;
	}

	/**
	 * Sets the superclass of this {@code ClassNode}.
	 */
	setSuperclass(superclass: ClassNode): void {
		this.redirect()._superclass = superclass;
	}

	/**
	 * @return the fields associated with this {@code ClassNode}
	 */
	get fields(): Array<FieldNode> {
		if (this.isRedirectNode) {
			return this.myRedirect.fields;
		}
		this.lazyClassInit();
		return this._fields;
	}

	/**
	 * @return the interfaces implemented by this {@code ClassNode}
	 */
	get interfaces(): Array<ClassNode> {
		if (this.isRedirectNode) {
			return this.myRedirect.interfaces;
		}
		this.lazyClassInit();
		return this._interfaces;
	}

	setInterfaces(interfaces: Array<ClassNode>): void {
		if (this.isRedirectNode) {
			this.myRedirect.setInterfaces(interfaces);
		} else {
			this._interfaces.length = 0;
			this._interfaces.push(...(interfaces ?? []));
		}
	}

	/**
	 * @return permitted subclasses of sealed type, may initially be empty in early compiler phases
	 */
	get permittedSubclasses(): Array<ClassNode> {
		if (this.isRedirectNode) {
			return this.myRedirect.permittedSubclasses;
		}
		this.lazyClassInit();
		return this._permittedSubclasses;
	}

	setPermittedSubclasses(permittedSubclasses: Array<ClassNode>): void {
		if (this.isRedirectNode) {
			this.myRedirect.setPermittedSubclasses(permittedSubclasses);
		} else {
			this._permittedSubclasses.length = 0;
			this._permittedSubclasses.push(...(permittedSubclasses ?? []));
		}
	}

	/**
	 * @return the mixins associated with this {@code ClassNode}
	 */
	get mixins(): Array<MixinNode> {
		return this.redirect()._mixins;
	}

	setMixins(mixins: Array<MixinNode>): void {
		const exists = this.redirect()._mixins;
		exists.length = 0;
		exists.push(...(mixins ?? []));
	}

	/**
	 * @return the methods associated with this {@code ClassNode}
	 */
	get methods(): Array<MethodNode> {
		if (this.isRedirectNode) {
			return this.myRedirect.methods;
		}
		this.lazyClassInit();
		return this._methodsList;
	}

	/**
	 * @return the abstract methods associated with this {@code ClassNode}
	 */
	get abstractMethods(): Array<MethodNode> {
		return Array.from(this.declaredMethodsMap.values()).filter(node => node.isAbstract);
	}

	get allDeclaredMethods(): Array<MethodNode> {
		return Array.from(this.declaredMethodsMap.values());
	}

	get allInterfaces(): Set<ClassNode> {
		const result: Set<ClassNode> = new Set();
		if (this.isInterface) {
			result.add(this);
		}
		this.gatherAllInterfaces(result);
		// TODO FILTER RESULT, REMOVE DUPLICATION
		return result;
	}

	private gatherAllInterfaces(set: Set<ClassNode>): void {
		for (const interfaceClass of this.interfaces) {
			if (set.add(interfaceClass)) { // GROOVY-11036
				interfaceClass.gatherAllInterfaces(set);
			}
		}
	}

	get declaredMethodsMap(): Map<string, MethodNode> {
		const result: Map<string, MethodNode> = ClassNodeUtils.getDeclaredMethodsFromSuper(this);
		ClassNodeUtils.addDeclaredMethodsFromInterfaces(this, result);
		// add in the methods implemented in this class
		for (const method of this.methods) {
			result.set(method.typeDescriptor, method);
		}
		return result;
	}

	get name(): string {
		return this.redirect()._name;
	}

	get unresolvedName(): string {
		return this._name;
	}

	setName(name: string): string {
		return this.redirect()._name = name;
	}

	get modifiers(): ModifiersValue {
		return this.redirect()._modifiers;
	}

	setModifiers(modifiers: ModifiersValue): void {
		this.redirect()._modifiers = modifiers;
	}

	get properties(): Array<PropertyNode> {
		if (this.isRedirectNode) {
			return this.myRedirect.properties;
		}
		return this._properties;
	}

	get declaredConstructors(): Array<ConstructorNode> {
		if (this.isRedirectNode) {
			return this.myRedirect.declaredConstructors;
		}
		this.lazyClassInit();
		return this._constructors;
	}

	/**
	 * @return the constructor matching the given parameters or {@code null}
	 */
	getDeclaredConstructor(parameters: Array<Parameter>): Optional<ConstructorNode> {
		for (const constructor of this.declaredConstructors) {
			if (ParameterUtils.parametersEqual(constructor.parameters, parameters)) {
				return constructor;
			}
		}
		return (void 0);
	}

	removeConstructor(node: ConstructorNode): void {
		const index = this._constructors.findIndex(constructor => constructor.equals(node));
		if (index !== -1) {
			this._constructors.splice(index, 1);
		}
	}

	get module(): ModuleNode {
		return this.redirect()._module;
	}

	get package(): Optional<PackageNode> {
		return this.module?.package;
	}

	setModule(module: ModuleNode): void {
		this.redirect()._module = module;
		if (module != null) {
			this.redirect()._compileUnit = module.unit;
		}
	}

	addField(nameOrNode: string | FieldNode,
	         modifiers?: ModifiersValue,
	         type?: ClassNode,
	         initialValue?: Expression): FieldNode {
		if (typeof nameOrNode === 'string') {
			const node = new FieldNode(nameOrNode, modifiers, type, this.redirect(), initialValue);
			return this.doAddField(node, false);
		} else {
			return this.doAddField(nameOrNode, false);
		}
	}

	addFieldFirst(nameOrNode: string | FieldNode,
	              modifiers?: ModifiersValue,
	              type?: ClassNode,
	              initialValue?: Expression): FieldNode {
		if (typeof nameOrNode === 'string') {
			const node = new FieldNode(nameOrNode, modifiers, type, this.redirect(), initialValue);
			return this.doAddField(node, true);
		} else {
			return this.doAddField(nameOrNode, true);
		}
	}

	private doAddField(node: FieldNode, isFirst: boolean): FieldNode {
		const r = this.redirect();
		node.setDeclaringClass(r);
		node.setOwner(r);
		if (isFirst) {
			r._fields.unshift(node);
		} else {
			r._fields.push(node);
		}
		r._fieldIndex.set(node.name, node);
		return node;
	}

	get fieldIndex(): Map<string, FieldNode> {
		return this._fieldIndex;
	}

	addProperty(nameOrNode: string | PropertyNode,
	            modifiers?: ModifiersValue,
	            type?: ClassNode,
	            initialValueExpression?: Expression,
	            getterBlock?: Statement,
	            setterBlock?: Statement): PropertyNode {
		if (typeof nameOrNode === 'string') {
			for (const pn of this.properties) {
				if (pn.name === nameOrNode) {
					if (pn.initialExpression == null && initialValueExpression != null) {
						pn.field.setInitialValueExpression(initialValueExpression);
					}
					if (pn.getterBlock == null && getterBlock != null) {
						pn.setGetterBlock(getterBlock);
					}
					if (pn.setterBlock == null && setterBlock != null) {
						pn.setSetterBlock(setterBlock);
					}
					return pn;
				}
			}
			const node = new PropertyNode(nameOrNode, modifiers, getterBlock, setterBlock, type, this.redirect(), initialValueExpression);
			return this.addProperty(node);
		} else {
			nameOrNode.setDeclaringClass(this.redirect());
			this.addField(nameOrNode.field);
			this._properties.push(nameOrNode);
			return nameOrNode;
		}
	}

	hasProperty(name: string): boolean {
		return this.properties.some(property => property.name === name);
	}

	getProperty(name: string): Optional<PropertyNode> {
		return this.properties.find(property => property.name === name);
	}

	addConstructor(nodeOrModifiers: ConstructorNode | ModifiersValue,
	               parameters?: Array<Parameter>,
	               exceptions?: Array<ClassNode>,
	               code?: Statement): ConstructorNode {
		if (typeof nodeOrModifiers === 'number') {
			const node = new ConstructorNode(nodeOrModifiers, code, parameters, exceptions);
			return this.addConstructor(node);
		} else {
			const r = this.redirect();
			nodeOrModifiers.setDeclaringClass(r);
			r._constructors.push(nodeOrModifiers);
			return nodeOrModifiers;
		}
	}

	removeMethod(node: MethodNode): void {
		const r = this.redirect();
		if (r._methodsList.length !== 0) {
			const index = r._methodsList.findIndex(method => method.equals(node));
			if (index !== -1) {
				r._methodsList.splice(index, 1);
			}
		}
		r._methods.remove(node.name, node);
	}

	/**
	 * If a method with the given name and parameters is already defined then it is returned
	 * otherwise the given method is added to this node. This method is useful for
	 * default method adding like getProperty() or invokeMethod() where there may already
	 * be a method defined in a class and so the default implementations should not be added
	 * if already present.
	 */
	addMethod(nameOrNode: string | MethodNode,
	          modifiers?: ModifiersValue,
	          returnType?: ClassNode,
	          parameters?: Array<Parameter>,
	          exceptions?: Array<ClassNode>,
	          code?: Statement): MethodNode {
		if (typeof nameOrNode === 'string') {
			const other = this.getDeclaredMethod(nameOrNode, parameters);
			// don't add duplicate methods
			if (other != null) {
				return other;
			}
			const node = new MethodNode(nameOrNode, modifiers, returnType, parameters, exceptions, code);
			return this.addMethod(node);
		} else {
			const r = this.redirect();
			nameOrNode.setDeclaringClass(r);
			r._methodsList.push(nameOrNode);
			r._methods.put(nameOrNode.name, nameOrNode);
			return nameOrNode;
		}
	}

	/**
	 * @see #getDeclaredMethod(String, Parameter[])
	 */
	hasDeclaredMethod(name: string, parameters: Array<Parameter>): boolean {
		return this.getDeclaredMethod(name, parameters) != null;
	}

	/**
	 * @see #getMethod(String, Parameter[])
	 */
	hasMethod(name: string, parameters: Array<Parameter>): boolean {
		return this.getMethod(name, parameters) != null;
	}

	/**
	 * Adds a synthetic method as part of the compilation process.
	 */
	addSyntheticMethod(name: string,
	                   modifiers: ModifiersValue,
	                   returnType: ClassNode,
	                   parameters: Array<Parameter>,
	                   exceptions: Array<ClassNode>,
	                   code: Statement): MethodNode {
		const node = this.addMethod(name, modifiers | Opcodes.ACC_SYNTHETIC, returnType, parameters, exceptions, code);
		node.setSynthetic(true);
		return node;
	}

	addInterface(type: ClassNode): void {
		const interfaces = this.interfaces;
		for (const face of interfaces) {
			if (face.equals(type)) {
				return;
			}
		}
		this._interfaces.push(type);
	}

	equals(o: any): boolean {
		if (o == this) {
			return true;
		}
		if (!(o instanceof ClassNode)) {
			return false;
		}
		if (this.isRedirectNode) {
			return this.myRedirect.equals(o);
		}
		if (this.componentType != null) {
			return this.componentType.equals(o.componentType);
		}
		return o.text === this.text; // arrays could be "T[]" or "[LT;"
	}

	addMixin(mixin: MixinNode): void {
		// let's check if it already uses a mixin
		const mixins = this.mixins;
		let skip: boolean = false;
		for (const existing of mixins) {
			if (mixin.equals(existing)) {
				skip = true;
				break;
			}
		}
		if (!skip) {
			const exists = this.redirect()._mixins;
			exists.length = 0;
			exists.push(...[...mixins, mixin]);
		}
	}

	/**
	 * Finds a field matching the given name in this class.
	 *
	 * @param name the name of the field of interest
	 * @return the method matching the given name and parameters or null
	 */
	getDeclaredField(name: string): Optional<FieldNode> {
		if (this.isRedirectNode) {
			return this.myRedirect.getDeclaredField(name);
		}
		this.lazyClassInit();
		return this.fieldIndex?.get(name);
	}

	/**
	 * Finds a field matching the given name in this class or a parent class.
	 *
	 * @param name the name of the field of interest
	 * @return the method matching the given name and parameters or null
	 */
	getField(name: string): Optional<FieldNode> {
		let node: ClassNode = this;
		while (node != null) {
			const fn = node.getDeclaredField(name);
			if (fn != null) {
				return fn;
			}
			node = node.superclass;
		}
		return (void 0);
	}

	/**
	 * @return the field on the outer class or {@code null} if this is not an inner class
	 */
	getOuterField(name: string): Optional<FieldNode> {
		if (this.isRedirectNode) {
			return this.myRedirect.getOuterField(name);
		}
		return (void 0);
	}

	get outerClass(): Optional<ClassNode> {
		if (this.isRedirectNode) {
			return this.myRedirect.outerClass;
		}
		return (void 0);
	}

	get outerClasses(): Array<ClassNode> {
		let outer = this.outerClass;
		if (outer == null) {
			return [];
		}
		const result: Array<ClassNode> = [];
		do {
			result.push(outer);
		} while ((outer = outer.outerClass) != null);

		return result;
	}

	/**
	 * Adds a statement to the object initializer.
	 *
	 * @param statements the statement to be added
	 */
	addObjectInitializerStatements(statements: Statement): void {
		this._objectInitializers.push(statements);
	}

	get objectInitializerStatements(): Array<Statement> {
		return this._objectInitializers;
	}

	private getOrAddStaticConstructorNode(): MethodNode {
		let method: MethodNode;
		const classInitializer: string = '<clinit>';
		const declaredMethods = this.getDeclaredMethods(classInitializer);
		if (declaredMethods.length === 0) {
			method = this.addMethod(classInitializer, Opcodes.ACC_STATIC, ClassHelper.VOID_TYPE, Parameter.EMPTY_ARRAY, ClassNode.EMPTY_ARRAY, new BlockStatement());
			method.setSynthetic(true);
		} else {
			method = declaredMethods[0];
		}
		return method;
	}

	addStaticInitializerStatements(staticStatements: Array<Statement>, fieldInit: boolean): void {
		const method = this.getOrAddStaticConstructorNode();
		const block = MethodNodeUtils.getCodeAsBlock(method);

		// while anything inside a static initializer block is appended
		// we don't want to append in the case we have an initialization
		// expression of a static field. In that case we want to add
		// before the other statements
		if (!fieldInit) {
			block.addStatement(staticStatements);
		} else {
			const blockStatements = block.statements;
			staticStatements.push(...blockStatements);
			blockStatements.length = 0;
			blockStatements.push(...staticStatements);
		}
	}

	positionStmtsAfterEnumInitStmts(staticFieldStatements: Array<Statement>): void {
		const constructor = this.getOrAddStaticConstructorNode();
		const statement = constructor.code;
		if (statement instanceof BlockStatement) {
			const block = statement;
			// add given statements for explicitly declared static fields just after enum-special fields
			// are found - the $VALUES binary expression marks the end of such fields.
			const blockStatements = block.statements;
			[...block.statements].forEach(stmt => {
				if (stmt instanceof ExpressionStatement && stmt.expression instanceof BinaryExpression) {
					const bExp = stmt.expression;
					if (bExp.leftExpression instanceof FieldExpression) {
						const fExp = bExp.leftExpression;
						if (fExp.fieldName === '$VALUES') {
							const index = blockStatements.findIndex(statement => statement === stmt);
							blockStatements.splice(index, 0, ...staticFieldStatements);
						}
					}
				}
			});
		}
	}

	/**
	 * This method returns a list of all methods of the given name
	 * defined in the current class
	 * @return the method list
	 * @see #getMethods(String)
	 */
	getDeclaredMethods(name: string): Optional<Array<MethodNode>> {
		if (this.isRedirectNode) {
			return this.myRedirect.getDeclaredMethods(name);
		}
		this.lazyClassInit();
		return this._methods.get(name);
	}

	/**
	 * This method creates a list of all methods with this name of the
	 * current class and of all super classes
	 * @return the methods list
	 * @see #getDeclaredMethods(String)
	 */
	getMethods(name: string): Array<MethodNode> {
		const result: Array<MethodNode> = [];
		let node: ClassNode = this;
		while (node != null) {
			result.push(...node.getDeclaredMethods(name));
			node = node.superclass;
		}
		return result;
	}

	/**
	 * Finds a method matching the given name and parameters in this class.
	 *
	 * @return the method matching the given name and parameters or null
	 */
	getDeclaredMethod(name: string, parameters: Array<Parameter>): Optional<MethodNode> {
		for (const method of this.getDeclaredMethods(name)) {
			if (ParameterUtils.parametersEqual(method.parameters, parameters)) {
				return method;
			}
		}
		return (void 0);
	}

	/**
	 * Finds a method matching the given name and parameters in this class
	 * or any parent class.
	 *
	 * @return the method matching the given name and parameters or null
	 */
	getMethod(name: string, parameters: Array<Parameter>): Optional<MethodNode> {
		for (const method of this.getMethods(name)) {
			if (ParameterUtils.parametersEqual(method.parameters, parameters)) {
				return method;
			}
		}
		return (void 0);
	}

	/**
	 * @param type the ClassNode of interest
	 * @return true if this node is derived from the given ClassNode
	 */
	isDerivedFrom(type: ClassNode): boolean {
		if (ClassHelper.isPrimitiveVoid(this)) {
			return ClassHelper.isPrimitiveVoid(type);
		}
		if (ClassHelper.isObjectType(type)) {
			return true;
		}
		let node: ClassNode = this;
		while (node != null) {
			if (type.equals(node)) {
				return true;
			}
			node = node.superclass;
		}
		return false;
	}

	/**
	 * @return {@code true} if this type implements {@code GroovyObject}
	 */
	get isDerivedFromGroovyObject(): boolean {
		return this.implementsInterface(ClassHelper.GROOVY_OBJECT_TYPE);
	}

	/**
	 * @param classNodes the class nodes for the interfaces
	 * @return {@code true} if this type implements any of the given interfaces
	 */
	implementsAnyInterfaces(...classNodes: Array<ClassNode>): boolean {
		for (const classNode of classNodes) {
			if (this.implementsInterface(classNode)) {
				return true;
			}
		}
		return false;
	}

	/**
	 * @param classNode the class node for the interface
	 * @return {@code true} if this type implements the given interface
	 */
	implementsInterface(classNode: ClassNode): boolean {
		let node = this.redirect();
		do {
			if (node.declaresInterface(classNode)) {
				return true;
			}
			node = node.superclass;
		}
		while (node != null);

		return false;
	}

	/**
	 *
	 * @param classNodes the class nodes for the interfaces
	 * @return {@code true} if this type declares that it implements any of the
	 * given interfaces or if one of its interfaces extends directly/indirectly
	 * any of the given interfaces
	 */
	declaresAnyInterfaces(...classNodes: Array<ClassNode>): boolean {
		for (const classNode of classNodes) {
			if (this.declaresInterface(classNode)) {
				return true;
			}
		}
		return false;
	}

	/**
	 * @param classNode the class node for the interface
	 * @return {@code true} if this class declares that it implements the given
	 * interface or if one of its interfaces extends directly/indirectly the interface
	 *
	 * NOTE: Doesn't consider an interface to implement itself.
	 * I think this is intended to be called on ClassNodes representing
	 * classes, not interfaces.
	 *
	 * @see GeneralUtils#isOrImplements
	 */
	declaresInterface(classNode: ClassNode): boolean {
		const interfaces = this.interfaces;
		for (const face of interfaces) {
			if (face.equals(classNode)) {
				return true;
			}
		}
		for (const face of interfaces) {
			if (face.declaresInterface(classNode)) {
				return true;
			}
		}
		return false;
	}

	/**
	 * @return the {@code ClassNode} of the super class of this type
	 */
	get superclass(): Optional<ClassNode> {
		if (!this._lazyInitDone && !this.isResolved) {
			throw new GroovyBugError('ClassNode#getSuperClass for ' + this.name + ' called before class resolving');
		}
		let sn = this.redirect().getUnresolvedSuperclass();
		if (sn != null) {
			sn = sn.redirect();
		}
		return sn;
	}

	getUnresolvedSuperclass(useRedirect: boolean = true): Optional<ClassNode> {
		if (useRedirect) {
			if (this.isRedirectNode) {
				return this.myRedirect.getUnresolvedSuperclass(true);
			} else {
				this.lazyClassInit();
				return this._superclass;
			}
		} else {
			return this._superclass;
		}
	}

	setUnresolvedSuperClass(superclass: ClassNode): void {
		this._superclass = superclass;
	}

	getUnresolvedInterfaces(useRedirect: boolean = true): Array<ClassNode> {
		if (useRedirect) {
			if (this.isRedirectNode) {
				return this.myRedirect.getUnresolvedInterfaces(true);
			} else {
				this.lazyClassInit();
				return this._interfaces;
			}
		} else {
			return this._interfaces;
		}
	}

	get compileUnit(): CompileUnit {
		if (this.isRedirectNode) {
			return this.myRedirect.compileUnit;
		}
		if (this._compileUnit == null && this.module != null) {
			this._compileUnit = this.module.unit;
		}
		return this._compileUnit;
	}

	protected setCompileUnit(cu: CompileUnit): void {
		if (this.isRedirectNode) {
			this.myRedirect.setCompileUnit(cu);
		}
		if (this._compileUnit != null) {
			this._compileUnit = cu;
		}
	}

	get packageName(): Optional<string> {
		const idx = this.name.lastIndexOf('.');
		if (idx > 0) {
			return this.name.substring(0, idx);
		}
		return (void 0);
	}

	get nameWithoutPackage(): string {
		const idx = this.name.lastIndexOf('.');
		if (idx > 0) {
			return this.name.substring(idx + 1);
		}
		return this.name;
	}

	visitContents(visitor: GroovyClassVisitor): void {
		// now let's visit the contents of the class
		for (const pn of this.properties) {
			visitor.visitProperty(pn);
		}

		for (const fn of this.fields) {
			visitor.visitField(fn);
		}

		for (const cn of this.declaredConstructors) {
			visitor.visitConstructor(cn);
		}

		this.visitMethods(visitor);
	}

	private visitMethods(visitor: GroovyClassVisitor): void {
		// create snapshot of the method list to avoid ConcurrentModificationException
		const methodList = [...this.methods];
		for (const mn of methodList) {
			visitor.visitMethod(mn);
		}

		// visit the method nodes added while iterating,
		// e.g. synthetic method for constructor reference
		const newMethodList = this.methods;
		if (newMethodList.length > methodList.length) {
			// if the newly added method nodes found, visit them
			const changedMethodList = newMethodList.filter(method => {
				return !methodList.some(originMethod => originMethod.equals(method));
			});
			const changed = changedMethodList.length !== newMethodList.length;
			if (changed) {
				for (const mn of changedMethodList) {
					visitor.visitMethod(mn);
				}
			}
		}
	}

	getGetterMethod(getterName: string, searchSuperClasses: boolean = true): Optional<MethodNode> {
		let getterMethod: MethodNode = null;
		const booleanReturnOnly: boolean = getterName.startsWith('is');
		for (const method of this.getDeclaredMethods(getterName)) {
			if (method.name === getterName && method.parameters.length == 0
				&& (booleanReturnOnly ? ClassHelper.isPrimitiveBoolean(method.returnType) : !method.isVoidMethod)) {
				// GROOVY-7363: There can be multiple matches for a getter returning a generic parameter type, due to
				// the generation of a bridge method. The real getter is really the non-bridge, non-synthetic one as it
				// has the most specific and exact return type of the two. Picking the bridge method results in loss of
				// type information, as it down-casts the return type to the lower bound of the generic parameter.
				if (getterMethod == null || getterMethod.isSynthetic) {
					getterMethod = method;
				}
			}
		}
		if (getterMethod != null) {
			return getterMethod;
		}
		if (searchSuperClasses) {
			const parent = this.superclass;
			if (parent != null) {
				return parent.getGetterMethod(getterName);
			}
		}
		return (void 0);
	}

	getSetterMethod(setterName: string, voidOnly: boolean = true): Optional<MethodNode> {
		for (const method of this.getDeclaredMethods(setterName)) {
			if (setterName === method.name && method.parameters.length == 1 && (!voidOnly || method.isVoidMethod)) {
				return method;
			}
		}
		const parent = this.superclass;
		if (parent != null) {
			return parent.getSetterMethod(setterName, voidOnly);
		}
		return (void 0);
	}

	/**
	 * Is this class declared in a static method (such as a closure / inner class declared in a static method)
	 */
	get isStaticClass(): boolean {
		return this.redirect()._staticClass;
	}

	setStaticClass(staticClass: boolean): void {
		this.redirect()._staticClass = staticClass;
	}

	/**
	 * @return {@code true} if this inner class or closure was declared inside a script body
	 */
	get isScriptBody(): boolean {
		return this.redirect()._scriptBody;
	}

	setScriptBody(scriptBody: boolean): void {
		this.redirect()._scriptBody = scriptBody;
	}

	get isScript(): boolean {
		return this.redirect()._script || this.isDerivedFrom(ClassHelper.SCRIPT_TYPE);
	}

	setScript(script: boolean): void {
		this.redirect()._script = script;
	}

	toString(showRedirect: boolean = true): string {
		if (this.isArray) {
			return this.componentType.toString(showRedirect) + '[]';
		}
		const placeholder = this.isGenericsPlaceHolder;
		let ret: string = !placeholder ? this.name : this.unresolvedName;
		const genericsTypes = this.genericsTypes;
		if (!placeholder && genericsTypes != null) {
			ret = ret + '<';
			for (let i = 0, n = genericsTypes.length; i < n; i += 1) {
				if (i != 0) {
					ret = ret + ', ';
				}
				ret = ret + genericsTypes[i].toString();
			}
			ret = ret + '>';
		}
		if (showRedirect && this.isRedirectNode) {
			ret = ret + ' -> ' + this.myRedirect.toString();
		}
		return ret.toString();
	}

	/**
	 * Determines if the type has a possibly-matching instance method with the given name and arguments.
	 *
	 * @param name      the name of the method of interest
	 * @param args the arguments to match against
	 * @return true if a matching method was found
	 */
	hasPossibleMethod(name: string, args: Expression): boolean {
		let count: number;
		if (args instanceof TupleExpression) {
			// TODO COPY FROM GROOVY: this won't strictly be true when using list expansion in argument calls
			count = args.expressions.length;
		} else {
			count = 0;
		}

		for (let cn: ClassNode = this; cn != null; cn = cn.superclass) {
			for (const mn of cn.getDeclaredMethods(name)) {
				if (!mn.isStatic && ClassNode.hasCompatibleNumberOfArgs(mn, count)) {
					return true;
				}
			}
			for (const interfaceClass of cn.allInterfaces) {
				for (const mn of interfaceClass.getDeclaredMethods(name)) {
					if (mn.isDefault && ClassNode.hasCompatibleNumberOfArgs(mn, count)) {
						return true;
					}
				}
			}
		}

		return false;
	}

	tryFindPossibleMethod(name: string, args: Expression): Optional<MethodNode> {
		if (!(args instanceof TupleExpression)) {
			return (void 0);
		}

		// TODO COPY FROM GROOVY: this won't strictly be true when using list expansion in argument calls
		const nArgs = args.expressions.length;
		let method: MethodNode = null;

		for (let cn: ClassNode = this; cn != null; cn = cn.superclass) {
			for (const mn of cn.getDeclaredMethods(name)) {
				if (ClassNode.hasCompatibleNumberOfArgs(mn, nArgs)) {
					let match = true;
					for (let i = 0; i < nArgs; i += 1) {
						if (!ClassNode.hasCompatibleType(args, mn, i)) {
							match = false;
							break;
						}
					}
					if (match) {
						if (method == null) {
							method = mn;
						} else if (cn.equals(this) || method.parameters.length != nArgs) {
							return (void 0);
						} else {
							for (let i = 0; i < nArgs; i += 1) {
								// prefer super method if it matches better
								if (!ClassNode.hasExactMatchingCompatibleType(method, mn, i)) {
									return (void 0);
								}
							}
						}
					}
				}
			}
		}

		return method;
	}

	private static hasExactMatchingCompatibleType(match: MethodNode, maybe: MethodNode, i: number): boolean {
		const lastParamIndex = maybe.parameters.length - 1;
		return (i <= lastParamIndex && match.parameters[i].type.equals(maybe.parameters[i].type))
			|| (i >= lastParamIndex && ClassNode.isPotentialVarArg(maybe, lastParamIndex) && match.parameters[i].type.equals(maybe.parameters[lastParamIndex].type.componentType));
	}

	private static hasCompatibleType(args: TupleExpression, method: MethodNode, i: number): boolean {
		const lastParamIndex = method.parameters.length - 1;
		return (i <= lastParamIndex && args.getExpression(i).type.isDerivedFrom(method.parameters[i].type))
			|| (i >= lastParamIndex && ClassNode.isPotentialVarArg(method, lastParamIndex) && args.getExpression(i).type.isDerivedFrom(method.parameters[lastParamIndex].type.componentType));
	}

	private static hasCompatibleNumberOfArgs(method: MethodNode, nArgs: number): boolean {
		const lastParamIndex = method.parameters.length - 1;
		return nArgs == method.parameters.length || (nArgs >= lastParamIndex && ClassNode.isPotentialVarArg(method, lastParamIndex));
	}

	private static isPotentialVarArg(method: MethodNode, lastParamIndex: number): boolean {
		return lastParamIndex >= 0 && method.parameters[lastParamIndex].type.isArray;
	}

	/**
	 * Checks if the given method has a possibly matching static method with the
	 * given name and arguments.
	 *
	 * @param name      the name of the method of interest
	 * @param args the arguments to match against
	 * @return {@code true} if a matching method was found
	 */
	hasPossibleStaticMethod(name: string, args: Expression): boolean {
		return ClassNodeUtils.hasPossibleStaticMethod(this, name, args, false);
	}

	get isInterface(): boolean {
		return (this.modifiers & Opcodes.ACC_INTERFACE) != 0;
	}

	/**
	 * Checks if the {@link ClassNode} instance represents a native {@code record}.
	 * Check instead for the {@code RecordBase} annotation if looking for records and
	 * record-like classes currently being compiled.
	 *
	 * @return {@code true} if the instance represents a native {@code record}
	 *
	 * @since 4.0.0
	 */
	get isRecord(): boolean {
		return RecordTypeASTTransformation.recordNative(this);
	}

	/**
	 * Gets the record components of record type.
	 *
	 * @return {@code RecordComponentNode} instances
	 *
	 * @since 4.0.0
	 */
	get recordComponents(): Array<RecordComponentNode> {
		if (this.isRedirectNode) {
			return this.myRedirect.recordComponents;
		}
		this.lazyClassInit();
		return this._recordComponents;
	}

	/**
	 * Sets the record components for record type.
	 *
	 * @since 4.0.0
	 */
	setRecordComponents(recordComponents: Array<RecordComponentNode>): void {
		if (this.isRedirectNode) {
			this.myRedirect.setRecordComponents(recordComponents);
		} else {
			this._recordComponents.length = 0;
			this._recordComponents.push(...(recordComponents ?? []));
		}
	}

	get isAbstract(): boolean {
		return (this.modifiers & Opcodes.ACC_ABSTRACT) != 0;
	}

	/**
	 * @return {@code true} for native and emulated (annotation based) sealed classes
	 *
	 * @since 4.0.0
	 */
	get isSealed(): boolean {
		if (this.isRedirectNode) {
			return this.myRedirect.isSealed;
		}
		this.lazyClassInit();
		return this.getAnnotations(ClassHelper.SEALED_TYPE).length !== 0 || this.permittedSubclasses.length !== 0;
	}

	get isResolved(): boolean {
		if (this.typeClass != null) {
			return true;
		}
		if (this.isRedirectNode) {
			return this.myRedirect.isResolved;
		}
		return (this.componentType != null && this.componentType.isResolved);
	}

	get isArray(): boolean {
		return (this.componentType != null);
	}

	get componentType(): ClassNode {
		return this._componentType;
	}

	/**
	 * Returns the concrete class this classnode relates to. However, this method
	 * is inherently unsafe as it may return null depending on the compile phase you are
	 * using. AST transformations should never use this method directly, but rather obtain
	 * a new class node using {@link #getPlainNodeReference()}.
	 * @return the class this classnode relates to. May return null.
	 */
	get typeClass(): IClass {
		if (this._clazz != null) {
			return this._clazz;
		}
		if (this.isRedirectNode) {
			return this.myRedirect.typeClass;
		}

		const component = this.redirect().componentType;
		if (component != null && component.isResolved) {
			return Array.newInstance(component.typeClass, 0).getClass();
		}
		throw new GroovyBugError('ClassNode#getTypeClass for ' + this.name + ' called before the type class is set');
	}

	get hasPackageName(): boolean {
		return this.redirect().name.indexOf('.') > 0;
	}

	/**
	 * Marks if the current class uses annotations or not.
	 */
	setAnnotated(annotated: boolean): void {
		this._annotated = annotated;
	}

	get isAnnotated(): boolean {
		return this._annotated;
	}

	asGenericsType(): GenericsType {
		if (!this.isGenericsPlaceHolder) {
			return new GenericsType(this);
		} else if (this._genericsTypes != null && this._genericsTypes.length !== 0 && this._genericsTypes[0].upperBounds != null) {
			return this._genericsTypes[0];
		} else {
			const upper = (this.isRedirectNode ? this.myRedirect : this);
			return new GenericsType(this, [upper], null);
		}
	}

	get genericsTypes(): Array<GenericsType> {
		return this._genericsTypes;
	}

	setGenericsTypes(genericsTypes: Array<GenericsType>): void {
		this._usesGenerics = this._usesGenerics || (genericsTypes != null && genericsTypes.length !== 0);
		this._genericsTypes.length = 0;
		this._genericsTypes.push(...(genericsTypes ?? []));
	}

	setGenericsPlaceHolder(placeholder: boolean): void {
		this._usesGenerics = this._usesGenerics || placeholder;
		this._placeholder = placeholder;
	}

	get isGenericsPlaceHolder(): boolean {
		return this._placeholder;
	}

	get isUsingGenerics(): boolean {
		return this._usesGenerics;
	}

	setUsingGenerics(usesGenerics: boolean): void {
		this._usesGenerics = usesGenerics;
	}

	getPlainNodeReference(skipPrimitives?: boolean): ClassNode {
		skipPrimitives = skipPrimitives ?? true;
		if (skipPrimitives && ClassHelper.isPrimitiveType(this)) {
			return this;
		}
		const n = new ClassNode(this.name, this.modifiers, this.superclass, null, null);
		n._isPrimaryNode = false;
		n.setRedirect(this.redirect());
		if (this.isArray) {
			n._componentType = this.redirect().componentType;
		}
		return n;
	}

	get isAnnotationDefinition(): boolean {
		return this.isInterface && (this.modifiers & Opcodes.ACC_ANNOTATION) != 0;
	}

	get annotations(): Array<AnnotationNode> {
		if (this.isRedirectNode) {
			return this.myRedirect.annotations;
		}
		this.lazyClassInit();
		return super.annotations;
	}

	getAnnotations(type?: ClassNode): Array<AnnotationNode> {
		if (this.isRedirectNode) {
			return this.myRedirect.getAnnotations(type);
		}
		this.lazyClassInit();
		return super.getAnnotations(type);
	}

	addTransform(transform: IClass, node: ASTNode): void {
		const annotation = transform.getAnnotation(GroovyASTTransformation.class);
		if (annotation != null) {
			const transforms: Map<IClass, Set<ASTNode>> = this.getTransforms(annotation.get('phase') as CompilePhase);
			let exists = transforms.get(transform);
			if (exists == null) {
				exists = new Set();
				transforms.set(transform, exists);
			}
			exists.add(node);
		}
	}

	getTransforms(phase: CompilePhase): Map<IClass, Set<ASTNode>> {
		return this.transformInstances.get(phase);
	}

	renameField(oldName: string, newName: string): void {
		const r = this.redirect();
		const index = r._fieldIndex;
		const old = index.get(oldName);
		index.delete(oldName);
		index.set(newName, old);
	}

	removeField(oldName: string): void {
		const r = this.redirect();
		const index = r._fieldIndex;
		const old = index.get(oldName);
		const fieldIndex = r._fields.findIndex(field => field === old);
		r._fields.splice(fieldIndex, 1);
		index.delete(oldName);
	}

	get isEnum(): boolean {
		return (this.modifiers & Opcodes.ACC_ENUM) != 0;
	}

	/**
	 * @return iterator of inner classes defined inside this one
	 */
	get innerClasses(): Array<InnerClassNode> {
		return this._innerClasses;
	}

	addInnerClass(innerClassNode: InnerClassNode): void {
		this._innerClasses.push(innerClassNode);
	}

	private get transformInstances(): Map<CompilePhase, Map<IClass, Set<ASTNode>>> {
		return this._transformInstances;
	}

	get text(): string {
		return this.name;
	}

	get typeAnnotations(): Array<AnnotationNode> {
		return this._typeAnnotations;
	}

	getTypeAnnotations(type: ClassNode): Array<AnnotationNode> {
		const ret = [];
		for (const node of this.typeAnnotations) {
			if (type.equals(node.classNode)) {
				ret.push(node);
			}
		}
		return ret;
	}

	addTypeAnnotation(annotation: AnnotationNode): void {
		if (annotation != null) {
			this._typeAnnotations.push(annotation);
		}
	}

	addTypeAnnotations(annotations: Array<AnnotationNode>): void {
		for (const annotation of annotations) {
			this.addTypeAnnotation(annotation);
		}
	}
}
