import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.lang.Enum$EnumDesc', [
	[/* class description */
		[/* text */ 't', `A `],
		[/* external link */ 'a', `../../../java.base/java/lang/constant/package-summary.html#nominal`, `nominal descriptor`],
		[/* text */ 't', ` for an
 `],
		[/* inline code block */ 'i', `enum`],
		[/* text */ 't', ` constant.`]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'toString()', UDF],
		[/* method */ 'of(java.lang.constant.ClassDesc,java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Returns a nominal descriptor for the specified `],
				[/* inline code block */ 'i', `enum`],
				[/* text */ 't', ` class and name`]
			],
			[/* parameters */
				[/* parameter */ 'enumClass', [/* parameter description */
					[/* text */ 't', `a `],
					[/* reference */ 'r', `java.lang.constant.ClassDesc`],
					[/* text */ 't', ` describing the `],
					[/* inline code block */ 'i', `enum`],
					[/* text */ 't', ` class`]
				]],
				[/* parameter */ 'constantName', [/* parameter description */
					[/* text */ 't', `the unqualified name of the enum constant`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if any argument is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the nominal descriptor`]
			]
		]],
		[/* method */ 'resolveConstantDesc(java.lang.invoke.MethodHandles.Lookup)', UDF]
	],
]);
