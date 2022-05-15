const form = document.querySelector(".login-form");
form.addEventListener("submit", onFormSubmit);
function onFormSubmit (event){
    event.preventDefault();
    const {
        elements: {email, password }
      } = event.currentTarget;
      const emailEl = event.currentTarget.email.value;
      const passwordEl = event.currentTarget.password.value;
      console.log({emailEl, passwordEl});
    if (email.value === "" || password.value === "") {
        return alert("Заполните форму!");
      }
     
   
   const formData = new FormData(event.currentTarget);
    
   

    event.currentTarget.reset();

   }


