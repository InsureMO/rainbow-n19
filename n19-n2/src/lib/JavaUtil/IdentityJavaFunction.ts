import {JavaFunction} from './JavaFunction';

export class IdentityJavaFunction<T> extends JavaFunction<T, T> {
	apply(t: T): T {
		return t;
	}
}
