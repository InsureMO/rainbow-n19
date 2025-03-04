import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.util.ListResourceBundle', [
	[/* class description */
		[/* inline code block */ 'i', `ListResourceBundle`],
		[/* text */ 't', ` is an abstract subclass of
 `],
		[/* inline code block */ 'i', `ResourceBundle`],
		[/* text */ 't', ` that manages resources for a locale
 in a convenient and easy to use list. See `],
		[/* inline code block */ 'i', `ResourceBundle`],
		[/* text */ 't', ` for
 more information about resource bundles in general.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 Subclasses must override `],
			[/* inline code block */ 'i', `getContents`],
			[/* text */ 't', ` and provide an array,
 where each item in the array is a pair of objects.
 The first element of each pair is the key, which must be a
 `],
			[/* inline code block */ 'i', `String`],
			[/* text */ 't', `, and the second element is the value associated with
 that key.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 The following `],
			[/* text */ 't', `example`],
			[/* text */ 't', ` shows two members of a resource
 bundle family with the base name "MyResources".
 "MyResources" is the default member of the bundle family, and
 "MyResources_fr" is the French member.
 These members are based on `],
			[/* inline code block */ 'i', `ListResourceBundle`],
			[/* text */ 't', `
 (a related `],
			[/* reference */ 'r', `.PropertyResourceBundle#sample`],
			[/* text */ 't', ` shows
 how you can add a bundle to this family that's based on a properties file).
 The keys in this example are of the form "s1" etc. The actual
 keys are entirely up to your choice, so long as they are the same as
 the keys you use in your program to retrieve the objects from the bundle.
 Keys are case-sensitive.
 `]
		]],
		[/* block */ 'b', [
			[/* code block */ 'c', `
 public class MyResources extends ListResourceBundle {
     protected Object[][] getContents() {
         return new Object[][] {
         // LOCALIZE THIS
             {"s1", "The disk \\"{1}\\" contains {0}."},  // MessageFormat pattern
             {"s2", "1"},                               // location of {0} in pattern
             {"s3", "My Disk"},                         // sample disk name
             {"s4", "no files"},                        // first ChoiceFormat choice
             {"s5", "one file"},                        // second ChoiceFormat choice
             {"s6", "{0,number} files"},                // third ChoiceFormat choice
             {"s7", "3 Mar 96"},                        // sample date
             {"s8", new Dimension(1,5)}                 // real object, not just string
         // END OF MATERIAL TO LOCALIZE
         };
     }
 }

 public class MyResources_fr extends ListResourceBundle {
     protected Object[][] getContents() {
         return new Object[][] {
         // LOCALIZE THIS
             {"s1", "Le disque \\"{1}\\" {0}."},          // MessageFormat pattern
             {"s2", "1"},                               // location of {0} in pattern
             {"s3", "Mon disque"},                      // sample disk name
             {"s4", "ne contient pas de fichiers"},     // first ChoiceFormat choice
             {"s5", "contient un fichier"},             // second ChoiceFormat choice
             {"s6", "contient {0,number} fichiers"},    // third ChoiceFormat choice
             {"s7", "3 mars 1996"},                     // sample date
             {"s8", new Dimension(1,3)}                 // real object, not just string
         // END OF MATERIAL TO LOCALIZE
         };
     }
 }
 `]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `
 The implementation of a `],
			[/* inline code block */ 'i', `ListResourceBundle`],
			[/* text */ 't', ` subclass must be thread-safe
 if it's simultaneously used by multiple threads. The default implementations
 of the methods in this class are thread-safe.`]
		]]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Sole constructor.  (For invocation by subclass constructors, typically
 implicit.)`]
			],
			/* parameters */ UDF,
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'getContents()', [
			[/* method description */
				[/* text */ 't', `Returns an array in which each item is a pair of objects in an
 `],
				[/* inline code block */ 'i', `Object`],
				[/* text */ 't', ` array. The first element of each pair is
 the key, which must be a `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', `, and the second
 element is the value associated with that key.  See the class
 description for details.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an array of an `],
				[/* inline code block */ 'i', `Object`],
				[/* text */ 't', ` array representing a
 key-value pair.`]
			]
		]],
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
