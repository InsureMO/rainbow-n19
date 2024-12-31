import {Statement} from './Statement';

export interface LoopingStatement {
	/**
	 * Gets the loop block.
	 */
	readonly loopBlock: Statement;
	/**
	 * Sets the loop block.
	 */
	setLoopBlock(loopBlock: Statement): void;
}
