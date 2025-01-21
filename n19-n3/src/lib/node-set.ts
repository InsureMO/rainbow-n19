import {NodeSet as LezerNodeSet} from '@lezer/common';
import {TokenToNodeType} from './token-to-node-type';

export const NodeSet = new LezerNodeSet(Object.values(TokenToNodeType));
