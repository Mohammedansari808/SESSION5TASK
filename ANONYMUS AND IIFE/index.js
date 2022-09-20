
//Anonymous function is nothing but we dont need to pass the values in the function
// iife stands for intermediate invoking function expression when a function is defined 
// it will execute immediately
console.log("Print odd numbers in an array")
// ANONYMOUS FUNCTION
let numbers = [1,2,3,4,5,6,7,8,9,10]
let number = function() {
    let total =""
    for (let num of numbers){
        if (num % 2!==0){
            total= total + num
            
        }
    }console.log(total.split(""))
}
number();
// IIFE
(function() {let totals= ""
    for (let num of numbers){
        
        if (num % 2!==0){
            totals = totals+num
        }
    }console.log(totals.split(""))

})()

// Convert all the strings to title caps in a string array
// ANONYMOUS FUNCTION
let names = [ "Apple","Orange","pineapple","strawberry"]
let nameUpp = ()=> {
    let final = ""
    for (let upp of names){
        final = final + upp.toUpperCase() +" "
    }console.log(final.trim().split(" "))
    
};
nameUpp();
// IIFE
(function() {
    let finals = ""
    for (let upp of names){
        finals = finals + upp.toUpperCase() +" "
    }console.log(finals.trim().split(" "))
    
})();
// Sum of all numbers in an array

// ANONYMOUS FUNCTION
// numbers =[1,2,3,4,5,6,7,8,9,10]

let sumOfAll = function(){
    let sum = 0
    for (let numb of numbers){
        sum += numb
    }console.log(Array.of(sum))
}
sumOfAll();

// IIFE

(function(){
    let sume = 0
    for (let numb of numbers){
        sume += numb
    }console.log(Array.of(sume))
})();

//Return all the prime numbers in an array
//// ANONYMOUS FUNCTION
var nn= 100
var primos =[];
let prime = function (){
   
    
    for (let i=0;i<nn;i++){
        let fake = true
        for (let j = 2;j<=i;j++){
            if (i%j==0 && j!=i){
                fake = false
            
            }
        }if (fake === true){
            primos.push(i)
        }
    
    }(console.log(primos))
    
}
prime() 



//IIFE
let likos =[];
(function() {

    for (let i=0;i<nn;i++){
        let fake = true
        for (let j = 2;j<=i;j++){
            if (i%j==0 && j!=i){
                fake = false
            
            }
        }if (fake === true){
            likos.push(i)
        }
    
    }(console.log(likos))
    
})()


// Return all the palindromes in an array
//// ANONYMOUS FUNCTION

let pali= 12321
let result=0;
let res=0;
let pal =function(){

    while(pali>0){
        res = pali%10
        pali= parseInt(pali/10)
        result = parseInt(result*10+res)
    }console.log(Array.of(result))
}
pal()
//IIFE
let resul=0;
let re=0;
(function(){
    while(pali>0){
        re = pali%10 
        pali = parseInt(pali/10) 
        resul = parseInt(resul*10+re)
    }console.log(Array.of(result));

})()

// Return median of two sorted arrays of the same size.
// ANONYMOUS FUNCITON
let array1 = [1,2,3,4,5,6,7,8,9,10]
let array2=[11,12,13,14,15,16,17,18,19,20]
let final=function(){
        if (array1.length%2===0){
            let value1=(array1.length/2)-1
            let value2=(array1.length/2)
            let mixvalue =(array1[value1]+array1[value2])/2
            console.log(mixvalue)
        }else{
            let val = (((array1.length+1)/2)-1)
            console.log(array1[val])
        }
    }

final()

let final2=function(){
    if (array2.length%2===0){
        let value1=(array2.length/2)-1
        let value2=(array2.length/2)
        let mixvalue =(array2[value1]+array2[value2])/2
        console.log(mixvalue)
    }else{
        let val = (((array2.length+1)/2)-1)
        console.log(array2[val])
    }
}

final2()

//Remove duplicates from an array
//ANONYMOUS FUNCTION


let numdu = [11,12,13,14,12,15,14]
let numdup = [...numdu].sort()
let duplicates =[]
let findDuplicates =function(){
    for (let i=0 ;i<numdup.length;i++){
        if (numdup[i]==numdup[i+1]){
            duplicates.push(numdup[i])
        }
    }console.log(duplicates)
}
findDuplicates()

//IIFE
let numdo = [11,12,13,14,12,15,14]
let numdop=[...numdo].sort()
let duplicates2 =[]

// (()=>{
//     for (let j=0 ;i<numdop.length;i++){
//         if (numdop[i]==numdop[i+1]){
//             duplicates2.push(numdop[i])
//         }
//     }console.log(duplicates2)
// })()
//ANONYMOUS FUNCTION
let variable = [1,2,3,4]
let k=1
let rotate=function(){
    for (let i=0;i<k;i++){
        let knite= variable.pop()
        variable.unshift(knite)
        
    }console.log(variable)
    
}
rotate()

// let variable2= [1,2,3,4]
// let K=2
// (function(){
//     for (let l=0;i<K;l++){
//         let knites= variable2.pop()
//         variable2.unshift(knite)
        
//     }console.log(variable2)
    
// })()


