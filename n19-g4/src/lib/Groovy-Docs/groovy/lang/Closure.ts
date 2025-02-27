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
		/* sees */ UDF
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
		/* sees */ UDF
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
		/* sees */ UDF
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
		/* sees */ UDF
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
		/* sees */ UDF
		]],
		[/* field */ 'DONE', [
			/* field description */ UDF,
		/* sees */ UDF
		]],
		[/* field */ 'SKIP', [
			/* field description */ UDF,
		/* sees */ UDF
		]],
		[/* field */ 'IDENTITY', [
			/* field description */ UDF,
		/* sees */ UDF
		]],
		[/* field */ 'parameterTypes', [
			/* field description */ UDF,
		/* sees */ UDF
		]],
		[/* field */ 'maximumNumberOfParameters', [
			/* field description */ UDF,
		/* sees */ UDF
		]]
	],
	UDF, UDF
]);
