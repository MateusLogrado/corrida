let des = document.getElementById("des").getContext("2d")

let cenario = new Bg(0,0,1200,600,"./img/estrada.PNG")
let cenario2 = new Bg(1200,0,1200,600,"./img/estrada.PNG")
let cenario3 = new Bg(2400,0,1200,600,"./img/estrada.PNG")
let inicio = new Obj(0,0,1200,600, "./img/desert.PNG")

let carro = new Player(150,250,100,50,"./img/carrolegal.PNG")

let mal1 = new Enemy(1050,50,100,50,"./img/carromal1.png")
let mal11 = new Enemy(1890,250,100,50,"./img/carromal1.png")
let mal2 = new Enemy(1610,450,100,50,"./img/carromal2.png")
let mal22 = new Enemy(2190,550,100,50,"./img/carromal2.png")

let policia = new Enemy(3050,550,100,50,"./img/policia.png")
let policia2 = new Enemy(2410,550,100,50,"./img/policia.png")

let lata = new Enemy(600,1,30,50, "./img/lixo.png")
let lata2 = new Enemy(600,70,30,50, "./img/lixo.png")
let lata3 = new Enemy(600,10,30,50, "./img/lixo.png")
let lata4 = new Enemy(600,40,30,50, "./img/lixo.png")

let t1 = new Text()
let t2 = new Text()

let t3 = new Text()
let t4 = new Text()

let t5 = new Text()
let t6 = new Text()

let tInicio1 = new Text()
let tInicio2 = new Text()

let musicaInicial = new Audio("./sound/tela_inicial.wav")
let gameOver = new Audio("./sound/gameOver.wav")
let motor = new Audio("./sound/motor.wav")
let crash = new Audio("./sound/crash.map3")
crash.volume = 0.5
motor.loop = true
motor.volume = 0.5
gameOver.volume = 0.4
gameOver.loop = true
musicaInicial.volume = 0.6
musicaInicial.loop = true

let tela = 0

document.addEventListener('keydown',(e)=>{
    // console.log(e.key)
    if(e.key === 'ArrowUp'){
        carro.dirY = -7
    }else if(e.key === 'ArrowDown'){
        carro.dirY = 7
    }
})
document.addEventListener('keyup', (e)=>{
    if(e.key === 'ArrowUp'){
        carro.dirY = 0
    }else if(e.key === 'ArrowDown'){
        carro.dirY = 0
    }
})

document.addEventListener('keydown',(e)=>{
    // console.log(e.key)
    if(e.key === 'ArrowRight'){
        carro.dirX = 7
    }else if(e.key === 'ArrowLeft'){
        carro.dirX = -7
    }
})
document.addEventListener('keyup', (e)=>{
    if(e.key === 'ArrowRight'){
        carro.dirX = 0
    }else if(e.key === 'ArrowLeft'){
        carro.dirX = 0
    }
})

document.addEventListener('keydown',(e)=>{
    // console.log(e.key)
    if(e.key === 'r'){
        tela = 1
        mal1.recomeca()
        mal11.recomeca()
        mal2.recomeca()
        mal22.recomeca()
        carro.x = 150
        carro.y = 250
        carro.vida = 5
        carro.pts = 0
        gameOver.pause()
    }
})

function pontos(){
    if(carro.point(mal1)){
        carro.pts +=1
        console.log(carro.pts)
    }else if(carro.point(mal11)){
        carro.pts += 1
        console.log(carro.pts)
    }else if(carro.point(mal2)){
        carro.pts += 1
        console.log(carro.pts)
    }else if(carro.point(mal22)){
        carro.pts += 1
        console.log(carro.pts)
    }

    if(carro.pts % 25 === 0){
        carro.vida = 5
    }
}

function colisao(){
    if(carro.colid(mal1)){
        crash.play()
        carro.vida -= 1
        mal1.recomeca()
        console.log("mal1")
    }else if(carro.colid(mal11)){
        crash.play()
        carro.vida -= 1
        mal11.recomeca()
        console.log("mal11")
    }else if(carro.colid(mal2)){
        crash.play()
        carro.vida -= 1
        mal2.recomeca()
        console.log("mal2")
    }else if(carro.colid(mal22)){
        crash.play()
        carro.vida -= 1
        mal22.recomeca()
        console.log("mal22")
    }else if(carro.colid(policia)){
        crash.play()
        carro.vida -= 1
        policia.recomeca()
        console.log("policia")
    }else if(carro.colid(policia2)){
        crash.play()
        carro.vida -= 1
        policia2.recomeca()
        console.log("policia2")
    }else if(carro.colid(lata)){
        crash.play()
        carro.vida -= 1
        lata.recomeca()
    }else if(carro.colid(lata2)){
        crash.play()
        carro.vida -= 1
        lata2.recomeca()
    }else if(carro.colid(lata3)){
        crash.play()
        carro.vida -= 1
        lata3.recomeca()
    }else if(carro.colid(lata4)){
        crash.play()
        carro.vida -= 1
        lata4.recomeca()
    }

}

