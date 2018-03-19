var $ = function (id) { return document.getElementById(id); };
var itemArray=["chocolates","biscuits","car"];
var costArray=[25,35.25,57653];
window.onload=function(){
    $("add").onclick=addToTransactions;
    $("display_results").onclick=displayTransactions;

};
function addToTransactions(){
    var itemName=$("item").value;
    var cost=$("cost").value;
    if(itemName=='' || itemName.length==0){
        alert('Item name must not be empty');
    }
    else if(isNaN(cost)){
        alert('Amount should be a number');
    }
    else if(cost <-10000){
    alert('Amount should not be less than -10000');
    }
    else if(cost>10000){
    alert('Amount should not be more than 10000');
    }
    else {
    itemArray.push(itemName);
    costArray.push(parseInt(cost).toFixed(2));//rounded to two decimal places 
    $("item").value='';
    $("cost").value='';
    $("item").focus();
    alert("Data added");
    }
}
function displayTransactions(){
    $("transtable").innerHTML='';
    var  resultsheading= document.createElement("h2");
    var node = document.createTextNode("Transaction Details");
    resultsheading.appendChild(node);
    var element = document.getElementById("transtable");
    element.appendChild(resultsheading);
    
    var x=document.getElementById('transtable').insertRow();
    var c1=x.insertCell(0);
    var c2=x.insertCell(1);  
    
     c1.innerHTML = '<b>' + "Item Name" + '</b>';
      c2.innerHTML = '<b>' + "Amount($)" + '</b>';
     c1.style.fontWeight = "bold";
    c2.style.fontWeight = "bold";
    for(var i=0;i<itemArray.length;i++){

        insertRow(i);
    }

}
function insertRow(i)
{
    var x=document.getElementById('transtable').insertRow();
    var c1=x.insertCell(0);
    var c2=x.insertCell(1);   
    c1.innerHTML=itemArray[i];
    c2.innerHTML=costArray[i];
}
