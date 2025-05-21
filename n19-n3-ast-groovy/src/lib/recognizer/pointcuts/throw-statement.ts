import {GroovyAstNode} from '../../node';
import {$Neaf} from './neaf';

export class ThrowStatement {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	static readonly extra = (node: GroovyAstNode): void => {
		$Neaf.of(node)
			.EndWithSemicolon();
	};
}
