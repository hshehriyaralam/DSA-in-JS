// Data Structure : A Data Structure is a specific way of organizing storing , and accessing data.
// Aasan lafzon mein, Data Structure woh framework hai jo data ko achi tarah organize karne mein madad karta hai taa keh humara software tezi se aur behtari se kaam kar sake.

// Data Structure
let StudentDataBase = ['Zain', 'Daniyal', 'Shahmeer', 'Hamza', 'Omais']


//Algorithum : A set of instructions that tells a computer how to do something, or you can also say step-by-step solution of the problem is called algorithum.

//Aasan lafzon mein, Algorithm woh formula ya tareeqa hai jo humein batata hai keh kisi maslay ko kaise solve karna hai ya koi kaam kaise karna hai. Har qadam munazzam hota hai aur ek tareeke se anjaam diya jata hai taa keh humara maqsood hasil ho sake.

/* Aasan lafzon mein, Algorithm woh formula ya tareeqa hai jo humein batata hai keh kisi maslay ko kaise solve karna hai ya koi kaam kaise karna hai. Har qadam munazzam hota hai aur ek tareeke se anjaam diya jata hai taa keh humara maqsood hasil ho sake 
Misal ke taur par, agar aapko chai banana seekhna hai, to aap chai banane ka ek algorithm bana sakte hain:
Pani garam karo.
Pani mein chai pati daalo.
Shehad ya cheeni daalo.
Doodh milao.
Pani ko ubalne do.
Chai ko cup mein daal lo.
Yeh ek algorithm hai chai banane ka — har qadam tareeke se follow kiya jata hai taa keh chai ban sake. Algorithm ka maksad hota hai kisi bhi problem ko logical aur systematic tareeke se solve karna.
*/


// Algorithm for finding a specific user 
// const findStudent = (allStudent, StudentName) => {
//     for (let i = 0; i < allStudent.length; i++){
//       if(allStudent[i] === StudentName){
//         console.log(`Found ${StudentName}`);
//     }
      
//     }
// }

// findStudent(StudentDataBase,"Hamza")

// What is BigO :
// Big O  notations helps us understand how long an algorithum wil take to run or how much memory it will need as the amount of data it handles grows .

/* 
Aasan lafzon mein, Big O notation ek tareeqa hai jis se hum yeh samajhte hain keh kisi algorithm ko chalane mein kitna waqt (time) ya memory (space) lagegi jab hum data ka size barha den.


Big O notation humay algorithms ko compare karne mein madad karta hai taa keh hum sabse efficient algorithm ko choose kar saken jo kam waqt mein kaam kar sake.
*/

/*
O(n):Signifies that the execution time of the algorithum grows linearly in proportion to the size of the input data(n) 
O(n): Jab input size double hota hai, toh time bhi double hota hai. Isay Linear Time kehte hain.
*/
//Example : 
// let groceries = ["milk", "bread", "eggs", "flour", "choose", "sugar"]
// const searchForItem = (item) => {
  //   for(let i = 0; i<groceries.length; i++){
    //     if(groceries[i] === item){
      //       console.log(`Found : ${item}`);
      
      //     }
      //   }

      //   for(let j = 0; j<groceries.length; j++){{
        //     if(groceries[j] === item){
          //       console.log(`Found ${item} 2`);
          
          //     }
          //   }}
          
          //   for(let k = 0; k<groceries.length; k++){{
            //     if(groceries[k] === item){
              //       console.log(`Found ${item} 3`);
      
              //     }
              //   }}
              // }
              // searchForItem("flour");
              
              
              

/* 
O(1) also known as constant time, signifies that the execution time of an algorithum remains constant regardless of the input size 
O(1): Jab input size barhta hai lekin time ya resources par koi asar nahi padta. Isay Constant Time kehte hain.
Example : 
*/
// let numbers = [1,2,3,4,5]
// let getElemet = (numbers, index) => numbers[index]
// console.log(getElemet(numbers, 2));


/*  
O(n²): indicates that the algorithum's execution time grows quadratically with the size of the input data (represented by n).
O(n²): Jab input size double hota hai, toh time quadruple (4 guna) ho jata hai. Isay Quadratic Time kehte hain.
Example : 
*/

function findPairs(arr) {

  // O(n²)
  for(i = 0;i<arr.length; i++){
    for(let j = i + 1;  j<arr.length ; j++ ){
      console.log(`Found ${arr[i]}, ${arr[j]}`);
      
    }
  } 
  //n 
  for(q = 0; q<=arr.length; q++){
    console.log("----------",q);
    
  }


  /* If we combine all the "0" operations it becomes O(n² +n)
  O(n²) is a Dominant term 
  "n" is a non-Dominant term 
  So we remove the "non-Dominant" term ad we're only left with O(n²)
  This way, we simplify our  BigO
  */
}


let number = [1,2,3,4,5];
findPairs(number)
