class Stack:
    def __init__(self):
        self.size = 0
        self.list = []
    def isEmpty(self):
        return self.size == 0
    def push(self, data):
        self.list.append(data)
        self.size+=1
    def pop(self):
        self.list.pop()
        self.size-=1
    def peek(self):
        return self.list[len(self.list)-1]

stck = Stack()
stck.push(10)
stck.push(35)
stck.push(100)
stck.pop()
print stck.size
print stck.list
print stck.peek()
print stck.isEmpty()

