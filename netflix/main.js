

let mail = localStorage.getItem("mail_id");
console.log(mail);
let mailTag = document.getElementsByName("email_id")[0];
mailTag.value = mail;
