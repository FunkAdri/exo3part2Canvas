var c = document.getElementById("canvas1");
var ctx = c.getContext("2d");

// Corps
ctx.beginPath()
ctx.moveTo(150,150);
ctx.lineTo(500,150);
ctx.quadraticCurveTo(550,175,500,200);
ctx.lineTo(400,200);
ctx.lineTo(400,500);
ctx.quadraticCurveTo(375,525,350,500);
ctx.lineTo(350,400);
ctx.quadraticCurveTo(325,350,300,400);
ctx.lineTo(300,500);
ctx.quadraticCurveTo(275,525,250,500);
ctx.lineTo(250,200);
ctx.lineTo(150,200);
ctx.quadraticCurveTo(100,175,150,150);
ctx.fillStyle = "#976f0f"
ctx.fill()

// Boutons
ctx.beginPath()
ctx.moveTo(325,375)
ctx.arc(325,225,15,0,Math.PI*2,true);
ctx.fillStyle = "#7a2976"
ctx.fill()

ctx.beginPath()
ctx.moveTo(325,375)
ctx.arc(325,285,15,0,Math.PI*2,true);
ctx.fillStyle = "#7a2976"
ctx.fill()

// Tête
ctx.beginPath();
ctx.arc(325,100,75,0,Math.PI*2,true);
ctx.fillStyle = "#976f0f";
ctx.fill();

// Yeux
ctx.beginPath()
ctx.moveTo(325,375)
ctx.arc(300,85,15,0,Math.PI*2,true);
ctx.fillStyle = "#ffffff"
ctx.fill()

ctx.beginPath()
ctx.moveTo(325,375)
ctx.arc(350,85,15,0,Math.PI*2,true);
ctx.fillStyle = "#ffffff"
ctx.fill()

// Sourcils
ctx.beginPath()
ctx.moveTo(285,65)
ctx.quadraticCurveTo(300,50,315,65)
ctx.lineWidth = "3"
ctx.strokeStyle = "#ded2b4"
ctx.stroke()

ctx.beginPath()
ctx.moveTo(335,65)
ctx.quadraticCurveTo(350,50,365,65)
ctx.lineWidth = "3"
ctx.strokeStyle = "#ded2b4"
ctx.stroke()

// Bouche
ctx.beginPath()
ctx.moveTo(275,115);
ctx.quadraticCurveTo(325,135,375,115)
ctx.lineWidth = "3"
ctx.strokeStyle = "#f00e01"
ctx.stroke()

ctx.beginPath()
ctx.moveTo(275,115);
ctx.quadraticCurveTo(325,155,375,115)
ctx.lineWidth = "3"
ctx.strokeStyle = "#f00e01"
ctx.stroke()
