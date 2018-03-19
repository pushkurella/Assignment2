
function insertRow(i)
{
    var x=document.getElementById('transtable').insertRow(1);
    var c1=x.insertCell(0);
    var c2=x.insertCell(1);
    var c3=x.insertCell(2);
    var c4=x.insertCell(3);
    c1.innerHTML=i+"2/2018";
    if(i%2==0){
        c2.innerHTML="cash";
        c3.innerHTML="yes";
    }
    else{
        c2.innerHTML="debit card";
        c3.innerHTML="no";
    }
    c4.innerHTML=i*123+"$";
}
for(var i=0;i<10;i++){
    
    insertRow(i);
}