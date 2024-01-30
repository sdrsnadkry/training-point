/**
 * ? NOTE: PASS BY VALUE AND PASS BY REFERENCE
 */

const student = {
    name: "Simran",
    address: "Thachaina",
    phone: "1234567890",
};
const student2 = {
    name: "Suraj",
    address: "Thachaina",
    phone: "1234567890",
};

// student.name = "Nikesh";
// student.address = "Kathmandu";

const randomObjet = student;
// randomObjet.name = "Nikesh";

const random2 = {...student2 };
random2.name = "Nikesh";

// console.log(random2);

/// array

const arr = [1, 2, 3, 4];
const arr2 = ["1", "2", 3, 4];
const arr3 = [{
        name: "Simran",
        address: "Thachaina",
        phone: "1234567890",
    },
    {
        name: "Nikesh",
        address: "Thachaina",
        phone: "1234567890",
    },
];

// console.log(arr3[0].name)
// const newArray = arr;

// newArray[0] = 500;

// const newArrUpdate = [...arr];

// newArrUpdate[0] = 700

// console.log(newArrUpdate);

//array object

const numbers = [1, 2, 3, 4];

// numbers.push(5);

// console.log(numbers);

// numbers.pop()

// numbers.push(7)

// const numbers2 = [...numbers, 5]

// console.log(numbers[0]);
// console.log(numbers[1]);
// console.log(numbers[2]);
// console.log(numbers[3]);

// console.log(numbers);