import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.lang.annotation.Native', [
	[/* class description */
		[/* text */ 't', `Indicates that a field defining a constant value may be referenced
 from native code.

 The annotation may be used as a hint by tools that generate native
 header files to determine whether a header file is required, and
 if so, what declarations it should contain.`]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	/* methods */ UDF,
]);
