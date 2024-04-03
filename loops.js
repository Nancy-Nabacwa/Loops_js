/* No.1 Write a program that takes in an array of numbers and consoles the first four items multiplied by itself  and the last two added by 10.
 Return the array with the new values*/ 
const calculatedArray = (arr) =>{
      let newArr1 = [];
      let firstfour = arr.slice(0,4)
      newArr1 = firstfour.map(element => element*element)
      console.log({newArr1})

      let newArr2 = [];
      let lastTwo = arr.slice(-2,)
      newArr2 = lastTwo.map(element => element+10)
      console.log({newArr2})

      let newArr = [newArr1+ "," + arr.slice(5,-2)+ "," + newArr2]
      return {newArr}
      
}
let arr = [0,1,2,3,4,9,6,3,10]
console.log(calculatedArray(arr))


/* No.2 Write a program that takes in the following array and use a while loop 
to iterate and break when the item is equal to the fourth index :let arrNum = [1,2,3,4,5,6,7,8,9]; */
/*const breakAtFourth = (arrNum) =>{
      while(i<arrNum.length){
             if(i==4){
                 break;
            }

                  
      }
      
      
}
let arrNum = [1,2,3,4,5,6,7,8,9]
console.log(breakAtFourth(arrNum))

/*No.3 Write a function that takes in a an array of strings and use a continue statement
 when the item is at the second index:  let fruits= ['apple','plum','banana','strawberries','kiwi']*/
 const stringArr = (fruits) =>{
      for (let i = 0; i < fruits.length; i++) {
            if (i < fruits.length) {
              continue;
            }
            fruits = fruits[2] 
          }
      return fruits
 }
 let fruits = ['apple','plum','banana','strawberries','kiwi']
 console.log(stringArr(fruits))


 /* No.4 Write a function that accepts an array of strings and console.logs each element using a for loop*/
 const stringForLoop = (arrString) =>{
      for (let i = 0; i < arrString.length; i++) {
            console.log(arrString[i]);
      }
      return arrString
 }
 let arrString = ['apple','plum','banana','strawberries','kiwi','juice']
 console.log(stringForLoop(arrString))


 /* No.5 Write a JavaScript function that takes a string as input and reverses it using a while loop. 
 The function should return the reversed string. */
 const reverseString = (originalStr) =>{
      let reversedStr = "";
      for (let i = originalStr.length -1; i >= 0; i--) {
            while(i <= originalStr.length -1 && i>=0){
               reversedStr += originalStr[i];
            }
       
      }
     console.log(reversedStr);
     return reversedStr
 }
    let originalStr= "Hello World";
    console.log(reverseString(originalStr))