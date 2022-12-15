const slides = document.querySelectorAll('.slides')
const btnAvancar = document.querySelector ('.btn--avancar');
const btnvoltar = document.querySelector ('.btn--voltar');
let slideAtual = 0;

console.log(slides);
console.log(btnAvancar);
console.log(btnvoltar);
console.log(slideAtual)

console.log(slides.length)

btnAvancar.addEventListener('click', avancarSlide);
btnvoltar.addEventListener('click', voltarSlide);

function avancarSlide() {
    slideAtual++;
    if (slideAtual < slides.length) {
    for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('visivel') }
    slides[slideAtual].classList.add('visivel')
} else {
    slideAtual = 0;

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('visivel') }
        
        slides[slideAtual].classList.add('visivel');
        slides[slideAtual].classList.add('blur');
        
    }
}

function voltarSlide() {
    slideAtual --;
    if (slideAtual >= 0) {
    for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('visivel') }
    slides[slideAtual].classList.add('visivel')
} else {
    slideAtual = slides.length -1;

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('visivel') }
        
        slides[slideAtual].classList.add('visivel');
        slides[slideAtual].classList.add('blur');
        
    }
}
