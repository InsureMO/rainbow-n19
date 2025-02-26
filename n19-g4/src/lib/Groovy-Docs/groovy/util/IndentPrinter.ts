import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('groovy.util.IndentPrinter', [
	[ /* class description */
		['b', `A helper class for printing indented text. This can be used stand-alone or, more commonly, from Builders.`],
		['b', `
 By default, a PrintWriter to System.out is used as the Writer, but it is possible
 to change the Writer by passing a new one as a constructor argument.
 `],
		['b', `
 Indention by default is 2 characters but can be changed by passing a
 different value as a constructor argument.
 `],
		['b', `
 The following is an example usage. Note that within a "with" block you need to
 specify a parameter name so that this.println is not called instead of IndentPrinter.println:
 `],
		['c', [['t', `new IndentPrinter(new PrintWriter(out)).with { p`], ['i', '->'], ['t', `p.printIndent()
     p.println('parent1')
     p.incrementIndent()
     p.printIndent()
     p.println('child 1')
     p.printIndent()
     p.println('child 2')
     p.decrementIndent()
     p.printIndent()
     p.println('parent2')
     p.flush()
 }`]]],
		['b', `The above example prints this to standard output:`],
		['c', ` parent1
   child 1
   child 2
 parent2
 `],
	],
	UDF,
	/* class sees */ UDF,
	UDF, UDF, UDF
]);
