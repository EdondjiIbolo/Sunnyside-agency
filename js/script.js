const menuElement = document.getElementById('menu')
const toggleElement = document.getElementById('toggle-menu')
const triangulo = document.querySelector('.triangulo')

toggleElement.addEventListener('click', ()=>{
 menuElement.classList.toggle('show')
   
})