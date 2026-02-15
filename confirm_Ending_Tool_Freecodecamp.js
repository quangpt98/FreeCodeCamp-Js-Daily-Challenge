const confirmEnding = (str1,str2) => {
    return str1.slice(str1.length- str2.length) === str2;
};

console.log(confirmEnding("Deutschland","land"))