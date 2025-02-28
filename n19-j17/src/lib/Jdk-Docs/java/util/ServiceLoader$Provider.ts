import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.util.ServiceLoader$Provider', [
	[/* class description */
		[/* text */ 't', `Represents a service provider located by `],
		[/* inline code block */ 'i', `ServiceLoader`],
		[/* text */ 't', `.

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` When using a loader's `],
			[/* external link */ 'a', `ServiceLoader.html#stream()`, `stream()`],
			[/* text */ 't', ` method
 then the elements are of type `],
			[/* inline code block */ 'i', `Provider`],
			[/* text */ 't', `. This allows processing
 to select or filter on the provider class without instantiating the
 provider. `]
		]]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'get()', [
			[/* method description */
				[/* text */ 't', `Returns an instance of the provider.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.util.ServiceConfigurationError', [/* throw description */
					[/* text */ 't', `If the service provider cannot be instantiated, or in the
         case of a provider factory, the public static
         "`],
					[/* inline code block */ 'i', `provider()`],
					[/* text */ 't', `" method returns `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` or throws
         an error or exception. The `],
					[/* inline code block */ 'i', `ServiceConfigurationError`],
					[/* text */ 't', `
         will carry an appropriate cause where possible.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `An instance of the provider.`]
			]
		]],
		[/* method */ 'type()', [
			[/* method description */
				[/* text */ 't', `Returns the provider type. There is no guarantee that this type is
 accessible or that it has a public no-args constructor. The `],
				[/* reference */ 'r', `get()`],
				[/* text */ 't', ` method should be used to obtain the provider instance.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` When a module declares that the provider class is created by a
 provider factory then this method returns the return type of its
 public static "`],
					[/* inline code block */ 'i', `provider()`],
					[/* text */ 't', `" method.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The provider type`]
			]
		]]
	],
]);
