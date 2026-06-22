document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('toggle-fullscreen');
    
    toggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('fullscreen-mode');
        
        // Update button text / icon
        if (document.body.classList.contains('fullscreen-mode')) {
            toggleBtn.innerHTML = '<span class="btn-icon">🚪</span> Exit Fullscreen';
        } else {
            toggleBtn.innerHTML = '<span class="btn-icon">🖥️</span> Fullscreen';
        }
    });

    // Listen for Escape key to exit fullscreen
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && document.body.classList.contains('fullscreen-mode')) {
            document.body.classList.remove('fullscreen-mode');
            toggleBtn.innerHTML = '<span class="btn-icon">🖥️</span> Fullscreen';
        }
    });
});
