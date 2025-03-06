import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.lang.reflect.TypeVariable', [
	[/* class description */
		[/* text */ 't', `TypeVariable is the common superinterface for type variables of kinds.
 A type variable is created the first time it is needed by a reflective
 method, as specified in this package.  If a type variable t is referenced
 by a type (i.e, class, interface or annotation type) T, and T is declared
 by the nth enclosing class of T (see JLS 8.1.2), then the creation of t
 requires the resolution (see JVMS 5) of the ith enclosing class of T,
 for i = 0 to n, inclusive. Creating a type variable must not cause the
 creation of its bounds. Repeated creation of a type variable has no effect.

 `],
		[/* block */ 'b', `Multiple objects may be instantiated at run-time to
 represent a given type variable. Even though a type variable is
 created only once, this does not imply any requirement to cache
 instances representing the type variable. However, all instances
 representing a type variable must be equal() to each other.
 As a consequence, users of type variables must not rely on the identity
 of instances of classes implementing this interface.`]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'getGenericDeclaration()', [
			[/* method description */
				[/* text */ 't', `Returns the `],
				[/* inline code block */ 'i', `GenericDeclaration`],
				[/* text */ 't', ` object representing the
 generic declaration declared for this type variable.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the generic declaration declared for this type variable.`]
			]
		]],
		[/* method */ 'getAnnotatedBounds()', [
			[/* method description */
				[/* text */ 't', `Returns an array of AnnotatedType objects that represent the use of
 types to denote the upper bounds of the type parameter represented by
 this TypeVariable. The order of the objects in the array corresponds to
 the order of the bounds in the declaration of the type parameter. Note that
 if no upper bound is explicitly declared, the upper bound is unannotated
 `],
				[/* inline code block */ 'i', `Object`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an array of objects representing the upper bound(s) of the type variable`]
			]
		]],
		[/* method */ 'getBounds()', [
			[/* method description */
				[/* text */ 't', `Returns an array of `],
				[/* inline code block */ 'i', `Type`],
				[/* text */ 't', ` objects representing the
 upper bound(s) of this type variable.  If no upper bound is
 explicitly declared, the upper bound is `],
				[/* inline code block */ 'i', `Object`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', `For each upper bound B: `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `if B is a parameterized
 type or a type variable, it is created, (see `],
						[/* reference */ 'r', `java.lang.reflect.ParameterizedType`, `ParameterizedType`],
						[/* text */ 't', ` for the
 details of the creation process for parameterized types).
 `]
					]],
					[/* block */ 'b', `Otherwise, B is resolved.  `]
				]],
				[/* block */ 'b', '']
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.TypeNotPresentException', [/* throw description */
					[/* text */ 't', `if any of the
     bounds refers to a non-existent type declaration`]
				]],
				[/* throw */ 'java.lang.reflect.MalformedParameterizedTypeException', [/* throw description */
					[/* text */ 't', `if any of the
     bounds refer to a parameterized type that cannot be instantiated
     for any reason`]
				]]
			],
			[/* return description */
				[/* text */ 't', `an array of `],
				[/* inline code block */ 'i', `Type`],
				[/* text */ 't', `s representing the upper
     bound(s) of this type variable`]
			]
		]],
		[/* method */ 'getName()', [
			[/* method description */
				[/* text */ 't', `Returns the name of this type variable, as it occurs in the source code.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the name of this type variable, as it appears in the source code`]
			]
		]]
	],
]);
