import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.lang.TypeNotPresentException', [
	[/* class description */
		[/* text */ 't', `Thrown when an application tries to access a type using a string
 representing the type's name, but no definition for the type with
 the specified name can be found.   This exception differs from
 `],
		[/* reference */ 'r', `java.lang.ClassNotFoundException`, `ClassNotFoundException`],
		[/* text */ 't', ` in that `],
		[/* inline code block */ 'i', `ClassNotFoundException`],
		[/* text */ 't', ` is a
 checked exception, whereas this exception is unchecked.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `Note that this exception may be used when undefined type variables
 are accessed as well as when types (e.g., classes, interfaces or
 annotation types) are loaded.
 In particular, this exception can be thrown by the `],
			[/* reference */ 'r', `java.lang.reflect.AnnotatedElement`, `API used to read annotations reflectively`],
			[/* text */ 't', `.`]
		]]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>(java.lang.String,java.lang.Throwable)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a `],
				[/* inline code block */ 'i', `TypeNotPresentException`],
				[/* text */ 't', ` for the named type
 with the specified cause.`]
			],
			[/* parameters */
				[/* parameter */ 'typeName', [/* parameter description */
					[/* text */ 't', `the fully qualified name of the unavailable type`]
				]],
				[/* parameter */ 'cause', [/* parameter description */
					[/* text */ 't', `the exception that was thrown when the system attempted to
    load the named type, or `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` if unavailable or inapplicable`]
				]]
			],
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'typeName()', [
			[/* method description */
				[/* text */ 't', `Returns the fully qualified name of the unavailable type.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the fully qualified name of the unavailable type`]
			]
		]]
	],
]);
