let star=document.querySelector(".root")
let a="*";
let count=0;
let spaces=["    ","   ","  "," ",""];
for(let i=1 ;i<11;i++){
    if(i%2!=0){
    console.log(spaces[count],a)
    star.append(a);
    star.innerHTML+="<br>";
    

    count+=1;
}
    a+="*";
}