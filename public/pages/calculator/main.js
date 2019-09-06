
var result = "";

function ButtonClick(text){
    result = result + text;
    document.getElementById("vysledek").innerHTML = result;
}

function CLR(){
    document.getElementById("vysledek").innerHTML = ""
    result = ""
}

function equals(){
    var textboxValue = document.getElementById("vysledek").innerHTML
    result = eval(textboxValue)
    document.getElementById("vysledek").innerHTML = result
}
