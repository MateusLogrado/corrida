class Obj{
    constructor(x,y,w,h,a){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.a = a
    }
    des_obj(){
        let img = new Image()
        img.src = this.a
        des.drawImage(img, this.x, this.y, this.w, this.h)
    }
}

class Player extends Obj{
    dirY = 0
    dirX = 0
    vida = 5
    pts = 0

    des_player(){
        let img = new Image()
        img.src = this.a
        des.drawImage(img, this.x, this.y, this.w, this.h)
    }

    mov_carro(){
        this.x += this.dirX
        this.y += this.dirY
        if(this.y <=1){
            this.y = 1
        }else if(this.y >= 551){
            this.y = 551
        }

        if(this.x <=0){
            this.x = 0
        }else if(this.x >= 1100){
            this.x = 1100
        }
    }

    colid(objeto){
        if((this.x < objeto.x + objeto.w)&&
          (this.x + this.w > objeto.x)&&
          (this.y < objeto.y + objeto.h)&&
          (this.y + this.h > objeto.y)){
            return true
        }else{
            false
        }
    }

    point(objeto){
        if((objeto.x>=100)&&(objeto.x <= 100)){
            return true
        }else{
            false
        }
    }
}

class Enemy extends Player{
    mov_enemy(){
        this.x -= 10
        if(this.x <= 0){
            this.recomeca()
        }
    }

    recomeca(){
        this.x = +1200
        this.y = Math.floor(Math.random() * ((600 - 2 + 1) + 2))
    }

    mov_enemy2(){
        this.y += 7
        console.log(this.y)
        console.log(this.x)
        if(this.y >= 550){
            this.recomeca2()
        }
    }

    recomeca2(){
        this.y = +1
        this.x = Math.floor(Math.random() * ((900 - 2 + 1) + 2))
    }
}

class Text{
    des_text(text,x,y,cor,font){
        des.fillStyle = cor
        des.lineWidth = '5'
        des.font = font
        des.fillText(text,x,y)
    }
}

class Enemy2 extends Player{


}