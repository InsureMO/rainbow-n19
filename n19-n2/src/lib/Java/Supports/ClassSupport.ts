import {ValueOperator} from '@rainbow-n19/n1';
import {IClass, IClassLoaderHolder} from '../Interfaces';
import {ClassName} from '../TypeAlias';
import {AbstractClassLoaderDelegate} from './AbstractClassLoaderDelegate';

/**
 * to support an object which has a reference to a class
 */
export class ClassSupport<T extends IClassLoaderHolder> extends AbstractClassLoaderDelegate<T> {
	private _className: ClassName;

	constructor(target: T) {
		super(target);
	}

	/**
	 * type name without generic info, which is a class name
	 */
	get name(): ClassName {
		return this._className;
	}

	setClassName(className: ClassName): this {
		this._className = className;
		return this;
	}

	isNamePresent(): boolean {
		return ValueOperator.of(this.name).isNotBlank().ok();
	}

	/**
	 * type without generic info, which is a class
	 */
	get class(): IClass {
		return this.classLoader.findClass(this.name);
	}
}
