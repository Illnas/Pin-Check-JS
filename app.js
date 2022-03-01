let table = document.getElementById("table");
let pinItem = document.getElementsByClassName("pin-item");
let pinArrays = Array.from(pinItem);
let result = document.getElementById("result");

let i = 0;
let correctPin = "123456";
let emptyStr = "";
let pinArray = [];

table.onclick = (e) => {
  let values = e.target.value;
  pinArray.push(values);

  if (e.target.className === "numbers") {
    result.innerText = "";

    if (i <= 6) {
      pinArrays[i].style.backgroundColor = "blue";
      i = i + 1;
      if (pinArray.map((e) => e).join("") === correctPin) {
        result.innerText = "Your PIN was correct!";
        console.log("Gotcha");
        pinArrays.map((e) => (e.style.backgroundColor = "white"));
        pinArray = []
        i = 0;
      }
    }

    if (i >= 6) {
      if (pinArray.map((e) => e).join("") !== correctPin) {
        result.innerText = "Your PIN was incorrect!";
        pinArrays.map((e) => (e.style.backgroundColor = "white"));
        pinArray = []
        i = 0;
      }
     
    }
    
  }
};

document.onkeypress = (e) => {
  console.log(e.key);
};
