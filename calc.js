let result = document.getElementById('result');

function insert(num) {
  const lastChar = result.value.charAt(result.value.length - 1);
  if (isNaN(lastChar) && isNaN(num)) {
    // Do nothing if the last character and the current input are both non-numeric.
    return;
  }
  result.value += num;
}

function clearResult() {
  result.value = '';
}

function backspace() {
  if (result.value === "Infinity") {
    result.value = "";
  }
  else if (result.value==="undefined"){
    result.value ="";
  }
  else {
    result.value = result.value.slice(0, -1);
  }
}

function calculate() {
  result.value = eval(result.value);
}

function calculateAge() {
  const today = new Date();
  const birthDate = new Date(result.value);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  result.value = age;
}
