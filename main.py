i = 0

def myfun():
    i = i + 1
    print("My Function i:" i)

 myfun()


a = 50

def show():
    a = 10
    print("show-A: ", a)


    show()
    print("A:", a)

    def show2():
        global a
        print("show2-A:", a)
        a = 20
        print("show2-A2: ", a)

    show2()
    print("A: ",a)




