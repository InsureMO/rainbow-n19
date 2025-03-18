import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.lang.ProcessBuilder$Redirect', [
	[/* class description */
		[/* text */ 't', `Represents a source of subprocess input or a destination of
 subprocess output.

 Each `],
		[/* inline code block */ 'i', `Redirect`],
		[/* text */ 't', ` instance is one of the following:

 `],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* text */ 't', `the special value `],
				[/* text */ 't', `Redirect.PIPE`],
				[/* text */ 't', `
 `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `the special value `],
				[/* text */ 't', `Redirect.INHERIT`],
				[/* text */ 't', `
 `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `the special value `],
				[/* text */ 't', `Redirect.DISCARD`],
				[/* text */ 't', `
 `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `a redirection to read from a file, created by an invocation of
     `],
				[/* reference */ 'r', `#from(java.io.File)`, `Redirect.from(File)`],
				[/* text */ 't', `
 `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `a redirection to write to a file,  created by an invocation of
     `],
				[/* reference */ 'r', `#to(java.io.File)`, `Redirect.to(File)`],
				[/* text */ 't', `
 `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `a redirection to append to a file, created by an invocation of
     `],
				[/* reference */ 'r', `#appendTo(java.io.File)`, `Redirect.appendTo(File)`],
				[/* text */ 't', `
 `]
			]]
		]],
		[/* text */ 't', `

 `],
		[/* block */ 'b', [
			[/* text */ 't', `Each of the above categories has an associated unique
 `],
			[/* reference */ 'r', `enum class in java.lang.ProcessBuilder.Redirect.Type`, `Type`],
			[/* text */ 't', `.`]
		]]
	],
	[/* fields */
		[/* field */ 'DISCARD', [
			[/* field description */
				[/* text */ 't', `Indicates that subprocess output will be discarded.
 A typical implementation discards the output by writing to
 an operating system specific "null file".

 `],
				[/* block */ 'b', `It will always be true that
 `],
				[/* code block */ 'c', [
					[/* text */ 't', ` `],
					[/* inline code block */ 'i', `Redirect.DISCARD.file() is the filename appropriate for the operating system
 and may be null &&
 Redirect.DISCARD.type() == Redirect.Type.WRITE`]
				]],
				[/* block */ 'b', '']
			],
		]],
		[/* field */ 'INHERIT', [
			[/* field description */
				[/* text */ 't', `Indicates that subprocess I/O source or destination will be the
 same as those of the current process.  This is the normal
 behavior of most operating system command interpreters (shells).

 `],
				[/* block */ 'b', `It will always be true that
  `],
				[/* code block */ 'c', [
					[/* text */ 't', ` `],
					[/* inline code block */ 'i', `Redirect.INHERIT.file() == null &&
 Redirect.INHERIT.type() == Redirect.Type.INHERIT`]
				]],
				[/* block */ 'b', '']
			],
		]],
		[/* field */ 'PIPE', [
			[/* field description */
				[/* text */ 't', `Indicates that subprocess I/O will be connected to the
 current Java process over a pipe.

 This is the default handling of subprocess standard I/O.

 `],
				[/* block */ 'b', `It will always be true that
  `],
				[/* code block */ 'c', [
					[/* text */ 't', ` `],
					[/* inline code block */ 'i', `Redirect.PIPE.file() == null &&
 Redirect.PIPE.type() == Redirect.Type.PIPE`]
				]],
				[/* block */ 'b', '']
			],
		]]
	],
	/* constructors */,
	[/* methods */
		[/* method */ 'type()', [
			[/* method description */
				[/* text */ 't', `Returns the type of this `],
				[/* inline code block */ 'i', `Redirect`],
				[/* text */ 't', `.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the type of this `],
				[/* inline code block */ 'i', `Redirect`]
			]
		]],
		[/* method */ 'equals(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Compares the specified object with this `],
				[/* inline code block */ 'i', `Redirect`],
				[/* text */ 't', ` for
 equality.  Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if and only if the two
 objects are identical or both objects are `],
				[/* inline code block */ 'i', `Redirect`],
				[/* text */ 't', `
 instances of the same type associated with non-null equal
 `],
				[/* inline code block */ 'i', `File`],
				[/* text */ 't', ` instances.`]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `the reference object with which to compare.`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this object is the same as the obj
          argument; `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'hashCode()', [
			[/* method description */
				[/* text */ 't', `Returns a hash code value for this `],
				[/* inline code block */ 'i', `Redirect`],
				[/* text */ 't', `.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `a hash code value for this `],
				[/* inline code block */ 'i', `Redirect`]
			]
		]],
		[/* method */ 'file()', [
			[/* method description */
				[/* text */ 't', `Returns the `],
				[/* reference */ 'r', `java.io.File`, `File`],
				[/* text */ 't', ` source or destination associated
 with this redirect, or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if there is no such file.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the file associated with this redirect,
         or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if there is no such file`]
			]
		]],
		[/* method */ 'appendTo(java.io.File)', [
			[/* method description */
				[/* text */ 't', `Returns a redirect to append to the specified file.
 Each write operation first advances the position to the
 end of the file and then writes the requested data.
 Whether the advancement of the position and the writing
 of the data are done in a single atomic operation is
 system-dependent and therefore unspecified.

 `],
				[/* block */ 'b', `It will always be true that
  `],
				[/* code block */ 'c', [
					[/* text */ 't', ` `],
					[/* inline code block */ 'i', `Redirect.appendTo(file).file() == file &&
 Redirect.appendTo(file).type() == Redirect.Type.APPEND`]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'file', [/* parameter description */
					[/* text */ 't', `The `],
					[/* inline code block */ 'i', `File`],
					[/* text */ 't', ` for the `],
					[/* inline code block */ 'i', `Redirect`],
					[/* text */ 't', `.`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `a redirect to append to the specified file`]
			]
		]],
		[/* method */ 'from(java.io.File)', [
			[/* method description */
				[/* text */ 't', `Returns a redirect to read from the specified file.

 `],
				[/* block */ 'b', `It will always be true that
  `],
				[/* code block */ 'c', [
					[/* text */ 't', ` `],
					[/* inline code block */ 'i', `Redirect.from(file).file() == file &&
 Redirect.from(file).type() == Redirect.Type.READ`]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'file', [/* parameter description */
					[/* text */ 't', `The `],
					[/* inline code block */ 'i', `File`],
					[/* text */ 't', ` for the `],
					[/* inline code block */ 'i', `Redirect`],
					[/* text */ 't', `.`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `a redirect to read from the specified file`]
			]
		]],
		[/* method */ 'to(java.io.File)', [
			[/* method description */
				[/* text */ 't', `Returns a redirect to write to the specified file.
 If the specified file exists when the subprocess is started,
 its previous contents will be discarded.

 `],
				[/* block */ 'b', `It will always be true that
  `],
				[/* code block */ 'c', [
					[/* text */ 't', ` `],
					[/* inline code block */ 'i', `Redirect.to(file).file() == file &&
 Redirect.to(file).type() == Redirect.Type.WRITE`]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'file', [/* parameter description */
					[/* text */ 't', `The `],
					[/* inline code block */ 'i', `File`],
					[/* text */ 't', ` for the `],
					[/* inline code block */ 'i', `Redirect`],
					[/* text */ 't', `.`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `a redirect to write to the specified file`]
			]
		]]
	],
	/* enum values */ UDF
]);
