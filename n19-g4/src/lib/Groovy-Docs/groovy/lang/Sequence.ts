import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('groovy.lang.Sequence', [
	[/* class description */
		[/* text */ 't', `Represents a sequence of zero or more objects of a given type.
 The type can be omitted in which case any type of object can be added.`]
	],
	/* fields */,
	[/* constructors */
		[/* constructor */ '<init>()', [
			/* constructor description */,
			/* parameters */,
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.Class)', [
			/* constructor description */,
			/* parameters */,
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.Class,java.util.List)', [
			/* constructor description */,
			/* parameters */,
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'checkCollectionType(java.util.Collection)', [
			[/* method description */
				[/* text */ 't', `Checks that each member of the given collection are of the correct
 type`]
			],
			/* parameters */,
			/* throws */,
			/* return */ UDF
		]],
		[/* method */ 'checkType(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Checks that the given object instance is of the correct type
 otherwise a runtime exception is thrown`]
			],
			/* parameters */,
			/* throws */,
			/* return */ UDF
		]],
		[/* method */ 'removeRange(int,int)', [
			/* method description */,
			/* parameters */,
			/* throws */,
			/* return */ UDF
		]],
		[/* method */ 'add(java.lang.Object)', [
			/* method description */,
			/* parameters */,
			/* throws */,
			/* return */ UDF
		]],
		[/* method */ 'addAll(int,java.util.Collection)', [
			/* method description */,
			/* parameters */,
			/* throws */,
			/* return */ UDF
		]],
		[/* method */ 'addAll(java.util.Collection)', [
			/* method description */,
			/* parameters */,
			/* throws */,
			/* return */ UDF
		]],
		[/* method */ 'equals(groovy.lang.Sequence)', [
			/* method description */,
			/* parameters */,
			/* throws */,
			/* return */ UDF
		]],
		[/* method */ 'equals(java.lang.Object)', [
			/* method description */,
			/* parameters */,
			/* throws */,
			/* return */ UDF
		]],
		[/* method */ 'hashCode()', [
			/* method description */,
			/* parameters */,
			/* throws */,
			/* return */ UDF
		]],
		[/* method */ 'minimumSize()', [
			/* method description */,
			/* parameters */,
			/* throws */,
			/* return */ UDF
		]],
		[/* method */ 'type()', [
			/* method description */,
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the type of the elements in the sequence or null if there is no
 type constraint on this sequence`]
			]
		]],
		[/* method */ 'remove(int)', [
			/* method description */,
			/* parameters */,
			/* throws */,
			/* return */ UDF
		]],
		[/* method */ 'set(int,java.lang.Object)', [
			/* method description */,
			/* parameters */,
			/* throws */,
			/* return */ UDF
		]],
		[/* method */ 'add(int,java.lang.Object)', [
			/* method description */,
			/* parameters */,
			/* throws */,
			/* return */ UDF
		]],
		[/* method */ 'clear()', [
			/* method description */,
			/* parameters */,
			/* throws */,
			/* return */ UDF
		]],
		[/* method */ 'set(java.util.Collection)', [
			[/* method description */
				[/* text */ 't', `Sets the contents of this sequence to that
 of the given collection.`]
			],
			/* parameters */,
			/* throws */,
			/* return */ UDF
		]]
	],
	/* enum values */ UDF
]);
