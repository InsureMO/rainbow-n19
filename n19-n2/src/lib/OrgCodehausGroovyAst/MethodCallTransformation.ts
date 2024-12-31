import {SourceUnit} from '../OrgCodehausGroovyControl';
import {AnnotationNode} from './AnnotationNode';
import {ASTNode} from './ASTNode';
import {ClassNode} from './ClassNode';
import {GroovyCodeVisitor} from './GroovyCodeVisitor';

export abstract class MethodCallTransformation implements ASTTransformation {
	visit(nodes: Array<ASTNode>, sourceUnit: SourceUnit): void {
		const transformer = this.getTransformer(nodes, sourceUnit);

		if (nodes != null) {
			for (const it of nodes) {
				if (!(it instanceof AnnotationNode) && !(it instanceof ClassNode)) {
					it.visit(transformer);
				}
			}
		}
		if (sourceUnit.ast != null) {
			sourceUnit.ast.visit(transformer);
			if (sourceUnit.ast.statementBlock != null) {
				sourceUnit.ast.statementBlock.visit(transformer);
			}
			if (sourceUnit.ast.classes != null) {
				for (const classNode of sourceUnit.ast.classes) {
					if (classNode.methods != null) {
						for (const node of classNode.methods) {
							if (node != null && node.code != null) {
								node.code.visit(transformer);
							}
						}
					}

					try {
						if (classNode.declaredConstructors != null) {
							for (const node of classNode.declaredConstructors) {
								if (node != null && node.code != null) {
									node.code.visit(transformer);
								}
							}
						}
					} catch (ignored /* MissingPropertyException */) {
						// TODO COPY FROM GROOVY: inner class nodes don't have a constructors field available
					}

					// all properties are also always fields
					if (classNode.fields != null) {
						for (const node of classNode.fields) {
							if (node.initialValueExpression != null) {
								node.initialValueExpression.visit(transformer);
							}
						}
					}

					try {
						for (const node of classNode.objectInitializerStatements) {
							if (node != null) {
								node.visit(transformer);
							}
						}
					} catch (ignored /* MissingPropertyException */) {
						// TODO COPY FROM GROOVY: inner class nodes don't have an objectInitializers field available
					}

					// TODO COPY FROM GROOVY: is there anything to do with the module ???
				}
			}
			if (sourceUnit.ast.methods != null) {
				for (const node of sourceUnit.ast.methods) {
					if (node != null) {
						if (node.parameters != null) {
							for (const parameter of node.parameters) {
								if (parameter != null && parameter.initialExpression != null) {
									parameter.initialExpression.visit(transformer);
								}
							}
						}
						if (node.code != null) {
							node.code.visit(transformer);
						}
					}
				}
			}
		}
	}

	protected abstract getTransformer(nodes: Array<ASTNode>, sourceUnit: SourceUnit): GroovyCodeVisitor;
}
