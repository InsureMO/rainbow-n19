import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.time.zone.ZoneOffsetTransition', [
	[/* class description */
		[/* text */ 't', `A transition between two offsets caused by a discontinuity in the local time-line.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 A transition between two offsets is normally the result of a daylight savings cutover.
 The discontinuity is normally a gap in spring and an overlap in autumn.
 `],
			[/* inline code block */ 'i', `ZoneOffsetTransition`],
			[/* text */ 't', ` models the transition between the two offsets.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 Gaps occur where there are local date-times that simply do not exist.
 An example would be when the offset changes from `],
			[/* inline code block */ 'i', `+03:00`],
			[/* text */ 't', ` to `],
			[/* inline code block */ 'i', `+04:00`],
			[/* text */ 't', `.
 This might be described as 'the clocks will move forward one hour tonight at 1am'.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 Overlaps occur where there are local date-times that exist twice.
 An example would be when the offset changes from `],
			[/* inline code block */ 'i', `+04:00`],
			[/* text */ 't', ` to `],
			[/* inline code block */ 'i', `+03:00`],
			[/* text */ 't', `.
 This might be described as 'the clocks will move back one hour tonight at 2am'.`]
		]]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'equals(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Checks if this object equals another.
 `],
				[/* block */ 'b', `
 The entire state of the object is compared.`]
			],
			[/* parameters */
				[/* parameter */ 'other', [/* parameter description */
					[/* text */ 't', `the other object to compare to, null returns false`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if equal`]
			]
		]],
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Returns a string describing this object.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a string for debugging, not null`]
			]
		]],
		[/* method */ 'hashCode()', [
			[/* method description */
				[/* text */ 't', `Returns a suitable hash code.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the hash code`]
			]
		]],
		[/* method */ 'compareTo(java.time.zone.ZoneOffsetTransition)', [
			[/* method description */
				[/* text */ 't', `Compares this transition to another based on the transition instant.
 `],
				[/* block */ 'b', `
 This compares the instants of each transition.
 The offsets are ignored, making this order inconsistent with equals.`]
			],
			[/* parameters */
				[/* parameter */ 'transition', [/* parameter description */
					[/* text */ 't', `the transition to compare to, not null`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the comparator value, negative if less, positive if greater`]
			]
		]],
		[/* method */ 'of(java.time.LocalDateTime,java.time.ZoneOffset,java.time.ZoneOffset)', [
			[/* method description */
				[/* text */ 't', `Obtains an instance defining a transition between two offsets.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 Applications should normally obtain an instance from `],
					[/* reference */ 'r', `java.time.zone.ZoneRules`],
					[/* text */ 't', `.
 This factory is only intended for use when creating `],
					[/* reference */ 'r', `java.time.zone.ZoneRules`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'transition', [/* parameter description */
					[/* text */ 't', `the transition date-time at the transition, which never
  actually occurs, expressed local to the before offset, not null`]
				]],
				[/* parameter */ 'offsetBefore', [/* parameter description */
					[/* text */ 't', `the offset before the transition, not null`]
				]],
				[/* parameter */ 'offsetAfter', [/* parameter description */
					[/* text */ 't', `the offset at and after the transition, not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `offsetBefore`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `offsetAfter`],
					[/* text */ 't', `
         are equal, or `],
					[/* inline code block */ 'i', `transition.getNano()`],
					[/* text */ 't', ` returns non-zero value`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the transition, not null`]
			]
		]],
		[/* method */ 'toEpochSecond()', [
			[/* method description */
				[/* text */ 't', `Gets the transition instant as an epoch second.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the transition epoch second`]
			]
		]],
		[/* method */ 'getDuration()', [
			[/* method description */
				[/* text */ 't', `Gets the duration of the transition.
 `],
				[/* block */ 'b', `
 In most cases, the transition duration is one hour, however this is not always the case.
 The duration will be positive for a gap and negative for an overlap.
 Time-zones are second-based, so the nanosecond part of the duration will be zero.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the duration of the transition, positive for gaps, negative for overlaps`]
			]
		]],
		[/* method */ 'getOffsetAfter()', [
			[/* method description */
				[/* text */ 't', `Gets the offset after the transition.
 `],
				[/* block */ 'b', `
 This is the offset in use on and after the instant of the transition.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the offset after the transition, not null`]
			]
		]],
		[/* method */ 'isGap()', [
			[/* method description */
				[/* text */ 't', `Does this transition represent a gap in the local time-line.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 Gaps occur where there are local date-times that simply do not exist.
 An example would be when the offset changes from `],
					[/* inline code block */ 'i', `+01:00`],
					[/* text */ 't', ` to `],
					[/* inline code block */ 'i', `+02:00`],
					[/* text */ 't', `.
 This might be described as 'the clocks will move forward one hour tonight at 1am'.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if this transition is a gap, false if it is an overlap`]
			]
		]],
		[/* method */ 'getDateTimeBefore()', [
			[/* method description */
				[/* text */ 't', `Gets the local transition date-time, as would be expressed with the 'before' offset.
 `],
				[/* block */ 'b', `
 This is the date-time where the discontinuity begins expressed with the 'before' offset.
 At this instant, the 'after' offset is actually used, therefore the combination of this
 date-time and the 'before' offset will never occur.
 `],
				[/* block */ 'b', `
 The combination of the 'before' date-time and offset represents the same instant
 as the 'after' date-time and offset.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the transition date-time expressed with the before offset, not null`]
			]
		]],
		[/* method */ 'getDateTimeAfter()', [
			[/* method description */
				[/* text */ 't', `Gets the local transition date-time, as would be expressed with the 'after' offset.
 `],
				[/* block */ 'b', `
 This is the first date-time after the discontinuity, when the new offset applies.
 `],
				[/* block */ 'b', `
 The combination of the 'before' date-time and offset represents the same instant
 as the 'after' date-time and offset.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the transition date-time expressed with the after offset, not null`]
			]
		]],
		[/* method */ 'getOffsetBefore()', [
			[/* method description */
				[/* text */ 't', `Gets the offset before the transition.
 `],
				[/* block */ 'b', `
 This is the offset in use before the instant of the transition.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the offset before the transition, not null`]
			]
		]],
		[/* method */ 'isValidOffset(java.time.ZoneOffset)', [
			[/* method description */
				[/* text */ 't', `Checks if the specified offset is valid during this transition.
 `],
				[/* block */ 'b', `
 This checks to see if the given offset will be valid at some point in the transition.
 A gap will always return false.
 An overlap will return true if the offset is either the before or after offset.`]
			],
			[/* parameters */
				[/* parameter */ 'offset', [/* parameter description */
					[/* text */ 't', `the offset to check, null returns false`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if the offset is valid during the transition`]
			]
		]],
		[/* method */ 'getInstant()', [
			[/* method description */
				[/* text */ 't', `Gets the transition instant.
 `],
				[/* block */ 'b', `
 This is the instant of the discontinuity, which is defined as the first
 instant that the 'after' offset applies.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The methods `],
					[/* reference */ 'r', `getInstant()`],
					[/* text */ 't', `, `],
					[/* reference */ 'r', `getDateTimeBefore()`],
					[/* text */ 't', ` and `],
					[/* reference */ 'r', `getDateTimeAfter()`],
					[/* text */ 't', `
 all represent the same instant.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the transition instant, not null`]
			]
		]],
		[/* method */ 'isOverlap()', [
			[/* method description */
				[/* text */ 't', `Does this transition represent an overlap in the local time-line.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 Overlaps occur where there are local date-times that exist twice.
 An example would be when the offset changes from `],
					[/* inline code block */ 'i', `+02:00`],
					[/* text */ 't', ` to `],
					[/* inline code block */ 'i', `+01:00`],
					[/* text */ 't', `.
 This might be described as 'the clocks will move back one hour tonight at 2am'.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if this transition is an overlap, false if it is a gap`]
			]
		]]
	],
]);
