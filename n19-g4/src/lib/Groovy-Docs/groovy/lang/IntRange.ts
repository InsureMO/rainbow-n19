import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('groovy.lang.IntRange', [
	[/* class description */
		[/* text */ 't', `Represents a list of Integer objects starting at and potentially including a specified
 `],
		[/* inline code block */ 'i', 'from'],
		[/* text */ 't', ` value up (or down) to and potentially including a given `],
		[/* inline code block */ 'i', 'to'],
		[/* text */ 't', ` value.
 `],
		[/* block */ 'b', `
 Instances of this class may be either inclusive aware or non-inclusive aware. See the
 relevant constructors for creating each type. Inclusive aware IntRange instances are
 suitable for use with Groovy's range indexing - in particular if the from or to values
 might be negative. This normally happens underneath the covers but is worth keeping
 in mind if creating these ranges yourself explicitly.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 Note: the design of this class might seem a little strange at first. It contains Boolean
 flags, `],
			[/* inline code block */ 'i', 'inclusiveLeft'],
			[/* text */ 't', ` and `],
			[/* inline code block */ 'i', 'inclusiveRight'],
			[/* text */ 't', `, which can be `],
			[/* inline code block */ 'i', 'true'],
			[/* text */ 't', `,
 `],
			[/* inline code block */ 'i', 'false'],
			[/* text */ 't', ` or `],
			[/* inline code block */ 'i', 'null'],
			[/* text */ 't', `. This design is for backwards compatibility reasons.
 Groovy uses this class under the covers to represent range indexing, e.g.
 `],
			[/* inline code block */ 'i', 'someList[x..y]'],
			[/* text */ 't', ` and `],
			[/* inline code block */ 'i', 'someString[x..<y]'],
			[/* text */ 't', `. In early versions of Groovy the
 ranges in these expressions were represented under the covers by the
 `],
			[/* inline code block */ 'i', 'new IntRange(x, y)'],
			[/* text */ 't', ` and `],
			[/* inline code block */ 'i', 'new IntRange(x, y-1)'],
			[/* text */ 't', `. This turns out to be a
 lossy abstraction when x and/or y are negative values. Now the latter case is
 represented by `],
			[/* inline code block */ 'i', 'new IntRange(false, x, y)'],
			[/* text */ 't', `.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 Note: This class is a copy of `],
			[/* reference */ 'r', 'groovy.lang.ObjectRange'],
			[/* text */ 't', ` optimized for `],
			[/* inline code block */ 'i', 'int'],
			[/* text */ 't', `. If you make any
 changes to this class, you might consider making parallel changes to `],
			[/* reference */ 'r', 'groovy.lang.ObjectRange'],
			[/* text */ 't', `.`]
		]]
	],
	/* class sees */ UDF,
	/* fields */ UDF,
	UDF, UDF
]);
