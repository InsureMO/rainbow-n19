import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.security.DomainCombiner', [
	/* class description */ UDF,
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'combine(java.security.ProtectionDomain[],java.security.ProtectionDomain[])', [
			[/* method description */
				[/* text */ 't', `Modify or update the provided ProtectionDomains.
 ProtectionDomains may be added to or removed from the given
 ProtectionDomains.  The ProtectionDomains may be re-ordered.
 Individual ProtectionDomains may be modified (with a new
 set of Permissions, for example).`]
			],
			[/* parameters */
				[/* parameter */ 'currentDomains', [/* parameter description */
					[/* text */ 't', `the ProtectionDomains associated with the
          current execution Thread, up to the most recent
          privileged `],
					[/* inline code block */ 'i', `ProtectionDomain`],
					[/* text */ 't', `.
          The ProtectionDomains are listed in order of execution,
          with the most recently executing `],
					[/* inline code block */ 'i', `ProtectionDomain`],
					[/* text */ 't', `
          residing at the beginning of the array. This parameter may
          be `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` if the current execution Thread
          has no associated ProtectionDomains.`]
				]],
				[/* parameter */ 'assignedDomains', [/* parameter description */
					[/* text */ 't', `an array of inherited ProtectionDomains.
          ProtectionDomains may be inherited from a parent Thread,
          or from a privileged `],
					[/* inline code block */ 'i', `AccessControlContext`],
					[/* text */ 't', `.
          This parameter may be `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `
          if there are no inherited ProtectionDomains.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a new array consisting of the updated ProtectionDomains,
          or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `.`]
			]
		]]
	],
]);
