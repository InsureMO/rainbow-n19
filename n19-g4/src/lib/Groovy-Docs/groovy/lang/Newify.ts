import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('groovy.lang.Newify', [
	[ /* class description */
		['b', `Annotation that supports writing constructor call expressions without the 'new'
 keyword. Instead they can be written "Ruby-style" as a method call to a 'new'
 method or "Python-style" by just omitting the 'new' keyword.`],
		['b', [['t', `WARNING: For the Python style with class-name-matching pattern, the pattern should be chosen as to avoid matching
 method names if possible. If following Java/Groovy naming conventions, class names (contrary to method names) start
 with an uppercase letter. In this case`], ['i', 'pattern="[A-Z].*"'], ['t', `(see`], ['r', 'java.util.regex.Pattern'], ['t', `for supported
 Java pattern syntax) is the recommended pattern to allow all classes to be created without requiring a new keyword.
 Using a pattern that also matches method names (e.g. ".+", ".*" or "[a-zA-Z].*") might negatively impact build
 performance, since the Groovy compiler will have to match every class in context against any potential constructor
 call.`]]],
		['b', `
 @Newify allows you to write code snippets like this ("Python-style"):
 `],
		['c', [['i', '@Newify([Tree,Leaf])'], ['t', `class MyTreeProcessor {
     def myTree = Tree(Tree(Leaf("A"), Leaf("B")), Leaf("C"))
     def process() { ... }
 }`]]],
		['c', [['i', '// Any class whose name matches pattern can be created without new'], ['i', '@Newify(pattern="[A-Z].*")'], ['t', `class MyTreeProcessor {
     final myTree = Tree(Tree(Leaf("A"), Leaf("B")), Leaf("C"))
     final sb = StringBuilder("...")
     def dir = File('.')
     def root = XmlSlurper().parseText(File(dir, sb.toString()).text)
 }`]]],
		['b', `or this ("Ruby-style"):`],
		['c', [['i', '@Newify'], ['t', `class MyTreeProcessor {
     def myTree = Tree.new(Tree.new(Leaf.new("A"), Leaf.new("B")), Leaf.new("C"))
     def process() { ... }
 }`]]],
		['b', `After the AST transformation, the following code is passed on for further compilation:`],
		['c', ` class MyTreeProcessor {
     def myTree = new Tree(new Tree(new Leaf("A"), new Leaf("B")), new Leaf("C"))
     def process() { ... }
 }
 `],
		['b', `The annotation can be used on a whole class as shown above or selectively on a particular
 method, constructor or field.`],
		['b', `
 The "Ruby-style" new conversions occur automatically unless the 'auto=false'
 flag is given when using the annotation. You might do this if you create a new method
 using meta programming.
 `],
		['b', [['t', `For the "Python-style" conversions you can either specify each class name on which you want them
 to apply, or supply a pattern to match class names against. The transformation then works by
 matching the basename of the provided classes to any
 similarly named instance method calls not specifically bound to an object, i.e. associated
 with the 'this' object. In other words`], ['i', 'Leaf("A")'], ['t', `would be transformed to`], ['i', 'new Leaf("A")'], ['t', `but`], ['i', 'x.Leaf("A")'], ['t', `would not be touched.`]]],
		['b', `
 An example showing how to use the annotation at different levels:
 `],
		['c', [['i', '@Newify(auto=false, value=Foo)'], ['t', `class Main {`], ['i', '@Newify'], ['t', `// turn auto on for field
     def field1 = java.math.BigInteger.new(42)
     def field2, field3, field4`], ['i', '@Newify(pattern="[A-z][A-Za-z0-9_]*")'], ['t', `// Any class name that starts with an uppercase letter
     def process() {
         field2 = A(Bb(Ccc("my bar")))
     }`], ['i', '@Newify(Baz)'], ['t', `Main() {
         field3 = Foo("my foo")
         field4 = Baz("my baz")
     }
 }`]]],
		['b', `The annotation is intended to be used sparingly; perhaps in DSL scenarios or when
 using deeply nested structural types. In particular, there is no support for using
 the facility with two similarly named classes from different packages at the same time.
 Though it is OK to have different packages in different contexts. Also, there is
 no support for turning "Ruby-style" conversions off at the method, constructor or
 field level if already turned on at the class level.`],
	],
	UDF,
	/* class sees */ UDF,
	UDF, UDF, UDF
]);
