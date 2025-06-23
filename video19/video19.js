console.log('Function vs Method');

let obj = {
    name : 'Issac',
    address: 'Ben Tre',
    getName: function(){
        return this.name;
    }
};
console.log('My name is', obj.getName());

/// -------- trong java getName đc hiểu là một method và không bao giờ đứng 1 mình, nó nằm bên
///--------- trong 1 class