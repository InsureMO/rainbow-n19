import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.io.SerializablePermission', [
	[/* class description */
		[/* text */ 't', `This class is for Serializable permissions. A SerializablePermission
 contains a name (also referred to as a "target name") but
 no actions list; you either have the named permission
 or you don't.

 `],
		[/* block */ 'b', `
 The target name is the name of the Serializable permission (see below).

 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 The following table lists the standard `],
			[/* inline code block */ 'i', `SerializablePermission`],
			[/* text */ 't', ` target names,
 and for each provides a description of what the permission allows
 and a discussion of the risks of granting code the permission.

 `]
		]],
		[/* table */ 't', ''],
		[/* block */ 'b', '']
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>(java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Creates a new SerializablePermission with the specified name.
 The name is the symbolic name of the SerializablePermission, such as
 "enableSubstitution", etc.`]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `the name of the SerializablePermission.`]
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
				[/* text */ 't', `Creates a new SerializablePermission object with the specified name.
 The name is the symbolic name of the SerializablePermission, and the
 actions String is currently unused and should be null.`]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `the name of the SerializablePermission.`]
				]],
				[/* parameter */ 'actions', [/* parameter description */
					[/* text */ 't', `currently unused and must be set to null`]
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
