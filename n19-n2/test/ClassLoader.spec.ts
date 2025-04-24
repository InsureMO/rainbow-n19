import {Java} from '../src';

const {ClassCreateHelper, JREClassLoader, Modifier} = Java;

describe('ClassLoader Test', () => {
	const classLoader = new JREClassLoader('17');
	test('Add object class', async () => {
		// const clazz = new Class(classLoader, {
		// 	name: 'java.lang.Object',
		// 	modifiers: Modifier.PUBLIC,
		// 	declaredConstructors: (declaringClass) => {
		// 		return [new Constructor(declaringClass, {modifiers: Modifier.PUBLIC})];
		// 	},
		// 	declaredMethods: (declaringClass) => {
		// 		return [new Method(declaringClass, {
		// 			name: 'equals',
		// 			modifiers: Modifier.PUBLIC,
		// 			parameters: (executable) => {
		// 				return [new Parameter(executable, {name: 'obj', typeOrName: () => 'java.lang.Object'})];
		// 			},
		// 			returnedTypeOrName: () => 'boolean'
		// 		})];
		// 	}
		// });
		// classLoader.addClass(clazz);
		const udf = (void 0);
		// noinspection JSConsecutiveCommasInArrayLiteral
		ClassCreateHelper.on(classLoader)
			.class('java.lang.Object', [
				/* super class */,
				/* interfaces */,
				Modifier.PUBLIC,
				/* declared annotations */,
				/* type parameters */,
				[ /* declared constructors */
					[/* parameters */, /* throwns */, Modifier.PUBLIC, /* declared annotations */, /* type parameters */udf]
				],
				[ /* declared methods */
					['equals', [ /* parameters */
						['obj', 'java.lang.Object', Modifier.PUBLIC, /* declared annotations */ udf]
					], 'boolean', /* throwns */, Modifier.PUBLIC, /* declared annotations */, /* type parameters */udf]
				],
				/* declared fields */,
				/* enum values */udf
			]);
		console.log(classLoader);
	});
});
