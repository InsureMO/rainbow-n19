import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('groovy.lang.IntRange', [
	[ /* class description */
		['b', `Represents a list of Integer objects starting at and potentially including a specified`],
		['i', 'from'],
		['b', `value up (or down) to and potentially including a given`],
		['i', 'to'],
		['b', `value.`],
		['b', `
 Instances of this class may be either inclusive aware or non-inclusive aware. See the
 relevant constructors for creating each type. Inclusive aware IntRange instances are
 suitable for use with Groovy's range indexing - in particular if the from or to values
 might be negative. This normally happens underneath the covers but is worth keeping
 in mind if creating these ranges yourself explicitly.
 `],
		['b', [['t', `Note: the design of this class might seem a little strange at first. It contains Boolean
 flags,`], ['i', 'inclusiveLeft'], ['t', `and`], ['i', 'inclusiveRight'], ['t', `, which can be`], ['i', 'true'], ['t', `,`], ['i', 'false'], ['t', `or`], ['i', 'null'], ['t', `. This design is for backwards compatibility reasons.
 Groovy uses this class under the covers to represent range indexing, e.g.`], ['i', 'someList[x..y]'], ['t', `and`], ['i', 'someString[x..<y]'], ['t', `. In early versions of Groovy the
 ranges in these expressions were represented under the covers by the`], ['i', 'new IntRange(x, y)'], ['t', `and`], ['i', 'new IntRange(x, y-1)'], ['t', `. This turns out to be a
 lossy abstraction when x and/or y are negative values. Now the latter case is
 represented by`], ['i', 'new IntRange(false, x, y)'], ['t', `.`]]],
		['b', [['t', `Note: This class is a copy of`], ['r', 'groovy.lang.ObjectRange'], ['t', `optimized for`], ['i', 'int'], ['t', `. If you make any
 changes to this class, you might consider making parallel changes to`], ['r', 'groovy.lang.ObjectRange'], ['t', `.`]]],
	],
	UDF,
	/* class sees */ UDF,
	UDF, UDF, UDF
]);
