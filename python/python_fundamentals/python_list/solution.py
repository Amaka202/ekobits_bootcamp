# Given a list [1,2,3,4], print out all the values in the list.

for num in [1,2,3,4]:
    print(num)


# Given a list [1,2,3,4], print out all the values in the list multiplied by 20.

for num in [1,2,3,4]:
    print(num * 20)

# Given a list ["Elie", "Tim", "Matt"], return a new list with only the first letter (["E", "T", "M"])
    
new_list = []

for word in ["Elie", "Tim", "Matt"]:
    new_list.append(word[0])

print(new_list)    

# Given a list [1,2,3,4,5,6] return a new list of all the even values ([2,4,6])


evenNum = [num for num in [1,2,3,4,5,6] if num % 2 == 0]

print(evenNum)

# Given a list of words ["Elie", "Tim", "Matt"] return a new list with each word reversed and in lower case (['eile', 'mit', 'ttam']).

reserved_list = []
for word in ["Elie", "Tim", "Matt"]:
    reserved_list.append(word[::-1].lower())

print(reserved_list)

# Given two strings "first" and "third", return a new string with all the letters present in both words (["i", "r", "t"]).

common_letter = []
for char in "first":
    for letter in "third":
        if char == letter:
            common_letter.append(char)
print(common_letter) 

# For all the numbers between 1 and 100, return a list with all the numbers that are divisible by 12 ([12, 24, 36, 48, 60, 72, 84, 96]).

divisible_by_12  = [] 

for num in range(1, 100):
    if num % 12 == 0:
        divisible_by_12.append(num)

print(divisible_by_12)        

# Given the string "amazing", return a list with all the vowels removed (['m', 'z', 'n', 'g']).

non_vowels = []
for letter in "amazing":
    if letter not in ['a','e','i','o','u']:
        non_vowels.append(letter)

print(non_vowels)

