const openNav = () => {
  document.getElementById("mySidebar").style.width = "300px";
  document.getElementById("main").style.marginLeft = "300px";
};

const closeNav = () => {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
};

document.addEventListener("click", (event) => {
  const sidebar = document.getElementById("mySidebar");
  const openBtn = document.querySelector(".openbtn");
    const isClickInside = sidebar.contains(event.target) || openBtn.contains(event.target);
  if (!isClickInside) {
    closeNav();
  }
});
