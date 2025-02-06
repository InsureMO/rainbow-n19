import {Class, Constructor, JREClassLoader, Method, Modifier, Parameter} from '../src/lib/Java';

describe('ClassLoader Test', () => {
	const classLoader = new JREClassLoader('17');
	test('Add object class', async () => {
		const clazz = new Class(classLoader, {
			name: 'java.lang.Object',
			modifiers: Modifier.PUBLIC
		});
		const constructor = new Constructor(clazz, {modifiers: Modifier.PUBLIC});
		clazz.setDeclaredConstructors([constructor]);
		const method = new Method(clazz, {
			name: 'equals',
			modifiers: Modifier.PUBLIC,
			returnedTypeOrName: 'boolean'
		});
		const parameter = new Parameter(method, {
			name: 'obj',
			typeOrName: 'java.lang.Object'
		});
		method.setParameters([parameter]);
		clazz.setDeclaredMethods([method]);

		classLoader.addClass(clazz);
		console.log(classLoader);
	});
});
