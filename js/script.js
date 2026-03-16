const filters = document.querySelectorAll(".filter");
const items = document.querySelectorAll(".gallery-item");

items.forEach(item => {
  if (item.classList.contains("cake")) {
    item.style.display = "block";
  } else {
    item.style.display = "none";
  }
});

filters.forEach(filter => {

  filter.addEventListener("click", () => {

    document.querySelector(".filter.active").classList.remove("active");
    filter.classList.add("active");

    const category = filter.getAttribute("data-filter");

    items.forEach(item => {

      if (item.classList.contains(category)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }

    });

  });

});