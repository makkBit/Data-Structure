class Node {
    constructor(){
        this.arr = [...Array(26)];
        this.isEnd = false;
    }
}

class Trie {
    constructor(){
        this.root = new Node();
    }
    insert(str){
        let current = this.root;
        for( let c of str){
            let index = c.charCodeAt(0) - 96;
            if( current.arr[index] === undefined ){
                current.arr[index] = new Node();
            }
            current = current.arr[index];
        }
        current.isEnd = true;
    }
    search(str){
        let current = this.root;
        for( let c of str){
            let index = c.charCodeAt(0) - 96;
            if( current.arr[index] )
                current = current.arr[index];
            else
                return false;
        }
        return current.isEnd === true;
    }
}


const myTrie = new Trie();
myTrie.insert('cab');
myTrie.insert('cac');
console.log(myTrie.search('c'));