import {UDF} from '../../../../../utils';
import {DocsCollector} from '../../../../DocsCollector';

DocsCollector.collect('java.nio.file.attribute.FileTime', [
	[/* class description */
		[/* text */ 't', `Represents the value of a file's time stamp attribute. For example, it may
 represent the time that the file was last
 `],
		[/* reference */ 'r', `.BasicFileAttributes#lastModifiedTime()`],
		[/* text */ 't', `,
 `],
		[/* reference */ 'r', `.BasicFileAttributes#lastAccessTime()`],
		[/* text */ 't', `,
 or `],
		[/* reference */ 'r', `.BasicFileAttributes#creationTime()`],
		[/* text */ 't', `.

 `],
		[/* block */ 'b', ` Instances of this class are immutable.`]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'equals(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Tests this `],
				[/* inline code block */ 'i', `FileTime`],
				[/* text */ 't', ` for equality with the given object.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The result is `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` if and only if the argument is not `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` and is a `],
					[/* inline code block */ 'i', `FileTime`],
					[/* text */ 't', ` that represents the same time. This
 method satisfies the general contract of the `],
					[/* inline code block */ 'i', `Object.equals`],
					[/* text */ 't', ` method.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `the object to compare with`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if, and only if, the given object is a `],
				[/* inline code block */ 'i', `FileTime`],
				[/* text */ 't', ` that represents the same time`]
			]
		]],
		[/* method */ 'compareTo(java.nio.file.attribute.FileTime)', [
			[/* method description */
				[/* text */ 't', `Compares the value of two `],
				[/* inline code block */ 'i', `FileTime`],
				[/* text */ 't', ` objects for order.`]
			],
			[/* parameters */
				[/* parameter */ 'other', [/* parameter description */
					[/* text */ 't', `the other `],
					[/* inline code block */ 'i', `FileTime`],
					[/* text */ 't', ` to be compared`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if this `],
				[/* inline code block */ 'i', `FileTime`],
				[/* text */ 't', ` is equal to `],
				[/* inline code block */ 'i', `other`],
				[/* text */ 't', `, a
          value less than 0 if this `],
				[/* inline code block */ 'i', `FileTime`],
				[/* text */ 't', ` represents a time
          that is before `],
				[/* inline code block */ 'i', `other`],
				[/* text */ 't', `, and a value greater than 0 if this
          `],
				[/* inline code block */ 'i', `FileTime`],
				[/* text */ 't', ` represents a time that is after `],
				[/* inline code block */ 'i', `other`]
			]
		]],
		[/* method */ 'hashCode()', [
			[/* method description */
				[/* text */ 't', `Computes a hash code for this file time.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The hash code is based upon the value represented, and satisfies the
 general contract of the `],
					[/* reference */ 'r', `java.nio.file.Object#hashCode()`],
					[/* text */ 't', ` method.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the hash-code value`]
			]
		]],
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Returns the string representation of this `],
				[/* inline code block */ 'i', `FileTime`],
				[/* text */ 't', `. The string
 is returned in the `],
				[/* external link */ 'a', `http://www.w3.org/TR/NOTE-datetime`, `ISO 8601`],
				[/* text */ 't', ` format:
 `],
				[/* code block */ 'c', `     YYYY-MM-DDThh:mm:ss[.s+]Z
 `],
				[/* text */ 't', `
 where "`],
				[/* inline code block */ 'i', `[.s+]`],
				[/* text */ 't', `" represents a dot followed by one of more digits
 for the decimal fraction of a second. It is only present when the decimal
 fraction of a second is not zero. For example, `],
				[/* inline code block */ 'i', `FileTime.fromMillis(1234567890000L).toString()`],
				[/* text */ 't', ` yields `],
				[/* inline code block */ 'i', `"2009-02-13T23:31:30Z"`],
				[/* text */ 't', `, and `],
				[/* inline code block */ 'i', `FileTime.fromMillis(1234567890123L).toString()`],
				[/* text */ 't', `
 yields `],
				[/* inline code block */ 'i', `"2009-02-13T23:31:30.123Z"`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` A `],
					[/* inline code block */ 'i', `FileTime`],
					[/* text */ 't', ` is primarily intended to represent the value of a
 file's time stamp. Where used to represent `],
					[/* text */ 't', `extreme values`],
					[/* text */ 't', `, where
 the year is less than "`],
					[/* inline code block */ 'i', `0001`],
					[/* text */ 't', `" or greater than "`],
					[/* inline code block */ 'i', `9999`],
					[/* text */ 't', `" then
 this method deviates from ISO 8601 in the same manner as the
 `],
					[/* external link */ 'a', `http://www.w3.org/TR/xmlschema-2/#deviantformats`, `XML Schema language`],
					[/* text */ 't', `. That is, the year may be expanded to more than four digits
 and may be negative-signed. If more than four digits then leading zeros
 are not present. The year before "`],
					[/* inline code block */ 'i', `0001`],
					[/* text */ 't', `" is "`],
					[/* inline code block */ 'i', `-0001`],
					[/* text */ 't', `".`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the string representation of this file time`]
			]
		]],
		[/* method */ 'toInstant()', [
			[/* method description */
				[/* text */ 't', `Converts this `],
				[/* inline code block */ 'i', `FileTime`],
				[/* text */ 't', ` object to an `],
				[/* inline code block */ 'i', `Instant`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The conversion creates an `],
					[/* inline code block */ 'i', `Instant`],
					[/* text */ 't', ` that represents the
 same point on the time-line as this `],
					[/* inline code block */ 'i', `FileTime`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* inline code block */ 'i', `FileTime`],
					[/* text */ 't', ` can store points on the time-line further in the
 future and further in the past than `],
					[/* inline code block */ 'i', `Instant`],
					[/* text */ 't', `. Conversion
 from such further time points saturates to `],
					[/* reference */ 'r', `java.nio.file.Instant#MIN`],
					[/* text */ 't', ` if
 earlier than `],
					[/* inline code block */ 'i', `Instant.MIN`],
					[/* text */ 't', ` or `],
					[/* reference */ 'r', `java.nio.file.Instant#MAX`],
					[/* text */ 't', ` if later
 than `],
					[/* inline code block */ 'i', `Instant.MAX`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an instant representing the same point on the time-line as
          this `],
				[/* inline code block */ 'i', `FileTime`],
				[/* text */ 't', ` object`]
			]
		]],
		[/* method */ 'to(java.util.concurrent.TimeUnit)', [
			[/* method description */
				[/* text */ 't', `Returns the value at the given unit of granularity.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` Conversion from a coarser granularity that would numerically overflow
 saturate to `],
					[/* inline code block */ 'i', `Long.MIN_VALUE`],
					[/* text */ 't', ` if negative or `],
					[/* inline code block */ 'i', `Long.MAX_VALUE`],
					[/* text */ 't', `
 if positive.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'unit', [/* parameter description */
					[/* text */ 't', `the unit of granularity for the return value`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `value in the given unit of granularity, since the epoch
          since the epoch (1970-01-01T00:00:00Z); can be negative`]
			]
		]],
		[/* method */ 'toMillis()', [
			[/* method description */
				[/* text */ 't', `Returns the value in milliseconds.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` Conversion from a coarser granularity that would numerically overflow
 saturate to `],
					[/* inline code block */ 'i', `Long.MIN_VALUE`],
					[/* text */ 't', ` if negative or `],
					[/* inline code block */ 'i', `Long.MAX_VALUE`],
					[/* text */ 't', `
 if positive.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the value in milliseconds, since the epoch (1970-01-01T00:00:00Z)`]
			]
		]],
		[/* method */ 'from(java.time.Instant)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `FileTime`],
				[/* text */ 't', ` representing the same point of time value
 on the time-line as the provided `],
				[/* inline code block */ 'i', `Instant`],
				[/* text */ 't', ` object.`]
			],
			[/* parameters */
				[/* parameter */ 'instant', [/* parameter description */
					[/* text */ 't', `the instant to convert`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `FileTime`],
				[/* text */ 't', ` representing the same point on the time-line
          as the provided instant`]
			]
		]],
		[/* method */ 'from(long,java.util.concurrent.TimeUnit)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `FileTime`],
				[/* text */ 't', ` representing a value at the given unit of
 granularity.`]
			],
			[/* parameters */
				[/* parameter */ 'value', [/* parameter description */
					[/* text */ 't', `the value since the epoch (1970-01-01T00:00:00Z); can be
          negative`]
				]],
				[/* parameter */ 'unit', [/* parameter description */
					[/* text */ 't', `the unit of granularity to interpret the value`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `FileTime`],
				[/* text */ 't', ` representing the given value`]
			]
		]],
		[/* method */ 'fromMillis(long)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `FileTime`],
				[/* text */ 't', ` representing the given value in milliseconds.`]
			],
			[/* parameters */
				[/* parameter */ 'value', [/* parameter description */
					[/* text */ 't', `the value, in milliseconds, since the epoch
          (1970-01-01T00:00:00Z); can be negative`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `FileTime`],
				[/* text */ 't', ` representing the given value`]
			]
		]]
	],
]);
