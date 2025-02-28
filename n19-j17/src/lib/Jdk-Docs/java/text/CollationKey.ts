import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.text.CollationKey', [
	[/* class description */
		[/* text */ 't', `A `],
		[/* inline code block */ 'i', `CollationKey`],
		[/* text */ 't', ` represents a `],
		[/* inline code block */ 'i', `String`],
		[/* text */ 't', ` under the
 rules of a specific `],
		[/* inline code block */ 'i', `Collator`],
		[/* text */ 't', ` object. Comparing two
 `],
		[/* inline code block */ 'i', `CollationKey`],
		[/* text */ 't', `s returns the relative order of the
 `],
		[/* inline code block */ 'i', `String`],
		[/* text */ 't', `s they represent. Using `],
		[/* inline code block */ 'i', `CollationKey`],
		[/* text */ 't', `s
 to compare `],
		[/* inline code block */ 'i', `String`],
		[/* text */ 't', `s is generally faster than using
 `],
		[/* inline code block */ 'i', `Collator.compare`],
		[/* text */ 't', `. Thus, when the `],
		[/* inline code block */ 'i', `String`],
		[/* text */ 't', `s
 must be compared multiple times, for example when sorting a list
 of `],
		[/* inline code block */ 'i', `String`],
		[/* text */ 't', `s. It's more efficient to use `],
		[/* inline code block */ 'i', `CollationKey`],
		[/* text */ 't', `s.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 You can not create `],
			[/* inline code block */ 'i', `CollationKey`],
			[/* text */ 't', `s directly. Rather,
 generate them by calling `],
			[/* inline code block */ 'i', `Collator.getCollationKey`],
			[/* text */ 't', `.
 You can only compare `],
			[/* inline code block */ 'i', `CollationKey`],
			[/* text */ 't', `s generated from
 the same `],
			[/* inline code block */ 'i', `Collator`],
			[/* text */ 't', ` object.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 Generating a `],
			[/* inline code block */ 'i', `CollationKey`],
			[/* text */ 't', ` for a `],
			[/* inline code block */ 'i', `String`],
			[/* text */ 't', `
 involves examining the entire `],
			[/* inline code block */ 'i', `String`],
			[/* text */ 't', `
 and converting it to series of bits that can be compared bitwise. This
 allows fast comparisons once the keys are generated. The cost of generating
 keys is recouped in faster comparisons when `],
			[/* inline code block */ 'i', `String`],
			[/* text */ 't', `s need
 to be compared many times. On the other hand, the result of a comparison
 is often determined by the first couple of characters of each `],
			[/* inline code block */ 'i', `String`],
			[/* text */ 't', `.
 `],
			[/* inline code block */ 'i', `Collator.compare`],
			[/* text */ 't', ` examines only as many characters as it needs which
 allows it to be faster when doing single comparisons.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 The following example shows how `],
			[/* inline code block */ 'i', `CollationKey`],
			[/* text */ 't', `s might be used
 to sort a list of `],
			[/* inline code block */ 'i', `String`],
			[/* text */ 't', `s.
 `]
		]],
		[/* block */ 'b', [
			[/* code block */ 'c', [
				[/* inline code block */ 'i', `// Create an array of CollationKeys for the Strings to be sorted.
 Collator myCollator = Collator.getInstance();
 CollationKey[] keys = new CollationKey[3];
 keys[0] = myCollator.getCollationKey("Tom");
 keys[1] = myCollator.getCollationKey("Dick");
 keys[2] = myCollator.getCollationKey("Harry");
 sort(keys);

 //...

 // Inside body of sort routine, compare keys this way
 if (keys[i].compareTo(keys[j]) > 0)
    // swap keys[i] and keys[j]

 //...

 // Finally, when we've returned from sort.
 System.out.println(keys[0].getSourceString());
 System.out.println(keys[1].getSourceString());
 System.out.println(keys[2].getSourceString());`]
			]]
		]],
		[/* block */ 'b', '']
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>(java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `CollationKey constructor.`]
			],
			[/* parameters */
				[/* parameter */ 'source', [/* parameter description */
					[/* text */ 't', `the source string`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `source`],
					[/* text */ 't', ` is null`]
				]]
			]
		]]
	],
	[/* methods */
		[/* method */ 'compareTo(java.text.CollationKey)', [
			[/* method description */
				[/* text */ 't', `Compare this CollationKey to the target CollationKey. The collation rules of the
 Collator object which created these keys are applied. `],
				[/* text */ 't', `Note:`],
				[/* text */ 't', `
 CollationKeys created by different Collators can not be compared.`]
			],
			[/* parameters */
				[/* parameter */ 'target', [/* parameter description */
					[/* text */ 't', `target CollationKey`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `Returns an integer value. Value is less than zero if this is less
 than target, value is zero if this and target are equal and value is greater than
 zero if this is greater than target.`]
			]
		]],
		[/* method */ 'toByteArray()', [
			[/* method description */
				[/* text */ 't', `Converts the CollationKey to a sequence of bits. If two CollationKeys
 could be legitimately compared, then one could compare the byte arrays
 for each of those keys to obtain the same result.  Byte arrays are
 organized most significant byte first.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a byte array representation of the CollationKey`]
			]
		]],
		[/* method */ 'getSourceString()', [
			[/* method description */
				[/* text */ 't', `Returns the String that this CollationKey represents.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the source string of this CollationKey`]
			]
		]]
	],
]);
