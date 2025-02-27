import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('groovy.lang.Closure', [
	[/* class description */
		[/* text */ 't', `Represents any closure object in Groovy.
 `],
		[/* block */ 'b', `
 Groovy allows instances of Closures to be called in a
 short form. For example:
 `],
		[/* code block */ 'c', ` def a = 1
 def c = { a }
 assert c() == 1
 `],
		[/* text */ 't', `
 To be able to use a Closure in this way with your own
 subclass, you need to provide a doCall method with any
 signature you want to. This ensures that
 `],
		[/* reference */ 'r', `getMaximumNumberOfParameters()`],
		[/* text */ 't', ` and
 `],
		[/* reference */ 'r', `getParameterTypes()`],
		[/* text */ 't', ` will work too without any
 additional code. If no doCall method is provided a
 closure must be used in its long form like
 `],
		[/* code block */ 'c', ` def a = 1
 def c = {a}
 assert c.call() == 1
 `]
	],
	/* class sees */ UDF,
	[/* fields */
		[/* field */ 'OWNER_FIRST', [
			[/* field description */
				[/* text */ 't', `With this resolveStrategy set the closure will attempt to resolve property references and methods to the
 owner first, then the delegate (`],
				[/* text */ 't', `this is the default strategy`],
				[/* text */ 't', `).

 For example the following code:
 `],
				[/* code block */ 'c', ` class Test {
     def x = 30
     def y = 40

     def run() {
         def data = [ x: 10, y: 20 ]
         def cl = { y = x + y }
         cl.delegate = data
         cl()
         assert x == 30
         assert y == 70
         assert data == [x:10, y:20]
     }
 }

 new Test().run()
 `],
				[/* text */ 't', `
 Will succeed, because the x and y fields declared in the Test class shadow the variables in the delegate.`],
				[/* block */ 'b', [
					[/* text */ 't', `Note that local variables are always looked up first, independently of the resolution strategy.`]
				]]
			],
		/* field sees */ UDF
		]],
		[/* field */ 'DELEGATE_FIRST', [
			[/* field description */
				[/* text */ 't', `With this resolveStrategy set the closure will attempt to resolve property references and methods to the
 delegate first then the owner.

 For example the following code:
 `],
				[/* code block */ 'c', ` class Test {
     def x = 30
     def y = 40

     def run() {
         def data = [ x: 10, y: 20 ]
         def cl = { y = x + y }
         cl.delegate = data
         cl.resolveStrategy = Closure.DELEGATE_FIRST
         cl()
         assert x == 30
         assert y == 40
         assert data == [x:10, y:30]
     }
 }

 new Test().run()
 `],
				[/* text */ 't', `
 This will succeed, because the x and y variables declared in the delegate shadow the fields in the owner class.`],
				[/* block */ 'b', [
					[/* text */ 't', `Note that local variables are always looked up first, independently of the resolution strategy.`]
				]]
			],
		/* field sees */ UDF
		]],
		[/* field */ 'OWNER_ONLY', [
			[/* field description */
				[/* text */ 't', `With this resolveStrategy set the closure will resolve property references and methods to the owner only
 and not call the delegate at all. For example the following code :

 `],
				[/* code block */ 'c', ` class Test {
     def x = 30
     def y = 40

     def run() {
         def data = [ x: 10, y: 20, z: 30 ]
         def cl = { y = x + y + z }
         cl.delegate = data
         cl.resolveStrategy = Closure.OWNER_ONLY
         cl()
         println x
         println y
         println data
     }
 }

 groovy.test.GroovyAssert.shouldFail(MissingPropertyException) {
     new Test().run()
 }
 `],
				[/* text */ 't', `

 will throw "No such property: z" error because even if the z variable is declared in the delegate, no
 lookup is made.`],
				[/* block */ 'b', [
					[/* text */ 't', `Note that local variables are always looked up first, independently of the resolution strategy.`]
				]]
			],
		/* field sees */ UDF
		]],
		[/* field */ 'DELEGATE_ONLY', [
			[/* field description */
				[/* text */ 't', `With this resolveStrategy set the closure will resolve property references and methods to the delegate
 only and entirely bypass the owner. For example the following code :

 `],
				[/* code block */ 'c', ` class Test {
     def x = 30
     def y = 40
     def z = 50

     def run() {
         def data = [ x: 10, y: 20 ]
         def cl = { y = x + y + z }
         cl.delegate = data
         cl.resolveStrategy = Closure.DELEGATE_ONLY
         cl()
         println x
         println y
         println data
     }
 }

 groovy.test.GroovyAssert.shouldFail {
     new Test().run()
 }
 `],
				[/* text */ 't', `

 will throw an error because even if the owner declares a "z" field, the resolution strategy will bypass
 lookup in the owner.`],
				[/* block */ 'b', [
					[/* text */ 't', `Note that local variables are always looked up first, independently of the resolution strategy.`]
				]]
			],
		/* field sees */ UDF
		]],
		[/* field */ 'TO_SELF', [
			[/* field description */
				[/* text */ 't', `With this resolveStrategy set the closure will resolve property references to itself and go
 through the usual MetaClass look-up process. This means that properties and methods are neither resolved
 from the owner nor the delegate, but only on the closure object itself. This allows the developer to
 override getProperty using ExpandoMetaClass of the closure itself.`],
				[/* block */ 'b', [
					[/* text */ 't', `Note that local variables are always looked up first, independently of the resolution strategy.`]
				]]
			],
		/* field sees */ UDF
		]],
		[/* field */ 'DONE', [
			/* field description */ UDF,
		/* field sees */ UDF
		]],
		[/* field */ 'SKIP', [
			/* field description */ UDF,
		/* field sees */ UDF
		]],
		[/* field */ 'IDENTITY', [
			/* field description */ UDF,
		/* field sees */ UDF
		]],
		[/* field */ 'parameterTypes', [
			/* field description */ UDF,
		/* field sees */ UDF
		]],
		[/* field */ 'maximumNumberOfParameters', [
			/* field description */ UDF,
		/* field sees */ UDF
		]]
	],
	[/* constructors */
		[/* constructor */ '<init>(java.lang.Object,java.lang.Object)', [
			/* constructor description */ UDF,
			/* constructor sees */ UDF,
			/* constructor parameters */ UDF,
			/* constructor throwns */ UDF
		]],
		[/* constructor */ '<init>(java.lang.Object)', [
			[/* constructor description */
				[/* text */ 't', `Constructor used when the "this" object for the Closure is null.
 This is rarely the case in normal Groovy usage.`]
			],
			/* constructor sees */ UDF,
			/* constructor parameters */ UDF,
			/* constructor throwns */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'run()', [
			/* method description */ UDF,
			/* method sees */ UDF,
			/* method parameters */ UDF,
			/* method throwns */ UDF,
			/* method return */ UDF
		]],
		[/* method */ 'clone()', [
			/* method description */ UDF,
			/* method sees */ UDF,
			/* method parameters */ UDF,
			/* method throwns */ UDF,
			/* method return */ UDF
		]],
		[/* method */ 'getParameterTypes()', [
			/* method description */ UDF,
			/* method sees */ UDF,
			/* method parameters */ UDF,
			/* method throwns */ UDF,
			/* method return */ UDF
		]],
		[/* method */ 'setDelegate(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Allows the delegate to be changed such as when performing markup building`]
			],
			/* method sees */ UDF,
			/* method parameters */ UDF,
			/* method throwns */ UDF,
			/* method return */ UDF
		]],
		[/* method */ 'getOwner()', [
			/* method description */ UDF,
			/* method sees */ UDF,
			/* method parameters */ UDF,
			/* method throwns */ UDF,
			/* method return */ UDF
		]],
		[/* method */ 'compose(groovy.lang.Closure)', [
			[/* method description */
				[/* text */ 't', `Alias for `],
				[/* reference */ 'r', `leftShift(Closure)`]
			],
			/* method sees */ UDF,
			/* method parameters */ UDF,
			/* method throwns */ UDF,
			/* method return */ UDF
		]],
		[/* method */ 'andThen(groovy.lang.Closure)', [
			[/* method description */
				[/* text */ 't', `Alias for `],
				[/* reference */ 'r', `rightShift(Closure)`]
			],
			/* method sees */ UDF,
			/* method parameters */ UDF,
			/* method throwns */ UDF,
			/* method return */ UDF
		]],
		[/* method */ 'leftShift(groovy.lang.Closure)', [
			[/* method description */
				[/* text */ 't', `Support for Closure reverse composition.
 `],
				[/* block */ 'b', `
 Typical usage:
 `],
				[/* code block */ 'c', [
					[/* text */ 't', ` def times2 = { a `],
					[/* inline code block */ 'i', `->`],
					[/* text */ 't', ` a * 2 }
 def add3 = { a `],
					[/* inline code block */ 'i', `->`],
					[/* text */ 't', ` a + 3 }
 def addThenTimes = times2 `],
					[/* inline code block */ 'i', `<<`],
					[/* text */ 't', ` add3
 // equivalent: addThenTimes = { a `],
					[/* inline code block */ 'i', `->`],
					[/* text */ 't', ` times2(add3(a)) }
 assert addThenTimes(3) == 12
 `]
				]]
			],
			/* method sees */ UDF,
			/* method parameters */ UDF,
			/* method throwns */ UDF,
			/* method return */ UDF
		]],
		[/* method */ 'leftShift(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Alias for calling a Closure for non-closure arguments.
 `],
				[/* block */ 'b', `
 Typical usage:
 `],
				[/* code block */ 'c', [
					[/* text */ 't', ` def times2 = { a `],
					[/* inline code block */ 'i', `->`],
					[/* text */ 't', ` a * 2 }
 def add3 = { a `],
					[/* inline code block */ 'i', `->`],
					[/* text */ 't', ` a + 3 }
 assert add3 `],
					[/* inline code block */ 'i', `<<`],
					[/* text */ 't', ` times2 `],
					[/* inline code block */ 'i', `<<`],
					[/* text */ 't', ` 3 == 9
 `]
				]]
			],
			/* method sees */ UDF,
			/* method parameters */ UDF,
			/* method throwns */ UDF,
			/* method return */ UDF
		]],
		[/* method */ 'call(java.lang.Object...)', [
			[/* method description */
				[/* text */ 't', `Invokes the closure with given argument(s), returning any value if applicable.`]
			],
			/* method sees */ UDF,
			/* method parameters */ UDF,
			/* method throwns */ UDF,
			/* method return */ UDF
		]],
		[/* method */ 'call(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Invokes the closure with given argument(s), returning any value if applicable.`]
			],
			/* method sees */ UDF,
			/* method parameters */ UDF,
			/* method throwns */ UDF,
			/* method return */ UDF
		]],
		[/* method */ 'call()', [
			[/* method description */
				[/* text */ 't', `Invokes the closure with no arguments, returning any value if applicable.`]
			],
			/* method sees */ UDF,
			/* method parameters */ UDF,
			/* method throwns */ UDF,
			/* method return */ UDF
		]],
		[/* method */ 'getDelegate()', [
			/* method description */ UDF,
			/* method sees */ UDF,
			/* method parameters */ UDF,
			/* method throwns */ UDF,
			/* method return */ UDF
		]],
		[/* method */ 'getDirective()', [
			/* method description */ UDF,
			/* method sees */ UDF,
			/* method parameters */ UDF,
			/* method throwns */ UDF,
			/* method return */ UDF
		]],
		[/* method */ 'getResolveStrategy()', [
			[/* method description */
				[/* text */ 't', `Gets the strategy which the closure uses to resolve methods and properties`]
			],
			/* method sees */ UDF,
			/* method parameters */ UDF,
			/* method throwns */ UDF,
			/* method return */ UDF
		]],
		[/* method */ 'getThisObject()', [
			/* method description */ UDF,
			/* method sees */ UDF,
			/* method parameters */ UDF,
			/* method throwns */ UDF,
			/* method return */ UDF
		]],
		[/* method */ 'setResolveStrategy(int)', [
			[/* method description */
				[/* text */ 't', `Sets the strategy which the closure uses to resolve property references and methods.
 The default is Closure.OWNER_FIRST`]
			],
			/* method sees */ UDF,
			/* method parameters */ UDF,
			/* method throwns */ UDF,
			/* method return */ UDF
		]],
		[/* method */ 'setDirective(int)', [
			/* method description */ UDF,
			/* method sees */ UDF,
			/* method parameters */ UDF,
			/* method throwns */ UDF,
			/* method return */ UDF
		]],
		[/* method */ 'andThenSelf()', [
			[/* method description */
				[/* text */ 't', `Call `],
				[/* reference */ 'r', `andThen(Closure)`],
				[/* text */ 't', ` on `],
				[/* inline code block */ 'i', `this`],
				[/* text */ 't', `.`]
			],
			/* method sees */ UDF,
			/* method parameters */ UDF,
			/* method throwns */ UDF,
			/* method return */ UDF
		]],
		[/* method */ 'andThenSelf(int)', [
			[/* method description */
				[/* text */ 't', `Call `],
				[/* reference */ 'r', `andThen(Closure)`],
				[/* text */ 't', ` on `],
				[/* inline code block */ 'i', `this`],
				[/* text */ 't', ` exactly `],
				[/* inline code block */ 'i', `times`],
				[/* text */ 't', ` times.`]
			],
			/* method sees */ UDF,
			/* method parameters */ UDF,
			/* method throwns */ UDF,
			/* method return */ UDF
		]],
		[/* method */ 'composeSelf()', [
			[/* method description */
				[/* text */ 't', `Call `],
				[/* reference */ 'r', `compose(Closure)`],
				[/* text */ 't', ` on `],
				[/* inline code block */ 'i', `this`],
				[/* text */ 't', `.`]
			],
			/* method sees */ UDF,
			/* method parameters */ UDF,
			/* method throwns */ UDF,
			/* method return */ UDF
		]],
		[/* method */ 'composeSelf(int)', [
			[/* method description */
				[/* text */ 't', `Call `],
				[/* reference */ 'r', `compose(Closure)`],
				[/* text */ 't', ` on `],
				[/* inline code block */ 'i', `this`],
				[/* text */ 't', ` exactly `],
				[/* inline code block */ 'i', `times`],
				[/* text */ 't', ` times.`]
			],
			/* method sees */ UDF,
			/* method parameters */ UDF,
			/* method throwns */ UDF,
			/* method return */ UDF
		]],
		[/* method */ 'memoizeAtMost(int)', [
			[/* method description */
				[/* text */ 't', `Creates a caching variant of the closure with upper limit on the cache size.
 Whenever the closure is called, the mapping between the parameters and the return value is preserved in cache
 making subsequent calls with the same arguments fast.
 This variant will keep all values until the upper size limit is reached. Then the values in the cache start rotating
 using the LRU (Last Recently Used) strategy.
 The returned function can be safely used concurrently from multiple threads, however, the implementation
 values high average-scenario performance and so concurrent calls on the memoized function with identical argument values
 may not necessarily be able to benefit from each other's cached return value. With this having been mentioned,
 the performance trade-off still makes concurrent use of memoized functions safe and highly recommended.

 The cache gets garbage-collected together with the memoized closure.`]
			],
			/* method sees */ UDF,
			/* method parameters */ UDF,
			/* method throwns */ UDF,
			/* method return */ UDF
		]],
		[/* method */ 'memoizeAtLeast(int)', [
			[/* method description */
				[/* text */ 't', `Creates a caching variant of the closure with automatic cache size adjustment and lower limit
 on the cache size.
 Whenever the closure is called, the mapping between the parameters and the return value is preserved in cache
 making subsequent calls with the same arguments fast.
 This variant allows the garbage collector to release entries from the cache and at the same time allows
 the user to specify how many entries should be protected from the eventual gc-initiated eviction.
 Cached entries exceeding the specified preservation threshold are made available for eviction based on
 the LRU (Last Recently Used) strategy.
 Given the non-deterministic nature of garbage collector, the actual cache size may grow well beyond the limits
 set by the user if memory is plentiful.
 The returned function can be safely used concurrently from multiple threads, however, the implementation
 values high average-scenario performance and so concurrent calls on the memoized function with identical argument values
 may not necessarily be able to benefit from each other's cached return value. Also the protectedCacheSize parameter
 might not be respected accurately in such scenarios for some periods of time. With this having been mentioned,
 the performance trade-off still makes concurrent use of memoized functions safe and highly recommended.

 The cache gets garbage-collected together with the memoized closure.`]
			],
			/* method sees */ UDF,
			/* method parameters */ UDF,
			/* method throwns */ UDF,
			/* method return */ UDF
		]],
		[/* method */ 'memoizeBetween(int,int)', [
			[/* method description */
				[/* text */ 't', `Creates a caching variant of the closure with automatic cache size adjustment and lower and upper limits
 on the cache size.
 Whenever the closure is called, the mapping between the parameters and the return value is preserved in cache
 making subsequent calls with the same arguments fast.
 This variant allows the garbage collector to release entries from the cache and at the same time allows
 the user to specify how many entries should be protected from the eventual gc-initiated eviction.
 Cached entries exceeding the specified preservation threshold are made available for eviction based on
 the LRU (Last Recently Used) strategy.
 Given the non-deterministic nature of garbage collector, the actual cache size may grow well beyond the protected
 size limits set by the user, if memory is plentiful.
 Also, this variant will never exceed in size the upper size limit. Once the upper size limit has been reached,
 the values in the cache start rotating using the LRU (Last Recently Used) strategy.
 The returned function can be safely used concurrently from multiple threads, however, the implementation
 values high average-scenario performance and so concurrent calls on the memoized function with identical argument values
 may not necessarily be able to benefit from each other's cached return value. Also the protectedCacheSize parameter
 might not be respected accurately in such scenarios for some periods of time. With this having been mentioned,
 the performance trade-off still makes concurrent use of memoized functions safe and highly recommended.

 The cache gets garbage-collected together with the memoized closure.`]
			],
			/* method sees */ UDF,
			/* method parameters */ UDF,
			/* method throwns */ UDF,
			/* method return */ UDF
		]],
		[/* method */ 'curry(java.lang.Object...)', [
			[/* method description */
				[/* text */ 't', `Support for Closure currying.
 `],
				[/* block */ 'b', `
 Typical usage:
 `],
				[/* code block */ 'c', [
					[/* text */ 't', ` def multiply = { a, b `],
					[/* inline code block */ 'i', `->`],
					[/* text */ 't', ` a * b }
 def doubler = multiply.curry(2)
 assert doubler(4) == 8
 `]
				]],
				[/* text */ 't', `
 Note: special treatment is given to Closure vararg-style capability.
 If you curry a vararg parameter, you don't consume the entire vararg array
 but instead the first parameter of the vararg array as the following example shows:
 `],
				[/* code block */ 'c', [
					[/* text */ 't', ` def a = { one, two, Object[] others `],
					[/* inline code block */ 'i', `->`],
					[/* text */ 't', ` one + two + others.sum() }
 assert a.parameterTypes.name == ['java.lang.Object', 'java.lang.Object', '[Ljava.lang.Object;']
 assert a(1,2,3,4) == 10
 def b = a.curry(1)
 assert b.parameterTypes.name == ['java.lang.Object', '[Ljava.lang.Object;']
 assert b(2,3,4) == 10
 def c = b.curry(2)
 assert c.parameterTypes.name == ['[Ljava.lang.Object;']
 assert c(3,4) == 10
 def d = c.curry(3)
 assert d.parameterTypes.name == ['[Ljava.lang.Object;']
 assert d(4) == 10
 def e = d.curry(4)
 assert e.parameterTypes.name == ['[Ljava.lang.Object;']
 assert e() == 10
 assert e(5) == 15
 `]
				]]
			],
			/* method sees */ UDF,
			/* method parameters */ UDF,
			/* method throwns */ UDF,
			/* method return */ UDF
		]],
		[/* method */ 'curry(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Support for Closure currying.`]
			],
			/* method sees */ UDF,
			/* method parameters */ UDF,
			/* method throwns */ UDF,
			/* method return */ UDF
		]],
		[/* method */ 'rcurry(java.lang.Object...)', [
			[/* method description */
				[/* text */ 't', `Support for Closure "right" currying.
 Parameters are supplied on the right rather than left as per the normal curry() method.
 Typical usage:
 `],
				[/* code block */ 'c', [
					[/* text */ 't', ` def divide = { a, b `],
					[/* inline code block */ 'i', `->`],
					[/* text */ 't', ` a / b }
 def halver = divide.rcurry(2)
 assert halver(8) == 4
 `]
				]],
				[/* text */ 't', `

 The position of the curried parameters will be calculated lazily, for example,
 if two overloaded doCall methods are available, the supplied arguments plus the
 curried arguments will be concatenated and the result used for method selection.`]
			],
			/* method sees */ UDF,
			/* method parameters */ UDF,
			/* method throwns */ UDF,
			/* method return */ UDF
		]],
		[/* method */ 'rcurry(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Support for Closure "right" currying.`]
			],
			/* method sees */ UDF,
			/* method parameters */ UDF,
			/* method throwns */ UDF,
			/* method return */ UDF
		]],
		[/* method */ 'ncurry(int,java.lang.Object...)', [
			[/* method description */
				[/* text */ 't', `Support for Closure currying at a given index.
 Parameters are supplied from index position "n".
 Typical usage:
 `],
				[/* code block */ 'c', [
					[/* text */ 't', ` def caseInsensitive = { a, b `],
					[/* inline code block */ 'i', `->`],
					[/* text */ 't', ` a.toLowerCase() `],
					[/* inline code block */ 'i', `<=>`],
					[/* text */ 't', ` b.toLowerCase() } as Comparator
 def caseSensitive = { a, b `],
					[/* inline code block */ 'i', `->`],
					[/* text */ 't', ` a `],
					[/* inline code block */ 'i', `<=>`],
					[/* text */ 't', ` b } as Comparator
 def animals1 = ['ant', 'dog', 'BEE']
 def animals2 = animals1 + ['Cat']
 // curry middle param of this utility method:
 // Collections#binarySearch(List list, Object key, Comparator c)
 `],
					[/* inline code block */ 'i', `def catSearcher = Collections.&binarySearch.ncurry(1, "cat")`],
					[/* text */ 't', `
 [[animals1, animals2], [caseInsensitive, caseSensitive]].combinations().each{ a, c `],
					[/* inline code block */ 'i', `->`],
					[/* text */ 't', `
   def idx = catSearcher(a.sort(c), c)
   print a.sort(c).toString().padRight(22)
   `],
					[/* inline code block */ 'i', `if (idx < 0) println "Not found but would belong in position \${-idx - 1}"`],
					[/* text */ 't', `
   else println "Found at index $idx"
 }
 // `],
					[/* inline code block */ 'i', `=>`],
					[/* text */ 't', `
 // [ant, BEE, dog]       Not found but would belong in position 2
 // [ant, BEE, Cat, dog]  Found at index 2
 // [BEE, ant, dog]       Not found but would belong in position 2
 // [BEE, Cat, ant, dog]  Not found but would belong in position 3
 `]
				]],
				[/* text */ 't', `

 The position of the curried parameters will be calculated eagerly
 and implies all arguments prior to the specified n index are supplied.
 Default parameter values prior to the n index will not be available.`]
			],
			/* method sees */ UDF,
			/* method parameters */ UDF,
			/* method throwns */ UDF,
			/* method return */ UDF
		]],
		[/* method */ 'ncurry(int,java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Support for Closure currying at a given index.`]
			],
			/* method sees */ UDF,
			/* method parameters */ UDF,
			/* method throwns */ UDF,
			/* method return */ UDF
		]],
		[/* method */ 'rightShift(groovy.lang.Closure)', [
			[/* method description */
				[/* text */ 't', `Support for Closure forward composition.
 `],
				[/* block */ 'b', `
 Typical usage:
 `],
				[/* code block */ 'c', [
					[/* text */ 't', ` def times2 = { a `],
					[/* inline code block */ 'i', `->`],
					[/* text */ 't', ` a * 2 }
 def add3 = { a `],
					[/* inline code block */ 'i', `->`],
					[/* text */ 't', ` a + 3 }
 def timesThenAdd = times2 `],
					[/* inline code block */ 'i', `>>`],
					[/* text */ 't', ` add3
 // equivalent: timesThenAdd = { a `],
					[/* inline code block */ 'i', `->`],
					[/* text */ 't', ` add3(times2(a)) }
 assert timesThenAdd(3) == 9
 `]
				]]
			],
			/* method sees */ UDF,
			/* method parameters */ UDF,
			/* method throwns */ UDF,
			/* method return */ UDF
		]],
		[/* method */ 'isCase(java.lang.Object)', [
			/* method description */ UDF,
			/* method sees */ UDF,
			/* method parameters */ UDF,
			/* method throwns */ UDF,
			/* method return */ UDF
		]],
		[/* method */ 'asWritable()', [
			/* method description */ UDF,
			/* method sees */ UDF,
			/* method parameters */ UDF,
			/* method throwns */ UDF,
			/* method return */ UDF
		]],
		[/* method */ 'memoize()', [
			[/* method description */
				[/* text */ 't', `Creates a caching variant of the closure.
 Whenever the closure is called, the mapping between the parameters and the return value is preserved in cache
 making subsequent calls with the same arguments fast.
 This variant will keep all cached values forever, i.e. till the closure gets garbage-collected.
 The returned function can be safely used concurrently from multiple threads, however, the implementation
 values high average-scenario performance and so concurrent calls on the memoized function with identical argument values
 may not necessarily be able to benefit from each other's cached return value. With this having been mentioned,
 the performance trade-off still makes concurrent use of memoized functions safe and highly recommended.

 The cache gets garbage-collected together with the memoized closure.`]
			],
			/* method sees */ UDF,
			/* method parameters */ UDF,
			/* method throwns */ UDF,
			/* method return */ UDF
		]],
		[/* method */ 'trampoline(java.lang.Object...)', [
			[/* method description */
				[/* text */ 't', `Builds a trampolined variant of the current closure.
 To prevent stack overflow due to deep recursion, functions can instead leverage the trampoline mechanism
 and avoid recursive calls altogether. Under trampoline, the function is supposed to perform one step of
 the calculation and, instead of a recursive call to itself or another function, it returns a new closure,
 which will be executed by the trampoline as the next step.
 Once a non-closure value is returned, the trampoline stops and returns the value as the final result.
 Here is an example:
 `],
				[/* code block */ 'c', [
					[/* text */ 't', ` def fact
 fact = { n, total `],
					[/* inline code block */ 'i', `->`],
					[/* text */ 't', `
     n == 0 ? total : fact.trampoline(n - 1, n * total)
 }.trampoline()
 def factorial = { n `],
					[/* inline code block */ 'i', `->`],
					[/* text */ 't', ` fact(n, 1G)}
 println factorial(20) // `],
					[/* inline code block */ 'i', `=>`],
					[/* text */ 't', ` 2432902008176640000
 `]
				]]
			],
			/* method sees */ UDF,
			/* method parameters */ UDF,
			/* method throwns */ UDF,
			/* method return */ UDF
		]],
		[/* method */ 'trampoline()', [
			[/* method description */
				[/* text */ 't', `Builds a trampolined variant of the current closure.
 To prevent stack overflow due to deep recursion, functions can instead leverage the trampoline mechanism
 and avoid recursive calls altogether. Under trampoline, the function is supposed to perform one step of
 the calculation and, instead of a recursive call to itself or another function, it returns a new closure,
 which will be executed by the trampoline as the next step.
 Once a non-closure value is returned, the trampoline stops and returns the value as the final result.`]
			],
			/* method sees */ UDF,
			/* method parameters */ UDF,
			/* method throwns */ UDF,
			/* method return */ UDF
		]],
		[/* method */ 'dehydrate()', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this closure where the "owner", "delegate" and "thisObject"
 fields are null, allowing proper serialization when one of them is not serializable.`]
			],
			/* method sees */ UDF,
			/* method parameters */ UDF,
			/* method throwns */ UDF,
			/* method return */ UDF
		]],
		[/* method */ 'rehydrate(java.lang.Object,java.lang.Object,java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this closure for which the delegate, owner and thisObject are
 replaced with the supplied parameters. Use this when you want to rehydrate a
 closure which has been made serializable thanks to the `],
				[/* reference */ 'r', `dehydrate()`],
				[/* text */ 't', `
 method.`]
			],
			/* method sees */ UDF,
			/* method parameters */ UDF,
			/* method throwns */ UDF,
			/* method return */ UDF
		]],
		[/* method */ 'getMaximumNumberOfParameters()', [
			/* method description */ UDF,
			/* method sees */ UDF,
			/* method parameters */ UDF,
			/* method throwns */ UDF,
			/* method return */ UDF
		]]
	],
]);
