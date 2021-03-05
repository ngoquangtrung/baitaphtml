class ElementRender {
    constructor(renderCallback) {
        this.renderCallback = renderCallback;
    }

    render() {
        this.renderCallback(this);
    }
}

class Hailstone extends ElementRender {
    constructor(x, y, side, downSpeed, renderCallback) {
        super(renderCallback);
        this.x = x;
        this.y = y;
        this.w = side;
        this.h = side;
        this.downSpeed = downSpeed;
        this.key_code=0;
        this.symbol="";
        this.color="";
    }
    moveDown() {
        this.y += this.downSpeed;
    }
    renderCharacter()
    {
            let array_code=[65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90];
            const a=Math.floor(Math.random()*array_code.length);
            console.log(a);
            return array_code[a];
            //let a =1;
        /* let b=array_code[a];
            let c;
            switch(b)
            {
                case 65:
                    c= "A";
                case 66:
                    c= "B";
                case 67:
                    c= "C";
            }
        return c; */
    }

   
}


/* class Player extends ElementRender 
{
    constructor(x, y, side, color, renderCallback) {
        super(renderCallback);
        this.x = x;
        this.y = y;
        this.w = side;
        this.h = side;
        this.color = color;
        this.dx = 0;
        this.dy = 0;
    }

    moveRight() {
        this.dx = 5;
        this.dy = 0;
    }

    moveLeft() {
        this.dx = -5;
        this.dy = 0;
    }

    moveUp() {
        this.dx = 0;
        this.dy = -5;
    }

    moveDown() {
        this.dx = 0;
        this.dy = 5;
    }
} */

class Game 
{
    constructor(window, document) 
    {
        this.window = window;
        this.hailstones = [];
        this.score=0;
        this.lost=0;
        let screen_side_w = 1000;
        let screen_side_h = 630;
        this.canvas = document.getElementById("game_screen"); // tham chiếu đến canvas trên màn hình
        this.canvas.width = screen_side_w;
        this.canvas.height = screen_side_h;        
        this.context = this.canvas.getContext("2d");

        /* const playerRenderCallback = (player) => 
        {
            this.context.fillStyle = player.color;
            player.x += player.dx;
            player.y += player.dy;
            this.context.fillRect(player.x, player.y, player.w, player.h);
        } */

        /* const player_side = 50;
        const xPosition = this.canvas.width / 2 - player_side / 2;
        this.player = new Player(xPosition, this.canvas.height - player_side, player_side, "green", playerRenderCallback);
 */        
        
        this.hailstoneRenderCallback = (hailstone) => 
        {
            this.context.fillStyle = hailstone.color;
            this.context.fillRect(hailstone.x, hailstone.y, hailstone.w, hailstone.h);
            this.context.fillStyle="white";
            this.context.font = hailstone.w + "px Arial";
            this.context.fillText(hailstone.symbol,hailstone.x+8,hailstone.y+42);
        }
        this.createStone();
    } 
    createStone() 
    {
        
        const randomX = Math.floor(Math.random() * (this.canvas.width-50));
        const positionY = 0;
        const hailstone = new Hailstone(randomX, positionY, 52, 3,this.hailstoneRenderCallback);
        const symbol=hailstone.renderCharacter();
        hailstone.symbol=symbol;
        const key_code = Number(hailstone.renderCharacter());
        hailstone.key_code=key_code;
        switch (key_code)
        {
            case 65:                
                hailstone.symbol="A";
                hailstone.color="green"
                break;
            case 66:
                hailstone.symbol="B";
                hailstone.color="red";
                break;
            case 67:
                hailstone.symbol="C";
                hailstone.color="orange";
                break;
            case 68:
                hailstone.symbol="D";
                hailstone.color="orange";
                break;
            case 69:
                hailstone.symbol="E";
                hailstone.color="orange";
                break;
            case 70:
                hailstone.symbol="F";
                hailstone.color="red";
                break; 
            case 71:
                hailstone.symbol="G";
                hailstone.color="red";
                break;
            case 72:
                hailstone.symbol="H";
                hailstone.color="red";
                break;
            case 73:
                hailstone.symbol="I";
                hailstone.color="orange";
                break;
            case 74:
                hailstone.symbol="J";
                hailstone.color="red";
                break;
            case 75:
                hailstone.symbol="K";
                hailstone.color="orange";
                break;
            case 76:
                hailstone.symbol="L";
                hailstone.color="blue";
                break;
            case 77:
                hailstone.symbol="M";
                hailstone.color="red";
                break;
            case 78:
                hailstone.symbol="N";
                hailstone.color="red";
                break;
            case 79:
                hailstone.symbol="O";
                hailstone.color="blue";
                break;
            case 80:
                hailstone.symbol="P";
                hailstone.color="green";
                break;
            case 81:
                hailstone.symbol="Q";
                hailstone.color="green";
                break;
            case 82:
                hailstone.symbol="R";
                hailstone.color="red";
                break;
            case 83:
                hailstone.symbol="S";
                hailstone.color="blue";
                break;
            case 84:
                hailstone.symbol="T";
                hailstone.color="red";
                break;
            case 85:
                hailstone.symbol="U";
                hailstone.color="red";
                break;
            case 86:
                hailstone.symbol="V";
                hailstone.color="red";
                break;
            case 87:
                hailstone.symbol="W";
                hailstone.color="blue";
                break;
            case 88:
                hailstone.symbol="X";
                hailstone.color="blue";
                break;
            case 89:
                hailstone.symbol="Y";
                hailstone.color="red";
                break;
            case 90:
                hailstone.symbol="Z";
                hailstone.color="green";
                break;                
        }
        
        this.hailstones.push(hailstone);
    }
    getScore(score,lost)
    {        
        this.context.fillStyle="green";
        this.context.font = 35 + "px Arial";
        this.context.fillText(score,950,40);
        this.context.fillStyle="red";
        this.context.fillText(lost,950,80);
    }
    /* controlDirection(event) 
    {
        // let KEY_UP = 38;
        // let KEY_DOWN = 40;
        let KEY_RIGHT = 39;
        let KEY_LEFT = 37;
    
        switch (event.keyCode) 
        {
            case KEY_RIGHT:
                this.player.moveRight();
                break;
            case KEY_LEFT:
                this.player.moveLeft();
                break;
            // case KEY_UP:
            //     this.player.moveUp();
            //     break;
            // case KEY_DOWN:
            //     this.player.moveDown();
            //     break;
        }
    } */
    clearScreen() 
    {
        this.context.clearRect(0,0,this.canvas.width, this.canvas.height);
    }

