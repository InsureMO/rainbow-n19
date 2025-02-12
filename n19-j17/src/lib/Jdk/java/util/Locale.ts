import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.util.Locale', [
	/* super class, extends java.lang.Object */
	'java.lang.Object',
	[/* interfaces, implements java.lang.Cloneable, java.io.Serializable */
		'java.lang.Cloneable',
		'java.io.Serializable'
	],
	/* modifiers */ 17,
	/* declared annotations */,
	/* type parameters */,
	[/* declared constructors */
		[/* public java.util.Locale(java.lang.String) */
			[/* parameters */
				[/* parameter */
					/* name */ 'language',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.Locale(java.lang.String,java.lang.String) */
			[/* parameters */
				[/* parameter */
					/* name */ 'language',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'country',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.Locale(java.lang.String,java.lang.String,java.lang.String) */
			[/* parameters */
				[/* parameter */
					/* name */ 'language',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'country',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'variant',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	[/* declared methods */
		[/* public boolean java.util.Locale.equals(java.lang.Object) */
			/* name */ 'equals',
			[/* parameters */
				[/* parameter */
					/* name */ 'obj',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public boolean java.util.Locale.hasExtensions() */
			/* name */ 'hasExtensions',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final java.lang.String java.util.Locale.getDisplayCountry() */
			/* name */ 'getDisplayCountry',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final java.lang.String java.util.Locale.getDisplayLanguage() */
			/* name */ 'getDisplayLanguage',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final java.lang.String java.util.Locale.getDisplayName() */
			/* name */ 'getDisplayName',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final java.lang.String java.util.Locale.getDisplayVariant() */
			/* name */ 'getDisplayVariant',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final java.lang.String java.util.Locale.toString() */
			/* name */ 'toString',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int java.util.Locale.hashCode() */
			/* name */ 'hashCode',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.Object java.util.Locale.clone() */
			/* name */ 'clone',
			/* parameters */,
			/* return */ 'java.lang.Object',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String java.util.Locale.getCountry() */
			/* name */ 'getCountry',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String java.util.Locale.getDisplayCountry(java.util.Locale) */
			/* name */ 'getDisplayCountry',
			[/* parameters */
				[/* parameter */
					/* name */ 'inLocale',
					/* type */ 'java.util.Locale',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String java.util.Locale.getDisplayLanguage(java.util.Locale) */
			/* name */ 'getDisplayLanguage',
			[/* parameters */
				[/* parameter */
					/* name */ 'inLocale',
					/* type */ 'java.util.Locale',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String java.util.Locale.getDisplayName(java.util.Locale) */
			/* name */ 'getDisplayName',
			[/* parameters */
				[/* parameter */
					/* name */ 'result',
					/* type */ 'java.util.Locale',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String java.util.Locale.getDisplayScript() */
			/* name */ 'getDisplayScript',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String java.util.Locale.getDisplayScript(java.util.Locale) */
			/* name */ 'getDisplayScript',
			[/* parameters */
				[/* parameter */
					/* name */ 'inLocale',
					/* type */ 'java.util.Locale',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String java.util.Locale.getDisplayVariant(java.util.Locale) */
			/* name */ 'getDisplayVariant',
			[/* parameters */
				[/* parameter */
					/* name */ 'inLocale',
					/* type */ 'java.util.Locale',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String java.util.Locale.getExtension(char) */
			/* name */ 'getExtension',
			[/* parameters */
				[/* parameter */
					/* name */ 'key',
					/* type */ 'char',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String java.util.Locale.getISO3Country() throws java.util.MissingResourceException */
			/* name */ 'getISO3Country',
			/* parameters */,
			/* return */ 'java.lang.String',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.util.MissingResourceException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String java.util.Locale.getISO3Language() throws java.util.MissingResourceException */
			/* name */ 'getISO3Language',
			/* parameters */,
			/* return */ 'java.lang.String',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.util.MissingResourceException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String java.util.Locale.getLanguage() */
			/* name */ 'getLanguage',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String java.util.Locale.getScript() */
			/* name */ 'getScript',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String java.util.Locale.getUnicodeLocaleType(java.lang.String) */
			/* name */ 'getUnicodeLocaleType',
			[/* parameters */
				[/* parameter */
					/* name */ 'key',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String java.util.Locale.getVariant() */
			/* name */ 'getVariant',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String java.util.Locale.toLanguageTag() */
			/* name */ 'toLanguageTag',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.Locale java.util.Locale.stripExtensions() */
			/* name */ 'stripExtensions',
			/* parameters */,
			/* return */ 'java.util.Locale',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.Set<java.lang.Character> java.util.Locale.getExtensionKeys() */
			/* name */ 'getExtensionKeys',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.lang.Character'
				],
				/* raw type */ 'java.util.Set',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.Set<java.lang.String> java.util.Locale.getUnicodeLocaleAttributes() */
			/* name */ 'getUnicodeLocaleAttributes',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.lang.String'
				],
				/* raw type */ 'java.util.Set',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.Set<java.lang.String> java.util.Locale.getUnicodeLocaleKeys() */
			/* name */ 'getUnicodeLocaleKeys',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.lang.String'
				],
				/* raw type */ 'java.util.Set',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.String java.util.Locale.lookupTag(java.util.List<java.util.Locale$LanguageRange>,java.util.Collection<java.lang.String>) */
			/* name */ 'lookupTag',
			[/* parameters */
				[/* parameter */
					/* name */ 'priorityList',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							'java.util.Locale$LanguageRange'
						],
						/* raw type */ 'java.util.List',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'tags',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							'java.lang.String'
						],
						/* raw type */ 'java.util.Collection',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.String[] java.util.Locale.getISOCountries() */
			/* name */ 'getISOCountries',
			/* parameters */,
			/* return */ '[Ljava.lang.String;',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.String[] java.util.Locale.getISOLanguages() */
			/* name */ 'getISOLanguages',
			/* parameters */,
			/* return */ '[Ljava.lang.String;',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.util.List<java.lang.String> java.util.Locale.filterTags(java.util.List<java.util.Locale$LanguageRange>,java.util.Collection<java.lang.String>) */
			/* name */ 'filterTags',
			[/* parameters */
				[/* parameter */
					/* name */ 'priorityList',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							'java.util.Locale$LanguageRange'
						],
						/* raw type */ 'java.util.List',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'tags',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							'java.lang.String'
						],
						/* raw type */ 'java.util.Collection',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.lang.String'
				],
				/* raw type */ 'java.util.List',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.util.List<java.lang.String> java.util.Locale.filterTags(java.util.List<java.util.Locale$LanguageRange>,java.util.Collection<java.lang.String>,java.util.Locale$FilteringMode) */
			/* name */ 'filterTags',
			[/* parameters */
				[/* parameter */
					/* name */ 'priorityList',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							'java.util.Locale$LanguageRange'
						],
						/* raw type */ 'java.util.List',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'tags',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							'java.lang.String'
						],
						/* raw type */ 'java.util.Collection',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'mode',
					/* type */ 'java.util.Locale$FilteringMode',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.lang.String'
				],
				/* raw type */ 'java.util.List',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.util.List<java.util.Locale> java.util.Locale.filter(java.util.List<java.util.Locale$LanguageRange>,java.util.Collection<java.util.Locale>) */
			/* name */ 'filter',
			[/* parameters */
				[/* parameter */
					/* name */ 'priorityList',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							'java.util.Locale$LanguageRange'
						],
						/* raw type */ 'java.util.List',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'locales',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							'java.util.Locale'
						],
						/* raw type */ 'java.util.Collection',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.util.Locale'
				],
				/* raw type */ 'java.util.List',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.util.List<java.util.Locale> java.util.Locale.filter(java.util.List<java.util.Locale$LanguageRange>,java.util.Collection<java.util.Locale>,java.util.Locale$FilteringMode) */
			/* name */ 'filter',
			[/* parameters */
				[/* parameter */
					/* name */ 'priorityList',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							'java.util.Locale$LanguageRange'
						],
						/* raw type */ 'java.util.List',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'locales',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							'java.util.Locale'
						],
						/* raw type */ 'java.util.Collection',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'mode',
					/* type */ 'java.util.Locale$FilteringMode',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.util.Locale'
				],
				/* raw type */ 'java.util.List',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.util.Locale java.util.Locale.forLanguageTag(java.lang.String) */
			/* name */ 'forLanguageTag',
			[/* parameters */
				[/* parameter */
					/* name */ 'languageTag',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.Locale',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.util.Locale java.util.Locale.getDefault() */
			/* name */ 'getDefault',
			/* parameters */,
			/* return */ 'java.util.Locale',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.util.Locale java.util.Locale.getDefault(java.util.Locale$Category) */
			/* name */ 'getDefault',
			[/* parameters */
				[/* parameter */
					/* name */ 'loc',
					/* type */ 'java.util.Locale$Category',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.Locale',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.util.Locale java.util.Locale.lookup(java.util.List<java.util.Locale$LanguageRange>,java.util.Collection<java.util.Locale>) */
			/* name */ 'lookup',
			[/* parameters */
				[/* parameter */
					/* name */ 'priorityList',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							'java.util.Locale$LanguageRange'
						],
						/* raw type */ 'java.util.List',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'locales',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							'java.util.Locale'
						],
						/* raw type */ 'java.util.Collection',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.Locale',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.util.Locale[] java.util.Locale.getAvailableLocales() */
			/* name */ 'getAvailableLocales',
			/* parameters */,
			/* return */ '[Ljava.util.Locale;',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.util.Set<java.lang.String> java.util.Locale.getISOCountries(java.util.Locale$IsoCountryCode) */
			/* name */ 'getISOCountries',
			[/* parameters */
				[/* parameter */
					/* name */ 'type',
					/* type */ 'java.util.Locale$IsoCountryCode',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.lang.String'
				],
				/* raw type */ 'java.util.Set',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static synchronized void java.util.Locale.setDefault(java.util.Locale$Category,java.util.Locale) */
			/* name */ 'setDefault',
			[/* parameters */
				[/* parameter */
					/* name */ 'category',
					/* type */ 'java.util.Locale$Category',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'newLocale',
					/* type */ 'java.util.Locale',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 41,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static synchronized void java.util.Locale.setDefault(java.util.Locale) */
			/* name */ 'setDefault',
			[/* parameters */
				[/* parameter */
					/* name */ 'newLocale',
					/* type */ 'java.util.Locale',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 41,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	[/* declared fields */
		[/* public static final java.util.Locale java.util.Locale.ENGLISH */
			/* name */ 'ENGLISH',
			/* type */ 'java.util.Locale',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final java.util.Locale java.util.Locale.FRENCH */
			/* name */ 'FRENCH',
			/* type */ 'java.util.Locale',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final java.util.Locale java.util.Locale.GERMAN */
			/* name */ 'GERMAN',
			/* type */ 'java.util.Locale',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final java.util.Locale java.util.Locale.ITALIAN */
			/* name */ 'ITALIAN',
			/* type */ 'java.util.Locale',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final java.util.Locale java.util.Locale.JAPANESE */
			/* name */ 'JAPANESE',
			/* type */ 'java.util.Locale',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final java.util.Locale java.util.Locale.KOREAN */
			/* name */ 'KOREAN',
			/* type */ 'java.util.Locale',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final java.util.Locale java.util.Locale.CHINESE */
			/* name */ 'CHINESE',
			/* type */ 'java.util.Locale',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final java.util.Locale java.util.Locale.SIMPLIFIED_CHINESE */
			/* name */ 'SIMPLIFIED_CHINESE',
			/* type */ 'java.util.Locale',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final java.util.Locale java.util.Locale.TRADITIONAL_CHINESE */
			/* name */ 'TRADITIONAL_CHINESE',
			/* type */ 'java.util.Locale',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final java.util.Locale java.util.Locale.FRANCE */
			/* name */ 'FRANCE',
			/* type */ 'java.util.Locale',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final java.util.Locale java.util.Locale.GERMANY */
			/* name */ 'GERMANY',
			/* type */ 'java.util.Locale',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final java.util.Locale java.util.Locale.ITALY */
			/* name */ 'ITALY',
			/* type */ 'java.util.Locale',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final java.util.Locale java.util.Locale.JAPAN */
			/* name */ 'JAPAN',
			/* type */ 'java.util.Locale',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final java.util.Locale java.util.Locale.KOREA */
			/* name */ 'KOREA',
			/* type */ 'java.util.Locale',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final java.util.Locale java.util.Locale.UK */
			/* name */ 'UK',
			/* type */ 'java.util.Locale',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final java.util.Locale java.util.Locale.US */
			/* name */ 'US',
			/* type */ 'java.util.Locale',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final java.util.Locale java.util.Locale.CANADA */
			/* name */ 'CANADA',
			/* type */ 'java.util.Locale',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final java.util.Locale java.util.Locale.CANADA_FRENCH */
			/* name */ 'CANADA_FRENCH',
			/* type */ 'java.util.Locale',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final java.util.Locale java.util.Locale.ROOT */
			/* name */ 'ROOT',
			/* type */ 'java.util.Locale',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final java.util.Locale java.util.Locale.CHINA */
			/* name */ 'CHINA',
			/* type */ 'java.util.Locale',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final java.util.Locale java.util.Locale.PRC */
			/* name */ 'PRC',
			/* type */ 'java.util.Locale',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final java.util.Locale java.util.Locale.TAIWAN */
			/* name */ 'TAIWAN',
			/* type */ 'java.util.Locale',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final char java.util.Locale.PRIVATE_USE_EXTENSION */
			/* name */ 'PRIVATE_USE_EXTENSION',
			/* type */ 'char',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final char java.util.Locale.UNICODE_LOCALE_EXTENSION */
			/* name */ 'UNICODE_LOCALE_EXTENSION',
			/* type */ 'char',
			/* annotations */ UDF,
			/* modifiers */ 25
		]
	],
	/* enum values */ UDF
]);
