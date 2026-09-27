document.addEventListener('DOMContentLoaded', () => {
  
  // 1. Contador de tiempo en vivo (Ajusta la fecha de inicio)
  const startDate = new Date('2026-03-27T00:00:00');

  function updateTimer() {
    const now = new Date();
    const diff = now - startDate;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById('timer').innerText = 
      `${days} días, ${hours}h, ${minutes}m y ${seconds}s juntos`;
  }
  setInterval(updateTimer, 1000);
  updateTimer();

  // 2. Control de Música de Fondo
  const music = document.getElementById('bg-music');
  const musicBtn = document.getElementById('music-btn');

  musicBtn.addEventListener('click', () => {
    if (music.paused) {
      music.play();
      musicBtn.innerText = "⏸️";
    } else {
      music.pause();
      musicBtn.innerText = "🎵";
    }
  });

  // 3. Generación de Corazones Flotantes
  const heartsContainer = document.getElementById('hearts-container');
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement('div');
    heart.classList.add('heart-bg');
    heart.innerText = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 3 + 5) + 's';
    heart.style.animationDelay = Math.random() * 5 + 's';
    heartsContainer.appendChild(heart);
  }

  // 4. Lógica del Quiz Interactivo
  const quizOptions = document.querySelectorAll('.quiz-option');
  const responseDiv = document.getElementById('quiz-response');

  quizOptions.forEach(button => {
    button.addEventListener('click', () => {
      const isCorrect = button.getAttribute('data-correct') === 'true';

      if (isCorrect) {
        responseDiv.style.color = "#2b8a3e";
        responseDiv.innerText = "¡Correcto! ¡Absolutamente todo de ti me enamora! 🥰✨";
        confetti({ particleCount: 120, spread: 70, origin: { y: 0.7 } });
      } else {
        responseDiv.style.color = "#c2255c";
        responseDiv.innerText = "Incorrecto, ¡Absolutamente todo de ti me enamora! 🥰";
      }
    });
  });

  // 5. Mostrar / Ocultar Carta Decorativa
  const btnLetter = document.getElementById('btn-letter');
  const letter = document.getElementById('letter');

  btnLetter.addEventListener('click', () => {
    const isHidden = letter.style.display === 'none' || letter.style.display === '';
    letter.style.display = isHidden ? 'block' : 'none';
    
    if (isHidden) {
      confetti({ particleCount: 90, spread: 80, origin: { y: 0.8 } });
    }
  });

});