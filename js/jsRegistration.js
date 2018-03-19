var $ = function(id){
    return document.getElementById(id);
};    

function validate(){

    var userName = $("username").value;
    var firstName = $("fname").value;
    var lastName = $("lname").value;
    var userEmail = $("email").value;
    var password= $("pass").value;
    var confirmPassword= $("reppass").value;
    if(password != confirmPassword){
        alert("Password and repeat password are not same, Please try again!!!")
        $("pass").focus();
        return false;
    }
    //    return (validateUserName() && validateFirstLastName());
    return (validateUserName() ? (validateFirstLastName() ? ((validateUserName() ? true : false)) : false): false);


}
function validateEmail(){
    var userEmail = $("email").value;
    var emailRegex = new RegExp("^[A-Za-z]+[@][A-Za-z]+[.][a-z]{2,}");
    if (!emailRegex.test(userEmail)){
        alert("Email contains invalid characters,it should contain @ and . characters");
        return false;
    }
    return true;
}
function validateUserName(){
    var username = $("username").value;

    var unameRegex = new RegExp("^[A-Za-z0-9-_ ]+$");
    if(username.length < 5){
        alert("Username field must be at least 5 characters long");
        return false;
    }
    else if (!unameRegex.test(username)){
        alert("Username field contains invalid characters, only A-Z,a-z,-,_,space allowed");
        return false;
    }
return true;
}
function validateFirstLastName(){

    var firstName = $("fname").value;
    var lastName = $("lname").value;
    var fNameRegex = new RegExp("^[A-Z][a-z0-9 ]*$");
    if(firstName.length < 5){
        alert("Username field must be at least 5 characters long");
        return false;
    }
    else if (!fNameRegex.test(firstName)){
        alert("Firstname contains invalid characters, only A-Z,a-z,-,_,space allowed");
        return false;
    }
    else if(firstName.substring(0,1) != firstName.substring(0,1).toUpperCase()){
        alert("Firstname should start with capital letter");
        return false;
    }


    var lNameRegex = new RegExp("^[A-Z][a-z0-9 ]*$");
    if(lastName.length < 5){
        alert("Lastname field must be at least 5 characters long");
        return false;
    }
    else if (!fNameRegex.test(firstName)){
        alert("Lastname contains invalid characters, only A-Z,a-z,-,_,space allowed");
        return false;
    }
    else if(lastName.substring(0,1) != lastName.substring(0,1).toUpperCase()){
        alert("Lastname should start with capital letter");
        return false;
    }

return true;

}  

