import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('groovy.lang.Range', [
	[/* class description */
		[/* text */ 't', `A Range represents the list of discrete items between some starting (or `],
		[/* inline code block */ 'i', 'from'],
		[/* text */ 't', `)
 value and `],
		[/* text */ 't', `working up`],
		[/* text */ 't', ` towards some ending (or `],
		[/* inline code block */ 'i', 'to'],
		[/* text */ 't', `) value.
 For a reverse range, the list is obtained by starting at the `],
		[/* inline code block */ 'i', 'to'],
		[/* text */ 't', ` value and
 `],
		[/* text */ 't', `working down`],
		[/* text */ 't', ` towards the `],
		[/* inline code block */ 'i', 'from'],
		[/* text */ 't', ` value.

 The concept of `],
		[/* text */ 't', `working up`],
		[/* text */ 't', ` and `],
		[/* text */ 't', `working down`],
		[/* text */ 't', ` is dependent on the range implementation.
 In the general case, working up involves successive calls to the first item's `],
		[/* inline code block */ 'i', 'next()'],
		[/* text */ 't', `
 method while working down involves calling the `],
		[/* inline code block */ 'i', 'previous()'],
		[/* text */ 't', ` method. Optimized
 numerical ranges may apply numeric addition or subtraction of some numerical step size.

 Particular range implementations may also support the notion of inclusivity
 and exclusivity with respect to the ending value in the range.
 E.g. `],
		[/* inline code block */ 'i', '1..3 == [1, 2, 3]'],
		[/* text */ 't', `; but `],
		[/* inline code block */ 'i', '1..<3 == [1, 2]'],
		[/* text */ 't', `.

 In general, the second boundary may not be contained in the range,
 and `],
		[/* inline code block */ 'i', 'a..b'],
		[/* text */ 't', ` may produce a different set of elements than `],
		[/* inline code block */ 'i', '(b..a).reversed()'],
		[/* text */ 't', `.
 E.g.  `],
		[/* inline code block */ 'i', '1..2.5 == [1, 2]'],
		[/* text */ 't', `; but `],
		[/* inline code block */ 'i', '2.5..1 == [2.5, 1.5]'],
		[/* text */ 't', `.

 Implementations can be memory efficient by storing just the `],
		[/* inline code block */ 'i', 'from'],
		[/* text */ 't', ` and `],
		[/* inline code block */ 'i', 'to'],
		[/* text */ 't', ` boundary
 values rather than eagerly creating all discrete items in the conceptual list. The actual discrete items
 can be lazily calculated on an as needed basis (e.g. when calling methods from the `],
		[/* inline code block */ 'i', 'java.util.List'],
		[/* text */ 't', `
 interface or the additional `],
		[/* inline code block */ 'i', 'step'],
		[/* text */ 't', ` methods in the `],
		[/* inline code block */ 'i', 'Range'],
		[/* text */ 't', ` interface).

 In addition to the methods related to a Range's "discrete items" abstraction, there is a method,
 `],
		[/* inline code block */ 'i', 'containsWithinBounds'],
		[/* text */ 't', ` which, for numerical ranges, allows checking within the continuous
 interval between the Range's boundary values.`]
	],
	/* class sees */ UDF,
	/* fields */ UDF,
	UDF, UDF
]);
