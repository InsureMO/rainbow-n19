export class PositionInfo {
	private _line: number;
	private _column: number;

	constructor(line: number, column: number) {
		this._line = line;
		this._column = column;
	}

	get line(): number {
		return this._line;
	}

	setLine(line: number): void {
		this._line = line;
	}

	get column(): number {
		return this._column;
	}

	setColumn(column: number): void {
		this._column = column;
	}

	equals(o: any): boolean {
		if (this == o) {
			return true;
		}
		if (o == null || !(o instanceof PositionInfo)) {
			return false;
		}
		return this.line == o.line && this.column == o.column;
	}

	toString(): string {
		if (-1 == this.line || -1 == this.column) {
			return '';
		}

		return ' @ line ' + this.line + ', column ' + this.column;
	}
}
