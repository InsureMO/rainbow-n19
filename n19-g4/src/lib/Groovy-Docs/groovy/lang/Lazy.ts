import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('groovy.lang.Lazy', [
	[ /* class description */
		['b', `Field annotation to simplify lazy initialization.`],
		['b', `
 Example usage without any special modifiers just defers initialization until the first call but is not thread-safe:
 `],
		['c', [['i', '@Lazy'], ['t', `T x`]]],
		['b', `becomes`],
		['c', ` private T $x

 T getX() {
    if ($x != null)
       return $x
    else {
       $x = new T()
       return $x
    }
 }
 `],
		['b', `If the field is declared volatile then initialization will be synchronized using
 the`],
		['a', 'http://en.wikipedia.org/wiki/Double-checked_locking', 'double-checked locking'],
		['b', `pattern as shown here:`],
		['c', [['i', '@Lazy'], ['t', `volatile T x`]]],
		['b', `becomes`],
		['c', ` private volatile T $x

 T getX() {
    T $x_local = $x
    if ($x_local != null)
       return $x_local
    else {
       synchronized(this) {
          if ($x == null) {
             $x = new T()
          }
          return $x
       }
    }
 }
 `],
		['b', `By default a field will be initialized by calling its default constructor.

 If the field has an initial value expression then this expression will be used instead of calling the default constructor.
 In particular, it is possible to use closure`],
		['i', '{ ... } ()'],
		['b', `syntax as follows:`],
		['c', [['i', '@Lazy'], ['t', `T x = { [1, 2, 3] } ()`]]],
		['b', `becomes`],
		['c', ` private T $x

 T getX() {
    T $x_local = $x
    if ($x_local != null)
       return $x_local
    else {
       synchronized(this) {
          if ($x == null) {
             $x = { [1, 2, 3] } ()
          }
          return $x
       }
    }
 }
 `],
		['b', [['i', '@Lazy(soft=true)'], ['t', `will use a soft reference instead of the field and use the above rules each time re-initialization is required.`]]],
		['b', [['t', `If the`], ['i', 'soft'], ['t', `flag for the annotation is not set but the field is static, then
 the`], ['a', 'http://en.wikipedia.org/wiki/Initialization_on_demand_holder_idiom', 'initialization on demand holder idiom'], ['t', `is
 used as follows:`]]],
		['c', [['i', '@Lazy'], ['t', `static FieldType field`], ['i', '@Lazy'], ['t', `static Date date1`], ['i', '@Lazy'], ['t', `static Date date2 = { new Date().copyWith(year: 2000) }()`], ['i', '@Lazy'], ['t', `static Date date3 = new GregorianCalendar(2009, Calendar.JANUARY, 1).time`]]],
		['b', `becomes these methods and inners classes within the class containing the above definitions:`],
		['c', ` private static class FieldTypeHolder_field {
     private static final FieldType INSTANCE = new FieldType()
 }

 private static class DateHolder_date1 {
     private static final Date INSTANCE = new Date()
 }

 private static class DateHolder_date2 {
     private static final Date INSTANCE = { new Date().copyWith(year: 2000) }()
 }

 private static class DateHolder_date3 {
     private static final Date INSTANCE = new GregorianCalendar(2009, Calendar.JANUARY, 1).time
 }

 static FieldType getField() {
     return FieldTypeHolder_field.INSTANCE
 }

 static Date getDate1() {
     return DateHolder_date1.INSTANCE
 }

 static Date getDate2() {
     return DateHolder_date2.INSTANCE
 }

 static Date getDate3() {
     return DateHolder_date3.INSTANCE
 }
 `],
	],
	UDF,
	/* class sees */ UDF,
	UDF, UDF, UDF
]);
