import {AstNode} from '../ast-node';
import {TokenId} from '../tokens';
import {AbstractStatementEndByRBraceAstNode} from './abstract-statement-node';

export abstract class AbstractTypeDeclarationNode extends AbstractStatementEndByRBraceAstNode {
	/**
	 * any node could be child of me
	 */
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	protected couldBeChildOfMe(_node: AstNode): boolean {
		return true;
	}
}

export class InterfaceDeclarationNode extends AbstractTypeDeclarationNode {
	get tokenId(): TokenId {
		return TokenId.InterfaceDeclaration;
	}
}

export class ClassDeclarationNode extends AbstractTypeDeclarationNode {
	get tokenId(): TokenId {
		return TokenId.ClassDeclaration;
	}
}

export class AtInterfaceDeclarationNode extends AbstractTypeDeclarationNode {
	get tokenId(): TokenId {
		return TokenId.AtInterfaceClassDeclaration;
	}
}

export class EnumClassDeclarationNode extends AbstractTypeDeclarationNode {
	get tokenId(): TokenId {
		return TokenId.EnumClassDeclaration;
	}
}

export class RecordClassDeclarationNode extends AbstractTypeDeclarationNode {
	get tokenId(): TokenId {
		return TokenId.RecordClassDeclaration;
	}
}

export class TraitClassDeclarationNode extends AbstractTypeDeclarationNode {
	get tokenId(): TokenId {
		return TokenId.TraitClassDeclaration;
	}
}
