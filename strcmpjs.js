function strCmp () 
{
  var str1 =document.getElementById("str1").value;
  var str2 =document.getElementById("str2").value;
   
   function sharedStart(array)
   {
    var A= array.concat().sort(),
    a1= A[0];
    a2= A[A.length-1];
    L= a1.length;
    i= 0;
    while(i<L && a1.charAt(i)=== a2.charAt(i)) 
	i++;
    return a1.substring(0, i);
   }
	
	var res = sharedStart([str1,str2]);
	var result= "<h2>Common letters : " + res + " </h2>";

  document.getElementById("content").innerHTML = result;

}