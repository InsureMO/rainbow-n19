import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('groovy.lang.Delegate', [
	[ /* class description */
		['b', `Annotation to automatically delegate part of the functionality of an owner class to the
 annotated delegation target. The target can be a field (or property) or a method's return value.`],
		['b', `
 The delegate type is either the type of the annotated field (or property) or the return type of
 the annotated method. The method can be thought of as a getter or factory method for the delegate.
 All public instance methods present in the delegate type and not present in the owner class
 will be added to owner class at compile time. The implementation of such automatically added
 methods is code which calls through to the delegate as per the normal delegate pattern.
 `],
		['b', `
 As an example, consider this code:
 `],
		['c', [['t', `class Event {`], ['i', '@Delegate'], ['t', `Date when
     String title, url
 }

 def gr8conf = new Event(title: "GR8 Conference",
                           url: "http://www.gr8conf.org",
                          when: Date.parse("yyyy/MM/dd", "2009/05/18"))

 def javaOne = new Event(title: "JavaOne",
                           url: "http://java.sun.com/javaone/",
                          when: Date.parse("yyyy/MM/dd", "2009/06/02"))

 assert gr8conf.before(javaOne.when)`]]],
		['b', `In this example, the`],
		['i', 'Event'],
		['b', `class will have a method called`],
		['i', 'before(Date otherDate)'],
		['b', `as well as other public methods of the`],
		['i', 'Date'],
		['b', `class.
 The implementation of the`],
		['i', 'before()'],
		['b', `method will look like this:`],
		['c', `     public boolean before(Date otherDate) {
         return when.before(otherDate);
     }
 `],
		['b', `By default, the owner class will also be modified to implement any interfaces
 implemented by the delegate type. So, in the example above, because`],
		['i', 'Date'],
		['b', `implements`],
		['i', 'Cloneable'],
		['b', `the following will be true:`],
		['c', ` assert gr8conf instanceof Cloneable
 `],
		['b', `This behavior can be disabled by setting the
 annotation's`],
		['i', 'interfaces'],
		['b', `element to false,
 i.e.`],
		['i', '@Delegate(interfaces = false)'],
		['b', `, e.g. in the above
 example, the delegate definition would become:`],
		['c', [['i', '@Delegate'], ['t', `(interfaces = false) Date when`]]],
		['b', `and the following would be true:`],
		['c', ` assert !(gr8conf instanceof Cloneable)
 `],
		['b', `If multiple delegation targets are used and the same method signature occurs
 in more than one of the respective delegate types, then the delegate will be
 made to the first defined target having that signature. If this does occur,
 it might be regarded as a smell (or at least poor style) and it might be
 clearer to do the delegation by long hand.`],
		['b', [['t', `By default, methods of the delegate type marked as`], ['i', '@Deprecated'], ['t', `are
 not automatically added to the owner class (but see the technical note
 about interfaces below). You can force these methods to
 be added by setting the annotation's`], ['i', 'deprecated'], ['t', `element to true,
 i.e.`], ['i', '@Delegate(deprecated = true)'], ['t', `.`]]],
		['b', `
 For example, in the example above if we change the delegate definition to:
 `],
		['c', [['i', '@Delegate'], ['t', `(deprecated = true) Date when`]]],
		['b', `then the following additional lines will execute successfully (during 2009):`],
		['c', ` assert gr8conf.year + 1900 == 2009
 assert gr8conf.toGMTString().contains(" 2009 ")
 `],
		['b', `Otherwise these lines produce a groovy.lang.MissingPropertyException
 or groovy.lang.MissingMethodException respectively as those two methods are`],
		['i', '@Deprecated'],
		['b', `in`],
		['i', 'Date'],
		['b', `.`],
		['b', [['b', `Technical notes`], ['t', `:`]]],
		['b', `<ul>
 <li>Static methods, synthetic methods or methods from the <code>GroovyObject</code> interface
 are not candidates for delegation</li>
 <li>Non-abstract non-static methods defined in the owner class or its superclasses take
 precedence over methods with identical signatures from a <code>@Delegate</code> target</li>
 <li>All methods defined in the owner class (including static, abstract or private etc.)
 take precedence over methods with identical signatures from a <code>@Delegate</code> target</li>
 <li>Recursive delegation to your own class is not allowed</li>
 <li>Mixing of <code>@Delegate</code> with default method arguments is known not to work in some cases.
 We recommend not using these features together.</li>
 <li>When the delegate type is an interface, the <code>deprecated</code> attribute will be
 ignored if the owner class implements that interface (i.e. you must set <code>interfaces=false</code>
 if you want the <code>deprecated</code> attribute to be used). Otherwise, the resulting class would
 not compile anyway without manually adding in any deprecated methods in the interface.</li>
 <li><code>@Delegate</code> can work in combination with <code>@Lazy</code> when annotating a field (or property)</li>
 </ul>`],
	],
	UDF,
	/* class sees */ UDF,
	UDF, UDF, UDF
]);
