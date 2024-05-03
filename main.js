let newX = 0, newY = 0, oldX = 0, oldY = 0;

const card = document.getElementById("card");

card.addEventListener("mousedown", mpuseDown);

function mpuseDown(e){
    oldX = e.clientX;
    oldY = e.clientY;


    document.addEventListener("mousemove", mouseMove);
    document.addEventListener("mouseup", mouseUp);
}

function mouseMove(e){
    newX = e.clientX - oldX;
    newY = e.clientY - oldY;

    card.style.top = card.offsetTop + newY + "px";
    card.style.left = card.offsetLeft + newX + "px";

    oldX = e.clientX;
    oldY = e.clientY;
}

function mouseUp(e){
    document.removeEventListener("mousemove", mouseMove);
    document.removeEventListener("mouseup", mouseUp);
}