document.addEventListener('DOMContentLoaded', function() {
  const text = document.getElementById('circle-text').innerText;
  const textContainer = document.querySelector('.text');
  
  document.getElementById('circle-text').style.display = 'none';
  
  for (let i = 0; i < text.length; i++) {
    const span = document.createElement('span');
    span.innerText = text[i];
    
    const angle = (i * 5.5); // Reduced angle to fit more characters
    span.style.transform = `rotate(${angle}deg)`;
    span.dataset.baseAngle = angle; // Store the base angle for later use
    
    textContainer.appendChild(span);
  }
  
  window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const rotationFactor = scrollPosition / 3; // Increased rotation speed (smaller divisor = faster rotation)
    
    textContainer.style.transform = `rotate(${rotationFactor}deg)`;
  });
});
