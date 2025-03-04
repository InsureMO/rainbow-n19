import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.util.stream.Collectors', [
	[/* class description */
		[/* text */ 't', `Implementations of `],
		[/* reference */ 'r', `java.util.stream.Collector`],
		[/* text */ 't', ` that implement various useful reduction
 operations, such as accumulating elements into collections, summarizing
 elements according to various criteria, etc.

 `],
		[/* block */ 'b', `The following are examples of using the predefined collectors to perform
 common mutable reduction tasks:

 `],
		[/* code block */ 'c', [
			[/* inline code block */ 'i', `// Accumulate names into a List
 List<String> list = people.stream()
   .map(Person::getName)
   .collect(Collectors.toList());

 // Accumulate names into a TreeSet
 Set<String> set = people.stream()
   .map(Person::getName)
   .collect(Collectors.toCollection(TreeSet::new));

 // Convert elements to strings and concatenate them, separated by commas
 String joined = things.stream()
   .map(Object::toString)
   .collect(Collectors.joining(", "));

 // Compute sum of salaries of employee
 int total = employees.stream()
   .collect(Collectors.summingInt(Employee::getSalary));

 // Group employees by department
 Map<Department, List<Employee>> byDept = employees.stream()
   .collect(Collectors.groupingBy(Employee::getDepartment));

 // Compute sum of salaries by department
 Map<Department, Integer> totalByDept = employees.stream()
   .collect(Collectors.groupingBy(Employee::getDepartment,
                                  Collectors.summingInt(Employee::getSalary)));

 // Partition students into passing and failing
 Map<Boolean, List<Student>> passingFailing = students.stream()
   .collect(Collectors.partitioningBy(s -> s.getGrade() >= PASS_THRESHOLD));`]
		]],
		[/* block */ 'b', '']
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'collectingAndThen(java.util.stream.Collector,java.util.function.Function)', [
			[/* method description */
				[/* text */ 't', `Adapts a `],
				[/* inline code block */ 'i', `Collector`],
				[/* text */ 't', ` to perform an additional finishing
 transformation.  For example, one could adapt the `],
				[/* reference */ 'r', `#toList()`, `toList()`],
				[/* text */ 't', `
 collector to always produce an immutable list with:
 `],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `List<String> list = people.stream().collect(
   collectingAndThen(toList(),
                     Collections::unmodifiableList));`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'downstream', [/* parameter description */
					[/* text */ 't', `a collector`]
				]],
				[/* parameter */ 'finisher', [/* parameter description */
					[/* text */ 't', `a function to be applied to the final result of the downstream collector`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a collector which performs the action of the downstream collector,
 followed by an additional finishing step`]
			]
		]],
		[/* method */ 'filtering(java.util.function.Predicate,java.util.stream.Collector)', [
			[/* method description */
				[/* text */ 't', `Adapts a `],
				[/* inline code block */ 'i', `Collector`],
				[/* text */ 't', ` to one accepting elements of the same type
 `],
				[/* inline code block */ 'i', `T`],
				[/* text */ 't', ` by applying the predicate to each input element and only
 accumulating if the predicate returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'predicate', [/* parameter description */
					[/* text */ 't', `a predicate to be applied to the input elements`]
				]],
				[/* parameter */ 'downstream', [/* parameter description */
					[/* text */ 't', `a collector which will accept values that match the
 predicate`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a collector which applies the predicate to the input elements
 and provides matching elements to the downstream collector`]
			]
		]],
		[/* method */ 'toCollection(java.util.function.Supplier)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `Collector`],
				[/* text */ 't', ` that accumulates the input elements into a
 new `],
				[/* inline code block */ 'i', `Collection`],
				[/* text */ 't', `, in encounter order.  The `],
				[/* inline code block */ 'i', `Collection`],
				[/* text */ 't', ` is
 created by the provided factory.`]
			],
			[/* parameters */
				[/* parameter */ 'collectionFactory', [/* parameter description */
					[/* text */ 't', `a supplier providing a new empty `],
					[/* inline code block */ 'i', `Collection`],
					[/* text */ 't', `
                          into which the results will be inserted`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Collector`],
				[/* text */ 't', ` which collects all the input elements into a
 `],
				[/* inline code block */ 'i', `Collection`],
				[/* text */ 't', `, in encounter order`]
			]
		]],
		[/* method */ 'partitioningBy(java.util.function.Predicate,java.util.stream.Collector)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `Collector`],
				[/* text */ 't', ` which partitions the input elements according
 to a `],
				[/* inline code block */ 'i', `Predicate`],
				[/* text */ 't', `, reduces the values in each partition according to
 another `],
				[/* inline code block */ 'i', `Collector`],
				[/* text */ 't', `, and organizes them into a
 `],
				[/* inline code block */ 'i', `Map<Boolean, D>`],
				[/* text */ 't', ` whose values are the result of the downstream
 reduction.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The returned `],
					[/* inline code block */ 'i', `Map`],
					[/* text */ 't', ` always contains mappings for both
 `],
					[/* inline code block */ 'i', `false`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` keys.
 There are no guarantees on the type, mutability,
 serializability, or thread-safety of the `],
					[/* inline code block */ 'i', `Map`],
					[/* text */ 't', ` returned.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'predicate', [/* parameter description */
					[/* text */ 't', `a predicate used for classifying input elements`]
				]],
				[/* parameter */ 'downstream', [/* parameter description */
					[/* text */ 't', `a `],
					[/* inline code block */ 'i', `Collector`],
					[/* text */ 't', ` implementing the downstream
                   reduction`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Collector`],
				[/* text */ 't', ` implementing the cascaded partitioning
         operation`]
			]
		]],
		[/* method */ 'groupingByConcurrent(java.util.function.Function,java.util.function.Supplier,java.util.stream.Collector)', [
			[/* method description */
				[/* text */ 't', `Returns a concurrent `],
				[/* inline code block */ 'i', `Collector`],
				[/* text */ 't', ` implementing a cascaded "group by"
 operation on input elements of type `],
				[/* inline code block */ 'i', `T`],
				[/* text */ 't', `, grouping elements
 according to a classification function, and then performing a reduction
 operation on the values associated with a given key using the specified
 downstream `],
				[/* inline code block */ 'i', `Collector`],
				[/* text */ 't', `.  The `],
				[/* inline code block */ 'i', `ConcurrentMap`],
				[/* text */ 't', ` produced by the
 Collector is created with the supplied factory function.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This is a `],
					[/* reference */ 'r', `.Collector.Characteristics#CONCURRENT`],
					[/* text */ 't', ` and
 `],
					[/* reference */ 'r', `.Collector.Characteristics#UNORDERED`],
					[/* text */ 't', ` Collector.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The classification function maps elements to some key type `],
					[/* inline code block */ 'i', `K`],
					[/* text */ 't', `.
 The downstream collector operates on elements of type `],
					[/* inline code block */ 'i', `T`],
					[/* text */ 't', ` and
 produces a result of type `],
					[/* inline code block */ 'i', `D`],
					[/* text */ 't', `. The resulting collector produces a
 `],
					[/* inline code block */ 'i', `ConcurrentMap<K, D>`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', `For example, to compute the set of last names of people in each city,
 where the city names are sorted:
 `],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `ConcurrentMap<City, Set<String>> namesByCity
   = people.stream().collect(
     groupingByConcurrent(Person::getCity,
                          ConcurrentSkipListMap::new,
                          mapping(Person::getLastName,
                                  toSet())));`]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'classifier', [/* parameter description */
					[/* text */ 't', `a classifier function mapping input elements to keys`]
				]],
				[/* parameter */ 'downstream', [/* parameter description */
					[/* text */ 't', `a `],
					[/* inline code block */ 'i', `Collector`],
					[/* text */ 't', ` implementing the downstream reduction`]
				]],
				[/* parameter */ 'mapFactory', [/* parameter description */
					[/* text */ 't', `a supplier providing a new empty `],
					[/* inline code block */ 'i', `ConcurrentMap`],
					[/* text */ 't', `
                   into which the results will be inserted`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a concurrent, unordered `],
				[/* inline code block */ 'i', `Collector`],
				[/* text */ 't', ` implementing the cascaded group-by operation`]
			]
		]],
		[/* method */ 'groupingByConcurrent(java.util.function.Function,java.util.stream.Collector)', [
			[/* method description */
				[/* text */ 't', `Returns a concurrent `],
				[/* inline code block */ 'i', `Collector`],
				[/* text */ 't', ` implementing a cascaded "group by"
 operation on input elements of type `],
				[/* inline code block */ 'i', `T`],
				[/* text */ 't', `, grouping elements
 according to a classification function, and then performing a reduction
 operation on the values associated with a given key using the specified
 downstream `],
				[/* inline code block */ 'i', `Collector`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This is a `],
					[/* reference */ 'r', `.Collector.Characteristics#CONCURRENT`],
					[/* text */ 't', ` and
 `],
					[/* reference */ 'r', `.Collector.Characteristics#UNORDERED`],
					[/* text */ 't', ` Collector.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The classification function maps elements to some key type `],
					[/* inline code block */ 'i', `K`],
					[/* text */ 't', `.
 The downstream collector operates on elements of type `],
					[/* inline code block */ 'i', `T`],
					[/* text */ 't', ` and
 produces a result of type `],
					[/* inline code block */ 'i', `D`],
					[/* text */ 't', `. The resulting collector produces a
 `],
					[/* inline code block */ 'i', `ConcurrentMap<K, D>`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `There are no guarantees on the type, mutability, or serializability
 of the `],
					[/* inline code block */ 'i', `ConcurrentMap`],
					[/* text */ 't', ` returned.

 `]
				]],
				[/* block */ 'b', `For example, to compute the set of last names of people in each city,
 where the city names are sorted:
 `],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `ConcurrentMap<City, Set<String>> namesByCity
   = people.stream().collect(
     groupingByConcurrent(Person::getCity,
                          mapping(Person::getLastName,
                                  toSet())));`]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'classifier', [/* parameter description */
					[/* text */ 't', `a classifier function mapping input elements to keys`]
				]],
				[/* parameter */ 'downstream', [/* parameter description */
					[/* text */ 't', `a `],
					[/* inline code block */ 'i', `Collector`],
					[/* text */ 't', ` implementing the downstream reduction`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a concurrent, unordered `],
				[/* inline code block */ 'i', `Collector`],
				[/* text */ 't', ` implementing the cascaded group-by operation`]
			]
		]],
		[/* method */ 'groupingBy(java.util.function.Function,java.util.stream.Collector)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `Collector`],
				[/* text */ 't', ` implementing a cascaded "group by" operation
 on input elements of type `],
				[/* inline code block */ 'i', `T`],
				[/* text */ 't', `, grouping elements according to a
 classification function, and then performing a reduction operation on
 the values associated with a given key using the specified downstream
 `],
				[/* inline code block */ 'i', `Collector`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The classification function maps elements to some key type `],
					[/* inline code block */ 'i', `K`],
					[/* text */ 't', `.
 The downstream collector operates on elements of type `],
					[/* inline code block */ 'i', `T`],
					[/* text */ 't', ` and
 produces a result of type `],
					[/* inline code block */ 'i', `D`],
					[/* text */ 't', `. The resulting collector produces a
 `],
					[/* inline code block */ 'i', `Map<K, D>`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `There are no guarantees on the type, mutability,
 serializability, or thread-safety of the `],
					[/* inline code block */ 'i', `Map`],
					[/* text */ 't', ` returned.

 `]
				]],
				[/* block */ 'b', `For example, to compute the set of last names of people in each city:
 `],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `Map<City, Set<String>> namesByCity
   = people.stream().collect(
     groupingBy(Person::getCity,
                mapping(Person::getLastName,
                        toSet())));`]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'classifier', [/* parameter description */
					[/* text */ 't', `a classifier function mapping input elements to keys`]
				]],
				[/* parameter */ 'downstream', [/* parameter description */
					[/* text */ 't', `a `],
					[/* inline code block */ 'i', `Collector`],
					[/* text */ 't', ` implementing the downstream reduction`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Collector`],
				[/* text */ 't', ` implementing the cascaded group-by operation`]
			]
		]],
		[/* method */ 'groupingBy(java.util.function.Function,java.util.function.Supplier,java.util.stream.Collector)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `Collector`],
				[/* text */ 't', ` implementing a cascaded "group by" operation
 on input elements of type `],
				[/* inline code block */ 'i', `T`],
				[/* text */ 't', `, grouping elements according to a
 classification function, and then performing a reduction operation on
 the values associated with a given key using the specified downstream
 `],
				[/* inline code block */ 'i', `Collector`],
				[/* text */ 't', `.  The `],
				[/* inline code block */ 'i', `Map`],
				[/* text */ 't', ` produced by the Collector is created
 with the supplied factory function.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The classification function maps elements to some key type `],
					[/* inline code block */ 'i', `K`],
					[/* text */ 't', `.
 The downstream collector operates on elements of type `],
					[/* inline code block */ 'i', `T`],
					[/* text */ 't', ` and
 produces a result of type `],
					[/* inline code block */ 'i', `D`],
					[/* text */ 't', `. The resulting collector produces a
 `],
					[/* inline code block */ 'i', `Map<K, D>`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', `For example, to compute the set of last names of people in each city,
 where the city names are sorted:
 `],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `Map<City, Set<String>> namesByCity
   = people.stream().collect(
     groupingBy(Person::getCity,
                TreeMap::new,
                mapping(Person::getLastName,
                        toSet())));`]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'classifier', [/* parameter description */
					[/* text */ 't', `a classifier function mapping input elements to keys`]
				]],
				[/* parameter */ 'downstream', [/* parameter description */
					[/* text */ 't', `a `],
					[/* inline code block */ 'i', `Collector`],
					[/* text */ 't', ` implementing the downstream reduction`]
				]],
				[/* parameter */ 'mapFactory', [/* parameter description */
					[/* text */ 't', `a supplier providing a new empty `],
					[/* inline code block */ 'i', `Map`],
					[/* text */ 't', `
                   into which the results will be inserted`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Collector`],
				[/* text */ 't', ` implementing the cascaded group-by operation`]
			]
		]],
		[/* method */ 'toConcurrentMap(java.util.function.Function,java.util.function.Function,java.util.function.BinaryOperator,java.util.function.Supplier)', [
			[/* method description */
				[/* text */ 't', `Returns a concurrent `],
				[/* inline code block */ 'i', `Collector`],
				[/* text */ 't', ` that accumulates elements into a
 `],
				[/* inline code block */ 'i', `ConcurrentMap`],
				[/* text */ 't', ` whose keys and values are the result of applying
 the provided mapping functions to the input elements.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If the mapped keys contain duplicates (according to `],
					[/* reference */ 'r', `java.util.Object#equals(java.lang.Object)`],
					[/* text */ 't', `),
 the value mapping function is applied to each equal element, and the
 results are merged using the provided merging function.  The
 `],
					[/* inline code block */ 'i', `ConcurrentMap`],
					[/* text */ 't', ` is created by a provided supplier function.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `This is a `],
					[/* reference */ 'r', `.Collector.Characteristics#CONCURRENT`],
					[/* text */ 't', ` and
 `],
					[/* reference */ 'r', `.Collector.Characteristics#UNORDERED`],
					[/* text */ 't', ` Collector.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'keyMapper', [/* parameter description */
					[/* text */ 't', `a mapping function to produce keys`]
				]],
				[/* parameter */ 'valueMapper', [/* parameter description */
					[/* text */ 't', `a mapping function to produce values`]
				]],
				[/* parameter */ 'mergeFunction', [/* parameter description */
					[/* text */ 't', `a merge function, used to resolve collisions between
                      values associated with the same key, as supplied
                      to `],
					[/* reference */ 'r', `java.Map#merge(K,V,java.util.function.BiFunction)`]
				]],
				[/* parameter */ 'mapFactory', [/* parameter description */
					[/* text */ 't', `a supplier providing a new empty `],
					[/* inline code block */ 'i', `ConcurrentMap`],
					[/* text */ 't', `
                   into which the results will be inserted`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a concurrent, unordered `],
				[/* inline code block */ 'i', `Collector`],
				[/* text */ 't', ` which collects elements into a
 `],
				[/* inline code block */ 'i', `ConcurrentMap`],
				[/* text */ 't', ` whose keys are the result of applying a key mapping
 function to the input elements, and whose values are the result of
 applying a value mapping function to all input elements equal to the key
 and combining them using the merge function`]
			]
		]],
		[/* method */ 'toMap(java.util.function.Function,java.util.function.Function,java.util.function.BinaryOperator,java.util.function.Supplier)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `Collector`],
				[/* text */ 't', ` that accumulates elements into a
 `],
				[/* inline code block */ 'i', `Map`],
				[/* text */ 't', ` whose keys and values are the result of applying the provided
 mapping functions to the input elements.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If the mapped
 keys contain duplicates (according to `],
					[/* reference */ 'r', `java.util.Object#equals(java.lang.Object)`],
					[/* text */ 't', `),
 the value mapping function is applied to each equal element, and the
 results are merged using the provided merging function.  The `],
					[/* inline code block */ 'i', `Map`],
					[/* text */ 't', `
 is created by a provided supplier function.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'keyMapper', [/* parameter description */
					[/* text */ 't', `a mapping function to produce keys`]
				]],
				[/* parameter */ 'valueMapper', [/* parameter description */
					[/* text */ 't', `a mapping function to produce values`]
				]],
				[/* parameter */ 'mergeFunction', [/* parameter description */
					[/* text */ 't', `a merge function, used to resolve collisions between
                      values associated with the same key, as supplied
                      to `],
					[/* reference */ 'r', `java.Map#merge(K,V,java.util.function.BiFunction)`]
				]],
				[/* parameter */ 'mapFactory', [/* parameter description */
					[/* text */ 't', `a supplier providing a new empty `],
					[/* inline code block */ 'i', `Map`],
					[/* text */ 't', `
                   into which the results will be inserted`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Collector`],
				[/* text */ 't', ` which collects elements into a `],
				[/* inline code block */ 'i', `Map`],
				[/* text */ 't', `
 whose keys are the result of applying a key mapping function to the input
 elements, and whose values are the result of applying a value mapping
 function to all input elements equal to the key and combining them
 using the merge function`]
			]
		]],
		[/* method */ 'toConcurrentMap(java.util.function.Function,java.util.function.Function)', [
			[/* method description */
				[/* text */ 't', `Returns a concurrent `],
				[/* inline code block */ 'i', `Collector`],
				[/* text */ 't', ` that accumulates elements into a
 `],
				[/* inline code block */ 'i', `ConcurrentMap`],
				[/* text */ 't', ` whose keys and values are the result of applying
 the provided mapping functions to the input elements.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If the mapped keys contain duplicates (according to
 `],
					[/* reference */ 'r', `java.util.Object#equals(java.lang.Object)`],
					[/* text */ 't', `), an `],
					[/* inline code block */ 'i', `IllegalStateException`],
					[/* text */ 't', ` is
 thrown when the collection operation is performed.  If the mapped keys
 may have duplicates, use
 `],
					[/* reference */ 'r', `#toConcurrentMap(java.util.function.Function,java.util.function.Function,java.util.function.BinaryOperator)`, `toConcurrentMap(Function, Function, BinaryOperator)`],
					[/* text */ 't', ` instead.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `There are no guarantees on the type, mutability, or serializability
 of the `],
					[/* inline code block */ 'i', `ConcurrentMap`],
					[/* text */ 't', ` returned.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'keyMapper', [/* parameter description */
					[/* text */ 't', `the mapping function to produce keys`]
				]],
				[/* parameter */ 'valueMapper', [/* parameter description */
					[/* text */ 't', `the mapping function to produce values`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a concurrent, unordered `],
				[/* inline code block */ 'i', `Collector`],
				[/* text */ 't', ` which collects elements into a
 `],
				[/* inline code block */ 'i', `ConcurrentMap`],
				[/* text */ 't', ` whose keys are the result of applying a key mapping
 function to the input elements, and whose values are the result of
 applying a value mapping function to the input elements`]
			]
		]],
		[/* method */ 'toConcurrentMap(java.util.function.Function,java.util.function.Function,java.util.function.BinaryOperator)', [
			[/* method description */
				[/* text */ 't', `Returns a concurrent `],
				[/* inline code block */ 'i', `Collector`],
				[/* text */ 't', ` that accumulates elements into a
 `],
				[/* inline code block */ 'i', `ConcurrentMap`],
				[/* text */ 't', ` whose keys and values are the result of applying
 the provided mapping functions to the input elements.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If the mapped keys contain duplicates (according to `],
					[/* reference */ 'r', `java.util.Object#equals(java.lang.Object)`],
					[/* text */ 't', `),
 the value mapping function is applied to each equal element, and the
 results are merged using the provided merging function.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `There are no guarantees on the type, mutability, or serializability
 of the `],
					[/* inline code block */ 'i', `ConcurrentMap`],
					[/* text */ 't', ` returned.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'keyMapper', [/* parameter description */
					[/* text */ 't', `a mapping function to produce keys`]
				]],
				[/* parameter */ 'valueMapper', [/* parameter description */
					[/* text */ 't', `a mapping function to produce values`]
				]],
				[/* parameter */ 'mergeFunction', [/* parameter description */
					[/* text */ 't', `a merge function, used to resolve collisions between
                      values associated with the same key, as supplied
                      to `],
					[/* reference */ 'r', `java.Map#merge(K,V,java.util.function.BiFunction)`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a concurrent, unordered `],
				[/* inline code block */ 'i', `Collector`],
				[/* text */ 't', ` which collects elements into a
 `],
				[/* inline code block */ 'i', `ConcurrentMap`],
				[/* text */ 't', ` whose keys are the result of applying a key mapping
 function to the input elements, and whose values are the result of
 applying a value mapping function to all input elements equal to the key
 and combining them using the merge function`]
			]
		]],
		[/* method */ 'toMap(java.util.function.Function,java.util.function.Function)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `Collector`],
				[/* text */ 't', ` that accumulates elements into a
 `],
				[/* inline code block */ 'i', `Map`],
				[/* text */ 't', ` whose keys and values are the result of applying the provided
 mapping functions to the input elements.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If the mapped keys contain duplicates (according to
 `],
					[/* reference */ 'r', `java.util.Object#equals(java.lang.Object)`],
					[/* text */ 't', `), an `],
					[/* inline code block */ 'i', `IllegalStateException`],
					[/* text */ 't', ` is
 thrown when the collection operation is performed.  If the mapped keys
 might have duplicates, use `],
					[/* reference */ 'r', `#toMap(java.util.function.Function,java.util.function.Function,java.util.function.BinaryOperator)`, `toMap(Function, Function, BinaryOperator)`],
					[/* text */ 't', `
 instead.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `There are no guarantees on the type, mutability, serializability,
 or thread-safety of the `],
					[/* inline code block */ 'i', `Map`],
					[/* text */ 't', ` returned.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'keyMapper', [/* parameter description */
					[/* text */ 't', `a mapping function to produce keys`]
				]],
				[/* parameter */ 'valueMapper', [/* parameter description */
					[/* text */ 't', `a mapping function to produce values`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Collector`],
				[/* text */ 't', ` which collects elements into a `],
				[/* inline code block */ 'i', `Map`],
				[/* text */ 't', `
 whose keys and values are the result of applying mapping functions to
 the input elements`]
			]
		]],
		[/* method */ 'toMap(java.util.function.Function,java.util.function.Function,java.util.function.BinaryOperator)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `Collector`],
				[/* text */ 't', ` that accumulates elements into a
 `],
				[/* inline code block */ 'i', `Map`],
				[/* text */ 't', ` whose keys and values are the result of applying the provided
 mapping functions to the input elements.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If the mapped
 keys contain duplicates (according to `],
					[/* reference */ 'r', `java.util.Object#equals(java.lang.Object)`],
					[/* text */ 't', `),
 the value mapping function is applied to each equal element, and the
 results are merged using the provided merging function.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `There are no guarantees on the type, mutability, serializability,
 or thread-safety of the `],
					[/* inline code block */ 'i', `Map`],
					[/* text */ 't', ` returned.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'keyMapper', [/* parameter description */
					[/* text */ 't', `a mapping function to produce keys`]
				]],
				[/* parameter */ 'valueMapper', [/* parameter description */
					[/* text */ 't', `a mapping function to produce values`]
				]],
				[/* parameter */ 'mergeFunction', [/* parameter description */
					[/* text */ 't', `a merge function, used to resolve collisions between
                      values associated with the same key, as supplied
                      to `],
					[/* reference */ 'r', `java.Map#merge(K,V,java.util.function.BiFunction)`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Collector`],
				[/* text */ 't', ` which collects elements into a `],
				[/* inline code block */ 'i', `Map`],
				[/* text */ 't', `
 whose keys are the result of applying a key mapping function to the input
 elements, and whose values are the result of applying a value mapping
 function to all input elements equal to the key and combining them
 using the merge function`]
			]
		]],
		[/* method */ 'toUnmodifiableMap(java.util.function.Function,java.util.function.Function)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `Collector`],
				[/* text */ 't', ` that accumulates the input elements into an
 `],
				[/* reference */ 'r', `java.Map#unmodifiable`],
				[/* text */ 't', `,
 whose keys and values are the result of applying the provided
 mapping functions to the input elements.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If the mapped keys contain duplicates (according to
 `],
					[/* reference */ 'r', `java.util.Object#equals(java.lang.Object)`],
					[/* text */ 't', `), an `],
					[/* inline code block */ 'i', `IllegalStateException`],
					[/* text */ 't', ` is
 thrown when the collection operation is performed.  If the mapped keys
 might have duplicates, use `],
					[/* reference */ 'r', `#toUnmodifiableMap(java.util.function.Function,java.util.function.Function,java.util.function.BinaryOperator)`, `toUnmodifiableMap(Function, Function, BinaryOperator)`],
					[/* text */ 't', `
 to handle merging of the values.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The returned Collector disallows null keys and values. If either mapping function
 returns null, `],
					[/* inline code block */ 'i', `NullPointerException`],
					[/* text */ 't', ` will be thrown.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'keyMapper', [/* parameter description */
					[/* text */ 't', `a mapping function to produce keys, must be non-null`]
				]],
				[/* parameter */ 'valueMapper', [/* parameter description */
					[/* text */ 't', `a mapping function to produce values, must be non-null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if either keyMapper or valueMapper is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Collector`],
				[/* text */ 't', ` that accumulates the input elements into an
 `],
				[/* reference */ 'r', `java.Map#unmodifiable`],
				[/* text */ 't', `, whose keys and values
 are the result of applying the provided mapping functions to the input elements`]
			]
		]],
		[/* method */ 'toUnmodifiableMap(java.util.function.Function,java.util.function.Function,java.util.function.BinaryOperator)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `Collector`],
				[/* text */ 't', ` that accumulates the input elements into an
 `],
				[/* reference */ 'r', `java.Map#unmodifiable`],
				[/* text */ 't', `,
 whose keys and values are the result of applying the provided
 mapping functions to the input elements.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If the mapped
 keys contain duplicates (according to `],
					[/* reference */ 'r', `java.util.Object#equals(java.lang.Object)`],
					[/* text */ 't', `),
 the value mapping function is applied to each equal element, and the
 results are merged using the provided merging function.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The returned Collector disallows null keys and values. If either mapping function
 returns null, `],
					[/* inline code block */ 'i', `NullPointerException`],
					[/* text */ 't', ` will be thrown.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'keyMapper', [/* parameter description */
					[/* text */ 't', `a mapping function to produce keys, must be non-null`]
				]],
				[/* parameter */ 'valueMapper', [/* parameter description */
					[/* text */ 't', `a mapping function to produce values, must be non-null`]
				]],
				[/* parameter */ 'mergeFunction', [/* parameter description */
					[/* text */ 't', `a merge function, used to resolve collisions between
                      values associated with the same key, as supplied
                      to `],
					[/* reference */ 'r', `java.Map#merge(K,V,java.util.function.BiFunction)`],
					[/* text */ 't', `,
                      must be non-null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the keyMapper, valueMapper, or mergeFunction is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Collector`],
				[/* text */ 't', ` that accumulates the input elements into an
 `],
				[/* reference */ 'r', `java.Map#unmodifiable`],
				[/* text */ 't', `, whose keys and values
 are the result of applying the provided mapping functions to the input elements`]
			]
		]],
		[/* method */ 'groupingByConcurrent(java.util.function.Function)', [
			[/* method description */
				[/* text */ 't', `Returns a concurrent `],
				[/* inline code block */ 'i', `Collector`],
				[/* text */ 't', ` implementing a "group by"
 operation on input elements of type `],
				[/* inline code block */ 'i', `T`],
				[/* text */ 't', `, grouping elements
 according to a classification function.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This is a `],
					[/* reference */ 'r', `.Collector.Characteristics#CONCURRENT`],
					[/* text */ 't', ` and
 `],
					[/* reference */ 'r', `.Collector.Characteristics#UNORDERED`],
					[/* text */ 't', ` Collector.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The classification function maps elements to some key type `],
					[/* inline code block */ 'i', `K`],
					[/* text */ 't', `.
 The collector produces a `],
					[/* inline code block */ 'i', `ConcurrentMap<K, List<T>>`],
					[/* text */ 't', ` whose keys are the
 values resulting from applying the classification function to the input
 elements, and whose corresponding values are `],
					[/* inline code block */ 'i', `List`],
					[/* text */ 't', `s containing the
 input elements which map to the associated key under the classification
 function.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `There are no guarantees on the type, mutability, or serializability
 of the `],
					[/* inline code block */ 'i', `ConcurrentMap`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `List`],
					[/* text */ 't', ` objects returned, or of the
 thread-safety of the `],
					[/* inline code block */ 'i', `List`],
					[/* text */ 't', ` objects returned.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'classifier', [/* parameter description */
					[/* text */ 't', `a classifier function mapping input elements to keys`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a concurrent, unordered `],
				[/* inline code block */ 'i', `Collector`],
				[/* text */ 't', ` implementing the group-by operation`]
			]
		]],
		[/* method */ 'groupingBy(java.util.function.Function)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `Collector`],
				[/* text */ 't', ` implementing a "group by" operation on
 input elements of type `],
				[/* inline code block */ 'i', `T`],
				[/* text */ 't', `, grouping elements according to a
 classification function, and returning the results in a `],
				[/* inline code block */ 'i', `Map`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The classification function maps elements to some key type `],
					[/* inline code block */ 'i', `K`],
					[/* text */ 't', `.
 The collector produces a `],
					[/* inline code block */ 'i', `Map<K, List<T>>`],
					[/* text */ 't', ` whose keys are the
 values resulting from applying the classification function to the input
 elements, and whose corresponding values are `],
					[/* inline code block */ 'i', `List`],
					[/* text */ 't', `s containing the
 input elements which map to the associated key under the classification
 function.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `There are no guarantees on the type, mutability, serializability, or
 thread-safety of the `],
					[/* inline code block */ 'i', `Map`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `List`],
					[/* text */ 't', ` objects returned.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'classifier', [/* parameter description */
					[/* text */ 't', `the classifier function mapping input elements to keys`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Collector`],
				[/* text */ 't', ` implementing the group-by operation`]
			]
		]],
		[/* method */ 'teeing(java.util.stream.Collector,java.util.stream.Collector,java.util.function.BiFunction)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `Collector`],
				[/* text */ 't', ` that is a composite of two downstream collectors.
 Every element passed to the resulting collector is processed by both downstream
 collectors, then their results are merged using the specified merge function
 into the final result.

 `],
				[/* block */ 'b', `The resulting collector functions do the following:

 `],
				[/* list */ 'l', [
					[/* block */ 'b', `supplier: creates a result container that contains result containers
 obtained by calling each collector's supplier
 `],
					[/* block */ 'b', `accumulator: calls each collector's accumulator with its result container
 and the input element
 `],
					[/* block */ 'b', `combiner: calls each collector's combiner with two result containers
 `],
					[/* block */ 'b', `finisher: calls each collector's finisher with its result container,
 then calls the supplied merger and returns its result.
 `]
				]],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `The resulting collector is `],
					[/* reference */ 'r', `.Collector.Characteristics#UNORDERED`],
					[/* text */ 't', ` if both downstream
 collectors are unordered and `],
					[/* reference */ 'r', `.Collector.Characteristics#CONCURRENT`],
					[/* text */ 't', ` if both downstream
 collectors are concurrent.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'downstream1', [/* parameter description */
					[/* text */ 't', `the first downstream collector`]
				]],
				[/* parameter */ 'downstream2', [/* parameter description */
					[/* text */ 't', `the second downstream collector`]
				]],
				[/* parameter */ 'merger', [/* parameter description */
					[/* text */ 't', `the function which merges two results into the single one`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Collector`],
				[/* text */ 't', ` which aggregates the results of two supplied collectors.`]
			]
		]],
		[/* method */ 'flatMapping(java.util.function.Function,java.util.stream.Collector)', [
			[/* method description */
				[/* text */ 't', `Adapts a `],
				[/* inline code block */ 'i', `Collector`],
				[/* text */ 't', ` accepting elements of type `],
				[/* inline code block */ 'i', `U`],
				[/* text */ 't', ` to one
 accepting elements of type `],
				[/* inline code block */ 'i', `T`],
				[/* text */ 't', ` by applying a flat mapping function
 to each input element before accumulation.  The flat mapping function
 maps an input element to a `],
				[/* reference */ 'r', `java.util.stream.Stream`],
				[/* text */ 't', ` covering zero or more
 output elements that are then accumulated downstream.  Each mapped stream
 is `],
				[/* reference */ 'r', `.BaseStream#close()`],
				[/* text */ 't', ` after its contents
 have been placed downstream.  (If a mapped stream is `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `
 an empty stream is used, instead.)`]
			],
			[/* parameters */
				[/* parameter */ 'mapper', [/* parameter description */
					[/* text */ 't', `a function to be applied to the input elements, which
 returns a stream of results`]
				]],
				[/* parameter */ 'downstream', [/* parameter description */
					[/* text */ 't', `a collector which will receive the elements of the
 stream returned by mapper`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a collector which applies the mapping function to the input
 elements and provides the flat mapped results to the downstream collector`]
			]
		]],
		[/* method */ 'mapping(java.util.function.Function,java.util.stream.Collector)', [
			[/* method description */
				[/* text */ 't', `Adapts a `],
				[/* inline code block */ 'i', `Collector`],
				[/* text */ 't', ` accepting elements of type `],
				[/* inline code block */ 'i', `U`],
				[/* text */ 't', ` to one
 accepting elements of type `],
				[/* inline code block */ 'i', `T`],
				[/* text */ 't', ` by applying a mapping function to
 each input element before accumulation.`]
			],
			[/* parameters */
				[/* parameter */ 'mapper', [/* parameter description */
					[/* text */ 't', `a function to be applied to the input elements`]
				]],
				[/* parameter */ 'downstream', [/* parameter description */
					[/* text */ 't', `a collector which will accept mapped values`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a collector which applies the mapping function to the input
 elements and provides the mapped results to the downstream collector`]
			]
		]],
		[/* method */ 'reducing(java.lang.Object,java.util.function.Function,java.util.function.BinaryOperator)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `Collector`],
				[/* text */ 't', ` which performs a reduction of its
 input elements under a specified mapping function and
 `],
				[/* inline code block */ 'i', `BinaryOperator`],
				[/* text */ 't', `. This is a generalization of
 `],
				[/* reference */ 'r', `#reducing(T,java.util.function.BinaryOperator)`, `reducing(Object, BinaryOperator)`],
				[/* text */ 't', ` which allows a transformation
 of the elements before reduction.`]
			],
			[/* parameters */
				[/* parameter */ 'identity', [/* parameter description */
					[/* text */ 't', `the identity value for the reduction (also, the value
                 that is returned when there are no input elements)`]
				]],
				[/* parameter */ 'mapper', [/* parameter description */
					[/* text */ 't', `a mapping function to apply to each input value`]
				]],
				[/* parameter */ 'op', [/* parameter description */
					[/* text */ 't', `a `],
					[/* inline code block */ 'i', `BinaryOperator<U>`],
					[/* text */ 't', ` used to reduce the mapped values`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Collector`],
				[/* text */ 't', ` implementing the map-reduce operation`]
			]
		]],
		[/* method */ 'averagingDouble(java.util.function.ToDoubleFunction)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `Collector`],
				[/* text */ 't', ` that produces the arithmetic mean of a double-valued
 function applied to the input elements.  If no elements are present,
 the result is 0.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The average returned can vary depending upon the order in which
 values are recorded, due to accumulated rounding error in
 addition of values of differing magnitudes. Values sorted by increasing
 absolute magnitude tend to yield more accurate results.  If any recorded
 value is a `],
					[/* inline code block */ 'i', `NaN`],
					[/* text */ 't', ` or the sum is at any point a `],
					[/* inline code block */ 'i', `NaN`],
					[/* text */ 't', ` then the
 average will be `],
					[/* inline code block */ 'i', `NaN`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'mapper', [/* parameter description */
					[/* text */ 't', `a function extracting the property to be averaged`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Collector`],
				[/* text */ 't', ` that produces the arithmetic mean of a
 derived property`]
			]
		]],
		[/* method */ 'averagingInt(java.util.function.ToIntFunction)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `Collector`],
				[/* text */ 't', ` that produces the arithmetic mean of an integer-valued
 function applied to the input elements.  If no elements are present,
 the result is 0.`]
			],
			[/* parameters */
				[/* parameter */ 'mapper', [/* parameter description */
					[/* text */ 't', `a function extracting the property to be averaged`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Collector`],
				[/* text */ 't', ` that produces the arithmetic mean of a
 derived property`]
			]
		]],
		[/* method */ 'averagingLong(java.util.function.ToLongFunction)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `Collector`],
				[/* text */ 't', ` that produces the arithmetic mean of a long-valued
 function applied to the input elements.  If no elements are present,
 the result is 0.`]
			],
			[/* parameters */
				[/* parameter */ 'mapper', [/* parameter description */
					[/* text */ 't', `a function extracting the property to be averaged`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Collector`],
				[/* text */ 't', ` that produces the arithmetic mean of a
 derived property`]
			]
		]],
		[/* method */ 'summingDouble(java.util.function.ToDoubleFunction)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `Collector`],
				[/* text */ 't', ` that produces the sum of a double-valued
 function applied to the input elements.  If no elements are present,
 the result is 0.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The sum returned can vary depending upon the order in which
 values are recorded, due to accumulated rounding error in
 addition of values of differing magnitudes. Values sorted by increasing
 absolute magnitude tend to yield more accurate results.  If any recorded
 value is a `],
					[/* inline code block */ 'i', `NaN`],
					[/* text */ 't', ` or the sum is at any point a `],
					[/* inline code block */ 'i', `NaN`],
					[/* text */ 't', ` then the
 sum will be `],
					[/* inline code block */ 'i', `NaN`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'mapper', [/* parameter description */
					[/* text */ 't', `a function extracting the property to be summed`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Collector`],
				[/* text */ 't', ` that produces the sum of a derived property`]
			]
		]],
		[/* method */ 'summingInt(java.util.function.ToIntFunction)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `Collector`],
				[/* text */ 't', ` that produces the sum of a integer-valued
 function applied to the input elements.  If no elements are present,
 the result is 0.`]
			],
			[/* parameters */
				[/* parameter */ 'mapper', [/* parameter description */
					[/* text */ 't', `a function extracting the property to be summed`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Collector`],
				[/* text */ 't', ` that produces the sum of a derived property`]
			]
		]],
		[/* method */ 'counting()', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `Collector`],
				[/* text */ 't', ` accepting elements of type `],
				[/* inline code block */ 'i', `T`],
				[/* text */ 't', ` that
 counts the number of input elements.  If no elements are present, the
 result is 0.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Collector`],
				[/* text */ 't', ` that counts the input elements`]
			]
		]],
		[/* method */ 'summingLong(java.util.function.ToLongFunction)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `Collector`],
				[/* text */ 't', ` that produces the sum of a long-valued
 function applied to the input elements.  If no elements are present,
 the result is 0.`]
			],
			[/* parameters */
				[/* parameter */ 'mapper', [/* parameter description */
					[/* text */ 't', `a function extracting the property to be summed`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Collector`],
				[/* text */ 't', ` that produces the sum of a derived property`]
			]
		]],
		[/* method */ 'summarizingDouble(java.util.function.ToDoubleFunction)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `Collector`],
				[/* text */ 't', ` which applies an `],
				[/* inline code block */ 'i', `double`],
				[/* text */ 't', `-producing
 mapping function to each input element, and returns summary statistics
 for the resulting values.`]
			],
			[/* parameters */
				[/* parameter */ 'mapper', [/* parameter description */
					[/* text */ 't', `a mapping function to apply to each element`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Collector`],
				[/* text */ 't', ` implementing the summary-statistics reduction`]
			]
		]],
		[/* method */ 'summarizingInt(java.util.function.ToIntFunction)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `Collector`],
				[/* text */ 't', ` which applies an `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', `-producing
 mapping function to each input element, and returns summary statistics
 for the resulting values.`]
			],
			[/* parameters */
				[/* parameter */ 'mapper', [/* parameter description */
					[/* text */ 't', `a mapping function to apply to each element`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Collector`],
				[/* text */ 't', ` implementing the summary-statistics reduction`]
			]
		]],
		[/* method */ 'toList()', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `Collector`],
				[/* text */ 't', ` that accumulates the input elements into a
 new `],
				[/* inline code block */ 'i', `List`],
				[/* text */ 't', `. There are no guarantees on the type, mutability,
 serializability, or thread-safety of the `],
				[/* inline code block */ 'i', `List`],
				[/* text */ 't', ` returned; if more
 control over the returned `],
				[/* inline code block */ 'i', `List`],
				[/* text */ 't', ` is required, use `],
				[/* reference */ 'r', `#toCollection(java.util.function.Supplier)`, `toCollection(Supplier)`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Collector`],
				[/* text */ 't', ` which collects all the input elements into a
 `],
				[/* inline code block */ 'i', `List`],
				[/* text */ 't', `, in encounter order`]
			]
		]],
		[/* method */ 'toUnmodifiableList()', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `Collector`],
				[/* text */ 't', ` that accumulates the input elements into an
 `],
				[/* reference */ 'r', `java.List#unmodifiable`],
				[/* text */ 't', ` in encounter
 order. The returned Collector disallows null values and will throw
 `],
				[/* inline code block */ 'i', `NullPointerException`],
				[/* text */ 't', ` if it is presented with a null value.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Collector`],
				[/* text */ 't', ` that accumulates the input elements into an
 `],
				[/* reference */ 'r', `java.List#unmodifiable`],
				[/* text */ 't', ` in encounter order`]
			]
		]],
		[/* method */ 'summarizingLong(java.util.function.ToLongFunction)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `Collector`],
				[/* text */ 't', ` which applies an `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', `-producing
 mapping function to each input element, and returns summary statistics
 for the resulting values.`]
			],
			[/* parameters */
				[/* parameter */ 'mapper', [/* parameter description */
					[/* text */ 't', `the mapping function to apply to each element`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Collector`],
				[/* text */ 't', ` implementing the summary-statistics reduction`]
			]
		]],
		[/* method */ 'partitioningBy(java.util.function.Predicate)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `Collector`],
				[/* text */ 't', ` which partitions the input elements according
 to a `],
				[/* inline code block */ 'i', `Predicate`],
				[/* text */ 't', `, and organizes them into a
 `],
				[/* inline code block */ 'i', `Map<Boolean, List<T>>`],
				[/* text */ 't', `.

 The returned `],
				[/* inline code block */ 'i', `Map`],
				[/* text */ 't', ` always contains mappings for both
 `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` keys.
 There are no guarantees on the type, mutability,
 serializability, or thread-safety of the `],
				[/* inline code block */ 'i', `Map`],
				[/* text */ 't', ` or `],
				[/* inline code block */ 'i', `List`],
				[/* text */ 't', `
 returned.`]
			],
			[/* parameters */
				[/* parameter */ 'predicate', [/* parameter description */
					[/* text */ 't', `a predicate used for classifying input elements`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Collector`],
				[/* text */ 't', ` implementing the partitioning operation`]
			]
		]],
		[/* method */ 'maxBy(java.util.Comparator)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `Collector`],
				[/* text */ 't', ` that produces the maximal element according
 to a given `],
				[/* inline code block */ 'i', `Comparator`],
				[/* text */ 't', `, described as an `],
				[/* inline code block */ 'i', `Optional<T>`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'comparator', [/* parameter description */
					[/* text */ 't', `a `],
					[/* inline code block */ 'i', `Comparator`],
					[/* text */ 't', ` for comparing elements`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Collector`],
				[/* text */ 't', ` that produces the maximal value`]
			]
		]],
		[/* method */ 'minBy(java.util.Comparator)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `Collector`],
				[/* text */ 't', ` that produces the minimal element according
 to a given `],
				[/* inline code block */ 'i', `Comparator`],
				[/* text */ 't', `, described as an `],
				[/* inline code block */ 'i', `Optional<T>`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'comparator', [/* parameter description */
					[/* text */ 't', `a `],
					[/* inline code block */ 'i', `Comparator`],
					[/* text */ 't', ` for comparing elements`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Collector`],
				[/* text */ 't', ` that produces the minimal value`]
			]
		]],
		[/* method */ 'reducing(java.util.function.BinaryOperator)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `Collector`],
				[/* text */ 't', ` which performs a reduction of its
 input elements under a specified `],
				[/* inline code block */ 'i', `BinaryOperator`],
				[/* text */ 't', `.  The result
 is described as an `],
				[/* inline code block */ 'i', `Optional<T>`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'op', [/* parameter description */
					[/* text */ 't', `a `],
					[/* inline code block */ 'i', `BinaryOperator<T>`],
					[/* text */ 't', ` used to reduce the input elements`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Collector`],
				[/* text */ 't', ` which implements the reduction operation`]
			]
		]],
		[/* method */ 'toSet()', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `Collector`],
				[/* text */ 't', ` that accumulates the input elements into a
 new `],
				[/* inline code block */ 'i', `Set`],
				[/* text */ 't', `. There are no guarantees on the type, mutability,
 serializability, or thread-safety of the `],
				[/* inline code block */ 'i', `Set`],
				[/* text */ 't', ` returned; if more
 control over the returned `],
				[/* inline code block */ 'i', `Set`],
				[/* text */ 't', ` is required, use
 `],
				[/* reference */ 'r', `#toCollection(java.util.function.Supplier)`, `toCollection(Supplier)`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This is an `],
					[/* reference */ 'r', `.Collector.Characteristics#UNORDERED`],
					[/* text */ 't', `
 Collector.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Collector`],
				[/* text */ 't', ` which collects all the input elements into a
 `],
				[/* inline code block */ 'i', `Set`]
			]
		]],
		[/* method */ 'toUnmodifiableSet()', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `Collector`],
				[/* text */ 't', ` that accumulates the input elements into an
 `],
				[/* reference */ 'r', `java.Set#unmodifiable`],
				[/* text */ 't', `. The returned
 Collector disallows null values and will throw `],
				[/* inline code block */ 'i', `NullPointerException`],
				[/* text */ 't', `
 if it is presented with a null value. If the input contains duplicate elements,
 an arbitrary element of the duplicates is preserved.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This is an `],
					[/* reference */ 'r', `.Collector.Characteristics#UNORDERED`],
					[/* text */ 't', `
 Collector.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Collector`],
				[/* text */ 't', ` that accumulates the input elements into an
 `],
				[/* reference */ 'r', `java.Set#unmodifiable`]
			]
		]],
		[/* method */ 'reducing(java.lang.Object,java.util.function.BinaryOperator)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `Collector`],
				[/* text */ 't', ` which performs a reduction of its
 input elements under a specified `],
				[/* inline code block */ 'i', `BinaryOperator`],
				[/* text */ 't', ` using the
 provided identity.`]
			],
			[/* parameters */
				[/* parameter */ 'identity', [/* parameter description */
					[/* text */ 't', `the identity value for the reduction (also, the value
                 that is returned when there are no input elements)`]
				]],
				[/* parameter */ 'op', [/* parameter description */
					[/* text */ 't', `a `],
					[/* inline code block */ 'i', `BinaryOperator<T>`],
					[/* text */ 't', ` used to reduce the input elements`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Collector`],
				[/* text */ 't', ` which implements the reduction operation`]
			]
		]],
		[/* method */ 'joining()', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `Collector`],
				[/* text */ 't', ` that concatenates the input elements into a
 `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', `, in encounter order.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Collector`],
				[/* text */ 't', ` that concatenates the input elements into a
 `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', `, in encounter order`]
			]
		]],
		[/* method */ 'joining(java.lang.CharSequence)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `Collector`],
				[/* text */ 't', ` that concatenates the input elements,
 separated by the specified delimiter, in encounter order.`]
			],
			[/* parameters */
				[/* parameter */ 'delimiter', [/* parameter description */
					[/* text */ 't', `the delimiter to be used between each element`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `A `],
				[/* inline code block */ 'i', `Collector`],
				[/* text */ 't', ` which concatenates CharSequence elements,
 separated by the specified delimiter, in encounter order`]
			]
		]],
		[/* method */ 'joining(java.lang.CharSequence,java.lang.CharSequence,java.lang.CharSequence)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `Collector`],
				[/* text */ 't', ` that concatenates the input elements,
 separated by the specified delimiter, with the specified prefix and
 suffix, in encounter order.`]
			],
			[/* parameters */
				[/* parameter */ 'delimiter', [/* parameter description */
					[/* text */ 't', `the delimiter to be used between each element`]
				]],
				[/* parameter */ 'prefix', [/* parameter description */
					[/* text */ 't', `the sequence of characters to be used at the beginning
                of the joined result`]
				]],
				[/* parameter */ 'suffix', [/* parameter description */
					[/* text */ 't', `the sequence of characters to be used at the end
                of the joined result`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `A `],
				[/* inline code block */ 'i', `Collector`],
				[/* text */ 't', ` which concatenates CharSequence elements,
 separated by the specified delimiter, in encounter order`]
			]
		]]
	],
]);
