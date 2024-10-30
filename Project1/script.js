const buttons = document.querySelectorAll("button");
 
const back = document.querySelector("body");

buttons.forEach((button) => {
  console.log(button)
  button.addEventListener('click', (e) => {

  if(e.target.id=='grey'){
   back.style.backgroundColor = e.target.id;
  }
  if(e.target.id=='white'){
    back.style.backgroundColor=e.target.id;
  }
  if(e.target.id=='blue'){
    back.style.backgroundColor=e.target.id;
  }
  if(e.target.id=='yellow'){
    back.style.backgroundColor=e.target.id;
  }
  if(e.target.id=='pink'){
    back.style.backgroundColor=e.target.id;
  }
})

});