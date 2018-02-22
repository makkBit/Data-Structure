class Node{
	constructor(data,left=null,right=null){
		this.data = data;
		this.left = left;
		this.right = right;
	}
}


class BST{
	constructor(){
		this.root = null;
	}
	add(data){
		const node = this.root;
		if(node === null){
			this.root = new Node(data);
			return;
		}
		else{
			const searchTree = (node) => {
				if( data < node.data ){
					if( node.left === null){
						node.left = new Node(data);
						return;
					}
					else if( node.left !== null)
						return searchTree(node.left);
				}
				else if( data > node.data ){
					if( node.right === null){
						node.right = new Node(data);
						return;
					}
					else if( node.right !== null ){
						return searchTree(node.right);
					}
				}
				else
					return null;
			};
			return searchTree(node);
		}
	}

	findMin(){
		let current = this.root;
		while(current.left !== null){
			current = current.left;
		}
		return current.data;
	}

	findMax(){
		let current = this.root;
		while(current.right !== null){
			current = current.right;
		}
		return current.data;
	}

	isPresent(data){
		let current = this.root;
		while( current ){
			if( data === current.data )
				return true;
			else if( data < current.data )
				current = current.left;
			else if( data > current.data )
				current = current.right;
		}
		return false;
	}

	delete(data){ 
		const deleteNode = (node, data) => {
			if( node == null )
				return null;
			if( data == node.data ){
				if( node.left == null && node.right == null){
					return null;
				}
				// node has no left child 
		        if (node.left == null) {
		          return node.right;
		        }
		        // node has no right child 
		        if (node.right == null) {
		          return node.left;
		        }
		        // node has two children 
		        var tempNode = node.right;  // 30
		        while (tempNode.left !== null) {
		          tempNode = tempNode.left;
		        }
		        node.data = tempNode.data;
		        node.right = deleteNode(node.right, tempNode.data);
		        return node;
			}
			else if( data < node.data ){
				node.left = deleteNode( node.left, data );
				return node;
			}
			else if( data > node.data){
				node.right = deleteNode( node.right, data );
				return node;
			}
		}
		this.root = deleteNode(this.root, data);
	}

	printInOrder(){
		var traverse = node => {
			if( node === null )
				return;
			traverse(node.left);
			result.push(node.data);
			traverse(node.right);
		}
		var result = [];
		traverse( this.root );
		return result;
	}

	printPreOrder(){
		var traverse = node => {
			if( node === null )
				return;
			arr.push(node.data);
			traverse(node.left);
			traverse(node.right);
		}
		var arr = [];
		traverse(this.root);
		return arr;
	}

	printPostOrder(){
		var traverse = node => {
			if( node === null )
				return;
			traverse(node.left);
			traverse(node.right);
			arr.push(node.data);
		}
		var arr = [];
		traverse(this.root);
		return arr;
	}

	printLevelOrder(){
		var result = [];
		var Q = [];
		Q.push(this.root);

		while(Q.length > 0){
			var node = Q.shift();
			result.push( node.data );
			if( node.left !== null)
				Q.push( node.left );
			if( node.right !== null)
				Q.push( node.right );
		}
		return result;
	}

	findHeight(node = this.root){
		if( node === null )
			return -1;
		let left = this.findHeight( node.left );
		let right = this.findHeight( node.right );
		return Math.max(left,right)+1;
	}

	findSum( sum, node=this.root ){
		if(node === null){
	        return false;
	    }
		    
	    if(node.val === sum && node.left === null && node.right === null){
	        return true;
	    }
	    
	    return this.findSum(node.left, sum - node.val) || 
	    	this.findSum(node.right, sum - node.val);
	}
		
}


const bst = new BST();
bst.add(9);
bst.add(4);
bst.add(17);
bst.add(3);
bst.add(6);
bst.add(22);
bst.add(5);
bst.add(7);
bst.add(20);
// var n = 16;
// console.log(bst.findSum(n))
// console.log(bst);
// console.log('inorder: ',bst.printInOrder());
// console.log('preorder: ',bst.printPreOrder());
// console.log('postorder: ',bst.printPostOrder());
// console.log('levelorder: ',bst.printLevelOrder());
// console.log('heightOfTheTreeIs: ',bst.findHeight());






























