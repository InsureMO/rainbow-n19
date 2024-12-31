import {JavaFunction} from './JavaFunction';

export class AndThenJavaFunction<T, R, V> extends JavaFunction<T, V> {
	private readonly _apply: JavaFunction<T, R>;
	private readonly _after: JavaFunction<R, V>;

	constructor(apply: JavaFunction<T, R>, after: JavaFunction<R, V>) {
		super();
		this._apply = apply;
		this._after = after;
	}

	apply(t: T): V {
		return this._after.apply(this._apply.apply(t));
	}
}
