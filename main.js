var canvas=new fabric.Canvas("myCanvas");
px=10;
py=20;
bheight=30;
bwidth=30;
var po="";
var bo="";

function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        po= Img;
        po.scaleToWidth(150);
        po.scaleToHeight(140);
        po.set({
            top:py,
            left:px

        });
        canvas.add(po);
    });

}
function newImage(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        bo= Img;
        bo.scaleToWidth(bwidth);
        bo.scaleToHeight(bheight);
        bo.set({
            top:py,
            left:px

        });
        canvas.add(bo);
    });

}
window.addEventListener("keydown",kd);
function kd(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey == true && keyPressed == "80"){
        console.log("p and shift pressed");
        bwidth=bwidth + 10; 
        bheight=bheight + 10;
        document.getElementById("cw").innerHTML=bwidth;
        document.getElementById("ch").innerHTML=bheight;
    }

    if(e.shiftKey == true && keyPressed == "77"){
        console.log("m and shift pressed");
        bwidth=bwidth - 10; 
        bheight=bheight - 10;
        document.getElementById("cw").innerHTML=bwidth;
        document.getElementById("ch").innerHTML=bheight;
    }
    if (keyPressed == "37"){
        left();
        console.log("left");
    }
    if (keyPressed == "38"){
        up();
        console.log("up");
    }
    if (keyPressed == "39"){
        right();
        console.log("right");
    }
    if (keyPressed == "40"){
        down();
        console.log("down");
    }
    if(keyPressed == "87"){
        newImage("wall.jpg");
        console.log("w");
    }
    if(keyPressed == "71"){
        newImage("ground.png");
        console.log("g");
    }
    if(keyPressed == "76"){
        newImage("light_green.png");
        console.log("l");
    }
    if(keyPressed == "84"){
        newImage("trunk.jpg");
        console.log("t");
    }
    if(keyPressed == "82"){
        newImage("roof.jpg");
        console.log("r");
    }
    if(keyPressed == "89"){
        newImage("yellow_wall.png");
        console.log("y");
    }
    if(keyPressed == "68"){
        newImage("dark_green.png");
        console.log("d");
    }
    if(keyPressed == "85"){
        newImage("unique.png");
        console.log("u");
    }
    if(keyPressed == "67"){
        newImage("cloud.jpg");
        console.log("c");
    }
    if(keyPressed == "69"){
        newImage("White-Block.png");
        console.log("e");
    }
}

function up(){
    if(py >= 0){
        py = py - bheight;
        canvas.remove(po);
        player_update();
    }
}

function down(){
    if(py < 400){
        py = py + bheight;
        canvas.remove(po);
        player_update();
    }
}

function left(){
    if(px >= 0){
        px = px - bwidth;
        canvas.remove(po);
        player_update();
    }
}

function right(){
    if(px < 700){
        px = px + bwidth;
        canvas.remove(po);
        player_update();
    }
}
    



