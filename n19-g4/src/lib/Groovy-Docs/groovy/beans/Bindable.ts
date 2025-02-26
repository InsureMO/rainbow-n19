import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('groovy.beans.Bindable', [
	[ /* class description */
		['b', `Annotates a groovy property or a class.

 When annotating a property it indicates that the property should be a
 bound property according to the JavaBeans spec, announcing to listeners
 that the value has changed.`],
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
 The following example shows how you can use this annotation on fields
 of a class:
 `],
		['c', ` class Person {
    @groovy.beans.Bindable
    String firstName

    @groovy.beans.Bindable
    def zipCode
 }
 `],
		['b', `The above example will generate code that is similar to the next snippet.
 Notice the difference between a String property and a def/Object property:`],
		['c', ` public class Person {
     @groovy.beans.Bindable
     private java.lang.String firstName
     @groovy.beans.Bindable
     private java.lang.Object zipCode
     final private java.beans.PropertyChangeSupport this$propertyChangeSupport

     public Person() {
         this$propertyChangeSupport = new java.beans.PropertyChangeSupport(this)
     }

     public void addPropertyChangeListener(java.beans.PropertyChangeListener listener) {
         this$propertyChangeSupport.addPropertyChangeListener(listener)
     }

     public void addPropertyChangeListener(java.lang.String name, java.beans.PropertyChangeListener listener) {
         this$propertyChangeSupport.addPropertyChangeListener(name, listener)
     }

     public void removePropertyChangeListener(java.beans.PropertyChangeListener listener) {
         this$propertyChangeSupport.removePropertyChangeListener(listener)
     }

     public void removePropertyChangeListener(java.lang.String name, java.beans.PropertyChangeListener listener) {
         this$propertyChangeSupport.removePropertyChangeListener(name, listener)
     }

     public void firePropertyChange(java.lang.String name, java.lang.Object oldValue, java.lang.Object newValue) {
         this$propertyChangeSupport.firePropertyChange(name, oldValue, newValue)
     }

     public java.beans.PropertyChangeListener[] getPropertyChangeListeners() {
         return this$propertyChangeSupport.getPropertyChangeListeners()
     }

     public java.beans.PropertyChangeListener[] getPropertyChangeListeners(java.lang.String name) {
         return this$propertyChangeSupport.getPropertyChangeListeners(name)
     }

     public void setFirstName(java.lang.String value) {
         this.firePropertyChange('firstName', firstName, firstName = value )
     }

     public void setZipCode(java.lang.Object value) {
         this.firePropertyChange('zipCode', zipCode, zipCode = value )
     }
 }
 `],
	],
	UDF,
	[ /* class sees */ 'groovy.beans.BindableASTTransformation'],
	UDF, UDF, UDF
]);
