let table = document.getElementById("table");
let pinItem = document.getElementsByClassName("pin-item");
let pinArray = Array.from(pinItem);
let result = document.getElementById("result");

let i = 0;
let correctPin = "123456";
let emptyStr = "";

table.onclick = (e) => {
  let values = e.target.value;

  if (e.target.className === "numbers") {
    result.innerText = ""

    if (i <= pinArray.length) {
      pinArray[i].innerText = `${values}`;
      console.log(pinArray.map((e) => e.innerText));
      console.log(pinArray.map((e) => e.innerText).join(""));

      if (pinArray.map((e) => e.innerText).join("") === correctPin) {
        result.innerText = "Your PIN was correct!";
        console.log("Gotcha");
      }

      i = i + 1;
    }

    if (i === pinArray.length) {
      if (pinArray.map((e) => e.innerText).join("") !== correctPin) {
        result.innerText = "Your PIN was incorrect!";
      }

      pinArray.map((e) => (e.innerText = "0"));
      i = 0;
    }
  }
};

document.onkeypress = (e) => {
  console.log(e.key);
};
