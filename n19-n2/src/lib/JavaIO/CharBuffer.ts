import {BufferOverflowException, IndexOutOfBoundsException} from '../JavaExceptions';

export interface ICharBuffer {
	put(c: number /* char */): this;
	put(src: Array<number> /* char[] */): this;
	put(buf: Array<number>, offset: number, length: number): this;
}

export class CharBuffer implements ICharBuffer {
	private readonly _limit: number;
	private _position = 0;
	private readonly _buf: Array<number>;

	/**
	 * @param limit starts from 0
	 * @param position starts from 0
	 */
	constructor(limit: number, position: number = 0) {
		this._position = position;
		this._limit = limit;
		this._buf = new Array<number>(this._limit - 1);
	}

	remaining() {
		const rem = this._limit - this._position;
		return rem > 0 ? rem : 0;
	}

	checkBounds(off: number, len: number, size: number): void { // package-private
		if ((off | len | (off + len) | (size - (off + len))) < 0) {
			throw new IndexOutOfBoundsException();
		}
	}

	put(c: number): this;
	put(src: Array<number>): this;
	put(buf: Array<number>, offset: number, length: number): this;
	put(c: number | Array<number>, offset?: number, length?: number): this {
		if (typeof c === 'number') {
			return this.doPut([c], this._position, 1);
		} else if (offset != null && length != null) {
			return this.doPut(c, offset, length);
		} else {
			return this.doPut(c, 0, c.length);
		}
	}

	protected doPut(c: Array<number>, offset: number, length: number): this {
		this.checkBounds(offset, length, c.length);
		if (length > this.remaining()) {
			throw new BufferOverflowException();
		}
		const end = offset + length;
		for (let i = offset; i < end; i++) {
			this._buf[this._position] = c[i];
			this._position = this._position + 1;
		}

		return this;
	}

	hasRemaining() {
		return this._position < this._limit;
	}
}
