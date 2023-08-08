 let li_items = document.querySelectorAll('.questions li')


//function to show the answer of question
 function show(element){
  
// it is to hide the answer of previous question which was open
     li_items.forEach(e=>{

          if(e!=element){
               e.children[0].children[0].classList.remove("rotate")
               e.children[1].classList.add("hide")
          }    
     })

         var inside = element.children[0]
       
         inside.children[0].classList.toggle("rotate");
         element.children[1].classList.toggle("hide");
     }
    



