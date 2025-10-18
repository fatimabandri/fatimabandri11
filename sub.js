function result(){
    let f=document.getElementById("num1").value;

    let g=document.getElementById("num2").value;

    let z= Number(f) + Number(g);

    document.getElementById("result").innerHTML = z;
}
