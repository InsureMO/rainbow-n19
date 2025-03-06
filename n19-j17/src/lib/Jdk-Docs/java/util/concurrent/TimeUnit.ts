import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.util.concurrent.TimeUnit', [
	[/* class description */
		[/* text */ 't', `A `],
		[/* inline code block */ 'i', `TimeUnit`],
		[/* text */ 't', ` represents time durations at a given unit of
 granularity and provides utility methods to convert across units,
 and to perform timing and delay operations in these units.  A
 `],
		[/* inline code block */ 'i', `TimeUnit`],
		[/* text */ 't', ` does not maintain time information, but only
 helps organize and use time representations that may be maintained
 separately across various contexts.  A nanosecond is defined as one
 thousandth of a microsecond, a microsecond as one thousandth of a
 millisecond, a millisecond as one thousandth of a second, a minute
 as sixty seconds, an hour as sixty minutes, and a day as twenty four
 hours.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `A `],
			[/* inline code block */ 'i', `TimeUnit`],
			[/* text */ 't', ` is mainly used to inform time-based methods
 how a given timing parameter should be interpreted. For example,
 the following code will timeout in 50 milliseconds if the `],
			[/* reference */ 'r', `java.util.concurrent.locks.Lock`, `lock`],
			[/* text */ 't', ` is not available:

 `]
		]],
		[/* code block */ 'c', [
			[/* inline code block */ 'i', `Lock lock = ...;
 if (lock.tryLock(50L, TimeUnit.MILLISECONDS)) ...`]
		]],
		[/* text */ 't', `

 while this code will timeout in 50 seconds:
 `],
		[/* code block */ 'c', [
			[/* inline code block */ 'i', `Lock lock = ...;
 if (lock.tryLock(50L, TimeUnit.SECONDS)) ...`]
		]],
		[/* text */ 't', `

 Note however, that there is no guarantee that a particular timeout
 implementation will be able to notice the passage of time at the
 same granularity as the given `],
		[/* inline code block */ 'i', `TimeUnit`],
		[/* text */ 't', `.`],
		[/* block */ 'b', '']
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'toChronoUnit()', [
			[/* method description */
				[/* text */ 't', `Converts this `],
				[/* inline code block */ 'i', `TimeUnit`],
				[/* text */ 't', ` to the equivalent `],
				[/* inline code block */ 'i', `ChronoUnit`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the converted equivalent ChronoUnit`]
			]
		]],
		[/* method */ 'convert(java.time.Duration)', [
			[/* method description */
				[/* text */ 't', `Converts the given time duration to this unit.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `For any TimeUnit `],
					[/* inline code block */ 'i', `unit`],
					[/* text */ 't', `,
 `],
					[/* inline code block */ 'i', `unit.convert(Duration.ofNanos(n))`],
					[/* text */ 't', `
 is equivalent to
 `],
					[/* inline code block */ 'i', `unit.convert(n, NANOSECONDS)`],
					[/* text */ 't', `, and
 `],
					[/* inline code block */ 'i', `unit.convert(Duration.of(n, unit.toChronoUnit()))`],
					[/* text */ 't', `
 is equivalent to `],
					[/* inline code block */ 'i', `n`],
					[/* text */ 't', ` (in the absence of overflow).`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'duration', [/* parameter description */
					[/* text */ 't', `the time duration`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `duration`],
					[/* text */ 't', ` is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the converted duration in this unit,
 or `],
				[/* inline code block */ 'i', `Long.MIN_VALUE`],
				[/* text */ 't', ` if conversion would negatively overflow,
 or `],
				[/* inline code block */ 'i', `Long.MAX_VALUE`],
				[/* text */ 't', ` if it would positively overflow.`]
			]
		]],
		[/* method */ 'convert(long,java.util.concurrent.TimeUnit)', [
			[/* method description */
				[/* text */ 't', `Converts the given time duration in the given unit to this unit.
 Conversions from finer to coarser granularities truncate, so
 lose precision. For example, converting `],
				[/* inline code block */ 'i', `999`],
				[/* text */ 't', ` milliseconds
 to seconds results in `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', `. Conversions from coarser to
 finer granularities with arguments that would numerically
 overflow saturate to `],
				[/* inline code block */ 'i', `Long.MIN_VALUE`],
				[/* text */ 't', ` if negative or
 `],
				[/* inline code block */ 'i', `Long.MAX_VALUE`],
				[/* text */ 't', ` if positive.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `For example, to convert 10 minutes to milliseconds, use:
 `],
					[/* inline code block */ 'i', `TimeUnit.MILLISECONDS.convert(10L, TimeUnit.MINUTES)`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'sourceDuration', [/* parameter description */
					[/* text */ 't', `the time duration in the given `],
					[/* inline code block */ 'i', `sourceUnit`]
				]],
				[/* parameter */ 'sourceUnit', [/* parameter description */
					[/* text */ 't', `the unit of the `],
					[/* inline code block */ 'i', `sourceDuration`],
					[/* text */ 't', ` argument`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the converted duration in this unit,
 or `],
				[/* inline code block */ 'i', `Long.MIN_VALUE`],
				[/* text */ 't', ` if conversion would negatively overflow,
 or `],
				[/* inline code block */ 'i', `Long.MAX_VALUE`],
				[/* text */ 't', ` if it would positively overflow.`]
			]
		]],
		[/* method */ 'toDays(long)', [
			[/* method description */
				[/* text */ 't', `Equivalent to
 `],
				[/* reference */ 'r', `#convert(long,java.util.concurrent.TimeUnit)`, `DAYS.convert(duration, this)`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'duration', [/* parameter description */
					[/* text */ 't', `the duration`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the converted duration`]
			]
		]],
		[/* method */ 'toHours(long)', [
			[/* method description */
				[/* text */ 't', `Equivalent to
 `],
				[/* reference */ 'r', `#convert(long,java.util.concurrent.TimeUnit)`, `HOURS.convert(duration, this)`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'duration', [/* parameter description */
					[/* text */ 't', `the duration`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the converted duration,
 or `],
				[/* inline code block */ 'i', `Long.MIN_VALUE`],
				[/* text */ 't', ` if conversion would negatively overflow,
 or `],
				[/* inline code block */ 'i', `Long.MAX_VALUE`],
				[/* text */ 't', ` if it would positively overflow.`]
			]
		]],
		[/* method */ 'toMicros(long)', [
			[/* method description */
				[/* text */ 't', `Equivalent to
 `],
				[/* reference */ 'r', `#convert(long,java.util.concurrent.TimeUnit)`, `MICROSECONDS.convert(duration, this)`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'duration', [/* parameter description */
					[/* text */ 't', `the duration`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the converted duration,
 or `],
				[/* inline code block */ 'i', `Long.MIN_VALUE`],
				[/* text */ 't', ` if conversion would negatively overflow,
 or `],
				[/* inline code block */ 'i', `Long.MAX_VALUE`],
				[/* text */ 't', ` if it would positively overflow.`]
			]
		]],
		[/* method */ 'toMillis(long)', [
			[/* method description */
				[/* text */ 't', `Equivalent to
 `],
				[/* reference */ 'r', `#convert(long,java.util.concurrent.TimeUnit)`, `MILLISECONDS.convert(duration, this)`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'duration', [/* parameter description */
					[/* text */ 't', `the duration`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the converted duration,
 or `],
				[/* inline code block */ 'i', `Long.MIN_VALUE`],
				[/* text */ 't', ` if conversion would negatively overflow,
 or `],
				[/* inline code block */ 'i', `Long.MAX_VALUE`],
				[/* text */ 't', ` if it would positively overflow.`]
			]
		]],
		[/* method */ 'toMinutes(long)', [
			[/* method description */
				[/* text */ 't', `Equivalent to
 `],
				[/* reference */ 'r', `#convert(long,java.util.concurrent.TimeUnit)`, `MINUTES.convert(duration, this)`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'duration', [/* parameter description */
					[/* text */ 't', `the duration`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the converted duration,
 or `],
				[/* inline code block */ 'i', `Long.MIN_VALUE`],
				[/* text */ 't', ` if conversion would negatively overflow,
 or `],
				[/* inline code block */ 'i', `Long.MAX_VALUE`],
				[/* text */ 't', ` if it would positively overflow.`]
			]
		]],
		[/* method */ 'toNanos(long)', [
			[/* method description */
				[/* text */ 't', `Equivalent to
 `],
				[/* reference */ 'r', `#convert(long,java.util.concurrent.TimeUnit)`, `NANOSECONDS.convert(duration, this)`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'duration', [/* parameter description */
					[/* text */ 't', `the duration`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the converted duration,
 or `],
				[/* inline code block */ 'i', `Long.MIN_VALUE`],
				[/* text */ 't', ` if conversion would negatively overflow,
 or `],
				[/* inline code block */ 'i', `Long.MAX_VALUE`],
				[/* text */ 't', ` if it would positively overflow.`]
			]
		]],
		[/* method */ 'toSeconds(long)', [
			[/* method description */
				[/* text */ 't', `Equivalent to
 `],
				[/* reference */ 'r', `#convert(long,java.util.concurrent.TimeUnit)`, `SECONDS.convert(duration, this)`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'duration', [/* parameter description */
					[/* text */ 't', `the duration`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the converted duration,
 or `],
				[/* inline code block */ 'i', `Long.MIN_VALUE`],
				[/* text */ 't', ` if conversion would negatively overflow,
 or `],
				[/* inline code block */ 'i', `Long.MAX_VALUE`],
				[/* text */ 't', ` if it would positively overflow.`]
			]
		]],
		[/* method */ 'of(java.time.temporal.ChronoUnit)', [
			[/* method description */
				[/* text */ 't', `Converts a `],
				[/* inline code block */ 'i', `ChronoUnit`],
				[/* text */ 't', ` to the equivalent `],
				[/* inline code block */ 'i', `TimeUnit`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'chronoUnit', [/* parameter description */
					[/* text */ 't', `the ChronoUnit to convert`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `chronoUnit`],
					[/* text */ 't', ` has no
         equivalent TimeUnit`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `chronoUnit`],
					[/* text */ 't', ` is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the converted equivalent TimeUnit`]
			]
		]],
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
		]],
		[/* method */ 'sleep(long)', [
			[/* method description */
				[/* text */ 't', `Performs a `],
				[/* reference */ 'r', `java.lang.Thread#sleep(long,int)`, `Thread.sleep`],
				[/* text */ 't', ` using
 this time unit.
 This is a convenience method that converts time arguments into the
 form required by the `],
				[/* inline code block */ 'i', `Thread.sleep`],
				[/* text */ 't', ` method.`]
			],
			[/* parameters */
				[/* parameter */ 'timeout', [/* parameter description */
					[/* text */ 't', `the minimum time to sleep. If less than
 or equal to zero, do not sleep at all.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.InterruptedException', [/* throw description */
					[/* text */ 't', `if interrupted while sleeping`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'timedJoin(java.lang.Thread,long)', [
			[/* method description */
				[/* text */ 't', `Performs a timed `],
				[/* reference */ 'r', `java.lang.Thread#join(long,int)`, `Thread.join`],
				[/* text */ 't', `
 using this time unit.
 This is a convenience method that converts time arguments into the
 form required by the `],
				[/* inline code block */ 'i', `Thread.join`],
				[/* text */ 't', ` method.`]
			],
			[/* parameters */
				[/* parameter */ 'thread', [/* parameter description */
					[/* text */ 't', `the thread to wait for`]
				]],
				[/* parameter */ 'timeout', [/* parameter description */
					[/* text */ 't', `the maximum time to wait. If less than
 or equal to zero, do not wait at all.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.InterruptedException', [/* throw description */
					[/* text */ 't', `if interrupted while waiting`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'timedWait(java.lang.Object,long)', [
			[/* method description */
				[/* text */ 't', `Performs a timed `],
				[/* reference */ 'r', `java.lang.Object#wait(long,int)`, `Object.wait`],
				[/* text */ 't', `
 using this time unit.
 This is a convenience method that converts timeout arguments
 into the form required by the `],
				[/* inline code block */ 'i', `Object.wait`],
				[/* text */ 't', ` method.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `For example, you could implement a blocking `],
					[/* inline code block */ 'i', `poll`],
					[/* text */ 't', ` method
 (see `],
					[/* reference */ 'r', `java.util.concurrent.BlockingQueue#poll(long,java.util.concurrent.TimeUnit)`, `BlockingQueue.poll`],
					[/* text */ 't', `)
 using:

 `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `public E poll(long timeout, TimeUnit unit)
     throws InterruptedException {
   synchronized (lock) {
     while (isEmpty()) {
       unit.timedWait(lock, timeout);
       ...
     }
   }
 }`]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `the object to wait on`]
				]],
				[/* parameter */ 'timeout', [/* parameter description */
					[/* text */ 't', `the maximum time to wait. If less than
 or equal to zero, do not wait at all.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.InterruptedException', [/* throw description */
					[/* text */ 't', `if interrupted while waiting`]
				]]
			],
			/* return */ UDF
		]]
	],
]);
