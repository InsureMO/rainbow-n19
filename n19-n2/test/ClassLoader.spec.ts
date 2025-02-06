import {Class, Constructor, JREClassLoader, Method, Modifier, Parameter} from '../src/lib/Java';

describe('ClassLoader Test', () => {
	const classLoader = new JREClassLoader('17');
	test('Add object class', async () => {
		const clazz = new Class(classLoader, {
			name: 'java.lang.Object',
			modifiers: Modifier.PUBLIC,
			declaredConstructors: (declaringClass) => {
				return [new Constructor(declaringClass, {modifiers: Modifier.PUBLIC})];
			},
			declaredMethods: (declaringClass) => {
				return [new Method(declaringClass, {
					name: 'equals',
					modifiers: Modifier.PUBLIC,
					parameters: (executable) => {
						return [new Parameter(executable, {name: 'obj', typeOrName: 'java.lang.Object'})];
					},
					returnedTypeOrName: 'boolean'
				})];
			}
		});
		classLoader.addClass(clazz);
		console.log(classLoader);
	});
});
