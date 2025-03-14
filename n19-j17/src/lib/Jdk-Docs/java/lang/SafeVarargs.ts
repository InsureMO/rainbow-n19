import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.lang.SafeVarargs', [
	[/* class description */
		[/* text */ 't', `A programmer assertion that the body of the annotated method or
 constructor does not perform potentially unsafe operations on its
 varargs parameter.  Applying this annotation to a method or
 constructor suppresses unchecked warnings about a
 `],
		[/* text */ 't', `non-reifiable`],
		[/* text */ 't', ` variable arity (vararg) type and suppresses
 unchecked warnings about parameterized array creation at call
 sites.

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` In addition to the usage restrictions imposed by its `],
			[/* reference */ 'r', `annotation interface in java.lang.annotation.Target`, `@Target`],
			[/* text */ 't', ` meta-annotation, compilers are required to implement
 additional usage restrictions on this annotation type; it is a
 compile-time error if a method or constructor declaration is
 annotated with a `],
			[/* inline code block */ 'i', `@SafeVarargs`],
			[/* text */ 't', ` annotation, and either:
 `]
		]],
		[/* list */ 'l', [
			[/* block */ 'b', `  the declaration is a fixed arity method or constructor

 `],
			[/* block */ 'b', [
				[/* text */ 't', ` the declaration is a variable arity method that is neither
 `],
				[/* inline code block */ 'i', `static`],
				[/* text */ 't', ` nor `],
				[/* inline code block */ 'i', `final`],
				[/* text */ 't', ` nor `],
				[/* inline code block */ 'i', `private`],
				[/* text */ 't', `.

 `]
			]]
		]],
		[/* text */ 't', `

 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', ` Compilers are encouraged to issue warnings when this annotation
 type is applied to a method or constructor declaration where:

 `],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* text */ 't', ` The variable arity parameter has a reifiable element type,
 which includes primitive types, `],
				[/* inline code block */ 'i', `Object`],
				[/* text */ 't', `, and `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', `.
 (The unchecked warnings this annotation type suppresses already do
 not occur for a reifiable element type.)

 `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', ` The body of the method or constructor declaration performs
 potentially unsafe operations, such as an assignment to an element
 of the variable arity parameter's array that generates an unchecked
 warning.  Some unsafe operations do not trigger an unchecked
 warning.  For example, the aliasing in

 `],
				[/* block */ 'b', [
					[/* code block */ 'c', ` @SafeVarargs // Not actually safe!
 static void m(List<String>... stringLists) {
   Object[] array = stringLists;
   List<Integer> tmpList = Arrays.asList(42);
   array[0] = tmpList; // Semantically invalid, but compiles without warnings
   String s = stringLists[0].get(0); // Oh no, ClassCastException at runtime!
 }
 `]
				]],
				[/* text */ 't', `

 leads to a `],
				[/* inline code block */ 'i', `ClassCastException`],
				[/* text */ 't', ` at runtime.

 `],
				[/* block */ 'b', `Future versions of the platform may mandate compiler errors for
 such unsafe operations.

 `]
			]]
		]],
		[/* block */ 'b', '']
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	/* methods */ UDF,
]);
