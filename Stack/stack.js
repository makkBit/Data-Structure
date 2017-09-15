let Stack = function( ){
	this.count = 0;
	this.storage = {};

	this.push = function( value ) {
		this.storage[this.count] = value;
		this.count++;
	}

	this.pop = function(){
		if( this.count === 0)
			return undefined
		delete this.storage[this.count-1];
		this.count--;
		return this.storage;
	}

	this.size = function(){
		return this.count;
	}

	this.peek = function(){
		return this.storage[this.count-1];
	}
}

var s1 = new Stack();
s1.push('google.com');
s1.push('facebook.com');
s1.push('github.com');
console.log(s1.storage);
console.log(s1.peek());