import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('groovy.util.CharsetToolkit', [
	[ /* class description */
		['b', `Utility class to guess the encoding of a given text file.`],
		['b', `
 Unicode files encoded in UTF-16 (low or big endian) or UTF-8 files
 with a Byte Order Marker are correctly discovered. For UTF-8 files with no BOM, if the buffer
 is wide enough, the charset should also be discovered.
 `],
		['b', `
 A byte buffer of 4KB is used to be able to guess the encoding.
 `],
		['b', `
 Usage:
 `],
		['c', ` CharsetToolkit toolkit = new CharsetToolkit(file);

 // guess the encoding
 Charset guessedCharset = toolkit.getCharset();

 // create a reader with the correct charset
 BufferedReader reader = toolkit.getReader();

 // read the file content
 String line;
 while ((line = br.readLine())!= null)
 {
     System.out.println(line);
 }
 `],
	],
	UDF,
	/* class sees */ UDF,
	UDF, UDF, UDF
]);
