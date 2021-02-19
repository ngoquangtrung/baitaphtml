let game    =  [[0,0,0,0,0],
                [0,0,0,0,0],
                [0,0,0,0,0],
                [0,0,0,0,0],
                [0,0,0,0,0]];

let x=0;
let y=0;
let snake=[ [0,0],
            [0,1],
            [0,2]];
let mouse=[[1,2],[3,4]];

function render_screen()
{
    
    let table_content="";
    for(let i=0; i<game.length; i++)
    {
        table_content +='<tr>'
        for(let j=0;j<game[i].length;j++)
        {
            let element=game[i][j]
            console.log(element);
            let color="";
            switch(element)
            {
                case 0:
                    color="white";
                    break;
                case 1:
                    color="green";
                    break;
                case 2:
                    color="yellow";
                    break;
                default:
                    color="white";                    
            }
            table_content +='<td width="20" height="20" style="background-color:'+ color + ';" >';
            table_content +=element;
            table_content +='</td>';
        }
        table_content+='</tr>';
    }
    document.getElementById("game_screen").innerHTML=table_content;
}
function turn_right()
{
        game[x][y]=0;
        y++;
        game[x][y]=1;
}
function turn_left()
{
        game[x][y]=0;
        y--;
        game[x][y]=1;
}
function turn_up()
{
        game[x][y]=0;
        x--;
        game[x][y]=1;
}
function turn_down()
{
        game[x][y]=0;
        x++;
        game[x][y]=1;
}
function move_snake()
{    
    if(y<game[x].length-1&&x==0)
    { 
       turn_right();
    }
    else if(x<game.length-1&&y==game[x].length-1)
    {
        turn_down();
    }
    else if(y>0)
    {
        turn_left();        
    }
    else if(x>0)
    {
        turn_up();
    }
    
    render_screen();
}
window.addEventListener("keydown", function(evt){ // Khi người dùng ấn bàn phím
    switch (evt.key) {
        case "ArrowLeft":
            turn_left();
            break;
        case "ArrowRight":
            turn_right();
            break;
        case "ArrowUp":
            turn_up();
            break;
        case "ArrowDown":
           turn_down();
            break;
       
    }

    render_screen();
})

function transform()
{
    for(let i=0;i<snake.length;i++)
    {

    }

}
//setInterval(move_snake,1000);