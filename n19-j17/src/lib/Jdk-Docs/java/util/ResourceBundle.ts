import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.util.ResourceBundle', [
	[/* class description */
		[/* text */ 't', `Resource bundles contain locale-specific objects.  When your program needs a
 locale-specific resource, a `],
		[/* inline code block */ 'i', `String`],
		[/* text */ 't', ` for example, your program can
 load it from the resource bundle that is appropriate for the current user's
 locale. In this way, you can write program code that is largely independent
 of the user's locale isolating most, if not all, of the locale-specific
 information in resource bundles.

 `],
		[/* block */ 'b', `
 This allows you to write programs that can:
 `],
		[/* list */ 'l', [
			[/* block */ 'b', ` be easily localized, or translated, into different languages
 `],
			[/* block */ 'b', ` handle multiple locales at once
 `],
			[/* block */ 'b', ` be easily modified later to support even more locales
 `]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', `
 Resource bundles belong to families whose members share a common base
 name, but whose names also have additional components that identify
 their locales. For example, the base name of a family of resource
 bundles might be "MyResources". The family should have a default
 resource bundle which simply has the same name as its family -
 "MyResources" - and will be used as the bundle of last resort if a
 specific locale is not supported. The family can then provide as
 many locale-specific members as needed, for example a German one
 named "MyResources_de".

 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 Each resource bundle in a family contains the same items, but the items have
 been translated for the locale represented by that resource bundle.
 For example, both "MyResources" and "MyResources_de" may have a
 `],
			[/* inline code block */ 'i', `String`],
			[/* text */ 't', ` that's used on a button for canceling operations.
 In "MyResources" the `],
			[/* inline code block */ 'i', `String`],
			[/* text */ 't', ` may contain "Cancel" and in
 "MyResources_de" it may contain "Abbrechen".

 `]
		]],
		[/* block */ 'b', `
 If there are different resources for different countries, you
 can make specializations: for example, "MyResources_de_CH" contains objects for
 the German language (de) in Switzerland (CH). If you want to only
 modify some of the resources
 in the specialization, you can do so.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 When your program needs a locale-specific object, it loads
 the `],
			[/* inline code block */ 'i', `ResourceBundle`],
			[/* text */ 't', ` class using the
 `],
			[/* reference */ 'r', `#getBundle(java.lang.String,java.util.Locale)`, `getBundle`],
			[/* text */ 't', `
 method:
 `]
		]],
		[/* block */ 'b', [
			[/* code block */ 'c', ` ResourceBundle myResources =
      ResourceBundle.getBundle("MyResources", currentLocale);
 `]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `
 Resource bundles contain key/value pairs. The keys uniquely
 identify a locale-specific object in the bundle. Here's an
 example of a `],
			[/* inline code block */ 'i', `ListResourceBundle`],
			[/* text */ 't', ` that contains
 two key/value pairs:
 `]
		]],
		[/* block */ 'b', [
			[/* code block */ 'c', ` public class MyResources extends ListResourceBundle {
     protected Object[][] getContents() {
         return new Object[][] {
             // LOCALIZE THE SECOND STRING OF EACH ARRAY (e.g., "OK")
             {"OkKey", "OK"},
             {"CancelKey", "Cancel"},
             // END OF MATERIAL TO LOCALIZE
        };
     }
 }
 `]
		]],
		[/* text */ 't', `
 Keys are always `],
		[/* inline code block */ 'i', `String`],
		[/* text */ 't', `s.
 In this example, the keys are "OkKey" and "CancelKey".
 In the above example, the values
 are also `],
		[/* inline code block */ 'i', `String`],
		[/* text */ 't', `s--"OK" and "Cancel"--but
 they don't have to be. The values can be any type of object.

 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `
 You retrieve an object from resource bundle using the appropriate
 getter method. Because "OkKey" and "CancelKey"
 are both strings, you would use `],
			[/* inline code block */ 'i', `getString`],
			[/* text */ 't', ` to retrieve them:
 `]
		]],
		[/* block */ 'b', [
			[/* code block */ 'c', ` button1 = new Button(myResources.getString("OkKey"));
 button2 = new Button(myResources.getString("CancelKey"));
 `]
		]],
		[/* text */ 't', `
 The getter methods all require the key as an argument and return
 the object if found. If the object is not found, the getter method
 throws a `],
		[/* inline code block */ 'i', `MissingResourceException`],
		[/* text */ 't', `.

 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `
 Besides `],
			[/* inline code block */ 'i', `getString`],
			[/* text */ 't', `, `],
			[/* inline code block */ 'i', `ResourceBundle`],
			[/* text */ 't', ` also provides
 a method for getting string arrays, `],
			[/* inline code block */ 'i', `getStringArray`],
			[/* text */ 't', `,
 as well as a generic `],
			[/* inline code block */ 'i', `getObject`],
			[/* text */ 't', ` method for any other
 type of object. When using `],
			[/* inline code block */ 'i', `getObject`],
			[/* text */ 't', `, you'll
 have to cast the result to the appropriate type. For example:
 `]
		]],
		[/* block */ 'b', [
			[/* code block */ 'c', ` int[] myIntegers = (int[]) myResources.getObject("intList");
 `]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `
 The Java Platform provides two subclasses of `],
			[/* inline code block */ 'i', `ResourceBundle`],
			[/* text */ 't', `,
 `],
			[/* inline code block */ 'i', `ListResourceBundle`],
			[/* text */ 't', ` and `],
			[/* inline code block */ 'i', `PropertyResourceBundle`],
			[/* text */ 't', `,
 that provide a fairly simple way to create resources.
 As you saw briefly in a previous example, `],
			[/* inline code block */ 'i', `ListResourceBundle`],
			[/* text */ 't', `
 manages its resource as a list of key/value pairs.
 `],
			[/* inline code block */ 'i', `PropertyResourceBundle`],
			[/* text */ 't', ` uses a properties file to manage
 its resources.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 If `],
			[/* inline code block */ 'i', `ListResourceBundle`],
			[/* text */ 't', ` or `],
			[/* inline code block */ 'i', `PropertyResourceBundle`],
			[/* text */ 't', `
 do not suit your needs, you can write your own `],
			[/* inline code block */ 'i', `ResourceBundle`],
			[/* text */ 't', `
 subclass.  Your subclasses must override two methods: `],
			[/* inline code block */ 'i', `handleGetObject`],
			[/* text */ 't', `
 and `],
			[/* inline code block */ 'i', `getKeys()`],
			[/* text */ 't', `.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 The implementation of a `],
			[/* inline code block */ 'i', `ResourceBundle`],
			[/* text */ 't', ` subclass must be thread-safe
 if it's simultaneously used by multiple threads. The default implementations
 of the non-abstract methods in this class, and the methods in the direct
 known concrete subclasses `],
			[/* inline code block */ 'i', `ListResourceBundle`],
			[/* text */ 't', ` and
 `],
			[/* inline code block */ 'i', `PropertyResourceBundle`],
			[/* text */ 't', ` are thread-safe.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Resource Bundles and Named Modules`]
		]],
		[/* text */ 't', `

 Resource bundles can be deployed in modules in the following ways:

 `],
		[/* block */ 'b', `Resource bundles together with an application`],
		[/* text */ 't', `

 Resource bundles can be deployed together with an application in the same
 module.  In that case, the resource bundles are loaded
 by code in the module by calling the `],
		[/* reference */ 'r', `#getBundle(java.lang.String)`, `getBundle(String)`],
		[/* text */ 't', `
 or `],
		[/* reference */ 'r', `#getBundle(java.lang.String,java.util.Locale)`, `getBundle(String, Locale)`],
		[/* text */ 't', ` method.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `Resource bundles as service providers`]
		]],
		[/* text */ 't', `

 Resource bundles can be deployed in one or more `],
		[/* text */ 't', `service provider modules`],
		[/* text */ 't', `
 and they can be located using `],
		[/* reference */ 'r', `java.util.ServiceLoader`],
		[/* text */ 't', `.
 A `],
		[/* reference */ 'r', `java.util.spi.ResourceBundleProvider`],
		[/* text */ 't', ` interface or class must be
 defined. The caller module declares that it uses the service, the service
 provider modules declare that they provide implementations of the service.
 Refer to `],
		[/* reference */ 'r', `java.util.spi.ResourceBundleProvider`],
		[/* text */ 't', ` for developing resource bundle
 services and deploying resource bundle providers.
 The module obtaining the resource bundle can be a resource bundle
 provider itself; in which case this module only locates the resource bundle
 via service provider mechanism.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `A `],
			[/* reference */ 'r', `java.util.spi.ResourceBundleProvider`],
			[/* text */ 't', ` can
 provide resource bundles in any format such XML which replaces the need
 of `],
			[/* reference */ 'r', `java.util.ResourceBundle.Control`],
			[/* text */ 't', `.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Resource bundles in other modules and class path`]
		]],
		[/* text */ 't', `

 Resource bundles in a named module may be `],
		[/* text */ 't', `encapsulated`],
		[/* text */ 't', ` so that
 it cannot be located by code in other modules.  Resource bundles
 in unnamed modules and class path are open for any module to access.
 Resource bundle follows the resource encapsulation rules as specified
 in `],
		[/* reference */ 'r', `java.Module#getResourceAsStream(java.lang.String)`],
		[/* text */ 't', `.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `The `],
			[/* inline code block */ 'i', `getBundle`],
			[/* text */ 't', ` factory methods with no `],
			[/* inline code block */ 'i', `Control`],
			[/* text */ 't', ` parameter
 locate and load resource bundles from
 `],
			[/* reference */ 'r', `java.util.spi.ResourceBundleProvider`],
			[/* text */ 't', `.
 It may continue the search as if calling `],
			[/* reference */ 'r', `java.Module#getResourceAsStream(java.lang.String)`],
			[/* text */ 't', `
 to find the named resource from a given module and calling
 `],
			[/* reference */ 'r', `java.ClassLoader#getResourceAsStream(java.lang.String)`],
			[/* text */ 't', `; refer to
 the specification of the `],
			[/* inline code block */ 'i', `getBundle`],
			[/* text */ 't', ` method for details.
 Only non-encapsulated resource bundles of "`],
			[/* inline code block */ 'i', `java.class`],
			[/* text */ 't', `"
 or "`],
			[/* inline code block */ 'i', `java.properties`],
			[/* text */ 't', `" format are searched.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `If the caller module is a
 `],
			[/* text */ 't', `resource bundle provider`],
			[/* text */ 't', `, it does not fall back to the
 class loader search.

 `]
		]],
		[/* block */ 'b', `Resource bundles in automatic modules`],
		[/* text */ 't', `

 A common format of resource bundles is in `],
		[/* reference */ 'r', `java.util.PropertyResourceBundle`],
		[/* text */ 't', ` file format.  Typically `],
		[/* inline code block */ 'i', `.properties`],
		[/* text */ 't', ` resource bundles
 are packaged in a JAR file.  Resource bundle only JAR file can be readily
 deployed as an `],
		[/* text */ 't', `automatic module`],
		[/* text */ 't', `.  For example, if the JAR file contains the
 entry "`],
		[/* inline code block */ 'i', `p/q/Foo_ja.properties`],
		[/* text */ 't', `" and no `],
		[/* inline code block */ 'i', `.class`],
		[/* text */ 't', ` entry,
 when resolved and defined as an automatic module, no package is derived
 for this module.  This allows resource bundles in `],
		[/* inline code block */ 'i', `.properties`],
		[/* text */ 't', `
 format packaged in one or more JAR files that may contain entries
 in the same directory and can be resolved successfully as
 automatic modules.

 `],
		[/* block */ 'b', `ResourceBundle.Control`],
		[/* text */ 't', `

 The `],
		[/* reference */ 'r', `java.util.ResourceBundle.Control`],
		[/* text */ 't', ` class provides information necessary
 to perform the bundle loading process by the `],
		[/* inline code block */ 'i', `getBundle`],
		[/* text */ 't', `
 factory methods that take a `],
		[/* inline code block */ 'i', `ResourceBundle.Control`],
		[/* text */ 't', `
 instance. You can implement your own subclass in order to enable
 non-standard resource bundle formats, change the search strategy, or
 define caching parameters. Refer to the descriptions of the class and the
 `],
		[/* reference */ 'r', `#getBundle(java.lang.String,java.util.Locale,java.lang.ClassLoader,java.util.ResourceBundle.Control)`, `getBundle`],
		[/* text */ 't', `
 factory method for details.

 `],
		[/* block */ 'b', [
			[/* reference */ 'r', `java.util.ResourceBundle.Control`],
			[/* text */ 't', ` is designed for an application deployed
 in an unnamed module, for example to support resource bundles in
 non-standard formats or package localized resources in a non-traditional
 convention. `],
			[/* reference */ 'r', `java.util.spi.ResourceBundleProvider`],
			[/* text */ 't', ` is the replacement for
 `],
			[/* inline code block */ 'i', `ResourceBundle.Control`],
			[/* text */ 't', ` when migrating to modules.
 `],
			[/* inline code block */ 'i', `UnsupportedOperationException`],
			[/* text */ 't', ` will be thrown when a factory
 method that takes the `],
			[/* inline code block */ 'i', `ResourceBundle.Control`],
			[/* text */ 't', ` parameter is called.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `For the getBundle factory`],
			[/* text */ 't', `
 methods that take no `],
			[/* reference */ 'r', `java.util.ResourceBundle.Control`],
			[/* text */ 't', ` instance, their `],
			[/* text */ 't', `default behavior`],
			[/* text */ 't', ` of resource bundle loading
 can be modified with custom `],
			[/* reference */ 'r', `java.util.spi.ResourceBundleControlProvider`],
			[/* text */ 't', ` implementations.
 If any of the
 providers provides a `],
			[/* reference */ 'r', `java.util.ResourceBundle.Control`],
			[/* text */ 't', ` for the given base name, that `],
			[/* reference */ 'r', `java.util.ResourceBundle.Control`],
			[/* text */ 't', ` will be used instead of the default `],
			[/* reference */ 'r', `java.util.ResourceBundle.Control`],
			[/* text */ 't', `. If there is
 more than one service provider for supporting the same base name,
 the first one returned from `],
			[/* reference */ 'r', `java.util.ServiceLoader`],
			[/* text */ 't', ` will be used.
 A custom `],
			[/* reference */ 'r', `java.util.ResourceBundle.Control`],
			[/* text */ 't', ` implementation is ignored by named modules.

 `]
		]],
		[/* block */ 'b', `Cache Management`],
		[/* text */ 't', `

 Resource bundle instances created by the `],
		[/* inline code block */ 'i', `getBundle`],
		[/* text */ 't', ` factory
 methods are cached by default, and the factory methods return the same
 resource bundle instance multiple times if it has been
 cached. `],
		[/* inline code block */ 'i', `getBundle`],
		[/* text */ 't', ` clients may clear the cache, manage the
 lifetime of cached resource bundle instances using time-to-live values,
 or specify not to cache resource bundle instances. Refer to the
 descriptions of the `],
		[/* reference */ 'r', `#getBundle(java.lang.String,java.util.Locale,java.lang.ClassLoader,java.util.ResourceBundle.Control)`, `getBundle`],
		[/* text */ 't', `, `],
		[/* reference */ 'r', `#clearCache(java.lang.ClassLoader)`, `clearCache`],
		[/* text */ 't', `, `],
		[/* reference */ 'r', `.ResourceBundle.Control#getTimeToLive(java.lang.String,java.util.Locale)`],
		[/* text */ 't', `, and `],
		[/* reference */ 'r', `.ResourceBundle.Control#needsReload(java.lang.String,java.util.Locale,java.lang.String,java.lang.ClassLoader,java.util.ResourceBundle,long)`],
		[/* text */ 't', ` for details.

 `],
		[/* block */ 'b', `Example`],
		[/* text */ 't', `

 The following is a very simple example of a `],
		[/* inline code block */ 'i', `ResourceBundle`],
		[/* text */ 't', `
 subclass, `],
		[/* inline code block */ 'i', `MyResources`],
		[/* text */ 't', `, that manages two resources (for a larger number of
 resources you would probably use a `],
		[/* inline code block */ 'i', `Map`],
		[/* text */ 't', `).
 Notice that you don't need to supply a value if
 a "parent-level" `],
		[/* inline code block */ 'i', `ResourceBundle`],
		[/* text */ 't', ` handles the same
 key with the same value (as for the okKey below).
 `],
		[/* block */ 'b', [
			[/* code block */ 'c', ` // default (English language, United States)
 public class MyResources extends ResourceBundle {
     public Object handleGetObject(String key) {
         if (key.equals("okKey")) return "Ok";
         if (key.equals("cancelKey")) return "Cancel";
         return null;
     }

     public Enumeration<String> getKeys() {
         return Collections.enumeration(keySet());
     }

     // Overrides handleKeySet() so that the getKeys() implementation
     // can rely on the keySet() value.
     protected Set<String> handleKeySet() {
         return new HashSet<String>(Arrays.asList("okKey", "cancelKey"));
     }
 }

 // German language
 public class MyResources_de extends MyResources {
     public Object handleGetObject(String key) {
         // don't need okKey, since parent level handles it.
         if (key.equals("cancelKey")) return "Abbrechen";
         return null;
     }

     protected Set<String> handleKeySet() {
         return new HashSet<String>(Arrays.asList("cancelKey"));
     }
 }
 `]
		]],
		[/* text */ 't', `
 You do not have to restrict yourself to using a single family of
 `],
		[/* inline code block */ 'i', `ResourceBundle`],
		[/* text */ 't', `s. For example, you could have a set of bundles for
 exception messages, `],
		[/* inline code block */ 'i', `ExceptionResources`],
		[/* text */ 't', `
 (`],
		[/* inline code block */ 'i', `ExceptionResources_fr`],
		[/* text */ 't', `, `],
		[/* inline code block */ 'i', `ExceptionResources_de`],
		[/* text */ 't', `, ...),
 and one for widgets, `],
		[/* inline code block */ 'i', `WidgetResource`],
		[/* text */ 't', ` (`],
		[/* inline code block */ 'i', `WidgetResources_fr`],
		[/* text */ 't', `,
 `],
		[/* inline code block */ 'i', `WidgetResources_de`],
		[/* text */ 't', `, ...); breaking up the resources however you like.`]
	],
	[/* fields */
		[/* field */ 'parent', [
			[/* field description */
				[/* text */ 't', `The parent bundle of this bundle.
 The parent bundle is searched by `],
				[/* reference */ 'r', `#getObject(java.lang.String)`, `getObject`],
				[/* text */ 't', `
 when this bundle does not contain a particular resource.`]
			],
		]]
	],
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Sole constructor.  (For invocation by subclass constructors, typically
 implicit.)`]
			],
			/* parameters */ UDF,
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'containsKey(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Determines whether the given `],
				[/* inline code block */ 'i', `key`],
				[/* text */ 't', ` is contained in
 this `],
				[/* inline code block */ 'i', `ResourceBundle`],
				[/* text */ 't', ` or its parent bundles.`]
			],
			[/* parameters */
				[/* parameter */ 'key', [/* parameter description */
					[/* text */ 't', `the resource `],
					[/* inline code block */ 'i', `key`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `key`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the given `],
				[/* inline code block */ 'i', `key`],
				[/* text */ 't', ` is
        contained in this `],
				[/* inline code block */ 'i', `ResourceBundle`],
				[/* text */ 't', ` or its
        parent bundles; `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'keySet()', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `Set`],
				[/* text */ 't', ` of all keys contained in this
 `],
				[/* inline code block */ 'i', `ResourceBundle`],
				[/* text */ 't', ` and its parent bundles.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Set`],
				[/* text */ 't', ` of all keys contained in this
         `],
				[/* inline code block */ 'i', `ResourceBundle`],
				[/* text */ 't', ` and its parent bundles.`]
			]
		]],
		[/* method */ 'setParent(java.util.ResourceBundle)', [
			[/* method description */
				[/* text */ 't', `Sets the parent bundle of this bundle.
 The parent bundle is searched by `],
				[/* reference */ 'r', `#getObject(java.lang.String)`, `getObject`],
				[/* text */ 't', `
 when this bundle does not contain a particular resource.`]
			],
			[/* parameters */
				[/* parameter */ 'parent', [/* parameter description */
					[/* text */ 't', `this bundle's parent bundle.`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'getObject(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Gets an object for the given key from this resource bundle or one of its parents.
 This method first tries to obtain the object from this resource bundle using
 `],
				[/* reference */ 'r', `#handleGetObject(java.lang.String)`, `handleGetObject`],
				[/* text */ 't', `.
 If not successful, and the parent resource bundle is not null,
 it calls the parent's `],
				[/* inline code block */ 'i', `getObject`],
				[/* text */ 't', ` method.
 If still not successful, it throws a MissingResourceException.`]
			],
			[/* parameters */
				[/* parameter */ 'key', [/* parameter description */
					[/* text */ 't', `the key for the desired object`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `key`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`]
				]],
				[/* throw */ 'java.util.MissingResourceException', [/* throw description */
					[/* text */ 't', `if no object for the given key can be found`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the object for the given key`]
			]
		]],
		[/* method */ 'getString(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Gets a string for the given key from this resource bundle or one of its parents.
 Calling this method is equivalent to calling
 `],
				[/* block */ 'b', [
					[/* inline code block */ 'i', `(String) getObject(key)`],
					[/* text */ 't', `.
 `]
				]]
			],
			[/* parameters */
				[/* parameter */ 'key', [/* parameter description */
					[/* text */ 't', `the key for the desired string`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `key`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`]
				]],
				[/* throw */ 'java.util.MissingResourceException', [/* throw description */
					[/* text */ 't', `if no object for the given key can be found`]
				]],
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the object found for the given key is not a string`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the string for the given key`]
			]
		]],
		[/* method */ 'getKeys()', [
			[/* method description */
				[/* text */ 't', `Returns an enumeration of the keys.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an `],
				[/* inline code block */ 'i', `Enumeration`],
				[/* text */ 't', ` of the keys contained in
         this `],
				[/* inline code block */ 'i', `ResourceBundle`],
				[/* text */ 't', ` and its parent bundles.`]
			]
		]],
		[/* method */ 'getBaseBundleName()', [
			[/* method description */
				[/* text */ 't', `Returns the base name of this bundle, if known, or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if unknown.

 If not null, then this is the value of the `],
				[/* inline code block */ 'i', `baseName`],
				[/* text */ 't', ` parameter
 that was passed to the `],
				[/* inline code block */ 'i', `ResourceBundle.getBundle(...)`],
				[/* text */ 't', ` method
 when the resource bundle was loaded.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The base name of the resource bundle, as provided to and expected
 by the `],
				[/* inline code block */ 'i', `ResourceBundle.getBundle(...)`],
				[/* text */ 't', ` methods.`]
			]
		]],
		[/* method */ 'getBundle(java.lang.String,java.util.Locale,java.lang.ClassLoader)', [
			[/* method description */
				[/* text */ 't', `Gets a resource bundle using the specified base name, locale, and class
 loader.

 `],
				[/* block */ 'b', `When this method is called from a named module and the given
 loader is the class loader of the caller module, this is equivalent
 to calling:
 `],
				[/* block */ 'b', [
					[/* code block */ 'c', ` getBundle(baseName, targetLocale, callerModule)
 `]
				]],
				[/* text */ 't', `

 otherwise, this is equivalent to calling:
 `],
				[/* block */ 'b', [
					[/* code block */ 'c', ` getBundle(baseName, targetLocale, loader, control)
 `]
				]],
				[/* text */ 't', `
 where `],
				[/* inline code block */ 'i', `control`],
				[/* text */ 't', ` is the default instance of `],
				[/* reference */ 'r', `java.util.ResourceBundle.Control`],
				[/* text */ 't', ` unless
 a `],
				[/* inline code block */ 'i', `Control`],
				[/* text */ 't', ` instance is provided by
 `],
				[/* reference */ 'r', `java.util.spi.ResourceBundleControlProvider`],
				[/* text */ 't', ` SPI.  Refer to the
 description of `],
				[/* text */ 't', `modifying the default behavior`],
				[/* text */ 't', `. The following describes the default behavior.

 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `Resource Bundle Search and Loading Strategy`]
				]],
				[/* block */ 'b', [
					[/* inline code block */ 'i', `getBundle`],
					[/* text */ 't', ` uses the base name, the specified locale, and
 the default locale (obtained from `],
					[/* reference */ 'r', `.Locale#getDefault()`],
					[/* text */ 't', `) to generate a sequence of `],
					[/* text */ 't', `candidate bundle names`],
					[/* text */ 't', `.  If the specified
 locale's language, script, country, and variant are all empty strings,
 then the base name is the only candidate bundle name.  Otherwise, a list
 of candidate locales is generated from the attribute values of the
 specified locale (language, script, country and variant) and appended to
 the base name.  Typically, this will look like the following:

 `]
				]],
				[/* code block */ 'c', `     baseName + "_" + language + "_" + script + "_" + country + "_" + variant
     baseName + "_" + language + "_" + script + "_" + country
     baseName + "_" + language + "_" + script
     baseName + "_" + language + "_" + country + "_" + variant
     baseName + "_" + language + "_" + country
     baseName + "_" + language
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', `Candidate bundle names where the final component is an empty string
 are omitted, along with the underscore.  For example, if country is an
 empty string, the second and the fifth candidate bundle names above
 would be omitted.  Also, if script is an empty string, the candidate names
 including script are omitted.  For example, a locale with language "de"
 and variant "JAVA" will produce candidate names with base name
 "MyResource" below.

 `],
				[/* code block */ 'c', `     MyResource_de__JAVA
     MyResource_de
 `],
				[/* text */ 't', `

 In the case that the variant contains one or more underscores ('_'), a
 sequence of bundle names generated by truncating the last underscore and
 the part following it is inserted after a candidate bundle name with the
 original variant.  For example, for a locale with language "en", script
 "Latn, country "US" and variant "WINDOWS_VISTA", and bundle base name
 "MyResource", the list of candidate bundle names below is generated:

 `],
				[/* code block */ 'c', ` MyResource_en_Latn_US_WINDOWS_VISTA
 MyResource_en_Latn_US_WINDOWS
 MyResource_en_Latn_US
 MyResource_en_Latn
 MyResource_en_US_WINDOWS_VISTA
 MyResource_en_US_WINDOWS
 MyResource_en_US
 MyResource_en
 `],
				[/* block */ 'b', [
					[/* text */ 't', `Note:`],
					[/* text */ 't', ` For some `],
					[/* inline code block */ 'i', `Locale`],
					[/* text */ 't', `s, the list of
 candidate bundle names contains extra names, or the order of bundle names
 is slightly modified.  See the description of the default implementation
 of `],
					[/* reference */ 'r', `.ResourceBundle.Control#getCandidateLocales(java.lang.String,java.util.Locale)`],
					[/* text */ 't', ` for details.`]
				]],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* inline code block */ 'i', `getBundle`],
					[/* text */ 't', ` then iterates over the candidate bundle names
 to find the first one for which it can `],
					[/* text */ 't', `instantiate`],
					[/* text */ 't', ` an actual
 resource bundle. It uses the default controls' `],
					[/* reference */ 'r', `.ResourceBundle.Control#getFormats(java.lang.String)`],
					[/* text */ 't', ` method, which generates two bundle names for each generated
 name, the first a class name and the second a properties file name. For
 each candidate bundle name, it attempts to create a resource bundle:

 `]
				]],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `First, it attempts to load a class using the generated class name.
 If such a class can be found and loaded using the specified class
 loader, is assignment compatible with ResourceBundle, is accessible from
 ResourceBundle, and can be instantiated, `],
						[/* inline code block */ 'i', `getBundle`],
						[/* text */ 't', ` creates a
 new instance of this class and uses it as the `],
						[/* text */ 't', `result resource
 bundle`],
						[/* text */ 't', `.

 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `Otherwise, `],
						[/* inline code block */ 'i', `getBundle`],
						[/* text */ 't', ` attempts to locate a property
 resource file using the generated properties file name.  It generates a
 path name from the candidate bundle name by replacing all "." characters
 with "/" and appending the string ".properties".  It attempts to find a
 "resource" with this name using `],
						[/* reference */ 'r', `java.ClassLoader#getResource(java.lang.String)`],
						[/* text */ 't', `.  (Note that a "resource" in the sense of
 `],
						[/* inline code block */ 'i', `getResource`],
						[/* text */ 't', ` has nothing to do with the contents of a
 resource bundle, it is just a container of data, such as a file.)  If it
 finds a "resource", it attempts to create a new `],
						[/* reference */ 'r', `java.util.PropertyResourceBundle`],
						[/* text */ 't', ` instance from its contents.  If successful, this
 instance becomes the `],
						[/* text */ 't', `result resource bundle`],
						[/* text */ 't', `.  `]
					]]
				]],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `This continues until a result resource bundle is instantiated or the
 list of candidate bundle names is exhausted.  If no matching resource
 bundle is found, the default control's `],
					[/* reference */ 'r', `.ResourceBundle.Control#getFallbackLocale(java.lang.String,java.util.Locale)`],
					[/* text */ 't', ` method is called, which returns the current default
 locale.  A new sequence of candidate locale names is generated using this
 locale and searched again, as above.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `If still no result bundle is found, the base name alone is looked up. If
 this still fails, a `],
					[/* inline code block */ 'i', `MissingResourceException`],
					[/* text */ 't', ` is thrown.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `Once a result resource bundle has been found, its parent chain is instantiated`],
					[/* text */ 't', `.  If the result bundle already
 has a parent (perhaps because it was returned from a cache) the chain is
 complete.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `Otherwise, `],
					[/* inline code block */ 'i', `getBundle`],
					[/* text */ 't', ` examines the remainder of the
 candidate locale list that was used during the pass that generated the
 result resource bundle.  (As before, candidate bundle names where the
 final component is an empty string are omitted.)  When it comes to the
 end of the candidate list, it tries the plain bundle name.  With each of the
 candidate bundle names it attempts to instantiate a resource bundle (first
 looking for a class and then a properties file, as described above).

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `Whenever it succeeds, it calls the previously instantiated resource
 bundle's `],
					[/* reference */ 'r', `#setParent(java.util.ResourceBundle)`, `setParent`],
					[/* text */ 't', ` method
 with the new resource bundle.  This continues until the list of names
 is exhausted or the current bundle already has a non-null parent.

 `]
				]],
				[/* block */ 'b', `Once the parent chain is complete, the bundle is returned.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Note:`],
					[/* inline code block */ 'i', `getBundle`],
					[/* text */ 't', ` caches instantiated resource
 bundles and might return the same resource bundle instance multiple times.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `Note:`],
					[/* text */ 't', `The `],
					[/* inline code block */ 'i', `baseName`],
					[/* text */ 't', ` argument should be a fully
 qualified class name. However, for compatibility with earlier versions,
 Java SE Runtime Environments do not verify this, and so it is
 possible to access `],
					[/* inline code block */ 'i', `PropertyResourceBundle`],
					[/* text */ 't', `s by specifying a
 path name (using "/") instead of a fully qualified class name (using
 ".").

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `Example:`]
				]],
				[/* block */ 'b', `
 The following class and property files are provided:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', `MyResources.class
     `],
					[/* block */ 'b', `MyResources.properties
     `],
					[/* block */ 'b', `MyResources_fr.properties
     `],
					[/* block */ 'b', `MyResources_fr_CH.class
     `],
					[/* block */ 'b', `MyResources_fr_CH.properties
     `],
					[/* block */ 'b', `MyResources_en.properties
     `],
					[/* block */ 'b', `MyResources_es_ES.class
 `]
				]],
				[/* text */ 't', `

 The contents of all files are valid (that is, public non-abstract
 subclasses of `],
				[/* inline code block */ 'i', `ResourceBundle`],
				[/* text */ 't', ` for the ".class" files,
 syntactically correct ".properties" files).  The default locale is
 `],
				[/* inline code block */ 'i', `Locale("en", "GB")`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `Calling `],
					[/* inline code block */ 'i', `getBundle`],
					[/* text */ 't', ` with the locale arguments below will
 instantiate resource bundles as follows:

 `]
				]],
				[/* table */ 'tbl',
					[/* caption */ 'tc'],
					[/* table header */ 'th', [
						[/* table row */ 'tr', [
							[/* table header cell */ 'thc', [
								[/* text */ 't', `Locale`]
							]],
							[/* table header cell */ 'thc', [
								[/* text */ 't', `Resource bundle`]
							]]
						]]
					]],
					[/* table body */ 'tb', [
						[/* table row */ 'tr', [
							[/* table header cell */ 'thc', [
								[/* text */ 't', `Locale("fr", "CH")`]
							]],
							[/* table cell */ 'tbc', [
								[/* text */ 't', `MyResources_fr_CH.class, parent MyResources_fr.properties, parent MyResources.class`]
							]]
						]],
						[/* table row */ 'tr', [
							[/* table header cell */ 'thc', [
								[/* text */ 't', `Locale("fr", "FR")`]
							]],
							[/* table cell */ 'tbc', [
								[/* text */ 't', `MyResources_fr.properties, parent MyResources.class`]
							]]
						]],
						[/* table row */ 'tr', [
							[/* table header cell */ 'thc', [
								[/* text */ 't', `Locale("de", "DE")`]
							]],
							[/* table cell */ 'tbc', [
								[/* text */ 't', `MyResources_en.properties, parent MyResources.class`]
							]]
						]],
						[/* table row */ 'tr', [
							[/* table header cell */ 'thc', [
								[/* text */ 't', `Locale("en", "US")`]
							]],
							[/* table cell */ 'tbc', [
								[/* text */ 't', `MyResources_en.properties, parent MyResources.class`]
							]]
						]],
						[/* table row */ 'tr', [
							[/* table header cell */ 'thc', [
								[/* text */ 't', `Locale("es", "ES")`]
							]],
							[/* table cell */ 'tbc', [
								[/* text */ 't', `MyResources_es_ES.class, parent MyResources.class`]
							]]
						]]
					]],
				],
				[/* block */ 'b', ''],
				[/* block */ 'b', `The file MyResources_fr_CH.properties is never used because it is
 hidden by the MyResources_fr_CH.class. Likewise, MyResources.properties
 is also hidden by MyResources.class.`]
			],
			[/* parameters */
				[/* parameter */ 'baseName', [/* parameter description */
					[/* text */ 't', `the base name of the resource bundle, a fully qualified class name`]
				]],
				[/* parameter */ 'locale', [/* parameter description */
					[/* text */ 't', `the locale for which a resource bundle is desired`]
				]],
				[/* parameter */ 'loader', [/* parameter description */
					[/* text */ 't', `the class loader from which to load the resource bundle`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `baseName`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `locale`],
					[/* text */ 't', `, or `],
					[/* inline code block */ 'i', `loader`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`]
				]],
				[/* throw */ 'java.util.MissingResourceException', [/* throw description */
					[/* text */ 't', `if no resource bundle for the specified base name can be found`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a resource bundle for the given base name and locale`]
			]
		]],
		[/* method */ 'getBundle(java.lang.String,java.util.Locale,java.lang.ClassLoader,java.util.ResourceBundle.Control)', [
			[/* method description */
				[/* text */ 't', `Returns a resource bundle using the specified base name, target
 locale, class loader and control. Unlike the `],
				[/* reference */ 'r', `#getBundle(java.lang.String,java.util.Locale,java.lang.ClassLoader)`, `getBundle`],
				[/* text */ 't', `
 factory methods with no `],
				[/* inline code block */ 'i', `control`],
				[/* text */ 't', ` argument, the given
 `],
				[/* inline code block */ 'i', `control`],
				[/* text */ 't', ` specifies how to locate and instantiate resource
 bundles. Conceptually, the bundle loading process with the given
 `],
				[/* inline code block */ 'i', `control`],
				[/* text */ 't', ` is performed in the following steps.

 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `This factory method looks up the resource bundle in the cache for
 the specified `],
						[/* inline code block */ 'i', `baseName`],
						[/* text */ 't', `, `],
						[/* inline code block */ 'i', `targetLocale`],
						[/* text */ 't', ` and
 `],
						[/* inline code block */ 'i', `loader`],
						[/* text */ 't', `.  If the requested resource bundle instance is
 found in the cache and the time-to-live periods of the instance and
 all of its parent instances have not expired, the instance is returned
 to the caller. Otherwise, this factory method proceeds with the
 loading process below.`]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `The `],
						[/* reference */ 'r', `.ResourceBundle.Control#getFormats(java.lang.String)`],
						[/* text */ 't', ` method is called to get resource bundle formats
 to produce bundle or resource names. The strings
 `],
						[/* inline code block */ 'i', `"java.class"`],
						[/* text */ 't', ` and `],
						[/* inline code block */ 'i', `"java.properties"`],
						[/* text */ 't', `
 designate class-based and `],
						[/* reference */ 'r', `java.util.PropertyResourceBundle`],
						[/* text */ 't', `-based resource bundles, respectively. Other strings
 starting with `],
						[/* inline code block */ 'i', `"java."`],
						[/* text */ 't', ` are reserved for future extensions
 and must not be used for application-defined formats. Other strings
 designate application-defined formats.`]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `The `],
						[/* reference */ 'r', `.ResourceBundle.Control#getCandidateLocales(java.lang.String,java.util.Locale)`],
						[/* text */ 't', ` method is called with the target
 locale to get a list of `],
						[/* inline code block */ 'i', `Locale`],
						[/* text */ 't', ` for
 which resource bundles are searched.`]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `The `],
						[/* reference */ 'r', `.ResourceBundle.Control#newBundle(java.lang.String,java.util.Locale,java.lang.String,java.lang.ClassLoader,boolean)`],
						[/* text */ 't', ` method is called to
 instantiate a `],
						[/* inline code block */ 'i', `ResourceBundle`],
						[/* text */ 't', ` for the base bundle name, a
 candidate locale, and a format. (Refer to the note on the cache
 lookup below.) This step is iterated over all combinations of the
 candidate locales and formats until the `],
						[/* inline code block */ 'i', `newBundle`],
						[/* text */ 't', ` method
 returns a `],
						[/* inline code block */ 'i', `ResourceBundle`],
						[/* text */ 't', ` instance or the iteration has
 used up all the combinations. For example, if the candidate locales
 are `],
						[/* inline code block */ 'i', `Locale("de", "DE")`],
						[/* text */ 't', `, `],
						[/* inline code block */ 'i', `Locale("de")`],
						[/* text */ 't', ` and
 `],
						[/* inline code block */ 'i', `Locale("")`],
						[/* text */ 't', ` and the formats are `],
						[/* inline code block */ 'i', `"java.class"`],
						[/* text */ 't', `
 and `],
						[/* inline code block */ 'i', `"java.properties"`],
						[/* text */ 't', `, then the following is the
 sequence of locale-format combinations to be used to call
 `],
						[/* inline code block */ 'i', `control.newBundle`],
						[/* text */ 't', `.

 `],
						[/* table */ 'tbl',
							[/* caption */ 'tc'],
							[/* table header */ 'th', [
								[/* table row */ 'tr', [
									[/* table header cell */ 'thc', [
										[/* text */ 't', `Index`]
									]],
									[/* table header cell */ 'thc', [
										[/* inline code block */ 'i', `Locale`]
									]],
									[/* table header cell */ 'thc', [
										[/* inline code block */ 'i', `format`]
									]]
								]]
							]],
							[/* table body */ 'tb', [
								[/* table row */ 'tr', [
									[/* table header cell */ 'thc', [
										[/* text */ 't', `1`]
									]],
									[/* table cell */ 'tbc', [
										[/* inline code block */ 'i', `Locale("de", "DE")`]
									]],
									[/* table cell */ 'tbc', [
										[/* inline code block */ 'i', `java.class`]
									]]
								]],
								[/* table row */ 'tr', [
									[/* table header cell */ 'thc', [
										[/* text */ 't', `2`]
									]],
									[/* table cell */ 'tbc', [
										[/* inline code block */ 'i', `Locale("de", "DE")`]
									]],
									[/* table cell */ 'tbc', [
										[/* inline code block */ 'i', `java.properties`]
									]]
								]],
								[/* table row */ 'tr', [
									[/* table header cell */ 'thc', [
										[/* text */ 't', `3`]
									]],
									[/* table cell */ 'tbc', [
										[/* inline code block */ 'i', `Locale("de")`]
									]],
									[/* table cell */ 'tbc', [
										[/* inline code block */ 'i', `java.class`]
									]]
								]],
								[/* table row */ 'tr', [
									[/* table header cell */ 'thc', [
										[/* text */ 't', `4`]
									]],
									[/* table cell */ 'tbc', [
										[/* inline code block */ 'i', `Locale("de")`]
									]],
									[/* table cell */ 'tbc', [
										[/* inline code block */ 'i', `java.properties`]
									]]
								]],
								[/* table row */ 'tr', [
									[/* table header cell */ 'thc', [
										[/* text */ 't', `5`]
									]],
									[/* table cell */ 'tbc', [
										[/* inline code block */ 'i', `Locale("")`]
									]],
									[/* table cell */ 'tbc', [
										[/* inline code block */ 'i', `java.class`]
									]]
								]],
								[/* table row */ 'tr', [
									[/* table header cell */ 'thc', [
										[/* text */ 't', `6`]
									]],
									[/* table cell */ 'tbc', [
										[/* inline code block */ 'i', `Locale("")`]
									]],
									[/* table cell */ 'tbc', [
										[/* inline code block */ 'i', `java.properties`]
									]]
								]]
							]],
						]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `If the previous step has found no resource bundle, proceed to
 Step 6. If a bundle has been found that is a base bundle (a bundle
 for `],
						[/* inline code block */ 'i', `Locale("")`],
						[/* text */ 't', `), and the candidate locale list only contained
 `],
						[/* inline code block */ 'i', `Locale("")`],
						[/* text */ 't', `, return the bundle to the caller. If a bundle
 has been found that is a base bundle, but the candidate locale list
 contained locales other than Locale(""), put the bundle on hold and
 proceed to Step 6. If a bundle has been found that is not a base
 bundle, proceed to Step 7.`]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `The `],
						[/* reference */ 'r', `.ResourceBundle.Control#getFallbackLocale(java.lang.String,java.util.Locale)`],
						[/* text */ 't', ` method is called to get a fallback
 locale (alternative to the current target locale) to try further
 finding a resource bundle. If the method returns a non-null locale,
 it becomes the next target locale and the loading process starts over
 from Step 3. Otherwise, if a base bundle was found and put on hold in
 a previous Step 5, it is returned to the caller now. Otherwise, a
 MissingResourceException is thrown.`]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `At this point, we have found a resource bundle that's not the
 base bundle. If this bundle set its parent during its instantiation,
 it is returned to the caller. Otherwise, its `],
						[/* reference */ 'r', `.ResourceBundle#parent_chain`],
						[/* text */ 't', ` is
 instantiated based on the list of candidate locales from which it was
 found. Finally, the bundle is returned to the caller.`]
					]]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `During the resource bundle loading process above, this factory
 method looks up the cache before calling the `],
					[/* reference */ 'r', `.ResourceBundle.Control#newBundle(java.lang.String,java.util.Locale,java.lang.String,java.lang.ClassLoader,boolean)`],
					[/* text */ 't', ` method.  If the time-to-live period of the
 resource bundle found in the cache has expired, the factory method
 calls the `],
					[/* reference */ 'r', `.ResourceBundle.Control#needsReload(java.lang.String,java.util.Locale,java.lang.String,java.lang.ClassLoader,java.util.ResourceBundle,long)`],
					[/* text */ 't', `
 method to determine whether the resource bundle needs to be reloaded.
 If reloading is required, the factory method calls
 `],
					[/* inline code block */ 'i', `control.newBundle`],
					[/* text */ 't', ` to reload the resource bundle.  If
 `],
					[/* inline code block */ 'i', `control.newBundle`],
					[/* text */ 't', ` returns `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `, the factory
 method puts a dummy resource bundle in the cache as a mark of
 nonexistent resource bundles in order to avoid lookup overhead for
 subsequent requests. Such dummy resource bundles are under the same
 expiration control as specified by `],
					[/* inline code block */ 'i', `control`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `All resource bundles loaded are cached by default. Refer to
 `],
					[/* reference */ 'r', `.ResourceBundle.Control#getTimeToLive(java.lang.String,java.util.Locale)`],
					[/* text */ 't', ` for details.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The following is an example of the bundle loading process with the
 default `],
					[/* inline code block */ 'i', `ResourceBundle.Control`],
					[/* text */ 't', ` implementation.

 `]
				]],
				[/* block */ 'b', `Conditions:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `Base bundle name: `],
						[/* inline code block */ 'i', `foo.bar.Messages`]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `Requested `],
						[/* inline code block */ 'i', `Locale`],
						[/* text */ 't', `: `],
						[/* reference */ 'r', `.Locale#ITALY`]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `Default `],
						[/* inline code block */ 'i', `Locale`],
						[/* text */ 't', `: `],
						[/* reference */ 'r', `.Locale#FRENCH`]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `Available resource bundles:
 `],
						[/* inline code block */ 'i', `foo/bar/Messages_fr.properties`],
						[/* text */ 't', ` and
 `],
						[/* inline code block */ 'i', `foo/bar/Messages.properties`]
					]]
				]],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `First, `],
					[/* inline code block */ 'i', `getBundle`],
					[/* text */ 't', ` tries loading a resource bundle in
 the following sequence.

 `]
				]],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `class `],
						[/* inline code block */ 'i', `foo.bar.Messages_it_IT`]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `file `],
						[/* inline code block */ 'i', `foo/bar/Messages_it_IT.properties`]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `class `],
						[/* inline code block */ 'i', `foo.bar.Messages_it`]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `file `],
						[/* inline code block */ 'i', `foo/bar/Messages_it.properties`]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `class `],
						[/* inline code block */ 'i', `foo.bar.Messages`]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `file `],
						[/* inline code block */ 'i', `foo/bar/Messages.properties`]
					]]
				]],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `At this point, `],
					[/* inline code block */ 'i', `getBundle`],
					[/* text */ 't', ` finds
 `],
					[/* inline code block */ 'i', `foo/bar/Messages.properties`],
					[/* text */ 't', `, which is put on hold
 because it's the base bundle.  `],
					[/* inline code block */ 'i', `getBundle`],
					[/* text */ 't', ` calls `],
					[/* reference */ 'r', `.ResourceBundle.Control#getFallbackLocale(java.lang.String,java.util.Locale)`],
					[/* text */ 't', ` which
 returns `],
					[/* inline code block */ 'i', `Locale.FRENCH`],
					[/* text */ 't', `. Next, `],
					[/* inline code block */ 'i', `getBundle`],
					[/* text */ 't', `
 tries loading a bundle in the following sequence.

 `]
				]],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `class `],
						[/* inline code block */ 'i', `foo.bar.Messages_fr`]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `file `],
						[/* inline code block */ 'i', `foo/bar/Messages_fr.properties`]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `class `],
						[/* inline code block */ 'i', `foo.bar.Messages`]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `file `],
						[/* inline code block */ 'i', `foo/bar/Messages.properties`]
					]]
				]],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* inline code block */ 'i', `getBundle`],
					[/* text */ 't', ` finds
 `],
					[/* inline code block */ 'i', `foo/bar/Messages_fr.properties`],
					[/* text */ 't', ` and creates a
 `],
					[/* inline code block */ 'i', `ResourceBundle`],
					[/* text */ 't', ` instance. Then, `],
					[/* inline code block */ 'i', `getBundle`],
					[/* text */ 't', `
 sets up its parent chain from the list of the candidate locales.  Only
 `],
					[/* inline code block */ 'i', `foo/bar/Messages.properties`],
					[/* text */ 't', ` is found in the list and
 `],
					[/* inline code block */ 'i', `getBundle`],
					[/* text */ 't', ` creates a `],
					[/* inline code block */ 'i', `ResourceBundle`],
					[/* text */ 't', ` instance
 that becomes the parent of the instance for
 `],
					[/* inline code block */ 'i', `foo/bar/Messages_fr.properties`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'baseName', [/* parameter description */
					[/* text */ 't', `the base name of the resource bundle, a fully qualified
        class name`]
				]],
				[/* parameter */ 'targetLocale', [/* parameter description */
					[/* text */ 't', `the locale for which a resource bundle is desired`]
				]],
				[/* parameter */ 'loader', [/* parameter description */
					[/* text */ 't', `the class loader from which to load the resource bundle`]
				]],
				[/* parameter */ 'control', [/* parameter description */
					[/* text */ 't', `the control which gives information for the resource
        bundle loading process`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `baseName`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `targetLocale`],
					[/* text */ 't', `,
         `],
					[/* inline code block */ 'i', `loader`],
					[/* text */ 't', `, or `],
					[/* inline code block */ 'i', `control`],
					[/* text */ 't', ` is
         `],
					[/* inline code block */ 'i', `null`]
				]],
				[/* throw */ 'java.util.MissingResourceException', [/* throw description */
					[/* text */ 't', `if no resource bundle for the specified base name can be found`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the given `],
					[/* inline code block */ 'i', `control`],
					[/* text */ 't', ` doesn't perform properly
         (e.g., `],
					[/* inline code block */ 'i', `control.getCandidateLocales`],
					[/* text */ 't', ` returns null.)
         Note that validation of `],
					[/* inline code block */ 'i', `control`],
					[/* text */ 't', ` is performed as
         needed.`]
				]],
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if this method is called in a named module`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a resource bundle for the given base name and locale`]
			]
		]],
		[/* method */ 'getBundle(java.lang.String,java.util.ResourceBundle.Control)', [
			[/* method description */
				[/* text */ 't', `Returns a resource bundle using the specified base name, the
 default locale and the specified control. Calling this method
 is equivalent to calling
 `],
				[/* code block */ 'c', ` getBundle(baseName, Locale.getDefault(),
           this.getClass().getClassLoader(), control),
 `],
				[/* text */ 't', `
 except that `],
				[/* inline code block */ 'i', `getClassLoader()`],
				[/* text */ 't', ` is run with the security
 privileges of `],
				[/* inline code block */ 'i', `ResourceBundle`],
				[/* text */ 't', `.  See `],
				[/* reference */ 'r', `#getBundle(java.lang.String,java.util.Locale,java.lang.ClassLoader,java.util.ResourceBundle.Control)`, `getBundle`],
				[/* text */ 't', ` for the
 complete description of the resource bundle loading process with a
 `],
				[/* inline code block */ 'i', `ResourceBundle.Control`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'baseName', [/* parameter description */
					[/* text */ 't', `the base name of the resource bundle, a fully qualified class
        name`]
				]],
				[/* parameter */ 'control', [/* parameter description */
					[/* text */ 't', `the control which gives information for the resource bundle
        loading process`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `baseName`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `control`],
					[/* text */ 't', ` is
         `],
					[/* inline code block */ 'i', `null`]
				]],
				[/* throw */ 'java.util.MissingResourceException', [/* throw description */
					[/* text */ 't', `if no resource bundle for the specified base name can be found`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the given `],
					[/* inline code block */ 'i', `control`],
					[/* text */ 't', ` doesn't perform properly
         (e.g., `],
					[/* inline code block */ 'i', `control.getCandidateLocales`],
					[/* text */ 't', ` returns null.)
         Note that validation of `],
					[/* inline code block */ 'i', `control`],
					[/* text */ 't', ` is performed as
         needed.`]
				]],
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if this method is called in a named module`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a resource bundle for the given base name and the default locale`]
			]
		]],
		[/* method */ 'getBundle(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Gets a resource bundle using the specified base name, the default locale,
 and the caller module. Calling this method is equivalent to calling
 `],
				[/* block */ 'b', [
					[/* inline code block */ 'i', `getBundle(baseName, Locale.getDefault(), callerModule)`],
					[/* text */ 't', `,
 `]
				]]
			],
			[/* parameters */
				[/* parameter */ 'baseName', [/* parameter description */
					[/* text */ 't', `the base name of the resource bundle, a fully qualified class name`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `baseName`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`]
				]],
				[/* throw */ 'java.util.MissingResourceException', [/* throw description */
					[/* text */ 't', `if no resource bundle for the specified base name can be found`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a resource bundle for the given base name and the default locale`]
			]
		]],
		[/* method */ 'getBundle(java.lang.String,java.util.Locale)', [
			[/* method description */
				[/* text */ 't', `Gets a resource bundle using the specified base name and locale,
 and the caller module. Calling this method is equivalent to calling
 `],
				[/* block */ 'b', [
					[/* inline code block */ 'i', `getBundle(baseName, locale, callerModule)`],
					[/* text */ 't', `,
 `]
				]]
			],
			[/* parameters */
				[/* parameter */ 'baseName', [/* parameter description */
					[/* text */ 't', `the base name of the resource bundle, a fully qualified class name`]
				]],
				[/* parameter */ 'locale', [/* parameter description */
					[/* text */ 't', `the locale for which a resource bundle is desired`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `baseName`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `locale`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`]
				]],
				[/* throw */ 'java.util.MissingResourceException', [/* throw description */
					[/* text */ 't', `if no resource bundle for the specified base name can be found`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a resource bundle for the given base name and locale`]
			]
		]],
		[/* method */ 'getBundle(java.lang.String,java.lang.Module)', [
			[/* method description */
				[/* text */ 't', `Gets a resource bundle using the specified base name and the default locale
 on behalf of the specified module. This method is equivalent to calling
 `],
				[/* block */ 'b', [
					[/* inline code block */ 'i', `getBundle(baseName, Locale.getDefault(), module)`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'baseName', [/* parameter description */
					[/* text */ 't', `the base name of the resource bundle,
                 a fully qualified class name`]
				]],
				[/* parameter */ 'module', [/* parameter description */
					[/* text */ 't', `the module for which the resource bundle is searched`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `baseName`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `module`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if a security manager exists and the caller is not the specified
         module and doesn't have `],
					[/* inline code block */ 'i', `RuntimePermission("getClassLoader")`]
				]],
				[/* throw */ 'java.util.MissingResourceException', [/* throw description */
					[/* text */ 't', `if no resource bundle for the specified base name can be found in the
         specified module`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a resource bundle for the given base name and the default locale`]
			]
		]],
		[/* method */ 'getBundle(java.lang.String,java.util.Locale,java.lang.Module)', [
			[/* method description */
				[/* text */ 't', `Gets a resource bundle using the specified base name and locale
 on behalf of the specified module.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` Resource bundles in named modules may be encapsulated.  When
 the resource bundle is loaded from a
 `],
					[/* reference */ 'r', `java.util.spi.ResourceBundleProvider`],
					[/* text */ 't', `, the caller module
 must have an appropriate `],
					[/* text */ 't', `uses`],
					[/* text */ 't', ` clause in its `],
					[/* text */ 't', `module descriptor`],
					[/* text */ 't', `
 to declare that the module uses of `],
					[/* reference */ 'r', `java.util.spi.ResourceBundleProvider`],
					[/* text */ 't', `
 for the named resource bundle.
 Otherwise, it will load the resource bundles that are local in the
 given module as if calling `],
					[/* reference */ 'r', `java.Module#getResourceAsStream(java.lang.String)`],
					[/* text */ 't', `
 or that are visible to the class loader of the given module
 as if calling `],
					[/* reference */ 'r', `java.ClassLoader#getResourceAsStream(java.lang.String)`],
					[/* text */ 't', `.
 When the resource bundle is loaded from the specified module, it is
 subject to the encapsulation rules specified by
 `],
					[/* reference */ 'r', `java.Module#getResourceAsStream(java.lang.String)`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the given `],
					[/* inline code block */ 'i', `module`],
					[/* text */ 't', ` is an unnamed module, then this method is
 equivalent to calling `],
					[/* reference */ 'r', `#getBundle(java.lang.String,java.util.Locale,java.lang.ClassLoader)`, `getBundle(baseName, targetLocale, module.getClassLoader()`],
					[/* text */ 't', ` to load
 resource bundles that are visible to the class loader of the given
 unnamed module. Custom `],
					[/* reference */ 'r', `java.util.spi.ResourceBundleControlProvider`],
					[/* text */ 't', `
 implementations, if present, will only be invoked if the specified
 module is an unnamed module.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'baseName', [/* parameter description */
					[/* text */ 't', `the base name of the resource bundle,
                 a fully qualified class name`]
				]],
				[/* parameter */ 'targetLocale', [/* parameter description */
					[/* text */ 't', `the locale for which a resource bundle is desired`]
				]],
				[/* parameter */ 'module', [/* parameter description */
					[/* text */ 't', `the module for which the resource bundle is searched`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `baseName`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `targetLocale`],
					[/* text */ 't', `, or `],
					[/* inline code block */ 'i', `module`],
					[/* text */ 't', ` is
         `],
					[/* inline code block */ 'i', `null`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if a security manager exists and the caller is not the specified
         module and doesn't have `],
					[/* inline code block */ 'i', `RuntimePermission("getClassLoader")`]
				]],
				[/* throw */ 'java.util.MissingResourceException', [/* throw description */
					[/* text */ 't', `if no resource bundle for the specified base name and locale can
         be found in the specified `],
					[/* inline code block */ 'i', `module`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a resource bundle for the given base name and locale in the module`]
			]
		]],
		[/* method */ 'getBundle(java.lang.String,java.util.Locale,java.util.ResourceBundle.Control)', [
			[/* method description */
				[/* text */ 't', `Returns a resource bundle using the specified base name, target
 locale and control, and the caller's class loader. Calling this
 method is equivalent to calling
 `],
				[/* code block */ 'c', ` getBundle(baseName, targetLocale, this.getClass().getClassLoader(),
           control),
 `],
				[/* text */ 't', `
 except that `],
				[/* inline code block */ 'i', `getClassLoader()`],
				[/* text */ 't', ` is run with the security
 privileges of `],
				[/* inline code block */ 'i', `ResourceBundle`],
				[/* text */ 't', `.  See `],
				[/* reference */ 'r', `#getBundle(java.lang.String,java.util.Locale,java.lang.ClassLoader,java.util.ResourceBundle.Control)`, `getBundle`],
				[/* text */ 't', ` for the
 complete description of the resource bundle loading process with a
 `],
				[/* inline code block */ 'i', `ResourceBundle.Control`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'baseName', [/* parameter description */
					[/* text */ 't', `the base name of the resource bundle, a fully qualified
        class name`]
				]],
				[/* parameter */ 'targetLocale', [/* parameter description */
					[/* text */ 't', `the locale for which a resource bundle is desired`]
				]],
				[/* parameter */ 'control', [/* parameter description */
					[/* text */ 't', `the control which gives information for the resource
        bundle loading process`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `baseName`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `locales`],
					[/* text */ 't', ` or
         `],
					[/* inline code block */ 'i', `control`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`]
				]],
				[/* throw */ 'java.util.MissingResourceException', [/* throw description */
					[/* text */ 't', `if no resource bundle for the specified base name in any
         of the `],
					[/* inline code block */ 'i', `locales`],
					[/* text */ 't', ` can be found.`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the given `],
					[/* inline code block */ 'i', `control`],
					[/* text */ 't', ` doesn't perform properly
         (e.g., `],
					[/* inline code block */ 'i', `control.getCandidateLocales`],
					[/* text */ 't', ` returns null.)
         Note that validation of `],
					[/* inline code block */ 'i', `control`],
					[/* text */ 't', ` is performed as
         needed.`]
				]],
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if this method is called in a named module`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a resource bundle for the given base name and a
         `],
				[/* inline code block */ 'i', `Locale`],
				[/* text */ 't', ` in `],
				[/* inline code block */ 'i', `locales`]
			]
		]],
		[/* method */ 'getLocale()', [
			[/* method description */
				[/* text */ 't', `Returns the locale of this resource bundle. This method can be used after a
 call to getBundle() to determine whether the resource bundle returned really
 corresponds to the requested locale or is a fallback.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the locale of this resource bundle`]
			]
		]],
		[/* method */ 'handleGetObject(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Gets an object for the given key from this resource bundle.
 Returns null if this resource bundle does not contain an
 object for the given key.`]
			],
			[/* parameters */
				[/* parameter */ 'key', [/* parameter description */
					[/* text */ 't', `the key for the desired object`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `key`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the object for the given key, or null`]
			]
		]],
		[/* method */ 'handleKeySet()', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `Set`],
				[/* text */ 't', ` of the keys contained `],
				[/* text */ 't', `only`],
				[/* text */ 't', `
 in this `],
				[/* inline code block */ 'i', `ResourceBundle`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The default implementation returns a `],
					[/* inline code block */ 'i', `Set`],
					[/* text */ 't', ` of the
 keys returned by the `],
					[/* reference */ 'r', `#getKeys()`, `getKeys`],
					[/* text */ 't', ` method except
 for the ones for which the `],
					[/* reference */ 'r', `#handleGetObject(java.lang.String)`, `handleGetObject`],
					[/* text */ 't', ` method returns `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `. Once the
 `],
					[/* inline code block */ 'i', `Set`],
					[/* text */ 't', ` has been created, the value is kept in this
 `],
					[/* inline code block */ 'i', `ResourceBundle`],
					[/* text */ 't', ` in order to avoid producing the
 same `],
					[/* inline code block */ 'i', `Set`],
					[/* text */ 't', ` in subsequent calls. Subclasses can
 override this method for faster handling.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Set`],
				[/* text */ 't', ` of the keys contained only in this
        `],
				[/* inline code block */ 'i', `ResourceBundle`]
			]
		]],
		[/* method */ 'getStringArray(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Gets a string array for the given key from this resource bundle or one of its parents.
 Calling this method is equivalent to calling
 `],
				[/* block */ 'b', [
					[/* inline code block */ 'i', `(String[]) getObject(key)`],
					[/* text */ 't', `.
 `]
				]]
			],
			[/* parameters */
				[/* parameter */ 'key', [/* parameter description */
					[/* text */ 't', `the key for the desired string array`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `key`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`]
				]],
				[/* throw */ 'java.util.MissingResourceException', [/* throw description */
					[/* text */ 't', `if no object for the given key can be found`]
				]],
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the object found for the given key is not a string array`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the string array for the given key`]
			]
		]],
		[/* method */ 'clearCache()', [
			[/* method description */
				[/* text */ 't', `Removes all resource bundles from the cache that have been loaded
 by the caller's module.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'clearCache(java.lang.ClassLoader)', [
			[/* method description */
				[/* text */ 't', `Removes all resource bundles from the cache that have been loaded
 by the given class loader.`]
			],
			[/* parameters */
				[/* parameter */ 'loader', [/* parameter description */
					[/* text */ 't', `the class loader`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `loader`],
					[/* text */ 't', ` is null`]
				]]
			],
			/* return */ UDF
		]]
	],
]);
