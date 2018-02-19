function validate(){
        alert('hi');
var queryString = location.search.substring(1);
var regFirstName = getParm(queryString,'fname');
var regLastName = getParm(queryString,'lname');
var regPassword = getParm(queryString,'pass');
var regEmail = getParm(queryString,'email');
      if(regFirstName=="" && regLastName=="" && regEmail==""){
        alert("Sorry, You have'nt registered!!!")
        
        return false;
      }
// login fields
    var email = document.getElementById("email").value;
    var password = document.getElementById("pass").value;
    
    
    if(email != regEmail || regPassword != password){
        alert("User Authentication failes!!!/n Please Register.")
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