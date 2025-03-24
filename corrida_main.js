let des = document.getElementById("des").getContext("2d")
let cenario = new Obj(0,0,1200,600,"./img/estrada.png")
let carro = new Player(150,250,100,50,"./img/carrolegal.png")
let mal1 = new Enemy(1150,50,100,50,"./img/carromal1.png")
let mal11 = new Enemy(1150,250,100,50,"./img/carromal1.png")
let mal2 = new Enemy(1150,450,100,50,"./img/carromal2.png")
let mal22 = new Enemy(1150,550,100,50,"./img/carromal2.png")
let t1 = new Text()
let t2 = new Text()
let t3 = new Text()
let t4 = new Text()


let tela = 1

document.addEventListener('keydown',(e)=>{
    // console.log(e.key)
    if(e.key === 'ArrowUp'){
        carro.dirY = -5
    }else if(e.key === 'ArrowDown'){
        carro.dirY = 5
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
        carro.dirX = 5
    }else if(e.key === 'ArrowLeft'){
        carro.dirX = -5
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
    }
})

function colisao(){
    if(carro.colid(mal1)){
        carro.vida -= 1
        mal1.recomeca()
        console.log(carro.vida)
    }else if(carro.colid(mal11)){
        carro.vida -= 1
        mal11.recomeca()
        console.log(carro.vida)
    }else if(carro.colid(mal2)){
        carro.vida -= 1
        mal2.recomeca()
        console.log(carro.vida)
    }else if(carro.colid(mal22)){
        carro.vida -= 1
        mal22.recomeca()
        console.log(carro.vida)
    }

}

function game_over(){
    if(carro.vida <=0){
        tela = 4
        carro.vida = 5
    }
}

function atualizar(){
    carro.mov_carro()
    mal1.mov_enemy()
    mal11.mov_enemy()
    mal2.mov_enemy()
    mal22.mov_enemy()
    colisao()
    game_over()
}

function desenhar(){
    if(tela === 1){
        cenario.des_obj()
        t1.des_text('Vida: ',40,24,'yellow','26px Times')
        t2.des_text(carro.vida,100,24,'yellow','26px Times')
        carro.des_player()
        mal1.des_player()
        mal11.des_player()
        mal2.des_player()
        mal22.des_player()
    }else if(tela === 4){
        t3.des_text('Game Over',500,300,'red','50px Times')
        t4.des_text('Pressione R para recomeçar',500,400,'red','30px Times')
    }
}

function main(){
    des.clearRect(0,0,1200,600)
    desenhar()
    atualizar()
    requestAnimationFrame(main)
}

main()