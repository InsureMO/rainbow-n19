import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.nio.ByteOrder', [
	[/* class description */
		[/* text */ 't', `A typesafe enumeration for byte orders.`]
	],
	[/* fields */
		[/* field */ 'BIG_ENDIAN', [
			[/* field description */
				[/* text */ 't', `Constant denoting big-endian byte order.  In this order, the bytes of a
 multibyte value are ordered from most significant to least significant.`]
			],
		]],
		[/* field */ 'LITTLE_ENDIAN', [
			[/* field description */
				[/* text */ 't', `Constant denoting little-endian byte order.  In this order, the bytes of
 a multibyte value are ordered from least significant to most
 significant.`]
			],
		]]
	],
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Constructs a string describing this object.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method returns the string
 `],
					[/* inline code block */ 'i', `"BIG_ENDIAN"`],
					[/* text */ 't', ` for `],
					[/* text */ 't', `BIG_ENDIAN`],
					[/* text */ 't', ` and
 `],
					[/* inline code block */ 'i', `"LITTLE_ENDIAN"`],
					[/* text */ 't', ` for `],
					[/* text */ 't', `LITTLE_ENDIAN`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The specified string`]
			]
		]],
		[/* method */ 'nativeOrder()', [
			[/* method description */
				[/* text */ 't', `Retrieves the native byte order of the underlying platform.

 `],
				[/* block */ 'b', ` This method is defined so that performance-sensitive Java code can
 allocate direct buffers with the same byte order as the hardware.
 Native code libraries are often more efficient when such buffers are
 used.  `]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The native byte order of the hardware upon which this Java
          virtual machine is running`]
			]
		]]
	],
]);
