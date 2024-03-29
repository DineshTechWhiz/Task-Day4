//a)odd number in arrow function
let numbArray = [5,6,7,8,9,10,11,12];

let odd=numbArray.filter((x) => {

return x % 2 !== 0;
});
console.log(odd);
//output=>[5,7,9,11]

//b)convert all strings to tiltle caps in srting array
let  str = ["He","is","an","Architect"];

 let strCaps = str.map((item) => {

    return item.charAt(0).toUpperCase() + item.slice(1).toLowerCase();

});
console.log( strCaps.join(' '));
//output=> He Is An Architect

//c) sum of all numbers in an array
var arr=[5,8,9,2,4,3,3];
const add1=arr.reduce((a,b)=>a+b);
console.log([add1]);
//output=>34


//d)Return all the prime numbers in the array
let primeNum= (arr) => {
    return arr.filter((n) => {
      for (let i = 2; i < n; i++) {
        if (n % i === 0) {
          return false;
        }
      }
      return n > 1;
    });
  };
  console.log(primeNum([1,2,3,4,5]));
  //output=>[2,3,5]

  //e) Return all the palindrom in an array
  var arr=["dad","malayalam" ,"guvi","mom"];
arr = arr.filter((s) =>{
let len = s.length;
for (var i = 0; i<len / 2; i++) {
if (s[i] == s[len - i - 1]){
return true;
}
else{
return false;
}
}
});
console.log(arr);

//output=> [dad,malayalam,mom]