import {IClassLoader, IClassLoaderHolder} from '../Interfaces';

export abstract class AbstractClassLoaderDelegate<T extends IClassLoaderHolder> {
	private readonly _target: T;

	protected constructor(target: T) {
		this._target = target;
	}

	get target(): T {
		return this._target;
	}

	get classLoader(): IClassLoader {
		return this.target.classLoader;
	}
}
