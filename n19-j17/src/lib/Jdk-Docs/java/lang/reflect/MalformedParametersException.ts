import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.lang.reflect.MalformedParametersException', [
	[/* class description */
		[/* text */ 't', `Thrown when `],
		[/* reference */ 'r', `.Executable#getParameters()`],
		[/* text */ 't', ` attempts to read method parameters from
 a class file and determines that one or more parameters are
 malformed.

 `],
		[/* block */ 'b', `The following is a list of conditions under which this exception
 can be thrown:
 `],
		[/* list */ 'l', [
			[/* block */ 'b', ` The number of parameters (parameter_count) is wrong for the method
 `],
			[/* block */ 'b', ` A constant pool index is out of bounds.
 `],
			[/* block */ 'b', ` A constant pool index does not refer to a UTF-8 entry
 `],
			[/* block */ 'b', ` A parameter's name is "", or contains an illegal character
 `],
			[/* block */ 'b', ` The flags field contains an illegal flag (something other than
     FINAL, SYNTHETIC, or MANDATED)
 `]
		]],
		[/* text */ 't', `

 See `],
		[/* reference */ 'r', `.Executable#getParameters()`],
		[/* text */ 't', ` for more
 information.`],
		[/* block */ 'b', '']
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Create a `],
				[/* inline code block */ 'i', `MalformedParametersException`],
				[/* text */ 't', ` with an empty
 reason.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Create a `],
				[/* inline code block */ 'i', `MalformedParametersException`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'reason', [/* parameter description */
					[/* text */ 't', `The reason for the exception.`]
				]]
			],
			/* throws */ UDF
		]]
	],
	/* methods */ UDF,
]);
