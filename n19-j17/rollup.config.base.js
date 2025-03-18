import {babel} from '@rollup/plugin-babel';
import eslint from '@rollup/plugin-eslint';
import typescript from 'rollup-plugin-typescript2';

export const buildConfig = (lint) => {
	// ['./index.d.ts', './index.js', './index.cjs', './lib'].forEach(f => {
	// 	const cwd = path.resolve(process.cwd(), f);
	// 	if (fs.existsSync(cwd)) {
	// 		fs.rmSync(cwd, {recursive: true, force: true});
	// 	}
	// });

	const type = process.env.BUILD_TYPE || 'index';

	return [
		['./src/index.ts', './index.cjs', 'index'],
		['./src/classes.ts', './classes.cjs', 'classes'],
		['./src/docs.ts', './docs.cjs', 'docs']
	].filter(([, , t]) => t === type)
		.map(([input, cjs]) => {
			return {
				input,
				output: [
					{format: 'es', dir: '.'},
					{format: 'cjs', file: cjs}
				],
				plugins: [
					lint ? eslint({exclude: ['../node_modules/**', 'node_modules/**']}) : null,
					// lint ? tslint({exclude: ['../node_modules/**', 'node_modules/**']}) : null,
					typescript({clean: true}),
					babel({babelHelpers: 'bundled'})
				].filter(x => x != null),
				external(id) {
					return ['@rainbow-n19/n2'].includes(id);
				}
			}
		});
};
