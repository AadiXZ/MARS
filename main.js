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
    ctx.drawImage(mars,0,0,canvas.width,canvas.height);
}

function upload_rover()
{
    ctx.drawImage(rover,x,y,rover_width,rover_height);
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