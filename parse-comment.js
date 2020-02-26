const test_string_1 = "### This is meant to be a comment ### this is out of the comment ### this is another comment ###";
const test_string_2 = "#### This is another comment### This is out of comment ###$ This is a borked comment \n and multiline ###";
const test_string_3 = "### This is the first comment ### ### This is another comment \n but multiline ###";

function test_replaceCommentTags(test_string) {
    let split = test_string.replace(/\r\n|\n|\r/gm, " ").split(' ');

    for ( let i in split) {
        if(split[i] == '###' && i % 2 == 0 && i != 0) {
            split[i] = '-###';
        } else if(split[i] == '###'){
            split[i] = '###-';
        }
    }
    return split;
}

console.log(test_replaceCommentTags(test_string_1));
console.log(test_replaceCommentTags(test_string_2));
console.log(test_replaceCommentTags(test_string_3));
