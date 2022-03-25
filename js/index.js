const nav = document.getElementById("portfolioNav");
const tabs = nav.getElementsByClassName("myTab");

for (var i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");

    current[0].className = current[0].className.replace("active", "");

    this.className += "active";
  });
}
