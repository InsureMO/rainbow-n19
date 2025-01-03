import {IClass, ModifiersValue} from '../Java';
import {UnsupportedOperationException} from '../JavaExceptions';
import {
	AnnotationNode,
	ASTNode,
	ClassHelper,
	ClassNode,
	ConstructorNode,
	FieldNode,
	GenericsType,
	GroovyClassVisitor,
	InnerClassNode,
	MethodNode,
	MixinNode,
	Parameter,
	PropertyNode
} from '../OrgCodehausGroovyAst';
import {Expression} from '../OrgCodehausGroovyAstExpr';
import {Statement} from '../OrgCodehausGroovyAstStmt';

export class UnionTypeClassNode extends ClassNode {
	private readonly _delegates: Array<ClassNode>;

	constructor(...classNodes: Array<ClassNode>) {
		super(UnionTypeClassNode.makeName(classNodes), 0, ClassHelper.OBJECT_TYPE);
		this._delegates = classNodes == null ? ClassNode.EMPTY_ARRAY : classNodes;
	}

	static makeName(nodes: Array<ClassNode>): string {
		return '<UnionType:' + nodes.map(node => node.text).join('+') + '>';
	}

	get delegates(): Array<ClassNode> {
		return this._delegates;
	}

	addConstructor(modifiersOrNode: ModifiersValue | ConstructorNode, parameters?: Array<Parameter>, exceptions?: Array<ClassNode>, code?: Statement): ConstructorNode {
		throw new UnsupportedOperationException();
	}

	addField(nameOrNode: string | FieldNode, modifiers: ModifiersValue, type: ClassNode, initialValue: Expression): FieldNode {
		throw new UnsupportedOperationException();
	}

	addFieldFirst(nameOrNode: string | FieldNode, modifiers: ModifiersValue, type: ClassNode, initialValue: Expression): FieldNode {
		throw new UnsupportedOperationException();
	}

	addInterface(type: ClassNode): void {
		throw new UnsupportedOperationException();
	}

	addMethod(nameOrNode: string | MethodNode, modifiers: ModifiersValue, returnType: ClassNode, parameters: Array<Parameter>, exceptions: Array<ClassNode>, code: Statement): MethodNode {
		throw new UnsupportedOperationException();
	}

	addMixin(mixin: MixinNode): void {
		throw new UnsupportedOperationException();
	}

	addObjectInitializerStatements(statements: Statement): void {
		throw new UnsupportedOperationException();
	}

	addProperty(nameOrNode: string | PropertyNode, modifiers: ModifiersValue, type: ClassNode, initialValue: Expression, getterBlock: Statement, setterBlock: Statement): PropertyNode {
		throw new UnsupportedOperationException();
	}

	addStaticInitializerStatements(staticStatements: Array<Statement>, fieldInit: boolean): void {
		throw new UnsupportedOperationException();
	}

	addSyntheticMethod(name: string, modifiers: ModifiersValue, returnType: ClassNode, parameters: Array<Parameter>, exceptions: Array<ClassNode>, code: Statement): MethodNode {
		throw new UnsupportedOperationException();
	}

	addTransform(transform: IClass, node: ASTNode): void {
		throw new UnsupportedOperationException();
	}

	declaresInterface(classNode: ClassNode): boolean {
		for (const delegate of this.delegates) {
			if (delegate.declaresInterface(classNode)) {
				return true;
			}
		}
		return false;
	}

	get abstractMethods(): Array<MethodNode> {
		const allMethods: Array<MethodNode> = [];
		for (const delegate of this.delegates) {
			allMethods.push(...(delegate.abstractMethods ?? []));
		}
		return allMethods;
	}

	get allDeclaredMethods(): Array<MethodNode> {
		const allMethods: Array<MethodNode> = [];
		for (const delegate of this.delegates) {
			allMethods.push(...(delegate.allDeclaredMethods ?? []));
		}
		return allMethods;
	}

	get allInterfaces(): Set<ClassNode> {
		const allMethods: Set<ClassNode> = new Set();
		for (const delegate of this.delegates) {
			delegate.allInterfaces.forEach(interfaceClass => allMethods.add(interfaceClass));
		}
		return allMethods;
	}

	get annotations(): Array<AnnotationNode> {
		const nodes: Array<AnnotationNode> = [];
		for (const delegate of this.delegates) {
			const annotations = delegate.annotations;
			if (annotations != null) {
				nodes.push(...(annotations ?? []));
			}
		}
		return nodes;
	}

	getAnnotations(type?: ClassNode): Array<AnnotationNode> {
		const nodes: Array<AnnotationNode> = [];
		for (const delegate of this.delegates) {
			const annotations = delegate.getAnnotations(type);
			if (annotations != null) {
				nodes.push(...(annotations ?? []));
			}
		}
		return nodes;
	}

	get componentType(): ClassNode {
		throw new UnsupportedOperationException();
	}

	get declaredConstructors(): Array<ConstructorNode> {
		const nodes: Array<ConstructorNode> = [];
		for (const delegate of this.delegates) {
			nodes.push(...(delegate.declaredConstructors ?? []));
		}
		return nodes;
	}

	getDeclaredField(name: string): FieldNode {
		for (const delegate of this.delegates) {
			const node = delegate.getDeclaredField(name);
			if (node != null) {
				return node;
			}
		}
		return null;
	}

