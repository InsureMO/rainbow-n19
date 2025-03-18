import {createGroovyClassLoader} from '@rainbow-n19/g4/classes';
import {JdkClassLoader} from '@rainbow-n19/j17/classes';
import {
	DependenciesClassLoader,
	EditingClassDocs,
	EditingClassLoader,
	FloatingClassDocs,
	FloatingClassLoader,
	ImmutableClassDocs,
	ProjectClassDocs,
	ProjectClassLoader
} from '@rainbow-n19/n2';
import {GroovyEditor} from '@rainbow-n19/n5';
import React, {useEffect, useState} from 'react';
import TestGroovy1 from './test-groovy-1.groovy';

export const createDefaultClassLoader = (): EditingClassLoader => {
	const GroovyClassLoader = createGroovyClassLoader(JdkClassLoader);
	const dependenciesClassLoader = new DependenciesClassLoader(GroovyClassLoader);
	const projectClassLoader = new ProjectClassLoader(dependenciesClassLoader);
	const floatingClassLoader = new FloatingClassLoader(projectClassLoader);
	return new EditingClassLoader(floatingClassLoader);
};

export const createDefaultClassDocs = async (): Promise<EditingClassDocs> => {
	const immutableClassDocs = new ImmutableClassDocs();
	const {DocsCollector: J17DocsCollector} = await import('@rainbow-n19/j17/docs');
	J17DocsCollector.consume(immutableClassDocs);
	const {DocsCollector: G4DocsCollector} = await import('@rainbow-n19/g4/docs');
	G4DocsCollector.consume(immutableClassDocs);
	const projectClassLoader = new ProjectClassDocs(immutableClassDocs);
	const floatingClassLoader = new FloatingClassDocs(projectClassLoader);
	return new EditingClassDocs(floatingClassLoader);
};

interface EditorState {
	content?: string;
	classLoader: EditingClassLoader;
	classDocs?: EditingClassDocs;
}

export const Editor = () => {
	const [state, setState] = useState<EditorState>({
		content: TestGroovy1,
		classLoader: createDefaultClassLoader(),
		classDocs: (void 0)
	});
	useEffect(() => {
		(async () => {
			const classDocs = await createDefaultClassDocs();
			setState(state => ({
				...state, classDocs
			}));
		})();

	}, []);

	const onContentChanged = (content: string) => {
		// console.log(content);
		setState(state => ({...state, content}));
	};

	return <GroovyEditor initContent={TestGroovy1} contentChanged={onContentChanged}
	                     classLoader={state.classLoader}
	                     classDocs={state.classDocs}/>;
};
