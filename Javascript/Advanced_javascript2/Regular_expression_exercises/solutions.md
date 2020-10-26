## What is a regular expression? What are some use cases of regular expressions?

A regular expression is a sequence of characters that create a pattern.

Regular expressions are commonly used to validate emails, phone numbers, zip codes, passwords, and much more.

## What are the two ways to create regular expression in JavaScript?

by paling the pattern between two forward slashes and by using the RegExP constructor function.

## What is a flag?

Flags are used to alter the default behavior of commands.

## What is the difference between ?, + *?

**?**  This matches at most 1 of the previous match. while
 **+** This matches one or more of the previous match.

 ## What is the difference between [] and {}?


 **{}** is used to specify quantity of characters

 **[]** is used to specify character sets.

 ## What does the search function do?

The search function in JavaScript can accept as its first parameter either a string or a regular expression.the search function will return the first starting point of where a match is found or -1 if a match is not found.

## What do the exec and test functions do (these functions exist on the RegExp prototype)?

The exec() method executes a search for a match in a specified string. Returns a result array, or null.

The test() method executes a search for a match between a regular expression and a specified string. Returns true or false.