const output=document.getElementById("resultview")




let buttons=document.querySelectorAll("[type='Button']")
Array.from(buttons).forEach(
    (button)=>{
        button.addEventListener('click',()=>{
            if(button.value =='='){
                output.value=eval(output.value)
            
            }
            else{
            output.value+=button.value
            }
            if(button.value =='C'){
                output.value=''
            }
            if(button.value=='←'){
                output.value-=output.value.pop()
            }
       
          
        })
    }
)
