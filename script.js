document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeSmoothScroll();
});

function initializeNavigation() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        
        if (currentPath.includes(href) || 
            (currentPath.endsWith('/') && href === 'index.html') ||
            (currentPath.includes('index.html') && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

function initializeSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (!targetId) return;
            
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

function copyPrompt(elementId) {
    const promptElement = document.getElementById(elementId);
    if (!promptElement) return;

    const textToCopy = promptElement.textContent || promptElement.innerText;
    
    navigator.clipboard.writeText(textToCopy).then(() => {
        const header = promptElement.previousElementSibling;
        if (!header) return;
        
        const copyBtn = header.querySelector('.btn-copy');
        if (!copyBtn) return;
        
        // Clear any pending timeout to prevent race condition on rapid clicks
        if (copyBtn._timeoutId !== undefined) {
            clearTimeout(copyBtn._timeoutId);
        }
        
        const originalText = copyBtn.querySelector('span').textContent;
        const svgHTML = copyBtn.querySelector('svg').outerHTML;
        
        copyBtn.classList.add('copied');
        copyBtn.innerHTML = `
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
            <span>Copied!</span>
        `;
        
        copyBtn._timeoutId = setTimeout(() => {
            copyBtn.classList.remove('copied');
            copyBtn.innerHTML = `${svgHTML}<span>${originalText}</span>`;
            copyBtn._timeoutId = undefined;
        }, 2000);
        
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
}
