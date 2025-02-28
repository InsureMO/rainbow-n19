import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.lang.reflect.GenericArrayType', [
	[/* class description */
		[/* inline code block */ 'i', `GenericArrayType`],
		[/* text */ 't', ` represents an array type whose component
 type is either a parameterized type or a type variable.`]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'getGenericComponentType()', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `Type`],
				[/* text */ 't', ` object representing the component type
 of this array. This method creates the component type of the
 array.  See the declaration of `],
				[/* reference */ 'r', `java.lang.reflect.ParameterizedType`],
				[/* text */ 't', ` for the
 semantics of the creation process for parameterized types and
 see `],
				[/* reference */ 'r', `java.lang.reflect.TypeVariable`],
				[/* text */ 't', ` for the
 creation process for type variables.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.TypeNotPresentException', [/* throw description */
					[/* text */ 't', `if the underlying array type's component
     type refers to a non-existent class or interface declaration`]
				]],
				[/* throw */ 'java.lang.reflect.MalformedParameterizedTypeException', [/* throw description */
					[/* text */ 't', `if  the
     underlying array type's component type refers to a
     parameterized type that cannot be instantiated for any reason`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Type`],
				[/* text */ 't', ` object representing the component type
     of this array`]
			]
		]]
	],
]);
