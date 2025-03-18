import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.lang.annotation.Documented', [
	[/* class description */
		[/* text */ 't', `If the annotation `],
		[/* inline code block */ 'i', `@Documented`],
		[/* text */ 't', ` is present on the declaration
 of an annotation interface `],
		[/* text */ 't', `A`],
		[/* text */ 't', `, then any `],
		[/* inline code block */ 'i', `@A`],
		[/* text */ 't', ` annotation on
 an element is considered part of the element's public contract.

 In more detail, when an annotation interface `],
		[/* text */ 't', `A`],
		[/* text */ 't', ` is annotated with
 `],
		[/* inline code block */ 'i', `Documented`],
		[/* text */ 't', `, the presence and value of `],
		[/* text */ 't', `A`],
		[/* text */ 't', ` annotations
 are a part of the public contract of the elements `],
		[/* text */ 't', `A`],
		[/* text */ 't', `
 annotates.

 Conversely, if an annotation interface `],
		[/* text */ 't', `B`],
		[/* text */ 't', ` is `],
		[/* text */ 't', `not`],
		[/* text */ 't', `
 annotated with `],
		[/* inline code block */ 'i', `Documented`],
		[/* text */ 't', `, the presence and value of
 `],
		[/* text */ 't', `B`],
		[/* text */ 't', ` annotations are `],
		[/* text */ 't', `not`],
		[/* text */ 't', ` part of the public contract
 of the elements `],
		[/* text */ 't', `B`],
		[/* text */ 't', ` annotates.

 Concretely, if an annotation interface is annotated with `],
		[/* inline code block */ 'i', `Documented`],
		[/* text */ 't', `,
 by default a tool like javadoc will display annotations of that interface
 in its output while annotations of annotation interfaces without
 `],
		[/* inline code block */ 'i', `Documented`],
		[/* text */ 't', ` will not be displayed.`]
	],
	/* fields */,
	/* constructors */,
	/* methods */,
	/* enum values */ UDF
]);
