import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.io.ObjectInputStream$GetField', [
	[/* class description */
		[/* text */ 't', `Provide access to the persistent fields read from the input stream.`]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Constructor for subclasses to call.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'defaulted(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Return true if the named field is defaulted and has no value in this
 stream.`]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `the name of the field`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if there are I/O errors while reading from
         the underlying `],
					[/* inline code block */ 'i', `InputStream`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `name`],
					[/* text */ 't', ` does not
         correspond to a serializable field`]
				]]
			],
			[/* return description */
				[/* text */ 't', `true, if and only if the named field is defaulted`]
			]
		]],
		[/* method */ 'get(java.lang.String,boolean)', [
			[/* method description */
				[/* text */ 't', `Get the value of the named boolean field from the persistent field.`]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `the name of the field`]
				]],
				[/* parameter */ 'val', [/* parameter description */
					[/* text */ 't', `the default value to use if `],
					[/* inline code block */ 'i', `name`],
					[/* text */ 't', ` does not
         have a value`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if there are I/O errors while reading from the
         underlying `],
					[/* inline code block */ 'i', `InputStream`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if type of `],
					[/* inline code block */ 'i', `name`],
					[/* text */ 't', ` is
         not serializable or if the field type is incorrect`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the value of the named `],
				[/* inline code block */ 'i', `boolean`],
				[/* text */ 't', ` field`]
			]
		]],
		[/* method */ 'get(java.lang.String,byte)', [
			[/* method description */
				[/* text */ 't', `Get the value of the named byte field from the persistent field.`]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `the name of the field`]
				]],
				[/* parameter */ 'val', [/* parameter description */
					[/* text */ 't', `the default value to use if `],
					[/* inline code block */ 'i', `name`],
					[/* text */ 't', ` does not
         have a value`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if there are I/O errors while reading from the
         underlying `],
					[/* inline code block */ 'i', `InputStream`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if type of `],
					[/* inline code block */ 'i', `name`],
					[/* text */ 't', ` is
         not serializable or if the field type is incorrect`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the value of the named `],
				[/* inline code block */ 'i', `byte`],
				[/* text */ 't', ` field`]
			]
		]],
		[/* method */ 'get(java.lang.String,char)', [
			[/* method description */
				[/* text */ 't', `Get the value of the named char field from the persistent field.`]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `the name of the field`]
				]],
				[/* parameter */ 'val', [/* parameter description */
					[/* text */ 't', `the default value to use if `],
					[/* inline code block */ 'i', `name`],
					[/* text */ 't', ` does not
         have a value`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if there are I/O errors while reading from the
         underlying `],
					[/* inline code block */ 'i', `InputStream`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if type of `],
					[/* inline code block */ 'i', `name`],
					[/* text */ 't', ` is
         not serializable or if the field type is incorrect`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the value of the named `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', ` field`]
			]
		]],
		[/* method */ 'get(java.lang.String,double)', [
			[/* method description */
				[/* text */ 't', `Get the value of the named double field from the persistent field.`]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `the name of the field`]
				]],
				[/* parameter */ 'val', [/* parameter description */
					[/* text */ 't', `the default value to use if `],
					[/* inline code block */ 'i', `name`],
					[/* text */ 't', ` does not
         have a value`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if there are I/O errors while reading from the
         underlying `],
					[/* inline code block */ 'i', `InputStream`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if type of `],
					[/* inline code block */ 'i', `name`],
					[/* text */ 't', ` is
         not serializable or if the field type is incorrect`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the value of the named `],
				[/* inline code block */ 'i', `double`],
				[/* text */ 't', ` field`]
			]
		]],
		[/* method */ 'get(java.lang.String,float)', [
			[/* method description */
				[/* text */ 't', `Get the value of the named float field from the persistent field.`]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `the name of the field`]
				]],
				[/* parameter */ 'val', [/* parameter description */
					[/* text */ 't', `the default value to use if `],
					[/* inline code block */ 'i', `name`],
					[/* text */ 't', ` does not
         have a value`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if there are I/O errors while reading from the
         underlying `],
					[/* inline code block */ 'i', `InputStream`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if type of `],
					[/* inline code block */ 'i', `name`],
					[/* text */ 't', ` is
         not serializable or if the field type is incorrect`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the value of the named `],
				[/* inline code block */ 'i', `float`],
				[/* text */ 't', ` field`]
			]
		]],
		[/* method */ 'get(java.lang.String,int)', [
			[/* method description */
				[/* text */ 't', `Get the value of the named int field from the persistent field.`]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `the name of the field`]
				]],
				[/* parameter */ 'val', [/* parameter description */
					[/* text */ 't', `the default value to use if `],
					[/* inline code block */ 'i', `name`],
					[/* text */ 't', ` does not
         have a value`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if there are I/O errors while reading from the
         underlying `],
					[/* inline code block */ 'i', `InputStream`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if type of `],
					[/* inline code block */ 'i', `name`],
					[/* text */ 't', ` is
         not serializable or if the field type is incorrect`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the value of the named `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` field`]
			]
		]],
		[/* method */ 'getObjectStreamClass()', [
			[/* method description */
				[/* text */ 't', `Get the ObjectStreamClass that describes the fields in the stream.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the descriptor class that describes the serializable fields`]
			]
		]],
		[/* method */ 'get(java.lang.String,java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Get the value of the named Object field from the persistent field.`]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `the name of the field`]
				]],
				[/* parameter */ 'val', [/* parameter description */
					[/* text */ 't', `the default value to use if `],
					[/* inline code block */ 'i', `name`],
					[/* text */ 't', ` does not
         have a value`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if there are I/O errors while reading from the
         underlying `],
					[/* inline code block */ 'i', `InputStream`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if type of `],
					[/* inline code block */ 'i', `name`],
					[/* text */ 't', ` is
         not serializable or if the field type is incorrect`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the value of the named `],
				[/* inline code block */ 'i', `Object`],
				[/* text */ 't', ` field`]
			]
		]],
		[/* method */ 'get(java.lang.String,long)', [
			[/* method description */
				[/* text */ 't', `Get the value of the named long field from the persistent field.`]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `the name of the field`]
				]],
				[/* parameter */ 'val', [/* parameter description */
					[/* text */ 't', `the default value to use if `],
					[/* inline code block */ 'i', `name`],
					[/* text */ 't', ` does not
         have a value`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if there are I/O errors while reading from the
         underlying `],
					[/* inline code block */ 'i', `InputStream`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if type of `],
					[/* inline code block */ 'i', `name`],
					[/* text */ 't', ` is
         not serializable or if the field type is incorrect`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the value of the named `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` field`]
			]
		]],
		[/* method */ 'get(java.lang.String,short)', [
			[/* method description */
				[/* text */ 't', `Get the value of the named short field from the persistent field.`]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `the name of the field`]
				]],
				[/* parameter */ 'val', [/* parameter description */
					[/* text */ 't', `the default value to use if `],
					[/* inline code block */ 'i', `name`],
					[/* text */ 't', ` does not
         have a value`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if there are I/O errors while reading from the
         underlying `],
					[/* inline code block */ 'i', `InputStream`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if type of `],
					[/* inline code block */ 'i', `name`],
					[/* text */ 't', ` is
         not serializable or if the field type is incorrect`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the value of the named `],
				[/* inline code block */ 'i', `short`],
				[/* text */ 't', ` field`]
			]
		]]
	],
]);
