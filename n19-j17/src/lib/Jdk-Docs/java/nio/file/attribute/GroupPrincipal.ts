import {UDF} from '../../../../../utils';
import {DocsCollector} from '../../../../DocsCollector';

DocsCollector.collect('java.nio.file.attribute.GroupPrincipal', [
	[/* class description */
		[/* text */ 't', `A `],
		[/* inline code block */ 'i', `UserPrincipal`],
		[/* text */ 't', ` representing a `],
		[/* text */ 't', `group identity`],
		[/* text */ 't', `, used to
 determine access rights to objects in a file system. The exact definition of
 a group is implementation specific, but typically, it represents an identity
 created for administrative purposes so as to determine the access rights for
 the members of the group. Whether an entity can be a member of multiple
 groups, and whether groups can be nested, are implementation specified and
 therefore not specified.`]
	],
	/* fields */,
	/* constructors */,
	/* methods */,
	/* enum values */ UDF
]);
