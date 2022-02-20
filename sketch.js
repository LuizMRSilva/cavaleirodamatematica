{var tela = 1;
var largura = 175;
var altura = 40;
var xmenu = 15;
var ymenu1 = 90;
var ymenu2 = 139;
var ymenu3 = 186;
var xin = -19
var yin = 265
var nivel = 1;
var resposta1 = 10;
var xresposta1 = 150;
var yresposta1 = 225;
var rresposta1 = 25;
var resposta2 = 25;
var xresposta2 = 300;
var yresposta2 = 225;
var rresposta2 = 25;
var respostaerrada = 50;
var xrespostaerrada = 150;
var yrespostaerrada = 225;
var rrespostaerrada = 25;
var xperso = 0;
var yperso = 180;
var rperso = 30;
var xperso2 = 0;
var yperso2 = 180;
var ype = yperso2;
var rperso2 = 30;
let img;
let sprite;
let ti;
let mymusic;
let myphoto;
let mapa;
let piso;
let spriteiig;
let inform
let bros
} // Variáveis e let

function preload() {
  fundo = loadImage("Menu Inicial/bg.png"); // Background da tela inicial.
  sprite = loadImage("Menu Inicial/Sprite.png");
  tit = loadImage("Menu Inicial/tittle.png");
  fundo2 = loadImage("Menu Inicial/bg instruções.png"); // Background da tela de instruções.
  fundo3 = loadImage("Menu Inicial/bg créditos.png"); // Background da tela de créditos.
  myphoto = loadImage("Menu Inicial/my photo.jpg"); // Minha foto
  mapa = loadImage("level1/mapa.png"); // Mapa do jogo
  piso = loadImage("level1/piso.png"); // Chão do jogo
  spriteig = loadImage("level1/Spriteingame.png"); // Sprite em jogo
  inform = loadImage("Menu Inicial/infob.png"); // Botão
  bros = loadImage("Menu Inicial/bros.jpg");
  // Imagens
  mymusic = loadSound("Menu Inicial/Song.mp3");
  // Músicas
} // Imagens e Músicas

function setup() {
  createCanvas(450, 300);
  mymusic.play();
}

