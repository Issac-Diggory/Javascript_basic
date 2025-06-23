console.log('Call back, setTimeout and setInterval');

// let sum =(a, b, callback)=>{
//     let tong = a + b;
//     callback(tong);
// };

// let printSum = (message) =>{
//     console.log('Tổng 2 số 6 + 9 =' , message);
// }

// sum(6, 9, printSum);
// -----------------------------------------------------
// setTimeout
// let sum = (a, b, setTout) => {
//     let tong = a + b;
//     setTimeout(() => {
//         setTout(tong);
//     }, 7000);
// };
// let printSum = (message) =>{
//     console.log('Tong 6 + 9:',message );
// }
// sum(6, 9, printSum);
//-------------------------------------------------------
// setInterval
let sum = (a, b, setIval)=> {
    let tong = a+b;
    let i =0;
    let test = setInterval(() => {
        setIval(tong);
        i++;
        if (i === 5){
            clearInterval(test);
        }
    }, 1000);
};
 let printSum = (message) =>{
    console.log('Tong 6 + 9:',message );
}
sum(6, 9, printSum);
