import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.lang.invoke.VarHandle$AccessMode', [
	[/* class description */
		[/* text */ 't', `The set of access modes that specify how a variable, referenced by a
 VarHandle, is accessed.`]
	],
	/* fields */,
	/* constructors */,
	[/* methods */
		[/* method */ 'methodName()', [
			[/* method description */
				[/* text */ 't', `Returns the `],
				[/* inline code block */ 'i', `VarHandle`],
				[/* text */ 't', ` signature-polymorphic method name
 associated with this `],
				[/* inline code block */ 'i', `AccessMode`],
				[/* text */ 't', ` value.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the signature-polymorphic method name`]
			]
		]],
		[/* method */ 'valueFromMethodName(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Returns the `],
				[/* inline code block */ 'i', `AccessMode`],
				[/* text */ 't', ` value associated with the specified
 `],
				[/* inline code block */ 'i', `VarHandle`],
				[/* text */ 't', ` signature-polymorphic method name.`]
			],
			[/* parameters */
				[/* parameter */ 'methodName', [/* parameter description */
					[/* text */ 't', `the signature-polymorphic method name`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if there is no `],
					[/* inline code block */ 'i', `AccessMode`],
					[/* text */ 't', `
         value associated with method name (indicating the method
         name does not correspond to a `],
					[/* inline code block */ 'i', `VarHandle`],
					[/* text */ 't', `
         signature-polymorphic method name).`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the `],
				[/* inline code block */ 'i', `AccessMode`],
				[/* text */ 't', ` value`]
			]
		]],
		[/* method */ 'valueOf(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Returns the enum constant of this class with the specified name.
The string must match `],
				[/* text */ 't', `exactly`],
				[/* text */ 't', ` an identifier used to declare an
enum constant in this class.  (Extraneous whitespace characters are 
not permitted.)`]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `the name of the enum constant to be returned.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if this enum class has no constant with the specified name`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the argument is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the enum constant with the specified name`]
			]
		]],
		[/* method */ 'values()', [
			[/* method description */
				[/* text */ 't', `Returns an array containing the constants of this enum class, in
the order they are declared.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `an array containing the constants of this enum class, in the order they are declared`]
			]
		]]
	],
	[/* enum values */
		[/* enum value */ 'GET', [
			[/* enum value description */
				[/* text */ 't', `The access mode whose access is specified by the corresponding
 method
 `],
				[/* reference */ 'r', `java.lang.invoke.VarHandle#get(java.lang.Object...)`, `VarHandle.get`]
			],
		]],
		[/* enum value */ 'SET', [
			[/* enum value description */
				[/* text */ 't', `The access mode whose access is specified by the corresponding
 method
 `],
				[/* reference */ 'r', `java.lang.invoke.VarHandle#set(java.lang.Object...)`, `VarHandle.set`]
			],
		]],
		[/* enum value */ 'GET_VOLATILE', [
			[/* enum value description */
				[/* text */ 't', `The access mode whose access is specified by the corresponding
 method
 `],
				[/* reference */ 'r', `java.lang.invoke.VarHandle#getVolatile(java.lang.Object...)`, `VarHandle.getVolatile`]
			],
		]],
		[/* enum value */ 'SET_VOLATILE', [
			[/* enum value description */
				[/* text */ 't', `The access mode whose access is specified by the corresponding
 method
 `],
				[/* reference */ 'r', `java.lang.invoke.VarHandle#setVolatile(java.lang.Object...)`, `VarHandle.setVolatile`]
			],
		]],
		[/* enum value */ 'GET_ACQUIRE', [
			[/* enum value description */
				[/* text */ 't', `The access mode whose access is specified by the corresponding
 method
 `],
				[/* reference */ 'r', `java.lang.invoke.VarHandle#getAcquire(java.lang.Object...)`, `VarHandle.getAcquire`]
			],
		]],
		[/* enum value */ 'SET_RELEASE', [
			[/* enum value description */
				[/* text */ 't', `The access mode whose access is specified by the corresponding
 method
 `],
				[/* reference */ 'r', `java.lang.invoke.VarHandle#setRelease(java.lang.Object...)`, `VarHandle.setRelease`]
			],
		]],
		[/* enum value */ 'GET_OPAQUE', [
			[/* enum value description */
				[/* text */ 't', `The access mode whose access is specified by the corresponding
 method
 `],
				[/* reference */ 'r', `java.lang.invoke.VarHandle#getOpaque(java.lang.Object...)`, `VarHandle.getOpaque`]
			],
		]],
		[/* enum value */ 'SET_OPAQUE', [
			[/* enum value description */
				[/* text */ 't', `The access mode whose access is specified by the corresponding
 method
 `],
				[/* reference */ 'r', `java.lang.invoke.VarHandle#setOpaque(java.lang.Object...)`, `VarHandle.setOpaque`]
			],
		]],
		[/* enum value */ 'COMPARE_AND_SET', [
			[/* enum value description */
				[/* text */ 't', `The access mode whose access is specified by the corresponding
 method
 `],
				[/* reference */ 'r', `java.lang.invoke.VarHandle#compareAndSet(java.lang.Object...)`, `VarHandle.compareAndSet`]
			],
		]],
		[/* enum value */ 'COMPARE_AND_EXCHANGE', [
			[/* enum value description */
				[/* text */ 't', `The access mode whose access is specified by the corresponding
 method
 `],
				[/* reference */ 'r', `java.lang.invoke.VarHandle#compareAndExchange(java.lang.Object...)`, `VarHandle.compareAndExchange`]
			],
		]],
		[/* enum value */ 'COMPARE_AND_EXCHANGE_ACQUIRE', [
			[/* enum value description */
				[/* text */ 't', `The access mode whose access is specified by the corresponding
 method
 `],
				[/* reference */ 'r', `java.lang.invoke.VarHandle#compareAndExchangeAcquire(java.lang.Object...)`, `VarHandle.compareAndExchangeAcquire`]
			],
		]],
		[/* enum value */ 'COMPARE_AND_EXCHANGE_RELEASE', [
			[/* enum value description */
				[/* text */ 't', `The access mode whose access is specified by the corresponding
 method
 `],
				[/* reference */ 'r', `java.lang.invoke.VarHandle#compareAndExchangeRelease(java.lang.Object...)`, `VarHandle.compareAndExchangeRelease`]
			],
		]],
		[/* enum value */ 'WEAK_COMPARE_AND_SET_PLAIN', [
			[/* enum value description */
				[/* text */ 't', `The access mode whose access is specified by the corresponding
 method
 `],
				[/* reference */ 'r', `java.lang.invoke.VarHandle#weakCompareAndSetPlain(java.lang.Object...)`, `VarHandle.weakCompareAndSetPlain`]
			],
		]],
		[/* enum value */ 'WEAK_COMPARE_AND_SET', [
			[/* enum value description */
				[/* text */ 't', `The access mode whose access is specified by the corresponding
 method
 `],
				[/* reference */ 'r', `java.lang.invoke.VarHandle#weakCompareAndSet(java.lang.Object...)`, `VarHandle.weakCompareAndSet`]
			],
		]],
		[/* enum value */ 'WEAK_COMPARE_AND_SET_ACQUIRE', [
			[/* enum value description */
				[/* text */ 't', `The access mode whose access is specified by the corresponding
 method
 `],
				[/* reference */ 'r', `java.lang.invoke.VarHandle#weakCompareAndSetAcquire(java.lang.Object...)`, `VarHandle.weakCompareAndSetAcquire`]
			],
		]],
		[/* enum value */ 'WEAK_COMPARE_AND_SET_RELEASE', [
			[/* enum value description */
				[/* text */ 't', `The access mode whose access is specified by the corresponding
 method
 `],
				[/* reference */ 'r', `java.lang.invoke.VarHandle#weakCompareAndSetRelease(java.lang.Object...)`, `VarHandle.weakCompareAndSetRelease`]
			],
		]],
		[/* enum value */ 'GET_AND_SET', [
			[/* enum value description */
				[/* text */ 't', `The access mode whose access is specified by the corresponding
 method
 `],
				[/* reference */ 'r', `java.lang.invoke.VarHandle#getAndSet(java.lang.Object...)`, `VarHandle.getAndSet`]
			],
		]],
		[/* enum value */ 'GET_AND_SET_ACQUIRE', [
			[/* enum value description */
				[/* text */ 't', `The access mode whose access is specified by the corresponding
 method
 `],
				[/* reference */ 'r', `java.lang.invoke.VarHandle#getAndSetAcquire(java.lang.Object...)`, `VarHandle.getAndSetAcquire`]
			],
		]],
		[/* enum value */ 'GET_AND_SET_RELEASE', [
			[/* enum value description */
				[/* text */ 't', `The access mode whose access is specified by the corresponding
 method
 `],
				[/* reference */ 'r', `java.lang.invoke.VarHandle#getAndSetRelease(java.lang.Object...)`, `VarHandle.getAndSetRelease`]
			],
		]],
		[/* enum value */ 'GET_AND_ADD', [
			[/* enum value description */
				[/* text */ 't', `The access mode whose access is specified by the corresponding
 method
 `],
				[/* reference */ 'r', `java.lang.invoke.VarHandle#getAndAdd(java.lang.Object...)`, `VarHandle.getAndAdd`]
			],
		]],
		[/* enum value */ 'GET_AND_ADD_ACQUIRE', [
			[/* enum value description */
				[/* text */ 't', `The access mode whose access is specified by the corresponding
 method
 `],
				[/* reference */ 'r', `java.lang.invoke.VarHandle#getAndAddAcquire(java.lang.Object...)`, `VarHandle.getAndAddAcquire`]
			],
		]],
		[/* enum value */ 'GET_AND_ADD_RELEASE', [
			[/* enum value description */
				[/* text */ 't', `The access mode whose access is specified by the corresponding
 method
 `],
				[/* reference */ 'r', `java.lang.invoke.VarHandle#getAndAddRelease(java.lang.Object...)`, `VarHandle.getAndAddRelease`]
			],
		]],
		[/* enum value */ 'GET_AND_BITWISE_OR', [
			[/* enum value description */
				[/* text */ 't', `The access mode whose access is specified by the corresponding
 method
 `],
				[/* reference */ 'r', `java.lang.invoke.VarHandle#getAndBitwiseOr(java.lang.Object...)`, `VarHandle.getAndBitwiseOr`]
			],
		]],
		[/* enum value */ 'GET_AND_BITWISE_OR_RELEASE', [
			[/* enum value description */
				[/* text */ 't', `The access mode whose access is specified by the corresponding
 method
 `],
				[/* reference */ 'r', `java.lang.invoke.VarHandle#getAndBitwiseOrRelease(java.lang.Object...)`, `VarHandle.getAndBitwiseOrRelease`]
			],
		]],
		[/* enum value */ 'GET_AND_BITWISE_OR_ACQUIRE', [
			[/* enum value description */
				[/* text */ 't', `The access mode whose access is specified by the corresponding
 method
 `],
				[/* reference */ 'r', `java.lang.invoke.VarHandle#getAndBitwiseOrAcquire(java.lang.Object...)`, `VarHandle.getAndBitwiseOrAcquire`]
			],
		]],
		[/* enum value */ 'GET_AND_BITWISE_AND', [
			[/* enum value description */
				[/* text */ 't', `The access mode whose access is specified by the corresponding
 method
 `],
				[/* reference */ 'r', `java.lang.invoke.VarHandle#getAndBitwiseAnd(java.lang.Object...)`, `VarHandle.getAndBitwiseAnd`]
			],
		]],
		[/* enum value */ 'GET_AND_BITWISE_AND_RELEASE', [
			[/* enum value description */
				[/* text */ 't', `The access mode whose access is specified by the corresponding
 method
 `],
				[/* reference */ 'r', `java.lang.invoke.VarHandle#getAndBitwiseAndRelease(java.lang.Object...)`, `VarHandle.getAndBitwiseAndRelease`]
			],
		]],
		[/* enum value */ 'GET_AND_BITWISE_AND_ACQUIRE', [
			[/* enum value description */
				[/* text */ 't', `The access mode whose access is specified by the corresponding
 method
 `],
				[/* reference */ 'r', `java.lang.invoke.VarHandle#getAndBitwiseAndAcquire(java.lang.Object...)`, `VarHandle.getAndBitwiseAndAcquire`]
			],
		]],
		[/* enum value */ 'GET_AND_BITWISE_XOR', [
			[/* enum value description */
				[/* text */ 't', `The access mode whose access is specified by the corresponding
 method
 `],
				[/* reference */ 'r', `java.lang.invoke.VarHandle#getAndBitwiseXor(java.lang.Object...)`, `VarHandle.getAndBitwiseXor`]
			],
		]],
		[/* enum value */ 'GET_AND_BITWISE_XOR_RELEASE', [
			[/* enum value description */
				[/* text */ 't', `The access mode whose access is specified by the corresponding
 method
 `],
				[/* reference */ 'r', `java.lang.invoke.VarHandle#getAndBitwiseXorRelease(java.lang.Object...)`, `VarHandle.getAndBitwiseXorRelease`]
			],
		]],
		[/* enum value */ 'GET_AND_BITWISE_XOR_ACQUIRE', [
			[/* enum value description */
				[/* text */ 't', `The access mode whose access is specified by the corresponding
 method
 `],
				[/* reference */ 'r', `java.lang.invoke.VarHandle#getAndBitwiseXorAcquire(java.lang.Object...)`, `VarHandle.getAndBitwiseXorAcquire`]
			],
		]]
	],
]);
