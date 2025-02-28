import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.lang.Override', [
	[/* class description */
		[/* text */ 't', `Indicates that a method declaration is intended to override a
 method declaration in a supertype. If a method is annotated with
 this annotation type compilers are required to generate an error
 message unless at least one of the following conditions hold:

 `],
		[/* list */ 'l', [
			[/* block */ 'b', `
 The method does override or implement a method declared in a
 supertype.
 `],
			[/* block */ 'b', [
				[/* text */ 't', `
 The method has a signature that is override-equivalent to that of
 any public method declared in `],
				[/* reference */ 'r', `java.lang.Object`],
				[/* text */ 't', `.
 `]
			]]
		]]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	/* methods */ UDF,
]);
