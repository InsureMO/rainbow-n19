import {RuntimeException} from '../JavaExceptions';
import {JavaFunction} from '../JavaUtil';
import {BlockStatement, Statement} from '../OrgCodehausGroovyAstStmt';
import {GeneralUtils} from '../OrgCodehausGroovyAstTools';
import {SourceUnit} from '../OrgCodehausGroovyControl';
import {Opcodes} from '../OrgObjectwebAsm';
import {Optional} from '../TsAddon';
import {AnnotationNode} from './AnnotationNode';
import {ASTNode} from './ASTNode';
import {ClassHelper} from './ClassHelper';
import {ClassNode} from './ClassNode';
import {CompileUnit} from './CompileUnit';
import {GroovyCodeVisitor} from './GroovyCodeVisitor';
import {ImportNode} from './ImportNode';
import {MethodNode} from './MethodNode';
import {PackageNode} from './PackageNode';
import {Parameter} from './Parameter';

export class ModuleNode extends ASTNode {
	private readonly _classes: Array<ClassNode> = [];
	private readonly _methods: Array<MethodNode> = [];
	private readonly _imports: Array<ImportNode> = [];
	private readonly _starImports: Array<ImportNode> = [];
	private readonly _staticImports: Map<string, ImportNode> = new Map();
	private readonly _staticStarImports: Map<string, ImportNode> = new Map();
	private _unit: Optional<CompileUnit>;
	private _packageNode: Optional<PackageNode>;
	private _description: Optional<string>;
	private _createClassForStatements: boolean = true;
	private _context: Optional<SourceUnit>;
	private _importsResolved: boolean = false;
	private _scriptDummy: ClassNode;
	private _mainClassName: string;
	private readonly _statementBlock = new BlockStatement();

	constructor(contextOrUnit: SourceUnit | CompileUnit) {
		super();
		if (contextOrUnit instanceof SourceUnit) {
			this._context = contextOrUnit;
		} else {
			this._unit = contextOrUnit;
		}

	}

	get classes(): Array<ClassNode> {
		if (this._createClassForStatements && (!this.statementBlock.isEmpty || this.methods.length !== 0 || this.isPackageInfo)) {
			const mainClass = this.createStatementsClass();
			const mainClassName = mainClass.name;
			this._createClassForStatements = false;
			this._classes.unshift(mainClass);
			mainClass.setModule(this);
			this.addToCompileUnit(mainClass);
		}
		return /*Collections.unmodifiableList(*/this._classes/*)*/; // modified by MacroClassTransform
	}

	/**
	 * @return the module's methods
	 */
	get methods(): Array<MethodNode> {
		return this._methods;
	}

	/**
	 * @return a copy of the module's imports
	 */
	get imports(): Array<ImportNode> {
		return this._imports;
	}

	/**
	 * @return the module's star imports
	 */
	get starImports(): Array<ImportNode> {
		return this._starImports;
	}

	/**
	 * @return the module's static imports
	 */
	get staticImports(): Map<string, ImportNode> {
		return this._staticImports;
	}

	/**
	 * @return the module's static star imports
	 */
	get staticStarImports(): Map<string, ImportNode> {
		return this._staticStarImports;
	}

	/**
	 * @param alias the name of interest
	 * @return the import type for the given alias or null if none is available
	 */
	getImportType(alias: string): Optional<ClassNode> {
		return this.getImport(alias)?.type;
	}

	/**
	 * @param alias the name of interest
	 * @return the import node for the given alias or null if none is available
	 */
	getImport(alias: string): Optional<ImportNode> {
		const me = this;
		const aliases: Map<string, ImportNode> = this.getNodeMetaData('import.aliases', new class extends JavaFunction<string, Map<string, ImportNode>> {
			apply(t: string): Map<string, ImportNode> {
				return me.imports.reduce((map, importNode) => {
					map.set(importNode.alias, importNode);
					return map;
				}, new Map<string, ImportNode>());
			}
		}());
		return aliases.get(alias);
	}

