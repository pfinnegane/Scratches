"use strict";

const length = ( 6 * 2 ) - 1;
let output = '';
const reg = RegExp("^(?=.*\d{3})([a-zA-Z0-9]{6})\-([a-zA-Z0-9]{6})\-([a-zA-Z0-9]{6}){1}$");
let newPassword;

function apple(length) {
    output = '';

    const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
    
    for (let i = 0; i <= length; i++) {
        let chars_index = Math.floor(Math.random() * chars.length);
        if(i % 4 == 0 && i / 1 != 0) output += "-"
        output += chars.substring(chars_index,chars_index+1);
    }

    return output;
}

do{
    newPassword = apple(length);
} while (newPassword.match(reg) == false)

console.log(newPassword);
