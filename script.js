document.addEventListener('DOMContentLoaded', function() {
  const text = document.getElementById('circle-text').innerText;
  const textContainer = document.querySelector('.text');
  
  document.getElementById('circle-text').style.display = 'none';
  
  for (let i = 0; i < text.length; i++) {
    const span = document.createElement('span');
    span.innerText = text[i];
    
    const angle = (i * 8.5); // Adjust this value to fit your circle
    span.style.transform = `rotate(${angle}deg)`;
    
    textContainer.appendChild(span);
  }
});
