// hello world
package highlighting

// sl
/**
* This is Groovydoc comment
* TODO this is a todo
* @see java.lang.String#equals
*/
// sl
@Annotation(parameter = 'value') // sl
class C {

  def property = new I() {}
  static def staticProperty = []

  C() {}

  def <T> T instanceMethod(T parameter, reassignedParameter) {
    reassignedParameter = 1
    //This is a line comment
    // TODO this is a todo
    return parameter
  }

  def getStuff() { 42 }
  static boolean isStaticStuff() { true }

  static def staticMethod(int i) {
    /* This is TODO a block comment */
    Map map = [key1: 1, key2: 2, (22): 33]

    def cl = { a -> a }
    // def lambda = (b) -> { b }

    File f = ['path']
    def a = 'JetBrains'.matches(/Jw+Bw+/)

    label:
    for (entry in map) {
      if (entry.value > 1 && i < 2) {
        a = unresolvedReference
        continue label
      } else {
        a = entry
      }
    }

    print map.key1
  }
}

def c = new C()
c.instanceMethod("Hello\n", 'world') // TODO \x')
println c.stuff

C.staticMethod(namedArg: 1)
C.staticStuff

abstract class AbstractClass {}
interface I {}
trait T {}
enum E {}
@interface Annotation {
  String parameter()
}
