const slidese = document.querySelectorAll('.slidese')
const botAvancar = document.querySelector ('.btn-avancar');
const botvoltar = document.querySelector ('.btn-voltar');
let slidesAtual = 0;


console.log(slidese);
console.log(botAvancar);
console.log(botvoltar);
console.log(slidesAtual)

console.log(slidese.length)

botAvancar.addEventListener('click', avancarSlide);
botvoltar.addEventListener('click', voltarSlide);

function avancarSlide() {
    slidesAtual++;
    if (slidesAtual < slidese.length) {
    for (let i = 0; i < slidese.length; i++) {
    slidese[i].classList.remove('visivela') }
    slidese[slidesAtual].classList.add('visivela')
} else {
    slidesAtual = 0;

    for (let i = 0; i < slidese.length; i++) {
        slidese[i].classList.remove('visivela') }
        
        slidese[slidesAtual].classList.add('visivela');
        slidese[slidesAtual].classList.add('blur');
        
    }
}

function voltarSlide() {
    slidesAtual--;
    if (slidesAtual >= 0) {
    for (let i = 0; i < slidese.length; i++) {
    slidese[i].classList.remove('visivela') }
    slidese[slidesAtual].classList.add('visivela')
} else {
    slidesAtual = slidese.length -1 ;

    for (let i = 0; i < slidese.length; i++) {
        slidese[i].classList.remove('visivela') }
        
        slidese[slidesAtual].classList.add('visivela');
        slidese[slidesAtual].classList.add('blur');
        
    }
}