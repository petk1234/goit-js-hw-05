const Account = function(login, email){
    this.login = login;
    this.email = email;
}
Account.prototype.getInfo = function(){
    console.log(this.login);
    console.log(this.email);
}

const mango = new Account('Mango', 'Email_Mango');
const poly = new Account('Poly', 'Email_Poly');
console.log(mango);
mango.getInfo();
console.log(poly);
poly.getInfo();
