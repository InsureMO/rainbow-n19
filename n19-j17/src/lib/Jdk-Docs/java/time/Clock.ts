import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.time.Clock', [
	[/* class description */
		[/* text */ 't', `A clock providing access to the current instant, date and time using a time-zone.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 Instances of this abstract class are used to access a pluggable representation of the
 current instant, which can be interpreted using the stored time-zone to find the
 current date and time.
 For example, `],
			[/* inline code block */ 'i', `Clock`],
			[/* text */ 't', ` can be used instead of `],
			[/* reference */ 'r', `java.lang.System#currentTimeMillis()`, `System.currentTimeMillis()`],
			[/* text */ 't', `
 and `],
			[/* reference */ 'r', `java.util.TimeZone#getDefault()`, `TimeZone.getDefault()`],
			[/* text */ 't', `.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 Use of a `],
			[/* inline code block */ 'i', `Clock`],
			[/* text */ 't', ` is optional. All key date-time classes also have a
 `],
			[/* inline code block */ 'i', `now()`],
			[/* text */ 't', ` factory method that uses the system clock in the default time zone.
 The primary purpose of this abstraction is to allow alternate clocks to be
 plugged in as and when required. Applications use an object to obtain the
 current time rather than a static method. This can simplify testing.
 `]
		]],
		[/* block */ 'b', `
 As such, this abstract class does not guarantee the result actually represents the current instant
 on the time-line. Instead, it allows the application to provide a controlled view as to what
 the current instant and time-zone are.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 Best practice for applications is to pass a `],
			[/* inline code block */ 'i', `Clock`],
			[/* text */ 't', ` into any method
 that requires the current instant and time-zone. A dependency injection framework
 is one way to achieve this:
 `]
		]],
		[/* code block */ 'c', `  public class MyBean {
    private Clock clock;  // dependency inject
    ...
    public void process(LocalDate eventDate) {
      if (eventDate.isBefore(LocalDate.now(clock)) {
        ...
      }
    }
  }
 `],
		[/* text */ 't', `
 This approach allows an alternative clock, such as `],
		[/* reference */ 'r', `#fixed(java.time.Instant,java.time.ZoneId)`, `fixed`],
		[/* text */ 't', `
 or `],
		[/* reference */ 'r', `#offset(java.time.Clock,java.time.Duration)`, `offset`],
		[/* text */ 't', ` to be used during testing.
 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `
 The `],
			[/* inline code block */ 'i', `system`],
			[/* text */ 't', ` factory methods provide clocks based on the best available
 system clock. This may use `],
			[/* reference */ 'r', `java.lang.System#currentTimeMillis()`, `System.currentTimeMillis()`],
			[/* text */ 't', `, or a higher
 resolution clock if one is available.`]
		]]
	],
	/* fields */,
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Constructor accessible by subclasses.`]
			],
			/* parameters */,
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'withZone(java.time.ZoneId)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this clock with a different time-zone.
 `],
				[/* block */ 'b', `
 A clock will typically obtain the current instant and then convert that
 to a date or time using a time-zone. This method returns a clock with
 similar properties but using a different time-zone.`]
			],
			[/* parameters */
				[/* parameter */ 'zone', [/* parameter description */
					[/* text */ 't', `the time-zone to change to, not null`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `a clock based on this clock with the specified time-zone, not null`]
			]
		]],
		[/* method */ 'instant()', [
			[/* method description */
				[/* text */ 't', `Gets the current instant of the clock.
 `],
				[/* block */ 'b', `
 This returns an instant representing the current instant as defined by the clock.`]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the instant cannot be obtained, not thrown by most implementations`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the current instant from this clock, not null`]
			]
		]],
		[/* method */ 'getZone()', [
			[/* method description */
				[/* text */ 't', `Gets the time-zone being used to create dates and times.
 `],
				[/* block */ 'b', `
 A clock will typically obtain the current instant and then convert that
 to a date or time using a time-zone. This method returns the time-zone used.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the time-zone being used to interpret instants, not null`]
			]
		]],
		[/* method */ 'equals(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Checks if this clock is equal to another clock.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 Clocks should override this method to compare equals based on
 their state and to meet the contract of `],
					[/* reference */ 'r', `java.lang.Object#equals(java.lang.Object)`, `Object.equals(java.lang.Object)`],
					[/* text */ 't', `.
 If not overridden, the behavior is defined by `],
					[/* reference */ 'r', `java.lang.Object#equals(java.lang.Object)`, `Object.equals(java.lang.Object)`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `the object to check, null returns false`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `true if this is equal to the other clock`]
			]
		]],
		[/* method */ 'hashCode()', [
			[/* method description */
				[/* text */ 't', `A hash code for this clock.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 Clocks should override this method based on
 their state and to meet the contract of `],
					[/* reference */ 'r', `java.lang.Object#hashCode()`, `Object.hashCode()`],
					[/* text */ 't', `.
 If not overridden, the behavior is defined by `],
					[/* reference */ 'r', `java.lang.Object#hashCode()`, `Object.hashCode()`]
				]]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `a suitable hash code`]
			]
		]],
		[/* method */ 'millis()', [
			[/* method description */
				[/* text */ 't', `Gets the current millisecond instant of the clock.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This returns the millisecond-based instant, measured from 1970-01-01T00:00Z (UTC).
 This is equivalent to the definition of `],
					[/* reference */ 'r', `java.lang.System#currentTimeMillis()`, `System.currentTimeMillis()`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 Most applications should avoid this method and use `],
					[/* reference */ 'r', `java.time.Instant`, `Instant`],
					[/* text */ 't', ` to represent
 an instant on the time-line rather than a raw millisecond value.
 This method is provided to allow the use of the clock in high performance use cases
 where the creation of an object would be unacceptable.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The default implementation currently calls `],
					[/* reference */ 'r', `#instant()`, `instant()`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the instant cannot be obtained, not thrown by most implementations`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the current millisecond instant from this clock, measured from
  the Java epoch of 1970-01-01T00:00Z (UTC), not null`]
			]
		]],
		[/* method */ 'fixed(java.time.Instant,java.time.ZoneId)', [
			[/* method description */
				[/* text */ 't', `Obtains a clock that always returns the same instant.
 `],
				[/* block */ 'b', `
 This clock simply returns the specified instant.
 As such, it is not a clock in the conventional sense.
 The main use case for this is in testing, where the fixed clock ensures
 tests are not dependent on the current clock.
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
					[/* text */ 't', `the instant to use as the clock, not null`]
				]],
				[/* parameter */ 'zone', [/* parameter description */
					[/* text */ 't', `the time-zone to use to convert the instant to date-time, not null`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `a clock that always returns the same instant, not null`]
			]
		]],
		[/* method */ 'offset(java.time.Clock,java.time.Duration)', [
			[/* method description */
				[/* text */ 't', `Obtains a clock that returns instants from the specified clock with the
 specified duration added.
 `],
				[/* block */ 'b', `
 This clock wraps another clock, returning instants that are later by the
 specified duration. If the duration is negative, the instants will be
 earlier than the current date and time.
 The main use case for this is to simulate running in the future or in the past.
 `],
				[/* block */ 'b', `
 A duration of zero would have no offsetting effect.
 Passing zero will return the underlying clock.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The returned implementation is immutable, thread-safe and `],
					[/* inline code block */ 'i', `Serializable`],
					[/* text */ 't', `
 providing that the base clock is.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'baseClock', [/* parameter description */
					[/* text */ 't', `the base clock to add the duration to, not null`]
				]],
				[/* parameter */ 'offsetDuration', [/* parameter description */
					[/* text */ 't', `the duration to add, not null`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `a clock based on the base clock with the duration added, not null`]
			]
		]],
		[/* method */ 'system(java.time.ZoneId)', [
			[/* method description */
				[/* text */ 't', `Obtains a clock that returns the current instant using the best available
 system clock.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This clock is based on the best available system clock.
 This may use `],
					[/* reference */ 'r', `java.lang.System#currentTimeMillis()`, `System.currentTimeMillis()`],
					[/* text */ 't', `, or a higher resolution
 clock if one is available.
 `]
				]],
				[/* block */ 'b', `
 Conversion from instant to date or time uses the specified time-zone.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The returned implementation is immutable, thread-safe and `],
					[/* inline code block */ 'i', `Serializable`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'zone', [/* parameter description */
					[/* text */ 't', `the time-zone to use to convert the instant to date-time, not null`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `a clock that uses the best available system clock in the specified zone, not null`]
			]
		]],
		[/* method */ 'systemDefaultZone()', [
			[/* method description */
				[/* text */ 't', `Obtains a clock that returns the current instant using the best available
 system clock, converting to date and time using the default time-zone.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This clock is based on the best available system clock.
 This may use `],
					[/* reference */ 'r', `java.lang.System#currentTimeMillis()`, `System.currentTimeMillis()`],
					[/* text */ 't', `, or a higher resolution
 clock if one is available.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 Using this method hard codes a dependency to the default time-zone into your application.
 It is recommended to avoid this and use a specific time-zone whenever possible.
 The `],
					[/* reference */ 'r', `#systemUTC()`, `UTC clock`],
					[/* text */ 't', ` should be used when you need the current instant
 without the date or time.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The returned implementation is immutable, thread-safe and `],
					[/* inline code block */ 'i', `Serializable`],
					[/* text */ 't', `.
 It is equivalent to `],
					[/* inline code block */ 'i', `system(ZoneId.systemDefault())`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `a clock that uses the best available system clock in the default zone, not null`]
			]
		]],
		[/* method */ 'systemUTC()', [
			[/* method description */
				[/* text */ 't', `Obtains a clock that returns the current instant using the best available
 system clock, converting to date and time using the UTC time-zone.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This clock, rather than `],
					[/* reference */ 'r', `#systemDefaultZone()`, `systemDefaultZone()`],
					[/* text */ 't', `, should be used when
 you need the current instant without the date or time.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 This clock is based on the best available system clock.
 This may use `],
					[/* reference */ 'r', `java.lang.System#currentTimeMillis()`, `System.currentTimeMillis()`],
					[/* text */ 't', `, or a higher resolution
 clock if one is available.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 Conversion from instant to date or time uses the `],
					[/* reference */ 'r', `java.time.ZoneOffset#UTC`, `UTC time-zone`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The returned implementation is immutable, thread-safe and `],
					[/* inline code block */ 'i', `Serializable`],
					[/* text */ 't', `.
 It is equivalent to `],
					[/* inline code block */ 'i', `system(ZoneOffset.UTC)`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `a clock that uses the best available system clock in the UTC zone, not null`]
			]
		]],
		[/* method */ 'tick(java.time.Clock,java.time.Duration)', [
			[/* method description */
				[/* text */ 't', `Obtains a clock that returns instants from the specified clock truncated
 to the nearest occurrence of the specified duration.
 `],
				[/* block */ 'b', `
 This clock will only tick as per the specified duration. Thus, if the duration
 is half a second, the clock will return instants truncated to the half second.
 `],
				[/* block */ 'b', `
 The tick duration must be positive. If it has a part smaller than a whole
 millisecond, then the whole duration must divide into one second without
 leaving a remainder. All normal tick durations will match these criteria,
 including any multiple of hours, minutes, seconds and milliseconds, and
 sensible nanosecond durations, such as 20ns, 250,000ns and 500,000ns.
 `],
				[/* block */ 'b', `
 A duration of zero or one nanosecond would have no truncation effect.
 Passing one of these will return the underlying clock.
 `],
				[/* block */ 'b', `
 Implementations may use a caching strategy for performance reasons.
 As such, it is possible that the start of the requested duration observed
 via this clock will be later than that observed directly via the underlying clock.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The returned implementation is immutable, thread-safe and `],
					[/* inline code block */ 'i', `Serializable`],
					[/* text */ 't', `
 providing that the base clock is.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'baseClock', [/* parameter description */
					[/* text */ 't', `the base clock to base the ticking clock on, not null`]
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
				[/* text */ 't', `a clock that ticks in whole units of the duration, not null`]
			]
		]],
		[/* method */ 'tickMillis(java.time.ZoneId)', [
			[/* method description */
				[/* text */ 't', `Obtains a clock that returns the current instant ticking in whole milliseconds
 using the best available system clock.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This clock will always have the nano-of-second field truncated to milliseconds.
 This ensures that the visible time ticks in whole milliseconds.
 The underlying clock is the best available system clock, equivalent to
 using `],
					[/* reference */ 'r', `#system(java.time.ZoneId)`, `system(ZoneId)`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', `
 Implementations may use a caching strategy for performance reasons.
 As such, it is possible that the start of the millisecond observed via this
 clock will be later than that observed directly via the underlying clock.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The returned implementation is immutable, thread-safe and `],
					[/* inline code block */ 'i', `Serializable`],
					[/* text */ 't', `.
 It is equivalent to `],
					[/* inline code block */ 'i', `tick(system(zone), Duration.ofMillis(1))`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'zone', [/* parameter description */
					[/* text */ 't', `the time-zone to use to convert the instant to date-time, not null`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `a clock that ticks in whole milliseconds using the specified zone, not null`]
			]
		]],
		[/* method */ 'tickMinutes(java.time.ZoneId)', [
			[/* method description */
				[/* text */ 't', `Obtains a clock that returns the current instant ticking in whole minutes
 using the best available system clock.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This clock will always have the nano-of-second and second-of-minute fields set to zero.
 This ensures that the visible time ticks in whole minutes.
 The underlying clock is the best available system clock, equivalent to
 using `],
					[/* reference */ 'r', `#system(java.time.ZoneId)`, `system(ZoneId)`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', `
 Implementations may use a caching strategy for performance reasons.
 As such, it is possible that the start of the minute observed via this
 clock will be later than that observed directly via the underlying clock.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The returned implementation is immutable, thread-safe and `],
					[/* inline code block */ 'i', `Serializable`],
					[/* text */ 't', `.
 It is equivalent to `],
					[/* inline code block */ 'i', `tick(system(zone), Duration.ofMinutes(1))`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'zone', [/* parameter description */
					[/* text */ 't', `the time-zone to use to convert the instant to date-time, not null`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `a clock that ticks in whole minutes using the specified zone, not null`]
			]
		]],
		[/* method */ 'tickSeconds(java.time.ZoneId)', [
			[/* method description */
				[/* text */ 't', `Obtains a clock that returns the current instant ticking in whole seconds
 using the best available system clock.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This clock will always have the nano-of-second field set to zero.
 This ensures that the visible time ticks in whole seconds.
 The underlying clock is the best available system clock, equivalent to
 using `],
					[/* reference */ 'r', `#system(java.time.ZoneId)`, `system(ZoneId)`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', `
 Implementations may use a caching strategy for performance reasons.
 As such, it is possible that the start of the second observed via this
 clock will be later than that observed directly via the underlying clock.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The returned implementation is immutable, thread-safe and `],
					[/* inline code block */ 'i', `Serializable`],
					[/* text */ 't', `.
 It is equivalent to `],
					[/* inline code block */ 'i', `tick(system(zone), Duration.ofSeconds(1))`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'zone', [/* parameter description */
					[/* text */ 't', `the time-zone to use to convert the instant to date-time, not null`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `a clock that ticks in whole seconds using the specified zone, not null`]
			]
		]]
	],
	/* enum values */ UDF
]);
