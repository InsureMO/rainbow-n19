import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.util.Observable', [
	/* class description */ UDF,
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Construct an Observable with zero Observers.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'clearChanged()', [
			[/* method description */
				[/* text */ 't', `Indicates that this object has no longer changed, or that it has
 already notified all of its observers of its most recent change,
 so that the `],
				[/* inline code block */ 'i', `hasChanged`],
				[/* text */ 't', ` method will now return `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', `.
 This method is called automatically by the
 `],
				[/* inline code block */ 'i', `notifyObservers`],
				[/* text */ 't', ` methods.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'setChanged()', [
			[/* method description */
				[/* text */ 't', `Marks this `],
				[/* inline code block */ 'i', `Observable`],
				[/* text */ 't', ` object as having been changed; the
 `],
				[/* inline code block */ 'i', `hasChanged`],
				[/* text */ 't', ` method will now return `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'hasChanged()', [
			[/* method description */
				[/* text */ 't', `Tests if this object has changed.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if and only if the `],
				[/* inline code block */ 'i', `setChanged`],
				[/* text */ 't', `
          method has been called more recently than the
          `],
				[/* inline code block */ 'i', `clearChanged`],
				[/* text */ 't', ` method on this object;
          `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'countObservers()', [
			[/* method description */
				[/* text */ 't', `Returns the number of observers of this `],
				[/* inline code block */ 'i', `Observable`],
				[/* text */ 't', ` object.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the number of observers of this object.`]
			]
		]],
		[/* method */ 'addObserver(java.util.Observer)', [
			[/* method description */
				[/* text */ 't', `Adds an observer to the set of observers for this object, provided
 that it is not the same as some observer already in the set.
 The order in which notifications will be delivered to multiple
 observers is not specified. See the class comment.`]
			],
			[/* parameters */
				[/* parameter */ 'o', [/* parameter description */
					[/* text */ 't', `an observer to be added.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the parameter o is null.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'deleteObserver(java.util.Observer)', [
			[/* method description */
				[/* text */ 't', `Deletes an observer from the set of observers of this object.
 Passing `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` to this method will have no effect.`]
			],
			[/* parameters */
				[/* parameter */ 'o', [/* parameter description */
					[/* text */ 't', `the observer to be deleted.`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'deleteObservers()', [
			[/* method description */
				[/* text */ 't', `Clears the observer list so that this object no longer has any observers.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'notifyObservers()', [
			[/* method description */
				[/* text */ 't', `If this object has changed, as indicated by the
 `],
				[/* inline code block */ 'i', `hasChanged`],
				[/* text */ 't', ` method, then notify all of its observers
 and then call the `],
				[/* inline code block */ 'i', `clearChanged`],
				[/* text */ 't', ` method to
 indicate that this object has no longer changed.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 Each observer has its `],
					[/* inline code block */ 'i', `update`],
					[/* text */ 't', ` method called with two
 arguments: this observable object and `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `. In other
 words, this method is equivalent to:
 `]
				]],
				[/* block */ 'b', [
					[/* inline code block */ 'i', `notifyObservers(null)`]
				]],
				[/* block */ 'b', '']
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'notifyObservers(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `If this object has changed, as indicated by the
 `],
				[/* inline code block */ 'i', `hasChanged`],
				[/* text */ 't', ` method, then notify all of its observers
 and then call the `],
				[/* inline code block */ 'i', `clearChanged`],
				[/* text */ 't', ` method to indicate
 that this object has no longer changed.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 Each observer has its `],
					[/* inline code block */ 'i', `update`],
					[/* text */ 't', ` method called with two
 arguments: this observable object and the `],
					[/* inline code block */ 'i', `arg`],
					[/* text */ 't', ` argument.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'arg', [/* parameter description */
					[/* text */ 't', `any object.`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]]
	],
]);
