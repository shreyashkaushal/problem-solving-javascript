arr = [10,2,4,45,23,87,98,42];
sortedArr = arr.sort(f1);
function f1(a,b)
{
    return a - b
}
document.writeln(sortedArr);
var i = 0;
var found = 0;
var u = sortedArr.length - 1;
console.log(u);

var k= parseInt(prompt("enter the key element "));
console.log(k)
console.log(m)
while(i<=u)
{
    var m = parseInt((i+u)/2)
    if(k ==sortedArr[m])
    {
        found = 1;
        break;
    }
    else if(k > sortedArr[m])
    {
        i=m+1;
    }
    else if(k<sortedArr[m])
    {
        u=m-1;
    }
}
if(found==1)
{
    document.writeln("element found" +m)
}
else
{
    document.writeln("element not found")
}
