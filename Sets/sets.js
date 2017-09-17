function MySet(){
    this.values = [];
    this.count = 0;
}

MySet.prototype.add = function(e){
    if( !this.has(e) ){
        this.values.push(e);
        this.count++;
    }
    return this.values;
}

MySet.prototype.has = function(e){
    return (this.values.indexOf(e) !== -1);
}

MySet.prototype.remove = function(e){
    var index = this.values.indexOf(e);
    if( this.has(e) ){
        this.values.splice(index, 1);
        this.count--;
    }
    return -1;
}

MySet.prototype.total = function(){
    return this.values.length
}

MySet.prototype.union = function(set){
    var unionSet = new MySet();
    var firstSetValues = this.values;
    var secondSetValues = set.values;
    firstSetValues.forEach(e => {
        unionSet.add(e);
    });
    secondSetValues.forEach(e => {
        unionSet.add(e);
    });
    return unionSet;
}

MySet.prototype.intersection = function(set){
    var intersectionSet = new MySet();
    var firstSetValues = this.values;
    firstSetValues.forEach(e => {
        if(set.has(e))
            intersectionSet.add(e)
    });
    return intersectionSet;
}

MySet.prototype.difference = function(set){
    var differenceSet = new MySet();
    var firstSetValues = this.values;
    firstSetValues.forEach(e => {
        if( !set.has(e))
            differenceSet.add(e);
    });
    return differenceSet;
}

MySet.prototype.subset = function(set){
    var firstSetValues = this.values;
    return firstSetValues.every( e => set.has(e));
}

var set1 = new MySet();
var set2 = new MySet();
set1.add(5);set1.add(4);set1.add(18);set1.add(3);
set2.add(15);set2.add(14);set2.add(18);set2.add(3);set2.add(5);set2.add(4);

console.log(set1.union(set2));
console.log(set1.intersection(set2));
console.log(set1.difference(set2));
console.log(set1.subset(set2));

