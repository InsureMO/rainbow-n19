import {UDF} from '../../../utils';
import {GroovyClassCreateHelper} from '../../GroovyClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
GroovyClassCreateHelper.class('groovy.util.ObservableMap', [
	/* super class, extends java.lang.Object */
	'java.lang.Object',
	[/* interfaces, implements java.util.Map */
		'java.util.Map'
	],
	/* modifiers */ 1,
	/* declared annotations */,
	/* type parameters */,
	[/* declared constructors */
		[/* public groovy.util.ObservableMap() */
			/* parameters */,
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public groovy.util.ObservableMap(groovy.lang.Closure) */
			[/* parameters */
				[/* parameter */
					/* name */ 'test',
					/* type */ 'groovy.lang.Closure',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public groovy.util.ObservableMap(java.util.Map) */
			[/* parameters */
				[/* parameter */
					/* name */ 'delegate',
					/* type */ 'java.util.Map',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public groovy.util.ObservableMap(java.util.Map,groovy.lang.Closure) */
			[/* parameters */
				[/* parameter */
					/* name */ 'delegate',
					/* type */ 'java.util.Map',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'test',
					/* type */ 'groovy.lang.Closure',
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
		[/* protected groovy.lang.Closure groovy.util.ObservableMap.getTest() */
			/* name */ 'getTest',
			/* parameters */,
			/* return */ 'groovy.lang.Closure',
			/* exceptions */,
			/* modifiers */ 4,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* protected java.util.Map groovy.util.ObservableMap.getMapDelegate() */
			/* name */ 'getMapDelegate',
			/* parameters */,
			/* return */ 'java.util.Map',
			/* exceptions */,
			/* modifiers */ 4,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* protected void groovy.util.ObservableMap.fireMultiPropertyEvent(groovy.util.ObservableMap$PropertyEvent[]) */
			/* name */ 'fireMultiPropertyEvent',
			[/* parameters */
				[/* parameter */
					/* name */ 'events',
					/* type */ '[Lgroovy.util.ObservableMap$PropertyEvent;',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 4,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* protected void groovy.util.ObservableMap.fireMultiPropertyEvent(java.util.List<groovy.util.ObservableMap$PropertyEvent>) */
			/* name */ 'fireMultiPropertyEvent',
			[/* parameters */
				[/* parameter */
					/* name */ 'events',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							'groovy.util.ObservableMap$PropertyEvent'
						],
						/* raw type */ 'java.util.List',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 4,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* protected void groovy.util.ObservableMap.firePropertyAddedEvent(java.lang.Object,java.lang.Object) */
			/* name */ 'firePropertyAddedEvent',
			[/* parameters */
				[/* parameter */
					/* name */ 'key',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'value',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 4,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* protected void groovy.util.ObservableMap.firePropertyClearedEvent(java.util.Map) */
			/* name */ 'firePropertyClearedEvent',
			[/* parameters */
				[/* parameter */
					/* name */ 'values',
					/* type */ 'java.util.Map',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 4,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* protected void groovy.util.ObservableMap.firePropertyEvent(groovy.util.ObservableMap$PropertyEvent) */
			/* name */ 'firePropertyEvent',
			[/* parameters */
				[/* parameter */
					/* name */ 'event',
					/* type */ 'groovy.util.ObservableMap$PropertyEvent',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 4,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* protected void groovy.util.ObservableMap.firePropertyRemovedEvent(java.lang.Object,java.lang.Object) */
			/* name */ 'firePropertyRemovedEvent',
			[/* parameters */
				[/* parameter */
					/* name */ 'key',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'value',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 4,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* protected void groovy.util.ObservableMap.firePropertyUpdatedEvent(java.lang.Object,java.lang.Object,java.lang.Object) */
			/* name */ 'firePropertyUpdatedEvent',
			[/* parameters */
				[/* parameter */
					/* name */ 'key',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'oldValue',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'newValue',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 4,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* protected void groovy.util.ObservableMap.fireSizeChangedEvent(int,int) */
			/* name */ 'fireSizeChangedEvent',
			[/* parameters */
				[/* parameter */
					/* name */ 'oldValue',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'newValue',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 4,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public boolean groovy.util.ObservableMap.containsKey(java.lang.Object) */
			/* name */ 'containsKey',
			[/* parameters */
				[/* parameter */
					/* name */ 'key',
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
		[/* public boolean groovy.util.ObservableMap.containsValue(java.lang.Object) */
			/* name */ 'containsValue',
			[/* parameters */
				[/* parameter */
					/* name */ 'value',
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
		[/* public boolean groovy.util.ObservableMap.equals(java.lang.Object) */
			/* name */ 'equals',
			[/* parameters */
				[/* parameter */
					/* name */ 'o',
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
		[/* public boolean groovy.util.ObservableMap.hasListeners(java.lang.String) */
			/* name */ 'hasListeners',
			[/* parameters */
				[/* parameter */
					/* name */ 'propertyName',
					/* type */ 'java.lang.String',
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
		[/* public boolean groovy.util.ObservableMap.isEmpty() */
			/* name */ 'isEmpty',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int groovy.util.ObservableMap.getSize() */
			/* name */ 'getSize',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int groovy.util.ObservableMap.hashCode() */
			/* name */ 'hashCode',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int groovy.util.ObservableMap.size() */
			/* name */ 'size',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.beans.PropertyChangeListener[] groovy.util.ObservableMap.getPropertyChangeListeners() */
			/* name */ 'getPropertyChangeListeners',
			/* parameters */,
			/* return */ '[Ljava.beans.PropertyChangeListener;',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.beans.PropertyChangeListener[] groovy.util.ObservableMap.getPropertyChangeListeners(java.lang.String) */
			/* name */ 'getPropertyChangeListeners',
			[/* parameters */
				[/* parameter */
					/* name */ 'propertyName',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ '[Ljava.beans.PropertyChangeListener;',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.Object groovy.util.ObservableMap.get(java.lang.Object) */
			/* name */ 'get',
			[/* parameters */
				[/* parameter */
					/* name */ 'key',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.Object',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.Object groovy.util.ObservableMap.put(java.lang.Object,java.lang.Object) */
			/* name */ 'put',
			[/* parameters */
				[/* parameter */
					/* name */ 'key',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'value',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.Object',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.Object groovy.util.ObservableMap.remove(java.lang.Object) */
			/* name */ 'remove',
			[/* parameters */
				[/* parameter */
					/* name */ 'key',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.Object',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.Collection groovy.util.ObservableMap.values() */
			/* name */ 'values',
			/* parameters */,
			/* return */ 'java.util.Collection',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.Map groovy.util.ObservableMap.getContent() */
			/* name */ 'getContent',
			/* parameters */,
			/* return */ 'java.util.Map',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.Set groovy.util.ObservableMap.entrySet() */
			/* name */ 'entrySet',
			/* parameters */,
			/* return */ 'java.util.Set',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.Set groovy.util.ObservableMap.keySet() */
			/* name */ 'keySet',
			/* parameters */,
			/* return */ 'java.util.Set',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void groovy.util.ObservableMap.addPropertyChangeListener(java.beans.PropertyChangeListener) */
			/* name */ 'addPropertyChangeListener',
			[/* parameters */
				[/* parameter */
					/* name */ 'listener',
					/* type */ 'java.beans.PropertyChangeListener',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void groovy.util.ObservableMap.addPropertyChangeListener(java.lang.String,java.beans.PropertyChangeListener) */
			/* name */ 'addPropertyChangeListener',
			[/* parameters */
				[/* parameter */
					/* name */ 'propertyName',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'listener',
					/* type */ 'java.beans.PropertyChangeListener',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void groovy.util.ObservableMap.clear() */
			/* name */ 'clear',
			/* parameters */,
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void groovy.util.ObservableMap.putAll(java.util.Map) */
			/* name */ 'putAll',
			[/* parameters */
				[/* parameter */
					/* name */ 'map',
					/* type */ 'java.util.Map',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void groovy.util.ObservableMap.removePropertyChangeListener(java.beans.PropertyChangeListener) */
			/* name */ 'removePropertyChangeListener',
			[/* parameters */
				[/* parameter */
					/* name */ 'listener',
					/* type */ 'java.beans.PropertyChangeListener',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void groovy.util.ObservableMap.removePropertyChangeListener(java.lang.String,java.beans.PropertyChangeListener) */
			/* name */ 'removePropertyChangeListener',
			[/* parameters */
				[/* parameter */
					/* name */ 'propertyName',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'listener',
					/* type */ 'java.beans.PropertyChangeListener',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	[/* declared fields */
		[/* public static final java.lang.String groovy.util.ObservableMap.SIZE_PROPERTY */
			/* name */ 'SIZE_PROPERTY',
			/* type */ 'java.lang.String',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final java.lang.String groovy.util.ObservableMap.CONTENT_PROPERTY */
			/* name */ 'CONTENT_PROPERTY',
			/* type */ 'java.lang.String',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final java.lang.String groovy.util.ObservableMap.CLEARED_PROPERTY */
			/* name */ 'CLEARED_PROPERTY',
			/* type */ 'java.lang.String',
			/* annotations */ UDF,
			/* modifiers */ 25
		]
	],
	/* enum values */ UDF
]);
