// Botão "Voltar ao Topo"
const btnTopo = document.createElement('button');
btnTopo.textContent = 'Topo';
btnTopo.style.position = 'fixed';
btnTopo.style.bottom = '30px';
btnTopo.style.right = '30px';
btnTopo.style.padding = '10px 15px';
btnTopo.style.fontSize = '16px';
btnTopo.style.backgroundColor = '#3366cc';
btnTopo.style.color = 'white';
btnTopo.style.border = 'none';
btnTopo.style.borderRadius = '5px';
btnTopo.style.cursor = 'pointer';
btnTopo.style.display = 'none'; // escondido inicialmente

document.body.appendChild(btnTopo);

btnTopo.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
  btnTopo.style.display = window.scrollY > 300 ? 'block' : 'none';
});

// Botão para alternar tema claro/escuro
const temaBtn = document.createElement('button');
temaBtn.textContent = 'Alternar Tema';
temaBtn.style.position = 'fixed';
temaBtn.style.bottom = '80px';
temaBtn.style.right = '30px';
temaBtn.style.padding = '10px 15px';
temaBtn.style.fontSize = '16px';
temaBtn.style.backgroundColor = '#444';
temaBtn.style.color = 'white';
temaBtn.style.border = 'none';
temaBtn.style.borderRadius = '5px';
temaBtn.style.cursor = 'pointer';

document.body.appendChild(temaBtn);

// Classe escura
const darkThemeStyles = document.createElement('style');
darkThemeStyles.textContent = `
  body.dark-mode {
    background-color: #121212;
    color: #f0f0f0;
  }
  body.dark-mode section {
    background-color: #1e1e1e;
    box-shadow: none;
  }
  body.dark-mode header,
  body.dark-mode footer,
  body.dark-mode nav {
    background-color: #222;
  }
  body.dark-mode a {
    color: #88c9ff;
  }
`;
document.head.appendChild(darkThemeStyles);

temaBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Cria menu de navegação
const nav = document.createElement('nav');
nav.innerHTML = `
  <ul class="menu">
    <li><a href="#sobre">Sobre</a></li>
    <li><a href="#habilidades">Habilidades</a></li>
    <li><a href="#projetos">Projetos</a></li>
    <li><a href="#contato">Contato</a></li>
    <li><a href="#redes">Redes Sociais</a></li>
  </ul>
`;
document.body.insertBefore(nav, document.body.children[1]);

// Cria seção Habilidades com descrição e lista
const secaoHabilidades = document.createElement('section');
secaoHabilidades.id = 'habilidades';
secaoHabilidades.innerHTML = `
  <h2>Habilidades</h2>
  <p>Tenho experiência com tecnologias em  desenvolvimento web como HTML, CSS, JavaScript e também com frameworks modernos como React e Node.js. Estou sempre buscando aprender novas ferramentas e boas práticas de programação.</p>
  <ul>
    <li>✅ HTML5</li>
    <li>🎨 CSS3</li>
    <li>⚙️ JavaScript</li>
    <li>⚛️ React</li>
    <li>🟩 Node.js</li>
    <li>🌐 Git e GitHub</li>
    <li>📱 Design Responsivo</li>
  </ul>
`;
document.body.appendChild(secaoHabilidades);


