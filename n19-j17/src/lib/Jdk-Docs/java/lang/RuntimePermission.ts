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
		[/* table */ 't', ''],
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
