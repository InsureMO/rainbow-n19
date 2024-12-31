import {JavaFunction} from '../JavaUtil';
import {SourceUnit} from '../OrgCodehausGroovyControl';
import {SyntaxException} from '../OrgCodehausGroovySyntax';
import {Optional} from '../TsAddon';
import {ClassNode} from './ClassNode';
import {InnerClassNode} from './InnerClassNode';
import {ModuleNode} from './ModuleNode';
import {NodeMetaDataHandler} from './NodeMetaDataHandler';
import {NodeMetaDataHandlerSupport} from './NodeMetaDataHandlerSupport';

export class CompileUnit implements NodeMetaDataHandler {
	private readonly _nodeMetaDataHandlerSupport: NodeMetaDataHandlerSupport = new NodeMetaDataHandlerSupport(this);
	private readonly _config: CompilerConfiguration;
	private readonly _loader: GroovyClassLoader;
	private readonly _codeSource: Optional<CodeSource>;
	private readonly _metaDataMap: Map<any, any> = new Map();
	private readonly _modules: Array<ModuleNode> = [];
	private readonly _classesMap: Map<string, ClassNode> = new Map();
	private readonly _classesToCompile: Map<string, ClassNode> = new Map();
	private readonly _classesToSource: Map<string, SourceUnit> = new Map();
	private readonly _generatedInnerClasses: Map<string, InnerClassNode> = new Map();

	constructor(classLoader: GroovyClassLoader, config: CompilerConfiguration, codeSource?: CodeSource) {
		this._loader = classLoader;
		this._codeSource = codeSource;
		this._config = config;
	}

	get config(): CompilerConfiguration {
		return this._config;
	}

	get classLoader(): GroovyClassLoader {
		return this._loader;
	}

	get codeSource(): Optional<CodeSource> {
		return this._codeSource;
	}

	get modules(): Array<ModuleNode> {
		return this._modules;
	}

	/**
	 * @return a list of all the classes in each module in the compilation unit
	 */
	get classes(): Array<ClassNode> {
		return this.modules.map(module => module.classes).flat();
	}

	get classesMap(): Map<string, ClassNode> {
		return this._classesMap;
	}

	get classesToCompile(): Map<string, ClassNode> {
		return this._classesToCompile;
	}

	/**
	 * @return the ClassNode for the given qualified name or returns null if
	 *         the name does not exist in the current compilation unit
	 *         (ignoring the .class files on the classpath)
	 */
	getClass(name: string): Optional<ClassNode> {
		let cn = this.classesMap.get(name);
		if (cn == null) {
			cn = this.classesToCompile.get(name);
		}
		return cn;
	}

	get classesToSource(): Map<string, SourceUnit> {
		return this._classesToSource;
	}

	getScriptSourceLocation(className: string): Optional<SourceUnit> {
		return this.classesToSource.get(className);
	}

	get generatedInnerClasses(): Map<string, InnerClassNode> {
		return this._generatedInnerClasses;
	}

	getGeneratedInnerClass(name: string): Optional<InnerClassNode> {
		return this.generatedInnerClasses.get(name);
	}

	/**
	 * @deprecated
	 */
	hasClassNodeToCompile(): boolean {
		return this.classesToCompile.size !== 0;
	}

	/**
	 * @deprecated
	 */
	iterateClassNodeToCompile(): IterableIterator<string> {
		return this.classesToCompile.keys();
	}

	addModule(node: ModuleNode): void {
		// null means a compilation error prevented groovy from building an AST
		if (node != null) {
			this.modules.push(node);
			node.setUnit(this);
			this.addClasses(node.classes);
		}
	}

	/**
	 * Appends all of the fully-qualified class names in this
	 * module into the given map.
	 */
	addClasses(list: Array<ClassNode>): void {
		(list ?? []).forEach(node => this.addClass(node));
	}

	/**
	 * Adds a class to the unit.
	 */
	addClass(node: ClassNode): void {
		node = node.redirect();
		const name = node.name;
		const stored = this.classesMap.get(name);
		if (stored != null && stored !== node) {
			// we have a duplicate class!
			// One possibility for this is, that we declared a script and a
			// class in the same file and named the class like the file
			const nodeSource: SourceUnit = node.module.context;
			const storedSource: SourceUnit = stored.module.context;
			let txt = 'Invalid duplicate class definition of class ' + node.name + ' : ';
			if (nodeSource == storedSource) {
				// same class in same source
				txt += 'The source ' + nodeSource.name + ' contains at least two definitions of the class ' + node.name + '.\n';
				if (node.isScriptBody || stored.isScriptBody) {
					txt += 'One of the classes is an explicit generated class using the class statement, the other is a class generated from' +
						' the script body based on the file name. Solutions are to change the file name or to change the class name.\n';
				}
			} else {
				txt += 'The sources ' + nodeSource.name + ' and ' + storedSource.name + ' each contain a class with the name ' + node.name + '.\n';
			}
			nodeSource.addErrorAndContinue(new SyntaxException({message: txt, node}));
		}
		this.classesMap.set(name, node);

		const cn = this.classesToCompile.get(name);
		this.classesToCompile.delete(name);
		if (cn != null) {
			cn.setRedirect(node);
		}
	}

	/**
	 * this method actually does not compile a class. It's only
	 * a marker that this type has to be compiled by the CompilationUnit
	 * at the end of a parse step no node should be left.
	 */
	addClassNodeToCompile(node: ClassNode, location: SourceUnit): void {
		const nodeName = node.name;
		this.classesToCompile.set(nodeName, node);
		this.classesToSource.set(nodeName, location);
	}

	addGeneratedInnerClass(icn: InnerClassNode): void {
		this.generatedInnerClasses.set(icn.name, icn);
	}

	// NodeMetaDataHandler
	protected get nodeMetaDataHandlerSupport(): NodeMetaDataHandlerSupport {
		return this._nodeMetaDataHandlerSupport;
	}

	get nodeMetaData(): Map<any, any> {
		return this.nodeMetaDataHandlerSupport.nodeMetaData;
	}

	copyNodeMetaData(other: NodeMetaDataHandler): void {
		this.nodeMetaDataHandlerSupport.copyNodeMetaData(other);
	}

	getNodeMetaData<T>(key: any, valFn?: JavaFunction<any, T>): Optional<T> {
		return this.nodeMetaDataHandlerSupport.getNodeMetaData(key, valFn);
	}

	setNodeMetaData(key: any, value: any): void {
		this.nodeMetaDataHandlerSupport.setNodeMetaData(key, value);
	}

	putNodeMetaData(key: any, value: any): Optional<any> {
		return this.nodeMetaDataHandlerSupport.putNodeMetaData(key, value);
	}

	removeNodeMetaData(key: any): void {
		this.nodeMetaDataHandlerSupport.removeNodeMetaData(key);
	}

	get metaDataMap(): Map<any, any> {
		return this._metaDataMap;
	}

	/**
	 * copy values to inside map, never set value after call this method
	 */
	setMetaDataMap(metaDataMap: Map<any, any>): void {
		this._metaDataMap.clear();
		for (const [key, value] of (metaDataMap ?? new Map())) {
			this._metaDataMap.set(key, value);
		}
	}
}
