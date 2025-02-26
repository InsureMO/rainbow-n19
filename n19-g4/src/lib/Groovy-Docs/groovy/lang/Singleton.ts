import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('groovy.lang.Singleton', [
	[ /* class description */
		['b', `Class annotation to make a singleton class. The singleton is obtained through normal property access using the singleton property (defaults to "instance").

 Such classes can be initialized during normal static initialization of the class or lazily (on first access).
 To make the singleton lazy use`],
		['i', '@Singleton(lazy=true)'],
		['b', `.
 Lazy singletons are implemented with double-checked locking and a volatile backing field.
 By default, no explicit constructors are allowed. To create one or more explicit constructors
 use`],
		['i', '@Singleton(strict=false)'],
		['b', `.
 This could be used to:`],
		['b', `<ul>
 <li>provide your own custom initialization logic in your own no-arg constructor - you
 will be responsible for the entire code (the <code>@Singleton</code> annotation becomes merely documentation)</li>
 <li>provide one or more constructors with arguments for a quasi-singleton - these constructors will be used
 to create instances that are independent of the singleton instance returned by the singleton property</li>
 </ul>`],
	],
	UDF,
	/* class sees */ UDF,
	UDF, UDF, UDF
]);
