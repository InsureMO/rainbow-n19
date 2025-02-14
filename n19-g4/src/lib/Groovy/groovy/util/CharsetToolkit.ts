import {UDF} from '../../../utils';
import {GroovyClassCreateHelper} from '../../GroovyClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
GroovyClassCreateHelper.class('groovy.util.CharsetToolkit', [
	/* super class, extends java.lang.Object */
	'java.lang.Object',
	/* interfaces */,
	/* modifiers */ 1,
	/* declared annotations */,
	/* type parameters */,
	[/* declared constructors */
		[/* public groovy.util.CharsetToolkit(java.io.File) throws java.io.IOException */
			[/* parameters */
				[/* parameter */
					/* name */ 'file',
					/* type */ 'java.io.File',
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
		[/* public boolean groovy.util.CharsetToolkit.getEnforce8Bit() */
			/* name */ 'getEnforce8Bit',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public boolean groovy.util.CharsetToolkit.hasUTF16BEBom() */
			/* name */ 'hasUTF16BEBom',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public boolean groovy.util.CharsetToolkit.hasUTF16LEBom() */
			/* name */ 'hasUTF16LEBom',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public boolean groovy.util.CharsetToolkit.hasUTF8Bom() */
			/* name */ 'hasUTF8Bom',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.io.BufferedReader groovy.util.CharsetToolkit.getReader() throws java.io.FileNotFoundException */
			/* name */ 'getReader',
			/* parameters */,
			/* return */ 'java.io.BufferedReader',
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
		[/* public java.nio.charset.Charset groovy.util.CharsetToolkit.getCharset() */
			/* name */ 'getCharset',
			/* parameters */,
			/* return */ 'java.nio.charset.Charset',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.nio.charset.Charset groovy.util.CharsetToolkit.getDefaultCharset() */
			/* name */ 'getDefaultCharset',
			/* parameters */,
			/* return */ 'java.nio.charset.Charset',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.nio.charset.Charset groovy.util.CharsetToolkit.getDefaultSystemCharset() */
			/* name */ 'getDefaultSystemCharset',
			/* parameters */,
			/* return */ 'java.nio.charset.Charset',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.nio.charset.Charset[] groovy.util.CharsetToolkit.getAvailableCharsets() */
			/* name */ 'getAvailableCharsets',
			/* parameters */,
			/* return */ '[Ljava.nio.charset.Charset;',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void groovy.util.CharsetToolkit.setDefaultCharset(java.nio.charset.Charset) */
			/* name */ 'setDefaultCharset',
			[/* parameters */
				[/* parameter */
					/* name */ 'defaultCharset',
					/* type */ 'java.nio.charset.Charset',
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
		[/* public void groovy.util.CharsetToolkit.setEnforce8Bit(boolean) */
			/* name */ 'setEnforce8Bit',
			[/* parameters */
				[/* parameter */
					/* name */ 'enforce',
					/* type */ 'boolean',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
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
