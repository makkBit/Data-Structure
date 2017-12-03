class Node:
    def __init__(self, initData):
        self.data = initData
        self.next = None

    def setData(self, newData):
        self.data = newData

    def setNext(self, newNext):
        self.next = newNext


class LinkedList:
    def __init__(self):
        self.head = None

    def getHead(self):
        return self.head.data

    def isEmpty(self):
        return self.head == None

    def add(self, data):
        temp = Node(data)
        temp.setNext(self.head)
        self.head = temp

    def search(self, data):
        if self.head.data == data:
            return True
        pointer = self.head
        while(pointer):
            if pointer.data == data:
                return True
            pointer = pointer.next

    def size(self):
        count = 0
        pointer = self.head
        while(pointer):
            count += 1
            pointer = pointer.next
        return count
    def remove(self, data):
        pointer = self.head
        previousNode = None
        while(pointer):
            if pointer.data == data:
                previousNode.next = pointer.next
            previousNode = pointer
            pointer = pointer.next



ll = LinkedList()
ll.add(54)
ll.add(26)
ll.add(93)
ll.add(17)
ll.add(77)
ll.add(31)

print ll.getHead()
print ll.search(26)
ll.remove(93)
print ll.size()

