import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.lang.invoke.TypeDescriptor$OfField', [
	[/* class description */
		[/* text */ 't', `An entity that has a field type descriptor.
 Field descriptors conforming to JVMS `],
		[/* external link */ 'a', `https://docs.oracle.com/javase/specs/jvms/se17/html/jvms-4.html#jvms-4.3.2`, `4.3.2`],
		[/* text */ 't', ` can be described
 nominally via `],
		[/* reference */ 'r', `java.lang.Class#describeConstable()`, `Class::describeConstable`],
		[/* text */ 't', `;
 otherwise they cannot be described nominally.`]
	],
	/* fields */,
	/* constructors */,
	[/* methods */
		[/* method */ 'isArray()', [
			[/* method description */
				[/* text */ 't', `Does this field descriptor describe an array type?`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `whether this field descriptor describes an array type`]
			]
		]],
		[/* method */ 'isPrimitive()', [
			[/* method description */
				[/* text */ 't', `Does this field descriptor describe a primitive type (including void.)`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `whether this field descriptor describes a primitive type`]
			]
		]],
		[/* method */ 'arrayType()', [
			[/* method description */
				[/* text */ 't', `Return a descriptor for the array type whose component type is described by this
 descriptor`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the descriptor for the array type`]
			]
		]],
		[/* method */ 'componentType()', [
			[/* method description */
				[/* text */ 't', `If this field descriptor describes an array type, return
 a descriptor for its component type, otherwise return `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the component type, or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if this field descriptor does
 not describe an array type`]
			]
		]]
	],
	/* enum values */ UDF
]);
