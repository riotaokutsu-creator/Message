document.addEventListener('DOMContentLoaded', () => {
    // 1. Reveal Text Animation on Load
    const revealElements = document.querySelectorAll('.reveal-text');
    revealElements.forEach(el => {
        void el.offsetWidth; 
        el.classList.add('visible');
    });

    // 2. Generate Background Floating Hearts
    const bgContainer = document.getElementById('bg-hearts');
    const heartSymbols = ['❤️', '💖', '💕', '🌸', '✨'];
    
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart-bg');
        heart.innerText = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
        
        const size = Math.random() * 2 + 1;
        const left = Math.random() * 100;
        const duration = Math.random() * 10 + 10;
        const delay = Math.random() * 5;

        heart.style.fontSize = `${size}rem`;
        heart.style.left = `${left}%`;
        heart.style.animationDuration = `${duration}s`;
        heart.style.animationDelay = `-${delay}s`;

        bgContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, duration * 1000);
    }

    for(let i=0; i<15; i++) createHeart();
    setInterval(createHeart, 1000);

    // 3. Modal Logic
    const btn = document.getElementById('thankYouBtn');
    const modal = document.getElementById('imageModal');
    const modalContent = document.getElementById('modalContent');
    const closeModal = document.getElementById('closeModal');

    function openModal() {
        modal.classList.remove('hidden');
        requestAnimationFrame(() => {
            modalContent.classList.add('modal-enter-active');
            modalContent.classList.remove('modal-enter');
        });
        triggerConfetti();
    }

    function hideModal() {
        modalContent.classList.remove('modal-enter-active');
        modalContent.classList.add('modal-enter');
        setTimeout(() => {
            modal.classList.add('hidden');
        }, 300);
    }

    btn.addEventListener('click', openModal);
    closeModal.addEventListener('click', hideModal);
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) hideModal();
    });

    // 4. Confetti Effect
    function triggerConfetti() {
        const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#ffc0cb'];
        
        for (let i = 0; i < 100; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            
            const bg = colors[Math.floor(Math.random() * colors.length)];
            const left = Math.random() * 100 + 'vw';
            const animDuration = Math.random() * 3 + 2 + 's';
            const size = Math.random() * 10 + 5 + 'px';
            
            confetti.style.backgroundColor = bg;
            confetti.style.left = left;
            confetti.style.top = '-10px';
            confetti.style.width = size;
            confetti.style.height = size;
            confetti.style.animationDuration = animDuration;
            
            document.body.appendChild(confetti);
            
            setTimeout(() => {
                confetti.remove();
            }, 5000);
        }
    }
});