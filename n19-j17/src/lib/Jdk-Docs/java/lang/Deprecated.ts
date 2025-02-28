import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.lang.Deprecated', [
	[/* class description */
		[/* text */ 't', `A program element annotated `],
		[/* inline code block */ 'i', `@Deprecated`],
		[/* text */ 't', ` is one that programmers
 are discouraged from using. An element may be deprecated for any of several
 reasons, for example, its usage is likely to lead to errors; it may
 be changed incompatibly or removed in a future version; it has been
 superseded by a newer, usually preferable alternative; or it is obsolete.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `Compilers issue warnings when a deprecated program element is used or
 overridden in non-deprecated code. Use of the `],
			[/* inline code block */ 'i', `@Deprecated`],
			[/* text */ 't', `
 annotation on a local variable declaration or on a parameter declaration
 or a package declaration has no effect on the warnings issued by a compiler.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `When a module is deprecated, the use of that module in `],
			[/* inline code block */ 'i', `requires`],
			[/* text */ 't', `, but not in `],
			[/* inline code block */ 'i', `exports`],
			[/* text */ 't', ` or `],
			[/* inline code block */ 'i', `opens`],
			[/* text */ 't', ` clauses causes
 a warning to be issued. A module being deprecated does `],
			[/* text */ 't', `not`],
			[/* text */ 't', ` cause
 warnings to be issued for uses of types within the module.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `This annotation type has a string-valued element `],
			[/* inline code block */ 'i', `since`],
			[/* text */ 't', `. The value
 of this element indicates the version in which the annotated program element
 was first deprecated.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `This annotation type has a boolean-valued element `],
			[/* inline code block */ 'i', `forRemoval`],
			[/* text */ 't', `.
 A value of `],
			[/* inline code block */ 'i', `true`],
			[/* text */ 't', ` indicates intent to remove the annotated program
 element in a future version. A value of `],
			[/* inline code block */ 'i', `false`],
			[/* text */ 't', ` indicates that use of
 the annotated program element is discouraged, but at the time the program
 element was annotated, there was no specific intent to remove it.`]
		]]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	/* methods */ UDF,
]);
