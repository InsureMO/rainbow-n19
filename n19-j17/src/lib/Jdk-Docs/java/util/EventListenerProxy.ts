import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.util.EventListenerProxy', [
	[/* class description */
		[/* text */ 't', `An abstract wrapper class for an `],
		[/* inline code block */ 'i', `EventListener`],
		[/* text */ 't', ` class
 which associates a set of additional parameters with the listener.
 Subclasses must provide the storage and accessor methods
 for the additional arguments or parameters.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 For example, a bean which supports named properties
 would have a two argument method signature for adding
 a `],
			[/* inline code block */ 'i', `PropertyChangeListener`],
			[/* text */ 't', ` for a property:
 `]
		]],
		[/* code block */ 'c', ` public void addPropertyChangeListener(String propertyName,
                                       PropertyChangeListener listener)
 `],
		[/* text */ 't', `
 If the bean also implemented the zero argument get listener method:
 `],
		[/* code block */ 'c', ` public PropertyChangeListener[] getPropertyChangeListeners()
 `],
		[/* text */ 't', `
 then the array may contain inner `],
		[/* inline code block */ 'i', `PropertyChangeListeners`],
		[/* text */ 't', `
 which are also `],
		[/* inline code block */ 'i', `PropertyChangeListenerProxy`],
		[/* text */ 't', ` objects.
 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', `
 If the calling method is interested in retrieving the named property
 then it would have to test the element to see if it is a proxy class.`]
	],
	/* fields */,
	[/* constructors */
		[/* constructor */ '<init>(java.util.EventListener)', [
			[/* constructor description */
				[/* text */ 't', `Creates a proxy for the specified listener.`]
			],
			[/* parameters */
				[/* parameter */ 'listener', [/* parameter description */
					[/* text */ 't', `the listener object`]
				]]
			],
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'getListener()', [
			[/* method description */
				[/* text */ 't', `Returns the listener associated with the proxy.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the listener associated with the proxy`]
			]
		]]
	],
	/* enum values */ UDF
]);
