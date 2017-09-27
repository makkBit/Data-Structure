var Map = function(){

    var count = 0;
    this.collection = {};
    
    this.size = function(){
        return count;
    }

    this.set = function(key, value){
        this.collection[key] = value;
        count++;
    }

    this.has = function(key){
        return (key in this.collection);
    }

    this.get = function(key){
        return key in this.collection ? this.collection[key]: null;
    }

    this.delete = function(key){
        if( key in this.collection){
            delete this.collection[key];
            count--;
            return this.collection;
        }
        return "not found";
    }

    this.values = function(){
        var valuesArr = [];
        for( var key in this.collection){
            valuesArr.push(this.collection[key]);
        }
        return valuesArr.length > 0 ? valuesArr : null;
    }

    this.clear = function () {
        this.collection = {};
        count = 0;
    }

}


var m1 = new Map();
m1.set('mahak',21); 
m1.set('makk',25); 

console.log(m1);
console.log(m1.size());
console.log(m1.has('makk'));
console.log(m1.get('makk'));
console.log(m1.values());
console.log(m1.delete('mahak'));