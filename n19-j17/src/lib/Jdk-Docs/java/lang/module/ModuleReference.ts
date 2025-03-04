import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.lang.module.ModuleReference', [
	[/* class description */
		[/* text */ 't', `A reference to a module's content.

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` A module reference is a concrete implementation of this class that
 implements the abstract methods defined by this class. It contains the
 module's descriptor and its location, if known.  It also has the ability to
 create a `],
			[/* reference */ 'r', `java.lang.module.ModuleReader`],
			[/* text */ 't', ` in order to access the module's content, which
 may be inside the Java run-time system itself or in an artifact such as a
 modular JAR file.`]
		]]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>(java.lang.module.ModuleDescriptor,java.net.URI)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new instance of this class.`]
			],
			[/* parameters */
				[/* parameter */ 'descriptor', [/* parameter description */
					[/* text */ 't', `The module descriptor`]
				]],
				[/* parameter */ 'location', [/* parameter description */
					[/* text */ 't', `The module location or `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` if not known`]
				]]
			],
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'open()', [
			[/* method description */
				[/* text */ 't', `Opens the module content for reading.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If an I/O error occurs`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If denied by the security manager`]
				]]
			],
			[/* return description */
				[/* text */ 't', `A `],
				[/* inline code block */ 'i', `ModuleReader`],
				[/* text */ 't', ` to read the module`]
			]
		]],
		[/* method */ 'descriptor()', [
			[/* method description */
				[/* text */ 't', `Returns the module descriptor.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The module descriptor`]
			]
		]],
		[/* method */ 'location()', [
			[/* method description */
				[/* text */ 't', `Returns the location of this module's content, if known.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This URI, when present, can be used as the `],
					[/* reference */ 'r', `java.lang.CodeSource#getLocation()`],
					[/* text */ 't', ` value of a `],
					[/* reference */ 'r', `java.security.CodeSource`],
					[/* text */ 't', ` so that a module's classes can be
 granted specific permissions when loaded by a `],
					[/* reference */ 'r', `java.security.SecureClassLoader`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The location or an empty `],
				[/* inline code block */ 'i', `Optional`],
				[/* text */ 't', ` if not known`]
			]
		]]
	],
]);
