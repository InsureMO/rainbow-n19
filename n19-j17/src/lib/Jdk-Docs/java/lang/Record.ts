import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.lang.Record', [
	[/* class description */
		[/* text */ 't', `This is the common base class of all Java language record classes.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `More information about records, including descriptions of the
 implicitly declared methods synthesized by the compiler, can be
 found in section 8.10 of
 `],
			[/* text */ 't', `The Java Language Specification`],
			[/* text */ 't', `.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `A `],
			[/* text */ 't', `record class`],
			[/* text */ 't', ` is a shallowly immutable, transparent carrier for
 a fixed set of values, called the `],
			[/* text */ 't', `record components`],
			[/* text */ 't', `.  The Java
 language provides concise syntax for declaring record classes, whereby the
 record components are declared in the record header.  The list of record
 components declared in the record header form the `],
			[/* text */ 't', `record descriptor`],
			[/* text */ 't', `.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `A record class has the following mandated members: a `],
			[/* text */ 't', `canonical
 constructor`],
			[/* text */ 't', `, which must provide at least as much access as the record
 class and whose descriptor is the same as the record descriptor;
 a private final field corresponding to each component, whose name and
 type are the same as that of the component; a public accessor method
 corresponding to each component, whose name and return type are the same as
 that of the component.  If not explicitly declared in the body of the record,
 implicit implementations for these members are provided.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `The implicit declaration of the canonical constructor has the same accessibility
 as the record class and initializes the component fields from the corresponding
 constructor arguments.  The implicit declaration of the accessor methods returns
 the value of the corresponding component field.  The implicit declaration of the
 `],
			[/* external link */ 'a', `Object.html#equals(java.lang.Object)`, `Object.equals(Object)`],
			[/* text */ 't', `, `],
			[/* external link */ 'a', `Object.html#hashCode()`, `Object.hashCode()`],
			[/* text */ 't', `, and `],
			[/* external link */ 'a', `Object.html#toString()`, `Object.toString()`],
			[/* text */ 't', `
 methods are derived from all of the component fields.

 `]
		]],
		[/* block */ 'b', `The primary reasons to provide an explicit declaration for the
 canonical constructor or accessor methods are to validate constructor
 arguments, perform defensive copies on mutable components, or normalize groups
 of components (such as reducing a rational number to lowest terms.)

 `],
		[/* block */ 'b', [
			[/* text */ 't', `For all record classes, the following invariant must hold: if a record R's
 components are `],
			[/* inline code block */ 'i', `c1, c2, ... cn`],
			[/* text */ 't', `, then if a record instance is copied
 as follows:
 `]
		]],
		[/* code block */ 'c', `     R copy = new R(r.c1(), r.c2(), ..., r.cn());
 `],
		[/* text */ 't', `
 then it must be the case that `],
		[/* inline code block */ 'i', `r.equals(copy)`],
		[/* text */ 't', `.`],
		[/* block */ 'b', '']
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Constructor for record classes to call.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'equals(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Indicates whether some other object is "equal to" this one.  In addition
 to the general contract of `],
				[/* external link */ 'a', `Object.html#equals(java.lang.Object)`, `Object.equals`],
				[/* text */ 't', `,
 record classes must further obey the invariant that when
 a record instance is "copied" by passing the result of the record component
 accessor methods to the canonical constructor, as follows:
 `],
				[/* code block */ 'c', `     R copy = new R(r.c1(), r.c2(), ..., r.cn());
 `],
				[/* text */ 't', `
 then it must be the case that `],
				[/* inline code block */ 'i', `r.equals(copy)`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `the reference object with which to compare.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this record is equal to the
          argument; `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Returns a string representation of the record.
 In accordance with the general contract of `],
				[/* external link */ 'a', `Object.html#toString()`, `Object.toString()`],
				[/* text */ 't', `,
 the `],
				[/* inline code block */ 'i', `toString`],
				[/* text */ 't', ` method returns a string that
 "textually represents" this record. The result should
 be a concise but informative representation that is easy for a
 person to read.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 In addition to this general contract, record classes must further
 participate in the invariant that any two records which are
 `],
					[/* reference */ 'r', `equal`],
					[/* text */ 't', ` must produce equal
 strings.  This invariant is necessarily relaxed in the rare
 case where corresponding equal component values might fail
 to produce equal strings for themselves.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a string representation of the object.`]
			]
		]],
		[/* method */ 'hashCode()', [
			[/* method description */
				[/* text */ 't', `Returns a hash code value for the record.
 Obeys the general contract of `],
				[/* external link */ 'a', `Object.html#hashCode()`, `Object.hashCode`],
				[/* text */ 't', `.
 For records, hashing behavior is constrained by the refined contract
 of `],
				[/* reference */ 'r', `Record.equals`],
				[/* text */ 't', `, so that any two records
 created from the same components must have the same hash code.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a hash code value for this record.`]
			]
		]]
	],
]);
