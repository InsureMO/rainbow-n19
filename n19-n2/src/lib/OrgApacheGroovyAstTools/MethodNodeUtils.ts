import {ClassHelper, MethodNode} from '../OrgCodehausGroovyAst';
import {BlockStatement} from '../OrgCodehausGroovyAstStmt';
import {BeanUtils} from '../OrgCodehausGroovyAstTools';
import {Optional} from '../TsAddon';
import {ClassNodeUtils} from './ClassNodeUtils';

export class MethodNodeUtils {
	private constructor() {
		// avoid extend
	}

	/**
	 * Return the method node's descriptor including its
	 * name and parameter types without generics.
	 *
	 * @param mNode the method node
	 * @return the method node's abbreviated descriptor excluding the return type
	 */
	static methodDescriptorWithoutReturnType(mNode: MethodNode): string {
		let sb: string = '';
		sb = sb + mNode.name + ':';
		for (const p of mNode.parameters) {
			sb = sb + ClassNodeUtils.formatTypeName(p.type) + ',';
		}
		return sb;
	}

	/**
	 * Return the method node's descriptor which includes its return type,
	 * name and parameter types without generics.
	 *
	 * @param mNode the method node
	 * @param pretty whether to quote a name with spaces
	 * @return the method node's descriptor
	 */
	static methodDescriptor(mNode: MethodNode, pretty: boolean = false): string {
		const name = mNode.name;
		if (pretty) {
			pretty = name.includes(' ');
		}
		const parameters = mNode.parameters;
		const nParameters = parameters == null ? 0 : parameters.length;

		let sb = '';
		sb = sb + ClassNodeUtils.formatTypeName(mNode.returnType);
		sb = sb + ' ';
		if (pretty) {
			sb = sb + '"';
		}
		sb = sb + name;
		if (pretty) {
			sb = sb + '"';
		}
		sb = sb + '(';
		for (let i = 0; i < nParameters; i += 1) {
			if (i > 0) {
				sb = sb + ', ';
			}
			sb = sb + ClassNodeUtils.formatTypeName(parameters[i].type);
		}
		sb = sb + ')';
		return sb;
	}

	/**
	 * For a method node potentially representing a property, returns the name of the property.
	 *
	 * @param mNode a MethodNode
	 * @return the property name without the get/set/is prefix if a property or null
	 */
	static getPropertyName(mNode: MethodNode): Optional<string> {
		const name = mNode.name;
		const nameLength = name.length;
		if (nameLength > 2) {
			switch (name.charAt(0)) {
				case 'g':
					if (nameLength > 3 && name.charAt(1) == 'e' && name.charAt(2) == 't' && mNode.parameters.length == 0 && !mNode.isVoidMethod) {
						return BeanUtils.decapitalize(name.substring(3));
					}
					break;
				case 's':
					if (nameLength > 3 && name.charAt(1) == 'e' && name.charAt(2) == 't' && mNode.parameters.length == 1 /*&& mNode.isVoidMethod()*/) {
						return BeanUtils.decapitalize(name.substring(3));
					}
					break;
				case 'i':
					if (name.charAt(1) == 's' && mNode.parameters.length == 0 && (ClassHelper.isPrimitiveBoolean(mNode.returnType) /*|| isWrapperBoolean(mNode.returnType)*/)) {
						return BeanUtils.decapitalize(name.substring(2));
					}
					break;
			}
		}
		return null;
	}

	/**
	 * Gets the code for a method (or constructor) as a block.
	 * If no code is found, an empty block will be returned.
	 * If a single non-block statement is found, a block containing that statement will be returned.
	 * Otherwise the existing block statement will be returned.
	 * The original {@code node} is not modified.
	 *
	 * @param mNode the method (or constructor) node
	 * @return the found or created block statement
	 */
	static getCodeAsBlock(mNode: MethodNode): BlockStatement {
		const code = mNode.code;
		let block: BlockStatement;
		if (code == null) {
			block = new BlockStatement();
		} else if (!(code instanceof BlockStatement)) {
			block = new BlockStatement();
			block.addStatement(code);
		} else {
			block = code;
		}
		return block;
	}

	/**
	 * Determines if given method is a getter candidate.
	 *
	 * @since 4.0.0
	 */
	static isGetterCandidate(mNode: MethodNode): boolean {
		const parameters = mNode.parameters;
		return (parameters == null || parameters.length == 0)
			&& mNode.isPublic && !mNode.isStatic && !mNode.isAbstract && !mNode.isVoidMethod;
	}
}
