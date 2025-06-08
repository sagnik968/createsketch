// Create fireflies
function createFireflies(count) {
    const container = document.querySelector('.firefly-container');
    for (let i = 0; i < count; i++) {
        const firefly = document.createElement('div');
        firefly.className = 'firefly';
        firefly.style.left = `${Math.random() * 100}vw`;
        firefly.style.animationDelay = `${Math.random() * 25}s`;
        container.appendChild(firefly);
    }
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Create 60 fireflies
    createFireflies(60);

    // Handle search input
    const searchInput = document.querySelector('.search-input');
    const generateBtn = document.querySelector('.generate-btn');
    const micBtn = document.querySelector('.mic-icon');

    generateBtn.addEventListener('click', () => {
        const prompt = searchInput.value.trim();
        if (prompt) {
            // TODO: Implement image generation
            console.log('Generating image for prompt:', prompt);
        }
    });

    // Handle enter key in search input
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            generateBtn.click();
        }
    });

    // Handle microphone input
    micBtn.addEventListener('click', () => {
        if ('webkitSpeechRecognition' in window) {
            const recognition = new webkitSpeechRecognition();
            recognition.continuous = false;
            recognition.interimResults = false;

            recognition.onstart = () => {
                micBtn.style.color = 'var(--primary-color)';
            };

            recognition.onend = () => {
                micBtn.style.color = '';
            };

            recognition.onresult = (event) => {
                const transcript = event.results[0][0].transcript;
                searchInput.value = transcript;
            };

            recognition.start();
        } else {
            alert('Speech recognition is not supported in your browser.');
        }
    });

    // Handle shortcuts
    const shortcuts = document.querySelectorAll('.shortcut');
    shortcuts.forEach(shortcut => {
        shortcut.addEventListener('click', () => {
            const action = shortcut.querySelector('span').textContent;
            // TODO: Implement shortcut actions
            console.log('Shortcut clicked:', action);
        });
    });
}); 