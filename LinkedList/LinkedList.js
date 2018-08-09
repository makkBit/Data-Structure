
class Node{
  constructor(element){
    this.element = element;
    this.next = null;
  }
};

class LinkedList{
  constructor(){
    this.length = 0;
    this.head = null;
  }
  size() {
    return this.length;
  }
  getHead() {
    return this.head;
  }
  isEmpty(){
    return this.length === 0;
  }
  indexOf(element){
    let index = 0;
    let current = this.head;
    while(current){
      index++;
      if( current.element === element )
        return index-1;
      current = current.next;
    }
    return -1;
  }
  add(element){
    const node = new Node(element);
    if (this.head === null) {
      this.head = node;
    } else {
      let current = this.head;
      while (true) {
        if (current.next === null) {
          current.next = node;
          this.length++;
          return;
        }
        current = current.next;
      }
    }
  }
  remove(element) {
    if (this.head === null) {
      return null;
    }
    let currentNode = this.head;
    let previousNode = null;
    if (currentNode.element === element) {
      head = currentNode.next;
    } else {
      while (currentNode.element !== element) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      previousNode.next = currentNode.next;
    }
  }
  iterateRecursively(k) {
    return this.iterateRecursivelyUtil(this.head);
  }
  iterateRecursivelyUtil(node) {
    if (node.next === null) {
      return node;
    }
    return this.iterateRecursivelyUtil(node.next);
  }
}


const ll = new LinkedList();
ll.add('mahak');
ll.add('jeff');
ll.add('matt');
ll.add('jason');
ll.add('fin');
ll.remove('matt');
// console.log(ll.getHead());
// console.log(ll.indexOf('matt'));
console.log(ll.iterateRecursively());