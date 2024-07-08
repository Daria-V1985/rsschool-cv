const anchors = document.querySelectorAll(".menu-list__item > a");

anchors.forEach((anc) => {
  anc.addEventListener("click", function (e) {
    e.preventDefault();

    const id = anc.getAttribute("href");
    const elem = document.querySelector(id);

    window.scroll({
      top: elem.offsetTop,
      behavior: "smooth",
    });
  });
});
