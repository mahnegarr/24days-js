const startBtn = document.querySelector(".start");
const settingsBtn = document.querySelector(".settings");
const minute = document.getElementById("minute");
const second = document.getElementById("second");
const minutesDiv = document.querySelector(".minutes");
const secondsDiv = document.querySelector(".seconds");
const ring = document.querySelector(".ring");
let timeInterval;
let minuteValue, secondValue;

function toggle() {
  startBtn.innerHTML = startBtn.innerHTML === "start" ? "stop" : "start";
  if (startBtn.innerHTML === "stop") {
    timer();
  } else {
    stopTimer();
  }
  settingsBtnFunc();
}

function timer() {
  minuteValue = parseInt(minute.value);
  secondValue = parseInt(second.value) || 0;

  timeInterval = setInterval(() => {
    if (secondValue === 0) {
      if (minuteValue === 0) {
        clearInterval(timeInterval);
        startBtn.innerHTML = "start";
        ring.classList.add("ending");
        setTimeout(() => {
          minute.value = minuteValue.toString().padStart(2, "0");
          second.value = secondValue.toString().padStart(2, "0");
          ring.classList.remove("ending");
          alert("Time's Up!");
        }, 500);
        return;
      } else {
        minuteValue--;
        secondValue = 59;
      }
    } else {
      secondValue--;
    }

    minutesDiv.innerHTML = minuteValue.toString().padStart(2, "0");
    secondsDiv.innerHTML = secondValue.toString().padStart(2, "0");
  }, 1000);
}

function stopTimer() {
  clearInterval(timeInterval);
}

startBtn.addEventListener("click", toggle);

function settingsBtnFunc() {
  minute.removeAttribute("disabled");
  second.removeAttribute("disabled");
  minute.addEventListener("focusout", (e) => {
    minuteValue = e.target.value || 0;
    minutesDiv.innerHTML =
      minuteValue < 10 ? minuteValue.toString().padStart(2, "0") : minuteValue;
    minutesDiv.innerHTML = minuteValue > 60 ? "00" : minuteValue;
  });
  second.addEventListener("focusout", (e) => {
    secondValue = e.target.value;
    secondsDiv.innerHTML =
      secondValue < 10 ? secondValue.toString().padStart(2, "0") : secondValue;

    secondsDiv.innerHTML = secondValue > 60 ? "00" : secondsDiv;
  });
}

settingsBtn.addEventListener("click", settingsBtnFunc);
