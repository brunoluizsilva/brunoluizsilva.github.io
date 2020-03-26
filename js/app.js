/* SCROLL SUAVE */

const menuItems = document.querySelectorAll('.fixo-topo a[href^="#"]');
const introLink = document.querySelector('.intro .js-btn')


menuItems.forEach((item) => {
  item.addEventListener('click', scrollToIdOnClick);
})

introLink.addEventListener('click',scrollToIdOnClick);


function getScrollTopByHref (element) {
  const id = element.getAttribute('href');
  return document.querySelector(id).offsetTop;
  
}


function scrollToIdOnClick(event) {
  event.preventDefault();
  const to = getScrollTopByHref(event.target) - 54;
  scrollToPosition(to);
  
}

function scrollToPosition(to) {
  // window.scroll({
  //   top: to,
  //   behavior: "smooth",
  // });

  smoothScrollTo(0, to, 600);
}


/**
 * Smooth scroll animation
 * @param {int} endX: destination x coordinate
 * @param {int} endY: destination y coordinate
 * @param {int} duration: animation duration in ms
 */
function smoothScrollTo(endX, endY, duration) {
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== 'undefined' ? duration : 400;

  // Easing function
  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
    return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
  };

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 60); // 60 fps
};


/* EFEITO HOVER NOS LINKS*/

function initHoverLinks() {
  const linksMenu = document.querySelectorAll('.fixo-topo a[href^="#"]');

  const linkLogo = document.querySelector('.navbar-brand');
  
    function linkAtivado(event, index) {
      linksMenu.forEach((link) => {
        link.classList.remove('ativado');
      })
      this.classList.toggle('ativado');
      if(this[0] === 'click') {
        this[1].classList.toggle('ativado')
      }

    }

    linksMenu.forEach((link) => {
      link.addEventListener('click', linkAtivado)
    })



    function logoAtivado(e) {
      linkLogo.classList.remove('ativado');
      linksMenu[1].classList.add('ativado')
    }
    linkLogo.addEventListener('click', logoAtivado);


    function introAtivado (e) {
      linksMenu.forEach((link) => {
        link.classList.remove('ativado');
      })
      linksMenu[3].classList.toggle('ativado');
    }
    introLink.addEventListener('click', introAtivado);
  }

  

initHoverLinks();

/*EFEITO MAQUINA DE ESCREVER */
function initTypeWriter(){ 
  function typeWriter(e) {
    const textoArray = e.innerText.split('');
    e.innerText = ' ';
    textoArray.forEach((letra, index) => {
      setTimeout(function(){
        e.innerText += letra;
      }, 75 * index)
    });
  }
  const titulo = document.querySelector('.maquina-escrever');
  typeWriter(titulo);
}

initTypeWriter();

/*EFEITO ANIMAÇÃO SCROLL*/
function initAnimationScroll() {
  const sections = document.querySelectorAll('.js-scroll');

  if(sections.length) {
    const windowMetade = window.innerHeight * 0.6;

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = (sectionTop - windowMetade) < 0;
        if(isSectionVisible) {
          section.classList.add('ativo');
        }
      })
    }
    animaScroll();

    window.addEventListener('scroll', animaScroll)

  }

}

initAnimationScroll();


/*FORMULARIO*/


new SimpleForm({
  form: ".form-sendgrid", // seletor do formulário
  button: "#enviar", // seletor do botão
  erro: "<div id='form-erro'><h2>Erro no envio!</h2><p>Tente para o email brunoluiz.silva@outlook.com ou tel/whatsapp: (21) 98308-1363</p></div>", // mensagem de erro
  sucesso: "<div id='form-sucesso'><h2>Mensagem enviada com sucesso!</h2><p>Em breve eu entro em contato com você.</p></div>", // mensagem de sucesso
});


