let go = document.getElementById("submit");
const api = `https://api.fixer.io/latest?base=`;
let ls = localStorage;

go.addEventListener('click', (e) => {
  let from = document.getElementById("from").value
  let target = document.getElementById("to").value
  let value = document.getElementById("fromvalue").value
  ls.setItem("base", from);
  convert(from, value, target)
  e.preventDefault();
})


function convert(from, value, target) {
  fetch(`${api}${from}`)
    .then((response) => response.json())
    .then((data) => (document.getElementById("showit").innerHTML = ` ${from} ${value}  = ` + `${target} ` + (data.rates.CAD)* value))
    .catch((e) => console.log('something is wrong'))
}


let clearbtn = document.getElementById("clear")

clearbtn.addEventListener('click',(e) =>{
  clear()  
})

function clear()
{
  document.getElementById("from").value = "";
  document.getElementById("to").value = "";
  document.getElementById("fromvalue").value = "";
}



// Currently, it only converts user input currency to one static currency which is CAD.
// I tried various things but I'm not able to use my variable "target" to access the 'rates' object from json
// ex. ((data.rates.target)*value) 
// I could have used if else condition for every specific currency. eg. if(userinput=="GBP") { ..... (data.rates.GBP)*value....}
// But it doesn't seem proper to use that many if else. So I've kept it as it is.



// Please let me know a way to access a property of an object using a variable.



