import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.lang.Object', [
	[/* class description */
		[/* text */ 't', `Class `],
		[/* inline code block */ 'i', `Object`],
		[/* text */ 't', ` is the root of the class hierarchy.
 Every class has `],
		[/* inline code block */ 'i', `Object`],
		[/* text */ 't', ` as a superclass. All objects,
 including arrays, implement the methods of this class.`]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new object.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'clone()', [
			[/* method description */
				[/* text */ 't', `Creates and returns a copy of this object.  The precise meaning
 of "copy" may depend on the class of the object. The general
 intent is that, for any object `],
				[/* inline code block */ 'i', `x`],
				[/* text */ 't', `, the expression:
 `],
				[/* block */ 'b', [
					[/* code block */ 'c', ` x.clone() != x`]
				]],
				[/* text */ 't', `
 will be true, and that the expression:
 `],
				[/* block */ 'b', [
					[/* code block */ 'c', ` x.clone().getClass() == x.getClass()`]
				]],
				[/* text */ 't', `
 will be `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', `, but these are not absolute requirements.
 While it is typically the case that:
 `],
				[/* block */ 'b', [
					[/* code block */ 'c', ` x.clone().equals(x)`]
				]],
				[/* text */ 't', `
 will be `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', `, this is not an absolute requirement.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 By convention, the returned object should be obtained by calling
 `],
					[/* inline code block */ 'i', `super.clone`],
					[/* text */ 't', `.  If a class and all of its superclasses (except
 `],
					[/* inline code block */ 'i', `Object`],
					[/* text */ 't', `) obey this convention, it will be the case that
 `],
					[/* inline code block */ 'i', `x.clone().getClass() == x.getClass()`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 By convention, the object returned by this method should be independent
 of this object (which is being cloned).  To achieve this independence,
 it may be necessary to modify one or more fields of the object returned
 by `],
					[/* inline code block */ 'i', `super.clone`],
					[/* text */ 't', ` before returning it.  Typically, this means
 copying any mutable objects that comprise the internal "deep structure"
 of the object being cloned and replacing the references to these
 objects with references to the copies.  If a class contains only
 primitive fields or references to immutable objects, then it is usually
 the case that no fields in the object returned by `],
					[/* inline code block */ 'i', `super.clone`],
					[/* text */ 't', `
 need to be modified.`]
				]]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.CloneNotSupportedException', [/* throw description */
					[/* text */ 't', `if the object's class does not
               support the `],
					[/* inline code block */ 'i', `Cloneable`],
					[/* text */ 't', ` interface. Subclasses
               that override the `],
					[/* inline code block */ 'i', `clone`],
					[/* text */ 't', ` method can also
               throw this exception to indicate that an instance cannot
               be cloned.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a clone of this instance.`]
			]
		]],
		[/* method */ 'finalize()', [
			[/* method description */
				[/* text */ 't', `Called by the garbage collector on an object when garbage collection
 determines that there are no more references to the object.
 A subclass overrides the `],
				[/* inline code block */ 'i', `finalize`],
				[/* text */ 't', ` method to dispose of
 system resources or to perform other cleanup.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The general contract of `],
					[/* inline code block */ 'i', `finalize`],
					[/* text */ 't', ` is that it is invoked
 if and when the Java virtual
 machine has determined that there is no longer any
 means by which this object can be accessed by any thread that has
 not yet died, except as a result of an action taken by the
 finalization of some other object or class which is ready to be
 finalized. The `],
					[/* inline code block */ 'i', `finalize`],
					[/* text */ 't', ` method may take any action, including
 making this object available again to other threads; the usual purpose
 of `],
					[/* inline code block */ 'i', `finalize`],
					[/* text */ 't', `, however, is to perform cleanup actions before
 the object is irrevocably discarded. For example, the finalize method
 for an object that represents an input/output connection might perform
 explicit I/O transactions to break the connection before the object is
 permanently discarded.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The `],
					[/* inline code block */ 'i', `finalize`],
					[/* text */ 't', ` method of class `],
					[/* inline code block */ 'i', `Object`],
					[/* text */ 't', ` performs no
 special action; it simply returns normally. Subclasses of
 `],
					[/* inline code block */ 'i', `Object`],
					[/* text */ 't', ` may override this definition.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The Java programming language does not guarantee which thread will
 invoke the `],
					[/* inline code block */ 'i', `finalize`],
					[/* text */ 't', ` method for any given object. It is
 guaranteed, however, that the thread that invokes finalize will not
 be holding any user-visible synchronization locks when finalize is
 invoked. If an uncaught exception is thrown by the finalize method,
 the exception is ignored and finalization of that object terminates.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 After the `],
					[/* inline code block */ 'i', `finalize`],
					[/* text */ 't', ` method has been invoked for an object, no
 further action is taken until the Java virtual machine has again
 determined that there is no longer any means by which this object can
 be accessed by any thread that has not yet died, including possible
 actions by other objects or classes which are ready to be finalized,
 at which point the object may be discarded.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The `],
					[/* inline code block */ 'i', `finalize`],
					[/* text */ 't', ` method is never invoked more than once by a Java
 virtual machine for any given object.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 Any exception thrown by the `],
					[/* inline code block */ 'i', `finalize`],
					[/* text */ 't', ` method causes
 the finalization of this object to be halted, but is otherwise
 ignored.`]
				]]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.Throwable', [/* throw description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `Exception`],
					[/* text */ 't', ` raised by this method`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'equals(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Indicates whether some other object is "equal to" this one.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The `],
					[/* inline code block */ 'i', `equals`],
					[/* text */ 't', ` method implements an equivalence relation
 on non-null object references:
 `]
				]],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `It is `],
						[/* text */ 't', `reflexive`],
						[/* text */ 't', `: for any non-null reference value
     `],
						[/* inline code block */ 'i', `x`],
						[/* text */ 't', `, `],
						[/* inline code block */ 'i', `x.equals(x)`],
						[/* text */ 't', ` should return
     `],
						[/* inline code block */ 'i', `true`],
						[/* text */ 't', `.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `It is `],
						[/* text */ 't', `symmetric`],
						[/* text */ 't', `: for any non-null reference values
     `],
						[/* inline code block */ 'i', `x`],
						[/* text */ 't', ` and `],
						[/* inline code block */ 'i', `y`],
						[/* text */ 't', `, `],
						[/* inline code block */ 'i', `x.equals(y)`],
						[/* text */ 't', `
     should return `],
						[/* inline code block */ 'i', `true`],
						[/* text */ 't', ` if and only if
     `],
						[/* inline code block */ 'i', `y.equals(x)`],
						[/* text */ 't', ` returns `],
						[/* inline code block */ 'i', `true`],
						[/* text */ 't', `.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `It is `],
						[/* text */ 't', `transitive`],
						[/* text */ 't', `: for any non-null reference values
     `],
						[/* inline code block */ 'i', `x`],
						[/* text */ 't', `, `],
						[/* inline code block */ 'i', `y`],
						[/* text */ 't', `, and `],
						[/* inline code block */ 'i', `z`],
						[/* text */ 't', `, if
     `],
						[/* inline code block */ 'i', `x.equals(y)`],
						[/* text */ 't', ` returns `],
						[/* inline code block */ 'i', `true`],
						[/* text */ 't', ` and
     `],
						[/* inline code block */ 'i', `y.equals(z)`],
						[/* text */ 't', ` returns `],
						[/* inline code block */ 'i', `true`],
						[/* text */ 't', `, then
     `],
						[/* inline code block */ 'i', `x.equals(z)`],
						[/* text */ 't', ` should return `],
						[/* inline code block */ 'i', `true`],
						[/* text */ 't', `.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `It is `],
						[/* text */ 't', `consistent`],
						[/* text */ 't', `: for any non-null reference values
     `],
						[/* inline code block */ 'i', `x`],
						[/* text */ 't', ` and `],
						[/* inline code block */ 'i', `y`],
						[/* text */ 't', `, multiple invocations of
     `],
						[/* inline code block */ 'i', `x.equals(y)`],
						[/* text */ 't', ` consistently return `],
						[/* inline code block */ 'i', `true`],
						[/* text */ 't', `
     or consistently return `],
						[/* inline code block */ 'i', `false`],
						[/* text */ 't', `, provided no
     information used in `],
						[/* inline code block */ 'i', `equals`],
						[/* text */ 't', ` comparisons on the
     objects is modified.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `For any non-null reference value `],
						[/* inline code block */ 'i', `x`],
						[/* text */ 't', `,
     `],
						[/* inline code block */ 'i', `x.equals(null)`],
						[/* text */ 't', ` should return `],
						[/* inline code block */ 'i', `false`],
						[/* text */ 't', `.
 `]
					]]
				]],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `
 An equivalence relation partitions the elements it operates on
 into `],
					[/* text */ 't', `equivalence classes`],
					[/* text */ 't', `; all the members of an
 equivalence class are equal to each other. Members of an
 equivalence class are substitutable for each other, at least
 for some purposes.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `the reference object with which to compare.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this object is the same as the obj
          argument; `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'getClass()', [
			[/* method description */
				[/* text */ 't', `Returns the runtime class of this `],
				[/* inline code block */ 'i', `Object`],
				[/* text */ 't', `. The returned
 `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` object is the object that is locked by `],
				[/* inline code block */ 'i', `static synchronized`],
				[/* text */ 't', ` methods of the represented class.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The actual result type is `],
					[/* inline code block */ 'i', `Class<? extends |X|>`],
					[/* text */ 't', `
 where `],
					[/* inline code block */ 'i', `|X|`],
					[/* text */ 't', ` is the erasure of the static type of the
 expression on which `],
					[/* inline code block */ 'i', `getClass`],
					[/* text */ 't', ` is called.`]
				]],
				[/* block */ 'b', [
					[/* inline code block */ 'i', `Number n = 0;`],
					[/* new line */ 'n'],
					[/* inline code block */ 'i', `Class<? extends Number> c = n.getClass();`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` object that represents the runtime
         class of this object.`]
			]
		]],
		[/* method */ 'notify()', [
			[/* method description */
				[/* text */ 't', `Wakes up a single thread that is waiting on this object's
 monitor. If any threads are waiting on this object, one of them
 is chosen to be awakened. The choice is arbitrary and occurs at
 the discretion of the implementation. A thread waits on an object's
 monitor by calling one of the `],
				[/* inline code block */ 'i', `wait`],
				[/* text */ 't', ` methods.
 `],
				[/* block */ 'b', `
 The awakened thread will not be able to proceed until the current
 thread relinquishes the lock on this object. The awakened thread will
 compete in the usual manner with any other threads that might be
 actively competing to synchronize on this object; for example, the
 awakened thread enjoys no reliable privilege or disadvantage in being
 the next thread to lock this object.
 `],
				[/* block */ 'b', `
 This method should only be called by a thread that is the owner
 of this object's monitor. A thread becomes the owner of the
 object's monitor in one of three ways:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', `By executing a synchronized instance method of that object.
 `],
					[/* block */ 'b', [
						[/* text */ 't', `By executing the body of a `],
						[/* inline code block */ 'i', `synchronized`],
						[/* text */ 't', ` statement
     that synchronizes on the object.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `For objects of type `],
						[/* inline code block */ 'i', `Class,`],
						[/* text */ 't', ` by executing a
     synchronized static method of that class.
 `]
					]]
				]],
				[/* block */ 'b', ''],
				[/* block */ 'b', `
 Only one thread at a time can own an object's monitor.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.IllegalMonitorStateException', [/* throw description */
					[/* text */ 't', `if the current thread is not
               the owner of this object's monitor.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'notifyAll()', [
			[/* method description */
				[/* text */ 't', `Wakes up all threads that are waiting on this object's monitor. A
 thread waits on an object's monitor by calling one of the
 `],
				[/* inline code block */ 'i', `wait`],
				[/* text */ 't', ` methods.
 `],
				[/* block */ 'b', `
 The awakened threads will not be able to proceed until the current
 thread relinquishes the lock on this object. The awakened threads
 will compete in the usual manner with any other threads that might
 be actively competing to synchronize on this object; for example,
 the awakened threads enjoy no reliable privilege or disadvantage in
 being the next thread to lock this object.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method should only be called by a thread that is the owner
 of this object's monitor. See the `],
					[/* inline code block */ 'i', `notify`],
					[/* text */ 't', ` method for a
 description of the ways in which a thread can become the owner of
 a monitor.`]
				]]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.IllegalMonitorStateException', [/* throw description */
					[/* text */ 't', `if the current thread is not
               the owner of this object's monitor.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'wait(long)', [
			[/* method description */
				[/* text */ 't', `Causes the current thread to wait until it is awakened, typically
 by being `],
				[/* text */ 't', `notified`],
				[/* text */ 't', ` or `],
				[/* text */ 't', `interrupted`],
				[/* text */ 't', `, or until a
 certain amount of real time has elapsed.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 In all respects, this method behaves as if `],
					[/* inline code block */ 'i', `wait(timeoutMillis, 0)`],
					[/* text */ 't', `
 had been called. See the specification of the `],
					[/* reference */ 'r', `#wait(long,int)`, `wait(long, int)`],
					[/* text */ 't', ` method
 for details.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'timeoutMillis', [/* parameter description */
					[/* text */ 't', `the maximum time to wait, in milliseconds`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `timeoutMillis`],
					[/* text */ 't', ` is negative`]
				]],
				[/* throw */ 'java.lang.IllegalMonitorStateException', [/* throw description */
					[/* text */ 't', `if the current thread is not
         the owner of the object's monitor`]
				]],
				[/* throw */ 'java.lang.InterruptedException', [/* throw description */
					[/* text */ 't', `if any thread interrupted the current thread before or
         while the current thread was waiting. The `],
					[/* text */ 't', `interrupted status`],
					[/* text */ 't', ` of the
         current thread is cleared when this exception is thrown.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'wait()', [
			[/* method description */
				[/* text */ 't', `Causes the current thread to wait until it is awakened, typically
 by being `],
				[/* text */ 't', `notified`],
				[/* text */ 't', ` or `],
				[/* text */ 't', `interrupted`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 In all respects, this method behaves as if `],
					[/* inline code block */ 'i', `wait(0L, 0)`],
					[/* text */ 't', `
 had been called. See the specification of the `],
					[/* reference */ 'r', `#wait(long,int)`, `wait(long, int)`],
					[/* text */ 't', ` method
 for details.`]
				]]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.IllegalMonitorStateException', [/* throw description */
					[/* text */ 't', `if the current thread is not
         the owner of the object's monitor`]
				]],
				[/* throw */ 'java.lang.InterruptedException', [/* throw description */
					[/* text */ 't', `if any thread interrupted the current thread before or
         while the current thread was waiting. The `],
					[/* text */ 't', `interrupted status`],
					[/* text */ 't', ` of the
         current thread is cleared when this exception is thrown.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'wait(long,int)', [
			[/* method description */
				[/* text */ 't', `Causes the current thread to wait until it is awakened, typically
 by being `],
				[/* text */ 't', `notified`],
				[/* text */ 't', ` or `],
				[/* text */ 't', `interrupted`],
				[/* text */ 't', `, or until a
 certain amount of real time has elapsed.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The current thread must own this object's monitor lock. See the
 `],
					[/* reference */ 'r', `#notify()`, `notify`],
					[/* text */ 't', ` method for a description of the ways in which
 a thread can become the owner of a monitor lock.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method causes the current thread (referred to here as `],
					[/* inline code block */ 'i', `T`],
					[/* text */ 't', `) to
 place itself in the wait set for this object and then to relinquish any
 and all synchronization claims on this object. Note that only the locks
 on this object are relinquished; any other objects on which the current
 thread may be synchronized remain locked while the thread waits.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 Thread `],
					[/* inline code block */ 'i', `T`],
					[/* text */ 't', ` then becomes disabled for thread scheduling purposes
 and lies dormant until one of the following occurs:
 `]
				]],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `Some other thread invokes the `],
						[/* inline code block */ 'i', `notify`],
						[/* text */ 't', ` method for this
 object and thread `],
						[/* inline code block */ 'i', `T`],
						[/* text */ 't', ` happens to be arbitrarily chosen as
 the thread to be awakened.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `Some other thread invokes the `],
						[/* inline code block */ 'i', `notifyAll`],
						[/* text */ 't', ` method for this
 object.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `Some other thread `],
						[/* reference */ 'r', `java.lang.Thread#interrupt()`, `interrupts`],
						[/* text */ 't', `
 thread `],
						[/* inline code block */ 'i', `T`],
						[/* text */ 't', `.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `The specified amount of real time has elapsed, more or less.
 The amount of real time, in nanoseconds, is given by the expression
 `],
						[/* inline code block */ 'i', `1000000 * timeoutMillis + nanos`],
						[/* text */ 't', `. If `],
						[/* inline code block */ 'i', `timeoutMillis`],
						[/* text */ 't', ` and `],
						[/* inline code block */ 'i', `nanos`],
						[/* text */ 't', `
 are both zero, then real time is not taken into consideration and the
 thread waits until awakened by one of the other causes.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `Thread `],
						[/* inline code block */ 'i', `T`],
						[/* text */ 't', ` is awakened spuriously. (See below.)
 `]
					]]
				]],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `
 The thread `],
					[/* inline code block */ 'i', `T`],
					[/* text */ 't', ` is then removed from the wait set for this
 object and re-enabled for thread scheduling. It competes in the
 usual manner with other threads for the right to synchronize on the
 object; once it has regained control of the object, all its
 synchronization claims on the object are restored to the status quo
 ante - that is, to the situation as of the time that the `],
					[/* inline code block */ 'i', `wait`],
					[/* text */ 't', `
 method was invoked. Thread `],
					[/* inline code block */ 'i', `T`],
					[/* text */ 't', ` then returns from the
 invocation of the `],
					[/* inline code block */ 'i', `wait`],
					[/* text */ 't', ` method. Thus, on return from the
 `],
					[/* inline code block */ 'i', `wait`],
					[/* text */ 't', ` method, the synchronization state of the object and of
 thread `],
					[/* inline code block */ 'i', `T`],
					[/* text */ 't', ` is exactly as it was when the `],
					[/* inline code block */ 'i', `wait`],
					[/* text */ 't', ` method
 was invoked.
 `]
				]],
				[/* block */ 'b', `spurious wakeup`],
				[/* block */ 'b', [
					[/* text */ 't', `
 For more information on this topic, see section 14.2,
 "Condition Queues," in Brian Goetz and others' `],
					[/* text */ 't', `Java Concurrency
 in Practice`],
					[/* text */ 't', ` (Addison-Wesley, 2006) or Item 69 in Joshua
 Bloch's `],
					[/* text */ 't', `Effective Java, Second Edition`],
					[/* text */ 't', ` (Addison-Wesley,
 2008).
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the current thread is `],
					[/* reference */ 'r', `java.lang.Thread#interrupt()`, `interrupted`],
					[/* text */ 't', `
 by any thread before or while it is waiting, then an `],
					[/* inline code block */ 'i', `InterruptedException`],
					[/* text */ 't', `
 is thrown.  The `],
					[/* text */ 't', `interrupted status`],
					[/* text */ 't', ` of the current thread is cleared when
 this exception is thrown. This exception is not thrown until the lock status of
 this object has been restored as described above.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'timeoutMillis', [/* parameter description */
					[/* text */ 't', `the maximum time to wait, in milliseconds`]
				]],
				[/* parameter */ 'nanos', [/* parameter description */
					[/* text */ 't', `additional time, in nanoseconds, in the range 0-999999 inclusive`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `timeoutMillis`],
					[/* text */ 't', ` is negative,
         or if the value of `],
					[/* inline code block */ 'i', `nanos`],
					[/* text */ 't', ` is out of range`]
				]],
				[/* throw */ 'java.lang.IllegalMonitorStateException', [/* throw description */
					[/* text */ 't', `if the current thread is not
         the owner of the object's monitor`]
				]],
				[/* throw */ 'java.lang.InterruptedException', [/* throw description */
					[/* text */ 't', `if any thread interrupted the current thread before or
         while the current thread was waiting. The `],
					[/* text */ 't', `interrupted status`],
					[/* text */ 't', ` of the
         current thread is cleared when this exception is thrown.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Returns a string representation of the object.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a string representation of the object.`]
			]
		]],
		[/* method */ 'hashCode()', [
			[/* method description */
				[/* text */ 't', `Returns a hash code value for the object. This method is
 supported for the benefit of hash tables such as those provided by
 `],
				[/* reference */ 'r', `java.util.HashMap`, `HashMap`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The general contract of `],
					[/* inline code block */ 'i', `hashCode`],
					[/* text */ 't', ` is:
 `]
				]],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `Whenever it is invoked on the same object more than once during
     an execution of a Java application, the `],
						[/* inline code block */ 'i', `hashCode`],
						[/* text */ 't', ` method
     must consistently return the same integer, provided no information
     used in `],
						[/* inline code block */ 'i', `equals`],
						[/* text */ 't', ` comparisons on the object is modified.
     This integer need not remain consistent from one execution of an
     application to another execution of the same application.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `If two objects are equal according to the `],
						[/* reference */ 'r', `#equals(java.lang.Object)`, `equals`],
						[/* text */ 't', ` method, then calling the `],
						[/* inline code block */ 'i', `hashCode`],
						[/* text */ 't', ` method on each of the two objects must produce the
     same integer result.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `It is `],
						[/* text */ 't', `not`],
						[/* text */ 't', ` required that if two objects are unequal
     according to the `],
						[/* reference */ 'r', `#equals(java.lang.Object)`, `equals`],
						[/* text */ 't', ` method, then
     calling the `],
						[/* inline code block */ 'i', `hashCode`],
						[/* text */ 't', ` method on each of the two objects
     must produce distinct integer results.  However, the programmer
     should be aware that producing distinct integer results for
     unequal objects may improve the performance of hash tables.
 `]
					]]
				]],
				[/* block */ 'b', '']
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a hash code value for this object.`]
			]
		]]
	],
]);
