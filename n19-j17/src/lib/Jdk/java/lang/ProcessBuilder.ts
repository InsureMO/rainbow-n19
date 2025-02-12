import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.lang.ProcessBuilder', [
	/* super class, extends java.lang.Object */
	'java.lang.Object',
	/* interfaces */,
	/* modifiers */ 17,
	/* declared annotations */,
	/* type parameters */,
	[/* declared constructors */
		[/* public java.lang.ProcessBuilder(java.util.List<java.lang.String>) */
			[/* parameters */
				[/* parameter */
					/* name */ 'command',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							'java.lang.String'
						],
						/* raw type */ 'java.util.List',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.ProcessBuilder(java.lang.String...) */
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ '[Ljava.lang.String;',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* exceptions */,
			/* modifiers */ 129,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	[/* declared methods */
		[/* public java.lang.Process java.lang.ProcessBuilder.start() throws java.io.IOException */
			/* name */ 'start',
			/* parameters */,
			/* return */ 'java.lang.Process',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.io.IOException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.io.File java.lang.ProcessBuilder.directory() */
			/* name */ 'directory',
			/* parameters */,
			/* return */ 'java.io.File',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.ProcessBuilder java.lang.ProcessBuilder.directory(java.io.File) */
			/* name */ 'directory',
			[/* parameters */
				[/* parameter */
					/* name */ 'directory',
					/* type */ 'java.io.File',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.ProcessBuilder',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.Map<java.lang.String, java.lang.String> java.lang.ProcessBuilder.environment() */
			/* name */ 'environment',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.lang.String',
					'java.lang.String'
				],
				/* raw type */ 'java.util.Map',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.List<java.lang.String> java.lang.ProcessBuilder.command() */
			/* name */ 'command',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.lang.String'
				],
				/* raw type */ 'java.util.List',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.ProcessBuilder java.lang.ProcessBuilder.command(java.lang.String...) */
			/* name */ 'command',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ '[Ljava.lang.String;',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.ProcessBuilder',
			/* exceptions */,
			/* modifiers */ 129,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.ProcessBuilder java.lang.ProcessBuilder.command(java.util.List<java.lang.String>) */
			/* name */ 'command',
			[/* parameters */
				[/* parameter */
					/* name */ 'command',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							'java.lang.String'
						],
						/* raw type */ 'java.util.List',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.ProcessBuilder',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.ProcessBuilder$Redirect java.lang.ProcessBuilder.redirectInput() */
			/* name */ 'redirectInput',
			/* parameters */,
			/* return */ 'java.lang.ProcessBuilder$Redirect',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.ProcessBuilder java.lang.ProcessBuilder.redirectInput(java.io.File) */
			/* name */ 'redirectInput',
			[/* parameters */
				[/* parameter */
					/* name */ 'file',
					/* type */ 'java.io.File',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.ProcessBuilder',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.ProcessBuilder java.lang.ProcessBuilder.redirectInput(java.lang.ProcessBuilder$Redirect) */
			/* name */ 'redirectInput',
			[/* parameters */
				[/* parameter */
					/* name */ 'source',
					/* type */ 'java.lang.ProcessBuilder$Redirect',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.ProcessBuilder',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.ProcessBuilder java.lang.ProcessBuilder.redirectOutput(java.lang.ProcessBuilder$Redirect) */
			/* name */ 'redirectOutput',
			[/* parameters */
				[/* parameter */
					/* name */ 'destination',
					/* type */ 'java.lang.ProcessBuilder$Redirect',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.ProcessBuilder',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.ProcessBuilder$Redirect java.lang.ProcessBuilder.redirectOutput() */
			/* name */ 'redirectOutput',
			/* parameters */,
			/* return */ 'java.lang.ProcessBuilder$Redirect',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.ProcessBuilder java.lang.ProcessBuilder.redirectOutput(java.io.File) */
			/* name */ 'redirectOutput',
			[/* parameters */
				[/* parameter */
					/* name */ 'file',
					/* type */ 'java.io.File',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.ProcessBuilder',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.ProcessBuilder java.lang.ProcessBuilder.redirectError(java.io.File) */
			/* name */ 'redirectError',
			[/* parameters */
				[/* parameter */
					/* name */ 'file',
					/* type */ 'java.io.File',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.ProcessBuilder',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.ProcessBuilder$Redirect java.lang.ProcessBuilder.redirectError() */
			/* name */ 'redirectError',
			/* parameters */,
			/* return */ 'java.lang.ProcessBuilder$Redirect',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.ProcessBuilder java.lang.ProcessBuilder.redirectError(java.lang.ProcessBuilder$Redirect) */
			/* name */ 'redirectError',
			[/* parameters */
				[/* parameter */
					/* name */ 'destination',
					/* type */ 'java.lang.ProcessBuilder$Redirect',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.ProcessBuilder',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.ProcessBuilder java.lang.ProcessBuilder.redirectErrorStream(boolean) */
			/* name */ 'redirectErrorStream',
			[/* parameters */
				[/* parameter */
					/* name */ 'redirectErrorStream',
					/* type */ 'boolean',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.ProcessBuilder',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public boolean java.lang.ProcessBuilder.redirectErrorStream() */
			/* name */ 'redirectErrorStream',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.ProcessBuilder java.lang.ProcessBuilder.inheritIO() */
			/* name */ 'inheritIO',
			/* parameters */,
			/* return */ 'java.lang.ProcessBuilder',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.util.List<java.lang.Process> java.lang.ProcessBuilder.startPipeline(java.util.List<java.lang.ProcessBuilder>) throws java.io.IOException */
			/* name */ 'startPipeline',
			[/* parameters */
				[/* parameter */
					/* name */ 'builder',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							'java.lang.ProcessBuilder'
						],
						/* raw type */ 'java.util.List',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.lang.Process'
				],
				/* raw type */ 'java.util.List',
				/* owner type */ UDF
			]],
			[/* exceptions */
				[/* exception */
					/* type */ 'java.io.IOException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
