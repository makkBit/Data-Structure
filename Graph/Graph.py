class Graph:
    def __init__(self):
        self.vertices = []
        self.edges = [None] * 65
        self.noOfEdges = 0

    def addVertex(self, v):
        self.vertices.append(v)
        self.edges[v] = []

    def addEdge(self, v1, v2):
        self.edges[v1].append(v2)
        self.edges[v2].append(v1)
        self.noOfEdges = self.noOfEdges+1

    def removeEdge(self, v1, v2):
        self.edges[v1].remove(v2)
        self.edges[v2].remove(v1)
        self.noOfEdges = self.noOfEdges-1

    def removeVertex(self, v):
        self.vertices.remove(v)
        while len(self.edges[v]):
            last = len(self.edges[v])-1
            adjacentVertex = self.edges[v][last]
            self.removeEdge(adjacentVertex, v)

    def size(self):
        return len(self.vertices)

    def relations(self):
        return self.noOfEdges

    def traverseDFSUtil(self, v, visited):
        visited[v] = True
        for i in range(0, len(self.edges[v])):
            vertex = self.vertices[i]
            if not visited[self.edges[v][i]]:
                self.traverseDFSUtil(self.edges[v][i], visited)

    def traverseDFS(self, v):
        visited = [None] * 65
        self.traverseDFSUtil(v, visited)
        self.printTraversal('DFS', visited)

    def traverseBFS(self, v):
        visited = [None] * 65
        queue = []
        visited[v] = True
        queue.append(v)

        while len(queue) > 0:
            s = queue.pop(0)
            for i in range(0, len(self.edges[s])):
                if not visited[self.edges[s][i]]:
                    visited[self.edges[s][i]] = True
                    queue.append(self.edges[s][i])
        self.printTraversal('BFS', visited)

    def printTraversal(self, type, arr):
        print('performing '+type + ' traversal..')
        for i in range(0, len(arr)):
            if arr[i] is True:
                print i


g = Graph()
g.addVertex(5)
g.addVertex(7)
g.addVertex(10)
g.addVertex(8)
g.addEdge(5, 7)
g.addEdge(5, 10)
g.addEdge(7, 8)
g.addEdge(10, 8)
print(g.vertices)
print(g.edges)
g.traverseDFS(5)
g.traverseBFS(7)
