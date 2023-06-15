class ListNode:
    def __init__(self, value):
        self.value = value
        self.next = None


class stack:
    def __init__(self):
        self.head = None
        self.size = 0
    def is_empty(self):
        pass
    def push(self, value):
        new_node = ListNode(value)
        new_node.next = self.head
        self.head = new_node
        self.size += 1
    def pop(self):
        if self.is_empty():
            raise IndexError("pop from an empty stack")
        value = self.head.value
        self.head = self.head.next
        self.size -= 1
        return value


stack = stack()
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(5)

for _ in range(5):
    print(stack.pop())


# ================= leet 20. Valid Parntheses
class Solution:
    def isValid(self, s: str) -> bool:
        stack =[]
        mapping = {
            ')': '(',
            '}': '{',
            ']': '['
        }

        for char in s:
            # 스택 마지막 요소 꺼내서 확인, 비어있으면 # 반환
            if char in mapping:
                top_element = stack.pop() if stack else '#'
                if mapping[char] != top_element:
                    return False
            else:
                stack.append(char)

        return not stack
