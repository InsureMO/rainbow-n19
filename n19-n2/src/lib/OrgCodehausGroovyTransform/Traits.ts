import {ClassHelper, ClassNode, MethodNode} from '../OrgCodehausGroovyAst';
import {GroovyAstMakeFirst} from '../TsAddon';

/**
 * TODO Only the parts that have been used were copied.
 */
export class Traits {
	public static readonly IMPLEMENTED_CLASSNODE: ClassNode = ClassHelper.make(GroovyAstMakeFirst.OrgCodehausGroovyTransformTrait.Traits$Implemented);

	/**
	 * Indicates whether a method in a trait interface has a default implementation.
	 * @param method a method node
	 * @return true if the method has a default implementation in the trait
	 */
	public static hasDefaultImplementation(method: MethodNode): boolean {
		return method.getAnnotations(Traits.IMPLEMENTED_CLASSNODE).length !== 0;
	}
}