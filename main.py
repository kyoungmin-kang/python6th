try:
    numbers = int("Not a number")
    #numbers = 5 + "Not a number"
except ValueError:
    print("Error: Invalid value")
except TypeError:
    print("Error: Invalid type")