import {Modifier} from '../Java';
import {PropertyNode} from '../OrgCodehausGroovyAst';

export class PropertyNodeUtils {
	/**
	 * Fields within the AST that have no explicit visibility are deemed to be properties
	 * and represented by a PropertyNode. The Groovy compiler creates accessor methods and
	 * a backing field for such property nodes. During this process, all modifiers
	 * from the property are carried over to the backing field (so a property marked as
	 * {@code transient} will have a {@code transient} backing field) but when creating
	 * the accessor methods we don't carry over modifier values which don't make sense for
	 * methods (such as {@code volatile} and {@code transient}) but other modifiers are carried over,
	 * for example {@code static}.
	 *
	 * @param propNode the original property node
	 * @return the modifiers which make sense for an accessor method
	 */
	public static adjustPropertyModifiersForMethod(propNode: PropertyNode): number {
		// GROOVY-3726: clear volatile, transient modifiers so that they don't get applied to methods
		return ~(Modifier.TRANSIENT | Modifier.VOLATILE) & propNode.modifiers;
	}
}
