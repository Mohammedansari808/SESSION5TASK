

//Print odd numbers in an array
// ARROW FUNCTION
let numbers = [1,2,3,4,5,6,7,8,9,10]
let number = () =>{
    let total =""
    for (let num of numbers){
        if (num % 2!==0){
            total= total + num
            
        }
    }console.log(total.split(""))
}
number();

// Convert all the strings to title caps in a string array
// ARROW FUNCTION
let names = [ "Apple","Orange","pineapple","strawberry"]
let nameUpp = ()=> {
    let final = ""
    for (let upp of names){
        final = final + upp.toUpperCase() +" "
    }console.log(final.trim().split(" "))
    
};
nameUpp();

// Sum of all numbers in an array

// ARROW FUNCTION

let sumOfAll = ()=>{
    let sum = 0
    for (let numb of numbers){
        sum += numb
    }console.log(Array.of(sum))
}
sumOfAll();


//Return all the prime numbers in an array
//// ARROW FUNCTION
var nn= 100
var primos =[];
let prime = ()=>{
   
    
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

// Return all the palindromes in an array
//// ARROW FUNCTION

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















