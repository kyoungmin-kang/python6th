def val(x):
    print("Inside :", x, id(x))
    x += 1
    print("Inside After:", x, id(x))
import sys
print("default:", sys.getrecursionlimit())
sys.setrecursionlimit(3000)
print("setting:", sys.getrecursionlimit())
i = 0
def myfun():
    global i
    i += 1
    print("My Function:", i)
    myfun()

print("=====")
x = 10
print("Before Calling:", x, id(x))
val(x)
print("After Calling: ", x, id(x))
myfun()



