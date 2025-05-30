import {Optional} from '@rainbow-n19/n3-ast';
import {AstRecognition} from './recognizer';
import {
	DoDeclareAsParentWhen,
	NodeAsAncestorsDeclaration,
	NodeAsParentDeclaration,
	NodeAsParentDeclareFunc,
	RecognizeBasisDef,
	RecognizeBasisType
} from './types';

export const NodeAsParentDeclaring = {
	buildDeclareAsParent: (parent: NodeAsParentDeclaration, ...ancestors: Array<NodeAsParentDeclaration>): NodeAsParentDeclareFunc => {
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		return (_recognition: AstRecognition): NodeAsAncestorsDeclaration => [parent, ...ancestors];
	},
	buildDeclareAsParentWhenAndOtherwise: (when: DoDeclareAsParentWhen, to: NodeAsParentDeclaration, otherwise: NodeAsParentDeclaration): NodeAsParentDeclareFunc => {
		return (recognition: AstRecognition): NodeAsAncestorsDeclaration => when(recognition) ? [to] : [otherwise];
	}
} as const;

export const buildDeclareAsParentFuncs = (items?: RecognizeBasisDef): Optional<Array<NodeAsParentDeclareFunc>> => {
	if (items == null || items.length === 0) {
		return (void 0);
	}

	const funcs: Array<NodeAsParentDeclareFunc> = [];

	for (const item of items) {
		switch (item[0]) {
			case RecognizeBasisType.DeclareAsParent: {
				const [, parent, ...ancestors] = item;
				funcs.push(NodeAsParentDeclaring.buildDeclareAsParent(parent, ...ancestors));
				break;
			}
			case RecognizeBasisType.DeclareAsParentWhenAndOtherwise: {
				const [, when, to, otherwise] = item;
				funcs.push(NodeAsParentDeclaring.buildDeclareAsParentWhenAndOtherwise(when, to, otherwise));
				break;
			}
		}
	}

	return funcs;
};