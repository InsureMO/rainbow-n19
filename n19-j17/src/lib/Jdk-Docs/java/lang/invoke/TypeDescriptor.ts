import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.lang.invoke.TypeDescriptor', [
	[/* class description */
		[/* text */ 't', `An entity that has a type descriptor.`]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'descriptorString()', [
			[/* method description */
				[/* text */ 't', `Returns the descriptor string for this `],
				[/* inline code block */ 'i', `TypeDescriptor`],
				[/* text */ 't', ` object.

 If this `],
				[/* inline code block */ 'i', `TypeDescriptor`],
				[/* text */ 't', ` object can be described in nominal form,
 then this method returns a type descriptor as specified in JVMS `],
				[/* external link */ 'a', `https://docs.oracle.com/javase/specs/jvms/se17/html/jvms-4.html#jvms-4.3`, `4.3`],
				[/* text */ 't', `.
 The result descriptor string can be used to produce
 a `],
				[/* reference */ 'r', `java.lang.constant.ConstantDesc`, `nominal descriptor`],
				[/* text */ 't', `.

 Otherwise, the result string is not a type descriptor.
 No `],
				[/* reference */ 'r', `java.lang.constant.ConstantDesc`, `nominal descriptor`],
				[/* text */ 't', `
 can be produced from the result string.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the descriptor string for this `],
				[/* inline code block */ 'i', `TypeDescriptor`],
				[/* text */ 't', ` object`]
			]
		]]
	],
]);
