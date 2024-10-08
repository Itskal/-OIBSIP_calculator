const dark=document.getElementById('dark');
const custom=document.getElementById('custom');
const light=document.getElementById('light');
const display=document.getElementById('display_box')


dark.addEventListener('click',() =>{
    document.body.classList.toggle('dark-theme');
   
});

custom.addEventListener('click' ,() =>{
    document.body.classList.toggle('custom-theme');
    
});

   light.addEventListener('click', () =>{
    document.body.classList.remove('dark-theme');
    document.body.classList.remove('custom-theme');
     
   } );
   function appendToDisplay(input){
    display.value += input
   }
   
   function clearDisplay(){
    display.value="";

   }

   function calculate(){
display.value=eval(display.value)
   }

    



