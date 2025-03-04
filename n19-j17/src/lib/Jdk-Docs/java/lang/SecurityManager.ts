import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.lang.SecurityManager', [
	/* class description */ UDF,
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new `],
				[/* inline code block */ 'i', `SecurityManager`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` If there is a security manager already installed, this method first
 calls the security manager's `],
					[/* inline code block */ 'i', `checkPermission`],
					[/* text */ 't', ` method
 with the `],
					[/* inline code block */ 'i', `RuntimePermission("createSecurityManager")`],
					[/* text */ 't', `
 permission to ensure the calling thread has permission to create a new
 security manager.
 This may result in throwing a `],
					[/* inline code block */ 'i', `SecurityException`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if a security manager already
             exists and its `],
					[/* inline code block */ 'i', `checkPermission`],
					[/* text */ 't', ` method
             doesn't allow creation of a new security manager.`]
				]]
			]
		]]
	],
	[/* methods */
		[/* method */ 'getClassContext()', [
			[/* method description */
				[/* text */ 't', `Returns the current execution stack as an array of classes.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The length of the array is the number of methods on the execution
 stack. The element at index `],
					[/* inline code block */ 'i', `0`],
					[/* text */ 't', ` is the class of the
 currently executing method, the element at index `],
					[/* inline code block */ 'i', `1`],
					[/* text */ 't', ` is
 the class of that method's caller, and so on.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the execution stack.`]
			]
		]],
		[/* method */ 'getSecurityContext()', [
			[/* method description */
				[/* text */ 't', `Creates an object that encapsulates the current execution
 environment. The result of this method is used, for example, by the
 three-argument `],
				[/* inline code block */ 'i', `checkConnect`],
				[/* text */ 't', ` method and by the
 two-argument `],
				[/* inline code block */ 'i', `checkRead`],
				[/* text */ 't', ` method.
 These methods are needed because a trusted method may be called
 on to read a file or open a socket on behalf of another method.
 The trusted method needs to determine if the other (possibly
 untrusted) method would be allowed to perform the operation on its
 own.
 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The default implementation of this method is to return
 an `],
					[/* inline code block */ 'i', `AccessControlContext`],
					[/* text */ 't', ` object.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an implementation-dependent object that encapsulates
          sufficient information about the current execution environment
          to perform some security checks later.`]
			]
		]],
		[/* method */ 'getThreadGroup()', [
			[/* method description */
				[/* text */ 't', `Returns the thread group into which to instantiate any new
 thread being created at the time this is being called.
 By default, it returns the thread group of the current
 thread. This should be overridden by a specific security
 manager to return the appropriate thread group.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `ThreadGroup that new threads are instantiated into`]
			]
		]],
		[/* method */ 'checkAccept(java.lang.String,int)', [
			[/* method description */
				[/* text */ 't', `Throws a `],
				[/* inline code block */ 'i', `SecurityException`],
				[/* text */ 't', ` if the
 calling thread is not permitted to accept a socket connection from
 the specified host and port number.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method is invoked for the current security manager by the
 `],
					[/* inline code block */ 'i', `accept`],
					[/* text */ 't', ` method of class `],
					[/* inline code block */ 'i', `ServerSocket`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method calls `],
					[/* inline code block */ 'i', `checkPermission`],
					[/* text */ 't', ` with the
 `],
					[/* inline code block */ 'i', `SocketPermission(host+":"+port,"accept")`],
					[/* text */ 't', ` permission.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 If you override this method, then you should make a call to
 `],
					[/* inline code block */ 'i', `super.checkAccept`],
					[/* text */ 't', `
 at the point the overridden method would normally throw an
 exception.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'host', [/* parameter description */
					[/* text */ 't', `the host name of the socket connection.`]
				]],
				[/* parameter */ 'port', [/* parameter description */
					[/* text */ 't', `the port number of the socket connection.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if the calling thread does not have
             permission to accept the connection.`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `host`],
					[/* text */ 't', ` argument is
             `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'checkAccess(java.lang.Thread)', [
			[/* method description */
				[/* text */ 't', `Throws a `],
				[/* inline code block */ 'i', `SecurityException`],
				[/* text */ 't', ` if the
 calling thread is not allowed to modify the thread argument.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method is invoked for the current security manager by the
 `],
					[/* inline code block */ 'i', `stop`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `suspend`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `resume`],
					[/* text */ 't', `,
 `],
					[/* inline code block */ 'i', `setPriority`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `setName`],
					[/* text */ 't', `, and
 `],
					[/* inline code block */ 'i', `setDaemon`],
					[/* text */ 't', ` methods of class `],
					[/* inline code block */ 'i', `Thread`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the thread argument is a system thread (belongs to
 the thread group with a `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` parent) then
 this method calls `],
					[/* inline code block */ 'i', `checkPermission`],
					[/* text */ 't', ` with the
 `],
					[/* inline code block */ 'i', `RuntimePermission("modifyThread")`],
					[/* text */ 't', ` permission.
 If the thread argument is `],
					[/* text */ 't', `not`],
					[/* text */ 't', ` a system thread,
 this method just returns silently.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 Applications that want a stricter policy should override this
 method. If this method is overridden, the method that overrides
 it should additionally check to see if the calling thread has the
 `],
					[/* inline code block */ 'i', `RuntimePermission("modifyThread")`],
					[/* text */ 't', ` permission, and
 if so, return silently. This is to ensure that code granted
 that permission (such as the JDK itself) is allowed to
 manipulate any thread.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 If this method is overridden, then
 `],
					[/* inline code block */ 'i', `super.checkAccess`],
					[/* text */ 't', ` should
 be called by the first statement in the overridden method, or the
 equivalent security check should be placed in the overridden method.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 't', [/* parameter description */
					[/* text */ 't', `the thread to be checked.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if the calling thread does not have
             permission to modify the thread.`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the thread argument is
             `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'checkAccess(java.lang.ThreadGroup)', [
			[/* method description */
				[/* text */ 't', `Throws a `],
				[/* inline code block */ 'i', `SecurityException`],
				[/* text */ 't', ` if the
 calling thread is not allowed to modify the thread group argument.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method is invoked for the current security manager when a
 new child thread or child thread group is created, and by the
 `],
					[/* inline code block */ 'i', `setDaemon`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `setMaxPriority`],
					[/* text */ 't', `,
 `],
					[/* inline code block */ 'i', `stop`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `suspend`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `resume`],
					[/* text */ 't', `, and
 `],
					[/* inline code block */ 'i', `destroy`],
					[/* text */ 't', ` methods of class `],
					[/* inline code block */ 'i', `ThreadGroup`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the thread group argument is the system thread group (
 has a `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` parent) then
 this method calls `],
					[/* inline code block */ 'i', `checkPermission`],
					[/* text */ 't', ` with the
 `],
					[/* inline code block */ 'i', `RuntimePermission("modifyThreadGroup")`],
					[/* text */ 't', ` permission.
 If the thread group argument is `],
					[/* text */ 't', `not`],
					[/* text */ 't', ` the system thread group,
 this method just returns silently.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 Applications that want a stricter policy should override this
 method. If this method is overridden, the method that overrides
 it should additionally check to see if the calling thread has the
 `],
					[/* inline code block */ 'i', `RuntimePermission("modifyThreadGroup")`],
					[/* text */ 't', ` permission, and
 if so, return silently. This is to ensure that code granted
 that permission (such as the JDK itself) is allowed to
 manipulate any thread.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 If this method is overridden, then
 `],
					[/* inline code block */ 'i', `super.checkAccess`],
					[/* text */ 't', ` should
 be called by the first statement in the overridden method, or the
 equivalent security check should be placed in the overridden method.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'g', [/* parameter description */
					[/* text */ 't', `the thread group to be checked.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if the calling thread does not have
             permission to modify the thread group.`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the thread group argument is
             `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'checkConnect(java.lang.String,int)', [
			[/* method description */
				[/* text */ 't', `Throws a `],
				[/* inline code block */ 'i', `SecurityException`],
				[/* text */ 't', ` if the
 calling thread is not allowed to open a socket connection to the
 specified host and port number.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 A port number of `],
					[/* inline code block */ 'i', `-1`],
					[/* text */ 't', ` indicates that the calling
 method is attempting to determine the IP address of the specified
 host name.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method calls `],
					[/* inline code block */ 'i', `checkPermission`],
					[/* text */ 't', ` with the
 `],
					[/* inline code block */ 'i', `SocketPermission(host+":"+port,"connect")`],
					[/* text */ 't', ` permission if
 the port is not equal to -1. If the port is equal to -1, then
 it calls `],
					[/* inline code block */ 'i', `checkPermission`],
					[/* text */ 't', ` with the
 `],
					[/* inline code block */ 'i', `SocketPermission(host,"resolve")`],
					[/* text */ 't', ` permission.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 If you override this method, then you should make a call to
 `],
					[/* inline code block */ 'i', `super.checkConnect`],
					[/* text */ 't', `
 at the point the overridden method would normally throw an
 exception.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'host', [/* parameter description */
					[/* text */ 't', `the host name port to connect to.`]
				]],
				[/* parameter */ 'port', [/* parameter description */
					[/* text */ 't', `the protocol port to connect to.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if the calling thread does not have
             permission to open a socket connection to the specified
               `],
					[/* inline code block */ 'i', `host`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `port`],
					[/* text */ 't', `.`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `host`],
					[/* text */ 't', ` argument is
             `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'checkConnect(java.lang.String,int,java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Throws a `],
				[/* inline code block */ 'i', `SecurityException`],
				[/* text */ 't', ` if the
 specified security context is not allowed to open a socket
 connection to the specified host and port number.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 A port number of `],
					[/* inline code block */ 'i', `-1`],
					[/* text */ 't', ` indicates that the calling
 method is attempting to determine the IP address of the specified
 host name.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` If `],
					[/* inline code block */ 'i', `context`],
					[/* text */ 't', ` is not an instance of
 `],
					[/* inline code block */ 'i', `AccessControlContext`],
					[/* text */ 't', ` then a
 `],
					[/* inline code block */ 'i', `SecurityException`],
					[/* text */ 't', ` is thrown.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 Otherwise, the port number is checked. If it is not equal
 to -1, the `],
					[/* inline code block */ 'i', `context`],
					[/* text */ 't', `'s `],
					[/* inline code block */ 'i', `checkPermission`],
					[/* text */ 't', `
 method is called with a
 `],
					[/* inline code block */ 'i', `SocketPermission(host+":"+port,"connect")`],
					[/* text */ 't', ` permission.
 If the port is equal to -1, then
 the `],
					[/* inline code block */ 'i', `context`],
					[/* text */ 't', `'s `],
					[/* inline code block */ 'i', `checkPermission`],
					[/* text */ 't', ` method
 is called with a
 `],
					[/* inline code block */ 'i', `SocketPermission(host,"resolve")`],
					[/* text */ 't', ` permission.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 If you override this method, then you should make a call to
 `],
					[/* inline code block */ 'i', `super.checkConnect`],
					[/* text */ 't', `
 at the point the overridden method would normally throw an
 exception.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'host', [/* parameter description */
					[/* text */ 't', `the host name port to connect to.`]
				]],
				[/* parameter */ 'port', [/* parameter description */
					[/* text */ 't', `the protocol port to connect to.`]
				]],
				[/* parameter */ 'context', [/* parameter description */
					[/* text */ 't', `a system-dependent security context.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if the specified security context
             is not an instance of `],
					[/* inline code block */ 'i', `AccessControlContext`],
					[/* text */ 't', `
             (e.g., is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `), or does not have permission
             to open a socket connection to the specified
             `],
					[/* inline code block */ 'i', `host`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `port`],
					[/* text */ 't', `.`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `host`],
					[/* text */ 't', ` argument is
             `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'checkCreateClassLoader()', [
			[/* method description */
				[/* text */ 't', `Throws a `],
				[/* inline code block */ 'i', `SecurityException`],
				[/* text */ 't', ` if the
 calling thread is not allowed to create a new class loader.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method calls `],
					[/* inline code block */ 'i', `checkPermission`],
					[/* text */ 't', ` with the
 `],
					[/* inline code block */ 'i', `RuntimePermission("createClassLoader")`],
					[/* text */ 't', `
 permission.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 If you override this method, then you should make a call to
 `],
					[/* inline code block */ 'i', `super.checkCreateClassLoader`],
					[/* text */ 't', `
 at the point the overridden method would normally throw an
 exception.`]
				]]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if the calling thread does not
             have permission
             to create a new class loader.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'checkDelete(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Throws a `],
				[/* inline code block */ 'i', `SecurityException`],
				[/* text */ 't', ` if the
 calling thread is not allowed to delete the specified file.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method is invoked for the current security manager by the
 `],
					[/* inline code block */ 'i', `delete`],
					[/* text */ 't', ` method of class `],
					[/* inline code block */ 'i', `File`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method calls `],
					[/* inline code block */ 'i', `checkPermission`],
					[/* text */ 't', ` with the
 `],
					[/* inline code block */ 'i', `FilePermission(file,"delete")`],
					[/* text */ 't', ` permission.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 If you override this method, then you should make a call to
 `],
					[/* inline code block */ 'i', `super.checkDelete`],
					[/* text */ 't', `
 at the point the overridden method would normally throw an
 exception.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'file', [/* parameter description */
					[/* text */ 't', `the system-dependent filename.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if the calling thread does not
             have permission to delete the file.`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `file`],
					[/* text */ 't', ` argument is
             `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'checkExec(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Throws a `],
				[/* inline code block */ 'i', `SecurityException`],
				[/* text */ 't', ` if the
 calling thread is not allowed to create a subprocess.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method is invoked for the current security manager by the
 `],
					[/* inline code block */ 'i', `exec`],
					[/* text */ 't', ` methods of class `],
					[/* inline code block */ 'i', `Runtime`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method calls `],
					[/* inline code block */ 'i', `checkPermission`],
					[/* text */ 't', ` with the
 `],
					[/* inline code block */ 'i', `FilePermission(cmd,"execute")`],
					[/* text */ 't', ` permission
 if cmd is an absolute path, otherwise it calls
 `],
					[/* inline code block */ 'i', `checkPermission`],
					[/* text */ 't', ` with
 `],
					[/* inline code block */ 'i', `FilePermission("<<ALL FILES>>","execute")`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 If you override this method, then you should make a call to
 `],
					[/* inline code block */ 'i', `super.checkExec`],
					[/* text */ 't', `
 at the point the overridden method would normally throw an
 exception.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'cmd', [/* parameter description */
					[/* text */ 't', `the specified system command.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if the calling thread does not have
             permission to create a subprocess.`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `cmd`],
					[/* text */ 't', ` argument is
             `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'checkExit(int)', [
			[/* method description */
				[/* text */ 't', `Throws a `],
				[/* inline code block */ 'i', `SecurityException`],
				[/* text */ 't', ` if the
 calling thread is not allowed to cause the Java Virtual Machine to
 halt with the specified status code.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method is invoked for the current security manager by the
 `],
					[/* inline code block */ 'i', `exit`],
					[/* text */ 't', ` method of class `],
					[/* inline code block */ 'i', `Runtime`],
					[/* text */ 't', `. A status
 of `],
					[/* inline code block */ 'i', `0`],
					[/* text */ 't', ` indicates success; other values indicate various
 errors.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method calls `],
					[/* inline code block */ 'i', `checkPermission`],
					[/* text */ 't', ` with the
 `],
					[/* inline code block */ 'i', `RuntimePermission("exitVM."+status)`],
					[/* text */ 't', ` permission.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 If you override this method, then you should make a call to
 `],
					[/* inline code block */ 'i', `super.checkExit`],
					[/* text */ 't', `
 at the point the overridden method would normally throw an
 exception.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'status', [/* parameter description */
					[/* text */ 't', `the exit status.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if the calling thread does not have
              permission to halt the Java Virtual Machine with
              the specified status.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'checkLink(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Throws a `],
				[/* inline code block */ 'i', `SecurityException`],
				[/* text */ 't', ` if the
 calling thread is not allowed to dynamic link the library code
 specified by the string argument file. The argument is either a
 simple library name or a complete filename.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method is invoked for the current security manager by
 methods `],
					[/* inline code block */ 'i', `load`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `loadLibrary`],
					[/* text */ 't', ` of class
 `],
					[/* inline code block */ 'i', `Runtime`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method calls `],
					[/* inline code block */ 'i', `checkPermission`],
					[/* text */ 't', ` with the
 `],
					[/* inline code block */ 'i', `RuntimePermission("loadLibrary."+lib)`],
					[/* text */ 't', ` permission.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 If you override this method, then you should make a call to
 `],
					[/* inline code block */ 'i', `super.checkLink`],
					[/* text */ 't', `
 at the point the overridden method would normally throw an
 exception.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'lib', [/* parameter description */
					[/* text */ 't', `the name of the library.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if the calling thread does not have
             permission to dynamically link the library.`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `lib`],
					[/* text */ 't', ` argument is
             `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'checkListen(int)', [
			[/* method description */
				[/* text */ 't', `Throws a `],
				[/* inline code block */ 'i', `SecurityException`],
				[/* text */ 't', ` if the
 calling thread is not allowed to wait for a connection request on
 the specified local port number.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method calls `],
					[/* inline code block */ 'i', `checkPermission`],
					[/* text */ 't', ` with the
 `],
					[/* inline code block */ 'i', `SocketPermission("localhost:"+port,"listen")`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 If you override this method, then you should make a call to
 `],
					[/* inline code block */ 'i', `super.checkListen`],
					[/* text */ 't', `
 at the point the overridden method would normally throw an
 exception.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'port', [/* parameter description */
					[/* text */ 't', `the local port.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if the calling thread does not have
             permission to listen on the specified port.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'checkMulticast(java.net.InetAddress)', [
			[/* method description */
				[/* text */ 't', `Throws a `],
				[/* inline code block */ 'i', `SecurityException`],
				[/* text */ 't', ` if the
 calling thread is not allowed to use
 (join/leave/send/receive) IP multicast.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method calls `],
					[/* inline code block */ 'i', `checkPermission`],
					[/* text */ 't', ` with the
 `],
					[/* inline code block */ 'i', `java.net.SocketPermission(maddr.getHostAddress(), "accept,connect")`],
					[/* text */ 't', ` permission.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 If you override this method, then you should make a call to
 `],
					[/* inline code block */ 'i', `super.checkMulticast`],
					[/* text */ 't', `
 at the point the overridden method would normally throw an
 exception.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'maddr', [/* parameter description */
					[/* text */ 't', `Internet group address to be used.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if the calling thread is not allowed to
  use (join/leave/send/receive) IP multicast.`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the address argument is
             `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'checkMulticast(java.net.InetAddress,byte)', [
			[/* method description */
				[/* text */ 't', `Throws a `],
				[/* inline code block */ 'i', `SecurityException`],
				[/* text */ 't', ` if the
 calling thread is not allowed to use
 (join/leave/send/receive) IP multicast.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method calls `],
					[/* inline code block */ 'i', `checkPermission`],
					[/* text */ 't', ` with the
 `],
					[/* inline code block */ 'i', `java.net.SocketPermission(maddr.getHostAddress(), "accept,connect")`],
					[/* text */ 't', ` permission.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 If you override this method, then you should make a call to
 `],
					[/* inline code block */ 'i', `super.checkMulticast`],
					[/* text */ 't', `
 at the point the overridden method would normally throw an
 exception.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'maddr', [/* parameter description */
					[/* text */ 't', `Internet group address to be used.`]
				]],
				[/* parameter */ 'ttl', [/* parameter description */
					[/* text */ 't', `value in use, if it is multicast send.
 Note: this particular implementation does not use the ttl
 parameter.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if the calling thread is not allowed to
  use (join/leave/send/receive) IP multicast.`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the address argument is
             `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'checkPackageAccess(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Throws a `],
				[/* inline code block */ 'i', `SecurityException`],
				[/* text */ 't', ` if the calling thread is not allowed
 to access the specified package.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 During class loading, this method may be called by the `],
					[/* inline code block */ 'i', `loadClass`],
					[/* text */ 't', `
 method of class loaders and by the Java Virtual Machine to ensure that
 the caller is allowed to access the package of the class that is
 being loaded.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method checks if the specified package starts with or equals
 any of the packages in the `],
					[/* inline code block */ 'i', `package.access`],
					[/* text */ 't', ` Security Property.
 An implementation may also check the package against an additional
 list of restricted packages as noted below. If the package is restricted,
 `],
					[/* reference */ 'r', `#checkPermission(java.security.Permission)`, `checkPermission(Permission)`],
					[/* text */ 't', ` is called with a
 `],
					[/* inline code block */ 'i', `RuntimePermission("accessClassInPackage."+pkg)`],
					[/* text */ 't', ` permission.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 If this method is overridden, then `],
					[/* inline code block */ 'i', `super.checkPackageAccess`],
					[/* text */ 't', `
 should be called as the first line in the overridden method.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'pkg', [/* parameter description */
					[/* text */ 't', `the package name.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if the calling thread does not have
             permission to access the specified package.`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the package name argument is
             `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'checkPackageDefinition(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Throws a `],
				[/* inline code block */ 'i', `SecurityException`],
				[/* text */ 't', ` if the calling thread is not
 allowed to define classes in the specified package.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method is called by the `],
					[/* inline code block */ 'i', `loadClass`],
					[/* text */ 't', ` method of some
 class loaders.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method checks if the specified package starts with or equals
 any of the packages in the `],
					[/* inline code block */ 'i', `package.definition`],
					[/* text */ 't', ` Security
 Property. An implementation may also check the package against an
 additional list of restricted packages as noted below. If the package
 is restricted, `],
					[/* reference */ 'r', `#checkPermission(java.security.Permission)`, `checkPermission(Permission)`],
					[/* text */ 't', ` is called with a
 `],
					[/* inline code block */ 'i', `RuntimePermission("defineClassInPackage."+pkg)`],
					[/* text */ 't', ` permission.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 If this method is overridden, then `],
					[/* inline code block */ 'i', `super.checkPackageDefinition`],
					[/* text */ 't', `
 should be called as the first line in the overridden method.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'pkg', [/* parameter description */
					[/* text */ 't', `the package name.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if the calling thread does not have
             permission to define classes in the specified package.`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the package name argument is
             `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'checkPermission(java.security.Permission)', [
			[/* method description */
				[/* text */ 't', `Throws a `],
				[/* inline code block */ 'i', `SecurityException`],
				[/* text */ 't', ` if the requested
 access, specified by the given permission, is not permitted based
 on the security policy currently in effect.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method calls `],
					[/* inline code block */ 'i', `AccessController.checkPermission`],
					[/* text */ 't', `
 with the given permission.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'perm', [/* parameter description */
					[/* text */ 't', `the requested permission.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if access is not permitted based on
            the current security policy.`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the permission argument is
            `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'checkPermission(java.security.Permission,java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Throws a `],
				[/* inline code block */ 'i', `SecurityException`],
				[/* text */ 't', ` if the
 specified security context is denied access to the resource
 specified by the given permission.
 The context must be a security
 context returned by a previous call to
 `],
				[/* inline code block */ 'i', `getSecurityContext`],
				[/* text */ 't', ` and the access control
 decision is based upon the configured security policy for
 that security context.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 If `],
					[/* inline code block */ 'i', `context`],
					[/* text */ 't', ` is an instance of
 `],
					[/* inline code block */ 'i', `AccessControlContext`],
					[/* text */ 't', ` then the
 `],
					[/* inline code block */ 'i', `AccessControlContext.checkPermission`],
					[/* text */ 't', ` method is
 invoked with the specified permission.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 If `],
					[/* inline code block */ 'i', `context`],
					[/* text */ 't', ` is not an instance of
 `],
					[/* inline code block */ 'i', `AccessControlContext`],
					[/* text */ 't', ` then a
 `],
					[/* inline code block */ 'i', `SecurityException`],
					[/* text */ 't', ` is thrown.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'perm', [/* parameter description */
					[/* text */ 't', `the specified permission`]
				]],
				[/* parameter */ 'context', [/* parameter description */
					[/* text */ 't', `a system-dependent security context.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if the specified security context
             is not an instance of `],
					[/* inline code block */ 'i', `AccessControlContext`],
					[/* text */ 't', `
             (e.g., is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `), or is denied access to the
             resource specified by the given permission.`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the permission argument is
             `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'checkPrintJobAccess()', [
			[/* method description */
				[/* text */ 't', `Throws a `],
				[/* inline code block */ 'i', `SecurityException`],
				[/* text */ 't', ` if the
 calling thread is not allowed to initiate a print job request.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method calls
 `],
					[/* inline code block */ 'i', `checkPermission`],
					[/* text */ 't', ` with the
 `],
					[/* inline code block */ 'i', `RuntimePermission("queuePrintJob")`],
					[/* text */ 't', ` permission.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 If you override this method, then you should make a call to
 `],
					[/* inline code block */ 'i', `super.checkPrintJobAccess`],
					[/* text */ 't', `
 at the point the overridden method would normally throw an
 exception.`]
				]]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if the calling thread does not have
             permission to initiate a print job request.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'checkPropertiesAccess()', [
			[/* method description */
				[/* text */ 't', `Throws a `],
				[/* inline code block */ 'i', `SecurityException`],
				[/* text */ 't', ` if the
 calling thread is not allowed to access or modify the system
 properties.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method is used by the `],
					[/* inline code block */ 'i', `getProperties`],
					[/* text */ 't', ` and
 `],
					[/* inline code block */ 'i', `setProperties`],
					[/* text */ 't', ` methods of class `],
					[/* inline code block */ 'i', `System`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method calls `],
					[/* inline code block */ 'i', `checkPermission`],
					[/* text */ 't', ` with the
 `],
					[/* inline code block */ 'i', `PropertyPermission("*", "read,write")`],
					[/* text */ 't', ` permission.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 If you override this method, then you should make a call to
 `],
					[/* inline code block */ 'i', `super.checkPropertiesAccess`],
					[/* text */ 't', `
 at the point the overridden method would normally throw an
 exception.`]
				]]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if the calling thread does not have
             permission to access or modify the system properties.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'checkPropertyAccess(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Throws a `],
				[/* inline code block */ 'i', `SecurityException`],
				[/* text */ 't', ` if the
 calling thread is not allowed to access the system property with
 the specified `],
				[/* inline code block */ 'i', `key`],
				[/* text */ 't', ` name.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method is used by the `],
					[/* inline code block */ 'i', `getProperty`],
					[/* text */ 't', ` method of
 class `],
					[/* inline code block */ 'i', `System`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method calls `],
					[/* inline code block */ 'i', `checkPermission`],
					[/* text */ 't', ` with the
 `],
					[/* inline code block */ 'i', `PropertyPermission(key, "read")`],
					[/* text */ 't', ` permission.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 If you override this method, then you should make a call to
 `],
					[/* inline code block */ 'i', `super.checkPropertyAccess`],
					[/* text */ 't', `
 at the point the overridden method would normally throw an
 exception.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'key', [/* parameter description */
					[/* text */ 't', `a system property key.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if the calling thread does not have
             permission to access the specified system property.`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `key`],
					[/* text */ 't', ` argument is
             `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `key`],
					[/* text */ 't', ` is empty.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'checkRead(java.io.FileDescriptor)', [
			[/* method description */
				[/* text */ 't', `Throws a `],
				[/* inline code block */ 'i', `SecurityException`],
				[/* text */ 't', ` if the
 calling thread is not allowed to read from the specified file
 descriptor.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method calls `],
					[/* inline code block */ 'i', `checkPermission`],
					[/* text */ 't', ` with the
 `],
					[/* inline code block */ 'i', `RuntimePermission("readFileDescriptor")`],
					[/* text */ 't', `
 permission.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 If you override this method, then you should make a call to
 `],
					[/* inline code block */ 'i', `super.checkRead`],
					[/* text */ 't', `
 at the point the overridden method would normally throw an
 exception.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'fd', [/* parameter description */
					[/* text */ 't', `the system-dependent file descriptor.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if the calling thread does not have
             permission to access the specified file descriptor.`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the file descriptor argument is
             `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'checkRead(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Throws a `],
				[/* inline code block */ 'i', `SecurityException`],
				[/* text */ 't', ` if the
 calling thread is not allowed to read the file specified by the
 string argument.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method calls `],
					[/* inline code block */ 'i', `checkPermission`],
					[/* text */ 't', ` with the
 `],
					[/* inline code block */ 'i', `FilePermission(file,"read")`],
					[/* text */ 't', ` permission.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 If you override this method, then you should make a call to
 `],
					[/* inline code block */ 'i', `super.checkRead`],
					[/* text */ 't', `
 at the point the overridden method would normally throw an
 exception.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'file', [/* parameter description */
					[/* text */ 't', `the system-dependent file name.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if the calling thread does not have
             permission to access the specified file.`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `file`],
					[/* text */ 't', ` argument is
             `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'checkRead(java.lang.String,java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Throws a `],
				[/* inline code block */ 'i', `SecurityException`],
				[/* text */ 't', ` if the
 specified security context is not allowed to read the file
 specified by the string argument. The context must be a security
 context returned by a previous call to
 `],
				[/* inline code block */ 'i', `getSecurityContext`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', [
					[/* text */ 't', ` If `],
					[/* inline code block */ 'i', `context`],
					[/* text */ 't', ` is an instance of
 `],
					[/* inline code block */ 'i', `AccessControlContext`],
					[/* text */ 't', ` then the
 `],
					[/* inline code block */ 'i', `AccessControlContext.checkPermission`],
					[/* text */ 't', ` method will
 be invoked with the `],
					[/* inline code block */ 'i', `FilePermission(file,"read")`],
					[/* text */ 't', ` permission.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` If `],
					[/* inline code block */ 'i', `context`],
					[/* text */ 't', ` is not an instance of
 `],
					[/* inline code block */ 'i', `AccessControlContext`],
					[/* text */ 't', ` then a
 `],
					[/* inline code block */ 'i', `SecurityException`],
					[/* text */ 't', ` is thrown.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 If you override this method, then you should make a call to
 `],
					[/* inline code block */ 'i', `super.checkRead`],
					[/* text */ 't', `
 at the point the overridden method would normally throw an
 exception.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'file', [/* parameter description */
					[/* text */ 't', `the system-dependent filename.`]
				]],
				[/* parameter */ 'context', [/* parameter description */
					[/* text */ 't', `a system-dependent security context.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if the specified security context
             is not an instance of `],
					[/* inline code block */ 'i', `AccessControlContext`],
					[/* text */ 't', `
             (e.g., is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `), or does not have permission
             to read the specified file.`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `file`],
					[/* text */ 't', ` argument is
             `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'checkSecurityAccess(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Determines whether the permission with the specified permission target
 name should be granted or denied.

 `],
				[/* block */ 'b', ` If the requested permission is allowed, this method returns
 quietly. If denied, a SecurityException is raised.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method creates a `],
					[/* inline code block */ 'i', `SecurityPermission`],
					[/* text */ 't', ` object for
 the given permission target name and calls `],
					[/* inline code block */ 'i', `checkPermission`],
					[/* text */ 't', `
 with it.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` See the documentation for
 `],
					[/* inline code block */ 'i', `SecurityPermission`],
					[/* text */ 't', ` for
 a list of possible permission target names.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` If you override this method, then you should make a call to
 `],
					[/* inline code block */ 'i', `super.checkSecurityAccess`],
					[/* text */ 't', `
 at the point the overridden method would normally throw an
 exception.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'target', [/* parameter description */
					[/* text */ 't', `the target name of the `],
					[/* inline code block */ 'i', `SecurityPermission`],
					[/* text */ 't', `.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if the calling thread does not have
 permission for the requested access.`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `target`],
					[/* text */ 't', ` is null.`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `target`],
					[/* text */ 't', ` is empty.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'checkSetFactory()', [
			[/* method description */
				[/* text */ 't', `Throws a `],
				[/* inline code block */ 'i', `SecurityException`],
				[/* text */ 't', ` if the
 calling thread is not allowed to set the socket factory used by
 `],
				[/* inline code block */ 'i', `ServerSocket`],
				[/* text */ 't', ` or `],
				[/* inline code block */ 'i', `Socket`],
				[/* text */ 't', `, or the stream
 handler factory used by `],
				[/* inline code block */ 'i', `URL`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method calls `],
					[/* inline code block */ 'i', `checkPermission`],
					[/* text */ 't', ` with the
 `],
					[/* inline code block */ 'i', `RuntimePermission("setFactory")`],
					[/* text */ 't', ` permission.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 If you override this method, then you should make a call to
 `],
					[/* inline code block */ 'i', `super.checkSetFactory`],
					[/* text */ 't', `
 at the point the overridden method would normally throw an
 exception.`]
				]]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if the calling thread does not have
             permission to specify a socket factory or a stream
             handler factory.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'checkWrite(java.io.FileDescriptor)', [
			[/* method description */
				[/* text */ 't', `Throws a `],
				[/* inline code block */ 'i', `SecurityException`],
				[/* text */ 't', ` if the
 calling thread is not allowed to write to the specified file
 descriptor.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method calls `],
					[/* inline code block */ 'i', `checkPermission`],
					[/* text */ 't', ` with the
 `],
					[/* inline code block */ 'i', `RuntimePermission("writeFileDescriptor")`],
					[/* text */ 't', `
 permission.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 If you override this method, then you should make a call to
 `],
					[/* inline code block */ 'i', `super.checkWrite`],
					[/* text */ 't', `
 at the point the overridden method would normally throw an
 exception.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'fd', [/* parameter description */
					[/* text */ 't', `the system-dependent file descriptor.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if the calling thread does not have
             permission to access the specified file descriptor.`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the file descriptor argument is
             `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'checkWrite(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Throws a `],
				[/* inline code block */ 'i', `SecurityException`],
				[/* text */ 't', ` if the
 calling thread is not allowed to write to the file specified by
 the string argument.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method calls `],
					[/* inline code block */ 'i', `checkPermission`],
					[/* text */ 't', ` with the
 `],
					[/* inline code block */ 'i', `FilePermission(file,"write")`],
					[/* text */ 't', ` permission.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 If you override this method, then you should make a call to
 `],
					[/* inline code block */ 'i', `super.checkWrite`],
					[/* text */ 't', `
 at the point the overridden method would normally throw an
 exception.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'file', [/* parameter description */
					[/* text */ 't', `the system-dependent filename.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if the calling thread does not
             have permission to access the specified file.`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `file`],
					[/* text */ 't', ` argument is
             `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]]
			],
			/* return */ UDF
		]]
	],
]);
