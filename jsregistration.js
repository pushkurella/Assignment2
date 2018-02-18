    
function validate(){
    
    var text1 = document.getElementById("fname").value;
    var text2 = document.getElementById("lname").value;
    var user = document.getElementById("email").value;
    var password= document.getElementById("pass").value;
    var confirmPassword= document.getElementById("reppass").value;
    if(password != confirmPassword){
        alert("Password and repeat password are not same, Please try again!!!")
        document.getElementById("pass").focus();
        returnTOPreviousPage();
        return false;
    }
    alert(text1+text2+user+password);
  
     
}
function returnTOPreviousPage(){
    window.history.back();
}
