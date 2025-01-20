export abstract class JavaFunction<T, R> {
	abstract apply(t: T): R;

	compose<V>(before: JavaFunction<V, T>): JavaFunction<V, R> {
		return new WithBeforeJavaFunction(before, this);
	}

	andThen<V>(after: JavaFunction<R, V>): JavaFunction<T, V> {
		return new AndThenJavaFunction(this, after);
	}

	static identity<T>(): JavaFunction<T, T> {
		return new IdentityJavaFunction<T>();
	}
}

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

export class IdentityJavaFunction<T> extends JavaFunction<T, T> {
	apply(t: T): T {
		return t;
	}
}
