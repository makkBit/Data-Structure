var Queue = function (){

    var collection = [];
    this.print = function () {
        return collection;
    }
    this.enqueue = function (element) {
        if (collection.length === 0) {
            collection.push(element)
        } else {
            var inserted = false;
            for (var i = 0; i < collection.length; i++) {
                if (element[1] < collection[i][1]) {
                    collection.splice(i, 0, element);
                    inserted = true;
                    break;
                }
            }
            if (!inserted) {
                collection.push(element);
            }
        }
    }
    this.dequeue = function() {
        collection.shift();
        return collection;
    }
    this.front = function() {
        return collection[0];
    }
    this.size = function() {
        return collection.length;
    }
    this.isEmpty = function() {
        return collection.length === 0;
    }
}

var q = new Queue();
q.enqueue(['mahak', 2]);
q.enqueue(['makk', 1]);
q.enqueue(['narayan', 3]);
q.enqueue(['singh', 2]);
console.log(q.print());