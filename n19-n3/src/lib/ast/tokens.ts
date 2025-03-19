import {NodeType} from '@lezer/common';

export enum GroovyTokenId {
	COMPILATION_UNIT = 1
}

interface GroovyToken {
	id: GroovyTokenId;
	name: string;
	top?: boolean;
}

export const GroovyTokens: { [key in keyof typeof GroovyTokenId]: GroovyToken } = {
	COMPILATION_UNIT: {id: GroovyTokenId.COMPILATION_UNIT, name: 'compilationUnit', top: true}
};

export const TokenToNodeType: { [key in keyof typeof GroovyTokenId]: NodeType } =
	Object.keys(GroovyTokens).reduce((map, key) => {
		map[key] = NodeType.define(GroovyTokens[key]);
		return map;
	}, {} as { [key in keyof typeof GroovyTokenId]: NodeType });

