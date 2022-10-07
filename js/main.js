// Auto focus modal input
const modal = document.getElementById("searchModal");
const search = document.getElementById("search");
const header = document.querySelector(".header");

modal.addEventListener("shown.bs.modal", () => {
  search.focus();
});

// Mobile dropdown in sidebar
const drops = document.querySelectorAll(".drop");
// const mobile__dropdowns = document.querySelectorAll(".mobile__dropdown");

drops.forEach((drop) => {
  drop.addEventListener("click", () => {
    drop.classList.toggle("show_menu");
  });
});

// Animate on scroll library initialization
AOS.init();

let list = document.querySelectorAll(".grid_sorting_button");
let itemBox = document.querySelectorAll(".col-container");

for (let i = 0; i < list.length; i++) {
  list[i].addEventListener("click", () => {
    for (let j = 0; j < list.length; j++) {
      list[j].classList.remove("active");
    }
    list[i].classList.add("active");

    for (let k = 0; k < itemBox.length; k++) {
      itemBox[k].classList.remove("active");
      itemBox[k].classList.add("hide");

      let dataFilter = list[i].getAttribute("data-filter");

      if (
        itemBox[k].getAttribute("data-item") === dataFilter ||
        dataFilter === "all"
      ) {
        itemBox[k].classList.remove("hide");
        itemBox[k].classList.add("active");
      }
    }
  });
}
