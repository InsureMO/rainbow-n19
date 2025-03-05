import {Groovy, Java} from '@rainbow-n19/n2';

export class GroovyClassLoader extends Groovy.GroovyClassLoader {
	constructor(parent: Java.JREClassLoader) {
		super(parent, '4.0.25');
	}

	vendor(): string {
		return 'The Apache Software Foundation';
	}
}

export const GroovyClassCreateHelper = Java.ClassCreateHelper.intermediary();
export const createGroovyClassLoader = (parent: Java.JREClassLoader): GroovyClassLoader => {
	const classLoader = new GroovyClassLoader(parent);
	GroovyClassCreateHelper.passAllMyClassesTo(classLoader);
	return classLoader;
}
