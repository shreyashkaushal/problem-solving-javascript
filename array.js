boys = ['shreyash','ajay'];
girls = ['seeta'];
stud = boys.concat(girls)
console.log(typeof(boys));
var arr = [1,2,3]
console.log(typeof(arr));
console.log(arr.indexOf(2));
console.log(boys)
console.log(stud)
//for - in loop
for(i in arr)
{
    console.log(arr[i])
}
//for-of loop
for(x of arr)
{
    console.log(x)
}

//for each loop
arr1 = ['red','green','yellow']
arr1.forEach(f1);
function f1 (ele)
{
    console.log(ele);
}
arr.push(10,2,5,6,4,7);   //push 
console.log(arr);
for(i=0;i<arr.length;i++) //printing using for loop
{
  console.log(arr[i])
}

console.log(arr.filter(f2)); //using filter function
function f2(ele)
{
    return ele%2 ==0
}
console.log(arr.sort()); //using sort

console.log(arr.sort(f3))
function f3(a,b)
{
    return a-b
}


console.log(arr.map(f4)) //map
function f4(ele)
{
    return ele*10
}
