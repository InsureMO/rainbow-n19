import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.security.Principal', [
	[/* class description */
		[/* text */ 't', `This interface represents the abstract notion of a principal, which
 can be used to represent any entity, such as an individual, a
 corporation, and a login id.`]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'equals(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Compares this principal to the specified object.  Returns true
 if the object passed in matches the principal represented by
 the implementation of this interface.`]
			],
			[/* parameters */
				[/* parameter */ 'another', [/* parameter description */
					[/* text */ 't', `principal to compare with.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if the principal passed in is the same as that
 encapsulated by this principal, and false otherwise.`]
			]
		]],
		[/* method */ 'hashCode()', [
			[/* method description */
				[/* text */ 't', `Returns a hashcode for this principal.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a hashcode for this principal.`]
			]
		]],
		[/* method */ 'getName()', [
			[/* method description */
				[/* text */ 't', `Returns the name of this principal.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the name of this principal.`]
			]
		]],
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Returns a string representation of this principal.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a string representation of this principal.`]
			]
		]],
		[/* method */ 'implies(javax.security.auth.Subject)', [
			[/* method description */
				[/* text */ 't', `Returns true if the specified subject is implied by this principal.`]
			],
			[/* parameters */
				[/* parameter */ 'subject', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `Subject`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if `],
				[/* inline code block */ 'i', `subject`],
				[/* text */ 't', ` is non-null and is
              implied by this principal, or false otherwise.`]
			]
		]]
	],
]);
