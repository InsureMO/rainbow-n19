import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.util.EventObject', [
	[/* class description */
		[/* block */ 'b', `
 The root class from which all event state objects shall be derived.
 `],
		[/* block */ 'b', `
 All Events are constructed with a reference to the object, the "source",
 that is logically deemed to be the object upon which the Event in question
 initially occurred upon.`]
	],
	[/* fields */
		[/* field */ 'source', [
			[/* field description */
				[/* text */ 't', `The object on which the Event initially occurred.`]
			],
		]]
	],
	[/* constructors */
		[/* constructor */ '<init>(java.lang.Object)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a prototypical Event.`]
			],
			[/* parameters */
				[/* parameter */ 'source', [/* parameter description */
					[/* text */ 't', `the object on which the Event initially occurred`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if source is null`]
				]]
			]
		]]
	],
	[/* methods */
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Returns a String representation of this EventObject.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a String representation of this EventObject`]
			]
		]],
		[/* method */ 'getSource()', [
			[/* method description */
				[/* text */ 't', `The object on which the Event initially occurred.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the object on which the Event initially occurred`]
			]
		]]
	],
]);
