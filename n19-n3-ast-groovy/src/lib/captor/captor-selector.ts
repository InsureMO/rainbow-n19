import {AstVisitor} from '../ast-visitor';
import {AtomicTokenDef} from '../tokenizer';
import {AstNodeCaptor} from './captor';
import {CaptorDelegate} from './captor-delegate';
import {Char} from './types';

const AllCaptors = Object.values(AtomicTokenDef).map(([, Captor]) => Captor);

export class CaptorSelector {
	protected readonly _delegate: CaptorDelegate;

	constructor(astVisitor: AstVisitor) {
		this._delegate = new CaptorDelegate(astVisitor);
		AllCaptors.map(Captor => {
			if (Array.isArray(Captor)) {
				Captor.forEach(Captor => this._delegate.register(new Captor(astVisitor)));
			} else {
				this._delegate.register(new Captor(astVisitor));
			}
		});
	}

	select(char: Char, offset: number): AstNodeCaptor {
		return this._delegate.find(char, offset, char);
	}

	printDefs(): void {
		this._delegate.print();
	}
}
