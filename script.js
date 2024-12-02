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






const news = [
  {
    title: "Reforma Tributária é Aprovada",
    author: "João Silva",
    date: "2024-11-28",
    summary: "A reforma tributária foi aprovada e traz mudanças significativas.",
    content: "A reforma tributária foi aprovada ontem no Senado. Com mudanças importantes, ela impactará os cidadãos, empresas e servidores públicos em várias áreas.",
    image: "images/reforma-tributaria.jpg",
  },
  {
    title: "Mudanças na Previdência",
    author: "Ana Clara",
    date: "2024-11-25",
    summary: "O governo anunciou novas regras para aposentadorias.",
    content: "O governo federal divulgou novas alterações nas regras previdenciárias, que visam maior equilíbrio financeiro e social no sistema de aposentadoria.",
    image: "images/previdencia.jpg",
  },
  {
    title: "Novas Leis Trabalhistas",
    author: "Carlos Souza",
    date: "2024-11-20",
    summary: "Novas leis trabalhistas entram em vigor nesta semana.",
    content: "As novas leis trabalhistas, aprovadas no mês passado, já estão em vigor e incluem alterações importantes para contratos de trabalho e direitos dos empregados.",
    image: "images/leis-trabalhistas.jpg",
  },
  {
    title: "Decisão Histórica do STF",
    author: "Mariana Almeida",
    date: "2024-11-15",
    summary: "O STF tomou uma decisão importante em relação aos direitos sociais.",
    content: "O Supremo Tribunal Federal decidiu em favor dos trabalhadores em um caso histórico que redefine as políticas de benefícios sociais no Brasil.",
    image: "images/stf-decisao.jpg",
  },
];

let currentPage = 0;
const itemsPerPage = 3;

function renderNews() {
  const container = document.querySelector(".blog-container");
  const pagination = document.querySelector(".blog-pagination");

  // Ordena as notícias por data (mais recentes primeiro)
  const sortedNews = news.sort((a, b) => new Date(b.date) - new Date(a.date));

  // Define o intervalo de notícias para exibir na página atual
  const start = currentPage * itemsPerPage;
  const end = start + itemsPerPage;
  const newsToDisplay = sortedNews.slice(start, end);

  // Renderiza as notícias
  container.innerHTML = "";
  newsToDisplay.forEach((item, index) => {
    const newsItem = document.createElement("div");
    newsItem.className = "blog-item";
    newsItem.innerHTML = `
      <img src="${item.image}" alt="${item.title}">
      <h3>${item.title}</h3>
      <p><strong>Autor:</strong> ${item.author}</p>
      <p><strong>Data:</strong> ${new Date(item.date).toLocaleDateString()}</p>
      <p>${item.summary}</p>
      <button onclick="showFullNews(${start + index})">Ler mais</button>
    `;
    container.appendChild(newsItem);
  });

  // Renderiza os botões de paginação
  pagination.innerHTML = "";
  const totalPages = Math.ceil(news.length / itemsPerPage);
  for (let i = 0; i < totalPages; i++) {
    const button = document.createElement("button");
    button.innerText = i + 1;
    button.onclick = () => {
      currentPage = i;
      renderNews();
    };
    if (i === currentPage) {
      button.style.backgroundColor = "#0056b3";
    }
    pagination.appendChild(button);
  }
}

// Exibe a notícia completa no modal
function showFullNews(index) {
  const modal = document.getElementById("newsModal");
  const title = document.getElementById("modal-title");
  const authorDate = document.getElementById("modal-author-date");
  const fullContent = document.getElementById("modal-full-content");
  const image = document.getElementById("modal-image");

  const selectedNews = news[index];
  title.innerText = selectedNews.title;
  authorDate.innerText = `Por ${selectedNews.author} em ${new Date(selectedNews.date).toLocaleDateString()}`;
  fullContent.innerText = selectedNews.content;
  image.src = selectedNews.image;

  modal.style.display = "flex";
}

// Fecha o modal
document.querySelector(".close-modal").onclick = () => {
  document.getElementById("newsModal").style.display = "none";
};

// Inicializa o mini-blog
renderNews();






  //ativação de animações
  document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os elementos com as classes de animação
    const elements = document.querySelectorAll('.surge-bottom, .surge-right, .surge-left');
  
    // Configura o IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Adiciona a classe 'visible' quando o elemento entra na visualização
          entry.target.classList.add('visible');
          // Para observar uma vez e parar, economizando recursos
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1 // Ajusta para que o elemento seja considerado visível quando 10% dele estiver na viewport
    });
  
    // Observa todos os elementos
    elements.forEach(element => {
      observer.observe(element);
    });
  });
  
