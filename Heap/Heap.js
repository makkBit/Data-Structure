class MinHeap {
    constructor(){
        this.heap = [null];
    }
    insert(element){
        if( this.heap.length === 1){
            this.heap.push(element);
        }
        else{
            this.heap.push(element);
            let inserted = this.heap[this.heap.length-1];
            let parent = this.heap[Math.floor(this.heap.indexOf(inserted)/2)];
            while(inserted < parent ){
                let pi = this.heap.indexOf(parent);
                let ii = this.heap.indexOf(inserted);
                this.heap[pi] = inserted;
                this.heap[ii] = parent;
                parent = this.heap[Math.floor(this.heap.indexOf(inserted)/2)]; // 5
            }
        }
    }
}

const h = new MinHeap();
h.insert(5);
h.insert(10);
h.insert(20);
h.insert(1);
console.log(h.heap);


/*
left child: i * 2
right child: i * 2 + 1
parent: i / 2
*/