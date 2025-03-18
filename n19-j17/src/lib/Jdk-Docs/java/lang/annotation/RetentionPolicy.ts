import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.lang.annotation.RetentionPolicy', [
	[/* class description */
		[/* text */ 't', `Annotation retention policy.  The constants of this enumerated class
 describe the various policies for retaining annotations.  They are used
 in conjunction with the `],
		[/* reference */ 'r', `annotation interface in java.lang.annotation.Retention`, `Retention`],
		[/* text */ 't', ` meta-annotation interface to
 specify how long annotations are to be retained.`]
	],
	/* fields */,
	/* constructors */,
	[/* methods */
		[/* method */ 'valueOf(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Returns the enum constant of this class with the specified name.
The string must match `],
				[/* text */ 't', `exactly`],
				[/* text */ 't', ` an identifier used to declare an
enum constant in this class.  (Extraneous whitespace characters are 
not permitted.)`]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `the name of the enum constant to be returned.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if this enum class has no constant with the specified name`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the argument is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the enum constant with the specified name`]
			]
		]],
		[/* method */ 'values()', [
			[/* method description */
				[/* text */ 't', `Returns an array containing the constants of this enum class, in
the order they are declared.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `an array containing the constants of this enum class, in the order they are declared`]
			]
		]]
	],
	[/* enum values */
		[/* enum value */ 'SOURCE', [
			[/* enum value description */
				[/* text */ 't', `Annotations are to be discarded by the compiler.`]
			],
		]],
		[/* enum value */ 'CLASS', [
			[/* enum value description */
				[/* text */ 't', `Annotations are to be recorded in the class file by the compiler
 but need not be retained by the VM at run time.  This is the default
 behavior.`]
			],
		]],
		[/* enum value */ 'RUNTIME', [
			[/* enum value description */
				[/* text */ 't', `Annotations are to be recorded in the class file by the compiler and
 retained by the VM at run time, so they may be read reflectively.`]
			],
		]]
	],
]);