function draw() {
  textStyle(NORMAL);

  // Menu com três opções
  // Tela do Menu.
  if (tela == 1) {
    background(100);

    image(fundo, 0, 0);
    image(sprite, 200, 11);
    sprite.resize(250, 298);
    image(tit, -55, -130);
    tit.resize(328, 328);

    // Texto Rodapé
    textSize(11);
    textStyle(BOLD);
    textAlign(LEFT);
    fill(250);
    noStroke();
    text("© 2021 Luiz Matheus Inc.", 5, 293);

    // Iniciar o Jogo

    // Texto
    textSize(25);
    textStyle(BOLD);
    textAlign(RIGHT);

    // Borda (botão)
    if (
      mouseX > xmenu &&
      mouseX < xmenu + largura &&
      mouseY > ymenu1 &&
      mouseY < ymenu1 + altura
    ) {
      stroke(222);
      fill("orange");
      rect(xmenu, ymenu1, largura, altura, 15, 111, 15, 111);
      if (mouseIsPressed) {
        tela = 2;
      }
    }

    // Texto
    fill(240);
    noStroke();
    text("Iniciar", 142, 119);

    //Informações sobre o Jogo

    // Texto
    textSize(25);
    textStyle(BOLD);
    textAlign(RIGHT);

    // Borda (botão)
    if (
      mouseX > xmenu &&
      mouseX < xmenu + largura &&
      mouseY > ymenu2 &&
      mouseY < ymenu2 + altura
    ) {
      stroke(222);
      fill("orange");
      rect(xmenu, ymenu2, largura, altura, 15, 111, 15, 111);
      if (mouseIsPressed) {
        tela = 3;
      }
    }

    // Texto
    fill(240);
    noStroke();
    text("Informações", 180, 167);

    //Créditos

    // Texto
    textSize(25);
    textStyle(BOLD);
    textAlign(RIGHT);

    // Borda (botão)
    if (
      mouseX > xmenu &&
      mouseX < xmenu + largura &&
      mouseY > ymenu3 &&
      mouseY < ymenu3 + altura
    ) {
      stroke(222);
      fill("orange");
      rect(xmenu, ymenu3, largura, altura, 15, 111, 15, 111);
      if (mouseIsPressed) {
        tela = 4;
      }
    }

    // Texto
    fill(240);
    noStroke();
    text("Créditos", 157, 215);
  }
  // Tela de Jogo
  else if (tela == 2) {
    background(100);
    image(mapa, 0, 0);
    mapa.resize(450, 300);
    image(piso, 0, 229);
    piso.resize(600, 70);

    fill(240);
    stroke("#222222");
    strokeWeight(5);
    textSize(20);
    textAlign(RIGHT);
    textStyle(BOLD);
    text("Quanto é 5+5?", 150, 30);

    fill(240);
    stroke("#222222");
    strokeWeight(5);
    textSize(17);
    textAlign(RIGHT);
    textStyle(BOLD);
    text("Nível: " + nivel, 70, 58);

    ellipse(xresposta1, yresposta1, 2 * rresposta1, 2 * rresposta1);
    fill(240);
    stroke("#222222");
    strokeWeight(5);
    textSize(20);
    textAlign(CENTER);
    textStyle(BOLD);
    text("" + resposta1, xresposta1, yresposta1);

    //(jogador);
    fill(215);
    //ellipse(x,y,50,50);
    image(spriteig, xperso, yperso, 2 * rperso, 2 * rperso);
    spriteig.resize(50, 60);

    //(movimentação do jogador);
    if (keyIsDown(LEFT_ARROW)) {
      xperso = xperso - 5;
    }

    if (keyIsDown(RIGHT_ARROW)) {
      xperso = xperso + 5;
    }

    if (dist(xresposta1, yresposta1, xperso, yperso) < rresposta1 + rperso) {
      tela = 8;
    }
  }
  // Informações
  else if (tela == 3) {
    background(200);
    image(fundo2, 0, 0);

    fill(240);
    stroke("#222222");
    strokeWeight(5);

    textSize(25);
    textAlign(CENTER);
    textStyle(BOLD);
    text("Informações (1/1)", 220, 35);

    noStroke();
    textSize(15);
    textAlign(CENTER);
    textStyle(BOLD);
    text("Ano: 1° ano do Ensino Fundamental", 222, 100);
    text("Matéria: EF01MA08", 222, 130);

    textAlign(RIGHT);
    textStyle(BOLD);
    textSize(11);
    fill(50);
    text('Aperte "ESC" para retornar ao menu inicial.', 435, 290);
    

    if (
      mouseX > xin &&
      mouseX < xin + largura &&
      mouseY > yin &&
      mouseY < yin + altura
    ) {
      rect(xin, yin, largura, altura, 15, 111, 15, 111);
      if (mouseIsPressed) {
        tela = 6;
      }
    }
    image(inform, -19, 180);
    inform.resize(200, 215);
      
  }
  // Créditos
  else if (tela == 4) {
    background(100);
    image(fundo3, 0, 0);

    image(myphoto, 45, 85);
    myphoto.resize(88, 88);

    fill(240);
    textSize(13);
    textAlign(CENTER);
    textStyle(BOLD);
    text("Programador: Luiz Matheus Ribeiro da Silva", 275, 100);
    text("Turma: 05A", 174, 120);
    
        fill(240);
    textSize(13);
    textAlign(CENTER);
    textStyle(BOLD);
    text("Música: Game On por HeatleyBros \n https://youtu.be/wsrQogUxOIA", 247, 200);
    

    image(bros, 45, 165);
    bros.resize(88, 88);


    fill(240);
    stroke("#222222");
    strokeWeight(5);

    textSize(25);
    textAlign(CENTER);
    textStyle(BOLD);
    text("Créditos", 220, 40);

    noStroke();
    textAlign(RIGHT);
    textStyle(BOLD);
    textSize(11);
    fill(50);
    text('Aperte "ESC" para retornar ao menu inicial.', 435, 290);
  }
  // Tela win
  else if (tela == 5) {
    background(200);
    image(fundo, 0, 0);

    fill(240);
    stroke("#222222");
    strokeWeight(5);

    textSize(25);
    textAlign(CENTER);
    textStyle(BOLD);
    text("Você venceu!", 220, 35);
    
    
    textAlign(RIGHT);
    textStyle(BOLD);
    textSize(11);
    fill(200);
    text('Para jogar novamente, reinicie o jogo.', 435, 290);
  }
  // Tela mais informações
  else if (tela == 6) {
    background(200);
    image(fundo3, 0, 0);

    fill(240);
    stroke("#222222");
    strokeWeight(5);

    textSize(25);
    textAlign(CENTER);
    textStyle(BOLD);
    text("Informações (2/2)", 220, 35);

    noStroke();
    textSize(11);
    textAlign(CENTER);
    textStyle(BOLD);
    text("O jogo tem o intuito de fazer com que o jogador consiga resolver\nequações matemáticas.", 222, 100);
    text("Resolver e elaborar problemas de adição e de subtração, envolvendo\nnúmeros de até dois algarismos, com os significados de juntar,\nacrescentar, separar e retirar, com o suporte de imagens e/ou material\nmanipulável, utilizando estratégias e formas de registro pessoais.", 222, 150);
    textAlign(RIGHT);
    textStyle(BOLD);
    textSize(11);
    fill(50);
    text('Aperte "ESC" para retornar ao menu inicial.', 435, 290);
}
    // Fase 2
  else if (tela == 7) {
    background(100);
    image(mapa, 0, 0);
    mapa.resize(450, 300);
    image(piso, 0, 229);
    piso.resize(600, 70);

    fill(240);
    stroke("#222222");
    strokeWeight(5);
    textSize(20);
    textAlign(RIGHT);
    textStyle(BOLD);
    text("Quanto é 5x5?", 150, 30);

    fill(240);
    stroke("#222222");
    strokeWeight(5);
    textSize(17);
    textAlign(RIGHT);
    textStyle(BOLD);
    text("Nível: " + nivel, 70, 58);

    ellipse(xresposta2, yresposta2, 2 * rresposta2, 2 * rresposta2);
    fill(240);
    stroke("#222222");
    strokeWeight(5);
    textSize(20);
    textAlign(CENTER);
    textStyle(BOLD);
    text("" + resposta2, xresposta2, yresposta2);
    
    ellipse(xrespostaerrada, yrespostaerrada, 2 * rrespostaerrada, 2 * rrespostaerrada);
    fill(240);
    stroke("#222222");
    strokeWeight(5);
    textSize(20);
    textAlign(CENTER);
    textStyle(BOLD);
    text("" + respostaerrada, xrespostaerrada, yrespostaerrada);

    //(jogador);
    fill(215);
    //ellipse(x,y,50,50);
    image(spriteig, xperso2, yperso2, 2 * rperso2, 2 * rperso2);
    spriteig.resize(50, 60);

    //(movimentação do jogador);
    if (keyIsDown(LEFT_ARROW)) {
      xperso2 = xperso2 - 5;
    }

    if (keyIsDown(RIGHT_ARROW)) {
      xperso2 = xperso2 + 5;
    }
        
    if (keyIsDown(UP_ARROW)) {
      yperso2 = yperso2 - 10;
    }
      
    if (keyIsDown(DOWN_ARROW)) {
      yperso2 = yperso2 + 10;
    }

    if (dist(xresposta2, yresposta2, xperso2, yperso2) < rresposta2 + rperso2) {
    tela = 5;
    }
    else if (dist(xrespostaerrada, yrespostaerrada, xperso2, yperso2) < rrespostaerrada + rperso2) {
    tela = 9;
    }
  }
    // Tela win
  else if (tela == 8) {
    background(200);
    image(fundo, 0, 0);

    fill(240);
    stroke("#222222");
    strokeWeight(5);

    textSize(25);
    textAlign(CENTER);
    textStyle(BOLD);
    text("Você conseguiu!", 220, 35);
    
    
    textAlign(CENTER);
    textStyle(BOLD);
    textSize(14);
    fill(200);
    text('Preparado para a proxima fase?\nAgora você pode usar as teclas para subir e descer!', 220, 150);
    
        // Borda (botão)
    if (
      mouseX > xmenu &&
      mouseX < xmenu + largura &&
      mouseY > ymenu1 &&
      mouseY < ymenu1 + altura
    ) {
      stroke(222);
      fill("orange");
      rect(xmenu, ymenu1, largura, altura, 15, 111, 15, 111);
      if (mouseIsPressed) {
        tela = 7;
        nivel = nivel +1;
      }
    }

    // Texto
    textSize(20);
    textAlign(RIGHT);
    textStyle(BOLD);
    fill(240);
    stroke(15);
    text("Continuar", 140, 119);
  }
    // Tela derrota
  else if (tela == 9) {
    background(200);
    image(fundo3, 0, 0);

    fill(240);
    stroke("#222222");
    strokeWeight(5);

    textSize(25);
    textAlign(CENTER);
    textStyle(BOLD);
    text("Você perdeu!", 220, 35);
    
    
    textAlign(RIGHT);
    textStyle(BOLD);
    textSize(15);
    fill(200);
    text('Para jogar novamente, reinicie o jogo.', 350, 150);
}
}

function keyPressed() {
  if (key == "Escape") {
    tela = 1;
  }
  if (key == "f") {
    let fs = fullscreen();
    fullscreen(!fs);
     }
}