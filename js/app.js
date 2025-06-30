const projectsData = [
    {
        id: 'kindact',
        title: 'Kindact',
        category: 'web',
        shortDesc: 'Sistema completo para ONGs e voluntários com autenticação de múltiplos perfis, banco de dados e uso de views SQL.',
        longDesc: 'Kindact é uma plataforma web desenvolvida em PHP e MySQL para conectar ONGs a voluntários. O sistema possui um painel administrativo para ONGs gerenciarem vagas e um portal para voluntários se candidatarem. A autenticação distingue os tipos de usuário, e o banco de dados foi modelado para garantir a integridade e eficiência das consultas.',
        technologies: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'SQL Views'],
        githubUrl: 'https://github.com/ViniMTrevisan/kindact',
        gifUrl: 'img/kindact-gif.gif',
        stillUrl: 'img/img1kindact.png',
        youtubeUrl: 'https://youtu.be/rszk96KI3N4'
    },
    {
        id: 'mytube',
        title: 'MyTube Video Processor (Java)',
        category: 'java',
        shortDesc: 'Command Line App em Java que demonstra Injeção de Dependência e programação orientada a interfaces para processar vídeos.',
        longDesc: 'Este projeto é um exemplo prático e elegante dos princípios SOLID e de Design Patterns. A classe `VideoProcessor` não depende de implementações concretas, mas sim de interfaces (`CanVideoEncoder`, `CanVideoDatabase`, `CanEmailService`). Isso torna o sistema desacoplado, flexível e fácil de testar, permitindo que diferentes implementações de codificadores de vídeo ou bancos de dados sejam trocadas sem alterar a lógica de negócio principal.',
        technologies: ['Java', 'OOP', 'Dependency Injection', 'SOLID', 'Design Patterns'],
        githubUrl: 'https://github.com/ViniMTrevisan/java-estudos/tree/main/projetos-java/src/mytube',
        gifUrl: 'img/mytube-gif.gif',
        stillUrl: 'img/img1mytube.png',
        youtubeUrl: 'https://youtu.be/beHECSle0Tc'
    },
    {
        id: 'impact-pro',
        title: 'ImpactPro',
        category: 'web',
        shortDesc: 'Versão reduzida do Kindact com interface simplificada e funcionalidades principais de gestão de usuários.',
        longDesc: 'ImpactPro foi um protótipo inicial para o Kindact, focado nas funcionalidades essenciais de cadastro e login de usuários. Serviu como base para validar o conceito e a estrutura inicial do banco de dados antes de expandir para o projeto completo.',
        technologies: ['HTML', 'CSS', 'JavaScript', 'MySQL', 'PHP'],
        githubUrl: 'https://github.com/ViniMTrevisan/impact-pro',
        gifUrl: 'img/impactpro-gif.gif',
        stillUrl: 'img/img1impactpro.png',
        youtubeUrl: 'https://youtu.be/UPxgs5csHaE'
    },
    {
        id: 'cadastro-responsivo',
        title: 'Cadastro com Upload de Imagem',
        category: 'web',
        shortDesc: 'Formulário de cadastro responsivo que permite o envio e armazenamento de imagem no servidor usando PHP.',
        longDesc: 'Este projeto foca na criação de uma interface de usuário web funcional para cadastro de perfis, incluindo um campo para upload de imagem. O back-end em PHP gerencia o arquivo recebido, move-o para um diretório no servidor e armazena as informações do usuário. O design é totalmente responsivo.',
        technologies: ['PHP', 'HTML', 'CSS', 'File Upload'],
        githubUrl: 'https://github.com/ViniMTrevisan/cadastro-responsivo',
        gifUrl: 'img/cadastro-gif.gif',
        stillUrl: 'img/img1cadastro.png',
        youtubeUrl: 'https://youtu.be/1DZGc1D2Xz4'
    },
    {
        id: 'ollama-api',
        title: 'API Python + Ollama',
        category: 'python',
        shortDesc: 'API criada em Python que se comunica com o modelo de linguagem Ollama para responder a requisições de texto.',
        longDesc: 'Este projeto explora a integração de modelos de linguagem locais (LLMs) através do Ollama. Uma API simples, construída com FastAPI em Python, recebe uma pergunta via POST request e a repassa para o modelo de linguagem local, retornando a resposta gerada. É um ótimo exemplo de como orquestrar serviços de IA em um ambiente de back-end.',
        technologies: ['Python', 'FastAPI', 'Ollama', 'APIs REST'],
        githubUrl: 'https://github.com/ViniMTrevisan/api-pergunta',
        gifUrl: 'img/ollama-gif.gif',
        stillUrl: 'img/img1ollama.png',
        youtubeUrl: 'https://youtu.be/uIpBqEL4Ei4'
    },
    {
        id: 'mortgage-calculator',
        title: 'Calculadora de Hipoteca (Java)',
        category: 'java',
        shortDesc: 'Command Line App que calcula valor de parcelas com base em entrada do usuário. Projeto em Java com boas práticas e validações.',
        longDesc: 'Esta é uma aplicação de console em Java que demonstra sólidos princípios de programação, como a separação de lógica de negócio da interface do usuário e o tratamento robusto de exceções. O programa solicita ao usuário o valor do empréstimo, a taxa de juros e o prazo, validando cada entrada para garantir que os dados sejam realistas e corretos antes de realizar o cálculo.',
        technologies: ['Java', 'OOP', 'Exception Handling'],
        githubUrl: 'https://github.com/ViniMTrevisan/java-estudos/tree/main/projetos-java/src/hipoteca',
        gifUrl: 'img/hipoteca-gif.gif',
        stillUrl: 'img/img1hipoteca.png',
        youtubeUrl: 'https://youtu.be/9Jq2Rj3o0K8'
    },
    {
        id: 'fizzbuzz',
        title: 'FizzBuzz (Java)',
        category: 'java',
        shortDesc: 'Implementação do clássico desafio FizzBuzz, com foco em código limpo, legibilidade e estruturação.',
        longDesc: 'Mais do que um simples exercício de lógica, esta implementação do FizzBuzz foi criada seguindo princípios de código limpo. As condicionais são claras, as variáveis têm nomes significativos e a estrutura do método é simples e direta, mostrando a capacidade de escrever um código que não é apenas funcional, mas também fácil de ler e manter.',
        technologies: ['Java', 'Logic', 'Clean Code'],
        githubUrl: 'https://github.com/ViniMTrevisan/java-estudos/tree/main/projetos-java/src/fizzbuzz',
        gifUrl: 'img/fizzbuzz-gif.gif',
        stillUrl: 'img/img1fizzbuzz.png',
        youtubeUrl: 'https://youtu.be/jpUtr0gpOu8'
    }
];


