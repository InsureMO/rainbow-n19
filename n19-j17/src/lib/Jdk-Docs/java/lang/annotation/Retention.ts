import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.lang.annotation.Retention', [
	[/* class description */
		[/* text */ 't', `Indicates how long annotations with the annotated interface are to
 be retained.  If no Retention annotation is present on
 an annotation interface declaration, the retention policy defaults to
 `],
		[/* inline code block */ 'i', `RetentionPolicy.CLASS`],
		[/* text */ 't', `.

 `],
		[/* block */ 'b', `A Retention meta-annotation has effect only if the
 meta-annotated interface is used directly for annotation.  It has no
 effect if the meta-annotated interface is used as a member interface in
 another annotation interface.`]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	/* methods */ UDF,
]);
