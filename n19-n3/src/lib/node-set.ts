import {NodeSet as LezerNodeSet} from '@lezer/common';
import {styleTags} from '@lezer/highlight';
import {GroovyTags} from './syntax-highlight';
import {TokenToNodeType} from './token-to-node-type';

export const NodeSet = new LezerNodeSet(Object.values(TokenToNodeType)).extend(styleTags({
	CLASS: GroovyTags.CLASS,
	INTERFACE: GroovyTags.INTERFACE
}));
