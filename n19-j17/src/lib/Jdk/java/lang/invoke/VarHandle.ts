import {UDF} from '../../../../utils';
import {JdkClassCreateHelper} from '../../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.lang.invoke.VarHandle', [
	/* super class, extends java.lang.Object */
	'java.lang.Object',
	[/* interfaces, implements java.lang.constant.Constable */
		'java.lang.constant.Constable'
	],
	/* modifiers */ 1025,
	/* declared annotations */,
	/* type parameters */,
	/* declared constructors */,
	[/* declared methods */
		[/* public abstract java.lang.invoke.VarHandle java.lang.invoke.VarHandle.withInvokeBehavior() */
			/* name */ 'withInvokeBehavior',
			/* parameters */,
			/* return */ 'java.lang.invoke.VarHandle',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.lang.invoke.VarHandle java.lang.invoke.VarHandle.withInvokeExactBehavior() */
			/* name */ 'withInvokeExactBehavior',
			/* parameters */,
			/* return */ 'java.lang.invoke.VarHandle',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public boolean java.lang.invoke.VarHandle.hasInvokeExactBehavior() */
			/* name */ 'hasInvokeExactBehavior',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final boolean java.lang.invoke.VarHandle.isAccessModeSupported(java.lang.invoke.VarHandle$AccessMode) */
			/* name */ 'isAccessModeSupported',
			[/* parameters */
				[/* parameter */
					/* name */ 'accessMode',
					/* type */ 'java.lang.invoke.VarHandle$AccessMode',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final java.lang.String java.lang.invoke.VarHandle.toString() */
			/* name */ 'toString',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final java.lang.invoke.MethodType java.lang.invoke.VarHandle.accessModeType(java.lang.invoke.VarHandle$AccessMode) */
			/* name */ 'accessModeType',
			[/* parameters */
				[/* parameter */
					/* name */ 'accessMode',
					/* type */ 'java.lang.invoke.VarHandle$AccessMode',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.invoke.MethodType',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final native boolean java.lang.invoke.VarHandle.compareAndSet(java.lang.Object...) */
			/* name */ 'compareAndSet',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ '[Ljava.lang.Object;',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 401,
			[/* annotations */
				['java.lang.invoke.MethodHandle$PolymorphicSignature'],
				['jdk.internal.vm.annotation.IntrinsicCandidate']
			],
			/* type parameters */ UDF
		],
		[/* public final native boolean java.lang.invoke.VarHandle.weakCompareAndSet(java.lang.Object...) */
			/* name */ 'weakCompareAndSet',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ '[Ljava.lang.Object;',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 401,
			[/* annotations */
				['java.lang.invoke.MethodHandle$PolymorphicSignature'],
				['jdk.internal.vm.annotation.IntrinsicCandidate']
			],
			/* type parameters */ UDF
		],
		[/* public final native boolean java.lang.invoke.VarHandle.weakCompareAndSetAcquire(java.lang.Object...) */
			/* name */ 'weakCompareAndSetAcquire',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ '[Ljava.lang.Object;',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 401,
			[/* annotations */
				['java.lang.invoke.MethodHandle$PolymorphicSignature'],
				['jdk.internal.vm.annotation.IntrinsicCandidate']
			],
			/* type parameters */ UDF
		],
		[/* public final native boolean java.lang.invoke.VarHandle.weakCompareAndSetPlain(java.lang.Object...) */
			/* name */ 'weakCompareAndSetPlain',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ '[Ljava.lang.Object;',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 401,
			[/* annotations */
				['java.lang.invoke.MethodHandle$PolymorphicSignature'],
				['jdk.internal.vm.annotation.IntrinsicCandidate']
			],
			/* type parameters */ UDF
		],
		[/* public final native boolean java.lang.invoke.VarHandle.weakCompareAndSetRelease(java.lang.Object...) */
			/* name */ 'weakCompareAndSetRelease',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ '[Ljava.lang.Object;',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 401,
			[/* annotations */
				['java.lang.invoke.MethodHandle$PolymorphicSignature'],
				['jdk.internal.vm.annotation.IntrinsicCandidate']
			],
			/* type parameters */ UDF
		],
		[/* public final native java.lang.Object java.lang.invoke.VarHandle.compareAndExchange(java.lang.Object...) */
			/* name */ 'compareAndExchange',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ '[Ljava.lang.Object;',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.Object',
			/* exceptions */,
			/* modifiers */ 401,
			[/* annotations */
				['java.lang.invoke.MethodHandle$PolymorphicSignature'],
				['jdk.internal.vm.annotation.IntrinsicCandidate']
			],
			/* type parameters */ UDF
		],
		[/* public final native java.lang.Object java.lang.invoke.VarHandle.compareAndExchangeAcquire(java.lang.Object...) */
			/* name */ 'compareAndExchangeAcquire',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ '[Ljava.lang.Object;',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.Object',
			/* exceptions */,
			/* modifiers */ 401,
			[/* annotations */
				['java.lang.invoke.MethodHandle$PolymorphicSignature'],
				['jdk.internal.vm.annotation.IntrinsicCandidate']
			],
			/* type parameters */ UDF
		],
		[/* public final native java.lang.Object java.lang.invoke.VarHandle.compareAndExchangeRelease(java.lang.Object...) */
			/* name */ 'compareAndExchangeRelease',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ '[Ljava.lang.Object;',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.Object',
			/* exceptions */,
			/* modifiers */ 401,
			[/* annotations */
				['java.lang.invoke.MethodHandle$PolymorphicSignature'],
				['jdk.internal.vm.annotation.IntrinsicCandidate']
			],
			/* type parameters */ UDF
		],
		[/* public final native java.lang.Object java.lang.invoke.VarHandle.get(java.lang.Object...) */
			/* name */ 'get',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ '[Ljava.lang.Object;',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.Object',
			/* exceptions */,
			/* modifiers */ 401,
			[/* annotations */
				['java.lang.invoke.MethodHandle$PolymorphicSignature'],
				['jdk.internal.vm.annotation.IntrinsicCandidate']
			],
			/* type parameters */ UDF
		],
		[/* public final native java.lang.Object java.lang.invoke.VarHandle.getAcquire(java.lang.Object...) */
			/* name */ 'getAcquire',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ '[Ljava.lang.Object;',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.Object',
			/* exceptions */,
			/* modifiers */ 401,
			[/* annotations */
				['java.lang.invoke.MethodHandle$PolymorphicSignature'],
				['jdk.internal.vm.annotation.IntrinsicCandidate']
			],
			/* type parameters */ UDF
		],
		[/* public final native java.lang.Object java.lang.invoke.VarHandle.getAndAdd(java.lang.Object...) */
			/* name */ 'getAndAdd',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ '[Ljava.lang.Object;',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.Object',
			/* exceptions */,
			/* modifiers */ 401,
			[/* annotations */
				['java.lang.invoke.MethodHandle$PolymorphicSignature'],
				['jdk.internal.vm.annotation.IntrinsicCandidate']
			],
			/* type parameters */ UDF
		],
		[/* public final native java.lang.Object java.lang.invoke.VarHandle.getAndAddAcquire(java.lang.Object...) */
			/* name */ 'getAndAddAcquire',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ '[Ljava.lang.Object;',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.Object',
			/* exceptions */,
			/* modifiers */ 401,
			[/* annotations */
				['java.lang.invoke.MethodHandle$PolymorphicSignature'],
				['jdk.internal.vm.annotation.IntrinsicCandidate']
			],
			/* type parameters */ UDF
		],
		[/* public final native java.lang.Object java.lang.invoke.VarHandle.getAndAddRelease(java.lang.Object...) */
			/* name */ 'getAndAddRelease',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ '[Ljava.lang.Object;',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.Object',
			/* exceptions */,
			/* modifiers */ 401,
			[/* annotations */
				['java.lang.invoke.MethodHandle$PolymorphicSignature'],
				['jdk.internal.vm.annotation.IntrinsicCandidate']
			],
			/* type parameters */ UDF
		],
		[/* public final native java.lang.Object java.lang.invoke.VarHandle.getAndBitwiseAnd(java.lang.Object...) */
			/* name */ 'getAndBitwiseAnd',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ '[Ljava.lang.Object;',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.Object',
			/* exceptions */,
			/* modifiers */ 401,
			[/* annotations */
				['java.lang.invoke.MethodHandle$PolymorphicSignature'],
				['jdk.internal.vm.annotation.IntrinsicCandidate']
			],
			/* type parameters */ UDF
		],
		[/* public final native java.lang.Object java.lang.invoke.VarHandle.getAndBitwiseAndAcquire(java.lang.Object...) */
			/* name */ 'getAndBitwiseAndAcquire',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ '[Ljava.lang.Object;',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.Object',
			/* exceptions */,
			/* modifiers */ 401,
			[/* annotations */
				['java.lang.invoke.MethodHandle$PolymorphicSignature'],
				['jdk.internal.vm.annotation.IntrinsicCandidate']
			],
			/* type parameters */ UDF
		],
		[/* public final native java.lang.Object java.lang.invoke.VarHandle.getAndBitwiseAndRelease(java.lang.Object...) */
			/* name */ 'getAndBitwiseAndRelease',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ '[Ljava.lang.Object;',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.Object',
			/* exceptions */,
			/* modifiers */ 401,
			[/* annotations */
				['java.lang.invoke.MethodHandle$PolymorphicSignature'],
				['jdk.internal.vm.annotation.IntrinsicCandidate']
			],
			/* type parameters */ UDF
		],
		[/* public final native java.lang.Object java.lang.invoke.VarHandle.getAndBitwiseOr(java.lang.Object...) */
			/* name */ 'getAndBitwiseOr',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ '[Ljava.lang.Object;',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.Object',
			/* exceptions */,
			/* modifiers */ 401,
			[/* annotations */
				['java.lang.invoke.MethodHandle$PolymorphicSignature'],
				['jdk.internal.vm.annotation.IntrinsicCandidate']
			],
			/* type parameters */ UDF
		],
		[/* public final native java.lang.Object java.lang.invoke.VarHandle.getAndBitwiseOrAcquire(java.lang.Object...) */
			/* name */ 'getAndBitwiseOrAcquire',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ '[Ljava.lang.Object;',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.Object',
			/* exceptions */,
			/* modifiers */ 401,
			[/* annotations */
				['java.lang.invoke.MethodHandle$PolymorphicSignature'],
				['jdk.internal.vm.annotation.IntrinsicCandidate']
			],
			/* type parameters */ UDF
		],
		[/* public final native java.lang.Object java.lang.invoke.VarHandle.getAndBitwiseOrRelease(java.lang.Object...) */
			/* name */ 'getAndBitwiseOrRelease',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ '[Ljava.lang.Object;',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.Object',
			/* exceptions */,
			/* modifiers */ 401,
			[/* annotations */
				['java.lang.invoke.MethodHandle$PolymorphicSignature'],
				['jdk.internal.vm.annotation.IntrinsicCandidate']
			],
			/* type parameters */ UDF
		],
		[/* public final native java.lang.Object java.lang.invoke.VarHandle.getAndBitwiseXor(java.lang.Object...) */
			/* name */ 'getAndBitwiseXor',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ '[Ljava.lang.Object;',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.Object',
			/* exceptions */,
			/* modifiers */ 401,
			[/* annotations */
				['java.lang.invoke.MethodHandle$PolymorphicSignature'],
				['jdk.internal.vm.annotation.IntrinsicCandidate']
			],
			/* type parameters */ UDF
		],
		[/* public final native java.lang.Object java.lang.invoke.VarHandle.getAndBitwiseXorAcquire(java.lang.Object...) */
			/* name */ 'getAndBitwiseXorAcquire',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ '[Ljava.lang.Object;',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.Object',
			/* exceptions */,
			/* modifiers */ 401,
			[/* annotations */
				['java.lang.invoke.MethodHandle$PolymorphicSignature'],
				['jdk.internal.vm.annotation.IntrinsicCandidate']
			],
			/* type parameters */ UDF
		],
		[/* public final native java.lang.Object java.lang.invoke.VarHandle.getAndBitwiseXorRelease(java.lang.Object...) */
			/* name */ 'getAndBitwiseXorRelease',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ '[Ljava.lang.Object;',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.Object',
			/* exceptions */,
			/* modifiers */ 401,
			[/* annotations */
				['java.lang.invoke.MethodHandle$PolymorphicSignature'],
				['jdk.internal.vm.annotation.IntrinsicCandidate']
			],
			/* type parameters */ UDF
		],
		[/* public final native java.lang.Object java.lang.invoke.VarHandle.getAndSet(java.lang.Object...) */
			/* name */ 'getAndSet',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ '[Ljava.lang.Object;',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.Object',
			/* exceptions */,
			/* modifiers */ 401,
			[/* annotations */
				['java.lang.invoke.MethodHandle$PolymorphicSignature'],
				['jdk.internal.vm.annotation.IntrinsicCandidate']
			],
			/* type parameters */ UDF
		],
		[/* public final native java.lang.Object java.lang.invoke.VarHandle.getAndSetAcquire(java.lang.Object...) */
			/* name */ 'getAndSetAcquire',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ '[Ljava.lang.Object;',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.Object',
			/* exceptions */,
			/* modifiers */ 401,
			[/* annotations */
				['java.lang.invoke.MethodHandle$PolymorphicSignature'],
				['jdk.internal.vm.annotation.IntrinsicCandidate']
			],
			/* type parameters */ UDF
		],
		[/* public final native java.lang.Object java.lang.invoke.VarHandle.getAndSetRelease(java.lang.Object...) */
			/* name */ 'getAndSetRelease',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ '[Ljava.lang.Object;',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.Object',
			/* exceptions */,
			/* modifiers */ 401,
			[/* annotations */
				['java.lang.invoke.MethodHandle$PolymorphicSignature'],
				['jdk.internal.vm.annotation.IntrinsicCandidate']
			],
			/* type parameters */ UDF
		],
		[/* public final native java.lang.Object java.lang.invoke.VarHandle.getOpaque(java.lang.Object...) */
			/* name */ 'getOpaque',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ '[Ljava.lang.Object;',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.Object',
			/* exceptions */,
			/* modifiers */ 401,
			[/* annotations */
				['java.lang.invoke.MethodHandle$PolymorphicSignature'],
				['jdk.internal.vm.annotation.IntrinsicCandidate']
			],
			/* type parameters */ UDF
		],
		[/* public final native java.lang.Object java.lang.invoke.VarHandle.getVolatile(java.lang.Object...) */
			/* name */ 'getVolatile',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ '[Ljava.lang.Object;',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.Object',
			/* exceptions */,
			/* modifiers */ 401,
			[/* annotations */
				['java.lang.invoke.MethodHandle$PolymorphicSignature'],
				['jdk.internal.vm.annotation.IntrinsicCandidate']
			],
			/* type parameters */ UDF
		],
		[/* public final native void java.lang.invoke.VarHandle.set(java.lang.Object...) */
			/* name */ 'set',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ '[Ljava.lang.Object;',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 401,
			[/* annotations */
				['java.lang.invoke.MethodHandle$PolymorphicSignature'],
				['jdk.internal.vm.annotation.IntrinsicCandidate']
			],
			/* type parameters */ UDF
		],
		[/* public final native void java.lang.invoke.VarHandle.setOpaque(java.lang.Object...) */
			/* name */ 'setOpaque',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ '[Ljava.lang.Object;',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 401,
			[/* annotations */
				['java.lang.invoke.MethodHandle$PolymorphicSignature'],
				['jdk.internal.vm.annotation.IntrinsicCandidate']
			],
			/* type parameters */ UDF
		],
		[/* public final native void java.lang.invoke.VarHandle.setRelease(java.lang.Object...) */
			/* name */ 'setRelease',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ '[Ljava.lang.Object;',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 401,
			[/* annotations */
				['java.lang.invoke.MethodHandle$PolymorphicSignature'],
				['jdk.internal.vm.annotation.IntrinsicCandidate']
			],
			/* type parameters */ UDF
		],
		[/* public final native void java.lang.invoke.VarHandle.setVolatile(java.lang.Object...) */
			/* name */ 'setVolatile',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ '[Ljava.lang.Object;',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 401,
			[/* annotations */
				['java.lang.invoke.MethodHandle$PolymorphicSignature'],
				['jdk.internal.vm.annotation.IntrinsicCandidate']
			],
			/* type parameters */ UDF
		],
		[/* public java.lang.Class<?> java.lang.invoke.VarHandle.varType() */
			/* name */ 'varType',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* wildcard type */ 'wt', [
						[/* upper bounds */
							'java.lang.Object'
						],
						/* lower bounds */ UDF
					]]
				],
				/* raw type */ 'java.lang.Class',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.invoke.MethodHandle java.lang.invoke.VarHandle.toMethodHandle(java.lang.invoke.VarHandle$AccessMode) */
			/* name */ 'toMethodHandle',
			[/* parameters */
				[/* parameter */
					/* name */ 'accessMode',
					/* type */ 'java.lang.invoke.VarHandle$AccessMode',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.invoke.MethodHandle',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.List<java.lang.Class<?>> java.lang.invoke.VarHandle.coordinateTypes() */
			/* name */ 'coordinateTypes',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.lang.Object'
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.lang.Class',
						/* owner type */ UDF
					]]
				],
				/* raw type */ 'java.util.List',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.Optional<java.lang.invoke.VarHandle$VarHandleDesc> java.lang.invoke.VarHandle.describeConstable() */
			/* name */ 'describeConstable',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.lang.invoke.VarHandle$VarHandleDesc'
				],
				/* raw type */ 'java.util.Optional',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static void java.lang.invoke.VarHandle.acquireFence() */
			/* name */ 'acquireFence',
			/* parameters */,
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 9,
			[/* annotations */
				['jdk.internal.vm.annotation.ForceInline']
			],
			/* type parameters */ UDF
		],
		[/* public static void java.lang.invoke.VarHandle.fullFence() */
			/* name */ 'fullFence',
			/* parameters */,
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 9,
			[/* annotations */
				['jdk.internal.vm.annotation.ForceInline']
			],
			/* type parameters */ UDF
		],
		[/* public static void java.lang.invoke.VarHandle.loadLoadFence() */
			/* name */ 'loadLoadFence',
			/* parameters */,
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 9,
			[/* annotations */
				['jdk.internal.vm.annotation.ForceInline']
			],
			/* type parameters */ UDF
		],
		[/* public static void java.lang.invoke.VarHandle.releaseFence() */
			/* name */ 'releaseFence',
			/* parameters */,
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 9,
			[/* annotations */
				['jdk.internal.vm.annotation.ForceInline']
			],
			/* type parameters */ UDF
		],
		[/* public static void java.lang.invoke.VarHandle.storeStoreFence() */
			/* name */ 'storeStoreFence',
			/* parameters */,
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 9,
			[/* annotations */
				['jdk.internal.vm.annotation.ForceInline']
			],
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
