import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('groovy.lang.Category', [
	[ /* class description */
		['b', `Transforms an instance-style Groovy class or interface to become a static-style
 conventional Groovy category.`],
		['b', `
 Groovy categories are the original mechanism used
 by Groovy when augmenting classes with new methods. Writing categories required
 using a class writing style where all methods were static and an additional
 self parameter was defined. The self parameter and static nature of the methods
 disappeared once applied by Groovy's metaclass framework but some regarded
 the writing style as a little noisy. This transformation allows you to write
 your categories without the "apparent noise" but adds it back in during
 compilation so that the classes appear as normal categories.
 `],
		['b', [['t', `It might seem strange writing your class/object enhancements using a succinct
 notation, then having "noise" added, then having the noise removed during
 category application. If this worries you, then you may also like to consider
 using Groovy's`], ['i', 'ExpandoMetaClass'], ['t', `mechanism which avoids
 the category definition altogether. If you already have an investment in
 categories or like some of the other features which categories currently give you,
 then read on.`]]],
		['b', [['t', `The mechanics: during compilation, all methods are transformed to static ones with an additional
 self parameter of the type you supply as the annotation parameter (the default type
 for the self parameters is`], ['i', 'Object'], ['t', `which might be more broad reaching than
 you like so it is usually wise to specify a type).
 Properties invoked using 'this' references are transformed so that
 they are instead invoked on the additional self parameter and not on
 the Category instance. (Remember that once the category is applied, the reverse
 will occur and we will be back to conceptually having methods on the`], ['i', 'this'], ['t', `references again!)`]]],
		['b', [['t', `Classes conforming to the conventional Groovy category conventions can be used
 within`], ['i', 'use'], ['t', `statements or mixed in at runtime with the`], ['i', 'mixin'], ['t', `method on classes.`]]],
		['b', [['t', `An example showing a`], ['i', 'use'], ['t', `statement (allowing fine-grained application of
 the category methods):`]]],
		['c', [['i', '@Category'], ['t', `(Integer)
 class IntegerOps {
     def triple() {
         this * 3
     }
 }

 use (IntegerOps) {
     assert 25.triple() == 75
 }`]]],
		['b', `Or, "mixing in" your methods at runtime:`],
		['c', [['i', '@Category'], ['t', `(List)
 class Shuffler {
     def shuffle() {
         def result = new ArrayList(this)
         Collections.shuffle(result)
         result
     }
 }

 class Sentence extends ArrayList {
     Sentence(Collection initial) { super(initial) }
 }
 Sentence.mixin Shuffler

 def words = ["The", "quick", "brown", "fox"]
 println new Sentence(words).shuffle()
 //`], ['i', '=>'], ['t', `[quick, fox, The, brown]       (order will vary)`]]],
	],
	UDF,
	/* class sees */ UDF,
	UDF, UDF, UDF
]);
