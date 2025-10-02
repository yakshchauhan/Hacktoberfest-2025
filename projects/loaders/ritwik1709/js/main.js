// Simple JavaScript for the Beautiful Loader

document.addEventListener('DOMContentLoaded', function() {
    const loaderText = document.querySelector('.loader-text');
    const circles = document.querySelectorAll('.loader-circle');
    
    // Dynamic loading messages
    const messages = [
        'Loading...',
        'Please wait...',
        'Almost ready...',
        'Getting things ready...'
    ];
    
    let messageIndex = 0;
    
    // Change loading message every 2 seconds
    setInterval(() => {
        loaderText.textContent = messages[messageIndex];
        messageIndex = (messageIndex + 1) % messages.length;
    }, 2000);
    
    // Add subtle color animation to circles
    setInterval(() => {
        circles.forEach((circle, index) => {
            const colors = [
                ['#ff6b6b', '#ff8e8e'],
                ['#4ecdc4', '#6ed5cc'],
                ['#45b7d1', '#6bc5d7']
            ];
            
            const currentColor = colors[index][0];
            const newColor = colors[index][1];
            
            // Toggle between colors
            if (circle.style.borderTopColor === currentColor || !circle.style.borderTopColor) {
                circle.style.borderTopColor = newColor;
            } else {
                circle.style.borderTopColor = currentColor;
            }
        });
    }, 1500);
    
    // Add mouse hover effect
    const loaderWrapper = document.querySelector('.loader-wrapper');
    
    loaderWrapper.addEventListener('mouseenter', () => {
        circles.forEach(circle => {
            circle.style.transform += ' scale(1.1)';
        });
        loaderText.style.transform += ' scale(1.1)';
    });
    
    loaderWrapper.addEventListener('mouseleave', () => {
        circles.forEach(circle => {
            circle.style.transform = circle.style.transform.replace(' scale(1.1)', '');
        });
        loaderText.style.transform = loaderText.style.transform.replace(' scale(1.1)', '');
    });
    
    // Add click effect
    loaderWrapper.addEventListener('click', () => {
        circles.forEach(circle => {
            circle.style.animationDuration = '0.5s';
        });
        
        setTimeout(() => {
            circles.forEach(circle => {
                circle.style.animationDuration = '2s';
            });
        }, 500);
    });
});

// Add smooth transitions for all elements
const style = document.createElement('style');
style.textContent = `
    .loader-circle,
    .loader-text {
        transition: all 0.3s ease;
    }
`;
document.head.appendChild(style);