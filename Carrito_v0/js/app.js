/* console.log('Hola mundo');
alert('Hola mundo'); */

// Metodos para capturar
//Selección por clase de un elemento

/* const encabezado=document.getElementsByClassName('encabezado');
console.log('encabezado');

const encabezado2=document.getElementById('encabezado');
console.log('encabezado2'); */

//-----------------------------------------------------

//Seleciona con idependencia si es id o class
//.clase
//# id

/* const head=document.querySelector('.header');
console.log(head);

const formulario=document.querySelector('#busqueda');
console.log(formulario);
//solo con el selector
const foot=document.querySelector('footer');
console.log(foot); */

//-----------------------------------------------------

//acceder desde otra clase, elemento padre e hijo
//navegando atravez de las clases

/* const cont=document.querySelector('.footer.container');
console.log(foot);
console.log(cont);

const row=document.querySelector('.footer.container');
console.log(row); */

//-----------------------------------------------------
//Seleccionar todas las clases de un mismo tipo
/* const container=document.querySelectorAll('.row');
console.log(container); */


//-----------------------------------------------------
//Acceder a una etiqueta y cambiarla
const title2=document.querySelector('.contenido-hero h2');
title2.textContent='Nuevo texto';//METER TEXTO PLANO
// title2.innerHTML='Nuevo texto <p><b>Texto en Inner</b></p>';//METER ETIQUETAS DE HTML

// const title3=document.querySelector('.contenido-hero p ');
// title3.textContent='Todos los cursos a $60';//METER TEXTO PLANO
//--------------------------------------------------------
// let monto=80;
// const title3=document.querySelector('.contenido-hero p ');
// title3.textContent=`Todos los cursos a ${monto}`;

//--------------------------------------------------------
//Acceder al css desde js
title2.style.backgroundColor='red';
title2.style.textDecoration='underline';
title2.style.textTransform='uppercase';


//--------------------------------------------------------
const contHero=document.querySelector('.contenido-hero');
console.log(conteHero.classList);

conteHero.classList.add('nuevaclase')//agregar
console.log(conteHero.classList);

conteHero.classList.remove('nuevaclase')//remover
console.log(conteHero.classList);