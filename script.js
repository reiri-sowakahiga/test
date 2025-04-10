document.addEventListener('DOMContentLoaded', function() {
  const text = document.getElementById('circle-text').innerText;
  const textContainer = document.querySelector('.text');
  
  document.getElementById('circle-text').style.display = 'none';
  
  for (let i = 0; i < text.length; i++) {
    const span = document.createElement('span');
    span.innerText = text[i];
    
    const angle = (i * 8.5); // Adjust this value to fit your circle
    span.style.transform = `rotate(${angle}deg)`;
    span.dataset.baseAngle = angle; // Store the base angle for later use
    
    textContainer.appendChild(span);
  }
  
  window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const rotationFactor = scrollPosition / 10; // Adjust this value to control rotation speed
    
    textContainer.style.transform = `rotate(${rotationFactor}deg)`;
  });
});
