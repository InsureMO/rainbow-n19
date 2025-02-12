import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.util.Scanner', [
	/* super class, extends java.lang.Object */
	'java.lang.Object',
	[/* interfaces, implements java.util.Iterator<java.lang.String>, java.io.Closeable */
		[/* parameterized type */ 'pt', [
			[/* actual argument types */
				'java.lang.String'
			],
			/* raw type */ 'java.util.Iterator',
			/* owner type */ UDF
		]],
		'java.io.Closeable'
	],
	/* modifiers */ 17,
	/* declared annotations */,
	/* type parameters */,
	[/* declared constructors */
		[/* public java.util.Scanner(java.io.File) throws java.io.FileNotFoundException */
			[/* parameters */
				[/* parameter */
					/* name */ 'source',
					/* type */ 'java.io.File',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			[/* exceptions */
				[/* exception */
					/* type */ 'java.io.FileNotFoundException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.Scanner(java.io.File,java.lang.String) throws java.io.FileNotFoundException */
			[/* parameters */
				[/* parameter */
					/* name */ 'source',
					/* type */ 'java.io.File',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'charsetName',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			[/* exceptions */
				[/* exception */
					/* type */ 'java.io.FileNotFoundException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.Scanner(java.io.File,java.nio.charset.Charset) throws java.io.IOException */
			[/* parameters */
				[/* parameter */
					/* name */ 'source',
					/* type */ 'java.io.File',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'charset',
					/* type */ 'java.nio.charset.Charset',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
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
		[/* public java.util.Scanner(java.io.InputStream) */
			[/* parameters */
				[/* parameter */
					/* name */ 'source',
					/* type */ 'java.io.InputStream',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.Scanner(java.io.InputStream,java.lang.String) */
			[/* parameters */
				[/* parameter */
					/* name */ 'source',
					/* type */ 'java.io.InputStream',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'charsetName',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.Scanner(java.io.InputStream,java.nio.charset.Charset) */
			[/* parameters */
				[/* parameter */
					/* name */ 'source',
					/* type */ 'java.io.InputStream',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'charset',
					/* type */ 'java.nio.charset.Charset',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.Scanner(java.lang.Readable) */
			[/* parameters */
				[/* parameter */
					/* name */ 'source',
					/* type */ 'java.lang.Readable',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.Scanner(java.lang.String) */
			[/* parameters */
				[/* parameter */
					/* name */ 'source',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.Scanner(java.nio.channels.ReadableByteChannel) */
			[/* parameters */
				[/* parameter */
					/* name */ 'source',
					/* type */ 'java.nio.channels.ReadableByteChannel',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.Scanner(java.nio.channels.ReadableByteChannel,java.lang.String) */
			[/* parameters */
				[/* parameter */
					/* name */ 'source',
					/* type */ 'java.nio.channels.ReadableByteChannel',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'charsetName',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.Scanner(java.nio.channels.ReadableByteChannel,java.nio.charset.Charset) */
			[/* parameters */
				[/* parameter */
					/* name */ 'source',
					/* type */ 'java.nio.channels.ReadableByteChannel',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'charset',
					/* type */ 'java.nio.charset.Charset',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.Scanner(java.nio.file.Path) throws java.io.IOException */
			[/* parameters */
				[/* parameter */
					/* name */ 'source',
					/* type */ 'java.nio.file.Path',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
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
		[/* public java.util.Scanner(java.nio.file.Path,java.lang.String) throws java.io.IOException */
			[/* parameters */
				[/* parameter */
					/* name */ 'source',
					/* type */ 'java.nio.file.Path',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'charsetName',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
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
		[/* public java.util.Scanner(java.nio.file.Path,java.nio.charset.Charset) throws java.io.IOException */
			[/* parameters */
				[/* parameter */
					/* name */ 'source',
					/* type */ 'java.nio.file.Path',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'charset',
					/* type */ 'java.nio.charset.Charset',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			[/* exceptions */
				[/* exception */
					/* type */ 'java.io.IOException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	[/* declared methods */
		[/* public boolean java.util.Scanner.hasNext() */
			/* name */ 'hasNext',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public boolean java.util.Scanner.hasNext(java.lang.String) */
			/* name */ 'hasNext',
			[/* parameters */
				[/* parameter */
					/* name */ 'pattern',
					/* type */ 'java.lang.String',
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
		[/* public boolean java.util.Scanner.hasNext(java.util.regex.Pattern) */
			/* name */ 'hasNext',
			[/* parameters */
				[/* parameter */
					/* name */ 'pattern',
					/* type */ 'java.util.regex.Pattern',
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
		[/* public boolean java.util.Scanner.hasNextBigDecimal() */
			/* name */ 'hasNextBigDecimal',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public boolean java.util.Scanner.hasNextBigInteger() */
			/* name */ 'hasNextBigInteger',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public boolean java.util.Scanner.hasNextBigInteger(int) */
			/* name */ 'hasNextBigInteger',
			[/* parameters */
				[/* parameter */
					/* name */ 'radix',
					/* type */ 'int',
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
		[/* public boolean java.util.Scanner.hasNextBoolean() */
			/* name */ 'hasNextBoolean',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public boolean java.util.Scanner.hasNextByte() */
			/* name */ 'hasNextByte',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public boolean java.util.Scanner.hasNextByte(int) */
			/* name */ 'hasNextByte',
			[/* parameters */
				[/* parameter */
					/* name */ 'radix',
					/* type */ 'int',
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
		[/* public boolean java.util.Scanner.hasNextDouble() */
			/* name */ 'hasNextDouble',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public boolean java.util.Scanner.hasNextFloat() */
			/* name */ 'hasNextFloat',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public boolean java.util.Scanner.hasNextInt() */
			/* name */ 'hasNextInt',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public boolean java.util.Scanner.hasNextInt(int) */
			/* name */ 'hasNextInt',
			[/* parameters */
				[/* parameter */
					/* name */ 'radix',
					/* type */ 'int',
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
		[/* public boolean java.util.Scanner.hasNextLine() */
			/* name */ 'hasNextLine',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public boolean java.util.Scanner.hasNextLong() */
			/* name */ 'hasNextLong',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public boolean java.util.Scanner.hasNextLong(int) */
			/* name */ 'hasNextLong',
			[/* parameters */
				[/* parameter */
					/* name */ 'radix',
					/* type */ 'int',
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
		[/* public boolean java.util.Scanner.hasNextShort() */
			/* name */ 'hasNextShort',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public boolean java.util.Scanner.hasNextShort(int) */
			/* name */ 'hasNextShort',
			[/* parameters */
				[/* parameter */
					/* name */ 'radix',
					/* type */ 'int',
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
		[/* public boolean java.util.Scanner.nextBoolean() */
			/* name */ 'nextBoolean',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public byte java.util.Scanner.nextByte() */
			/* name */ 'nextByte',
			/* parameters */,
			/* return */ 'byte',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public byte java.util.Scanner.nextByte(int) */
			/* name */ 'nextByte',
			[/* parameters */
				[/* parameter */
					/* name */ 'radix',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'byte',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public double java.util.Scanner.nextDouble() */
			/* name */ 'nextDouble',
			/* parameters */,
			/* return */ 'double',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public float java.util.Scanner.nextFloat() */
			/* name */ 'nextFloat',
			/* parameters */,
			/* return */ 'float',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int java.util.Scanner.nextInt() */
			/* name */ 'nextInt',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int java.util.Scanner.nextInt(int) */
			/* name */ 'nextInt',
			[/* parameters */
				[/* parameter */
					/* name */ 'radix',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int java.util.Scanner.radix() */
			/* name */ 'radix',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.io.IOException java.util.Scanner.ioException() */
			/* name */ 'ioException',
			/* parameters */,
			/* return */ 'java.io.IOException',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.Object java.util.Scanner.next() */
			/* name */ 'next',
			/* parameters */,
			/* return */ 'java.lang.Object',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String java.util.Scanner.findInLine(java.lang.String) */
			/* name */ 'findInLine',
			[/* parameters */
				[/* parameter */
					/* name */ 'pattern',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String java.util.Scanner.findInLine(java.util.regex.Pattern) */
			/* name */ 'findInLine',
			[/* parameters */
				[/* parameter */
					/* name */ 'pattern',
					/* type */ 'java.util.regex.Pattern',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String java.util.Scanner.findWithinHorizon(java.lang.String,int) */
			/* name */ 'findWithinHorizon',
			[/* parameters */
				[/* parameter */
					/* name */ 'pattern',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'horizon',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String java.util.Scanner.findWithinHorizon(java.util.regex.Pattern,int) */
			/* name */ 'findWithinHorizon',
			[/* parameters */
				[/* parameter */
					/* name */ 'pattern',
					/* type */ 'java.util.regex.Pattern',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'horizon',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String java.util.Scanner.next() */
			/* name */ 'next',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String java.util.Scanner.next(java.lang.String) */
			/* name */ 'next',
			[/* parameters */
				[/* parameter */
					/* name */ 'pattern',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String java.util.Scanner.next(java.util.regex.Pattern) */
			/* name */ 'next',
			[/* parameters */
				[/* parameter */
					/* name */ 'pattern',
					/* type */ 'java.util.regex.Pattern',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String java.util.Scanner.nextLine() */
			/* name */ 'nextLine',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String java.util.Scanner.toString() */
			/* name */ 'toString',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.math.BigDecimal java.util.Scanner.nextBigDecimal() */
			/* name */ 'nextBigDecimal',
			/* parameters */,
			/* return */ 'java.math.BigDecimal',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.math.BigInteger java.util.Scanner.nextBigInteger() */
			/* name */ 'nextBigInteger',
			/* parameters */,
			/* return */ 'java.math.BigInteger',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.math.BigInteger java.util.Scanner.nextBigInteger(int) */
			/* name */ 'nextBigInteger',
			[/* parameters */
				[/* parameter */
					/* name */ 'radix',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.math.BigInteger',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.Locale java.util.Scanner.locale() */
			/* name */ 'locale',
			/* parameters */,
			/* return */ 'java.util.Locale',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.Scanner java.util.Scanner.reset() */
			/* name */ 'reset',
			/* parameters */,
			/* return */ 'java.util.Scanner',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.Scanner java.util.Scanner.skip(java.lang.String) */
			/* name */ 'skip',
			[/* parameters */
				[/* parameter */
					/* name */ 'pattern',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.Scanner',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.Scanner java.util.Scanner.skip(java.util.regex.Pattern) */
			/* name */ 'skip',
			[/* parameters */
				[/* parameter */
					/* name */ 'pattern',
					/* type */ 'java.util.regex.Pattern',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.Scanner',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.Scanner java.util.Scanner.useDelimiter(java.lang.String) */
			/* name */ 'useDelimiter',
			[/* parameters */
				[/* parameter */
					/* name */ 'pattern',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.Scanner',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.Scanner java.util.Scanner.useDelimiter(java.util.regex.Pattern) */
			/* name */ 'useDelimiter',
			[/* parameters */
				[/* parameter */
					/* name */ 'pattern',
					/* type */ 'java.util.regex.Pattern',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.Scanner',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.Scanner java.util.Scanner.useLocale(java.util.Locale) */
			/* name */ 'useLocale',
			[/* parameters */
				[/* parameter */
					/* name */ 'locale',
					/* type */ 'java.util.Locale',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.Scanner',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.Scanner java.util.Scanner.useRadix(int) */
			/* name */ 'useRadix',
			[/* parameters */
				[/* parameter */
					/* name */ 'radix',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.Scanner',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.regex.MatchResult java.util.Scanner.match() */
			/* name */ 'match',
			/* parameters */,
			/* return */ 'java.util.regex.MatchResult',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.regex.Pattern java.util.Scanner.delimiter() */
			/* name */ 'delimiter',
			/* parameters */,
			/* return */ 'java.util.regex.Pattern',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.stream.Stream<java.lang.String> java.util.Scanner.tokens() */
			/* name */ 'tokens',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.lang.String'
				],
				/* raw type */ 'java.util.stream.Stream',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.stream.Stream<java.util.regex.MatchResult> java.util.Scanner.findAll(java.lang.String) */
			/* name */ 'findAll',
			[/* parameters */
				[/* parameter */
					/* name */ 'patString',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.util.regex.MatchResult'
				],
				/* raw type */ 'java.util.stream.Stream',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.stream.Stream<java.util.regex.MatchResult> java.util.Scanner.findAll(java.util.regex.Pattern) */
			/* name */ 'findAll',
			[/* parameters */
				[/* parameter */
					/* name */ 'pattern',
					/* type */ 'java.util.regex.Pattern',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.util.regex.MatchResult'
				],
				/* raw type */ 'java.util.stream.Stream',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public long java.util.Scanner.nextLong() */
			/* name */ 'nextLong',
			/* parameters */,
			/* return */ 'long',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public long java.util.Scanner.nextLong(int) */
			/* name */ 'nextLong',
			[/* parameters */
				[/* parameter */
					/* name */ 'radix',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'long',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public short java.util.Scanner.nextShort() */
			/* name */ 'nextShort',
			/* parameters */,
			/* return */ 'short',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public short java.util.Scanner.nextShort(int) */
			/* name */ 'nextShort',
			[/* parameters */
				[/* parameter */
					/* name */ 'radix',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'short',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void java.util.Scanner.close() */
			/* name */ 'close',
			/* parameters */,
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void java.util.Scanner.remove() */
			/* name */ 'remove',
			/* parameters */,
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
