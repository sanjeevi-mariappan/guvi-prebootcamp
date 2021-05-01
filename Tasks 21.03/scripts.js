var arr=[1,2,3,4,4,5,6,67,45,7,54];
 //print Odd numbers
console.log(arr.filter(num =>{
    if(num%2===1){
        return true;
    }
}));
 //print Odd numbers IIFE
 (function(arr) {
    for(let i of arr){ if(i%2===1) console.log(i);}
 })(arr);

 //Sum Of all numbers in array
 console.log(arr.reduce((acc,item) =>acc+item,0));

 // Sum Of all numbers in array IIFE
 (function(arr){
     let sum=0;
     for(let i of arr){sum+=i;}console.log(sum);
 })(arr);

 //Return all the prime numbers in array
 console.log(arr.filter(num =>{
     for(let i=2;i<=Math.sqrt(num);i++){
         if(num%i===0) return false;
     }
     return true;
 }));

 //Return all the prime numbers in array IIFE
 (function(arr){
     for(let i=0;i<arr.length;i++){
         let flag=true;
         for(let j=2;j<=Math.sqrt(arr[i]) && flag;j++){
             if(arr[i]%j===0) {
                 flag=false;
             }
         }
         if(flag)
         console.log(i);
     }
 })(arr);

 //Return all the palindromes in array
 arr=['mom','dad','uncle','malayalam','poiuy'];
 console.log(arr.filter( wd =>{
     if(wd.split('').reverse().join('')===wd)
       return true;
     else return false;
 }));


  //Return all the palindromes in array IIFE
  (function(arr){
      for(let i=0;i<arr.length;i++){
        if(arr[i].split('').reverse().join('')===arr[i])
           console.log(arr[i]);
      }
  })(arr);


//Remove duplicates from Array
arr=[1,2,3,4,4,5,6,67,45,7,54];
console.log(Array.from(new Set(arr)));

//Remove duplicates from Array IIFE
(function(arr){
    let res={};
    for(let ob of arr){
        if(typeof(res[ob])==='undefined')
          res[ob]=1;
        else
           res[ob]=res[ob]+1;
    }for(let i in res){ if(res[i]===1)console.log(i);}
})(arr);

//Return median of two arrays
var arr1=[2,3,5,12,122,455];
var arr2=[23,22,13,34,45,67,3];
var arr3=[...arr1,...arr2];
arr3.sort((a,b)=>{return a-b;});
if(arr3.length%2===1)
   console.log(arr3[arr3.length/2]);
else
   console.log(arr3[(arr3.length/2)-1]+arr3[arr3.length/2]/2);

//Return median of two arrays IIFE
(function(arr1,arr2){
    var arr3=[...arr1,...arr2];
arr3.sort((a,b)=>{return a-b;});
if(arr3.length%2===1)
   console.log(arr3[arr3.length/2]);
else
   console.log(arr3[(arr3.length/2)-1]+arr3[arr3.length/2]/2);
})(arr1,arr2);

//Convert all the strings to title caps in a string array 
let ar=['This is test','a test string','not needed to be a test']
ar.map((st)=>{
    return st.split(" ").map(s =>{
        s.charAt(0).toUpperCase() + s.slice(1)
    }).join(' ');
});


//rotate an array k times
var ars=[1,2,3,53,5];
let k=7;
let rot=k%ars.length;
for(let i=0;i<7;i++){
    let num=ars.pop();
        ars=[num,...ars];
    }

