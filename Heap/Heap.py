from heapq import heappush, heappop, heapify

class MinHeap:
    def __init__(self):
        self.heap = []
    
    def parent(self, i):
        return (i-1)/2

    def insertKey(self, k):
        heappush(self.heap, k)

    def decreaseKey(self, i, new_val):
        self.heap[i] = new_val
        while(i!=0 and self.heap[i] < self.heap[self.parent(i)]):
            self.heap[i], self.heap[self.parent(i)] = (
            self.heap[self.parent(i)], self.heap[i])

    def extractMin(self):
        return heappop(self.heap)

    def getMin(self):
        return self.heap[0]

    def deleteKey(self, i):
        self.decreaseKey(i, float('-inf'))
        self.extractMin()


h = MinHeap()
h.insertKey(3)
h.insertKey(2)
h.deleteKey(1)
h.insertKey(15)
h.insertKey(5)
h.insertKey(4)
h.insertKey(45)

print h.heap
print h.extractMin()
print h.heap
print h.getMin()
h.decreaseKey(2,1)
print h.getMin()
