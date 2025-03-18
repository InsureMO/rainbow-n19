import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.lang.Throwable', [
	[/* class description */
		[/* text */ 't', `The `],
		[/* inline code block */ 'i', `Throwable`],
		[/* text */ 't', ` class is the superclass of all errors and
 exceptions in the Java language. Only objects that are instances of this
 class (or one of its subclasses) are thrown by the Java Virtual Machine or
 can be thrown by the Java `],
		[/* inline code block */ 'i', `throw`],
		[/* text */ 't', ` statement. Similarly, only
 this class or one of its subclasses can be the argument type in a
 `],
		[/* inline code block */ 'i', `catch`],
		[/* text */ 't', ` clause.

 For the purposes of compile-time checking of exceptions, `],
		[/* inline code block */ 'i', `Throwable`],
		[/* text */ 't', ` and any subclass of `],
		[/* inline code block */ 'i', `Throwable`],
		[/* text */ 't', ` that is not also a
 subclass of either `],
		[/* reference */ 'r', `java.lang.RuntimeException`, `RuntimeException`],
		[/* text */ 't', ` or `],
		[/* reference */ 'r', `java.lang.Error`, `Error`],
		[/* text */ 't', ` are
 regarded as checked exceptions.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `Instances of two subclasses, `],
			[/* reference */ 'r', `java.lang.Error`, `Error`],
			[/* text */ 't', ` and
 `],
			[/* reference */ 'r', `java.lang.Exception`, `Exception`],
			[/* text */ 't', `, are conventionally used to indicate
 that exceptional situations have occurred. Typically, these instances
 are freshly created in the context of the exceptional situation so
 as to include relevant information (such as stack trace data).

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `A throwable contains a snapshot of the execution stack of its
 thread at the time it was created. It can also contain a message
 string that gives more information about the error. Over time, a
 throwable can `],
			[/* reference */ 'r', `#addSuppressed(java.lang.Throwable)`, `suppress`],
			[/* text */ 't', ` other
 throwables from being propagated.  Finally, the throwable can also
 contain a `],
			[/* text */ 't', `cause`],
			[/* text */ 't', `: another throwable that caused this
 throwable to be constructed.  The recording of this causal information
 is referred to as the `],
			[/* text */ 't', `chained exception`],
			[/* text */ 't', ` facility, as the
 cause can, itself, have a cause, and so on, leading to a "chain" of
 exceptions, each caused by another.

 `]
		]],
		[/* block */ 'b', `One reason that a throwable may have a cause is that the class that
 throws it is built atop a lower layered abstraction, and an operation on
 the upper layer fails due to a failure in the lower layer.  It would be bad
 design to let the throwable thrown by the lower layer propagate outward, as
 it is generally unrelated to the abstraction provided by the upper layer.
 Further, doing so would tie the API of the upper layer to the details of
 its implementation, assuming the lower layer's exception was a checked
 exception.  Throwing a "wrapped exception" (i.e., an exception containing a
 cause) allows the upper layer to communicate the details of the failure to
 its caller without incurring either of these shortcomings.  It preserves
 the flexibility to change the implementation of the upper layer without
 changing its API (in particular, the set of exceptions thrown by its
 methods).

 `],
		[/* block */ 'b', [
			[/* text */ 't', `A second reason that a throwable may have a cause is that the method
 that throws it must conform to a general-purpose interface that does not
 permit the method to throw the cause directly.  For example, suppose
 a persistent collection conforms to the `],
			[/* reference */ 'r', `java.util.Collection`, `Collection`],
			[/* text */ 't', ` interface, and that its persistence is implemented atop
 `],
			[/* inline code block */ 'i', `java.io`],
			[/* text */ 't', `.  Suppose the internals of the `],
			[/* inline code block */ 'i', `add`],
			[/* text */ 't', ` method
 can throw an `],
			[/* reference */ 'r', `java.io.IOException`, `IOException`],
			[/* text */ 't', `.  The implementation
 can communicate the details of the `],
			[/* inline code block */ 'i', `IOException`],
			[/* text */ 't', ` to its caller
 while conforming to the `],
			[/* inline code block */ 'i', `Collection`],
			[/* text */ 't', ` interface by wrapping the
 `],
			[/* inline code block */ 'i', `IOException`],
			[/* text */ 't', ` in an appropriate unchecked exception.  (The
 specification for the persistent collection should indicate that it is
 capable of throwing such exceptions.)

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `A cause can be associated with a throwable in two ways: via a
 constructor that takes the cause as an argument, or via the
 `],
			[/* reference */ 'r', `#initCause(java.lang.Throwable)`, `initCause(Throwable)`],
			[/* text */ 't', ` method.  New throwable classes that
 wish to allow causes to be associated with them should provide constructors
 that take a cause and delegate (perhaps indirectly) to one of the
 `],
			[/* inline code block */ 'i', `Throwable`],
			[/* text */ 't', ` constructors that takes a cause.

 Because the `],
			[/* inline code block */ 'i', `initCause`],
			[/* text */ 't', ` method is public, it allows a cause to be
 associated with any throwable, even a "legacy throwable" whose
 implementation predates the addition of the exception chaining mechanism to
 `],
			[/* inline code block */ 'i', `Throwable`],
			[/* text */ 't', `.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `By convention, class `],
			[/* inline code block */ 'i', `Throwable`],
			[/* text */ 't', ` and its subclasses have two
 constructors, one that takes no arguments and one that takes a
 `],
			[/* inline code block */ 'i', `String`],
			[/* text */ 't', ` argument that can be used to produce a detail message.
 Further, those subclasses that might likely have a cause associated with
 them should have two more constructors, one that takes a
 `],
			[/* inline code block */ 'i', `Throwable`],
			[/* text */ 't', ` (the cause), and one that takes a
 `],
			[/* inline code block */ 'i', `String`],
			[/* text */ 't', ` (the detail message) and a `],
			[/* inline code block */ 'i', `Throwable`],
			[/* text */ 't', ` (the
 cause).`]
		]]
	],
	/* fields */,
	[/* constructors */
		[/* constructor */ '<init>(java.lang.String,java.lang.Throwable,boolean,boolean)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new throwable with the specified detail message,
 cause, `],
				[/* reference */ 'r', `#addSuppressed(java.lang.Throwable)`, `suppression`],
				[/* text */ 't', ` enabled or
 disabled, and writable stack trace enabled or disabled.  If
 suppression is disabled, `],
				[/* reference */ 'r', `#getSuppressed()`, `getSuppressed()`],
				[/* text */ 't', ` for this object
 will return a zero-length array and calls to `],
				[/* reference */ 'r', `#addSuppressed(java.lang.Throwable)`, `addSuppressed(java.lang.Throwable)`],
				[/* text */ 't', ` that would otherwise append an exception to the
 suppressed list will have no effect.  If the writable stack
 trace is false, this constructor will not call `],
				[/* reference */ 'r', `#fillInStackTrace()`, `fillInStackTrace()`],
				[/* text */ 't', `, a `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` will be written to the
 `],
				[/* inline code block */ 'i', `stackTrace`],
				[/* text */ 't', ` field, and subsequent calls to `],
				[/* inline code block */ 'i', `fillInStackTrace`],
				[/* text */ 't', ` and `],
				[/* reference */ 'r', `#setStackTrace(java.lang.StackTraceElement%5B%5D)`, `setStackTrace(StackTraceElement[])`],
				[/* text */ 't', ` will not set the stack
 trace.  If the writable stack trace is false, `],
				[/* reference */ 'r', `#getStackTrace()`, `getStackTrace()`],
				[/* text */ 't', ` will return a zero length array.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Note that the other constructors of `],
					[/* inline code block */ 'i', `Throwable`],
					[/* text */ 't', ` treat
 suppression as being enabled and the stack trace as being
 writable.  Subclasses of `],
					[/* inline code block */ 'i', `Throwable`],
					[/* text */ 't', ` should document any
 conditions under which suppression is disabled and document
 conditions under which the stack trace is not writable.
 Disabling of suppression should only occur in exceptional
 circumstances where special requirements exist, such as a
 virtual machine reusing exception objects under low-memory
 situations.  Circumstances where a given exception object is
 repeatedly caught and rethrown, such as to implement control
 flow between two sub-systems, is another situation where
 immutable throwable objects would be appropriate.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'message', [/* parameter description */
					[/* text */ 't', `the detail message.`]
				]],
				[/* parameter */ 'cause', [/* parameter description */
					[/* text */ 't', `the cause.  (A `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` value is permitted,
 and indicates that the cause is nonexistent or unknown.)`]
				]],
				[/* parameter */ 'enableSuppression', [/* parameter description */
					[/* text */ 't', `whether or not suppression is enabled or disabled`]
				]],
				[/* parameter */ 'writableStackTrace', [/* parameter description */
					[/* text */ 't', `whether or not the stack trace should be
                           writable`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new throwable with `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` as its detail message.
 The cause is not initialized, and may subsequently be initialized by a
 call to `],
				[/* reference */ 'r', `#initCause(java.lang.Throwable)`, `initCause(java.lang.Throwable)`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The `],
					[/* reference */ 'r', `#fillInStackTrace()`, `fillInStackTrace()`],
					[/* text */ 't', ` method is called to initialize
 the stack trace data in the newly created throwable.`]
				]]
			],
			/* parameters */,
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new throwable with the specified detail message.  The
 cause is not initialized, and may subsequently be initialized by
 a call to `],
				[/* reference */ 'r', `#initCause(java.lang.Throwable)`, `initCause(java.lang.Throwable)`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The `],
					[/* reference */ 'r', `#fillInStackTrace()`, `fillInStackTrace()`],
					[/* text */ 't', ` method is called to initialize
 the stack trace data in the newly created throwable.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'message', [/* parameter description */
					[/* text */ 't', `the detail message. The detail message is saved for
          later retrieval by the `],
					[/* reference */ 'r', `#getMessage()`, `getMessage()`],
					[/* text */ 't', ` method.`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.String,java.lang.Throwable)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new throwable with the specified detail message and
 cause.  `],
				[/* block */ 'b', [
					[/* text */ 't', `Note that the detail message associated with
 `],
					[/* inline code block */ 'i', `cause`],
					[/* text */ 't', ` is `],
					[/* text */ 't', `not`],
					[/* text */ 't', ` automatically incorporated in
 this throwable's detail message.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The `],
					[/* reference */ 'r', `#fillInStackTrace()`, `fillInStackTrace()`],
					[/* text */ 't', ` method is called to initialize
 the stack trace data in the newly created throwable.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'message', [/* parameter description */
					[/* text */ 't', `the detail message (which is saved for later retrieval
         by the `],
					[/* reference */ 'r', `#getMessage()`, `getMessage()`],
					[/* text */ 't', ` method).`]
				]],
				[/* parameter */ 'cause', [/* parameter description */
					[/* text */ 't', `the cause (which is saved for later retrieval by the
         `],
					[/* reference */ 'r', `#getCause()`, `getCause()`],
					[/* text */ 't', ` method).  (A `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` value is
         permitted, and indicates that the cause is nonexistent or
         unknown.)`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.Throwable)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new throwable with the specified cause and a detail
 message of `],
				[/* inline code block */ 'i', `(cause==null ? null : cause.toString())`],
				[/* text */ 't', ` (which
 typically contains the class and detail message of `],
				[/* inline code block */ 'i', `cause`],
				[/* text */ 't', `).
 This constructor is useful for throwables that are little more than
 wrappers for other throwables (for example, `],
				[/* reference */ 'r', `java.security.PrivilegedActionException`, `PrivilegedActionException`],
				[/* text */ 't', `).

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The `],
					[/* reference */ 'r', `#fillInStackTrace()`, `fillInStackTrace()`],
					[/* text */ 't', ` method is called to initialize
 the stack trace data in the newly created throwable.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'cause', [/* parameter description */
					[/* text */ 't', `the cause (which is saved for later retrieval by the
         `],
					[/* reference */ 'r', `#getCause()`, `getCause()`],
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
	[/* methods */
		[/* method */ 'getSuppressed()', [
			[/* method description */
				[/* text */ 't', `Returns an array containing all of the exceptions that were
 suppressed, typically by the `],
				[/* inline code block */ 'i', `try`],
				[/* text */ 't', `-with-resources
 statement, in order to deliver this exception.

 If no exceptions were suppressed or `],
				[/* reference */ 'r', `#%3Cinit%3E(java.lang.String,java.lang.Throwable,boolean,boolean)`, `suppression is disabled`],
				[/* text */ 't', `, an empty array is returned.  This method is
 thread-safe.  Writes to the returned array do not affect future
 calls to this method.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `an array containing all of the exceptions that were
         suppressed to deliver this exception.`]
			]
		]],
		[/* method */ 'addSuppressed(java.lang.Throwable)', [
			[/* method description */
				[/* text */ 't', `Appends the specified exception to the exceptions that were
 suppressed in order to deliver this exception. This method is
 thread-safe and typically called (automatically and implicitly)
 by the `],
				[/* inline code block */ 'i', `try`],
				[/* text */ 't', `-with-resources statement.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The suppression behavior is enabled `],
					[/* text */ 't', `unless`],
					[/* text */ 't', ` disabled
 `],
					[/* reference */ 'r', `#%3Cinit%3E(java.lang.String,java.lang.Throwable,boolean,boolean)`, `via a constructor`],
					[/* text */ 't', `.  When suppression is disabled, this method does
 nothing other than to validate its argument.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `Note that when one exception `],
					[/* reference */ 'r', `#initCause(java.lang.Throwable)`, `causes`],
					[/* text */ 't', ` another exception, the first
 exception is usually caught and then the second exception is
 thrown in response.  In other words, there is a causal
 connection between the two exceptions.

 In contrast, there are situations where two independent
 exceptions can be thrown in sibling code blocks, in particular
 in the `],
					[/* inline code block */ 'i', `try`],
					[/* text */ 't', ` block of a `],
					[/* inline code block */ 'i', `try`],
					[/* text */ 't', `-with-resources
 statement and the compiler-generated `],
					[/* inline code block */ 'i', `finally`],
					[/* text */ 't', ` block
 which closes the resource.

 In these situations, only one of the thrown exceptions can be
 propagated.  In the `],
					[/* inline code block */ 'i', `try`],
					[/* text */ 't', `-with-resources statement, when
 there are two such exceptions, the exception originating from
 the `],
					[/* inline code block */ 'i', `try`],
					[/* text */ 't', ` block is propagated and the exception from the
 `],
					[/* inline code block */ 'i', `finally`],
					[/* text */ 't', ` block is added to the list of exceptions
 suppressed by the exception from the `],
					[/* inline code block */ 'i', `try`],
					[/* text */ 't', ` block.  As an
 exception unwinds the stack, it can accumulate multiple
 suppressed exceptions.

 `]
				]],
				[/* block */ 'b', `An exception may have suppressed exceptions while also being
 caused by another exception.  Whether or not an exception has a
 cause is semantically known at the time of its creation, unlike
 whether or not an exception will suppress other exceptions
 which is typically only determined after an exception is
 thrown.

 `],
				[/* block */ 'b', `Note that programmer written code is also able to take
 advantage of calling this method in situations where there are
 multiple sibling exceptions and only one can be propagated.`]
			],
			[/* parameters */
				[/* parameter */ 'exception', [/* parameter description */
					[/* text */ 't', `the exception to be added to the list of
        suppressed exceptions`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `exception`],
					[/* text */ 't', ` is this
         throwable; a throwable cannot suppress itself.`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `exception`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'getStackTrace()', [
			[/* method description */
				[/* text */ 't', `Provides programmatic access to the stack trace information printed by
 `],
				[/* reference */ 'r', `#printStackTrace()`, `printStackTrace()`],
				[/* text */ 't', `.  Returns an array of stack trace elements,
 each representing one stack frame.  The zeroth element of the array
 (assuming the array's length is non-zero) represents the top of the
 stack, which is the last method invocation in the sequence.  Typically,
 this is the point at which this throwable was created and thrown.
 The last element of the array (assuming the array's length is non-zero)
 represents the bottom of the stack, which is the first method invocation
 in the sequence.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Some virtual machines may, under some circumstances, omit one
 or more stack frames from the stack trace.  In the extreme case,
 a virtual machine that has no stack trace information concerning
 this throwable is permitted to return a zero-length array from this
 method.  Generally speaking, the array returned by this method will
 contain one element for every frame that would be printed by
 `],
					[/* inline code block */ 'i', `printStackTrace`],
					[/* text */ 't', `.  Writes to the returned array do not
 affect future calls to this method.`]
				]]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `an array of stack trace elements representing the stack trace
         pertaining to this throwable.`]
			]
		]],
		[/* method */ 'getLocalizedMessage()', [
			[/* method description */
				[/* text */ 't', `Creates a localized description of this throwable.
 Subclasses may override this method in order to produce a
 locale-specific message.  For subclasses that do not override this
 method, the default implementation returns the same result as
 `],
				[/* inline code block */ 'i', `getMessage()`],
				[/* text */ 't', `.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `The localized description of this throwable.`]
			]
		]],
		[/* method */ 'getMessage()', [
			[/* method description */
				[/* text */ 't', `Returns the detail message string of this throwable.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the detail message string of this `],
				[/* inline code block */ 'i', `Throwable`],
				[/* text */ 't', ` instance
          (which may be `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `).`]
			]
		]],
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Returns a short description of this throwable.
 The result is the concatenation of:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', ` the `],
						[/* reference */ 'r', `java.lang.Class#getName()`, `name`],
						[/* text */ 't', ` of the class of this object
 `]
					]],
					[/* block */ 'b', ` ": " (a colon and a space)
 `],
					[/* block */ 'b', [
						[/* text */ 't', ` the result of invoking this object's `],
						[/* reference */ 'r', `#getLocalizedMessage()`, `getLocalizedMessage()`],
						[/* text */ 't', `
      method
 `]
					]]
				]],
				[/* text */ 't', `
 If `],
				[/* inline code block */ 'i', `getLocalizedMessage`],
				[/* text */ 't', ` returns `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `, then just
 the class name is returned.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `a string representation of this throwable.`]
			]
		]],
		[/* method */ 'fillInStackTrace()', [
			[/* method description */
				[/* text */ 't', `Fills in the execution stack trace. This method records within this
 `],
				[/* inline code block */ 'i', `Throwable`],
				[/* text */ 't', ` object information about the current state of
 the stack frames for the current thread.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If the stack trace of this `],
					[/* inline code block */ 'i', `Throwable`],
					[/* text */ 't', ` `],
					[/* reference */ 'r', `#%3Cinit%3E(java.lang.String,java.lang.Throwable,boolean,boolean)`, `is not writable`],
					[/* text */ 't', `, calling this method has no effect.`]
				]]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `a reference to this `],
				[/* inline code block */ 'i', `Throwable`],
				[/* text */ 't', ` instance.`]
			]
		]],
		[/* method */ 'getCause()', [
			[/* method description */
				[/* text */ 't', `Returns the cause of this throwable or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if the
 cause is nonexistent or unknown.  (The cause is the throwable that
 caused this throwable to get thrown.)

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This implementation returns the cause that was supplied via one of
 the constructors requiring a `],
					[/* inline code block */ 'i', `Throwable`],
					[/* text */ 't', `, or that was set after
 creation with the `],
					[/* reference */ 'r', `#initCause(java.lang.Throwable)`, `initCause(Throwable)`],
					[/* text */ 't', ` method.  While it is
 typically unnecessary to override this method, a subclass can override
 it to return a cause set by some other means.  This is appropriate for
 a "legacy chained throwable" that predates the addition of chained
 exceptions to `],
					[/* inline code block */ 'i', `Throwable`],
					[/* text */ 't', `.  Note that it is `],
					[/* text */ 't', `not`],
					[/* text */ 't', `
 necessary to override any of the `],
					[/* inline code block */ 'i', `PrintStackTrace`],
					[/* text */ 't', ` methods,
 all of which invoke the `],
					[/* inline code block */ 'i', `getCause`],
					[/* text */ 't', ` method to determine the
 cause of a throwable.`]
				]]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the cause of this throwable or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if the
          cause is nonexistent or unknown.`]
			]
		]],
		[/* method */ 'initCause(java.lang.Throwable)', [
			[/* method description */
				[/* text */ 't', `Initializes the `],
				[/* text */ 't', `cause`],
				[/* text */ 't', ` of this throwable to the specified value.
 (The cause is the throwable that caused this throwable to get thrown.)

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This method can be called at most once.  It is generally called from
 within the constructor, or immediately after creating the
 throwable.  If this throwable was created
 with `],
					[/* reference */ 'r', `#%3Cinit%3E(java.lang.Throwable)`, `Throwable(Throwable)`],
					[/* text */ 't', ` or
 `],
					[/* reference */ 'r', `#%3Cinit%3E(java.lang.String,java.lang.Throwable)`, `Throwable(String,Throwable)`],
					[/* text */ 't', `, this method cannot be called
 even once.

 `]
				]],
				[/* block */ 'b', `An example of using this method on a legacy throwable type
 without other support for setting the cause is:

 `],
				[/* code block */ 'c', ` try {
     lowLevelOp();
 } catch (LowLevelException le) {
     throw (HighLevelException)
           new HighLevelException().initCause(le); // Legacy constructor
 }
 `],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'cause', [/* parameter description */
					[/* text */ 't', `the cause (which is saved for later retrieval by the
         `],
					[/* reference */ 'r', `#getCause()`, `getCause()`],
					[/* text */ 't', ` method).  (A `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` value is
         permitted, and indicates that the cause is nonexistent or
         unknown.)`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `cause`],
					[/* text */ 't', ` is this
         throwable.  (A throwable cannot be its own cause.)`]
				]],
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `if this throwable was
         created with `],
					[/* reference */ 'r', `#%3Cinit%3E(java.lang.Throwable)`, `Throwable(Throwable)`],
					[/* text */ 't', ` or
         `],
					[/* reference */ 'r', `#%3Cinit%3E(java.lang.String,java.lang.Throwable)`, `Throwable(String,Throwable)`],
					[/* text */ 't', `, or this method has already
         been called on this throwable.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a reference to this `],
				[/* inline code block */ 'i', `Throwable`],
				[/* text */ 't', ` instance.`]
			]
		]],
		[/* method */ 'printStackTrace()', [
			[/* method description */
				[/* text */ 't', `Prints this throwable and its backtrace to the
 standard error stream. This method prints a stack trace for this
 `],
				[/* inline code block */ 'i', `Throwable`],
				[/* text */ 't', ` object on the error output stream that is
 the value of the field `],
				[/* inline code block */ 'i', `System.err`],
				[/* text */ 't', `. The first line of
 output contains the result of the `],
				[/* reference */ 'r', `#toString()`, `toString()`],
				[/* text */ 't', ` method for
 this object.  Remaining lines represent data previously recorded by
 the method `],
				[/* reference */ 'r', `#fillInStackTrace()`, `fillInStackTrace()`],
				[/* text */ 't', `. The format of this
 information depends on the implementation, but the following
 example may be regarded as typical:
 `],
				[/* blockquote */ 'q', [
					[/* code block */ 'c', ` java.lang.NullPointerException
         at MyClass.mash(MyClass.java:9)
         at MyClass.crunch(MyClass.java:6)
         at MyClass.main(MyClass.java:3)
 `]
				]],
				[/* text */ 't', `
 This example was produced by running the program:
 `],
				[/* code block */ 'c', ` class MyClass {
     public static void main(String[] args) {
         crunch(null);
     }
     static void crunch(int[] a) {
         mash(a);
     }
     static void mash(int[] b) {
         System.out.println(b[0]);
     }
 }
 `],
				[/* text */ 't', `
 The backtrace for a throwable with an initialized, non-null cause
 should generally include the backtrace for the cause.  The format
 of this information depends on the implementation, but the following
 example may be regarded as typical:
 `],
				[/* code block */ 'c', ` HighLevelException: MidLevelException: LowLevelException
         at Junk.a(Junk.java:13)
         at Junk.main(Junk.java:4)
 Caused by: MidLevelException: LowLevelException
         at Junk.c(Junk.java:23)
         at Junk.b(Junk.java:17)
         at Junk.a(Junk.java:11)
         ... 1 more
 Caused by: LowLevelException
         at Junk.e(Junk.java:30)
         at Junk.d(Junk.java:27)
         at Junk.c(Junk.java:21)
         ... 3 more
 `],
				[/* text */ 't', `
 Note the presence of lines containing the characters `],
				[/* inline code block */ 'i', `"..."`],
				[/* text */ 't', `.
 These lines indicate that the remainder of the stack trace for this
 exception matches the indicated number of frames from the bottom of the
 stack trace of the exception that was caused by this exception (the
 "enclosing" exception).  This shorthand can greatly reduce the length
 of the output in the common case where a wrapped exception is thrown
 from same method as the "causative exception" is caught.  The above
 example was produced by running the program:
 `],
				[/* code block */ 'c', ` public class Junk {
     public static void main(String args[]) {
         try {
             a();
         } catch(HighLevelException e) {
             e.printStackTrace();
         }
     }
     static void a() throws HighLevelException {
         try {
             b();
         } catch(MidLevelException e) {
             throw new HighLevelException(e);
         }
     }
     static void b() throws MidLevelException {
         c();
     }
     static void c() throws MidLevelException {
         try {
             d();
         } catch(LowLevelException e) {
             throw new MidLevelException(e);
         }
     }
     static void d() throws LowLevelException {
        e();
     }
     static void e() throws LowLevelException {
         throw new LowLevelException();
     }
 }

 class HighLevelException extends Exception {
     HighLevelException(Throwable cause) { super(cause); }
 }

 class MidLevelException extends Exception {
     MidLevelException(Throwable cause)  { super(cause); }
 }

 class LowLevelException extends Exception {
 }
 `],
				[/* text */ 't', `
 As of release 7, the platform supports the notion of
 `],
				[/* text */ 't', `suppressed exceptions`],
				[/* text */ 't', ` (in conjunction with the `],
				[/* inline code block */ 'i', `try`],
				[/* text */ 't', `-with-resources statement). Any exceptions that were
 suppressed in order to deliver an exception are printed out
 beneath the stack trace.  The format of this information
 depends on the implementation, but the following example may be
 regarded as typical:

 `],
				[/* code block */ 'c', ` Exception in thread "main" java.lang.Exception: Something happened
  at Foo.bar(Foo.java:10)
  at Foo.main(Foo.java:5)
  Suppressed: Resource$CloseFailException: Resource ID = 0
          at Resource.close(Resource.java:26)
          at Foo.bar(Foo.java:9)
          ... 1 more
 `],
				[/* text */ 't', `
 Note that the "... n more" notation is used on suppressed exceptions
 just as it is used on causes. Unlike causes, suppressed exceptions are
 indented beyond their "containing exceptions."

 `],
				[/* block */ 'b', `An exception can have both a cause and one or more suppressed
 exceptions:
 `],
				[/* code block */ 'c', ` Exception in thread "main" java.lang.Exception: Main block
  at Foo3.main(Foo3.java:7)
  Suppressed: Resource$CloseFailException: Resource ID = 2
          at Resource.close(Resource.java:26)
          at Foo3.main(Foo3.java:5)
  Suppressed: Resource$CloseFailException: Resource ID = 1
          at Resource.close(Resource.java:26)
          at Foo3.main(Foo3.java:5)
 Caused by: java.lang.Exception: I did it
  at Foo3.main(Foo3.java:8)
 `],
				[/* text */ 't', `
 Likewise, a suppressed exception can have a cause:
 `],
				[/* code block */ 'c', ` Exception in thread "main" java.lang.Exception: Main block
  at Foo4.main(Foo4.java:6)
  Suppressed: Resource2$CloseFailException: Resource ID = 1
          at Resource2.close(Resource2.java:20)
          at Foo4.main(Foo4.java:5)
  Caused by: java.lang.Exception: Rats, you caught me
          at Resource2$CloseFailException.<init>(Resource2.java:45)
          ... 2 more
 `],
				[/* block */ 'b', '']
			],
			/* parameters */,
			/* throws */,
			/* return */ UDF
		]],
		[/* method */ 'printStackTrace(java.io.PrintStream)', [
			[/* method description */
				[/* text */ 't', `Prints this throwable and its backtrace to the specified print stream.`]
			],
			[/* parameters */
				[/* parameter */ 's', [/* parameter description */
					[/* text */ 't', ``],
					[/* inline code block */ 'i', `PrintStream`],
					[/* text */ 't', ` to use for output`]
				]]
			],
			/* throws */,
			/* return */ UDF
		]],
		[/* method */ 'printStackTrace(java.io.PrintWriter)', [
			[/* method description */
				[/* text */ 't', `Prints this throwable and its backtrace to the specified
 print writer.`]
			],
			[/* parameters */
				[/* parameter */ 's', [/* parameter description */
					[/* text */ 't', ``],
					[/* inline code block */ 'i', `PrintWriter`],
					[/* text */ 't', ` to use for output`]
				]]
			],
			/* throws */,
			/* return */ UDF
		]],
		[/* method */ 'setStackTrace(java.lang.StackTraceElement[])', [
			[/* method description */
				[/* text */ 't', `Sets the stack trace elements that will be returned by
 `],
				[/* reference */ 'r', `#getStackTrace()`, `getStackTrace()`],
				[/* text */ 't', ` and printed by `],
				[/* reference */ 'r', `#printStackTrace()`, `printStackTrace()`],
				[/* text */ 't', `
 and related methods.

 This method, which is designed for use by RPC frameworks and other
 advanced systems, allows the client to override the default
 stack trace that is either generated by `],
				[/* reference */ 'r', `#fillInStackTrace()`, `fillInStackTrace()`],
				[/* text */ 't', `
 when a throwable is constructed or deserialized when a throwable is
 read from a serialization stream.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If the stack trace of this `],
					[/* inline code block */ 'i', `Throwable`],
					[/* text */ 't', ` `],
					[/* reference */ 'r', `#%3Cinit%3E(java.lang.String,java.lang.Throwable,boolean,boolean)`, `is not writable`],
					[/* text */ 't', `, calling this method has no effect other than
 validating its argument.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'stackTrace', [/* parameter description */
					[/* text */ 't', `the stack trace elements to be associated with
 this `],
					[/* inline code block */ 'i', `Throwable`],
					[/* text */ 't', `.  The specified array is copied by this
 call; changes in the specified array after the method invocation
 returns will have no affect on this `],
					[/* inline code block */ 'i', `Throwable`],
					[/* text */ 't', `'s stack
 trace.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `stackTrace`],
					[/* text */ 't', ` is
         `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` or if any of the elements of
         `],
					[/* inline code block */ 'i', `stackTrace`],
					[/* text */ 't', ` are `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			/* return */ UDF
		]]
	],
	/* enum values */ UDF
]);
