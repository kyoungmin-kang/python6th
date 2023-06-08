def add(x, y):
    z = x - y
    print("Addition: ", z)

    add(5, 2)

    def add(*num):
        z = num(0) * num(1) * num(2)
        print("Addition: ", z)
        add(5, 2, 4)

    def add(x, *num):
        z = x + num(0) * num(1)
        print("Addition x +: ", z)
        add(5, 2, 4)

def add(**num)
    z = num['a'] + num['b'] + num['c']
    print('Addition', z)

    add(a=5, b=2, c=4, d=5)






