import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.time.zone.ZoneRules', [
	[/* class description */
		[/* text */ 't', `The rules defining how the zone offset varies for a single time-zone.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 The rules model all the historic and future transitions for a time-zone.
 `],
			[/* reference */ 'r', `java.time.zone.ZoneOffsetTransition`, `ZoneOffsetTransition`],
			[/* text */ 't', ` is used for known transitions, typically historic.
 `],
			[/* reference */ 'r', `java.time.zone.ZoneOffsetTransitionRule`, `ZoneOffsetTransitionRule`],
			[/* text */ 't', ` is used for future transitions that are based
 on the result of an algorithm.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 The rules are loaded via `],
			[/* reference */ 'r', `java.time.zone.ZoneRulesProvider`, `ZoneRulesProvider`],
			[/* text */ 't', ` using a `],
			[/* reference */ 'r', `java.time.ZoneId`, `ZoneId`],
			[/* text */ 't', `.
 The same rules may be shared internally between multiple zone IDs.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 Serializing an instance of `],
			[/* inline code block */ 'i', `ZoneRules`],
			[/* text */ 't', ` will store the entire set of rules.
 It does not store the zone ID as it is not part of the state of this object.
 `]
		]],
		[/* block */ 'b', `
 A rule implementation may or may not store full information about historic
 and future transitions, and the information stored is only as accurate as
 that supplied to the implementation by the rules provider.
 Applications should treat the data provided as representing the best information
 available to the implementation of this rule.`]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'equals(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Checks if this set of rules equals another.
 `],
				[/* block */ 'b', `
 Two rule sets are equal if they will always result in the same output
 for any given input instant or local date-time.
 Rules from two different groups may return false even if they are in fact the same.
 `],
				[/* block */ 'b', `
 This definition should result in implementations comparing their entire state.`]
			],
			[/* parameters */
				[/* parameter */ 'otherRules', [/* parameter description */
					[/* text */ 't', `the other rules, null returns false`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if this rules is the same as that specified`]
			]
		]],
		[/* method */ 'isDaylightSavings(java.time.Instant)', [
			[/* method description */
				[/* text */ 't', `Checks if the specified instant is in daylight savings.
 `],
				[/* block */ 'b', `
 This checks if the standard offset and the actual offset are the same
 for the specified instant.
 If they are not, it is assumed that daylight savings is in operation.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This default implementation compares the `],
					[/* reference */ 'r', `#getOffset(java.time.Instant)`, `actual`],
					[/* text */ 't', `
 and `],
					[/* reference */ 'r', `#getStandardOffset(java.time.Instant)`, `standard`],
					[/* text */ 't', ` offsets.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'instant', [/* parameter description */
					[/* text */ 't', `the instant to find the offset information for, not null, but null
  may be ignored if the rules have a single offset for all instants`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the standard offset, not null`]
			]
		]],
		[/* method */ 'isFixedOffset()', [
			[/* method description */
				[/* text */ 't', `Checks of the zone rules are fixed, such that the offset never varies.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if the time-zone is fixed and the offset never changes`]
			]
		]],
		[/* method */ 'isValidOffset(java.time.LocalDateTime,java.time.ZoneOffset)', [
			[/* method description */
				[/* text */ 't', `Checks if the offset date-time is valid for these rules.
 `],
				[/* block */ 'b', `
 To be valid, the local date-time must not be in a gap and the offset
 must match one of the valid offsets.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This default implementation checks if `],
					[/* reference */ 'r', `#getValidOffsets(java.time.LocalDateTime)`, `getValidOffsets(java.time.LocalDateTime)`],
					[/* text */ 't', `
 contains the specified offset.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'localDateTime', [/* parameter description */
					[/* text */ 't', `the date-time to check, not null, but null
  may be ignored if the rules have a single offset for all instants`]
				]],
				[/* parameter */ 'offset', [/* parameter description */
					[/* text */ 't', `the offset to check, null returns false`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if the offset date-time is valid for these rules`]
			]
		]],
		[/* method */ 'hashCode()', [
			[/* method description */
				[/* text */ 't', `Returns a suitable hash code given the definition of `],
				[/* inline code block */ 'i', `#equals`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the hash code`]
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
		[/* method */ 'getDaylightSavings(java.time.Instant)', [
			[/* method description */
				[/* text */ 't', `Gets the amount of daylight savings in use for the specified instant in this zone.
 `],
				[/* block */ 'b', `
 This provides access to historic information on how the amount of daylight
 savings has changed over time.
 This is the difference between the standard offset and the actual offset.
 Typically the amount is zero during winter and one hour during summer.
 Time-zones are second-based, so the nanosecond part of the duration will be zero.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This default implementation calculates the duration from the
 `],
					[/* reference */ 'r', `#getOffset(java.time.Instant)`, `actual`],
					[/* text */ 't', ` and
 `],
					[/* reference */ 'r', `#getStandardOffset(java.time.Instant)`, `standard`],
					[/* text */ 't', ` offsets.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'instant', [/* parameter description */
					[/* text */ 't', `the instant to find the daylight savings for, not null, but null
  may be ignored if the rules have a single offset for all instants`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the difference between the standard and actual offset, not null`]
			]
		]],
		[/* method */ 'getTransition(java.time.LocalDateTime)', [
			[/* method description */
				[/* text */ 't', `Gets the offset transition applicable at the specified local date-time in these rules.
 `],
				[/* block */ 'b', `
 The mapping from a local date-time to an offset is not straightforward.
 There are three cases:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', `Normal, with one valid offset. For the vast majority of the year, the normal
  case applies, where there is a single valid offset for the local date-time.`],
					[/* block */ 'b', `Gap, with zero valid offsets. This is when clocks jump forward typically
  due to the spring daylight savings change from "winter" to "summer".
  In a gap there are local date-time values with no valid offset.`],
					[/* block */ 'b', `Overlap, with two valid offsets. This is when clocks are set back typically
  due to the autumn daylight savings change from "summer" to "winter".
  In an overlap there are local date-time values with two valid offsets.`]
				]],
				[/* text */ 't', `
 A transition is used to model the cases of a Gap or Overlap.
 The Normal case will return null.
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `
 There are various ways to handle the conversion from a `],
					[/* inline code block */ 'i', `LocalDateTime`],
					[/* text */ 't', `.
 One technique, using this method, would be:
 `]
				]],
				[/* code block */ 'c', `  ZoneOffsetTransition trans = rules.getTransition(localDT);
  if (trans != null) {
    // Gap or Overlap: determine what to do from transition
  } else {
    // Normal case: only one valid offset
    zoneOffset = rule.getOffset(localDT);
  }
 `],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'localDateTime', [/* parameter description */
					[/* text */ 't', `the local date-time to query for offset transition, not null, but null
  may be ignored if the rules have a single offset for all instants`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the offset transition, null if the local date-time is not in transition`]
			]
		]],
		[/* method */ 'nextTransition(java.time.Instant)', [
			[/* method description */
				[/* text */ 't', `Gets the next transition after the specified instant.
 `],
				[/* block */ 'b', `
 This returns details of the next transition after the specified instant.
 For example, if the instant represents a point where "Summer" daylight savings time
 applies, then the method will return the transition to the next "Winter" time.`]
			],
			[/* parameters */
				[/* parameter */ 'instant', [/* parameter description */
					[/* text */ 't', `the instant to get the next transition after, not null, but null
  may be ignored if the rules have a single offset for all instants`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the next transition after the specified instant, null if this is after the last transition`]
			]
		]],
		[/* method */ 'previousTransition(java.time.Instant)', [
			[/* method description */
				[/* text */ 't', `Gets the previous transition before the specified instant.
 `],
				[/* block */ 'b', `
 This returns details of the previous transition before the specified instant.
 For example, if the instant represents a point where "summer" daylight saving time
 applies, then the method will return the transition from the previous "winter" time.`]
			],
			[/* parameters */
				[/* parameter */ 'instant', [/* parameter description */
					[/* text */ 't', `the instant to get the previous transition after, not null, but null
  may be ignored if the rules have a single offset for all instants`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the previous transition before the specified instant, null if this is before the first transition`]
			]
		]],
		[/* method */ 'getOffset(java.time.Instant)', [
			[/* method description */
				[/* text */ 't', `Gets the offset applicable at the specified instant in these rules.
 `],
				[/* block */ 'b', `
 The mapping from an instant to an offset is simple, there is only
 one valid offset for each instant.
 This method returns that offset.`]
			],
			[/* parameters */
				[/* parameter */ 'instant', [/* parameter description */
					[/* text */ 't', `the instant to find the offset for, not null, but null
  may be ignored if the rules have a single offset for all instants`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the offset, not null`]
			]
		]],
		[/* method */ 'getOffset(java.time.LocalDateTime)', [
			[/* method description */
				[/* text */ 't', `Gets a suitable offset for the specified local date-time in these rules.
 `],
				[/* block */ 'b', `
 The mapping from a local date-time to an offset is not straightforward.
 There are three cases:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', `Normal, with one valid offset. For the vast majority of the year, the normal
  case applies, where there is a single valid offset for the local date-time.`],
					[/* block */ 'b', `Gap, with zero valid offsets. This is when clocks jump forward typically
  due to the spring daylight savings change from "winter" to "summer".
  In a gap there are local date-time values with no valid offset.`],
					[/* block */ 'b', `Overlap, with two valid offsets. This is when clocks are set back typically
  due to the autumn daylight savings change from "summer" to "winter".
  In an overlap there are local date-time values with two valid offsets.`]
				]],
				[/* text */ 't', `
 Thus, for any given local date-time there can be zero, one or two valid offsets.
 This method returns the single offset in the Normal case, and in the Gap or Overlap
 case it returns the offset before the transition.
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `
 Since, in the case of Gap and Overlap, the offset returned is a "best" value, rather
 than the "correct" value, it should be treated with care. Applications that care
 about the correct offset should use a combination of this method,
 `],
					[/* reference */ 'r', `#getValidOffsets(java.time.LocalDateTime)`, `getValidOffsets(LocalDateTime)`],
					[/* text */ 't', ` and `],
					[/* reference */ 'r', `#getTransition(java.time.LocalDateTime)`, `getTransition(LocalDateTime)`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'localDateTime', [/* parameter description */
					[/* text */ 't', `the local date-time to query, not null, but null
  may be ignored if the rules have a single offset for all instants`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the best available offset for the local date-time, not null`]
			]
		]],
		[/* method */ 'getStandardOffset(java.time.Instant)', [
			[/* method description */
				[/* text */ 't', `Gets the standard offset for the specified instant in this zone.
 `],
				[/* block */ 'b', `
 This provides access to historic information on how the standard offset
 has changed over time.
 The standard offset is the offset before any daylight saving time is applied.
 This is typically the offset applicable during winter.`]
			],
			[/* parameters */
				[/* parameter */ 'instant', [/* parameter description */
					[/* text */ 't', `the instant to find the offset information for, not null, but null
  may be ignored if the rules have a single offset for all instants`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the standard offset, not null`]
			]
		]],
		[/* method */ 'getTransitions()', [
			[/* method description */
				[/* text */ 't', `Gets the complete list of fully defined transitions.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The complete set of transitions for this rules instance is defined by this method
 and `],
					[/* reference */ 'r', `#getTransitionRules()`, `getTransitionRules()`],
					[/* text */ 't', `. This method returns those transitions that have
 been fully defined. These are typically historical, but may be in the future.
 `]
				]],
				[/* block */ 'b', `
 The list will be empty for fixed offset rules and for any time-zone where there has
 only ever been a single offset. The list will also be empty if the transition rules are unknown.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an immutable list of fully defined transitions, not null`]
			]
		]],
		[/* method */ 'getTransitionRules()', [
			[/* method description */
				[/* text */ 't', `Gets the list of transition rules for years beyond those defined in the transition list.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The complete set of transitions for this rules instance is defined by this method
 and `],
					[/* reference */ 'r', `#getTransitions()`, `getTransitions()`],
					[/* text */ 't', `. This method returns instances of `],
					[/* reference */ 'r', `java.time.zone.ZoneOffsetTransitionRule`, `ZoneOffsetTransitionRule`],
					[/* text */ 't', `
 that define an algorithm for when transitions will occur.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 For any given `],
					[/* inline code block */ 'i', `ZoneRules`],
					[/* text */ 't', `, this list contains the transition rules for years
 beyond those years that have been fully defined. These rules typically refer to future
 daylight saving time rule changes.
 `]
				]],
				[/* block */ 'b', `
 If the zone defines daylight savings into the future, then the list will normally
 be of size two and hold information about entering and exiting daylight savings.
 If the zone does not have daylight savings, or information about future changes
 is uncertain, then the list will be empty.
 `],
				[/* block */ 'b', `
 The list will be empty for fixed offset rules and for any time-zone where there is no
 daylight saving time. The list will also be empty if the transition rules are unknown.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an immutable list of transition rules, not null`]
			]
		]],
		[/* method */ 'getValidOffsets(java.time.LocalDateTime)', [
			[/* method description */
				[/* text */ 't', `Gets the offset applicable at the specified local date-time in these rules.
 `],
				[/* block */ 'b', `
 The mapping from a local date-time to an offset is not straightforward.
 There are three cases:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', `Normal, with one valid offset. For the vast majority of the year, the normal
  case applies, where there is a single valid offset for the local date-time.`],
					[/* block */ 'b', `Gap, with zero valid offsets. This is when clocks jump forward typically
  due to the spring daylight savings change from "winter" to "summer".
  In a gap there are local date-time values with no valid offset.`],
					[/* block */ 'b', `Overlap, with two valid offsets. This is when clocks are set back typically
  due to the autumn daylight savings change from "summer" to "winter".
  In an overlap there are local date-time values with two valid offsets.`]
				]],
				[/* text */ 't', `
 Thus, for any given local date-time there can be zero, one or two valid offsets.
 This method returns that list of valid offsets, which is a list of size 0, 1 or 2.
 In the case where there are two offsets, the earlier offset is returned at index 0
 and the later offset at index 1.
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `
 There are various ways to handle the conversion from a `],
					[/* inline code block */ 'i', `LocalDateTime`],
					[/* text */ 't', `.
 One technique, using this method, would be:
 `]
				]],
				[/* code block */ 'c', `  List<ZoneOffset> validOffsets = rules.getValidOffsets(localDT);
  if (validOffsets.size() == 1) {
    // Normal case: only one valid offset
    zoneOffset = validOffsets.get(0);
  } else {
    // Gap or Overlap: determine what to do from transition (which will be non-null)
    ZoneOffsetTransition trans = rules.getTransition(localDT);
  }
 `],
				[/* text */ 't', `
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', `
 In theory, it is possible for there to be more than two valid offsets.
 This would happen if clocks to be put back more than once in quick succession.
 This has never happened in the history of time-zones and thus has no special handling.
 However, if it were to happen, then the list would return more than 2 entries.`]
			],
			[/* parameters */
				[/* parameter */ 'localDateTime', [/* parameter description */
					[/* text */ 't', `the local date-time to query for valid offsets, not null, but null
  may be ignored if the rules have a single offset for all instants`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the list of valid offsets, may be immutable, not null`]
			]
		]],
		[/* method */ 'of(java.time.ZoneOffset)', [
			[/* method description */
				[/* text */ 't', `Obtains an instance of ZoneRules that has fixed zone rules.`]
			],
			[/* parameters */
				[/* parameter */ 'offset', [/* parameter description */
					[/* text */ 't', `the offset this fixed zone rules is based on, not null`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the zone rules, not null`]
			]
		]],
		[/* method */ 'of(java.time.ZoneOffset,java.time.ZoneOffset,java.util.List,java.util.List,java.util.List)', [
			[/* method description */
				[/* text */ 't', `Obtains an instance of a ZoneRules.`]
			],
			[/* parameters */
				[/* parameter */ 'baseStandardOffset', [/* parameter description */
					[/* text */ 't', `the standard offset to use before legal rules were set, not null`]
				]],
				[/* parameter */ 'baseWallOffset', [/* parameter description */
					[/* text */ 't', `the wall offset to use before legal rules were set, not null`]
				]],
				[/* parameter */ 'standardOffsetTransitionList', [/* parameter description */
					[/* text */ 't', `the list of changes to the standard offset, not null`]
				]],
				[/* parameter */ 'transitionList', [/* parameter description */
					[/* text */ 't', `the list of transitions, not null`]
				]],
				[/* parameter */ 'lastRules', [/* parameter description */
					[/* text */ 't', `the recurring last rules, size 16 or less, not null`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the zone rules, not null`]
			]
		]]
	],
]);
