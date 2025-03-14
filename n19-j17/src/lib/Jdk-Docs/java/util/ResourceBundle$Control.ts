import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.util.ResourceBundle$Control', [
	[/* class description */
		[/* inline code block */ 'i', `ResourceBundle.Control`],
		[/* text */ 't', ` defines a set of callback methods
 that are invoked by the `],
		[/* reference */ 'r', `java.util.ResourceBundle#getBundle(java.lang.String,java.util.Locale,java.lang.ClassLoader,java.util.ResourceBundle.Control)`, `ResourceBundle.getBundle`],
		[/* text */ 't', ` factory
 methods during the bundle loading process. In other words, a
 `],
		[/* inline code block */ 'i', `ResourceBundle.Control`],
		[/* text */ 't', ` collaborates with the factory
 methods for loading resource bundles. The default implementation of
 the callback methods provides the information necessary for the
 factory methods to perform the `],
		[/* reference */ 'r', `java.util.ResourceBundle#default_behavior`, `default behavior`],
		[/* text */ 't', `.

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` `],
			[/* reference */ 'r', `java.util.ResourceBundle.Control`, `ResourceBundle.Control`],
			[/* text */ 't', ` is designed for an application deployed
 in an unnamed module, for example to support resource bundles in
 non-standard formats or package localized resources in a non-traditional
 convention. `],
			[/* reference */ 'r', `java.util.spi.ResourceBundleProvider`, `ResourceBundleProvider`],
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
			[/* text */ 't', `In addition to the callback methods, the `],
			[/* reference */ 'r', `#toBundleName(java.lang.String,java.util.Locale)`, `toBundleName`],
			[/* text */ 't', ` and `],
			[/* reference */ 'r', `#toResourceName(java.lang.String,java.lang.String)`, `toResourceName`],
			[/* text */ 't', ` methods are defined
 primarily for convenience in implementing the callback
 methods. However, the `],
			[/* inline code block */ 'i', `toBundleName`],
			[/* text */ 't', ` method could be
 overridden to provide different conventions in the organization and
 packaging of localized resources.  The `],
			[/* inline code block */ 'i', `toResourceName`],
			[/* text */ 't', `
 method is `],
			[/* inline code block */ 'i', `final`],
			[/* text */ 't', ` to avoid use of wrong resource and class
 name separators.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Two factory methods, `],
			[/* reference */ 'r', `#getControl(java.util.List)`, `getControl(List)`],
			[/* text */ 't', ` and `],
			[/* reference */ 'r', `#getNoFallbackControl(java.util.List)`, `getNoFallbackControl(List)`],
			[/* text */ 't', `, provide
 `],
			[/* inline code block */ 'i', `ResourceBundle.Control`],
			[/* text */ 't', ` instances that implement common
 variations of the default bundle loading process.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `The formats returned by the `],
			[/* reference */ 'r', `#getFormats(java.lang.String)`, `getFormats`],
			[/* text */ 't', ` method and candidate locales returned by the `],
			[/* reference */ 'r', `#getCandidateLocales(java.lang.String,java.util.Locale)`, `getCandidateLocales`],
			[/* text */ 't', ` method must be consistent in all
 `],
			[/* inline code block */ 'i', `ResourceBundle.getBundle`],
			[/* text */ 't', ` invocations for the same base
 bundle. Otherwise, the `],
			[/* inline code block */ 'i', `ResourceBundle.getBundle`],
			[/* text */ 't', ` methods
 may return unintended bundles. For example, if only
 `],
			[/* inline code block */ 'i', `"java.class"`],
			[/* text */ 't', ` is returned by the `],
			[/* inline code block */ 'i', `getFormats`],
			[/* text */ 't', `
 method for the first call to `],
			[/* inline code block */ 'i', `ResourceBundle.getBundle`],
			[/* text */ 't', `
 and only `],
			[/* inline code block */ 'i', `"java.properties"`],
			[/* text */ 't', ` for the second call, then the
 second call will return the class-based one that has been cached
 during the first call.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `A `],
			[/* inline code block */ 'i', `ResourceBundle.Control`],
			[/* text */ 't', ` instance must be thread-safe
 if it's simultaneously used by multiple threads.
 `],
			[/* inline code block */ 'i', `ResourceBundle.getBundle`],
			[/* text */ 't', ` does not synchronize to call
 the `],
			[/* inline code block */ 'i', `ResourceBundle.Control`],
			[/* text */ 't', ` methods. The default
 implementations of the methods are thread-safe.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Applications can specify `],
			[/* inline code block */ 'i', `ResourceBundle.Control`],
			[/* text */ 't', `
 instances returned by the `],
			[/* inline code block */ 'i', `getControl`],
			[/* text */ 't', ` factory methods or
 created from a subclass of `],
			[/* inline code block */ 'i', `ResourceBundle.Control`],
			[/* text */ 't', ` to
 customize the bundle loading process. The following are examples of
 changing the default bundle loading process.

 `]
		]],
		[/* block */ 'b', `Example 1`],
		[/* block */ 'b', [
			[/* text */ 't', `The following code lets `],
			[/* inline code block */ 'i', `ResourceBundle.getBundle`],
			[/* text */ 't', ` look
 up only properties-based resources.

 `]
		]],
		[/* code block */ 'c', ` import java.util.*;
 import static java.util.ResourceBundle.Control.*;
 ...
 ResourceBundle bundle =
   ResourceBundle.getBundle("MyResources", new Locale("fr", "CH"),
                            ResourceBundle.Control.getControl(FORMAT_PROPERTIES));
 `],
		[/* text */ 't', `

 Given the resource bundles in the `],
		[/* reference */ 'r', `java.util.ResourceBundle#default_behavior_example`, `example`],
		[/* text */ 't', ` in
 the `],
		[/* inline code block */ 'i', `ResourceBundle.getBundle`],
		[/* text */ 't', ` description, this
 `],
		[/* inline code block */ 'i', `ResourceBundle.getBundle`],
		[/* text */ 't', ` call loads
 `],
		[/* inline code block */ 'i', `MyResources_fr_CH.properties`],
		[/* text */ 't', ` whose parent is
 `],
		[/* inline code block */ 'i', `MyResources_fr.properties`],
		[/* text */ 't', ` whose parent is
 `],
		[/* inline code block */ 'i', `MyResources.properties`],
		[/* text */ 't', `. (`],
		[/* inline code block */ 'i', `MyResources_fr_CH.properties`],
		[/* text */ 't', `
 is not hidden, but `],
		[/* inline code block */ 'i', `MyResources_fr_CH.class`],
		[/* text */ 't', ` is.)

 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', `Example 2`],
		[/* block */ 'b', [
			[/* text */ 't', `The following is an example of loading XML-based bundles
 using `],
			[/* reference */ 'r', `java.util.Properties#loadFromXML(java.io.InputStream)`, `Properties.loadFromXML`],
			[/* text */ 't', `.

 `]
		]],
		[/* code block */ 'c', ` ResourceBundle rb = ResourceBundle.getBundle("Messages",
     new ResourceBundle.Control() {
         public List<String> getFormats(String baseName) {
             if (baseName == null)
                 throw new NullPointerException();
             return Arrays.asList("xml");
         }
         public ResourceBundle newBundle(String baseName,
                                         Locale locale,
                                         String format,
                                         ClassLoader loader,
                                         boolean reload)
                          throws IllegalAccessException,
                                 InstantiationException,
                                 IOException {
             if (baseName == null || locale == null
                   || format == null || loader == null)
                 throw new NullPointerException();
             ResourceBundle bundle = null;
             if (format.equals("xml")) {
                 String bundleName = toBundleName(baseName, locale);
                 String resourceName = toResourceName(bundleName, format);
                 InputStream stream = null;
                 if (reload) {
                     URL url = loader.getResource(resourceName);
                     if (url != null) {
                         URLConnection connection = url.openConnection();
                         if (connection != null) {
                             // Disable caches to get fresh data for
                             // reloading.
                             connection.setUseCaches(false);
                             stream = connection.getInputStream();
                         }
                     }
                 } else {
                     stream = loader.getResourceAsStream(resourceName);
                 }
                 if (stream != null) {
                     BufferedInputStream bis = new BufferedInputStream(stream);
                     bundle = new XMLResourceBundle(bis);
                     bis.close();
                 }
             }
             return bundle;
         }
     });

 ...

 private static class XMLResourceBundle extends ResourceBundle {
     private Properties props;
     XMLResourceBundle(InputStream stream) throws IOException {
         props = new Properties();
         props.loadFromXML(stream);
     }
     protected Object handleGetObject(String key) {
         return props.getProperty(key);
     }
     public Enumeration<String> getKeys() {
         ...
     }
 }
 `],
		[/* block */ 'b', '']
	],
	[/* fields */
		[/* field */ 'FORMAT_CLASS', [
			[/* field description */
				[/* text */ 't', `The class-only format `],
				[/* inline code block */ 'i', `List`],
				[/* text */ 't', ` containing
 `],
				[/* inline code block */ 'i', `"java.class"`],
				[/* text */ 't', `. This `],
				[/* inline code block */ 'i', `List`],
				[/* text */ 't', ` is unmodifiable.`]
			],
		]],
		[/* field */ 'FORMAT_DEFAULT', [
			[/* field description */
				[/* text */ 't', `The default format `],
				[/* inline code block */ 'i', `List`],
				[/* text */ 't', `, which contains the strings
 `],
				[/* inline code block */ 'i', `"java.class"`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `"java.properties"`],
				[/* text */ 't', `, in
 this order. This `],
				[/* inline code block */ 'i', `List`],
				[/* text */ 't', ` is unmodifiable.`]
			],
		]],
		[/* field */ 'FORMAT_PROPERTIES', [
			[/* field description */
				[/* text */ 't', `The properties-only format `],
				[/* inline code block */ 'i', `List`],
				[/* text */ 't', ` containing
 `],
				[/* inline code block */ 'i', `"java.properties"`],
				[/* text */ 't', `. This `],
				[/* inline code block */ 'i', `List`],
				[/* text */ 't', ` is unmodifiable.`]
			],
		]],
		[/* field */ 'TTL_DONT_CACHE', [
			[/* field description */
				[/* text */ 't', `The time-to-live constant for not caching loaded resource bundle
 instances.`]
			],
		]],
		[/* field */ 'TTL_NO_EXPIRATION_CONTROL', [
			[/* field description */
				[/* text */ 't', `The time-to-live constant for disabling the expiration control
 for loaded resource bundle instances in the cache.`]
			],
		]]
	],
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Sole constructor. (For invocation by subclass constructors,
 typically implicit.)`]
			],
			/* parameters */ UDF,
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'needsReload(java.lang.String,java.util.Locale,java.lang.String,java.lang.ClassLoader,java.util.ResourceBundle,long)', [
			[/* method description */
				[/* text */ 't', `Determines if the expired `],
				[/* inline code block */ 'i', `bundle`],
				[/* text */ 't', ` in the cache needs
 to be reloaded based on the loading time given by
 `],
				[/* inline code block */ 'i', `loadTime`],
				[/* text */ 't', ` or some other criteria. The method returns
 `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if reloading is required; `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', `
 otherwise. `],
				[/* inline code block */ 'i', `loadTime`],
				[/* text */ 't', ` is a millisecond offset since
 the `],
				[/* reference */ 'r', `java.util.Calendar#Epoch`, `Calendar Epoch`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The calling `],
					[/* inline code block */ 'i', `ResourceBundle.getBundle`],
					[/* text */ 't', ` factory method
 calls this method on the `],
					[/* inline code block */ 'i', `ResourceBundle.Control`],
					[/* text */ 't', `
 instance used for its current invocation, not on the instance
 used in the invocation that originally loaded the resource
 bundle.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The default implementation compares `],
					[/* inline code block */ 'i', `loadTime`],
					[/* text */ 't', ` and
 the last modified time of the source data of the resource
 bundle. If it's determined that the source data has been modified
 since `],
					[/* inline code block */ 'i', `loadTime`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` is
 returned. Otherwise, `],
					[/* inline code block */ 'i', `false`],
					[/* text */ 't', ` is returned. This
 implementation assumes that the given `],
					[/* inline code block */ 'i', `format`],
					[/* text */ 't', ` is the
 same string as its file suffix if it's not one of the default
 formats, `],
					[/* inline code block */ 'i', `"java.class"`],
					[/* text */ 't', ` or
 `],
					[/* inline code block */ 'i', `"java.properties"`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'baseName', [/* parameter description */
					[/* text */ 't', `the base bundle name of the resource bundle, a
        fully qualified class name`]
				]],
				[/* parameter */ 'locale', [/* parameter description */
					[/* text */ 't', `the locale for which the resource bundle
        should be instantiated`]
				]],
				[/* parameter */ 'format', [/* parameter description */
					[/* text */ 't', `the resource bundle format to be loaded`]
				]],
				[/* parameter */ 'loader', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `ClassLoader`],
					[/* text */ 't', ` to use to load the bundle`]
				]],
				[/* parameter */ 'bundle', [/* parameter description */
					[/* text */ 't', `the resource bundle instance that has been expired
        in the cache`]
				]],
				[/* parameter */ 'loadTime', [/* parameter description */
					[/* text */ 't', `the time when `],
					[/* inline code block */ 'i', `bundle`],
					[/* text */ 't', ` was loaded and put
        in the cache`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `baseName`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `locale`],
					[/* text */ 't', `,
        `],
					[/* inline code block */ 'i', `format`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `loader`],
					[/* text */ 't', `, or
        `],
					[/* inline code block */ 'i', `bundle`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the expired bundle needs to be
        reloaded; `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'toResourceName(java.lang.String,java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Converts the given `],
				[/* inline code block */ 'i', `bundleName`],
				[/* text */ 't', ` to the form required
 by the `],
				[/* reference */ 'r', `java.lang.ClassLoader#getResource(java.lang.String)`, `ClassLoader.getResource`],
				[/* text */ 't', `
 method by replacing all occurrences of `],
				[/* inline code block */ 'i', `'.'`],
				[/* text */ 't', ` in
 `],
				[/* inline code block */ 'i', `bundleName`],
				[/* text */ 't', ` with `],
				[/* inline code block */ 'i', `'/'`],
				[/* text */ 't', ` and appending a
 `],
				[/* inline code block */ 'i', `'.'`],
				[/* text */ 't', ` and the given file `],
				[/* inline code block */ 'i', `suffix`],
				[/* text */ 't', `. For
 example, if `],
				[/* inline code block */ 'i', `bundleName`],
				[/* text */ 't', ` is
 `],
				[/* inline code block */ 'i', `"foo.bar.MyResources_ja_JP"`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `suffix`],
				[/* text */ 't', `
 is `],
				[/* inline code block */ 'i', `"properties"`],
				[/* text */ 't', `, then
 `],
				[/* inline code block */ 'i', `"foo/bar/MyResources_ja_JP.properties"`],
				[/* text */ 't', ` is returned.`]
			],
			[/* parameters */
				[/* parameter */ 'bundleName', [/* parameter description */
					[/* text */ 't', `the bundle name`]
				]],
				[/* parameter */ 'suffix', [/* parameter description */
					[/* text */ 't', `the file type suffix`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `bundleName`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `suffix`],
					[/* text */ 't', `
         is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the converted resource name`]
			]
		]],
		[/* method */ 'toBundleName(java.lang.String,java.util.Locale)', [
			[/* method description */
				[/* text */ 't', `Converts the given `],
				[/* inline code block */ 'i', `baseName`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `locale`],
				[/* text */ 't', `
 to the bundle name. This method is called from the default
 implementation of the `],
				[/* reference */ 'r', `#newBundle(java.lang.String,java.util.Locale,java.lang.String,java.lang.ClassLoader,boolean)`, `newBundle`],
				[/* text */ 't', ` and `],
				[/* reference */ 'r', `#needsReload(java.lang.String,java.util.Locale,java.lang.String,java.lang.ClassLoader,java.util.ResourceBundle,long)`, `needsReload`],
				[/* text */ 't', `
 methods.

 `],
				[/* block */ 'b', `This implementation returns the following value:
 `],
				[/* code block */ 'c', `     baseName + "_" + language + "_" + script + "_" + country + "_" + variant
 `],
				[/* text */ 't', `
 where `],
				[/* inline code block */ 'i', `language`],
				[/* text */ 't', `, `],
				[/* inline code block */ 'i', `script`],
				[/* text */ 't', `, `],
				[/* inline code block */ 'i', `country`],
				[/* text */ 't', `,
 and `],
				[/* inline code block */ 'i', `variant`],
				[/* text */ 't', ` are the language, script, country, and variant
 values of `],
				[/* inline code block */ 'i', `locale`],
				[/* text */ 't', `, respectively. Final component values that
 are empty Strings are omitted along with the preceding '_'.  When the
 script is empty, the script value is omitted along with the preceding '_'.
 If all of the values are empty strings, then `],
				[/* inline code block */ 'i', `baseName`],
				[/* text */ 't', `
 is returned.

 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `For example, if `],
					[/* inline code block */ 'i', `baseName`],
					[/* text */ 't', ` is
 `],
					[/* inline code block */ 'i', `"baseName"`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `locale`],
					[/* text */ 't', ` is
 `],
					[/* inline code block */ 'i', `Locale("ja", "", "XX")`],
					[/* text */ 't', `, then
 `],
					[/* inline code block */ 'i', `"baseName_ja_ _XX"`],
					[/* text */ 't', ` is returned. If the given
 locale is `],
					[/* inline code block */ 'i', `Locale("en")`],
					[/* text */ 't', `, then
 `],
					[/* inline code block */ 'i', `"baseName_en"`],
					[/* text */ 't', ` is returned.

 `]
				]],
				[/* block */ 'b', `Overriding this method allows applications to use different
 conventions in the organization and packaging of localized
 resources.`]
			],
			[/* parameters */
				[/* parameter */ 'baseName', [/* parameter description */
					[/* text */ 't', `the base name of the resource bundle, a fully
        qualified class name`]
				]],
				[/* parameter */ 'locale', [/* parameter description */
					[/* text */ 't', `the locale for which a resource bundle should be
        loaded`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `baseName`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `locale`],
					[/* text */ 't', `
        is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the bundle name for the resource bundle`]
			]
		]],
		[/* method */ 'getFormats(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `List`],
				[/* text */ 't', ` of `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', `s containing
 formats to be used to load resource bundles for the given
 `],
				[/* inline code block */ 'i', `baseName`],
				[/* text */ 't', `. The `],
				[/* inline code block */ 'i', `ResourceBundle.getBundle`],
				[/* text */ 't', `
 factory method tries to load resource bundles with formats in the
 order specified by the list. The list returned by this method
 must have at least one `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', `. The predefined
 formats are `],
				[/* inline code block */ 'i', `"java.class"`],
				[/* text */ 't', ` for class-based resource
 bundles and `],
				[/* inline code block */ 'i', `"java.properties"`],
				[/* text */ 't', ` for `],
				[/* reference */ 'r', `java.util.PropertyResourceBundle`, `properties-based`],
				[/* text */ 't', ` ones. Strings starting
 with `],
				[/* inline code block */ 'i', `"java."`],
				[/* text */ 't', ` are reserved for future extensions and
 must not be used by application-defined formats.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `It is not a requirement to return an immutable (unmodifiable)
 `],
					[/* inline code block */ 'i', `List`],
					[/* text */ 't', `.  However, the returned `],
					[/* inline code block */ 'i', `List`],
					[/* text */ 't', ` must
 not be mutated after it has been returned by
 `],
					[/* inline code block */ 'i', `getFormats`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The default implementation returns `],
					[/* text */ 't', `FORMAT_DEFAULT`],
					[/* text */ 't', ` so
 that the `],
					[/* inline code block */ 'i', `ResourceBundle.getBundle`],
					[/* text */ 't', ` factory method
 looks up first class-based resource bundles, then
 properties-based ones.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'baseName', [/* parameter description */
					[/* text */ 't', `the base name of the resource bundle, a fully qualified class
        name`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `baseName`],
					[/* text */ 't', ` is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `List`],
				[/* text */ 't', ` of `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', `s containing
        formats for loading resource bundles.`]
			]
		]],
		[/* method */ 'getCandidateLocales(java.lang.String,java.util.Locale)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `List`],
				[/* text */ 't', ` of `],
				[/* inline code block */ 'i', `Locale`],
				[/* text */ 't', `s as candidate
 locales for `],
				[/* inline code block */ 'i', `baseName`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `locale`],
				[/* text */ 't', `. This
 method is called by the `],
				[/* inline code block */ 'i', `ResourceBundle.getBundle`],
				[/* text */ 't', `
 factory method each time the factory method tries finding a
 resource bundle for a target `],
				[/* inline code block */ 'i', `Locale`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The sequence of the candidate locales also corresponds to the
 runtime resource lookup path (also known as the `],
					[/* text */ 't', `parent
 chain`],
					[/* text */ 't', `), if the corresponding resource bundles for the
 candidate locales exist and their parents are not defined by
 loaded resource bundles themselves.  The last element of the list
 must be a `],
					[/* reference */ 'r', `java.util.Locale#ROOT`, `root locale`],
					[/* text */ 't', ` if it is desired to
 have the base bundle as the terminal of the parent chain.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `If the given locale is equal to `],
					[/* inline code block */ 'i', `Locale.ROOT`],
					[/* text */ 't', ` (the
 root locale), a `],
					[/* inline code block */ 'i', `List`],
					[/* text */ 't', ` containing only the root
 `],
					[/* inline code block */ 'i', `Locale`],
					[/* text */ 't', ` must be returned. In this case, the
 `],
					[/* inline code block */ 'i', `ResourceBundle.getBundle`],
					[/* text */ 't', ` factory method loads only
 the base bundle as the resulting resource bundle.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `It is not a requirement to return an immutable (unmodifiable)
 `],
					[/* inline code block */ 'i', `List`],
					[/* text */ 't', `. However, the returned `],
					[/* inline code block */ 'i', `List`],
					[/* text */ 't', ` must not
 be mutated after it has been returned by
 `],
					[/* inline code block */ 'i', `getCandidateLocales`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The default implementation returns a `],
					[/* inline code block */ 'i', `List`],
					[/* text */ 't', ` containing
 `],
					[/* inline code block */ 'i', `Locale`],
					[/* text */ 't', `s using the rules described below.  In the
 description below, `],
					[/* text */ 't', `L`],
					[/* text */ 't', `, `],
					[/* text */ 't', `S`],
					[/* text */ 't', `, `],
					[/* text */ 't', `C`],
					[/* text */ 't', ` and `],
					[/* text */ 't', `V`],
					[/* text */ 't', `
 respectively represent non-empty language, script, country, and
 variant.  For example, [`],
					[/* text */ 't', `L`],
					[/* text */ 't', `, `],
					[/* text */ 't', `C`],
					[/* text */ 't', `] represents a
 `],
					[/* inline code block */ 'i', `Locale`],
					[/* text */ 't', ` that has non-empty values only for language and
 country.  The form `],
					[/* text */ 't', `L`],
					[/* text */ 't', `("xx") represents the (non-empty)
 language value is "xx".  For all cases, `],
					[/* inline code block */ 'i', `Locale`],
					[/* text */ 't', `s whose
 final component values are empty strings are omitted.

 `]
				]],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `For an input `],
						[/* inline code block */ 'i', `Locale`],
						[/* text */ 't', ` with an empty script value,
 append candidate `],
						[/* inline code block */ 'i', `Locale`],
						[/* text */ 't', `s by omitting the final component
 one by one as below:

 `],
						[/* list */ 'l', [
							[/* block */ 'b', [
								[/* text */ 't', ` [`],
								[/* text */ 't', `L`],
								[/* text */ 't', `, `],
								[/* text */ 't', `C`],
								[/* text */ 't', `, `],
								[/* text */ 't', `V`],
								[/* text */ 't', `] `]
							]],
							[/* block */ 'b', [
								[/* text */ 't', ` [`],
								[/* text */ 't', `L`],
								[/* text */ 't', `, `],
								[/* text */ 't', `C`],
								[/* text */ 't', `] `]
							]],
							[/* block */ 'b', [
								[/* text */ 't', ` [`],
								[/* text */ 't', `L`],
								[/* text */ 't', `] `]
							]],
							[/* block */ 'b', [
								[/* text */ 't', ` `],
								[/* inline code block */ 'i', `Locale.ROOT`],
								[/* text */ 't', ` `]
							]]
						]]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `For an input `],
						[/* inline code block */ 'i', `Locale`],
						[/* text */ 't', ` with a non-empty script value,
 append candidate `],
						[/* inline code block */ 'i', `Locale`],
						[/* text */ 't', `s by omitting the final component
 up to language, then append candidates generated from the
 `],
						[/* inline code block */ 'i', `Locale`],
						[/* text */ 't', ` with country and variant restored:

 `],
						[/* list */ 'l', [
							[/* block */ 'b', [
								[/* text */ 't', ` [`],
								[/* text */ 't', `L`],
								[/* text */ 't', `, `],
								[/* text */ 't', `S`],
								[/* text */ 't', `, `],
								[/* text */ 't', `C`],
								[/* text */ 't', `, `],
								[/* text */ 't', `V`],
								[/* text */ 't', `]`]
							]],
							[/* block */ 'b', [
								[/* text */ 't', ` [`],
								[/* text */ 't', `L`],
								[/* text */ 't', `, `],
								[/* text */ 't', `S`],
								[/* text */ 't', `, `],
								[/* text */ 't', `C`],
								[/* text */ 't', `]`]
							]],
							[/* block */ 'b', [
								[/* text */ 't', ` [`],
								[/* text */ 't', `L`],
								[/* text */ 't', `, `],
								[/* text */ 't', `S`],
								[/* text */ 't', `]`]
							]],
							[/* block */ 'b', [
								[/* text */ 't', ` [`],
								[/* text */ 't', `L`],
								[/* text */ 't', `, `],
								[/* text */ 't', `C`],
								[/* text */ 't', `, `],
								[/* text */ 't', `V`],
								[/* text */ 't', `]`]
							]],
							[/* block */ 'b', [
								[/* text */ 't', ` [`],
								[/* text */ 't', `L`],
								[/* text */ 't', `, `],
								[/* text */ 't', `C`],
								[/* text */ 't', `]`]
							]],
							[/* block */ 'b', [
								[/* text */ 't', ` [`],
								[/* text */ 't', `L`],
								[/* text */ 't', `]`]
							]],
							[/* block */ 'b', [
								[/* text */ 't', ` `],
								[/* inline code block */ 'i', `Locale.ROOT`]
							]]
						]]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `For an input `],
						[/* inline code block */ 'i', `Locale`],
						[/* text */ 't', ` with a variant value consisting
 of multiple subtags separated by underscore, generate candidate
 `],
						[/* inline code block */ 'i', `Locale`],
						[/* text */ 't', `s by omitting the variant subtags one by one, then
 insert them after every occurrence of `],
						[/* inline code block */ 'i', `Locale`],
						[/* text */ 't', `s with the
 full variant value in the original list.  For example, if
 the variant consists of two subtags `],
						[/* text */ 't', `V1`],
						[/* text */ 't', ` and `],
						[/* text */ 't', `V2`],
						[/* text */ 't', `:

 `],
						[/* list */ 'l', [
							[/* block */ 'b', [
								[/* text */ 't', ` [`],
								[/* text */ 't', `L`],
								[/* text */ 't', `, `],
								[/* text */ 't', `S`],
								[/* text */ 't', `, `],
								[/* text */ 't', `C`],
								[/* text */ 't', `, `],
								[/* text */ 't', `V1`],
								[/* text */ 't', `, `],
								[/* text */ 't', `V2`],
								[/* text */ 't', `]`]
							]],
							[/* block */ 'b', [
								[/* text */ 't', ` [`],
								[/* text */ 't', `L`],
								[/* text */ 't', `, `],
								[/* text */ 't', `S`],
								[/* text */ 't', `, `],
								[/* text */ 't', `C`],
								[/* text */ 't', `, `],
								[/* text */ 't', `V1`],
								[/* text */ 't', `]`]
							]],
							[/* block */ 'b', [
								[/* text */ 't', ` [`],
								[/* text */ 't', `L`],
								[/* text */ 't', `, `],
								[/* text */ 't', `S`],
								[/* text */ 't', `, `],
								[/* text */ 't', `C`],
								[/* text */ 't', `]`]
							]],
							[/* block */ 'b', [
								[/* text */ 't', ` [`],
								[/* text */ 't', `L`],
								[/* text */ 't', `, `],
								[/* text */ 't', `S`],
								[/* text */ 't', `]`]
							]],
							[/* block */ 'b', [
								[/* text */ 't', ` [`],
								[/* text */ 't', `L`],
								[/* text */ 't', `, `],
								[/* text */ 't', `C`],
								[/* text */ 't', `, `],
								[/* text */ 't', `V1`],
								[/* text */ 't', `, `],
								[/* text */ 't', `V2`],
								[/* text */ 't', `]`]
							]],
							[/* block */ 'b', [
								[/* text */ 't', ` [`],
								[/* text */ 't', `L`],
								[/* text */ 't', `, `],
								[/* text */ 't', `C`],
								[/* text */ 't', `, `],
								[/* text */ 't', `V1`],
								[/* text */ 't', `]`]
							]],
							[/* block */ 'b', [
								[/* text */ 't', ` [`],
								[/* text */ 't', `L`],
								[/* text */ 't', `, `],
								[/* text */ 't', `C`],
								[/* text */ 't', `]`]
							]],
							[/* block */ 'b', [
								[/* text */ 't', ` [`],
								[/* text */ 't', `L`],
								[/* text */ 't', `]`]
							]],
							[/* block */ 'b', [
								[/* text */ 't', ` `],
								[/* inline code block */ 'i', `Locale.ROOT`]
							]]
						]]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `Special cases for Chinese.  When an input `],
						[/* inline code block */ 'i', `Locale`],
						[/* text */ 't', ` has the
 language "zh" (Chinese) and an empty script value, either "Hans" (Simplified) or
 "Hant" (Traditional) might be supplied, depending on the country.
 When the country is "CN" (China) or "SG" (Singapore), "Hans" is supplied.
 When the country is "HK" (Hong Kong SAR China), "MO" (Macau SAR China),
 or "TW" (Taiwan), "Hant" is supplied.  For all other countries or when the country
 is empty, no script is supplied.  For example, for `],
						[/* inline code block */ 'i', `Locale("zh", "CN")`],
						[/* text */ 't', `, the candidate list will be:
 `],
						[/* list */ 'l', [
							[/* block */ 'b', [
								[/* text */ 't', ` [`],
								[/* text */ 't', `L`],
								[/* text */ 't', `("zh"), `],
								[/* text */ 't', `S`],
								[/* text */ 't', `("Hans"), `],
								[/* text */ 't', `C`],
								[/* text */ 't', `("CN")]`]
							]],
							[/* block */ 'b', [
								[/* text */ 't', ` [`],
								[/* text */ 't', `L`],
								[/* text */ 't', `("zh"), `],
								[/* text */ 't', `S`],
								[/* text */ 't', `("Hans")]`]
							]],
							[/* block */ 'b', [
								[/* text */ 't', ` [`],
								[/* text */ 't', `L`],
								[/* text */ 't', `("zh"), `],
								[/* text */ 't', `C`],
								[/* text */ 't', `("CN")]`]
							]],
							[/* block */ 'b', [
								[/* text */ 't', ` [`],
								[/* text */ 't', `L`],
								[/* text */ 't', `("zh")]`]
							]],
							[/* block */ 'b', [
								[/* text */ 't', ` `],
								[/* inline code block */ 'i', `Locale.ROOT`]
							]]
						]],
						[/* text */ 't', `

 For `],
						[/* inline code block */ 'i', `Locale("zh", "TW")`],
						[/* text */ 't', `, the candidate list will be:
 `],
						[/* list */ 'l', [
							[/* block */ 'b', [
								[/* text */ 't', ` [`],
								[/* text */ 't', `L`],
								[/* text */ 't', `("zh"), `],
								[/* text */ 't', `S`],
								[/* text */ 't', `("Hant"), `],
								[/* text */ 't', `C`],
								[/* text */ 't', `("TW")]`]
							]],
							[/* block */ 'b', [
								[/* text */ 't', ` [`],
								[/* text */ 't', `L`],
								[/* text */ 't', `("zh"), `],
								[/* text */ 't', `S`],
								[/* text */ 't', `("Hant")]`]
							]],
							[/* block */ 'b', [
								[/* text */ 't', ` [`],
								[/* text */ 't', `L`],
								[/* text */ 't', `("zh"), `],
								[/* text */ 't', `C`],
								[/* text */ 't', `("TW")]`]
							]],
							[/* block */ 'b', [
								[/* text */ 't', ` [`],
								[/* text */ 't', `L`],
								[/* text */ 't', `("zh")]`]
							]],
							[/* block */ 'b', [
								[/* text */ 't', ` `],
								[/* inline code block */ 'i', `Locale.ROOT`]
							]]
						]]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `Special cases for Norwegian.  Both `],
						[/* inline code block */ 'i', `Locale("no", "NO", "NY")`],
						[/* text */ 't', ` and `],
						[/* inline code block */ 'i', `Locale("nn", "NO")`],
						[/* text */ 't', ` represent Norwegian
 Nynorsk.  When a locale's language is "nn", the standard candidate
 list is generated up to [`],
						[/* text */ 't', `L`],
						[/* text */ 't', `("nn")], and then the following
 candidates are added:

 `],
						[/* list */ 'l', [
							[/* block */ 'b', [
								[/* text */ 't', ` [`],
								[/* text */ 't', `L`],
								[/* text */ 't', `("no"), `],
								[/* text */ 't', `C`],
								[/* text */ 't', `("NO"), `],
								[/* text */ 't', `V`],
								[/* text */ 't', `("NY")]`]
							]],
							[/* block */ 'b', [
								[/* text */ 't', ` [`],
								[/* text */ 't', `L`],
								[/* text */ 't', `("no"), `],
								[/* text */ 't', `C`],
								[/* text */ 't', `("NO")]`]
							]],
							[/* block */ 'b', [
								[/* text */ 't', ` [`],
								[/* text */ 't', `L`],
								[/* text */ 't', `("no")]`]
							]],
							[/* block */ 'b', [
								[/* text */ 't', ` `],
								[/* inline code block */ 'i', `Locale.ROOT`]
							]]
						]],
						[/* text */ 't', `

 If the locale is exactly `],
						[/* inline code block */ 'i', `Locale("no", "NO", "NY")`],
						[/* text */ 't', `, it is first
 converted to `],
						[/* inline code block */ 'i', `Locale("nn", "NO")`],
						[/* text */ 't', ` and then the above procedure is
 followed.

 `],
						[/* block */ 'b', [
							[/* text */ 't', `Also, Java treats the language "no" as a synonym of Norwegian
 Bokmål "nb".  Except for the single case `],
							[/* inline code block */ 'i', `Locale("no", "NO", "NY")`],
							[/* text */ 't', ` (handled above), when an input `],
							[/* inline code block */ 'i', `Locale`],
							[/* text */ 't', `
 has language "no" or "nb", candidate `],
							[/* inline code block */ 'i', `Locale`],
							[/* text */ 't', `s with
 language code "no" and "nb" are interleaved, first using the
 requested language, then using its synonym. For example,
 `],
							[/* inline code block */ 'i', `Locale("nb", "NO", "POSIX")`],
							[/* text */ 't', ` generates the following
 candidate list:

 `]
						]],
						[/* list */ 'l', [
							[/* block */ 'b', [
								[/* text */ 't', ` [`],
								[/* text */ 't', `L`],
								[/* text */ 't', `("nb"), `],
								[/* text */ 't', `C`],
								[/* text */ 't', `("NO"), `],
								[/* text */ 't', `V`],
								[/* text */ 't', `("POSIX")]`]
							]],
							[/* block */ 'b', [
								[/* text */ 't', ` [`],
								[/* text */ 't', `L`],
								[/* text */ 't', `("no"), `],
								[/* text */ 't', `C`],
								[/* text */ 't', `("NO"), `],
								[/* text */ 't', `V`],
								[/* text */ 't', `("POSIX")]`]
							]],
							[/* block */ 'b', [
								[/* text */ 't', ` [`],
								[/* text */ 't', `L`],
								[/* text */ 't', `("nb"), `],
								[/* text */ 't', `C`],
								[/* text */ 't', `("NO")]`]
							]],
							[/* block */ 'b', [
								[/* text */ 't', ` [`],
								[/* text */ 't', `L`],
								[/* text */ 't', `("no"), `],
								[/* text */ 't', `C`],
								[/* text */ 't', `("NO")]`]
							]],
							[/* block */ 'b', [
								[/* text */ 't', ` [`],
								[/* text */ 't', `L`],
								[/* text */ 't', `("nb")]`]
							]],
							[/* block */ 'b', [
								[/* text */ 't', ` [`],
								[/* text */ 't', `L`],
								[/* text */ 't', `("no")]`]
							]],
							[/* block */ 'b', [
								[/* text */ 't', ` `],
								[/* inline code block */ 'i', `Locale.ROOT`]
							]]
						]],
						[/* text */ 't', `

 `],
						[/* inline code block */ 'i', `Locale("no", "NO", "POSIX")`],
						[/* text */ 't', ` would generate the same list
 except that locales with "no" would appear before the corresponding
 locales with "nb".`],
						[/* block */ 'b', '']
					]]
				]],
				[/* text */ 't', `

 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `The default implementation uses an `],
					[/* reference */ 'r', `java.util.ArrayList`, `ArrayList`],
					[/* text */ 't', ` that
 overriding implementations may modify before returning it to the
 caller. However, a subclass must not modify it after it has
 been returned by `],
					[/* inline code block */ 'i', `getCandidateLocales`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `For example, if the given `],
					[/* inline code block */ 'i', `baseName`],
					[/* text */ 't', ` is "Messages"
 and the given `],
					[/* inline code block */ 'i', `locale`],
					[/* text */ 't', ` is
 `],
					[/* inline code block */ 'i', `Locale("ja", "", "XX")`],
					[/* text */ 't', `, then a
 `],
					[/* inline code block */ 'i', `List`],
					[/* text */ 't', ` of `],
					[/* inline code block */ 'i', `Locale`],
					[/* text */ 't', `s:
 `]
				]],
				[/* code block */ 'c', `     Locale("ja", "", "XX")
     Locale("ja")
     Locale.ROOT
 `],
				[/* text */ 't', `
 is returned. And if the resource bundles for the "ja" and
 "" `],
				[/* inline code block */ 'i', `Locale`],
				[/* text */ 't', `s are found, then the runtime resource
 lookup path (parent chain) is:
 `],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `Messages_ja -> Messages`]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'baseName', [/* parameter description */
					[/* text */ 't', `the base name of the resource bundle, a fully
        qualified class name`]
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
					[/* text */ 't', ` is
        `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `List`],
				[/* text */ 't', ` of candidate
        `],
				[/* inline code block */ 'i', `Locale`],
				[/* text */ 't', `s for the given `],
				[/* inline code block */ 'i', `locale`]
			]
		]],
		[/* method */ 'getFallbackLocale(java.lang.String,java.util.Locale)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `Locale`],
				[/* text */ 't', ` to be used as a fallback locale for
 further resource bundle searches by the
 `],
				[/* inline code block */ 'i', `ResourceBundle.getBundle`],
				[/* text */ 't', ` factory method. This method
 is called from the factory method every time when no resulting
 resource bundle has been found for `],
				[/* inline code block */ 'i', `baseName`],
				[/* text */ 't', ` and
 `],
				[/* inline code block */ 'i', `locale`],
				[/* text */ 't', `, where locale is either the parameter for
 `],
				[/* inline code block */ 'i', `ResourceBundle.getBundle`],
				[/* text */ 't', ` or the previous fallback
 locale returned by this method.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The method returns `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` if no further fallback
 search is desired.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The default implementation returns the `],
					[/* reference */ 'r', `java.util.Locale#getDefault()`, `default Locale`],
					[/* text */ 't', ` if the given
 `],
					[/* inline code block */ 'i', `locale`],
					[/* text */ 't', ` isn't the default one.  Otherwise,
 `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` is returned.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'baseName', [/* parameter description */
					[/* text */ 't', `the base name of the resource bundle, a fully
        qualified class name for which
        `],
					[/* inline code block */ 'i', `ResourceBundle.getBundle`],
					[/* text */ 't', ` has been
        unable to find any resource bundles (except for the
        base bundle)`]
				]],
				[/* parameter */ 'locale', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `Locale`],
					[/* text */ 't', ` for which
        `],
					[/* inline code block */ 'i', `ResourceBundle.getBundle`],
					[/* text */ 't', ` has been
        unable to find any resource bundles (except for the
        base bundle)`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `baseName`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `locale`],
					[/* text */ 't', `
        is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Locale`],
				[/* text */ 't', ` for the fallback search,
        or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if no further fallback search
        is desired.`]
			]
		]],
		[/* method */ 'newBundle(java.lang.String,java.util.Locale,java.lang.String,java.lang.ClassLoader,boolean)', [
			[/* method description */
				[/* text */ 't', `Instantiates a resource bundle for the given bundle name of the
 given format and locale, using the given class loader if
 necessary. This method returns `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if there is no
 resource bundle available for the given parameters. If a resource
 bundle can't be instantiated due to an unexpected error, the
 error must be reported by throwing an `],
				[/* inline code block */ 'i', `Error`],
				[/* text */ 't', ` or
 `],
				[/* inline code block */ 'i', `Exception`],
				[/* text */ 't', ` rather than simply returning
 `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If the `],
					[/* inline code block */ 'i', `reload`],
					[/* text */ 't', ` flag is `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', `, it
 indicates that this method is being called because the previously
 loaded resource bundle has expired.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'baseName', [/* parameter description */
					[/* text */ 't', `the base bundle name of the resource bundle, a fully
        qualified class name`]
				]],
				[/* parameter */ 'locale', [/* parameter description */
					[/* text */ 't', `the locale for which the resource bundle should be
        instantiated`]
				]],
				[/* parameter */ 'format', [/* parameter description */
					[/* text */ 't', `the resource bundle format to be loaded`]
				]],
				[/* parameter */ 'loader', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `ClassLoader`],
					[/* text */ 't', ` to use to load the bundle`]
				]],
				[/* parameter */ 'reload', [/* parameter description */
					[/* text */ 't', `the flag to indicate bundle reloading; `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', `
        if reloading an expired resource bundle,
        `],
					[/* inline code block */ 'i', `false`],
					[/* text */ 't', ` otherwise`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `bundleName`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `locale`],
					[/* text */ 't', `,
        `],
					[/* inline code block */ 'i', `format`],
					[/* text */ 't', `, or `],
					[/* inline code block */ 'i', `loader`],
					[/* text */ 't', ` is
        `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `, or if `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` is returned by
        `],
					[/* reference */ 'r', `#toBundleName(java.lang.String,java.util.Locale)`, `toBundleName`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `format`],
					[/* text */ 't', ` is unknown, or if the resource
        found for the given parameters contains malformed data.`]
				]],
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the loaded class cannot be cast to `],
					[/* inline code block */ 'i', `ResourceBundle`]
				]],
				[/* throw */ 'java.lang.IllegalAccessException', [/* throw description */
					[/* text */ 't', `if the class or its nullary constructor is not
        accessible.`]
				]],
				[/* throw */ 'java.lang.InstantiationException', [/* throw description */
					[/* text */ 't', `if the instantiation of a class fails for some other
        reason.`]
				]],
				[/* throw */ 'java.lang.ExceptionInInitializerError', [/* throw description */
					[/* text */ 't', `if the initialization provoked by this method fails.`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If a security manager is present and creation of new
        instances is denied. See `],
					[/* reference */ 'r', `java.lang.Class#newInstance()`, `Class.newInstance()`],
					[/* text */ 't', `
        for details.`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an error occurred when reading resources using
        any I/O operations`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the resource bundle instance,
        or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if none could be found.`]
			]
		]],
		[/* method */ 'getTimeToLive(java.lang.String,java.util.Locale)', [
			[/* method description */
				[/* text */ 't', `Returns the time-to-live (TTL) value for resource bundles that
 are loaded under this
 `],
				[/* inline code block */ 'i', `ResourceBundle.Control`],
				[/* text */ 't', `. Positive time-to-live values
 specify the number of milliseconds a bundle can remain in the
 cache without being validated against the source data from which
 it was constructed. The value 0 indicates that a bundle must be
 validated each time it is retrieved from the cache. `],
				[/* text */ 't', `TTL_DONT_CACHE`],
				[/* text */ 't', ` specifies that loaded resource bundles are not
 put in the cache. `],
				[/* text */ 't', `TTL_NO_EXPIRATION_CONTROL`],
				[/* text */ 't', ` specifies
 that loaded resource bundles are put in the cache with no
 expiration control.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The expiration affects only the bundle loading process by the
 `],
					[/* inline code block */ 'i', `ResourceBundle.getBundle`],
					[/* text */ 't', ` factory method.  That is,
 if the factory method finds a resource bundle in the cache that
 has expired, the factory method calls the `],
					[/* reference */ 'r', `#needsReload(java.lang.String,java.util.Locale,java.lang.String,java.lang.ClassLoader,java.util.ResourceBundle,long)`, `needsReload`],
					[/* text */ 't', ` method to determine whether the resource
 bundle needs to be reloaded. If `],
					[/* inline code block */ 'i', `needsReload`],
					[/* text */ 't', ` returns
 `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', `, the cached resource bundle instance is removed
 from the cache. Otherwise, the instance stays in the cache,
 updated with the new TTL value returned by this method.

 `]
				]],
				[/* block */ 'b', `All cached resource bundles are subject to removal from the
 cache due to memory constraints of the runtime environment.
 Returning a large positive value doesn't mean to lock loaded
 resource bundles in the cache.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The default implementation returns `],
					[/* text */ 't', `TTL_NO_EXPIRATION_CONTROL`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'baseName', [/* parameter description */
					[/* text */ 't', `the base name of the resource bundle for which the
        expiration value is specified.`]
				]],
				[/* parameter */ 'locale', [/* parameter description */
					[/* text */ 't', `the locale of the resource bundle for which the
        expiration value is specified.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `baseName`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `locale`],
					[/* text */ 't', ` is
        `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the time (0 or a positive millisecond offset from the
        cached time) to get loaded bundles expired in the cache,
        `],
				[/* text */ 't', `TTL_NO_EXPIRATION_CONTROL`],
				[/* text */ 't', ` to disable the
        expiration control, or `],
				[/* text */ 't', `TTL_DONT_CACHE`],
				[/* text */ 't', ` to disable
        caching.`]
			]
		]],
		[/* method */ 'getControl(java.util.List)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `ResourceBundle.Control`],
				[/* text */ 't', ` in which the `],
				[/* reference */ 'r', `#getFormats(java.lang.String)`, `getFormats`],
				[/* text */ 't', ` method returns the specified
 `],
				[/* inline code block */ 'i', `formats`],
				[/* text */ 't', `. The `],
				[/* inline code block */ 'i', `formats`],
				[/* text */ 't', ` must be equal to
 one of `],
				[/* text */ 't', `FORMAT_PROPERTIES`],
				[/* text */ 't', `, `],
				[/* text */ 't', `FORMAT_CLASS`],
				[/* text */ 't', ` or `],
				[/* text */ 't', `FORMAT_DEFAULT`],
				[/* text */ 't', `. `],
				[/* inline code block */ 'i', `ResourceBundle.Control`],
				[/* text */ 't', `
 instances returned by this method are singletons and thread-safe.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Specifying `],
					[/* text */ 't', `FORMAT_DEFAULT`],
					[/* text */ 't', ` is equivalent to
 instantiating the `],
					[/* inline code block */ 'i', `ResourceBundle.Control`],
					[/* text */ 't', ` class,
 except that this method returns a singleton.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'formats', [/* parameter description */
					[/* text */ 't', `the formats to be returned by the
        `],
					[/* inline code block */ 'i', `ResourceBundle.Control.getFormats`],
					[/* text */ 't', ` method`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `formats`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `formats`],
					[/* text */ 't', ` is unknown`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `ResourceBundle.Control`],
				[/* text */ 't', ` supporting the
        specified `],
				[/* inline code block */ 'i', `formats`]
			]
		]],
		[/* method */ 'getNoFallbackControl(java.util.List)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `ResourceBundle.Control`],
				[/* text */ 't', ` in which the `],
				[/* reference */ 'r', `#getFormats(java.lang.String)`, `getFormats`],
				[/* text */ 't', ` method returns the specified
 `],
				[/* inline code block */ 'i', `formats`],
				[/* text */ 't', ` and the `],
				[/* reference */ 'r', `#getFallbackLocale(java.lang.String,java.util.Locale)`, `getFallbackLocale`],
				[/* text */ 't', `
 method returns `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `. The `],
				[/* inline code block */ 'i', `formats`],
				[/* text */ 't', ` must
 be equal to one of `],
				[/* text */ 't', `FORMAT_PROPERTIES`],
				[/* text */ 't', `, `],
				[/* text */ 't', `FORMAT_CLASS`],
				[/* text */ 't', ` or `],
				[/* text */ 't', `FORMAT_DEFAULT`],
				[/* text */ 't', `.
 `],
				[/* inline code block */ 'i', `ResourceBundle.Control`],
				[/* text */ 't', ` instances returned by this
 method are singletons and thread-safe.`]
			],
			[/* parameters */
				[/* parameter */ 'formats', [/* parameter description */
					[/* text */ 't', `the formats to be returned by the
        `],
					[/* inline code block */ 'i', `ResourceBundle.Control.getFormats`],
					[/* text */ 't', ` method`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `formats`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `formats`],
					[/* text */ 't', ` is unknown`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `ResourceBundle.Control`],
				[/* text */ 't', ` supporting the
        specified `],
				[/* inline code block */ 'i', `formats`],
				[/* text */ 't', ` with no fallback
        `],
				[/* inline code block */ 'i', `Locale`],
				[/* text */ 't', ` support`]
			]
		]]
	],
]);
