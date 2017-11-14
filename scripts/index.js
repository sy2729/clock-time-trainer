// frame work set up
var displayT = document.querySelector("#time");
var secondHand = document.querySelector(".second");
var minuteHand = document.querySelector(".minute");
var hourHand = document.querySelector(".hour");

function setTime() {
  var currentDate = new Date();
  var hour = currentDate.getHours();
  var minute = currentDate.getMinutes();
  var second = currentDate.getSeconds();
  displayT.innerText = hour+":"+minute+":"+second;
  var hourDeg = (minute/60)*30;
  var minuteDeg = (second/60)*6;
  hourHand.style.transform = "rotate("+ (hour * 30 + hourDeg) + "deg)";
  minuteHand.style.transform = "rotate("+ (minute * 6 + minuteDeg) + "deg)";
  secondHand.style.transform = "rotate("+ (second * 6) + "deg)";
};

setInterval(setTime, 1000);

var shade = document.querySelector(".shade");
var removeBtn = document.querySelector("button");
removeBtn.addEventListener("click", function() {
  shade.classList.add("remove");
});



// que1 setting up
var que1HourHand = document.querySelector(".clock1 .squre .hour");
var que1MinuteHand = document.querySelector(".clock1 .squre .minute");
var que1SecondHand = document.querySelector(".clock1 .squre .second");
var btn1 = document.querySelector(".que1 .btn1");
var btn2 = document.querySelector(".que1 .btn2");
var btn3 = document.querySelector(".que1 .btn3");
var assignValue = function(input, assignedTo) {
  assignedTo.style.transform = "rotate("+ input + "deg)";
};


btn1.addEventListener("click", function() {
  var control1 = document.querySelector(".que1 .input1").value;
  var hourDeg = control1*30;
  var control2 = document.querySelector(".que1 .input2").value;
  var minuteDeg = control2*6;
  var control3 = document.querySelector(".que1 .input3").value;
  var secondDeg = control3*6;
  assignValue(hourDeg, que1HourHand);
  assignValue(minuteDeg, que1MinuteHand);
  assignValue(secondDeg, que1SecondHand);
});


// que2 setting up

function setTime2() {
  var displayT = document.querySelector(".time2");
  var secondHand = document.querySelector(".second2");
  var minuteHand = document.querySelector(".minute2");
  var hourHand = document.querySelector(".hour2");
  var currentDate = new Date();
  var hour = currentDate.getHours();
  var minute = currentDate.getMinutes();
  var second = currentDate.getSeconds();
  displayT.innerText = hour+":"+minute+":"+second;
  var hourDeg = (minute/60)*30;
  var minuteDeg = (second/60)*6;
  hourHand.style.transform = "rotate("+ (hour * 30 + hourDeg) + "deg)";
  minuteHand.style.transform = "rotate("+ (minute * 6 + minuteDeg) + "deg)";
  secondHand.style.transform = "rotate("+ (second * 6) + "deg)";
};

setInterval(setTime2, 1000);

var intera2 = document.querySelector(".que2");
var timeFormatChose = intera2.querySelectorAll("input");
for(i = 0; i < timeFormatChose.length; i++) {
  timeFormatChose[i].addEventListener("click", function() {
    var hideClock = document.querySelector(".hideClock");
    var hideText = document.querySelector(".time2");
    var timeFormat = document.querySelector('[name="timeFormat"]:checked').value;
    if (timeFormat === "analog") {
      hideText.classList.toggle("show");
      hideClock.classList.toggle("noShow");
     } else if (timeFormat === "digital") {
       hideText.classList.toggle("show");
       hideClock.classList.toggle("noShow");
     }
  })
}

// que3 setting up
var btnTry = document.querySelector(".btnTry");
var intera3 = document.querySelector(".intera3");
btnTry.addEventListener("click", function() {
  var checkEl = intera3.querySelectorAll('input[type="checkbox"]:checked');
 var checkValue = [];
	for (var checkboxElement of checkEl) {
		checkValue.push(checkboxElement.value);
	}
  if(checkValue.length > 1) {
    alert("please only select one way of showing time lapse at the same time!");
  }else {
    var onlyValue = checkValue[0];
    if (onlyValue === "inHour") {
      showInHour();
    } else {
      showInMinute();
    }
  }
})

var btnReset = document.querySelector(".reset");
btnReset.addEventListener("click", function() {
  reset();
})


var showInHour = function() {
  var secondHand = document.querySelector(".second3");
  var minuteHand = document.querySelector(".minute3");
  var hourHand = document.querySelector(".hour3");
  hourHand.classList.add("hourHand1");
  minuteHand.classList.add("minuteHand1");
  secondHand.classList.add("secondHand1");
}

var showInMinute = function() {
  var secondHand = document.querySelector(".second3");
  var minuteHand = document.querySelector(".minute3");
  var hourHand = document.querySelector(".hour3");
  hourHand.classList.add("hourHand2");
  minuteHand.classList.add("minuteHand2");
  secondHand.classList.add("secondHand2");
}

var reset = function() {
  var secondHand = document.querySelector(".second3");
  var minuteHand = document.querySelector(".minute3");
  var hourHand = document.querySelector(".hour3");
  hourHand.classList.remove("hourHand1");
  minuteHand.classList.remove("minuteHand1");
  secondHand.classList.remove("secondHand1");
  hourHand.classList.remove("hourHand2");
  minuteHand.classList.remove("minuteHand2");
  secondHand.classList.remove("secondHand2");
}


// reflection part
var inputField = document.querySelector("textarea");
var btnSub = document.querySelector(".btnSub");
var present = document.querySelector(".present");
btnSub.addEventListener("click", function() {
  display();
});
inputField.addEventListener("keydown", function(e) {
  var key = e.which || e.keyCode;
    if (key === 13) {
      display();
    }
})

var display = function() {
  var reflection = inputField.value;
  present.innerText = reflection;
  alert("Thanks for submitting your reflection! Your feedback have been recorded!")
}