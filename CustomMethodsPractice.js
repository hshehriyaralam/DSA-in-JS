class CustomMethods {
    // initial values 
    constructor(){
        this.length = 0;
        this.data = {}
    }
    // Custom Get method
    get(item){
        return this.data[item]
    }
    
    // Custom Push Method
    push(item){
     this.data[this.length] = item
     this.length++;     
     return this.length;
        
    }

    // custome Pop Method
    pop(){
        let lastElement = this.data[this.length - 1]
        delete this.data[this.length - 1]
        this.length--;
        return lastElement;
    }
    //Custom Shift Method
    shift(){
        let FirstElement = this.data[0]
        console.log("FirstElement", FirstElement);

        for(let i = 0 ; i<this.length - 1 ; i++){
            this.data[i] = this.data[i + 1]
        }
        delete this.data[this.length - 1]
        this.length--;
        return FirstElement;

    }
    
    // Unshift
    unshift(item){
       for(let i = this.length; i>0 ; i--){
        this.data[i] = this.data[i- 1]
       }
       this.data[0] = item;
       this.length++;
       return this.length;
    }

    //  DeleteByIndex
    deleteByIndex(index){
         let deleteBy = this.data[index]
        for(let i = index; i<this.length - 1 ; i++){
            this.data[i] = this.data[i + 1]
        }
        delete this.data[this.length - 1]
        this.length--;
        return deleteBy;
    }
        
}

let CustomeArrays = new CustomMethods()
console.log(CustomeArrays);

//Push
CustomeArrays.push(10)
CustomeArrays.push(20)
CustomeArrays.push(30)
CustomeArrays.push(40)

// **GET**
console.log(CustomeArrays.get(1));

// **Pop**
CustomeArrays.pop()
CustomeArrays.pop()
CustomeArrays.pop()

// ** Shift **
CustomeArrays.shift()


// ** Unshift **
CustomeArrays.unshift("Shahmeer")
console.log(CustomeArrays);

// ** Delete By Index **
CustomeArrays.deleteByIndex(0);

// Final Call
console.log(CustomeArrays);