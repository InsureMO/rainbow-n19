import {IllegalArgumentException, IndexOutOfBoundsException, IOException} from '../JavaExceptions';
import {CharBuffer} from './CharBuffer';
import {Reader} from './Reader';

export class StringReader extends Reader {
	private _str: string;
	private readonly _length: number;
	private _next: number = 0;
	private _mark: number = 0;

	constructor(s: string) {
		super();
		this._str = s;
		this._length = s.length;
	}

	private ensureOpen(): void /* throws IOException */ {
		if (this._str == null) {
			throw new IOException('Stream closed');
		}
	}

	read(cb?: Array<number> | CharBuffer, off?: number, len?: number): number {
		if (cb == null) {
			this.ensureOpen();
			if (this._next >= this._length) {
				return -1;
			}
			return this._str.charAt(this._next++).charCodeAt(0);
		} else if (!Array.isArray(cb)) {
			return super.read(cb);
		} else {
			return super.read(cb, off, len);
		}
	}

	doRead(cb: Array<number>, off: number, len: number): number {
		this.ensureOpen();
		if ((off < 0) || (off > cb.length) || (len < 0) || ((off + len) > cb.length) || ((off + len) < 0)) {
			throw new IndexOutOfBoundsException();
		} else if (len == 0) {
			return 0;
		}
		if (this._next >= this._length) {
			return -1;
		}
		const n = Math.min(this._length - this._next, len);
		// java code: this._str.getChars(this._next, this._next + n, cb, off);
		for (let i = 0; i < n; i++) {
			cb[off + i] = this._str.charCodeAt(this._next + i);
		}
		for (let i = off + len; i < len; i++) {
			cb[i] = (void 0);
		}
		this._next += n;
		return n;
	}

	skip(ns: number): number /* throws IOException */ {
		this.ensureOpen();
		if (this._next >= this._length) {
			return 0;
		}
		// Bound skip by beginning and end of the source
		let n = Math.min(this._length - this._next, ns);
		n = Math.max(-this._next, n);
		this._next += n;
		return n;
	}

	ready(): boolean /* throws IOException */ {
		this.ensureOpen();
		return true;
	}

	markSupported(): boolean {
		return true;
	}

	mark(readAheadLimit: number): void /* throws IOException */ {
		if (readAheadLimit < 0) {
			throw new IllegalArgumentException('Read-ahead limit < 0');
		}
		this.ensureOpen();
		this._mark = this._next;
	}

	reset(): void /* throws IOException */ {
		this.ensureOpen();
		this._next = this._mark;
	}

	close(): void {
		this._str = null;
	}
}