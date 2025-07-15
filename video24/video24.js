console.log('Hello word from HTML');

// let arr= [1, 21, 4, 10001, 30];
// arr.sort((a, b) => a - b);
// console.log(arr);

let arr= [
    {name: 'Xuynh', age: 23},
    {name: 'Issac', age: 30},
    {name: 'Huy', age: 18},
    {name: 'My', age: 35}
]
arr.sort((a,b) => {
    if( a.name < b.name) return -1;
    if( a.name > b.name) return 1; 
})
console.log(arr)