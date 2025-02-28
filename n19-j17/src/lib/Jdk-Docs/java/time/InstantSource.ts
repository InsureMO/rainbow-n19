import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.time.InstantSource', [
	[/* class description */
		[/* text */ 't', `Provides access to the current instant.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 Instances of this interface are used to access a pluggable representation of the current instant.
 For example, `],
			[/* inline code block */ 'i', `InstantSource`],
			[/* text */ 't', ` can be used instead of `],
			[/* external link */ 'a', `../lang/System.html#currentTimeMillis()`, `System.currentTimeMillis()`],
			[/* text */ 't', `.
 `]
		]],
		[/* block */ 'b', `
 The primary purpose of this abstraction is to allow alternate instant sources to be
 plugged in as and when required. Applications use an object to obtain the
 current time rather than a static method. This can simplify testing.
 `],
		[/* block */ 'b', `
 As such, this interface does not guarantee the result actually represents the current instant
 on the time-line. Instead, it allows the application to provide a controlled view as to what
 the current instant is.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 Best practice for applications is to pass an `],
			[/* inline code block */ 'i', `InstantSource`],
			[/* text */ 't', ` into any method
 that requires the current instant. A dependency injection framework is one
 way to achieve this:
 `]
		]],
		[/* code block */ 'c', `  public class MyBean {
    private InstantSource source;  // dependency inject
    ...
    public void process(Instant endInstant) {
      if (source.instant().isAfter(endInstant) {
        ...
      }
    }
  }
 `],
		[/* text */ 't', `
 This approach allows an alternative source, such as `],
		[/* reference */ 'r', `fixed`],
		[/* text */ 't', `
 or `],
		[/* reference */ 'r', `offset`],
		[/* text */ 't', ` to be used during testing.
 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `
 The `],
			[/* inline code block */ 'i', `system`],
			[/* text */ 't', ` factory method provides a source based on the best available
 system clock. This may use `],
			[/* external link */ 'a', `../lang/System.html#currentTimeMillis()`, `System.currentTimeMillis()`],
			[/* text */ 't', `, or a higher
 resolution clock if one is available.`]
		]]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'offset(java.time.InstantSource,java.time.Duration)', [
			[/* method description */
				[/* text */ 't', `Obtains a source that returns instants from the specified source with the
 specified duration added.
 `],
				[/* block */ 'b', `
 This source wraps another source, returning instants that are later by the
 specified duration. If the duration is negative, the instants will be
 earlier than the current date and time.
 The main use case for this is to simulate running in the future or in the past.
 `],
				[/* block */ 'b', `
 A duration of zero would have no offsetting effect.
 Passing zero will return the underlying source.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The returned implementation is immutable, thread-safe and `],
					[/* inline code block */ 'i', `Serializable`],
					[/* text */ 't', `
 providing that the base source is.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'baseSource', [/* parameter description */
					[/* text */ 't', `the base source to add the duration to, not null`]
				]],
				[/* parameter */ 'offsetDuration', [/* parameter description */
					[/* text */ 't', `the duration to add, not null`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a source based on the base source with the duration added, not null`]
			]
		]],
		[/* method */ 'millis()', [
			[/* method description */
				[/* text */ 't', `Gets the current millisecond instant of the source.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This returns the millisecond-based instant, measured from 1970-01-01T00:00Z (UTC).
 This is equivalent to the definition of `],
					[/* external link */ 'a', `../lang/System.html#currentTimeMillis()`, `System.currentTimeMillis()`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 Most applications should avoid this method and use `],
					[/* reference */ 'r', `java.time.Instant`],
					[/* text */ 't', ` to represent
 an instant on the time-line rather than a raw millisecond value.
 This method is provided to allow the use of the source in high performance use cases
 where the creation of an object would be unacceptable.`]
				]]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the instant cannot be obtained, not thrown by most implementations`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the current millisecond instant from this source, measured from
  the Java epoch of 1970-01-01T00:00Z (UTC), not null`]
			]
		]],
		[/* method */ 'system()', [
			[/* method description */
				[/* text */ 't', `Obtains a source that returns the current instant using the best available
 system clock.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This source is based on the best available system clock. This may use
 `],
					[/* external link */ 'a', `../lang/System.html#currentTimeMillis()`, `System.currentTimeMillis()`],
					[/* text */ 't', `, or a higher resolution system clock if
 one is available.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The returned implementation is immutable, thread-safe and
 `],
					[/* inline code block */ 'i', `Serializable`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a source that uses the best available system clock, not null`]
			]
		]],
		[/* method */ 'fixed(java.time.Instant)', [
			[/* method description */
				[/* text */ 't', `Obtains a source that always returns the same instant.
 `],
				[/* block */ 'b', `
 This source simply returns the specified instant.
 As such, it is not a source that represents the current instant.
 The main use case for this is in testing, where the fixed source ensures
 tests are not dependent on the current source.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The returned implementation is immutable, thread-safe and `],
					[/* inline code block */ 'i', `Serializable`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'fixedInstant', [/* parameter description */
					[/* text */ 't', `the instant to use, not null`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a source that always returns the same instant, not null`]
			]
		]],
		[/* method */ 'instant()', [
			[/* method description */
				[/* text */ 't', `Gets the current instant of the source.
 `],
				[/* block */ 'b', `
 This returns an instant representing the current instant as defined by the source.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the instant cannot be obtained, not thrown by most implementations`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the current instant from this source, not null`]
			]
		]],
		[/* method */ 'withZone(java.time.ZoneId)', [
			[/* method description */
				[/* text */ 't', `Returns a clock with the specified time-zone.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This returns a `],
					[/* reference */ 'r', `java.time.Clock`],
					[/* text */ 't', `, which is an extension of this interface
 that combines this source and the specified time-zone.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The returned implementation is immutable, thread-safe and `],
					[/* inline code block */ 'i', `Serializable`],
					[/* text */ 't', `
 providing that this source is.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'zone', [/* parameter description */
					[/* text */ 't', `the time-zone to use, not null`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a clock based on this source with the specified time-zone, not null`]
			]
		]],
		[/* method */ 'tick(java.time.InstantSource,java.time.Duration)', [
			[/* method description */
				[/* text */ 't', `Obtains a source that returns instants from the specified source truncated to
 the nearest occurrence of the specified duration.
 `],
				[/* block */ 'b', `
 This source will only tick as per the specified duration. Thus, if the
 duration is half a second, the source will return instants truncated to the
 half second.
 `],
				[/* block */ 'b', `
 The tick duration must be positive. If it has a part smaller than a whole
 millisecond, then the whole duration must divide into one second without
 leaving a remainder. All normal tick durations will match these criteria,
 including any multiple of hours, minutes, seconds and milliseconds, and
 sensible nanosecond durations, such as 20ns, 250,000ns and 500,000ns.
 `],
				[/* block */ 'b', `
 A duration of zero or one nanosecond would have no truncation effect. Passing
 one of these will return the underlying source.
 `],
				[/* block */ 'b', `
 Implementations may use a caching strategy for performance reasons. As such,
 it is possible that the start of the requested duration observed via this
 source will be later than that observed directly via the underlying source.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The returned implementation is immutable, thread-safe and
 `],
					[/* inline code block */ 'i', `Serializable`],
					[/* text */ 't', ` providing that the base source is.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'baseSource', [/* parameter description */
					[/* text */ 't', `the base source to base the ticking source on, not null`]
				]],
				[/* parameter */ 'tickDuration', [/* parameter description */
					[/* text */ 't', `the duration of each visible tick, not negative, not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the duration is negative, or has a
  part smaller than a whole millisecond such that the whole duration is not
  divisible into one second`]
				]],
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if the duration is too large to be represented as nanos`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a source that ticks in whole units of the duration, not null`]
			]
		]]
	],
]);
