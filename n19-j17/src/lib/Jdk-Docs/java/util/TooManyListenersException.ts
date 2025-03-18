import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.util.TooManyListenersException', [
	[/* class description */
		[/* block */ 'b', [
			[/* text */ 't', `
 The `],
			[/* inline code block */ 'i', `TooManyListenersException`],
			[/* text */ 't', ` Exception is used as part of
 the Java Event model to annotate and implement a unicast special case of
 a multicast Event Source.
 `]
		]],
		[/* text */ 't', `
 `],
		[/* block */ 'b', `
 The presence of a "throws TooManyListenersException" clause on any given
 concrete implementation of the normally multicast "void addXyzEventListener"
 event listener registration pattern is used to annotate that interface as
 implementing a unicast Listener special case, that is, that one and only
 one Listener may be registered on the particular event listener source
 concurrently.
 `]
	],
	/* fields */,
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Constructs a TooManyListenersException with no detail message.
 A detail message is a String that describes this particular exception.`]
			],
			/* parameters */,
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a TooManyListenersException with the specified detail message.
 A detail message is a String that describes this particular exception.`]
			],
			[/* parameters */
				[/* parameter */ 's', [/* parameter description */
					[/* text */ 't', `the detail message`]
				]]
			],
			/* throws */ UDF
		]]
	],
	/* methods */,
	/* enum values */ UDF
]);
