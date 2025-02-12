import {UDF} from '../../../../utils';
import {JdkClassCreateHelper} from '../../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.util.concurrent.CompletableFuture', [
	/* super class, extends java.lang.Object */
	'java.lang.Object',
	[/* interfaces, implements java.util.concurrent.Future<T>, java.util.concurrent.CompletionStage<T> */
		[/* parameterized type */ 'pt', [
			[/* actual argument types */
				[/* type variable ref */ 'tr', [/* name */ 'T']]
			],
			/* raw type */ 'java.util.concurrent.Future',
			/* owner type */ UDF
		]],
		[/* parameterized type */ 'pt', [
			[/* actual argument types */
				[/* type variable ref */ 'tr', [/* name */ 'T']]
			],
			/* raw type */ 'java.util.concurrent.CompletionStage',
			/* owner type */ UDF
		]]
	],
	/* modifiers */ 1,
	/* declared annotations */,
	[/* type parameters */
		[/* type variable */
			/* name */ 'T',
			[/* bounds */
				'java.lang.Object'
			],
			/* annotations */ UDF
		]
	],
	[/* declared constructors */
		[/* public java.util.concurrent.CompletableFuture() */
			/* parameters */,
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	[/* declared methods */
		[/* public T java.util.concurrent.CompletableFuture.get() throws java.lang.InterruptedException,java.util.concurrent.ExecutionException */
			/* name */ 'get',
			/* parameters */,
			/* return */ [/* type variable ref */ 'tr', [/* name */ 'T']],
			[/* exceptions */
				[/* exception */
					/* type */ 'java.lang.InterruptedException',
					/* annotations */ UDF
				],
				[/* exception */
					/* type */ 'java.util.concurrent.ExecutionException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public T java.util.concurrent.CompletableFuture.get(long,java.util.concurrent.TimeUnit) throws java.lang.InterruptedException,java.util.concurrent.ExecutionException,java.util.concurrent.TimeoutException */
			/* name */ 'get',
			[/* parameters */
				[/* parameter */
					/* name */ 'timeout',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'unit',
					/* type */ 'java.util.concurrent.TimeUnit',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* type variable ref */ 'tr', [/* name */ 'T']],
			[/* exceptions */
				[/* exception */
					/* type */ 'java.lang.InterruptedException',
					/* annotations */ UDF
				],
				[/* exception */
					/* type */ 'java.util.concurrent.ExecutionException',
					/* annotations */ UDF
				],
				[/* exception */
					/* type */ 'java.util.concurrent.TimeoutException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String java.util.concurrent.CompletableFuture.toString() */
			/* name */ 'toString',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public T java.util.concurrent.CompletableFuture.join() */
			/* name */ 'join',
			/* parameters */,
			/* return */ [/* type variable ref */ 'tr', [/* name */ 'T']],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.concurrent.CompletableFuture<T> java.util.concurrent.CompletableFuture.copy() */
			/* name */ 'copy',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'T']]
				],
				/* raw type */ 'java.util.concurrent.CompletableFuture',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.concurrent.CompletionStage java.util.concurrent.CompletableFuture.handle(java.util.function.BiFunction) */
			/* name */ 'handle',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.util.function.BiFunction',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.concurrent.CompletionStage',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public <U> java.util.concurrent.CompletableFuture<U> java.util.concurrent.CompletableFuture.handle(java.util.function.BiFunction<? super T, java.lang.Throwable, ? extends U>) */
			/* name */ 'handle',
			[/* parameters */
				[/* parameter */
					/* name */ 'fn',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.lang.Object'
								],
								[/* lower bounds */
									[/* type variable ref */ 'tr', [/* name */ 'T']]
								]
							]],
							'java.lang.Throwable',
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									[/* type variable ref */ 'tr', [/* name */ 'U']]
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.util.function.BiFunction',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'U']]
				],
				/* raw type */ 'java.util.concurrent.CompletableFuture',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			[/* type parameters */
				[/* type variable */
					/* name */ 'U',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public boolean java.util.concurrent.CompletableFuture.complete(T) */
			/* name */ 'complete',
			[/* parameters */
				[/* parameter */
					/* name */ 'value',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T']],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.util.concurrent.CompletableFuture<java.lang.Void> java.util.concurrent.CompletableFuture.allOf(java.util.concurrent.CompletableFuture<?>...) */
			/* name */ 'allOf',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ [/* generic array type */ 'ga', [[/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.lang.Object'
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.util.concurrent.CompletableFuture',
						/* owner type */ UDF
					]]]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.lang.Void'
				],
				/* raw type */ 'java.util.concurrent.CompletableFuture',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 137,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public boolean java.util.concurrent.CompletableFuture.cancel(boolean) */
			/* name */ 'cancel',
			[/* parameters */
				[/* parameter */
					/* name */ 'mayInterruptIfRunning',
					/* type */ 'boolean',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public boolean java.util.concurrent.CompletableFuture.isCancelled() */
			/* name */ 'isCancelled',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public boolean java.util.concurrent.CompletableFuture.isDone() */
			/* name */ 'isDone',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public boolean java.util.concurrent.CompletableFuture.completeExceptionally(java.lang.Throwable) */
			/* name */ 'completeExceptionally',
			[/* parameters */
				[/* parameter */
					/* name */ 'ex',
					/* type */ 'java.lang.Throwable',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static <U> java.util.concurrent.CompletableFuture<U> java.util.concurrent.CompletableFuture.supplyAsync(java.util.function.Supplier<U>) */
			/* name */ 'supplyAsync',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* type variable ref */ 'tr', [/* name */ 'U']]
						],
						/* raw type */ 'java.util.function.Supplier',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'U']]
				],
				/* raw type */ 'java.util.concurrent.CompletableFuture',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			[/* type parameters */
				[/* type variable */
					/* name */ 'U',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public static <U> java.util.concurrent.CompletableFuture<U> java.util.concurrent.CompletableFuture.supplyAsync(java.util.function.Supplier<U>,java.util.concurrent.Executor) */
			/* name */ 'supplyAsync',
			[/* parameters */
				[/* parameter */
					/* name */ 'executor',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* type variable ref */ 'tr', [/* name */ 'U']]
						],
						/* raw type */ 'java.util.function.Supplier',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'java.util.concurrent.Executor',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'U']]
				],
				/* raw type */ 'java.util.concurrent.CompletableFuture',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			[/* type parameters */
				[/* type variable */
					/* name */ 'U',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public <U> java.util.concurrent.CompletableFuture<U> java.util.concurrent.CompletableFuture.newIncompleteFuture() */
			/* name */ 'newIncompleteFuture',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'U']]
				],
				/* raw type */ 'java.util.concurrent.CompletableFuture',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			[/* type parameters */
				[/* type variable */
					/* name */ 'U',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public java.util.concurrent.CompletableFuture<T> java.util.concurrent.CompletableFuture.toCompletableFuture() */
			/* name */ 'toCompletableFuture',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'T']]
				],
				/* raw type */ 'java.util.concurrent.CompletableFuture',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.concurrent.Executor java.util.concurrent.CompletableFuture.defaultExecutor() */
			/* name */ 'defaultExecutor',
			/* parameters */,
			/* return */ 'java.util.concurrent.Executor',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.concurrent.CompletableFuture<T> java.util.concurrent.CompletableFuture.completeAsync(java.util.function.Supplier<? extends T>) */
			/* name */ 'completeAsync',
			[/* parameters */
				[/* parameter */
					/* name */ 'supplier',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									[/* type variable ref */ 'tr', [/* name */ 'T']]
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.util.function.Supplier',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'T']]
				],
				/* raw type */ 'java.util.concurrent.CompletableFuture',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.concurrent.CompletableFuture<T> java.util.concurrent.CompletableFuture.completeAsync(java.util.function.Supplier<? extends T>,java.util.concurrent.Executor) */
			/* name */ 'completeAsync',
			[/* parameters */
				[/* parameter */
					/* name */ 'supplier',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									[/* type variable ref */ 'tr', [/* name */ 'T']]
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.util.function.Supplier',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'executor',
					/* type */ 'java.util.concurrent.Executor',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'T']]
				],
				/* raw type */ 'java.util.concurrent.CompletableFuture',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.concurrent.CompletionStage java.util.concurrent.CompletableFuture.whenComplete(java.util.function.BiConsumer) */
			/* name */ 'whenComplete',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.util.function.BiConsumer',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.concurrent.CompletionStage',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.concurrent.CompletableFuture<T> java.util.concurrent.CompletableFuture.whenComplete(java.util.function.BiConsumer<? super T, ? super java.lang.Throwable>) */
			/* name */ 'whenComplete',
			[/* parameters */
				[/* parameter */
					/* name */ 'action',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.lang.Object'
								],
								[/* lower bounds */
									[/* type variable ref */ 'tr', [/* name */ 'T']]
								]
							]],
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.lang.Object'
								],
								[/* lower bounds */
									'java.lang.Throwable'
								]
							]]
						],
						/* raw type */ 'java.util.function.BiConsumer',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'T']]
				],
				/* raw type */ 'java.util.concurrent.CompletableFuture',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.concurrent.CompletionStage java.util.concurrent.CompletableFuture.exceptionallyComposeAsync(java.util.function.Function,java.util.concurrent.Executor) */
			/* name */ 'exceptionallyComposeAsync',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.util.function.Function',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'java.util.concurrent.Executor',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.concurrent.CompletionStage',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.concurrent.CompletionStage java.util.concurrent.CompletableFuture.exceptionallyComposeAsync(java.util.function.Function) */
			/* name */ 'exceptionallyComposeAsync',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.util.function.Function',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.concurrent.CompletionStage',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.concurrent.CompletableFuture<T> java.util.concurrent.CompletableFuture.exceptionallyComposeAsync(java.util.function.Function<java.lang.Throwable, ? extends java.util.concurrent.CompletionStage<T>>,java.util.concurrent.Executor) */
			/* name */ 'exceptionallyComposeAsync',
			[/* parameters */
				[/* parameter */
					/* name */ 'fn',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							'java.lang.Throwable',
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									[/* parameterized type */ 'pt', [
										[/* actual argument types */
											[/* type variable ref */ 'tr', [/* name */ 'T']]
										],
										/* raw type */ 'java.util.concurrent.CompletionStage',
										/* owner type */ UDF
									]]
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.util.function.Function',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'executor',
					/* type */ 'java.util.concurrent.Executor',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'T']]
				],
				/* raw type */ 'java.util.concurrent.CompletableFuture',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.concurrent.CompletableFuture<T> java.util.concurrent.CompletableFuture.exceptionallyComposeAsync(java.util.function.Function<java.lang.Throwable, ? extends java.util.concurrent.CompletionStage<T>>) */
			/* name */ 'exceptionallyComposeAsync',
			[/* parameters */
				[/* parameter */
					/* name */ 'fn',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							'java.lang.Throwable',
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									[/* parameterized type */ 'pt', [
										[/* actual argument types */
											[/* type variable ref */ 'tr', [/* name */ 'T']]
										],
										/* raw type */ 'java.util.concurrent.CompletionStage',
										/* owner type */ UDF
									]]
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.util.function.Function',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'T']]
				],
				/* raw type */ 'java.util.concurrent.CompletableFuture',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.concurrent.CompletionStage java.util.concurrent.CompletableFuture.exceptionallyCompose(java.util.function.Function) */
			/* name */ 'exceptionallyCompose',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.util.function.Function',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.concurrent.CompletionStage',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.concurrent.CompletableFuture<T> java.util.concurrent.CompletableFuture.exceptionallyCompose(java.util.function.Function<java.lang.Throwable, ? extends java.util.concurrent.CompletionStage<T>>) */
			/* name */ 'exceptionallyCompose',
			[/* parameters */
				[/* parameter */
					/* name */ 'fn',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							'java.lang.Throwable',
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									[/* parameterized type */ 'pt', [
										[/* actual argument types */
											[/* type variable ref */ 'tr', [/* name */ 'T']]
										],
										/* raw type */ 'java.util.concurrent.CompletionStage',
										/* owner type */ UDF
									]]
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.util.function.Function',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'T']]
				],
				/* raw type */ 'java.util.concurrent.CompletableFuture',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.concurrent.CompletableFuture<T> java.util.concurrent.CompletableFuture.exceptionallyAsync(java.util.function.Function<java.lang.Throwable, ? extends T>,java.util.concurrent.Executor) */
			/* name */ 'exceptionallyAsync',
			[/* parameters */
				[/* parameter */
					/* name */ 'fn',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							'java.lang.Throwable',
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									[/* type variable ref */ 'tr', [/* name */ 'T']]
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.util.function.Function',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'executor',
					/* type */ 'java.util.concurrent.Executor',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'T']]
				],
				/* raw type */ 'java.util.concurrent.CompletableFuture',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.concurrent.CompletionStage java.util.concurrent.CompletableFuture.exceptionallyAsync(java.util.function.Function,java.util.concurrent.Executor) */
			/* name */ 'exceptionallyAsync',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.util.function.Function',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'java.util.concurrent.Executor',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.concurrent.CompletionStage',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.concurrent.CompletionStage java.util.concurrent.CompletableFuture.exceptionallyAsync(java.util.function.Function) */
			/* name */ 'exceptionallyAsync',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.util.function.Function',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.concurrent.CompletionStage',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.concurrent.CompletableFuture<T> java.util.concurrent.CompletableFuture.exceptionallyAsync(java.util.function.Function<java.lang.Throwable, ? extends T>) */
			/* name */ 'exceptionallyAsync',
			[/* parameters */
				[/* parameter */
					/* name */ 'fn',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							'java.lang.Throwable',
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									[/* type variable ref */ 'tr', [/* name */ 'T']]
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.util.function.Function',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'T']]
				],
				/* raw type */ 'java.util.concurrent.CompletableFuture',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.concurrent.CompletableFuture<T> java.util.concurrent.CompletableFuture.exceptionally(java.util.function.Function<java.lang.Throwable, ? extends T>) */
			/* name */ 'exceptionally',
			[/* parameters */
				[/* parameter */
					/* name */ 'fn',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							'java.lang.Throwable',
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									[/* type variable ref */ 'tr', [/* name */ 'T']]
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.util.function.Function',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'T']]
				],
				/* raw type */ 'java.util.concurrent.CompletableFuture',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.concurrent.CompletionStage java.util.concurrent.CompletableFuture.exceptionally(java.util.function.Function) */
			/* name */ 'exceptionally',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.util.function.Function',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.concurrent.CompletionStage',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.concurrent.CompletionStage java.util.concurrent.CompletableFuture.whenCompleteAsync(java.util.function.BiConsumer) */
			/* name */ 'whenCompleteAsync',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.util.function.BiConsumer',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.concurrent.CompletionStage',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.concurrent.CompletableFuture<T> java.util.concurrent.CompletableFuture.whenCompleteAsync(java.util.function.BiConsumer<? super T, ? super java.lang.Throwable>,java.util.concurrent.Executor) */
			/* name */ 'whenCompleteAsync',
			[/* parameters */
				[/* parameter */
					/* name */ 'action',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.lang.Object'
								],
								[/* lower bounds */
									[/* type variable ref */ 'tr', [/* name */ 'T']]
								]
							]],
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.lang.Object'
								],
								[/* lower bounds */
									'java.lang.Throwable'
								]
							]]
						],
						/* raw type */ 'java.util.function.BiConsumer',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'executor',
					/* type */ 'java.util.concurrent.Executor',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'T']]
				],
				/* raw type */ 'java.util.concurrent.CompletableFuture',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.concurrent.CompletableFuture<T> java.util.concurrent.CompletableFuture.whenCompleteAsync(java.util.function.BiConsumer<? super T, ? super java.lang.Throwable>) */
			/* name */ 'whenCompleteAsync',
			[/* parameters */
				[/* parameter */
					/* name */ 'action',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.lang.Object'
								],
								[/* lower bounds */
									[/* type variable ref */ 'tr', [/* name */ 'T']]
								]
							]],
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.lang.Object'
								],
								[/* lower bounds */
									'java.lang.Throwable'
								]
							]]
						],
						/* raw type */ 'java.util.function.BiConsumer',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'T']]
				],
				/* raw type */ 'java.util.concurrent.CompletableFuture',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.concurrent.CompletionStage java.util.concurrent.CompletableFuture.whenCompleteAsync(java.util.function.BiConsumer,java.util.concurrent.Executor) */
			/* name */ 'whenCompleteAsync',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.util.function.BiConsumer',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'java.util.concurrent.Executor',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.concurrent.CompletionStage',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.concurrent.CompletionStage java.util.concurrent.CompletableFuture.handleAsync(java.util.function.BiFunction) */
			/* name */ 'handleAsync',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.util.function.BiFunction',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.concurrent.CompletionStage',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public <U> java.util.concurrent.CompletableFuture<U> java.util.concurrent.CompletableFuture.handleAsync(java.util.function.BiFunction<? super T, java.lang.Throwable, ? extends U>) */
			/* name */ 'handleAsync',
			[/* parameters */
				[/* parameter */
					/* name */ 'fn',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.lang.Object'
								],
								[/* lower bounds */
									[/* type variable ref */ 'tr', [/* name */ 'T']]
								]
							]],
							'java.lang.Throwable',
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									[/* type variable ref */ 'tr', [/* name */ 'U']]
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.util.function.BiFunction',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'U']]
				],
				/* raw type */ 'java.util.concurrent.CompletableFuture',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			[/* type parameters */
				[/* type variable */
					/* name */ 'U',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public <U> java.util.concurrent.CompletableFuture<U> java.util.concurrent.CompletableFuture.handleAsync(java.util.function.BiFunction<? super T, java.lang.Throwable, ? extends U>,java.util.concurrent.Executor) */
			/* name */ 'handleAsync',
			[/* parameters */
				[/* parameter */
					/* name */ 'fn',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.lang.Object'
								],
								[/* lower bounds */
									[/* type variable ref */ 'tr', [/* name */ 'T']]
								]
							]],
							'java.lang.Throwable',
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									[/* type variable ref */ 'tr', [/* name */ 'U']]
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.util.function.BiFunction',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'executor',
					/* type */ 'java.util.concurrent.Executor',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'U']]
				],
				/* raw type */ 'java.util.concurrent.CompletableFuture',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			[/* type parameters */
				[/* type variable */
					/* name */ 'U',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public java.util.concurrent.CompletionStage java.util.concurrent.CompletableFuture.handleAsync(java.util.function.BiFunction,java.util.concurrent.Executor) */
			/* name */ 'handleAsync',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.util.function.BiFunction',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'java.util.concurrent.Executor',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.concurrent.CompletionStage',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public <U> java.util.concurrent.CompletableFuture<U> java.util.concurrent.CompletableFuture.thenComposeAsync(java.util.function.Function<? super T, ? extends java.util.concurrent.CompletionStage<U>>) */
			/* name */ 'thenComposeAsync',
			[/* parameters */
				[/* parameter */
					/* name */ 'fn',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.lang.Object'
								],
								[/* lower bounds */
									[/* type variable ref */ 'tr', [/* name */ 'T']]
								]
							]],
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									[/* parameterized type */ 'pt', [
										[/* actual argument types */
											[/* type variable ref */ 'tr', [/* name */ 'U']]
										],
										/* raw type */ 'java.util.concurrent.CompletionStage',
										/* owner type */ UDF
									]]
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.util.function.Function',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'U']]
				],
				/* raw type */ 'java.util.concurrent.CompletableFuture',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			[/* type parameters */
				[/* type variable */
					/* name */ 'U',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public java.util.concurrent.CompletionStage java.util.concurrent.CompletableFuture.thenComposeAsync(java.util.function.Function,java.util.concurrent.Executor) */
			/* name */ 'thenComposeAsync',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.util.function.Function',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'java.util.concurrent.Executor',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.concurrent.CompletionStage',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.concurrent.CompletionStage java.util.concurrent.CompletableFuture.thenComposeAsync(java.util.function.Function) */
			/* name */ 'thenComposeAsync',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.util.function.Function',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.concurrent.CompletionStage',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public <U> java.util.concurrent.CompletableFuture<U> java.util.concurrent.CompletableFuture.thenComposeAsync(java.util.function.Function<? super T, ? extends java.util.concurrent.CompletionStage<U>>,java.util.concurrent.Executor) */
			/* name */ 'thenComposeAsync',
			[/* parameters */
				[/* parameter */
					/* name */ 'fn',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.lang.Object'
								],
								[/* lower bounds */
									[/* type variable ref */ 'tr', [/* name */ 'T']]
								]
							]],
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									[/* parameterized type */ 'pt', [
										[/* actual argument types */
											[/* type variable ref */ 'tr', [/* name */ 'U']]
										],
										/* raw type */ 'java.util.concurrent.CompletionStage',
										/* owner type */ UDF
									]]
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.util.function.Function',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'executor',
					/* type */ 'java.util.concurrent.Executor',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'U']]
				],
				/* raw type */ 'java.util.concurrent.CompletableFuture',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			[/* type parameters */
				[/* type variable */
					/* name */ 'U',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public <U> java.util.concurrent.CompletableFuture<U> java.util.concurrent.CompletableFuture.thenCompose(java.util.function.Function<? super T, ? extends java.util.concurrent.CompletionStage<U>>) */
			/* name */ 'thenCompose',
			[/* parameters */
				[/* parameter */
					/* name */ 'fn',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.lang.Object'
								],
								[/* lower bounds */
									[/* type variable ref */ 'tr', [/* name */ 'T']]
								]
							]],
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									[/* parameterized type */ 'pt', [
										[/* actual argument types */
											[/* type variable ref */ 'tr', [/* name */ 'U']]
										],
										/* raw type */ 'java.util.concurrent.CompletionStage',
										/* owner type */ UDF
									]]
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.util.function.Function',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'U']]
				],
				/* raw type */ 'java.util.concurrent.CompletableFuture',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			[/* type parameters */
				[/* type variable */
					/* name */ 'U',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public java.util.concurrent.CompletionStage java.util.concurrent.CompletableFuture.thenCompose(java.util.function.Function) */
			/* name */ 'thenCompose',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.util.function.Function',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.concurrent.CompletionStage',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.concurrent.CompletionStage java.util.concurrent.CompletableFuture.runAfterEitherAsync(java.util.concurrent.CompletionStage,java.lang.Runnable) */
			/* name */ 'runAfterEitherAsync',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.util.concurrent.CompletionStage',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'java.lang.Runnable',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.concurrent.CompletionStage',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.concurrent.CompletionStage java.util.concurrent.CompletableFuture.runAfterEitherAsync(java.util.concurrent.CompletionStage,java.lang.Runnable,java.util.concurrent.Executor) */
			/* name */ 'runAfterEitherAsync',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.util.concurrent.CompletionStage',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'java.lang.Runnable',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg2',
					/* type */ 'java.util.concurrent.Executor',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.concurrent.CompletionStage',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.concurrent.CompletableFuture<java.lang.Void> java.util.concurrent.CompletableFuture.runAfterEitherAsync(java.util.concurrent.CompletionStage<?>,java.lang.Runnable,java.util.concurrent.Executor) */
			/* name */ 'runAfterEitherAsync',
			[/* parameters */
				[/* parameter */
					/* name */ 'other',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.lang.Object'
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.util.concurrent.CompletionStage',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'action',
					/* type */ 'java.lang.Runnable',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'executor',
					/* type */ 'java.util.concurrent.Executor',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.lang.Void'
				],
				/* raw type */ 'java.util.concurrent.CompletableFuture',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.concurrent.CompletableFuture<java.lang.Void> java.util.concurrent.CompletableFuture.runAfterEitherAsync(java.util.concurrent.CompletionStage<?>,java.lang.Runnable) */
			/* name */ 'runAfterEitherAsync',
			[/* parameters */
				[/* parameter */
					/* name */ 'other',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.lang.Object'
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.util.concurrent.CompletionStage',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'action',
					/* type */ 'java.lang.Runnable',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.lang.Void'
				],
				/* raw type */ 'java.util.concurrent.CompletableFuture',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.concurrent.CompletableFuture<java.lang.Void> java.util.concurrent.CompletableFuture.runAfterEither(java.util.concurrent.CompletionStage<?>,java.lang.Runnable) */
			/* name */ 'runAfterEither',
			[/* parameters */
				[/* parameter */
					/* name */ 'other',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.lang.Object'
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.util.concurrent.CompletionStage',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'action',
					/* type */ 'java.lang.Runnable',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.lang.Void'
				],
				/* raw type */ 'java.util.concurrent.CompletableFuture',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.concurrent.CompletionStage java.util.concurrent.CompletableFuture.runAfterEither(java.util.concurrent.CompletionStage,java.lang.Runnable) */
			/* name */ 'runAfterEither',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.util.concurrent.CompletionStage',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'java.lang.Runnable',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.concurrent.CompletionStage',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.concurrent.CompletableFuture<java.lang.Void> java.util.concurrent.CompletableFuture.acceptEitherAsync(java.util.concurrent.CompletionStage<? extends T>,java.util.function.Consumer<? super T>) */
			/* name */ 'acceptEitherAsync',
			[/* parameters */
				[/* parameter */
					/* name */ 'other',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									[/* type variable ref */ 'tr', [/* name */ 'T']]
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.util.concurrent.CompletionStage',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'action',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.lang.Object'
								],
								[/* lower bounds */
									[/* type variable ref */ 'tr', [/* name */ 'T']]
								]
							]]
						],
						/* raw type */ 'java.util.function.Consumer',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.lang.Void'
				],
				/* raw type */ 'java.util.concurrent.CompletableFuture',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.concurrent.CompletionStage java.util.concurrent.CompletableFuture.acceptEitherAsync(java.util.concurrent.CompletionStage,java.util.function.Consumer) */
			/* name */ 'acceptEitherAsync',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.util.concurrent.CompletionStage',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'java.util.function.Consumer',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.concurrent.CompletionStage',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.concurrent.CompletableFuture<java.lang.Void> java.util.concurrent.CompletableFuture.acceptEitherAsync(java.util.concurrent.CompletionStage<? extends T>,java.util.function.Consumer<? super T>,java.util.concurrent.Executor) */
			/* name */ 'acceptEitherAsync',
			[/* parameters */
				[/* parameter */
					/* name */ 'other',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									[/* type variable ref */ 'tr', [/* name */ 'T']]
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.util.concurrent.CompletionStage',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'action',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.lang.Object'
								],
								[/* lower bounds */
									[/* type variable ref */ 'tr', [/* name */ 'T']]
								]
							]]
						],
						/* raw type */ 'java.util.function.Consumer',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'executor',
					/* type */ 'java.util.concurrent.Executor',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.lang.Void'
				],
				/* raw type */ 'java.util.concurrent.CompletableFuture',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.concurrent.CompletionStage java.util.concurrent.CompletableFuture.acceptEitherAsync(java.util.concurrent.CompletionStage,java.util.function.Consumer,java.util.concurrent.Executor) */
			/* name */ 'acceptEitherAsync',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.util.concurrent.CompletionStage',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'java.util.function.Consumer',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg2',
					/* type */ 'java.util.concurrent.Executor',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.concurrent.CompletionStage',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.concurrent.CompletableFuture<java.lang.Void> java.util.concurrent.CompletableFuture.acceptEither(java.util.concurrent.CompletionStage<? extends T>,java.util.function.Consumer<? super T>) */
			/* name */ 'acceptEither',
			[/* parameters */
				[/* parameter */
					/* name */ 'other',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									[/* type variable ref */ 'tr', [/* name */ 'T']]
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.util.concurrent.CompletionStage',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'action',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.lang.Object'
								],
								[/* lower bounds */
									[/* type variable ref */ 'tr', [/* name */ 'T']]
								]
							]]
						],
						/* raw type */ 'java.util.function.Consumer',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.lang.Void'
				],
				/* raw type */ 'java.util.concurrent.CompletableFuture',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.concurrent.CompletionStage java.util.concurrent.CompletableFuture.acceptEither(java.util.concurrent.CompletionStage,java.util.function.Consumer) */
			/* name */ 'acceptEither',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.util.concurrent.CompletionStage',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'java.util.function.Consumer',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.concurrent.CompletionStage',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public <U> java.util.concurrent.CompletableFuture<U> java.util.concurrent.CompletableFuture.applyToEitherAsync(java.util.concurrent.CompletionStage<? extends T>,java.util.function.Function<? super T, U>) */
			/* name */ 'applyToEitherAsync',
			[/* parameters */
				[/* parameter */
					/* name */ 'other',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									[/* type variable ref */ 'tr', [/* name */ 'T']]
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.util.concurrent.CompletionStage',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'fn',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.lang.Object'
								],
								[/* lower bounds */
									[/* type variable ref */ 'tr', [/* name */ 'T']]
								]
							]],
							[/* type variable ref */ 'tr', [/* name */ 'U']]
						],
						/* raw type */ 'java.util.function.Function',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'U']]
				],
				/* raw type */ 'java.util.concurrent.CompletableFuture',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			[/* type parameters */
				[/* type variable */
					/* name */ 'U',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public <U> java.util.concurrent.CompletableFuture<U> java.util.concurrent.CompletableFuture.applyToEitherAsync(java.util.concurrent.CompletionStage<? extends T>,java.util.function.Function<? super T, U>,java.util.concurrent.Executor) */
			/* name */ 'applyToEitherAsync',
			[/* parameters */
				[/* parameter */
					/* name */ 'other',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									[/* type variable ref */ 'tr', [/* name */ 'T']]
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.util.concurrent.CompletionStage',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'fn',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.lang.Object'
								],
								[/* lower bounds */
									[/* type variable ref */ 'tr', [/* name */ 'T']]
								]
							]],
							[/* type variable ref */ 'tr', [/* name */ 'U']]
						],
						/* raw type */ 'java.util.function.Function',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'executor',
					/* type */ 'java.util.concurrent.Executor',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'U']]
				],
				/* raw type */ 'java.util.concurrent.CompletableFuture',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			[/* type parameters */
				[/* type variable */
					/* name */ 'U',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public java.util.concurrent.CompletionStage java.util.concurrent.CompletableFuture.applyToEitherAsync(java.util.concurrent.CompletionStage,java.util.function.Function,java.util.concurrent.Executor) */
			/* name */ 'applyToEitherAsync',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.util.concurrent.CompletionStage',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'java.util.function.Function',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg2',
					/* type */ 'java.util.concurrent.Executor',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.concurrent.CompletionStage',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.concurrent.CompletionStage java.util.concurrent.CompletableFuture.applyToEitherAsync(java.util.concurrent.CompletionStage,java.util.function.Function) */
			/* name */ 'applyToEitherAsync',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.util.concurrent.CompletionStage',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'java.util.function.Function',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.concurrent.CompletionStage',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.concurrent.CompletionStage java.util.concurrent.CompletableFuture.applyToEither(java.util.concurrent.CompletionStage,java.util.function.Function) */
			/* name */ 'applyToEither',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.util.concurrent.CompletionStage',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'java.util.function.Function',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.concurrent.CompletionStage',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public <U> java.util.concurrent.CompletableFuture<U> java.util.concurrent.CompletableFuture.applyToEither(java.util.concurrent.CompletionStage<? extends T>,java.util.function.Function<? super T, U>) */
			/* name */ 'applyToEither',
			[/* parameters */
				[/* parameter */
					/* name */ 'other',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									[/* type variable ref */ 'tr', [/* name */ 'T']]
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.util.concurrent.CompletionStage',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'fn',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.lang.Object'
								],
								[/* lower bounds */
									[/* type variable ref */ 'tr', [/* name */ 'T']]
								]
							]],
							[/* type variable ref */ 'tr', [/* name */ 'U']]
						],
						/* raw type */ 'java.util.function.Function',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'U']]
				],
				/* raw type */ 'java.util.concurrent.CompletableFuture',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			[/* type parameters */
				[/* type variable */
					/* name */ 'U',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public java.util.concurrent.CompletableFuture<java.lang.Void> java.util.concurrent.CompletableFuture.runAfterBothAsync(java.util.concurrent.CompletionStage<?>,java.lang.Runnable,java.util.concurrent.Executor) */
			/* name */ 'runAfterBothAsync',
			[/* parameters */
				[/* parameter */
					/* name */ 'other',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.lang.Object'
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.util.concurrent.CompletionStage',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'action',
					/* type */ 'java.lang.Runnable',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'executor',
					/* type */ 'java.util.concurrent.Executor',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.lang.Void'
				],
				/* raw type */ 'java.util.concurrent.CompletableFuture',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.concurrent.CompletableFuture<java.lang.Void> java.util.concurrent.CompletableFuture.runAfterBothAsync(java.util.concurrent.CompletionStage<?>,java.lang.Runnable) */
			/* name */ 'runAfterBothAsync',
			[/* parameters */
				[/* parameter */
					/* name */ 'other',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.lang.Object'
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.util.concurrent.CompletionStage',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'action',
					/* type */ 'java.lang.Runnable',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.lang.Void'
				],
				/* raw type */ 'java.util.concurrent.CompletableFuture',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.concurrent.CompletionStage java.util.concurrent.CompletableFuture.runAfterBothAsync(java.util.concurrent.CompletionStage,java.lang.Runnable,java.util.concurrent.Executor) */
			/* name */ 'runAfterBothAsync',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.util.concurrent.CompletionStage',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'java.lang.Runnable',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg2',
					/* type */ 'java.util.concurrent.Executor',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.concurrent.CompletionStage',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.concurrent.CompletionStage java.util.concurrent.CompletableFuture.runAfterBothAsync(java.util.concurrent.CompletionStage,java.lang.Runnable) */
			/* name */ 'runAfterBothAsync',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.util.concurrent.CompletionStage',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'java.lang.Runnable',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.concurrent.CompletionStage',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.concurrent.CompletableFuture<java.lang.Void> java.util.concurrent.CompletableFuture.runAfterBoth(java.util.concurrent.CompletionStage<?>,java.lang.Runnable) */
			/* name */ 'runAfterBoth',
			[/* parameters */
				[/* parameter */
					/* name */ 'other',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.lang.Object'
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.util.concurrent.CompletionStage',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'action',
					/* type */ 'java.lang.Runnable',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.lang.Void'
				],
				/* raw type */ 'java.util.concurrent.CompletableFuture',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.concurrent.CompletionStage java.util.concurrent.CompletableFuture.runAfterBoth(java.util.concurrent.CompletionStage,java.lang.Runnable) */
			/* name */ 'runAfterBoth',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.util.concurrent.CompletionStage',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'java.lang.Runnable',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.concurrent.CompletionStage',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public <U> java.util.concurrent.CompletableFuture<java.lang.Void> java.util.concurrent.CompletableFuture.thenAcceptBothAsync(java.util.concurrent.CompletionStage<? extends U>,java.util.function.BiConsumer<? super T, ? super U>) */
			/* name */ 'thenAcceptBothAsync',
			[/* parameters */
				[/* parameter */
					/* name */ 'other',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									[/* type variable ref */ 'tr', [/* name */ 'U']]
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.util.concurrent.CompletionStage',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'action',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.lang.Object'
								],
								[/* lower bounds */
									[/* type variable ref */ 'tr', [/* name */ 'T']]
								]
							]],
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.lang.Object'
								],
								[/* lower bounds */
									[/* type variable ref */ 'tr', [/* name */ 'U']]
								]
							]]
						],
						/* raw type */ 'java.util.function.BiConsumer',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.lang.Void'
				],
				/* raw type */ 'java.util.concurrent.CompletableFuture',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			[/* type parameters */
				[/* type variable */
					/* name */ 'U',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public java.util.concurrent.CompletionStage java.util.concurrent.CompletableFuture.thenAcceptBothAsync(java.util.concurrent.CompletionStage,java.util.function.BiConsumer) */
			/* name */ 'thenAcceptBothAsync',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.util.concurrent.CompletionStage',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'java.util.function.BiConsumer',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.concurrent.CompletionStage',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public <U> java.util.concurrent.CompletableFuture<java.lang.Void> java.util.concurrent.CompletableFuture.thenAcceptBothAsync(java.util.concurrent.CompletionStage<? extends U>,java.util.function.BiConsumer<? super T, ? super U>,java.util.concurrent.Executor) */
			/* name */ 'thenAcceptBothAsync',
			[/* parameters */
				[/* parameter */
					/* name */ 'other',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									[/* type variable ref */ 'tr', [/* name */ 'U']]
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.util.concurrent.CompletionStage',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'action',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.lang.Object'
								],
								[/* lower bounds */
									[/* type variable ref */ 'tr', [/* name */ 'T']]
								]
							]],
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.lang.Object'
								],
								[/* lower bounds */
									[/* type variable ref */ 'tr', [/* name */ 'U']]
								]
							]]
						],
						/* raw type */ 'java.util.function.BiConsumer',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'executor',
					/* type */ 'java.util.concurrent.Executor',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.lang.Void'
				],
				/* raw type */ 'java.util.concurrent.CompletableFuture',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			[/* type parameters */
				[/* type variable */
					/* name */ 'U',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public java.util.concurrent.CompletionStage java.util.concurrent.CompletableFuture.thenAcceptBothAsync(java.util.concurrent.CompletionStage,java.util.function.BiConsumer,java.util.concurrent.Executor) */
			/* name */ 'thenAcceptBothAsync',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.util.concurrent.CompletionStage',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'java.util.function.BiConsumer',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg2',
					/* type */ 'java.util.concurrent.Executor',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.concurrent.CompletionStage',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.concurrent.CompletionStage java.util.concurrent.CompletableFuture.thenAcceptBoth(java.util.concurrent.CompletionStage,java.util.function.BiConsumer) */
			/* name */ 'thenAcceptBoth',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.util.concurrent.CompletionStage',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'java.util.function.BiConsumer',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.concurrent.CompletionStage',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public <U> java.util.concurrent.CompletableFuture<java.lang.Void> java.util.concurrent.CompletableFuture.thenAcceptBoth(java.util.concurrent.CompletionStage<? extends U>,java.util.function.BiConsumer<? super T, ? super U>) */
			/* name */ 'thenAcceptBoth',
			[/* parameters */
				[/* parameter */
					/* name */ 'other',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									[/* type variable ref */ 'tr', [/* name */ 'U']]
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.util.concurrent.CompletionStage',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'action',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.lang.Object'
								],
								[/* lower bounds */
									[/* type variable ref */ 'tr', [/* name */ 'T']]
								]
							]],
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.lang.Object'
								],
								[/* lower bounds */
									[/* type variable ref */ 'tr', [/* name */ 'U']]
								]
							]]
						],
						/* raw type */ 'java.util.function.BiConsumer',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.lang.Void'
				],
				/* raw type */ 'java.util.concurrent.CompletableFuture',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			[/* type parameters */
				[/* type variable */
					/* name */ 'U',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public <U,V> java.util.concurrent.CompletableFuture<V> java.util.concurrent.CompletableFuture.thenCombineAsync(java.util.concurrent.CompletionStage<? extends U>,java.util.function.BiFunction<? super T, ? super U, ? extends V>) */
			/* name */ 'thenCombineAsync',
			[/* parameters */
				[/* parameter */
					/* name */ 'other',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									[/* type variable ref */ 'tr', [/* name */ 'U']]
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.util.concurrent.CompletionStage',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'fn',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.lang.Object'
								],
								[/* lower bounds */
									[/* type variable ref */ 'tr', [/* name */ 'T']]
								]
							]],
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.lang.Object'
								],
								[/* lower bounds */
									[/* type variable ref */ 'tr', [/* name */ 'U']]
								]
							]],
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									[/* type variable ref */ 'tr', [/* name */ 'V']]
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.util.function.BiFunction',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'V']]
				],
				/* raw type */ 'java.util.concurrent.CompletableFuture',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			[/* type parameters */
				[/* type variable */
					/* name */ 'U',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'V',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public java.util.concurrent.CompletionStage java.util.concurrent.CompletableFuture.thenCombineAsync(java.util.concurrent.CompletionStage,java.util.function.BiFunction,java.util.concurrent.Executor) */
			/* name */ 'thenCombineAsync',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.util.concurrent.CompletionStage',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'java.util.function.BiFunction',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg2',
					/* type */ 'java.util.concurrent.Executor',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.concurrent.CompletionStage',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public <U,V> java.util.concurrent.CompletableFuture<V> java.util.concurrent.CompletableFuture.thenCombineAsync(java.util.concurrent.CompletionStage<? extends U>,java.util.function.BiFunction<? super T, ? super U, ? extends V>,java.util.concurrent.Executor) */
			/* name */ 'thenCombineAsync',
			[/* parameters */
				[/* parameter */
					/* name */ 'other',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									[/* type variable ref */ 'tr', [/* name */ 'U']]
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.util.concurrent.CompletionStage',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'fn',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.lang.Object'
								],
								[/* lower bounds */
									[/* type variable ref */ 'tr', [/* name */ 'T']]
								]
							]],
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.lang.Object'
								],
								[/* lower bounds */
									[/* type variable ref */ 'tr', [/* name */ 'U']]
								]
							]],
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									[/* type variable ref */ 'tr', [/* name */ 'V']]
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.util.function.BiFunction',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'executor',
					/* type */ 'java.util.concurrent.Executor',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'V']]
				],
				/* raw type */ 'java.util.concurrent.CompletableFuture',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			[/* type parameters */
				[/* type variable */
					/* name */ 'U',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'V',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public java.util.concurrent.CompletionStage java.util.concurrent.CompletableFuture.thenCombineAsync(java.util.concurrent.CompletionStage,java.util.function.BiFunction) */
			/* name */ 'thenCombineAsync',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.util.concurrent.CompletionStage',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'java.util.function.BiFunction',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.concurrent.CompletionStage',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public <U,V> java.util.concurrent.CompletableFuture<V> java.util.concurrent.CompletableFuture.thenCombine(java.util.concurrent.CompletionStage<? extends U>,java.util.function.BiFunction<? super T, ? super U, ? extends V>) */
			/* name */ 'thenCombine',
			[/* parameters */
				[/* parameter */
					/* name */ 'other',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									[/* type variable ref */ 'tr', [/* name */ 'U']]
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.util.concurrent.CompletionStage',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'fn',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.lang.Object'
								],
								[/* lower bounds */
									[/* type variable ref */ 'tr', [/* name */ 'T']]
								]
							]],
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.lang.Object'
								],
								[/* lower bounds */
									[/* type variable ref */ 'tr', [/* name */ 'U']]
								]
							]],
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									[/* type variable ref */ 'tr', [/* name */ 'V']]
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.util.function.BiFunction',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'V']]
				],
				/* raw type */ 'java.util.concurrent.CompletableFuture',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			[/* type parameters */
				[/* type variable */
					/* name */ 'U',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'V',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public java.util.concurrent.CompletionStage java.util.concurrent.CompletableFuture.thenCombine(java.util.concurrent.CompletionStage,java.util.function.BiFunction) */
			/* name */ 'thenCombine',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.util.concurrent.CompletionStage',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'java.util.function.BiFunction',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.concurrent.CompletionStage',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.concurrent.CompletableFuture<java.lang.Void> java.util.concurrent.CompletableFuture.thenRunAsync(java.lang.Runnable,java.util.concurrent.Executor) */
			/* name */ 'thenRunAsync',
			[/* parameters */
				[/* parameter */
					/* name */ 'action',
					/* type */ 'java.lang.Runnable',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'executor',
					/* type */ 'java.util.concurrent.Executor',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.lang.Void'
				],
				/* raw type */ 'java.util.concurrent.CompletableFuture',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.concurrent.CompletableFuture<java.lang.Void> java.util.concurrent.CompletableFuture.thenRunAsync(java.lang.Runnable) */
			/* name */ 'thenRunAsync',
			[/* parameters */
				[/* parameter */
					/* name */ 'action',
					/* type */ 'java.lang.Runnable',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.lang.Void'
				],
				/* raw type */ 'java.util.concurrent.CompletableFuture',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.concurrent.CompletionStage java.util.concurrent.CompletableFuture.thenRunAsync(java.lang.Runnable,java.util.concurrent.Executor) */
			/* name */ 'thenRunAsync',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.Runnable',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'java.util.concurrent.Executor',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.concurrent.CompletionStage',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.concurrent.CompletionStage java.util.concurrent.CompletableFuture.thenRunAsync(java.lang.Runnable) */
			/* name */ 'thenRunAsync',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.Runnable',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.concurrent.CompletionStage',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.concurrent.CompletableFuture<java.lang.Void> java.util.concurrent.CompletableFuture.thenRun(java.lang.Runnable) */
			/* name */ 'thenRun',
			[/* parameters */
				[/* parameter */
					/* name */ 'action',
					/* type */ 'java.lang.Runnable',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.lang.Void'
				],
				/* raw type */ 'java.util.concurrent.CompletableFuture',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.concurrent.CompletionStage java.util.concurrent.CompletableFuture.thenRun(java.lang.Runnable) */
			/* name */ 'thenRun',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.Runnable',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.concurrent.CompletionStage',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.concurrent.CompletionStage java.util.concurrent.CompletableFuture.thenAcceptAsync(java.util.function.Consumer,java.util.concurrent.Executor) */
			/* name */ 'thenAcceptAsync',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.util.function.Consumer',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'java.util.concurrent.Executor',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.concurrent.CompletionStage',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.concurrent.CompletableFuture<java.lang.Void> java.util.concurrent.CompletableFuture.thenAcceptAsync(java.util.function.Consumer<? super T>) */
			/* name */ 'thenAcceptAsync',
			[/* parameters */
				[/* parameter */
					/* name */ 'action',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.lang.Object'
								],
								[/* lower bounds */
									[/* type variable ref */ 'tr', [/* name */ 'T']]
								]
							]]
						],
						/* raw type */ 'java.util.function.Consumer',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.lang.Void'
				],
				/* raw type */ 'java.util.concurrent.CompletableFuture',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.concurrent.CompletableFuture<java.lang.Void> java.util.concurrent.CompletableFuture.thenAcceptAsync(java.util.function.Consumer<? super T>,java.util.concurrent.Executor) */
			/* name */ 'thenAcceptAsync',
			[/* parameters */
				[/* parameter */
					/* name */ 'action',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.lang.Object'
								],
								[/* lower bounds */
									[/* type variable ref */ 'tr', [/* name */ 'T']]
								]
							]]
						],
						/* raw type */ 'java.util.function.Consumer',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'executor',
					/* type */ 'java.util.concurrent.Executor',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.lang.Void'
				],
				/* raw type */ 'java.util.concurrent.CompletableFuture',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.concurrent.CompletionStage java.util.concurrent.CompletableFuture.thenAcceptAsync(java.util.function.Consumer) */
			/* name */ 'thenAcceptAsync',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.util.function.Consumer',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.concurrent.CompletionStage',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.concurrent.CompletionStage java.util.concurrent.CompletableFuture.thenAccept(java.util.function.Consumer) */
			/* name */ 'thenAccept',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.util.function.Consumer',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.concurrent.CompletionStage',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.concurrent.CompletableFuture<java.lang.Void> java.util.concurrent.CompletableFuture.thenAccept(java.util.function.Consumer<? super T>) */
			/* name */ 'thenAccept',
			[/* parameters */
				[/* parameter */
					/* name */ 'action',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.lang.Object'
								],
								[/* lower bounds */
									[/* type variable ref */ 'tr', [/* name */ 'T']]
								]
							]]
						],
						/* raw type */ 'java.util.function.Consumer',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.lang.Void'
				],
				/* raw type */ 'java.util.concurrent.CompletableFuture',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public <U> java.util.concurrent.CompletableFuture<U> java.util.concurrent.CompletableFuture.thenApplyAsync(java.util.function.Function<? super T, ? extends U>) */
			/* name */ 'thenApplyAsync',
			[/* parameters */
				[/* parameter */
					/* name */ 'fn',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.lang.Object'
								],
								[/* lower bounds */
									[/* type variable ref */ 'tr', [/* name */ 'T']]
								]
							]],
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									[/* type variable ref */ 'tr', [/* name */ 'U']]
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.util.function.Function',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'U']]
				],
				/* raw type */ 'java.util.concurrent.CompletableFuture',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			[/* type parameters */
				[/* type variable */
					/* name */ 'U',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public java.util.concurrent.CompletionStage java.util.concurrent.CompletableFuture.thenApplyAsync(java.util.function.Function,java.util.concurrent.Executor) */
			/* name */ 'thenApplyAsync',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.util.function.Function',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'java.util.concurrent.Executor',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.concurrent.CompletionStage',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.concurrent.CompletionStage java.util.concurrent.CompletableFuture.thenApplyAsync(java.util.function.Function) */
			/* name */ 'thenApplyAsync',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.util.function.Function',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.concurrent.CompletionStage',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public <U> java.util.concurrent.CompletableFuture<U> java.util.concurrent.CompletableFuture.thenApplyAsync(java.util.function.Function<? super T, ? extends U>,java.util.concurrent.Executor) */
			/* name */ 'thenApplyAsync',
			[/* parameters */
				[/* parameter */
					/* name */ 'fn',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.lang.Object'
								],
								[/* lower bounds */
									[/* type variable ref */ 'tr', [/* name */ 'T']]
								]
							]],
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									[/* type variable ref */ 'tr', [/* name */ 'U']]
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.util.function.Function',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'executor',
					/* type */ 'java.util.concurrent.Executor',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'U']]
				],
				/* raw type */ 'java.util.concurrent.CompletableFuture',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			[/* type parameters */
				[/* type variable */
					/* name */ 'U',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public java.util.concurrent.CompletionStage java.util.concurrent.CompletableFuture.thenApply(java.util.function.Function) */
			/* name */ 'thenApply',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.util.function.Function',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.concurrent.CompletionStage',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public <U> java.util.concurrent.CompletableFuture<U> java.util.concurrent.CompletableFuture.thenApply(java.util.function.Function<? super T, ? extends U>) */
			/* name */ 'thenApply',
			[/* parameters */
				[/* parameter */
					/* name */ 'fn',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.lang.Object'
								],
								[/* lower bounds */
									[/* type variable ref */ 'tr', [/* name */ 'T']]
								]
							]],
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									[/* type variable ref */ 'tr', [/* name */ 'U']]
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.util.function.Function',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'U']]
				],
				/* raw type */ 'java.util.concurrent.CompletableFuture',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			[/* type parameters */
				[/* type variable */
					/* name */ 'U',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public static java.util.concurrent.CompletableFuture<java.lang.Void> java.util.concurrent.CompletableFuture.runAsync(java.lang.Runnable,java.util.concurrent.Executor) */
			/* name */ 'runAsync',
			[/* parameters */
				[/* parameter */
					/* name */ 'executor',
					/* type */ 'java.lang.Runnable',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'java.util.concurrent.Executor',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.lang.Void'
				],
				/* raw type */ 'java.util.concurrent.CompletableFuture',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.util.concurrent.CompletableFuture<java.lang.Void> java.util.concurrent.CompletableFuture.runAsync(java.lang.Runnable) */
			/* name */ 'runAsync',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.Runnable',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.lang.Void'
				],
				/* raw type */ 'java.util.concurrent.CompletableFuture',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static <U> java.util.concurrent.CompletableFuture<U> java.util.concurrent.CompletableFuture.completedFuture(U) */
			/* name */ 'completedFuture',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'U']],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'U']]
				],
				/* raw type */ 'java.util.concurrent.CompletableFuture',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			[/* type parameters */
				[/* type variable */
					/* name */ 'U',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public T java.util.concurrent.CompletableFuture.getNow(T) */
			/* name */ 'getNow',
			[/* parameters */
				[/* parameter */
					/* name */ 'valueIfAbsent',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T']],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* type variable ref */ 'tr', [/* name */ 'T']],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.util.concurrent.CompletableFuture<java.lang.Object> java.util.concurrent.CompletableFuture.anyOf(java.util.concurrent.CompletableFuture<?>...) */
			/* name */ 'anyOf',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ [/* generic array type */ 'ga', [[/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.lang.Object'
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.util.concurrent.CompletableFuture',
						/* owner type */ UDF
					]]]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.lang.Object'
				],
				/* raw type */ 'java.util.concurrent.CompletableFuture',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 137,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public boolean java.util.concurrent.CompletableFuture.isCompletedExceptionally() */
			/* name */ 'isCompletedExceptionally',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void java.util.concurrent.CompletableFuture.obtrudeValue(T) */
			/* name */ 'obtrudeValue',
			[/* parameters */
				[/* parameter */
					/* name */ 'value',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T']],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void java.util.concurrent.CompletableFuture.obtrudeException(java.lang.Throwable) */
			/* name */ 'obtrudeException',
			[/* parameters */
				[/* parameter */
					/* name */ 'ex',
					/* type */ 'java.lang.Throwable',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int java.util.concurrent.CompletableFuture.getNumberOfDependents() */
			/* name */ 'getNumberOfDependents',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.concurrent.CompletionStage<T> java.util.concurrent.CompletableFuture.minimalCompletionStage() */
			/* name */ 'minimalCompletionStage',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'T']]
				],
				/* raw type */ 'java.util.concurrent.CompletionStage',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.concurrent.CompletableFuture<T> java.util.concurrent.CompletableFuture.orTimeout(long,java.util.concurrent.TimeUnit) */
			/* name */ 'orTimeout',
			[/* parameters */
				[/* parameter */
					/* name */ 'timeout',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'unit',
					/* type */ 'java.util.concurrent.TimeUnit',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'T']]
				],
				/* raw type */ 'java.util.concurrent.CompletableFuture',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.concurrent.CompletableFuture<T> java.util.concurrent.CompletableFuture.completeOnTimeout(T,long,java.util.concurrent.TimeUnit) */
			/* name */ 'completeOnTimeout',
			[/* parameters */
				[/* parameter */
					/* name */ 'value',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'timeout',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'unit',
					/* type */ 'java.util.concurrent.TimeUnit',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'T']]
				],
				/* raw type */ 'java.util.concurrent.CompletableFuture',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.util.concurrent.Executor java.util.concurrent.CompletableFuture.delayedExecutor(long,java.util.concurrent.TimeUnit) */
			/* name */ 'delayedExecutor',
			[/* parameters */
				[/* parameter */
					/* name */ 'unit',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'java.util.concurrent.TimeUnit',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.concurrent.Executor',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.util.concurrent.Executor java.util.concurrent.CompletableFuture.delayedExecutor(long,java.util.concurrent.TimeUnit,java.util.concurrent.Executor) */
			/* name */ 'delayedExecutor',
			[/* parameters */
				[/* parameter */
					/* name */ 'unit',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'executor',
					/* type */ 'java.util.concurrent.TimeUnit',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg2',
					/* type */ 'java.util.concurrent.Executor',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.concurrent.Executor',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static <U> java.util.concurrent.CompletionStage<U> java.util.concurrent.CompletableFuture.completedStage(U) */
			/* name */ 'completedStage',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'U']],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'U']]
				],
				/* raw type */ 'java.util.concurrent.CompletionStage',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			[/* type parameters */
				[/* type variable */
					/* name */ 'U',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public static <U> java.util.concurrent.CompletableFuture<U> java.util.concurrent.CompletableFuture.failedFuture(java.lang.Throwable) */
			/* name */ 'failedFuture',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.Throwable',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'U']]
				],
				/* raw type */ 'java.util.concurrent.CompletableFuture',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			[/* type parameters */
				[/* type variable */
					/* name */ 'U',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public static <U> java.util.concurrent.CompletionStage<U> java.util.concurrent.CompletableFuture.failedStage(java.lang.Throwable) */
			/* name */ 'failedStage',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.Throwable',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'U']]
				],
				/* raw type */ 'java.util.concurrent.CompletionStage',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			[/* type parameters */
				[/* type variable */
					/* name */ 'U',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				]
			]
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
