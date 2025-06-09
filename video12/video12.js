console.log(' Hoc while loops/ do while');

let arr= ['MU', 'Liver', 'ManCity', 'Chelsea'];
//------------------------------------------------------
// for( let i = 0; i <arr.length; i++){
//     console.log('Top: ', arr[i]);
// };
//------------------------------------------------------
// let i = 0;
// while(i< arr.length){
//     console.log('Top', arr[i]);
//     i++
// };
//-------------------------------------------------------
// let i =0;
// do {
//     console.log('TOp', arr[i]);
//     i++;
// }while(i < 5);
//--------------------------------------------------------
    /// Tính tổng số sản phẩm trong dãy sau
// let product = [100, 250,75,300];
// let total = 0;
// for(let i =0; i < product.length; i++){
//     total += product[i];
// }
// console.log(' Tổng sản giá sản phẩm là: ', total);
//--------------------------------------------------------
let number = prompt('Nhập số lớn hơn 0: ');
while (Number(number) <=0 || isNaN(number)){
    console.log('vui lòng Nhập số lơn hơn 0');
};
console.log(" Bạn đã nhậph số", number);