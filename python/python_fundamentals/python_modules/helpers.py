print("I'm from the helper file!")

def display(name):
  print("My name is " + name)

display(__name__)  

if __name__ == '__main__':
  print("I'm the helper file and was loaded directly!")