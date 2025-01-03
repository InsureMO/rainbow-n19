import {IClass, ModifiersValue} from '../Java';
import {
	AnnotatedNode,
	AnnotationNode,
	ClassHelper,
	ClassNode,
	ConstructorNode,
	MethodNode
} from '../OrgCodehausGroovyAst';
import {ClassExpression, Expression, PropertyExpression} from '../OrgCodehausGroovyAstExpr';
import {Visibility} from '../OrgCodehausGroovyTransform';
import {Opcodes} from '../OrgObjectwebAsm';

export class VisibilityUtils {
	private static readonly VISIBILITY_OPTIONS_TYPE: ClassNode = ClassHelper.makeWithoutCaching(VisibilityOptions.class, false);

	private constructor() {
		// avoid extend
	}

	/**
	 * Determine the correct modifiers by looking for a potential @VisibilityOptions annotation.
	 *
	 * @param anno The annotation being processed (if any) which may support a 'visibilityId' attribute
	 * @param node The node being processed which may also be annotated with @VisibilityOptions
	 * @param clazz The type of node being constructed
	 * @param originalModifiers The modifier value to adjust or return if no applicable @VisibilityOptions is found
	 * @return the updated modifiers
	 */
	static getVisibility(anno: AnnotationNode, node: AnnotatedNode, clazz: IClass, originalModifiers: ModifiersValue): ModifiersValue {
		const annotations = node.getAnnotations(VisibilityUtils.VISIBILITY_OPTIONS_TYPE);
		if (annotations.length === 0 || anno == null) {
			return originalModifiers;
		}

		const visId = AbstractASTTransformation.getMemberStringValue(anno, 'visibilityId', null);

		let vis: Visibility = null;
		if (visId == null) {
			vis = VisibilityUtils.getVisForAnnotation(clazz, annotations[0], null);
		} else {
			for (const visAnno of annotations) {
				vis = VisibilityUtils.getVisForAnnotation(clazz, visAnno, visId);
				if (vis != Visibility.UNDEFINED) {
					break;
				}
			}
		}
		if (vis == null || vis == Visibility.UNDEFINED) {
			return originalModifiers;
		}

		const result = originalModifiers & ~(Opcodes.ACC_PUBLIC | Opcodes.ACC_PROTECTED | Opcodes.ACC_PRIVATE);
		return result | vis;
	}

	private static getVisForAnnotation(clazz: IClass, visAnno: AnnotationNode, visId: string): Visibility {
		const visMembers = visAnno.members;
		if (visMembers == null) {
			return Visibility.UNDEFINED;
		}
		const id = AbstractASTTransformation.getMemberStringValue(visAnno, 'id', null);
		if ((id == null && visId != null) || (id != null && id !== visId)) {
			return Visibility.UNDEFINED;
		}

		let vis: Visibility = null;
		if (clazz.equals(ConstructorNode.class)) {
			vis = VisibilityUtils.doGetVisibility(visMembers.get('constructor'));
		} else if (clazz.equals(MethodNode.class)) {
			vis = VisibilityUtils.doGetVisibility(visMembers.get('method'));
		} else if (clazz.equals(ClassNode.class)) {
			vis = VisibilityUtils.doGetVisibility(visMembers.get('type'));
		}
		if (vis == null || vis == Visibility.UNDEFINED) {
			vis = VisibilityUtils.doGetVisibility(visMembers.get('value'));
		}
		return vis;
	}

	private static doGetVisibility(e: Expression): Visibility {
		if (e instanceof PropertyExpression) {
			if (e.objectExpression instanceof ClassExpression && e.objectExpression.text === 'groovy.transform.options.Visibility') {
				return Visibility[e.propertyAsString];
			}
		}
		return Visibility.UNDEFINED;
	}
}
