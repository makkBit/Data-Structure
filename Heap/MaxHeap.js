/*
left child: i * 2
right child: i * 2 + 1
parent: i / 2
*/

class MaxHeap{
    constructor(){
        this.heap = [null];
    }
    parent(i){
        return Math.floor(i/2);
    }
    leftChild(i){
        return i*2;
    }
    rightChild(i){
        return (i*2)+1;
    }
    insert(element){
        if( this.heap.length === 1){
            this.heap.push(element);
        }
        else{
            this.heap.push(element);
            let i = this.heap.length-1;
            while(this.heap[i] > this.heap[this.parent(i)] &&
                this.heap.indexOf(this.heap[i]) != 1  ){
                let temp = this.heap[i];
                [this.heap[i], this.heap[this.parent(i)]] = 
                [this.heap[this.parent(i)], this.heap[i]];
                i = this.heap.indexOf(temp);
            }
        }
    }
    extractMax(){
        let max = this.heap[1];
        this.heap[1] = this.heap[this.heap.length-1];
        this.heap.pop();
        this.heapify(1);
        return max;
    }
    heapify(i){
        let l = this.leftChild(i);
        let r = this.rightChild(i);
        let greatest = i;
        if(this.heap[l] > this.heap[i]){
            greatest = l;
        }
        if(this.heap[r] > this.heap[greatest]){
            greatest = r;
        }
        if (this.heap[i] !== this.heap[greatest]) {
            [this.heap[i], this.heap[greatest]] =
            [this.heap[greatest], this.heap[i]];
            this.heapify(greatest);
        }
    }
    getMax(){
        return this.heap[1];
    }
    decrease(element, new_val){
        let i = this.heap.indexOf(element);
        this.heap[i] = new_val;
        while (this.heap[i] > this.heap[this.parent(i)]) {
            [this.heap[i], this.heap[this.parent(i)]] =
            [this.heap[this.parent(i)], this.heap[i]];
        }
    }
    delete(element){
        this.decrease(element, Infinity);
        this.extractMax();
    }
}

let h = new MaxHeap();
h.insert(20);
h.insert(5);
h.insert(65);
h.insert(1);
h.insert(100);
h.insert(30);
console.log(h.heap);
h.delete(65);
console.log(h.heap);