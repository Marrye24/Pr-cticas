const imagenes = document.querySelectorAll('.imagen');
const imagenAmpliadaContainer = document.getElementById('imagen-ampliada-container');
imagenAmpliadaContainer.style.display = 'none';

imagenes.forEach((imagen) => {
  imagen.addEventListener('mouseover', () => {
    const src = imagen.getAttribute('src');
    const imagenAmpliada = document.createElement('img');
    imagenAmpliada.setAttribute('src', src);

    imagenAmpliadaContainer.appendChild(imagenAmpliada);
    imagenAmpliadaContainer.style.display = 'block';
  });

  imagen.addEventListener('mouseout', () => {
    imagenAmpliadaContainer.style.display = 'none';
    imagenAmpliadaContainer.innerHTML = '';
  });
});


const ventana = document.querySelector('#ventanaEditar');
const fondo = document.querySelector('#fondo');
const btnCerrar = document.querySelector('.close');
btnCerrar.addEventListener('click', () => {

  ventana.classList.add('oculto');
  fondo.classList.add('oculto');
});
