const number = [22, 23, 43, 44, 5, 6];

// console.log(number.length);

// console.log("adadsa")

const newNumbers = number.map((item) => {
    if (item === 43) {
        return 53;
        // console.log("43 aayo");
    }

    return item;
});

// console.log(newNumbers);

const names = ["Suraj", "Anusa"]

const mergedArray = names.concat(number);

// console.log(mergedArray)

const obj = {
    name: "Nikesh"
}

// console.log(obj.hasOwnProperty("Nikesh"))