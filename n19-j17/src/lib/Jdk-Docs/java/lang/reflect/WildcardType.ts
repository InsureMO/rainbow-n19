import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.lang.reflect.WildcardType', [
	[/* class description */
		[/* text */ 't', `WildcardType represents a wildcard type expression, such as
 `],
		[/* inline code block */ 'i', `?`],
		[/* text */ 't', `, `],
		[/* inline code block */ 'i', `? extends Number`],
		[/* text */ 't', `, or `],
		[/* inline code block */ 'i', `? super Integer`],
		[/* text */ 't', `.`]
	],
	/* fields */,
	/* constructors */,
	[/* methods */
		[/* method */ 'getLowerBounds()', [
			[/* method description */
				[/* text */ 't', `Returns an array of `],
				[/* inline code block */ 'i', `Type`],
				[/* text */ 't', ` objects representing the
 lower bound(s) of this type variable.  If no lower bound is
 explicitly declared, the lower bound is the type of `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `.
 In this case, a zero length array is returned.

 `],
				[/* block */ 'b', `For each lower bound B :
 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `if B is a parameterized type or a type variable, it is created,
  (see `],
						[/* reference */ 'r', `java.lang.reflect.ParameterizedType`, `ParameterizedType`],
						[/* text */ 't', `
  for the details of the creation process for parameterized types).
   `]
					]],
					[/* block */ 'b', `Otherwise, B is resolved.
 `]
				]],
				[/* block */ 'b', '']
			],
			/* parameters */,
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
				[/* text */ 't', `an array of Types representing the lower bound(s) of this
     type variable`]
			]
		]],
		[/* method */ 'getUpperBounds()', [
			[/* method description */
				[/* text */ 't', `Returns an array of `],
				[/* inline code block */ 'i', `Type`],
				[/* text */ 't', ` objects representing the  upper
 bound(s) of this type variable.  If no upper bound is
 explicitly declared, the upper bound is `],
				[/* inline code block */ 'i', `Object`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', `For each upper bound B :
 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `if B is a parameterized type or a type variable, it is created,
  (see `],
						[/* reference */ 'r', `java.lang.reflect.ParameterizedType`, `ParameterizedType`],
						[/* text */ 't', `
  for the details of the creation process for parameterized types).
  `]
					]],
					[/* block */ 'b', `Otherwise, B is resolved.
 `]
				]],
				[/* block */ 'b', '']
			],
			/* parameters */,
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
				[/* text */ 't', `an array of Types representing the upper bound(s) of this
     type variable`]
			]
		]]
	],
	/* enum values */ UDF
]);