    deleteKeys()
    {
        for(let i=0;i<this.hailstones.length;i++)
        {
            if(this.hailstones[i].y>=this.canvas.height)
            {
                this.lost+=1;
                this.hailstones.splice(i,1);
            }
        }
    }
    repeatRender() 
    {
        this.clearScreen();
        this.getScore(this.score,this.lost);       
        //this.player.render();
        for (let hailstone of this.hailstones) 
        {
            hailstone.moveDown();
            hailstone.render(); 
            this.deleteKeys();           
        }
        
        //if (this.shouldStop()) this.stopRender();
    }
   

    controlKeys(event)
    {        
        let key=event.keyCode;
        console.log(event.keyCode);
        for(let i=0;i<this.hailstones.length;i++)
        {
            if(key===this.hailstones[i].key_code)
            {
            console.log(this.hailstones[i].key_code);
            this.hailstones.splice(i,1);
            this.score+=1;            
            this.clearScreen();
            this.repeatRender();
            //this.getScore(this.score);
            break;
            }
        }
        //this.clearScreen();
        //this.repeatRender();
    }


    /* shouldStop() 
        {
        for (let hailstone of this.hailstones) 
        {
            if (this.isCollision(this.player, hailstone)) return true;
        }
        return false;
        } */

    // xác định va chạm giữa 2 hình chữ nhật.
   /*  isCollision(rect1, rect2) 
    {
        let distX = (rect1.x + (rect1.w/2)) - (rect2.x + (rect2.w)/2);
        if (distX < 0)
            distX = -distX;
    
        const distW = (rect1.w + rect2.w)/2;
    
        let distY =(rect1.y + (rect1.h/2)) - (rect2.y + (rect2.h)/2);
        if(distY < 0)
            distY = -distY;
    
        const distH = p(rect1.h + rect2.h)/2;
    
        return (distX <= distW && distY <= distH);
    }
 */
    stopRender() 
    {
        clearInterval(this.interval);
    }

    begin() 
    {
        //this.player.render();
        let game_loop_time = 20;
        this.window.addEventListener("keydown", this.controlKeys.bind(this));
        this.interval = setInterval(this.repeatRender.bind(this), game_loop_time);
        setInterval(this.createStone.bind(this),1500);
    }
}

let game = new Game(window, document);
game.begin();