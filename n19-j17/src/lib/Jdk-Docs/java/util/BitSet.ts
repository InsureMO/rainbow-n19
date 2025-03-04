import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.util.BitSet', [
	[/* class description */
		[/* text */ 't', `This class implements a vector of bits that grows as needed. Each
 component of the bit set has a `],
		[/* inline code block */ 'i', `boolean`],
		[/* text */ 't', ` value. The
 bits of a `],
		[/* inline code block */ 'i', `BitSet`],
		[/* text */ 't', ` are indexed by nonnegative integers.
 Individual indexed bits can be examined, set, or cleared. One
 `],
		[/* inline code block */ 'i', `BitSet`],
		[/* text */ 't', ` may be used to modify the contents of another
 `],
		[/* inline code block */ 'i', `BitSet`],
		[/* text */ 't', ` through logical AND, logical inclusive OR, and
 logical exclusive OR operations.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `By default, all bits in the set initially have the value
 `],
			[/* inline code block */ 'i', `false`],
			[/* text */ 't', `.

 `]
		]],
		[/* block */ 'b', `Every bit set has a current size, which is the number of bits
 of space currently in use by the bit set. Note that the size is
 related to the implementation of a bit set, so it may change with
 implementation. The length of a bit set relates to logical length
 of a bit set and is defined independently of implementation.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `Unless otherwise noted, passing a null parameter to any of the
 methods in a `],
			[/* inline code block */ 'i', `BitSet`],
			[/* text */ 't', ` will result in a
 `],
			[/* inline code block */ 'i', `NullPointerException`],
			[/* text */ 't', `.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `A `],
			[/* inline code block */ 'i', `BitSet`],
			[/* text */ 't', ` is not safe for multithreaded use without
 external synchronization.`]
		]]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Creates a new bit set. All bits are initially `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(int)', [
			[/* constructor description */
				[/* text */ 't', `Creates a bit set whose initial size is large enough to explicitly
 represent bits with indices in the range `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` through
 `],
				[/* inline code block */ 'i', `nbits-1`],
				[/* text */ 't', `. All bits are initially `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'nbits', [/* parameter description */
					[/* text */ 't', `the initial size of the bit set`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NegativeArraySizeException', [/* throw description */
					[/* text */ 't', `if the specified initial size
         is negative`]
				]]
			]
		]]
	],
	[/* methods */
		[/* method */ 'equals(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Compares this object against the specified object.
 The result is `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if and only if the argument is
 not `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` and is a `],
				[/* inline code block */ 'i', `BitSet`],
				[/* text */ 't', ` object that has
 exactly the same set of bits set to `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` as this bit
 set. That is, for every nonnegative `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` index `],
				[/* inline code block */ 'i', `k`],
				[/* text */ 't', `,
 `],
				[/* code block */ 'c', `((BitSet)obj).get(k) == this.get(k)`],
				[/* text */ 't', `
 must be true. The current sizes of the two bit sets are not compared.`]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `the object to compare with`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the objects are the same;
         `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise`]
			]
		]],
		[/* method */ 'get(int)', [
			[/* method description */
				[/* text */ 't', `Returns the value of the bit with the specified index. The value
 is `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the bit with the index `],
				[/* inline code block */ 'i', `bitIndex`],
				[/* text */ 't', `
 is currently set in this `],
				[/* inline code block */ 'i', `BitSet`],
				[/* text */ 't', `; otherwise, the result
 is `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'bitIndex', [/* parameter description */
					[/* text */ 't', `the bit index`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if the specified index is negative`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the value of the bit with the specified index`]
			]
		]],
		[/* method */ 'intersects(java.util.BitSet)', [
			[/* method description */
				[/* text */ 't', `Returns true if the specified `],
				[/* inline code block */ 'i', `BitSet`],
				[/* text */ 't', ` has any bits set to
 `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` that are also set to `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` in this `],
				[/* inline code block */ 'i', `BitSet`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'set', [/* parameter description */
					[/* text */ 't', ``],
					[/* inline code block */ 'i', `BitSet`],
					[/* text */ 't', ` to intersect with`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `boolean indicating whether this `],
				[/* inline code block */ 'i', `BitSet`],
				[/* text */ 't', ` intersects
         the specified `],
				[/* inline code block */ 'i', `BitSet`]
			]
		]],
		[/* method */ 'isEmpty()', [
			[/* method description */
				[/* text */ 't', `Returns true if this `],
				[/* inline code block */ 'i', `BitSet`],
				[/* text */ 't', ` contains no bits that are set
 to `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `boolean indicating whether this `],
				[/* inline code block */ 'i', `BitSet`],
				[/* text */ 't', ` is empty`]
			]
		]],
		[/* method */ 'toByteArray()', [
			[/* method description */
				[/* text */ 't', `Returns a new byte array containing all the bits in this bit set.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `More precisely, if
 `],
					[/* new line */ 'n'],
					[/* inline code block */ 'i', `byte[] bytes = s.toByteArray();`],
					[/* new line */ 'n'],
					[/* text */ 't', `then `],
					[/* inline code block */ 'i', `bytes.length == (s.length()+7)/8`],
					[/* text */ 't', ` and
 `],
					[/* new line */ 'n'],
					[/* inline code block */ 'i', `s.get(n) == ((bytes[n/8] & (1<<(n%8))) != 0)`],
					[/* new line */ 'n'],
					[/* text */ 't', `for all `],
					[/* inline code block */ 'i', `n < 8 * bytes.length`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a byte array containing a little-endian representation
         of all the bits in this bit set`]
			]
		]],
		[/* method */ 'cardinality()', [
			[/* method description */
				[/* text */ 't', `Returns the number of bits set to `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` in this `],
				[/* inline code block */ 'i', `BitSet`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the number of bits set to `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` in this `],
				[/* inline code block */ 'i', `BitSet`]
			]
		]],
		[/* method */ 'hashCode()', [
			[/* method description */
				[/* text */ 't', `Returns the hash code value for this bit set. The hash code depends
 only on which bits are set within this `],
				[/* inline code block */ 'i', `BitSet`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', `The hash code is defined to be the result of the following
 calculation:
  `],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `public int hashCode() {
     long h = 1234;
     long[] words = toLongArray();
     for (int i = words.length; --i >= 0; )
         h ^= words[i] * (i + 1);
     return (int)((h >> 32) ^ h);
 }`]
				]],
				[/* text */ 't', `
 Note that the hash code changes if the set of bits is altered.`],
				[/* block */ 'b', '']
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the hash code value for this bit set`]
			]
		]],
		[/* method */ 'length()', [
			[/* method description */
				[/* text */ 't', `Returns the "logical size" of this `],
				[/* inline code block */ 'i', `BitSet`],
				[/* text */ 't', `: the index of
 the highest set bit in the `],
				[/* inline code block */ 'i', `BitSet`],
				[/* text */ 't', ` plus one. Returns zero
 if the `],
				[/* inline code block */ 'i', `BitSet`],
				[/* text */ 't', ` contains no set bits.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the logical size of this `],
				[/* inline code block */ 'i', `BitSet`]
			]
		]],
		[/* method */ 'nextClearBit(int)', [
			[/* method description */
				[/* text */ 't', `Returns the index of the first bit that is set to `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', `
 that occurs on or after the specified starting index.`]
			],
			[/* parameters */
				[/* parameter */ 'fromIndex', [/* parameter description */
					[/* text */ 't', `the index to start checking from (inclusive)`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if the specified index is negative`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the index of the next clear bit`]
			]
		]],
		[/* method */ 'nextSetBit(int)', [
			[/* method description */
				[/* text */ 't', `Returns the index of the first bit that is set to `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', `
 that occurs on or after the specified starting index. If no such
 bit exists then `],
				[/* inline code block */ 'i', `-1`],
				[/* text */ 't', ` is returned.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `To iterate over the `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` bits in a `],
					[/* inline code block */ 'i', `BitSet`],
					[/* text */ 't', `,
 use the following loop:

  `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `for (int i = bs.nextSetBit(0); i >= 0; i = bs.nextSetBit(i+1)) {
     // operate on index i here
     if (i == Integer.MAX_VALUE) {
         break; // or (i+1) would overflow
     }
 }`]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'fromIndex', [/* parameter description */
					[/* text */ 't', `the index to start checking from (inclusive)`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if the specified index is negative`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the index of the next set bit, or `],
				[/* inline code block */ 'i', `-1`],
				[/* text */ 't', ` if there
         is no such bit`]
			]
		]],
		[/* method */ 'previousClearBit(int)', [
			[/* method description */
				[/* text */ 't', `Returns the index of the nearest bit that is set to `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', `
 that occurs on or before the specified starting index.
 If no such bit exists, or if `],
				[/* inline code block */ 'i', `-1`],
				[/* text */ 't', ` is given as the
 starting index, then `],
				[/* inline code block */ 'i', `-1`],
				[/* text */ 't', ` is returned.`]
			],
			[/* parameters */
				[/* parameter */ 'fromIndex', [/* parameter description */
					[/* text */ 't', `the index to start checking from (inclusive)`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if the specified index is less
         than `],
					[/* inline code block */ 'i', `-1`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the index of the previous clear bit, or `],
				[/* inline code block */ 'i', `-1`],
				[/* text */ 't', ` if there
         is no such bit`]
			]
		]],
		[/* method */ 'previousSetBit(int)', [
			[/* method description */
				[/* text */ 't', `Returns the index of the nearest bit that is set to `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', `
 that occurs on or before the specified starting index.
 If no such bit exists, or if `],
				[/* inline code block */ 'i', `-1`],
				[/* text */ 't', ` is given as the
 starting index, then `],
				[/* inline code block */ 'i', `-1`],
				[/* text */ 't', ` is returned.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `To iterate over the `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` bits in a `],
					[/* inline code block */ 'i', `BitSet`],
					[/* text */ 't', `,
 use the following loop:

  `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `for (int i = bs.length(); (i = bs.previousSetBit(i-1)) >= 0; ) {
     // operate on index i here
 }`]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'fromIndex', [/* parameter description */
					[/* text */ 't', `the index to start checking from (inclusive)`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if the specified index is less
         than `],
					[/* inline code block */ 'i', `-1`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the index of the previous set bit, or `],
				[/* inline code block */ 'i', `-1`],
				[/* text */ 't', ` if there
         is no such bit`]
			]
		]],
		[/* method */ 'size()', [
			[/* method description */
				[/* text */ 't', `Returns the number of bits of space actually in use by this
 `],
				[/* inline code block */ 'i', `BitSet`],
				[/* text */ 't', ` to represent bit values.
 The maximum element in the set is the size - 1st element.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the number of bits currently in this bit set`]
			]
		]],
		[/* method */ 'clone()', [
			[/* method description */
				[/* text */ 't', `Cloning this `],
				[/* inline code block */ 'i', `BitSet`],
				[/* text */ 't', ` produces a new `],
				[/* inline code block */ 'i', `BitSet`],
				[/* text */ 't', `
 that is equal to it.
 The clone of the bit set is another bit set that has exactly the
 same bits set to `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` as this bit set.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a clone of this bit set`]
			]
		]],
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Returns a string representation of this bit set. For every index
 for which this `],
				[/* inline code block */ 'i', `BitSet`],
				[/* text */ 't', ` contains a bit in the set
 state, the decimal representation of that index is included in
 the result. Such indices are listed in order from lowest to
 highest, separated by ", " (a comma and a space) and
 surrounded by braces, resulting in the usual mathematical
 notation for a set of integers.

 `],
				[/* block */ 'b', `Example:
 `],
				[/* code block */ 'c', ` BitSet drPepper = new BitSet();`],
				[/* text */ 't', `
 Now `],
				[/* inline code block */ 'i', `drPepper.toString()`],
				[/* text */ 't', ` returns "`],
				[/* inline code block */ 'i', `{}`],
				[/* text */ 't', `".
 `],
				[/* code block */ 'c', ` drPepper.set(2);`],
				[/* text */ 't', `
 Now `],
				[/* inline code block */ 'i', `drPepper.toString()`],
				[/* text */ 't', ` returns "`],
				[/* inline code block */ 'i', `{2}`],
				[/* text */ 't', `".
 `],
				[/* code block */ 'c', ` drPepper.set(4);
 drPepper.set(10);`],
				[/* text */ 't', `
 Now `],
				[/* inline code block */ 'i', `drPepper.toString()`],
				[/* text */ 't', ` returns "`],
				[/* inline code block */ 'i', `{2, 4, 10}`],
				[/* text */ 't', `".`],
				[/* block */ 'b', '']
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a string representation of this bit set`]
			]
		]],
		[/* method */ 'get(int,int)', [
			[/* method description */
				[/* text */ 't', `Returns a new `],
				[/* inline code block */ 'i', `BitSet`],
				[/* text */ 't', ` composed of bits from this `],
				[/* inline code block */ 'i', `BitSet`],
				[/* text */ 't', `
 from `],
				[/* inline code block */ 'i', `fromIndex`],
				[/* text */ 't', ` (inclusive) to `],
				[/* inline code block */ 'i', `toIndex`],
				[/* text */ 't', ` (exclusive).`]
			],
			[/* parameters */
				[/* parameter */ 'fromIndex', [/* parameter description */
					[/* text */ 't', `index of the first bit to include`]
				]],
				[/* parameter */ 'toIndex', [/* parameter description */
					[/* text */ 't', `index after the last bit to include`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `fromIndex`],
					[/* text */ 't', ` is negative,
         or `],
					[/* inline code block */ 'i', `toIndex`],
					[/* text */ 't', ` is negative, or `],
					[/* inline code block */ 'i', `fromIndex`],
					[/* text */ 't', ` is
         larger than `],
					[/* inline code block */ 'i', `toIndex`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a new `],
				[/* inline code block */ 'i', `BitSet`],
				[/* text */ 't', ` from a range of this `],
				[/* inline code block */ 'i', `BitSet`]
			]
		]],
		[/* method */ 'stream()', [
			[/* method description */
				[/* text */ 't', `Returns a stream of indices for which this `],
				[/* inline code block */ 'i', `BitSet`],
				[/* text */ 't', `
 contains a bit in the set state. The indices are returned
 in order, from lowest to highest. The size of the stream
 is the number of bits in the set state, equal to the value
 returned by the `],
				[/* reference */ 'r', `#cardinality()`, `cardinality()`],
				[/* text */ 't', ` method.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The stream binds to this bit set when the terminal stream operation
 commences (specifically, the spliterator for the stream is
 `],
					[/* reference */ 'r', `.Spliterator#binding`],
					[/* text */ 't', `).  If the
 bit set is modified during that operation then the result is undefined.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a stream of integers representing set indices`]
			]
		]],
		[/* method */ 'toLongArray()', [
			[/* method description */
				[/* text */ 't', `Returns a new long array containing all the bits in this bit set.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `More precisely, if
 `],
					[/* new line */ 'n'],
					[/* inline code block */ 'i', `long[] longs = s.toLongArray();`],
					[/* new line */ 'n'],
					[/* text */ 't', `then `],
					[/* inline code block */ 'i', `longs.length == (s.length()+63)/64`],
					[/* text */ 't', ` and
 `],
					[/* new line */ 'n'],
					[/* inline code block */ 'i', `s.get(n) == ((longs[n/64] & (1L<<(n%64))) != 0)`],
					[/* new line */ 'n'],
					[/* text */ 't', `for all `],
					[/* inline code block */ 'i', `n < 64 * longs.length`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a long array containing a little-endian representation
         of all the bits in this bit set`]
			]
		]],
		[/* method */ 'valueOf(byte[])', [
			[/* method description */
				[/* text */ 't', `Returns a new bit set containing all the bits in the given byte array.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `More precisely,
 `],
					[/* new line */ 'n'],
					[/* inline code block */ 'i', `BitSet.valueOf(bytes).get(n) == ((bytes[n/8] & (1<<(n%8))) != 0)`],
					[/* new line */ 'n'],
					[/* text */ 't', `for all `],
					[/* inline code block */ 'i', `n < 8 * bytes.length`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `This method is equivalent to
 `],
					[/* inline code block */ 'i', `BitSet.valueOf(ByteBuffer.wrap(bytes))`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'bytes', [/* parameter description */
					[/* text */ 't', `a byte array containing a little-endian
        representation of a sequence of bits to be used as the
        initial bits of the new bit set`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `BitSet`],
				[/* text */ 't', ` containing all the bits in the byte array`]
			]
		]],
		[/* method */ 'valueOf(java.nio.ByteBuffer)', [
			[/* method description */
				[/* text */ 't', `Returns a new bit set containing all the bits in the given byte
 buffer between its position and limit.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `More precisely,
 `],
					[/* new line */ 'n'],
					[/* inline code block */ 'i', `BitSet.valueOf(bb).get(n) == ((bb.get(bb.position()+n/8) & (1<<(n%8))) != 0)`],
					[/* new line */ 'n'],
					[/* text */ 't', `for all `],
					[/* inline code block */ 'i', `n < 8 * bb.remaining()`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', `The byte buffer is not modified by this method, and no
 reference to the buffer is retained by the bit set.`]
			],
			[/* parameters */
				[/* parameter */ 'bb', [/* parameter description */
					[/* text */ 't', `a byte buffer containing a little-endian representation
        of a sequence of bits between its position and limit, to be
        used as the initial bits of the new bit set`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `BitSet`],
				[/* text */ 't', ` containing all the bits in the buffer in the
         specified range`]
			]
		]],
		[/* method */ 'valueOf(java.nio.LongBuffer)', [
			[/* method description */
				[/* text */ 't', `Returns a new bit set containing all the bits in the given long
 buffer between its position and limit.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `More precisely,
 `],
					[/* new line */ 'n'],
					[/* inline code block */ 'i', `BitSet.valueOf(lb).get(n) == ((lb.get(lb.position()+n/64) & (1L<<(n%64))) != 0)`],
					[/* new line */ 'n'],
					[/* text */ 't', `for all `],
					[/* inline code block */ 'i', `n < 64 * lb.remaining()`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', `The long buffer is not modified by this method, and no
 reference to the buffer is retained by the bit set.`]
			],
			[/* parameters */
				[/* parameter */ 'lb', [/* parameter description */
					[/* text */ 't', `a long buffer containing a little-endian representation
        of a sequence of bits between its position and limit, to be
        used as the initial bits of the new bit set`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `BitSet`],
				[/* text */ 't', ` containing all the bits in the buffer in the
         specified range`]
			]
		]],
		[/* method */ 'valueOf(long[])', [
			[/* method description */
				[/* text */ 't', `Returns a new bit set containing all the bits in the given long array.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `More precisely,
 `],
					[/* new line */ 'n'],
					[/* inline code block */ 'i', `BitSet.valueOf(longs).get(n) == ((longs[n/64] & (1L<<(n%64))) != 0)`],
					[/* new line */ 'n'],
					[/* text */ 't', `for all `],
					[/* inline code block */ 'i', `n < 64 * longs.length`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `This method is equivalent to
 `],
					[/* inline code block */ 'i', `BitSet.valueOf(LongBuffer.wrap(longs))`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'longs', [/* parameter description */
					[/* text */ 't', `a long array containing a little-endian representation
        of a sequence of bits to be used as the initial bits of the
        new bit set`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `BitSet`],
				[/* text */ 't', ` containing all the bits in the long array`]
			]
		]],
		[/* method */ 'and(java.util.BitSet)', [
			[/* method description */
				[/* text */ 't', `Performs a logical `],
				[/* text */ 't', `AND`],
				[/* text */ 't', ` of this target bit set with the
 argument bit set. This bit set is modified so that each bit in it
 has the value `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if and only if it both initially
 had the value `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` and the corresponding bit in the
 bit set argument also had the value `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'set', [/* parameter description */
					[/* text */ 't', `a bit set`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'andNot(java.util.BitSet)', [
			[/* method description */
				[/* text */ 't', `Clears all of the bits in this `],
				[/* inline code block */ 'i', `BitSet`],
				[/* text */ 't', ` whose corresponding
 bit is set in the specified `],
				[/* inline code block */ 'i', `BitSet`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'set', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `BitSet`],
					[/* text */ 't', ` with which to mask this
         `],
					[/* inline code block */ 'i', `BitSet`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'clear()', [
			[/* method description */
				[/* text */ 't', `Sets all of the bits in this BitSet to `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'clear(int)', [
			[/* method description */
				[/* text */ 't', `Sets the bit specified by the index to `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'bitIndex', [/* parameter description */
					[/* text */ 't', `the index of the bit to be cleared`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if the specified index is negative`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'clear(int,int)', [
			[/* method description */
				[/* text */ 't', `Sets the bits from the specified `],
				[/* inline code block */ 'i', `fromIndex`],
				[/* text */ 't', ` (inclusive) to the
 specified `],
				[/* inline code block */ 'i', `toIndex`],
				[/* text */ 't', ` (exclusive) to `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'fromIndex', [/* parameter description */
					[/* text */ 't', `index of the first bit to be cleared`]
				]],
				[/* parameter */ 'toIndex', [/* parameter description */
					[/* text */ 't', `index after the last bit to be cleared`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `fromIndex`],
					[/* text */ 't', ` is negative,
         or `],
					[/* inline code block */ 'i', `toIndex`],
					[/* text */ 't', ` is negative, or `],
					[/* inline code block */ 'i', `fromIndex`],
					[/* text */ 't', ` is
         larger than `],
					[/* inline code block */ 'i', `toIndex`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'flip(int)', [
			[/* method description */
				[/* text */ 't', `Sets the bit at the specified index to the complement of its
 current value.`]
			],
			[/* parameters */
				[/* parameter */ 'bitIndex', [/* parameter description */
					[/* text */ 't', `the index of the bit to flip`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if the specified index is negative`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'flip(int,int)', [
			[/* method description */
				[/* text */ 't', `Sets each bit from the specified `],
				[/* inline code block */ 'i', `fromIndex`],
				[/* text */ 't', ` (inclusive) to the
 specified `],
				[/* inline code block */ 'i', `toIndex`],
				[/* text */ 't', ` (exclusive) to the complement of its current
 value.`]
			],
			[/* parameters */
				[/* parameter */ 'fromIndex', [/* parameter description */
					[/* text */ 't', `index of the first bit to flip`]
				]],
				[/* parameter */ 'toIndex', [/* parameter description */
					[/* text */ 't', `index after the last bit to flip`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `fromIndex`],
					[/* text */ 't', ` is negative,
         or `],
					[/* inline code block */ 'i', `toIndex`],
					[/* text */ 't', ` is negative, or `],
					[/* inline code block */ 'i', `fromIndex`],
					[/* text */ 't', ` is
         larger than `],
					[/* inline code block */ 'i', `toIndex`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'or(java.util.BitSet)', [
			[/* method description */
				[/* text */ 't', `Performs a logical `],
				[/* text */ 't', `OR`],
				[/* text */ 't', ` of this bit set with the bit set
 argument. This bit set is modified so that a bit in it has the
 value `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if and only if it either already had the
 value `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` or the corresponding bit in the bit set
 argument has the value `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'set', [/* parameter description */
					[/* text */ 't', `a bit set`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'set(int)', [
			[/* method description */
				[/* text */ 't', `Sets the bit at the specified index to `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'bitIndex', [/* parameter description */
					[/* text */ 't', `a bit index`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if the specified index is negative`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'set(int,boolean)', [
			[/* method description */
				[/* text */ 't', `Sets the bit at the specified index to the specified value.`]
			],
			[/* parameters */
				[/* parameter */ 'bitIndex', [/* parameter description */
					[/* text */ 't', `a bit index`]
				]],
				[/* parameter */ 'value', [/* parameter description */
					[/* text */ 't', `a boolean value to set`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if the specified index is negative`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'set(int,int)', [
			[/* method description */
				[/* text */ 't', `Sets the bits from the specified `],
				[/* inline code block */ 'i', `fromIndex`],
				[/* text */ 't', ` (inclusive) to the
 specified `],
				[/* inline code block */ 'i', `toIndex`],
				[/* text */ 't', ` (exclusive) to `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'fromIndex', [/* parameter description */
					[/* text */ 't', `index of the first bit to be set`]
				]],
				[/* parameter */ 'toIndex', [/* parameter description */
					[/* text */ 't', `index after the last bit to be set`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `fromIndex`],
					[/* text */ 't', ` is negative,
         or `],
					[/* inline code block */ 'i', `toIndex`],
					[/* text */ 't', ` is negative, or `],
					[/* inline code block */ 'i', `fromIndex`],
					[/* text */ 't', ` is
         larger than `],
					[/* inline code block */ 'i', `toIndex`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'set(int,int,boolean)', [
			[/* method description */
				[/* text */ 't', `Sets the bits from the specified `],
				[/* inline code block */ 'i', `fromIndex`],
				[/* text */ 't', ` (inclusive) to the
 specified `],
				[/* inline code block */ 'i', `toIndex`],
				[/* text */ 't', ` (exclusive) to the specified value.`]
			],
			[/* parameters */
				[/* parameter */ 'fromIndex', [/* parameter description */
					[/* text */ 't', `index of the first bit to be set`]
				]],
				[/* parameter */ 'toIndex', [/* parameter description */
					[/* text */ 't', `index after the last bit to be set`]
				]],
				[/* parameter */ 'value', [/* parameter description */
					[/* text */ 't', `value to set the selected bits to`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `fromIndex`],
					[/* text */ 't', ` is negative,
         or `],
					[/* inline code block */ 'i', `toIndex`],
					[/* text */ 't', ` is negative, or `],
					[/* inline code block */ 'i', `fromIndex`],
					[/* text */ 't', ` is
         larger than `],
					[/* inline code block */ 'i', `toIndex`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'xor(java.util.BitSet)', [
			[/* method description */
				[/* text */ 't', `Performs a logical `],
				[/* text */ 't', `XOR`],
				[/* text */ 't', ` of this bit set with the bit set
 argument. This bit set is modified so that a bit in it has the
 value `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if and only if one of the following
 statements holds:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `The bit initially has the value `],
						[/* inline code block */ 'i', `true`],
						[/* text */ 't', `, and the
     corresponding bit in the argument has the value `],
						[/* inline code block */ 'i', `false`],
						[/* text */ 't', `.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `The bit initially has the value `],
						[/* inline code block */ 'i', `false`],
						[/* text */ 't', `, and the
     corresponding bit in the argument has the value `],
						[/* inline code block */ 'i', `true`],
						[/* text */ 't', `.
 `]
					]]
				]]
			],
			[/* parameters */
				[/* parameter */ 'set', [/* parameter description */
					[/* text */ 't', `a bit set`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]]
	],
]);
