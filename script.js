let username = [];
let useremail = [];
let userpass = [];

function gen() {
    let name1 = document.getElementById("name").value
    let email2 = document.getElementById("email").value
    let password3 = document.getElementById("password").value
    username.push(name1);
    useremail.push(email2);
    userpass.push(password3);

    localStorage.setItem("name", JSON.stringify(username))
    localStorage.setItem("email", JSON.stringify(useremail))
    localStorage.setItem("password", JSON.stringify(userpass))
    
    alert("signed Up succesfully")
    console.log(username)
    console.log(userpass)
    console.log(useremail)




    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";


   

    window.location.href = "login.html";
    return false;
}




let username2 = JSON.parse(localStorage.getItem("name"))
let useremail2 = JSON.parse(localStorage.getItem("email"))
let userpass2 = JSON.parse(localStorage.getItem("password"))
let isfound = false;
function login() {
    var uemail = document.getElementById('uemail').value;
    var upassword = document.getElementById('upassword').value;
    for (i = 0; i < useremail2.length; i++) {
        if (useremail2[i] === uemail) {
            isfound = i;
            break;
        }
    }
    if(isfound === false ){

    alert("Email not found")
    }
     else if (userpass2[i] === upassword) {
         alert("Login succesfully")
         document.getElementById(username2).innerHTML = "Name;"
         document.getElementById(useremail2).innerHTML = "Email;"
         document.getElementById(userpass2).innerHTML = "Password;"
        window.location.href = "feed.html";
    }
    else{
        alert("password incorrect")
    }
    


    return false;

}


