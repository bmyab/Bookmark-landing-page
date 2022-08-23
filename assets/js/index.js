const formulario =  document.querySelector('#formulario');



console.log(formulario)

formulario.addEventListener( 'submit' , e =>{
  e.preventDefault();
  
  const email = formulario['email'];
  const emailValue = email.value;
  const small = formulario.querySelector('small')
  const img = formulario.querySelector('img')
  const button = formulario.querySelector('button')


  // console.log(small)
  // console.log(emailValue)
  console.log(img)
  console.log(button)

  if(!emailValue){
    email.classList.add('error');
 

    small.innerText = 'Email field cannot be empty';
    small.style.display = 'block';
    
    img.style.display = 'block'

    button.classList.add('error');
  }else if( !isValid(emailValue)){
    email.classList.add('error');
    small.innerText = 'Wooks,make sure its an email';
    small.style.display = 'block';
    img.style.display = 'block';
    button.classList.add('error');


  }else{
    email.classList.remove('error');
    small.style.display = 'none';
    img.style.display = 'none';
    button.classList.remove('error')

  }



})


function isValid(email){
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}