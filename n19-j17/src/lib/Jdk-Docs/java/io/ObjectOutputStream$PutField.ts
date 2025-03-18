import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.io.ObjectOutputStream$PutField', [
	[/* class description */
		[/* text */ 't', `Provide programmatic access to the persistent fields to be written
 to ObjectOutput.`]
	],
	/* fields */,
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Constructor for subclasses to call.`]
			],
			/* parameters */,
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'put(java.lang.String,boolean)', [
			[/* method description */
				[/* text */ 't', `Put the value of the named boolean field into the persistent field.`]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `the name of the serializable field`]
				]],
				[/* parameter */ 'val', [/* parameter description */
					[/* text */ 't', `the value to assign to the field`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `name`],
					[/* text */ 't', ` does not
 match the name of a serializable field for the class whose fields
 are being written, or if the type of the named field is not
 `],
					[/* inline code block */ 'i', `boolean`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'put(java.lang.String,byte)', [
			[/* method description */
				[/* text */ 't', `Put the value of the named byte field into the persistent field.`]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `the name of the serializable field`]
				]],
				[/* parameter */ 'val', [/* parameter description */
					[/* text */ 't', `the value to assign to the field`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `name`],
					[/* text */ 't', ` does not
 match the name of a serializable field for the class whose fields
 are being written, or if the type of the named field is not
 `],
					[/* inline code block */ 'i', `byte`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'put(java.lang.String,char)', [
			[/* method description */
				[/* text */ 't', `Put the value of the named char field into the persistent field.`]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `the name of the serializable field`]
				]],
				[/* parameter */ 'val', [/* parameter description */
					[/* text */ 't', `the value to assign to the field`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `name`],
					[/* text */ 't', ` does not
 match the name of a serializable field for the class whose fields
 are being written, or if the type of the named field is not
 `],
					[/* inline code block */ 'i', `char`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'put(java.lang.String,double)', [
			[/* method description */
				[/* text */ 't', `Put the value of the named double field into the persistent field.`]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `the name of the serializable field`]
				]],
				[/* parameter */ 'val', [/* parameter description */
					[/* text */ 't', `the value to assign to the field`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `name`],
					[/* text */ 't', ` does not
 match the name of a serializable field for the class whose fields
 are being written, or if the type of the named field is not
 `],
					[/* inline code block */ 'i', `double`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'put(java.lang.String,float)', [
			[/* method description */
				[/* text */ 't', `Put the value of the named float field into the persistent field.`]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `the name of the serializable field`]
				]],
				[/* parameter */ 'val', [/* parameter description */
					[/* text */ 't', `the value to assign to the field`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `name`],
					[/* text */ 't', ` does not
 match the name of a serializable field for the class whose fields
 are being written, or if the type of the named field is not
 `],
					[/* inline code block */ 'i', `float`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'put(java.lang.String,int)', [
			[/* method description */
				[/* text */ 't', `Put the value of the named int field into the persistent field.`]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `the name of the serializable field`]
				]],
				[/* parameter */ 'val', [/* parameter description */
					[/* text */ 't', `the value to assign to the field`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `name`],
					[/* text */ 't', ` does not
 match the name of a serializable field for the class whose fields
 are being written, or if the type of the named field is not
 `],
					[/* inline code block */ 'i', `int`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'put(java.lang.String,java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Put the value of the named Object field into the persistent field.`]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `the name of the serializable field`]
				]],
				[/* parameter */ 'val', [/* parameter description */
					[/* text */ 't', `the value to assign to the field
         (which may be `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `)`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `name`],
					[/* text */ 't', ` does not
 match the name of a serializable field for the class whose fields
 are being written, or if the type of the named field is not a
 reference type`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'put(java.lang.String,long)', [
			[/* method description */
				[/* text */ 't', `Put the value of the named long field into the persistent field.`]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `the name of the serializable field`]
				]],
				[/* parameter */ 'val', [/* parameter description */
					[/* text */ 't', `the value to assign to the field`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `name`],
					[/* text */ 't', ` does not
 match the name of a serializable field for the class whose fields
 are being written, or if the type of the named field is not
 `],
					[/* inline code block */ 'i', `long`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'put(java.lang.String,short)', [
			[/* method description */
				[/* text */ 't', `Put the value of the named short field into the persistent field.`]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `the name of the serializable field`]
				]],
				[/* parameter */ 'val', [/* parameter description */
					[/* text */ 't', `the value to assign to the field`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `name`],
					[/* text */ 't', ` does not
 match the name of a serializable field for the class whose fields
 are being written, or if the type of the named field is not
 `],
					[/* inline code block */ 'i', `short`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'write(java.io.ObjectOutput)', [
			[/* method description */
				[/* text */ 't', `Write the data and fields to the specified ObjectOutput stream,
 which must be the same stream that produced this
 `],
				[/* inline code block */ 'i', `PutField`],
				[/* text */ 't', ` object.`]
			],
			[/* parameters */
				[/* parameter */ 'out', [/* parameter description */
					[/* text */ 't', `the stream to write the data and fields to`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if I/O errors occur while writing to the
         underlying stream`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the specified stream is not
         the same stream that produced this `],
					[/* inline code block */ 'i', `PutField`],
					[/* text */ 't', `
         object`]
				]]
			],
			/* return */ UDF
		]]
	],
	/* enum values */ UDF
]);
