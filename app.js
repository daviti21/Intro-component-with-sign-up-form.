
 
const erriconArr = Array.from(document.querySelectorAll("i")) 
 const inputArr = Array.from(document.querySelectorAll('input'));
const grop = Array.from(document.querySelectorAll('.formgrop'));
  
 document.getElementById('signup').addEventListener("submit", (e) =>{
    e.preventDefault();
    function error(box, inpt, txt){
    const err = box.querySelector('.error-message');
    const icon = box.querySelector('i');
    if(inpt.value.trim() === ''){
        if(!err){
            let errtxt = document.createElement('p');
            errtxt.textContent = txt;
            errtxt.classList.add('error-message');
            box.appendChild(errtxt);
             let icon = document.createElement('i');
            icon.classList.add('ri-error-warning-fill');
            box.appendChild(icon);
            inpt.parentNode.insertBefore(icon, inpt.nextSibling);
        } 

    }else {
            if(err){
             
                err.remove()
                
          }
           
          if(icon){
            icon.remove()
          }
           
        }

 }
     error(grop[0], inputArr[0],"First name cannot be empty");
     error(grop[1], inputArr[1],"Last name cannot be empty");
     error(grop[3], inputArr[3],"Password cannot be empty");
     error(grop[2], inputArr[2],"Email is invalid");
      

     function mailError(box, inpt, txt){
        const simbol = /^[a-zA-Z0-9]+@(gmail|email)\.com$/
         if(inpt.value.trim() === '' || !simbol.test(txt)){
        if(!err){
            let errtxt = document.createElement('p');
            errtxt.textContent = txt;
            errtxt.classList.add('error-message');
            box.appendChild(errtxt)
           let icon = document.createElement('i');
           icon.classList.add('ri-error-warning-fill');
           box.appendChild(icon);
           inpt.parentNode.insertBefore(icon, inpt.nextSibling)
        } 
    }else {
            if(err){
             
                err.remove()
          }

          if(icon){
            icon.remove()
          }
        }
     }
    mailError(error(grop[2], inputArr[2], "Email is invalid"))
     
 })

 window.addEventListener('resize', () => {
  console.log(window.innerWidth);
});


 