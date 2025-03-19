import {Optional} from '@rainbow-n19/n2';

export class Vocabulary {
	private static readonly EMPTY_NAMES: Array<string> = [];
	static readonly EMPTY_VOCABULARY: Vocabulary = new Vocabulary(Vocabulary.EMPTY_NAMES, Vocabulary.EMPTY_NAMES, Vocabulary.EMPTY_NAMES);
	private readonly _literalNames: Array<string>;
	private readonly _symbolicNames: Array<string>;
	private readonly _displayNames: Array<string>;
	private readonly _maxTokenType: number;

	constructor(literalNames: Array<string>, symbolicNames: Array<string>, displayNames?: Array<string>) {
		this._literalNames = literalNames != null ? literalNames : Vocabulary.EMPTY_NAMES;
		this._symbolicNames = symbolicNames != null ? symbolicNames : Vocabulary.EMPTY_NAMES;
		this._displayNames = displayNames != null ? displayNames : Vocabulary.EMPTY_NAMES;
		this._maxTokenType = Math.max(this._displayNames.length, Math.max(this._literalNames.length, this._symbolicNames.length)) - 1;
	}

	static fromTokenNames(tokenNames: Array<string>): Vocabulary {
		if (tokenNames != null && tokenNames.length != 0) {
			const literalNames = [...tokenNames];
			const symbolicNames = [...tokenNames];

			for (let i = 0; i < tokenNames.length; ++i) {
				const tokenName = tokenNames[i];
				if (tokenName != null) {
					if (tokenName.length !== 0) {
						const firstChar = tokenName.charAt(0);
						if (firstChar == '\'') {
							symbolicNames[i] = null;
							continue;
						}

						if (firstChar.toUpperCase() === firstChar) {
							literalNames[i] = null;
							continue;
						}
					}

					literalNames[i] = null;
					symbolicNames[i] = null;
				}
			}

			return new Vocabulary(literalNames, symbolicNames, tokenNames);
		} else {
			return Vocabulary.EMPTY_VOCABULARY;
		}
	}

	get maxTokenType(): number {
		return this._maxTokenType;
	}

	getLiteralName(tokenType: number): Optional<string> {
		if (tokenType >= 0 && tokenType < this._literalNames.length) {
			return this._literalNames[tokenType];
		} else {
			return null;
		}
	}

	getSymbolicName(tokenType: number): Optional<string> {
		if (tokenType >= 0 && tokenType < this._symbolicNames.length) {
			return this._symbolicNames[tokenType];
		} else {
			return tokenType == -1 ? 'EOF' : null;
		}
	}

	getDisplayName(tokenType: number): string {
		if (tokenType >= 0 && tokenType < this._displayNames.length) {
			const displayName = this._displayNames[tokenType];
			if (displayName != null) {
				return displayName;
			}
		}

		const literalName = this.getLiteralName(tokenType);
		if (literalName != null) {
			return literalName;
		} else {
			const symbolicName = this.getSymbolicName(tokenType);
			return symbolicName != null ? symbolicName : `${tokenType}`;
		}
	}
}
