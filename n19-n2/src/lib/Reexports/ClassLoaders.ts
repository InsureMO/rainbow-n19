import {JREClassLoader, NonJREClassLoader} from '../Java';
import {GroovyClassLoader} from '../OrgCodehausGroovy';

/**
 * third-party libs
 */
export class DependenciesClassLoader extends NonJREClassLoader {
	constructor(parent: JREClassLoader | GroovyClassLoader) {
		super(parent);
	}
}

/**
 * project level
 */
export class ProjectClassLoader extends NonJREClassLoader {
	constructor(parent: JREClassLoader | GroovyClassLoader | DependenciesClassLoader) {
		super(parent);
	}
}

/**
 * classes on editing, maybe not saved to disk yet, depends on IDE policy
 */
export class FloatingClassLoader extends NonJREClassLoader {
	constructor(parent: ProjectClassLoader) {
		super(parent);
	}
}

/**
 * editing class
 */
export class EditingClassLoader extends NonJREClassLoader {
	constructor(parent: FloatingClassLoader) {
		super(parent);
	}
}
