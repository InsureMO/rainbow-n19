import {AnnotatedNode, AnnotationNode, ClassHelper, ClassNode} from '../OrgCodehausGroovyAst';

export class AnnotatedNodeUtils {
	private static readonly GENERATED_TYPE: ClassNode = ClassHelper.make(Generated.class);

	private constructor() {
		// avoid extend
	}

	static markAsGenerated<T extends AnnotatedNode>(containingClass: ClassNode, nodeToMark: T, skipChecks?: boolean): T {
		if (skipChecks == null) {
			return AnnotatedNodeUtils.markAsGenerated(containingClass, nodeToMark, false);
		} else {
			const shouldAnnotate = skipChecks || containingClass.module?.context != null;
			if (shouldAnnotate && !AnnotatedNodeUtils.isGenerated(nodeToMark)) {
				nodeToMark.addAnnotation(new AnnotationNode(AnnotatedNodeUtils.GENERATED_TYPE));
			}
			return nodeToMark;
		}
	}

	static hasAnnotation(node: AnnotatedNode, annotation: ClassNode): boolean {
		const nodes = node.getAnnotations(annotation);
		return nodes != null && nodes.length !== 0;
	}

	static isGenerated(node: AnnotatedNode): boolean {
		const nodes = node.getAnnotations(AnnotatedNodeUtils.GENERATED_TYPE);
		return nodes != null && nodes.length !== 0;
	}
}
