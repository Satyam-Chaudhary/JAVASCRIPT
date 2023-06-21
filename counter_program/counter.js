let cout = 0;

document.getElementById("decrease").onclick = function(){
    cout -= 1;
    document.getElementById("countlabel").innerHTML = cout;
}

document.getElementById("reset").onclick = function(){
    cout = 0;
    document.getElementById("countlabel").innerHTML = cout;
}

document.getElementById("increase").onclick = function(){
    cout += 1;
    document.getElementById("countlabel").innerHTML = cout;
}