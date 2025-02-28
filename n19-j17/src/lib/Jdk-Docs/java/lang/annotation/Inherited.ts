import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.lang.annotation.Inherited', [
	[/* class description */
		[/* text */ 't', `Indicates that an annotation interface is automatically inherited.  If
 an Inherited meta-annotation is present on an annotation interface
 declaration, and the user queries the annotation interface on a class
 declaration, and the class declaration has no annotation for this interface,
 then the class's superclass will automatically be queried for the
 annotation interface.  This process will be repeated until an annotation for
 this interface is found, or the top of the class hierarchy (Object)
 is reached.  If no superclass has an annotation for this interface, then
 the query will indicate that the class in question has no such annotation.

 `],
		[/* block */ 'b', `Note that this meta-annotation interface has no effect if the annotated
 interface is used to annotate anything other than a class.  Note also
 that this meta-annotation only causes annotations to be inherited
 from superclasses; annotations on implemented interfaces have no
 effect.`]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	/* methods */ UDF,
]);
