import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.util.PropertyResourceBundle', [
	[/* class description */
		[/* inline code block */ 'i', `PropertyResourceBundle`],
		[/* text */ 't', ` is a concrete subclass of
 `],
		[/* inline code block */ 'i', `ResourceBundle`],
		[/* text */ 't', ` that manages resources for a locale
 using a set of static strings from a property file. See
 `],
		[/* reference */ 'r', `java.util.ResourceBundle`],
		[/* text */ 't', ` for more information about resource
 bundles.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 Unlike other types of resource bundle, you don't subclass
 `],
			[/* inline code block */ 'i', `PropertyResourceBundle`],
			[/* text */ 't', `.  Instead, you supply properties
 files containing the resource data.  `],
			[/* inline code block */ 'i', `ResourceBundle.getBundle`],
			[/* text */ 't', `
 will automatically look for the appropriate properties file and create a
 `],
			[/* inline code block */ 'i', `PropertyResourceBundle`],
			[/* text */ 't', ` that refers to it. See
 `],
			[/* reference */ 'r', `.ResourceBundle#getBundle(java.lang.String,java.util.Locale,java.lang.ClassLoader)`],
			[/* text */ 't', `
 for a complete description of the search and instantiation strategy.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 The following `],
			[/* text */ 't', `example`],
			[/* text */ 't', ` shows a member of a resource
 bundle family with the base name "MyResources".
 The text defines the bundle "MyResources_de",
 the German member of the bundle family.
 This member is based on `],
			[/* inline code block */ 'i', `PropertyResourceBundle`],
			[/* text */ 't', `, and the text
 therefore is the content of the file "MyResources_de.properties"
 (a related `],
			[/* reference */ 'r', `.ListResourceBundle#sample`],
			[/* text */ 't', ` shows
 how you can add bundles to this family that are implemented as subclasses
 of `],
			[/* inline code block */ 'i', `ListResourceBundle`],
			[/* text */ 't', `).
 The keys in this example are of the form "s1" etc. The actual
 keys are entirely up to your choice, so long as they are the same as
 the keys you use in your program to retrieve the objects from the bundle.
 Keys are case-sensitive.
 `]
		]],
		[/* block */ 'b', [
			[/* code block */ 'c', ` # MessageFormat pattern
 s1=Die Platte \\"{1}\\" enthält {0}.

 # location of {0} in pattern
 s2=1

 # sample disk name
 s3=Meine Platte

 # first ChoiceFormat choice
 s4=keine Dateien

 # second ChoiceFormat choice
 s5=eine Datei

 # third ChoiceFormat choice
 s6={0,number} Dateien

 # sample date
 s7=3. März 1996
 `]
		]],
		[/* block */ 'b', '']
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>(java.io.InputStream)', [
			[/* constructor description */
				[/* text */ 't', `Creates a property resource bundle from an `],
				[/* reference */ 'r', `java.io.InputStream`],
				[/* text */ 't', `. This constructor reads the property file in UTF-8 by default.
 If a `],
				[/* reference */ 'r', `java.nio.charset.MalformedInputException`],
				[/* text */ 't', ` or an
 `],
				[/* reference */ 'r', `java.nio.charset.UnmappableCharacterException`],
				[/* text */ 't', ` occurs on reading the
 input stream, then the PropertyResourceBundle instance resets to the state
 before the exception, re-reads the input stream in `],
				[/* inline code block */ 'i', `ISO-8859-1`],
				[/* text */ 't', ` and
 continues reading. If the system property
 `],
				[/* inline code block */ 'i', `java.util.PropertyResourceBundle.encoding`],
				[/* text */ 't', ` is set to either
 "ISO-8859-1" or "UTF-8", the input stream is solely read in that encoding,
 and throws the exception if it encounters an invalid sequence. Other
 encoding values are ignored for this system property.
 The system property is read and evaluated when initializing this class.
 Changing or removing the property has no effect after the initialization.`]
			],
			[/* parameters */
				[/* parameter */ 'stream', [/* parameter description */
					[/* text */ 't', `an InputStream that represents a property file
        to read from.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `stream`],
					[/* text */ 't', ` is null`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `stream`],
					[/* text */ 't', ` contains a
     malformed Unicode escape sequence.`]
				]],
				[/* throw */ 'java.nio.charset.MalformedInputException', [/* throw description */
					[/* text */ 't', `if the system property
     `],
					[/* inline code block */ 'i', `java.util.PropertyResourceBundle.encoding`],
					[/* text */ 't', ` is set to "UTF-8"
     and `],
					[/* inline code block */ 'i', `stream`],
					[/* text */ 't', ` contains an invalid UTF-8 byte sequence.`]
				]],
				[/* throw */ 'java.nio.charset.UnmappableCharacterException', [/* throw description */
					[/* text */ 't', `if the system property
     `],
					[/* inline code block */ 'i', `java.util.PropertyResourceBundle.encoding`],
					[/* text */ 't', ` is set to "UTF-8"
     and `],
					[/* inline code block */ 'i', `stream`],
					[/* text */ 't', ` contains an unmappable UTF-8 byte sequence.`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.io.Reader)', [
			[/* constructor description */
				[/* text */ 't', `Creates a property resource bundle from a `],
				[/* reference */ 'r', `java.io.Reader`],
				[/* text */ 't', `.  Unlike the constructor
 `],
				[/* reference */ 'r', `#%3Cinit%3E(java.io.InputStream)`, `PropertyResourceBundle(InputStream)`],
				[/* text */ 't', `,
 there is no limitation as to the encoding of the input property file.`]
			],
			[/* parameters */
				[/* parameter */ 'reader', [/* parameter description */
					[/* text */ 't', `a Reader that represents a property file to
        read from.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `reader`],
					[/* text */ 't', ` is null`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if a malformed Unicode escape sequence appears
     from `],
					[/* inline code block */ 'i', `reader`],
					[/* text */ 't', `.`]
				]]
			]
		]]
	],
	[/* methods */
		[/* method */ 'handleKeySet()', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `Set`],
				[/* text */ 't', ` of the keys contained
 `],
				[/* text */ 't', `only`],
				[/* text */ 't', ` in this `],
				[/* inline code block */ 'i', `ResourceBundle`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Set`],
				[/* text */ 't', ` of the keys contained only in this
         `],
				[/* inline code block */ 'i', `ResourceBundle`]
			]
		]],
		[/* method */ 'handleGetObject(java.lang.String)', [
			[/* method description */
				[/* block */ 'b', `Gets an object for the given key from this resource bundle.
 Returns null if this resource bundle does not contain an
 object for the given key.`]
			],
			[/* parameters */
				[/* parameter */ 'key', [/* parameter description */
					[/* text */ 't', `the key for the desired object`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the object for the given key, or null`]
			]
		]],
		[/* method */ 'getKeys()', [
			[/* method description */
				[/* text */ 't', `Returns an `],
				[/* inline code block */ 'i', `Enumeration`],
				[/* text */ 't', ` of the keys contained in
 this `],
				[/* inline code block */ 'i', `ResourceBundle`],
				[/* text */ 't', ` and its parent bundles.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an `],
				[/* inline code block */ 'i', `Enumeration`],
				[/* text */ 't', ` of the keys contained in
         this `],
				[/* inline code block */ 'i', `ResourceBundle`],
				[/* text */ 't', ` and its parent bundles.`]
			]
		]]
	],
]);
