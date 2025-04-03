import {TokenId} from '../tokens';
import {AbstractAstNode} from './abstract-node';

export abstract class AbstractPrimitiveTypeNode extends AbstractAstNode {
}

export class PtBooleanNode extends AbstractPrimitiveTypeNode {
	get tokenId(): TokenId {
		return TokenId.BOOLEAN;
	}
}

export class PtCharNode extends AbstractPrimitiveTypeNode {
	get tokenId(): TokenId {
		return TokenId.CHAR;
	}
}

export class PtByteNode extends AbstractPrimitiveTypeNode {
	get tokenId(): TokenId {
		return TokenId.BYTE;
	}
}

export class PtShortNode extends AbstractPrimitiveTypeNode {
	get tokenId(): TokenId {
		return TokenId.SHORT;
	}
}

export class PtIntNode extends AbstractPrimitiveTypeNode {
	get tokenId(): TokenId {
		return TokenId.INT;
	}
}

export class PtLongNode extends AbstractPrimitiveTypeNode {
	get tokenId(): TokenId {
		return TokenId.LONG;
	}
}

export class PtFloatNode extends AbstractPrimitiveTypeNode {
	get tokenId(): TokenId {
		return TokenId.FLOAT;
	}
}

export class PtDoubleNode extends AbstractPrimitiveTypeNode {
	get tokenId(): TokenId {
		return TokenId.DOUBLE;
	}
}