	addImport(alias: string, type: ClassNode, annotations?: Array<AnnotationNode>): void {
		const importNode = new ImportNode(type, alias);
		importNode.addAnnotations(annotations ?? []);
		this.imports.push(importNode);

		this.removeNodeMetaData('import.aliases');
		this.storeLastAddedImportNode(importNode);
	}

	addStarImport(packageName: string, annotations?: Array<AnnotationNode>): void {
		const importNode = new ImportNode(packageName);
		importNode.addAnnotations(annotations ?? []);
		this.starImports.push(importNode);

		this.storeLastAddedImportNode(importNode);
	}

	addStaticImport(type: ClassNode, fieldName: string, alias: string, annotations?: Array<AnnotationNode>): void {
		const node = new ImportNode(type, fieldName, alias);
		node.addAnnotations(annotations ?? []);
		const prev = this.staticImports.get(alias);
		this.staticImports.set(alias, node);
		if (prev != null) {
			this.staticImports.set(prev.toString(), prev);
			const removed = this.staticImports.get(alias);
			this.staticImports.delete(alias);
			this.staticImports.set(alias, removed);
		}

		this.storeLastAddedImportNode(node);
	}

	addStaticStarImport(name: string, type: ClassNode, annotations?: Array<AnnotationNode>): void {
		const node = new ImportNode(type);
		node.addAnnotations(annotations ?? []);
		this.staticStarImports.set(name, node);

		this.storeLastAddedImportNode(node);
	}

	addStatement(node: Statement): void {
		this._statementBlock.addStatement(node);
	}

	addClass(node: ClassNode): void {
		if (this.classes.length === 0) {
			this._mainClassName = node.name;
		}
		this.classes.push(node);
		node.setModule(this);
		this.addToCompileUnit(node);
	}

	private addToCompileUnit(node: ClassNode): void {
		// register the new class with the compile unit
		if (this._unit != null) {
			this._unit.addClass(node);
		}
	}

	addMethod(node: MethodNode): void {
		this._methods.push(node);
	}

	visit(visitor: GroovyCodeVisitor): void {
	}

	get packageName(): Optional<string> {
		return this._packageNode?.name;
	}

	get package(): Optional<PackageNode> {
		return this._packageNode;
	}

	hasPackage(): boolean {
		return this._packageNode != null;
	}

	setPackage(packageNode: PackageNode): void {
		this._packageNode = packageNode;
	}

	hasPackageName(): boolean {
		return this._packageNode?.name != null;
	}

	setPackageName(packageName: string): void {
		this.setPackage(new PackageNode(packageName));
	}

	/**
	 * @return the underlying character stream description
	 */
	get description(): Optional<string> {
		if (this.context != null) {
			return this.context.name;
		} else {
			return this._description;
		}
	}

	setDescription(description: string): void {
		this._description = description;
	}

	get unit(): Optional<CompileUnit> {
		return this._unit;
	}

	setUnit(unit: CompileUnit): void {
		this._unit = unit;
	}

	get context(): Optional<SourceUnit> {
		return this._context;
	}

	private get isPackageInfo(): boolean {
		return this.context != null && this.context.name != null && this.context.name.endsWith('package-info.groovy');
	}

	get scriptClassDummy(): ClassNode {
		if (this._scriptDummy != null) {
			this.setScriptBaseClassFromConfig(this._scriptDummy);
			return this._scriptDummy;
		}

		let name = this.packageName;
		if (name == null) {
			name = '';
		}
		// now let's use the file name to determine the class name
		if (this.description == null) {
			throw new RuntimeException('Cannot generate main(String[]) class for statements when we have no file description');
		}
		name += GeneratorContext.encodeAsValidClassName(this.extractClassFromFileDescription());

		let classNode: ClassNode;
		if (this.isPackageInfo) {
			classNode = new ClassNode(name, Opcodes.ACC_ABSTRACT | Opcodes.ACC_INTERFACE, ClassHelper.OBJECT_TYPE);
		} else {
			classNode = new ClassNode(name, Opcodes.ACC_PUBLIC, ClassHelper.SCRIPT_TYPE);
			this.setScriptBaseClassFromConfig(classNode);
			classNode.setScript(true);
			classNode.setScriptBody(true);
		}

		this._scriptDummy = classNode;
		return classNode;
	}

