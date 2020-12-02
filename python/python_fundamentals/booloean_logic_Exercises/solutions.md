**Declare a variable called first and assign it to the value "Hello World"**

first = "Hello World"

**Write a comment that says "This is a comment."**

#This is a comment

**Log a message to the terminal that says "I AM A COMPUTER!"**

print("I AM A COMPUTER")

**Write an if statement that checks if 1 is less than 2 and if 4 is greater than 2. If it is, show the message "Math is fun."`**


if 1 < 2 and 4 > 2:
    print("Math is fun")

**Assign a variable called nope to an absence of value**    

nope = none

**Use the language's "and" boolean operator to combine the language's "true" value with its "false" value.**

2 + 3 and 1 + 2

**Calculate the length of the string "What's my length?"**

sen = "What's my length?"
print(len(sen))

**Convert the string "i am shouting" to uppercase.**
"i am shouting".upper()

**Convert the string "1000" to the number 1000.**

int("1000")

**Combine the number 4 with the string "real" to produce "4real".**

"4" + "real"


**Record the output of the expression 3 * "cool".**

Traceback (most recent call last):
  File "main.py", line 2, in <module>
    print(3 + "cool")
TypeError: unsupported operand type(s) for +: 'int' and 'str'

**Record the output of the expression 1/0**

Traceback (most recent call last):
  File "main.py", line 2, in <module>
    print(1/0)
ZeroDivisionError: division by zero


**Determine the type of [].**

print(type([]))  #<class 'list'>


**Ask the user for their name, and store it in a variable called name.**

name = input("what is your name ")

**Ask the user for a number. If the number is negative, show a message that says "That number is less than 0!" If the number is positive, show a message that says "That number is greater than 0!" Otherwise, show a message that says "You picked 0!**

num = input("pick a number ")

if int(num) < 0:
    print("That number is less that 0!")
elif int(num) > 0:
    print("That number is greater that 0!")
else:
    print("You picked 0!") 


**Find the index of "l" in "apple".**

text = "apple"
print(text.find("a"))

**Check whether "y" is in "xylophone"**

if "y" in "xylophone":
    print("Yes")
else:
    print("Nope!")

**Check whether a string called my_string is all in lowercase.**   

my_string.islower()