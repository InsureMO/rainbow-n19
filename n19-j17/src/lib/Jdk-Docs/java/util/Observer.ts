import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.util.Observer', [
	/* class description */,
	/* fields */,
	/* constructors */,
	[/* methods */
		[/* method */ 'update(java.util.Observable,java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `This method is called whenever the observed object is changed. An
 application calls an `],
				[/* inline code block */ 'i', `Observable`],
				[/* text */ 't', ` object's
 `],
				[/* inline code block */ 'i', `notifyObservers`],
				[/* text */ 't', ` method to have all the object's
 observers notified of the change.`]
			],
			[/* parameters */
				[/* parameter */ 'o', [/* parameter description */
					[/* text */ 't', `the observable object.`]
				]],
				[/* parameter */ 'arg', [/* parameter description */
					[/* text */ 't', `an argument passed to the `],
					[/* inline code block */ 'i', `notifyObservers`],
					[/* text */ 't', `
                 method.`]
				]]
			],
			/* throws */,
			/* return */ UDF
		]]
	],
	/* enum values */ UDF
]);
