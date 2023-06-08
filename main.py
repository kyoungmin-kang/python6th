def val(lst):
    print("Inside Function Before Append:", lst, id(lst))
    lst.append(4)
    print("Inside Function After Append:", lst, id(lst))


list = [1, 2, 3]
print("Before Calling Function: ", list, id(list))
val(list)
print("After Calling Function: ", list, id(list))


def val(x):
    print("Inside :", x, id(x))
    x += 1
    print("Inside After:", x, id(x))
print("========")
x = 10
print("Before Calling:", x,x id(x))
val(x)
print("After Calling:", x,x id(x))

