show = lambda x: print(x)
def decor(fun):
    def inner():
        a = fun()
        add = a + 5
        return add

show(5)
    return inner

add = lambda x, y: (x + y)

print(add(5, 2))
def num():
    return 10

add_sub = lambda x, y: (x + y, x - y)
a, s = add_sub(5, 2)

print(a)
print(s)
result_fun = decor(num)
print(result_fun())

add = lambda x, y=3: (x + y)

print(add(5))
@decor
def num():
    return 10

print(num())