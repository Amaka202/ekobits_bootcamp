#this function takes in two parameters and returns the difference between the two

def difference(a , b):
    return a - b

# this function takes in two parameters and returns the product of the two

def product (a ,b):
    return a * b

# this function takes in one parameter (a number from 1-7) and returns the day of the week (1 is Sunday, 2 is Monday, 3 is Tuesday etc.). If the number is less than 1 or greater than 7, the function should return None

def print_day (num):
    if num == 1:
        return "Sunday"
    elif num == 2:
        return "Monday" 
    elif num == 3:
        return "Tuesday"
    elif num == 4:
        return "Wednesday"
    elif num == 5:
        return "Thursday"
    elif num == 6:
        return "Friday"
    elif num == 7:
        return "Saturday"
    else:
        return None


# this function takes in one parameter (a list) and returns the last value in the list. It should return None if the list is empty.

def last_element(lst):
    if len(lst) != 0:
        return lst[-1]
    else:
        return None    


# this function takes in two parameters (both numbers). If the first is greater than the second, this function returns "First is greater." If the second number is greater than the first, the function returns "Second is greater." Otherwise the function returns "Numbers are equal."

def number_compare(num1, num2):
    if num1 > num2:
        return "First is greater"
    elif num2 > num1:
        return "Second is greater"  
    else:
        return "Numbers are equal" 

# this function takes in two parameters (two strings). The first parameter should be a word and the second should be a letter. The function returns the number of times that letter appears in the word. The function should be case insensitive (does not matter if the input is lowercase or uppercase). If the letter is not found in the word, the function should return 0.

def single_letter_count(word, letter):
    count = 0
    for alpha in word:
        if letter.lower() == alpha.lower():
            count += 1
    return count            

print(single_letter_count('amazing','i'))

# this function takes in one parameter (a string) and returns a dictionary with the keys being the letters and the values being the count of the letter.

def multiple_letter_count(word):
    d = {}
    for letter in word:
        if letter in d:
            d[letter]+= 1
        else:
            d[letter] = 1    
    return d


# A Palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This function should take in one parameter and returns True or False depending on whether it is a palindrome. 

def is_palindrome(word):
    reverse_word = word[::-1]
    print(reverse_word)
    if word == reverse_word:
        return True
    else:
        return False


# This function accepts a list and a search_term (this will always be a primitive value) and returns the number of times the search_term appears in the list.

def frequency(lst, num):
    count= 0
    for x in lst:
        if num == x:
            count = count + 1
    return count
    
print(frequency([1,2,3,3,3,4,4,4,4], 4))            


# This function accepts a list of numbers and returns the most frequent number in the list of numbers. You can assume that the mode will be unique.


def mode(lst):
    counter = 0
    num = lst[0]

    for i in lst:
        curr_freq = lst.count(i)
        if(curr_freq > counter):
            counter = curr_freq
            num = i
    return num
print(mode([2,4,1,2,3,3,4,4,5,4,4,6,4,6,7,4]))    

