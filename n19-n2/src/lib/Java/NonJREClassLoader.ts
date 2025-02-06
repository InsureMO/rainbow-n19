import {AbstractClassLoader} from './AbstractClassLoader';
import {IClass} from './Interfaces';

export abstract class NonJREClassLoader extends AbstractClassLoader {
	addClass(clazz: IClass): void {
		if (clazz.isPrimitive) {
			this.root().addClass(clazz);
		} else if (clazz.isArray) {
			const baseComponentType = clazz.baseComponentType;
			if (this.onMe(baseComponentType.name)) {
				super.addClass(clazz);
			} else {
				const parent = this.parent();
				if (parent == null) {
					throw new Error(`Cannot add class[name=${clazz.name}] because of base component type not found.`);
				} else {
					parent.addClass(clazz);
				}
			}
		} else {
			super.addClass(clazz);
		}
	}
}
