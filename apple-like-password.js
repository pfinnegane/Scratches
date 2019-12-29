var length = ( 6 * 3 ) - 2;
var output = '';
const reg = RegExp("^(?=.*\d{3})([a-zA-Z0-9]{6})\-([a-zA-Z0-9]{6})\-([a-zA-Z0-9]{6}){1}$");

function apple(length) {
    output = '';

    let chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
    
    for (var i = 0; i <= length; i++) {
        var rnum = Math.floor(Math.random() * chars.length);
        if(i % 6 == 0 && i/5 != 0) output += "-"
        output += chars.substring(rnum,rnum+1);
    }

    return output;
}

do{
    newPassword = apple(length);
} while (newPassword.match(reg) == false)

console.log(newPassword);
