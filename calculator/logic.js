document.querySelector('#equal').addEventListener('click',calculate);
document.querySelector('#AC').addEventListener('click',clear);
function newvalue(val)
{
    console.log("Function called");
    document.getElementById('expression').value=document.getElementById('expression').value+val ;
}
function calculate()
{
    var x=document.getElementById('expression').value;
    document.getElementById('expression').value = eval(document.getElementById('expression').value);
}
function clear()
{
    document.getElementById('expression').value = "";
}

