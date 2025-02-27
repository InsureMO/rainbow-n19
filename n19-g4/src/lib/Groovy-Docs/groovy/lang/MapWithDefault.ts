import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('groovy.lang.MapWithDefault', [
	[/* class description */
		[/* text */ 't', `A wrapper for Map which allows a default value to be specified using a closure.
 Normally not instantiated directly but used via the DGM `],
		[/* inline code block */ 'i', `withDefault`],
		[/* text */ 't', ` method.`]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'remove(java.lang.Object)', [
			/* method description */ UDF,
			/* parameters */ UDF,
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'get(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Returns the value to which the specified key is mapped,
 or the default value as specified by the initializing closure
 if this map contains no mapping for the key.

 If `],
				[/* inline code block */ 'i', `autoGrow`],
				[/* text */ 't', ` is true and the initializing closure is called,
 the map is modified to contain the new key and value so that the calculated
 value is effectively cached if needed again.
 Otherwise, the map will be unchanged.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'put(java.lang.Object,java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Associates the specified value with the specified key in this map.

 If `],
				[/* inline code block */ 'i', `autoShrink`],
				[/* text */ 't', ` is true, the initializing closure is called
 and if it evaluates to the value being stored, the value will not be stored
 and indeed any existing value will be removed. This can be useful when trying
 to keep the memory requirements small for large key sets where only a spare
 number of entries differ from the default.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the previous value associated with `],
				[/* inline code block */ 'i', `key`],
				[/* text */ 't', ` if any, otherwise `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'equals(java.lang.Object)', [
			/* method description */ UDF,
			/* parameters */ UDF,
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'values()', [
			/* method description */ UDF,
			/* parameters */ UDF,
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'hashCode()', [
			/* method description */ UDF,
			/* parameters */ UDF,
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'clear()', [
			/* method description */ UDF,
			/* parameters */ UDF,
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'isEmpty()', [
			/* method description */ UDF,
			/* parameters */ UDF,
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'size()', [
			/* method description */ UDF,
			/* parameters */ UDF,
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'newInstance(java.util.Map,groovy.lang.Closure)', [
			[/* method description */
				[/* text */ 't', `Decorates the given Map allowing a default value to be specified.`]
			],
			[/* parameters */
				[/* parameter */ 'm', [/* parameter description */
					[/* text */ 't', `a Map to wrap`]
				]],
				[/* parameter */ 'initClosure', [/* parameter description */
					[/* text */ 't', `the closure which when passed the `],
					[/* inline code block */ 'i', `key`],
					[/* text */ 't', ` returns the default value`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the wrapped Map`]
			]
		]],
		[/* method */ 'newInstance(java.util.Map,boolean,boolean,groovy.lang.Closure)', [
			[/* method description */
				[/* text */ 't', `Decorates the given Map allowing a default value to be specified.
 Allows the behavior to be configured using `],
				[/* inline code block */ 'i', `autoGrow`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `autoShrink`],
				[/* text */ 't', ` parameters.
 The value of `],
				[/* inline code block */ 'i', `autoShrink`],
				[/* text */ 't', ` doesn't alter any values in the initial wrapped map, but you
 can start with an empty map and use `],
				[/* inline code block */ 'i', `putAll`],
				[/* text */ 't', ` if you really need the minimal backing map value.`]
			],
			[/* parameters */
				[/* parameter */ 'm', [/* parameter description */
					[/* text */ 't', `a Map to wrap`]
				]],
				[/* parameter */ 'autoGrow', [/* parameter description */
					[/* text */ 't', `when true, also mutate the map adding in this value; otherwise, don't mutate the map, just return to calculated value`]
				]],
				[/* parameter */ 'autoShrink', [/* parameter description */
					[/* text */ 't', `when true, ensure the key will be removed if attempting to store the default value using put or putAll`]
				]],
				[/* parameter */ 'initClosure', [/* parameter description */
					[/* text */ 't', `the closure which when passed the `],
					[/* inline code block */ 'i', `key`],
					[/* text */ 't', ` returns the default value`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the wrapped Map`]
			]
		]],
		[/* method */ 'entrySet()', [
			/* method description */ UDF,
			/* parameters */ UDF,
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'putAll(java.util.Map)', [
			/* method description */ UDF,
			/* parameters */ UDF,
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'containsKey(java.lang.Object)', [
			/* method description */ UDF,
			/* parameters */ UDF,
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'keySet()', [
			/* method description */ UDF,
			/* parameters */ UDF,
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'containsValue(java.lang.Object)', [
			/* method description */ UDF,
			/* parameters */ UDF,
			/* throws */ UDF,
			/* return */ UDF
		]]
	],
]);
