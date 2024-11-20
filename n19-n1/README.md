![Static Badge](https://img.shields.io/badge/InsureMO-777AF2.svg)

# n19/n1

The `n19/n1` module provides a series of value operators that can be used via chainable calls. This module is primarily written in
TypeScript and managed using npm or yarn.

## Touch a Value

Begin the value touching via the following method:

- `ValueOperator.of`,
- `ValueOperator.from`,
- `ValueOperator.with`,

they are all equivalent.

## Value Actions

### Available Testers

The module includes various testers for different conditions. Below is a list of available testers:

#### Any Type Testers

- `isNull`: Checks if a value is null or undefined.
- `isNotNull`: Checks if a value is not null or undefined.
- `isEmpty`: Checks if a value is empty.
- `isNotEmpty`: Checks if a value is not empty.
- `isBlank`: Checks if a value is null, undefined, or a blank string.
- `isNotBlank`: Checks if a value is not null, undefined, or a blank string.
- `has`: Checks if a value has a specified property.
- `notHas`: Checks if a value does not have a specified property.

#### Dayjs Testers

- `toDate`: Converts a value to a Dayjs object if valid.
- `before`: Checks if a date is before the specified date.
- `notBefore`: Checks if a date is not before the specified date.
- `after`: Checks if a date is after the specified date.
- `notAfter`: Checks if a date is not after the specified date.
- `between`: Checks if a date is within the specified range.
- `notBetween`: Checks if a date is not within the specified range.

#### Decimal Testers

- `isDecimal`: Checks if a value is a valid Decimal.
- `isInteger`: Checks if a value is an integer Decimal.
- `isInRange`: Checks if a decimal value is within a specified range.
- `isNotInRange`: Checks if a decimal value is not within a specified range.
- `isPositive`: Checks if a decimal value is positive.
- `isNotPositive`: Checks if a decimal value is not positive.
- `isNegative`: Checks if a decimal value is negative.
- `isNotNegative`: Checks if a decimal value is not negative.
- `isZero`: Checks if a decimal value is zero.
- `isNotZero`: Checks if a decimal value is not zero.
- `isGreaterThan`: Checks if a decimal value is greater than a specified value.
- `isGreaterThanOrEqual`: Checks if a decimal value is greater than or equal to a specified value.
- `isLessThan`: Checks if a decimal value is less than a specified value.
- `isLessThanOrEqual`: Checks if a decimal value is less than or equal to a specified value.

#### String Testers

- `startsWith`: Checks if a string starts with the given prefix.
- `notStartsWith`: Checks if a string does not start with the given prefix.
- `endsWith`: Checks if a string ends with the given suffix.
- `notEndsWith`: Checks if a string does not end with the given suffix.
- `includes`: Checks if a string includes the given substring.
- `notIncludes`: Checks if a string does not include the given substring.
- `regexp`: Checks if a value matches the given regular expression.
- `isOneOf`: Checks if a value is one of the given values.
- `isNotAnyOf`: Checks if a value is not any of the given values.

### Available Transformers

The module includes various transformers for different data types. Below is a list of available transformers:

#### Any Type Transformers

- `formatDate`: Formats a date.
- `formatNumber`: Formats a number.
- `format`: General format function.
- `retrieve`: Retrieves a value.

#### String Transformers

- `stringify`: Converts a value to a string.
- `trim`: Trims whitespace from a string.
- `pad`: Pads a string.
- `padStart`: Pads a string at the start.
- `padLeft`: Alias for `padStart`.
- `lpad`: Alias for `padStart`.
- `padEnd`: Pads a string at the end.
- `padRight`: Alias for `padEnd`.
- `rpad`: Alias for `padEnd`.

#### Decimal Transformers

- `toDecimal`: Converts a value to a decimal.
- `toNumber`: Converts a value to a number.
- `toFixed0`: Formats a number to 0 decimal places.
- `toFixed1`: Formats a number to 1 decimal place.
- `toFixed2`: Formats a number to 2 decimal places.
- `toFixed3`: Formats a number to 3 decimal places.
- `toFixed4`: Formats a number to 4 decimal places.
- `toFixed5`: Formats a number to 5 decimal places.
- `toFixed6`: Formats a number to 6 decimal places.
- `toFixed`: General function to format a number to a specified number of decimal places.
- `round`: Rounds a number.
- `roundUp`: Rounds a number up.
- `roundDown`: Rounds a number down.
- `floor`: Floors a number.
- `ceil`: Ceils a number.
- `roundBy`: Rounds a number by a specified value.

### Satisfied with Given Actions

- `satisfy`: Checks if a value satisfies a condition.
- `satisfyOne`: Checks if a value satisfies at least one condition.
- `satisfyAll`: Checks if a value satisfies all conditions.

### Extendable

Extend the module by adding your own testers and transformers by `extend` function. The module is designed to be easily extensible.

## Default Value

When the value processing chain is not fully satisfied, a default value can be provided as the final return value. Could be configured by
using `orUseDefault`, `useDefault`, `withDefault`, `orElse`, or `else`, as they are all equivalent.

## Consuming the Value

- `value`: Returns the value.
- `promise`: Returns a promise that resolves to the value. Typically used for asynchronous value actions are placed in a chain, or simply
  using promisify can also be applicable.
- `success` and `failure`: Consumes the value by callbacks.
- `ok`: Consumes the boolean return value of the actions, will get `true` when all actions are satisfied, otherwise `false`.
