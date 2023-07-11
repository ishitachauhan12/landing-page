var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

const pricingSection = document.getElementById("pricing-plans");
let alertShown = false;

window.onscroll = function () {
  const pricingSection = document.getElementById("pricing-plans");
  const scrollPosition = window.scrollY;

  const threshold = pricingSection.offsetTop - 400;

  if (scrollPosition > threshold) {
    if (!alertShown) {
      alert("Would you like to connect?");
      alertShown = true;
    }
  }
};
