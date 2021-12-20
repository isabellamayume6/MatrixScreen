const canvas = document.getElementById("matrix");
const contexto = canvas.getContext("2d");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
const letras = ["日","ﾊ","ﾐ","ﾋ","ｰ","ｳ","ｼ","ﾅ","ﾓ","ﾆ","ｻ","ﾜ","ﾂ","ｵ","ﾘ","ｱ","ﾎ","ﾃ","ﾏ","ｹ","ﾒ","ｴ","ｶ","ｷ","ﾑ","ﾕ","ﾗ","ｾ","ﾈ","ｽ","ﾀ","ﾇ","ﾍ",":","・",".","=","*","+","-","<",">","¦","｜","ﾘ"];

const fontSize = 18;
const columns = canvas.width / fontSize;
const y = new Array(Math.floor(columns)).fill(1);
function draw() {
 contexto.fillStyle = "rgba(0, 0, 0, 0.05)";
 contexto.fillRect(0, 0, canvas.width, canvas.height);
 contexto.fillStyle = "#0F0";
 contexto.font = `${fontSize}px arial`;
  for (let i = 0; i < y.length; i++) {
    if (y[i] * fontSize > canvas.height && Math.random() > 0.95) {
        y[i] = 0;
      }
    const texto = letras[Math.floor(Math.random() * letras.length)];
 contexto.fillText(texto, i * fontSize, y[i] * fontSize);
    y[i]++;
  }
  window.requestAnimationFrame(draw);
}
draw()