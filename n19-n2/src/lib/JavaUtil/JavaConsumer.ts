import {AndThenJavaConsumer} from './AndThenJavaConsumer';

export abstract class JavaConsumer<T> {
	abstract accept(t: T): void;

	andThen(after: JavaConsumer<T>): JavaConsumer<T> {
		return new AndThenJavaConsumer(this, after);
	}
}
