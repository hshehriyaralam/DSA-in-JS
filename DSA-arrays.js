/* Challenges : 
Reverse Strings , Palindromes, Integar Reversal, Sentence Capitalization, FizzBuzz, MaxProfit , Array Chunk, Two Sum
*/


// Array DS : Data Structure array is an ordered collection of elements that can be accessed using a numeriacl index. DS array (Data Structure Array) aik aise data structure ko kehte hain jo similar type ke elements ko ek sath store karta hai. Matlab, array ek ordered collection hota hai jisme same type ke data items (jaise integers, strings, etc.) rakhe jaate hain.
let DSArray = ["a", 1 ,true, "b", 2 , false];

let StringArr = ['a', 'b', 'c'];
let numberArr = [1,2,3,4,5,6]
let mixed = ['a', 2, true, undefined , null , {a:'a'}, ['b']];
console.log("mixed", mixed);




// Custome Array 
class MyArray {
    constructor (){
        this.length = 0;
        this.data = []        
    }
    push(item){
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }
    display(){
        console.log(`lenght: ${this.length}  Data: ${this.data}`);
        
    }
}

let myNewArray = new MyArray()
myNewArray.push('apple')
myNewArray.push('mango')
myNewArray.push('orange')
myNewArray.push('banana')
myNewArray.display()
