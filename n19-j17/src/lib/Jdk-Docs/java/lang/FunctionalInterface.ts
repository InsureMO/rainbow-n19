import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.lang.FunctionalInterface', [
	[/* class description */
		[/* text */ 't', `An informative annotation type used to indicate that an interface
 type declaration is intended to be a `],
		[/* text */ 't', `functional interface`],
		[/* text */ 't', ` as
 defined by the Java Language Specification.

 Conceptually, a functional interface has exactly one abstract
 method.  Since `],
		[/* external link */ 'a', `reflect/Method.html#isDefault()`, `default methods`],
		[/* text */ 't', ` have an implementation, they are not abstract.  If
 an interface declares an abstract method overriding one of the
 public methods of `],
		[/* inline code block */ 'i', `java.lang.Object`],
		[/* text */ 't', `, that also does
 `],
		[/* text */ 't', `not`],
		[/* text */ 't', ` count toward the interface's abstract method count
 since any implementation of the interface will have an
 implementation from `],
		[/* inline code block */ 'i', `java.lang.Object`],
		[/* text */ 't', ` or elsewhere.

 `],
		[/* block */ 'b', `Note that instances of functional interfaces can be created with
 lambda expressions, method references, or constructor references.

 `],
		[/* block */ 'b', `If a type is annotated with this annotation type, compilers are
 required to generate an error message unless:

 `],
		[/* list */ 'l', [
			[/* block */ 'b', ` The type is an interface type and not an annotation type, enum, or class.
 `],
			[/* block */ 'b', ` The annotated type satisfies the requirements of a functional interface.
 `]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `However, the compiler will treat any interface meeting the
 definition of a functional interface as a functional interface
 regardless of whether or not a `],
			[/* inline code block */ 'i', `FunctionalInterface`],
			[/* text */ 't', `
 annotation is present on the interface declaration.`]
		]]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	/* methods */ UDF,
]);
