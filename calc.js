let result = document.getElementById('result');

function insert(num) {
  result.value += num;
}

function clearResult() {
  result.value = '';
  
}
function backspace() {
  if (result.value === "Infinity") {
    result.value = "";
  } else {
    result.value = result.value.slice(0, -1);
  }
}  

function calculate(){
  result.value = eval(result.value);
}



