import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.nio.file.DirectoryStream', [
	[/* class description */
		[/* text */ 't', `An object to iterate over the entries in a directory. A directory stream
 allows for the convenient use of the for-each construct to iterate over a
 directory.

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` While `],
			[/* inline code block */ 'i', `DirectoryStream`],
			[/* text */ 't', ` extends `],
			[/* inline code block */ 'i', `Iterable`],
			[/* text */ 't', `, it is not a
 general-purpose `],
			[/* inline code block */ 'i', `Iterable`],
			[/* text */ 't', ` as it supports only a single `],
			[/* inline code block */ 'i', `Iterator`],
			[/* text */ 't', `; invoking the `],
			[/* reference */ 'r', `#iterator()`, `iterator`],
			[/* text */ 't', ` method to obtain a second
 or subsequent iterator throws `],
			[/* inline code block */ 'i', `IllegalStateException`],
			[/* text */ 't', `. `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` An important property of the directory stream's `],
			[/* inline code block */ 'i', `Iterator`],
			[/* text */ 't', ` is that
 its `],
			[/* reference */ 'r', `java.nio.Iterator#hasNext()`],
			[/* text */ 't', ` method is guaranteed to read-ahead by
 at least one element. If `],
			[/* inline code block */ 'i', `hasNext`],
			[/* text */ 't', ` method returns `],
			[/* inline code block */ 'i', `true`],
			[/* text */ 't', `, and is
 followed by a call to the `],
			[/* inline code block */ 'i', `next`],
			[/* text */ 't', ` method, it is guaranteed that the
 `],
			[/* inline code block */ 'i', `next`],
			[/* text */ 't', ` method will not throw an exception due to an I/O error, or
 because the stream has been `],
			[/* reference */ 'r', `java.nio.Closeable#close()`],
			[/* text */ 't', `. The `],
			[/* inline code block */ 'i', `Iterator`],
			[/* text */ 't', ` does
 not support the `],
			[/* reference */ 'r', `java.nio.Iterator#remove()`],
			[/* text */ 't', ` operation.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` A `],
			[/* inline code block */ 'i', `DirectoryStream`],
			[/* text */ 't', ` is opened upon creation and is closed by
 invoking the `],
			[/* inline code block */ 'i', `close`],
			[/* text */ 't', ` method. Closing a directory stream releases any
 resources associated with the stream. Failure to close the stream may result
 in a resource leak. The try-with-resources statement provides a useful
 construct to ensure that the stream is closed:
 `]
		]],
		[/* code block */ 'c', `   Path dir = ...
   try (DirectoryStream<Path> stream = Files.newDirectoryStream(dir)) {
       for (Path entry: stream) {
           ...
       }
   }
 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', ` Once a directory stream is closed, then further access to the directory,
 using the `],
			[/* inline code block */ 'i', `Iterator`],
			[/* text */ 't', `, behaves as if the end of stream has been reached.
 Due to read-ahead, the `],
			[/* inline code block */ 'i', `Iterator`],
			[/* text */ 't', ` may return one or more elements
 after the directory stream has been closed. Once these buffered elements
 have been read, then subsequent calls to the `],
			[/* inline code block */ 'i', `hasNext`],
			[/* text */ 't', ` method returns
 `],
			[/* inline code block */ 'i', `false`],
			[/* text */ 't', `, and subsequent calls to the `],
			[/* inline code block */ 'i', `next`],
			[/* text */ 't', ` method will throw
 `],
			[/* inline code block */ 'i', `NoSuchElementException`],
			[/* text */ 't', `.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` A directory stream is not required to be `],
			[/* text */ 't', `asynchronously closeable`],
			[/* text */ 't', `.
 If a thread is blocked on the directory stream's iterator reading from the
 directory, and another thread invokes the `],
			[/* inline code block */ 'i', `close`],
			[/* text */ 't', ` method, then the
 second thread may block until the read operation is complete.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` If an I/O error is encountered when accessing the directory then it
 causes the `],
			[/* inline code block */ 'i', `Iterator`],
			[/* text */ 't', `'s `],
			[/* inline code block */ 'i', `hasNext`],
			[/* text */ 't', ` or `],
			[/* inline code block */ 'i', `next`],
			[/* text */ 't', ` methods to
 throw `],
			[/* reference */ 'r', `java.nio.file.DirectoryIteratorException`],
			[/* text */ 't', ` with the `],
			[/* reference */ 'r', `java.io.IOException`],
			[/* text */ 't', ` as the
 cause. As stated above, the `],
			[/* inline code block */ 'i', `hasNext`],
			[/* text */ 't', ` method is guaranteed to
 read-ahead by at least one element. This means that if `],
			[/* inline code block */ 'i', `hasNext`],
			[/* text */ 't', ` method
 returns `],
			[/* inline code block */ 'i', `true`],
			[/* text */ 't', `, and is followed by a call to the `],
			[/* inline code block */ 'i', `next`],
			[/* text */ 't', ` method,
 then it is guaranteed that the `],
			[/* inline code block */ 'i', `next`],
			[/* text */ 't', ` method will not fail with a
 `],
			[/* inline code block */ 'i', `DirectoryIteratorException`],
			[/* text */ 't', `.

 `]
		]],
		[/* block */ 'b', ` The elements returned by the iterator are in no specific order. Some file
 systems maintain special links to the directory itself and the directory's
 parent directory. Entries representing these links are not returned by the
 iterator.

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` The iterator is `],
			[/* text */ 't', `weakly consistent`],
			[/* text */ 't', `. It is thread safe but does not
 freeze the directory while iterating, so it may (or may not) reflect updates
 to the directory that occur after the `],
			[/* inline code block */ 'i', `DirectoryStream`],
			[/* text */ 't', ` is created.

 `]
		]],
		[/* block */ 'b', `Usage Examples:`],
		[/* code block */ 'c', `   List<Path> listSourceFiles(Path dir) throws IOException {
       List<Path> result = new ArrayList<>();
       try (DirectoryStream<Path> stream = Files.newDirectoryStream(dir, "*.{c,h,cpp,hpp,java}")) {
           for (Path entry: stream) {
               result.add(entry);
           }
       } catch (DirectoryIteratorException ex) {
           // I/O error encountered during the iteration, the cause is an IOException
           throw ex.getCause();
       }
       return result;
   }
 `],
		[/* block */ 'b', '']
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'iterator()', [
			[/* method description */
				[/* text */ 't', `Returns the iterator associated with this `],
				[/* inline code block */ 'i', `DirectoryStream`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `if this directory stream is closed or the iterator has already
          been returned`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the iterator associated with this `],
				[/* inline code block */ 'i', `DirectoryStream`]
			]
		]]
	],
]);
