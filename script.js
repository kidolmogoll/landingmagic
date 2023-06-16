document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    initApp();
  }
});

const initApp = () => {
  // dropDown function
  const dropDown = document.querySelector(".dropdown-nav-links");
  const dropDownIcon = document.querySelector(".drop-down-icon");
  const dropDownIconClose = document.querySelector(".drop-down-icon-close");

  dropDownIcon.onclick = () => {
    dropDown.classList.add("active");
    dropDownIcon.style.display = "none";
    dropDownIconClose.style.display = "block";
  };

  dropDownIconClose.onclick = () => {
    dropDown.classList.remove("active");
    dropDownIcon.style.display = "block";
    dropDownIcon.style.transform = "none";
    dropDownIconClose.style.display = "none";
  };
};
