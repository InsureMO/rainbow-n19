import {Groovydoc, GroovydocHolder, GroovydocHolderConstants, IGroovydoc} from '../GroovyLangGroovydoc';
import {Optional} from '../TsAddon';
import {AnnotationNode} from './AnnotationNode';
import {ASTNode} from './ASTNode';
import {ClassNode} from './ClassNode';

export class AnnotatedNode extends ASTNode implements GroovydocHolder<AnnotatedNode> {
	public static readonly HAS_NO_REAL_SOURCE_POSITION_KEY: string = 'org.codehaus.groovy.ast.AnnotatedNode.hasNoRealSourcePosition';
	private readonly _annotations: Array<AnnotationNode> = [];
	private _declaringClass: ClassNode;
	private _synthetic: boolean;

	get annotations(): Array<AnnotationNode> {
		return this._annotations ?? [];
	}

	getAnnotations(type: ClassNode): Array<AnnotationNode> {
		return this.annotations.filter(annotation => type.equals(annotation.classNode));
	}

	addAnnotation(typeOrAnnotation: ClassNode | AnnotationNode): AnnotationNode {
		let node: AnnotationNode;
		if (typeOrAnnotation instanceof ClassNode) {
			node = new AnnotationNode(typeOrAnnotation);
		} else {
			node = typeOrAnnotation;
		}
		this._annotations.push(node);
		return node;
	}

	addAnnotations(annotations: Array<AnnotationNode>): void {
		annotations.forEach(annotation => this.addAnnotation(annotation));
	}

	get declaringClass(): Optional<ClassNode> {
		return this._declaringClass;
	}

	setDeclaringClass(declaringClass: ClassNode): void {
		this._declaringClass = declaringClass;
	}

	get groovydoc(): IGroovydoc {
		const groovydoc: IGroovydoc = this.getNodeMetaData(GroovydocHolderConstants.DOC_COMMENT);
		return (groovydoc != null ? groovydoc : Groovydoc.EMPTY_GROOVYDOC);
	}

	get instance(): AnnotatedNode {
		return this;
	}

	/**
	 * Returns true for default constructors added by the compiler.
	 * <p>
	 * See GROOVY-4161
	 */
	hasNoRealSourcePosition(): boolean {
		return true === this.getNodeMetaData(AnnotatedNode.HAS_NO_REAL_SOURCE_POSITION_KEY);
	}

	setHasNoRealSourcePosition(hasNoRealSourcePosition: boolean): void {
		if (hasNoRealSourcePosition) {
			this.putNodeMetaData(AnnotatedNode.HAS_NO_REAL_SOURCE_POSITION_KEY, true);
		} else {
			this.removeNodeMetaData(AnnotatedNode.HAS_NO_REAL_SOURCE_POSITION_KEY);
		}
	}

	/**
	 * Indicates if this node was added by the compiler.
	 * <p>
	 * <b>Note</b>: This method has nothing to do with the synthetic flag for classes, fields, methods or properties.
	 */
	get isSynthetic(): boolean {
		return this._synthetic;
	}

	/**
	 * Sets this node as a node added by the compiler.
	 * <p>
	 * <b>Note</b>: This method has nothing to do with the synthetic flag for classes, fields, methods or properties.
	 */
	setSynthetic(synthetic: boolean): void {
		this._synthetic = synthetic;
	}
}
