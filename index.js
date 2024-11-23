// Data Structure : A Data Structure is a specific way of organizing storing , and accessing data.
// Aasan lafzon mein, Data Structure woh framework hai jo data ko achi tarah organize karne mein madad karta hai taa keh humara software tezi se aur behtari se kaam kar sake.

// Data Structure
let StudentData = ['Zain', 'Daniyal', 'Shahmeer', 'Hamza', 'Omais']


//Algorithum : A set of instructions that tells a computer how to do something, or you can also say step-by-step solution of the problem is called algorithum.
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

let StudentDataBase = ['Zain', 'Daniyal', 'Shahmeer', 'Hamza', 'Omais']
// Algorithm for finding a specific user 
const findStudent = (allStudent, StudentName) => {
    for (let i = 0; i < allStudent.length; i++){
      if(allStudent[i] === StudentName){
        console.log(`Found ${StudentName}`);
    }
      
    }
}
findStudent(StudentDataBase,"Hamza")

// What is BigO :
// Big O  notations helps us understand how long an algorithum wil take to run or how much memory it will need as the amount of data it handles grows .
/* 
Aasan lafzon mein, Big O notation ek tareeqa hai jis se hum yeh samajhte hain keh kisi algorithm ko chalane mein kitna waqt (time) ya memory (space) lagegi jab hum data ka size barha den.
Big O notation humay algorithms ko compare karne mein madad karta hai taa keh hum sabse efficient algorithm ko choose kar saken jo kam waqt mein kaam kar sake.
*/

/*
O(n):Signifies that the execution time of the algorithum grows linearly in proportion to the size of the input data(n) 
Jab input size double hota hai, toh time bhi double hota hai. Isay "Linear Time" kehte hain.
*/
//Example : 
let groceries = ["milk", "bread", "eggs", "flour", "cheese", "sugar"]
const searchForItem = (item) => {
    for(let i = 0; i<groceries.length; i++){
        if(groceries[i] === item){
            console.log(`Found : ${item}`);
      
          }
        }
        for(let j = 0; j<groceries.length; j++){{
            if(groceries[j] === item){
                console.log(`Found ${item} 2`);
          
              }
            }}
            for(let k = 0; k<groceries.length; k++){{
                if(groceries[k] === item){
                    console.log(`Found ${item} 3`);
      
                  }
                }}
              }
              searchForItem("flour");
              
              
              

/* 
O(1) also known as constant time, signifies that the execution time of an algorithum remains constant regardless of the input size 
O(1): Jab input size barhta hai lekin time ya resources par koi asar nahi padta. Isay "Constant Time" kehte hain.
Example : 
*/
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 
  39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 
  57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 
  75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 
  93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 
  109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 
  124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 
  139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 
  154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 
  169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 
  184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 
  199, 200]
let getElemet = (numbers, index) => numbers[index]
console.log(getElemet(numbers, 56));


/*  
O(n²): indicates that the algorithum's execution time grows quadratically with the size of the input data (represented by n).
Jab input size double hota hai, toh time quadruple (4 guna) ho jata hai. Isay Quadratic Time kehte hain.
Example : 
*/
function findPairs(arr) {
  // O(n²)
  for(i = 0;i<arr.length; i++){
    for(let j = i + 1;  j<arr.length ; j++ ){
      console.log(`Found i ${arr[i]}, j${arr[j]}`);
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
let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 
    39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 
    57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 
    75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 
    93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 
    109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 
    124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 
    139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 
    154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 
    169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 
    184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 
    199, 200];
findPairs(number)




/*
O(log n) : 
O(log n) time complexity refers to an algorithum's runtime that grows logarithmically with the size of the input (represented by n) . In simpler terms, as the input size increases, the time it takes for the algorithum to run increases slowly .
O(log n) ka matlab hai ke ek algorithm ki time complexity logaritmik tareeke se barhti hai, yaani input size ke barhne ke bawajood, operations ki taadaad dheere dheere barhti hai, kyunki algorithm har qadam par input size ko aadha karta hai.
*/

let count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 
  39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 
  57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 
  75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 
  93, 94, 95, 96, 97, 98, 99, 100];
  let target = 45;
  function BinarySeach(arr, target){
    let start = 0;
    let end = arr.length -1 
    while (start <= end ) {
      mid = Math.floor((start + end ) / 2);
      if(arr[mid] === target){
        return mid;
      }
      else if(arr[mid] > target){
        end = mid - 1
      }
      else{
        start = mid + 1
      }
    }
    return -1 ;
  }
  let indexOfTarget = BinarySeach(count,target )
  console.log(`Number ${target} found at index : ${indexOfTarget}`);
  



 const count2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 
  39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 
  57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 
  75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 
  93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 
  109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 
  124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 
  139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 
  154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 
  169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 
  184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 
  199, 200]
  targetNumber = 45; 
  function BinarySearchNumber(arr, target){
    let start = 0 
    let end = arr.length - 1
    while (start <= end){
      mid = Math.floor((start + end) / 2 )
      console.log("mid", mid);
//       // jab mid target ke equal ho 
      if(arr[mid] === target){
        return mid;
      }
//       // jab mid bara ho target se 
      else if(arr[mid] > target){
        end = mid - 1
        console.log("end", end);
      }
//       // jab mid target se chota ho 
      else{
        start = mid + 1
        console.log("start", start);
      }
    }
    return -1;
  
  }
  let indexTarget = BinarySearchNumber(count2,  targetNumber)