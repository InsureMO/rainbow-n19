import {Groovy, Java} from '@rainbow-n19/n2';

export class GroovyClassLoader extends Groovy.GroovyClassLoader {
	constructor(parent?: Java.JREClassLoader) {
		super(parent, '4.0.25');
	}

	vendor(): string {
		return 'The Apache Software Foundation';
	}
}

export const GroovyClassCreateHelper = new Java.ClassCreateHelper(new GroovyClassLoader());
export const createGroovyClassLoader = (parent: Java.JREClassLoader): GroovyClassLoader => {
	const classLoader = GroovyClassCreateHelper.classLoader;
	classLoader.setParent(parent);
	return classLoader as GroovyClassLoader;
};
