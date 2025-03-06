import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.lang.RuntimePermission', [
	[/* class description */
		[/* text */ 't', `This class is for runtime permissions. A `],
		[/* inline code block */ 'i', `RuntimePermission`],
		[/* text */ 't', `
 contains a name (also referred to as a "target name") but no actions
 list; you either have the named permission or you don't.
 `],
		[/* block */ 'b', `
 The target name is the name of the runtime permission (see below). The
 naming convention follows the  hierarchical property naming convention.
 Also, an asterisk may appear at the end of the name, following a ".",
 or by itself, to signify a wildcard match. For example: "loadLibrary.*"
 and "*" signify a wildcard match, while "*loadLibrary" and "a*b" do not.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 The following table lists the standard `],
			[/* inline code block */ 'i', `RuntimePermission`],
			[/* text */ 't', `
 target names, and for each provides a description of what the permission
 allows and a discussion of the risks of granting code the permission.

 `]
		]],
		[/* table */ 'tbl',
			[/* caption */ 'tc'],
			[/* table header */ 'th', [
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `Permission Target Name`]
					]],
					[/* table header cell */ 'thc', [
						[/* text */ 't', `What the Permission Allows`]
					]],
					[/* table header cell */ 'thc', [
						[/* text */ 't', `Risks of Allowing this Permission`]
					]]
				]]
			]],
			[/* table body */ 'tb', [
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `createClassLoader`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `Creation of a class loader`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `This is an extremely dangerous permission to grant.
 Malicious applications that can instantiate their own class
 loaders could then load their own rogue classes into the system.
 These newly loaded classes could be placed into any protection
 domain by the class loader, thereby automatically granting the
 classes the permissions for that domain.`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `getClassLoader`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `Retrieval of a class loader (e.g., the class loader for the calling
 class)`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `This would grant an attacker permission to get the
 class loader for a particular class. This is dangerous because
 having access to a class's class loader allows the attacker to
 load other classes available to that class loader. The attacker
 would typically otherwise not have access to those classes.`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `setContextClassLoader`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `Setting of the context class loader used by a thread`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `The context class loader is used by system code and extensions
 when they need to lookup resources that might not exist in the system
 class loader. Granting setContextClassLoader permission would allow
 code to change which context class loader is used
 for a particular thread, including system threads.`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `enableContextClassLoaderOverride`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `Subclass implementation of the thread context class loader methods`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `The context class loader is used by system code and extensions
 when they need to lookup resources that might not exist in the system
 class loader. Granting enableContextClassLoaderOverride permission would allow
 a subclass of Thread to override the methods that are used
 to get or set the context class loader for a particular thread.`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `closeClassLoader`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `Closing of a ClassLoader`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `Granting this permission allows code to close any URLClassLoader
 that it has a reference to.`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `setSecurityManager`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `Setting of the security manager (possibly replacing an existing one)
 `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `The security manager is a class that allows
 applications to implement a security policy. Granting the setSecurityManager
 permission would allow code to change which security manager is used by
 installing a different, possibly less restrictive security manager,
 thereby bypassing checks that would have been enforced by the original
 security manager.`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `createSecurityManager`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `Creation of a new security manager`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `This gives code access to protected, sensitive methods that may
 disclose information about other classes or the execution stack.`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `getenv.{variable name}`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `Reading of the value of the specified environment variable`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `This would allow code to read the value, or determine the
       existence, of a particular environment variable.  This is
       dangerous if the variable contains confidential data.`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `exitVM.{exit status}`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `Halting of the Java Virtual Machine with the specified exit status`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `This allows an attacker to mount a denial-of-service attack
 by automatically forcing the virtual machine to halt.
 Note: The "exitVM.*" permission is automatically granted to all code
 loaded from the application class path, thus enabling applications
 to terminate themselves. Also, the "exitVM" permission is equivalent to
 "exitVM.*".`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `shutdownHooks`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `Registration and cancellation of virtual-machine shutdown hooks`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `This allows an attacker to register a malicious shutdown
 hook that interferes with the clean shutdown of the virtual machine.`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `setFactory`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `Setting of the socket factory used by ServerSocket or Socket,
 or of the stream handler factory used by URL`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `This allows code to set the actual implementation
 for the socket, server socket, stream handler, or RMI socket factory.
 An attacker may set a faulty implementation which mangles the data
 stream.`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `setIO`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `Setting of System.out, System.in, and System.err`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `This allows changing the value of the standard system streams.
 An attacker may change System.in to monitor and
 steal user input, or may set System.err to a "null" OutputStream,
 which would hide any error messages sent to System.err. `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `modifyThread`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `Modification of threads, e.g., via calls to Thread
 `],
						[/* inline code block */ 'i', `interrupt, stop, suspend, resume, setDaemon, setPriority, setName`],
						[/* text */ 't', ` and `],
						[/* inline code block */ 'i', `setUncaughtExceptionHandler`],
						[/* text */ 't', `
 methods`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `This allows an attacker to modify the behaviour of
 any thread in the system.`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `stopThread`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `Stopping of threads via calls to the Thread `],
						[/* inline code block */ 'i', `stop`],
						[/* text */ 't', `
 method`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `This allows code to stop any thread in the system provided that it is
 already granted permission to access that thread.
 This poses as a threat, because that code may corrupt the system by
 killing existing threads.`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `modifyThreadGroup`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `modification of thread groups, e.g., via calls to ThreadGroup
 `],
						[/* inline code block */ 'i', `destroy`],
						[/* text */ 't', `, `],
						[/* inline code block */ 'i', `getParent`],
						[/* text */ 't', `, `],
						[/* inline code block */ 'i', `resume`],
						[/* text */ 't', `,
 `],
						[/* inline code block */ 'i', `setDaemon`],
						[/* text */ 't', `, `],
						[/* inline code block */ 'i', `setMaxPriority`],
						[/* text */ 't', `, `],
						[/* inline code block */ 'i', `stop`],
						[/* text */ 't', `,
 and `],
						[/* inline code block */ 'i', `suspend`],
						[/* text */ 't', ` methods`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `This allows an attacker to create thread groups and
 set their run priority.`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `getProtectionDomain`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `Retrieval of the ProtectionDomain for a class`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `This allows code to obtain policy information
 for a particular code source. While obtaining policy information
 does not compromise the security of the system, it does give
 attackers additional information, such as local file names for
 example, to better aim an attack.`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `getFileSystemAttributes`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `Retrieval of file system attributes`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `This allows code to obtain file system information such as disk usage
       or disk space available to the caller.  This is potentially dangerous
       because it discloses information about the system hardware
       configuration and some information about the caller's privilege to
       write files.`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `readFileDescriptor`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `Reading of file descriptors`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `This would allow code to read the particular file associated
       with the file descriptor read. This is dangerous if the file
       contains confidential data.`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `writeFileDescriptor`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `Writing to file descriptors`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `This allows code to write to a particular file associated
       with the descriptor. This is dangerous because it may allow
       malicious code to plant viruses or at the very least, fill up
       your entire disk.`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `loadLibrary.{library name}`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `Dynamic linking of the specified library`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `It is dangerous to allow an applet permission to load native code
 libraries, because the Java security architecture is not designed to and
 does not prevent malicious behavior at the level of native code.`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `accessClassInPackage.{package name}`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `Access to the specified package via a class loader's
 `],
						[/* inline code block */ 'i', `loadClass`],
						[/* text */ 't', ` method when that class loader calls
 the SecurityManager `],
						[/* inline code block */ 'i', `checkPackageAccess`],
						[/* text */ 't', ` method`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `This gives code access to classes in packages
 to which it normally does not have access. Malicious code
 may use these classes to help in its attempt to compromise
 security in the system.`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `defineClassInPackage.{package name}`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `Definition of classes in the specified package, via a class
 loader's `],
						[/* inline code block */ 'i', `defineClass`],
						[/* text */ 't', ` method when that class loader calls
 the SecurityManager `],
						[/* inline code block */ 'i', `checkPackageDefinition`],
						[/* text */ 't', ` method.`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `This grants code permission to define a class
 in a particular package. This is dangerous because malicious
 code with this permission may define rogue classes in
 trusted packages like `],
						[/* inline code block */ 'i', `java.security`],
						[/* text */ 't', ` or `],
						[/* inline code block */ 'i', `java.lang`],
						[/* text */ 't', `,
 for example.`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `defineClass`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `Define a class with
 `],
						[/* reference */ 'r', `java.lang.invoke.MethodHandles.Lookup#defineClass(byte[])`, `Lookup.defineClass`],
						[/* text */ 't', `.`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `This grants code with a suitably privileged `],
						[/* inline code block */ 'i', `Lookup`],
						[/* text */ 't', ` object
 permission to define classes in the same package as the `],
						[/* inline code block */ 'i', `Lookup`],
						[/* text */ 't', `'s
 lookup class. `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `accessDeclaredMembers`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `Access to the declared members of a class`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `This grants code permission to query a class for its public,
 protected, default (package) access, and private fields and/or
 methods. Although the code would have
 access to the private and protected field and method names, it would not
 have access to the private/protected field data and would not be able
 to invoke any private methods. Nevertheless, malicious code
 may use this information to better aim an attack.
 Additionally, it may invoke any public methods and/or access public fields
 in the class.  This could be dangerous if
 the code would normally not be able to invoke those methods and/or
 access the fields  because
 it can't cast the object to the class/interface with those methods
 and fields.`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `queuePrintJob`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `Initiation of a print job request`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `This could print sensitive information to a printer,
 or simply waste paper.`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `getStackTrace`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `Retrieval of the stack trace information of another thread.`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `This allows retrieval of the stack trace information of
 another thread.  This might allow malicious code to monitor the
 execution of threads and discover vulnerabilities in applications.`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `getStackWalkerWithClassReference`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `Get a stack walker that can retrieve stack frames with class reference.`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `This allows retrieval of Class objects from stack walking.
   This might allow malicious code to access Class objects on the stack
   outside its own context.`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `setDefaultUncaughtExceptionHandler`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `Setting the default handler to be used when a thread
   terminates abruptly due to an uncaught exception`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `This allows an attacker to register a malicious
   uncaught exception handler that could interfere with termination
   of a thread`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `preferences`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `Represents the permission required to get access to the
   java.util.prefs.Preferences implementations user or system root
   which in turn allows retrieval or update operations within the
   Preferences persistent backing store.) `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `This permission allows the user to read from or write to the
   preferences backing store if the user running the code has
   sufficient OS privileges to read/write to that backing store.
   The actual backing store may reside within a traditional filesystem
   directory or within a registry depending on the platform OS`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `manageProcess`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `Native process termination and information about processes
       `],
						[/* reference */ 'r', `java.lang.ProcessHandle`, `ProcessHandle`],
						[/* text */ 't', `.`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `Allows code to identify and terminate processes that it did not create.`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `localeServiceProvider`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `This `],
						[/* inline code block */ 'i', `RuntimePermission`],
						[/* text */ 't', ` is required to be granted to
   classes which subclass and implement
   `],
						[/* inline code block */ 'i', `java.util.spi.LocaleServiceProvider`],
						[/* text */ 't', `. The permission is
   checked during invocation of the abstract base class constructor.
   This permission ensures trust in classes which implement this
   security-sensitive provider mechanism. `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `See `],
						[/* reference */ 'r', `java.util.spi.LocaleServiceProvider`, `java.util.spi.LocaleServiceProvider`],
						[/* text */ 't', ` for more
   information.`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `loggerFinder`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `This `],
						[/* inline code block */ 'i', `RuntimePermission`],
						[/* text */ 't', ` is required to be granted to
   classes which subclass or call methods on
   `],
						[/* inline code block */ 'i', `java.lang.System.LoggerFinder`],
						[/* text */ 't', `. The permission is
   checked during invocation of the abstract base class constructor, as
   well as on the invocation of its public methods.
   This permission ensures trust in classes which provide loggers
   to system classes.`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `See `],
						[/* reference */ 'r', `java.lang.System.LoggerFinder`, `java.lang.System.LoggerFinder`],
						[/* text */ 't', `
   for more information.`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `accessSystemModules`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `Access system modules in the runtime image.`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `This grants the permission to access resources in the
   `],
						[/* reference */ 'r', `java.lang.module.ModuleFinder#ofSystem()`, `system modules`],
						[/* text */ 't', ` in the runtime image.`]
					]]
				]]
			]],
		],
		[/* block */ 'b', '']
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>(java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Creates a new RuntimePermission with the specified name.
 The name is the symbolic name of the RuntimePermission, such as
 "exit", "setFactory", etc. An asterisk
 may appear at the end of the name, following a ".", or by itself, to
 signify a wildcard match.`]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `the name of the RuntimePermission.`]
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
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `name`],
					[/* text */ 't', ` is empty.`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.lang.String,java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Creates a new RuntimePermission object with the specified name.
 The name is the symbolic name of the RuntimePermission, and the
 actions String is currently unused and should be null.`]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `the name of the RuntimePermission.`]
				]],
				[/* parameter */ 'actions', [/* parameter description */
					[/* text */ 't', `should be null.`]
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
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `name`],
					[/* text */ 't', ` is empty.`]
				]]
			]
		]]
	],
	/* methods */ UDF,
]);
