function imprimir(){
    window.print()
}

function mostrar(id){
  let elemento = document.getElementById(id)
  if(elemento.style.display=='none'){
      elemento.style.display='block'

  }else{
      elemento.style.display='none'
  }
  // document.getElementById(id).style.display='block'
}



const alert = document.querySelector('.alert');

const btnMostrar = document.querySelector('#btnMostrar');

btnMostrar.addEventListener('click', () => {
  alert.classList.remove('d-none');
});

