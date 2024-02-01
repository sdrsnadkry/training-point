// // const header = document.getElementsByTagName('h1')
// // const header = (document.getElementById("headers").style.color = "blue");

// // console.log(header);

// const a = 5;

let color = "blue";

const button = document
    .getElementById("color-button")

.addEventListener("click", () => {
    if (color === "blue") {
        color = "red";
        document.getElementById("headers").style.color = color;
    } else if (color === "red") {
        color = "blue";
        document.getElementById("headers").style.color = color;
    }
});

// console.log(button);

const onButtonCLick = () => {
    if (color === "blue") {
        color = "red";
        document.getElementById("headers").style.color = color;
    } else if (color === "red") {
        color = "blue";
        document.getElementById("headers").style.color = color;
    }
};