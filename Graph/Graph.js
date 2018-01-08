class Graph {
    constructor() {
        this.vertices = [];
        this.edges = [];
        this.noOfEdges = 0;
    }
    addVertex(v) {
        this.vertices.push(v);
        this.edges[v] = [];
    }
    removeVertex(v) {
        let i = this.vertices.indexOf(v);
        if (i > -1) {
            this.vertices.splice(i, 0);
        }
        while (this.edges[v].length) {
            const adjacentVertex = this.edges[v].pop();
            this.removeEdge(adjacentVertex, v);
        }
    }
    addEdge(v1, v2) {
        this.edges[v1].push(v2);
        this.edges[v2].push(v1);
        this.noOfEdges++;
    }
    removeEdge(v1, v2) {
        let i1 = this.edges[v1].indexOf(v2);
        let i2 = this.edges[v2].indexOf(v1);
        if (i1 > -1)
            this.edges[v1].splice(i1, 0);
        if (i2 > -1)
            this.edges[v2].splice(i2, 0);
    }
    size() {
        return this.vertices.length;
    }
    relations() {
        return this.numberOfEdges;
    }
    traverseDFSUtil(v, visited){
        // marks current node as visited
        visited[v] = true;
        console.log(v);
        // recur for all the vertices adjacent to this vertex
        for(let i=0; i<this.edges[v].length; i++){
            if(!visited[this.edges[v][i]]){
                this.traverseDFSUtil(this.edges[v][i], visited);
            }
        }
    }
    traverseDFS(v){
        console.log(`Traversing in DFS...`);
        let visited = [];
        this.traverseDFSUtil(v,visited);
    }
    traverseBFS(v) {
        console.log(`Traversing in BFS...`);
        let visited = [];
        let queue = [];
        // marks current vertex as visited and enqueue it
        visited[v] = true;
        queue.push(v);

        while(queue.length !== 0){
            // dequeue the vertex from queue and print it
            let s = queue.shift();
            console.log(Number(s));
            // get all adjacent vertices of the dequeued vertex
            // if not visited, mark it visited and enqueue it
            for(let i=0; i<this.edges[s].length; i++){
                if(!visited[this.edges[s][i]]){
                    visited[this.edges[s][i]] = true;
                    queue.push([this.edges[s][i]])
                }
            }
        }
    }
    print() {
        console.log(this.vertices.map(vertex => {
            return (`${vertex} -> ${this.edges[vertex].join(', ')}`);
        }, this).join(' \n '));
    }
}


const graph = new Graph();
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);
graph.addVertex(5);
graph.addVertex(6);
graph.addEdge(1, 2);
graph.addEdge(1, 5);
graph.addEdge(2, 3);
graph.addEdge(2, 5);
graph.addEdge(3, 4);
graph.addEdge(4, 5);
graph.addEdge(4, 6);
graph.print();
graph.traverseDFS(2)
graph.traverseBFS(1);