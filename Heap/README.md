1) Complete Binary Tree. Suitable to be stored in array.

2) Min Heap or Max Heap. 
The key at root must be minimum or maximum among all keys present in Binary Heap. 
The same property must be recursively true for all nodes in Binary Tree.

3) left child: i * 2
right child: i * 2 + 1
parent: i / 2

4) Applications:

   * heap sort
   * Priority Queue
   * graph algorithms like Dijkstra’s Shortest Path and Prim’s Minimum Spanning Tree.

5) Operations on min heap:
   * insert
   * delete
   * decreaseKey
   * extractMin()
     * removes min element
   * getMini
     * returns min or root element