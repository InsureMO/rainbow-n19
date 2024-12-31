import {Modifier, ModifiersValue} from '../Java';
import {ClassNode} from './ClassNode';
import {Parameter} from './Parameter';

export class AstToTextHelper {
	static getClassText(node: ClassNode): string {
		if (node == null) {
			return '<unknown>';
		}
		return node.toString(false);
	}

	static getParameterText(node: Parameter): string {
		if (node == null) {
			return '<unknown>';
		}

		let name = node.name;
		if (name == null) {
			name = '<unknown>';
		}
		const type = AstToTextHelper.getClassText(node.type);

		let text = type + ' ' + name;
		if (node.hasInitialExpression()) {
			text += ' = ' + node.initialExpression.text;
		}
		return text;
	}

	static getParametersText(parameters: Array<Parameter>): string {
		return (parameters ?? []).map(parameter => {
			return AstToTextHelper.getParameterText(parameter);
		}).join(', ');
	}

	static getThrowsClauseText(exceptions: Array<ClassNode>): string {
		const throwns = (exceptions ?? []).map(exception => {
			return AstToTextHelper.getClassText(exception);
		}).join(', ');

		return throwns.length === 0 ? '' : `throws ${throwns}`;
	}

	static getModifiersText(modifiers: ModifiersValue): string {
		const keywords: Array<string> = [];
		if (Modifier.isPrivate(modifiers)) {
			keywords.push('private');
		}
		if (Modifier.isProtected(modifiers)) {
			keywords.push('protected');
		}
		if (Modifier.isPublic(modifiers)) {
			keywords.push('public');
		}
		if (Modifier.isStatic(modifiers)) {
			keywords.push('static');
		}
		if (Modifier.isAbstract(modifiers)) {
			keywords.push('abstract');
		}
		if (Modifier.isFinal(modifiers)) {
			keywords.push('final');
		}
		if (Modifier.isInterface(modifiers)) {
			keywords.push('interface');
		}
		if (Modifier.isNative(modifiers)) {
			keywords.push('native');
		}
		if (Modifier.isSynchronized(modifiers)) {
			keywords.push('synchronized');
		}
		if (Modifier.isTransient(modifiers)) {
			keywords.push('transient');
		}
		if (Modifier.isVolatile(modifiers)) {
			keywords.push('volatile');
		}
		return keywords.join(' ');
	}
}
