 function display(val)
   {
   document.getElementById('display').value+=val;
   }
 function showResult()
  {
   var input=document.getElementById('display').value;
   var output=eval(input);
   document.getElementById('display').value=output;
  }
 function solve()
  {
   document.getElementById("display").value=" ";
  }