function game_over(){
    if(carro.vida <=0){
        motor.pause()
        tela = 4
        carro.pts = 0
    }
}

function fase2(){
    if(carro.pts === 20){
        tela = 2
    }
}

function fase3(){
    if(carro.pts === 50){
        tela = 3
    }
}

function atualizar(){
    if(tela === 0 ){
        musicaInicial.play()
        inicio.des_obj()
        tInicio1.des_text("Desert Race", 340, 160, "#C2B280", "100px Times")
        tInicio2.des_text("Aperte R para começar", 360, 500, "#C2B280", "50px Times")
    }else if(tela === 1){
        motor.play()
        musicaInicial.pause()
        cenario.mov()
        cenario2.mov()
        cenario3.mov()
        carro.mov_carro()
        mal1.mov_enemy()
        mal11.mov_enemy()
        mal2.mov_enemy()
        mal22.mov_enemy()
        colisao()
        game_over()
        pontos()
        fase2()
        fase3()
    }else if(tela === 2){
        cenario.mov()
        cenario2.mov()
        cenario3.mov()
        carro.mov_carro()
        mal1.mov_enemy()
        mal11.mov_enemy()
        mal2.mov_enemy()
        mal22.mov_enemy()
        colisao()
        game_over()
        pontos()
        fase2()
        fase3()
        policia.mov_enemy()
        policia2.mov_enemy()
    }else if(tela === 3){
        cenario.mov()
        cenario2.mov()
        cenario3.mov()
        carro.mov_carro()
        mal1.mov_enemy()
        mal11.mov_enemy()
        mal2.mov_enemy()
        mal22.mov_enemy()
        colisao()
        game_over()
        pontos()
        fase2()
        fase3()
        lata.mov_enemy2()
        lata2.mov_enemy2()
        lata3.mov_enemy2()
        lata4.mov_enemy2()
        policia.mov_enemy()
        policia2.mov_enemy()
    }
}

function desenhar(){
    if(tela === 0){
        inicio.des_obj()
        tInicio1.des_text("Desert Race", 340, 160, "#C2B280", "100px Times")
        tInicio2.des_text("Aperte R para começar", 360, 500, "#C2B280", "50px Times")
    }else if(tela === 1){
        cenario.des_obj()
        cenario2.des_obj()
        cenario3.des_obj()
        t1.des_text('Vida: ',40,24,'black','26px Times')
        t2.des_text(carro.vida,100,24,'black','26px Times')
        t4.des_text("Pontos: ", 1000, 24, "black", "26px Times")
        t4.des_text(carro.pts, 1090, 24, "black", "26px Times")
        t5.des_text("Fase: ", 500, 24, "black", "26px Times")
        t6.des_text(tela, 570, 24, "black", "26px Times")
        carro.des_player()
        mal1.des_player()
        mal11.des_player()
        mal2.des_player()
        mal22.des_player()
    }else if(tela === 4){
        gameOver.play()
        t3.des_text('Game Over',500,300,'red','50px Times')
        t4.des_text('Pressione R para recomeçar',500,400,'red','30px Times')
    }else if(tela === 2){
        cenario.des_obj()
        cenario2.des_obj()
        cenario3.des_obj()
        t1.des_text('Vida: ',40,24,'black','26px Times')
        t2.des_text(carro.vida,100,24,'black','26px Times')
        t4.des_text("Pontos: ", 1000, 24, "black", "26px Times")
        t4.des_text(carro.pts, 1090, 24, "black", "26px Times")
        t5.des_text("Fase: ", 500, 24, "black", "26px Times")
        t6.des_text(tela, 570, 24, "black", "26px Times")
        carro.des_player()
        mal1.des_player()
        mal11.des_player()
        mal2.des_player()
        mal22.des_player()
        policia.des_player()
        policia2.des_player()
    }else if(tela === 3){
        cenario.des_obj()
        cenario2.des_obj()
        cenario3.des_obj()
        t1.des_text('Vida: ',40,24,'black','26px Times')
        t2.des_text(carro.vida,100,24,'black','26px Times')
        t4.des_text("Pontos: ", 1000, 24, "black", "26px Times")
        t4.des_text(carro.pts, 1090, 24, "black", "26px Times")
        t5.des_text("Fase: ", 500, 24, "black", "26px Times")
        t6.des_text(tela, 570, 24, "black", "26px Times")
        carro.des_player()
        mal1.des_player()
        mal11.des_player()
        mal2.des_player()
        mal22.des_player()
        policia.des_player()
        policia2.des_player()
        lata.des_player()
        lata2.des_player()
        lata3.des_player()
        lata4.des_player()
    }    
}

function main(){
    des.clearRect(0,0,1200,600)
    atualizar()
    desenhar()
    requestAnimationFrame(main)
}

main()