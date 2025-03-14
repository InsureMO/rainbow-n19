import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.nio.CharBuffer', [
	[/* class description */
		[/* text */ 't', `A char buffer.

 `],
		[/* block */ 'b', ` This class defines four categories of operations upon
 char buffers:

 `],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* block */ 'b', [
					[/* text */ 't', ` Absolute and relative `],
					[/* reference */ 'r', `#get()`, `get`],
					[/* text */ 't', ` and
   `],
					[/* reference */ 'r', `#put(char)`, `put`],
					[/* text */ 't', ` methods that read and write
   single chars; `]
				]]
			]],
			[/* block */ 'b', [
				[/* block */ 'b', [
					[/* text */ 't', ` Absolute and relative `],
					[/* reference */ 'r', `#get(char%5B%5D)`, `bulk get`],
					[/* text */ 't', `
   methods that transfer contiguous sequences of chars from this buffer
   into an array; and`]
				]]
			]],
			[/* block */ 'b', [
				[/* block */ 'b', [
					[/* text */ 't', ` Absolute and relative `],
					[/* reference */ 'r', `#put(char%5B%5D)`, `bulk put`],
					[/* text */ 't', `
   methods that transfer contiguous sequences of chars from a
   char array{#if[char]?, a string,} or some other char
   buffer into this buffer;{#if[!byte]? and} `]
				]]
			]],
			[/* block */ 'b', [
				[/* block */ 'b', [
					[/* text */ 't', ` A method for `],
					[/* reference */ 'r', `#compact()`, `compacting`],
					[/* text */ 't', `
   a char buffer.  `]
				]]
			]]
		]],
		[/* text */ 't', `

 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', ` Char buffers can be created either by `],
			[/* reference */ 'r', `#allocate(int)`, `allocation`],
			[/* text */ 't', `, which allocates space for the buffer's








 content, by `],
			[/* reference */ 'r', `#wrap(char%5B%5D)`, `wrapping`],
			[/* text */ 't', ` an existing
 char array {#if[char]?or string} into a buffer, or by creating a
 `],
			[/* reference */ 'r', `java.nio.ByteBuffer#views`, `view`],
			[/* text */ 't', ` of an existing byte buffer.








































































































 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` Like a byte buffer, a char buffer is either `],
			[/* reference */ 'r', `java.nio.ByteBuffer#direct`, `direct or non-direct`],
			[/* text */ 't', `.  A
 char buffer created via the `],
			[/* inline code block */ 'i', `wrap`],
			[/* text */ 't', ` methods of this class will
 be non-direct.  A char buffer created as a view of a byte buffer will
 be direct if, and only if, the byte buffer itself is direct.  Whether or not
 a char buffer is direct may be determined by invoking the `],
			[/* reference */ 'r', `#isDirect()`, `isDirect`],
			[/* text */ 't', ` method.  `]
		]],
		[/* text */ 't', `





 `],
		[/* block */ 'b', [
			[/* text */ 't', ` This class implements the `],
			[/* reference */ 'r', `java.lang.CharSequence`, `CharSequence`],
			[/* text */ 't', ` interface so that
 character buffers may be used wherever character sequences are accepted, for
 example in the regular-expression package `],
			[/* text */ 't', `java.util.regex`],
			[/* text */ 't', `.
 The methods defined by `],
			[/* inline code block */ 'i', `CharSequence`],
			[/* text */ 't', ` operate relative to the current
 position of the buffer when they are invoked.
 `]
		]],
		[/* text */ 't', `







 `],
		[/* block */ 'b', ` Methods in this class that do not otherwise have a value to return are
 specified to return the buffer upon which they are invoked.  This allows
 method invocations to be chained.


















 The sequence of statements

 `],
		[/* blockquote */ 'q', [
			[/* code block */ 'c', ` cb.put("text/");
 cb.put(subtype);
 cb.put("; charset=");
 cb.put(enc);`]
		]],
		[/* text */ 't', `

 can, for example, be replaced by the single statement

 `],
		[/* blockquote */ 'q', [
			[/* code block */ 'c', ` cb.put("text/").put(subtype).put("; charset=").put(enc);`]
		]],
		[/* block */ 'b', '']
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'isDirect()', [
			[/* method description */
				[/* text */ 't', `Tells whether or not this char buffer is direct.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if, and only if, this buffer is direct`]
			]
		]],
		[/* method */ 'get()', [
			[/* method description */
				[/* text */ 't', `Relative `],
				[/* text */ 't', `get`],
				[/* text */ 't', ` method.  Reads the char at this buffer's
 current position, and then increments the position.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.nio.BufferUnderflowException', [/* throw description */
					[/* text */ 't', `If the buffer's current position is not smaller than its limit`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The char at the buffer's current position`]
			]
		]],
		[/* method */ 'get(int)', [
			[/* method description */
				[/* text */ 't', `Absolute `],
				[/* text */ 't', `get`],
				[/* text */ 't', ` method.  Reads the char at the given
 index.`]
			],
			[/* parameters */
				[/* parameter */ 'index', [/* parameter description */
					[/* text */ 't', `The index from which the char will be read`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `index`],
					[/* text */ 't', ` is negative
          or not smaller than the buffer's limit`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The char at the given index`]
			]
		]],
		[/* method */ 'order()', [
			[/* method description */
				[/* text */ 't', `Retrieves this buffer's byte order.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The byte order of a char buffer created by allocation or by
 wrapping an existing `],
					[/* inline code block */ 'i', `char`],
					[/* text */ 't', ` array is the `],
					[/* reference */ 'r', `java.nio.ByteOrder#nativeOrder()`, `native order`],
					[/* text */ 't', ` of the underlying
 hardware.  The byte order of a char buffer created as a `],
					[/* reference */ 'r', `java.nio.ByteBuffer#views`, `view`],
					[/* text */ 't', ` of a byte buffer is that of the
 byte buffer at the moment that the view is created.  `]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `This buffer's byte order`]
			]
		]],
		[/* method */ 'asReadOnlyBuffer()', [
			[/* method description */
				[/* text */ 't', `Creates a new, read-only char buffer that shares this buffer's
 content.

 `],
				[/* block */ 'b', ` The content of the new buffer will be that of this buffer.  Changes
 to this buffer's content will be visible in the new buffer; the new
 buffer itself, however, will be read-only and will not allow the shared
 content to be modified.  The two buffers' position, limit, and mark
 values will be independent.

 `],
				[/* block */ 'b', ` The new buffer's capacity, limit, position,




 mark values, and byte order will be identical to those of this buffer.


 `],
				[/* block */ 'b', [
					[/* text */ 't', ` If this buffer is itself read-only then this method behaves in
 exactly the same way as the `],
					[/* reference */ 'r', `#duplicate()`, `duplicate`],
					[/* text */ 't', ` method.  `]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The new, read-only char buffer`]
			]
		]],
		[/* method */ 'compact()', [
			[/* method description */
				[/* text */ 't', `Compacts this buffer  `],
				[/* text */ 't', `(optional operation)`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The chars between the buffer's current position and its limit,
 if any, are copied to the beginning of the buffer.  That is, the
 char at index `],
					[/* text */ 't', `p`],
					[/* text */ 't', ` = `],
					[/* inline code block */ 'i', `position()`],
					[/* text */ 't', ` is copied
 to index zero, the char at index `],
					[/* text */ 't', `p`],
					[/* text */ 't', ` + 1 is copied
 to index one, and so forth until the char at index
 `],
					[/* inline code block */ 'i', `limit()`],
					[/* text */ 't', ` - 1 is copied to index
 `],
					[/* text */ 't', `n`],
					[/* text */ 't', ` = `],
					[/* inline code block */ 'i', `limit()`],
					[/* text */ 't', ` - `],
					[/* inline code block */ 'i', `1`],
					[/* text */ 't', ` - `],
					[/* text */ 't', `p`],
					[/* text */ 't', `.
 The buffer's position is then set to `],
					[/* text */ 't', `n+1`],
					[/* text */ 't', ` and its limit is set to
 its capacity.  The mark, if defined, is discarded.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` The buffer's position is set to the number of chars copied,
 rather than to zero, so that an invocation of this method can be
 followed immediately by an invocation of another relative `],
					[/* text */ 't', `put`],
					[/* text */ 't', `
 method. `]
				]]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.nio.ReadOnlyBufferException', [/* throw description */
					[/* text */ 't', `If this buffer is read-only`]
				]]
			],
			[/* return description */
				[/* text */ 't', `This buffer`]
			]
		]],
		[/* method */ 'duplicate()', [
			[/* method description */
				[/* text */ 't', `Creates a new char buffer that shares this buffer's content.

 `],
				[/* block */ 'b', ` The content of the new buffer will be that of this buffer.  Changes
 to this buffer's content will be visible in the new buffer, and vice
 versa; the two buffers' position, limit, and mark values will be
 independent.

 `],
				[/* block */ 'b', ` The new buffer's capacity, limit, position,




 mark values, and byte order will be identical to those of this buffer.

 The new buffer will be direct if, and only if, this buffer is direct, and
 it will be read-only if, and only if, this buffer is read-only.  `]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The new char buffer`]
			]
		]],
		[/* method */ 'put(char)', [
			[/* method description */
				[/* text */ 't', `Relative `],
				[/* text */ 't', `put`],
				[/* text */ 't', ` method  `],
				[/* text */ 't', `(optional operation)`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', ` Writes the given char into this buffer at the current
 position, and then increments the position. `]
			],
			[/* parameters */
				[/* parameter */ 'c', [/* parameter description */
					[/* text */ 't', `The char to be written`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.nio.BufferOverflowException', [/* throw description */
					[/* text */ 't', `If this buffer's current position is not smaller than its limit`]
				]],
				[/* throw */ 'java.nio.ReadOnlyBufferException', [/* throw description */
					[/* text */ 't', `If this buffer is read-only`]
				]]
			],
			[/* return description */
				[/* text */ 't', `This buffer`]
			]
		]],
		[/* method */ 'put(int,char)', [
			[/* method description */
				[/* text */ 't', `Absolute `],
				[/* text */ 't', `put`],
				[/* text */ 't', ` method  `],
				[/* text */ 't', `(optional operation)`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', ` Writes the given char into this buffer at the given
 index. `]
			],
			[/* parameters */
				[/* parameter */ 'index', [/* parameter description */
					[/* text */ 't', `The index at which the char will be written`]
				]],
				[/* parameter */ 'c', [/* parameter description */
					[/* text */ 't', `The char value to be written`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `index`],
					[/* text */ 't', ` is negative
          or not smaller than the buffer's limit`]
				]],
				[/* throw */ 'java.nio.ReadOnlyBufferException', [/* throw description */
					[/* text */ 't', `If this buffer is read-only`]
				]]
			],
			[/* return description */
				[/* text */ 't', `This buffer`]
			]
		]],
		[/* method */ 'slice()', [
			[/* method description */
				[/* text */ 't', `Creates a new char buffer whose content is a shared subsequence of
 this buffer's content.

 `],
				[/* block */ 'b', ` The content of the new buffer will start at this buffer's current
 position.  Changes to this buffer's content will be visible in the new
 buffer, and vice versa; the two buffers' position, limit, and mark
 values will be independent.

 `],
				[/* block */ 'b', ` The new buffer's position will be zero, its capacity and its limit
 will be the number of chars remaining in this buffer, its mark will be
 undefined, and its byte order will be



 identical to that of this buffer.

 The new buffer will be direct if, and only if, this buffer is direct, and
 it will be read-only if, and only if, this buffer is read-only.  `]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The new char buffer`]
			]
		]],
		[/* method */ 'slice(int,int)', [
			[/* method description */
				[/* text */ 't', `Creates a new char buffer whose content is a shared subsequence of
 this buffer's content.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The content of the new buffer will start at position `],
					[/* inline code block */ 'i', `index`],
					[/* text */ 't', `
 in this buffer, and will contain `],
					[/* inline code block */ 'i', `length`],
					[/* text */ 't', ` elements. Changes to
 this buffer's content will be visible in the new buffer, and vice versa;
 the two buffers' position, limit, and mark values will be independent.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` The new buffer's position will be zero, its capacity and its limit
 will be `],
					[/* inline code block */ 'i', `length`],
					[/* text */ 't', `, its mark will be undefined, and its byte order
 will be



 identical to that of this buffer.

 The new buffer will be direct if, and only if, this buffer is direct,
 and it will be read-only if, and only if, this buffer is read-only. `]
				]]
			],
			[/* parameters */
				[/* parameter */ 'index', [/* parameter description */
					[/* text */ 't', `The position in this buffer at which the content of the new
          buffer will start; must be non-negative and no larger than
          `],
					[/* reference */ 'r', `java.nio.Buffer#limit()`, `limit()`]
				]],
				[/* parameter */ 'length', [/* parameter description */
					[/* text */ 't', `The number of elements the new buffer will contain; must be
          non-negative and no larger than `],
					[/* inline code block */ 'i', `limit() - index`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `index`],
					[/* text */ 't', ` is negative or greater than `],
					[/* inline code block */ 'i', `limit()`],
					[/* text */ 't', `,
          `],
					[/* inline code block */ 'i', `length`],
					[/* text */ 't', ` is negative, or `],
					[/* inline code block */ 'i', `length > limit() - index`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The new buffer`]
			]
		]],
		[/* method */ 'subSequence(int,int)', [
			[/* method description */
				[/* text */ 't', `Creates a new character buffer that represents the specified subsequence
 of this buffer, relative to the current position.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The new buffer will share this buffer's content; that is, if the
 content of this buffer is mutable then modifications to one buffer will
 cause the other to be modified.  The new buffer's capacity will be that
 of this buffer, its position will be
 `],
					[/* inline code block */ 'i', `position()`],
					[/* text */ 't', ` + `],
					[/* inline code block */ 'i', `start`],
					[/* text */ 't', `, its limit will be
 `],
					[/* inline code block */ 'i', `position()`],
					[/* text */ 't', ` + `],
					[/* inline code block */ 'i', `end`],
					[/* text */ 't', `, and its byte order
 will be identical to that of this buffer. The new buffer will be direct
 if, and only if, this buffer is direct, and it will be read-only
 if, and only if, this buffer is read-only.  `]
				]]
			],
			[/* parameters */
				[/* parameter */ 'start', [/* parameter description */
					[/* text */ 't', `The index, relative to the current position, of the first
         character in the subsequence; must be non-negative and no larger
         than `],
					[/* inline code block */ 'i', `remaining()`]
				]],
				[/* parameter */ 'end', [/* parameter description */
					[/* text */ 't', `The index, relative to the current position, of the character
         following the last character in the subsequence; must be no
         smaller than `],
					[/* inline code block */ 'i', `start`],
					[/* text */ 't', ` and no larger than
         `],
					[/* inline code block */ 'i', `remaining()`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `If the preconditions on `],
					[/* inline code block */ 'i', `start`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `end`],
					[/* text */ 't', `
          do not hold`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The new character buffer`]
			]
		]],
		[/* method */ 'equals(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Tells whether or not this buffer is equal to another object.

 `],
				[/* block */ 'b', ` Two char buffers are equal if, and only if,

 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* block */ 'b', ` They have the same element type,  `]
					]],
					[/* block */ 'b', [
						[/* block */ 'b', ` They have the same number of remaining elements, and
   `]
					]],
					[/* block */ 'b', [
						[/* block */ 'b', ` The two sequences of remaining elements, considered
   independently of their starting positions, are pointwise equal.







   `]
					]]
				]],
				[/* text */ 't', `

 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', ` A char buffer is not equal to any other type of object.  `]
			],
			[/* parameters */
				[/* parameter */ 'ob', [/* parameter description */
					[/* text */ 't', `The object to which this buffer is to be compared`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if, and only if, this buffer is equal to the
           given object`]
			]
		]],
		[/* method */ 'hasArray()', [
			[/* method description */
				[/* text */ 't', `Tells whether or not this buffer is backed by an accessible char
 array.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` If this method returns `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` then the `],
					[/* reference */ 'r', `#array()`, `array`],
					[/* text */ 't', `
 and `],
					[/* reference */ 'r', `#arrayOffset()`, `arrayOffset`],
					[/* text */ 't', ` methods may safely be invoked.
 `]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if, and only if, this buffer
          is backed by an array and is not read-only`]
			]
		]],
		[/* method */ 'isEmpty()', [
			[/* method description */
				[/* text */ 't', `Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this character buffer is empty.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if there are `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` remaining characters,
         otherwise `],
				[/* inline code block */ 'i', `false`]
			]
		]],
		[/* method */ 'charAt(int)', [
			[/* method description */
				[/* text */ 't', `Reads the character at the given index relative to the current
 position.`]
			],
			[/* parameters */
				[/* parameter */ 'index', [/* parameter description */
					[/* text */ 't', `The index of the character to be read, relative to the position;
         must be non-negative and smaller than `],
					[/* inline code block */ 'i', `remaining()`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `If the preconditions on `],
					[/* inline code block */ 'i', `index`],
					[/* text */ 't', ` do not hold`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The character at index
          `],
				[/* inline code block */ 'i', `position() + index`]
			]
		]],
		[/* method */ 'array()', [
			[/* method description */
				[/* text */ 't', `Returns the char array that backs this
 buffer  `],
				[/* text */ 't', `(optional operation)`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', ` Modifications to this buffer's content will cause the returned
 array's content to be modified, and vice versa.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` Invoke the `],
					[/* reference */ 'r', `#hasArray()`, `hasArray`],
					[/* text */ 't', ` method before invoking this
 method in order to ensure that this buffer has an accessible backing
 array.  `]
				]]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.nio.ReadOnlyBufferException', [/* throw description */
					[/* text */ 't', `If this buffer is backed by an array but is read-only`]
				]],
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `If this buffer is not backed by an accessible array`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The array that backs this buffer`]
			]
		]],
		[/* method */ 'arrayOffset()', [
			[/* method description */
				[/* text */ 't', `Returns the offset within this buffer's backing array of the first
 element of the buffer  `],
				[/* text */ 't', `(optional operation)`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` If this buffer is backed by an array then buffer position `],
					[/* text */ 't', `p`],
					[/* text */ 't', `
 corresponds to array index `],
					[/* text */ 't', `p`],
					[/* text */ 't', ` + `],
					[/* inline code block */ 'i', `arrayOffset()`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` Invoke the `],
					[/* reference */ 'r', `#hasArray()`, `hasArray`],
					[/* text */ 't', ` method before invoking this
 method in order to ensure that this buffer has an accessible backing
 array.  `]
				]]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.nio.ReadOnlyBufferException', [/* throw description */
					[/* text */ 't', `If this buffer is backed by an array but is read-only`]
				]],
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `If this buffer is not backed by an accessible array`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The offset within this buffer's array
          of the first element of the buffer`]
			]
		]],
		[/* method */ 'length()', [
			[/* method description */
				[/* text */ 't', `Returns the length of this character buffer.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` When viewed as a character sequence, the length of a character
 buffer is simply the number of characters between the position
 (inclusive) and the limit (exclusive); that is, it is equivalent to
 `],
					[/* inline code block */ 'i', `remaining()`],
					[/* text */ 't', `. `]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The length of this character buffer`]
			]
		]],
		[/* method */ 'clear()', [
			[/* method description */
				[/* text */ 't', `Clears this buffer.  The position is set to zero, the limit is set to
 the capacity, and the mark is discarded.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` Invoke this method before using a sequence of channel-read or
 `],
					[/* text */ 't', `put`],
					[/* text */ 't', ` operations to fill this buffer.  For example:

 `]
				]],
				[/* blockquote */ 'q', [
					[/* code block */ 'c', ` buf.clear();     // Prepare buffer for reading
 in.read(buf);    // Read data`]
				]],
				[/* text */ 't', `

 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', ` This method does not actually erase the data in the buffer, but it
 is named as if it did because it will most often be used in situations
 in which that might as well be the case. `]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `This buffer`]
			]
		]],
		[/* method */ 'flip()', [
			[/* method description */
				[/* text */ 't', `Flips this buffer.  The limit is set to the current position and then
 the position is set to zero.  If the mark is defined then it is
 discarded.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` After a sequence of channel-read or `],
					[/* text */ 't', `put`],
					[/* text */ 't', ` operations, invoke
 this method to prepare for a sequence of channel-write or relative
 `],
					[/* text */ 't', `get`],
					[/* text */ 't', ` operations.  For example:

 `]
				]],
				[/* blockquote */ 'q', [
					[/* code block */ 'c', ` buf.put(magic);    // Prepend header
 in.read(buf);      // Read data into rest of buffer
 buf.flip();        // Flip buffer
 out.write(buf);    // Write header + data to channel`]
				]],
				[/* text */ 't', `

 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', ` This method is often used in conjunction with the `],
					[/* reference */ 'r', `java.nio.ByteBuffer#compact()`, `compact`],
					[/* text */ 't', ` method when transferring data from
 one place to another.  `]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `This buffer`]
			]
		]],
		[/* method */ 'limit(int)', [
			[/* method description */
				[/* text */ 't', `Sets this buffer's limit.  If the position is larger than the new limit
 then it is set to the new limit.  If the mark is defined and larger than
 the new limit then it is discarded.`]
			],
			[/* parameters */
				[/* parameter */ 'newLimit', [/* parameter description */
					[/* text */ 't', `The new limit value; must be non-negative
         and no larger than this buffer's capacity`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `This buffer`]
			]
		]],
		[/* method */ 'mark()', [
			[/* method description */
				[/* text */ 't', `Sets this buffer's mark at its position.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `This buffer`]
			]
		]],
		[/* method */ 'position(int)', [
			[/* method description */
				[/* text */ 't', `Sets this buffer's position.  If the mark is defined and larger than the
 new position then it is discarded.`]
			],
			[/* parameters */
				[/* parameter */ 'newPosition', [/* parameter description */
					[/* text */ 't', `The new position value; must be non-negative
         and no larger than the current limit`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `This buffer`]
			]
		]],
		[/* method */ 'put(char[])', [
			[/* method description */
				[/* text */ 't', `Relative bulk `],
				[/* text */ 't', `put`],
				[/* text */ 't', ` method  `],
				[/* text */ 't', `(optional operation)`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method transfers the entire content of the given source
 char array into this buffer.  An invocation of this method of the
 form `],
					[/* inline code block */ 'i', `dst.put(a)`],
					[/* text */ 't', ` behaves in exactly the same way as the
 invocation

 `]
				]],
				[/* code block */ 'c', `     dst.put(a, 0, a.length) `],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'src', [/* parameter description */
					[/* text */ 't', `The source array`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.nio.BufferOverflowException', [/* throw description */
					[/* text */ 't', `If there is insufficient space in this buffer`]
				]],
				[/* throw */ 'java.nio.ReadOnlyBufferException', [/* throw description */
					[/* text */ 't', `If this buffer is read-only`]
				]]
			],
			[/* return description */
				[/* text */ 't', `This buffer`]
			]
		]],
		[/* method */ 'put(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Relative bulk `],
				[/* text */ 't', `put`],
				[/* text */ 't', ` method  `],
				[/* text */ 't', `(optional operation)`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method transfers the entire content of the given source string
 into this buffer.  An invocation of this method of the form
 `],
					[/* inline code block */ 'i', `dst.put(s)`],
					[/* text */ 't', ` behaves in exactly the same way as the invocation

 `]
				]],
				[/* code block */ 'c', `     dst.put(s, 0, s.length()) `],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'src', [/* parameter description */
					[/* text */ 't', `The source string`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.nio.BufferOverflowException', [/* throw description */
					[/* text */ 't', `If there is insufficient space in this buffer`]
				]],
				[/* throw */ 'java.nio.ReadOnlyBufferException', [/* throw description */
					[/* text */ 't', `If this buffer is read-only`]
				]]
			],
			[/* return description */
				[/* text */ 't', `This buffer`]
			]
		]],
		[/* method */ 'reset()', [
			[/* method description */
				[/* text */ 't', `Resets this buffer's position to the previously-marked position.

 `],
				[/* block */ 'b', ` Invoking this method neither changes nor discards the mark's
 value. `]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `This buffer`]
			]
		]],
		[/* method */ 'rewind()', [
			[/* method description */
				[/* text */ 't', `Rewinds this buffer.  The position is set to zero and the mark is
 discarded.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` Invoke this method before a sequence of channel-write or `],
					[/* text */ 't', `get`],
					[/* text */ 't', `
 operations, assuming that the limit has already been set
 appropriately.  For example:

 `]
				]],
				[/* blockquote */ 'q', [
					[/* code block */ 'c', ` out.write(buf);    // Write remaining data
 buf.rewind();      // Rewind buffer
 buf.get(array);    // Copy data into array`]
				]],
				[/* block */ 'b', '']
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `This buffer`]
			]
		]],
		[/* method */ 'compareTo(java.nio.CharBuffer)', [
			[/* method description */
				[/* text */ 't', `Compares this buffer to another.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` Two char buffers are compared by comparing their sequences of
 remaining elements lexicographically, without regard to the starting
 position of each sequence within its corresponding buffer.








 Pairs of `],
					[/* inline code block */ 'i', `char`],
					[/* text */ 't', ` elements are compared as if by invoking
 `],
					[/* reference */ 'r', `java.lang.Character#compare(char,char)`, `Character.compare(char,char)`],
					[/* text */ 't', `.


 `]
				]],
				[/* block */ 'b', ` A char buffer is not comparable to any other type of object.`]
			],
			[/* parameters */
				[/* parameter */ 'that', [/* parameter description */
					[/* text */ 't', `the object to be compared.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `A negative integer, zero, or a positive integer as this buffer
          is less than, equal to, or greater than the given buffer`]
			]
		]],
		[/* method */ 'hashCode()', [
			[/* method description */
				[/* text */ 't', `Returns the current hash code of this buffer.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The hash code of a char buffer depends only upon its remaining
 elements; that is, upon the elements from `],
					[/* inline code block */ 'i', `position()`],
					[/* text */ 't', ` up to, and
 including, the element at `],
					[/* inline code block */ 'i', `limit()`],
					[/* text */ 't', ` - `],
					[/* inline code block */ 'i', `1`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', ` Because buffer hash codes are content-dependent, it is inadvisable
 to use buffers as keys in hash maps or similar data structures unless it
 is known that their contents will not change.  `]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The current hash code of this buffer`]
			]
		]],
		[/* method */ 'mismatch(java.nio.CharBuffer)', [
			[/* method description */
				[/* text */ 't', `Finds and returns the relative index of the first mismatch between this
 buffer and a given buffer.  The index is relative to the
 `],
				[/* reference */ 'r', `java.nio.Buffer#position()`, `position`],
				[/* text */ 't', ` of each buffer and will be in the range of
 0 (inclusive) up to the smaller of the `],
				[/* reference */ 'r', `java.nio.Buffer#remaining()`, `remaining`],
				[/* text */ 't', `
 elements in each buffer (exclusive).

 `],
				[/* block */ 'b', ` If the two buffers share a common prefix then the returned index is
 the length of the common prefix and it follows that there is a mismatch
 between the two buffers at that index within the respective buffers.
 If one buffer is a proper prefix of the other then the returned index is
 the smaller of the remaining elements in each buffer, and it follows that
 the index is only valid for the buffer with the larger number of
 remaining elements.
 Otherwise, there is no mismatch.`]
			],
			[/* parameters */
				[/* parameter */ 'that', [/* parameter description */
					[/* text */ 't', `The byte buffer to be tested for a mismatch with this buffer`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The relative index of the first mismatch between this and the
          given buffer, otherwise -1 if no mismatch.`]
			]
		]],
		[/* method */ 'read(java.nio.CharBuffer)', [
			[/* method description */
				[/* text */ 't', `Attempts to read characters into the specified character buffer.
 The buffer is used as a repository of characters as-is: the only
 changes made are the results of a put operation. No flipping or
 rewinding of the buffer is performed.`]
			],
			[/* parameters */
				[/* parameter */ 'target', [/* parameter description */
					[/* text */ 't', `the buffer to read characters into`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs`]
				]],
				[/* throw */ 'java.nio.ReadOnlyBufferException', [/* throw description */
					[/* text */ 't', `if target is a read only buffer`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The number of characters added to the buffer, or
         -1 if this source of characters is at its end`]
			]
		]],
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Returns a string containing the characters in this buffer.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The first character of the resulting string will be the character at
 this buffer's position, while the last character will be the character
 at index `],
					[/* inline code block */ 'i', `limit()`],
					[/* text */ 't', ` - 1.  Invoking this method does not
 change the buffer's position. `]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The specified string`]
			]
		]],
		[/* method */ 'append(char)', [
			[/* method description */
				[/* text */ 't', `Appends the specified char  to this
 buffer  `],
				[/* text */ 't', `(optional operation)`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` An invocation of this method of the form `],
					[/* inline code block */ 'i', `dst.append(c)`],
					[/* text */ 't', `
 behaves in exactly the same way as the invocation

 `]
				]],
				[/* code block */ 'c', `     dst.put(c) `],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'c', [/* parameter description */
					[/* text */ 't', `The 16-bit char to append`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.nio.BufferOverflowException', [/* throw description */
					[/* text */ 't', `If there is insufficient space in this buffer`]
				]],
				[/* throw */ 'java.nio.ReadOnlyBufferException', [/* throw description */
					[/* text */ 't', `If this buffer is read-only`]
				]]
			],
			[/* return description */
				[/* text */ 't', `This buffer`]
			]
		]],
		[/* method */ 'append(java.lang.CharSequence)', [
			[/* method description */
				[/* text */ 't', `Appends the specified character sequence  to this
 buffer  `],
				[/* text */ 't', `(optional operation)`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` An invocation of this method of the form `],
					[/* inline code block */ 'i', `dst.append(csq)`],
					[/* text */ 't', `
 behaves in exactly the same way as the invocation

 `]
				]],
				[/* code block */ 'c', `     dst.put(csq.toString()) `],
				[/* text */ 't', `

 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', ` Depending on the specification of `],
					[/* inline code block */ 'i', `toString`],
					[/* text */ 't', ` for the
 character sequence `],
					[/* inline code block */ 'i', `csq`],
					[/* text */ 't', `, the entire sequence may not be
 appended.  For instance, invoking the `],
					[/* reference */ 'r', `#toString()`, `toString`],
					[/* text */ 't', ` method of a character buffer will return a subsequence whose
 content depends upon the buffer's position and limit.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'csq', [/* parameter description */
					[/* text */ 't', `The character sequence to append.  If `],
					[/* inline code block */ 'i', `csq`],
					[/* text */ 't', ` is
         `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `, then the four characters `],
					[/* inline code block */ 'i', `"null"`],
					[/* text */ 't', ` are
         appended to this character buffer.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.nio.BufferOverflowException', [/* throw description */
					[/* text */ 't', `If there is insufficient space in this buffer`]
				]],
				[/* throw */ 'java.nio.ReadOnlyBufferException', [/* throw description */
					[/* text */ 't', `If this buffer is read-only`]
				]]
			],
			[/* return description */
				[/* text */ 't', `This buffer`]
			]
		]],
		[/* method */ 'append(java.lang.CharSequence,int,int)', [
			[/* method description */
				[/* text */ 't', `Appends a subsequence of the  specified character sequence  to this
 buffer  `],
				[/* text */ 't', `(optional operation)`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` An invocation of this method of the form `],
					[/* inline code block */ 'i', `dst.append(csq, start, end)`],
					[/* text */ 't', ` when `],
					[/* inline code block */ 'i', `csq`],
					[/* text */ 't', ` is not `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `, behaves in exactly the
 same way as the invocation

 `]
				]],
				[/* code block */ 'c', `     dst.put(csq.subSequence(start, end).toString()) `],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'csq', [/* parameter description */
					[/* text */ 't', `The character sequence from which a subsequence will be
         appended.  If `],
					[/* inline code block */ 'i', `csq`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `, then characters
         will be appended as if `],
					[/* inline code block */ 'i', `csq`],
					[/* text */ 't', ` contained the four
         characters `],
					[/* inline code block */ 'i', `"null"`],
					[/* text */ 't', `.`]
				]],
				[/* parameter */ 'start', [/* parameter description */
					[/* text */ 't', `The index of the first character in the subsequence`]
				]],
				[/* parameter */ 'end', [/* parameter description */
					[/* text */ 't', `The index of the character following the last character in the
         subsequence`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.nio.BufferOverflowException', [/* throw description */
					[/* text */ 't', `If there is insufficient space in this buffer`]
				]],
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `start`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `end`],
					[/* text */ 't', ` are negative, `],
					[/* inline code block */ 'i', `start`],
					[/* text */ 't', `
          is greater than `],
					[/* inline code block */ 'i', `end`],
					[/* text */ 't', `, or `],
					[/* inline code block */ 'i', `end`],
					[/* text */ 't', ` is greater than
          `],
					[/* inline code block */ 'i', `csq.length()`]
				]],
				[/* throw */ 'java.nio.ReadOnlyBufferException', [/* throw description */
					[/* text */ 't', `If this buffer is read-only`]
				]]
			],
			[/* return description */
				[/* text */ 't', `This buffer`]
			]
		]],
		[/* method */ 'get(char[])', [
			[/* method description */
				[/* text */ 't', `Relative bulk `],
				[/* text */ 't', `get`],
				[/* text */ 't', ` method.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method transfers chars from this buffer into the given
 destination array.  An invocation of this method of the form
 `],
					[/* inline code block */ 'i', `src.get(a)`],
					[/* text */ 't', ` behaves in exactly the same way as the invocation

 `]
				]],
				[/* code block */ 'c', `     src.get(a, 0, a.length) `],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'dst', [/* parameter description */
					[/* text */ 't', `The destination array`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.nio.BufferUnderflowException', [/* throw description */
					[/* text */ 't', `If there are fewer than `],
					[/* inline code block */ 'i', `length`],
					[/* text */ 't', ` chars
          remaining in this buffer`]
				]]
			],
			[/* return description */
				[/* text */ 't', `This buffer`]
			]
		]],
		[/* method */ 'get(char[],int,int)', [
			[/* method description */
				[/* text */ 't', `Relative bulk `],
				[/* text */ 't', `get`],
				[/* text */ 't', ` method.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method transfers chars from this buffer into the given
 destination array.  If there are fewer chars remaining in the
 buffer than are required to satisfy the request, that is, if
 `],
					[/* inline code block */ 'i', `length`],
					[/* text */ 't', ` `],
					[/* inline code block */ 'i', `>`],
					[/* text */ 't', ` `],
					[/* inline code block */ 'i', `remaining()`],
					[/* text */ 't', `, then no
 chars are transferred and a `],
					[/* reference */ 'r', `java.nio.BufferUnderflowException`, `BufferUnderflowException`],
					[/* text */ 't', ` is
 thrown.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` Otherwise, this method copies `],
					[/* inline code block */ 'i', `length`],
					[/* text */ 't', ` chars from this
 buffer into the given array, starting at the current position of this
 buffer and at the given offset in the array.  The position of this
 buffer is then incremented by `],
					[/* inline code block */ 'i', `length`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` In other words, an invocation of this method of the form
 `],
					[/* inline code block */ 'i', `src.get(dst, off, len)`],
					[/* text */ 't', ` has exactly the same effect as
 the loop

 `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `for (int i = off; i < off + len; i++)
         dst[i] = src.get();`]
				]],
				[/* text */ 't', `

 except that it first checks that there are sufficient chars in
 this buffer and it is potentially much more efficient.`],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'dst', [/* parameter description */
					[/* text */ 't', `The array into which chars are to be written`]
				]],
				[/* parameter */ 'offset', [/* parameter description */
					[/* text */ 't', `The offset within the array of the first char to be
         written; must be non-negative and no larger than
         `],
					[/* inline code block */ 'i', `dst.length`]
				]],
				[/* parameter */ 'length', [/* parameter description */
					[/* text */ 't', `The maximum number of chars to be written to the given
         array; must be non-negative and no larger than
         `],
					[/* inline code block */ 'i', `dst.length - offset`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.nio.BufferUnderflowException', [/* throw description */
					[/* text */ 't', `If there are fewer than `],
					[/* inline code block */ 'i', `length`],
					[/* text */ 't', ` chars
          remaining in this buffer`]
				]],
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `If the preconditions on the `],
					[/* inline code block */ 'i', `offset`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `length`],
					[/* text */ 't', `
          parameters do not hold`]
				]]
			],
			[/* return description */
				[/* text */ 't', `This buffer`]
			]
		]],
		[/* method */ 'get(int,char[])', [
			[/* method description */
				[/* text */ 't', `Absolute bulk `],
				[/* text */ 't', `get`],
				[/* text */ 't', ` method.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method transfers chars from this buffer into the given
 destination array.  The position of this buffer is unchanged.  An
 invocation of this method of the form
 `],
					[/* inline code block */ 'i', `src.get(index, dst)`],
					[/* text */ 't', ` behaves in exactly the same
 way as the invocation:

 `]
				]],
				[/* code block */ 'c', `     src.get(index, dst, 0, dst.length) `],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'index', [/* parameter description */
					[/* text */ 't', `The index in this buffer from which the first char will be
         read; must be non-negative and less than `],
					[/* inline code block */ 'i', `limit()`]
				]],
				[/* parameter */ 'dst', [/* parameter description */
					[/* text */ 't', `The destination array`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `index`],
					[/* text */ 't', ` is negative, not smaller than `],
					[/* inline code block */ 'i', `limit()`],
					[/* text */ 't', `,
          or `],
					[/* inline code block */ 'i', `limit() - index < dst.length`]
				]]
			],
			[/* return description */
				[/* text */ 't', `This buffer`]
			]
		]],
		[/* method */ 'get(int,char[],int,int)', [
			[/* method description */
				[/* text */ 't', `Absolute bulk `],
				[/* text */ 't', `get`],
				[/* text */ 't', ` method.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method transfers `],
					[/* inline code block */ 'i', `length`],
					[/* text */ 't', ` chars from this
 buffer into the given array, starting at the given index in this
 buffer and at the given offset in the array.  The position of this
 buffer is unchanged.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` An invocation of this method of the form
 `],
					[/* inline code block */ 'i', `src.get(index, dst, offset, length)`],
					[/* text */ 't', `
 has exactly the same effect as the following loop except that it first
 checks the consistency of the supplied parameters and it is potentially
 much more efficient:

 `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `for (int i = offset, j = index; i < offset + length; i++, j++)
         dst[i] = src.get(j);`]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'index', [/* parameter description */
					[/* text */ 't', `The index in this buffer from which the first char will be
         read; must be non-negative and less than `],
					[/* inline code block */ 'i', `limit()`]
				]],
				[/* parameter */ 'dst', [/* parameter description */
					[/* text */ 't', `The destination array`]
				]],
				[/* parameter */ 'offset', [/* parameter description */
					[/* text */ 't', `The offset within the array of the first char to be
         written; must be non-negative and less than
         `],
					[/* inline code block */ 'i', `dst.length`]
				]],
				[/* parameter */ 'length', [/* parameter description */
					[/* text */ 't', `The number of chars to be written to the given array;
         must be non-negative and no larger than the smaller of
         `],
					[/* inline code block */ 'i', `limit() - index`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `dst.length - offset`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `If the preconditions on the `],
					[/* inline code block */ 'i', `index`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `offset`],
					[/* text */ 't', `, and
          `],
					[/* inline code block */ 'i', `length`],
					[/* text */ 't', ` parameters do not hold`]
				]]
			],
			[/* return description */
				[/* text */ 't', `This buffer`]
			]
		]],
		[/* method */ 'put(char[],int,int)', [
			[/* method description */
				[/* text */ 't', `Relative bulk `],
				[/* text */ 't', `put`],
				[/* text */ 't', ` method  `],
				[/* text */ 't', `(optional operation)`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method transfers chars into this buffer from the given
 source array.  If there are more chars to be copied from the array
 than remain in this buffer, that is, if
 `],
					[/* inline code block */ 'i', `length`],
					[/* text */ 't', ` `],
					[/* inline code block */ 'i', `>`],
					[/* text */ 't', ` `],
					[/* inline code block */ 'i', `remaining()`],
					[/* text */ 't', `, then no
 chars are transferred and a `],
					[/* reference */ 'r', `java.nio.BufferOverflowException`, `BufferOverflowException`],
					[/* text */ 't', ` is
 thrown.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` Otherwise, this method copies `],
					[/* inline code block */ 'i', `length`],
					[/* text */ 't', ` chars from the
 given array into this buffer, starting at the given offset in the array
 and at the current position of this buffer.  The position of this buffer
 is then incremented by `],
					[/* inline code block */ 'i', `length`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` In other words, an invocation of this method of the form
 `],
					[/* inline code block */ 'i', `dst.put(src, off, len)`],
					[/* text */ 't', ` has exactly the same effect as
 the loop

 `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `for (int i = off; i < off + len; i++)
         dst.put(src[i]);`]
				]],
				[/* text */ 't', `

 except that it first checks that there is sufficient space in this
 buffer and it is potentially much more efficient.`],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'src', [/* parameter description */
					[/* text */ 't', `The array from which chars are to be read`]
				]],
				[/* parameter */ 'offset', [/* parameter description */
					[/* text */ 't', `The offset within the array of the first char to be read;
         must be non-negative and no larger than `],
					[/* inline code block */ 'i', `src.length`]
				]],
				[/* parameter */ 'length', [/* parameter description */
					[/* text */ 't', `The number of chars to be read from the given array;
         must be non-negative and no larger than
         `],
					[/* inline code block */ 'i', `src.length - offset`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.nio.BufferOverflowException', [/* throw description */
					[/* text */ 't', `If there is insufficient space in this buffer`]
				]],
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `If the preconditions on the `],
					[/* inline code block */ 'i', `offset`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `length`],
					[/* text */ 't', `
          parameters do not hold`]
				]],
				[/* throw */ 'java.nio.ReadOnlyBufferException', [/* throw description */
					[/* text */ 't', `If this buffer is read-only`]
				]]
			],
			[/* return description */
				[/* text */ 't', `This buffer`]
			]
		]],
		[/* method */ 'put(int,char[])', [
			[/* method description */
				[/* text */ 't', `Absolute bulk `],
				[/* text */ 't', `put`],
				[/* text */ 't', ` method  `],
				[/* text */ 't', `(optional operation)`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method copies chars into this buffer from the given source
 array.  The position of this buffer is unchanged.  An invocation of this
 method of the form `],
					[/* inline code block */ 'i', `dst.put(index, src)`],
					[/* text */ 't', `
 behaves in exactly the same way as the invocation:

 `]
				]],
				[/* code block */ 'c', `     dst.put(index, src, 0, src.length); `],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'index', [/* parameter description */
					[/* text */ 't', `The index in this buffer at which the first char will be
         written; must be non-negative and less than `],
					[/* inline code block */ 'i', `limit()`]
				]],
				[/* parameter */ 'src', [/* parameter description */
					[/* text */ 't', `The array from which chars are to be read`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `index`],
					[/* text */ 't', ` is negative, not smaller than `],
					[/* inline code block */ 'i', `limit()`],
					[/* text */ 't', `,
          or `],
					[/* inline code block */ 'i', `limit() - index < src.length`]
				]],
				[/* throw */ 'java.nio.ReadOnlyBufferException', [/* throw description */
					[/* text */ 't', `If this buffer is read-only`]
				]]
			],
			[/* return description */
				[/* text */ 't', `This buffer`]
			]
		]],
		[/* method */ 'put(int,char[],int,int)', [
			[/* method description */
				[/* text */ 't', `Absolute bulk `],
				[/* text */ 't', `put`],
				[/* text */ 't', ` method  `],
				[/* text */ 't', `(optional operation)`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method transfers `],
					[/* inline code block */ 'i', `length`],
					[/* text */ 't', ` chars from the given
 array, starting at the given offset in the array and at the given index
 in this buffer.  The position of this buffer is unchanged.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` An invocation of this method of the form
 `],
					[/* inline code block */ 'i', `dst.put(index, src, offset, length)`],
					[/* text */ 't', `
 has exactly the same effect as the following loop except that it first
 checks the consistency of the supplied parameters and it is potentially
 much more efficient:

 `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `for (int i = offset, j = index; i < offset + length; i++, j++)
         dst.put(j, src[i]);`]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'index', [/* parameter description */
					[/* text */ 't', `The index in this buffer at which the first char will be
         written; must be non-negative and less than `],
					[/* inline code block */ 'i', `limit()`]
				]],
				[/* parameter */ 'src', [/* parameter description */
					[/* text */ 't', `The array from which chars are to be read`]
				]],
				[/* parameter */ 'offset', [/* parameter description */
					[/* text */ 't', `The offset within the array of the first char to be read;
         must be non-negative and less than `],
					[/* inline code block */ 'i', `src.length`]
				]],
				[/* parameter */ 'length', [/* parameter description */
					[/* text */ 't', `The number of chars to be read from the given array;
         must be non-negative and no larger than the smaller of
         `],
					[/* inline code block */ 'i', `limit() - index`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `src.length - offset`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `If the preconditions on the `],
					[/* inline code block */ 'i', `index`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `offset`],
					[/* text */ 't', `, and
          `],
					[/* inline code block */ 'i', `length`],
					[/* text */ 't', ` parameters do not hold`]
				]],
				[/* throw */ 'java.nio.ReadOnlyBufferException', [/* throw description */
					[/* text */ 't', `If this buffer is read-only`]
				]]
			],
			[/* return description */
				[/* text */ 't', `This buffer`]
			]
		]],
		[/* method */ 'put(int,java.nio.CharBuffer,int,int)', [
			[/* method description */
				[/* text */ 't', `Absolute bulk `],
				[/* text */ 't', `put`],
				[/* text */ 't', ` method  `],
				[/* text */ 't', `(optional operation)`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method transfers `],
					[/* inline code block */ 'i', `length`],
					[/* text */ 't', ` chars into this buffer from
 the given source buffer, starting at the given `],
					[/* inline code block */ 'i', `offset`],
					[/* text */ 't', ` in the
 source buffer and the given `],
					[/* inline code block */ 'i', `index`],
					[/* text */ 't', ` in this buffer. The positions
 of both buffers are unchanged.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` In other words, an invocation of this method of the form
 `],
					[/* inline code block */ 'i', `dst.put(index, src, offset, length)`],
					[/* text */ 't', `
 has exactly the same effect as the loop

 `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `for (int i = offset, j = index; i < offset + length; i++, j++)
     dst.put(j, src.get(i));`]
				]],
				[/* text */ 't', `

 except that it first checks the consistency of the supplied parameters
 and it is potentially much more efficient.  If this buffer and
 the source buffer share the same backing array or memory, then the
 result will be as if the source elements were first copied to an
 intermediate location before being written into this buffer.`],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'index', [/* parameter description */
					[/* text */ 't', `The index in this buffer at which the first char will be
        written; must be non-negative and less than `],
					[/* inline code block */ 'i', `limit()`]
				]],
				[/* parameter */ 'src', [/* parameter description */
					[/* text */ 't', `The buffer from which chars are to be read`]
				]],
				[/* parameter */ 'offset', [/* parameter description */
					[/* text */ 't', `The index within the source buffer of the first char to be
        read; must be non-negative and less than `],
					[/* inline code block */ 'i', `src.limit()`]
				]],
				[/* parameter */ 'length', [/* parameter description */
					[/* text */ 't', `The number of chars to be read from the given buffer;
        must be non-negative and no larger than the smaller of
        `],
					[/* inline code block */ 'i', `limit() - index`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `src.limit() - offset`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `If the preconditions on the `],
					[/* inline code block */ 'i', `index`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `offset`],
					[/* text */ 't', `, and
         `],
					[/* inline code block */ 'i', `length`],
					[/* text */ 't', ` parameters do not hold`]
				]],
				[/* throw */ 'java.nio.ReadOnlyBufferException', [/* throw description */
					[/* text */ 't', `If this buffer is read-only`]
				]]
			],
			[/* return description */
				[/* text */ 't', `This buffer`]
			]
		]],
		[/* method */ 'put(java.lang.String,int,int)', [
			[/* method description */
				[/* text */ 't', `Relative bulk `],
				[/* text */ 't', `put`],
				[/* text */ 't', ` method  `],
				[/* text */ 't', `(optional operation)`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method transfers chars from the given string into this
 buffer.  If there are more chars to be copied from the string than
 remain in this buffer, that is, if
 `],
					[/* inline code block */ 'i', `end - start`],
					[/* text */ 't', ` `],
					[/* inline code block */ 'i', `>`],
					[/* text */ 't', ` `],
					[/* inline code block */ 'i', `remaining()`],
					[/* text */ 't', `,
 then no chars are transferred and a `],
					[/* reference */ 'r', `java.nio.BufferOverflowException`, `BufferOverflowException`],
					[/* text */ 't', ` is thrown.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` Otherwise, this method copies
 `],
					[/* text */ 't', `n`],
					[/* text */ 't', ` = `],
					[/* inline code block */ 'i', `end`],
					[/* text */ 't', ` - `],
					[/* inline code block */ 'i', `start`],
					[/* text */ 't', ` chars
 from the given string into this buffer, starting at the given
 `],
					[/* inline code block */ 'i', `start`],
					[/* text */ 't', ` index and at the current position of this buffer.  The
 position of this buffer is then incremented by `],
					[/* text */ 't', `n`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` In other words, an invocation of this method of the form
 `],
					[/* inline code block */ 'i', `dst.put(src, start, end)`],
					[/* text */ 't', ` has exactly the same effect
 as the loop

 `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `for (int i = start; i < end; i++)
         dst.put(src.charAt(i));`]
				]],
				[/* text */ 't', `

 except that it first checks that there is sufficient space in this
 buffer and it is potentially much more efficient.`],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'src', [/* parameter description */
					[/* text */ 't', `The string from which chars are to be read`]
				]],
				[/* parameter */ 'start', [/* parameter description */
					[/* text */ 't', `The offset within the string of the first char to be read;
         must be non-negative and no larger than
         `],
					[/* inline code block */ 'i', `string.length()`]
				]],
				[/* parameter */ 'end', [/* parameter description */
					[/* text */ 't', `The offset within the string of the last char to be read,
         plus one; must be non-negative and no larger than
         `],
					[/* inline code block */ 'i', `string.length()`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.nio.BufferOverflowException', [/* throw description */
					[/* text */ 't', `If there is insufficient space in this buffer`]
				]],
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `If the preconditions on the `],
					[/* inline code block */ 'i', `start`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `end`],
					[/* text */ 't', `
          parameters do not hold`]
				]],
				[/* throw */ 'java.nio.ReadOnlyBufferException', [/* throw description */
					[/* text */ 't', `If this buffer is read-only`]
				]]
			],
			[/* return description */
				[/* text */ 't', `This buffer`]
			]
		]],
		[/* method */ 'put(java.nio.CharBuffer)', [
			[/* method description */
				[/* text */ 't', `Relative bulk `],
				[/* text */ 't', `put`],
				[/* text */ 't', ` method  `],
				[/* text */ 't', `(optional operation)`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method transfers the chars remaining in the given source
 buffer into this buffer.  If there are more chars remaining in the
 source buffer than in this buffer, that is, if
 `],
					[/* inline code block */ 'i', `src.remaining()`],
					[/* text */ 't', ` `],
					[/* inline code block */ 'i', `>`],
					[/* text */ 't', ` `],
					[/* inline code block */ 'i', `remaining()`],
					[/* text */ 't', `,
 then no chars are transferred and a `],
					[/* reference */ 'r', `java.nio.BufferOverflowException`, `BufferOverflowException`],
					[/* text */ 't', ` is thrown.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` Otherwise, this method copies
 `],
					[/* text */ 't', `n`],
					[/* text */ 't', ` = `],
					[/* inline code block */ 'i', `src.remaining()`],
					[/* text */ 't', ` chars from the given
 buffer into this buffer, starting at each buffer's current position.
 The positions of both buffers are then incremented by `],
					[/* text */ 't', `n`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` In other words, an invocation of this method of the form
 `],
					[/* inline code block */ 'i', `dst.put(src)`],
					[/* text */ 't', ` has exactly the same effect as the loop

 `]
				]],
				[/* code block */ 'c', `     while (src.hasRemaining())
         dst.put(src.get()); `],
				[/* text */ 't', `

 except that it first checks that there is sufficient space in this
 buffer and it is potentially much more efficient.  If this buffer and
 the source buffer share the same backing array or memory, then the
 result will be as if the source elements were first copied to an
 intermediate location before being written into this buffer.`],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'src', [/* parameter description */
					[/* text */ 't', `The source buffer from which chars are to be read;
         must not be this buffer`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.nio.BufferOverflowException', [/* throw description */
					[/* text */ 't', `If there is insufficient space in this buffer
          for the remaining chars in the source buffer`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If the source buffer is this buffer`]
				]],
				[/* throw */ 'java.nio.ReadOnlyBufferException', [/* throw description */
					[/* text */ 't', `If this buffer is read-only`]
				]]
			],
			[/* return description */
				[/* text */ 't', `This buffer`]
			]
		]],
		[/* method */ 'chars()', UDF],
		[/* method */ 'allocate(int)', [
			[/* method description */
				[/* text */ 't', `Allocates a new char buffer.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The new buffer's position will be zero, its limit will be its
 capacity, its mark will be undefined, each of its elements will be
 initialized to zero, and its byte order will be



 the `],
					[/* reference */ 'r', `java.nio.ByteOrder#nativeOrder()`, `native order`],
					[/* text */ 't', ` of the underlying
 hardware.

 It will have a `],
					[/* reference */ 'r', `#array()`, `backing array`],
					[/* text */ 't', `, and its
 `],
					[/* reference */ 'r', `#arrayOffset()`, `array offset`],
					[/* text */ 't', ` will be zero.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'capacity', [/* parameter description */
					[/* text */ 't', `The new buffer's capacity, in chars`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If the `],
					[/* inline code block */ 'i', `capacity`],
					[/* text */ 't', ` is a negative integer`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The new char buffer`]
			]
		]],
		[/* method */ 'wrap(char[])', [
			[/* method description */
				[/* text */ 't', `Wraps a char array into a buffer.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The new buffer will be backed by the given char array;
 that is, modifications to the buffer will cause the array to be modified
 and vice versa.  The new buffer's capacity and limit will be
 `],
					[/* inline code block */ 'i', `array.length`],
					[/* text */ 't', `, its position will be zero, its mark will be
 undefined, and its byte order will be



 the `],
					[/* reference */ 'r', `java.nio.ByteOrder#nativeOrder()`, `native order`],
					[/* text */ 't', ` of the underlying
 hardware.

 Its `],
					[/* reference */ 'r', `#array()`, `backing array`],
					[/* text */ 't', ` will be the given array, and its
 `],
					[/* reference */ 'r', `#arrayOffset()`, `array offset`],
					[/* text */ 't', ` will be zero.  `]
				]]
			],
			[/* parameters */
				[/* parameter */ 'array', [/* parameter description */
					[/* text */ 't', `The array that will back this buffer`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The new char buffer`]
			]
		]],
		[/* method */ 'wrap(char[],int,int)', [
			[/* method description */
				[/* text */ 't', `Wraps a char array into a buffer.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The new buffer will be backed by the given char array;
 that is, modifications to the buffer will cause the array to be modified
 and vice versa.  The new buffer's capacity will be
 `],
					[/* inline code block */ 'i', `array.length`],
					[/* text */ 't', `, its position will be `],
					[/* inline code block */ 'i', `offset`],
					[/* text */ 't', `, its limit
 will be `],
					[/* inline code block */ 'i', `offset + length`],
					[/* text */ 't', `, its mark will be undefined, and its
 byte order will be



 the `],
					[/* reference */ 'r', `java.nio.ByteOrder#nativeOrder()`, `native order`],
					[/* text */ 't', ` of the underlying
 hardware.

 Its `],
					[/* reference */ 'r', `#array()`, `backing array`],
					[/* text */ 't', ` will be the given array, and
 its `],
					[/* reference */ 'r', `#arrayOffset()`, `array offset`],
					[/* text */ 't', ` will be zero.  `]
				]]
			],
			[/* parameters */
				[/* parameter */ 'array', [/* parameter description */
					[/* text */ 't', `The array that will back the new buffer`]
				]],
				[/* parameter */ 'offset', [/* parameter description */
					[/* text */ 't', `The offset of the subarray to be used; must be non-negative and
         no larger than `],
					[/* inline code block */ 'i', `array.length`],
					[/* text */ 't', `.  The new buffer's position
         will be set to this value.`]
				]],
				[/* parameter */ 'length', [/* parameter description */
					[/* text */ 't', `The length of the subarray to be used;
         must be non-negative and no larger than
         `],
					[/* inline code block */ 'i', `array.length - offset`],
					[/* text */ 't', `.
         The new buffer's limit will be set to `],
					[/* inline code block */ 'i', `offset + length`],
					[/* text */ 't', `.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `If the preconditions on the `],
					[/* inline code block */ 'i', `offset`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `length`],
					[/* text */ 't', `
          parameters do not hold`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The new char buffer`]
			]
		]],
		[/* method */ 'wrap(java.lang.CharSequence)', [
			[/* method description */
				[/* text */ 't', `Wraps a character sequence into a buffer.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The content of the new, read-only buffer will be the content of the
 given character sequence.  The new buffer's capacity and limit will be
 `],
					[/* inline code block */ 'i', `csq.length()`],
					[/* text */ 't', `, its position will be zero, and its mark will be
 undefined.  `]
				]]
			],
			[/* parameters */
				[/* parameter */ 'csq', [/* parameter description */
					[/* text */ 't', `The character sequence from which the new character buffer is to
         be created`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The new character buffer`]
			]
		]],
		[/* method */ 'wrap(java.lang.CharSequence,int,int)', [
			[/* method description */
				[/* text */ 't', `Wraps a character sequence into a buffer.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The content of the new, read-only buffer will be the content of the
 given character sequence.  The buffer's capacity will be
 `],
					[/* inline code block */ 'i', `csq.length()`],
					[/* text */ 't', `, its position will be `],
					[/* inline code block */ 'i', `start`],
					[/* text */ 't', `, its limit
 will be `],
					[/* inline code block */ 'i', `end`],
					[/* text */ 't', `, and its mark will be undefined.  `]
				]]
			],
			[/* parameters */
				[/* parameter */ 'csq', [/* parameter description */
					[/* text */ 't', `The character sequence from which the new character buffer is to
         be created`]
				]],
				[/* parameter */ 'start', [/* parameter description */
					[/* text */ 't', `The index of the first character to be used;
         must be non-negative and no larger than `],
					[/* inline code block */ 'i', `csq.length()`],
					[/* text */ 't', `.
         The new buffer's position will be set to this value.`]
				]],
				[/* parameter */ 'end', [/* parameter description */
					[/* text */ 't', `The index of the character following the last character to be
         used; must be no smaller than `],
					[/* inline code block */ 'i', `start`],
					[/* text */ 't', ` and no larger
         than `],
					[/* inline code block */ 'i', `csq.length()`],
					[/* text */ 't', `.
         The new buffer's limit will be set to this value.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `If the preconditions on the `],
					[/* inline code block */ 'i', `start`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `end`],
					[/* text */ 't', `
          parameters do not hold`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The new character buffer`]
			]
		]]
	],
]);
