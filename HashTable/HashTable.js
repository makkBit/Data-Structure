
var hash = (string, limit) => {
    var value = 0;
    string.split('').forEach(c => value+= c.charCodeAt(0));
    return value % limit;
}

var hashTable = function(){

    var storage = [];
    const storageLimit = 14;

    this.print = function(){
        return storage;
    }

    this.add = function(key, value){
        var index = hash(key, storageLimit);
        // no collision
        if( storage[index] === undefined )
            storage[index] = [ [key,value] ]
        // collision
        else{
            var inserted = false;
            // object key already present
            for (var i = 0; i < storage[index].length; i++) {
                if( storage[index][i][0] === key ){
                    storage[index][i][1] = value;
                    inserted = true;
                }                
            }
            // new object
            if( inserted === false )
                storage[index].push([key,value]);
        }
    }

    this.lookup = function(key){
        var index = hash(key, storageLimit);
        if( storage[index] === undefined)
            return undefined;
        else {
            for (var i = 0; i < storage[index].length; i++) {
                if( storage[index][i][0] === key ){
                    return storage[index][i][1];
                }             
            }
        }
    }

    this.remove = function(key){
        var index = hash(key, storageLimit);
        if( storage[index] === undefined )
            return undefined;
        else{
            if( storage[index].length === 1 )
                delete storage[index];

            else{
                for( var i=0; i< storage[index].length; i++){
                    if( storage[index][i][0] === key){
                        storage[index].splice(i,1);
                    }
                }
            }
        }
    }

}


var ht = new hashTable();
ht.add('mahak','coder');
ht.add('makk','designer')

console.log(ht.print());
console.log(ht.lookup('mahak'));

ht.remove('makk');
console.log(ht.print());