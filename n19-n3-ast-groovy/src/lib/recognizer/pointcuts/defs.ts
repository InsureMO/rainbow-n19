import {GroovyAstNode} from '../../node';
import {TokenId} from '../../tokens';
import {PointcutBasis} from './basis';

export const NodePointcuts = (() => {
	return Object.keys(PointcutBasis).reduce((acc, key) => {
		const tokenId = Number(key) as TokenId;
		const pointcut = PointcutBasis[tokenId];
		if (pointcut !== 'TODO' && pointcut !== 'NotRequired') {
			acc[tokenId] = pointcut.build;
		}
		return acc;
	}, {} as Partial<{ [key in TokenId]: ((node: GroovyAstNode) => void) }>);
})();
