/* Challenges : 
Reverse Strings , Palindromes, Integar Reversal, Sentence Capitalization, FizzBuzz, MaxProfit , Array Chunk, Two Sum
*/


// Array DS : Data Structure array is an ordered collection of elements that can be accessed using a numeriacl index. DS array (Data Structure Array) aik aise data structure ko kehte hain jo similar type ke elements ko ek sath store karta hai. Matlab, array ek ordered collection hota hai jisme same type ke data items (jaise integers, strings, etc.) rakhe jaate hain.
let DSArray = ["a", 1 ,true, "b", 2 , false];

let StringArr = ['a', 'b', 'c'];
let numberArr = [1,2,3,4,5,6]
let mixed = ['a', 2, true, undefined , null , {a:'a'}, ['b']];
// console.log("mixed", mixed);




// Custome Array 
class CustomArray{
    constructor(){
        this.length = 0;
        this.data = {};
    }
      // Custom get method 
      get(index){
        return this.data[index] 
    }
    push(item){
        this.data[this.length] = item;   //"Array ke current length ke index par naya item assign karo."
        // data :{this.length : 0 } = item
        this.length++;
        return this.length;
    }
    pop(){
        let lastItem = this.data[this.length -1]
        // console.log("------------", lastIndex);
        delete this.data[this.length -1];
        this.length--;
        return lastItem;
    }
    shift(){
        let firstItem = this.data[0];
        for(let i = 0; i<this.length - 1; i++){
            this.data[i] = this.data[i + 1]
        }
        delete this.data[this.length - 1]
        this.length--;
        return firstItem;
    }
    unshift(item){
        for(let i = this.length; i>0; i--){
            this.data[i] = this.data[ i -1 ]
        }
        this.data[0] = item;
        this.length++;
        return this.length;
    }
    DeleteByIndex(index){
        let DeleteBy = this.data[index]
        
        for(let i = index ; i < this.length - 1; i++){
            this.data[i] = this.data[ i + 1];
        }

       delete this.data[this.length - 1]
       this.length--;
       return DeleteBy;
        
    }
}

let myArray = new CustomArray();
myArray.push("Shahmeer")
myArray.push("Sherry")
myArray.push("Zain")
console.log(myArray);
console.log(myArray.get(0))
console.log(myArray.get(1))
myArray.pop()
console.log(myArray);
myArray.shift()
console.log(myArray);
myArray.unshift("shahmeer")
console.log(myArray);
myArray.DeleteByIndex(1)
console.log(myArray);


