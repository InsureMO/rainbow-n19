import {AstVisitor} from '../ast-visitor';
import {AstNodeCaptor} from './captor';
import {CaptorDelegate} from './captor-delegate';
import * as CommentCaptors from './comment';
import * as FundamentalCaptors from './fundamental';
import * as KeywordCaptors from './keyword';
import * as LiteralCaptors from './literal';
import * as OperatorCaptors from './operator';
import * as PrimitiveTypeCaptors from './primitive-type';
import * as StatementCaptors from './statement';
import * as SymbolCaptors from './symbol';
import {Char} from './types';

const AllCaptors = Object.values({
	...FundamentalCaptors,
	...SymbolCaptors,
	...KeywordCaptors,
	...PrimitiveTypeCaptors,
	...LiteralCaptors,
	...OperatorCaptors,
	...CommentCaptors,
	...StatementCaptors
});
const AllInstantiableCaptors = AllCaptors.filter(captor => !captor.name.startsWith('Abstract'));
const CaptorsExceptUndeterminedChars = AllInstantiableCaptors.filter(captor => captor !== FundamentalCaptors.UndeterminedCharsCaptor);

export class CaptorSelector {
	protected readonly _delegate: CaptorDelegate;

	constructor(astVisitor: AstVisitor) {
		this._delegate = new CaptorDelegate(astVisitor);
		this._delegate.registerFallback(new FundamentalCaptors.UndeterminedCharsCaptor(astVisitor));
		// @ts-expect-error incorrect captor type inference
		CaptorsExceptUndeterminedChars.map(Captor => this._delegate.register(new Captor(astVisitor)));
	}

	select(char: Char, offset: number): AstNodeCaptor {
		return this._delegate.find(char, offset, char);
	}

	printDefs(): void {
		this._delegate.print();
	}
}
