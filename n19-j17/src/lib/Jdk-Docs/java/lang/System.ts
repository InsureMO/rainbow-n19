import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.lang.System', [
	[/* class description */
		[/* text */ 't', `The `],
		[/* inline code block */ 'i', `System`],
		[/* text */ 't', ` class contains several useful class fields
 and methods. It cannot be instantiated.

 Among the facilities provided by the `],
		[/* inline code block */ 'i', `System`],
		[/* text */ 't', ` class
 are standard input, standard output, and error output streams;
 access to externally defined properties and environment
 variables; a means of loading files and libraries; and a utility
 method for quickly copying a portion of an array.`]
	],
	[/* fields */
		[/* field */ 'in', [
			[/* field description */
				[/* text */ 't', `The "standard" input stream. This stream is already
 open and ready to supply input data. Typically this stream
 corresponds to keyboard input or another input source specified by
 the host environment or user. In case this stream is wrapped
 in a `],
				[/* reference */ 'r', `java.io.InputStreamReader`],
				[/* text */ 't', `, `],
				[/* external link */ 'a', `../io/Console.html#charset()`, `Console.charset()`],
				[/* text */ 't', `
 should be used for the charset, or consider using
 `],
				[/* external link */ 'a', `../io/Console.html#reader()`, `Console.reader()`],
				[/* text */ 't', `.`]
			],
		]],
		[/* field */ 'out', [
			[/* field description */
				[/* text */ 't', `The "standard" output stream. This stream is already
 open and ready to accept output data. Typically this stream
 corresponds to display output or another output destination
 specified by the host environment or user. The encoding used
 in the conversion from characters to bytes is equivalent to
 `],
				[/* external link */ 'a', `../io/Console.html#charset()`, `Console.charset()`],
				[/* text */ 't', ` if the `],
				[/* inline code block */ 'i', `Console`],
				[/* text */ 't', ` exists,
 `],
				[/* external link */ 'a', `../nio/charset/Charset.html#defaultCharset()`, `Charset.defaultCharset()`],
				[/* text */ 't', ` otherwise.
 `],
				[/* block */ 'b', `
 For simple stand-alone Java applications, a typical way to write
 a line of output data is:
 `],
				[/* block */ 'b', [
					[/* code block */ 'c', `     System.out.println(data)
 `]
				]],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `
 See the `],
					[/* inline code block */ 'i', `println`],
					[/* text */ 't', ` methods in class `],
					[/* inline code block */ 'i', `PrintStream`],
					[/* text */ 't', `.`]
				]]
			],
		]],
		[/* field */ 'err', [
			[/* field description */
				[/* text */ 't', `The "standard" error output stream. This stream is already
 open and ready to accept output data.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 Typically this stream corresponds to display output or another
 output destination specified by the host environment or user. By
 convention, this output stream is used to display error messages
 or other information that should come to the immediate attention
 of a user even if the principal output stream, the value of the
 variable `],
					[/* inline code block */ 'i', `out`],
					[/* text */ 't', `, has been redirected to a file or other
 destination that is typically not continuously monitored.
 The encoding used in the conversion from characters to bytes is
 equivalent to `],
					[/* external link */ 'a', `../io/Console.html#charset()`, `Console.charset()`],
					[/* text */ 't', ` if the `],
					[/* inline code block */ 'i', `Console`],
					[/* text */ 't', `
 exists, `],
					[/* external link */ 'a', `../nio/charset/Charset.html#defaultCharset()`, `Charset.defaultCharset()`],
					[/* text */ 't', ` otherwise.`]
				]]
			],
		]]
	],
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'exit(int)', [
			[/* method description */
				[/* text */ 't', `Terminates the currently running Java Virtual Machine. The
 argument serves as a status code; by convention, a nonzero status
 code indicates abnormal termination.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method calls the `],
					[/* inline code block */ 'i', `exit`],
					[/* text */ 't', ` method in class
 `],
					[/* inline code block */ 'i', `Runtime`],
					[/* text */ 't', `. This method never returns normally.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The call `],
					[/* inline code block */ 'i', `System.exit(n)`],
					[/* text */ 't', ` is effectively equivalent to
 the call:
 `]
				]],
				[/* block */ 'b', [
					[/* code block */ 'c', ` Runtime.getRuntime().exit(n)
 `]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'status', [/* parameter description */
					[/* text */ 't', `exit status.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if a security manager exists and its `],
					[/* inline code block */ 'i', `checkExit`],
					[/* text */ 't', `
        method doesn't allow exit with the specified status.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'runFinalization()', [
			[/* method description */
				[/* text */ 't', `Runs the finalization methods of any objects pending finalization.

 Calling this method suggests that the Java Virtual Machine expend
 effort toward running the `],
				[/* inline code block */ 'i', `finalize`],
				[/* text */ 't', ` methods of objects
 that have been found to be discarded but whose `],
				[/* inline code block */ 'i', `finalize`],
				[/* text */ 't', `
 methods have not yet been run. When control returns from the
 method call, the Java Virtual Machine has made a best effort to
 complete all outstanding finalizations.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The call `],
					[/* inline code block */ 'i', `System.runFinalization()`],
					[/* text */ 't', ` is effectively
 equivalent to the call:
 `]
				]],
				[/* block */ 'b', [
					[/* code block */ 'c', ` Runtime.getRuntime().runFinalization()
 `]
				]],
				[/* block */ 'b', '']
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'getProperty(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Gets the system property indicated by the specified key.

 First, if there is a security manager, its
 `],
				[/* inline code block */ 'i', `checkPropertyAccess`],
				[/* text */ 't', ` method is called with the key as
 its argument. This may result in a SecurityException.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 If there is no current set of system properties, a set of system
 properties is first created and initialized in the same manner as
 for the `],
					[/* inline code block */ 'i', `getProperties`],
					[/* text */ 't', ` method.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'key', [/* parameter description */
					[/* text */ 't', `the name of the system property.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if a security manager exists and its
             `],
					[/* inline code block */ 'i', `checkPropertyAccess`],
					[/* text */ 't', ` method doesn't allow
             access to the specified system property.`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `key`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `key`],
					[/* text */ 't', ` is empty.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the string value of the system property,
             or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if there is no property with that key.`]
			]
		]],
		[/* method */ 'getProperty(java.lang.String,java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Gets the system property indicated by the specified key.

 First, if there is a security manager, its
 `],
				[/* inline code block */ 'i', `checkPropertyAccess`],
				[/* text */ 't', ` method is called with the
 `],
				[/* inline code block */ 'i', `key`],
				[/* text */ 't', ` as its argument.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 If there is no current set of system properties, a set of system
 properties is first created and initialized in the same manner as
 for the `],
					[/* inline code block */ 'i', `getProperties`],
					[/* text */ 't', ` method.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'key', [/* parameter description */
					[/* text */ 't', `the name of the system property.`]
				]],
				[/* parameter */ 'def', [/* parameter description */
					[/* text */ 't', `a default value.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if a security manager exists and its
             `],
					[/* inline code block */ 'i', `checkPropertyAccess`],
					[/* text */ 't', ` method doesn't allow
             access to the specified system property.`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `key`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `key`],
					[/* text */ 't', ` is empty.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the string value of the system property,
             or the default value if there is no property with that key.`]
			]
		]],
		[/* method */ 'identityHashCode(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Returns the same hash code for the given object as
 would be returned by the default method hashCode(),
 whether or not the given object's class overrides
 hashCode().
 The hash code for the null reference is zero.`]
			],
			[/* parameters */
				[/* parameter */ 'x', [/* parameter description */
					[/* text */ 't', `object for which the hashCode is to be calculated`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the hashCode`]
			]
		]],
		[/* method */ 'currentTimeMillis()', [
			[/* method description */
				[/* text */ 't', `Returns the current time in milliseconds.  Note that
 while the unit of time of the return value is a millisecond,
 the granularity of the value depends on the underlying
 operating system and may be larger.  For example, many
 operating systems measure time in units of tens of
 milliseconds.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` See the description of the class `],
					[/* inline code block */ 'i', `Date`],
					[/* text */ 't', ` for
 a discussion of slight discrepancies that may arise between
 "computer time" and coordinated universal time (UTC).`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the difference, measured in milliseconds, between
          the current time and midnight, January 1, 1970 UTC.`]
			]
		]],
		[/* method */ 'nanoTime()', [
			[/* method description */
				[/* text */ 't', `Returns the current value of the running Java Virtual Machine's
 high-resolution time source, in nanoseconds.

 This method can only be used to measure elapsed time and is
 not related to any other notion of system or wall-clock time.
 The value returned represents nanoseconds since some fixed but
 arbitrary `],
				[/* text */ 't', `origin`],
				[/* text */ 't', ` time (perhaps in the future, so values
 may be negative).  The same origin is used by all invocations of
 this method in an instance of a Java virtual machine; other
 virtual machine instances are likely to use a different origin.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This method provides nanosecond precision, but not necessarily
 nanosecond resolution (that is, how frequently the value changes)
 - no guarantees are made except that the resolution is at least as
 good as that of `],
					[/* reference */ 'r', `currentTimeMillis()`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `Differences in successive calls that span greater than
 approximately 292 years (2`],
					[/* text */ 't', `63`, 'sup'],
					[/* text */ 't', ` nanoseconds) will not
 correctly compute elapsed time due to numerical overflow.

 `]
				]],
				[/* block */ 'b', `The values returned by this method become meaningful only when
 the difference between two such values, obtained within the same
 instance of a Java virtual machine, is computed.

 `],
				[/* block */ 'b', `For example, to measure how long some code takes to execute:
 `],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `long startTime = System.nanoTime();
 // ... the code being measured ...
 long elapsedNanos = System.nanoTime() - startTime;`]
				]],
				[/* block */ 'b', ''],
				[/* block */ 'b', `To compare elapsed time against a timeout, use `],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `if (System.nanoTime() - startTime >= timeoutNanos) ...`]
				]],
				[/* text */ 't', `
 instead of `],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `if (System.nanoTime() >= startTime + timeoutNanos) ...`]
				]],
				[/* text */ 't', `
 because of the possibility of numerical overflow.`],
				[/* block */ 'b', '']
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the current value of the running Java Virtual Machine's
         high-resolution time source, in nanoseconds`]
			]
		]],
		[/* method */ 'arraycopy(java.lang.Object,int,java.lang.Object,int,int)', [
			[/* method description */
				[/* text */ 't', `Copies an array from the specified source array, beginning at the
 specified position, to the specified position of the destination array.
 A subsequence of array components are copied from the source
 array referenced by `],
				[/* inline code block */ 'i', `src`],
				[/* text */ 't', ` to the destination array
 referenced by `],
				[/* inline code block */ 'i', `dest`],
				[/* text */ 't', `. The number of components copied is
 equal to the `],
				[/* inline code block */ 'i', `length`],
				[/* text */ 't', ` argument. The components at
 positions `],
				[/* inline code block */ 'i', `srcPos`],
				[/* text */ 't', ` through
 `],
				[/* inline code block */ 'i', `srcPos+length-1`],
				[/* text */ 't', ` in the source array are copied into
 positions `],
				[/* inline code block */ 'i', `destPos`],
				[/* text */ 't', ` through
 `],
				[/* inline code block */ 'i', `destPos+length-1`],
				[/* text */ 't', `, respectively, of the destination
 array.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the `],
					[/* inline code block */ 'i', `src`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `dest`],
					[/* text */ 't', ` arguments refer to the
 same array object, then the copying is performed as if the
 components at positions `],
					[/* inline code block */ 'i', `srcPos`],
					[/* text */ 't', ` through
 `],
					[/* inline code block */ 'i', `srcPos+length-1`],
					[/* text */ 't', ` were first copied to a temporary
 array with `],
					[/* inline code block */ 'i', `length`],
					[/* text */ 't', ` components and then the contents of
 the temporary array were copied into positions
 `],
					[/* inline code block */ 'i', `destPos`],
					[/* text */ 't', ` through `],
					[/* inline code block */ 'i', `destPos+length-1`],
					[/* text */ 't', ` of the
 destination array.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 If `],
					[/* inline code block */ 'i', `dest`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `, then a
 `],
					[/* inline code block */ 'i', `NullPointerException`],
					[/* text */ 't', ` is thrown.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 If `],
					[/* inline code block */ 'i', `src`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `, then a
 `],
					[/* inline code block */ 'i', `NullPointerException`],
					[/* text */ 't', ` is thrown and the destination
 array is not modified.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 Otherwise, if any of the following is true, an
 `],
					[/* inline code block */ 'i', `ArrayStoreException`],
					[/* text */ 't', ` is thrown and the destination is
 not modified:
 `]
				]],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `The `],
						[/* inline code block */ 'i', `src`],
						[/* text */ 't', ` argument refers to an object that is not an
     array.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `The `],
						[/* inline code block */ 'i', `dest`],
						[/* text */ 't', ` argument refers to an object that is not an
     array.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `The `],
						[/* inline code block */ 'i', `src`],
						[/* text */ 't', ` argument and `],
						[/* inline code block */ 'i', `dest`],
						[/* text */ 't', ` argument refer
     to arrays whose component types are different primitive types.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `The `],
						[/* inline code block */ 'i', `src`],
						[/* text */ 't', ` argument refers to an array with a primitive
    component type and the `],
						[/* inline code block */ 'i', `dest`],
						[/* text */ 't', ` argument refers to an array
     with a reference component type.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `The `],
						[/* inline code block */ 'i', `src`],
						[/* text */ 't', ` argument refers to an array with a reference
    component type and the `],
						[/* inline code block */ 'i', `dest`],
						[/* text */ 't', ` argument refers to an array
     with a primitive component type.
 `]
					]]
				]],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `
 Otherwise, if any of the following is true, an
 `],
					[/* inline code block */ 'i', `IndexOutOfBoundsException`],
					[/* text */ 't', ` is
 thrown and the destination is not modified:
 `]
				]],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `The `],
						[/* inline code block */ 'i', `srcPos`],
						[/* text */ 't', ` argument is negative.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `The `],
						[/* inline code block */ 'i', `destPos`],
						[/* text */ 't', ` argument is negative.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `The `],
						[/* inline code block */ 'i', `length`],
						[/* text */ 't', ` argument is negative.
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `srcPos+length`],
						[/* text */ 't', ` is greater than
     `],
						[/* inline code block */ 'i', `src.length`],
						[/* text */ 't', `, the length of the source array.
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `destPos+length`],
						[/* text */ 't', ` is greater than
     `],
						[/* inline code block */ 'i', `dest.length`],
						[/* text */ 't', `, the length of the destination array.
 `]
					]]
				]],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `
 Otherwise, if any actual component of the source array from
 position `],
					[/* inline code block */ 'i', `srcPos`],
					[/* text */ 't', ` through
 `],
					[/* inline code block */ 'i', `srcPos+length-1`],
					[/* text */ 't', ` cannot be converted to the component
 type of the destination array by assignment conversion, an
 `],
					[/* inline code block */ 'i', `ArrayStoreException`],
					[/* text */ 't', ` is thrown. In this case, let
 `],
					[/* text */ 't', `k`],
					[/* text */ 't', ` be the smallest nonnegative integer less than
 length such that `],
					[/* inline code block */ 'i', `src[srcPos+`],
					[/* text */ 't', `k`],
					[/* inline code block */ 'i', `]`],
					[/* text */ 't', `
 cannot be converted to the component type of the destination
 array; when the exception is thrown, source array components from
 positions `],
					[/* inline code block */ 'i', `srcPos`],
					[/* text */ 't', ` through
 `],
					[/* inline code block */ 'i', `srcPos+`],
					[/* text */ 't', `k`],
					[/* inline code block */ 'i', `-1`],
					[/* text */ 't', `
 will already have been copied to destination array positions
 `],
					[/* inline code block */ 'i', `destPos`],
					[/* text */ 't', ` through
 `],
					[/* inline code block */ 'i', `destPos+`],
					[/* text */ 't', `k`],
					[/* inline code block */ 'i', `-1`],
					[/* text */ 't', ` and no other
 positions of the destination array will have been modified.
 (Because of the restrictions already itemized, this
 paragraph effectively applies only to the situation where both
 arrays have component types that are reference types.)`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'src', [/* parameter description */
					[/* text */ 't', `the source array.`]
				]],
				[/* parameter */ 'srcPos', [/* parameter description */
					[/* text */ 't', `starting position in the source array.`]
				]],
				[/* parameter */ 'dest', [/* parameter description */
					[/* text */ 't', `the destination array.`]
				]],
				[/* parameter */ 'destPos', [/* parameter description */
					[/* text */ 't', `starting position in the destination data.`]
				]],
				[/* parameter */ 'length', [/* parameter description */
					[/* text */ 't', `the number of array elements to be copied.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if copying would cause
             access of data outside array bounds.`]
				]],
				[/* throw */ 'java.lang.ArrayStoreException', [/* throw description */
					[/* text */ 't', `if an element in the `],
					[/* inline code block */ 'i', `src`],
					[/* text */ 't', `
             array could not be stored into the `],
					[/* inline code block */ 'i', `dest`],
					[/* text */ 't', ` array
             because of a type mismatch.`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if either `],
					[/* inline code block */ 'i', `src`],
					[/* text */ 't', ` or
             `],
					[/* inline code block */ 'i', `dest`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'load(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Loads the native library specified by the filename argument.  The filename
 argument must be an absolute path name.

 If the filename argument, when stripped of any platform-specific library
 prefix, path, and file extension, indicates a library whose name is,
 for example, L, and a native library called L is statically linked
 with the VM, then the JNI_OnLoad_L function exported by the library
 is invoked rather than attempting to load a dynamic library.
 A filename matching the argument does not have to exist in the
 file system.
 See the `],
				[/* external link */ 'a', `../../../../specs/jni/index.html`, `JNI Specification`],
				[/* text */ 't', `
 for more details.

 Otherwise, the filename argument is mapped to a native library image in
 an implementation-dependent manner.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The call `],
					[/* inline code block */ 'i', `System.load(name)`],
					[/* text */ 't', ` is effectively equivalent
 to the call:
 `]
				]],
				[/* block */ 'b', [
					[/* code block */ 'c', ` Runtime.getRuntime().load(name)
 `]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'filename', [/* parameter description */
					[/* text */ 't', `the file to load.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if a security manager exists and its
             `],
					[/* inline code block */ 'i', `checkLink`],
					[/* text */ 't', ` method doesn't allow
             loading of the specified dynamic library`]
				]],
				[/* throw */ 'java.lang.UnsatisfiedLinkError', [/* throw description */
					[/* text */ 't', `if either the filename is not an
             absolute path name, the native library is not statically
             linked with the VM, or the library cannot be mapped to
             a native library image by the host system.`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `filename`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'getSecurityManager()', [
			[/* method description */
				[/* text */ 't', `Gets the system-wide security manager.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `if a security manager has already been established for the
          current application, then that security manager is returned;
          otherwise, `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` is returned.`]
			]
		]],
		[/* method */ 'loadLibrary(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Loads the native library specified by the `],
				[/* inline code block */ 'i', `libname`],
				[/* text */ 't', `
 argument.  The `],
				[/* inline code block */ 'i', `libname`],
				[/* text */ 't', ` argument must not contain any platform
 specific prefix, file extension or path. If a native library
 called `],
				[/* inline code block */ 'i', `libname`],
				[/* text */ 't', ` is statically linked with the VM, then the
 JNI_OnLoad_`],
				[/* inline code block */ 'i', `libname`],
				[/* text */ 't', ` function exported by the library is invoked.
 See the `],
				[/* external link */ 'a', `../../../../specs/jni/index.html`, `JNI Specification`],
				[/* text */ 't', `
 for more details.

 Otherwise, the libname argument is loaded from a system library
 location and mapped to a native library image in an
 implementation-dependent manner.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The call `],
					[/* inline code block */ 'i', `System.loadLibrary(name)`],
					[/* text */ 't', ` is effectively
 equivalent to the call
 `]
				]],
				[/* block */ 'b', [
					[/* code block */ 'c', ` Runtime.getRuntime().loadLibrary(name)
 `]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'libname', [/* parameter description */
					[/* text */ 't', `the name of the library.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if a security manager exists and its
             `],
					[/* inline code block */ 'i', `checkLink`],
					[/* text */ 't', ` method doesn't allow
             loading of the specified dynamic library`]
				]],
				[/* throw */ 'java.lang.UnsatisfiedLinkError', [/* throw description */
					[/* text */ 't', `if either the libname argument
             contains a file path, the native library is not statically
             linked with the VM,  or the library cannot be mapped to a
             native library image by the host system.`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `libname`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'console()', [
			[/* method description */
				[/* text */ 't', `Returns the unique `],
				[/* reference */ 'r', `java.io.Console`],
				[/* text */ 't', ` object associated
 with the current Java virtual machine, if any.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The system console, if any, otherwise `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'inheritedChannel()', [
			[/* method description */
				[/* text */ 't', `Returns the channel inherited from the entity that created this
 Java virtual machine.

 This method returns the channel obtained by invoking the
 `],
				[/* external link */ 'a', `../nio/channels/spi/SelectorProvider.html#inheritedChannel()`, `inheritedChannel`],
				[/* text */ 't', ` method of the system-wide default
 `],
				[/* reference */ 'r', `java.nio.channels.spi.SelectorProvider`],
				[/* text */ 't', ` object.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` In addition to the network-oriented channels described in
 `],
					[/* external link */ 'a', `../nio/channels/spi/SelectorProvider.html#inheritedChannel()`, `inheritedChannel`],
					[/* text */ 't', `, this method may return other kinds of
 channels in the future.`]
				]]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If an I/O error occurs`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If a security manager is present and it does not
          permit access to the channel.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The inherited channel, if any, otherwise `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'setSecurityManager(java.lang.SecurityManager)', [
			[/* method description */
				[/* text */ 't', `Sets the system-wide security manager.

 If there is a security manager already installed, this method first
 calls the security manager's `],
				[/* inline code block */ 'i', `checkPermission`],
				[/* text */ 't', ` method
 with a `],
				[/* inline code block */ 'i', `RuntimePermission("setSecurityManager")`],
				[/* text */ 't', `
 permission to ensure it's ok to replace the existing
 security manager.
 This may result in throwing a `],
				[/* inline code block */ 'i', `SecurityException`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` Otherwise, the argument is established as the current
 security manager. If the argument is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` and no
 security manager has been established, then no action is taken and
 the method simply returns.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'sm', [/* parameter description */
					[/* text */ 't', `the security manager or `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if the security manager has already been set and its `],
					[/* inline code block */ 'i', `checkPermission`],
					[/* text */ 't', ` method doesn't allow it to be replaced`]
				]],
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `sm`],
					[/* text */ 't', ` is non-null and a security manager is not allowed
         to be set dynamically`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'lineSeparator()', [
			[/* method description */
				[/* text */ 't', `Returns the system-dependent line separator string.  It always
 returns the same value - the initial value of the `],
				[/* reference */ 'r', `system property`],
				[/* inline code block */ 'i', `line.separator`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `On UNIX systems, it returns `],
					[/* inline code block */ 'i', `"\\n"`],
					[/* text */ 't', `; on Microsoft
 Windows systems it returns `],
					[/* inline code block */ 'i', `"\\r\\n"`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the system-dependent line separator string`]
			]
		]],
		[/* method */ 'setProperty(java.lang.String,java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Sets the system property indicated by the specified key.

 First, if a security manager exists, its
 `],
				[/* inline code block */ 'i', `SecurityManager.checkPermission`],
				[/* text */ 't', ` method
 is called with a `],
				[/* inline code block */ 'i', `PropertyPermission(key, "write")`],
				[/* text */ 't', `
 permission. This may result in a SecurityException being thrown.
 If no exception is thrown, the specified property is set to the given
 value.`]
			],
			[/* parameters */
				[/* parameter */ 'key', [/* parameter description */
					[/* text */ 't', `the name of the system property.`]
				]],
				[/* parameter */ 'value', [/* parameter description */
					[/* text */ 't', `the value of the system property.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if a security manager exists and its
             `],
					[/* inline code block */ 'i', `checkPermission`],
					[/* text */ 't', ` method doesn't allow
             setting of the specified property.`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `key`],
					[/* text */ 't', ` or
             `],
					[/* inline code block */ 'i', `value`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `key`],
					[/* text */ 't', ` is empty.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the previous value of the system property,
             or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if it did not have one.`]
			]
		]],
		[/* method */ 'getenv(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Gets the value of the specified environment variable. An
 environment variable is a system-dependent external named
 value.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If a security manager exists, its
 `],
					[/* external link */ 'a', `SecurityManager.html#checkPermission(java.security.Permission)`, `checkPermission`],
					[/* text */ 't', `
 method is called with a
 `],
					[/* reference */ 'r', `java.lang.RuntimePermission`],
					[/* text */ 't', `
 permission.  This may result in a `],
					[/* reference */ 'r', `java.lang.SecurityException`],
					[/* text */ 't', `
 being thrown.  If no exception is thrown the value of the
 variable `],
					[/* inline code block */ 'i', `name`],
					[/* text */ 't', ` is returned.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `System properties and environment variables`],
					[/* text */ 't', ` are both
 conceptually mappings between names and values.  Both
 mechanisms can be used to pass user-defined information to a
 Java process.  Environment variables have a more global effect,
 because they are visible to all descendants of the process
 which defines them, not just the immediate Java subprocess.
 They can have subtly different semantics, such as case
 insensitivity, on different operating systems.  For these
 reasons, environment variables are more likely to have
 unintended side effects.  It is best to use system properties
 where possible.  Environment variables should be used when a
 global effect is desired, or when an external system interface
 requires an environment variable (such as `],
					[/* inline code block */ 'i', `PATH`],
					[/* text */ 't', `).

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `On UNIX systems the alphabetic case of `],
					[/* inline code block */ 'i', `name`],
					[/* text */ 't', ` is
 typically significant, while on Microsoft Windows systems it is
 typically not.  For example, the expression
 `],
					[/* inline code block */ 'i', `System.getenv("FOO").equals(System.getenv("foo"))`],
					[/* text */ 't', `
 is likely to be true on Microsoft Windows.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `the name of the environment variable`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `name`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if a security manager exists and its
         `],
					[/* external link */ 'a', `SecurityManager.html#checkPermission(java.security.Permission)`, `checkPermission`],
					[/* text */ 't', `
         method doesn't allow access to the environment variable
         `],
					[/* inline code block */ 'i', `name`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the string value of the variable, or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `
         if the variable is not defined in the system environment`]
			]
		]],
		[/* method */ 'getenv()', [
			[/* method description */
				[/* text */ 't', `Returns an unmodifiable string map view of the current system environment.
 The environment is a system-dependent mapping from names to
 values which is passed from parent to child processes.

 `],
				[/* block */ 'b', `If the system does not support environment variables, an
 empty map is returned.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The returned map will never contain null keys or values.
 Attempting to query the presence of a null key or value will
 throw a `],
					[/* reference */ 'r', `java.lang.NullPointerException`],
					[/* text */ 't', `.  Attempting to query
 the presence of a key or value which is not of type
 `],
					[/* reference */ 'r', `java.lang.String`],
					[/* text */ 't', ` will throw a `],
					[/* reference */ 'r', `java.lang.ClassCastException`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The returned map and its collection views may not obey the
 general contract of the `],
					[/* external link */ 'a', `Object.html#equals(java.lang.Object)`, `Object.equals(java.lang.Object)`],
					[/* text */ 't', ` and
 `],
					[/* external link */ 'a', `Object.html#hashCode()`, `Object.hashCode()`],
					[/* text */ 't', ` methods.

 `]
				]],
				[/* block */ 'b', `The returned map is typically case-sensitive on all platforms.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If a security manager exists, its
 `],
					[/* external link */ 'a', `SecurityManager.html#checkPermission(java.security.Permission)`, `checkPermission`],
					[/* text */ 't', `
 method is called with a
 `],
					[/* reference */ 'r', `java.lang.RuntimePermission`],
					[/* text */ 't', ` permission.
 This may result in a `],
					[/* reference */ 'r', `java.lang.SecurityException`],
					[/* text */ 't', ` being thrown.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `When passing information to a Java subprocess,
 `],
					[/* text */ 't', `system properties`],
					[/* text */ 't', `
 are generally preferred over environment variables.`]
				]]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if a security manager exists and its
         `],
					[/* external link */ 'a', `SecurityManager.html#checkPermission(java.security.Permission)`, `checkPermission`],
					[/* text */ 't', `
         method doesn't allow access to the process environment`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the environment as a map of variable names to values`]
			]
		]],
		[/* method */ 'getLogger(java.lang.String,java.util.ResourceBundle)', [
			[/* method description */
				[/* text */ 't', `Returns a localizable instance of `],
				[/* reference */ 'r', `java.lang.System.Logger`],
				[/* text */ 't', ` for the caller's use.
 The returned logger will use the provided resource bundle for message
 localization.`]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `the name of the logger.`]
				]],
				[/* parameter */ 'bundle', [/* parameter description */
					[/* text */ 't', `a resource bundle.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `name`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` or
         `],
					[/* inline code block */ 'i', `bundle`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]],
				[/* throw */ 'java.lang.IllegalCallerException', [/* throw description */
					[/* text */ 't', `if there is no Java caller frame on the
         stack.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `an instance of `],
				[/* reference */ 'r', `java.lang.System.Logger`],
				[/* text */ 't', ` which will use the provided
 resource bundle for message localization.`]
			]
		]],
		[/* method */ 'getLogger(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Returns an instance of `],
				[/* reference */ 'r', `java.lang.System.Logger`],
				[/* text */ 't', ` for the caller's
 use.`]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `the name of the logger.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `name`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]],
				[/* throw */ 'java.lang.IllegalCallerException', [/* throw description */
					[/* text */ 't', `if there is no Java caller frame on the
         stack.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `an instance of `],
				[/* reference */ 'r', `java.lang.System.Logger`],
				[/* text */ 't', ` that can be used by the calling
         class.`]
			]
		]],
		[/* method */ 'gc()', [
			[/* method description */
				[/* text */ 't', `Runs the garbage collector in the Java Virtual Machine.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 Calling the `],
					[/* inline code block */ 'i', `gc`],
					[/* text */ 't', ` method suggests that the Java Virtual Machine
 expend effort toward recycling unused objects in order to
 make the memory they currently occupy available for reuse
 by the Java Virtual Machine.
 When control returns from the method call, the Java Virtual Machine
 has made a best effort to reclaim space from all unused objects.
 There is no guarantee that this effort will recycle any particular
 number of unused objects, reclaim any particular amount of space, or
 complete at any particular time, if at all, before the method returns or ever.
 There is also no guarantee that this effort will determine
 the change of reachability in any particular number of objects,
 or that any particular number of `],
					[/* reference */ 'r', `java.lang.ref.Reference`],
					[/* text */ 't', `
 objects will be cleared and enqueued.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The call `],
					[/* inline code block */ 'i', `System.gc()`],
					[/* text */ 't', ` is effectively equivalent to the
 call:
 `]
				]],
				[/* block */ 'b', [
					[/* code block */ 'c', ` Runtime.getRuntime().gc()
 `]
				]],
				[/* block */ 'b', '']
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'setIn(java.io.InputStream)', [
			[/* method description */
				[/* text */ 't', `Reassigns the "standard" input stream.

 First, if there is a security manager, its `],
				[/* inline code block */ 'i', `checkPermission`],
				[/* text */ 't', `
 method is called with a `],
				[/* inline code block */ 'i', `RuntimePermission("setIO")`],
				[/* text */ 't', ` permission
  to see if it's ok to reassign the "standard" input stream.`]
			],
			[/* parameters */
				[/* parameter */ 'in', [/* parameter description */
					[/* text */ 't', `the new standard input stream.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if a security manager exists and its
        `],
					[/* inline code block */ 'i', `checkPermission`],
					[/* text */ 't', ` method doesn't allow
        reassigning of the standard input stream.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'setOut(java.io.PrintStream)', [
			[/* method description */
				[/* text */ 't', `Reassigns the "standard" output stream.

 First, if there is a security manager, its `],
				[/* inline code block */ 'i', `checkPermission`],
				[/* text */ 't', `
 method is called with a `],
				[/* inline code block */ 'i', `RuntimePermission("setIO")`],
				[/* text */ 't', ` permission
  to see if it's ok to reassign the "standard" output stream.`]
			],
			[/* parameters */
				[/* parameter */ 'out', [/* parameter description */
					[/* text */ 't', `the new standard output stream`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if a security manager exists and its
        `],
					[/* inline code block */ 'i', `checkPermission`],
					[/* text */ 't', ` method doesn't allow
        reassigning of the standard output stream.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'setErr(java.io.PrintStream)', [
			[/* method description */
				[/* text */ 't', `Reassigns the "standard" error output stream.

 First, if there is a security manager, its `],
				[/* inline code block */ 'i', `checkPermission`],
				[/* text */ 't', `
 method is called with a `],
				[/* inline code block */ 'i', `RuntimePermission("setIO")`],
				[/* text */ 't', ` permission
  to see if it's ok to reassign the "standard" error output stream.`]
			],
			[/* parameters */
				[/* parameter */ 'err', [/* parameter description */
					[/* text */ 't', `the new standard error output stream.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if a security manager exists and its
        `],
					[/* inline code block */ 'i', `checkPermission`],
					[/* text */ 't', ` method doesn't allow
        reassigning of the standard error output stream.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'getProperties()', [
			[/* method description */
				[/* text */ 't', `Determines the current system properties.

 First, if there is a security manager, its
 `],
				[/* inline code block */ 'i', `checkPropertiesAccess`],
				[/* text */ 't', ` method is called with no
 arguments. This may result in a security exception.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The current set of system properties for use by the
 `],
					[/* reference */ 'r', `getProperty(String)`],
					[/* text */ 't', ` method is returned as a
 `],
					[/* inline code block */ 'i', `Properties`],
					[/* text */ 't', ` object. If there is no current set of
 system properties, a set of system properties is first created and
 initialized. This set of system properties includes a value
 for each of the following keys unless the description of the associated
 value indicates that the value is optional.
 `]
				]],
				[/* table */ 't', ''],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `
 The `],
					[/* inline code block */ 'i', `java.specification.maintenance.version`],
					[/* text */ 't', ` property is
 defined if the specification implemented by this runtime at the
 time of its construction had undergone a `],
					[/* external link */ 'a', `https://jcp.org/en/procedures/jcp2#3.6.4`, `maintenance release`],
					[/* text */ 't', `. When defined, its value identifies that
 maintenance release. To indicate the first maintenance release
 this property will have the value `],
					[/* inline code block */ 'i', `"1"`],
					[/* text */ 't', `, to indicate the
 second maintenance release this property will have the value
 `],
					[/* inline code block */ 'i', `"2"`],
					[/* text */ 't', `, and so on.
 `]
				]],
				[/* block */ 'b', `
 Multiple paths in a system property value are separated by the path
 separator character of the platform.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 Note that even if the security manager does not permit the
 `],
					[/* inline code block */ 'i', `getProperties`],
					[/* text */ 't', ` operation, it may choose to permit the
 `],
					[/* reference */ 'r', `getProperty(String)`],
					[/* text */ 't', ` operation.`]
				]]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if a security manager exists and its
             `],
					[/* inline code block */ 'i', `checkPropertiesAccess`],
					[/* text */ 't', ` method doesn't allow access
             to the system properties.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the system properties`]
			]
		]],
		[/* method */ 'setProperties(java.util.Properties)', [
			[/* method description */
				[/* text */ 't', `Sets the system properties to the `],
				[/* inline code block */ 'i', `Properties`],
				[/* text */ 't', ` argument.

 First, if there is a security manager, its
 `],
				[/* inline code block */ 'i', `checkPropertiesAccess`],
				[/* text */ 't', ` method is called with no
 arguments. This may result in a security exception.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The argument becomes the current set of system properties for use
 by the `],
					[/* reference */ 'r', `getProperty(String)`],
					[/* text */ 't', ` method. If the argument is
 `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `, then the current set of system properties is
 forgotten.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'props', [/* parameter description */
					[/* text */ 't', `the new system properties.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if a security manager exists and its
             `],
					[/* inline code block */ 'i', `checkPropertiesAccess`],
					[/* text */ 't', ` method doesn't allow access
             to the system properties.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'clearProperty(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Removes the system property indicated by the specified key.

 First, if a security manager exists, its
 `],
				[/* inline code block */ 'i', `SecurityManager.checkPermission`],
				[/* text */ 't', ` method
 is called with a `],
				[/* inline code block */ 'i', `PropertyPermission(key, "write")`],
				[/* text */ 't', `
 permission. This may result in a SecurityException being thrown.
 If no exception is thrown, the specified property is removed.`]
			],
			[/* parameters */
				[/* parameter */ 'key', [/* parameter description */
					[/* text */ 't', `the name of the system property to be removed.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if a security manager exists and its
             `],
					[/* inline code block */ 'i', `checkPropertyAccess`],
					[/* text */ 't', ` method doesn't allow
              access to the specified system property.`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `key`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `key`],
					[/* text */ 't', ` is empty.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the previous string value of the system property,
             or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if there was no property with that key.`]
			]
		]],
		[/* method */ 'mapLibraryName(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Maps a library name into a platform-specific string representing
 a native library.`]
			],
			[/* parameters */
				[/* parameter */ 'libname', [/* parameter description */
					[/* text */ 't', `the name of the library.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `libname`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a platform-dependent native library name.`]
			]
		]]
	],
]);
