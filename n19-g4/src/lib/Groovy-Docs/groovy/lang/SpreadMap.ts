import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('groovy.lang.SpreadMap', [
	[/* class description */
		[/* text */ 't', `Helper to turn a list with an even number of elements into a Map.`]
	],
	/* fields */,
	[/* constructors */
		[/* constructor */ '<init>(java.lang.Object[])', [
			/* constructor description */,
			/* parameters */,
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.util.List)', [
			/* constructor description */,
			[/* parameters */
				[/* parameter */ 'list', [/* parameter description */
					[/* text */ 't', `the list to make spreadable`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.util.Map)', [
			/* constructor description */,
			/* parameters */,
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'equals(groovy.lang.SpreadMap)', [
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
		[/* method */ 'put(java.lang.Object,java.lang.Object)', [
			/* method description */,
			/* parameters */,
			/* throws */,
			/* return */ UDF
		]],
		[/* method */ 'remove(java.lang.Object)', [
			/* method description */,
			/* parameters */,
			/* throws */,
			/* return */ UDF
		]],
		[/* method */ 'toString()', [
			/* method description */,
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the string expression of `],
				[/* inline code block */ 'i', `this`]
			]
		]],
		[/* method */ 'putAll(java.util.Map)', [
			/* method description */,
			/* parameters */,
			/* throws */,
			/* return */ UDF
		]]
	],
	/* enum values */ UDF
]);
