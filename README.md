# Javascript

All things Javascript

A variable in JavaScript is a container that holds data values. var, let, and const

Data types in define the type of data that a variable can hold.

Numbers: Used for numeric values.
Strings: A sequence of characters used to represent text.
Booleans: Represents true or false.
Arrays: A list of values, which can be of any data type, stored in a single variable.
Objects: Complex data structures that can hold multiple values and functions (methods) as properties.

The console.log statements demonstrate how these variables can be used to output their values.

# Operators -----------------------------------------------

Arithmetic Operators are used for math calcs.(+,-,*,/,%,**)

Assignment Operators are used to assign values to variables.(=,+=,-=,*=,/=)

Comparison Operators are used to compare values and return booleans (==,!=,===,!==,>,<,>=,<=)

Logical Operators are used to combine multiple conditions.(&&,||,!)

Unary Operators are used to operate on a single operand(++,--,typeof)

Ternary Operators is short hand for if-else statements.
(condition ? expression1 : expression2)

# Expressions -------------------------------------------------

Arithmetic Expressions: Use arithmetic operators to perform calculations.
Example: let total = price * quantity;

Comparison Expressions: Use comparison operators to evaluate conditions.
Example: let isAdult = age >= 18;

Logical Expressions: Combine multiple conditions using logical operators.
Example: let canVote = (age >= 18) && (citizen === true);

# Conditionals -----------------------------------------------

The if-else statement is a fundamental control structure that executes a block of code if a specified condition is true. If the condition is false, the else block (if provided) is executed instead. if-else statements are used when there are multiple conditions to evaluate, with different outcomes depending on which conditions are true.

The switch statement is another control structure used for executing one block of code among many based on the value of an expression. It’s particularly useful when there are many possible conditions to check, and each corresponds to a specific case. The switch statement is ideal when you need to compare a single expression against multiple potential values.

# Functions --------------------------------------

A function is a reusable block of code designed to perform a specific task. Functions allow developers to write code once and use it multiple times, which enhances code efficiency and readability.

# Scope --------------------------------------------

Scope determines the accessibility of variables and functions in different parts of the code. Understanding scope is vital for avoiding errors related to variable accessibility and for writing cleaner, more maintainable code.

Types of Scope:

Global Scope: Variables declared outside of any function or block have global scope and can be accessed from anywhere in the code.

Local Scope: Variables declared within a function or block are local to that function or block and cannot be accessed from outside it.
Function Scope: Variables declared within a function are accessible only within that function.

Block Scope: Variables declared with let or const within a block ({}) are accessible only within that block.


# DOM manipulation -----------------------------------------------

The DOM is a structured representation of an HTML document. It represents the page so that programs can change the document structure, style, and content. JavaScript can be used to manipulate the DOM, enabling developers to dynamically update the content and appearance of web pages.