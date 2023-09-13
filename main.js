canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");

rover_width = 100;
rover_height = 90;

mars = "mars.jpg";
rover = "rover.png";

x = 10;
y = 10;

function add()
{
    mars_img = new Image();
    mars_img.onload = upload_mars;
    mars_img.src = mars;

    rover_img = new Image();
    rover_img.onload = upload_rover;
    rover_img.src = rover;
}

function upload_mars()
{
    ctx.drawImage(mars_img,0,0,canvas.width,canvas.height);
}

function upload_rover()
{
    ctx.drawImage(rover_img,x,y,rover_width,rover_height);
}

window.addEventListener("keydown",keydown);

function keydown(e)
{
    keypressed = e.keyCode;
    if (keypressed == "37")
    {
        left();
    }

    if (keypressed == "38")
    {
        up();
    }

    if (keypressed == "39")
    {
        right();
    }

    if (keypressed == "40")
    {
        down();
    }

    
}

function up()
{
    if (y>=0)
    {
        y=y-10;
        upload_mars();
        upload_rover();
    }
}

function down()
{
     if(y<=500)
     {
        y=y+10;
        upload_mars();
        upload_rover();
     }
}

function left()
{
    if(x>=0)
    {
     x=x-10;
     upload_mars();
     upload_rover();
    }
}

function right()
{
    if(x<=600)
    {
        x=x+10;
        upload_mars();
        upload_rover();   
    }
}