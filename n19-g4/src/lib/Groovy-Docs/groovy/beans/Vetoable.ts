import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('groovy.beans.Vetoable', [
	[ /* class description */
		['b', `Annotates a groovy property or a class.`],
		['b', `
 When annotating a property it indicates that the property should be a
 constrained property according to the JavaBeans spec, subject to
 listeners vetoing the property change.
 `],
		['b', `
 When annotating a class it indicates that all groovy properties in that
 class should be bound as though each property had the annotation (even
 if it already has it explicitly).
 `],
		['b', `
 It is a compilation error to place this annotation on a field (that is
 not a property, i.e. has scope visibility modifiers).
 `],
		['b', `
 If a property with a user defined setter method is annotated the code
 block is wrapped with the needed code to fire off the event.
 `],
		['b', `
 Here is a simple example of how to annotate a class with Vetoable:
 `],
		['c', ` @groovy.beans.Vetoable
 class Person {
     String firstName
     def zipCode
 }
 `],
		['b', `This code is transformed by the compiler into something resembling the following
 snippet. Notice the difference between a String and a def/Object property:`],
		['c', ` public class Person implements groovy.lang.GroovyObject {
     private java.lang.String firstName
     private java.lang.Object zipCode
     final private java.beans.VetoableChangeSupport this$vetoableChangeSupport

     public Person() {
         this$vetoableChangeSupport = new java.beans.VetoableChangeSupport(this)
     }

     public void addVetoableChangeListener(java.beans.VetoableChangeListener listener) {
         this$vetoableChangeSupport.addVetoableChangeListener(listener)
     }

     public void addVetoableChangeListener(java.lang.String name, java.beans.VetoableChangeListener listener) {
         this$vetoableChangeSupport.addVetoableChangeListener(name, listener)
     }

     public void removeVetoableChangeListener(java.beans.VetoableChangeListener listener) {
         this$vetoableChangeSupport.removeVetoableChangeListener(listener)
     }

     public void removeVetoableChangeListener(java.lang.String name, java.beans.VetoableChangeListener listener) {
         this$vetoableChangeSupport.removeVetoableChangeListener(name, listener)
     }

     public void fireVetoableChange(java.lang.String name, java.lang.Object oldValue, java.lang.Object newValue) throws java.beans.PropertyVetoException {
         this$vetoableChangeSupport.fireVetoableChange(name, oldValue, newValue)
     }

     public java.beans.VetoableChangeListener[] getVetoableChangeListeners() {
         return this$vetoableChangeSupport.getVetoableChangeListeners()
     }

     public java.beans.VetoableChangeListener[] getVetoableChangeListeners(java.lang.String name) {
         return this$vetoableChangeSupport.getVetoableChangeListeners(name)
     }

     public void setFirstName(java.lang.String value) throws java.beans.PropertyVetoException {
         this.fireVetoableChange('firstName', firstName, value)
         firstName = value
     }

     public void setZipCode(java.lang.Object value) throws java.beans.PropertyVetoException {
         this.fireVetoableChange('zipCode', zipCode, value)
         zipCode = value
     }
 }
 `],
	],
	UDF,
	[ /* class sees */ 'groovy.beans.VetoableASTTransformation'],
	UDF, UDF, UDF
]);
