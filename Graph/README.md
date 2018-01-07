1) Undirected Graph and Directed Graphs

2) if |V| = n  
then,   
|E| <= n(n-1)   // if directed  
|E| <= n(n-1)/2 // if undirected
 

2)
Graph Representation

### a) Edge List  
Two list: vertex list, edge list
Edge list:
startingVertex, endingVertex, weight
A,B,5  
A,C,7  
A,D,3  
better store indexes..  
0,1,5  
0,2,7  
0,3,7
```javascript
class Edge{
    let startVertex;
    let endVertex;
    let weight; // for weighted graph
}
```

*Memory Cost:*  
 Vertex List + Edge List  
 = O(|v|) + O(|E|)  // no of vertices and edges  

*Time Cost:*   
 finding all nodes connected directly to a given node  
 = O(|E|)   // have to scan the whole edge list  
 check if given nodes are connected  
 = O(|E|)  


### b) Adjacency Matrix
2-d array of size v * v  

A[ij] = 1 if edge exists, 0 otherwise  

Representation:
```
   0 1 2 3 4

0  0 1 1 1 0
1  1 0 0 0 1
2  0 1 0 0 1
3  1 0 1 0 1
4  0 1 0 1 0
```

Here, A (index 0) is connected to B,C,D (index 1,2,3)
and so on..

*Time Cost:*  
finding adjacent nodes  
= scan the vertex list, then scan its row in adjacency matrix  
= O(|V|) + O(|V|) = O(|V|)  
finding if two nodes are connected  
= O(1) // if indexes are given  
= O(V) // if names are given  
( use hash table to avoid this)  

note: for weighted graph, use weight itself
instead of 1 for A[ij]  

Drawback of Adjacency Matrix:  
consumes a lot of memory for storing the zero  
SO ITS GOOD TO USE WHEN THE GRAPH IS DENSE

