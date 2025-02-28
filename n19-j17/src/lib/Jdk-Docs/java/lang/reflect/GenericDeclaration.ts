import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.lang.reflect.GenericDeclaration', [
	[/* class description */
		[/* text */ 't', `A common interface for all entities that declare type variables.`]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'getTypeParameters()', [
			[/* method description */
				[/* text */ 't', `Returns an array of `],
				[/* inline code block */ 'i', `TypeVariable`],
				[/* text */ 't', ` objects that
 represent the type variables declared by the generic
 declaration represented by this `],
				[/* inline code block */ 'i', `GenericDeclaration`],
				[/* text */ 't', `
 object, in declaration order.  Returns an array of length 0 if
 the underlying generic declaration declares no type variables.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.reflect.GenericSignatureFormatError', [/* throw description */
					[/* text */ 't', `if the generic
     signature of this generic declaration does not conform to
     the format specified in
     `],
					[/* text */ 't', `The Java Virtual Machine Specification`]
				]]
			],
			[/* return description */
				[/* text */ 't', `an array of `],
				[/* inline code block */ 'i', `TypeVariable`],
				[/* text */ 't', ` objects that represent
     the type variables declared by this generic declaration`]
			]
		]]
	],
]);
