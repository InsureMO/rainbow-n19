import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.lang.invoke.SerializedLambda', [
	[/* class description */
		[/* text */ 't', `Serialized form of a lambda expression.  The properties of this class
 represent the information that is present at the lambda factory site, including
 static metafactory arguments such as the identity of the primary functional
 interface method and the identity of the implementation method, as well as
 dynamic metafactory arguments such as values captured from the lexical scope
 at the time of lambda capture.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `Implementors of serializable lambdas, such as compilers or language
 runtime libraries, are expected to ensure that instances deserialize properly.
 One means to do so is to ensure that the `],
			[/* inline code block */ 'i', `writeReplace`],
			[/* text */ 't', ` method returns
 an instance of `],
			[/* inline code block */ 'i', `SerializedLambda`],
			[/* text */ 't', `, rather than allowing default
 serialization to proceed.

 `]
		]],
		[/* block */ 'b', [
			[/* inline code block */ 'i', `SerializedLambda`],
			[/* text */ 't', ` has a `],
			[/* inline code block */ 'i', `readResolve`],
			[/* text */ 't', ` method that looks for
 a (possibly private) static method called
 `],
			[/* inline code block */ 'i', `$deserializeLambda$(SerializedLambda)`],
			[/* text */ 't', ` in the capturing class, invokes
 that with itself as the first argument, and returns the result.  Lambda classes
 implementing `],
			[/* inline code block */ 'i', `$deserializeLambda$`],
			[/* text */ 't', ` are responsible for validating
 that the properties of the `],
			[/* inline code block */ 'i', `SerializedLambda`],
			[/* text */ 't', ` are consistent with a
 lambda actually captured by that class.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `The identity of a function object produced by deserializing the serialized
 form is unpredictable, and therefore identity-sensitive operations (such as
 reference equality, object locking, and `],
			[/* inline code block */ 'i', `System.identityHashCode()`],
			[/* text */ 't', ` may
 produce different results in different implementations, or even upon
 different deserializations in the same implementation.`]
		]]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>(java.lang.Class,java.lang.String,java.lang.String,java.lang.String,int,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.Object[])', [
			[/* constructor description */
				[/* text */ 't', `Create a `],
				[/* inline code block */ 'i', `SerializedLambda`],
				[/* text */ 't', ` from the low-level information present
 at the lambda factory site.`]
			],
			[/* parameters */
				[/* parameter */ 'capturingClass', [/* parameter description */
					[/* text */ 't', `The class in which the lambda expression appears`]
				]],
				[/* parameter */ 'functionalInterfaceClass', [/* parameter description */
					[/* text */ 't', `Name, in slash-delimited form, of static
                                 type of the returned lambda object`]
				]],
				[/* parameter */ 'functionalInterfaceMethodName', [/* parameter description */
					[/* text */ 't', `Name of the functional interface
                                      method for the present at the
                                      lambda factory site`]
				]],
				[/* parameter */ 'functionalInterfaceMethodSignature', [/* parameter description */
					[/* text */ 't', `Signature of the functional
                                           interface method present at
                                           the lambda factory site`]
				]],
				[/* parameter */ 'implMethodKind', [/* parameter description */
					[/* text */ 't', `Method handle kind for the implementation method`]
				]],
				[/* parameter */ 'implClass', [/* parameter description */
					[/* text */ 't', `Name, in slash-delimited form, for the class holding
                  the implementation method`]
				]],
				[/* parameter */ 'implMethodName', [/* parameter description */
					[/* text */ 't', `Name of the implementation method`]
				]],
				[/* parameter */ 'implMethodSignature', [/* parameter description */
					[/* text */ 't', `Signature of the implementation method`]
				]],
				[/* parameter */ 'instantiatedMethodType', [/* parameter description */
					[/* text */ 't', `The signature of the primary functional
                               interface method after type variables
                               are substituted with their instantiation
                               from the capture site`]
				]],
				[/* parameter */ 'capturedArgs', [/* parameter description */
					[/* text */ 't', `The dynamic arguments to the lambda factory site,
                     which represent variables captured by
                     the lambda`]
				]]
			],
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'getInstantiatedMethodType()', [
			[/* method description */
				[/* text */ 't', `Get the signature of the primary functional interface method
 after type variables are substituted with their instantiation
 from the capture site.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the signature of the primary functional interface method
 after type variable processing`]
			]
		]],
		[/* method */ 'getCapturedArgCount()', [
			[/* method description */
				[/* text */ 't', `Get the count of dynamic arguments to the lambda capture site.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the count of dynamic arguments to the lambda capture site`]
			]
		]],
		[/* method */ 'getImplMethodKind()', [
			[/* method description */
				[/* text */ 't', `Get the method handle kind (see `],
				[/* reference */ 'r', `java.lang.invoke.MethodHandleInfo`],
				[/* text */ 't', `) of
 the implementation method.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the method handle kind of the implementation method`]
			]
		]],
		[/* method */ 'getCapturedArg(int)', [
			[/* method description */
				[/* text */ 't', `Get a dynamic argument to the lambda capture site.`]
			],
			[/* parameters */
				[/* parameter */ 'i', [/* parameter description */
					[/* text */ 't', `the argument to capture`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a dynamic argument to the lambda capture site`]
			]
		]],
		[/* method */ 'getCapturingClass()', [
			[/* method description */
				[/* text */ 't', `Get the name of the class that captured this lambda.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the name of the class that captured this lambda`]
			]
		]],
		[/* method */ 'getFunctionalInterfaceClass()', [
			[/* method description */
				[/* text */ 't', `Get the name of the invoked type to which this
 lambda has been converted`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the name of the functional interface class to which
 this lambda has been converted`]
			]
		]],
		[/* method */ 'getFunctionalInterfaceMethodName()', [
			[/* method description */
				[/* text */ 't', `Get the name of the primary method for the functional interface
 to which this lambda has been converted.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the name of the primary methods of the functional interface`]
			]
		]],
		[/* method */ 'getFunctionalInterfaceMethodSignature()', [
			[/* method description */
				[/* text */ 't', `Get the signature of the primary method for the functional
 interface to which this lambda has been converted.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the signature of the primary method of the functional
 interface`]
			]
		]],
		[/* method */ 'getImplClass()', [
			[/* method description */
				[/* text */ 't', `Get the name of the class containing the implementation
 method.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the name of the class containing the implementation
 method`]
			]
		]],
		[/* method */ 'getImplMethodName()', [
			[/* method description */
				[/* text */ 't', `Get the name of the implementation method.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the name of the implementation method`]
			]
		]],
		[/* method */ 'getImplMethodSignature()', [
			[/* method description */
				[/* text */ 't', `Get the signature of the implementation method.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the signature of the implementation method`]
			]
		]],
		[/* method */ 'toString()', UDF]
	],
]);
