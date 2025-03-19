import {GroovyTokenId} from './tokens';

export interface GroovyAstNode {
	tokenId: GroovyTokenId;
	startOffset: number;
	endOffset: number;
	/** end offset of code mirror, physical offset + 1 */
	endOffsetOfCM: number;
}
