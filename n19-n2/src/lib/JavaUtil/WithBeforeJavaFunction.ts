import {JavaFunction} from './JavaFunction';

export class WithBeforeJavaFunction<V, T, R> extends JavaFunction<V, R> {
	private readonly _before: JavaFunction<V, T>;
	private readonly _apply: JavaFunction<T, R>;

	constructor(before: JavaFunction<V, T>, apply: JavaFunction<T, R>) {
		super();
		this._before = before;
		this._apply = apply;
	}

	apply(t: V): R {
		return this._apply.apply(this._before.apply(t));
	}
}
