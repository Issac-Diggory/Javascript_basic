console.log('Hello word');

// let arr =[1, 2, 3, 4, 5, 6, 7, 8 ,9, 10];

// let fillter = arr.filter((item, index) => {
//     console.log(' >>>> check item', item, 'index', index);
//     return item && item > 5; // 
// }  
// );
// console.log(fillter);
// ---------------------------------------------------------------------

let obj = [
    {name : 'Huy', age : 23 },
    {name : 'Isac', age : 30 },
    {name : 'eric', age : 25 },
    {name : 'Digg', age : '23' },
    {name : 'iso', age : '23' }
];
let fil = obj.find((item, index) => {
    return item && item.age === 50;
});
console.log(fil);