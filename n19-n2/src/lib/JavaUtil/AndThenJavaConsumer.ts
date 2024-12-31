import {JavaConsumer} from './JavaConsumer';

export class AndThenJavaConsumer<T> extends JavaConsumer<T> {
	private readonly _apply: JavaConsumer<T>;
	private readonly _after: JavaConsumer<T>;

	constructor(apply: JavaConsumer<T>, after: JavaConsumer<T>) {
		super();
		this._apply = apply;
		this._after = after;
	}

	accept(t: T): void {
		this._apply.accept(t);
		this._after.accept(t);
	}
}
