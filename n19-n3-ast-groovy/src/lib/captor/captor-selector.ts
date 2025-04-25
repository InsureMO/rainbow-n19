import {AstVisitor} from '../ast-visitor';
import {AstNodeCaptor} from './captor';
import {CaptorDelegate} from './captor-delegate';
import {AtomicTokenDef} from './tokenizer';
import {Char} from './types';
import {UndeterminedCharsCaptor} from './undetermined-chars-captor';

const AllCaptors = Object.values(AtomicTokenDef).map(([, Captor]) => Captor);
const AllButUndeterminedCharsCaptors = AllCaptors.filter(Captor => Captor !== UndeterminedCharsCaptor);

export class CaptorSelector {
	protected readonly _delegate: CaptorDelegate;

	constructor(astVisitor: AstVisitor) {
		this._delegate = new CaptorDelegate(astVisitor);
		AllButUndeterminedCharsCaptors.map(Captor => {
			if (Array.isArray(Captor)) {
				Captor.forEach(Captor => this._delegate.register(new Captor(astVisitor)));
			} else {
				this._delegate.register(new Captor(astVisitor));
			}
		});
		this._delegate.registerFallback(new UndeterminedCharsCaptor(astVisitor));
	}

	select(char: Char, offset: number): AstNodeCaptor {
		return this._delegate.find(char, offset, char);
	}

	printDefs(): void {
		this._delegate.print();
	}
}
