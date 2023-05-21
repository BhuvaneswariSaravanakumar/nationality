var heading = document.createElement("h1");
heading.innerHTML="Nationality of the name";
heading.style.color="blue";
heading.style.textAlign ="center";
heading.style.marginTop = "60px";
document.body.append(heading);
var division =document.createElement("div");
division.style.textAlign="center";
division.style.marginTop = "50px;"
var input =document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("id", "name");
input.setAttribute("placeholder", "Ender your name here");
input.style.width="30%";
var linebreak=document.createElement("br");
var buttons =document.createElement("button");
buttons.setAttribute("type", "button");
buttons.innerHTML="Search";
buttons.classList.add("btn", "btn-primary");
buttons.style.marginTop="10px";
buttons.style.textAlign ="center";
buttons.style.height="30px";
buttons.style.width="70px";
buttons.addEventListener("click", foo);
var buttons1 =document.createElement("button");
buttons1.setAttribute("type", "button");
buttons1.innerHTML="Reset";
buttons1.classList.add("btn", "btn-danger");
buttons1.style.marginTop="10px";
buttons1.style.textAlign ="center";
buttons1.style.height="30px";
buttons1.style.width="70px";
buttons1.style.marginLeft="30px";
buttons1.addEventListener("click",but);
division.append(input,linebreak, buttons,buttons1);
document.body.append(division);
var h4 =document.createElement("h4");
h4.setAttribute=("id", "result");
h4.innerHTML="name related two countries and their probabilities";
document.body.append(h4);
var div=document.createElement("div");
document.body.append(div);
div.style.fontsize="20px";
async function foo()
{
    let res= document.getElementById("name").value;
    console.log(res);
    let url =`https://api.nationalize.io/?name=${res}`;
    let res1=await fetch(url);
    let result=await res1.json();
    console.log(result);
   for(i=0;i<2;i++)
   {

console.log(result.country[i].country_id);
console.log(result.country[i].probability);
   

   div.innerHTML+=`
Countrycode:${result.country[i].country_id}<br>
 probability:${result.country[i].probability}<br>
 `
 ;
   
   }
    }
    
function but()
{
  buttons1.style.display="none";

}