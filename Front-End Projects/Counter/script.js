const prev=document.querySelector(".dec")
const next=document.querySelector(".inc")
const reset=document.querySelector(".reset")
const counts=document.querySelector(".counts")
let count=0;
next.addEventListener('click',()=>
{
   count++;
   counts.innerHTML=count
   if(count>0)
   {
      counts.style.color="yellowGreen";
   }
   if(count==0)
      {
         counts.style.color="black";
      }    

})
prev.addEventListener('click',()=>

{
   count--;

   counts.innerHTML=count
   if(count<0)
   {
      counts.style.color="red";
   }
   if(count==0)
      {
         counts.style.color="black";
      }    

})

reset.addEventListener('click',()=>
{
   count=0
   counts.innerHTML=count
   counts.style.color="black";


})