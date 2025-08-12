

let string = " ";
let buttons=document.querySelectorAll('button');
try {
    Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML==="="){
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML=="C"){
            string = ""
            document.querySelector('input').value= string;
        }
        else{
            string = string +e.target.innerHTML;
            document.querySelector('input').value = string; 
        }
    })
});
    
} catch (error) {
    document.querySelector('input'.value) = "please Type Valide credentials"    
}

document.addEventListener("keypress")


