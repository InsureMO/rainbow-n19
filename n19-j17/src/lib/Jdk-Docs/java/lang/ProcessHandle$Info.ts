import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.lang.ProcessHandle$Info', [
	[/* class description */
		[/* text */ 't', `Information snapshot about the process.
 The attributes of a process vary by operating system and are not available
 in all implementations.  Information about processes is limited
 by the operating system privileges of the process making the request.
 The return types are `],
		[/* inline code block */ 'i', `Optional<T>`],
		[/* text */ 't', ` allowing explicit tests
 and actions if the value is available.`]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'command()', [
			[/* method description */
				[/* text */ 't', `Returns the executable pathname of the process.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an `],
				[/* inline code block */ 'i', `Optional<String>`],
				[/* text */ 't', ` of the executable pathname
         of the process`]
			]
		]],
		[/* method */ 'commandLine()', [
			[/* method description */
				[/* text */ 't', `Returns the command line of the process.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 If `],
					[/* reference */ 'r', `#command()`, `command()`],
					[/* text */ 't', ` and  `],
					[/* reference */ 'r', `#arguments()`, `arguments()`],
					[/* text */ 't', ` return
 non-empty optionals, this is simply a convenience method which concatenates
 the values of the two functions separated by spaces. Otherwise it will return a
 best-effort, platform dependent representation of the command line.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an `],
				[/* inline code block */ 'i', `Optional<String>`],
				[/* text */ 't', ` of the command line
         of the process`]
			]
		]],
		[/* method */ 'user()', [
			[/* method description */
				[/* text */ 't', `Return the user of the process.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an `],
				[/* inline code block */ 'i', `Optional<String>`],
				[/* text */ 't', ` for the user of the process`]
			]
		]],
		[/* method */ 'arguments()', [
			[/* method description */
				[/* text */ 't', `Returns an array of Strings of the arguments of the process.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an `],
				[/* inline code block */ 'i', `Optional<String[]>`],
				[/* text */ 't', ` of the arguments of the process`]
			]
		]],
		[/* method */ 'totalCpuDuration()', [
			[/* method description */
				[/* text */ 't', `Returns the total cputime accumulated of the process.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an `],
				[/* inline code block */ 'i', `Optional<Duration>`],
				[/* text */ 't', ` for the accumulated total cputime`]
			]
		]],
		[/* method */ 'startInstant()', [
			[/* method description */
				[/* text */ 't', `Returns the start time of the process.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an `],
				[/* inline code block */ 'i', `Optional<Instant>`],
				[/* text */ 't', ` of the start time of the process`]
			]
		]]
	],
]);
