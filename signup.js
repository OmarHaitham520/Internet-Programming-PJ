const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const email = document.getElementById('email');
form.addEventListener('submit',(e)=>{
e.preventDefault();
checkinput();

});
function checkinput(){
   const usernamevalue= username.value.trim();
   const passwordValue=password.value.trim();
   const password2Value= password2.value.trim();
   const emailvalue= email.value.trim();


   if (usernamevalue===''){

       seterror(username,'cannot be empty');

   } else{
      setsuccess(username);
   }
   if(emailvalue===''){
      seterror(email,'cant be empty');
   }
   else if(!isEmail(emailvalue)){
      seterror(email,'not a valid Email');
   }else{
      setsuccess(email);
   }
   if(passwordValue === '') {
		setError(password, 'Password cannot be blank');
	} else {
		setsuccess(password);
	}
	
	if(password2Value === '') {
		seterror(password2, 'Password2 cannot be blank');
	} else if(passwordValue !== password2Value) {
		seterror(password2, 'Passwords does not match');
	} else{
		setsuccess(password2);
	}
   }
function seterror(input,message){
const formControl=input.parentElement;
const small=formControl.querySelector('small');
small.innerText=message;
formControl.className='form-controll ghalat';

}
function setsuccess(input){
const formControl=input.parentElement;
formControl.className='form-controll sah';
}
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

