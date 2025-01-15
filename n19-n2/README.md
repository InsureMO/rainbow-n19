![Static Badge](https://img.shields.io/badge/InsureMO-777AF2.svg)

# n19/n2

# Class Meta

- AnnotatedElement: annotations
- GenericDeclaration: generic types
	- implements: AnnotatedElement
- Member: member of class
- Executable:
	- implements: Member, GenericDeclaration
	- has: Parameter, Exception

- Class
	- implements: AnnotatedElement, GenericDeclaration, Type
	- has: Constructor, Method, Field, Class
	- properties:
		- name
		- simple name
		- superclass
		- interfaces
		- enclosing method
		- enclosing constructor
		- enclosing class
		- declaring class
		- nest host class
		- generic type variables
		- annotations

- Constructor
	- implements: AnnotatedElement, GenericDeclaration, Executable
	- properties:
		- parameters
		- exceptions
		- type variables
		- annotations

- Method
	- implements: AnnotatedElement, GenericDeclaration, Executable
	- has: Return
	- properties:
		- name
		- parameters
		- exceptions
		- return
		- generic type variables
		- annotations

- Parameter
	- implements: AnnotatedElement
	- properties:
		- name
		- modifiers
		- annotations
		- generic type

- Field
	- implements: AnnotatedElement, Member
	- properties:
		- name
		- generic type
		- annotations

# AST
