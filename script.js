
document.addEventListener('DOMContentLoaded', function() {
    
    const cards = document.querySelectorAll('.card');
    
    
    cards.forEach(card => {
        card.addEventListener('click', function() {
           
            const cardNumber = this.getAttribute('data-card');
            
   
            const fileName = `hamburguer/hamburguer0${cardNumber}.html`;
            
          
            this.style.transform = 'scale(0.95)';
            this.style.opacity = '0.8';
            
            
            setTimeout(() => {
                window.location.href = fileName;
            }, 150);
        });
    });
    
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.cursor = 'pointer';
        });
    });
    
    
    const images = document.querySelectorAll('.card-img');
    images.forEach(img => {
        img.addEventListener('error', function() {
          
            this.parentElement.style.backgroundColor = '#ddd';
            this.style.display = 'none';
            
            
            const fallbackText = document.createElement('div');
            fallbackText.textContent = 'Imagem não disponível';
            fallbackText.style.cssText = `
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #666;
                font-size: 14px;
                font-style: italic;
            `;
            this.parentElement.appendChild(fallbackText);
        });
    });
});