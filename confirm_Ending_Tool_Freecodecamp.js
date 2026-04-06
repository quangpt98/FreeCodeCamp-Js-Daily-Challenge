const confirmEnding = (str1,str2) => str1.slice(str1.length- str2.length) === str2;

// Str1.Length = 11 , Str2.length = 4, 11-4 = 7 => str1.slice(7)
console.log(confirmEnding("Deutschland","land"))
