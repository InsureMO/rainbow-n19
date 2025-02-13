import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.lang.StrictMath', [
	/* super class, extends java.lang.Object */
	'java.lang.Object',
	/* interfaces */,
	/* modifiers */ 17,
	/* declared annotations */,
	/* type parameters */,
	/* declared constructors */,
	[/* declared methods */
		[/* public static double java.lang.StrictMath.abs(double) */
			/* name */ 'abs',
			[/* parameters */
				[/* parameter */
					/* name */ 'a',
					/* type */ 'double',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'double',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static double java.lang.StrictMath.cbrt(double) */
			/* name */ 'cbrt',
			[/* parameters */
				[/* parameter */
					/* name */ 'a',
					/* type */ 'double',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'double',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static double java.lang.StrictMath.ceil(double) */
			/* name */ 'ceil',
			[/* parameters */
				[/* parameter */
					/* name */ 'a',
					/* type */ 'double',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'double',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static double java.lang.StrictMath.copySign(double,double) */
			/* name */ 'copySign',
			[/* parameters */
				[/* parameter */
					/* name */ 'magnitude',
					/* type */ 'double',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'double',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'double',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static double java.lang.StrictMath.exp(double) */
			/* name */ 'exp',
			[/* parameters */
				[/* parameter */
					/* name */ 'a',
					/* type */ 'double',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'double',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static double java.lang.StrictMath.floor(double) */
			/* name */ 'floor',
			[/* parameters */
				[/* parameter */
					/* name */ 'a',
					/* type */ 'double',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'double',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static double java.lang.StrictMath.fma(double,double,double) */
			/* name */ 'fma',
			[/* parameters */
				[/* parameter */
					/* name */ 'a',
					/* type */ 'double',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'double',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'b',
					/* type */ 'double',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'double',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static double java.lang.StrictMath.hypot(double,double) */
			/* name */ 'hypot',
			[/* parameters */
				[/* parameter */
					/* name */ 'x',
					/* type */ 'double',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'double',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'double',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static double java.lang.StrictMath.max(double,double) */
			/* name */ 'max',
			[/* parameters */
				[/* parameter */
					/* name */ 'a',
					/* type */ 'double',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'double',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'double',
			/* exceptions */,
			/* modifiers */ 9,
			[/* annotations */
				['jdk.internal.vm.annotation.IntrinsicCandidate']
			],
			/* type parameters */ UDF
		],
		[/* public static double java.lang.StrictMath.min(double,double) */
			/* name */ 'min',
			[/* parameters */
				[/* parameter */
					/* name */ 'a',
					/* type */ 'double',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'double',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'double',
			/* exceptions */,
			/* modifiers */ 9,
			[/* annotations */
				['jdk.internal.vm.annotation.IntrinsicCandidate']
			],
			/* type parameters */ UDF
		],
		[/* public static double java.lang.StrictMath.nextAfter(double,double) */
			/* name */ 'nextAfter',
			[/* parameters */
				[/* parameter */
					/* name */ 'start',
					/* type */ 'double',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'double',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'double',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static double java.lang.StrictMath.nextDown(double) */
			/* name */ 'nextDown',
			[/* parameters */
				[/* parameter */
					/* name */ 'd',
					/* type */ 'double',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'double',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static double java.lang.StrictMath.nextUp(double) */
			/* name */ 'nextUp',
			[/* parameters */
				[/* parameter */
					/* name */ 'd',
					/* type */ 'double',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'double',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static double java.lang.StrictMath.pow(double,double) */
			/* name */ 'pow',
			[/* parameters */
				[/* parameter */
					/* name */ 'a',
					/* type */ 'double',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'double',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'double',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static double java.lang.StrictMath.random() */
			/* name */ 'random',
			/* parameters */,
			/* return */ 'double',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static double java.lang.StrictMath.rint(double) */
			/* name */ 'rint',
			[/* parameters */
				[/* parameter */
					/* name */ 'a',
					/* type */ 'double',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'double',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static double java.lang.StrictMath.scalb(double,int) */
			/* name */ 'scalb',
			[/* parameters */
				[/* parameter */
					/* name */ 'd',
					/* type */ 'double',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'double',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static double java.lang.StrictMath.signum(double) */
			/* name */ 'signum',
			[/* parameters */
				[/* parameter */
					/* name */ 'd',
					/* type */ 'double',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'double',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static double java.lang.StrictMath.toDegrees(double) */
			/* name */ 'toDegrees',
			[/* parameters */
				[/* parameter */
					/* name */ 'angrad',
					/* type */ 'double',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'double',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static double java.lang.StrictMath.toRadians(double) */
			/* name */ 'toRadians',
			[/* parameters */
				[/* parameter */
					/* name */ 'angdeg',
					/* type */ 'double',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'double',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static double java.lang.StrictMath.ulp(double) */
			/* name */ 'ulp',
			[/* parameters */
				[/* parameter */
					/* name */ 'd',
					/* type */ 'double',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'double',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static float java.lang.StrictMath.abs(float) */
			/* name */ 'abs',
			[/* parameters */
				[/* parameter */
					/* name */ 'a',
					/* type */ 'float',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'float',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static float java.lang.StrictMath.copySign(float,float) */
			/* name */ 'copySign',
			[/* parameters */
				[/* parameter */
					/* name */ 'magnitude',
					/* type */ 'float',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'sign',
					/* type */ 'float',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'float',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static float java.lang.StrictMath.fma(float,float,float) */
			/* name */ 'fma',
			[/* parameters */
				[/* parameter */
					/* name */ 'a',
					/* type */ 'float',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'b',
					/* type */ 'float',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'c',
					/* type */ 'float',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'float',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static float java.lang.StrictMath.max(float,float) */
			/* name */ 'max',
			[/* parameters */
				[/* parameter */
					/* name */ 'a',
					/* type */ 'float',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'b',
					/* type */ 'float',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'float',
			/* exceptions */,
			/* modifiers */ 9,
			[/* annotations */
				['jdk.internal.vm.annotation.IntrinsicCandidate']
			],
			/* type parameters */ UDF
		],
		[/* public static float java.lang.StrictMath.min(float,float) */
			/* name */ 'min',
			[/* parameters */
				[/* parameter */
					/* name */ 'a',
					/* type */ 'float',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'b',
					/* type */ 'float',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'float',
			/* exceptions */,
			/* modifiers */ 9,
			[/* annotations */
				['jdk.internal.vm.annotation.IntrinsicCandidate']
			],
			/* type parameters */ UDF
		],
		[/* public static float java.lang.StrictMath.nextAfter(float,double) */
			/* name */ 'nextAfter',
			[/* parameters */
				[/* parameter */
					/* name */ 'start',
					/* type */ 'float',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'direction',
					/* type */ 'double',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'float',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static float java.lang.StrictMath.nextDown(float) */
			/* name */ 'nextDown',
			[/* parameters */
				[/* parameter */
					/* name */ 'f',
					/* type */ 'float',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'float',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static float java.lang.StrictMath.nextUp(float) */
			/* name */ 'nextUp',
			[/* parameters */
				[/* parameter */
					/* name */ 'f',
					/* type */ 'float',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'float',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static float java.lang.StrictMath.scalb(float,int) */
			/* name */ 'scalb',
			[/* parameters */
				[/* parameter */
					/* name */ 'f',
					/* type */ 'float',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'scaleFactor',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'float',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static float java.lang.StrictMath.signum(float) */
			/* name */ 'signum',
			[/* parameters */
				[/* parameter */
					/* name */ 'f',
					/* type */ 'float',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'float',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static float java.lang.StrictMath.ulp(float) */
			/* name */ 'ulp',
			[/* parameters */
				[/* parameter */
					/* name */ 'f',
					/* type */ 'float',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'float',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static int java.lang.StrictMath.abs(int) */
			/* name */ 'abs',
			[/* parameters */
				[/* parameter */
					/* name */ 'a',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static int java.lang.StrictMath.absExact(int) */
			/* name */ 'absExact',
			[/* parameters */
				[/* parameter */
					/* name */ 'a',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static int java.lang.StrictMath.addExact(int,int) */
			/* name */ 'addExact',
			[/* parameters */
				[/* parameter */
					/* name */ 'x',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'y',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static int java.lang.StrictMath.decrementExact(int) */
			/* name */ 'decrementExact',
			[/* parameters */
				[/* parameter */
					/* name */ 'a',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static int java.lang.StrictMath.floorDiv(int,int) */
			/* name */ 'floorDiv',
			[/* parameters */
				[/* parameter */
					/* name */ 'x',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'y',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static int java.lang.StrictMath.floorMod(int,int) */
			/* name */ 'floorMod',
			[/* parameters */
				[/* parameter */
					/* name */ 'x',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'y',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static int java.lang.StrictMath.floorMod(long,int) */
			/* name */ 'floorMod',
			[/* parameters */
				[/* parameter */
					/* name */ 'x',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static int java.lang.StrictMath.getExponent(double) */
			/* name */ 'getExponent',
			[/* parameters */
				[/* parameter */
					/* name */ 'd',
					/* type */ 'double',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static int java.lang.StrictMath.getExponent(float) */
			/* name */ 'getExponent',
			[/* parameters */
				[/* parameter */
					/* name */ 'f',
					/* type */ 'float',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static int java.lang.StrictMath.incrementExact(int) */
			/* name */ 'incrementExact',
			[/* parameters */
				[/* parameter */
					/* name */ 'a',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static int java.lang.StrictMath.max(int,int) */
			/* name */ 'max',
			[/* parameters */
				[/* parameter */
					/* name */ 'a',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'b',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 9,
			[/* annotations */
				['jdk.internal.vm.annotation.IntrinsicCandidate']
			],
			/* type parameters */ UDF
		],
		[/* public static int java.lang.StrictMath.min(int,int) */
			/* name */ 'min',
			[/* parameters */
				[/* parameter */
					/* name */ 'a',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'b',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 9,
			[/* annotations */
				['jdk.internal.vm.annotation.IntrinsicCandidate']
			],
			/* type parameters */ UDF
		],
		[/* public static int java.lang.StrictMath.multiplyExact(int,int) */
			/* name */ 'multiplyExact',
			[/* parameters */
				[/* parameter */
					/* name */ 'x',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'y',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static int java.lang.StrictMath.negateExact(int) */
			/* name */ 'negateExact',
			[/* parameters */
				[/* parameter */
					/* name */ 'a',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static int java.lang.StrictMath.round(float) */
			/* name */ 'round',
			[/* parameters */
				[/* parameter */
					/* name */ 'a',
					/* type */ 'float',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static int java.lang.StrictMath.subtractExact(int,int) */
			/* name */ 'subtractExact',
			[/* parameters */
				[/* parameter */
					/* name */ 'x',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'y',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static int java.lang.StrictMath.toIntExact(long) */
			/* name */ 'toIntExact',
			[/* parameters */
				[/* parameter */
					/* name */ 'value',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static long java.lang.StrictMath.abs(long) */
			/* name */ 'abs',
			[/* parameters */
				[/* parameter */
					/* name */ 'a',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'long',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static long java.lang.StrictMath.absExact(long) */
			/* name */ 'absExact',
			[/* parameters */
				[/* parameter */
					/* name */ 'a',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'long',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static long java.lang.StrictMath.addExact(long,long) */
			/* name */ 'addExact',
			[/* parameters */
				[/* parameter */
					/* name */ 'x',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'long',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static long java.lang.StrictMath.decrementExact(long) */
			/* name */ 'decrementExact',
			[/* parameters */
				[/* parameter */
					/* name */ 'a',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'long',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static long java.lang.StrictMath.floorDiv(long,int) */
			/* name */ 'floorDiv',
			[/* parameters */
				[/* parameter */
					/* name */ 'x',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'long',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static long java.lang.StrictMath.floorDiv(long,long) */
			/* name */ 'floorDiv',
			[/* parameters */
				[/* parameter */
					/* name */ 'x',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'long',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static long java.lang.StrictMath.floorMod(long,long) */
			/* name */ 'floorMod',
			[/* parameters */
				[/* parameter */
					/* name */ 'x',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'long',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static long java.lang.StrictMath.incrementExact(long) */
			/* name */ 'incrementExact',
			[/* parameters */
				[/* parameter */
					/* name */ 'a',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'long',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static long java.lang.StrictMath.max(long,long) */
			/* name */ 'max',
			[/* parameters */
				[/* parameter */
					/* name */ 'a',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'long',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static long java.lang.StrictMath.min(long,long) */
			/* name */ 'min',
			[/* parameters */
				[/* parameter */
					/* name */ 'a',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'long',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static long java.lang.StrictMath.multiplyExact(long,int) */
			/* name */ 'multiplyExact',
			[/* parameters */
				[/* parameter */
					/* name */ 'x',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'long',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static long java.lang.StrictMath.multiplyExact(long,long) */
			/* name */ 'multiplyExact',
			[/* parameters */
				[/* parameter */
					/* name */ 'x',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'long',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static long java.lang.StrictMath.multiplyFull(int,int) */
			/* name */ 'multiplyFull',
			[/* parameters */
				[/* parameter */
					/* name */ 'x',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'y',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'long',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static long java.lang.StrictMath.multiplyHigh(long,long) */
			/* name */ 'multiplyHigh',
			[/* parameters */
				[/* parameter */
					/* name */ 'x',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'long',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static long java.lang.StrictMath.negateExact(long) */
			/* name */ 'negateExact',
			[/* parameters */
				[/* parameter */
					/* name */ 'a',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'long',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static long java.lang.StrictMath.round(double) */
			/* name */ 'round',
			[/* parameters */
				[/* parameter */
					/* name */ 'a',
					/* type */ 'double',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'long',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static long java.lang.StrictMath.subtractExact(long,long) */
			/* name */ 'subtractExact',
			[/* parameters */
				[/* parameter */
					/* name */ 'x',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'long',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static native double java.lang.StrictMath.IEEEremainder(double,double) */
			/* name */ 'IEEEremainder',
			[/* parameters */
				[/* parameter */
					/* name */ 'f1',
					/* type */ 'double',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'f2',
					/* type */ 'double',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'double',
			/* exceptions */,
			/* modifiers */ 265,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static native double java.lang.StrictMath.acos(double) */
			/* name */ 'acos',
			[/* parameters */
				[/* parameter */
					/* name */ 'a',
					/* type */ 'double',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'double',
			/* exceptions */,
			/* modifiers */ 265,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static native double java.lang.StrictMath.asin(double) */
			/* name */ 'asin',
			[/* parameters */
				[/* parameter */
					/* name */ 'a',
					/* type */ 'double',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'double',
			/* exceptions */,
			/* modifiers */ 265,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static native double java.lang.StrictMath.atan(double) */
			/* name */ 'atan',
			[/* parameters */
				[/* parameter */
					/* name */ 'a',
					/* type */ 'double',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'double',
			/* exceptions */,
			/* modifiers */ 265,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static native double java.lang.StrictMath.atan2(double,double) */
			/* name */ 'atan2',
			[/* parameters */
				[/* parameter */
					/* name */ 'y',
					/* type */ 'double',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'x',
					/* type */ 'double',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'double',
			/* exceptions */,
			/* modifiers */ 265,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static native double java.lang.StrictMath.cos(double) */
			/* name */ 'cos',
			[/* parameters */
				[/* parameter */
					/* name */ 'a',
					/* type */ 'double',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'double',
			/* exceptions */,
			/* modifiers */ 265,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static native double java.lang.StrictMath.cosh(double) */
			/* name */ 'cosh',
			[/* parameters */
				[/* parameter */
					/* name */ 'x',
					/* type */ 'double',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'double',
			/* exceptions */,
			/* modifiers */ 265,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static native double java.lang.StrictMath.expm1(double) */
			/* name */ 'expm1',
			[/* parameters */
				[/* parameter */
					/* name */ 'x',
					/* type */ 'double',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'double',
			/* exceptions */,
			/* modifiers */ 265,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static native double java.lang.StrictMath.log(double) */
			/* name */ 'log',
			[/* parameters */
				[/* parameter */
					/* name */ 'a',
					/* type */ 'double',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'double',
			/* exceptions */,
			/* modifiers */ 265,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static native double java.lang.StrictMath.log10(double) */
			/* name */ 'log10',
			[/* parameters */
				[/* parameter */
					/* name */ 'a',
					/* type */ 'double',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'double',
			/* exceptions */,
			/* modifiers */ 265,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static native double java.lang.StrictMath.log1p(double) */
			/* name */ 'log1p',
			[/* parameters */
				[/* parameter */
					/* name */ 'x',
					/* type */ 'double',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'double',
			/* exceptions */,
			/* modifiers */ 265,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static native double java.lang.StrictMath.sin(double) */
			/* name */ 'sin',
			[/* parameters */
				[/* parameter */
					/* name */ 'a',
					/* type */ 'double',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'double',
			/* exceptions */,
			/* modifiers */ 265,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static native double java.lang.StrictMath.sinh(double) */
			/* name */ 'sinh',
			[/* parameters */
				[/* parameter */
					/* name */ 'x',
					/* type */ 'double',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'double',
			/* exceptions */,
			/* modifiers */ 265,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static native double java.lang.StrictMath.sqrt(double) */
			/* name */ 'sqrt',
			[/* parameters */
				[/* parameter */
					/* name */ 'a',
					/* type */ 'double',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'double',
			/* exceptions */,
			/* modifiers */ 265,
			[/* annotations */
				['jdk.internal.vm.annotation.IntrinsicCandidate']
			],
			/* type parameters */ UDF
		],
		[/* public static native double java.lang.StrictMath.tan(double) */
			/* name */ 'tan',
			[/* parameters */
				[/* parameter */
					/* name */ 'a',
					/* type */ 'double',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'double',
			/* exceptions */,
			/* modifiers */ 265,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static native double java.lang.StrictMath.tanh(double) */
			/* name */ 'tanh',
			[/* parameters */
				[/* parameter */
					/* name */ 'x',
					/* type */ 'double',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'double',
			/* exceptions */,
			/* modifiers */ 265,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	[/* declared fields */
		[/* public static final double java.lang.StrictMath.E */
			/* name */ 'E',
			/* type */ 'double',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final double java.lang.StrictMath.PI */
			/* name */ 'PI',
			/* type */ 'double',
			/* annotations */ UDF,
			/* modifiers */ 25
		]
	],
	/* enum values */ UDF
]);
