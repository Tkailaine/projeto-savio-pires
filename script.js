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
    title: "Bem adquirido antes do casamento pode integrar a partilha em caso de união estável anterior",
    author: "Sávio Pires",
    date: "2024-12-03",
    summary: "Mesmo sob separação total de bens, bens adquiridos antes do casamento podem ser partilhados no divórcio se forem comprados durante uma união estável anterior, salvo doações ou contratos que estipulem outro regime. Entenda como isso afeta direitos patrimoniais.",
    content: "Você sabia, que, sendo adquirindo bens antes do casamento sob a égide do regime de separação total de bens, por um dos nubentes e sendo provado os requisitos de uma anterior união estável este bem deverá compor a partilha, em caso de posterior divórcio do casal? Basta provar a existência de uma união estável ocorrida anteriormente ao casamento e a aquisição do respectivo bem durante este período, mesmo que seja em nome de apenas um dos companheiros, ressalvado apenas os bens adquiridos de forma gratuita (doação realizada apenas em favor de um deles) e que não haja um contrato regulamentando o regime de bens adquiridos na referida união estável diferente da regra geral que é do regime parcial de bens em casos omissos de regulamentação.",
    image: "imagens/casamento.jpg",
  },
  {
    title: "Usucapião familiar exige requisitos adicionais à usucapião urbana",
    author: "Sávio Pires",
    date: "2024-12-03",
    summary: "Para requerer usucapião familiar, é preciso atender às condições da usucapião urbana e, além disso, cumprir requisitos como posse exclusiva por 2 anos, imóvel de até 250m² usado como residência, ausência de outro imóvel, e que o afastamento do cônjuge não tenha justificativa, como fuga por violência.",
    content: "Para requerer a usucapião familiar deve se preencher todos os requisitos da usucapião urbana (constitucional), e, mais, é necessário atender a algumas considerações, tais como, posse exclusiva do cônjuge ou do companheiro pelo prazo temporal mínimo de 2 anos, que o imóvel em questão tenha a medida não superior a 250 metros quadrados, não possuir outro imóvel e utilizá-lo como residência e, principalmente, que o cônjuge que se afastou do lar não tenha um motivo justificado para sua ausência (por exemplo, a esposa que foge do lar para não ser agredida).",
    image: "imagens/usucapiao.jpg",
  },
  {
    title: "Servidores com doenças graves podem ter isenção de Imposto de Renda",
    author: "Sávio Pires",
    date: "2024-12-03",
    summary: "Servidores públicos com doenças graves previstas na Lei 7.713/88, como câncer e cardiopatia grave, têm direito à isenção do Imposto de Renda e podem solicitar administrativamente a restituição dos valores pagos nos últimos cinco anos.",
    content: "Servidores públicos portadores de doenças elencadas no rol da Lei 7.713/88, tais com neoplasia maligna, cardiopatia grave, paralisia irreversível e incapacitante, estão isentos do recolhimento do Imposto de Renda, podendo inclusive com pedido administrativo de restituição dos valores então descontados nos últimos 05 (cinco) anos.",
    image: "imagens/doente.jpg",
  },
  {
    title: "Servidor público pode acumular duas aposentadorias",
    author: "Sávio Pires",
    date: "2024-12-03",
    summary: "O tempo de serviço público é computado integralmente para aposentadoria, e servidores podem acumular duas aposentadorias: uma pelo RPPS e outra pelo INSS, conforme o Decreto 3.048/1999. O direito também vale para quem exerce dois cargos públicos permitidos, como professores e profissionais da saúde. Entenda os critérios para garantir esse benefício.",
    content: "O tempo de serviço público prestado a União, Estados, Municípios e Autarquias é computado integralmente para fins de aposentadoria. E, mais O trabalhador estatutário pode receber duas aposentadorias, uma pelo RPPS e outra pelo INSS. Esse direito está garantido no parágrafo 2º, art. 10, do Decreto 3.048/1999, o Regulamento da Previdência Social. Por exemplo: “caso o servidor ou o militar venha a exercer, concomitantemente, uma ou mais atividades abrangidas pelo Regime Geral de Previdência Social, tornar-se-ão segurados obrigatórios em relação a essas atividades”.Outro exemplo o servidor público que também exerce atividades profissionais na iniciativa privada, ele poderá acumular duas aposentadorias ao atingir os critérios necessários para receber cada uma delas. Além disso, vale lembrar que o estatutário também pode acumular duas aposentadorias atuando somente no serviço público. Esse direito se estende a professores, profissionais da área da saúde e profissionais que exerçam um cargo de professor com outro técnico ou científico. Por exemplo, se um trabalhador atua como professor em uma escola da rede estadual e em outra da rede federal, poderá receber a aposentadoria de cada um desses regimes de previdência, desde que preencha certos quesitos.",
    image: "imagens/aposentadoria.jpg",
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




// Selecione todos os links de ancoragem
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    // Realize a rolagem suave até a seção, com um ajuste de deslocamento
    const targetId = this.getAttribute('href').substring(1); // Remove o '#' do link
    const targetElement = document.getElementById(targetId);

    window.scrollTo({
      top: targetElement.offsetTop - 100, // Ajuste a posição do "respiro"
      behavior: 'smooth'
    });
  });
});





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
  
