arr = [10,20,2,4,5,62,78,1,45,7,8]
document.write(arr);
//print array
/*for(i=0;i<arr.length;i++)
{
    console.log(arr[i])
}*/
//var myvalue = null ;
//input value 
function getInputValue()
{
 var myvalue = document.getElementById("input").value;
 var t = 0;
 //alert(myvalue);
 console.log(myvalue)

for(i=0;i<arr.length;i++)
{
    if(myvalue==arr[i])
    {
        t = 1;
        break 
       
    }
     
    }
    if(t==1){
        console.log("match found" +arr[i]+ "and found at position" +i );
        
       }
       else{
           console.log("mach not found")
       }
      
}

