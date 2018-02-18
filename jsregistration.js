    
function validate(){
    alert("hi");
    var text1 = document.getElementById("fname").value;
    var text2 = document.getElementById("lname").value;
    var user = document.getElementById("email").value;
    var password= document.getElementById("psw").value;
    document.getElementById("demo").innerHTML=text1+text2+user+password;
    sessionStorage.setItem("fname", text1);
    sessionStorage.setItem("lname", text2);
    sessionStorage.setItem("user", user);
    sessionStorage.setItem("pwd", password);
    localStorage.user = user;
    localStorage.password = password;
    alert(text1+text2+user+password);
     
}