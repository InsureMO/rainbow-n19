import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.io.InvalidClassException', [
	[/* class description */
		[/* text */ 't', `Thrown when the Serialization runtime detects one of the following
 problems with a Class.
 `],
		[/* list */ 'l', [
			[/* block */ 'b', ` The serial version of the class does not match that of the class
      descriptor read from the stream
 `],
			[/* block */ 'b', ` The class contains unknown datatypes
 `],
			[/* block */ 'b', ` The class does not have an accessible no-arg constructor
 `],
			[/* block */ 'b', ` The ObjectStreamClass of an enum constant does not represent
      an enum type
 `],
			[/* block */ 'b', [
				[/* text */ 't', ` Other conditions given in the `],
				[/* text */ 't', `Java Object Serialization
      Specification`]
			]]
		]]
	],
	[/* fields */
		[/* field */ 'classname', [
			[/* field description */
				[/* text */ 't', `Name of the invalid class.`]
			],
		]]
	],
	[/* constructors */
		[/* constructor */ '<init>(java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Report an InvalidClassException for the reason specified.`]
			],
			[/* parameters */
				[/* parameter */ 'reason', [/* parameter description */
					[/* text */ 't', `String describing the reason for the exception.`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.String,java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Constructs an InvalidClassException object.`]
			],
			[/* parameters */
				[/* parameter */ 'cname', [/* parameter description */
					[/* text */ 't', `a String naming the invalid class.`]
				]],
				[/* parameter */ 'reason', [/* parameter description */
					[/* text */ 't', `a String describing the reason for the exception.`]
				]]
			],
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'getMessage()', [
			[/* method description */
				[/* text */ 't', `Produce the message and include the classname, if present.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the detail message string of this `],
				[/* inline code block */ 'i', `Throwable`],
				[/* text */ 't', ` instance
          (which may be `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `).`]
			]
		]]
	],
]);
