
var usernum = prompt("Enter table");
var counting = 1;

document.write("<h1 id=heading >Table</h1>")
do{
    document.write(`<div id="table"><h1 align=center id="line">${ usernum + " x " + counting + " = " + usernum * counting }</h1></div>`);
    counting++;
}
while(counting<=10);