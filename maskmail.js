function maskEmail(email){
  const erstchar = 1;
  const skipchar = email.slice(0,erstchar);
  const indexdomain = email.indexOf("@");
  let maskmail = email.slice(erstchar,indexdomain - 1);
  maskmail = maskmail.replace(/./g,"*");

  
  const domain = email.slice(indexdomain -1);

  const final = skipchar + maskmail + domain;
  return final;
};
let email = "abcasds@gmail.com";

console.log(maskEmail(email))