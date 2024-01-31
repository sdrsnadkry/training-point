// Ecma Script 5 (ES5)
function getName(number) {
    return number * 2;
}

// ES 6

//default paramter
const getTilakBahadur = function(nameArg = "Tilak") {
    return `${nameArg} is a good boy`;
};

// //Arrow function
// const getNamess = (numberArg) => {
//     return numberArg * 5;
// };

// const getName = () => {}

console.log(getTilakBahadur("Suraj"));