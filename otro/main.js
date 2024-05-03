const dragItem = document.querySelector(".drag-item");
const dropZone = document.querySelector(".drop-zone");
const div = document.getElementById("card");

div.addEventListener("dragstart", (ev) => {
  ev.dataTransfer.setData("text/plain", div.id);
});

dragItem.addEventListener("dragstart", (ev) => {
    console.log(ev);
  ev.dataTransfer.setData("text/plain", dragItem.id);
});

dropZone.addEventListener("dragover", (ev) => ev.preventDefault());

dropZone.addEventListener("drop", (ev) => {
  const id = ev.dataTransfer.getData("text/plain");
  const item = document.querySelector("#" + id);
  div.draggable = false;
  div.style.position = "fixed";
  dropZone.append(item);
});

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
    div.style.position = "absolute";
    document.removeEventListener("mousemove", mouseMove);
    document.removeEventListener("mouseup", mouseUp);
}

function inner(){
    let lista = document.getElementById("container").children;
    Array.from(lista).forEach(element => {
        document.getElementById("card").setAttribute("value", element.value);
        console.log(element);
        localStorage.setItem("card", element.value);
    });

}
function pintar(){
    const div = document.getElementById("card");
    div.addEventListener("dragstart", (ev) => {
        ev.dataTransfer.setData("text/plain", div.id);
      });
      
      dragItem.addEventListener("dragstart", (ev) => {
          console.log(ev);
        ev.dataTransfer.setData("text/plain", dragItem.id);
      });
      
      dropZone.addEventListener("dragover", (ev) => ev.preventDefault());
      
      dropZone.addEventListener("drop", (ev) => {
        const id = ev.dataTransfer.getData("text/plain");
        const item = document.querySelector("#" + id);
        div.draggable = false;
        div.style.position = "fixed";
        dropZone.append(item);
      });
      
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
          div.style.position = "absolute";
          document.removeEventListener("mousemove", mouseMove);
          document.removeEventListener("mouseup", mouseUp);
      }
      
}