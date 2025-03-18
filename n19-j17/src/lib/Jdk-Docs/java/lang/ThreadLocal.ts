import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.lang.ThreadLocal', [
	[/* class description */
		[/* text */ 't', `This class provides thread-local variables.  These variables differ from
 their normal counterparts in that each thread that accesses one (via its
 `],
		[/* inline code block */ 'i', `get`],
		[/* text */ 't', ` or `],
		[/* inline code block */ 'i', `set`],
		[/* text */ 't', ` method) has its own, independently initialized
 copy of the variable.  `],
		[/* inline code block */ 'i', `ThreadLocal`],
		[/* text */ 't', ` instances are typically private
 static fields in classes that wish to associate state with a thread (e.g.,
 a user ID or Transaction ID).

 `],
		[/* block */ 'b', [
			[/* text */ 't', `For example, the class below generates unique identifiers local to each
 thread.
 A thread's id is assigned the first time it invokes `],
			[/* inline code block */ 'i', `ThreadId.get()`],
			[/* text */ 't', `
 and remains unchanged on subsequent calls.
 `]
		]],
		[/* code block */ 'c', ` import java.util.concurrent.atomic.AtomicInteger;

 public class ThreadId {
     // Atomic integer containing the next thread ID to be assigned
     private static final AtomicInteger nextId = new AtomicInteger(0);

     // Thread local variable containing each thread's ID
     private static final ThreadLocal<Integer> threadId =
         new ThreadLocal<Integer>() {
             @Override protected Integer initialValue() {
                 return nextId.getAndIncrement();
         }
     };

     // Returns the current thread's unique ID, assigning it if necessary
     public static int get() {
         return threadId.get();
     }
 }
 `],
		[/* text */ 't', `
 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `Each thread holds an implicit reference to its copy of a thread-local
 variable as long as the thread is alive and the `],
			[/* inline code block */ 'i', `ThreadLocal`],
			[/* text */ 't', `
 instance is accessible; after a thread goes away, all of its copies of
 thread-local instances are subject to garbage collection (unless other
 references to these copies exist).`]
		]]
	],
	/* fields */,
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Creates a thread local variable.`]
			],
			/* parameters */,
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'initialValue()', [
			[/* method description */
				[/* text */ 't', `Returns the current thread's "initial value" for this
 thread-local variable.  This method will be invoked the first
 time a thread accesses the variable with the `],
				[/* reference */ 'r', `#get()`, `get()`],
				[/* text */ 't', `
 method, unless the thread previously invoked the `],
				[/* reference */ 'r', `#set(T)`, `set(T)`],
				[/* text */ 't', `
 method, in which case the `],
				[/* inline code block */ 'i', `initialValue`],
				[/* text */ 't', ` method will not
 be invoked for the thread.  Normally, this method is invoked at
 most once per thread, but it may be invoked again in case of
 subsequent invocations of `],
				[/* reference */ 'r', `#remove()`, `remove()`],
				[/* text */ 't', ` followed by `],
				[/* reference */ 'r', `#get()`, `get()`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This implementation simply returns `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `; if the
 programmer desires thread-local variables to have an initial
 value other than `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `ThreadLocal`],
					[/* text */ 't', ` must be
 subclassed, and this method overridden.  Typically, an
 anonymous inner class will be used.`]
				]]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the initial value for this thread-local`]
			]
		]],
		[/* method */ 'withInitial(java.util.function.Supplier)', [
			[/* method description */
				[/* text */ 't', `Creates a thread local variable. The initial value of the variable is
 determined by invoking the `],
				[/* inline code block */ 'i', `get`],
				[/* text */ 't', ` method on the `],
				[/* inline code block */ 'i', `Supplier`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'supplier', [/* parameter description */
					[/* text */ 't', `the supplier to be used to determine the initial value`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified supplier is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a new thread local variable`]
			]
		]],
		[/* method */ 'get()', [
			[/* method description */
				[/* text */ 't', `Returns the value in the current thread's copy of this
 thread-local variable.  If the variable has no value for the
 current thread, it is first initialized to the value returned
 by an invocation of the `],
				[/* reference */ 'r', `#initialValue()`, `initialValue()`],
				[/* text */ 't', ` method.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the current thread's value of this thread-local`]
			]
		]],
		[/* method */ 'remove()', [
			[/* method description */
				[/* text */ 't', `Removes the current thread's value for this thread-local
 variable.  If this thread-local variable is subsequently
 `],
				[/* reference */ 'r', `#get()`, `read`],
				[/* text */ 't', ` by the current thread, its value will be
 reinitialized by invoking its `],
				[/* reference */ 'r', `#initialValue()`, `initialValue()`],
				[/* text */ 't', ` method,
 unless its value is `],
				[/* reference */ 'r', `#set(T)`, `set`],
				[/* text */ 't', ` by the current thread
 in the interim.  This may result in multiple invocations of the
 `],
				[/* inline code block */ 'i', `initialValue`],
				[/* text */ 't', ` method in the current thread.`]
			],
			/* parameters */,
			/* throws */,
			/* return */ UDF
		]],
		[/* method */ 'set(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Sets the current thread's copy of this thread-local variable
 to the specified value.  Most subclasses will have no need to
 override this method, relying solely on the `],
				[/* reference */ 'r', `#initialValue()`, `initialValue()`],
				[/* text */ 't', `
 method to set the values of thread-locals.`]
			],
			[/* parameters */
				[/* parameter */ 'value', [/* parameter description */
					[/* text */ 't', `the value to be stored in the current thread's copy of
        this thread-local.`]
				]]
			],
			/* throws */,
			/* return */ UDF
		]]
	],
	/* enum values */ UDF
]);
