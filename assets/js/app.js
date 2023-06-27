'use strict';
let dropzone = document.querySelectorAll(".dropzone");
let boxes = document.querySelectorAll(".box");
for (let box of boxes) {
    box.addEventListener("dragstart", () => {
        let id = box.id;
        for (let dropbox of dropzone) {
            dropbox.ondragover = e => {
                e.preventDefault();
                dropbox.style.borderStyle = "dashed";
            }
            dropbox.ondragleave = () => {
                dropbox.style.borderStyle = "solid";
            }
            dropbox.ondrop = () => {
                dropbox.style.borderStyle = "solid";
                dropbox.append(document.getElementById(id));
                document.querySelector(".mt-4 span").innerHTML = document.querySelector("#DragArea").children.length;
                document.querySelector(".mt-5 span").innerHTML = document.querySelector("#DropArea").children.length;
            }
        }
    })
}