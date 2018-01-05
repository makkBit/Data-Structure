
/*
left child: i * 2
right child: i * 2 + 1
parent: i / 2
*/

class MinHeap {
    constructor(){
        this.heap = [null];
    }
    parent(i){
        return Math.floor(i/2);
    }
    leftChild(i){
        return i * 2;
    }
    rightChild(i){
        return (i*2) + 1;
    }
    insert(element){
        if( this.heap.length === 1){
            this.heap.push(element);
        }
        else{
            this.heap.push(element);
            let i = this.heap.length-1;
            while( this.heap[i] < this.heap[this.parent(i)] &&
                this.heap.indexOf(this.heap[i]) != 1 ){
                let temp = this.heap[i];
                [this.heap[i], this.heap[Math.floor(i/2)]] =
                [this.heap[Math.floor(i/2)], this.heap[i]];
                i = this.heap.indexOf(temp);
            }  
        }
    }
    decrease(element, new_val){
        let i = this.heap.indexOf(element); 
        this.heap[i] = new_val;
        while(this.heap[i] < this.heap[this.parent(i)] ){
            [ this.heap[i], this.heap[Math.floor(i/2)] ] = 
            [ this.heap[Math.floor(i/2)], this.heap[i] ];
        }
    }
    extractMin(){
        let min = this.heap[1];
        this.heap[1] = this.heap[this.heap.length-1]
        this.heap.pop();
        this.heapify(1);
        return min;
    }
    delete(element){
        console.log('coming soon..');   
    }
    heapify(i){
        let l = this.leftChild(i);
        let r = this.rightChild(i);
        if( this.heap[l] < this.heap[i] ){
            [this.heap[l], this.heap[i]] =
             [this.heap[i], this.heap[l]];
            this.heapify(l);
        }
        else if (this.heap[r] < this.heap[i]) {
            [this.heap[r], this.heap[i]] =
             [this.heap[i], this.heap[r]];
            this.heapify(r);
        }
    }
}

let h = new MinHeap();
h.insert(5);
h.insert(10);
h.insert(20);
h.insert(1);
h.insert(3);
h.insert(25);
h.insert(2);
console.log(h.heap);
console.log(h.extractMin());
console.log(h.heap);

 