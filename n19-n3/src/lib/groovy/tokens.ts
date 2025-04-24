import {NodeType} from '@lezer/common';
import {Tokens} from '@rainbow-n19/n3-ast-groovy';

export const TokenToNodeTypes: Array<NodeType> = (() => {
	const tokens = Object.values(Tokens);
	const types: Array<NodeType> = new Array(tokens.length).fill(null);
	tokens.forEach(token => types[token.id] = NodeType.define(token));
	const notDefined: Array<number> = [];
	const incorrectIndexes: Array<{ def: NodeType, index: number }> = [];
	types.forEach((type, index) => {
		if (type == null) {
			notDefined.push(index);
		} else if (type.id !== index) {
			incorrectIndexes.push({def: type, index});
		}
	});
	const error: Array<string> = [];
	if (notDefined.length !== 0) {
		error.push(`not defined[${notDefined.join(', ')}]`);
	}
	if (incorrectIndexes.length !== 0) {
		error.push(`mismatched[${incorrectIndexes.map(({def, index}) => {
			return `[defId=${def.id}, defName=${def.name}, index=${index}, expect=${Tokens[index]?.name ?? 'TBD'}]`;
		}).join(', ')}]`);
	}
	if (error.length !== 0) {
		throw new Error(`Error occurred in node type definition, ${error.join(', ')}.`);
	}
	return types;
})();

