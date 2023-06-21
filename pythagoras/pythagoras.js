// let hypotenuse , base, height;

// base= window.prompt("Enter base: ");
// base = Number(base);

// height = window.prompt("Enter height ");
// height = Number(height);

// hypotenuse = Math.sqrt(Math.pow(base,2) + Math.pow(height,2));

// console.log("Hypotenuse is " + hypotenuse);

let a ,b ,c;

// input are commonly string unless specified
// if we don't give type as number in input but as text then we have to convert the string data type to number

document.getElementById("submit").onclick = function(){
    
    a = document.getElementById("a").value;
    a = Number(a);

    b = document.getElementById("b").value;
    b = Number(b);

    c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));
    
    console.log(c);

    document.getElementById("c").innerHTML = "Hypotenuse is: " + c;
}






