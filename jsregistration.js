    
function validate(){
    
    var firstName = document.getElementById("fname").value;
    var lastName = document.getElementById("lname").value;
    var userEmail = document.getElementById("email").value;
    var password= document.getElementById("pass").value;
    var confirmPassword= document.getElementById("reppass").value;
    if(password != confirmPassword){
        alert("Password and repeat password are not same, Please try again!!!")
        document.getElementById("pass").focus();
        return false;
    }
    
  
     
}

