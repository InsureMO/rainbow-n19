import {AbstractClassLoader, JREClassLoader} from '../Java';
import {GroovyClassLoader} from '../OrgCodehausGroovy';

/**
 * third-party libs
 */
export class DependenciesClassLoader extends AbstractClassLoader {
	constructor(parent: JREClassLoader | GroovyClassLoader) {
		super(parent);
	}
}

/**
 * project level
 */
export class ProjectClassLoader extends AbstractClassLoader {
	constructor(parent: JREClassLoader | GroovyClassLoader | DependenciesClassLoader) {
		super(parent);
	}
}

/**
 * classes on editing, maybe not saved to disk yet, depends on IDE policy
 */
export class FloatingClassLoader extends AbstractClassLoader {
	constructor(parent: ProjectClassLoader) {
		super(parent);
	}
}

/**
 * editing class
 */
export class EditingClassLoader extends AbstractClassLoader {
	constructor(parent: FloatingClassLoader) {
		super(parent);
	}
}
