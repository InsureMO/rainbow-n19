import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.lang.SuppressWarnings', [
	[/* class description */
		[/* text */ 't', `Indicates that the named compiler warnings should be suppressed in the
 annotated element (and in all program elements contained in the annotated
 element).  Note that the set of warnings suppressed in a given element is
 a superset of the warnings suppressed in all containing elements.  For
 example, if you annotate a class to suppress one warning and annotate a
 method to suppress another, both warnings will be suppressed in the method.
 However, note that if a warning is suppressed in a `],
		[/* inline code block */ 'i', `module-info`],
		[/* text */ 't', ` file, the suppression applies to elements within the
 file and `],
		[/* text */ 't', `not`],
		[/* text */ 't', ` to types contained within the module.

 `],
		[/* block */ 'b', `As a matter of style, programmers should always use this annotation
 on the most deeply nested element where it is effective.  If you want to
 suppress a warning in a particular method, you should annotate that
 method rather than its class.`]
	],
	/* fields */,
	/* constructors */,
	/* methods */,
	/* enum values */ UDF
]);
