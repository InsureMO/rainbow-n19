import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.lang.reflect.Member', [
	[/* class description */
		[/* text */ 't', `Member is an interface that reflects identifying information about
 a single member (a field or a method) or a constructor.`]
	],
	[/* fields */
		[/* field */ 'PUBLIC', [
			[/* field description */
				[/* text */ 't', `Identifies the set of all public members of a class or interface,
 including inherited members.`]
			],
		]],
		[/* field */ 'DECLARED', [
			[/* field description */
				[/* text */ 't', `Identifies the set of declared members of a class or interface.
 Inherited members are not included.`]
			],
		]]
	],
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'getName()', [
			[/* method description */
				[/* text */ 't', `Returns the simple name of the underlying member or constructor
 represented by this Member.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the simple name of the underlying member`]
			]
		]],
		[/* method */ 'getModifiers()', [
			[/* method description */
				[/* text */ 't', `Returns the Java language modifiers for the member or
 constructor represented by this Member, as an integer.  The
 Modifier class should be used to decode the modifiers in
 the integer.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the Java language modifiers for the underlying member`]
			]
		]],
		[/* method */ 'isSynthetic()', [
			[/* method description */
				[/* text */ 't', `Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this member was introduced by
 the compiler; returns `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if and only if this member was introduced by
 the compiler.`]
			]
		]],
		[/* method */ 'getDeclaringClass()', [
			[/* method description */
				[/* text */ 't', `Returns the Class object representing the class or interface
 that declares the member or constructor represented by this Member.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an object representing the declaring class of the
 underlying member`]
			]
		]]
	],
]);
