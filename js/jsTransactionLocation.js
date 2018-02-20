
var transactions=[]
transactions[0]={itemName:"Fridge", cost:32, date:"March 12, 2000",location:"Kitchener"}
transactions[1]={itemName:"Laptop", cost:982, date:"January 12,2010",location:"Waterloo"}
transactions[2]={itemName:"Horse", cost:432, date:"February 12, 2007",location:"Guelph"}
transactions[3]={itemName:"Bike", cost:356, date:"April 12, 2014",location:"Cambridge"}
transactions[4]={itemName:"Car", cost:652, date:"June 12, 1994",location:"Toronto"}

transactions.sort(function(a, b){
    var nameA=a.location.toLowerCase(), nameB=b.location.toLowerCase()
    if (nameA < nameB) //sort string ascending
        return -1 
    if (nameA > nameB)
        return 1
    return 0 //default return value (no sorting)
})
transactions.reverse();
function insertRow(i)
{
    var x=document.getElementById('transtable').insertRow(1);
    var c1=x.insertCell(0);
    var c2=x.insertCell(1);
    var c3=x.insertCell(2);
    var c4=x.insertCell(3);
    c1.innerHTML=transactions[i].itemName;
    c2.innerHTML=transactions[i].date;
    c3.innerHTML=transactions[i].cost+"$";
    c4.innerHTML=transactions[i].location;
}
for(var i=0;i<4;i++){
    
    insertRow(i);
}