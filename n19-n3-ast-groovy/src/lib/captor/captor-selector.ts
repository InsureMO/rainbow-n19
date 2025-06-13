import {AstTokenizer} from './ast-tokenizer';
import {AstNodeCaptor} from './captor';
import {CaptorDelegate} from './captor-delegate';
import {AtomicTokenDef} from './defs';
import {Char} from './types';
import {UndeterminedCharsCaptor} from './undetermined-chars-captor';

const AllCaptors = Object.values(AtomicTokenDef);
const AllButUndeterminedCharsCaptors = AllCaptors.filter(Captor => Captor !== UndeterminedCharsCaptor);
const DefaultCaptorDelegate: { instance?: CaptorDelegate } = {};

const createDefaultCaptorDelegateInstance = () => {
	const delegate = new CaptorDelegate();
	AllButUndeterminedCharsCaptors.map(Captors => {
		if (Array.isArray(Captors)) {
			Captors.forEach(Captor => delegate.register(new Captor()));
		} else {
			delegate.register(new Captors());
		}
	});
	delegate.registerFallback(new UndeterminedCharsCaptor());
	return delegate;
};

export class CaptorSelector {
	private readonly _tokenizer: AstTokenizer;
	private readonly _delegate: CaptorDelegate;

	constructor(tokenizer: AstTokenizer, captors?: CaptorDelegate) {
		this._tokenizer = tokenizer;
		this._delegate = captors ?? DefaultCaptorDelegate.instance ?? (() => {
			DefaultCaptorDelegate.instance = createDefaultCaptorDelegateInstance();
			return DefaultCaptorDelegate.instance;
		})();
	}

	protected get tokenizer(): AstTokenizer {
		return this._tokenizer;
	}

	protected get delegate(): CaptorDelegate {
		return this._delegate;
	}

	select(char: Char, offset: number): AstNodeCaptor {
		return this._delegate.find(char, offset, char, this._tokenizer);
	}

	printDefs(markdown: boolean = false): void {
		this._delegate.print(markdown);
	}
}
