import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.lang.reflect.Array', [
	[/* class description */
		[/* text */ 't', `The `],
		[/* inline code block */ 'i', `Array`],
		[/* text */ 't', ` class provides static methods to dynamically create and
 access Java arrays.

 `],
		[/* block */ 'b', [
			[/* inline code block */ 'i', `Array`],
			[/* text */ 't', ` permits widening conversions to occur during a get or set
 operation, but throws an `],
			[/* inline code block */ 'i', `IllegalArgumentException`],
			[/* text */ 't', ` if a narrowing
 conversion would occur.`]
		]]
	],
	/* fields */,
	/* constructors */,
	[/* methods */
		[/* method */ 'newInstance(java.lang.Class,int)', [
			[/* method description */
				[/* text */ 't', `Creates a new array with the specified component type and
 length.
 Invoking this method is equivalent to creating an array
 as follows:
 `],
				[/* blockquote */ 'q', [
					[/* text */ 't', `
 `],
					[/* code block */ 'c', ` int[] x = {length};
 Array.newInstance(componentType, x);
 `],
					[/* text */ 't', `
 `]
				]],
				[/* text */ 't', `

 `],
				[/* block */ 'b', `The number of dimensions of the new array must not
 exceed 255.`]
			],
			[/* parameters */
				[/* parameter */ 'componentType', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `Class`],
					[/* text */ 't', ` object representing the
         component type of the new array`]
				]],
				[/* parameter */ 'length', [/* parameter description */
					[/* text */ 't', `the length of the new array`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified
         `],
					[/* inline code block */ 'i', `componentType`],
					[/* text */ 't', ` parameter is null`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if componentType is `],
					[/* reference */ 'r', `java.lang.Void#TYPE`, `Void.TYPE`],
					[/* text */ 't', ` or if the number of dimensions of the requested array
         instance exceed 255.`]
				]],
				[/* throw */ 'java.lang.NegativeArraySizeException', [/* throw description */
					[/* text */ 't', `if the specified `],
					[/* inline code block */ 'i', `length`],
					[/* text */ 't', `
         is negative`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the new array`]
			]
		]],
		[/* method */ 'newInstance(java.lang.Class,int...)', [
			[/* method description */
				[/* text */ 't', `Creates a new array
 with the specified component type and dimensions.
 If `],
				[/* inline code block */ 'i', `componentType`],
				[/* text */ 't', `
 represents a non-array class or interface, the new array
 has `],
				[/* inline code block */ 'i', `dimensions.length`],
				[/* text */ 't', ` dimensions and
 `],
				[/* inline code block */ 'i', `componentType`],
				[/* text */ 't', ` as its component type. If
 `],
				[/* inline code block */ 'i', `componentType`],
				[/* text */ 't', ` represents an array class, the
 number of dimensions of the new array is equal to the sum
 of `],
				[/* inline code block */ 'i', `dimensions.length`],
				[/* text */ 't', ` and the number of
 dimensions of `],
				[/* inline code block */ 'i', `componentType`],
				[/* text */ 't', `. In this case, the
 component type of the new array is the component type of
 `],
				[/* inline code block */ 'i', `componentType`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', `The number of dimensions of the new array must not
 exceed 255.`]
			],
			[/* parameters */
				[/* parameter */ 'componentType', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `Class`],
					[/* text */ 't', ` object representing the component
 type of the new array`]
				]],
				[/* parameter */ 'dimensions', [/* parameter description */
					[/* text */ 't', `an array of `],
					[/* inline code block */ 'i', `int`],
					[/* text */ 't', ` representing the dimensions of
 the new array`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified
 `],
					[/* inline code block */ 'i', `componentType`],
					[/* text */ 't', ` argument is null`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the specified `],
					[/* inline code block */ 'i', `dimensions`],
					[/* text */ 't', `
 argument is a zero-dimensional array, if componentType is `],
					[/* reference */ 'r', `java.lang.Void#TYPE`, `Void.TYPE`],
					[/* text */ 't', `, or if the number of dimensions of the requested array
 instance exceed 255.`]
				]],
				[/* throw */ 'java.lang.NegativeArraySizeException', [/* throw description */
					[/* text */ 't', `if any of the components in
 the specified `],
					[/* inline code block */ 'i', `dimensions`],
					[/* text */ 't', ` argument is negative.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the new array`]
			]
		]],
		[/* method */ 'getBoolean(java.lang.Object,int)', [
			[/* method description */
				[/* text */ 't', `Returns the value of the indexed component in the specified
 array object, as a `],
				[/* inline code block */ 'i', `boolean`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'array', [/* parameter description */
					[/* text */ 't', `the array`]
				]],
				[/* parameter */ 'index', [/* parameter description */
					[/* text */ 't', `the index`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `If the specified object is null`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If the specified object is not
 an array, or if the indexed element cannot be converted to the
 return type by an identity or widening conversion`]
				]],
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `If the specified `],
					[/* inline code block */ 'i', `index`],
					[/* text */ 't', `
 argument is negative, or if it is greater than or equal to the
 length of the specified array`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the value of the indexed component in the specified array`]
			]
		]],
		[/* method */ 'getByte(java.lang.Object,int)', [
			[/* method description */
				[/* text */ 't', `Returns the value of the indexed component in the specified
 array object, as a `],
				[/* inline code block */ 'i', `byte`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'array', [/* parameter description */
					[/* text */ 't', `the array`]
				]],
				[/* parameter */ 'index', [/* parameter description */
					[/* text */ 't', `the index`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `If the specified object is null`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If the specified object is not
 an array, or if the indexed element cannot be converted to the
 return type by an identity or widening conversion`]
				]],
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `If the specified `],
					[/* inline code block */ 'i', `index`],
					[/* text */ 't', `
 argument is negative, or if it is greater than or equal to the
 length of the specified array`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the value of the indexed component in the specified array`]
			]
		]],
		[/* method */ 'getChar(java.lang.Object,int)', [
			[/* method description */
				[/* text */ 't', `Returns the value of the indexed component in the specified
 array object, as a `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'array', [/* parameter description */
					[/* text */ 't', `the array`]
				]],
				[/* parameter */ 'index', [/* parameter description */
					[/* text */ 't', `the index`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `If the specified object is null`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If the specified object is not
 an array, or if the indexed element cannot be converted to the
 return type by an identity or widening conversion`]
				]],
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `If the specified `],
					[/* inline code block */ 'i', `index`],
					[/* text */ 't', `
 argument is negative, or if it is greater than or equal to the
 length of the specified array`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the value of the indexed component in the specified array`]
			]
		]],
		[/* method */ 'getDouble(java.lang.Object,int)', [
			[/* method description */
				[/* text */ 't', `Returns the value of the indexed component in the specified
 array object, as a `],
				[/* inline code block */ 'i', `double`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'array', [/* parameter description */
					[/* text */ 't', `the array`]
				]],
				[/* parameter */ 'index', [/* parameter description */
					[/* text */ 't', `the index`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `If the specified object is null`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If the specified object is not
 an array, or if the indexed element cannot be converted to the
 return type by an identity or widening conversion`]
				]],
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `If the specified `],
					[/* inline code block */ 'i', `index`],
					[/* text */ 't', `
 argument is negative, or if it is greater than or equal to the
 length of the specified array`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the value of the indexed component in the specified array`]
			]
		]],
		[/* method */ 'getFloat(java.lang.Object,int)', [
			[/* method description */
				[/* text */ 't', `Returns the value of the indexed component in the specified
 array object, as a `],
				[/* inline code block */ 'i', `float`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'array', [/* parameter description */
					[/* text */ 't', `the array`]
				]],
				[/* parameter */ 'index', [/* parameter description */
					[/* text */ 't', `the index`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `If the specified object is null`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If the specified object is not
 an array, or if the indexed element cannot be converted to the
 return type by an identity or widening conversion`]
				]],
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `If the specified `],
					[/* inline code block */ 'i', `index`],
					[/* text */ 't', `
 argument is negative, or if it is greater than or equal to the
 length of the specified array`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the value of the indexed component in the specified array`]
			]
		]],
		[/* method */ 'getInt(java.lang.Object,int)', [
			[/* method description */
				[/* text */ 't', `Returns the value of the indexed component in the specified
 array object, as an `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'array', [/* parameter description */
					[/* text */ 't', `the array`]
				]],
				[/* parameter */ 'index', [/* parameter description */
					[/* text */ 't', `the index`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `If the specified object is null`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If the specified object is not
 an array, or if the indexed element cannot be converted to the
 return type by an identity or widening conversion`]
				]],
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `If the specified `],
					[/* inline code block */ 'i', `index`],
					[/* text */ 't', `
 argument is negative, or if it is greater than or equal to the
 length of the specified array`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the value of the indexed component in the specified array`]
			]
		]],
		[/* method */ 'getLength(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Returns the length of the specified array object, as an `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'array', [/* parameter description */
					[/* text */ 't', `the array`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the object argument is not
 an array`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the length of the array`]
			]
		]],
		[/* method */ 'get(java.lang.Object,int)', [
			[/* method description */
				[/* text */ 't', `Returns the value of the indexed component in the specified
 array object.  The value is automatically wrapped in an object
 if it has a primitive type.`]
			],
			[/* parameters */
				[/* parameter */ 'array', [/* parameter description */
					[/* text */ 't', `the array`]
				]],
				[/* parameter */ 'index', [/* parameter description */
					[/* text */ 't', `the index`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `If the specified object is null`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If the specified object is not
 an array`]
				]],
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `If the specified `],
					[/* inline code block */ 'i', `index`],
					[/* text */ 't', `
 argument is negative, or if it is greater than or equal to the
 length of the specified array`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the (possibly wrapped) value of the indexed component in
 the specified array`]
			]
		]],
		[/* method */ 'getLong(java.lang.Object,int)', [
			[/* method description */
				[/* text */ 't', `Returns the value of the indexed component in the specified
 array object, as a `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'array', [/* parameter description */
					[/* text */ 't', `the array`]
				]],
				[/* parameter */ 'index', [/* parameter description */
					[/* text */ 't', `the index`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `If the specified object is null`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If the specified object is not
 an array, or if the indexed element cannot be converted to the
 return type by an identity or widening conversion`]
				]],
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `If the specified `],
					[/* inline code block */ 'i', `index`],
					[/* text */ 't', `
 argument is negative, or if it is greater than or equal to the
 length of the specified array`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the value of the indexed component in the specified array`]
			]
		]],
		[/* method */ 'getShort(java.lang.Object,int)', [
			[/* method description */
				[/* text */ 't', `Returns the value of the indexed component in the specified
 array object, as a `],
				[/* inline code block */ 'i', `short`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'array', [/* parameter description */
					[/* text */ 't', `the array`]
				]],
				[/* parameter */ 'index', [/* parameter description */
					[/* text */ 't', `the index`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `If the specified object is null`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If the specified object is not
 an array, or if the indexed element cannot be converted to the
 return type by an identity or widening conversion`]
				]],
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `If the specified `],
					[/* inline code block */ 'i', `index`],
					[/* text */ 't', `
 argument is negative, or if it is greater than or equal to the
 length of the specified array`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the value of the indexed component in the specified array`]
			]
		]],
		[/* method */ 'set(java.lang.Object,int,java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Sets the value of the indexed component of the specified array
 object to the specified new value.  The new value is first
 automatically unwrapped if the array has a primitive component
 type.`]
			],
			[/* parameters */
				[/* parameter */ 'array', [/* parameter description */
					[/* text */ 't', `the array`]
				]],
				[/* parameter */ 'index', [/* parameter description */
					[/* text */ 't', `the index into the array`]
				]],
				[/* parameter */ 'value', [/* parameter description */
					[/* text */ 't', `the new value of the indexed component`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `If the specified object argument
 is null`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If the specified object argument
 is not an array, or if the array component type is primitive and
 an unwrapping conversion fails`]
				]],
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `If the specified `],
					[/* inline code block */ 'i', `index`],
					[/* text */ 't', `
 argument is negative, or if it is greater than or equal to
 the length of the specified array`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'setBoolean(java.lang.Object,int,boolean)', [
			[/* method description */
				[/* text */ 't', `Sets the value of the indexed component of the specified array
 object to the specified `],
				[/* inline code block */ 'i', `boolean`],
				[/* text */ 't', ` value.`]
			],
			[/* parameters */
				[/* parameter */ 'array', [/* parameter description */
					[/* text */ 't', `the array`]
				]],
				[/* parameter */ 'index', [/* parameter description */
					[/* text */ 't', `the index into the array`]
				]],
				[/* parameter */ 'z', [/* parameter description */
					[/* text */ 't', `the new value of the indexed component`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `If the specified object argument
 is null`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If the specified object argument
 is not an array, or if the specified value cannot be converted
 to the underlying array's component type by an identity or a
 primitive widening conversion`]
				]],
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `If the specified `],
					[/* inline code block */ 'i', `index`],
					[/* text */ 't', `
 argument is negative, or if it is greater than or equal to
 the length of the specified array`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'setByte(java.lang.Object,int,byte)', [
			[/* method description */
				[/* text */ 't', `Sets the value of the indexed component of the specified array
 object to the specified `],
				[/* inline code block */ 'i', `byte`],
				[/* text */ 't', ` value.`]
			],
			[/* parameters */
				[/* parameter */ 'array', [/* parameter description */
					[/* text */ 't', `the array`]
				]],
				[/* parameter */ 'index', [/* parameter description */
					[/* text */ 't', `the index into the array`]
				]],
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the new value of the indexed component`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `If the specified object argument
 is null`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If the specified object argument
 is not an array, or if the specified value cannot be converted
 to the underlying array's component type by an identity or a
 primitive widening conversion`]
				]],
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `If the specified `],
					[/* inline code block */ 'i', `index`],
					[/* text */ 't', `
 argument is negative, or if it is greater than or equal to
 the length of the specified array`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'setChar(java.lang.Object,int,char)', [
			[/* method description */
				[/* text */ 't', `Sets the value of the indexed component of the specified array
 object to the specified `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', ` value.`]
			],
			[/* parameters */
				[/* parameter */ 'array', [/* parameter description */
					[/* text */ 't', `the array`]
				]],
				[/* parameter */ 'index', [/* parameter description */
					[/* text */ 't', `the index into the array`]
				]],
				[/* parameter */ 'c', [/* parameter description */
					[/* text */ 't', `the new value of the indexed component`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `If the specified object argument
 is null`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If the specified object argument
 is not an array, or if the specified value cannot be converted
 to the underlying array's component type by an identity or a
 primitive widening conversion`]
				]],
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `If the specified `],
					[/* inline code block */ 'i', `index`],
					[/* text */ 't', `
 argument is negative, or if it is greater than or equal to
 the length of the specified array`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'setDouble(java.lang.Object,int,double)', [
			[/* method description */
				[/* text */ 't', `Sets the value of the indexed component of the specified array
 object to the specified `],
				[/* inline code block */ 'i', `double`],
				[/* text */ 't', ` value.`]
			],
			[/* parameters */
				[/* parameter */ 'array', [/* parameter description */
					[/* text */ 't', `the array`]
				]],
				[/* parameter */ 'index', [/* parameter description */
					[/* text */ 't', `the index into the array`]
				]],
				[/* parameter */ 'd', [/* parameter description */
					[/* text */ 't', `the new value of the indexed component`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `If the specified object argument
 is null`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If the specified object argument
 is not an array, or if the specified value cannot be converted
 to the underlying array's component type by an identity or a
 primitive widening conversion`]
				]],
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `If the specified `],
					[/* inline code block */ 'i', `index`],
					[/* text */ 't', `
 argument is negative, or if it is greater than or equal to
 the length of the specified array`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'setFloat(java.lang.Object,int,float)', [
			[/* method description */
				[/* text */ 't', `Sets the value of the indexed component of the specified array
 object to the specified `],
				[/* inline code block */ 'i', `float`],
				[/* text */ 't', ` value.`]
			],
			[/* parameters */
				[/* parameter */ 'array', [/* parameter description */
					[/* text */ 't', `the array`]
				]],
				[/* parameter */ 'index', [/* parameter description */
					[/* text */ 't', `the index into the array`]
				]],
				[/* parameter */ 'f', [/* parameter description */
					[/* text */ 't', `the new value of the indexed component`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `If the specified object argument
 is null`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If the specified object argument
 is not an array, or if the specified value cannot be converted
 to the underlying array's component type by an identity or a
 primitive widening conversion`]
				]],
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `If the specified `],
					[/* inline code block */ 'i', `index`],
					[/* text */ 't', `
 argument is negative, or if it is greater than or equal to
 the length of the specified array`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'setInt(java.lang.Object,int,int)', [
			[/* method description */
				[/* text */ 't', `Sets the value of the indexed component of the specified array
 object to the specified `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` value.`]
			],
			[/* parameters */
				[/* parameter */ 'array', [/* parameter description */
					[/* text */ 't', `the array`]
				]],
				[/* parameter */ 'index', [/* parameter description */
					[/* text */ 't', `the index into the array`]
				]],
				[/* parameter */ 'i', [/* parameter description */
					[/* text */ 't', `the new value of the indexed component`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `If the specified object argument
 is null`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If the specified object argument
 is not an array, or if the specified value cannot be converted
 to the underlying array's component type by an identity or a
 primitive widening conversion`]
				]],
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `If the specified `],
					[/* inline code block */ 'i', `index`],
					[/* text */ 't', `
 argument is negative, or if it is greater than or equal to
 the length of the specified array`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'setLong(java.lang.Object,int,long)', [
			[/* method description */
				[/* text */ 't', `Sets the value of the indexed component of the specified array
 object to the specified `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` value.`]
			],
			[/* parameters */
				[/* parameter */ 'array', [/* parameter description */
					[/* text */ 't', `the array`]
				]],
				[/* parameter */ 'index', [/* parameter description */
					[/* text */ 't', `the index into the array`]
				]],
				[/* parameter */ 'l', [/* parameter description */
					[/* text */ 't', `the new value of the indexed component`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `If the specified object argument
 is null`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If the specified object argument
 is not an array, or if the specified value cannot be converted
 to the underlying array's component type by an identity or a
 primitive widening conversion`]
				]],
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `If the specified `],
					[/* inline code block */ 'i', `index`],
					[/* text */ 't', `
 argument is negative, or if it is greater than or equal to
 the length of the specified array`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'setShort(java.lang.Object,int,short)', [
			[/* method description */
				[/* text */ 't', `Sets the value of the indexed component of the specified array
 object to the specified `],
				[/* inline code block */ 'i', `short`],
				[/* text */ 't', ` value.`]
			],
			[/* parameters */
				[/* parameter */ 'array', [/* parameter description */
					[/* text */ 't', `the array`]
				]],
				[/* parameter */ 'index', [/* parameter description */
					[/* text */ 't', `the index into the array`]
				]],
				[/* parameter */ 's', [/* parameter description */
					[/* text */ 't', `the new value of the indexed component`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `If the specified object argument
 is null`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If the specified object argument
 is not an array, or if the specified value cannot be converted
 to the underlying array's component type by an identity or a
 primitive widening conversion`]
				]],
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `If the specified `],
					[/* inline code block */ 'i', `index`],
					[/* text */ 't', `
 argument is negative, or if it is greater than or equal to
 the length of the specified array`]
				]]
			],
			/* return */ UDF
		]]
	],
	/* enum values */ UDF
]);
