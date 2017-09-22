
var Queue = function(){
 
    var collection = [];

    this.print = function(){
        return collection;
    }
    this.enqueue = function(element){
        collection.push(element);
        return collection;
    }
    this.dequeue = function(){
        collection.shift();
        return collection;
    }
    this.front = function(){
        return collection[0];
    }
    this.size = function(){
        return collection.length;
    }
    this.isEmpty = function(){
        return collection.length === 0;
    }

}


var q = new Queue();
q.enqueue('mahak'); q.enqueue('makk'); q.enqueue('narayan');
console.log(q);
console.log(q.print());
console.log(q.size());
console.log(q.isEmpty());
console.log(q.front());
console.log(q.dequeue());