import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.lang.annotation.Target', [
	[/* class description */
		[/* text */ 't', `Indicates the contexts in which an annotation interface is applicable. The
 declaration contexts and type contexts in which an annotation interface may
 be applicable are specified in JLS `],
		[/* external link */ 'a', `https://docs.oracle.com/javase/specs/jls/se17/html/jls-9.html#jls-9.6.4.1`, `9.6.4.1`],
		[/* text */ 't', `, and denoted in source code by
 enum constants of `],
		[/* reference */ 'r', `enum class in java.lang.annotation.ElementType`, `java.lang.annotation.ElementType`],
		[/* text */ 't', `.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `If an `],
			[/* inline code block */ 'i', `@Target`],
			[/* text */ 't', ` meta-annotation is not present on an annotation
 interface `],
			[/* inline code block */ 'i', `T`],
			[/* text */ 't', `, then an annotation of type `],
			[/* inline code block */ 'i', `T`],
			[/* text */ 't', ` may be written as
 a modifier for any declaration.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `If an `],
			[/* inline code block */ 'i', `@Target`],
			[/* text */ 't', ` meta-annotation is present, the compiler will enforce
 the usage restrictions indicated by `],
			[/* inline code block */ 'i', `ElementType`],
			[/* text */ 't', `
 enum constants, in line with JLS `],
			[/* external link */ 'a', `https://docs.oracle.com/javase/specs/jls/se17/html/jls-9.html#jls-9.7.4`, `9.7.4`],
			[/* text */ 't', `.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `For example, this `],
			[/* inline code block */ 'i', `@Target`],
			[/* text */ 't', ` meta-annotation indicates that the
 declared interface is itself a meta-annotation interface.  It can only be
 used on annotation interface declarations:
 `]
		]],
		[/* code block */ 'c', `    @Target(ElementType.ANNOTATION_TYPE)
    public @interface MetaAnnotationType {
        ...
    }
 `],
		[/* text */ 't', `

 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `This `],
			[/* inline code block */ 'i', `@Target`],
			[/* text */ 't', ` meta-annotation indicates that the declared class or
 interface is intended solely for use as a member class or interface in
 complex annotation interface declarations.  It cannot be used to annotate
 anything directly:
 `]
		]],
		[/* code block */ 'c', `    @Target({})
    public @interface MemberInterface {
        ...
    }
 `],
		[/* text */ 't', `

 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `It is a compile-time error for a single `],
			[/* inline code block */ 'i', `ElementType`],
			[/* text */ 't', ` constant to
 appear more than once in an `],
			[/* inline code block */ 'i', `@Target`],
			[/* text */ 't', ` annotation.  For example, the
 following `],
			[/* inline code block */ 'i', `@Target`],
			[/* text */ 't', ` meta-annotation is illegal:
 `]
		]],
		[/* code block */ 'c', `    @Target({ElementType.FIELD, ElementType.METHOD, ElementType.FIELD})
    public @interface Bogus {
        ...
    }
 `],
		[/* block */ 'b', '']
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	/* methods */ UDF,
]);
