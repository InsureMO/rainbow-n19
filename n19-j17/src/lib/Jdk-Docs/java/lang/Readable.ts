import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.lang.Readable', [
	[/* class description */
		[/* text */ 't', `A `],
		[/* inline code block */ 'i', `Readable`],
		[/* text */ 't', ` is a source of characters. Characters from
 a `],
		[/* inline code block */ 'i', `Readable`],
		[/* text */ 't', ` are made available to callers of the read
 method via a `],
		[/* reference */ 'r', `java.nio.CharBuffer`, `CharBuffer`],
		[/* text */ 't', `.`]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'read(java.nio.CharBuffer)', [
			[/* method description */
				[/* text */ 't', `Attempts to read characters into the specified character buffer.
 The buffer is used as a repository of characters as-is: the only
 changes made are the results of a put operation. No flipping or
 rewinding of the buffer is performed.`]
			],
			[/* parameters */
				[/* parameter */ 'cb', [/* parameter description */
					[/* text */ 't', `the buffer to read characters into`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if cb is null`]
				]],
				[/* throw */ 'java.nio.ReadOnlyBufferException', [/* throw description */
					[/* text */ 't', `if cb is a read only buffer`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The number of `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', ` values added to the buffer,
                 or -1 if this source of characters is at its end`]
			]
		]]
	],
]);
