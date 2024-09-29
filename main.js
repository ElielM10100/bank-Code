document.addEventListener('DOMContentLoaded', function() {
  // Gatilho Mental: Urgência na seção de download
  const chamadaSection = document.getElementById('chamada');
  setTimeout(function() {
      chamadaSection.style.backgroundColor = '#e74c3c'; // Mudar cor para vermelho para destacar urgência
      chamadaSection.querySelector('p').innerText = "Não perca tempo, cada minuto conta!";
  }, 10000); // Após 10 segundos, destacamos a urgência

  // Scroll suave para as seções
  const scrollLinks = document.querySelectorAll('a[href^="#"]');
  scrollLinks.forEach(link => {
      link.addEventListener('click', function(e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          target.scrollIntoView({ behavior: 'smooth' });
      });
  });

  // Animação de entrada para elementos
  const sections = document.querySelectorAll('section');
  const options = {
      root: null,
      threshold: 0.1,
      rootMargin: '0px',
  };
  
  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
          }
      });
  }, options);
  
  sections.forEach(section => {
      observer.observe(section);
  });
});
