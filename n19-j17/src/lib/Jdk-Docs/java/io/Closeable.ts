import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.io.Closeable', [
	[/* class description */
		[/* text */ 't', `A `],
		[/* inline code block */ 'i', `Closeable`],
		[/* text */ 't', ` is a source or destination of data that can be closed.
 The close method is invoked to release resources that the object is
 holding (such as open files).`]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'close()', [
			[/* method description */
				[/* text */ 't', `Closes this stream and releases any system resources associated
 with it. If the stream is already closed then invoking this
 method has no effect.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` As noted in `],
					[/* external link */ 'a', `../lang/AutoCloseable.html#close()`, `AutoCloseable.close()`],
					[/* text */ 't', `, cases where the
 close may fail require careful attention. It is strongly advised
 to relinquish the underlying resources and to internally
 `],
					[/* text */ 't', `mark`],
					[/* text */ 't', ` the `],
					[/* inline code block */ 'i', `Closeable`],
					[/* text */ 't', ` as closed, prior to throwing
 the `],
					[/* inline code block */ 'i', `IOException`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs`]
				]]
			],
			/* return */ UDF
		]]
	],
]);
