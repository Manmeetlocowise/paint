canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color = "red";
X_coord = 200;
Y_coord = 200;


circle(200, 200, "blue");
circle(300, 200, "black");
circle(400, 200, "red");
circle(250, 230, "yellow");
circle(350, 230, "green");


function circle(X_coord, Y_coord, color) {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 4;
    ctx.arc(X_coord, Y_coord, 40, 0, 360); // x-position, y-position, radius, startangle, endangle
    ctx.stroke();
}

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
    //taking color from input box
    //additional activity start
    color = document.getElementById("color").value;
    // console.log(color);
    //addition activity ends

    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;

    console.log("X = " + mouse_x + " ,Y =  " + mouse_y);
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.arc(mouse_x, mouse_y, 40, 0, 360); // x-position, y-position, radius, startangle, endangle
    ctx.stroke();
    //circle(mouse_x, mouse_y, "blue");
}




//additional activity

function clearArea() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}