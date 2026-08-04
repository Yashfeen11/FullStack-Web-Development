function maskEmail(email){
  let extracted_str= email.substring(1,email.indexOf('@')-1);
  let masked = '*'.repeat(extracted_str.length);
  return (email.slice(0,1)+ masked+ email.slice(email.indexOf('@')-1,email.length));

}
let email ="yashfeen6343@gmail.com"
console.log(maskEmail(email))
