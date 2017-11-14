var head = document.querySelectorAll("h4");
var container2 = document.querySelectorAll(".container2");

setTimeout(function() {
  container2[0].classList.add("opacity");
}, 500);

for (let i = 0; i < head.length; i++) {
  head[i].addEventListener("click", function() {
    console.log("hi");
    // var container = document.querySelector(`.container2:nth-child(${i})`);
    container2[i].classList.add("opacity");
    if (i > 0) {
      container2[0].classList.remove("opacity");
    };
    if (i > 1) {
      container2[0].classList.remove("opacity");
      container2[1].classList.remove("opacity");
    };
    if (i < 1) {
       container2[1].classList.remove("opacity");
      container2[2].classList.remove("opacity");
    };
    if (i < 2) {
      container2[2].classList.remove("opacity");
    };
  })
}

