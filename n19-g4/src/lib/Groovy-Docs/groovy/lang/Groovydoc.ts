import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('groovy.lang.Groovydoc', [
	[ /* class description */
		['b', `An annotation to hold the groovydoc for the annotated element at runtime, we call it "Runtime Groovydoc".
 Runtime Groovydoc is a bit like Python's Documentation Strings and will be useful for IDE and developers who set a high value on documentations.

 The usage is very simple, just place @ at the beginning of the content of groovydoc, i.e. starts with /**@,
 then the new parser Parrot will attach the annotation Groovydoc automatically`],
	],
	UDF,
	/* class sees */ UDF,
	UDF, UDF, UDF
]);
