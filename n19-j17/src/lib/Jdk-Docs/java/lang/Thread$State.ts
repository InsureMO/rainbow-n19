import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.lang.Thread$State', [
	[/* class description */
		[/* text */ 't', `A thread state.  A thread can be in one of the following states:
 `],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* text */ 't', `NEW`],
				[/* new line */ 'n'],
				[/* text */ 't', `
     A thread that has not yet started is in this state.
     `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `RUNNABLE`],
				[/* new line */ 'n'],
				[/* text */ 't', `
     A thread executing in the Java virtual machine is in this state.
     `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `BLOCKED`],
				[/* new line */ 'n'],
				[/* text */ 't', `
     A thread that is blocked waiting for a monitor lock
     is in this state.
     `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `WAITING`],
				[/* new line */ 'n'],
				[/* text */ 't', `
     A thread that is waiting indefinitely for another thread to
     perform a particular action is in this state.
     `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `TIMED_WAITING`],
				[/* new line */ 'n'],
				[/* text */ 't', `
     A thread that is waiting for another thread to perform an action
     for up to a specified waiting time is in this state.
     `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `TERMINATED`],
				[/* new line */ 'n'],
				[/* text */ 't', `
     A thread that has exited is in this state.
     `]
			]]
		]],
		[/* text */ 't', `

 `],
		[/* block */ 'b', `
 A thread can be in only one state at a given point in time.
 These states are virtual machine states which do not reflect
 any operating system thread states.`]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'valueOf(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Returns the enum constant of this class with the specified name.
The string must match `],
				[/* text */ 't', `exactly`],
				[/* text */ 't', ` an identifier used to declare an
enum constant in this class.  (Extraneous whitespace characters are 
not permitted.)`]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `the name of the enum constant to be returned.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if this enum class has no constant with the specified name`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the argument is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the enum constant with the specified name`]
			]
		]],
		[/* method */ 'values()', [
			[/* method description */
				[/* text */ 't', `Returns an array containing the constants of this enum class, in
the order they are declared.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an array containing the constants of this enum class, in the order they are declared`]
			]
		]]
	],
]);
