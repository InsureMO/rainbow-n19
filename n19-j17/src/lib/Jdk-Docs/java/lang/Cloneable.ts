import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.lang.Cloneable', [
	[/* class description */
		[/* text */ 't', `A class implements the `],
		[/* inline code block */ 'i', `Cloneable`],
		[/* text */ 't', ` interface to
 indicate to the `],
		[/* reference */ 'r', `.Object#clone()`],
		[/* text */ 't', ` method that it
 is legal for that method to make a
 field-for-field copy of instances of that class.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 Invoking Object's clone method on an instance that does not implement the
 `],
			[/* inline code block */ 'i', `Cloneable`],
			[/* text */ 't', ` interface results in the exception
 `],
			[/* inline code block */ 'i', `CloneNotSupportedException`],
			[/* text */ 't', ` being thrown.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 By convention, classes that implement this interface should override
 `],
			[/* inline code block */ 'i', `Object.clone`],
			[/* text */ 't', ` (which is protected) with a public method.
 See `],
			[/* reference */ 'r', `.Object#clone()`],
			[/* text */ 't', ` for details on overriding this
 method.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 Note that this interface does `],
			[/* text */ 't', `not`],
			[/* text */ 't', ` contain the `],
			[/* inline code block */ 'i', `clone`],
			[/* text */ 't', ` method.
 Therefore, it is not possible to clone an object merely by virtue of the
 fact that it implements this interface.  Even if the clone method is invoked
 reflectively, there is no guarantee that it will succeed.`]
		]]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	/* methods */ UDF,
]);
