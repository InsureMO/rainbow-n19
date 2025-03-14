import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.text.FieldPosition', [
	[/* class description */
		[/* inline code block */ 'i', `FieldPosition`],
		[/* text */ 't', ` is a simple class used by `],
		[/* inline code block */ 'i', `Format`],
		[/* text */ 't', `
 and its subclasses to identify fields in formatted output. Fields can
 be identified in two ways:
 `],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* text */ 't', `By an integer constant, whose names typically end with
      `],
				[/* inline code block */ 'i', `_FIELD`],
				[/* text */ 't', `. The constants are defined in the various
      subclasses of `],
				[/* inline code block */ 'i', `Format`],
				[/* text */ 't', `.
  `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `By a `],
				[/* inline code block */ 'i', `Format.Field`],
				[/* text */ 't', ` constant, see `],
				[/* inline code block */ 'i', `ERA_FIELD`],
				[/* text */ 't', `
      and its friends in `],
				[/* inline code block */ 'i', `DateFormat`],
				[/* text */ 't', ` for an example.
 `]
			]]
		]],
		[/* text */ 't', `
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 `],
			[/* inline code block */ 'i', `FieldPosition`],
			[/* text */ 't', ` keeps track of the position of the
 field within the formatted output with two indices: the index
 of the first character of the field and the index of the last
 character of the field.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 One version of the `],
			[/* inline code block */ 'i', `format`],
			[/* text */ 't', ` method in the various
 `],
			[/* inline code block */ 'i', `Format`],
			[/* text */ 't', ` classes requires a `],
			[/* inline code block */ 'i', `FieldPosition`],
			[/* text */ 't', `
 object as an argument. You use this `],
			[/* inline code block */ 'i', `format`],
			[/* text */ 't', ` method
 to perform partial formatting or to get information about the
 formatted output (such as the position of a field).

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 If you are interested in the positions of all attributes in the
 formatted string use the `],
			[/* inline code block */ 'i', `Format`],
			[/* text */ 't', ` method
 `],
			[/* inline code block */ 'i', `formatToCharacterIterator`],
			[/* text */ 't', `.`]
		]]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>(int)', [
			[/* constructor description */
				[/* text */ 't', `Creates a FieldPosition object for the given field.  Fields are
 identified by constants, whose names typically end with _FIELD,
 in the various subclasses of Format.`]
			],
			[/* parameters */
				[/* parameter */ 'field', [/* parameter description */
					[/* text */ 't', `the field identifier`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.text.Format.Field)', [
			[/* constructor description */
				[/* text */ 't', `Creates a FieldPosition object for the given field constant. Fields are
 identified by constants defined in the various `],
				[/* inline code block */ 'i', `Format`],
				[/* text */ 't', `
 subclasses. This is equivalent to calling
 `],
				[/* inline code block */ 'i', `new FieldPosition(attribute, -1)`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'attribute', [/* parameter description */
					[/* text */ 't', `Format.Field constant identifying a field`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.text.Format.Field,int)', [
			[/* constructor description */
				[/* text */ 't', `Creates a `],
				[/* inline code block */ 'i', `FieldPosition`],
				[/* text */ 't', ` object for the given field.
 The field is identified by an attribute constant from one of the
 `],
				[/* inline code block */ 'i', `Field`],
				[/* text */ 't', ` subclasses as well as an integer field ID
 defined by the `],
				[/* inline code block */ 'i', `Format`],
				[/* text */ 't', ` subclasses. `],
				[/* inline code block */ 'i', `Format`],
				[/* text */ 't', `
 subclasses that are aware of `],
				[/* inline code block */ 'i', `Field`],
				[/* text */ 't', ` should give precedence
 to `],
				[/* inline code block */ 'i', `attribute`],
				[/* text */ 't', ` and ignore `],
				[/* inline code block */ 'i', `fieldID`],
				[/* text */ 't', ` if
 `],
				[/* inline code block */ 'i', `attribute`],
				[/* text */ 't', ` is not null. However, older `],
				[/* inline code block */ 'i', `Format`],
				[/* text */ 't', `
 subclasses may not be aware of `],
				[/* inline code block */ 'i', `Field`],
				[/* text */ 't', ` and rely on
 `],
				[/* inline code block */ 'i', `fieldID`],
				[/* text */ 't', `. If the field has no corresponding integer
 constant, `],
				[/* inline code block */ 'i', `fieldID`],
				[/* text */ 't', ` should be -1.`]
			],
			[/* parameters */
				[/* parameter */ 'attribute', [/* parameter description */
					[/* text */ 't', `Format.Field constant identifying a field`]
				]],
				[/* parameter */ 'fieldID', [/* parameter description */
					[/* text */ 't', `integer constant identifying a field`]
				]]
			],
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'equals(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Overrides equals`]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `the reference object with which to compare.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this object is the same as the obj
          argument; `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'getBeginIndex()', [
			[/* method description */
				[/* text */ 't', `Retrieves the index of the first character in the requested field.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the begin index`]
			]
		]],
		[/* method */ 'getEndIndex()', [
			[/* method description */
				[/* text */ 't', `Retrieves the index of the character following the last character in the
 requested field.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the end index`]
			]
		]],
		[/* method */ 'getField()', [
			[/* method description */
				[/* text */ 't', `Retrieves the field identifier.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the field identifier`]
			]
		]],
		[/* method */ 'hashCode()', [
			[/* method description */
				[/* text */ 't', `Returns a hash code for this FieldPosition.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a hash code value for this object`]
			]
		]],
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Return a string representation of this FieldPosition.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a string representation of this object`]
			]
		]],
		[/* method */ 'getFieldAttribute()', [
			[/* method description */
				[/* text */ 't', `Returns the field identifier as an attribute constant
 from one of the `],
				[/* inline code block */ 'i', `Field`],
				[/* text */ 't', ` subclasses. May return null if
 the field is specified only by an integer field ID.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `Identifier for the field`]
			]
		]],
		[/* method */ 'setBeginIndex(int)', [
			[/* method description */
				[/* text */ 't', `Sets the begin index.  For use by subclasses of Format.`]
			],
			[/* parameters */
				[/* parameter */ 'bi', [/* parameter description */
					[/* text */ 't', `the begin index`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'setEndIndex(int)', [
			[/* method description */
				[/* text */ 't', `Sets the end index.  For use by subclasses of Format.`]
			],
			[/* parameters */
				[/* parameter */ 'ei', [/* parameter description */
					[/* text */ 't', `the end index`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]]
	],
]);
