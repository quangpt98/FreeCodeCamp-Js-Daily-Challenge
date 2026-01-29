const maskEmail = (email) => {
    let firstChar = 1;
    let skipfChar = email.slice(0,firstChar);
    let indexDomain = email.lastIndexOf("@");
    let domain = email.slice(indexDomain-1,email.length)
    let maskEmail = email.slice(skipfChar,indexDomain)
    maskEmail = maskEmail.replace(/./g, "*");
    return skipfChar.concat(maskEmail).concat(domain);
};

let email = "thequang.pham@gfn.hoho"

console.log(maskEmail(email));