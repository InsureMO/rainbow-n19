import {AbstractClassLoader, JREClassLoader} from '../Java';
import {GroovyClassLoader} from '../OrgCodehausGroovy';

export class DependenciesClassLoader extends AbstractClassLoader {
	constructor(parent: JREClassLoader | GroovyClassLoader) {
		super(parent);
	}
}

export class ProjectClassLoader extends AbstractClassLoader {
	constructor(parent: JREClassLoader | GroovyClassLoader | DependenciesClassLoader) {
		super(parent);
	}
}

export class FloatingClassLoader extends AbstractClassLoader {
	constructor(parent: ProjectClassLoader) {
		super(parent);
	}
}

export class EditingClassLoader extends AbstractClassLoader {
	constructor(parent: FloatingClassLoader) {
		super(parent);
	}
}
