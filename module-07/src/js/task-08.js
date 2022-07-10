const formnRef = document.querySelector('.login-form');
const btnEmailRef = document.querySelector('[type="email"]');
const btnNameRef =document.querySelector('[type="password"]');


// btnEmailRef.setAttribute('required', 'required');
// btnNameRef.setAttribute('required', 'required');


formnRef.addEventListener('submit', event =>{
    event.preventDefault()
    const formData = new FormData(event.target);
    const submitedData = {};
    if(btnEmailRef.value.length === 0 || btnNameRef.value.length  === 0){
        alert("Заполните все поля!")
     } formData.forEach((value, key) => {
        submitedData[key] = value; 
        });

   console.log(submitedData)
   btnEmailRef.value = btnNameRef.value ="" ;
})
