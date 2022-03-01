let afficher=()=>{
 let nbr=parseInt(document.getElementById("numberInput").value)
 for(let i=0;i<nbr;i++){
     let requete=new XMLHttpRequest()
     requete.open("get","https://api.chucknorris.io/jokes/random",true)
     requete.onload=function()
     {
         let res=JSON.parse(requete.response);
         let joke=res.value;
         addJoke(joke);
     }
     requete.send();
 }
}
let addJoke=(joke)=>{
    let liste=document.getElementById("liste");
    let li=document.createElement("li");
    li.innerHTML=joke;
    liste.appendChild(li);
}