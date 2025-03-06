import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.util.spi.LocaleServiceProvider', [
	[/* class description */
		[/* block */ 'b', `
 This is the super class of all the locale sensitive service provider
 interfaces (SPIs).
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 Locale sensitive  service provider interfaces are interfaces that
 correspond to locale sensitive classes in the `],
			[/* inline code block */ 'i', `java.text`],
			[/* text */ 't', `
 and `],
			[/* inline code block */ 'i', `java.util`],
			[/* text */ 't', ` packages. The interfaces enable the
 construction of locale sensitive objects and the retrieval of
 localized names for these packages. Locale sensitive factory methods
 and methods for name retrieval in the `],
			[/* inline code block */ 'i', `java.text`],
			[/* text */ 't', ` and
 `],
			[/* inline code block */ 'i', `java.util`],
			[/* text */ 't', ` packages use implementations of the provider
 interfaces to offer support for locales beyond the set of locales
 supported by the Java runtime environment itself.

 `]
		]],
		[/* block */ 'b', `Packaging of Locale Sensitive Service Provider Implementations`],
		[/* text */ 't', `
 Implementations of these locale sensitive services can be made available
 by adding them to the application's class path. A provider identifies itself with a
 provider-configuration file in the resource directory META-INF/services,
 using the fully qualified provider interface class name as the file name.
 The file should contain a list of fully-qualified concrete provider class names,
 one per line. A line is terminated by any one of a line feed ('\\n'), a carriage
 return ('\\r'), or a carriage return followed immediately by a line feed. Space
 and tab characters surrounding each name, as well as blank lines, are ignored.
 The comment character is '#' ('#'); on each line all characters following
 the first comment character are ignored. The file must be encoded in UTF-8.
 `],
		[/* block */ 'b', `
 If a particular concrete provider class is named in more than one configuration
 file, or is named in the same configuration file more than once, then the
 duplicates will be ignored. The configuration file naming a particular provider
 need not be in the same jar file or other distribution unit as the provider itself.
 The provider must be accessible from the same class loader that was initially
 queried to locate the configuration file; this is not necessarily the class loader
 that loaded the file.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 For example, an implementation of the
 `],
			[/* reference */ 'r', `java.text.spi.DateFormatProvider`, `DateFormatProvider`],
			[/* text */ 't', ` class should
 take the form of a jar file which contains the file:
 `]
		]],
		[/* code block */ 'c', ` META-INF/services/java.text.spi.DateFormatProvider
 `],
		[/* text */ 't', `
 And the file `],
		[/* inline code block */ 'i', `java.text.spi.DateFormatProvider`],
		[/* text */ 't', ` should have
 a line such as:
 `],
		[/* code block */ 'c', [
			[/* inline code block */ 'i', `com.foo.DateFormatProviderImpl`]
		]],
		[/* text */ 't', `
 which is the fully qualified class name of the class implementing
 `],
		[/* inline code block */ 'i', `DateFormatProvider`],
		[/* text */ 't', `.
 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', `Invocation of Locale Sensitive Services`],
		[/* block */ 'b', [
			[/* text */ 't', `
 Locale sensitive factory methods and methods for name retrieval in the
 `],
			[/* inline code block */ 'i', `java.text`],
			[/* text */ 't', ` and `],
			[/* inline code block */ 'i', `java.util`],
			[/* text */ 't', ` packages invoke
 service provider methods when needed to support the requested locale.
 The methods first check whether the Java runtime environment itself
 supports the requested locale, and use its support if available.
 Otherwise, they call the `],
			[/* reference */ 'r', `#isSupportedLocale(java.util.Locale)`, `isSupportedLocale`],
			[/* text */ 't', `
 methods of installed providers for the appropriate interface to find one that
 supports the requested locale. If such a provider is found, its other
 methods are called to obtain the requested object or name.  When checking
 whether a locale is supported, the `],
			[/* reference */ 'r', `java.util.Locale#def_extensions`, `locale's extensions`],
			[/* text */ 't', ` are ignored by default. (If locale's extensions should
 also be checked, the `],
			[/* inline code block */ 'i', `isSupportedLocale`],
			[/* text */ 't', ` method must be overridden.)
 If neither the Java runtime environment itself nor an installed provider
 supports the requested locale, the methods go through a list of candidate
 locales and repeat the availability check for each until a match is found.
 The algorithm used for creating a list of candidate locales is same as
 the one used by `],
			[/* inline code block */ 'i', `ResourceBundle`],
			[/* text */ 't', ` by default (see
 `],
			[/* reference */ 'r', `java.util.ResourceBundle.Control#getCandidateLocales(java.lang.String,java.util.Locale)`, `getCandidateLocales`],
			[/* text */ 't', `
 for the details).  Even if a locale is resolved from the candidate list,
 methods that return requested objects or names are invoked with the original
 requested locale including `],
			[/* inline code block */ 'i', `Locale`],
			[/* text */ 't', ` extensions. The Java runtime
 environment must support the root locale for all locale sensitive services in
 order to guarantee that this process terminates.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 Providers of names (but not providers of other objects) are allowed to
 return null for some name requests even for locales that they claim to
 support by including them in their return value for
 `],
			[/* inline code block */ 'i', `getAvailableLocales`],
			[/* text */ 't', `. Similarly, the Java runtime
 environment itself may not have all names for all locales that it
 supports. This is because the sets of objects for which names are
 requested can be large and vary over time, so that it's not always
 feasible to cover them completely. If the Java runtime environment or a
 provider returns null instead of a name, the lookup will proceed as
 described above as if the locale was not supported.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 The search order of locale sensitive services can
 be configured by using the `],
			[/* inline code block */ 'i', `java.locale.providers`],
			[/* text */ 't', ` system property.
 This system property declares the user's preferred order for looking up
 the locale sensitive services separated by a comma. It is only read at
 the Java runtime startup, so the later call to System.setProperty() won't
 affect the order.
 `]
		]],
		[/* block */ 'b', `
 Java Runtime Environment provides the following four locale providers:
 `],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* text */ 't', ` "CLDR": A provider based on Unicode Consortium's
 `],
				[/* external link */ 'a', `http://cldr.unicode.org/`, `CLDR Project`],
				[/* text */ 't', `.
 `]
			]],
			[/* block */ 'b', ` "COMPAT": represents the locale sensitive services that is compatible
 with the prior JDK releases up to JDK8 (same as JDK8's "JRE").
 `],
			[/* block */ 'b', [
				[/* text */ 't', ` "SPI": represents the locale sensitive services implementing the subclasses of
 this `],
				[/* inline code block */ 'i', `LocaleServiceProvider`],
				[/* text */ 't', ` class.
 `]
			]],
			[/* block */ 'b', ` "HOST": A provider that reflects the user's custom settings in the
 underlying operating system. This provider may not be available, depending
 on the Java Runtime Environment implementation.
 `],
			[/* block */ 'b', ` "JRE": represents a synonym to "COMPAT". This name
 is deprecated and will be removed in the future release of JDK.
 `]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', `
 For example, if the following is specified in the property:
 `],
		[/* code block */ 'c', ` java.locale.providers=SPI,CLDR,COMPAT
 `],
		[/* text */ 't', `
 the locale sensitive services in the SPI providers are looked up first. If the
 desired locale sensitive service is not available, then the runtime looks for CLDR,
 COMPAT in that order.
 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', `
 The default order for looking up the preferred locale providers is "CLDR,COMPAT",
 so specifying "CLDR,COMPAT" is identical to the default behavior. Applications which
 require implementations of the locale sensitive services must explicitly specify
 "SPI" in order for the Java runtime to load them from the classpath.`]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Initializes a new locale service provider.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If a security manager has been installed and it denies
          `],
					[/* reference */ 'r', `java.lang.RuntimePermission`, `RuntimePermission("localeServiceProvider")`]
				]]
			]
		]]
	],
	[/* methods */
		[/* method */ 'getAvailableLocales()', [
			[/* method description */
				[/* text */ 't', `Returns an array of all locales for which this locale service provider
 can provide localized objects or names. This information is used to
 compose `],
				[/* inline code block */ 'i', `getAvailableLocales()`],
				[/* text */ 't', ` values of the locale-dependent
 services, such as `],
				[/* inline code block */ 'i', `DateFormat.getAvailableLocales()`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The array returned by this method should not include two or more
 `],
					[/* inline code block */ 'i', `Locale`],
					[/* text */ 't', ` objects only differing in their extensions.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `An array of all locales for which this locale service provider
 can provide localized objects or names.`]
			]
		]],
		[/* method */ 'isSupportedLocale(java.util.Locale)', [
			[/* method description */
				[/* text */ 't', `Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the given `],
				[/* inline code block */ 'i', `locale`],
				[/* text */ 't', ` is supported by
 this locale service provider. The given `],
				[/* inline code block */ 'i', `locale`],
				[/* text */ 't', ` may contain
 `],
				[/* reference */ 'r', `java.util.Locale#def_extensions`, `extensions`],
				[/* text */ 't', ` that should be
 taken into account for the support determination.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The default implementation returns `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` if the given `],
					[/* inline code block */ 'i', `locale`],
					[/* text */ 't', `
 is equal to any of the available `],
					[/* inline code block */ 'i', `Locale`],
					[/* text */ 't', `s returned by
 `],
					[/* reference */ 'r', `#getAvailableLocales()`, `getAvailableLocales()`],
					[/* text */ 't', ` with ignoring any extensions in both the
 given `],
					[/* inline code block */ 'i', `locale`],
					[/* text */ 't', ` and the available locales. Concrete locale service
 provider implementations should override this method if those
 implementations are `],
					[/* inline code block */ 'i', `Locale`],
					[/* text */ 't', ` extensions-aware. For example,
 `],
					[/* inline code block */ 'i', `DecimalFormatSymbolsProvider`],
					[/* text */ 't', ` implementations will need to check
 extensions in the given `],
					[/* inline code block */ 'i', `locale`],
					[/* text */ 't', ` to see if any numbering system is
 specified and can be supported. However, `],
					[/* inline code block */ 'i', `CollatorProvider`],
					[/* text */ 't', `
 implementations may not be affected by any particular numbering systems,
 and in that case, extensions for numbering systems should be ignored.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'locale', [/* parameter description */
					[/* text */ 't', `a `],
					[/* inline code block */ 'i', `Locale`],
					[/* text */ 't', ` to be tested`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the given `],
					[/* inline code block */ 'i', `locale`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the given `],
				[/* inline code block */ 'i', `locale`],
				[/* text */ 't', ` is supported by this
         provider; `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]]
	],
]);
