let typeFrom = document.getElementById("typeFrom");
let typeTo = document.getElementById("typeTo");
let res = document.getElementById("res");
let input = document.getElementById("input");
let inputType = document.getElementById("inputType");
let resultType = document.getElementById("resultType");
let error = document.getElementById("error");

const tags = {
  10: "Enter {Decimal}:",
  2: "Enter {Binary}:",
  8: "Enter {Octal}:",
  16: "Enter {HexaDecimal}:"
};

function isValid(value, base) {
  const regexMap = {
    2: /^[01]+$/,
    8: /^[0-7]+$/,
    10: /^\d+$/,
    16: /^[0-9a-fA-F]+$/
  };
  return regexMap[base].test(value);
}

function update() {
  inputType.innerText = tags[typeFrom.value];
  resultType.innerText = "Result {" + typeTo.options[typeTo.selectedIndex].text + "}:";
  error.innerText = "";

  if (!isValid(input.value.trim(), Number(typeFrom.value))) {
    error.innerText = `Invalid ${typeFrom.options[typeFrom.selectedIndex].text} input`;
    res.value = "";
    return;
  }

  res.value = parseInt(input.value, typeFrom.value).toString(typeTo.value).toUpperCase();
}

function reverse() {
  inputType.innerText = tags[typeFrom.value];
  resultType.innerText = "Result {" + typeTo.options[typeTo.selectedIndex].text + "}:";
  error.innerText = "";

  if (!isValid(res.value.trim(), Number(typeTo.value))) {
    error.innerText = `Invalid ${typeTo.options[typeTo.selectedIndex].text} input`;
    input.value = "";
    return;
  }

  input.value = parseInt(res.value, typeTo.value).toString(typeFrom.value).toUpperCase();
}

function clearFields() {
  input.value = "";
  res.value = "";
  error.innerText = "";
}

document.getElementById("themeToggle").addEventListener("change", function () {
  document.body.classList.toggle("dark", this.checked);
});

update();
