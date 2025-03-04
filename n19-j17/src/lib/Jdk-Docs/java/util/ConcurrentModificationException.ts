import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.util.ConcurrentModificationException', [
	[/* class description */
		[/* text */ 't', `This exception may be thrown by methods that have detected concurrent
 modification of an object when such modification is not permissible.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 For example, it is not generally permissible for one thread to modify a Collection
 while another thread is iterating over it.  In general, the results of the
 iteration are undefined under these circumstances.  Some Iterator
 implementations (including those of all the general purpose collection implementations
 provided by the JRE) may choose to throw this exception if this behavior is
 detected.  Iterators that do this are known as `],
			[/* text */ 't', `fail-fast`],
			[/* text */ 't', ` iterators,
 as they fail quickly and cleanly, rather that risking arbitrary,
 non-deterministic behavior at an undetermined time in the future.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 Note that this exception does not always indicate that an object has
 been concurrently modified by a `],
			[/* text */ 't', `different`],
			[/* text */ 't', ` thread.  If a single
 thread issues a sequence of method invocations that violates the
 contract of an object, the object may throw this exception.  For
 example, if a thread modifies a collection directly while it is
 iterating over the collection with a fail-fast iterator, the iterator
 will throw this exception.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Note that fail-fast behavior cannot be guaranteed as it is, generally
 speaking, impossible to make any hard guarantees in the presence of
 unsynchronized concurrent modification.  Fail-fast operations
 throw `],
			[/* inline code block */ 'i', `ConcurrentModificationException`],
			[/* text */ 't', ` on a best-effort basis.
 Therefore, it would be wrong to write a program that depended on this
 exception for its correctness: `],
			[/* inline code block */ 'i', `ConcurrentModificationException`]
		]]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Constructs a ConcurrentModificationException with no
 detail message.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a `],
				[/* inline code block */ 'i', `ConcurrentModificationException`],
				[/* text */ 't', ` with the
 specified detail message.`]
			],
			[/* parameters */
				[/* parameter */ 'message', [/* parameter description */
					[/* text */ 't', `the detail message pertaining to this exception.`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.String,java.lang.Throwable)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new exception with the specified detail message and
 cause.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Note that the detail message associated with `],
					[/* inline code block */ 'i', `cause`],
					[/* text */ 't', ` is
 `],
					[/* text */ 't', `not`],
					[/* text */ 't', ` automatically incorporated in this exception's detail
 message.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'message', [/* parameter description */
					[/* text */ 't', `the detail message (which is saved for later retrieval
         by the `],
					[/* reference */ 'r', `java.Throwable#getMessage()`],
					[/* text */ 't', ` method).`]
				]],
				[/* parameter */ 'cause', [/* parameter description */
					[/* text */ 't', `the cause (which is saved for later retrieval by the
         `],
					[/* reference */ 'r', `java.Throwable#getCause()`],
					[/* text */ 't', ` method).  (A `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` value
         is permitted, and indicates that the cause is nonexistent or
         unknown.)`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.Throwable)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new exception with the specified cause and a detail
 message of `],
				[/* inline code block */ 'i', `(cause==null ? null : cause.toString())`],
				[/* text */ 't', ` (which
 typically contains the class and detail message of `],
				[/* inline code block */ 'i', `cause`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'cause', [/* parameter description */
					[/* text */ 't', `the cause (which is saved for later retrieval by the
         `],
					[/* reference */ 'r', `java.Throwable#getCause()`],
					[/* text */ 't', ` method).  (A `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` value is
         permitted, and indicates that the cause is nonexistent or
         unknown.)`]
				]]
			],
			/* throws */ UDF
		]]
	],
	/* methods */ UDF,
]);
