import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.io.ObjectInputFilter', [
	[/* class description */
		[/* text */ 't', `Filter classes, array lengths, and graph metrics during deserialization.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `Warning: Deserialization of untrusted data is inherently dangerous
 and should be avoided. Untrusted data should be carefully validated according to the
 "Serialization and Deserialization" section of the
 `],
			[/* external link */ 'a', `https://docs.oracle.com/pls/topic/lookup?ctx=javase17&id=secure_coding_guidelines_javase`, `Secure Coding Guidelines for Java SE`],
			[/* text */ 't', `.
 `],
			[/* external link */ 'a', `https://docs.oracle.com/pls/topic/lookup?ctx=javase17&id=serialization_filter_guide`, `Serialization Filtering`],
			[/* text */ 't', ` describes best
 practices for defensive use of serial filters.
 `]
		]],
		[/* text */ 't', `

 `],
		[/* block */ 'b', `To protect against deserialization vulnerabilities, application developers
 need a clear description of the objects that can be deserialized
 by each component or library. For each context and use case, developers should
 construct and apply an appropriate filter.

 `],
		[/* block */ 'b', `Deserialization Filtering Factory and Filters`],
		[/* text */ 't', `
 The parts of deserialization filtering are the filters, composite filters, and filter factory.
 Each filter performs checks on classes and resource limits to determine the status as
 rejected, allowed, or undecided.
 Filters can be composed of other filters and merge or combine their results.
 The filter factory is responsible for establishing and updating the filter
 for each `],
		[/* reference */ 'r', `java.io.ObjectInputStream`, `ObjectInputStream`],
		[/* text */ 't', `.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `For simple cases, a static JVM-wide filter can be set for the entire application,
 without setting a filter factory.
 The JVM-wide filter can be set either with a system property on the command line or by
 calling `],
			[/* reference */ 'r', `java.io.ObjectInputFilter.Config#setSerialFilter(java.io.ObjectInputFilter)`, `Config.setSerialFilter`],
			[/* text */ 't', `.
 No custom filter factory needs to be specified, defaulting to the builtin filter factory.
 The builtin filter factory provides the `],
			[/* reference */ 'r', `java.io.ObjectInputFilter.Config#getSerialFilter()`, `static JVM-wide filter`],
			[/* text */ 't', `
 for each `],
			[/* reference */ 'r', `java.io.ObjectInputStream`, `ObjectInputStream`],
			[/* text */ 't', `.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `For example, a filter that allows example classes, allows classes in the
 `],
			[/* inline code block */ 'i', `java.base`],
			[/* text */ 't', ` module, and rejects all other classes can be set:

 `]
		]],
		[/* code block */ 'c', [
			[/* inline code block */ 'i', `As a command line property:
     % java -Djdk.serialFilter="example.*;java.base/*;!*" ...`]
		]],
		[/* text */ 't', `

 `],
		[/* code block */ 'c', [
			[/* inline code block */ 'i', `Or programmatically:
     var filter = ObjectInputFilter.Config.createFilter("example.*;java.base/*;!*")
     ObjectInputFilter.Config.setSerialFilter(filter);`]
		]],
		[/* text */ 't', `

 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `In an application with multiple execution contexts, the application can provide a
 `],
			[/* reference */ 'r', `java.io.ObjectInputFilter.Config#setSerialFilterFactory(java.util.function.BinaryOperator)`, `filter factory`],
			[/* text */ 't', ` to
 protect individual contexts by providing a custom filter for each. When the stream
 is constructed, the filter factory is called to identify the execution context from the available
 information, including the current thread-local state, hierarchy of callers, library, module,
 and class loader. At that point, the filter factory policy for creating or selecting filters
 can choose a specific filter or composition of filters based on the context.
 The JVM-wide deserialization filter factory ensures that a context-specific deserialization
 filter can be set on every `],
			[/* reference */ 'r', `java.io.ObjectInputStream`, `ObjectInputStream`],
			[/* text */ 't', ` and every object read from the
 stream can be checked.

 `]
		]],
		[/* block */ 'b', `Invoking the Filter Factory`],
		[/* text */ 't', `
 `],
		[/* block */ 'b', [
			[/* text */ 't', `The JVM-wide filter factory is a function invoked when each `],
			[/* reference */ 'r', `java.io.ObjectInputStream`, `ObjectInputStream`],
			[/* text */ 't', ` is
 `],
			[/* reference */ 'r', `java.io.ObjectInputStream#<init>()`, `constructed`],
			[/* text */ 't', ` and when the
 `],
			[/* reference */ 'r', `java.io.ObjectInputStream#setObjectInputFilter(java.io.ObjectInputFilter)`, `stream-specific filter is set`],
			[/* text */ 't', `.
 The parameters are the current filter and a requested filter and it
 returns the filter to be used for the stream. When invoked from the
 `],
			[/* reference */ 'r', `java.io.ObjectInputStream#<init>(java.io.InputStream)`, `ObjectInputStream constructors`],
			[/* text */ 't', `,
 the first parameter is `],
			[/* inline code block */ 'i', `null`],
			[/* text */ 't', ` and the second parameter is the
 `],
			[/* reference */ 'r', `java.io.ObjectInputFilter.Config#getSerialFilter()`, `static JVM-wide filter`],
			[/* text */ 't', `.
 When invoked from `],
			[/* reference */ 'r', `java.io.ObjectInputStream#setObjectInputFilter(java.io.ObjectInputFilter)`, `ObjectInputStream.setObjectInputFilter`],
			[/* text */ 't', `,
 the first parameter is the filter currently set on the stream (which was set in the constructor),
 and the second parameter is the filter given to `],
			[/* inline code block */ 'i', `ObjectInputStream.setObjectInputFilter`],
			[/* text */ 't', `.
 The current and new filter may each be `],
			[/* inline code block */ 'i', `null`],
			[/* text */ 't', ` and the factory may return `],
			[/* inline code block */ 'i', `null`],
			[/* text */ 't', `.
 Note that the filter factory implementation can also use any contextual information
 at its disposal, for example, extracted from the application thread context, or its call stack,
 to compose and combine a new filter. It is not restricted to only use its two parameters.

 `]
		]],
		[/* block */ 'b', `The active deserialization filter factory is either:
 `],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* text */ 't', `The application specific filter factory set via `],
				[/* reference */ 'r', `java.io.ObjectInputFilter.Config#setSerialFilterFactory(java.util.function.BinaryOperator)`, `ObjectInputFilter.Config.setSerialFilterFactory(BinaryOperator)`],
				[/* text */ 't', `
     or the system property `],
				[/* inline code block */ 'i', `jdk.serialFilterFactory`],
				[/* text */ 't', ` or
     the security property `],
				[/* inline code block */ 'i', `jdk.serialFilterFactory`],
				[/* text */ 't', `.
 `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `Otherwise, a builtin deserialization filter factory
     provides the `],
				[/* reference */ 'r', `java.io.ObjectInputFilter.Config#getSerialFilter()`, `static JVM-wide filter`],
				[/* text */ 't', ` when invoked from the
     `],
				[/* reference */ 'r', `java.io.ObjectInputStream#<init>(java.io.InputStream)`, `ObjectInputStream constructors`],
				[/* text */ 't', `
     and replaces the static filter when invoked from
     `],
				[/* reference */ 'r', `java.io.ObjectInputStream#setObjectInputFilter(java.io.ObjectInputFilter)`, `ObjectInputStream.setObjectInputFilter(ObjectInputFilter)`],
				[/* text */ 't', `.
     See `],
				[/* reference */ 'r', `java.io.ObjectInputFilter.Config#getSerialFilterFactory()`, `getSerialFilterFactory`],
				[/* text */ 't', `.
 `]
			]]
		]],
		[/* text */ 't', `

 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', `Filters`],
		[/* text */ 't', `
 Filters can be created from a `],
		[/* reference */ 'r', `java.io.ObjectInputFilter.Config#createFilter(java.lang.String)`, `pattern string`],
		[/* text */ 't', `,
 or based on a `],
		[/* reference */ 'r', `java.util.function.Predicate`, `predicate of a class`],
		[/* text */ 't', ` to
 `],
		[/* reference */ 'r', `#allowFilter(java.util.function.Predicate,java.io.ObjectInputFilter.Status)`, `allow`],
		[/* text */ 't', ` or
 `],
		[/* reference */ 'r', `#rejectFilter(java.util.function.Predicate,java.io.ObjectInputFilter.Status)`, `reject`],
		[/* text */ 't', ` classes.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `The filter's `],
			[/* reference */ 'r', `#checkInput(java.io.ObjectInputFilter.FilterInfo)`, `checkInput(FilterInfo)`],
			[/* text */ 't', ` method is invoked
 zero or more times while `],
			[/* reference */ 'r', `java.io.ObjectInputStream#readObject()`, `reading objects`],
			[/* text */ 't', `.
 The method is called to validate classes, the length of each array,
 the number of objects being read from the stream, the depth of the graph,
 and the total number of bytes read from the stream.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Composite filters combine or check the results of other filters.
 The `],
			[/* reference */ 'r', `#merge(java.io.ObjectInputFilter,java.io.ObjectInputFilter)`, `merge(filter, anotherFilter)`],
			[/* text */ 't', `
 filter combines the status value of two filters.
 The `],
			[/* reference */ 'r', `#rejectUndecidedClass(java.io.ObjectInputFilter)`, `rejectUndecidedClass(filter)`],
			[/* text */ 't', `
 checks the result of a filter for classes when the status is `],
			[/* inline code block */ 'i', `UNDECIDED`],
			[/* text */ 't', `.
 In many cases any class not `],
			[/* inline code block */ 'i', `ALLOWED`],
			[/* text */ 't', ` by the filter should be `],
			[/* inline code block */ 'i', `REJECTED`],
			[/* text */ 't', `.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 A deserialization filter determines whether the arguments are allowed or rejected and
 should return the appropriate status: `],
			[/* reference */ 'r', `java.io.ObjectInputFilter.Status#ALLOWED`, `ALLOWED`],
			[/* text */ 't', ` or `],
			[/* reference */ 'r', `java.io.ObjectInputFilter.Status#REJECTED`, `REJECTED`],
			[/* text */ 't', `.
 If the filter cannot determine the status it should return `],
			[/* reference */ 'r', `java.io.ObjectInputFilter.Status#UNDECIDED`, `UNDECIDED`],
			[/* text */ 't', `.
 Filters should be designed for the specific use case and expected types.
 A filter designed for a particular use may be passed a class outside
 of the scope of the filter. If the purpose of the filter is to reject classes
 then it can reject a candidate class that matches and report `],
			[/* inline code block */ 'i', `UNDECIDED`],
			[/* text */ 't', ` for others.
 A filter may be called with class equals `],
			[/* inline code block */ 'i', `null`],
			[/* text */ 't', `, `],
			[/* inline code block */ 'i', `arrayLength`],
			[/* text */ 't', ` equal -1,
 the depth, number of references, and stream size and return a status
 that reflects only one or only some of the values.
 This allows a filter to be specific about the choice it is reporting and
 to use other filters without forcing either allowed or rejected status.

 `]
		]],
		[/* block */ 'b', `Filter Model Examples`],
		[/* text */ 't', `
 For simple applications, a single predefined filter listing allowed or rejected
 classes may be sufficient to manage the risk of deserializing unexpected classes.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `For an application composed from multiple modules or libraries, the structure
 of the application can be used to identify the classes to be allowed or rejected
 by each `],
			[/* reference */ 'r', `java.io.ObjectInputStream`, `ObjectInputStream`],
			[/* text */ 't', ` in each context of the application.
 The deserialization filter factory is invoked when each stream is constructed and
 can examine the thread or program to determine a context-specific filter to be applied.
 Some possible examples:
 `]
		]],
		[/* list */ 'l', [
			[/* block */ 'b', `Thread-local state can hold the filter to be applied or composed
         with a stream-specific filter.
         Filters could be pushed and popped from a virtual stack of filters
         maintained by the application or libraries.
     `],
			[/* block */ 'b', `The filter factory can identify the caller of the deserialization method
         and use module or library context to select a filter or compose an appropriate
         context-specific filter.
         A mechanism could identify a callee with restricted or unrestricted
         access to serialized classes and choose a filter accordingly.
 `]
		]],
		[/* text */ 't', `

 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', `Example to filter every deserialization in a thread`],
		[/* text */ 't', `

 This class shows how an application provided filter factory can combine filters
 to check every deserialization operation that takes place in a thread.
 It defines a thread-local variable to hold the thread-specific filter, and constructs a filter factory
 that composes that filter with the static JVM-wide filter and the stream-specific filter.
 The `],
		[/* inline code block */ 'i', `doWithSerialFilter`],
		[/* text */ 't', ` method does the setup of the thread-specific filter
 and invokes the application provided `],
		[/* reference */ 'r', `java.lang.Runnable`, `Runnable`],
		[/* text */ 't', `.

 `],
		[/* code block */ 'c', [
			[/* inline code block */ 'i', `public static final class FilterInThread implements BinaryOperator<ObjectInputFilter> {

     private final ThreadLocal<ObjectInputFilter> filterThreadLocal = new ThreadLocal<>();

     // Construct a FilterInThread deserialization filter factory.
     public FilterInThread() {}

     // Returns a composite filter of the static JVM-wide filter, a thread-specific filter,
     // and the stream-specific filter.
     public ObjectInputFilter apply(ObjectInputFilter curr, ObjectInputFilter next) {
         if (curr == null) {
             // Called from the OIS constructor or perhaps OIS.setObjectInputFilter with no current filter
             var filter = filterThreadLocal.get();
             if (filter != null) {
                 // Wrap the filter to reject UNDECIDED results
                 filter = ObjectInputFilter.rejectUndecidedClass(filter);
             }
             if (next != null) {
                 // Merge the next filter with the thread filter, if any
                 // Initially this is the static JVM-wide filter passed from the OIS constructor
                 // Wrap the filter to reject UNDECIDED results
                 filter = ObjectInputFilter.merge(next, filter);
                 filter = ObjectInputFilter.rejectUndecidedClass(filter);
             }
             return filter;
         } else {
             // Called from OIS.setObjectInputFilter with a current filter and a stream-specific filter.
             // The curr filter already incorporates the thread filter and static JVM-wide filter
             // and rejection of undecided classes
             // If there is a stream-specific filter wrap it and a filter to recheck for undecided
             if (next != null) {
                 next = ObjectInputFilter.merge(next, curr);
                 next = ObjectInputFilter.rejectUndecidedClass(next);
                 return next;
             }
             return curr;
         }
     }

     // Applies the filter to the thread and invokes the runnable.
     public void doWithSerialFilter(ObjectInputFilter filter, Runnable runnable) {
         var prevFilter = filterThreadLocal.get();
         try {
             filterThreadLocal.set(filter);
             runnable.run();
         } finally {
             filterThreadLocal.set(prevFilter);
         }
     }
 }`]
		]],
		[/* text */ 't', `
 `],
		[/* block */ 'b', `Using the Filter Factory`],
		[/* text */ 't', `
 To use `],
		[/* inline code block */ 'i', `FilterInThread`],
		[/* text */ 't', ` utility create an instance and configure it as the
 JVM-wide filter factory.  The `],
		[/* inline code block */ 'i', `doWithSerialFilter`],
		[/* text */ 't', ` method is invoked with a
 filter allowing the example application and core classes:
 `],
		[/* code block */ 'c', [
			[/* inline code block */ 'i', `// Create a FilterInThread filter factory and set
        var filterInThread = new FilterInThread();
        ObjectInputFilter.Config.setSerialFilterFactory(filterInThread);

        // Create a filter to allow example.* classes and reject all others
        var filter = ObjectInputFilter.Config.createFilter("example.*;java.base/*;!*");
        filterInThread.doWithSerialFilter(filter, () -> {
              byte[] bytes = ...;
              var o = deserializeObject(bytes);
        });`]
		]],
		[/* text */ 't', `
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 Unless otherwise noted, passing a `],
			[/* inline code block */ 'i', `null`],
			[/* text */ 't', ` argument to a
 method in this interface and its nested classes will cause a
 `],
			[/* reference */ 'r', `java.lang.NullPointerException`, `NullPointerException`],
			[/* text */ 't', ` to be thrown.`]
		]]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'checkInput(java.io.ObjectInputFilter.FilterInfo)', [
			[/* method description */
				[/* text */ 't', `Check the class, array length, number of object references, depth,
 stream size, and other available filtering information.
 Implementations of this method check the contents of the object graph being created
 during deserialization. The filter returns `],
				[/* reference */ 'r', `java.io.ObjectInputFilter.Status#ALLOWED`, `Status.ALLOWED`],
				[/* text */ 't', `,
 `],
				[/* reference */ 'r', `java.io.ObjectInputFilter.Status#REJECTED`, `Status.REJECTED`],
				[/* text */ 't', `, or `],
				[/* reference */ 'r', `java.io.ObjectInputFilter.Status#UNDECIDED`, `Status.UNDECIDED`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `filterInfo.serialClass()`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `non-null`],
					[/* text */ 't', `, there is a class to be checked.
 If `],
					[/* inline code block */ 'i', `serialClass()`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `, there is no class and the info contains
 only metrics related to the depth of the graph being deserialized, the number of
 references, and the size of the stream read.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'filterInfo', [/* parameter description */
					[/* text */ 't', `provides information about the current object being deserialized,
             if any, and the status of the `],
					[/* reference */ 'r', `java.io.ObjectInputStream`, `ObjectInputStream`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* reference */ 'r', `java.io.ObjectInputFilter.Status#ALLOWED`, `Status.ALLOWED`],
				[/* text */ 't', ` if accepted,
          `],
				[/* reference */ 'r', `java.io.ObjectInputFilter.Status#REJECTED`, `Status.REJECTED`],
				[/* text */ 't', ` if rejected,
          `],
				[/* reference */ 'r', `java.io.ObjectInputFilter.Status#UNDECIDED`, `Status.UNDECIDED`],
				[/* text */ 't', ` if undecided.`]
			]
		]],
		[/* method */ 'allowFilter(java.util.function.Predicate,java.io.ObjectInputFilter.Status)', [
			[/* method description */
				[/* text */ 't', `Returns a filter that returns `],
				[/* inline code block */ 'i', `Status.ALLOWED`],
				[/* text */ 't', ` if the predicate
 on the class is `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', `.
 The filter returns `],
				[/* inline code block */ 'i', `ALLOWED`],
				[/* text */ 't', ` or the `],
				[/* inline code block */ 'i', `otherStatus`],
				[/* text */ 't', ` based on the predicate
 of the `],
				[/* inline code block */ 'i', `non-null`],
				[/* text */ 't', ` class and `],
				[/* inline code block */ 'i', `UNDECIDED`],
				[/* text */ 't', ` if the class is `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `When the filter's `],
					[/* reference */ 'r', `#checkInput(java.io.ObjectInputFilter.FilterInfo)`, `checkInput(info)`],
					[/* text */ 't', ` method is invoked,
 the predicate is applied to the `],
					[/* reference */ 'r', `java.io.ObjectInputFilter.FilterInfo#serialClass()`, `info.serialClass()`],
					[/* text */ 't', `,
 the return Status is:
 `]
				]],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* reference */ 'r', `java.io.ObjectInputFilter.Status#UNDECIDED`, `UNDECIDED`],
						[/* text */ 't', `, if the `],
						[/* inline code block */ 'i', `serialClass`],
						[/* text */ 't', ` is `],
						[/* inline code block */ 'i', `null`],
						[/* text */ 't', `,`]
					]],
					[/* block */ 'b', [
						[/* reference */ 'r', `java.io.ObjectInputFilter.Status#ALLOWED`, `ALLOWED`],
						[/* text */ 't', `, if the predicate on the class returns `],
						[/* inline code block */ 'i', `true`],
						[/* text */ 't', `,`]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `Otherwise, return `],
						[/* inline code block */ 'i', `otherStatus`],
						[/* text */ 't', `.`]
					]]
				]],
				[/* text */ 't', `
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', `
 Example, to create a filter that will allow any class loaded from the platform
 or bootstrap classloaders.
 `],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `ObjectInputFilter f
         = allowFilter(cl -> cl.getClassLoader() == ClassLoader.getPlatformClassLoader() ||
                       cl.getClassLoader() == null, Status.UNDECIDED);`]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'predicate', [/* parameter description */
					[/* text */ 't', `a predicate to test a non-null Class`]
				]],
				[/* parameter */ 'otherStatus', [/* parameter description */
					[/* text */ 't', `a Status to use if the predicate is `],
					[/* inline code block */ 'i', `false`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a filter that returns `],
				[/* inline code block */ 'i', `ALLOWED`],
				[/* text */ 't', ` if the predicate
          on the class is `],
				[/* inline code block */ 'i', `true`]
			]
		]],
		[/* method */ 'merge(java.io.ObjectInputFilter,java.io.ObjectInputFilter)', [
			[/* method description */
				[/* text */ 't', `Returns a filter that merges the status of a filter and another filter.
 If `],
				[/* inline code block */ 'i', `another`],
				[/* text */ 't', ` filter is `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `, the `],
				[/* inline code block */ 'i', `filter`],
				[/* text */ 't', ` is returned.
 Otherwise, a `],
				[/* inline code block */ 'i', `filter`],
				[/* text */ 't', ` is returned to merge the pair of `],
				[/* inline code block */ 'i', `non-null`],
				[/* text */ 't', ` filters.

 The filter returned implements the `],
				[/* reference */ 'r', `#checkInput(java.io.ObjectInputFilter.FilterInfo)`, `checkInput(FilterInfo)`],
				[/* text */ 't', ` method
 as follows:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `Invoke `],
						[/* inline code block */ 'i', `filter`],
						[/* text */ 't', ` on the `],
						[/* inline code block */ 'i', `FilterInfo`],
						[/* text */ 't', ` to get its `],
						[/* inline code block */ 'i', `status`],
						[/* text */ 't', `;
     `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `Return `],
						[/* inline code block */ 'i', `REJECTED`],
						[/* text */ 't', ` if the `],
						[/* inline code block */ 'i', `status`],
						[/* text */ 't', ` is `],
						[/* inline code block */ 'i', `REJECTED`],
						[/* text */ 't', `;
     `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `Invoke `],
						[/* inline code block */ 'i', `anotherFilter`],
						[/* text */ 't', ` to get the `],
						[/* inline code block */ 'i', `otherStatus`],
						[/* text */ 't', `;
     `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `Return `],
						[/* inline code block */ 'i', `REJECTED`],
						[/* text */ 't', ` if the `],
						[/* inline code block */ 'i', `otherStatus`],
						[/* text */ 't', ` is `],
						[/* inline code block */ 'i', `REJECTED`],
						[/* text */ 't', `;
     `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `Return `],
						[/* inline code block */ 'i', `ALLOWED`],
						[/* text */ 't', `, if either `],
						[/* inline code block */ 'i', `status`],
						[/* text */ 't', ` or `],
						[/* inline code block */ 'i', `otherStatus`],
						[/* text */ 't', `
          is `],
						[/* inline code block */ 'i', `ALLOWED`],
						[/* text */ 't', `, `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `Otherwise, return `],
						[/* inline code block */ 'i', `UNDECIDED`]
					]]
				]]
			],
			[/* parameters */
				[/* parameter */ 'filter', [/* parameter description */
					[/* text */ 't', `a filter`]
				]],
				[/* parameter */ 'anotherFilter', [/* parameter description */
					[/* text */ 't', `a filter to be merged with the filter, may be `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an `],
				[/* reference */ 'r', `java.io.ObjectInputFilter`, `ObjectInputFilter`],
				[/* text */ 't', ` that merges the status of the filter and another filter`]
			]
		]],
		[/* method */ 'rejectFilter(java.util.function.Predicate,java.io.ObjectInputFilter.Status)', [
			[/* method description */
				[/* text */ 't', `Returns a filter that returns `],
				[/* inline code block */ 'i', `Status.REJECTED`],
				[/* text */ 't', ` if the predicate
 on the class is `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', `.
 The filter returns `],
				[/* inline code block */ 'i', `REJECTED`],
				[/* text */ 't', ` or the `],
				[/* inline code block */ 'i', `otherStatus`],
				[/* text */ 't', ` based on the predicate
 of the `],
				[/* inline code block */ 'i', `non-null`],
				[/* text */ 't', ` class and `],
				[/* inline code block */ 'i', `UNDECIDED`],
				[/* text */ 't', ` if the class is `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `.

 When the filter's `],
				[/* reference */ 'r', `#checkInput(java.io.ObjectInputFilter.FilterInfo)`, `checkInput(info)`],
				[/* text */ 't', ` method is invoked,
 the predicate is applied to the `],
				[/* reference */ 'r', `java.io.ObjectInputFilter.FilterInfo#serialClass()`, `serialClass()`],
				[/* text */ 't', `,
 the return Status is:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* reference */ 'r', `java.io.ObjectInputFilter.Status#UNDECIDED`, `UNDECIDED`],
						[/* text */ 't', `, if the `],
						[/* inline code block */ 'i', `serialClass`],
						[/* text */ 't', ` is `],
						[/* inline code block */ 'i', `null`],
						[/* text */ 't', `,`]
					]],
					[/* block */ 'b', [
						[/* reference */ 'r', `java.io.ObjectInputFilter.Status#REJECTED`, `REJECTED`],
						[/* text */ 't', `, if the predicate on the class returns `],
						[/* inline code block */ 'i', `true`],
						[/* text */ 't', `,`]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `Otherwise, return `],
						[/* inline code block */ 'i', `otherStatus`],
						[/* text */ 't', `.`]
					]]
				]],
				[/* text */ 't', `
 `],
				[/* block */ 'b', `
 Example, to create a filter that will reject any class loaded from the application classloader.
 `],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `ObjectInputFilter f = rejectFilter(cl ->
          cl.getClassLoader() == ClassLoader.ClassLoader.getSystemClassLoader(), Status.UNDECIDED);`]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'predicate', [/* parameter description */
					[/* text */ 't', `a predicate to test a non-null Class`]
				]],
				[/* parameter */ 'otherStatus', [/* parameter description */
					[/* text */ 't', `a Status to use if the predicate is `],
					[/* inline code block */ 'i', `false`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `returns a filter that returns `],
				[/* inline code block */ 'i', `REJECTED`],
				[/* text */ 't', ` if the predicate
          on the class is `],
				[/* inline code block */ 'i', `true`]
			]
		]],
		[/* method */ 'rejectUndecidedClass(java.io.ObjectInputFilter)', [
			[/* method description */
				[/* text */ 't', `Returns a filter that invokes a given filter and maps `],
				[/* inline code block */ 'i', `UNDECIDED`],
				[/* text */ 't', ` to `],
				[/* inline code block */ 'i', `REJECTED`],
				[/* text */ 't', `
 for classes, with some special cases, and otherwise returns the status.
 If the class is not a primitive class and not an array, the status returned is `],
				[/* inline code block */ 'i', `REJECTED`],
				[/* text */ 't', `.
 If the class is a primitive class or an array class additional checks are performed;
 see the list below for details.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Object deserialization accepts a class if the filter returns `],
					[/* inline code block */ 'i', `UNDECIDED`],
					[/* text */ 't', `.
 Adding a filter to reject undecided results for classes that have not been
 either allowed or rejected can prevent classes from slipping through the filter.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'filter', [/* parameter description */
					[/* text */ 't', `a filter`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an `],
				[/* reference */ 'r', `java.io.ObjectInputFilter`, `ObjectInputFilter`],
				[/* text */ 't', ` that maps an `],
				[/* reference */ 'r', `java.io.ObjectInputFilter.Status#UNDECIDED`, `ObjectInputFilter.Status.UNDECIDED`],
				[/* text */ 't', `
      status to `],
				[/* reference */ 'r', `java.io.ObjectInputFilter.Status#REJECTED`, `ObjectInputFilter.Status.REJECTED`],
				[/* text */ 't', ` for classes, otherwise returns the
      filter status`]
			]
		]]
	],
]);
