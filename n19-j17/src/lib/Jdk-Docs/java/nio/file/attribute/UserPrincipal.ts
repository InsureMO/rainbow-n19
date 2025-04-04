import {UDF} from '../../../../../utils';
import {DocsCollector} from '../../../../DocsCollector';

DocsCollector.collect('java.nio.file.attribute.UserPrincipal', [
	[/* class description */
		[/* text */ 't', `A `],
		[/* inline code block */ 'i', `Principal`],
		[/* text */ 't', ` representing an identity used to determine access rights
 to objects in a file system.

 `],
		[/* block */ 'b', ` On many platforms and file systems an entity requires appropriate access
 rights or permissions in order to access objects in a file system. The
 access rights are generally performed by checking the identity of the entity.
 For example, on implementations that use Access Control Lists (ACLs) to
 enforce privilege separation then a file in the file system may have an
 associated ACL that determines the access rights of identities specified in
 the ACL.

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` A `],
			[/* inline code block */ 'i', `UserPrincipal`],
			[/* text */ 't', ` object is an abstract representation of an
 identity. It has a `],
			[/* reference */ 'r', `java.security.Principal#getName()`, `name`],
			[/* text */ 't', ` that is typically the username or
 account name that it represents. User principal objects may be obtained using
 a `],
			[/* reference */ 'r', `java.nio.file.attribute.UserPrincipalLookupService`, `UserPrincipalLookupService`],
			[/* text */ 't', `, or returned by `],
			[/* reference */ 'r', `java.nio.file.attribute.FileAttributeView`, `FileAttributeView`],
			[/* text */ 't', ` implementations that provide access to identity related
 attributes. For example, the `],
			[/* reference */ 'r', `java.nio.file.attribute.AclFileAttributeView`, `AclFileAttributeView`],
			[/* text */ 't', ` and `],
			[/* reference */ 'r', `java.nio.file.attribute.PosixFileAttributeView`, `PosixFileAttributeView`],
			[/* text */ 't', ` provide access to a file's `],
			[/* reference */ 'r', `java.nio.file.attribute.PosixFileAttributes#owner()`, `owner`],
			[/* text */ 't', `.`]
		]]
	],
	/* fields */,
	/* constructors */,
	/* methods */,
	/* enum values */ UDF
]);
