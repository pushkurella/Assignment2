function validate(){
        alert('hi');
var queryString = location.search.substring(1);
var firstName = getParm(queryString,'fname');
var lastName = getParm(queryString,'lname');
var password = getParm(queryString,'pass');
var repeatPassword = getParm(queryString,'reppass');
var email = getParm(queryString,'email');
alert(firstName+lastName+password+repeatPassword+email);
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