	private setScriptBaseClassFromConfig(cn: ClassNode): void {
		let baseClassName = null;
		if (this.unit != null) {
			baseClassName = this.unit.config.scriptBaseClass;
		} else if (this.context != null) {
			baseClassName = this.context.configuration.scriptBaseClass;
		}
		if (baseClassName != null) {
			if (!cn.superclass.name === baseClassName) {
				cn.setSuperclass(ClassHelper.make(baseClassName));
				const annotationNode = new AnnotationNode(BaseScriptASTTransformation.MY_TYPE);
				cn.addAnnotation(annotationNode);
			}
		}
	}

	private static finalParam(type: ClassNode, name: string): Array<Parameter> {
		const parameter = GeneralUtils.param(type, name);
		parameter.setModifiers(Opcodes.ACC_FINAL);
		return GeneralUtils.params([parameter]);
	}

	protected createStatementsClass(): ClassNode {
		const classNode = this.scriptClassDummy;
		if (classNode.name.endsWith('package-info')) {
			return classNode;
		}

		const existingMain = this.handleMainMethodIfPresent(this.methods);

		classNode.addMethod(
			new MethodNode(
				'main',
				Opcodes.ACC_PUBLIC | Opcodes.ACC_STATIC,
				ClassHelper.VOID_TYPE,
				ModuleNode.finalParam(ClassHelper.STRING_TYPE.makeArray(), 'args'),
				ClassNode.EMPTY_ARRAY,
				GeneralUtils.stmt(
					GeneralUtils.callX(
						ClassHelper.make(InvokerHelper.class),
						'runScript',
						GeneralUtils.args(GeneralUtils.classX(classNode), GeneralUtils.varX('args'))
					)
				)
			)
		);

		const methodNode = new MethodNode('run', Opcodes.ACC_PUBLIC, ClassHelper.OBJECT_TYPE, Parameter.EMPTY_ARRAY, ClassNode.EMPTY_ARRAY, this.statementBlock);
		methodNode.setIsScriptBody();
		if (existingMain != null) {
			methodNode.addAnnotations(existingMain.annotations);
		}
		classNode.addMethod(methodNode);

		classNode.addConstructor(Opcodes.ACC_PUBLIC, Parameter.EMPTY_ARRAY, ClassNode.EMPTY_ARRAY, new BlockStatement());

		let stmt: Statement;
		// A script's contextual constructor should call its super class' contextual constructor, if it has one.
		// In practice this will always be true because currently this visitor is run before the AST transformations
		// (like @BaseScript) that could change this.  But this is cautious and anticipates possible compiler changes.
		if (classNode.superclass.getDeclaredConstructor(GeneralUtils.params([GeneralUtils.param(ClassHelper.BINDING_TYPE, 'context')])) != null) {
			stmt = GeneralUtils.stmt(GeneralUtils.ctorX(ClassNode.SUPER, GeneralUtils.args(GeneralUtils.varX('context'))));
		} else {
			// Fallback for non-standard base "script" classes with no context (Binding) constructor.
			stmt = GeneralUtils.stmt(GeneralUtils.callX(GeneralUtils.varX('super'), 'setBinding', GeneralUtils.args(GeneralUtils.varX('context'))));
		}

		classNode.addConstructor(
			Opcodes.ACC_PUBLIC,
			ModuleNode.finalParam(ClassHelper.make(Binding.class), 'context'),
			ClassNode.EMPTY_ARRAY,
			stmt);

		for (const method of this.methods) {
			if (method.isAbstract) {
				throw new RuntimeException('Cannot use abstract methods in a script, they are only available inside classes. Method: ' + method.name);
			}
			classNode.addMethod(method);
		}
		return classNode;
	}

