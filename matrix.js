const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = 'HD&#YD#IJKLMNOPQRSTUVWXYZ0123456789';
const fontSize = 16;
const columns = canvas.width / fontSize;

const drops = Array(Math.floor(columns)).fill(0);

function draw() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = '#00ff00';
  ctx.font = `${fontSize}px monospace`;

  drops.forEach((y, index) => {
    const text = letters.charAt(Math.floor(Math.random() * letters.length));
    const x = index * fontSize;
    ctx.fillText(text, x, y * fontSize);

    if (y * fontSize > canvas.height && Math.random() > 0.975) {
      drops[index] = 0;
    } else {
      drops[index]++;
    }
  });
}

setInterval(draw, 33);
