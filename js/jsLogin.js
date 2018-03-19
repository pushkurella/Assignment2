var $ = function(id)
{
    return document.getElementById(id);
};
function validate(){

//    var queryString = location.search.substring(1);
//    var regUserName = getParm(queryString,'username');
//    var regFirstName = getParm(queryString,'fname');
//    var regLastName = getParm(queryString,'lname');
//    var regPassword = getParm(queryString,'pass');
//    var regEmail = getParm(queryString,'email');
//    if(regFirstName=="" && regLastName=="" || regEmail==""){
//        alert("Sorry, You have'nt registered!!!")
//
//        return false;
//    }
//    // login fields
//    var username = $("username").value;
//    var password = $("pass").value;
//
//
//    if(username != regUserName){
//        alert("User Authentication failed!!!/n Your username doesn't match with registered username.")
//        return false;
//    }
//     if(username != regUserName || regPassword != password){
//        alert("User Authentication failes!!!/n Your password doesn't match with registered password.")
//        return false;
//    }
    return (validateUserName() && validatePassword());

}
function validateUserName(){
    var username = $("username").value;
    
    var unameRegex = new RegExp("^[A-Za-z0-9-_ ]+$");
    if(username.length < 5){
        alert("Username field must be at least 5 characters long");
        return false;
    }
    else if (!unameRegex.test(username)){
        alert("Username field contains invalid characters, only A-Z,-,_,space allowed");
        return false;
    }
    
}

function validatePassword(){
    
    var password = $("pass").value;

    if(password.length < 5){
        alert("Password field must be at least 5 characters long");
        return false;
    }

    
}             

function getParm(queryString,parm) {
    // returns value of parm from string
    var startPos = queryString.indexOf(parm + "=");
    if (startPos > -1) {
        startPos = startPos + parm.length + 1;
        var endPos = queryString.indexOf("&",startPos);
        if (endPos == -1)
            endPos = queryString.length;
        return unescape(queryString.substring(startPos,endPos));
    }
    return '';
}
function goToRegistration(){

    window.location.href ="Registrationpage.html";
}