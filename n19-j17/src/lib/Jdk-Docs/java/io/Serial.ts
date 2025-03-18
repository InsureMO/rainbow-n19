import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.io.Serial', [
	[/* class description */
		[/* text */ 't', `Indicates that an annotated field or method is part of the `],
		[/* reference */ 'r', `java.io.Serializable`, `serialization mechanism`],
		[/* text */ 't', ` defined by the
 `],
		[/* text */ 't', `Java Object Serialization Specification`],
		[/* text */ 't', `. This
 annotation type is intended to allow compile-time checking of
 serialization-related declarations, analogous to the checking
 enabled by the `],
		[/* reference */ 'r', `annotation interface in java.lang.Override`, `Override`],
		[/* text */ 't', ` annotation type to
 validate method overriding. `],
		[/* inline code block */ 'i', `Serializable`],
		[/* text */ 't', ` classes are encouraged to
 use `],
		[/* inline code block */ 'i', `@Serial`],
		[/* text */ 't', ` annotations to help a compiler catch
 mis-declared serialization-related fields and methods,
 mis-declarations that may otherwise be difficult to detect.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `Specifically, annotations of this type should be
 applied to serialization-related methods and fields in classes
 declared to be `],
			[/* inline code block */ 'i', `Serializable`],
			[/* text */ 't', `. The five serialization-related
 methods are:

 `]
		]],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* inline code block */ 'i', `private void writeObject(java.io.ObjectOutputStream stream) throws IOException`],
				[/* text */ 't', `
 `]
			]],
			[/* block */ 'b', [
				[/* inline code block */ 'i', `private void readObject(java.io.ObjectInputStream stream) throws IOException, ClassNotFoundException`],
				[/* text */ 't', `
 `]
			]],
			[/* block */ 'b', [
				[/* inline code block */ 'i', `private void readObjectNoData() throws ObjectStreamException`],
				[/* text */ 't', `
 `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `ANY-ACCESS-MODIFIER`],
				[/* text */ 't', ` `],
				[/* inline code block */ 'i', `Object writeReplace() throws ObjectStreamException`],
				[/* text */ 't', `
 `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `ANY-ACCESS-MODIFIER`],
				[/* text */ 't', ` `],
				[/* inline code block */ 'i', `Object readResolve() throws ObjectStreamException`],
				[/* text */ 't', `
 `]
			]]
		]],
		[/* text */ 't', `

 The two serialization-related fields are:

 `],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* inline code block */ 'i', `private static final ObjectStreamField[] serialPersistentFields`],
				[/* text */ 't', `
 `]
			]],
			[/* block */ 'b', [
				[/* inline code block */ 'i', `private static final long serialVersionUID`],
				[/* text */ 't', `
 `]
			]]
		]],
		[/* text */ 't', `

 Compilers are encouraged to validate that a method or field marked with a
 `],
		[/* inline code block */ 'i', `@Serial`],
		[/* text */ 't', ` annotation is one of the defined serialization-related
 methods or fields declared in a meaningful context and issue a warning
 if that is not the case.

 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', `It is a semantic error to apply this annotation to other fields or methods, including:
 `],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* text */ 't', `fields or methods in a class that is not `],
				[/* inline code block */ 'i', `Serializable`],
				[/* text */ 't', `

 `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `fields or methods of the proper structural declaration, but in
 a type where they are ineffectual. For example, `],
				[/* inline code block */ 'i', `enum`],
				[/* text */ 't', ` types
 are defined to have a `],
				[/* inline code block */ 'i', `serialVersionUID`],
				[/* text */ 't', ` of `],
				[/* inline code block */ 'i', `0L`],
				[/* text */ 't', ` so a
 `],
				[/* inline code block */ 'i', `serialVersionUID`],
				[/* text */ 't', ` field declared in an `],
				[/* inline code block */ 'i', `enum`],
				[/* text */ 't', ` type is
 ignored. The five serialization-related methods identified above
 are likewise ignored for an `],
				[/* inline code block */ 'i', `enum`],
				[/* text */ 't', ` type.

 `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `in a class that is `],
				[/* inline code block */ 'i', `Externalizable`],
				[/* text */ 't', `:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', ` method declarations of `],
						[/* inline code block */ 'i', `writeObject`],
						[/* text */ 't', `, `],
						[/* inline code block */ 'i', `readObject`],
						[/* text */ 't', `, and `],
						[/* inline code block */ 'i', `readObjectNoData`],
						[/* text */ 't', `

  `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `a field declaration for `],
						[/* inline code block */ 'i', `serialPersistentFields`],
						[/* text */ 't', `
 `]
					]]
				]],
				[/* text */ 't', `

 While the `],
				[/* inline code block */ 'i', `Externalizable`],
				[/* text */ 't', ` interface extends `],
				[/* inline code block */ 'i', `Serializable`],
				[/* text */ 't', `, the three methods and one field above are
 `],
				[/* text */ 't', `not`],
				[/* text */ 't', ` used for externalizable classes.

 `]
			]]
		]],
		[/* text */ 't', `

 Note that serialization mechanism accesses its designated fields
 and methods reflectively and those fields and methods may appear
 otherwise unused in a `],
		[/* inline code block */ 'i', `Serializable`],
		[/* text */ 't', ` class.`],
		[/* block */ 'b', '']
	],
	/* fields */,
	/* constructors */,
	/* methods */,
	/* enum values */ UDF
]);
