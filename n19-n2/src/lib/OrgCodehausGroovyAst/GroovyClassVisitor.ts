import {ClassNode} from './ClassNode';
import {ConstructorNode} from './ConstructorNode';
import {FieldNode} from './FieldNode';
import {MethodNode} from './MethodNode';
import {PropertyNode} from './PropertyNode';

export interface GroovyClassVisitor {
	/**
	 * Visit a ClassNode.
	 */
	visitClass(node: ClassNode): void;

	/**
	 * Visit a ConstructorNode.
	 */
	visitConstructor(node: ConstructorNode): void;

	/**
	 * Visit a MethodNode.
	 */
	visitMethod(node: MethodNode): void;

	/**
	 * Visit a FieldNode.
	 */
	visitField(node: FieldNode): void;

	/**
	 * Visit a PropertyNode.
	 */
	visitProperty(node: PropertyNode): void;
}
