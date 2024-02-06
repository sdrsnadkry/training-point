// function getValuesFromServer() {
//     //Promises
// }

// const delayedTask = new Promise((resolve, reject) => {

//     // setTimeout(() => {
//     //     resolve("Task is done!")
//     // }, 3000)
// })

// delayedTask.then((value) => {
//     console.log(value)
// })

fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((json) => {
        const array = [];
        //value store json data

        // create html ul li <ul>


        array.forEach((value) => {
            //append child to ul <li></li>
        });

    });