document.querySelector("#eq").addEventListener("click",Cal)
function Cal() {
 var n1 =document.querySelector(".input");
 var sol = eval(n1.value);  
 n1.value = sol;

}