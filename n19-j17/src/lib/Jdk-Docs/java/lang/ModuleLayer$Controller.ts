import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.lang.ModuleLayer$Controller', [
	[/* class description */
		[/* text */ 't', `Controls a module layer. The static methods defined by `],
		[/* reference */ 'r', `java.lang.ModuleLayer`],
		[/* text */ 't', `
 to create module layers return a `],
		[/* inline code block */ 'i', `Controller`],
		[/* text */ 't', ` that can be used to
 control modules in the layer.

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` Unless otherwise specified, passing a `],
			[/* inline code block */ 'i', `null`],
			[/* text */ 't', ` argument to a
 method in this class causes a `],
			[/* reference */ 'r', `java.lang.NullPointerException`],
			[/* text */ 't', ` to be thrown. `]
		]]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'layer()', [
			[/* method description */
				[/* text */ 't', `Returns the layer that this object controls.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the module layer`]
			]
		]],
		[/* method */ 'addExports(java.lang.Module,java.lang.String,java.lang.Module)', [
			[/* method description */
				[/* text */ 't', `Updates module `],
				[/* inline code block */ 'i', `source`],
				[/* text */ 't', ` in the layer to export a package to
 module `],
				[/* inline code block */ 'i', `target`],
				[/* text */ 't', `. This method is a no-op if `],
				[/* inline code block */ 'i', `source`],
				[/* text */ 't', `
 already exports the package to at least `],
				[/* inline code block */ 'i', `target`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'source', [/* parameter description */
					[/* text */ 't', `The source module`]
				]],
				[/* parameter */ 'pn', [/* parameter description */
					[/* text */ 't', `The package name`]
				]],
				[/* parameter */ 'target', [/* parameter description */
					[/* text */ 't', `The target module`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `source`],
					[/* text */ 't', ` is not in the module layer or the package
         is not in the source module`]
				]]
			],
			[/* return description */
				[/* text */ 't', `This controller`]
			]
		]],
		[/* method */ 'addOpens(java.lang.Module,java.lang.String,java.lang.Module)', [
			[/* method description */
				[/* text */ 't', `Updates module `],
				[/* inline code block */ 'i', `source`],
				[/* text */ 't', ` in the layer to open a package to
 module `],
				[/* inline code block */ 'i', `target`],
				[/* text */ 't', `. This method is a no-op if `],
				[/* inline code block */ 'i', `source`],
				[/* text */ 't', `
 already opens the package to at least `],
				[/* inline code block */ 'i', `target`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'source', [/* parameter description */
					[/* text */ 't', `The source module`]
				]],
				[/* parameter */ 'pn', [/* parameter description */
					[/* text */ 't', `The package name`]
				]],
				[/* parameter */ 'target', [/* parameter description */
					[/* text */ 't', `The target module`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `source`],
					[/* text */ 't', ` is not in the module layer or the package
         is not in the source module`]
				]]
			],
			[/* return description */
				[/* text */ 't', `This controller`]
			]
		]],
		[/* method */ 'addReads(java.lang.Module,java.lang.Module)', [
			[/* method description */
				[/* text */ 't', `Updates module `],
				[/* inline code block */ 'i', `source`],
				[/* text */ 't', ` in the layer to read module
 `],
				[/* inline code block */ 'i', `target`],
				[/* text */ 't', `. This method is a no-op if `],
				[/* inline code block */ 'i', `source`],
				[/* text */ 't', ` already
 reads `],
				[/* inline code block */ 'i', `target`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'source', [/* parameter description */
					[/* text */ 't', `The source module`]
				]],
				[/* parameter */ 'target', [/* parameter description */
					[/* text */ 't', `The target module to read`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `source`],
					[/* text */ 't', ` is not in the module layer`]
				]]
			],
			[/* return description */
				[/* text */ 't', `This controller`]
			]
		]]
	],
]);
