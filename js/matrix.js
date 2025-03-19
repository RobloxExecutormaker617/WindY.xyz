const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const nums = '0123456789';
const alphabet = katakana + latin + nums;

const fontSize = 16;
const columns = canvas.width / fontSize;
const rainDrops = Array(Math.floor(columns)).fill(0);

const draw = () => {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = '#0F0';
  ctx.font = `${fontSize}px monospace`;

  rainDrops.forEach((y, index) => {
    const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    const x = index * fontSize;
    ctx.fillText(text, x, y);

    if (y > canvas.height && Math.random() > 0.975) {
      rainDrops[index] = 0;
    } else {
      rainDrops[index] = y + fontSize;
    }
  });
};

setInterval(draw, 30);

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
