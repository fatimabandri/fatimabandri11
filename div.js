function result(){
    let e=document.getElementById("num1").value;

    let y=document.getElementById("num2").value;

    let s= Number(e) + Number(y);

    document.getElementById("result").innerHTML = s;
}
