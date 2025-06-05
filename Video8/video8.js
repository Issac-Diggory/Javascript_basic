console.log(' hello word from HTML');
// khi khai báo 1 object cần có key: value
// ky chỉ là 1 từ, không có dấu cách ( value thì có thể)
let obj = {
    name: 'Issac',
    address: 'HCM',
    email: '',
    gender:'',
    a: function(){
        console.log( `Object có thể chứa function.` );
        return''
    }
}; // a là một object
let b= 'Issac'; // b alf một string
console.log(`What is your name?
    My name is`,obj.name);
console.log(`Where are you from?
    I'm from`, obj.address);
console.log( ' Display function: ',obj.a() );