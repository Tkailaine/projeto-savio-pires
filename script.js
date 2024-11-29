// Seleciona os elementos
const menuToggle = document.getElementById('menuToggle');
const closeMenu = document.getElementById('closeMenu');
const menu = document.getElementById('menu');

// Abre o menu ao clicar no botão hamburger
menuToggle.addEventListener('click', () => {
  menu.classList.add('active');
});

// Fecha o menu ao clicar no botão de fechar
closeMenu.addEventListener('click', () => {
  menu.classList.remove('active');
});




let currentIndex = 0;
const slides = document.querySelectorAll('.slider-item');
const totalSlides = slides.length;
const dots = document.querySelectorAll('.dot');

function moveSlide(direction) {
  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = totalSlides - 1;
  } else if (currentIndex >= totalSlides) {
    currentIndex = 0;
  }

  updateSliderPosition();
}

function moveSlideTo(index) {
  currentIndex = index;
  updateSliderPosition();
}

function updateSliderPosition() {
  const newTransformValue = -currentIndex * 100;
  document.querySelector('.slider-container').style.transform = `translateX(${newTransformValue}%)`;

  // Atualizar os pontos de navegação
  dots.forEach(dot => dot.classList.remove('active'));
  dots[currentIndex].classList.add('active');
}

// Auto Slide (mudar automaticamente a cada 5 segundos)
setInterval(() => {
  moveSlide(1);
}, 5000);

// Marcar o ponto ativo na inicialização
updateSliderPosition();










function toggleArea(id) {
  const card = document.getElementById(id);
  const detalhes = card.querySelector('.detalhes');
  const miniResumo = card.querySelector('.mini-resumo');
  const btnExpand = card.querySelector('.btn-expand');
  const btnCollapse = card.querySelector('.btn-collapse');

  // Alterna a exibição dos detalhes e do resumo
  if (detalhes.style.display === 'block') {
    detalhes.style.display = 'none';
    miniResumo.style.display = 'block';
    btnExpand.style.display = 'inline-block';
    btnCollapse.style.display = 'none';
    card.style.height = 'auto';
  } else {
    detalhes.style.display = 'block';
    miniResumo.style.display = 'none';
    btnExpand.style.display = 'none';
    btnCollapse.style.display = 'inline-block';
    card.style.height = 'auto';
  }
}


// Variáveis únicas para o slider
const unicoSlider = document.querySelector('.unico-slider');
const unicoDots = document.querySelectorAll('.unico-dot');
let slideIndex = 0;

// Função para avançar para o próximo slide
function showSlide(index) {
    if (index >= unicoDots.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = unicoDots.length - 1;
    } else {
        slideIndex = index;
    }

    // Mover o slider
    unicoSlider.style.transform = `translateX(-${slideIndex * 100}%)`;

    // Atualizar o estado dos dots
    unicoDots.forEach(dot => dot.classList.remove('active'));
    unicoDots[slideIndex].classList.add('active');
}

// Função para ativar o slide automaticamente
function autoSlide() {
    showSlide(slideIndex + 1);
}

// Inicializar o primeiro slide
showSlide(slideIndex);

// Iniciar o loop automático do slider (a cada 3 segundos)
let autoSlideInterval = setInterval(autoSlide, 3000);

// Adicionar evento de clique nos dots
unicoDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showSlide(index);
        clearInterval(autoSlideInterval); // Para o loop automático
        autoSlideInterval = setInterval(autoSlide, 3000); // Reinicia o loop automático
    });
});