	/*
	 * If a main method is provided by user, account for it under run() as scripts generate their own 'main' so they can run.
	 */
	private handleMainMethodIfPresent(methods: Array<MethodNode>): MethodNode {
		let found = false;
		let result: MethodNode = null;
		for (const node of this.methods) {
			if (node.name === 'main') {
				if (node.isStatic && node.parameters.length == 1) {
					let retTypeMatches: boolean;
					let argTypeMatches: boolean;
					const argType = node.parameters[0].type;
					const retType = node.returnType;

					argTypeMatches = (ClassHelper.isObjectType(argType) || argType.name.includes('String[]'));
					retTypeMatches = (ClassHelper.isPrimitiveVoid(retType) || ClassHelper.isObjectType(retType));
					if (retTypeMatches && argTypeMatches) {
						if (found) {
							throw new RuntimeException('Repetitive main method found.');
						} else {
							found = true;
							result = node;
						}
						// if script has both loose statements as well as main(), then main() is ignored
						if (this.statementBlock.isEmpty) {
							this.addStatement(node.code);
						}
					}
				}
			}
		}
		return result;
	}

	protected extractClassFromFileDescription(): string {
		let answer = this.description;
		/* no need to handle from file
		try {
			URI uri = new URI(answer);
			String path = uri.getPath();
			const schemeSpecific = uri.getSchemeSpecificPart();
			if (path != null && !path.isEmpty()) {
				answer = path;
			} else if (schemeSpecific != null && !schemeSpecific.isEmpty()) {
				answer = schemeSpecific;
			}
		} catch ( ignore / * URISyntaxException * /) {

		}
		*/
		// let's strip off everything after the last '.'
		const slashIdx = answer.lastIndexOf('/');
		let separatorIdx = answer.lastIndexOf('/' /* File.separatorChar */);
		const dotIdx = answer.lastIndexOf('.');
		if (dotIdx > 0 && dotIdx > Math.max(slashIdx, separatorIdx)) {
			answer = answer.substring(0, dotIdx);
		}
		// new let's strip everything up to and including the path separators
		if (slashIdx >= 0) {
			answer = answer.substring(slashIdx + 1);
		}
		// recalculate in case we have already done some stripping
		separatorIdx = answer.lastIndexOf('/' /* File.separatorChar */);
		if (separatorIdx >= 0) {
			answer = answer.substring(separatorIdx + 1);
		}
		return answer;
	}

	get isEmpty(): boolean {
		return this.classes.length === 0 && this.statementBlock.isEmpty;
	}

	sortClasses(): void {
		if (this.isEmpty) {
			return;
		}
		const classes = this.classes;
		if (classes.length == 1) {
			return;
		}
		const ordered: Array<ClassNode> = [];
		let level = 1;
		while (classes.length !== 0) {
			for (const cn of classes) {
				let sc = cn.superclass;

				for (let i = 1; i < level && sc != null; i += 1) {
					sc = sc.superclass;
				}
				if (sc != null && sc.isPrimaryClassNode) {
					continue;
				}
				ordered.push(cn);
			}
			level += 1;
		}
		this._classes.length = 0;
		this._classes.push(...ordered);
	}

	hasImportsResolved(): boolean {
		return this._importsResolved;
	}

	setImportsResolved(importsResolved: boolean): void {
		this._importsResolved = importsResolved;
	}

	// This method only exists as a workaround for GROOVY-6094
	// In order to keep binary compatibility
	private storeLastAddedImportNode(node: ImportNode): void {
		// TODO NEVER HAPPEN? THE ImportNode CLASS IS PUT TO NODE META DATA WHERE?
		if (this.getNodeMetaData(ImportNode) === ImportNode) {
			this.putNodeMetaData(ImportNode, node);
		}
	}

	get mainClassName(): string {
		return this._mainClassName;
	}

	get statementBlock(): BlockStatement {
		return this._statementBlock;
	}
}
