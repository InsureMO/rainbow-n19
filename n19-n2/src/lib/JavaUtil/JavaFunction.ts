import {AndThenJavaFunction} from './AndThenJavaFunction';
import {IdentityJavaFunction} from './IdentityJavaFunction';
import {WithBeforeJavaFunction} from './WithBeforeJavaFunction';

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
