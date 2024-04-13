const chk = document.getElementById('chk');
const body = document.body;
const nav = document.querySelector('nav');
const header = document.querySelector('.header-1');
const divs = document.querySelectorAll('div');
const ul = nav.querySelector('ul');
const lis = ul.querySelectorAll('li');
const footer = document.querySelector('footer');
const paragraphs = document.querySelectorAll('p'); 
const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const a = document.querySelector('a');
const sections = document.querySelectorAll('section');
const contact = document.querySelector('.contact');

// Adicionando um id ao elemento pai com a classe 'contact'
contact.setAttribute('id', 'dark');

chk.addEventListener('change', () => {
  body.classList.toggle('dark');
  nav.classList.toggle('dark');
  header.classList.toggle('dark');
  ul.classList.toggle('dark');
  a.classList.toggle('dark');
  lis.forEach(li => li.classList.toggle('dark'));
  footer.classList.toggle('dark');
  divs.forEach(div => div.classList.toggle('dark'));
  paragraphs.forEach(p => p.classList.toggle('dark'));
  h1.classList.toggle('dark');
  h2.classList.toggle('dark');
  sections.forEach(section => section.classList.toggle('dark'));
  
  // Aplicando a classe 'dark' ao elemento pai com id 'dark'
  document.getElementById('dark').classList.toggle('dark');
});

function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "C:\Users\PDITA3257W\Desktop\Programar\isk\img\menu.png";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "C:\Users\PDITA3257W\Desktop\Programar\isk\img\menu.png";
    }
}