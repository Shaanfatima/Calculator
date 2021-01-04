const backspace=document.getElementById("backspace");
    
function backSpace(){
    calc.txt.value = calc.txt.value.slice(0, - 1);
}

// const on=document.querySelector(".num");

// num.onclick=function(event){
//     event.preventDefault();

//     const data=new FormData(form);
//     data.get(calc.txt.value)
// }