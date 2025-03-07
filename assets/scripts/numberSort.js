const imageBox = document.querySelectorAll('.image-box');
const imagesPerPage = 6;

//math.ceil(x) rounds up to its nearest integer
const totalPages = Math.ceil(imageBox.length / imagesPerPage);

for (let i = 1; i <= totalPages; i++) {
  const btnContainer = document.querySelector('.button-container');
  const pageBtn = document.createElement('button');
  const createdBtn = pageBtn.length;
  pageBtn.classList.add('number-sort');
  pageBtn.textContent = i;
  btnContainer.appendChild(pageBtn);
  pageBtn.addEventListener('click', () => {
    showPage(i);
  });

  if(i > 3) {
    arrowLeft.style.display = 'none';

  }
}

showPage(1);

function showPage(pageNumber) {
  imageBox.forEach((image, index) => {

    /* Como isto funciona:
        Quando o usuário clica no primeiro botão (x = 1), vê o indice mínimo => (x - 1) * 6 = 0 <= indice da 1ª imagem
        e o indice máximo => x * 6 = 6 <= o index tem de ser menor que 6 então o indice é 5
        Assim mostra apenas os elementos que estão dentro desse intervalo e esconde os restantes.
    */

    if(index >= (pageNumber - 1) * imagesPerPage && index < pageNumber * imagesPerPage) {
      image.style.display = 'block';
    } else {
      image.style.display = 'none';
    }
  });

}

/*

  APARECER SÓ OS 5 PRIMEIROS BOTÕES
  PÔR SÓ ESTA SETA '>' QUANDO ESTÁ NO INICIO
  QUANDO ESTÁ NO MEIO, AS DUAS '<' '>' E 5 NÚMEROS
  E QUANDO ACABA SÓ UM '<', TAMBÉM.

*/

const arrowLeft = document.querySelector('.js-arrow-left');
const arrowRight = document.querySelector('.js-arrow-right');

