let boxes = document.querySelectorAll(".innerbox");
const outerContainer = document.getElementsByClassName("outer-grid");
let draw = false


boxes.forEach((box) => {
    box.addEventListener("mouseover", function(){
        box.classList.add("black");
    });
});


function creatBox (){
for (let i = 0; i < 400; i++){
    let box = document.createElement("div");
    box.classList.add("innerbox");
    outerContainer[0].appendChild(box);
}

let boxes = document.querySelectorAll(".innerbox");

boxes.forEach((box) => {
   
    box.addEventListener("mousedown", function(){
        box.classList.add("black");
        draw = true;
    });

    box.addEventListener("mouseup", function(){
        box.classList.add("black");
        draw = false;
    });

    box.addEventListener("mouseover", function(){
        if (draw === false){

        } else if (draw === true){
        box.classList.add("black");
        }
    });
});
}

creatBox()



// function reverseString(string){
//     let joinedString;
// let newString = [];
// for (let i = string.length; i >= 0; i--){
//     newString.push(string[i]);
//     joinedString = newString.join("");
// }
// console.log(joinedString);
// }

// reverseString("abdi majid");

function removeFromArray (arr , arg){
   arr.forEach((item) => {
    if (item === arg){
    let index = arr.indexOf(item);
    arr.splice(index, 1);
    console.log(arr);
    }
   })

}

let emptyArr = [];

while (emptyArr.length < 5){
    console.log("log")
    emptyArr.push("1");
    console.log(emptyArr);
}

// removeFromArray(["A","B","D","I"], "A");