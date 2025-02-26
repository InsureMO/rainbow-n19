import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('groovy.lang.Range', [
	[ /* class description */
		['b', `A Range represents the list of discrete items between some starting (or`],
		['i', 'from'],
		['b', `)
 value and`],
		['b', `working up`],
		['b', `towards some ending (or`],
		['i', 'to'],
		['b', `) value.
 For a reverse range, the list is obtained by starting at the`],
		['i', 'to'],
		['b', `value and`],
		['b', `working down`],
		['b', `towards the`],
		['i', 'from'],
		['b', `value.

 The concept of`],
		['b', `working up`],
		['b', `and`],
		['b', `working down`],
		['b', `is dependent on the range implementation.
 In the general case, working up involves successive calls to the first item's`],
		['i', 'next()'],
		['b', `method while working down involves calling the`],
		['i', 'previous()'],
		['b', `method. Optimized
 numerical ranges may apply numeric addition or subtraction of some numerical step size.

 Particular range implementations may also support the notion of inclusivity
 and exclusivity with respect to the ending value in the range.
 E.g.`],
		['i', '1..3 == [1, 2, 3]'],
		['b', `; but`],
		['i', '1..<3 == [1, 2]'],
		['b', `.

 In general, the second boundary may not be contained in the range,
 and`],
		['i', 'a..b'],
		['b', `may produce a different set of elements than`],
		['i', '(b..a).reversed()'],
		['b', `.
 E.g.`],
		['i', '1..2.5 == [1, 2]'],
		['b', `; but`],
		['i', '2.5..1 == [2.5, 1.5]'],
		['b', `.

 Implementations can be memory efficient by storing just the`],
		['i', 'from'],
		['b', `and`],
		['i', 'to'],
		['b', `boundary
 values rather than eagerly creating all discrete items in the conceptual list. The actual discrete items
 can be lazily calculated on an as needed basis (e.g. when calling methods from the`],
		['i', 'java.util.List'],
		['b', `interface or the additional`],
		['i', 'step'],
		['b', `methods in the`],
		['i', 'Range'],
		['b', `interface).

 In addition to the methods related to a Range's "discrete items" abstraction, there is a method,`],
		['i', 'containsWithinBounds'],
		['b', `which, for numerical ranges, allows checking within the continuous
 interval between the Range's boundary values.`],
	],
	UDF,
	/* class sees */ UDF,
	UDF, UDF, UDF
]);