class PortfolioApp {
    constructor() {
        document.addEventListener('DOMContentLoaded', () => {
            if (document.querySelector('#project-list')) {
                this.initializeMainPage();
            }
            if (document.querySelector('#project-detail')) {
                this.initializeDetailsPage();
            }
        });
    }

    initializeMainPage() {
        this.nav = document.querySelector('nav');
        this.projectListEl = document.querySelector('#project-list');
        this.filterContainer = document.querySelector('.filter-container');
        this.initAll();
        this.generateProjectCards();
        this.initProjectFilter();
    }
    
    initializeDetailsPage() {
        this.initAll();
        this.populateProjectDetails();
    }
    
    initAll() {
        this.initThemeSwitcher();
        this.initMobileMenu();
        this.initScrollSpy();
        this.initSmoothScroll();
    }

    initThemeSwitcher() {
        const themeToggle = document.querySelector('.theme-toggle');
        if (themeToggle) {
            const applyTheme = (theme) => {
                document.body.setAttribute('data-theme', theme);
                themeToggle.innerHTML = `<i class="fas fa-${theme === 'light' ? 'moon' : 'sun'}"></i>`;
                localStorage.setItem('theme', theme);
            };
            themeToggle.addEventListener('click', () => {
                const newTheme = document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
                applyTheme(newTheme);
            });
            const savedTheme = localStorage.getItem('theme') || 'dark';
            applyTheme(savedTheme);
        }
    }

