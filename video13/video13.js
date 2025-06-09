console.log(' if...else statement. Break and continue');
 let arr= ['Liver', 'ManCity', 'Mu', 'Chelsea'];

 //------- Kiểm tra xem có đủ tuổi để xem phim không
// let age = Number(prompt('Vui lòng nhập số tuổi: '));
// if(isNaN(age)|| age <= 0){
//     console.log('Vui lòng nhập số tuổi cho đúng');
// }
// else if( age >= 18){
//     console.log('Bạn đủ tuổi');
// }
// else{
//     console.log('Cút')
// };

//--------- Tìm sản phẩm có trong kho chưa
let product = ['Chuột', 'bàn phím', 'Màn hình', 'tai nghe'];
let namepro = prompt('Nhập vào tên sản phẩm:');

let search= namepro.toLowerCase();
let found = false;
for(let i = 0; i < product.length; i++){
    if (search === product[i].toLowerCase()){
        console.log('Sản phẩm có trong kho');
        found = true;
        break;
    }
} 
if (!found){console.log('Sản phẩm không có trong kho')};