1) if |V| = n  
then,   
```
|E| <= n(n-1)  // if directed  
|E| <= n(n-1)/2   // if undirected  
*|V| and |E| stands for no of vertixes and edges*
 ```

2) Graph Representation

### a) Edge List  
Two list: vertex list, edge list  

Edge list Representation:  
```
startingVertex, endingVertex, weight  

A,B,5  
A,C,7  
A,D,3  
```
better store indexes..  
```
0,1,5  
0,2,7  
0,3,7
```
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

note:  
for weighted graph, use weight itself
instead of 1 for A[ij]  

Drawback of Adjacency Matrix:  
consumes a lot of memory for storing the zero  
SO ITS GOOD TO USE WHEN THE GRAPH IS DENSE  


### c) Adjacency List  
Keep only list of nodes, which are connected.  

Representation:
```  
0 - {1,2,3}  // => A - {B,C,D} 
1 - {0,4,5}
2 - {0,6}
3 - {0,7}
4 - {1,7}
5 - {1,7}
6 - {2,7}
7 - {3,6,4,5}
```
```javascript
let A = [];
A[0] = new Array[3]
A[1] = new Array[3]
A[2] = new Array[2]
..
..
A[7] = new Array[4]
```
*Space Cost*
Consumes lot less memory as compared to adjacency matrix.
Space = O(|E|)    

*Time Cost*
Check if two nodes are connected
= O(V) or   
= O(log V) // if sorted  

Finding adjacent nodes
= O(V)



### 4) Operation: To add a new edge:  
in adjacency matrix: 
```javascript 
A[ij] = 1  //before 0  //for addition
A[ij] = 0  //before 1  //for deletion
```

in adjacency list:
```
0 - [1,2,3]  //before
// adding new vertex 6
0 - [1,2,3,6]   //after

-> create new array at A[0]
-> copy content of old array
-> write new value
-> wipe out old value if any
^ costly operation

solution?
=> use linked list, instead of array

A[0] = [1,next] -> [2,next] -> [3,null]
// adcency list

A[0] = [1,50,next] -> [2,100,next] -> [3,70,null]
// for weighted graph

note: 
use bst instead of linked list to further improve
performance of operations like inserting, searching, deleting a neighbour may reduce
```
