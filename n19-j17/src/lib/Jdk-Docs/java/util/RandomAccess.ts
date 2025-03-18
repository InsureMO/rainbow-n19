import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.util.RandomAccess', [
	[/* class description */
		[/* text */ 't', `Marker interface used by `],
		[/* inline code block */ 'i', `List`],
		[/* text */ 't', ` implementations to indicate that
 they support fast (generally constant time) random access.  The primary
 purpose of this interface is to allow generic algorithms to alter their
 behavior to provide good performance when applied to either random or
 sequential access lists.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `The best algorithms for manipulating random access lists (such as
 `],
			[/* inline code block */ 'i', `ArrayList`],
			[/* text */ 't', `) can produce quadratic behavior when applied to
 sequential access lists (such as `],
			[/* inline code block */ 'i', `LinkedList`],
			[/* text */ 't', `).  Generic list
 algorithms are encouraged to check whether the given list is an
 `],
			[/* inline code block */ 'i', `instanceof`],
			[/* text */ 't', ` this interface before applying an algorithm that would
 provide poor performance if it were applied to a sequential access list,
 and to alter their behavior if necessary to guarantee acceptable
 performance.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `It is recognized that the distinction between random and sequential
 access is often fuzzy.  For example, some `],
			[/* inline code block */ 'i', `List`],
			[/* text */ 't', ` implementations
 provide asymptotically linear access times if they get huge, but constant
 access times in practice.  Such a `],
			[/* inline code block */ 'i', `List`],
			[/* text */ 't', ` implementation
 should generally implement this interface.  As a rule of thumb, a
 `],
			[/* inline code block */ 'i', `List`],
			[/* text */ 't', ` implementation should implement this interface if,
 for typical instances of the class, this loop:
 `]
		]],
		[/* code block */ 'c', `     for (int i=0, n=list.size(); i < n; i++)
         list.get(i);
 `],
		[/* text */ 't', `
 runs faster than this loop:
 `],
		[/* code block */ 'c', `     for (Iterator i=list.iterator(); i.hasNext(); )
         i.next();
 `],
		[/* text */ 't', `

 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `This interface is a member of the
 `],
			[/* text */ 't', `Java Collections Framework`],
			[/* text */ 't', `.`]
		]]
	],
	/* fields */,
	/* constructors */,
	/* methods */,
	/* enum values */ UDF
]);
