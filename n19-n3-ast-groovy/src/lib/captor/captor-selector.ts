import {AstTokenizer} from './ast-tokenizer';
import {AstNodeCaptor} from './captor';
import {CaptorDelegate} from './captor-delegate';
import {AtomicTokenDef} from './defs';
import {Char} from './types';
import {UndeterminedCharsCaptor} from './undetermined-chars-captor';

const AllCaptors = Object.values(AtomicTokenDef);
const AllButUndeterminedCharsCaptors = AllCaptors.filter(Captor => Captor !== UndeterminedCharsCaptor);

export class CaptorSelector {
	protected readonly _delegate: CaptorDelegate;

	constructor(tokenizer: AstTokenizer) {
		this._delegate = new CaptorDelegate(tokenizer);
		AllButUndeterminedCharsCaptors.map(Captors => {
			if (Array.isArray(Captors)) {
				Captors.forEach(Captor => this._delegate.register(new Captor(tokenizer)));
			} else {
				this._delegate.register(new Captors(tokenizer));
			}
		});
		this._delegate.registerFallback(new UndeterminedCharsCaptor(tokenizer));
	}

	select(char: Char, offset: number): AstNodeCaptor {
		return this._delegate.find(char, offset, char);
	}

	printDefs(): void {
		this._delegate.print();
	}
}
