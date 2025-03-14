import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.lang.invoke.MethodHandles', [
	[/* class description */
		[/* text */ 't', `This class consists exclusively of static methods that operate on or return
 method handles. They fall into several categories:
 `],
		[/* list */ 'l', [
			[/* block */ 'b', `Lookup methods which help create method handles for methods and fields.
 `],
			[/* block */ 'b', `Combinator methods, which combine or transform pre-existing method handles into new ones.
 `],
			[/* block */ 'b', `Other factory methods to create method handles that emulate other common JVM operations or control flow patterns.
 `]
		]],
		[/* text */ 't', `
 A lookup, combinator, or factory method will fail and throw an
 `],
		[/* inline code block */ 'i', `IllegalArgumentException`],
		[/* text */ 't', ` if the created method handle's type
 would have `],
		[/* reference */ 'r', `java.lang.invoke.MethodHandle#maxarity`, `too many parameters`],
		[/* text */ 't', `.`]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'reflectAs(java.lang.Class,java.lang.invoke.MethodHandle)', [
			[/* method description */
				[/* text */ 't', `Performs an unchecked "crack" of a
 `],
				[/* reference */ 'r', `java.lang.invoke.MethodHandleInfo#directmh`, `direct method handle`],
				[/* text */ 't', `.
 The result is as if the user had obtained a lookup object capable enough
 to crack the target method handle, called
 `],
				[/* reference */ 'r', `java.lang.invoke.MethodHandles.Lookup#revealDirect(java.lang.invoke.MethodHandle)`, `Lookup.revealDirect`],
				[/* text */ 't', `
 on the target to obtain its symbolic reference, and then called
 `],
				[/* reference */ 'r', `java.lang.invoke.MethodHandleInfo#reflectAs(java.lang.Class,java.lang.invoke.MethodHandles.Lookup)`, `MethodHandleInfo.reflectAs`],
				[/* text */ 't', `
 to resolve the symbolic reference to a member.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 If there is a security manager, its `],
					[/* inline code block */ 'i', `checkPermission`],
					[/* text */ 't', ` method
 is called with a `],
					[/* inline code block */ 'i', `ReflectPermission("suppressAccessChecks")`],
					[/* text */ 't', ` permission.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'target', [/* parameter description */
					[/* text */ 't', `a direct method handle to crack into symbolic reference components`]
				]],
				[/* parameter */ 'expected', [/* parameter description */
					[/* text */ 't', `a class object representing the desired result type `],
					[/* inline code block */ 'i', `T`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if the caller is not privileged to call `],
					[/* inline code block */ 'i', `setAccessible`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if either argument is `],
					[/* inline code block */ 'i', `null`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the target is not a direct method handle`]
				]],
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the member is not of the expected type`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a reference to the method, constructor, or field object`]
			]
		]],
		[/* method */ 'classData(java.lang.invoke.MethodHandles.Lookup,java.lang.String,java.lang.Class)', [
			[/* method description */
				[/* text */ 't', `Returns the `],
				[/* text */ 't', `class data`],
				[/* text */ 't', ` associated with the lookup class
 of the given `],
				[/* inline code block */ 'i', `caller`],
				[/* text */ 't', ` lookup object, or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` A hidden class with class data can be created by calling
 `],
					[/* reference */ 'r', `java.lang.invoke.MethodHandles.Lookup#defineHiddenClassWithClassData(byte[],java.lang.Object,boolean,java.lang.invoke.MethodHandles.Lookup.ClassOption...)`, `Lookup::defineHiddenClassWithClassData`],
					[/* text */ 't', `.
 This method will cause the static class initializer of the lookup
 class of the given `],
					[/* inline code block */ 'i', `caller`],
					[/* text */ 't', ` lookup object be executed if
 it has not been initialized.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` A hidden class created by `],
					[/* reference */ 'r', `java.lang.invoke.MethodHandles.Lookup#defineHiddenClass(byte[],boolean,java.lang.invoke.MethodHandles.Lookup.ClassOption...)`, `Lookup::defineHiddenClass`],
					[/* text */ 't', ` and non-hidden classes have no class data.
 `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` is returned if this method is called on the lookup object
 on these classes.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` The `],
					[/* reference */ 'r', `java.lang.invoke.MethodHandles.Lookup#lookupModes()`, `lookup modes`],
					[/* text */ 't', ` for this lookup
 must have `],
					[/* reference */ 'r', `java.lang.invoke.MethodHandles.Lookup#ORIGINAL`, `original access`],
					[/* text */ 't', `
 in order to retrieve the class data.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'caller', [/* parameter description */
					[/* text */ 't', `the lookup context describing the class performing the
 operation (normally stacked by the JVM)`]
				]],
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `must be `],
					[/* reference */ 'r', `java.lang.constant.ConstantDescs#DEFAULT_NAME`, `ConstantDescs.DEFAULT_NAME`],
					[/* text */ 't', `
             (`],
					[/* inline code block */ 'i', `"_"`],
					[/* text */ 't', `)`]
				]],
				[/* parameter */ 'type', [/* parameter description */
					[/* text */ 't', `the type of the class data`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if name is not `],
					[/* inline code block */ 'i', `"_"`]
				]],
				[/* throw */ 'java.lang.IllegalAccessException', [/* throw description */
					[/* text */ 't', `if the lookup context does not have
 `],
					[/* reference */ 'r', `java.lang.invoke.MethodHandles.Lookup#ORIGINAL`, `original`],
					[/* text */ 't', ` access`]
				]],
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the class data cannot be converted to
 the given `],
					[/* inline code block */ 'i', `type`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `caller`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `type`],
					[/* text */ 't', ` argument
 is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the value of the class data if present in the lookup class;
 otherwise `],
				[/* inline code block */ 'i', `null`]
			]
		]],
		[/* method */ 'classDataAt(java.lang.invoke.MethodHandles.Lookup,java.lang.String,java.lang.Class,int)', [
			[/* method description */
				[/* text */ 't', `Returns the element at the specified index in the
 `],
				[/* reference */ 'r', `#classData(java.lang.invoke.MethodHandles.Lookup,java.lang.String,java.lang.Class)`, `class data`],
				[/* text */ 't', `,
 if the class data associated with the lookup class
 of the given `],
				[/* inline code block */ 'i', `caller`],
				[/* text */ 't', ` lookup object is a `],
				[/* inline code block */ 'i', `List`],
				[/* text */ 't', `.
 If the class data is not present in this lookup class, this method
 returns `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` A hidden class with class data can be created by calling
 `],
					[/* reference */ 'r', `java.lang.invoke.MethodHandles.Lookup#defineHiddenClassWithClassData(byte[],java.lang.Object,boolean,java.lang.invoke.MethodHandles.Lookup.ClassOption...)`, `Lookup::defineHiddenClassWithClassData`],
					[/* text */ 't', `.
 This method will cause the static class initializer of the lookup
 class of the given `],
					[/* inline code block */ 'i', `caller`],
					[/* text */ 't', ` lookup object be executed if
 it has not been initialized.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` A hidden class created by `],
					[/* reference */ 'r', `java.lang.invoke.MethodHandles.Lookup#defineHiddenClass(byte[],boolean,java.lang.invoke.MethodHandles.Lookup.ClassOption...)`, `Lookup::defineHiddenClass`],
					[/* text */ 't', ` and non-hidden classes have no class data.
 `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` is returned if this method is called on the lookup object
 on these classes.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` The `],
					[/* reference */ 'r', `java.lang.invoke.MethodHandles.Lookup#lookupModes()`, `lookup modes`],
					[/* text */ 't', ` for this lookup
 must have `],
					[/* reference */ 'r', `java.lang.invoke.MethodHandles.Lookup#ORIGINAL`, `original access`],
					[/* text */ 't', `
 in order to retrieve the class data.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'caller', [/* parameter description */
					[/* text */ 't', `the lookup context describing the class performing the
 operation (normally stacked by the JVM)`]
				]],
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `must be `],
					[/* reference */ 'r', `java.lang.constant.ConstantDescs#DEFAULT_NAME`, `ConstantDescs.DEFAULT_NAME`],
					[/* text */ 't', `
             (`],
					[/* inline code block */ 'i', `"_"`],
					[/* text */ 't', `)`]
				]],
				[/* parameter */ 'type', [/* parameter description */
					[/* text */ 't', `the type of the element at the given index in the class data`]
				]],
				[/* parameter */ 'index', [/* parameter description */
					[/* text */ 't', `index of the element in the class data`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if name is not `],
					[/* inline code block */ 'i', `"_"`]
				]],
				[/* throw */ 'java.lang.IllegalAccessException', [/* throw description */
					[/* text */ 't', `if the lookup context does not have
 `],
					[/* reference */ 'r', `java.lang.invoke.MethodHandles.Lookup#ORIGINAL`, `original`],
					[/* text */ 't', ` access`]
				]],
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the class data cannot be converted to `],
					[/* inline code block */ 'i', `List`],
					[/* text */ 't', `
 or the element at the specified index cannot be converted to the given type`]
				]],
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if the index is out of range`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `caller`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `type`],
					[/* text */ 't', ` argument is
 `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `; or if unboxing operation fails because
 the element at the given index is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the element at the given index in the class data
 if the class data is present; otherwise `],
				[/* inline code block */ 'i', `null`]
			]
		]],
		[/* method */ 'arrayConstructor(java.lang.Class)', [
			[/* method description */
				[/* text */ 't', `Produces a method handle constructing arrays of a desired type,
 as if by the `],
				[/* inline code block */ 'i', `anewarray`],
				[/* text */ 't', ` bytecode.
 The return type of the method handle will be the array type.
 The type of its sole argument will be `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', `, which specifies the size of the array.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` If the returned method handle is invoked with a negative
 array size, a `],
					[/* inline code block */ 'i', `NegativeArraySizeException`],
					[/* text */ 't', ` will be thrown.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'arrayClass', [/* parameter description */
					[/* text */ 't', `an array type`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the argument is `],
					[/* inline code block */ 'i', `null`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `arrayClass`],
					[/* text */ 't', ` is not an array type`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a method handle which can create arrays of the given type`]
			]
		]],
		[/* method */ 'arrayElementGetter(java.lang.Class)', [
			[/* method description */
				[/* text */ 't', `Produces a method handle giving read access to elements of an array,
 as if by the `],
				[/* inline code block */ 'i', `aaload`],
				[/* text */ 't', ` bytecode.
 The type of the method handle will have a return type of the array's
 element type.  Its first argument will be the array type,
 and the second will be `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` When the returned method handle is invoked,
 the array reference and array index are checked.
 A `],
					[/* inline code block */ 'i', `NullPointerException`],
					[/* text */ 't', ` will be thrown if the array reference
 is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` and an `],
					[/* inline code block */ 'i', `ArrayIndexOutOfBoundsException`],
					[/* text */ 't', ` will be
 thrown if the index is negative or if it is greater than or equal to
 the length of the array.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'arrayClass', [/* parameter description */
					[/* text */ 't', `an array type`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the argument is null`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if arrayClass is not an array type`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a method handle which can load values from the given array type`]
			]
		]],
		[/* method */ 'arrayElementSetter(java.lang.Class)', [
			[/* method description */
				[/* text */ 't', `Produces a method handle giving write access to elements of an array,
 as if by the `],
				[/* inline code block */ 'i', `astore`],
				[/* text */ 't', ` bytecode.
 The type of the method handle will have a void return type.
 Its last argument will be the array's element type.
 The first and second arguments will be the array type and int.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` When the returned method handle is invoked,
 the array reference and array index are checked.
 A `],
					[/* inline code block */ 'i', `NullPointerException`],
					[/* text */ 't', ` will be thrown if the array reference
 is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` and an `],
					[/* inline code block */ 'i', `ArrayIndexOutOfBoundsException`],
					[/* text */ 't', ` will be
 thrown if the index is negative or if it is greater than or equal to
 the length of the array.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'arrayClass', [/* parameter description */
					[/* text */ 't', `the class of an array`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the argument is null`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if arrayClass is not an array type`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a method handle which can store values into the array type`]
			]
		]],
		[/* method */ 'arrayLength(java.lang.Class)', [
			[/* method description */
				[/* text */ 't', `Produces a method handle returning the length of an array,
 as if by the `],
				[/* inline code block */ 'i', `arraylength`],
				[/* text */ 't', ` bytecode.
 The type of the method handle will have `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` as return type,
 and its sole argument will be the array type.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` If the returned method handle is invoked with a `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `
 array reference, a `],
					[/* inline code block */ 'i', `NullPointerException`],
					[/* text */ 't', ` will be thrown.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'arrayClass', [/* parameter description */
					[/* text */ 't', `an array type`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the argument is `],
					[/* inline code block */ 'i', `null`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if arrayClass is not an array type`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a method handle which can retrieve the length of an array of the given array type`]
			]
		]],
		[/* method */ 'catchException(java.lang.invoke.MethodHandle,java.lang.Class,java.lang.invoke.MethodHandle)', [
			[/* method description */
				[/* text */ 't', `Makes a method handle which adapts a target method handle,
 by running it inside an exception handler.
 If the target returns normally, the adapter returns that value.
 If an exception matching the specified type is thrown, the fallback
 handle is called instead on the exception, plus the original arguments.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The target and handler must have the same corresponding
 argument and return types, except that handler may omit trailing arguments
 (similarly to the predicate in `],
					[/* reference */ 'r', `#guardWithTest(java.lang.invoke.MethodHandle,java.lang.invoke.MethodHandle,java.lang.invoke.MethodHandle)`, `guardWithTest`],
					[/* text */ 't', `).
 Also, the handler must have an extra leading parameter of `],
					[/* inline code block */ 'i', `exType`],
					[/* text */ 't', ` or a supertype.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 Here is pseudocode for the resulting adapter. In the code, `],
					[/* inline code block */ 'i', `T`],
					[/* text */ 't', `
 represents the return type of the `],
					[/* inline code block */ 'i', `target`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `handler`],
					[/* text */ 't', `,
 and correspondingly that of the resulting adapter; `],
					[/* inline code block */ 'i', `A`],
					[/* text */ 't', `/`],
					[/* inline code block */ 'i', `a`],
					[/* text */ 't', `,
 the types and values of arguments to the resulting handle consumed by
 `],
					[/* inline code block */ 'i', `handler`],
					[/* text */ 't', `; and `],
					[/* inline code block */ 'i', `B`],
					[/* text */ 't', `/`],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', `, those of arguments to the
 resulting handle discarded by `],
					[/* inline code block */ 'i', `handler`],
					[/* text */ 't', `.
 `]
				]],
				[/* blockquote */ 'q', [
					[/* code block */ 'c', [
						[/* inline code block */ 'i', `T target(A..., B...);
 T handler(ExType, A...);
 T adapter(A... a, B... b) {
   try {
     return target(a..., b...);
   } catch (ExType ex) {
     return handler(ex, a...);
   }
 }`]
					]]
				]],
				[/* text */ 't', `
 Note that the saved arguments (`],
				[/* inline code block */ 'i', `a...`],
				[/* text */ 't', ` in the pseudocode) cannot
 be modified by execution of the target, and so are passed unchanged
 from the caller to the handler, if the handler is invoked.
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `
 The target and handler must return the same type, even if the handler
 always throws.  (This might happen, for instance, because the handler
 is simulating a `],
					[/* inline code block */ 'i', `finally`],
					[/* text */ 't', ` clause).
 To create such a throwing handler, compose the handler creation logic
 with `],
					[/* reference */ 'r', `#throwException(java.lang.Class,java.lang.Class)`, `throwException`],
					[/* text */ 't', `,
 in order to create a method handle of the correct return type.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'target', [/* parameter description */
					[/* text */ 't', `method handle to call`]
				]],
				[/* parameter */ 'exType', [/* parameter description */
					[/* text */ 't', `the type of exception which the handler will catch`]
				]],
				[/* parameter */ 'handler', [/* parameter description */
					[/* text */ 't', `method handle to call if a matching exception is thrown`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if any argument is null`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `handler`],
					[/* text */ 't', ` does not accept
          the given exception type, or if the method handle types do
          not match in their return types and their
          corresponding parameters`]
				]]
			],
			[/* return description */
				[/* text */ 't', `method handle which incorporates the specified try/catch logic`]
			]
		]],
		[/* method */ 'collectArguments(java.lang.invoke.MethodHandle,int,java.lang.invoke.MethodHandle)', [
			[/* method description */
				[/* text */ 't', `Adapts a target method handle by pre-processing
 a sub-sequence of its arguments with a filter (another method handle).
 The pre-processed arguments are replaced by the result (if any) of the
 filter function.
 The target is then called on the modified (usually shortened) argument list.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the filter returns a value, the target must accept that value as
 its argument in position `],
					[/* inline code block */ 'i', `pos`],
					[/* text */ 't', `, preceded and/or followed by
 any arguments not passed to the filter.
 If the filter returns void, the target must accept all arguments
 not passed to the filter.
 No arguments are reordered, and a result returned from the filter
 replaces (in order) the whole subsequence of arguments originally
 passed to the adapter.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The argument types (if any) of the filter
 replace zero or one argument types of the target, at position `],
					[/* inline code block */ 'i', `pos`],
					[/* text */ 't', `,
 in the resulting adapted method handle.
 The return type of the filter (if any) must be identical to the
 argument type of the target at position `],
					[/* inline code block */ 'i', `pos`],
					[/* text */ 't', `, and that target argument
 is supplied by the return value of the filter.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 In all cases, `],
					[/* inline code block */ 'i', `pos`],
					[/* text */ 't', ` must be greater than or equal to zero, and
 `],
					[/* inline code block */ 'i', `pos`],
					[/* text */ 't', ` must also be less than or equal to the target's arity.
 `]
				]],
				[/* block */ 'b', `Example:`],
				[/* blockquote */ 'q', [
					[/* code block */ 'c', [
						[/* inline code block */ 'i', `import static java.lang.invoke.MethodHandles.*;
import static java.lang.invoke.MethodType.*;
...
MethodHandle deepToString = publicLookup()
  .findStatic(Arrays.class, "deepToString", methodType(String.class, Object[].class));

MethodHandle ts1 = deepToString.asCollector(String[].class, 1);
assertEquals("[strange]", (String) ts1.invokeExact("strange"));

MethodHandle ts2 = deepToString.asCollector(String[].class, 2);
assertEquals("[up, down]", (String) ts2.invokeExact("up", "down"));

MethodHandle ts3 = deepToString.asCollector(String[].class, 3);
MethodHandle ts3_ts2 = collectArguments(ts3, 1, ts2);
assertEquals("[top, [up, down], strange]",
             (String) ts3_ts2.invokeExact("top", "up", "down", "strange"));

MethodHandle ts3_ts2_ts1 = collectArguments(ts3_ts2, 3, ts1);
assertEquals("[top, [up, down], [strange]]",
             (String) ts3_ts2_ts1.invokeExact("top", "up", "down", "strange"));

MethodHandle ts3_ts2_ts3 = collectArguments(ts3_ts2, 1, ts3);
assertEquals("[top, [[up, down, strange], charm], bottom]",
             (String) ts3_ts2_ts3.invokeExact("top", "up", "down", "strange", "charm", "bottom"));`]
					]]
				]],
				[/* text */ 't', `
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `Here is pseudocode for the resulting adapter. In the code, `],
					[/* inline code block */ 'i', `T`],
					[/* text */ 't', `
 represents the return type of the `],
					[/* inline code block */ 'i', `target`],
					[/* text */ 't', ` and resulting adapter.
 `],
					[/* inline code block */ 'i', `V`],
					[/* text */ 't', `/`],
					[/* inline code block */ 'i', `v`],
					[/* text */ 't', ` stand for the return type and value of the
 `],
					[/* inline code block */ 'i', `filter`],
					[/* text */ 't', `, which are also found in the signature and arguments of
 the `],
					[/* inline code block */ 'i', `target`],
					[/* text */ 't', `, respectively, unless `],
					[/* inline code block */ 'i', `V`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `void`],
					[/* text */ 't', `.
 `],
					[/* inline code block */ 'i', `A`],
					[/* text */ 't', `/`],
					[/* inline code block */ 'i', `a`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `C`],
					[/* text */ 't', `/`],
					[/* inline code block */ 'i', `c`],
					[/* text */ 't', ` represent the parameter types
 and values preceding and following the collection position, `],
					[/* inline code block */ 'i', `pos`],
					[/* text */ 't', `,
 in the `],
					[/* inline code block */ 'i', `target`],
					[/* text */ 't', `'s signature. They also turn up in the resulting
 adapter's signature and arguments, where they surround
 `],
					[/* inline code block */ 'i', `B`],
					[/* text */ 't', `/`],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', `, which represent the parameter types and arguments
 to the `],
					[/* inline code block */ 'i', `filter`],
					[/* text */ 't', ` (if any).
 `]
				]],
				[/* blockquote */ 'q', [
					[/* code block */ 'c', [
						[/* inline code block */ 'i', `T target(A...,V,C...);
 V filter(B...);
 T adapter(A... a,B... b,C... c) {
   V v = filter(b...);
   return target(a...,v,c...);
 }
 // and if the filter has no arguments:
 T target2(A...,V,C...);
 V filter2();
 T adapter2(A... a,C... c) {
   V v = filter2();
   return target2(a...,v,c...);
 }
 // and if the filter has a void return:
 T target3(A...,C...);
 void filter3(B...);
 T adapter3(A... a,B... b,C... c) {
   filter3(b...);
   return target3(a...,c...);
 }`]
					]]
				]],
				[/* text */ 't', `
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `
 A collection adapter `],
					[/* inline code block */ 'i', `collectArguments(mh, 0, coll)`],
					[/* text */ 't', ` is equivalent to
 one which first "folds" the affected arguments, and then drops them, in separate
 steps as follows:
 `]
				]],
				[/* blockquote */ 'q', [
					[/* code block */ 'c', [
						[/* inline code block */ 'i', `mh = MethodHandles.dropArguments(mh, 1, coll.type().parameterList()); //step 2
 mh = MethodHandles.foldArguments(mh, coll); //step 1`]
					]]
				]],
				[/* text */ 't', `
 If the target method handle consumes no arguments besides than the result
 (if any) of the filter `],
				[/* inline code block */ 'i', `coll`],
				[/* text */ 't', `, then `],
				[/* inline code block */ 'i', `collectArguments(mh, 0, coll)`],
				[/* text */ 't', `
 is equivalent to `],
				[/* inline code block */ 'i', `filterReturnValue(coll, mh)`],
				[/* text */ 't', `.
 If the filter method handle `],
				[/* inline code block */ 'i', `coll`],
				[/* text */ 't', ` consumes one argument and produces
 a non-void result, then `],
				[/* inline code block */ 'i', `collectArguments(mh, N, coll)`],
				[/* text */ 't', `
 is equivalent to `],
				[/* inline code block */ 'i', `filterArguments(mh, N, coll)`],
				[/* text */ 't', `.
 Other equivalences are possible but would require argument permutation.
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `
 `],
					[/* text */ 't', `Note:`],
					[/* text */ 't', ` The resulting adapter is never a `],
					[/* reference */ 'r', `java.lang.invoke.MethodHandle#asVarargsCollector(java.lang.Class)`, `variable-arity method handle`],
					[/* text */ 't', `, even if the original target method handle was.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'target', [/* parameter description */
					[/* text */ 't', `the method handle to invoke after filtering the subsequence of arguments`]
				]],
				[/* parameter */ 'pos', [/* parameter description */
					[/* text */ 't', `the position of the first adapter argument to pass to the filter,
            and/or the target argument which receives the result of the filter`]
				]],
				[/* parameter */ 'filter', [/* parameter description */
					[/* text */ 't', `method handle to call on the subsequence of arguments`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if either argument is null`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the return type of `],
					[/* inline code block */ 'i', `filter`],
					[/* text */ 't', `
          is non-void and is not the same as the `],
					[/* inline code block */ 'i', `pos`],
					[/* text */ 't', ` argument of the target,
          or if `],
					[/* inline code block */ 'i', `pos`],
					[/* text */ 't', ` is not between 0 and the target's arity, inclusive,
          or if the resulting method handle's type would have
          `],
					[/* reference */ 'r', `java.lang.invoke.MethodHandle#maxarity`, `too many parameters`]
				]]
			],
			[/* return description */
				[/* text */ 't', `method handle which incorporates the specified argument subsequence filtering logic`]
			]
		]],
		[/* method */ 'constant(java.lang.Class,java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Produces a method handle of the requested return type which returns the given
 constant value every time it is invoked.
 `],
				[/* block */ 'b', `
 Before the method handle is returned, the passed-in value is converted to the requested type.
 If the requested type is primitive, widening primitive conversions are attempted,
 else reference conversions are attempted.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `The returned method handle is equivalent to `],
					[/* inline code block */ 'i', `identity(type).bindTo(value)`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'type', [/* parameter description */
					[/* text */ 't', `the return type of the desired method handle`]
				]],
				[/* parameter */ 'value', [/* parameter description */
					[/* text */ 't', `the value to return`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `type`],
					[/* text */ 't', ` argument is null`]
				]],
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the value cannot be converted to the required return type`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the given type is `],
					[/* inline code block */ 'i', `void.class`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a method handle of the given return type and no arguments, which always returns the given value`]
			]
		]],
		[/* method */ 'countedLoop(java.lang.invoke.MethodHandle,java.lang.invoke.MethodHandle,java.lang.invoke.MethodHandle)', [
			[/* method description */
				[/* text */ 't', `Constructs a loop that runs a given number of iterations.
 This is a convenience wrapper for the `],
				[/* reference */ 'r', `#loop(java.lang.invoke.MethodHandle%5B%5D...)`, `generic loop combinator`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The number of iterations is determined by the `],
					[/* inline code block */ 'i', `iterations`],
					[/* text */ 't', ` handle evaluation result.
 The loop counter `],
					[/* inline code block */ 'i', `i`],
					[/* text */ 't', ` is an extra loop iteration variable of type `],
					[/* inline code block */ 'i', `int`],
					[/* text */ 't', `.
 It will be initialized to 0 and incremented by 1 in each iteration.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the `],
					[/* inline code block */ 'i', `body`],
					[/* text */ 't', ` handle returns a non-`],
					[/* inline code block */ 'i', `void`],
					[/* text */ 't', ` type `],
					[/* inline code block */ 'i', `V`],
					[/* text */ 't', `, a leading loop iteration variable
 of that type is also present.  This variable is initialized using the optional `],
					[/* inline code block */ 'i', `init`],
					[/* text */ 't', ` handle,
 or to the `],
					[/* reference */ 'r', `#empty(java.lang.invoke.MethodType)`, `default value`],
					[/* text */ 't', ` of type `],
					[/* inline code block */ 'i', `V`],
					[/* text */ 't', ` if that handle is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 In each iteration, the iteration variables are passed to an invocation of the `],
					[/* inline code block */ 'i', `body`],
					[/* text */ 't', ` handle.
 A non-`],
					[/* inline code block */ 'i', `void`],
					[/* text */ 't', ` value returned from the body (of type `],
					[/* inline code block */ 'i', `V`],
					[/* text */ 't', `) updates the leading
 iteration variable.
 The result of the loop handle execution will be the final `],
					[/* inline code block */ 'i', `V`],
					[/* text */ 't', ` value of that variable
 (or `],
					[/* inline code block */ 'i', `void`],
					[/* text */ 't', ` if there is no `],
					[/* inline code block */ 'i', `V`],
					[/* text */ 't', ` variable).
 `]
				]],
				[/* block */ 'b', `
 The following rules hold for the argument handles:`],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `The `],
						[/* inline code block */ 'i', `iterations`],
						[/* text */ 't', ` handle must not be `],
						[/* inline code block */ 'i', `null`],
						[/* text */ 't', `, and must return
 the type `],
						[/* inline code block */ 'i', `int`],
						[/* text */ 't', `, referred to here as `],
						[/* inline code block */ 'i', `I`],
						[/* text */ 't', ` in parameter type lists.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `The `],
						[/* inline code block */ 'i', `body`],
						[/* text */ 't', ` handle must not be `],
						[/* inline code block */ 'i', `null`],
						[/* text */ 't', `; its type must be of the form
 `],
						[/* inline code block */ 'i', `(V I A...)V`],
						[/* text */ 't', `, where `],
						[/* inline code block */ 'i', `V`],
						[/* text */ 't', ` is non-`],
						[/* inline code block */ 'i', `void`],
						[/* text */ 't', `, or else `],
						[/* inline code block */ 'i', `(I A...)void`],
						[/* text */ 't', `.
 (In the `],
						[/* inline code block */ 'i', `void`],
						[/* text */ 't', ` case, we assign the type `],
						[/* inline code block */ 'i', `void`],
						[/* text */ 't', ` to the name `],
						[/* inline code block */ 'i', `V`],
						[/* text */ 't', `,
 and we will write `],
						[/* inline code block */ 'i', `(V I A...)V`],
						[/* text */ 't', ` with the understanding that a `],
						[/* inline code block */ 'i', `void`],
						[/* text */ 't', ` type `],
						[/* inline code block */ 'i', `V`],
						[/* text */ 't', `
 is quietly dropped from the parameter list, leaving `],
						[/* inline code block */ 'i', `(I A...)V`],
						[/* text */ 't', `.)
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `The parameter list `],
						[/* inline code block */ 'i', `(V I A...)`],
						[/* text */ 't', ` of the body contributes to a list
 of types called the `],
						[/* text */ 't', `internal parameter list`],
						[/* text */ 't', `.
 It will constrain the parameter lists of the other loop parts.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `As a special case, if the body contributes only `],
						[/* inline code block */ 'i', `V`],
						[/* text */ 't', ` and `],
						[/* inline code block */ 'i', `I`],
						[/* text */ 't', ` types,
 with no additional `],
						[/* inline code block */ 'i', `A`],
						[/* text */ 't', ` types, then the internal parameter list is extended by
 the argument types `],
						[/* inline code block */ 'i', `A...`],
						[/* text */ 't', ` of the `],
						[/* inline code block */ 'i', `iterations`],
						[/* text */ 't', ` handle.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `If the iteration variable types `],
						[/* inline code block */ 'i', `(V I)`],
						[/* text */ 't', ` are dropped from the internal parameter list, the resulting shorter
 list `],
						[/* inline code block */ 'i', `(A...)`],
						[/* text */ 't', ` is called the `],
						[/* text */ 't', `external parameter list`],
						[/* text */ 't', `.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `The body return type `],
						[/* inline code block */ 'i', `V`],
						[/* text */ 't', `, if non-`],
						[/* inline code block */ 'i', `void`],
						[/* text */ 't', `, determines the type of an
 additional state variable of the loop.
 The body must both accept a leading parameter and return a value of this type `],
						[/* inline code block */ 'i', `V`],
						[/* text */ 't', `.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `If `],
						[/* inline code block */ 'i', `init`],
						[/* text */ 't', ` is non-`],
						[/* inline code block */ 'i', `null`],
						[/* text */ 't', `, it must have return type `],
						[/* inline code block */ 'i', `V`],
						[/* text */ 't', `.
 Its parameter list (of some `],
						[/* reference */ 'r', `java.lang.invoke.MethodHandles#astar`, `form (A*)`],
						[/* text */ 't', `) must be
 `],
						[/* reference */ 'r', `java.lang.invoke.MethodHandles#effid`, `effectively identical`],
						[/* text */ 't', `
 to the external parameter list `],
						[/* inline code block */ 'i', `(A...)`],
						[/* text */ 't', `.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `If `],
						[/* inline code block */ 'i', `init`],
						[/* text */ 't', ` is `],
						[/* inline code block */ 'i', `null`],
						[/* text */ 't', `, the loop variable will be initialized to its
 `],
						[/* reference */ 'r', `#empty(java.lang.invoke.MethodType)`, `default value`],
						[/* text */ 't', `.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `The parameter list of `],
						[/* inline code block */ 'i', `iterations`],
						[/* text */ 't', ` (of some form `],
						[/* inline code block */ 'i', `(A*)`],
						[/* text */ 't', `) must be
 effectively identical to the external parameter list `],
						[/* inline code block */ 'i', `(A...)`],
						[/* text */ 't', `.
 `]
					]]
				]],
				[/* text */ 't', `
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', `
 The resulting loop handle's result type and parameter signature are determined as follows:`],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `The loop handle's result type is the result type `],
						[/* inline code block */ 'i', `V`],
						[/* text */ 't', ` of the body.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `The loop handle's parameter types are the types `],
						[/* inline code block */ 'i', `(A...)`],
						[/* text */ 't', `,
 from the external parameter list.
 `]
					]]
				]],
				[/* text */ 't', `
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `
 Here is pseudocode for the resulting loop handle. In the code, `],
					[/* inline code block */ 'i', `V`],
					[/* text */ 't', `/`],
					[/* inline code block */ 'i', `v`],
					[/* text */ 't', ` represent the type / value of
 the second loop variable as well as the result type of the loop; and `],
					[/* inline code block */ 'i', `A...`],
					[/* text */ 't', `/`],
					[/* inline code block */ 'i', `a...`],
					[/* text */ 't', ` represent
 arguments passed to the loop.
 `]
				]],
				[/* blockquote */ 'q', [
					[/* code block */ 'c', [
						[/* inline code block */ 'i', `int iterations(A...);
 V init(A...);
 V body(V, int, A...);
 V countedLoop(A... a...) {
   int end = iterations(a...);
   V v = init(a...);
   for (int i = 0; i < end; ++i) {
     v = body(v, i, a...);
   }
   return v;
 }`]
					]]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'iterations', [/* parameter description */
					[/* text */ 't', `a non-`],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` handle to return the number of iterations this loop should run. The handle's
                   result type must be `],
					[/* inline code block */ 'i', `int`],
					[/* text */ 't', `. See above for other constraints.`]
				]],
				[/* parameter */ 'init', [/* parameter description */
					[/* text */ 't', `optional initializer, providing the initial value of the loop variable.
             May be `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `, implying a default initial value.  See above for other constraints.`]
				]],
				[/* parameter */ 'body', [/* parameter description */
					[/* text */ 't', `body of the loop, which may not be `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.
             It controls the loop parameters and result type in the standard case (see above for details).
             It must accept its own return type (if non-void) plus an `],
					[/* inline code block */ 'i', `int`],
					[/* text */ 't', ` parameter (for the counter),
             and may accept any number of additional types.
             See above for other constraints.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if either of the `],
					[/* inline code block */ 'i', `iterations`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `body`],
					[/* text */ 't', ` handles is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if any argument violates the rules formulated above.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a method handle representing the loop.`]
			]
		]],
		[/* method */ 'countedLoop(java.lang.invoke.MethodHandle,java.lang.invoke.MethodHandle,java.lang.invoke.MethodHandle,java.lang.invoke.MethodHandle)', [
			[/* method description */
				[/* text */ 't', `Constructs a loop that counts over a range of numbers.
 This is a convenience wrapper for the `],
				[/* reference */ 'r', `#loop(java.lang.invoke.MethodHandle%5B%5D...)`, `generic loop combinator`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The loop counter `],
					[/* inline code block */ 'i', `i`],
					[/* text */ 't', ` is a loop iteration variable of type `],
					[/* inline code block */ 'i', `int`],
					[/* text */ 't', `.
 The `],
					[/* inline code block */ 'i', `start`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `end`],
					[/* text */ 't', ` handles determine the start (inclusive) and end (exclusive)
 values of the loop counter.
 The loop counter will be initialized to the `],
					[/* inline code block */ 'i', `int`],
					[/* text */ 't', ` value returned from the evaluation of the
 `],
					[/* inline code block */ 'i', `start`],
					[/* text */ 't', ` handle and run to the value returned from `],
					[/* inline code block */ 'i', `end`],
					[/* text */ 't', ` (exclusively) with a step width of 1.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the `],
					[/* inline code block */ 'i', `body`],
					[/* text */ 't', ` handle returns a non-`],
					[/* inline code block */ 'i', `void`],
					[/* text */ 't', ` type `],
					[/* inline code block */ 'i', `V`],
					[/* text */ 't', `, a leading loop iteration variable
 of that type is also present.  This variable is initialized using the optional `],
					[/* inline code block */ 'i', `init`],
					[/* text */ 't', ` handle,
 or to the `],
					[/* reference */ 'r', `#empty(java.lang.invoke.MethodType)`, `default value`],
					[/* text */ 't', ` of type `],
					[/* inline code block */ 'i', `V`],
					[/* text */ 't', ` if that handle is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 In each iteration, the iteration variables are passed to an invocation of the `],
					[/* inline code block */ 'i', `body`],
					[/* text */ 't', ` handle.
 A non-`],
					[/* inline code block */ 'i', `void`],
					[/* text */ 't', ` value returned from the body (of type `],
					[/* inline code block */ 'i', `V`],
					[/* text */ 't', `) updates the leading
 iteration variable.
 The result of the loop handle execution will be the final `],
					[/* inline code block */ 'i', `V`],
					[/* text */ 't', ` value of that variable
 (or `],
					[/* inline code block */ 'i', `void`],
					[/* text */ 't', ` if there is no `],
					[/* inline code block */ 'i', `V`],
					[/* text */ 't', ` variable).
 `]
				]],
				[/* block */ 'b', `
 The following rules hold for the argument handles:`],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `The `],
						[/* inline code block */ 'i', `start`],
						[/* text */ 't', ` and `],
						[/* inline code block */ 'i', `end`],
						[/* text */ 't', ` handles must not be `],
						[/* inline code block */ 'i', `null`],
						[/* text */ 't', `, and must both return
 the common type `],
						[/* inline code block */ 'i', `int`],
						[/* text */ 't', `, referred to here as `],
						[/* inline code block */ 'i', `I`],
						[/* text */ 't', ` in parameter type lists.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `The `],
						[/* inline code block */ 'i', `body`],
						[/* text */ 't', ` handle must not be `],
						[/* inline code block */ 'i', `null`],
						[/* text */ 't', `; its type must be of the form
 `],
						[/* inline code block */ 'i', `(V I A...)V`],
						[/* text */ 't', `, where `],
						[/* inline code block */ 'i', `V`],
						[/* text */ 't', ` is non-`],
						[/* inline code block */ 'i', `void`],
						[/* text */ 't', `, or else `],
						[/* inline code block */ 'i', `(I A...)void`],
						[/* text */ 't', `.
 (In the `],
						[/* inline code block */ 'i', `void`],
						[/* text */ 't', ` case, we assign the type `],
						[/* inline code block */ 'i', `void`],
						[/* text */ 't', ` to the name `],
						[/* inline code block */ 'i', `V`],
						[/* text */ 't', `,
 and we will write `],
						[/* inline code block */ 'i', `(V I A...)V`],
						[/* text */ 't', ` with the understanding that a `],
						[/* inline code block */ 'i', `void`],
						[/* text */ 't', ` type `],
						[/* inline code block */ 'i', `V`],
						[/* text */ 't', `
 is quietly dropped from the parameter list, leaving `],
						[/* inline code block */ 'i', `(I A...)V`],
						[/* text */ 't', `.)
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `The parameter list `],
						[/* inline code block */ 'i', `(V I A...)`],
						[/* text */ 't', ` of the body contributes to a list
 of types called the `],
						[/* text */ 't', `internal parameter list`],
						[/* text */ 't', `.
 It will constrain the parameter lists of the other loop parts.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `As a special case, if the body contributes only `],
						[/* inline code block */ 'i', `V`],
						[/* text */ 't', ` and `],
						[/* inline code block */ 'i', `I`],
						[/* text */ 't', ` types,
 with no additional `],
						[/* inline code block */ 'i', `A`],
						[/* text */ 't', ` types, then the internal parameter list is extended by
 the argument types `],
						[/* inline code block */ 'i', `A...`],
						[/* text */ 't', ` of the `],
						[/* inline code block */ 'i', `end`],
						[/* text */ 't', ` handle.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `If the iteration variable types `],
						[/* inline code block */ 'i', `(V I)`],
						[/* text */ 't', ` are dropped from the internal parameter list, the resulting shorter
 list `],
						[/* inline code block */ 'i', `(A...)`],
						[/* text */ 't', ` is called the `],
						[/* text */ 't', `external parameter list`],
						[/* text */ 't', `.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `The body return type `],
						[/* inline code block */ 'i', `V`],
						[/* text */ 't', `, if non-`],
						[/* inline code block */ 'i', `void`],
						[/* text */ 't', `, determines the type of an
 additional state variable of the loop.
 The body must both accept a leading parameter and return a value of this type `],
						[/* inline code block */ 'i', `V`],
						[/* text */ 't', `.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `If `],
						[/* inline code block */ 'i', `init`],
						[/* text */ 't', ` is non-`],
						[/* inline code block */ 'i', `null`],
						[/* text */ 't', `, it must have return type `],
						[/* inline code block */ 'i', `V`],
						[/* text */ 't', `.
 Its parameter list (of some `],
						[/* reference */ 'r', `java.lang.invoke.MethodHandles#astar`, `form (A*)`],
						[/* text */ 't', `) must be
 `],
						[/* reference */ 'r', `java.lang.invoke.MethodHandles#effid`, `effectively identical`],
						[/* text */ 't', `
 to the external parameter list `],
						[/* inline code block */ 'i', `(A...)`],
						[/* text */ 't', `.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `If `],
						[/* inline code block */ 'i', `init`],
						[/* text */ 't', ` is `],
						[/* inline code block */ 'i', `null`],
						[/* text */ 't', `, the loop variable will be initialized to its
 `],
						[/* reference */ 'r', `#empty(java.lang.invoke.MethodType)`, `default value`],
						[/* text */ 't', `.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `The parameter list of `],
						[/* inline code block */ 'i', `start`],
						[/* text */ 't', ` (of some form `],
						[/* inline code block */ 'i', `(A*)`],
						[/* text */ 't', `) must be
 effectively identical to the external parameter list `],
						[/* inline code block */ 'i', `(A...)`],
						[/* text */ 't', `.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `Likewise, the parameter list of `],
						[/* inline code block */ 'i', `end`],
						[/* text */ 't', ` must be effectively identical
 to the external parameter list.
 `]
					]]
				]],
				[/* text */ 't', `
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', `
 The resulting loop handle's result type and parameter signature are determined as follows:`],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `The loop handle's result type is the result type `],
						[/* inline code block */ 'i', `V`],
						[/* text */ 't', ` of the body.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `The loop handle's parameter types are the types `],
						[/* inline code block */ 'i', `(A...)`],
						[/* text */ 't', `,
 from the external parameter list.
 `]
					]]
				]],
				[/* text */ 't', `
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `
 Here is pseudocode for the resulting loop handle. In the code, `],
					[/* inline code block */ 'i', `V`],
					[/* text */ 't', `/`],
					[/* inline code block */ 'i', `v`],
					[/* text */ 't', ` represent the type / value of
 the second loop variable as well as the result type of the loop; and `],
					[/* inline code block */ 'i', `A...`],
					[/* text */ 't', `/`],
					[/* inline code block */ 'i', `a...`],
					[/* text */ 't', ` represent
 arguments passed to the loop.
 `]
				]],
				[/* blockquote */ 'q', [
					[/* code block */ 'c', [
						[/* inline code block */ 'i', `int start(A...);
 int end(A...);
 V init(A...);
 V body(V, int, A...);
 V countedLoop(A... a...) {
   int e = end(a...);
   int s = start(a...);
   V v = init(a...);
   for (int i = s; i < e; ++i) {
     v = body(v, i, a...);
   }
   return v;
 }`]
					]]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'start', [/* parameter description */
					[/* text */ 't', `a non-`],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` handle to return the start value of the loop counter, which must be `],
					[/* inline code block */ 'i', `int`],
					[/* text */ 't', `.
              See above for other constraints.`]
				]],
				[/* parameter */ 'end', [/* parameter description */
					[/* text */ 't', `a non-`],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` handle to return the end value of the loop counter (the loop will run to
            `],
					[/* inline code block */ 'i', `end-1`],
					[/* text */ 't', `). The result type must be `],
					[/* inline code block */ 'i', `int`],
					[/* text */ 't', `. See above for other constraints.`]
				]],
				[/* parameter */ 'init', [/* parameter description */
					[/* text */ 't', `optional initializer, providing the initial value of the loop variable.
             May be `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `, implying a default initial value.  See above for other constraints.`]
				]],
				[/* parameter */ 'body', [/* parameter description */
					[/* text */ 't', `body of the loop, which may not be `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.
             It controls the loop parameters and result type in the standard case (see above for details).
             It must accept its own return type (if non-void) plus an `],
					[/* inline code block */ 'i', `int`],
					[/* text */ 't', ` parameter (for the counter),
             and may accept any number of additional types.
             See above for other constraints.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if any of the `],
					[/* inline code block */ 'i', `start`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `end`],
					[/* text */ 't', `, or `],
					[/* inline code block */ 'i', `body`],
					[/* text */ 't', ` handles is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if any argument violates the rules formulated above.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a method handle representing the loop.`]
			]
		]],
		[/* method */ 'doWhileLoop(java.lang.invoke.MethodHandle,java.lang.invoke.MethodHandle,java.lang.invoke.MethodHandle)', [
			[/* method description */
				[/* text */ 't', `Constructs a `],
				[/* inline code block */ 'i', `do-while`],
				[/* text */ 't', ` loop from an initializer, a body, and a predicate.
 This is a convenience wrapper for the `],
				[/* reference */ 'r', `#loop(java.lang.invoke.MethodHandle%5B%5D...)`, `generic loop combinator`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The `],
					[/* inline code block */ 'i', `pred`],
					[/* text */ 't', ` handle describes the loop condition; and `],
					[/* inline code block */ 'i', `body`],
					[/* text */ 't', `, its body. The loop resulting from this
 method will, in each iteration, first execute its body and then evaluate the predicate.
 The loop will terminate once the predicate evaluates to `],
					[/* inline code block */ 'i', `false`],
					[/* text */ 't', ` after an execution of the body.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The `],
					[/* inline code block */ 'i', `init`],
					[/* text */ 't', ` handle describes the initial value of an additional optional loop-local variable.
 In each iteration, this loop-local variable, if present, will be passed to the `],
					[/* inline code block */ 'i', `body`],
					[/* text */ 't', `
 and updated with the value returned from its invocation. The result of loop execution will be
 the final value of the additional loop-local variable (if present).
 `]
				]],
				[/* block */ 'b', `
 The following rules hold for these argument handles:`],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `The `],
						[/* inline code block */ 'i', `body`],
						[/* text */ 't', ` handle must not be `],
						[/* inline code block */ 'i', `null`],
						[/* text */ 't', `; its type must be of the form
 `],
						[/* inline code block */ 'i', `(V A...)V`],
						[/* text */ 't', `, where `],
						[/* inline code block */ 'i', `V`],
						[/* text */ 't', ` is non-`],
						[/* inline code block */ 'i', `void`],
						[/* text */ 't', `, or else `],
						[/* inline code block */ 'i', `(A...)void`],
						[/* text */ 't', `.
 (In the `],
						[/* inline code block */ 'i', `void`],
						[/* text */ 't', ` case, we assign the type `],
						[/* inline code block */ 'i', `void`],
						[/* text */ 't', ` to the name `],
						[/* inline code block */ 'i', `V`],
						[/* text */ 't', `,
 and we will write `],
						[/* inline code block */ 'i', `(V A...)V`],
						[/* text */ 't', ` with the understanding that a `],
						[/* inline code block */ 'i', `void`],
						[/* text */ 't', ` type `],
						[/* inline code block */ 'i', `V`],
						[/* text */ 't', `
 is quietly dropped from the parameter list, leaving `],
						[/* inline code block */ 'i', `(A...)V`],
						[/* text */ 't', `.)
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `The parameter list `],
						[/* inline code block */ 'i', `(V A...)`],
						[/* text */ 't', ` of the body is called the `],
						[/* text */ 't', `internal parameter list`],
						[/* text */ 't', `.
 It will constrain the parameter lists of the other loop parts.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `If the iteration variable type `],
						[/* inline code block */ 'i', `V`],
						[/* text */ 't', ` is dropped from the internal parameter list, the resulting shorter
 list `],
						[/* inline code block */ 'i', `(A...)`],
						[/* text */ 't', ` is called the `],
						[/* text */ 't', `external parameter list`],
						[/* text */ 't', `.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `The body return type `],
						[/* inline code block */ 'i', `V`],
						[/* text */ 't', `, if non-`],
						[/* inline code block */ 'i', `void`],
						[/* text */ 't', `, determines the type of an
 additional state variable of the loop.
 The body must both accept and return a value of this type `],
						[/* inline code block */ 'i', `V`],
						[/* text */ 't', `.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `If `],
						[/* inline code block */ 'i', `init`],
						[/* text */ 't', ` is non-`],
						[/* inline code block */ 'i', `null`],
						[/* text */ 't', `, it must have return type `],
						[/* inline code block */ 'i', `V`],
						[/* text */ 't', `.
 Its parameter list (of some `],
						[/* reference */ 'r', `java.lang.invoke.MethodHandles#astar`, `form (A*)`],
						[/* text */ 't', `) must be
 `],
						[/* reference */ 'r', `java.lang.invoke.MethodHandles#effid`, `effectively identical`],
						[/* text */ 't', `
 to the external parameter list `],
						[/* inline code block */ 'i', `(A...)`],
						[/* text */ 't', `.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `If `],
						[/* inline code block */ 'i', `init`],
						[/* text */ 't', ` is `],
						[/* inline code block */ 'i', `null`],
						[/* text */ 't', `, the loop variable will be initialized to its
 `],
						[/* reference */ 'r', `#empty(java.lang.invoke.MethodType)`, `default value`],
						[/* text */ 't', `.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `The `],
						[/* inline code block */ 'i', `pred`],
						[/* text */ 't', ` handle must not be `],
						[/* inline code block */ 'i', `null`],
						[/* text */ 't', `.  It must have `],
						[/* inline code block */ 'i', `boolean`],
						[/* text */ 't', ` as its return type.
 Its parameter list (either empty or of the form `],
						[/* inline code block */ 'i', `(V A*)`],
						[/* text */ 't', `) must be
 effectively identical to the internal parameter list.
 `]
					]]
				]],
				[/* text */ 't', `
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', `
 The resulting loop handle's result type and parameter signature are determined as follows:`],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `The loop handle's result type is the result type `],
						[/* inline code block */ 'i', `V`],
						[/* text */ 't', ` of the body.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `The loop handle's parameter types are the types `],
						[/* inline code block */ 'i', `(A...)`],
						[/* text */ 't', `,
 from the external parameter list.
 `]
					]]
				]],
				[/* text */ 't', `
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `
 Here is pseudocode for the resulting loop handle. In the code, `],
					[/* inline code block */ 'i', `V`],
					[/* text */ 't', `/`],
					[/* inline code block */ 'i', `v`],
					[/* text */ 't', ` represent the type / value of
 the sole loop variable as well as the result type of the loop; and `],
					[/* inline code block */ 'i', `A`],
					[/* text */ 't', `/`],
					[/* inline code block */ 'i', `a`],
					[/* text */ 't', `, that of the argument
 passed to the loop.
 `]
				]],
				[/* blockquote */ 'q', [
					[/* code block */ 'c', [
						[/* inline code block */ 'i', `V init(A...);
 boolean pred(V, A...);
 V body(V, A...);
 V doWhileLoop(A... a...) {
   V v = init(a...);
   do {
     v = body(v, a...);
   } while (pred(v, a...));
   return v;
 }`]
					]]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'init', [/* parameter description */
					[/* text */ 't', `optional initializer, providing the initial value of the loop variable.
             May be `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `, implying a default initial value.  See above for other constraints.`]
				]],
				[/* parameter */ 'body', [/* parameter description */
					[/* text */ 't', `body of the loop, which may not be `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `. It controls the loop parameters and result type.
             See above for other constraints.`]
				]],
				[/* parameter */ 'pred', [/* parameter description */
					[/* text */ 't', `condition for the loop, which may not be `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `. Its result type must be `],
					[/* inline code block */ 'i', `boolean`],
					[/* text */ 't', `. See
             above for other constraints.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the rules for the arguments are violated.`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `pred`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `body`],
					[/* text */ 't', ` are `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a method handle implementing the `],
				[/* inline code block */ 'i', `while`],
				[/* text */ 't', ` loop as described by the arguments.`]
			]
		]],
		[/* method */ 'dropArguments(java.lang.invoke.MethodHandle,int,java.lang.Class...)', [
			[/* method description */
				[/* text */ 't', `Produces a method handle which will discard some dummy arguments
 before calling some other specified `],
				[/* text */ 't', `target`],
				[/* text */ 't', ` method handle.
 The type of the new method handle will be the same as the target's type,
 except it will also include the dummy argument types,
 at some given position.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The `],
					[/* inline code block */ 'i', `pos`],
					[/* text */ 't', ` argument may range between zero and `],
					[/* text */ 't', `N`],
					[/* text */ 't', `,
 where `],
					[/* text */ 't', `N`],
					[/* text */ 't', ` is the arity of the target.
 If `],
					[/* inline code block */ 'i', `pos`],
					[/* text */ 't', ` is zero, the dummy arguments will precede
 the target's real arguments; if `],
					[/* inline code block */ 'i', `pos`],
					[/* text */ 't', ` is `],
					[/* text */ 't', `N`],
					[/* text */ 't', `
 they will come after.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'target', [/* parameter description */
					[/* text */ 't', `the method handle to invoke after the arguments are dropped`]
				]],
				[/* parameter */ 'pos', [/* parameter description */
					[/* text */ 't', `position of first argument to drop (zero for the leftmost)`]
				]],
				[/* parameter */ 'valueTypes', [/* parameter description */
					[/* text */ 't', `the type(s) of the argument(s) to drop`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the target is null,
                              or if the `],
					[/* inline code block */ 'i', `valueTypes`],
					[/* text */ 't', ` array or any of its elements is null`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if any element of `],
					[/* inline code block */ 'i', `valueTypes`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `void.class`],
					[/* text */ 't', `,
                  or if `],
					[/* inline code block */ 'i', `pos`],
					[/* text */ 't', ` is negative or greater than the arity of the target,
                  or if the new method handle's type would have
                  `],
					[/* reference */ 'r', `java.lang.invoke.MethodHandle#maxarity`, `too many parameters`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a method handle which drops arguments of the given types,
         before calling the original method handle`]
			]
		]],
		[/* method */ 'dropArguments(java.lang.invoke.MethodHandle,int,java.util.List)', [
			[/* method description */
				[/* text */ 't', `Produces a method handle which will discard some dummy arguments
 before calling some other specified `],
				[/* text */ 't', `target`],
				[/* text */ 't', ` method handle.
 The type of the new method handle will be the same as the target's type,
 except it will also include the dummy argument types,
 at some given position.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The `],
					[/* inline code block */ 'i', `pos`],
					[/* text */ 't', ` argument may range between zero and `],
					[/* text */ 't', `N`],
					[/* text */ 't', `,
 where `],
					[/* text */ 't', `N`],
					[/* text */ 't', ` is the arity of the target.
 If `],
					[/* inline code block */ 'i', `pos`],
					[/* text */ 't', ` is zero, the dummy arguments will precede
 the target's real arguments; if `],
					[/* inline code block */ 'i', `pos`],
					[/* text */ 't', ` is `],
					[/* text */ 't', `N`],
					[/* text */ 't', `
 they will come after.
 `]
				]],
				[/* block */ 'b', `Example:`],
				[/* blockquote */ 'q', [
					[/* code block */ 'c', [
						[/* inline code block */ 'i', `import static java.lang.invoke.MethodHandles.*;
import static java.lang.invoke.MethodType.*;
...
MethodHandle cat = lookup().findVirtual(String.class,
  "concat", methodType(String.class, String.class));
assertEquals("xy", (String) cat.invokeExact("x", "y"));
MethodType bigType = cat.type().insertParameterTypes(0, int.class, String.class);
MethodHandle d0 = dropArguments(cat, 0, bigType.parameterList().subList(0,2));
assertEquals(bigType, d0.type());
assertEquals("yz", (String) d0.invokeExact(123, "x", "y", "z"));`]
					]]
				]],
				[/* text */ 't', `
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', `
 This method is also equivalent to the following code:
 `],
				[/* blockquote */ 'q', [
					[/* code block */ 'c', [
						[/* text */ 't', ` `],
						[/* text */ 't', `dropArguments`],
						[/* inline code block */ 'i', `(target, pos, valueTypes.toArray(new Class[0]))`],
						[/* text */ 't', `
 `]
					]]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'target', [/* parameter description */
					[/* text */ 't', `the method handle to invoke after the arguments are dropped`]
				]],
				[/* parameter */ 'pos', [/* parameter description */
					[/* text */ 't', `position of first argument to drop (zero for the leftmost)`]
				]],
				[/* parameter */ 'valueTypes', [/* parameter description */
					[/* text */ 't', `the type(s) of the argument(s) to drop`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the target is null,
                              or if the `],
					[/* inline code block */ 'i', `valueTypes`],
					[/* text */ 't', ` list or any of its elements is null`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if any element of `],
					[/* inline code block */ 'i', `valueTypes`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `void.class`],
					[/* text */ 't', `,
                  or if `],
					[/* inline code block */ 'i', `pos`],
					[/* text */ 't', ` is negative or greater than the arity of the target,
                  or if the new method handle's type would have too many parameters`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a method handle which drops arguments of the given types,
         before calling the original method handle`]
			]
		]],
		[/* method */ 'dropArgumentsToMatch(java.lang.invoke.MethodHandle,int,java.util.List,int)', [
			[/* method description */
				[/* text */ 't', `Adapts a target method handle to match the given parameter type list. If necessary, adds dummy arguments. Some
 leading parameters can be skipped before matching begins. The remaining types in the `],
				[/* inline code block */ 'i', `target`],
				[/* text */ 't', `'s parameter
 type list must be a sub-list of the `],
				[/* inline code block */ 'i', `newTypes`],
				[/* text */ 't', ` type list at the starting position `],
				[/* inline code block */ 'i', `pos`],
				[/* text */ 't', `. The
 resulting handle will have the target handle's parameter type list, with any non-matching parameter types (before
 or after the matching sub-list) inserted in corresponding positions of the target's original parameters, as if by
 `],
				[/* reference */ 'r', `#dropArguments(java.lang.invoke.MethodHandle,int,java.lang.Class...)`, `dropArguments(MethodHandle, int, Class[])`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', `
 The resulting handle will have the same return type as the target handle.
 `],
				[/* block */ 'b', `
 In more formal terms, assume these two type lists:`],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `The target handle has the parameter type list `],
						[/* inline code block */ 'i', `S..., M...`],
						[/* text */ 't', `, with as many types in `],
						[/* inline code block */ 'i', `S`],
						[/* text */ 't', ` as
 indicated by `],
						[/* inline code block */ 'i', `skip`],
						[/* text */ 't', `. The `],
						[/* inline code block */ 'i', `M`],
						[/* text */ 't', ` types are those that are supposed to match part of the given type list,
 `],
						[/* inline code block */ 'i', `newTypes`],
						[/* text */ 't', `.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `The `],
						[/* inline code block */ 'i', `newTypes`],
						[/* text */ 't', ` list contains types `],
						[/* inline code block */ 'i', `P..., M..., A...`],
						[/* text */ 't', `, with as many types in `],
						[/* inline code block */ 'i', `P`],
						[/* text */ 't', ` as
 indicated by `],
						[/* inline code block */ 'i', `pos`],
						[/* text */ 't', `. The `],
						[/* inline code block */ 'i', `M`],
						[/* text */ 't', ` types are precisely those that the `],
						[/* inline code block */ 'i', `M`],
						[/* text */ 't', ` types in the target handle's
 parameter type list are supposed to match. The types in `],
						[/* inline code block */ 'i', `A`],
						[/* text */ 't', ` are additional types found after the matching
 sub-list.
 `]
					]]
				]],
				[/* text */ 't', `
 Given these assumptions, the result of an invocation of `],
				[/* inline code block */ 'i', `dropArgumentsToMatch`],
				[/* text */ 't', ` will have the parameter type
 list `],
				[/* inline code block */ 'i', `S..., P..., M..., A...`],
				[/* text */ 't', `, with the `],
				[/* inline code block */ 'i', `P`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `A`],
				[/* text */ 't', ` types inserted as if by
 `],
				[/* reference */ 'r', `#dropArguments(java.lang.invoke.MethodHandle,int,java.lang.Class...)`, `dropArguments(MethodHandle, int, Class[])`],
				[/* text */ 't', `.`],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'target', [/* parameter description */
					[/* text */ 't', `the method handle to adapt`]
				]],
				[/* parameter */ 'skip', [/* parameter description */
					[/* text */ 't', `number of targets parameters to disregard (they will be unchanged)`]
				]],
				[/* parameter */ 'newTypes', [/* parameter description */
					[/* text */ 't', `the list of types to match `],
					[/* inline code block */ 'i', `target`],
					[/* text */ 't', `'s parameter type list to`]
				]],
				[/* parameter */ 'pos', [/* parameter description */
					[/* text */ 't', `place in `],
					[/* inline code block */ 'i', `newTypes`],
					[/* text */ 't', ` where the non-skipped target parameters must occur`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if either argument is null`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if any element of `],
					[/* inline code block */ 'i', `newTypes`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `void.class`],
					[/* text */ 't', `,
         or if `],
					[/* inline code block */ 'i', `skip`],
					[/* text */ 't', ` is negative or greater than the arity of the target,
         or if `],
					[/* inline code block */ 'i', `pos`],
					[/* text */ 't', ` is negative or greater than the newTypes list size,
         or if `],
					[/* inline code block */ 'i', `newTypes`],
					[/* text */ 't', ` does not contain the `],
					[/* inline code block */ 'i', `target`],
					[/* text */ 't', `'s non-skipped parameter types at position
         `],
					[/* inline code block */ 'i', `pos`],
					[/* text */ 't', `.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a possibly adapted method handle`]
			]
		]],
		[/* method */ 'dropReturn(java.lang.invoke.MethodHandle)', [
			[/* method description */
				[/* text */ 't', `Drop the return value of the target handle (if any).
 The returned method handle will have a `],
				[/* inline code block */ 'i', `void`],
				[/* text */ 't', ` return type.`]
			],
			[/* parameters */
				[/* parameter */ 'target', [/* parameter description */
					[/* text */ 't', `the method handle to adapt`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `target`],
					[/* text */ 't', ` is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a possibly adapted method handle`]
			]
		]],
		[/* method */ 'empty(java.lang.invoke.MethodType)', [
			[/* method description */
				[/* text */ 't', `Produces a method handle of the requested type which ignores any arguments, does nothing,
 and returns a suitable default depending on the return type.
 That is, it returns a zero primitive value, a `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `, or `],
				[/* inline code block */ 'i', `void`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `The returned method handle is equivalent to
 `],
					[/* inline code block */ 'i', `dropArguments(zero(type.returnType()), 0, type.parameterList())`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'type', [/* parameter description */
					[/* text */ 't', `the type of the desired method handle`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the argument is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a constant method handle of the given type, which returns a default value of the given return type`]
			]
		]],
		[/* method */ 'exactInvoker(java.lang.invoke.MethodType)', [
			[/* method description */
				[/* text */ 't', `Produces a special `],
				[/* text */ 't', `invoker method handle`],
				[/* text */ 't', ` which can be used to
 invoke any method handle of the given type, as if by `],
				[/* reference */ 'r', `java.lang.invoke.MethodHandle#invokeExact(java.lang.Object...)`, `invokeExact`],
				[/* text */ 't', `.
 The resulting invoker will have a type which is
 exactly equal to the desired type, except that it will accept
 an additional leading argument of type `],
				[/* inline code block */ 'i', `MethodHandle`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method is equivalent to the following code (though it may be more efficient):
 `],
					[/* inline code block */ 'i', `publicLookup().findVirtual(MethodHandle.class, "invokeExact", type)`],
					[/* text */ 't', `

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 `],
					[/* text */ 't', `Discussion:`],
					[/* text */ 't', `
 Invoker method handles can be useful when working with variable method handles
 of unknown types.
 For example, to emulate an `],
					[/* inline code block */ 'i', `invokeExact`],
					[/* text */ 't', ` call to a variable method
 handle `],
					[/* inline code block */ 'i', `M`],
					[/* text */ 't', `, extract its type `],
					[/* inline code block */ 'i', `T`],
					[/* text */ 't', `,
 look up the invoker method `],
					[/* inline code block */ 'i', `X`],
					[/* text */ 't', ` for `],
					[/* inline code block */ 'i', `T`],
					[/* text */ 't', `,
 and call the invoker method, as `],
					[/* inline code block */ 'i', `X.invoke(T, A...)`],
					[/* text */ 't', `.
 (It would not work to call `],
					[/* inline code block */ 'i', `X.invokeExact`],
					[/* text */ 't', `, since the type `],
					[/* inline code block */ 'i', `T`],
					[/* text */ 't', `
 is unknown.)
 If spreading, collecting, or other argument transformations are required,
 they can be applied once to the invoker `],
					[/* inline code block */ 'i', `X`],
					[/* text */ 't', ` and reused on many `],
					[/* inline code block */ 'i', `M`],
					[/* text */ 't', `
 method handle values, as long as they are compatible with the type of `],
					[/* inline code block */ 'i', `X`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `(Note:  The invoker method is not available via the Core Reflection API.
 An attempt to call `],
					[/* reference */ 'r', `java.lang.reflect.Method#invoke(java.lang.Object,java.lang.Object...)`, `java.lang.reflect.Method.invoke`],
					[/* text */ 't', `
 on the declared `],
					[/* inline code block */ 'i', `invokeExact`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `invoke`],
					[/* text */ 't', ` method will raise an
 `],
					[/* reference */ 'r', `java.lang.UnsupportedOperationException`, `UnsupportedOperationException`],
					[/* text */ 't', `.)`]
				]],
				[/* block */ 'b', `
 This method throws no reflective or security exceptions.`]
			],
			[/* parameters */
				[/* parameter */ 'type', [/* parameter description */
					[/* text */ 't', `the desired target type`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the resulting method handle's type would have
          `],
					[/* reference */ 'r', `java.lang.invoke.MethodHandle#maxarity`, `too many parameters`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a method handle suitable for invoking any method handle of the given type`]
			]
		]],
		[/* method */ 'explicitCastArguments(java.lang.invoke.MethodHandle,java.lang.invoke.MethodType)', [
			[/* method description */
				[/* text */ 't', `Produces a method handle which adapts the type of the
 given method handle to a new type by pairwise argument and return type conversion.
 The original type and new type must have the same number of arguments.
 The resulting method handle is guaranteed to report a type
 which is equal to the desired new type.
 `],
				[/* block */ 'b', `
 If the original type and new type are equal, returns target.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The same conversions are allowed as for `],
					[/* reference */ 'r', `java.lang.invoke.MethodHandle#asType(java.lang.invoke.MethodType)`, `MethodHandle.asType`],
					[/* text */ 't', `,
 and some additional conversions are also applied if those conversions fail.
 Given types `],
					[/* text */ 't', `T0`],
					[/* text */ 't', `, `],
					[/* text */ 't', `T1`],
					[/* text */ 't', `, one of the following conversions is applied
 if possible, before or instead of any conversions done by `],
					[/* inline code block */ 'i', `asType`],
					[/* text */ 't', `:
 `]
				]],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `If `],
						[/* text */ 't', `T0`],
						[/* text */ 't', ` and `],
						[/* text */ 't', `T1`],
						[/* text */ 't', ` are references, and `],
						[/* text */ 't', `T1`],
						[/* text */ 't', ` is an interface type,
     then the value of type `],
						[/* text */ 't', `T0`],
						[/* text */ 't', ` is passed as a `],
						[/* text */ 't', `T1`],
						[/* text */ 't', ` without a cast.
     (This treatment of interfaces follows the usage of the bytecode verifier.)
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `If `],
						[/* text */ 't', `T0`],
						[/* text */ 't', ` is boolean and `],
						[/* text */ 't', `T1`],
						[/* text */ 't', ` is another primitive,
     the boolean is converted to a byte value, 1 for true, 0 for false.
     (This treatment follows the usage of the bytecode verifier.)
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `If `],
						[/* text */ 't', `T1`],
						[/* text */ 't', ` is boolean and `],
						[/* text */ 't', `T0`],
						[/* text */ 't', ` is another primitive,
     `],
						[/* text */ 't', `T0`],
						[/* text */ 't', ` is converted to byte via Java casting conversion (JLS 5.5),
     and the low order bit of the result is tested, as if by `],
						[/* inline code block */ 'i', `(x & 1) != 0`],
						[/* text */ 't', `.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `If `],
						[/* text */ 't', `T0`],
						[/* text */ 't', ` and `],
						[/* text */ 't', `T1`],
						[/* text */ 't', ` are primitives other than boolean,
     then a Java casting conversion (JLS 5.5) is applied.
     (Specifically, `],
						[/* text */ 't', `T0`],
						[/* text */ 't', ` will convert to `],
						[/* text */ 't', `T1`],
						[/* text */ 't', ` by
     widening and/or narrowing.)
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `If `],
						[/* text */ 't', `T0`],
						[/* text */ 't', ` is a reference and `],
						[/* text */ 't', `T1`],
						[/* text */ 't', ` a primitive, an unboxing
     conversion will be applied at runtime, possibly followed
     by a Java casting conversion (JLS 5.5) on the primitive value,
     possibly followed by a conversion from byte to boolean by testing
     the low-order bit.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `If `],
						[/* text */ 't', `T0`],
						[/* text */ 't', ` is a reference and `],
						[/* text */ 't', `T1`],
						[/* text */ 't', ` a primitive,
     and if the reference is null at runtime, a zero value is introduced.
 `]
					]]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'target', [/* parameter description */
					[/* text */ 't', `the method handle to invoke after arguments are retyped`]
				]],
				[/* parameter */ 'newType', [/* parameter description */
					[/* text */ 't', `the expected type of the new method handle`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if either argument is null`]
				]],
				[/* throw */ 'java.lang.invoke.WrongMethodTypeException', [/* throw description */
					[/* text */ 't', `if the conversion cannot be made`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a method handle which delegates to the target after performing
           any necessary argument conversions, and arranges for any
           necessary return value conversions`]
			]
		]],
		[/* method */ 'filterArguments(java.lang.invoke.MethodHandle,int,java.lang.invoke.MethodHandle...)', [
			[/* method description */
				[/* text */ 't', `Adapts a target method handle by pre-processing
 one or more of its arguments, each with its own unary filter function,
 and then calling the target with each pre-processed argument
 replaced by the result of its corresponding filter function.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The pre-processing is performed by one or more method handles,
 specified in the elements of the `],
					[/* inline code block */ 'i', `filters`],
					[/* text */ 't', ` array.
 The first element of the filter array corresponds to the `],
					[/* inline code block */ 'i', `pos`],
					[/* text */ 't', `
 argument of the target, and so on in sequence.
 The filter functions are invoked in left to right order.
 `]
				]],
				[/* block */ 'b', `
 Null arguments in the array are treated as identity functions,
 and the corresponding arguments left unchanged.
 (If there are no non-null elements in the array, the original target is returned.)
 Each filter is applied to the corresponding argument of the adapter.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 If a filter `],
					[/* inline code block */ 'i', `F`],
					[/* text */ 't', ` applies to the `],
					[/* inline code block */ 'i', `N`],
					[/* text */ 't', `th argument of
 the target, then `],
					[/* inline code block */ 'i', `F`],
					[/* text */ 't', ` must be a method handle which
 takes exactly one argument.  The type of `],
					[/* inline code block */ 'i', `F`],
					[/* text */ 't', `'s sole argument
 replaces the corresponding argument type of the target
 in the resulting adapted method handle.
 The return type of `],
					[/* inline code block */ 'i', `F`],
					[/* text */ 't', ` must be identical to the corresponding
 parameter type of the target.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 It is an error if there are elements of `],
					[/* inline code block */ 'i', `filters`],
					[/* text */ 't', `
 (null or not)
 which do not correspond to argument positions in the target.
 `]
				]],
				[/* block */ 'b', `Example:`],
				[/* blockquote */ 'q', [
					[/* code block */ 'c', [
						[/* inline code block */ 'i', `import static java.lang.invoke.MethodHandles.*;
import static java.lang.invoke.MethodType.*;
...
MethodHandle cat = lookup().findVirtual(String.class,
  "concat", methodType(String.class, String.class));
MethodHandle upcase = lookup().findVirtual(String.class,
  "toUpperCase", methodType(String.class));
assertEquals("xy", (String) cat.invokeExact("x", "y"));
MethodHandle f0 = filterArguments(cat, 0, upcase);
assertEquals("Xy", (String) f0.invokeExact("x", "y")); // Xy
MethodHandle f1 = filterArguments(cat, 1, upcase);
assertEquals("xY", (String) f1.invokeExact("x", "y")); // xY
MethodHandle f2 = filterArguments(cat, 0, upcase, upcase);
assertEquals("XY", (String) f2.invokeExact("x", "y")); // XY`]
					]]
				]],
				[/* text */ 't', `
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `Here is pseudocode for the resulting adapter. In the code, `],
					[/* inline code block */ 'i', `T`],
					[/* text */ 't', `
 denotes the return type of both the `],
					[/* inline code block */ 'i', `target`],
					[/* text */ 't', ` and resulting adapter.
 `],
					[/* inline code block */ 'i', `P`],
					[/* text */ 't', `/`],
					[/* inline code block */ 'i', `p`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `B`],
					[/* text */ 't', `/`],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', ` represent the types and values
 of the parameters and arguments that precede and follow the filter position
 `],
					[/* inline code block */ 'i', `pos`],
					[/* text */ 't', `, respectively. `],
					[/* inline code block */ 'i', `A[i]`],
					[/* text */ 't', `/`],
					[/* inline code block */ 'i', `a[i]`],
					[/* text */ 't', ` stand for the types and
 values of the filtered parameters and arguments; they also represent the
 return types of the `],
					[/* inline code block */ 'i', `filter[i]`],
					[/* text */ 't', ` handles. The latter accept arguments
 `],
					[/* inline code block */ 'i', `v[i]`],
					[/* text */ 't', ` of type `],
					[/* inline code block */ 'i', `V[i]`],
					[/* text */ 't', `, which also appear in the signature of
 the resulting adapter.
 `]
				]],
				[/* blockquote */ 'q', [
					[/* code block */ 'c', [
						[/* inline code block */ 'i', `T target(P... p, A[i]... a[i], B... b);
 A[i] filter[i](V[i]);
 T adapter(P... p, V[i]... v[i], B... b) {
   return target(p..., filter[i](v[i])..., b...);
 }`]
					]]
				]],
				[/* text */ 't', `
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `
 `],
					[/* text */ 't', `Note:`],
					[/* text */ 't', ` The resulting adapter is never a `],
					[/* reference */ 'r', `java.lang.invoke.MethodHandle#asVarargsCollector(java.lang.Class)`, `variable-arity method handle`],
					[/* text */ 't', `, even if the original target method handle was.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'target', [/* parameter description */
					[/* text */ 't', `the method handle to invoke after arguments are filtered`]
				]],
				[/* parameter */ 'pos', [/* parameter description */
					[/* text */ 't', `the position of the first argument to filter`]
				]],
				[/* parameter */ 'filters', [/* parameter description */
					[/* text */ 't', `method handles to call initially on filtered arguments`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the target is null
                              or if the `],
					[/* inline code block */ 'i', `filters`],
					[/* text */ 't', ` array is null`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if a non-null element of `],
					[/* inline code block */ 'i', `filters`],
					[/* text */ 't', `
          does not match a corresponding argument type of target as described above,
          or if the `],
					[/* inline code block */ 'i', `pos+filters.length`],
					[/* text */ 't', ` is greater than `],
					[/* inline code block */ 'i', `target.type().parameterCount()`],
					[/* text */ 't', `,
          or if the resulting method handle's type would have
          `],
					[/* reference */ 'r', `java.lang.invoke.MethodHandle#maxarity`, `too many parameters`]
				]]
			],
			[/* return description */
				[/* text */ 't', `method handle which incorporates the specified argument filtering logic`]
			]
		]],
		[/* method */ 'filterReturnValue(java.lang.invoke.MethodHandle,java.lang.invoke.MethodHandle)', [
			[/* method description */
				[/* text */ 't', `Adapts a target method handle by post-processing
 its return value (if any) with a filter (another method handle).
 The result of the filter is returned from the adapter.
 `],
				[/* block */ 'b', `
 If the target returns a value, the filter must accept that value as
 its only argument.
 If the target returns void, the filter must accept no arguments.
 `],
				[/* block */ 'b', `
 The return type of the filter
 replaces the return type of the target
 in the resulting adapted method handle.
 The argument type of the filter (if any) must be identical to the
 return type of the target.
 `],
				[/* block */ 'b', `Example:`],
				[/* blockquote */ 'q', [
					[/* code block */ 'c', [
						[/* inline code block */ 'i', `import static java.lang.invoke.MethodHandles.*;
import static java.lang.invoke.MethodType.*;
...
MethodHandle cat = lookup().findVirtual(String.class,
  "concat", methodType(String.class, String.class));
MethodHandle length = lookup().findVirtual(String.class,
  "length", methodType(int.class));
System.out.println((String) cat.invokeExact("x", "y")); // xy
MethodHandle f0 = filterReturnValue(cat, length);
System.out.println((int) f0.invokeExact("x", "y")); // 2`]
					]]
				]],
				[/* text */ 't', `
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `Here is pseudocode for the resulting adapter. In the code,
 `],
					[/* inline code block */ 'i', `T`],
					[/* text */ 't', `/`],
					[/* inline code block */ 'i', `t`],
					[/* text */ 't', ` represent the result type and value of the
 `],
					[/* inline code block */ 'i', `target`],
					[/* text */ 't', `; `],
					[/* inline code block */ 'i', `V`],
					[/* text */ 't', `, the result type of the `],
					[/* inline code block */ 'i', `filter`],
					[/* text */ 't', `; and
 `],
					[/* inline code block */ 'i', `A`],
					[/* text */ 't', `/`],
					[/* inline code block */ 'i', `a`],
					[/* text */ 't', `, the types and values of the parameters and arguments
 of the `],
					[/* inline code block */ 'i', `target`],
					[/* text */ 't', ` as well as the resulting adapter.
 `]
				]],
				[/* blockquote */ 'q', [
					[/* code block */ 'c', [
						[/* inline code block */ 'i', `T target(A...);
 V filter(T);
 V adapter(A... a) {
   T t = target(a...);
   return filter(t);
 }
 // and if the target has a void return:
 void target2(A...);
 V filter2();
 V adapter2(A... a) {
   target2(a...);
   return filter2();
 }
 // and if the filter has a void return:
 T target3(A...);
 void filter3(V);
 void adapter3(A... a) {
   T t = target3(a...);
   filter3(t);
 }`]
					]]
				]],
				[/* text */ 't', `
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `
 `],
					[/* text */ 't', `Note:`],
					[/* text */ 't', ` The resulting adapter is never a `],
					[/* reference */ 'r', `java.lang.invoke.MethodHandle#asVarargsCollector(java.lang.Class)`, `variable-arity method handle`],
					[/* text */ 't', `, even if the original target method handle was.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'target', [/* parameter description */
					[/* text */ 't', `the method handle to invoke before filtering the return value`]
				]],
				[/* parameter */ 'filter', [/* parameter description */
					[/* text */ 't', `method handle to call on the return value`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if either argument is null`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the argument list of `],
					[/* inline code block */ 'i', `filter`],
					[/* text */ 't', `
          does not match the return type of target as described above`]
				]]
			],
			[/* return description */
				[/* text */ 't', `method handle which incorporates the specified return value filtering logic`]
			]
		]],
		[/* method */ 'foldArguments(java.lang.invoke.MethodHandle,int,java.lang.invoke.MethodHandle)', [
			[/* method description */
				[/* text */ 't', `Adapts a target method handle by pre-processing some of its arguments, starting at a given position, and then
 calling the target with the result of the pre-processing, inserted into the original sequence of arguments just
 before the folded arguments.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method is closely related to `],
					[/* reference */ 'r', `#foldArguments(java.lang.invoke.MethodHandle,java.lang.invoke.MethodHandle)`, `foldArguments(MethodHandle, MethodHandle)`],
					[/* text */ 't', `, but allows to control the
 position in the parameter list at which folding takes place. The argument controlling this, `],
					[/* inline code block */ 'i', `pos`],
					[/* text */ 't', `, is a
 zero-based index. The aforementioned method `],
					[/* reference */ 'r', `#foldArguments(java.lang.invoke.MethodHandle,java.lang.invoke.MethodHandle)`, `foldArguments(MethodHandle, MethodHandle)`],
					[/* text */ 't', ` assumes position
 0.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'target', [/* parameter description */
					[/* text */ 't', `the method handle to invoke after arguments are combined`]
				]],
				[/* parameter */ 'pos', [/* parameter description */
					[/* text */ 't', `the position at which to start folding and at which to insert the folding result; if this is `],
					[/* inline code block */ 'i', `0`],
					[/* text */ 't', `, the effect is the same as for `],
					[/* reference */ 'r', `#foldArguments(java.lang.invoke.MethodHandle,java.lang.invoke.MethodHandle)`, `foldArguments(MethodHandle, MethodHandle)`],
					[/* text */ 't', `.`]
				]],
				[/* parameter */ 'combiner', [/* parameter description */
					[/* text */ 't', `method handle to call initially on the incoming arguments`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if either argument is null`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if either of the following two conditions holds:
          (1) `],
					[/* inline code block */ 'i', `combiner`],
					[/* text */ 't', `'s return type is non-`],
					[/* inline code block */ 'i', `void`],
					[/* text */ 't', ` and not the same as the argument type at position
              `],
					[/* inline code block */ 'i', `pos`],
					[/* text */ 't', ` of the target signature;
          (2) the `],
					[/* inline code block */ 'i', `N`],
					[/* text */ 't', ` argument types at position `],
					[/* inline code block */ 'i', `pos`],
					[/* text */ 't', ` of the target signature (skipping one matching
              the `],
					[/* inline code block */ 'i', `combiner`],
					[/* text */ 't', `'s return type) are not identical with the argument types of `],
					[/* inline code block */ 'i', `combiner`],
					[/* text */ 't', `.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `method handle which incorporates the specified argument folding logic`]
			]
		]],
		[/* method */ 'foldArguments(java.lang.invoke.MethodHandle,java.lang.invoke.MethodHandle)', [
			[/* method description */
				[/* text */ 't', `Adapts a target method handle by pre-processing
 some of its arguments, and then calling the target with
 the result of the pre-processing, inserted into the original
 sequence of arguments.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The pre-processing is performed by `],
					[/* inline code block */ 'i', `combiner`],
					[/* text */ 't', `, a second method handle.
 Of the arguments passed to the adapter, the first `],
					[/* inline code block */ 'i', `N`],
					[/* text */ 't', ` arguments
 are copied to the combiner, which is then called.
 (Here, `],
					[/* inline code block */ 'i', `N`],
					[/* text */ 't', ` is defined as the parameter count of the combiner.)
 After this, control passes to the target, with any result
 from the combiner inserted before the original `],
					[/* inline code block */ 'i', `N`],
					[/* text */ 't', ` incoming
 arguments.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the combiner returns a value, the first parameter type of the target
 must be identical with the return type of the combiner, and the next
 `],
					[/* inline code block */ 'i', `N`],
					[/* text */ 't', ` parameter types of the target must exactly match the parameters
 of the combiner.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the combiner has a void return, no result will be inserted,
 and the first `],
					[/* inline code block */ 'i', `N`],
					[/* text */ 't', ` parameter types of the target
 must exactly match the parameters of the combiner.
 `]
				]],
				[/* block */ 'b', `
 The resulting adapter is the same type as the target, except that the
 first parameter type is dropped,
 if it corresponds to the result of the combiner.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 (Note that `],
					[/* reference */ 'r', `#dropArguments(java.lang.invoke.MethodHandle,int,java.util.List)`, `dropArguments`],
					[/* text */ 't', ` can be used to remove any arguments
 that either the combiner or the target does not wish to receive.
 If some of the incoming arguments are destined only for the combiner,
 consider using `],
					[/* reference */ 'r', `java.lang.invoke.MethodHandle#asCollector(java.lang.Class,int)`, `asCollector`],
					[/* text */ 't', ` instead, since those
 arguments will not need to be live on the stack on entry to the
 target.)
 `]
				]],
				[/* block */ 'b', `Example:`],
				[/* blockquote */ 'q', [
					[/* code block */ 'c', [
						[/* inline code block */ 'i', `import static java.lang.invoke.MethodHandles.*;
import static java.lang.invoke.MethodType.*;
...
MethodHandle trace = publicLookup().findVirtual(java.io.PrintStream.class,
  "println", methodType(void.class, String.class))
    .bindTo(System.out);
MethodHandle cat = lookup().findVirtual(String.class,
  "concat", methodType(String.class, String.class));
assertEquals("boojum", (String) cat.invokeExact("boo", "jum"));
MethodHandle catTrace = foldArguments(cat, trace);
// also prints "boo":
assertEquals("boojum", (String) catTrace.invokeExact("boo", "jum"));`]
					]]
				]],
				[/* text */ 't', `
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `Here is pseudocode for the resulting adapter. In the code, `],
					[/* inline code block */ 'i', `T`],
					[/* text */ 't', `
 represents the result type of the `],
					[/* inline code block */ 'i', `target`],
					[/* text */ 't', ` and resulting adapter.
 `],
					[/* inline code block */ 'i', `V`],
					[/* text */ 't', `/`],
					[/* inline code block */ 'i', `v`],
					[/* text */ 't', ` represent the type and value of the parameter and argument
 of `],
					[/* inline code block */ 'i', `target`],
					[/* text */ 't', ` that precedes the folding position; `],
					[/* inline code block */ 'i', `V`],
					[/* text */ 't', ` also is
 the result type of the `],
					[/* inline code block */ 'i', `combiner`],
					[/* text */ 't', `. `],
					[/* inline code block */ 'i', `A`],
					[/* text */ 't', `/`],
					[/* inline code block */ 'i', `a`],
					[/* text */ 't', ` denote the
 types and values of the `],
					[/* inline code block */ 'i', `N`],
					[/* text */ 't', ` parameters and arguments at the folding
 position. `],
					[/* inline code block */ 'i', `B`],
					[/* text */ 't', `/`],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', ` represent the types and values of the
 `],
					[/* inline code block */ 'i', `target`],
					[/* text */ 't', ` parameters and arguments that follow the folded parameters
 and arguments.
 `]
				]],
				[/* blockquote */ 'q', [
					[/* code block */ 'c', [
						[/* inline code block */ 'i', `// there are N arguments in A...
 T target(V, A[N]..., B...);
 V combiner(A...);
 T adapter(A... a, B... b) {
   V v = combiner(a...);
   return target(v, a..., b...);
 }
 // and if the combiner has a void return:
 T target2(A[N]..., B...);
 void combiner2(A...);
 T adapter2(A... a, B... b) {
   combiner2(a...);
   return target2(a..., b...);
 }`]
					]]
				]],
				[/* text */ 't', `
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `
 `],
					[/* text */ 't', `Note:`],
					[/* text */ 't', ` The resulting adapter is never a `],
					[/* reference */ 'r', `java.lang.invoke.MethodHandle#asVarargsCollector(java.lang.Class)`, `variable-arity method handle`],
					[/* text */ 't', `, even if the original target method handle was.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'target', [/* parameter description */
					[/* text */ 't', `the method handle to invoke after arguments are combined`]
				]],
				[/* parameter */ 'combiner', [/* parameter description */
					[/* text */ 't', `method handle to call initially on the incoming arguments`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if either argument is null`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `combiner`],
					[/* text */ 't', `'s return type
          is non-void and not the same as the first argument type of
          the target, or if the initial `],
					[/* inline code block */ 'i', `N`],
					[/* text */ 't', ` argument types
          of the target
          (skipping one matching the `],
					[/* inline code block */ 'i', `combiner`],
					[/* text */ 't', `'s return type)
          are not identical with the argument types of `],
					[/* inline code block */ 'i', `combiner`]
				]]
			],
			[/* return description */
				[/* text */ 't', `method handle which incorporates the specified argument folding logic`]
			]
		]],
		[/* method */ 'guardWithTest(java.lang.invoke.MethodHandle,java.lang.invoke.MethodHandle,java.lang.invoke.MethodHandle)', [
			[/* method description */
				[/* text */ 't', `Makes a method handle which adapts a target method handle,
 by guarding it with a test, a boolean-valued method handle.
 If the guard fails, a fallback handle is called instead.
 All three method handles must have the same corresponding
 argument and return types, except that the return type
 of the test must be boolean, and the test is allowed
 to have fewer arguments than the other two method handles.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 Here is pseudocode for the resulting adapter. In the code, `],
					[/* inline code block */ 'i', `T`],
					[/* text */ 't', `
 represents the uniform result type of the three involved handles;
 `],
					[/* inline code block */ 'i', `A`],
					[/* text */ 't', `/`],
					[/* inline code block */ 'i', `a`],
					[/* text */ 't', `, the types and values of the `],
					[/* inline code block */ 'i', `target`],
					[/* text */ 't', `
 parameters and arguments that are consumed by the `],
					[/* inline code block */ 'i', `test`],
					[/* text */ 't', `; and
 `],
					[/* inline code block */ 'i', `B`],
					[/* text */ 't', `/`],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', `, those types and values of the `],
					[/* inline code block */ 'i', `target`],
					[/* text */ 't', `
 parameters and arguments that are not consumed by the `],
					[/* inline code block */ 'i', `test`],
					[/* text */ 't', `.
 `]
				]],
				[/* blockquote */ 'q', [
					[/* code block */ 'c', [
						[/* inline code block */ 'i', `boolean test(A...);
 T target(A...,B...);
 T fallback(A...,B...);
 T adapter(A... a,B... b) {
   if (test(a...))
     return target(a..., b...);
   else
     return fallback(a..., b...);
 }`]
					]]
				]],
				[/* text */ 't', `
 Note that the test arguments (`],
				[/* inline code block */ 'i', `a...`],
				[/* text */ 't', ` in the pseudocode) cannot
 be modified by execution of the test, and so are passed unchanged
 from the caller to the target or fallback as appropriate.`],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'test', [/* parameter description */
					[/* text */ 't', `method handle used for test, must return boolean`]
				]],
				[/* parameter */ 'target', [/* parameter description */
					[/* text */ 't', `method handle to call if test passes`]
				]],
				[/* parameter */ 'fallback', [/* parameter description */
					[/* text */ 't', `method handle to call if test fails`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if any argument is null`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `test`],
					[/* text */ 't', ` does not return boolean,
          or if all three method types do not match (with the return
          type of `],
					[/* inline code block */ 'i', `test`],
					[/* text */ 't', ` changed to match that of the target).`]
				]]
			],
			[/* return description */
				[/* text */ 't', `method handle which incorporates the specified if/then/else logic`]
			]
		]],
		[/* method */ 'identity(java.lang.Class)', [
			[/* method description */
				[/* text */ 't', `Produces a method handle which returns its sole argument when invoked.`]
			],
			[/* parameters */
				[/* parameter */ 'type', [/* parameter description */
					[/* text */ 't', `the type of the sole parameter and return value of the desired method handle`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the argument is null`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the given type is `],
					[/* inline code block */ 'i', `void.class`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a unary method handle which accepts and returns the given type`]
			]
		]],
		[/* method */ 'insertArguments(java.lang.invoke.MethodHandle,int,java.lang.Object...)', [
			[/* method description */
				[/* text */ 't', `Provides a target method handle with one or more `],
				[/* text */ 't', `bound arguments`],
				[/* text */ 't', `
 in advance of the method handle's invocation.
 The formal parameters to the target corresponding to the bound
 arguments are called `],
				[/* text */ 't', `bound parameters`],
				[/* text */ 't', `.
 Returns a new method handle which saves away the bound arguments.
 When it is invoked, it receives arguments for any non-bound parameters,
 binds the saved arguments to their corresponding parameters,
 and calls the original target.
 `],
				[/* block */ 'b', `
 The type of the new method handle will drop the types for the bound
 parameters from the original target type, since the new method handle
 will no longer require those arguments to be supplied by its callers.
 `],
				[/* block */ 'b', `
 Each given argument object must match the corresponding bound parameter type.
 If a bound parameter type is a primitive, the argument object
 must be a wrapper, and will be unboxed to produce the primitive value.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The `],
					[/* inline code block */ 'i', `pos`],
					[/* text */ 't', ` argument selects which parameters are to be bound.
 It may range between zero and `],
					[/* text */ 't', `N-L`],
					[/* text */ 't', ` (inclusively),
 where `],
					[/* text */ 't', `N`],
					[/* text */ 't', ` is the arity of the target method handle
 and `],
					[/* text */ 't', `L`],
					[/* text */ 't', ` is the length of the values array.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 `],
					[/* text */ 't', `Note:`],
					[/* text */ 't', ` The resulting adapter is never a `],
					[/* reference */ 'r', `java.lang.invoke.MethodHandle#asVarargsCollector(java.lang.Class)`, `variable-arity method handle`],
					[/* text */ 't', `, even if the original target method handle was.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'target', [/* parameter description */
					[/* text */ 't', `the method handle to invoke after the argument is inserted`]
				]],
				[/* parameter */ 'pos', [/* parameter description */
					[/* text */ 't', `where to insert the argument (zero for the first)`]
				]],
				[/* parameter */ 'values', [/* parameter description */
					[/* text */ 't', `the series of arguments to insert`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the target or the `],
					[/* inline code block */ 'i', `values`],
					[/* text */ 't', ` array is null`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if (@code pos) is less than `],
					[/* inline code block */ 'i', `0`],
					[/* text */ 't', ` or greater than
         `],
					[/* inline code block */ 'i', `N - L`],
					[/* text */ 't', ` where `],
					[/* inline code block */ 'i', `N`],
					[/* text */ 't', ` is the arity of the target method handle and `],
					[/* inline code block */ 'i', `L`],
					[/* text */ 't', `
         is the length of the values array.`]
				]],
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if an argument does not match the corresponding bound parameter
         type.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a method handle which inserts an additional argument,
         before calling the original method handle`]
			]
		]],
		[/* method */ 'invoker(java.lang.invoke.MethodType)', [
			[/* method description */
				[/* text */ 't', `Produces a special `],
				[/* text */ 't', `invoker method handle`],
				[/* text */ 't', ` which can be used to
 invoke any method handle compatible with the given type, as if by `],
				[/* reference */ 'r', `java.lang.invoke.MethodHandle#invoke(java.lang.Object...)`, `invoke`],
				[/* text */ 't', `.
 The resulting invoker will have a type which is
 exactly equal to the desired type, except that it will accept
 an additional leading argument of type `],
				[/* inline code block */ 'i', `MethodHandle`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 Before invoking its target, if the target differs from the expected type,
 the invoker will apply reference casts as
 necessary and box, unbox, or widen primitive values, as if by `],
					[/* reference */ 'r', `java.lang.invoke.MethodHandle#asType(java.lang.invoke.MethodType)`, `asType`],
					[/* text */ 't', `.
 Similarly, the return value will be converted as necessary.
 If the target is a `],
					[/* reference */ 'r', `java.lang.invoke.MethodHandle#asVarargsCollector(java.lang.Class)`, `variable arity method handle`],
					[/* text */ 't', `,
 the required arity conversion will be made, again as if by `],
					[/* reference */ 'r', `java.lang.invoke.MethodHandle#asType(java.lang.invoke.MethodType)`, `asType`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method is equivalent to the following code (though it may be more efficient):
 `],
					[/* inline code block */ 'i', `publicLookup().findVirtual(MethodHandle.class, "invoke", type)`],
					[/* text */ 't', `
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 `],
					[/* text */ 't', `Discussion:`],
					[/* text */ 't', `
 A `],
					[/* reference */ 'r', `java.lang.invoke.MethodType#genericMethodType(int,boolean)`, `general method type`],
					[/* text */ 't', ` is one which
 mentions only `],
					[/* inline code block */ 'i', `Object`],
					[/* text */ 't', ` arguments and return values.
 An invoker for such a type is capable of calling any method handle
 of the same arity as the general type.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `(Note:  The invoker method is not available via the Core Reflection API.
 An attempt to call `],
					[/* reference */ 'r', `java.lang.reflect.Method#invoke(java.lang.Object,java.lang.Object...)`, `java.lang.reflect.Method.invoke`],
					[/* text */ 't', `
 on the declared `],
					[/* inline code block */ 'i', `invokeExact`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `invoke`],
					[/* text */ 't', ` method will raise an
 `],
					[/* reference */ 'r', `java.lang.UnsupportedOperationException`, `UnsupportedOperationException`],
					[/* text */ 't', `.)`]
				]],
				[/* block */ 'b', `
 This method throws no reflective or security exceptions.`]
			],
			[/* parameters */
				[/* parameter */ 'type', [/* parameter description */
					[/* text */ 't', `the desired target type`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the resulting method handle's type would have
          `],
					[/* reference */ 'r', `java.lang.invoke.MethodHandle#maxarity`, `too many parameters`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a method handle suitable for invoking any method handle convertible to the given type`]
			]
		]],
		[/* method */ 'iteratedLoop(java.lang.invoke.MethodHandle,java.lang.invoke.MethodHandle,java.lang.invoke.MethodHandle)', [
			[/* method description */
				[/* text */ 't', `Constructs a loop that ranges over the values produced by an `],
				[/* inline code block */ 'i', `Iterator<T>`],
				[/* text */ 't', `.
 This is a convenience wrapper for the `],
				[/* reference */ 'r', `#loop(java.lang.invoke.MethodHandle%5B%5D...)`, `generic loop combinator`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The iterator itself will be determined by the evaluation of the `],
					[/* inline code block */ 'i', `iterator`],
					[/* text */ 't', ` handle.
 Each value it produces will be stored in a loop iteration variable of type `],
					[/* inline code block */ 'i', `T`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the `],
					[/* inline code block */ 'i', `body`],
					[/* text */ 't', ` handle returns a non-`],
					[/* inline code block */ 'i', `void`],
					[/* text */ 't', ` type `],
					[/* inline code block */ 'i', `V`],
					[/* text */ 't', `, a leading loop iteration variable
 of that type is also present.  This variable is initialized using the optional `],
					[/* inline code block */ 'i', `init`],
					[/* text */ 't', ` handle,
 or to the `],
					[/* reference */ 'r', `#empty(java.lang.invoke.MethodType)`, `default value`],
					[/* text */ 't', ` of type `],
					[/* inline code block */ 'i', `V`],
					[/* text */ 't', ` if that handle is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 In each iteration, the iteration variables are passed to an invocation of the `],
					[/* inline code block */ 'i', `body`],
					[/* text */ 't', ` handle.
 A non-`],
					[/* inline code block */ 'i', `void`],
					[/* text */ 't', ` value returned from the body (of type `],
					[/* inline code block */ 'i', `V`],
					[/* text */ 't', `) updates the leading
 iteration variable.
 The result of the loop handle execution will be the final `],
					[/* inline code block */ 'i', `V`],
					[/* text */ 't', ` value of that variable
 (or `],
					[/* inline code block */ 'i', `void`],
					[/* text */ 't', ` if there is no `],
					[/* inline code block */ 'i', `V`],
					[/* text */ 't', ` variable).
 `]
				]],
				[/* block */ 'b', `
 The following rules hold for the argument handles:`],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `The `],
						[/* inline code block */ 'i', `body`],
						[/* text */ 't', ` handle must not be `],
						[/* inline code block */ 'i', `null`],
						[/* text */ 't', `; its type must be of the form
 `],
						[/* inline code block */ 'i', `(V T A...)V`],
						[/* text */ 't', `, where `],
						[/* inline code block */ 'i', `V`],
						[/* text */ 't', ` is non-`],
						[/* inline code block */ 'i', `void`],
						[/* text */ 't', `, or else `],
						[/* inline code block */ 'i', `(T A...)void`],
						[/* text */ 't', `.
 (In the `],
						[/* inline code block */ 'i', `void`],
						[/* text */ 't', ` case, we assign the type `],
						[/* inline code block */ 'i', `void`],
						[/* text */ 't', ` to the name `],
						[/* inline code block */ 'i', `V`],
						[/* text */ 't', `,
 and we will write `],
						[/* inline code block */ 'i', `(V T A...)V`],
						[/* text */ 't', ` with the understanding that a `],
						[/* inline code block */ 'i', `void`],
						[/* text */ 't', ` type `],
						[/* inline code block */ 'i', `V`],
						[/* text */ 't', `
 is quietly dropped from the parameter list, leaving `],
						[/* inline code block */ 'i', `(T A...)V`],
						[/* text */ 't', `.)
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `The parameter list `],
						[/* inline code block */ 'i', `(V T A...)`],
						[/* text */ 't', ` of the body contributes to a list
 of types called the `],
						[/* text */ 't', `internal parameter list`],
						[/* text */ 't', `.
 It will constrain the parameter lists of the other loop parts.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `As a special case, if the body contributes only `],
						[/* inline code block */ 'i', `V`],
						[/* text */ 't', ` and `],
						[/* inline code block */ 'i', `T`],
						[/* text */ 't', ` types,
 with no additional `],
						[/* inline code block */ 'i', `A`],
						[/* text */ 't', ` types, then the internal parameter list is extended by
 the argument types `],
						[/* inline code block */ 'i', `A...`],
						[/* text */ 't', ` of the `],
						[/* inline code block */ 'i', `iterator`],
						[/* text */ 't', ` handle; if it is `],
						[/* inline code block */ 'i', `null`],
						[/* text */ 't', ` the
 single type `],
						[/* inline code block */ 'i', `Iterable`],
						[/* text */ 't', ` is added and constitutes the `],
						[/* inline code block */ 'i', `A...`],
						[/* text */ 't', ` list.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `If the iteration variable types `],
						[/* inline code block */ 'i', `(V T)`],
						[/* text */ 't', ` are dropped from the internal parameter list, the resulting shorter
 list `],
						[/* inline code block */ 'i', `(A...)`],
						[/* text */ 't', ` is called the `],
						[/* text */ 't', `external parameter list`],
						[/* text */ 't', `.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `The body return type `],
						[/* inline code block */ 'i', `V`],
						[/* text */ 't', `, if non-`],
						[/* inline code block */ 'i', `void`],
						[/* text */ 't', `, determines the type of an
 additional state variable of the loop.
 The body must both accept a leading parameter and return a value of this type `],
						[/* inline code block */ 'i', `V`],
						[/* text */ 't', `.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `If `],
						[/* inline code block */ 'i', `init`],
						[/* text */ 't', ` is non-`],
						[/* inline code block */ 'i', `null`],
						[/* text */ 't', `, it must have return type `],
						[/* inline code block */ 'i', `V`],
						[/* text */ 't', `.
 Its parameter list (of some `],
						[/* reference */ 'r', `java.lang.invoke.MethodHandles#astar`, `form (A*)`],
						[/* text */ 't', `) must be
 `],
						[/* reference */ 'r', `java.lang.invoke.MethodHandles#effid`, `effectively identical`],
						[/* text */ 't', `
 to the external parameter list `],
						[/* inline code block */ 'i', `(A...)`],
						[/* text */ 't', `.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `If `],
						[/* inline code block */ 'i', `init`],
						[/* text */ 't', ` is `],
						[/* inline code block */ 'i', `null`],
						[/* text */ 't', `, the loop variable will be initialized to its
 `],
						[/* reference */ 'r', `#empty(java.lang.invoke.MethodType)`, `default value`],
						[/* text */ 't', `.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `If the `],
						[/* inline code block */ 'i', `iterator`],
						[/* text */ 't', ` handle is non-`],
						[/* inline code block */ 'i', `null`],
						[/* text */ 't', `, it must have the return
 type `],
						[/* inline code block */ 'i', `java.util.Iterator`],
						[/* text */ 't', ` or a subtype thereof.
 The iterator it produces when the loop is executed will be assumed
 to yield values which can be converted to type `],
						[/* inline code block */ 'i', `T`],
						[/* text */ 't', `.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `The parameter list of an `],
						[/* inline code block */ 'i', `iterator`],
						[/* text */ 't', ` that is non-`],
						[/* inline code block */ 'i', `null`],
						[/* text */ 't', ` (of some form `],
						[/* inline code block */ 'i', `(A*)`],
						[/* text */ 't', `) must be
 effectively identical to the external parameter list `],
						[/* inline code block */ 'i', `(A...)`],
						[/* text */ 't', `.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `If `],
						[/* inline code block */ 'i', `iterator`],
						[/* text */ 't', ` is `],
						[/* inline code block */ 'i', `null`],
						[/* text */ 't', ` it defaults to a method handle which behaves
 like `],
						[/* reference */ 'r', `java.lang.Iterable#iterator()`, `Iterable.iterator()`],
						[/* text */ 't', `.  In that case, the internal parameter list
 `],
						[/* inline code block */ 'i', `(V T A...)`],
						[/* text */ 't', ` must have at least one `],
						[/* inline code block */ 'i', `A`],
						[/* text */ 't', ` type, and the default iterator
 handle parameter is adjusted to accept the leading `],
						[/* inline code block */ 'i', `A`],
						[/* text */ 't', ` type, as if by
 the `],
						[/* reference */ 'r', `java.lang.invoke.MethodHandle#asType(java.lang.invoke.MethodType)`, `asType`],
						[/* text */ 't', ` conversion method.
 The leading `],
						[/* inline code block */ 'i', `A`],
						[/* text */ 't', ` type must be `],
						[/* inline code block */ 'i', `Iterable`],
						[/* text */ 't', ` or a subtype thereof.
 This conversion step, done at loop construction time, must not throw a `],
						[/* inline code block */ 'i', `WrongMethodTypeException`],
						[/* text */ 't', `.
 `]
					]]
				]],
				[/* text */ 't', `
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `
 The type `],
					[/* inline code block */ 'i', `T`],
					[/* text */ 't', ` may be either a primitive or reference.
 Since type `],
					[/* inline code block */ 'i', `Iterator<T>`],
					[/* text */ 't', ` is erased in the method handle representation to the raw type `],
					[/* inline code block */ 'i', `Iterator`],
					[/* text */ 't', `,
 the `],
					[/* inline code block */ 'i', `iteratedLoop`],
					[/* text */ 't', ` combinator adjusts the leading argument type for `],
					[/* inline code block */ 'i', `body`],
					[/* text */ 't', ` to `],
					[/* inline code block */ 'i', `Object`],
					[/* text */ 't', `
 as if by the `],
					[/* reference */ 'r', `java.lang.invoke.MethodHandle#asType(java.lang.invoke.MethodType)`, `asType`],
					[/* text */ 't', ` conversion method.
 Therefore, if an iterator of the wrong type appears as the loop is executed, runtime exceptions may occur
 as the result of dynamic conversions performed by `],
					[/* reference */ 'r', `java.lang.invoke.MethodHandle#asType(java.lang.invoke.MethodType)`, `MethodHandle.asType(MethodType)`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', `
 The resulting loop handle's result type and parameter signature are determined as follows:`],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `The loop handle's result type is the result type `],
						[/* inline code block */ 'i', `V`],
						[/* text */ 't', ` of the body.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `The loop handle's parameter types are the types `],
						[/* inline code block */ 'i', `(A...)`],
						[/* text */ 't', `,
 from the external parameter list.
 `]
					]]
				]],
				[/* text */ 't', `
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `
 Here is pseudocode for the resulting loop handle. In the code, `],
					[/* inline code block */ 'i', `V`],
					[/* text */ 't', `/`],
					[/* inline code block */ 'i', `v`],
					[/* text */ 't', ` represent the type / value of
 the loop variable as well as the result type of the loop; `],
					[/* inline code block */ 'i', `T`],
					[/* text */ 't', `/`],
					[/* inline code block */ 'i', `t`],
					[/* text */ 't', `, that of the elements of the
 structure the loop iterates over, and `],
					[/* inline code block */ 'i', `A...`],
					[/* text */ 't', `/`],
					[/* inline code block */ 'i', `a...`],
					[/* text */ 't', ` represent arguments passed to the loop.
 `]
				]],
				[/* blockquote */ 'q', [
					[/* code block */ 'c', [
						[/* inline code block */ 'i', `Iterator<T> iterator(A...);  // defaults to Iterable::iterator
 V init(A...);
 V body(V,T,A...);
 V iteratedLoop(A... a...) {
   Iterator<T> it = iterator(a...);
   V v = init(a...);
   while (it.hasNext()) {
     T t = it.next();
     v = body(v, t, a...);
   }
   return v;
 }`]
					]]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'iterator', [/* parameter description */
					[/* text */ 't', `an optional handle to return the iterator to start the loop.
                 If non-`],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `, the handle must return `],
					[/* reference */ 'r', `java.util.Iterator`, `Iterator`],
					[/* text */ 't', ` or a subtype.
                 See above for other constraints.`]
				]],
				[/* parameter */ 'init', [/* parameter description */
					[/* text */ 't', `optional initializer, providing the initial value of the loop variable.
             May be `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `, implying a default initial value.  See above for other constraints.`]
				]],
				[/* parameter */ 'body', [/* parameter description */
					[/* text */ 't', `body of the loop, which may not be `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.
             It controls the loop parameters and result type in the standard case (see above for details).
             It must accept its own return type (if non-void) plus a `],
					[/* inline code block */ 'i', `T`],
					[/* text */ 't', ` parameter (for the iterated values),
             and may accept any number of additional types.
             See above for other constraints.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `body`],
					[/* text */ 't', ` handle is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if any argument violates the above requirements.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a method handle embodying the iteration loop functionality.`]
			]
		]],
		[/* method */ 'loop(java.lang.invoke.MethodHandle[]...)', [
			[/* method description */
				[/* text */ 't', `Constructs a method handle representing a loop with several loop variables that are updated and checked upon each
 iteration. Upon termination of the loop due to one of the predicates, a corresponding finalizer is run and
 delivers the loop's result, which is the return value of the resulting handle.
 `],
				[/* block */ 'b', `iteration variable`],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `init:`],
						[/* text */ 't', ` Before the loop executes, the initialization of an iteration variable `],
						[/* inline code block */ 'i', `v`],
						[/* text */ 't', ` of type `],
						[/* inline code block */ 'i', `V`],
						[/* text */ 't', `.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `step:`],
						[/* text */ 't', ` When a clause executes, an update step for the iteration variable `],
						[/* inline code block */ 'i', `v`],
						[/* text */ 't', `.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `pred:`],
						[/* text */ 't', ` When a clause executes, a predicate execution to test for loop exit.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `fini:`],
						[/* text */ 't', ` If a clause causes a loop exit, a finalizer execution to compute the loop's return value.
 `]
					]]
				]],
				[/* text */ 't', `
 The full sequence of all iteration variable types, in clause order, will be notated as `],
				[/* inline code block */ 'i', `(V...)`],
				[/* text */ 't', `.
 The values themselves will be `],
				[/* inline code block */ 'i', `(v...)`],
				[/* text */ 't', `.  When we speak of "parameter lists", we will usually
 be referring to types, but in some contexts (describing execution) the lists will be of actual values.
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', `
 Some of these clause parts may be omitted according to certain rules, and useful default behavior is provided in
 this case. See below for a detailed description.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 `],
					[/* text */ 't', `Parameters optional everywhere:`],
					[/* text */ 't', `
 Each clause function is allowed but not required to accept a parameter for each iteration variable `],
					[/* inline code block */ 'i', `v`],
					[/* text */ 't', `.
 As an exception, the init functions cannot take any `],
					[/* inline code block */ 'i', `v`],
					[/* text */ 't', ` parameters,
 because those values are not yet computed when the init functions are executed.
 Any clause function may neglect to take any trailing subsequence of parameters it is entitled to take.
 In fact, any clause function may take no arguments at all.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 `],
					[/* text */ 't', `Loop parameters:`],
					[/* text */ 't', `
 A clause function may take all the iteration variable values it is entitled to, in which case
 it may also take more trailing parameters. Such extra values are called `],
					[/* text */ 't', `loop parameters`],
					[/* text */ 't', `,
 with their types and values notated as `],
					[/* inline code block */ 'i', `(A...)`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `(a...)`],
					[/* text */ 't', `.
 These become the parameters of the resulting loop handle, to be supplied whenever the loop is executed.
 (Since init functions do not accept iteration variables `],
					[/* inline code block */ 'i', `v`],
					[/* text */ 't', `, any parameter to an
 init function is automatically a loop parameter `],
					[/* inline code block */ 'i', `a`],
					[/* text */ 't', `.)
 As with iteration variables, clause functions are allowed but not required to accept loop parameters.
 These loop parameters act as loop-invariant values visible across the whole loop.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 `],
					[/* text */ 't', `Parameters visible everywhere:`],
					[/* text */ 't', `
 Each non-init clause function is permitted to observe the entire loop state, because it can be passed the full
 list `],
					[/* inline code block */ 'i', `(v... a...)`],
					[/* text */ 't', ` of current iteration variable values and incoming loop parameters.
 The init functions can observe initial pre-loop state, in the form `],
					[/* inline code block */ 'i', `(a...)`],
					[/* text */ 't', `.
 Most clause functions will not need all of this information, but they will be formally connected to it
 as if by `],
					[/* reference */ 'r', `#dropArguments(java.lang.invoke.MethodHandle,int,java.util.List)`, `dropArguments(java.lang.invoke.MethodHandle, int, java.util.List<java.lang.Class<?>>)`],
					[/* text */ 't', `.
 `],
					[/* anchor */ 'r', '#-id', `astar`, ``],
					[/* text */ 't', `
 More specifically, we shall use the notation `],
					[/* inline code block */ 'i', `(V*)`],
					[/* text */ 't', ` to express an arbitrary prefix of a full
 sequence `],
					[/* inline code block */ 'i', `(V...)`],
					[/* text */ 't', ` (and likewise for `],
					[/* inline code block */ 'i', `(v*)`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `(A*)`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `(a*)`],
					[/* text */ 't', `).
 In that notation, the general form of an init function parameter list
 is `],
					[/* inline code block */ 'i', `(A*)`],
					[/* text */ 't', `, and the general form of a non-init function parameter list is `],
					[/* inline code block */ 'i', `(V*)`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `(V... A*)`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 `],
					[/* text */ 't', `Checking clause structure:`],
					[/* text */ 't', `
 Given a set of clauses, there is a number of checks and adjustments performed to connect all the parts of the
 loop. They are spelled out in detail in the steps below. In these steps, every occurrence of the word "must"
 corresponds to a place where `],
					[/* reference */ 'r', `java.lang.IllegalArgumentException`, `IllegalArgumentException`],
					[/* text */ 't', ` will be thrown if the required constraint is not
 met by the inputs to the loop combinator.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 `],
					[/* text */ 't', `Effectively identical sequences:`],
					[/* text */ 't', `
 `],
					[/* anchor */ 'r', '#-id', `effid`, ``],
					[/* text */ 't', `
 A parameter list `],
					[/* inline code block */ 'i', `A`],
					[/* text */ 't', ` is defined to be `],
					[/* text */ 't', `effectively identical`],
					[/* text */ 't', ` to another parameter list `],
					[/* inline code block */ 'i', `B`],
					[/* text */ 't', `
 if `],
					[/* inline code block */ 'i', `A`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `B`],
					[/* text */ 't', ` are identical, or if `],
					[/* inline code block */ 'i', `A`],
					[/* text */ 't', ` is shorter and is identical with a proper prefix of `],
					[/* inline code block */ 'i', `B`],
					[/* text */ 't', `.
 When speaking of an unordered set of parameter lists, we say they the set is "effectively identical"
 as a whole if the set contains a longest list, and all members of the set are effectively identical to
 that longest list.
 For example, any set of type sequences of the form `],
					[/* inline code block */ 'i', `(V*)`],
					[/* text */ 't', ` is effectively identical,
 and the same is true if more sequences of the form `],
					[/* inline code block */ 'i', `(V... A*)`],
					[/* text */ 't', ` are added.
 `]
				]],
				[/* block */ 'b', `Step 0: Determine clause structure.`],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `The clause array (of type `],
						[/* inline code block */ 'i', `MethodHandle[][]`],
						[/* text */ 't', `) must be non-`],
						[/* inline code block */ 'i', `null`],
						[/* text */ 't', ` and contain at least one element.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `The clause array may not contain `],
						[/* inline code block */ 'i', `null`],
						[/* text */ 't', `s or sub-arrays longer than four elements.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `Clauses shorter than four elements are treated as if they were padded by `],
						[/* inline code block */ 'i', `null`],
						[/* text */ 't', ` elements to length
 four. Padding takes place by appending elements to the array.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `Clauses with all `],
						[/* inline code block */ 'i', `null`],
						[/* text */ 't', `s are disregarded.
 `]
					]],
					[/* block */ 'b', `Each clause is treated as a four-tuple of functions, called "init", "step", "pred", and "fini".
 `]
				]],
				[/* text */ 't', `
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `Step 1A: Determine iteration variable types `],
					[/* inline code block */ 'i', `(V...)`],
					[/* text */ 't', `.`]
				]],
				[/* list */ 'l', [
					[/* block */ 'b', `The iteration variable type for each clause is determined using the clause's init and step return types.
 `],
					[/* block */ 'b', [
						[/* text */ 't', `If both functions are omitted, there is no iteration variable for the corresponding clause (`],
						[/* inline code block */ 'i', `void`],
						[/* text */ 't', ` is
 used as the type to indicate that). If one of them is omitted, the other's return type defines the clause's
 iteration variable type. If both are given, the common return type (they must be identical) defines the clause's
 iteration variable type.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `Form the list of return types (in clause order), omitting all occurrences of `],
						[/* inline code block */ 'i', `void`],
						[/* text */ 't', `.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `This list of types is called the "iteration variable types" (`],
						[/* inline code block */ 'i', `(V...)`],
						[/* text */ 't', `).
 `]
					]]
				]],
				[/* text */ 't', `
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `Step 1B: Determine loop parameters `],
					[/* inline code block */ 'i', `(A...)`],
					[/* text */ 't', `.`]
				]],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `Examine and collect init function parameter lists (which are of the form `],
						[/* inline code block */ 'i', `(A*)`],
						[/* text */ 't', `).
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `Examine and collect the suffixes of the step, pred, and fini parameter lists, after removing the iteration variable types.
 (They must have the form `],
						[/* inline code block */ 'i', `(V... A*)`],
						[/* text */ 't', `; collect the `],
						[/* inline code block */ 'i', `(A*)`],
						[/* text */ 't', ` parts only.)
 `]
					]],
					[/* block */ 'b', `Do not collect suffixes from step, pred, and fini parameter lists that do not begin with all the iteration variable types.
 (These types will be checked in step 2, along with all the clause function types.)
 `],
					[/* block */ 'b', `Omitted clause functions are ignored.  (Equivalently, they are deemed to have empty parameter lists.)
 `],
					[/* block */ 'b', `All of the collected parameter lists must be effectively identical.
 `],
					[/* block */ 'b', [
						[/* text */ 't', `The longest parameter list (which is necessarily unique) is called the "external parameter list" (`],
						[/* inline code block */ 'i', `(A...)`],
						[/* text */ 't', `).
 `]
					]],
					[/* block */ 'b', `If there is no such parameter list, the external parameter list is taken to be the empty sequence.
 `],
					[/* block */ 'b', `The combined list consisting of iteration variable types followed by the external parameter types is called
 the "internal parameter list".
 `]
				]],
				[/* text */ 't', `
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', `Step 1C: Determine loop return type.`],
				[/* list */ 'l', [
					[/* block */ 'b', `Examine fini function return types, disregarding omitted fini functions.
 `],
					[/* block */ 'b', [
						[/* text */ 't', `If there are no fini functions, the loop return type is `],
						[/* inline code block */ 'i', `void`],
						[/* text */ 't', `.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `Otherwise, the common return type `],
						[/* inline code block */ 'i', `R`],
						[/* text */ 't', ` of the fini functions (their return types must be identical) defines the loop return
 type.
 `]
					]]
				]],
				[/* text */ 't', `
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', `Step 1D: Check other types.`],
				[/* list */ 'l', [
					[/* block */ 'b', `There must be at least one non-omitted pred function.
 `],
					[/* block */ 'b', [
						[/* text */ 't', `Every non-omitted pred function must have a `],
						[/* inline code block */ 'i', `boolean`],
						[/* text */ 't', ` return type.
 `]
					]]
				]],
				[/* text */ 't', `
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', `Step 2: Determine parameter lists.`],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `The parameter list for the resulting loop handle will be the external parameter list `],
						[/* inline code block */ 'i', `(A...)`],
						[/* text */ 't', `.
 `]
					]],
					[/* block */ 'b', `The parameter list for init functions will be adjusted to the external parameter list.
 (Note that their parameter lists are already effectively identical to this list.)
 `],
					[/* block */ 'b', [
						[/* text */ 't', `The parameter list for every non-omitted, non-init (step, pred, and fini) function must be
 effectively identical to the internal parameter list `],
						[/* inline code block */ 'i', `(V... A...)`],
						[/* text */ 't', `.
 `]
					]]
				]],
				[/* text */ 't', `
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', `Step 3: Fill in omitted functions.`],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `If an init function is omitted, use a `],
						[/* reference */ 'r', `#empty(java.lang.invoke.MethodType)`, `default value`],
						[/* text */ 't', ` for the clause's iteration variable
 type.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `If a step function is omitted, use an `],
						[/* reference */ 'r', `#identity(java.lang.Class)`, `identity function`],
						[/* text */ 't', ` of the clause's iteration
 variable type; insert dropped argument parameters before the identity function parameter for the non-`],
						[/* inline code block */ 'i', `void`],
						[/* text */ 't', `
 iteration variables of preceding clauses. (This will turn the loop variable into a local loop invariant.)
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `If a pred function is omitted, use a constant `],
						[/* inline code block */ 'i', `true`],
						[/* text */ 't', ` function. (This will keep the loop going, as far
 as this clause is concerned.  Note that in such cases the corresponding fini function is unreachable.)
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `If a fini function is omitted, use a `],
						[/* reference */ 'r', `#empty(java.lang.invoke.MethodType)`, `default value`],
						[/* text */ 't', ` for the
 loop return type.
 `]
					]]
				]],
				[/* text */ 't', `
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', `Step 4: Fill in missing parameter types.`],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `At this point, every init function parameter list is effectively identical to the external parameter list `],
						[/* inline code block */ 'i', `(A...)`],
						[/* text */ 't', `,
 but some lists may be shorter. For every init function with a short parameter list, pad out the end of the list.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `At this point, every non-init function parameter list is effectively identical to the internal parameter
 list `],
						[/* inline code block */ 'i', `(V... A...)`],
						[/* text */ 't', `, but some lists may be shorter. For every non-init function with a short parameter list,
 pad out the end of the list.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `Argument lists are padded out by `],
						[/* reference */ 'r', `#dropArgumentsToMatch(java.lang.invoke.MethodHandle,int,java.util.List,int)`, `dropping unused trailing arguments`],
						[/* text */ 't', `.
 `]
					]]
				]],
				[/* text */ 't', `
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', `Final observations.`],
				[/* list */ 'l', [
					[/* block */ 'b', `After these steps, all clauses have been adjusted by supplying omitted functions and arguments.
 `],
					[/* block */ 'b', [
						[/* text */ 't', `All init functions have a common parameter type list `],
						[/* inline code block */ 'i', `(A...)`],
						[/* text */ 't', `, which the final loop handle will also have.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `All fini functions have a common return type `],
						[/* inline code block */ 'i', `R`],
						[/* text */ 't', `, which the final loop handle will also have.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `All non-init functions have a common parameter type list `],
						[/* inline code block */ 'i', `(V... A...)`],
						[/* text */ 't', `, of
 (non-`],
						[/* inline code block */ 'i', `void`],
						[/* text */ 't', `) iteration variables `],
						[/* inline code block */ 'i', `V`],
						[/* text */ 't', ` followed by loop parameters.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `Each pair of init and step functions agrees in their return type `],
						[/* inline code block */ 'i', `V`],
						[/* text */ 't', `.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `Each non-init function will be able to observe the current values `],
						[/* inline code block */ 'i', `(v...)`],
						[/* text */ 't', ` of all iteration variables.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `Every function will be able to observe the incoming values `],
						[/* inline code block */ 'i', `(a...)`],
						[/* text */ 't', ` of all loop parameters.
 `]
					]]
				]],
				[/* text */ 't', `
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `
 `],
					[/* text */ 't', `Example.`],
					[/* text */ 't', ` As a consequence of step 1A above, the `],
					[/* inline code block */ 'i', `loop`],
					[/* text */ 't', ` combinator has the following property:
 `]
				]],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `Given `],
						[/* inline code block */ 'i', `N`],
						[/* text */ 't', ` clauses `],
						[/* inline code block */ 'i', `Cn = {null, Sn, Pn}`],
						[/* text */ 't', ` with `],
						[/* inline code block */ 'i', `n = 1..N`],
						[/* text */ 't', `.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `Suppose predicate handles `],
						[/* inline code block */ 'i', `Pn`],
						[/* text */ 't', ` are either `],
						[/* inline code block */ 'i', `null`],
						[/* text */ 't', ` or have no parameters.
 (Only one `],
						[/* inline code block */ 'i', `Pn`],
						[/* text */ 't', ` has to be non-`],
						[/* inline code block */ 'i', `null`],
						[/* text */ 't', `.)
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `Suppose step handles `],
						[/* inline code block */ 'i', `Sn`],
						[/* text */ 't', ` have signatures `],
						[/* inline code block */ 'i', `(B1..BX)Rn`],
						[/* text */ 't', `, for some constant `],
						[/* inline code block */ 'i', `X>=N`],
						[/* text */ 't', `.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `Suppose `],
						[/* inline code block */ 'i', `Q`],
						[/* text */ 't', ` is the count of non-void types `],
						[/* inline code block */ 'i', `Rn`],
						[/* text */ 't', `, and `],
						[/* inline code block */ 'i', `(V1...VQ)`],
						[/* text */ 't', ` is the sequence of those types.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `It must be that `],
						[/* inline code block */ 'i', `Vn == Bn`],
						[/* text */ 't', ` for `],
						[/* inline code block */ 'i', `n = 1..min(X,Q)`],
						[/* text */ 't', `.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `The parameter types `],
						[/* inline code block */ 'i', `Vn`],
						[/* text */ 't', ` will be interpreted as loop-local state elements `],
						[/* inline code block */ 'i', `(V...)`],
						[/* text */ 't', `.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `Any remaining types `],
						[/* inline code block */ 'i', `BQ+1..BX`],
						[/* text */ 't', ` (if `],
						[/* inline code block */ 'i', `Q<X`],
						[/* text */ 't', `) will determine
 the resulting loop handle's parameter types `],
						[/* inline code block */ 'i', `(A...)`],
						[/* text */ 't', `.
 `]
					]]
				]],
				[/* text */ 't', `
 In this example, the loop handle parameters `],
				[/* inline code block */ 'i', `(A...)`],
				[/* text */ 't', ` were derived from the step functions,
 which is natural if most of the loop computation happens in the steps.  For some loops,
 the burden of computation might be heaviest in the pred functions, and so the pred functions
 might need to accept the loop parameter values.  For loops with complex exit logic, the fini
 functions might need to accept loop parameters, and likewise for loops with complex entry logic,
 where the init functions will need the extra parameters.  For such reasons, the rules for
 determining these parameters are as symmetric as possible, across all clause parts.
 In general, the loop parameters function as common invariant values across the whole
 loop, while the iteration variables function as common variant values, or (if there is
 no step function) as internal loop invariant temporaries.
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', `Loop execution.`],
				[/* list */ 'l', [
					[/* block */ 'b', `When the loop is called, the loop input values are saved in locals, to be passed to
 every clause function. These locals are loop invariant.
 `],
					[/* block */ 'b', [
						[/* text */ 't', `Each init function is executed in clause order (passing the external arguments `],
						[/* inline code block */ 'i', `(a...)`],
						[/* text */ 't', `)
 and the non-`],
						[/* inline code block */ 'i', `void`],
						[/* text */ 't', ` values are saved (as the iteration variables `],
						[/* inline code block */ 'i', `(v...)`],
						[/* text */ 't', `) into locals.
 These locals will be loop varying (unless their steps behave as identity functions, as noted above).
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `All function executions (except init functions) will be passed the internal parameter list, consisting of
 the non-`],
						[/* inline code block */ 'i', `void`],
						[/* text */ 't', ` iteration values `],
						[/* inline code block */ 'i', `(v...)`],
						[/* text */ 't', ` (in clause order) and then the loop inputs `],
						[/* inline code block */ 'i', `(a...)`],
						[/* text */ 't', `
 (in argument order).
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `The step and pred functions are then executed, in clause order (step before pred), until a pred function
 returns `],
						[/* inline code block */ 'i', `false`],
						[/* text */ 't', `.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `The non-`],
						[/* inline code block */ 'i', `void`],
						[/* text */ 't', ` result from a step function call is used to update the corresponding value in the
 sequence `],
						[/* inline code block */ 'i', `(v...)`],
						[/* text */ 't', ` of loop variables.
 The updated value is immediately visible to all subsequent function calls.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `If a pred function returns `],
						[/* inline code block */ 'i', `false`],
						[/* text */ 't', `, the corresponding fini function is called, and the resulting value
 (of type `],
						[/* inline code block */ 'i', `R`],
						[/* text */ 't', `) is returned from the loop as a whole.
 `]
					]],
					[/* block */ 'b', `If all the pred functions always return true, no fini function is ever invoked, and the loop cannot exit
 except by throwing an exception.
 `]
				]],
				[/* text */ 't', `
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', `Usage tips.`],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `Although each step function will receive the current values of `],
						[/* text */ 't', `all`],
						[/* text */ 't', ` the loop variables,
 sometimes a step function only needs to observe the current value of its own variable.
 In that case, the step function may need to explicitly `],
						[/* reference */ 'r', `#dropArguments(java.lang.invoke.MethodHandle,int,java.util.List)`, `drop all preceding loop variables`],
						[/* text */ 't', `.
 This will require mentioning their types, in an expression like `],
						[/* inline code block */ 'i', `dropArguments(step, 0, V0.class, ...)`],
						[/* text */ 't', `.
 `]
					]],
					[/* block */ 'b', `Loop variables are not required to vary; they can be loop invariant.  A clause can create
 a loop invariant by a suitable init function with no step, pred, or fini function.  This may be
 useful to "wire" an incoming loop argument into the step or pred function of an adjacent loop variable.
 `],
					[/* block */ 'b', [
						[/* text */ 't', `If some of the clause functions are virtual methods on an instance, the instance
 itself can be conveniently placed in an initial invariant loop "variable", using an initial clause
 like `],
						[/* inline code block */ 'i', `new MethodHandle[]{identity(ObjType.class)}`],
						[/* text */ 't', `.  In that case, the instance reference
 will be the first iteration variable value, and it will be easy to use virtual
 methods as clause parts, since all of them will take a leading instance reference matching that value.
 `]
					]]
				]],
				[/* text */ 't', `
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `
 Here is pseudocode for the resulting loop handle. As above, `],
					[/* inline code block */ 'i', `V`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `v`],
					[/* text */ 't', ` represent the types
 and values of loop variables; `],
					[/* inline code block */ 'i', `A`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `a`],
					[/* text */ 't', ` represent arguments passed to the whole loop;
 and `],
					[/* inline code block */ 'i', `R`],
					[/* text */ 't', ` is the common result type of all finalizers as well as of the resulting loop.
 `]
				]],
				[/* blockquote */ 'q', [
					[/* code block */ 'c', [
						[/* inline code block */ 'i', `V... init...(A...);
 boolean pred...(V..., A...);
 V... step...(V..., A...);
 R fini...(V..., A...);
 R loop(A... a) {
   V... v... = init...(a...);
   for (;;) {
     for ((v, p, s, f) in (v..., pred..., step..., fini...)) {
       v = s(v..., a...);
       if (!p(v..., a...)) {
         return f(v..., a...);
       }
     }
   }
 }`]
					]]
				]],
				[/* text */ 't', `
 Note that the parameter type lists `],
				[/* inline code block */ 'i', `(V...)`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `(A...)`],
				[/* text */ 't', ` have been expanded
 to their full length, even though individual clause functions may neglect to take them all.
 As noted above, missing parameters are filled in as if by `],
				[/* reference */ 'r', `#dropArgumentsToMatch(java.lang.invoke.MethodHandle,int,java.util.List,int)`, `dropArgumentsToMatch(MethodHandle, int, List, int)`],
				[/* text */ 't', `.`],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'clauses', [/* parameter description */
					[/* text */ 't', `an array of arrays (4-tuples) of `],
					[/* reference */ 'r', `java.lang.invoke.MethodHandle`, `MethodHandle`],
					[/* text */ 't', `s adhering to the rules described above.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `in case any of the constraints described above is violated.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a method handle embodying the looping behavior as defined by the arguments.`]
			]
		]],
		[/* method */ 'permuteArguments(java.lang.invoke.MethodHandle,java.lang.invoke.MethodType,int...)', [
			[/* method description */
				[/* text */ 't', `Produces a method handle which adapts the calling sequence of the
 given method handle to a new type, by reordering the arguments.
 The resulting method handle is guaranteed to report a type
 which is equal to the desired new type.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The given array controls the reordering.
 Call `],
					[/* inline code block */ 'i', `#I`],
					[/* text */ 't', ` the number of incoming parameters (the value
 `],
					[/* inline code block */ 'i', `newType.parameterCount()`],
					[/* text */ 't', `, and call `],
					[/* inline code block */ 'i', `#O`],
					[/* text */ 't', ` the number
 of outgoing parameters (the value `],
					[/* inline code block */ 'i', `target.type().parameterCount()`],
					[/* text */ 't', `).
 Then the length of the reordering array must be `],
					[/* inline code block */ 'i', `#O`],
					[/* text */ 't', `,
 and each element must be a non-negative number less than `],
					[/* inline code block */ 'i', `#I`],
					[/* text */ 't', `.
 For every `],
					[/* inline code block */ 'i', `N`],
					[/* text */ 't', ` less than `],
					[/* inline code block */ 'i', `#O`],
					[/* text */ 't', `, the `],
					[/* inline code block */ 'i', `N`],
					[/* text */ 't', `-th
 outgoing argument will be taken from the `],
					[/* inline code block */ 'i', `I`],
					[/* text */ 't', `-th incoming
 argument, where `],
					[/* inline code block */ 'i', `I`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `reorder[N]`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 No argument or return value conversions are applied.
 The type of each incoming argument, as determined by `],
					[/* inline code block */ 'i', `newType`],
					[/* text */ 't', `,
 must be identical to the type of the corresponding outgoing parameter
 or parameters in the target method handle.
 The return type of `],
					[/* inline code block */ 'i', `newType`],
					[/* text */ 't', ` must be identical to the return
 type of the original target.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The reordering array need not specify an actual permutation.
 An incoming argument will be duplicated if its index appears
 more than once in the array, and an incoming argument will be dropped
 if its index does not appear in the array.
 As in the case of `],
					[/* reference */ 'r', `#dropArguments(java.lang.invoke.MethodHandle,int,java.util.List)`, `dropArguments`],
					[/* text */ 't', `,
 incoming arguments which are not mentioned in the reordering array
 may be of any type, as determined only by `],
					[/* inline code block */ 'i', `newType`],
					[/* text */ 't', `.
 `]
				]],
				[/* blockquote */ 'q', [
					[/* code block */ 'c', [
						[/* inline code block */ 'i', `import static java.lang.invoke.MethodHandles.*;
import static java.lang.invoke.MethodType.*;
...
MethodType intfn1 = methodType(int.class, int.class);
MethodType intfn2 = methodType(int.class, int.class, int.class);
MethodHandle sub = ... (int x, int y) -> (x-y) ...;
assert(sub.type().equals(intfn2));
MethodHandle sub1 = permuteArguments(sub, intfn2, 0, 1);
MethodHandle rsub = permuteArguments(sub, intfn2, 1, 0);
assert((int)rsub.invokeExact(1, 100) == 99);
MethodHandle add = ... (int x, int y) -> (x+y) ...;
assert(add.type().equals(intfn2));
MethodHandle twice = permuteArguments(add, intfn1, 0, 0);
assert(twice.type().equals(intfn1));
assert((int)twice.invokeExact(21) == 42);`]
					]]
				]],
				[/* text */ 't', `
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `
 `],
					[/* text */ 't', `Note:`],
					[/* text */ 't', ` The resulting adapter is never a `],
					[/* reference */ 'r', `java.lang.invoke.MethodHandle#asVarargsCollector(java.lang.Class)`, `variable-arity method handle`],
					[/* text */ 't', `, even if the original target method handle was.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'target', [/* parameter description */
					[/* text */ 't', `the method handle to invoke after arguments are reordered`]
				]],
				[/* parameter */ 'newType', [/* parameter description */
					[/* text */ 't', `the expected type of the new method handle`]
				]],
				[/* parameter */ 'reorder', [/* parameter description */
					[/* text */ 't', `an index array which controls the reordering`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if any argument is null`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the index array length is not equal to
                  the arity of the target, or if any index array element
                  not a valid index for a parameter of `],
					[/* inline code block */ 'i', `newType`],
					[/* text */ 't', `,
                  or if two corresponding parameter types in
                  `],
					[/* inline code block */ 'i', `target.type()`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `newType`],
					[/* text */ 't', ` are not identical,`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a method handle which delegates to the target after it
           drops unused arguments and moves and/or duplicates the other arguments`]
			]
		]],
		[/* method */ 'spreadInvoker(java.lang.invoke.MethodType,int)', [
			[/* method description */
				[/* text */ 't', `Produces a method handle which will invoke any method handle of the
 given `],
				[/* inline code block */ 'i', `type`],
				[/* text */ 't', `, with a given number of trailing arguments replaced by
 a single trailing `],
				[/* inline code block */ 'i', `Object[]`],
				[/* text */ 't', ` array.
 The resulting invoker will be a method handle with the following
 arguments:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `a single `],
						[/* inline code block */ 'i', `MethodHandle`],
						[/* text */ 't', ` target
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `zero or more leading values (counted by `],
						[/* inline code block */ 'i', `leadingArgCount`],
						[/* text */ 't', `)
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `an `],
						[/* inline code block */ 'i', `Object[]`],
						[/* text */ 't', ` array containing trailing arguments
 `]
					]]
				]],
				[/* text */ 't', `
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The invoker will invoke its target like a call to `],
					[/* reference */ 'r', `java.lang.invoke.MethodHandle#invoke(java.lang.Object...)`, `invoke`],
					[/* text */ 't', ` with
 the indicated `],
					[/* inline code block */ 'i', `type`],
					[/* text */ 't', `.
 That is, if the target is exactly of the given `],
					[/* inline code block */ 'i', `type`],
					[/* text */ 't', `, it will behave
 like `],
					[/* inline code block */ 'i', `invokeExact`],
					[/* text */ 't', `; otherwise it behave as if `],
					[/* reference */ 'r', `java.lang.invoke.MethodHandle#asType(java.lang.invoke.MethodType)`, `asType`],
					[/* text */ 't', `
 is used to convert the target to the required `],
					[/* inline code block */ 'i', `type`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The type of the returned invoker will not be the given `],
					[/* inline code block */ 'i', `type`],
					[/* text */ 't', `, but rather
 will have all parameters except the first `],
					[/* inline code block */ 'i', `leadingArgCount`],
					[/* text */ 't', `
 replaced by a single array of type `],
					[/* inline code block */ 'i', `Object[]`],
					[/* text */ 't', `, which will be
 the final parameter.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 Before invoking its target, the invoker will spread the final array, apply
 reference casts as necessary, and unbox and widen primitive arguments.
 If, when the invoker is called, the supplied array argument does
 not have the correct number of elements, the invoker will throw
 an `],
					[/* reference */ 'r', `java.lang.IllegalArgumentException`, `IllegalArgumentException`],
					[/* text */ 't', ` instead of invoking the target.
 `]
				]],
				[/* block */ 'b', `
 This method is equivalent to the following code (though it may be more efficient):
 `],
				[/* blockquote */ 'q', [
					[/* code block */ 'c', [
						[/* inline code block */ 'i', `MethodHandle invoker = MethodHandles.invoker(type);
int spreadArgCount = type.parameterCount() - leadingArgCount;
invoker = invoker.asSpreader(Object[].class, spreadArgCount);
return invoker;`]
					]]
				]],
				[/* text */ 't', `
 This method throws no reflective or security exceptions.`],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'type', [/* parameter description */
					[/* text */ 't', `the desired target type`]
				]],
				[/* parameter */ 'leadingArgCount', [/* parameter description */
					[/* text */ 't', `number of fixed arguments, to be passed unchanged to the target`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `type`],
					[/* text */ 't', ` is null`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `leadingArgCount`],
					[/* text */ 't', ` is not in
                  the range from 0 to `],
					[/* inline code block */ 'i', `type.parameterCount()`],
					[/* text */ 't', ` inclusive,
                  or if the resulting method handle's type would have
          `],
					[/* reference */ 'r', `java.lang.invoke.MethodHandle#maxarity`, `too many parameters`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a method handle suitable for invoking any method handle of the given type`]
			]
		]],
		[/* method */ 'tableSwitch(java.lang.invoke.MethodHandle,java.lang.invoke.MethodHandle...)', [
			[/* method description */
				[/* text */ 't', `Creates a table switch method handle, which can be used to switch over a set of target
 method handles, based on a given target index, called selector.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 For a selector value of `],
					[/* inline code block */ 'i', `n`],
					[/* text */ 't', `, where `],
					[/* inline code block */ 'i', `n`],
					[/* text */ 't', ` falls in the range `],
					[/* inline code block */ 'i', `[0, N)`],
					[/* text */ 't', `,
 and where `],
					[/* inline code block */ 'i', `N`],
					[/* text */ 't', ` is the number of target method handles, the table switch method
 handle will invoke the n-th target method handle from the list of target method handles.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 For a selector value that does not fall in the range `],
					[/* inline code block */ 'i', `[0, N)`],
					[/* text */ 't', `, the table switch
 method handle will invoke the given fallback method handle.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 All method handles passed to this method must have the same type, with the additional
 requirement that the leading parameter be of type `],
					[/* inline code block */ 'i', `int`],
					[/* text */ 't', `. The leading parameter
 represents the selector.
 `]
				]],
				[/* block */ 'b', `
 Any trailing parameters present in the type will appear on the returned table switch
 method handle as well. Any arguments assigned to these parameters will be forwarded,
 together with the selector value, to the selected method handle when invoking it.`]
			],
			[/* parameters */
				[/* parameter */ 'fallback', [/* parameter description */
					[/* text */ 't', `the fallback method handle that is called when the selector is not
                 within the range `],
					[/* inline code block */ 'i', `[0, N)`],
					[/* text */ 't', `.`]
				]],
				[/* parameter */ 'targets', [/* parameter description */
					[/* text */ 't', `array of target method handles.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `fallback`],
					[/* text */ 't', `, the `],
					[/* inline code block */ 'i', `targets`],
					[/* text */ 't', ` array, or any
                              any of the elements of the `],
					[/* inline code block */ 'i', `targets`],
					[/* text */ 't', ` array are
                              `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `targets`],
					[/* text */ 't', ` array is empty, if the leading
                                  parameter of the fallback handle or any of the target
                                  handles is not `],
					[/* inline code block */ 'i', `int`],
					[/* text */ 't', `, or if the types of
                                  the fallback handle and all of target handles are
                                  not the same.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the table switch method handle.`]
			]
		]],
		[/* method */ 'throwException(java.lang.Class,java.lang.Class)', [
			[/* method description */
				[/* text */ 't', `Produces a method handle which will throw exceptions of the given `],
				[/* inline code block */ 'i', `exType`],
				[/* text */ 't', `.
 The method handle will accept a single argument of `],
				[/* inline code block */ 'i', `exType`],
				[/* text */ 't', `,
 and immediately throw it as an exception.
 The method type will nominally specify a return of `],
				[/* inline code block */ 'i', `returnType`],
				[/* text */ 't', `.
 The return type may be anything convenient:  It doesn't matter to the
 method handle's behavior, since it will never return normally.`]
			],
			[/* parameters */
				[/* parameter */ 'returnType', [/* parameter description */
					[/* text */ 't', `the return type of the desired method handle`]
				]],
				[/* parameter */ 'exType', [/* parameter description */
					[/* text */ 't', `the parameter type of the desired method handle`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if either argument is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `method handle which can throw the given exceptions`]
			]
		]],
		[/* method */ 'tryFinally(java.lang.invoke.MethodHandle,java.lang.invoke.MethodHandle)', [
			[/* method description */
				[/* text */ 't', `Makes a method handle that adapts a `],
				[/* inline code block */ 'i', `target`],
				[/* text */ 't', ` method handle by wrapping it in a `],
				[/* inline code block */ 'i', `try-finally`],
				[/* text */ 't', ` block.
 Another method handle, `],
				[/* inline code block */ 'i', `cleanup`],
				[/* text */ 't', `, represents the functionality of the `],
				[/* inline code block */ 'i', `finally`],
				[/* text */ 't', ` block. Any exception
 thrown during the execution of the `],
				[/* inline code block */ 'i', `target`],
				[/* text */ 't', ` handle will be passed to the `],
				[/* inline code block */ 'i', `cleanup`],
				[/* text */ 't', ` handle. The
 exception will be rethrown, unless `],
				[/* inline code block */ 'i', `cleanup`],
				[/* text */ 't', ` handle throws an exception first.  The
 value returned from the `],
				[/* inline code block */ 'i', `cleanup`],
				[/* text */ 't', ` handle's execution will be the result of the execution of the
 `],
				[/* inline code block */ 'i', `try-finally`],
				[/* text */ 't', ` handle.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The `],
					[/* inline code block */ 'i', `cleanup`],
					[/* text */ 't', ` handle will be passed one or two additional leading arguments.
 The first is the exception thrown during the
 execution of the `],
					[/* inline code block */ 'i', `target`],
					[/* text */ 't', ` handle, or `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` if no exception was thrown.
 The second is the result of the execution of the `],
					[/* inline code block */ 'i', `target`],
					[/* text */ 't', ` handle, or, if it throws an exception,
 a `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `, zero, or `],
					[/* inline code block */ 'i', `false`],
					[/* text */ 't', ` value of the required type is supplied as a placeholder.
 The second argument is not present if the `],
					[/* inline code block */ 'i', `target`],
					[/* text */ 't', ` handle has a `],
					[/* inline code block */ 'i', `void`],
					[/* text */ 't', ` return type.
 (Note that, except for argument type conversions, combinators represent `],
					[/* inline code block */ 'i', `void`],
					[/* text */ 't', ` values in parameter lists
 by omitting the corresponding paradoxical arguments, not by inserting `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` or zero values.)
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The `],
					[/* inline code block */ 'i', `target`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `cleanup`],
					[/* text */ 't', ` handles must have the same corresponding argument and return types, except
 that the `],
					[/* inline code block */ 'i', `cleanup`],
					[/* text */ 't', ` handle may omit trailing arguments. Also, the `],
					[/* inline code block */ 'i', `cleanup`],
					[/* text */ 't', ` handle must have one or
 two extra leading parameters:`]
				]],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `a `],
						[/* inline code block */ 'i', `Throwable`],
						[/* text */ 't', `, which will carry the exception thrown by the `],
						[/* inline code block */ 'i', `target`],
						[/* text */ 't', ` handle (if any); and
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `a parameter of the same type as the return type of both `],
						[/* inline code block */ 'i', `target`],
						[/* text */ 't', ` and `],
						[/* inline code block */ 'i', `cleanup`],
						[/* text */ 't', `, which will carry
 the result from the execution of the `],
						[/* inline code block */ 'i', `target`],
						[/* text */ 't', ` handle.
 This parameter is not present if the `],
						[/* inline code block */ 'i', `target`],
						[/* text */ 't', ` returns `],
						[/* inline code block */ 'i', `void`],
						[/* text */ 't', `.
 `]
					]]
				]],
				[/* text */ 't', `
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `
 The pseudocode for the resulting adapter looks as follows. In the code, `],
					[/* inline code block */ 'i', `V`],
					[/* text */ 't', ` represents the result type of
 the `],
					[/* inline code block */ 'i', `try/finally`],
					[/* text */ 't', ` construct; `],
					[/* inline code block */ 'i', `A`],
					[/* text */ 't', `/`],
					[/* inline code block */ 'i', `a`],
					[/* text */ 't', `, the types and values of arguments to the resulting
 handle consumed by the cleanup; and `],
					[/* inline code block */ 'i', `B`],
					[/* text */ 't', `/`],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', `, those of arguments to the resulting handle discarded by
 the cleanup.
 `]
				]],
				[/* blockquote */ 'q', [
					[/* code block */ 'c', [
						[/* inline code block */ 'i', `V target(A..., B...);
 V cleanup(Throwable, V, A...);
 V adapter(A... a, B... b) {
   V result = (zero value for V);
   Throwable throwable = null;
   try {
     result = target(a..., b...);
   } catch (Throwable t) {
     throwable = t;
     throw t;
   } finally {
     result = cleanup(throwable, result, a...);
   }
   return result;
 }`]
					]]
				]],
				[/* text */ 't', `
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `
 Note that the saved arguments (`],
					[/* inline code block */ 'i', `a...`],
					[/* text */ 't', ` in the pseudocode) cannot
 be modified by execution of the target, and so are passed unchanged
 from the caller to the cleanup, if it is invoked.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The target and cleanup must return the same type, even if the cleanup
 always throws.
 To create such a throwing cleanup, compose the cleanup logic
 with `],
					[/* reference */ 'r', `#throwException(java.lang.Class,java.lang.Class)`, `throwException`],
					[/* text */ 't', `,
 in order to create a method handle of the correct return type.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 Note that `],
					[/* inline code block */ 'i', `tryFinally`],
					[/* text */ 't', ` never converts exceptions into normal returns.
 In rare cases where exceptions must be converted in that way, first wrap
 the target with `],
					[/* reference */ 'r', `#catchException(java.lang.invoke.MethodHandle,java.lang.Class,java.lang.invoke.MethodHandle)`, `catchException(MethodHandle, Class, MethodHandle)`],
					[/* text */ 't', `
 to capture an outgoing exception, and then wrap with `],
					[/* inline code block */ 'i', `tryFinally`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 It is recommended that the first parameter type of `],
					[/* inline code block */ 'i', `cleanup`],
					[/* text */ 't', ` be
 declared `],
					[/* inline code block */ 'i', `Throwable`],
					[/* text */ 't', ` rather than a narrower subtype.  This ensures
 `],
					[/* inline code block */ 'i', `cleanup`],
					[/* text */ 't', ` will always be invoked with whatever exception that
 `],
					[/* inline code block */ 'i', `target`],
					[/* text */ 't', ` throws.  Declaring a narrower type may result in a
 `],
					[/* inline code block */ 'i', `ClassCastException`],
					[/* text */ 't', ` being thrown by the `],
					[/* inline code block */ 'i', `try-finally`],
					[/* text */ 't', `
 handle if the type of the exception thrown by `],
					[/* inline code block */ 'i', `target`],
					[/* text */ 't', ` is not
 assignable to the first parameter type of `],
					[/* inline code block */ 'i', `cleanup`],
					[/* text */ 't', `.  Note that
 various exception types of `],
					[/* inline code block */ 'i', `VirtualMachineError`],
					[/* text */ 't', `,
 `],
					[/* inline code block */ 'i', `LinkageError`],
					[/* text */ 't', `, and `],
					[/* inline code block */ 'i', `RuntimeException`],
					[/* text */ 't', ` can in principle be
 thrown by almost any kind of Java code, and a finally clause that
 catches (say) only `],
					[/* inline code block */ 'i', `IOException`],
					[/* text */ 't', ` would mask any of the others
 behind a `],
					[/* inline code block */ 'i', `ClassCastException`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'target', [/* parameter description */
					[/* text */ 't', `the handle whose execution is to be wrapped in a `],
					[/* inline code block */ 'i', `try`],
					[/* text */ 't', ` block.`]
				]],
				[/* parameter */ 'cleanup', [/* parameter description */
					[/* text */ 't', `the handle that is invoked in the finally block.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if any argument is null`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `cleanup`],
					[/* text */ 't', ` does not accept
          the required leading arguments, or if the method handle types do
          not match in their return types and their
          corresponding trailing parameters`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a method handle embodying the `],
				[/* inline code block */ 'i', `try-finally`],
				[/* text */ 't', ` block composed of the two arguments.`]
			]
		]],
		[/* method */ 'varHandleExactInvoker(java.lang.invoke.VarHandle.AccessMode,java.lang.invoke.MethodType)', [
			[/* method description */
				[/* text */ 't', `Produces a special `],
				[/* text */ 't', `invoker method handle`],
				[/* text */ 't', ` which can be used to
 invoke a signature-polymorphic access mode method on any VarHandle whose
 associated access mode type is compatible with the given type.
 The resulting invoker will have a type which is exactly equal to the
 desired given type, except that it will accept an additional leading
 argument of type `],
				[/* inline code block */ 'i', `VarHandle`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'accessMode', [/* parameter description */
					[/* text */ 't', `the VarHandle access mode`]
				]],
				[/* parameter */ 'type', [/* parameter description */
					[/* text */ 't', `the desired target type`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a method handle suitable for invoking an access mode method of
         any VarHandle whose access mode type is of the given type.`]
			]
		]],
		[/* method */ 'varHandleInvoker(java.lang.invoke.VarHandle.AccessMode,java.lang.invoke.MethodType)', [
			[/* method description */
				[/* text */ 't', `Produces a special `],
				[/* text */ 't', `invoker method handle`],
				[/* text */ 't', ` which can be used to
 invoke a signature-polymorphic access mode method on any VarHandle whose
 associated access mode type is compatible with the given type.
 The resulting invoker will have a type which is exactly equal to the
 desired given type, except that it will accept an additional leading
 argument of type `],
				[/* inline code block */ 'i', `VarHandle`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 Before invoking its target, if the access mode type differs from the
 desired given type, the invoker will apply reference casts as necessary
 and box, unbox, or widen primitive values, as if by
 `],
					[/* reference */ 'r', `java.lang.invoke.MethodHandle#asType(java.lang.invoke.MethodType)`, `asType`],
					[/* text */ 't', `.  Similarly, the return value will be
 converted as necessary.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method is equivalent to the following code (though it may be more
 efficient): `],
					[/* inline code block */ 'i', `publicLookup().findVirtual(VarHandle.class, accessMode.name(), type)`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'accessMode', [/* parameter description */
					[/* text */ 't', `the VarHandle access mode`]
				]],
				[/* parameter */ 'type', [/* parameter description */
					[/* text */ 't', `the desired target type`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a method handle suitable for invoking an access mode method of
         any VarHandle whose access mode type is convertible to the given
         type.`]
			]
		]],
		[/* method */ 'whileLoop(java.lang.invoke.MethodHandle,java.lang.invoke.MethodHandle,java.lang.invoke.MethodHandle)', [
			[/* method description */
				[/* text */ 't', `Constructs a `],
				[/* inline code block */ 'i', `while`],
				[/* text */ 't', ` loop from an initializer, a body, and a predicate.
 This is a convenience wrapper for the `],
				[/* reference */ 'r', `#loop(java.lang.invoke.MethodHandle%5B%5D...)`, `generic loop combinator`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The `],
					[/* inline code block */ 'i', `pred`],
					[/* text */ 't', ` handle describes the loop condition; and `],
					[/* inline code block */ 'i', `body`],
					[/* text */ 't', `, its body. The loop resulting from this
 method will, in each iteration, first evaluate the predicate and then execute its body (if the predicate
 evaluates to `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', `).
 The loop will terminate once the predicate evaluates to `],
					[/* inline code block */ 'i', `false`],
					[/* text */ 't', ` (the body will not be executed in this case).
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The `],
					[/* inline code block */ 'i', `init`],
					[/* text */ 't', ` handle describes the initial value of an additional optional loop-local variable.
 In each iteration, this loop-local variable, if present, will be passed to the `],
					[/* inline code block */ 'i', `body`],
					[/* text */ 't', `
 and updated with the value returned from its invocation. The result of loop execution will be
 the final value of the additional loop-local variable (if present).
 `]
				]],
				[/* block */ 'b', `
 The following rules hold for these argument handles:`],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `The `],
						[/* inline code block */ 'i', `body`],
						[/* text */ 't', ` handle must not be `],
						[/* inline code block */ 'i', `null`],
						[/* text */ 't', `; its type must be of the form
 `],
						[/* inline code block */ 'i', `(V A...)V`],
						[/* text */ 't', `, where `],
						[/* inline code block */ 'i', `V`],
						[/* text */ 't', ` is non-`],
						[/* inline code block */ 'i', `void`],
						[/* text */ 't', `, or else `],
						[/* inline code block */ 'i', `(A...)void`],
						[/* text */ 't', `.
 (In the `],
						[/* inline code block */ 'i', `void`],
						[/* text */ 't', ` case, we assign the type `],
						[/* inline code block */ 'i', `void`],
						[/* text */ 't', ` to the name `],
						[/* inline code block */ 'i', `V`],
						[/* text */ 't', `,
 and we will write `],
						[/* inline code block */ 'i', `(V A...)V`],
						[/* text */ 't', ` with the understanding that a `],
						[/* inline code block */ 'i', `void`],
						[/* text */ 't', ` type `],
						[/* inline code block */ 'i', `V`],
						[/* text */ 't', `
 is quietly dropped from the parameter list, leaving `],
						[/* inline code block */ 'i', `(A...)V`],
						[/* text */ 't', `.)
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `The parameter list `],
						[/* inline code block */ 'i', `(V A...)`],
						[/* text */ 't', ` of the body is called the `],
						[/* text */ 't', `internal parameter list`],
						[/* text */ 't', `.
 It will constrain the parameter lists of the other loop parts.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `If the iteration variable type `],
						[/* inline code block */ 'i', `V`],
						[/* text */ 't', ` is dropped from the internal parameter list, the resulting shorter
 list `],
						[/* inline code block */ 'i', `(A...)`],
						[/* text */ 't', ` is called the `],
						[/* text */ 't', `external parameter list`],
						[/* text */ 't', `.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `The body return type `],
						[/* inline code block */ 'i', `V`],
						[/* text */ 't', `, if non-`],
						[/* inline code block */ 'i', `void`],
						[/* text */ 't', `, determines the type of an
 additional state variable of the loop.
 The body must both accept and return a value of this type `],
						[/* inline code block */ 'i', `V`],
						[/* text */ 't', `.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `If `],
						[/* inline code block */ 'i', `init`],
						[/* text */ 't', ` is non-`],
						[/* inline code block */ 'i', `null`],
						[/* text */ 't', `, it must have return type `],
						[/* inline code block */ 'i', `V`],
						[/* text */ 't', `.
 Its parameter list (of some `],
						[/* reference */ 'r', `java.lang.invoke.MethodHandles#astar`, `form (A*)`],
						[/* text */ 't', `) must be
 `],
						[/* reference */ 'r', `java.lang.invoke.MethodHandles#effid`, `effectively identical`],
						[/* text */ 't', `
 to the external parameter list `],
						[/* inline code block */ 'i', `(A...)`],
						[/* text */ 't', `.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `If `],
						[/* inline code block */ 'i', `init`],
						[/* text */ 't', ` is `],
						[/* inline code block */ 'i', `null`],
						[/* text */ 't', `, the loop variable will be initialized to its
 `],
						[/* reference */ 'r', `#empty(java.lang.invoke.MethodType)`, `default value`],
						[/* text */ 't', `.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `The `],
						[/* inline code block */ 'i', `pred`],
						[/* text */ 't', ` handle must not be `],
						[/* inline code block */ 'i', `null`],
						[/* text */ 't', `.  It must have `],
						[/* inline code block */ 'i', `boolean`],
						[/* text */ 't', ` as its return type.
 Its parameter list (either empty or of the form `],
						[/* inline code block */ 'i', `(V A*)`],
						[/* text */ 't', `) must be
 effectively identical to the internal parameter list.
 `]
					]]
				]],
				[/* text */ 't', `
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', `
 The resulting loop handle's result type and parameter signature are determined as follows:`],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `The loop handle's result type is the result type `],
						[/* inline code block */ 'i', `V`],
						[/* text */ 't', ` of the body.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `The loop handle's parameter types are the types `],
						[/* inline code block */ 'i', `(A...)`],
						[/* text */ 't', `,
 from the external parameter list.
 `]
					]]
				]],
				[/* text */ 't', `
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `
 Here is pseudocode for the resulting loop handle. In the code, `],
					[/* inline code block */ 'i', `V`],
					[/* text */ 't', `/`],
					[/* inline code block */ 'i', `v`],
					[/* text */ 't', ` represent the type / value of
 the sole loop variable as well as the result type of the loop; and `],
					[/* inline code block */ 'i', `A`],
					[/* text */ 't', `/`],
					[/* inline code block */ 'i', `a`],
					[/* text */ 't', `, that of the argument
 passed to the loop.
 `]
				]],
				[/* blockquote */ 'q', [
					[/* code block */ 'c', [
						[/* inline code block */ 'i', `V init(A...);
 boolean pred(V, A...);
 V body(V, A...);
 V whileLoop(A... a...) {
   V v = init(a...);
   while (pred(v, a...)) {
     v = body(v, a...);
   }
   return v;
 }`]
					]]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'init', [/* parameter description */
					[/* text */ 't', `optional initializer, providing the initial value of the loop variable.
             May be `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `, implying a default initial value.  See above for other constraints.`]
				]],
				[/* parameter */ 'pred', [/* parameter description */
					[/* text */ 't', `condition for the loop, which may not be `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `. Its result type must be `],
					[/* inline code block */ 'i', `boolean`],
					[/* text */ 't', `. See
             above for other constraints.`]
				]],
				[/* parameter */ 'body', [/* parameter description */
					[/* text */ 't', `body of the loop, which may not be `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `. It controls the loop parameters and result type.
             See above for other constraints.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the rules for the arguments are violated.`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `pred`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `body`],
					[/* text */ 't', ` are `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a method handle implementing the `],
				[/* inline code block */ 'i', `while`],
				[/* text */ 't', ` loop as described by the arguments.`]
			]
		]],
		[/* method */ 'zero(java.lang.Class)', [
			[/* method description */
				[/* text */ 't', `Produces a constant method handle of the requested return type which
 returns the default value for that type every time it is invoked.
 The resulting constant method handle will have no side effects.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `The returned method handle is equivalent to `],
					[/* inline code block */ 'i', `empty(methodType(type))`],
					[/* text */ 't', `.
 It is also equivalent to `],
					[/* inline code block */ 'i', `explicitCastArguments(constant(Object.class, null), methodType(type))`],
					[/* text */ 't', `,
 since `],
					[/* inline code block */ 'i', `explicitCastArguments`],
					[/* text */ 't', ` converts `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` to default values.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'type', [/* parameter description */
					[/* text */ 't', `the expected return type of the desired method handle`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the argument is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a constant method handle that takes no arguments
         and returns the default value of the given type (or void, if the type is void)`]
			]
		]],
		[/* method */ 'lookup()', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* reference */ 'r', `java.lang.invoke.MethodHandles.Lookup`, `lookup object`],
				[/* text */ 't', ` with
 full capabilities to emulate all supported bytecode behaviors of the caller.
 These capabilities include `],
				[/* reference */ 'r', `java.lang.invoke.MethodHandles.Lookup#hasFullPrivilegeAccess()`, `full privilege access`],
				[/* text */ 't', ` to the caller.
 Factory methods on the lookup object can create
 `],
				[/* reference */ 'r', `java.lang.invoke.MethodHandleInfo#directmh`, `direct method handles`],
				[/* text */ 't', `
 for any member that the caller has access to via bytecodes,
 including protected and private fields and methods.
 This lookup object is created by the original lookup class
 and has the `],
				[/* reference */ 'r', `java.lang.invoke.MethodHandles.Lookup#ORIGINAL`, `ORIGINAL`],
				[/* text */ 't', ` bit set.
 This lookup object is a `],
				[/* text */ 't', `capability`],
				[/* text */ 't', ` which may be delegated to trusted agents.
 Do not store it in place where untrusted code can access it.
 `],
				[/* block */ 'b', `
 This method is caller sensitive, which means that it may return different
 values to different callers.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a lookup object for the caller of this method, with
 `],
				[/* reference */ 'r', `java.lang.invoke.MethodHandles.Lookup#ORIGINAL`, `original`],
				[/* text */ 't', ` and
 `],
				[/* reference */ 'r', `java.lang.invoke.MethodHandles.Lookup#hasFullPrivilegeAccess()`, `full privilege access`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'privateLookupIn(java.lang.Class,java.lang.invoke.MethodHandles.Lookup)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* reference */ 'r', `java.lang.invoke.MethodHandles.Lookup`, `lookup`],
				[/* text */ 't', ` object on a target class to emulate all supported
 bytecode behaviors, including `],
				[/* reference */ 'r', `java.lang.invoke.MethodHandles.Lookup#privacc`, `private access`],
				[/* text */ 't', `.
 The returned lookup object can provide access to classes in modules and packages,
 and members of those classes, outside the normal rules of Java access control,
 instead conforming to the more permissive rules for modular `],
				[/* text */ 't', `deep reflection`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 A caller, specified as a `],
					[/* inline code block */ 'i', `Lookup`],
					[/* text */ 't', ` object, in module `],
					[/* inline code block */ 'i', `M1`],
					[/* text */ 't', ` is
 allowed to do deep reflection on module `],
					[/* inline code block */ 'i', `M2`],
					[/* text */ 't', ` and package of the target class
 if and only if all of the following conditions are `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', `:
 `]
				]],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `If there is a security manager, its `],
						[/* inline code block */ 'i', `checkPermission`],
						[/* text */ 't', ` method is
 called to check `],
						[/* inline code block */ 'i', `ReflectPermission("suppressAccessChecks")`],
						[/* text */ 't', ` and
 that must return normally.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `The caller lookup object must have `],
						[/* reference */ 'r', `java.lang.invoke.MethodHandles.Lookup#hasFullPrivilegeAccess()`, `full privilege access`],
						[/* text */ 't', `.  Specifically:
   `],
						[/* list */ 'l', [
							[/* block */ 'b', [
								[/* text */ 't', `The caller lookup object must have the `],
								[/* reference */ 'r', `java.lang.invoke.MethodHandles.Lookup#MODULE`, `MODULE`],
								[/* text */ 't', ` lookup mode.
         (This is because otherwise there would be no way to ensure the original lookup
         creator was a member of any particular module, and so any subsequent checks
         for readability and qualified exports would become ineffective.)
     `]
							]],
							[/* block */ 'b', [
								[/* text */ 't', `The caller lookup object must have `],
								[/* reference */ 'r', `java.lang.invoke.MethodHandles.Lookup#PRIVATE`, `PRIVATE`],
								[/* text */ 't', ` access.
         (This is because an application intending to share intra-module access
         using `],
								[/* reference */ 'r', `java.lang.invoke.MethodHandles.Lookup#MODULE`, `MODULE`],
								[/* text */ 't', ` alone will inadvertently also share
         deep reflection to its own module.)
   `]
							]]
						]],
						[/* text */ 't', `
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `The target class must be a proper class, not a primitive or array class.
 (Thus, `],
						[/* inline code block */ 'i', `M2`],
						[/* text */ 't', ` is well-defined.)
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `If the caller module `],
						[/* inline code block */ 'i', `M1`],
						[/* text */ 't', ` differs from
 the target module `],
						[/* inline code block */ 'i', `M2`],
						[/* text */ 't', ` then both of the following must be true:
   `],
						[/* list */ 'l', [
							[/* block */ 'b', [
								[/* inline code block */ 'i', `M1`],
								[/* text */ 't', ` `],
								[/* reference */ 'r', `java.lang.Module#canRead(java.lang.Module)`, `reads`],
								[/* text */ 't', ` `],
								[/* inline code block */ 'i', `M2`],
								[/* text */ 't', `.`]
							]],
							[/* block */ 'b', [
								[/* inline code block */ 'i', `M2`],
								[/* text */ 't', ` `],
								[/* reference */ 'r', `java.lang.Module#isOpen(java.lang.String,java.lang.Module)`, `opens`],
								[/* text */ 't', ` the package
         containing the target class to at least `],
								[/* inline code block */ 'i', `M1`],
								[/* text */ 't', `.`]
							]]
						]],
						[/* text */ 't', `
 `]
					]]
				]],
				[/* text */ 't', `
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', `
 If any of the above checks is violated, this method fails with an
 exception.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 Otherwise, if `],
					[/* inline code block */ 'i', `M1`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `M2`],
					[/* text */ 't', ` are the same module, this method
 returns a `],
					[/* inline code block */ 'i', `Lookup`],
					[/* text */ 't', ` on `],
					[/* inline code block */ 'i', `targetClass`],
					[/* text */ 't', ` with
 `],
					[/* reference */ 'r', `java.lang.invoke.MethodHandles.Lookup#hasFullPrivilegeAccess()`, `full privilege access`],
					[/* text */ 't', `
 with `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` previous lookup class.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 Otherwise, `],
					[/* inline code block */ 'i', `M1`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `M2`],
					[/* text */ 't', ` are two different modules.  This method
 returns a `],
					[/* inline code block */ 'i', `Lookup`],
					[/* text */ 't', ` on `],
					[/* inline code block */ 'i', `targetClass`],
					[/* text */ 't', ` that records
 the lookup class of the caller as the new previous lookup class with
 `],
					[/* inline code block */ 'i', `PRIVATE`],
					[/* text */ 't', ` access but no `],
					[/* inline code block */ 'i', `MODULE`],
					[/* text */ 't', ` access.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The resulting `],
					[/* inline code block */ 'i', `Lookup`],
					[/* text */ 't', ` object has no `],
					[/* inline code block */ 'i', `ORIGINAL`],
					[/* text */ 't', ` access.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'targetClass', [/* parameter description */
					[/* text */ 't', `the target class`]
				]],
				[/* parameter */ 'caller', [/* parameter description */
					[/* text */ 't', `the caller lookup object`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `targetClass`],
					[/* text */ 't', ` is a primitive type or void or array class`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `targetClass`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `caller`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if denied by the security manager`]
				]],
				[/* throw */ 'java.lang.IllegalAccessException', [/* throw description */
					[/* text */ 't', `if any of the other access checks specified above fails`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a lookup object for the target class, with private access`]
			]
		]],
		[/* method */ 'publicLookup()', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* reference */ 'r', `java.lang.invoke.MethodHandles.Lookup`, `lookup object`],
				[/* text */ 't', ` which is trusted minimally.
 The lookup has the `],
				[/* inline code block */ 'i', `UNCONDITIONAL`],
				[/* text */ 't', ` mode.
 It can only be used to create method handles to public members of
 public classes in packages that are exported unconditionally.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 As a matter of pure convention, the `],
					[/* reference */ 'r', `java.lang.invoke.MethodHandles.Lookup#lookupClass()`, `lookup class`],
					[/* text */ 't', `
 of this lookup object will be `],
					[/* reference */ 'r', `java.lang.Object`, `Object`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a lookup object which is trusted minimally`]
			]
		]],
		[/* method */ 'arrayElementVarHandle(java.lang.Class)', [
			[/* method description */
				[/* text */ 't', `Produces a VarHandle giving access to elements of an array of type
 `],
				[/* inline code block */ 'i', `arrayClass`],
				[/* text */ 't', `.  The VarHandle's variable type is the component type
 of `],
				[/* inline code block */ 'i', `arrayClass`],
				[/* text */ 't', ` and the list of coordinate types is
 `],
				[/* inline code block */ 'i', `(arrayClass, int)`],
				[/* text */ 't', `, where the `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` coordinate type
 corresponds to an argument that is an index into an array.
 `],
				[/* block */ 'b', `
 Certain access modes of the returned VarHandle are unsupported under
 the following conditions:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `if the component type is anything other than `],
						[/* inline code block */ 'i', `byte`],
						[/* text */ 't', `,
     `],
						[/* inline code block */ 'i', `short`],
						[/* text */ 't', `, `],
						[/* inline code block */ 'i', `char`],
						[/* text */ 't', `, `],
						[/* inline code block */ 'i', `int`],
						[/* text */ 't', `, `],
						[/* inline code block */ 'i', `long`],
						[/* text */ 't', `,
     `],
						[/* inline code block */ 'i', `float`],
						[/* text */ 't', `, or `],
						[/* inline code block */ 'i', `double`],
						[/* text */ 't', ` then numeric atomic update access
     modes are unsupported.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `if the component type is anything other than `],
						[/* inline code block */ 'i', `boolean`],
						[/* text */ 't', `,
     `],
						[/* inline code block */ 'i', `byte`],
						[/* text */ 't', `, `],
						[/* inline code block */ 'i', `short`],
						[/* text */ 't', `, `],
						[/* inline code block */ 'i', `char`],
						[/* text */ 't', `, `],
						[/* inline code block */ 'i', `int`],
						[/* text */ 't', ` or
     `],
						[/* inline code block */ 'i', `long`],
						[/* text */ 't', ` then bitwise atomic update access modes are
     unsupported.
 `]
					]]
				]],
				[/* text */ 't', `
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the component type is `],
					[/* inline code block */ 'i', `float`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `double`],
					[/* text */ 't', ` then numeric
 and atomic update access modes compare values using their bitwise
 representation (see `],
					[/* reference */ 'r', `java.lang.Float#floatToRawIntBits(float)`, `Float.floatToRawIntBits(float)`],
					[/* text */ 't', ` and
 `],
					[/* reference */ 'r', `java.lang.Double#doubleToRawLongBits(double)`, `Double.doubleToRawLongBits(double)`],
					[/* text */ 't', `, respectively).

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` When the returned `],
					[/* inline code block */ 'i', `VarHandle`],
					[/* text */ 't', ` is invoked,
 the array reference and array index are checked.
 A `],
					[/* inline code block */ 'i', `NullPointerException`],
					[/* text */ 't', ` will be thrown if the array reference
 is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` and an `],
					[/* inline code block */ 'i', `ArrayIndexOutOfBoundsException`],
					[/* text */ 't', ` will be
 thrown if the index is negative or if it is greater than or equal to
 the length of the array.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'arrayClass', [/* parameter description */
					[/* text */ 't', `the class of an array, of type `],
					[/* inline code block */ 'i', `T[]`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the arrayClass is null`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if arrayClass is not an array type`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a VarHandle giving access to elements of an array`]
			]
		]],
		[/* method */ 'byteArrayViewVarHandle(java.lang.Class,java.nio.ByteOrder)', [
			[/* method description */
				[/* text */ 't', `Produces a VarHandle giving access to elements of a `],
				[/* inline code block */ 'i', `byte[]`],
				[/* text */ 't', ` array
 viewed as if it were a different primitive array type, such as
 `],
				[/* inline code block */ 'i', `int[]`],
				[/* text */ 't', ` or `],
				[/* inline code block */ 'i', `long[]`],
				[/* text */ 't', `.
 The VarHandle's variable type is the component type of
 `],
				[/* inline code block */ 'i', `viewArrayClass`],
				[/* text */ 't', ` and the list of coordinate types is
 `],
				[/* inline code block */ 'i', `(byte[], int)`],
				[/* text */ 't', `, where the `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` coordinate type
 corresponds to an argument that is an index into a `],
				[/* inline code block */ 'i', `byte[]`],
				[/* text */ 't', ` array.
 The returned VarHandle accesses bytes at an index in a `],
				[/* inline code block */ 'i', `byte[]`],
				[/* text */ 't', `
 array, composing bytes to or from a value of the component type of
 `],
				[/* inline code block */ 'i', `viewArrayClass`],
				[/* text */ 't', ` according to the given endianness.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The supported component types (variables types) are `],
					[/* inline code block */ 'i', `short`],
					[/* text */ 't', `,
 `],
					[/* inline code block */ 'i', `char`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `int`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `long`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `float`],
					[/* text */ 't', ` and
 `],
					[/* inline code block */ 'i', `double`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 Access of bytes at a given index will result in an
 `],
					[/* inline code block */ 'i', `ArrayIndexOutOfBoundsException`],
					[/* text */ 't', ` if the index is less than `],
					[/* inline code block */ 'i', `0`],
					[/* text */ 't', `
 or greater than the `],
					[/* inline code block */ 'i', `byte[]`],
					[/* text */ 't', ` array length minus the size (in bytes)
 of `],
					[/* inline code block */ 'i', `T`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 Access of bytes at an index may be aligned or misaligned for `],
					[/* inline code block */ 'i', `T`],
					[/* text */ 't', `,
 with respect to the underlying memory address, `],
					[/* inline code block */ 'i', `A`],
					[/* text */ 't', ` say, associated
 with the array and index.
 If access is misaligned then access for anything other than the
 `],
					[/* inline code block */ 'i', `get`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `set`],
					[/* text */ 't', ` access modes will result in an
 `],
					[/* inline code block */ 'i', `IllegalStateException`],
					[/* text */ 't', `.  In such cases atomic access is only
 guaranteed with respect to the largest power of two that divides the GCD
 of `],
					[/* inline code block */ 'i', `A`],
					[/* text */ 't', ` and the size (in bytes) of `],
					[/* inline code block */ 'i', `T`],
					[/* text */ 't', `.
 If access is aligned then following access modes are supported and are
 guaranteed to support atomic access:
 `]
				]],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `read write access modes for all `],
						[/* inline code block */ 'i', `T`],
						[/* text */ 't', `, with the exception of
     access modes `],
						[/* inline code block */ 'i', `get`],
						[/* text */ 't', ` and `],
						[/* inline code block */ 'i', `set`],
						[/* text */ 't', ` for `],
						[/* inline code block */ 'i', `long`],
						[/* text */ 't', ` and
     `],
						[/* inline code block */ 'i', `double`],
						[/* text */ 't', ` on 32-bit platforms.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `atomic update access modes for `],
						[/* inline code block */ 'i', `int`],
						[/* text */ 't', `, `],
						[/* inline code block */ 'i', `long`],
						[/* text */ 't', `,
     `],
						[/* inline code block */ 'i', `float`],
						[/* text */ 't', ` or `],
						[/* inline code block */ 'i', `double`],
						[/* text */ 't', `.
     (Future major platform releases of the JDK may support additional
     types for certain currently unsupported access modes.)
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `numeric atomic update access modes for `],
						[/* inline code block */ 'i', `int`],
						[/* text */ 't', ` and `],
						[/* inline code block */ 'i', `long`],
						[/* text */ 't', `.
     (Future major platform releases of the JDK may support additional
     numeric types for certain currently unsupported access modes.)
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `bitwise atomic update access modes for `],
						[/* inline code block */ 'i', `int`],
						[/* text */ 't', ` and `],
						[/* inline code block */ 'i', `long`],
						[/* text */ 't', `.
     (Future major platform releases of the JDK may support additional
     numeric types for certain currently unsupported access modes.)
 `]
					]]
				]],
				[/* text */ 't', `
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `
 Misaligned access, and therefore atomicity guarantees, may be determined
 for `],
					[/* inline code block */ 'i', `byte[]`],
					[/* text */ 't', ` arrays without operating on a specific array.  Given
 an `],
					[/* inline code block */ 'i', `index`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `T`],
					[/* text */ 't', ` and it's corresponding boxed type,
 `],
					[/* inline code block */ 'i', `T_BOX`],
					[/* text */ 't', `, misalignment may be determined as follows:
 `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `int sizeOfT = T_BOX.BYTES;  // size in bytes of T
 int misalignedAtZeroIndex = ByteBuffer.wrap(new byte[0]).
     alignmentOffset(0, sizeOfT);
 int misalignedAtIndex = (misalignedAtZeroIndex + index) % sizeOfT;
 boolean isMisaligned = misalignedAtIndex != 0;`]
				]],
				[/* text */ 't', `
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the variable type is `],
					[/* inline code block */ 'i', `float`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `double`],
					[/* text */ 't', ` then atomic
 update access modes compare values using their bitwise representation
 (see `],
					[/* reference */ 'r', `java.lang.Float#floatToRawIntBits(float)`, `Float.floatToRawIntBits(float)`],
					[/* text */ 't', ` and
 `],
					[/* reference */ 'r', `java.lang.Double#doubleToRawLongBits(double)`, `Double.doubleToRawLongBits(double)`],
					[/* text */ 't', `, respectively).`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'viewArrayClass', [/* parameter description */
					[/* text */ 't', `the view array class, with a component type of
 type `],
					[/* inline code block */ 'i', `T`]
				]],
				[/* parameter */ 'byteOrder', [/* parameter description */
					[/* text */ 't', `the endianness of the view array elements, as
 stored in the underlying `],
					[/* inline code block */ 'i', `byte`],
					[/* text */ 't', ` array`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if viewArrayClass or byteOrder is null`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if viewArrayClass is not an array type`]
				]],
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the component type of
 viewArrayClass is not supported as a variable type`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a VarHandle giving access to elements of a `],
				[/* inline code block */ 'i', `byte[]`],
				[/* text */ 't', ` array
 viewed as if elements corresponding to the components type of the view
 array class`]
			]
		]],
		[/* method */ 'byteBufferViewVarHandle(java.lang.Class,java.nio.ByteOrder)', [
			[/* method description */
				[/* text */ 't', `Produces a VarHandle giving access to elements of a `],
				[/* inline code block */ 'i', `ByteBuffer`],
				[/* text */ 't', `
 viewed as if it were an array of elements of a different primitive
 component type to that of `],
				[/* inline code block */ 'i', `byte`],
				[/* text */ 't', `, such as `],
				[/* inline code block */ 'i', `int[]`],
				[/* text */ 't', ` or
 `],
				[/* inline code block */ 'i', `long[]`],
				[/* text */ 't', `.
 The VarHandle's variable type is the component type of
 `],
				[/* inline code block */ 'i', `viewArrayClass`],
				[/* text */ 't', ` and the list of coordinate types is
 `],
				[/* inline code block */ 'i', `(ByteBuffer, int)`],
				[/* text */ 't', `, where the `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` coordinate type
 corresponds to an argument that is an index into a `],
				[/* inline code block */ 'i', `byte[]`],
				[/* text */ 't', ` array.
 The returned VarHandle accesses bytes at an index in a
 `],
				[/* inline code block */ 'i', `ByteBuffer`],
				[/* text */ 't', `, composing bytes to or from a value of the component
 type of `],
				[/* inline code block */ 'i', `viewArrayClass`],
				[/* text */ 't', ` according to the given endianness.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The supported component types (variables types) are `],
					[/* inline code block */ 'i', `short`],
					[/* text */ 't', `,
 `],
					[/* inline code block */ 'i', `char`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `int`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `long`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `float`],
					[/* text */ 't', ` and
 `],
					[/* inline code block */ 'i', `double`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 Access will result in a `],
					[/* inline code block */ 'i', `ReadOnlyBufferException`],
					[/* text */ 't', ` for anything
 other than the read access modes if the `],
					[/* inline code block */ 'i', `ByteBuffer`],
					[/* text */ 't', ` is read-only.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 Access of bytes at a given index will result in an
 `],
					[/* inline code block */ 'i', `IndexOutOfBoundsException`],
					[/* text */ 't', ` if the index is less than `],
					[/* inline code block */ 'i', `0`],
					[/* text */ 't', `
 or greater than the `],
					[/* inline code block */ 'i', `ByteBuffer`],
					[/* text */ 't', ` limit minus the size (in bytes) of
 `],
					[/* inline code block */ 'i', `T`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 Access of bytes at an index may be aligned or misaligned for `],
					[/* inline code block */ 'i', `T`],
					[/* text */ 't', `,
 with respect to the underlying memory address, `],
					[/* inline code block */ 'i', `A`],
					[/* text */ 't', ` say, associated
 with the `],
					[/* inline code block */ 'i', `ByteBuffer`],
					[/* text */ 't', ` and index.
 If access is misaligned then access for anything other than the
 `],
					[/* inline code block */ 'i', `get`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `set`],
					[/* text */ 't', ` access modes will result in an
 `],
					[/* inline code block */ 'i', `IllegalStateException`],
					[/* text */ 't', `.  In such cases atomic access is only
 guaranteed with respect to the largest power of two that divides the GCD
 of `],
					[/* inline code block */ 'i', `A`],
					[/* text */ 't', ` and the size (in bytes) of `],
					[/* inline code block */ 'i', `T`],
					[/* text */ 't', `.
 If access is aligned then following access modes are supported and are
 guaranteed to support atomic access:
 `]
				]],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `read write access modes for all `],
						[/* inline code block */ 'i', `T`],
						[/* text */ 't', `, with the exception of
     access modes `],
						[/* inline code block */ 'i', `get`],
						[/* text */ 't', ` and `],
						[/* inline code block */ 'i', `set`],
						[/* text */ 't', ` for `],
						[/* inline code block */ 'i', `long`],
						[/* text */ 't', ` and
     `],
						[/* inline code block */ 'i', `double`],
						[/* text */ 't', ` on 32-bit platforms.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `atomic update access modes for `],
						[/* inline code block */ 'i', `int`],
						[/* text */ 't', `, `],
						[/* inline code block */ 'i', `long`],
						[/* text */ 't', `,
     `],
						[/* inline code block */ 'i', `float`],
						[/* text */ 't', ` or `],
						[/* inline code block */ 'i', `double`],
						[/* text */ 't', `.
     (Future major platform releases of the JDK may support additional
     types for certain currently unsupported access modes.)
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `numeric atomic update access modes for `],
						[/* inline code block */ 'i', `int`],
						[/* text */ 't', ` and `],
						[/* inline code block */ 'i', `long`],
						[/* text */ 't', `.
     (Future major platform releases of the JDK may support additional
     numeric types for certain currently unsupported access modes.)
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `bitwise atomic update access modes for `],
						[/* inline code block */ 'i', `int`],
						[/* text */ 't', ` and `],
						[/* inline code block */ 'i', `long`],
						[/* text */ 't', `.
     (Future major platform releases of the JDK may support additional
     numeric types for certain currently unsupported access modes.)
 `]
					]]
				]],
				[/* text */ 't', `
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `
 Misaligned access, and therefore atomicity guarantees, may be determined
 for a `],
					[/* inline code block */ 'i', `ByteBuffer`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `bb`],
					[/* text */ 't', ` (direct or otherwise), an
 `],
					[/* inline code block */ 'i', `index`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `T`],
					[/* text */ 't', ` and it's corresponding boxed type,
 `],
					[/* inline code block */ 'i', `T_BOX`],
					[/* text */ 't', `, as follows:
 `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `int sizeOfT = T_BOX.BYTES;  // size in bytes of T
 ByteBuffer bb = ...
 int misalignedAtIndex = bb.alignmentOffset(index, sizeOfT);
 boolean isMisaligned = misalignedAtIndex != 0;`]
				]],
				[/* text */ 't', `
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the variable type is `],
					[/* inline code block */ 'i', `float`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `double`],
					[/* text */ 't', ` then atomic
 update access modes compare values using their bitwise representation
 (see `],
					[/* reference */ 'r', `java.lang.Float#floatToRawIntBits(float)`, `Float.floatToRawIntBits(float)`],
					[/* text */ 't', ` and
 `],
					[/* reference */ 'r', `java.lang.Double#doubleToRawLongBits(double)`, `Double.doubleToRawLongBits(double)`],
					[/* text */ 't', `, respectively).`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'viewArrayClass', [/* parameter description */
					[/* text */ 't', `the view array class, with a component type of
 type `],
					[/* inline code block */ 'i', `T`]
				]],
				[/* parameter */ 'byteOrder', [/* parameter description */
					[/* text */ 't', `the endianness of the view array elements, as
 stored in the underlying `],
					[/* inline code block */ 'i', `ByteBuffer`],
					[/* text */ 't', ` (Note this overrides the
 endianness of a `],
					[/* inline code block */ 'i', `ByteBuffer`],
					[/* text */ 't', `)`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if viewArrayClass or byteOrder is null`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if viewArrayClass is not an array type`]
				]],
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the component type of
 viewArrayClass is not supported as a variable type`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a VarHandle giving access to elements of a `],
				[/* inline code block */ 'i', `ByteBuffer`],
				[/* text */ 't', `
 viewed as if elements corresponding to the components type of the view
 array class`]
			]
		]]
	],
]);
