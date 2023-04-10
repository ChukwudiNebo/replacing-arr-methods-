// Used a function to accept the array
const arrFunction = (arr) => {
  let array = [];
  for (let i = 0; i < arr.length; i++) {
    const pushArr = array.push(arr[i] * 2);
  }
  // console.log(array);
  return array;
};
console.log(arrFunction([1, 2, 3, 4]));

// i didn't use a function
let numArr = [1, 4, 9];
let Numarray = [];
for (let i = 0; i < numArr.length; i++) {
  Numarray.push(Math.sqrt(numArr[i]));
}
console.log(Numarray);

// modifying the objects in an array
const reformatArray = (objArr) => {
  const { key, value } = objArr;
  let formatArr = [];
  for (let index = 0; index < objArr.length; index++) {
    // console.log([objArr[index].key,objArr[index].value])
    // formatArr.unshift([objArr[index].key,objArr[index].value])
    formatArr.unshift(objArr[index].key, objArr[index].value);
  }
  console.log(formatArr);
};

console.log(
  reformatArray([
    { key: 1, value: 10 },
    { key: 2, value: 20 },
    { key: 3, value: 39 },
  ])
);
