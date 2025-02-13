import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.lang.Math', [
	/* super class, extends java.lang.Object */
	'java.lang.Object',
	/* interfaces */,
	/* modifiers */ 17,
	/* declared annotations */,
	/* type parameters */,
	/* declared constructors */,
	[/* declared methods */
		[/* public static double java.lang.Math.IEEEremainder(double,double) */
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
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static double java.lang.Math.abs(double) */
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
			[/* annotations */
				['jdk.internal.vm.annotation.IntrinsicCandidate']
			],
			/* type parameters */ UDF
		],
		[/* public static double java.lang.Math.acos(double) */
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
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static double java.lang.Math.asin(double) */
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
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static double java.lang.Math.atan(double) */
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
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static double java.lang.Math.atan2(double,double) */
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
			/* modifiers */ 9,
			[/* annotations */
				['jdk.internal.vm.annotation.IntrinsicCandidate']
			],
			/* type parameters */ UDF
		],
		[/* public static double java.lang.Math.cbrt(double) */
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
		[/* public static double java.lang.Math.ceil(double) */
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
			[/* annotations */
				['jdk.internal.vm.annotation.IntrinsicCandidate']
			],
			/* type parameters */ UDF
		],
		[/* public static double java.lang.Math.copySign(double,double) */
			/* name */ 'copySign',
			[/* parameters */
				[/* parameter */
					/* name */ 'magnitude',
					/* type */ 'double',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'sign',
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
		[/* public static double java.lang.Math.cos(double) */
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
			/* modifiers */ 9,
			[/* annotations */
				['jdk.internal.vm.annotation.IntrinsicCandidate']
			],
			/* type parameters */ UDF
		],
		[/* public static double java.lang.Math.cosh(double) */
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
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static double java.lang.Math.exp(double) */
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
			[/* annotations */
				['jdk.internal.vm.annotation.IntrinsicCandidate']
			],
			/* type parameters */ UDF
		],
		[/* public static double java.lang.Math.expm1(double) */
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
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static double java.lang.Math.floor(double) */
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
			[/* annotations */
				['jdk.internal.vm.annotation.IntrinsicCandidate']
			],
			/* type parameters */ UDF
		],
		[/* public static double java.lang.Math.fma(double,double,double) */
			/* name */ 'fma',
			[/* parameters */
				[/* parameter */
					/* name */ 'a',
					/* type */ 'double',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'b',
					/* type */ 'double',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'c',
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
		[/* public static double java.lang.Math.hypot(double,double) */
			/* name */ 'hypot',
			[/* parameters */
				[/* parameter */
					/* name */ 'x',
					/* type */ 'double',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'y',
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
		[/* public static double java.lang.Math.log(double) */
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
			/* modifiers */ 9,
			[/* annotations */
				['jdk.internal.vm.annotation.IntrinsicCandidate']
			],
			/* type parameters */ UDF
		],
		[/* public static double java.lang.Math.log10(double) */
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
			/* modifiers */ 9,
			[/* annotations */
				['jdk.internal.vm.annotation.IntrinsicCandidate']
			],
			/* type parameters */ UDF
		],
		[/* public static double java.lang.Math.log1p(double) */
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
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static double java.lang.Math.max(double,double) */
			/* name */ 'max',
			[/* parameters */
				[/* parameter */
					/* name */ 'a',
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
			[/* annotations */
				['jdk.internal.vm.annotation.IntrinsicCandidate']
			],
			/* type parameters */ UDF
		],
		[/* public static double java.lang.Math.min(double,double) */
			/* name */ 'min',
			[/* parameters */
				[/* parameter */
					/* name */ 'a',
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
			[/* annotations */
				['jdk.internal.vm.annotation.IntrinsicCandidate']
			],
			/* type parameters */ UDF
		],
		[/* public static double java.lang.Math.nextAfter(double,double) */
			/* name */ 'nextAfter',
			[/* parameters */
				[/* parameter */
					/* name */ 'start',
					/* type */ 'double',
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
			/* return */ 'double',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static double java.lang.Math.nextDown(double) */
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
		[/* public static double java.lang.Math.nextUp(double) */
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
		[/* public static double java.lang.Math.pow(double,double) */
			/* name */ 'pow',
			[/* parameters */
				[/* parameter */
					/* name */ 'a',
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
			[/* annotations */
				['jdk.internal.vm.annotation.IntrinsicCandidate']
			],
			/* type parameters */ UDF
		],
		[/* public static double java.lang.Math.random() */
			/* name */ 'random',
			/* parameters */,
			/* return */ 'double',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static double java.lang.Math.rint(double) */
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
			[/* annotations */
				['jdk.internal.vm.annotation.IntrinsicCandidate']
			],
			/* type parameters */ UDF
		],
		[/* public static double java.lang.Math.scalb(double,int) */
			/* name */ 'scalb',
			[/* parameters */
				[/* parameter */
					/* name */ 'd',
					/* type */ 'double',
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
			/* return */ 'double',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static double java.lang.Math.signum(double) */
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
			[/* annotations */
				['jdk.internal.vm.annotation.IntrinsicCandidate']
			],
			/* type parameters */ UDF
		],
		[/* public static double java.lang.Math.sin(double) */
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
			/* modifiers */ 9,
			[/* annotations */
				['jdk.internal.vm.annotation.IntrinsicCandidate']
			],
			/* type parameters */ UDF
		],
		[/* public static double java.lang.Math.sinh(double) */
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
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static double java.lang.Math.sqrt(double) */
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
			/* modifiers */ 9,
			[/* annotations */
				['jdk.internal.vm.annotation.IntrinsicCandidate']
			],
			/* type parameters */ UDF
		],
		[/* public static double java.lang.Math.tan(double) */
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
			/* modifiers */ 9,
			[/* annotations */
				['jdk.internal.vm.annotation.IntrinsicCandidate']
			],
			/* type parameters */ UDF
		],
		[/* public static double java.lang.Math.tanh(double) */
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
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static double java.lang.Math.toDegrees(double) */
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
		[/* public static double java.lang.Math.toRadians(double) */
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
		[/* public static double java.lang.Math.ulp(double) */
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
		[/* public static float java.lang.Math.abs(float) */
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
			[/* annotations */
				['jdk.internal.vm.annotation.IntrinsicCandidate']
			],
			/* type parameters */ UDF
		],
		[/* public static float java.lang.Math.copySign(float,float) */
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
			[/* annotations */
				['jdk.internal.vm.annotation.IntrinsicCandidate']
			],
			/* type parameters */ UDF
		],
		[/* public static float java.lang.Math.fma(float,float,float) */
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
			[/* annotations */
				['jdk.internal.vm.annotation.IntrinsicCandidate']
			],
			/* type parameters */ UDF
		],
		[/* public static float java.lang.Math.max(float,float) */
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
		[/* public static float java.lang.Math.min(float,float) */
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
		[/* public static float java.lang.Math.nextAfter(float,double) */
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
		[/* public static float java.lang.Math.nextDown(float) */
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
		[/* public static float java.lang.Math.nextUp(float) */
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
		[/* public static float java.lang.Math.scalb(float,int) */
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
		[/* public static float java.lang.Math.signum(float) */
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
			[/* annotations */
				['jdk.internal.vm.annotation.IntrinsicCandidate']
			],
			/* type parameters */ UDF
		],
		[/* public static float java.lang.Math.ulp(float) */
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
		[/* public static int java.lang.Math.abs(int) */
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
			[/* annotations */
				['jdk.internal.vm.annotation.IntrinsicCandidate']
			],
			/* type parameters */ UDF
		],
		[/* public static int java.lang.Math.absExact(int) */
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
		[/* public static int java.lang.Math.addExact(int,int) */
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
			[/* annotations */
				['jdk.internal.vm.annotation.IntrinsicCandidate']
			],
			/* type parameters */ UDF
		],
		[/* public static int java.lang.Math.decrementExact(int) */
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
			[/* annotations */
				['jdk.internal.vm.annotation.IntrinsicCandidate']
			],
			/* type parameters */ UDF
		],
		[/* public static int java.lang.Math.floorDiv(int,int) */
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
		[/* public static int java.lang.Math.floorMod(int,int) */
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
		[/* public static int java.lang.Math.floorMod(long,int) */
			/* name */ 'floorMod',
			[/* parameters */
				[/* parameter */
					/* name */ 'x',
					/* type */ 'long',
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
		[/* public static int java.lang.Math.getExponent(double) */
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
		[/* public static int java.lang.Math.getExponent(float) */
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
		[/* public static int java.lang.Math.incrementExact(int) */
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
			[/* annotations */
				['jdk.internal.vm.annotation.IntrinsicCandidate']
			],
			/* type parameters */ UDF
		],
		[/* public static int java.lang.Math.max(int,int) */
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
		[/* public static int java.lang.Math.min(int,int) */
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
		[/* public static int java.lang.Math.multiplyExact(int,int) */
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
			[/* annotations */
				['jdk.internal.vm.annotation.IntrinsicCandidate']
			],
			/* type parameters */ UDF
		],
		[/* public static int java.lang.Math.negateExact(int) */
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
			[/* annotations */
				['jdk.internal.vm.annotation.IntrinsicCandidate']
			],
			/* type parameters */ UDF
		],
		[/* public static int java.lang.Math.round(float) */
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
		[/* public static int java.lang.Math.subtractExact(int,int) */
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
			[/* annotations */
				['jdk.internal.vm.annotation.IntrinsicCandidate']
			],
			/* type parameters */ UDF
		],
		[/* public static int java.lang.Math.toIntExact(long) */
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
		[/* public static long java.lang.Math.abs(long) */
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
			[/* annotations */
				['jdk.internal.vm.annotation.IntrinsicCandidate']
			],
			/* type parameters */ UDF
		],
		[/* public static long java.lang.Math.absExact(long) */
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
		[/* public static long java.lang.Math.addExact(long,long) */
			/* name */ 'addExact',
			[/* parameters */
				[/* parameter */
					/* name */ 'x',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'y',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'long',
			/* exceptions */,
			/* modifiers */ 9,
			[/* annotations */
				['jdk.internal.vm.annotation.IntrinsicCandidate']
			],
			/* type parameters */ UDF
		],
		[/* public static long java.lang.Math.decrementExact(long) */
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
			[/* annotations */
				['jdk.internal.vm.annotation.IntrinsicCandidate']
			],
			/* type parameters */ UDF
		],
		[/* public static long java.lang.Math.floorDiv(long,int) */
			/* name */ 'floorDiv',
			[/* parameters */
				[/* parameter */
					/* name */ 'x',
					/* type */ 'long',
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
		[/* public static long java.lang.Math.floorDiv(long,long) */
			/* name */ 'floorDiv',
			[/* parameters */
				[/* parameter */
					/* name */ 'x',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'y',
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
		[/* public static long java.lang.Math.floorMod(long,long) */
			/* name */ 'floorMod',
			[/* parameters */
				[/* parameter */
					/* name */ 'x',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'y',
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
		[/* public static long java.lang.Math.incrementExact(long) */
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
			[/* annotations */
				['jdk.internal.vm.annotation.IntrinsicCandidate']
			],
			/* type parameters */ UDF
		],
		[/* public static long java.lang.Math.max(long,long) */
			/* name */ 'max',
			[/* parameters */
				[/* parameter */
					/* name */ 'a',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'b',
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
		[/* public static long java.lang.Math.min(long,long) */
			/* name */ 'min',
			[/* parameters */
				[/* parameter */
					/* name */ 'a',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'b',
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
		[/* public static long java.lang.Math.multiplyExact(long,int) */
			/* name */ 'multiplyExact',
			[/* parameters */
				[/* parameter */
					/* name */ 'x',
					/* type */ 'long',
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
		[/* public static long java.lang.Math.multiplyExact(long,long) */
			/* name */ 'multiplyExact',
			[/* parameters */
				[/* parameter */
					/* name */ 'x',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'y',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'long',
			/* exceptions */,
			/* modifiers */ 9,
			[/* annotations */
				['jdk.internal.vm.annotation.IntrinsicCandidate']
			],
			/* type parameters */ UDF
		],
		[/* public static long java.lang.Math.multiplyFull(int,int) */
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
		[/* public static long java.lang.Math.multiplyHigh(long,long) */
			/* name */ 'multiplyHigh',
			[/* parameters */
				[/* parameter */
					/* name */ 'x',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'y',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'long',
			/* exceptions */,
			/* modifiers */ 9,
			[/* annotations */
				['jdk.internal.vm.annotation.IntrinsicCandidate']
			],
			/* type parameters */ UDF
		],
		[/* public static long java.lang.Math.negateExact(long) */
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
			[/* annotations */
				['jdk.internal.vm.annotation.IntrinsicCandidate']
			],
			/* type parameters */ UDF
		],
		[/* public static long java.lang.Math.round(double) */
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
		[/* public static long java.lang.Math.subtractExact(long,long) */
			/* name */ 'subtractExact',
			[/* parameters */
				[/* parameter */
					/* name */ 'x',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'y',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'long',
			/* exceptions */,
			/* modifiers */ 9,
			[/* annotations */
				['jdk.internal.vm.annotation.IntrinsicCandidate']
			],
			/* type parameters */ UDF
		]
	],
	[/* declared fields */
		[/* public static final double java.lang.Math.E */
			/* name */ 'E',
			/* type */ 'double',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final double java.lang.Math.PI */
			/* name */ 'PI',
			/* type */ 'double',
			/* annotations */ UDF,
			/* modifiers */ 25
		]
	],
	/* enum values */ UDF
]);
