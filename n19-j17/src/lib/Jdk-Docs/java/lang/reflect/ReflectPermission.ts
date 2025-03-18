import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.lang.reflect.ReflectPermission', [
	[/* class description */
		[/* text */ 't', `The Permission class for reflective operations.
 `],
		[/* block */ 'b', `
 The following table
 provides a summary description of what the permission allows,
 and discusses the risks of granting code the permission.

 `],
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
						[/* text */ 't', `suppressAccessChecks`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `ability to suppress the standard Java language access checks
       on fields and methods in a class; allow access not only public members
       but also allow access to default (package) access, protected,
       and private members.`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `This is dangerous in that information (possibly confidential) and
       methods normally unavailable would be accessible to malicious code.`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `newProxyInPackage.{package name}`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `ability to create a proxy instance in the specified package of which
       the non-public interface that the proxy class implements.`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `This gives code access to classes in packages to which it normally
       does not have access and the dynamic proxy class is in the system
       protection domain. Malicious code may use these classes to
       help in its attempt to compromise security in the system.`]
					]]
				]]
			]],
		],
		[/* block */ 'b', '']
	],
	/* fields */,
	[/* constructors */
		[/* constructor */ '<init>(java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a ReflectPermission with the specified name.`]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `the name of the ReflectPermission`]
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
				[/* text */ 't', `Constructs a ReflectPermission with the specified name and actions.
 The actions should be null; they are ignored.`]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `the name of the ReflectPermission`]
				]],
				[/* parameter */ 'actions', [/* parameter description */
					[/* text */ 't', `should be null`]
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
	/* methods */,
	/* enum values */ UDF
]);
