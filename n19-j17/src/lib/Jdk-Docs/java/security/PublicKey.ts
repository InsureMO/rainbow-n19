import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.security.PublicKey', [
	[/* class description */
		[/* block */ 'b', [
			[/* text */ 't', `A public key. This interface contains no methods or constants.
 It merely serves to group (and provide type safety for) all public key
 interfaces.

 Note: The specialized public key interfaces extend this interface.
 See, for example, the DSAPublicKey interface in
 `],
			[/* inline code block */ 'i', `java.security.interfaces`],
			[/* text */ 't', `.`]
		]]
	],
	[/* fields */
		[/* field */ 'serialVersionUID', [
			[/* field description */
				[/* text */ 't', `The class fingerprint that is set to indicate serialization
 compatibility with a previous version of the class.`]
			],
		]]
	],
	/* constructors */ UDF,
	/* methods */ UDF,
]);