	getDeclaredMethod(name: string, parameters: Array<Parameter>): MethodNode {
		for (const delegate of this.delegates) {
			const node = delegate.getDeclaredMethod(name, parameters);
			if (node != null) {
				return node;
			}
		}
		return null;
	}

	getDeclaredMethods(name: string): Array<MethodNode> {
		const nodes: Array<MethodNode> = [];
		for (const delegate of this.delegates) {
			const methods = delegate.getDeclaredMethods(name);
			if (methods != null) {
				nodes.push(...(methods ?? []));
			}
		}
		return nodes;
	}

	get declaredMethodsMap(): Map<string, MethodNode> {
		throw new UnsupportedOperationException();
	}

	get enclosingMethod(): MethodNode {
		throw new UnsupportedOperationException();
	}

	getField(name: string): FieldNode {
		for (const delegate of this.delegates) {
			const field = delegate.getField(name);
			if (field != null) {
				return field;
			}
		}
		return null;
	}

	get fields(): Array<FieldNode> {
		const nodes: Array<FieldNode> = [];
		for (const delegate of this.delegates) {
			const fields = delegate.fields;
			if (fields != null) {
				nodes.push(...(fields ?? []));
			}
		}
		return nodes;
	}

	get innerClasses(): Array<InnerClassNode> {
		throw new UnsupportedOperationException();
	}

	get interfaces(): Array<ClassNode> {
		const nodes: Array<ClassNode> = [];
		for (const delegate of this.delegates) {
			const interfaces = delegate.interfaces;
			if (interfaces != null) {
				nodes.push(...(interfaces ?? []));
			}
		}
		return nodes;
	}

	get methods(): Array<MethodNode> {
		const nodes: Array<MethodNode> = [];
		for (const delegate of this.delegates) {
			const methods = delegate.methods;
			if (methods != null) {
				nodes.push(...(methods ?? []));
			}
		}
		return nodes;
	}

	getPlainNodeReference(skipPrimitives: boolean): ClassNode {
		const n = this.delegates.length;
		return new UnionTypeClassNode(...this.delegates.map(delegate => delegate.getPlainNodeReference(skipPrimitives)));
	}

	get properties(): Array<PropertyNode> {
		const nodes: Array<PropertyNode> = [];
		for (const delegate of this.delegates) {
			const properties = delegate.properties;
			if (properties != null) {
				nodes.push(...(properties ?? []));
			}
		}
		return nodes;
	}

	get typeClass(): IClass {
		return super.typeClass;
	}

	getUnresolvedInterfaces(useRedirect: boolean): Array<ClassNode> {
		const nodes: Array<ClassNode> = [];
		for (const delegate of this.delegates) {
			const interfaces = delegate.getUnresolvedInterfaces(useRedirect);
			if (interfaces != null) {
				nodes.push(...(interfaces ?? []));
			}
		}
		return nodes;
	}

	implementsInterface(classNode: ClassNode): boolean {
		for (const delegate of this.delegates) {
			if (delegate.implementsInterface(classNode)) {
				return true;
			}
		}
		return false;
	}

	get isAnnotated(): boolean {
		for (const delegate of this.delegates) {
			if (delegate.isAnnotated) {
				return true;
			}
		}
		return false;
	}

	isDerivedFrom(type: ClassNode): boolean {
		for (const delegate of this.delegates) {
			if (delegate.isDerivedFrom(type)) {
				return true;
			}
		}
		return false;
	}

	get isDerivedFromGroovyObject(): boolean {
		for (const delegate of this.delegates) {
			if (delegate.isDerivedFromGroovyObject) {
				return true;
			}
		}
		return false;
	}

	removeField(oldName: String): void {
		throw new UnsupportedOperationException();
	}

	renameField(oldName: String, newName: String): void {
		throw new UnsupportedOperationException();
	}

	setAnnotated(flag: boolean): void {
		throw new UnsupportedOperationException();
	}

	setEnclosingMethod(enclosingMethod: MethodNode): void {
		throw new UnsupportedOperationException();
	}

	setGenericsPlaceHolder(b: boolean): void {
		throw new UnsupportedOperationException();
	}

	setGenericsTypes(genericsTypes: Array<GenericsType>): void {
		throw new UnsupportedOperationException();
	}

	setInterfaces(interfaces: Array<ClassNode>): void {
		throw new UnsupportedOperationException();
	}

	setModifiers(modifiers: ModifiersValue): void {
		throw new UnsupportedOperationException();
	}

	setName(name: string): string {
		throw new UnsupportedOperationException();
	}

	setRedirect(cn: ClassNode): void {
		throw new UnsupportedOperationException();
	}

	setScript(script: boolean): void {
		throw new UnsupportedOperationException();
	}

	setScriptBody(scriptBody: boolean): void {
		throw new UnsupportedOperationException();
	}

	setStaticClass(staticClass: boolean): void {
		throw new UnsupportedOperationException();
	}

	setSuperClass(superClass: ClassNode): void {
		throw new UnsupportedOperationException();
	}

	setSyntheticPublic(syntheticPublic: boolean): void {
		throw new UnsupportedOperationException();
	}

	setUnresolvedSuperClass(sn: ClassNode): void {
		throw new UnsupportedOperationException();
	}

	setUsingGenerics(b: boolean): void {
		throw new UnsupportedOperationException();
	}

	visitContents(visitor: GroovyClassVisitor): void {
		for (const delegate of this.delegates) {
			delegate.visitContents(visitor);
		}
	}
}