    initMobileMenu() {
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');
        if (!hamburger || !navLinks) return;
        
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const isOpened = navLinks.classList.contains('active');
            hamburger.innerHTML = isOpened ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        });
    }

    initScrollSpy() {
        const navLinks = document.querySelectorAll('.nav-links a');
        const sections = document.querySelectorAll('main section');
        const nav = document.querySelector('nav');
        if (navLinks.length === 0 || sections.length === 0 || !nav) return;

        const updateActiveLink = () => {
            const navHeight = nav.offsetHeight;
            let currentSectionId = '';

            sections.forEach(section => {
                const sectionTop = section.offsetTop - navHeight - 100;
                if (window.scrollY >= sectionTop) {
                    currentSectionId = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${currentSectionId}`) {
                    link.classList.add('active');
                }
            });
        };
        window.addEventListener('scroll', updateActiveLink);
        updateActiveLink();
    }
    
    initSmoothScroll() {
        const navLinks = document.querySelectorAll('.nav-links a');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);

                if (targetSection) {
                    const navHeight = document.querySelector('nav').offsetHeight;
                    const targetPosition = targetSection.getBoundingClientRect().top + window.scrollY - navHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });

                    const hamburger = document.querySelector('.hamburger');
                    const navLinksContainer = document.querySelector('.nav-links');
                    if (navLinksContainer.classList.contains('active')) {
                        navLinksContainer.classList.remove('active');
                        hamburger.innerHTML = '<i class="fas fa-bars"></i>';
                    }
                }
            });
        });
    }

    generateProjectCards() {
        if(!this.projectListEl) return;
        this.projectListEl.innerHTML = ''; 
        projectsData.forEach(project => {
            const projectCard = document.createElement('li');
            projectCard.dataset.category = project.category;
            
            if (project.stillUrl) {
                projectCard.style.backgroundImage = `url('${project.stillUrl}')`;
            }

            projectCard.innerHTML = `
                <div class="card-content">
                    <div class="project-title">${project.title}</div>
                    <div class="project-desc">${project.shortDesc}</div>
                    <div class="project-actions">
                        <a href="project-details.html?id=${project.id}" class="details-button">
                            Ver Detalhes <i class="fas fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
            `;
            
            this.projectListEl.appendChild(projectCard);

            if (project.gifUrl && project.stillUrl) {
                projectCard.addEventListener('mouseover', () => {
                    projectCard.style.backgroundImage = `url('${project.gifUrl}')`;
                });
                projectCard.addEventListener('mouseout', () => {
                    projectCard.style.backgroundImage = `url('${project.stillUrl}')`;
                });
            }
        });
    }

    filterProjects(filter) {
        const projectCards = this.projectListEl.querySelectorAll('li');
        projectCards.forEach(card => {
            const category = card.dataset.category;
            const shouldShow = (filter === 'all' || category === filter);
            
            if (shouldShow) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    }
    
    initProjectFilter() {
        if (!this.filterContainer) return;
        this.filterContainer.addEventListener('click', (e) => {
            if (e.target.matches('.filter-btn')) {
                this.filterContainer.querySelector('.active').classList.remove('active');
                e.target.classList.add('active');
                this.filterProjects(e.target.dataset.filter);
            }
        });
    }

    populateProjectDetails() {
        const params = new URLSearchParams(window.location.search);
        const projectId = params.get('id');
        const project = projectsData.find(p => p.id === projectId);

        if (!project) {
            document.querySelector('#project-title').textContent = 'Projeto não encontrado';
            document.querySelector('#project-long-desc').textContent = 'O projeto que você está procurando não existe ou foi movido.';
            return;
        }

        document.title = `${project.title} | Vinicius M. Trevisan`;
        document.querySelector('#project-title').textContent = project.title;
        document.querySelector('#project-long-desc').innerHTML = project.longDesc;
        document.querySelector('#project-github-link').href = project.githubUrl;
        
        const categoryBadgeContainer = document.querySelector('#project-category-badge');
        categoryBadgeContainer.innerHTML = `<span class="tech-badge">${project.category.toUpperCase()}</span>`;

        const techListEl = document.querySelector('#project-tech-list');
        techListEl.innerHTML = project.technologies.map(tech => `<span class="tech-badge">${tech}</span>`).join('');
        
        const galleryEl = document.querySelector('#project-gallery');
        
        if (project.youtubeUrl && project.stillUrl) {
            galleryEl.innerHTML = `
                <a href="${project.youtubeUrl}" target="_blank" rel="noopener noreferrer" class="project-video-link">
                    <img src="${project.stillUrl}" alt="Demonstração em vídeo do projeto ${project.title}">
                </a>
                <p class="video-caption">
                    Clique na imagem ao lado para ver a demonstração no YouTube.
                </p>
            `;
        } else {
            galleryEl.innerHTML = `<p>Nenhuma imagem de demonstração disponível para este projeto.</p>`;
        }
    }
}

new PortfolioApp();