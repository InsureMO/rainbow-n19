import {IllegalArgumentException, IOException, RuntimeException} from '../JavaExceptions';
import {CharBuffer} from './CharBuffer';
import {Writer} from './Writer';

export interface IReader {
	read(): number;
	read(cb: Array<number>): number;
	read(cb: Array<number>, off: number, len: number): number;
	read(target: CharBuffer): number;
}

export abstract class Reader implements IReader {
	private static readonly TRANSFER_BUFFER_SIZE: number = 8192;
	/** Maximum skip-buffer size */
	private static readonly MAX_SKIP_BUFFER_SIZE: number = 8192;
	/** Skip buffer, null until allocated */
	private _skipBuffer: Array<number> /* char[] */ = null;

	static nullReader(): Reader {
		return new class extends Reader {
			private _closed: boolean;

			private ensureOpen(): void /* throws IOException */ {
				if (this._closed) {
					throw new IOException('Stream closed');
				}
			}

			read(cb?: Array<number> | CharBuffer, off?: number, len?: number): number {
				if (cb == null) {
					this.ensureOpen();
					return -1;
				} else if (!Array.isArray(cb)) {
					// CharBuffer
					this.ensureOpen();
					if (cb.hasRemaining()) {
						return -1;
					}
					return 0;
				} else if (off != null && len != null) {
					return this.doRead(cb, off, len);
				} else {
					return this.doRead(cb, 0, cb.length);
				}
			}

			doRead(cb: Array<number>, off: number, len: number): number {
				if ((cb.length | off | len) < 0 || len > cb.length - off) {
					throw new RuntimeException(`Range [${off}, ${off} + ${len}) out of bounds for length ${cb.length}.`);
				}
				this.ensureOpen();
				if (len === 0) {
					return 0;
				}
				return -1;
			}

			ready(): boolean /* throws IOException */ {
				this.ensureOpen();
				return false;
			}

			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			skip(n: number): number /* throws IOException */ {
				this.ensureOpen();
				return 0;
			}

			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			transferTo(out: Writer): number /* throws IOException */ {
				this.ensureOpen();
				return 0;
			}

			close(): void {
				this._closed = true;
			}
		}();
	}

	protected constructor() {
	}

	read(): number;
	read(cb: Array<number>): number;
	read(cb: Array<number>, off: number, len: number): number;
	read(target: CharBuffer): number;
	read(cb?: Array<number> | CharBuffer, off?: number, len?: number): number {
		if (cb == null) {
			const cb = new Array<number>(1);
			if (this.doRead(cb, 0, 1) == -1) {
				return -1;
			} else {
				return cb[0];
			}
		} else if (!Array.isArray(cb)) {
			// CharBuffer
			const len: number = cb.remaining();
			const buf = new Array<number>(len);
			const n = this.doRead(buf, 0, len);
			if (n > 0) {
				cb.put(buf, 0, n);
			}
			return n;
		} else if (off != null && len != null) {
			return this.doRead(cb, off, len);
		} else {
			return this.doRead(cb, 0, cb.length);
		}
	}

	abstract doRead(cb: Array<number> /* char[] */, off: number, len: number): number /* throws IOException */;

	skip(n: number): number /* throws IOException */ {
		if (n < 0) {
			throw new IllegalArgumentException('skip value is negative');
		}
		const nn = Math.min(n, Reader.MAX_SKIP_BUFFER_SIZE);
		if ((this._skipBuffer == null) || (this._skipBuffer.length < nn)) {
			this._skipBuffer = new Array<number>(nn);
		}
		let r: number = n;
		while (r > 0) {
			const nc = this.read(this._skipBuffer, 0, Math.min(r, nn));
			if (nc == -1) {
				break;
			}
			r -= nc;
		}
		return n - r;
	}

	ready(): boolean /* throws IOException */ {
		return false;
	}

	markSupported(): boolean {
		return false;
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	mark(readAheadLimit: number): void /* throws IOException */ {
		throw new IOException('mark() not supported');
	}

	reset(): void /* throws IOException */ {
		throw new IOException('reset() not supported');
	}

	abstract close(): void /* throws IOException */;

	transferTo(out: Writer): number /* throws IOException */ {
		let transferred = 0;
		const buffer /* char[] */ = new Array<number>(Reader.TRANSFER_BUFFER_SIZE);
		let nRead: number;
		while ((nRead = this.read(buffer, 0, Reader.TRANSFER_BUFFER_SIZE)) >= 0) {
			out.write(String.fromCharCode(...buffer));
			transferred += nRead;
		}
		return transferred;
	}
}
