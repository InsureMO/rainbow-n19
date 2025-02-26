import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('groovy.lang.DelegatesTo', [
	[ /* class description */
		['b', `This annotation can be used by API or DSL writers to document parameters which accept a closure.
 In that case, using this annotation, you can specify what the delegate type of the closure will
 be. This is important for IDE support.`],
		['b', [['t', `This annotation can also be used to help the type checker (`], ['r', 'groovy.transform.TypeChecked'], ['t', `)
 which would not report errors then if the delegate is of the documented type. Of course, it is
 also compatible with`], ['r', 'groovy.transform.CompileStatic'], ['t', `.`]]],
		['b', `
 Example:
 `],
		['c', ` // Document the fact that the delegate of the closure will be an ExecSpec
 ExecResult exec(@DelegatesTo(ExecSpec) Closure closure) { ... }
 `],
	],
	UDF,
	/* class sees */ UDF,
	UDF, UDF, UDF
]);
