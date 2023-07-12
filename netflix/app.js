alert("This page is running");


let forming = document.getElementsByClassName("mailForm")[0];
console.log(forming);

forming.addEventListener("submit",(event)=>{

    // event.preventDefault();
    let inputValue = document.getElementsByName("email")[0].value;
    console.log(inputValue);

    localStorage.setItem("mail_id",inputValue);

});