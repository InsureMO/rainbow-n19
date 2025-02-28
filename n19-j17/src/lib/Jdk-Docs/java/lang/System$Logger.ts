import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.lang.System$Logger', [
	[/* class description */
		[/* inline code block */ 'i', `System.Logger`],
		[/* text */ 't', ` instances log messages that will be
 routed to the underlying logging framework the `],
		[/* reference */ 'r', `java.lang.System.LoggerFinder`],
		[/* text */ 't', ` uses.

 `],
		[/* inline code block */ 'i', `System.Logger`],
		[/* text */ 't', ` instances are typically obtained from
 the `],
		[/* reference */ 'r', `java.lang.System`],
		[/* text */ 't', ` class, by calling
 `],
		[/* external link */ 'a', `System.html#getLogger(java.lang.String)`, `System.getLogger(loggerName)`],
		[/* text */ 't', `
 or `],
		[/* external link */ 'a', `System.html#getLogger(java.lang.String,java.util.ResourceBundle)`, `System.getLogger(loggerName, bundle)`],
		[/* text */ 't', `.`]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'getName()', [
			[/* method description */
				[/* text */ 't', `Returns the name of this logger.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the logger name.`]
			]
		]],
		[/* method */ 'log(java.lang.System.Logger.Level,java.lang.String,java.lang.Object...)', [
			[/* method description */
				[/* text */ 't', `Logs a message with an optional list of parameters.`]
			],
			[/* parameters */
				[/* parameter */ 'level', [/* parameter description */
					[/* text */ 't', `one of the log message level identifiers.`]
				]],
				[/* parameter */ 'format', [/* parameter description */
					[/* text */ 't', `the string message format in `],
					[/* reference */ 'r', `java.text.MessageFormat`],
					[/* text */ 't', ` format, (or a key in the message
 catalog, if this logger is a `],
					[/* external link */ 'a', `System.LoggerFinder.html#getLocalizedLogger(java.lang.String,java.util.ResourceBundle,java.lang.Module)`, `localized logger`],
					[/* text */ 't', `);
 can be `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]],
				[/* parameter */ 'params', [/* parameter description */
					[/* text */ 't', `an optional list of parameters to the message (may be
 none).`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `level`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'log(java.lang.System.Logger.Level,java.util.function.Supplier,java.lang.Throwable)', [
			[/* method description */
				[/* text */ 't', `Logs a lazily supplied message associated with a given throwable.

 If the logger is currently enabled for the given log message level
 then a message is logged that is the result produced by the
 given supplier function.  Otherwise, the supplier is not operated on.`]
			],
			[/* parameters */
				[/* parameter */ 'level', [/* parameter description */
					[/* text */ 't', `one of the log message level identifiers.`]
				]],
				[/* parameter */ 'msgSupplier', [/* parameter description */
					[/* text */ 't', `a supplier function that produces a message.`]
				]],
				[/* parameter */ 'thrown', [/* parameter description */
					[/* text */ 't', `a `],
					[/* inline code block */ 'i', `Throwable`],
					[/* text */ 't', ` associated with log message;
               can be `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `level`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `, or
                               `],
					[/* inline code block */ 'i', `msgSupplier`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'log(java.lang.System.Logger.Level,java.lang.String,java.lang.Throwable)', [
			[/* method description */
				[/* text */ 't', `Logs a message associated with a given throwable.`]
			],
			[/* parameters */
				[/* parameter */ 'level', [/* parameter description */
					[/* text */ 't', `the log message level.`]
				]],
				[/* parameter */ 'msg', [/* parameter description */
					[/* text */ 't', `the string message (or a key in the message catalog, if
 this logger is a `],
					[/* external link */ 'a', `System.LoggerFinder.html#getLocalizedLogger(java.lang.String,java.util.ResourceBundle,java.lang.Module)`, `localized logger`],
					[/* text */ 't', `);
 can be `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]],
				[/* parameter */ 'thrown', [/* parameter description */
					[/* text */ 't', `a `],
					[/* inline code block */ 'i', `Throwable`],
					[/* text */ 't', ` associated with the log message;
        can be `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `level`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'log(java.lang.System.Logger.Level,java.util.ResourceBundle,java.lang.String,java.lang.Throwable)', [
			[/* method description */
				[/* text */ 't', `Logs a localized message associated with a given throwable.

 If the given resource bundle is non-`],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `,  the `],
				[/* inline code block */ 'i', `msg`],
				[/* text */ 't', `
 string is localized using the given resource bundle.
 Otherwise the `],
				[/* inline code block */ 'i', `msg`],
				[/* text */ 't', ` string is not localized.`]
			],
			[/* parameters */
				[/* parameter */ 'level', [/* parameter description */
					[/* text */ 't', `the log message level.`]
				]],
				[/* parameter */ 'bundle', [/* parameter description */
					[/* text */ 't', `a resource bundle to localize `],
					[/* inline code block */ 'i', `msg`],
					[/* text */ 't', `; can be
 `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]],
				[/* parameter */ 'msg', [/* parameter description */
					[/* text */ 't', `the string message (or a key in the message catalog,
            if `],
					[/* inline code block */ 'i', `bundle`],
					[/* text */ 't', ` is not `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `); can be `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]],
				[/* parameter */ 'thrown', [/* parameter description */
					[/* text */ 't', `a `],
					[/* inline code block */ 'i', `Throwable`],
					[/* text */ 't', ` associated with the log message;
        can be `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `level`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'log(java.lang.System.Logger.Level,java.util.ResourceBundle,java.lang.String,java.lang.Object...)', [
			[/* method description */
				[/* text */ 't', `Logs a message with resource bundle and an optional list of
 parameters.

 If the given resource bundle is non-`],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `,  the `],
				[/* inline code block */ 'i', `format`],
				[/* text */ 't', `
 string is localized using the given resource bundle.
 Otherwise the `],
				[/* inline code block */ 'i', `format`],
				[/* text */ 't', ` string is not localized.`]
			],
			[/* parameters */
				[/* parameter */ 'level', [/* parameter description */
					[/* text */ 't', `the log message level.`]
				]],
				[/* parameter */ 'bundle', [/* parameter description */
					[/* text */ 't', `a resource bundle to localize `],
					[/* inline code block */ 'i', `format`],
					[/* text */ 't', `; can be
 `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]],
				[/* parameter */ 'format', [/* parameter description */
					[/* text */ 't', `the string message format in `],
					[/* reference */ 'r', `java.text.MessageFormat`],
					[/* text */ 't', ` format, (or a key in the message
 catalog if `],
					[/* inline code block */ 'i', `bundle`],
					[/* text */ 't', ` is not `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `); can be `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]],
				[/* parameter */ 'params', [/* parameter description */
					[/* text */ 't', `an optional list of parameters to the message (may be
 none).`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `level`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'log(java.lang.System.Logger.Level,java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Logs a message.`]
			],
			[/* parameters */
				[/* parameter */ 'level', [/* parameter description */
					[/* text */ 't', `the log message level.`]
				]],
				[/* parameter */ 'msg', [/* parameter description */
					[/* text */ 't', `the string message (or a key in the message catalog, if
 this logger is a `],
					[/* external link */ 'a', `System.LoggerFinder.html#getLocalizedLogger(java.lang.String,java.util.ResourceBundle,java.lang.Module)`, `localized logger`],
					[/* text */ 't', `);
 can be `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `level`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'log(java.lang.System.Logger.Level,java.util.function.Supplier)', [
			[/* method description */
				[/* text */ 't', `Logs a lazily supplied message.

 If the logger is currently enabled for the given log message level
 then a message is logged that is the result produced by the
 given supplier function.  Otherwise, the supplier is not operated on.`]
			],
			[/* parameters */
				[/* parameter */ 'level', [/* parameter description */
					[/* text */ 't', `the log message level.`]
				]],
				[/* parameter */ 'msgSupplier', [/* parameter description */
					[/* text */ 't', `a supplier function that produces a message.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `level`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `,
         or `],
					[/* inline code block */ 'i', `msgSupplier`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'log(java.lang.System.Logger.Level,java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Logs a message produced from the given object.

 If the logger is currently enabled for the given log message level then
 a message is logged that, by default, is the result produced from
 calling  toString on the given object.
 Otherwise, the object is not operated on.`]
			],
			[/* parameters */
				[/* parameter */ 'level', [/* parameter description */
					[/* text */ 't', `the log message level.`]
				]],
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `the object to log.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `level`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `, or
         `],
					[/* inline code block */ 'i', `obj`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'isLoggable(java.lang.System.Logger.Level)', [
			[/* method description */
				[/* text */ 't', `Checks if a message of the given level would be logged by
 this logger.`]
			],
			[/* parameters */
				[/* parameter */ 'level', [/* parameter description */
					[/* text */ 't', `the log message level.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `level`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the given log message level is currently
         being logged.`]
			]
		]]
	],
]);
